<?php

namespace App\Http\Controllers\Api;

use App\Enums\UnitType;
use App\Http\Controllers\Controller;
use App\Models\MapLocation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MapLocationsController extends Controller
{
    public function attack(Request $request): JsonResponse
    {
        $validated_data = $request->validate([
            'city_id' => 'required|integer|exists:map_locations,id',
            'soldiers_amount' => 'required|integer|min:1',
        ]);
        $user = $request->user();
        $cityId = $validated_data['city_id'];
        $soldiersAmount = $validated_data['soldiers_amount'];
        $userSoldiers = $user->units->where('unit_type_id', UnitType::SOLDIER)->first()->quantity;

        if ($userSoldiers < $validated_data['soldiers_amount']) {
            return response()->json(['error' => 'Not enough soldiers'], 200);
        }

        return DB::transaction(function () use ($user, $cityId, $soldiersAmount) {
            $mapLocation = MapLocation::find($cityId);

            if (!$mapLocation) {
                return response()->json(['error' => 'City not found.'], 200);
            }
            if ($mapLocation->governor === $user->profile->username) {
                $mapLocation->soldier_count += $soldiersAmount;
                $mapLocation->save();
                $userSoldiers = $user->units->where('unit_type_id', UnitType::SOLDIER)->first();
                $userSoldiers->quantity -= $soldiersAmount;
                $userSoldiers->save();
                return response()->json([
                    'soldiers' => $userSoldiers->quantity,
                    'message' => 'Solderis have been to defend the city.',
                    'city' => $mapLocation->name,
                    'remaining_soldiers' => $mapLocation->soldier_count,
                    'governor' => $mapLocation->governor,
                ], 200);
            }

            $remainingDefenders = $mapLocation->soldier_count - $soldiersAmount;

            if ($remainingDefenders <= 0) {
                $mapLocation->soldier_count = max(0, abs($remainingDefenders));
                $mapLocation->governor = $user->profile->username;
                $mapLocation->user_id = $user->id;
            } else {
                $mapLocation->soldier_count = $remainingDefenders;
            }

            $mapLocation->save();
            $userSoldiers = $user->units->where('unit_type_id', UnitType::SOLDIER)->first();
            $userSoldiers->quantity -= $soldiersAmount;
            $userSoldiers->save();

            return response()->json([
                'soldiers' => $userSoldiers->quantity,
                'message' => 'Attack successful',
                'city' => $mapLocation->name,
                'remaining_soldiers' => $mapLocation->soldier_count,
                'governor' => $mapLocation->governor,
            ], 200);
        });
    }

    public function index(): JsonResponse
    {
        $locations = MapLocation::select('id', 'name', 'address', 'governor')->get();
        return response()->json($locations);
    }

    public function getAllUserMapLocations(): JsonResponse
    {
        $user = request()->user();
        $mapLocations = $user->mapLocations()->select('id', 'name', 'governor', 'soldier_count')->get();
        return response()->json($mapLocations);
    }

    public function updateCityName(Request $request): JsonResponse
    {
        $validated_data = $request->validate([
            'new_name' => 'string|max:10|required|unique:map_locations,name|min:3',
            'city_id' => 'required|integer|exists:map_locations,id',
        ]);
        $user = $request->user();
        $newName = $validated_data['new_name'];
        $cityId = $validated_data['city_id'];


        return DB::transaction(function () use ($user, $cityId, $newName) {
            $mapLocation = $user->mapLocations->find($cityId);
            if (!$mapLocation) {
                return response()->json(['error' => 'City not found for this user.'], 404); // Handle not found case
            }
            $mapLocation->name = $newName;
            $mapLocation->save();

            return response()->json([
                'message' => 'City name updated successfully',
                'city' => $mapLocation->name,
            ]);
        });
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(MapLocation $map_locations)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MapLocation $map_locations)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MapLocation $map_locations)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MapLocation $map_locations)
    {
        //
    }
}
