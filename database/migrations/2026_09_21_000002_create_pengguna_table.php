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
            $table->string('nama_pengguna', 100)->unique(); // username[cite: 1]
            $table->string('kata_sandi');
            
            // Diubah jadi string biasa biar bebas mau diisi 'super_admin', 'superadmin_bpkpd', dll.[cite: 1, 2]
            $table->string('peran', 50); 
            
            $table->foreignId('opd_id')->nullable()->constrained('opd')->nullOnDelete(); //[cite: 1]
            $table->timestamps(); //[cite: 1]
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pengguna'); //[cite: 1]
    }
};