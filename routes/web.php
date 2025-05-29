<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');

    // return inertia('Home');

})->name('home');

// Route::inertia('/', 'Home');


Route::inertia('/test', 'Test', [
    'data' => 'hello'
]);

Route::post('/users', [PostController::class, 'create_post']);

// Route::inertia('/test', 'Test.jsx');


