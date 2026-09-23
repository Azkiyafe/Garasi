<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\KendaraanController; // 1. Tambahkan import controller ini di atas
use Illuminate\Support\Facades\Route;

// Public Route
Route::post('/login', [AuthController::class, 'login']);

// Protected Route (Harus Bawa Token)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    
    // 2. Tambahkan route kendaraan di sini
    Route::apiResource('kendaraan', KendaraanController::class);
});