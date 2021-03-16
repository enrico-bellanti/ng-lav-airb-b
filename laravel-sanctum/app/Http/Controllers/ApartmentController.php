<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Models\Apartment;

class ApartmentController extends Controller
{
    public function index($pages)
    {
        $count_results = DB::select("SELECT COUNT(id) as records FROM apartments");
        $total_pages = ceil($count_results[0]->records / 6);

        if ($pages > 0 && $pages <= $total_pages) {
            $pages = $pages - 1;
            $offset = $pages * 6;
        } else{
            $offset = 0;
        }

        
        $response = DB::select("SELECT * FROM apartments LIMIT 6 OFFSET $offset");

        return response()->json([
            'data' => $response,
            'pages' => $total_pages,
        ]);
    }

    public function show($id){
        $apartment = DB::select("SELECT * from apartments where id = $id");

        return response($apartment, 200);
    }
}
