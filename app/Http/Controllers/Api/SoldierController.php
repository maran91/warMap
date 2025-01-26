<?php

namespace App\Http\Controllers\Api;

use App\Enums\ResourceType;
use App\Http\Controllers\Controller;
use App\Http\Requests\Storeuser_soldiersRequest;
use App\Http\Requests\Updateuser_soldiersRequest;
use App\Models\UnitType;
use App\Models\UserResource;
use App\Models\UserUnit;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Throwable;

class SoldierController extends Controller
{
    /**
     * Display a listing of the resource.
     * @throws Throwable
     */
    public function reqruitSoldier(Request $request): Application|Response|ResponseFactory
    {
        $amount = $request->input('amount');

        $unitTypeId = 1;
        $userId = Auth::id();
        $userUnits = UserUnit::where('user_id', $userId)->where('unit_type_id', $unitTypeId)->first();
        $unitPrice = UnitType::find($unitTypeId)->price_in_food;
        $userFood = UserResource::where('user_id', $userId)->where('resource_type_id', ResourceType::FOOD)->first(
        )->quantity;

        $totalCost = $unitPrice * $amount;

        if ($userFood < $totalCost) {
            return response(['message' => 'Not enough food'], 400);
        }

        DB::beginTransaction();

        try {
            $userUnits->increment('quantity', $amount);
            UserResource::where('user_id', $userId)->where('resource_type_id', ResourceType::FOOD)->decrement(
                'quantity',
                $totalCost
            );
            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();
            return response(['message' => 'Transaction failed', 'error' => $e->getMessage()], 500);
        }
        $updateFoodQuantity = UserResource::where('user_id', $userId)->where(
            'resource_type_id',
            ResourceType::FOOD
        )->first()->quantity;
        $response = array(
            'food' => $updateFoodQuantity,
            'ChildSoldier' => 'updateFoodQuantity'
        );
        $updateSoldiersQuantity = UserUnit::where('user_id', $userId)->where('unit_type_id', $unitTypeId)->first()->quantity;
        return response(compact('updateFoodQuantity', 'updateSoldiersQuantity'), 200);
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
    public function store(Storeuser_soldiersRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(UserUnit $user_soldiers)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserUnit $user_soldiers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Updateuser_soldiersRequest $request, UserUnit $user_soldiers)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserUnit $user_soldiers)
    {
        //
    }
}
