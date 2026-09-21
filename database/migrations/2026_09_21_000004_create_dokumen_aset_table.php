<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('dokumen_aset', function (Blueprint $table) {
            $table->id();
            $table->string('nomor_dokumen', 100)->nullable(); // Nomor BAST / Risalah Lelang / No Laporan
            $table->enum('jenis_dokumen', ['bast', 'risalah_lelang', 'laporan_rekap_opd'])->default('bast');
            $table->foreignId('opd_id')->constrained('opd')->cascadeOnDelete(); // OPD terkait
            $table->foreignId('kendaraan_id')->nullable()->constrained('kendaraan')->nullOnDelete(); // Nullable jika laporan rekap se-OPD
            $table->foreignId('dibuat_oleh_id')->nullable()->constrained('pengguna')->nullOnDelete(); // Admin yang cetak/unggah
            $table->date('tanggal_dokumen');
            $table->string('berkas_file')->nullable(); // File PDF/Excel yang diunduh/disimpan
            $table->text('catatan')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dokumen_aset');
    }
};