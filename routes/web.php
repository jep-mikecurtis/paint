<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FormController;
use Illuminate\Http\Request;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::controller(FormController::class)->group(function() {
    Route::get('/forms', 'index')->name('forms.index');
    Route::get('/forms/create', 'create')->name('forms.create');
    Route::post('/forms', 'store')->name('forms.store');
    Route::get('/forms/{form}', 'show')->name('forms.show');
    Route::get('/forms/{form}/edit', 'edit')->name('forms.edit');
    Route::put('/forms/{form}', 'update')->name('forms.update');
    Route::delete('/forms/{form}', 'destroy')->name('forms.destroy');
});

Route::get('/paint/bid', function () {
    return Inertia::render('Application/Paint');
})->name('paint.bid');

Route::get('/', function (Request $request) {
    return Inertia::render('Application/Gospel', [
        'name' => $request->name,
    ]);
})->name('gospel');
