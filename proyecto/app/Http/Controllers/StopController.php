<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Stop;

class StopController extends Controller
{
    function getAll(){
        return stop::all();
    }

    function get(Request $req){
        return stop::FindOrFail($id);
    }

    function getById($id){
        $stop = stop::FindOrFail($id);
        return $stop;
    }

    function add(Request $req){
        //$req->validate([
          //  'name'->'required|unique:branches|max 191'
        //]);
        $stop = new stop;
        $stop->order = $req->order;
        $stop->name = $req->name;
        $stop->latitude = $req->latitude;
        $stop->longitude = $req->longitude;
        $stop->branch_id = $req->branch_id;
        $stop->save();
        return "ok";
    }

    function update($id,Request $req){
        //$req->validate([
          //  'name'->'required|unique:branches|max 191'
        //]);
        $stop = stop::FindOrFail($id);
        $stop->order = $req->order;
        $stop->name = $req->name;
        $stop->latitude = $req->latitude;
        $stop->longitude = $req->longitude;
        $stop->branch_id = $req->branch_id;
        $stop->save();
        return "ok";
    }

    function delete($id,Request $req){
        $stop = stop::FindOrFail($id);
        $stop->delete();
    }

}
