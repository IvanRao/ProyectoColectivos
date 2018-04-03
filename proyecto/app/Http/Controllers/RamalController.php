<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Ramal;

class RamalController extends Controller
{
    function getAll(){
        return ramal::all();
    }

    function get(Request $req){
        return ramal::FindOrFail($id);
    }

    function add(Request $req){
        $ramal = new ramal;
        $ramal->nombre = $req->nombre;
        $ramal->save();
        return "ok";
    }

    function update(Request $req){
        $ramal = ramal::FindOrFail($id);
        $ramal->nombre = $req->nombre;
        $ramal->save();
        return "ok";
    }

    function delete($id,Request $req){
        $ramal = ramal::FindOrFail($id);
        $ramal->delete();
    }

  
}
