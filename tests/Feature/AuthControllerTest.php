<?php
namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;

class AuthControllerTest extends TestCase
{
use RefreshDatabase;

public function test_signup()
{
$response = $this->postJson('/api/signup', [
'name' => 'Test User',
'email' => 'test@example.com',
'password' => 'password',
'password_confirmation' => 'password',
]);

$response->assertStatus(201)
->assertJsonStructure(['user', 'token']);
}

public function test_login()
{
$user = User::factory()->create([
'email' => 'test@example.com',
'password' => bcrypt('password'),
]);

$response = $this->postJson('/api/login', [
'email' => 'test@example.com',
'password' => 'password',
]);

$response->assertStatus(200)
->assertJsonStructure(['token']);
}

public function test_logout()
{
$user = User::factory()->create();
$token = $user->createToken('auth_token')->plainTextToken;

$response = $this->withHeaders([
'Authorization' => 'Bearer ' . $token,
])->postJson('/api/logout');

$response->assertStatus(204);
}
}
