<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('serah_terima', function (Blueprint $table) {
            $table->id();
            $table->string('nomor_bast', 100)->unique();
            $table->foreignId('kendaraan_id')->constrained('kendaraan')->cascadeOnDelete();
            $table->foreignId('dari_pengguna_id')->constrained('pengguna')->cascadeOnDelete();
            $table->foreignId('ke_opd_id')->constrained('opd')->cascadeOnDelete();
            $table->date('tanggal_serah_terima');
            $table->text('catatan')->nullable();
            $table->string('berkas_bast_pdf')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('serah_terima');
    }
};