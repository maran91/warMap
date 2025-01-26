<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 *
 *
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection<int, UserResource> $useResources
 * @property-read int|null $use_resources_count
 * @method static \Database\Factories\ResourcesTypesFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|ResourceType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ResourceType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ResourceType query()
 * @method static \Illuminate\Database\Eloquent\Builder|ResourceType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ResourceType whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ResourceType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ResourceType whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ResourceType whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ResourceType extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    public function userResources(): HasMany
    {
        return $this->hasMany(UserResource::class, 'resource_type_id');
    }


}
