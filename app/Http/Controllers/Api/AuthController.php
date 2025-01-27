<?php

namespace App\Http\Controllers\Api;

use App\Enums\UnitType;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use App\Models\UserResource;
use App\Models\UserUnit;
use App\Services\UserService;
use Exception;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
}
