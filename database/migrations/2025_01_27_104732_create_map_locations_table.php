<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use function Laravel\Prompts\table;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mapLocations', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique()->nullable();
            $table->number('address');
            $table->string('owner')->nullable();
            $table->integer('soldier_count')->nullable()->unsigned();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
        DB::table('mapLocations')->insert([
            ['name'=>'city 1', 'address'=>1, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 2', 'address'=>2, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 3', 'address'=>3, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 4', 'address'=>4, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 5', 'address'=>5, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 6', 'address'=>6, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 7', 'address'=>7, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 8', 'address'=>8, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 9', 'address'=>9, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 10', 'address'=>10, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 11', 'address'=>11, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 12', 'address'=>12, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 13', 'address'=>13, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 14', 'address'=>14, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 15', 'address'=>15, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 16', 'address'=>16, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 17', 'address'=>17, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 18', 'address'=>18, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 19', 'address'=>19, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 20', 'address'=>20, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 21', 'address'=>21, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 22', 'address'=>22, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 23', 'address'=>23, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 24', 'address'=>24, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 25', 'address'=>25, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 26', 'address'=>26, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 27', 'address'=>27, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 28', 'address'=>28, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 29', 'address'=>29, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 30', 'address'=>30, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 31', 'address'=>31, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 32', 'address'=>32, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 33', 'address'=>33, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 34', 'address'=>34, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 35', 'address'=>35, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 36', 'address'=>36, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 37', 'address'=>37, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 38', 'address'=>38, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 39', 'address'=>39, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 40', 'address'=>40, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 41', 'address'=>41, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 42', 'address'=>42, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 43', 'address'=>43, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 44', 'address'=>44, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 45', 'address'=>45, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 46', 'address'=>46, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 47', 'address'=>47, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 48', 'address'=>48, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 49', 'address'=>49, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 50', 'address'=>50, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 51', 'address'=>51, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 52', 'address'=>52, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 53', 'address'=>53, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 54', 'address'=>54, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 55', 'address'=>55, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 56', 'address'=>56, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 57', 'address'=>57, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 58', 'address'=>58, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 59', 'address'=>59, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 60', 'address'=>60, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 61', 'address'=>61, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 62', 'address'=>62, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 63', 'address'=>63, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 64', 'address'=>64, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 65', 'address'=>65, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 66', 'address'=>66, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 67', 'address'=>67, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 68', 'address'=>68, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 69', 'address'=>69, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 70', 'address'=>70, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 71', 'address'=>71, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 72', 'address'=>72, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 73', 'address'=>73, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 74', 'address'=>74, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 75', 'address'=>75, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 76', 'address'=>76, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 77', 'address'=>77, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 78', 'address'=>78, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 79', 'address'=>79, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 80', 'address'=>80, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 81', 'address'=>81, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 82', 'address'=>82, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 83', 'address'=>83, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 84', 'address'=>84, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 85', 'address'=>85, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 86', 'address'=>86, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 87', 'address'=>87, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 88', 'address'=>88, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 89', 'address'=>89, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 90', 'address'=>90, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 91', 'address'=>91, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 92', 'address'=>92, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 93', 'address'=>93, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 94', 'address'=>94, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 95', 'address'=>95, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 96', 'address'=>96, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 97', 'address'=>97, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 98', 'address'=>98, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 99', 'address'=>99, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'city 100', 'address'=>100, 'owner'=>'', 'soldier_count'=>0,'created_at'=>now(),'updated_at'=>now()],
        ]);
    }



    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mapLocations');
    }
};
