<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stop extends Model
{
    function branches(){
        return $this->BelongsTo("app\branch");
    }
}
