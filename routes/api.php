<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;
Route::get('/example', function () {
    return 'Hello World';
});

Route::post('/signup', [AuthController::class, 'signup'])->name('signup');
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
