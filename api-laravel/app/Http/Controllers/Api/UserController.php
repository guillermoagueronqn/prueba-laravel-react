<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use DateTime;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return $users;
    }

    public function store(Request $request)
    {
        //$product = new Product();
        //$product->description = $request->description;
        //$product->price = $request->price;
        //$product->stock = $request->stock;

        //$product->save();
    }

    public function show(string $id)
    {
        //$product = Product::find($id);
        //return $product;
    }

    public function update(Request $request, $id)
    {
        //$product = Product::findOrFail($request->id);
        //$product->description = $request->description;
        //$product->price = $request->price;
        //$product->stock = $request->stock;

        //$product->save();
        //return $product;
    }

    public function destroy(string $id)
    {
        //$product = Product::destroy($id);
        //return $product;
    }

    public function cambiarEstadoUsuario($id){
    
        try {
            $user = User::findOrFail($id);
            if ($user->bajaUsuario === null){
                $fechaActual = new DateTime();
                $formattedDate = $fechaActual->format("Y-m-d H:i:s");
                $user->bajaUsuario= $formattedDate;
                $user->save();    
                return response()->json(['message' => 'Usuario dado de baja con éxito.', 'success' => true], 200);
            } else {
                $user->bajaUsuario = null;
                $user->save();
                return response()->json(['message' => 'Usuario dado de alta con éxito.', 'success' => true], 200);
            }
            
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al cambiar estado del usuario: ', 'success' => false], 500);
        }
    }
}
