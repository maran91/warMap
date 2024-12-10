<?php

namespace Database\Seeders;

use App\Models\UserResources;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserResourcesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserResources::factory()->count(10)->create();

    }
}
