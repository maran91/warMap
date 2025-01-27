<?php

namespace App\Models;

use Database\Factories\UnitTypesFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 *
 *
 * @property-read Collection<int, UserUnit> $userUnits
 * @property-read int|null $user_units_count
 * @method static UnitTypesFactory factory($count = null, $state = [])
 * @method static Builder|UnitType newModelQuery()
 * @method static Builder|UnitType newQuery()
 * @method static Builder|UnitType query()
 * @mixin Eloquent
 */
class UnitType extends Model
{
    protected $fillable = [

    ];

    public function userUnit(): HasMany
    {
        return $this->hasMany(UserUnit::class, 'unit_type_id');
    }


}

