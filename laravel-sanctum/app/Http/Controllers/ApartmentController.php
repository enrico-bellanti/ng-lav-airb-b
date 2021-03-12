<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Models\Apartment;

class ApartmentController extends Controller
{
    public function index()
    {
        // $response = Apartment::all();
        $response = DB::table('apartments')->get();
        return response($response, 201);
    }
}
