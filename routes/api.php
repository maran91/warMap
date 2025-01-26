<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\SoldierController;
use App\Http\Controllers\Api\UserResourceController;
use Illuminate\Support\Facades\Route;

Route::get('/example', function () {
    return 'Hello World';
});

Route::post('/signup', [AuthController::class, 'signup'])->name('signup');
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::post('/territories/acquire', [UserResourceController::class, 'updateTerritory'])->name('resources.updateTerritory');
    Route::post('/recruit/soldier', [SoldierController::class, 'reqruitSoldier'])->name('buy');
});

/*
Route::get('/resources', [UserResourceController::class, 'updateTerritory'])->name('resources.updateTerritory');
Route::middleware('auth:sanctum')->group(function () {

    //  Route::get('/buyUnit', [SoldierController::class, 'updateTerritory'])->name('buy');
});
*/
