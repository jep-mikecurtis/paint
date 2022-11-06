<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FormController extends Controller
{
    // Create Form
    public function create()
    {
        return Inertia::render('Form/Create');
    }
}
