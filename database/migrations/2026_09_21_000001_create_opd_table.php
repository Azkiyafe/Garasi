<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('opd', function (Blueprint $table) {
            $table->id();
            $table->string('kode_opd', 50)->unique();
            $table->string('nama_opd');
            $table->timestamps(); // otomatis bikin kolom dibuat_pada & diperbarui_pada (created_at & updated_at)
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('opd');
    }
};