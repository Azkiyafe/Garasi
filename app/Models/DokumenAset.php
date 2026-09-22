<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DokumenAset extends Model
{
    use HasFactory;

    protected $table = 'dokumen_aset';

    protected $fillable = [
        'nomor_dokumen',
        'jenis_dokumen',
        'opd_id',
        'kendaraan_id',
        'dibuat_oleh_id',
        'tanggal_dokumen',
        'berkas_file',
        'catatan',
    ];

    // Relasi ke OPD
    public function opd()
    {
        return $this->belongsTo(Opd::class, 'opd_id');
    }

    // Relasi ke Kendaraan
    public function kendaraan()
    {
        return $this->belongsTo(Kendaraan::class, 'kendaraan_id');
    }

    // Relasi ke Pengguna (Admin yang cetak/unggah)
    public function dibuatOleh()
    {
        return $this->belongsTo(Pengguna::class, 'dibuat_oleh_id');
    }
}