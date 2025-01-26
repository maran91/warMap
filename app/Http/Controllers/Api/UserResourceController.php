<?php

namespace App\Http\Controllers\Api;

use App\Enums\ResourceType;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserResourcesRequest;
use App\Http\Requests\UpdateUserResourcesRequest;
use App\Models\UserResource;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Throwable;

class UserResourceController extends Controller
{
    /**
     * @throws Throwable
     */
    public function updateTerritory(Request $request): JsonResponse|array
    {
        $result = DB::transaction(function () use ($request) {
            $interval = 300;

            $record = UserResource::lockForUpdate()->where('user_id', Auth::id())->where(
            'resource_type_id',
            ResourceType::TERRITORY
        )->first();

        $timeDifference = now()->diffInSeconds($record->updated_at, true);

        if ($timeDifference < $interval) {
            return response()->json([
                'last_updated' => $record->updated_at,
                'time_left' => intval($interval - $timeDifference),
                'quantity' => $record->quantity,
                'message' => 'You can only update your territory every 5 minutes',
            ], 203);
        }
            $record->increment('quantity');
            $record->touch('updated_at');

            return [
                'last_updated' => $record->updated_at,
                'time_left' => intval($interval - $timeDifference),
                'quantity' => $record->quantity,
                'message' => 'Territory updated successfully',
            ];
        });
        return response()->json($result);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): Collection
    {
        return UserResource::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserResourcesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(UserResource $userResources)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserResource $userResources)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserResourcesRequest $request, UserResource $userResources)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserResource $userResources)
    {
        //
    }
}
