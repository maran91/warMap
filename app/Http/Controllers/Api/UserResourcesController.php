<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserResourcesRequest;
use App\Http\Requests\UpdateUserResourcesRequest;
use App\Models\UserResources;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Throwable;

class UserResourcesController extends Controller
{
    /**
     * @throws Throwable
     */
    public function updateTerritory(Request $request): JsonResponse|array
    {
        $territoryResourceType = 2;
        $interval = 300;
        $record = UserResources::where('user_id', Auth::id())->where(
            'resources_types_id',
            $territoryResourceType
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
        try {
            DB::beginTransaction();
            $record->increment('quantity');
            $record->touch('updated_at');
            DB::commit();

            return response()->json([
                'last_updated' => $record->updated_at,
                'time_left' => intval($interval - $timeDifference),
                'quantity' => $record->quantity,
                'message' => 'Territory updated successfully',
            ]);
        } catch (Throwable $e) {
            DB::rollBack();

            report($e);
            return response()->json([
                'message' => 'Error: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): Collection
    {
        return UserResources::all();
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
    public function show(UserResources $userResources)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserResources $userResources)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserResourcesRequest $request, UserResources $userResources)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserResources $userResources)
    {
        //
    }
}
