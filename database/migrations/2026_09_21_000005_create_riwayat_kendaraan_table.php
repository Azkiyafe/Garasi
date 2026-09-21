<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('riwayat_kendaraan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kendaraan_id')->constrained('kendaraan')->cascadeOnDelete();
            $table->foreignId('opd_id')->constrained('opd')->cascadeOnDelete();
            $table->string('nama_pemegang')->nullable();
            $table->string('nip_pemegang', 50)->nullable();
            $table->enum('kondisi_saat_itu', ['baik', 'rusak_ringan', 'rusak_berat']);
            $table->date('tanggal_mulai');
            $table->date('tanggal_selesai')->nullable();
            $table->string('keterangan')->nullable();
            $table->timestamp('created_at')->useCurrent();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('riwayat_kendaraan');
    }
};