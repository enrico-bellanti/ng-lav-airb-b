<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Admin\ApartmentController as AdminAptController;
use App\Http\Controllers\ApartmentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['auth:sanctum', 'getIdfromToken'] ], function(){
    Route::resource("admin/apartments", AdminAptController::class);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post("login",[UserController::class,'login']);
Route::post("register",[UserController::class,'store']);
Route::get("home",[ApartmentController::class,'index']);

