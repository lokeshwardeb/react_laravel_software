<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');

    // return inertia('Home');

});

// Route::inertia('/', 'Home');


Route::inertia('/test', 'Test', [
    'data' => 'hello'
]);

Route::post('/user', [PostController::class, 'create_post']);

// Route::inertia('/test', 'Test.jsx');


