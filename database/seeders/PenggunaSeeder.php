<?php

namespace Database\Seeders;

use App\Models\Pengguna;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class PenggunaSeeder extends Seeder
{
    public function run(): void
    {
        // Super Admin BPKPD
        Pengguna::create([
            'nama' => 'Super Admin BPKPD',
            'nama_pengguna' => 'admin_bpkpd',
            'kata_sandi' => Hash::make('password123'),
            'peran' => 'super_admin',
            'opd_id' => 1,
        ]);

        // Admin OPD Disdik
        Pengguna::create([
            'nama' => 'Admin Disdik',
            'nama_pengguna' => 'admin_disdik',
            'kata_sandi' => Hash::make('password123'),
            'peran' => 'admin_opd',
            'opd_id' => 2,
        ]);
    }
}