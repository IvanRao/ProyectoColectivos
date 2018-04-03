<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/ramal','RamalController@getAll');
Route::post('/ramal','RamalController@add');
Route::put('/ramal/{id}','RamalController@update');
Route::delete('/ramal/{id}','RamalController@delete');
