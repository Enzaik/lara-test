<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/blog', [BlogController::class, 'index'])->name('blog');
});
