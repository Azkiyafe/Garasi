<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    public function opd()
    {
        return $this->belongsTo(Opd::class, 'opd_id');
    }

    public function riwayat()
    {
        return $this->hasMany(RiwayatKendaraan::class, 'kendaraan_id');
    }

    public function lelang()
    {
        return $this->hasOne(LelangKendaraan::class, 'kendaraan_id');
    }

    public function dokumenAset()
    {
        return $this->hasMany(DokumenAset::class, 'kendaraan_id');
    }
}