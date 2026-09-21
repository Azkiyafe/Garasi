<?php

namespace Database\Seeders;

use App\Models\Opd;
use Illuminate\Database\Seeder;

class OpdSeeder extends Seeder
{
    public function run(): void
    {
        Opd::create([
            'kode_opd' => 'BPKPD01',
            'nama_opd' => 'Badan Pengelola Keuangan dan Pendapatan Daerah',
        ]);

        Opd::create([
            'kode_opd' => 'DISDIK01',
            'nama_opd' => 'Dinas Pendidikan, Kepemudaan dan Olahraga',
        ]);
    }
}