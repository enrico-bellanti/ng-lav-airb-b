<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Models\Apartment;

class ApartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $response = Apartment::where("user_id", $request->user_id)->get();
        $response = DB::table('apartments')
            ->where("user_id", $request->user_id)
            ->get();
        return response($response, 201);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        //creo nuovo oggetto di tipo Proprietà
        $newProperty = new Apartment;

        $newProperty->user_id = $request->user_id;
        $newProperty->title = $data["title"];
        $newProperty->description = $data["description"];
        $newProperty->rooms_number = $data["rooms_number"];
        $newProperty->price = $data["price"];
        $newProperty->img = $data["img"];

        //salvataggio
        $newProperty->save();

        //redirect verso nuova pagina (show)
        return response(['response' => 'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request)
    {
        // $response = Apartment::where('user_id', '=', $request->user_id)
        // ->where('id', '=', $id)
        // ->get();
        $response = DB::table('apartments')
        ->where("user_id", $request->user_id)
        ->where('id', '=', $id)
        ->get();
        return response($response, 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();

        // $property = Apartment::find($id);
        $property = DB::table('apartments')
              ->where('id', $id)
              ->update(
                [
                  'title' => $data["title"],
                  'description' => $data["description"],
                  'rooms_number' => $data["rooms_number"],
                  'price' =>  $data["price"],
                  'img' => $data["img"],
                ]);

        // $property->title = $data["title"];
        // $property->description = $data["description"];
        // $property->rooms_number = $data["rooms_number"];
        // $property->price = $data["price"];
        // $property->img = $data["img"];

        // $property->update();

        return response(['response' => 'success updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $property = Apartment::find($id);
        $property->delete();
        return response(['success' => 'apartment deleted successfully']);
    }
}
