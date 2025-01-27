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
        Schema::create('userProfile', function (Blueprint $table) {
            $table->id();
            $table->foreign('user_id')->constraint();
            $table->string('username')->unique();
            $table->enum(
                'color',
                ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#2c3e50', '#95a5a6', '#9b59b6', '#ba4a00']
            )->default('#2ecc71');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('userProfile');
    }
};
