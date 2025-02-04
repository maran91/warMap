<?php

namespace App\Models;

use Database\Factories\UserUnitsFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 *
 *
 * @property-read User|null $User
 * @property-read UnitType|null $unitTypes
 * @method static UserUnitsFactory factory($count = null, $state = [])
 * @method static Builder|UserUnit newModelQuery()
 * @method static Builder|UserUnit newQuery()
 * @method static Builder|UserUnit query()
 * @mixin Eloquent
 */
class UserUnit extends Model
{
    use HasFactory;

    /**
     * @method static Builder|UserUnit create(array $attributes = [])
     */

    protected $fillable = [
        'user_id',
        'unit_type_id',
        'quantity',
    ];

    public function unitType(): BelongsTo
    {
        return $this->belongsTo(UnitType::class, 'unit_type_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
