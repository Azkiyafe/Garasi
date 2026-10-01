/**
 * GARASI - Gerbang Administrasi Kendaraan Dinas
 * Script Interaksi Pengguna & Pencarian Kendaraan Dinas
 * Data Resmi Sesuai BPKPD & Desain Figma: AA 9673 JD
 */

// Data Kendaraan Dinas Resmi Sesuai Figma & BPKPD
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
    const infoSection = document.getElementById('infoSection');
    const resultSection = document.getElementById('resultSection');
    const resultContentWrapper = document.getElementById('resultContentWrapper');
    const headerLogo = document.getElementById('headerLogo');

    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search') || urlParams.get('q');
    if (searchParam) {
        if (searchInput) searchInput.value = searchParam;
        jalankanPencarian(searchParam);
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const keyword = searchInput ? searchInput.value.trim() : '';
            if (keyword) {
                jalankanPencarian(keyword);
            } else {
                searchInput.focus();
                resetKeTampilanAwal();
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const keyword = searchInput.value.trim();
                if (keyword) {
                    jalankanPencarian(keyword);
                } else {
                    resetKeTampilanAwal();
                }
            }
        });
    }

    if (headerLogo) {
        headerLogo.addEventListener('click', () => {
            resetKeTampilanAwal();
        });
    }

    function jalankanPencarian(keyword) {
        if (!keyword) {
            resetKeTampilanAwal();
            return;
        }

        const cleanKey = keyword.toLowerCase().replace(/\s+/g, '');
        const nopolTarget = kendaraanResmi.plat_nomor.toLowerCase().replace(/\s+/g, ''); // "aa9673jd"

        // Hanya cocok jika mencari "AA 9673 JD" (atau "9673" / "aa9673jd")
        const isMatch = (cleanKey === nopolTarget || cleanKey === '9673');

        if (isMatch) {
            tampilkanDataDitemukan(kendaraanResmi);
        } else {
            tampilkanDataTidakDitemukan(keyword);
        }
    }

    function tampilkanDataDitemukan(item) {
        if (!resultSection || !infoSection || !resultContentWrapper) return;

        infoSection.style.display = 'none';
        resultSection.style.display = 'block';

        resultContentWrapper.innerHTML = `
            <div class="result-title-bar">
                <span class="title-text">Yuk Cek Kendaraan Dinas</span>
                <button class="btn-reset-pencarian" id="resetBtn" type="button" title="Kembali ke tampilan awal">
                    <span class="material-icons" style="font-size: 13px;">arrow_back</span>
                    <span>Kembali</span>
                </button>
            </div>

            <div class="result-desc">
                Menampilkan kendaraan yang sesuai dengan pencarian Anda.
            </div>

            <div class="detail-card">
                <div class="detail-card-title">Detail Kendaraan</div>
                <table class="detail-table">
                    <tr>
                        <td class="col-label">Nomor</td>
                        <td class="col-value"><strong>${escapeHtml(item.nomor)}</strong></td>
                    </tr>
                    <tr>
                        <td class="col-label">Nomor Polisi</td>
                        <td class="col-value">${escapeHtml(item.plat_nomor)}</td>
                    </tr>
                    <tr>
                        <td class="col-label">Merk / Tipe</td>
                        <td class="col-value">${escapeHtml(item.merk_tipe)}</td>
                    </tr>
                    <tr>
                        <td class="col-label">OPD</td>
                        <td class="col-value">${escapeHtml(item.opd)}</td>
                    </tr>
                    <tr>
                        <td class="col-label">Status</td>
                        <td class="col-value"><span class="badge-aktif">${escapeHtml(item.status)}</span></td>
                    </tr>
                </table>
            </div>
        `;

        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', resetKeTampilanAwal);
        }
    }

    function tampilkanDataTidakDitemukan(keyword) {
        if (!resultSection || !infoSection || !resultContentWrapper) return;

        infoSection.style.display = 'none';
        resultSection.style.display = 'block';

        resultContentWrapper.innerHTML = `
            <div class="notif-header-bar">
                <div class="notif-header-left">
                    <div class="car-badge-icon">
                        <span class="material-icons">directions_car</span>
                    </div>
                    <span class="notif-title-text">Hasil Pencarian</span>
                </div>
                <button class="btn-reset-pencarian" id="resetBtnNotif" type="button" title="Kembali ke tampilan awal">
                    <span class="material-icons" style="font-size: 13px;">arrow_back</span>
                    <span>Kembali</span>
                </button>
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

        const resetBtnNotif = document.getElementById('resetBtnNotif');
        if (resetBtnNotif) {
            resetBtnNotif.addEventListener('click', resetKeTampilanAwal);
        }
    }

    function resetKeTampilanAwal() {
        if (searchInput) searchInput.value = '';
        if (infoSection) infoSection.style.display = 'flex';
        if (resultSection) resultSection.style.display = 'none';
        if (resultContentWrapper) resultContentWrapper.innerHTML = '';
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
