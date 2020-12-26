<?php

use Illuminate\Support\Facades\Route;



Route::group(['prefix' => 'adminHome'], function () {
    $homeAP = "homeAP";
    Route::get('/', $homeAP."@index");
    Route::get('/elanlar/{id}', $homeAP."@elanlar");
    Route::get('/yanDb/{db}', $homeAP."@yanDb");
    Route::get('/elanElaveEt', $homeAP."@elanElaveEt");


    Route::post("/elanElaveEt", $homeAP.'@elanElaveEtPost');


    // ADD
    Route::post('/yanDb/{db}', $homeAP."@yanDbAdd");
    // DELETE
    Route::delete('/yanDb/{db}/{id}', $homeAP."@yanDbDelete");
    // Update COLUMN
    Route::post('/yanDb/{db}/{id}/{column}', $homeAP."@yanDbColumnUpdate");
    
});
