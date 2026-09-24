<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\KendaraanViewController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\Kendaraan;
use Inertia\Inertia;

Route::get('/', function (Request $request) {
    $search = trim($request->query('search'));
    
    $vehicles = [];
    $searched = false;

    if (!empty($search)) {
        $searched = true;

        $cleanSearch = str_replace(' ', '', $search);

        // Ambil data kendaraan secara langsung tanpa relasi yang belum dibuat
        $vehicles = Kendaraan::query()
            ->where(function ($query) use ($search, $cleanSearch) {
                $query->where('plat_nomor', 'LIKE', "%{$search}%")
                      ->orWhereRaw("REPLACE(plat_nomor, ' ', '') LIKE ?", ["%{$cleanSearch}%"]);
            })
            ->get();
    }

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'vehicles' => $vehicles,
        'searched' => $searched,
        'keyword'  => $search,
    ]);
})->name('welcome');

// Route Dashboard & CRUD Kendaraan
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [KendaraanViewController::class, 'index'])->name('dashboard');
    Route::resource('kendaraan', KendaraanViewController::class);
});

// Route Profile
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';