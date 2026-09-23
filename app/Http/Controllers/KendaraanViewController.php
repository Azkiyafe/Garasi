<?php

namespace App\Http\Controllers;

use App\Models\Kendaraan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KendaraanViewController extends Controller
{
    public function index(Request $request)
    {
        $query = Kendaraan::with('opd');

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('plat_nomor', 'like', "%{$search}%")
                  ->orWhere('merk_tipe', 'like', "%{$search}%");
            });
        }

        return Inertia::render('Kendaraan/Index', [
            'kendaraan' => $query->latest()->paginate(10)->withQueryString(),
            'filters' => $request->only(['search'])
        ]);
    }
}