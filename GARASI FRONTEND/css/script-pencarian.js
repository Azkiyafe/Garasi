const searchInput = document.getElementById('searchInput');
const resultContainer = document.getElementById('resultContainer');

// Fungsi untuk merender data ke HTML
function tampilkanHasil(data) {
    if (!resultContainer) return;

    if (data.length === 0) {
        resultContainer.innerHTML = "<p style='color: #777; font-size: 13px; padding: 10px;'>Kendaraan tidak ditemukan.</p>";
        return;
    }

    let html = "";
    data.forEach(item => {
        html += `
            <div class="detail-card">
                <h3 class="detail-title">Detail Kendaraan</h3>
                <div class="detail-row">
                    <span class="label">Nomor</span>
                    <span class="value bold">${item.nomor}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Nomor Polisi</span>
                    <span class="value">${item.nopol}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Merk / Tipe</span>
                    <span class="value">${item.merk}</span>
                </div>
                <div class="detail-row">
                    <span class="label">OPD</span>
                    <span class="value">${item.opd}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Status</span>
                    <span class="badge-aktif">${item.status}</span>
                </div>
            </div>
        `;
    });

    resultContainer.innerHTML = html;
}

// Ambil semua data awal saat halaman dimuat dari backend
async function ambilDataAwal() {
    try {
        const response = await fetch('http://localhost:3000/api/kendaraan');
        const data = await response.json();
        tampilkanHasil(data);
    } catch (error) {
        console.error("Gagal terhubung ke server backend:", error);
    }
}

ambilDataAwal();

// Event listener saat user mengetik di kolom pencarian
if (searchInput) {
    searchInput.addEventListener('input', async function(e) {
        const keyword = e.target.value.trim();

        try {
            // Mengirim kata kunci pencarian ke API backend
            const response = await fetch(`http://localhost:3000/api/kendaraan?search=${keyword}`);
            const hasil = await response.json();

            tampilkanHasil(hasil);
        } catch (error) {
            console.error("Terjadi kesalahan saat mencari:", error);
        }
    });
}
