<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MapLocationsController;
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
    Route::post('/territories/acquire', [UserResourceController::class, 'updateTerritory'])->name(
        'resources.updateTerritory'
    );
    Route::post('/recruit/soldier', [SoldierController::class, 'reqruitSoldier'])->name('buy');
    Route::put('/profile', [AuthController::class, 'updateProfile'])->name('updateProfile');
    Route::put('/profile/password', [AuthController::class, 'updatePassword'])->name('updatePassword');
    Route::get('/map', [MapLocationsController::class, 'index'])->name('index');
    Route::get(
        '/map/owned-locations',
        [MapLocationsController::class, 'getAllUserMapLocations']
    )->name(
        'getAllUserMapLocations'
    );
    Route::put('map/city-details', [MapLocationsController::class, 'updateCityName'])->name('updateCityName');
    Route::post('map/attack', [MapLocationsController::class, 'attack'])->name('attack');
});

/*
Route::get('/resources', [UserResourceController::class, 'updateTerritory'])->name('resources.updateTerritory');
Route::middleware('auth:sanctum')->group(function () {

    //  Route::get('/buyUnit', [SoldierController::class, 'updateTerritory'])->name('buy');
});
*/
