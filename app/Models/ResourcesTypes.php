<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\UserResources> $useResources
 * @property-read int|null $use_resources_count
 * @method static \Database\Factories\ResourcesTypesFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|ResourcesTypes newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ResourcesTypes newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ResourcesTypes query()
 * @method static \Illuminate\Database\Eloquent\Builder|ResourcesTypes whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ResourcesTypes whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ResourcesTypes whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ResourcesTypes whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ResourcesTypes whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ResourcesTypes extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    public function useResources(): HasMany
    {
        return $this->hasMany(UserResources::class, 'resource_type_id');
    }


}
