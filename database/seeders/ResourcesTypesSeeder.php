<?php

namespace Database\Seeders;

use App\Models\ResourcesTypes;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ResourcesTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ResourcesTypes::create([
            'name' => 'Food',
            'description' => 'Food is a resource that is consumed by the people to stay alive and as a currency',
        ]);
        ResourcesTypes::create([
            'name' => 'Territory',
            'description' => 'Fortified and reclaimed land, cleared of all zombie threats.',
        ]);
    }
}
