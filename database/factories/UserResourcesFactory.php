<?php

namespace Database\Factories;

use App\Models\ResourceType;
use App\Models\User;
use App\Models\UserResource;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<UserResource>
 */
class UserResourcesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'resource_types_id' => 1,
            'quantity' => $this->faker->numberBetween(1, 10000),

        ];
    }
}
