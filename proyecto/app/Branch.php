<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    function stops(){
        return $this->hasMany("app\Stop")->orderBy("order","asc");
    }
}
