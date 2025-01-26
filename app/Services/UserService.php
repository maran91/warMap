<?php

namespace App\Services;

use App\Models\UserResource;
use App\Models\UserUnit;
use Illuminate\Database\Eloquent\Collection;

class UserService
{
    public function getUserResources(int $userId): Collection|\Illuminate\Support\Collection
    {
        return UserResource::where('user_id', $userId)->join(
            'resource_types',
            'user_resources.resource_type_id',
            '=',
            'resource_types.id'
        )->select('resource_types.id', 'resource_types.name as resource_name', 'user_resources.quantity')->get();
    }
    public function getUserUnits(int $userId): Collection|\Illuminate\Support\Collection
    {
        return  UserUnit::where('user_id', $userId)->join(
            'unit_types',
            'user_units.unit_type_id',
            '=',
            'unit_types.id'
        )->select('unit_types.id','unit_types.unit_type as unit_name', 'user_units.quantity')->get();

    }


}
