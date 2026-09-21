<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('kendaraan', function (Blueprint $table) {
            $table->id();
            $table->string('no_urut', 50)->nullable(); // Nomor urut dari Excel BPKPD
            $table->string('plat_nomor', 20)->unique();
            $table->string('no_stnk', 100)->nullable();
            $table->string('no_bpkb', 100)->nullable();
            $table->string('nomor_rangka', 100)->nullable();
            $table->string('nomor_mesin', 100)->nullable();
            $table->string('merk_tipe');
            $table->year('tahun_pembuatan');
            $table->enum('jumlah_roda', ['2', '3', '4', '>6']);
            $table->enum('peruntukan', ['jabatan', 'operasional', 'layanan_khusus']);
            $table->foreignId('opd_id')->constrained('opd')->cascadeOnDelete();
            $table->enum('status_konfirmasi', ['menunggu', 'diterima', 'ditolak'])->default('menunggu');
            $table->text('alasan_penolakan')->nullable();
            $table->enum('kondisi', ['baik', 'rusak_ringan', 'rusak_berat'])->default('baik');
            $table->string('pemegang_kendaraan')->nullable();
            $table->string('nip_pemegang', 50)->nullable();
            $table->enum('status_operasional', ['aktif', 'tidak_aktif', 'proses_lelang'])->default('aktif');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('kendaraan');
    }
};