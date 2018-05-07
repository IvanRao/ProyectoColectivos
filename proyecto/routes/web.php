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

Route::get('/branch', function () {
    return view('branch');
});

Route::get('/stop', function () {
    return view('stop');
});


Route::get('api/branch','BranchController@getAll');
Route::get('api/branch/{id}','BranchController@getById');
Route::post('api/branch','BranchController@add');
Route::put('api/branch/{id}','BranchController@update');
Route::delete('api/branch/{id}','BranchController@delete');


Route::get('api/stop','stopController@getAll');
Route::get('api/stop/{branch_id}','stopController@getById');
Route::post('api/stop','stopController@add');
Route::put('api/stop/{id}','stopController@update');
Route::delete('api/stop/{id}','stopController@delete');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
