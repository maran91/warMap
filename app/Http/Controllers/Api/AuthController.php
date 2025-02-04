<?php

namespace App\Http\Controllers\Api;

use App\Enums\UnitType;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use App\Models\UserProfile;
use App\Models\UserResource;
use App\Models\UserUnit;
use App\Services\UserService;
use Exception;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Application;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Throwable;


class AuthController extends Controller
{
    protected UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function login(LoginRequest $request): Application|Response|ResponseFactory
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response(['message' => 'Invalid credentials'], 401);
        }
        /** @var User $user */
        $user = Auth::user();
        $userResources = $this->userService->getUserResources($user->id);
        $userUnits = $this->userService->getUserUnits($user->id);
        $userInfo = [
            'resources' => $userResources->toArray(),
            'units' => $userUnits->toArray(),
        ];
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token', 'userInfo'), 200);
    }


    /**
     * @throws Throwable
     */
    public function signup(SignupRequest $request): ResponseFactory|Application|Response
    {
        $data = $request->validated();
        $result = DB::transaction(function () use ($data) {
            /** @var User $user */
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
            ]);
            UserProfile::create([
                'user_id' => $user->id,
                'username' => $data['username'],
                'color' => $data['color'],
            ]);
            UserUnit::create([
                'user_id' => $user->id,
                'unit_type_id' => UnitType::SOLDIER,
                'quantity' => 1,
            ]);
            $resources = DB::table('resource_types')->get();
            foreach ($resources as $resource) {
                if (empty($resource->id)) {
                    throw new Exception('Resource type ID is missing');
                }

                UserResource::create([
                    'user_id' => $user->id,
                    'resource_type_id' => $resource->id,
                    'quantity' => 5,

                ]);
            }

            $token = $user->createToken('main')->plainTextToken;

            return compact('user', 'token');
        });
        return response($result, 201);
    }


    public function logout(Request $request): Application|Response|ResponseFactory
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response(['message' => 'Logged out'], 204);
    }

    public function updateProfile(Request $request): JsonResponse
    {
        $user = $request->user();

        $validated_data = $request->validate([
            'name' => 'sometimes|string|max:55',
            'email' => 'sometimes|email|unique:users,email',
            'username' => 'sometimes|string|unique:user_profiles,username|max:10',
        ]);
        return DB::transaction(function () use ($user, $validated_data) {
            $user->update(array_filter($validated_data, function ($key) {
                return in_array($key, ['name', 'email']);
            }, ARRAY_FILTER_USE_KEY));

            $user->profile->update(array_filter($validated_data, function ($key) {
                return in_array($key, ['username', 'color']);
            }, ARRAY_FILTER_USE_KEY));
            return response()->json(['message' => 'User profile updated successfully.'], 200);
        });
    }

    public function updatePassword(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|string|confirmed',


        ]);
        $user = request()->user();
        if (!Hash::check($validated['current_password'], $user->password)) {
            return response()->json(['message' => 'Current password is incorrect.'], 401);
        }
        $user->update(['password' => Hash::make($validated['new_password'])]);
        return response()->json(['message' => 'Password updated successfully.'], 200);
    }
}
