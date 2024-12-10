<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 *
 *
 * @property int $id
 * @property int $user_id
 * @property int $resources_types_id
 * @property int $quantity
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\ResourcesTypes|null $resourceType
 * @property-read \App\Models\User $user
 * @method static \Database\Factories\UserResourcesFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|UserResources newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserResources newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserResources query()
 * @method static \Illuminate\Database\Eloquent\Builder|UserResources whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserResources whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserResources whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserResources whereResourcesTypesId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserResources whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserResources whereUserId($value)
 * @mixin \Eloquent
 */
class UserResources extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'resources_types_id',
        'quantity',
        'created_at',
        'updated_at',
    ];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class,'user_id');
    }

    public function resourceType(): BelongsTo
    {
        return $this->belongsTo(ResourcesTypes::class,'resource_type_id');
    }

}
