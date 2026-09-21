<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pengguna', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('nama_pengguna', 100)->unique(); // username
            $table->string('kata_sandi');
            $table->enum('peran', ['superadmin_bpkpd', 'admin_opd']);
            $table->foreignId('opd_id')->nullable()->constrained('opd')->nullOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pengguna');
    }
};