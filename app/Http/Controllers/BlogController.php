<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
class BlogController extends Controller
{
    public function index()
    {
        $events = DB::table('events')->get();
        return Inertia::render('blog', ['events' => $events]);
    }
}
