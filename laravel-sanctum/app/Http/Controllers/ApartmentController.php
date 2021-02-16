<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Apartment;

class ApartmentController extends Controller
{
    public function index()
    {
        $response = Apartment::all();
        return response($response, 201);
    }
}
