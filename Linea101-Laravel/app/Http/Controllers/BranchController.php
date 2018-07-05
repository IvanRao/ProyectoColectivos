<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Branch;
use App\Stop;

class BranchController extends Controller
{
    function getAll(){
        return branch::with('stops')->get();    
    }

    function getAllWithoutStops(){
        return branch::all();    
    }

    function get(Request $req){
        return branch::FindOrFail($id);
    }

    function getById($id){
        $branch = branch::FindOrFail($id);
        $branch->stops;
        return $branch;
    }

    function add(Request $req){
        $req->validate([
           'name'=>'required|max:255'
        ]);
        $branch = new branch;
        $branch->name = $req->name;
        $branch->save();
        return "ok";
    }

    function update($id,Request $req){
        $req->validate([
           'name'=>'required|max:255'
        ]);
        $branch = branch::FindOrFail($id);
        $branch->name = $req->name;
        $branch->save();
        return "ok";
    }

    function delete($id,Request $req){
        $branch = branch::FindOrFail($id);
        $branch->delete();
    }

    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

}
