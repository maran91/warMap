<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use App\Models\UserResources;
use Carbon\Carbon;
use Exception;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Throwable;

class AuthController extends Controller
{
    public function login(LoginRequest $request): Application|Response|ResponseFactory
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response(['message' => 'Invalid credentials'], 401);
        }
        /** @var User $user */
        $user = Auth::user();
        $userResources = UserResources::where('user_id', $user->id)->join(
                'resources_types',
                'user_resources.resources_types_id',
                '=',
                'resources_types.id'
            )->select( 'resources_types.id','resources_types.name as resource_name', 'user_resources.quantity')->get();

        Log::info('User Resources:', ['user_id' => $user->id, 'resources' => $userResources]);

        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token', 'userResources'), 200);
    }

    /**
     * @throws Throwable
     */
    public function signup(SignupRequest $request): ResponseFactory|Application|Response
    {
        $data = $request->validated();
        DB::beginTransaction();
        try {
            /** @var User $user */
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
            ]);
            $resources = DB::table('resources_types')->get();
            foreach ($resources as $resource) {
                UserResources::create([
                    'user_id' => $user->id,
                    'resources_types_id' => $resource->id,
                    'quantity' => 5,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }

            DB::commit();
            $token = $user->createToken('main')->plainTextToken;
            return response(compact('user', 'token'), 201);
        } catch (Exception $e) {
            DB::rollBack();
            report($e);

            return response(['message' => 'User registration failed'], 500);
        }
    }

    public function logout(Request $request): Application|Response|ResponseFactory
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response(['message' => 'Logged out'], 204);
    }
}
