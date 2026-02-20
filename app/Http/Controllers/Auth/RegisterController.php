<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class RegisterController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Auth/Register', [
            'token' => encrypt(now()->timestamp),
        ]);
    }

    public function store(RegisterRequest $request): RedirectResponse
    {
        if ($request->filled('company')) {
            return redirect()->intended('/');
        }

        try {
            $loadedAt = decrypt($request->input('_token_ts'));
            if (now()->timestamp - $loadedAt < 3) {
                return back()->withErrors(['email' => 'Please take a moment to fill out the form.']);
            }
        } catch (\Exception) {
            return back()->withErrors(['email' => 'Invalid form submission. Please refresh and try again.']);
        }

        $user = User::create([
            'name' => $request->validated('name'),
            'email' => $request->validated('email'),
            'password' => Hash::make($request->validated('password')),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect()->intended('/');
    }
}
