<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin'], function () {
    
    Route::get('/', "ap@index");
    Route::get('/yanDb/{db}', "ap@yanDb");


    Route::post('/yanDb/{db}', "ap@yanDbAdd");
    Route::delete('/yanDb/{db}/{id}', "ap@yanDbDelete");

});
