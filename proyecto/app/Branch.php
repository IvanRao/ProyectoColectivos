<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    function Stops(){
        return $this->hasMany('App\Stop')->orderBy('order', 'asc');
    }
}
