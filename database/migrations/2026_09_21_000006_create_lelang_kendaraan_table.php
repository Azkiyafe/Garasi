<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('lelang_kendaraan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kendaraan_id')->constrained('kendaraan')->cascadeOnDelete();
            $table->date('tanggal_pengajuan');
            $table->date('tanggal_lelang')->nullable();
            $table->enum('status_lelang', ['pengajuan', 'proses_lelang', 'terjual', 'batal'])->default('pengajuan');
            $table->string('pemenang_lelang')->nullable();
            $table->decimal('harga_lelang', 15, 2)->nullable();
            $table->string('berkas_risalah_lelang')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('lelang_kendaraan');
    }
};