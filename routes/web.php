<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;

// Sitemap
Route::get('/sitemap.xml', function () {
    $urls = ['/', '/contact', '/terms', '/privacy'];
    $baseUrl = config('app.url');

    $xml = '<?xml version="1.0" encoding="UTF-8"?>';
    $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    foreach ($urls as $url) {
        $xml .= '<url>';
        $xml .= '<loc>' . $baseUrl . $url . '</loc>';
        $xml .= '<changefreq>' . ($url === '/' ? 'weekly' : 'monthly') . '</changefreq>';
        $xml .= '<priority>' . ($url === '/' ? '1.0' : '0.7') . '</priority>';
        $xml .= '</url>';
    }

    $xml .= '</urlset>';

    return new Response($xml, 200, ['Content-Type' => 'application/xml']);
});

// Public routes
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/terms', [PageController::class, 'terms'])->name('terms');
Route::get('/privacy', [PageController::class, 'privacy'])->name('privacy');
Route::get('/contact', [ContactController::class, 'create'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->middleware('throttle:3,10');

// Guest-only routes (redirect authenticated users)
Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'create'])->name('login');
    Route::post('/login', [LoginController::class, 'store']);

    Route::get('/register', [RegisterController::class, 'create'])->name('register');
    Route::post('/register', [RegisterController::class, 'store'])->middleware('throttle:5,10');
});

// Authenticated routes
Route::middleware('auth')->group(function () {
    Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile');
    Route::put('/profile/password', [ProfileController::class, 'changePassword'])->name('profile.password');
});
