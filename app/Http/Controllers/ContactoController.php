<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\Contacto;
use Illuminate\Support\Facades\Mail;

class ContactoController extends Controller
{
    //
    public function enviarcorreo(Request $request){

        Mail::to('siulbriceno20@gmail.com')->send(new Contacto($request->nombre, $request->email, $request->mensaje));

        return response()->json("correo enviado exitosamente");
    }
}
