<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('map_locations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained();
            $table->string('name')->unique()->nullable();
            $table->integer('address');
            $table->string('governor')->nullable();
            $table->integer('soldier_count')->nullable()->unsigned();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
        DB::table('map_locations')->insert([
            [
                'user_id' => null,
                'name' => 'city 1',
                'address' => 1,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 2',
                'address' => 2,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 3',
                'address' => 3,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 4',
                'address' => 4,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 5',
                'address' => 5,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 6',
                'address' => 6,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 7',
                'address' => 7,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 8',
                'address' => 8,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 9',
                'address' => 9,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 10',
                'address' => 10,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 11',
                'address' => 11,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 12',
                'address' => 12,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 13',
                'address' => 13,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 14',
                'address' => 14,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 15',
                'address' => 15,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 16',
                'address' => 16,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 17',
                'address' => 17,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 18',
                'address' => 18,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 19',
                'address' => 19,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 20',
                'address' => 20,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 21',
                'address' => 21,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 22',
                'address' => 22,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 23',
                'address' => 23,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 24',
                'address' => 24,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 25',
                'address' => 25,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 26',
                'address' => 26,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 27',
                'address' => 27,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 28',
                'address' => 28,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 29',
                'address' => 29,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 30',
                'address' => 30,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 31',
                'address' => 31,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 32',
                'address' => 32,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 33',
                'address' => 33,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 34',
                'address' => 34,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 35',
                'address' => 35,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 36',
                'address' => 36,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 37',
                'address' => 37,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 38',
                'address' => 38,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 39',
                'address' => 39,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 40',
                'address' => 40,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 41',
                'address' => 41,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 42',
                'address' => 42,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 43',
                'address' => 43,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 44',
                'address' => 44,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 45',
                'address' => 45,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 46',
                'address' => 46,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 47',
                'address' => 47,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 48',
                'address' => 48,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 49',
                'address' => 49,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 50',
                'address' => 50,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 51',
                'address' => 51,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 52',
                'address' => 52,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 53',
                'address' => 53,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 54',
                'address' => 54,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 55',
                'address' => 55,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 56',
                'address' => 56,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 57',
                'address' => 57,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 58',
                'address' => 58,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 59',
                'address' => 59,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 60',
                'address' => 60,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 61',
                'address' => 61,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 62',
                'address' => 62,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 63',
                'address' => 63,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 64',
                'address' => 64,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 65',
                'address' => 65,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 66',
                'address' => 66,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 67',
                'address' => 67,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 68',
                'address' => 68,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 69',
                'address' => 69,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 70',
                'address' => 70,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 71',
                'address' => 71,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 72',
                'address' => 72,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 73',
                'address' => 73,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 74',
                'address' => 74,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 75',
                'address' => 75,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 76',
                'address' => 76,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 77',
                'address' => 77,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 78',
                'address' => 78,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 79',
                'address' => 79,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 80',
                'address' => 80,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 81',
                'address' => 81,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 82',
                'address' => 82,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 83',
                'address' => 83,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 84',
                'address' => 84,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 85',
                'address' => 85,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 86',
                'address' => 86,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 87',
                'address' => 87,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 88',
                'address' => 88,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 89',
                'address' => 89,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 90',
                'address' => 90,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 91',
                'address' => 91,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 92',
                'address' => 92,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 93',
                'address' => 93,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 94',
                'address' => 94,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 95',
                'address' => 95,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 96',
                'address' => 96,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 97',
                'address' => 97,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 98',
                'address' => 98,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 99',
                'address' => 99,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => null,
                'name' => 'city 100',
                'address' => 100,
                'governor' => '',
                'soldier_count' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('map_locations');
    }
};
