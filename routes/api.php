<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('application', function (Request $request) {
    $id = $request->id;

    if($id) {
        $application = \App\Models\Application::find($id);
        $application->application = $request->application;
        $application->save();
    } else {
        $application = \App\Models\Application::create([
            'application' => $request->application,
            'ip_address' => $request->ip(),
        ]);
    }

    return $application;
});
