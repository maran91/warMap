<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('unit_types', function (Blueprint $table) {
            $table->id();
            $table->string('unit_type')->unique();
            $table->text('description')->nullable();
            $table->integer('attack');
            $table->integer('defense');
            $table->integer('health');
            $table->integer('price_in_food');
            $table->integer('price_in_gold');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });

        DB::table('unit_types')->insert([
            [
                'unit_type' => 'Soldier',
                'description' => 'Most basic soldier',
                "attack" => 1,
                "defense" => 1,
                "health" => 5,
                "price_in_food" => 5,
                "price_in_gold" => 0,
                "created_at" => now(),
                "updated_at" => now()
            ]
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('unit_types');
    }
};
