<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LelangKendaraan extends Model
{
    use HasFactory;

    protected $table = 'lelang_kendaraan';

    protected $fillable = [
        'kendaraan_id',
        'tanggal_pengajuan',
        'tanggal_lelang',
        'status_lelang',
        'pemenang_lelang',
        'harga_lelang',
        'berkas_risalah_lelang',
    ];

    public function kendaraan()
    {
        return $this->belongsTo(Kendaraan::class, 'kendaraan_id');
    }
}