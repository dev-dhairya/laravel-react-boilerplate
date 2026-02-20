<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Contact', [
            'token' => encrypt(now()->timestamp),
        ]);
    }

    public function store(ContactRequest $request): RedirectResponse
    {
        if ($request->filled('website')) {
            return back()->with('success', 'Thank you! Your message has been received.');
        }

        try {
            $loadedAt = decrypt($request->input('_token_ts'));
            if (now()->timestamp - $loadedAt < 3) {
                return back()->withErrors(['description' => 'Please take a moment to fill out the form.']);
            }
        } catch (\Exception) {
            return back()->withErrors(['description' => 'Invalid form submission. Please refresh and try again.']);
        }

        Contact::create($request->validated());

        return back()->with('success', 'Thank you! Your message has been received. We\'ll get back to you soon.');
    }
}
