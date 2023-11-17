<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('Home', [
            'title' => 'Laravel 10, Inertia.js, VUE, Tailwind CSS',
        ]);
    }
}
