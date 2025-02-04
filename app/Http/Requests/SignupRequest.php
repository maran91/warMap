<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class SignupRequest extends FormRequest
{
    public mixed $email;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:55',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|confirmed|min:8',
            'username' => 'required|string|unique:user_profiles,username|max:10',
            'color' => 'required|in:#e74c3c,#3498db,#2ecc71,#f1c40f,#2c3e50,#95a5a6,#9b59b6,#ba4a00',

            //
        ];
    }
}
