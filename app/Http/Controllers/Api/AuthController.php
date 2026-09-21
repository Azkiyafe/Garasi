<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pengguna;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'nama_pengguna' => 'required|string',
            'kata_sandi'    => 'required|string',
        ]);

        $pengguna = Pengguna::where('nama_pengguna', $request->nama_pengguna)->first();

        if (!$pengguna || !Hash::check($request->kata_sandi, $pengguna->kata_sandi)) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Nama pengguna atau kata sandi salah.'
            ], 401);
        }

        // Hapus token lama jika ada
        $pengguna->tokens()->delete();

        // Buat token baru
        $token = $pengguna->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status'  => 'success',
            'message' => 'Login berhasil',
            'data'    => [
                'token'    => $token,
                'pengguna' => [
                    'id'            => $pengguna->id,
                    'nama'          => $pengguna->nama,
                    'nama_pengguna' => $pengguna->nama_pengguna,
                    'peran'         => $pengguna->peran,
                    'opd_id'        => $pengguna->opd_id,
                ]
            ]
        ]);
    }

    public function logout(Request $request)
    {
        // Hapus token yang lagi dipakai
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status'  => 'success',
            'message' => 'Logout berhasil'
        ]);
    }
}g