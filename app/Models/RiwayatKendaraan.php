<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RiwayatKendaraan extends Model
{
    use HasFactory;

    protected $table = 'riwayat_kendaraan';

    public $timestamps = false; // Hanya pakai created_at otomatis dari DB

    protected $fillable = [
        'kendaraan_id',
        'opd_id',
        'nama_pemegang',
        'nip_pemegang',
        'kondisi_saat_itu',
        'tanggal_mulai',
        'tanggal_selesai',
        'keterangan',
    ];

    public function kendaraan()
    {
        return $this->belongsTo(Kendaraan::class, 'kendaraan_id');
    }

    public function opd()
    {
        return $this->belongsTo(Opd::class, 'opd_id');
    }
}