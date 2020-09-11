<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//::middleware('auth:api')

//Dynamic Route
Route::get('/{table}/all', "home@allDynamicForCategory");

Route::get('/{table}/{id}', "home@oneDynamicForCategory");

