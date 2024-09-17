<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::controller(ProductController::class)->group(function(){
    Route::get('/products', 'index');
    Route::post('/product', 'store');
    Route::get('/product/{id}', 'show');
    Route::put('/product/{id}', 'update');
    Route::delete('/product/{id}', 'destroy');
});



// RUTAS PÚBLICAS
// autenticacion
Route::post('auth/register', [AuthController::class, 'register']);
Route::post('auth/login', [AuthController::class, 'login']);


// RUTAS PRIVADAS
Route::group(['middleware' => 'auth:sanctum'], function () {
    // autenticación
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/admin/users', [UserController::class, 'index']);
    Route::put('/admin/cambioEstadoUsuario/{id}', [UserController::class, 'cambiarEstadoUsuario']);
});