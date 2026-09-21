<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Opd extends Model
{
    use HasFactory;

    protected $table = 'opd';

    protected $fillable = [
        'kode_opd',
        'nama_opd',
    ];

    public function pengguna()
    {
        return $this->hasMany(Pengguna::class, 'opd_id');
    }

    public function kendaraan()
    {
        return $this->hasMany(Kendaraan::class, 'opd_id');
    }

    public function dokumenAset()
    {
        return $this->hasMany(DokumenAset::class, 'opd_id');
    }
}