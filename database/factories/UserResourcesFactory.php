<?php

namespace Database\Factories;

use App\Models\ResourcesTypes;
use App\Models\User;
use App\Models\UserResources;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<UserResources>
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
            'resources_types_id' => 1,
            'quantity' => $this->faker->numberBetween(1, 10000),

        ];
    }
}
