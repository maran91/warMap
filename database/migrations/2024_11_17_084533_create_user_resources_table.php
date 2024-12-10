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
        Schema::create('user_resources', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('resources_types_id')->constrained()->cascadeOnDelete();
            $table->bigInteger('quantity');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_resources', function (Blueprint $table) {
            $table->dropForeign(['user_id']); // Drop the foreign key constraint for 'user_id'
            $table->dropForeign(['resource_id']); // Drop the foreign key constraint for 'resource_id'
        });
        Schema::dropIfExists('user_resources');
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }


};
