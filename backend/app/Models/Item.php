<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Board;

class Item extends Model
{
    use HasFactory;

    public function board(): BelongsTo
    {
        return $this->belongsTo(Board::class);
    }
}
