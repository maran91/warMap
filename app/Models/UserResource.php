<?php

namespace App\Models;

use Database\Factories\UserResourcesFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 *
 *
 * @property int $id
 * @property int $user_id
 * @property int $resource_types_id
 * @property int $quantity
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read ResourceType|null $resourceType
 * @property-read User $user
 * @method static UserResourcesFactory factory($count = null, $state = [])
 * @method static Builder|UserResource newModelQuery()
 * @method static Builder|UserResource newQuery()
 * @method static Builder|UserResource query()
 * @method static Builder|UserResource whereCreatedAt($value)
 * @method static Builder|UserResource whereId($value)
 * @method static Builder|UserResource whereQuantity($value)
 * @method static Builder|UserResource whereResourcesTypesId($value)
 * @method static Builder|UserResource whereUpdatedAt($value)
 * @method static Builder|UserResource whereUserId($value)
 * @mixin Eloquent
 */
class UserResource extends Model
{
    use HasFactory;

    protected $fillable = [
        'resource_type_id', 'quantity','user_id'
    ];
  //  protected $guarded = ['user_id'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function resourcesType(): BelongsTo
    {
        return $this->belongsTo(ResourceType::class, 'resource_type_id');
    }

}
