<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Opd;
use App\Models\DokumenAset;
use App\Models\RiwayatKendaraan;
use App\Models\LelangKendaraan;

class Kendaraan extends Model
{
    use HasFactory;

    protected $table = 'kendaraan';

    protected $fillable = [
        'no_urut',
        'plat_nomor',
        'no_stnk',
        'no_bpkb',
        'nomor_rangka',
        'nomor_mesin',
        'merk_tipe',
        'tahun_pembuatan',
        'jumlah_roda',
        'peruntukan',
        'opd_id',
        'status_konfirmasi',
        'alasan_penolakan',
        'kondisi',
        'pemegang_kendaraan',
        'nip_pemegang',
        'status_operasional',
    ];

    // Relasi ke OPD
    public function opd()
    {
        return $this->belongsTo(Opd::class, 'opd_id');
    }

    // Relasi ke Dokumen Aset
    public function dokumenAset()
    {
        return $this->hasMany(DokumenAset::class, 'kendaraan_id');
    }

    // Relasi ke Riwayat Kendaraan
    public function riwayat()
    {
        return $this->hasMany(RiwayatKendaraan::class, 'kendaraan_id');
    }

    // Relasi ke Lelang Kendaraan
    public function lelang()
    {
        return $this->hasOne(LelangKendaraan::class, 'kendaraan_id');
    }
}