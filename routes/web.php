<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ReplyController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::get('/', [PostController::class, 'landing'])->name('landing')->middleware('guest');
Route::get('@{user:username}', [UserController::class, 'show'])->name('user-profile');
Route::get('/posts/{post}', [PostController::class, 'show'])->name('show-post');
Route::get('/categories', [CategoryController::class, 'index'])->name('categories');
Route::get('/categories/{category:slug}', [CategoryController::class, 'show'])->name('category');

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified',])->group(function () {
    Route::get('/home', [PostController::class, 'home'])->name('home');
    Route::middleware('optimizeImages')->group(function () {
        Route::post('/home', [PostController::class, 'store']);
    });
    Route::get('/public', [PostController::class, 'public'])->name('public-timeline');
    Route::get('/community', [UserController::class, 'index'])->name('community');
    Route::get('@{user:username}/follows', [UserController::class, 'follows'])->name('user-profile-follows');
    Route::get('@{user:username}/followers', [UserController::class, 'followers'])->name('user-profile-followers');
    Route::post('@{user:username}/follow', [UserController::class, 'follow'])->name('follow');
    Route::delete('/posts/{post}/delete', [PostController::class, 'destroy'])->name('posts.destroy');
    Route::post('/posts/{post}/like', [PostController::class, 'like'])->name('like');
    Route::post('/posts/{post}/reply', [ReplyController::class, 'store'])->name('reply');
    Route::delete('/replies/{reply}/delete', [ReplyController::class, 'destroy'])->name('reply.destroy');
    Route::post('/replies/{reply}/like', [ReplyController::class, 'like'])->name('like-reply');
});
