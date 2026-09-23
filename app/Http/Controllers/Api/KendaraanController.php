<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Kendaraan;
use Illuminate\Http\Request;

class KendaraanController extends Controller
{
    // GET /api/kendaraan
    public function index(Request $request)
    {
        $query = Kendaraan::with('opd');

        // Filter berdasarkan OPD jika ada parameter opd_id
        if ($request->has('opd_id')) {
            $query->where('opd_id', $request->opd_id);
        }

        // Search berdasarkan plat nomor atau merk tipe
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('plat_nomor', 'like', "%{$search}%")
                  ->orWhere('merk_tipe', 'like', "%{$search}%");
            });
        }

        $kendaraan = $query->latest()->paginate(15);

        return response()->json([
            'status' => 'success',
            'message' => 'Data kendaraan berhasil diambil',
            'data' => $kendaraan
        ], 200);
    }

    // POST /api/kendaraan
    public function store(Request $request)
    {
        $validated = $request->validate([
            'plat_nomor' => 'required|string|unique:kendaraan,plat_nomor',
            'merk_tipe' => 'required|string',
            'tahun_pembuatan' => 'required|numeric',
            'jumlah_roda' => 'required|in:2,3,4,>6',
            'peruntukan' => 'required|in:jabatan,operasional,layanan_khusus',
            'opd_id' => 'required|exists:opd,id',
            'kondisi' => 'required|in:baik,rusak_ringan,rusak_berat',
            'no_urut' => 'nullable|string',
            'no_stnk' => 'nullable|string',
            'no_bpkb' => 'nullable|string',
            'nomor_rangka' => 'nullable|string',
            'nomor_mesin' => 'nullable|string',
            'pemegang_kendaraan' => 'nullable|string',
            'nip_pemegang' => 'nullable|string',
            'status_operasional' => 'nullable|in:aktif,tidak_aktif,proses_lelang',
        ]);

        $kendaraan = Kendaraan::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Data kendaraan berhasil ditambahkan',
            'data' => $kendaraan
        ], 201);
    }

    // GET /api/kendaraan/{id}
    public function show($id)
    {
        $kendaraan = Kendaraan::with(['opd', 'dokumenAset', 'riwayat', 'lelang'])->find($id);

        if (!$kendaraan) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data kendaraan tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $kendaraan
        ], 200);
    }

    // PUT/PATCH /api/kendaraan/{id}
    public function update(Request $request, $id)
    {
        $kendaraan = Kendaraan::find($id);

        if (!$kendaraan) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data kendaraan tidak ditemukan'
            ], 404);
        }

        $validated = $request->validate([
            'plat_nomor' => 'required|string|unique:kendaraan,plat_nomor,' . $id,
            'merk_tipe' => 'required|string',
            'tahun_pembuatan' => 'required|numeric',
            'jumlah_roda' => 'required|in:2,3,4,>6',
            'peruntukan' => 'required|in:jabatan,operasional,layanan_khusus',
            'opd_id' => 'required|exists:opd,id',
            'kondisi' => 'required|in:baik,rusak_ringan,rusak_berat',
            'status_konfirmasi' => 'nullable|in:menunggu,diterima,ditolak',
            'alasan_penolakan' => 'nullable|string',
            'no_urut' => 'nullable|string',
            'no_stnk' => 'nullable|string',
            'no_bpkb' => 'nullable|string',
            'nomor_rangka' => 'nullable|string',
            'nomor_mesin' => 'nullable|string',
            'pemegang_kendaraan' => 'nullable|string',
            'nip_pemegang' => 'nullable|string',
            'status_operasional' => 'nullable|in:aktif,tidak_aktif,proses_lelang',
        ]);

        $kendaraan->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Data kendaraan berhasil diperbarui',
            'data' => $kendaraan
        ], 200);
    }

    // DELETE /api/kendaraan/{id}
    public function destroy($id)
    {
        $kendaraan = Kendaraan::find($id);

        if (!$kendaraan) {
            return response()->json([
                'status' => 'error',
                'message' => 'Data kendaraan tidak ditemukan'
            ], 404);
        }

        $kendaraan->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Data kendaraan berhasil dihapus'
        ], 200);
    }
}