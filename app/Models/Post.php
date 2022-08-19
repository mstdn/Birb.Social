<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Overtrue\LaravelLike\Traits\Likeable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;
    use Likeable;

    // Relation to user
    public function user() 
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function replies() 
    {
        return $this->hasMany(Reply::class);
    }
}
