<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;


class UserController extends Controller
{
    // FUNZIONE PER EFFETTUARE IL LOGIN
    function login(Request $request)
    {
        $user= User::where('email', $request->email)->first();
        // print_r($data);
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response([
                    'message' => ['Mi dispiace le credenziali non sono corrette']
                ], 404);
            }
        
            $token = $user->createToken($user->name)->plainTextToken;
        
            $response = [
                'user' => $user,
                'token' => $token
            ];
        
             return response($response, 201);
    }

    public function store(Request $request)
    {
        if ((!$request->email) || (!$request->name) || (!$request->password)) {
            $response = Response::json([
                'message' => 'Please enter all required fields'
            ], 400);
            return $response;
        }
        $user = new User(array(
            'email' => trim($request->email),
            'name' => trim($request->name),
            'password' => bcrypt($request->password),
        ));
        $user->save();
        $token = $user->createToken($user->name)->plainTextToken;
        $message = 'The user has been created successfully';
        $response = Response::json([
            'message' => $message,
            'data' => $user,
            'token' => $token
        ], 201);
        return $response;
    }
}
