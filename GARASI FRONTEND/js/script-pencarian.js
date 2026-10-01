/**
 * GARASI - Gerbang Administrasi Kendaraan Dinas
 * Script Halaman Pencarian Kendaraan
 * Data Resmi Sesuai BPKPD & Desain Figma: AA 9673 JD
 */

const kendaraanResmi = {
    nomor: "25",
    plat_nomor: "AA 9673 JD",
    merk_tipe: "Honda",
    opd: "DLHKP",
    status: "Aktif"
};

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const resultContentWrapper = document.getElementById('resultContentWrapper') || document.getElementById('resultContainer');

    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search') || urlParams.get('q') || 'AA 9673 JD';
    if (searchInput) {
        searchInput.value = searchParam;
    }

    // Tampilkan hasil awal
    filterDanTampilkan(searchParam);

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const keyword = searchInput ? searchInput.value.trim() : '';
            filterDanTampilkan(keyword);
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const keyword = searchInput.value.trim();
                filterDanTampilkan(keyword);
            }
        });
    }

    function filterDanTampilkan(keyword) {
        if (!resultContentWrapper) return;

        const cleanKey = keyword.toLowerCase().replace(/\s+/g, '');
        const nopolTarget = kendaraanResmi.plat_nomor.toLowerCase().replace(/\s+/g, '');

        const isMatch = (cleanKey === nopolTarget || cleanKey === '9673');

        if (isMatch) {
            // DATA DITEMUKAN
            resultContentWrapper.innerHTML = `
                <div class="result-title-bar">
                    <span class="title-text">Yuk Cek Kendaraan Dinas</span>
                    <a href="index.html" class="btn-reset-pencarian" style="text-decoration: none;">
                        <span class="material-icons" style="font-size: 13px;">home</span>
                        <span>Beranda</span>
                    </a>
                </div>

                <div class="result-desc">
                    Menampilkan kendaraan yang sesuai dengan pencarian Anda.
                </div>

                <div class="detail-card">
                    <div class="detail-card-title">Detail Kendaraan</div>
                    <table class="detail-table">
                        <tr>
                            <td class="col-label">Nomor</td>
                            <td class="col-value"><strong>${escapeHtml(kendaraanResmi.nomor)}</strong></td>
                        </tr>
                        <tr>
                            <td class="col-label">Nomor Polisi</td>
                            <td class="col-value">${escapeHtml(kendaraanResmi.plat_nomor)}</td>
                        </tr>
                        <tr>
                            <td class="col-label">Merk / Tipe</td>
                            <td class="col-value">${escapeHtml(kendaraanResmi.merk_tipe)}</td>
                        </tr>
                        <tr>
                            <td class="col-label">OPD</td>
                            <td class="col-value">${escapeHtml(kendaraanResmi.opd)}</td>
                        </tr>
                        <tr>
                            <td class="col-label">Status</td>
                            <td class="col-value"><span class="badge-aktif">${escapeHtml(kendaraanResmi.status)}</span></td>
                        </tr>
                    </table>
                </div>
            `;
        } else {
            // BUKAN KENDARAAN DINAS -> TAMPILAN NOTIFIKASI
            resultContentWrapper.innerHTML = `
                <div class="notif-header-bar">
                    <div class="notif-header-left">
                        <div class="car-badge-icon">
                            <span class="material-icons">directions_car</span>
                        </div>
                        <span class="notif-title-text">Hasil Pencarian</span>
                    </div>
                    <a href="index.html" class="btn-reset-pencarian" style="text-decoration: none;">
                        <span class="material-icons" style="font-size: 13px;">home</span>
                        <span>Beranda</span>
                    </a>
                </div>

                <div class="alert-not-found">
                    <div class="alert-icon-circle">
                        <span class="material-icons">priority_high</span>
                    </div>
                    <div class="alert-text-content">
                        <div class="alert-title">No. yang Anda masukkan bukan kendaraan dinas</div>
                        <div class="alert-subtitle">Pastikan Anda memasukkan nomor polisi kendaraan dinas yang terdaftar pada sistem.</div>
                    </div>
                </div>

                <div class="card-empty-result">
                    <div class="empty-graphic-box">
                        <span class="material-icons doc-icon">description</span>
                        <span class="badge-cross">✕</span>
                    </div>
                    <div class="empty-title">Data tidak ditemukan</div>
                    <div class="empty-description">
                        Nomor polisi yang Anda masukkan bukan merupakan kendaraan dinas<br>
                        Pemerintah Kabupaten Kebumen
                    </div>
                </div>
            `;
        }
    }

    function escapeHtml(text) {
        if (!text) return '';
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }
});
