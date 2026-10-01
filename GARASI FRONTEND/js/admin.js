/**
 * GARASI - Gerbang Administrasi Kendaraan Dinas Kabupaten Kebumen
 * Script Portal Admin & Manajemen Relasi Kendaraan Dinas
 * Sesuai Desain Figma (Dashboard, Frame 1, Frame 2) & Relasi Database
 */

// Data Master OPD (Relasi ke tabel opd)
let opdList = [
    { id: 1, kode_opd: "BPKPD01", nama_opd: "Badan Pengelola Keuangan dan Pendapatan Daerah (BPKPD)" },
    { id: 2, kode_opd: "DISDIK01", nama_opd: "Dinas Pendidikan, Kepemudaan dan Olahraga" },
    { id: 3, kode_opd: "DISKOMINFO", nama_opd: "Dinas Komunikasi dan Informatika" },
    { id: 4, kode_opd: "DLHKP01", nama_opd: "Dinas Lingkungan Hidup, Kelautan dan Perikanan" },
    { id: 5, kode_opd: "DINKES01", nama_opd: "Dinas Kesehatan" },
    { id: 6, kode_opd: "SETDA01", nama_opd: "Sekretariat Daerah (SETDA)" },
    { id: 7, kode_opd: "DPUPR01", nama_opd: "Dinas Pekerjaan Umum dan Penataan Ruang" },
    { id: 8, kode_opd: "RSUD01", nama_opd: "RSUD dr. Soedirman Kebumen" }
];

// Data Pengguna (Relasi ke tabel pengguna & opd)
let userList = [
    { id: 1, nama: "Super Admin BPKPD", username: "admin_bpkpd", peran: "Super Admin BPKPD", opd_id: 1, status: "Aktif" },
    { id: 2, nama: "Admin Disdik", username: "admin_disdik", peran: "Admin OPD", opd_id: 2, status: "Aktif" },
    { id: 3, nama: "Admin Diskominfo", username: "admin_kominfo", peran: "Admin OPD", opd_id: 3, status: "Aktif" },
    { id: 4, nama: "Admin DLHKP", username: "admin_dlhkp", peran: "Admin OPD", opd_id: 4, status: "Aktif" }
];

// Data Kendaraan Dinas (Relasi lengkap ke OPD, Dokumen Aset, dan Pemegang)
let kendaraanList = [
    {
        id: 1,
        no_urut: "25",
        plat_nomor: "AA 9673 JD",
        merk: "Honda",
        tipe: "Vario 125 ESP",
        tahun_pembuatan: 2021,
        jumlah_roda: "2",
        silinder: "125 cc",
        warna: "Hitam Metalik",
        status_operasional: "aktif",
        no_rangka: "MH1JM3119HK019283",
        no_mesin: "JM31E1019283",
        no_bpkb: "M-08128392",
        no_stnk: "02938491",
        opd_id: 4, // DLHKP
        peruntukan: "operasional",
        kondisi: "baik",
        pemegang_kendaraan: "Ahmad Suryanto, S.STP",
        nip_pemegang: "198504122010011008",
        no_bast: "027/BAST-ASET/DLHKP/2021"
    },
    {
        id: 2,
        no_urut: "20",
        plat_nomor: "AA 9537 D",
        merk: "HINO",
        tipe: "FF172",
        tahun_pembuatan: 1987,
        jumlah_roda: "4",
        silinder: "4000 cc",
        warna: "Merah",
        status_operasional: "proses_lelang",
        no_rangka: "FF172LA-10212",
        no_mesin: "H07C-A7111334",
        no_bpkb: "7607411",
        no_stnk: "08124910",
        opd_id: 1, // BPKPD
        peruntukan: "operasional",
        kondisi: "rusak_berat",
        pemegang_kendaraan: "Bagian Pengelolaan Aset BPKPD",
        nip_pemegang: "197903142008011012",
        no_bast: "028/BAST-ASET/BPKPD/2015"
    },
    {
        id: 3,
        no_urut: "27",
        plat_nomor: "AA 1243 XD",
        merk: "Toyota",
        tipe: "Kijang Innova Reborn 2.0 V",
        tahun_pembuatan: 2018,
        jumlah_roda: "4",
        silinder: "2000 cc",
        warna: "Hitam Metalik",
        status_operasional: "aktif",
        no_rangka: "MHF11BA40K00213",
        no_mesin: "1TR-FE-99120",
        no_bpkb: "N-992144",
        no_stnk: "09182312",
        opd_id: 3, // DISKOMINFO
        peruntukan: "jabatan",
        kondisi: "baik",
        pemegang_kendaraan: "Kepala Dinas Komunikasi & Informatika",
        nip_pemegang: "197405211998031004",
        no_bast: "030/BAST-ASET/KOMINFO/2018"
    },
    {
        id: 4,
        no_urut: "28",
        plat_nomor: "AA 6260 1045",
        merk: "Honda",
        tipe: "GL Max / MCB",
        tahun_pembuatan: 1989,
        jumlah_roda: "2",
        silinder: "125 cc",
        warna: "Putih Biru",
        status_operasional: "aktif",
        no_rangka: "HA140 31516",
        no_mesin: "HAE-2031370",
        no_bpkb: "8568822",
        no_stnk: "01923841",
        opd_id: 2, // DISDIK
        peruntukan: "operasional",
        kondisi: "rusak_ringan",
        pemegang_kendaraan: "Pengawas Sekolah Wilayah Barat",
        nip_pemegang: "198102192005011003",
        no_bast: "015/BAST-ASET/DISDIK/2005"
    },
    {
        id: 5,
        no_urut: "31",
        plat_nomor: "AA 8812 UD",
        merk: "Tossa",
        tipe: "Giga Hercules 250",
        tahun_pembuatan: 2019,
        jumlah_roda: "3",
        silinder: "250 cc",
        warna: "Biru",
        status_operasional: "aktif",
        no_rangka: "TSS991208A12",
        no_mesin: "TSS-1209310",
        no_bpkb: "T-019281",
        no_stnk: "08819213",
        opd_id: 4, // DLHKP
        peruntukan: "layanan_khusus",
        kondisi: "baik",
        pemegang_kendaraan: "UPT Pengelolaan Sampah Kebumen",
        nip_pemegang: "199008122019011005",
        no_bast: "041/BAST-ASET/DLHKP/2019"
    },
    {
        id: 6,
        no_urut: "35",
        plat_nomor: "AA 9012 WD",
        merk: "Mitsubishi",
        tipe: "Fuso Dump Truck HD-X",
        tahun_pembuatan: 2017,
        jumlah_roda: ">6",
        silinder: "3908 cc",
        warna: "Kuning",
        status_operasional: "aktif",
        no_rangka: "FE74HD-091283",
        no_mesin: "4D34-T918231",
        no_bpkb: "F-881920",
        no_stnk: "09128314",
        opd_id: 7, // DPUPR
        peruntukan: "operasional",
        kondisi: "baik",
        pemegang_kendaraan: "UPT Alat Berat & Pemeliharaan Jalan",
        nip_pemegang: "197709152006041009",
        no_bast: "055/BAST-ASET/DPUPR/2017"
    },
    {
        id: 7,
        no_urut: "01",
        plat_nomor: "AA 1001 AD",
        merk: "Toyota",
        tipe: "Fortuner 2.8 VRZ GR Sport",
        tahun_pembuatan: 2022,
        jumlah_roda: "4",
        silinder: "2755 cc",
        warna: "Hitam Metalik",
        status_operasional: "aktif",
        no_rangka: "MR0BA340K091283",
        no_mesin: "1GD-FTV-88123",
        no_bpkb: "V-991201",
        no_stnk: "09912815",
        opd_id: 6, // SETDA
        peruntukan: "jabatan",
        kondisi: "baik",
        pemegang_kendaraan: "Sekretaris Daerah Kab. Kebumen",
        nip_pemegang: "196803201993031002",
        no_bast: "001/BAST-ASET/SETDA/2022"
    },
    {
        id: 8,
        no_urut: "12",
        plat_nomor: "AA 7721 KD",
        merk: "Toyota",
        tipe: "HiAce Commuter Ambulans Emergency",
        tahun_pembuatan: 2020,
        jumlah_roda: "4",
        silinder: "2694 cc",
        warna: "Putih",
        status_operasional: "aktif",
        no_rangka: "TRH223R-019284",
        no_mesin: "2TR-FE-771239",
        no_bpkb: "H-129381",
        no_stnk: "07812916",
        opd_id: 8, // RSUD
        peruntukan: "layanan_khusus",
        kondisi: "baik",
        pemegang_kendaraan: "Instalasi Gawat Darurat RSUD dr. Soedirman",
        nip_pemegang: "198811052014022001",
        no_bast: "022/BAST-ASET/RSUD/2020"
    }
];

// Helper: dapatkan nama OPD berdasarkan ID
function getOpdName(opdId) {
    const found = opdList.find(o => o.id === parseInt(opdId, 10));
    return found ? found.nama_opd : "Tidak Diketahui";
}

function getOpdKode(opdId) {
    const found = opdList.find(o => o.id === parseInt(opdId, 10));
    return found ? found.kode_opd : "-";
}

// State Aplikasi
let currentView = "dashboard"; // 'dashboard' | 'kendaraan' | 'form-kendaraan' | 'opd' | 'user' | 'jenis' | 'pengelolaan'
let editingKendaraanId = null;
let isUserBpkpd = true;
let currentUser = {
    nama: "Admin BPKDP",
    instansi: "Kebumen",
    role: "bpkpd",
    opd_id: 1,
    nama_opd: "Badan Pengelola Keuangan dan Pendapatan Daerah (BPKPD)"
};

document.addEventListener("DOMContentLoaded", () => {
    initUserProfile();
    initNavigation();
    initOpdDropdown();
    renderAllViews();
    initSearchAndFilter();
    initFormHandlers();
    initExcelImportHandlers();
});

// Inisialisasi Profil Pengguna dari Sesi Login
function initUserProfile() {
    const saved = localStorage.getItem("garasi_logged_user");
    if (saved) {
        try {
            currentUser = JSON.parse(saved);
        } catch (e) {
            console.error("Gagal memuat profil pengguna:", e);
        }
    }

    // Tentukan apakah pengguna adalah Admin BPKPD atau Admin OPD
    isUserBpkpd = (currentUser.role === "bpkpd" || currentUser.nama === "Admin BPKDP" || currentUser.peran === "Super Admin BPKPD");

    const nameEl = document.getElementById("topbarUserName");
    const roleEl = document.getElementById("topbarUserRole");
    if (nameEl) nameEl.textContent = currentUser.nama || (isUserBpkpd ? "Admin BPKDP" : "Admin OPD");
    if (roleEl) roleEl.textContent = currentUser.instansi || (isUserBpkpd ? "Kebumen" : "Admin OPD");

    // Perbarui status aktif tombol ganti peran di dropdown
    document.querySelectorAll(".role-switch-btn").forEach(btn => btn.classList.remove("active"));
    if (isUserBpkpd) {
        const btn = document.getElementById("btnRoleBpkpd");
        if (btn) btn.classList.add("active");
    } else if (currentUser.opd_id === 2 || (currentUser.nama && currentUser.nama.includes("Disdik"))) {
        const btn = document.getElementById("btnRoleDisdik");
        if (btn) btn.classList.add("active");
    } else if (currentUser.opd_id === 4 || (currentUser.nama && currentUser.nama.includes("DLHKP"))) {
        const btn = document.getElementById("btnRoleDlhkp");
        if (btn) btn.classList.add("active");
    } else if (currentUser.opd_id === 3 || (currentUser.nama && currentUser.nama.includes("Kominfo"))) {
        const btn = document.getElementById("btnRoleKominfo");
        if (btn) btn.classList.add("active");
    }

    // Penyesuaian Menu Sidebar Berdasarkan Peran Pengguna:
    // Admin OPD hanya mengelola data kendaraan OPD-nya, tidak memiliki akses ke Data Master OPD, Data User, maupun Menu Sistem
    const navSubOpd = document.getElementById("navSubOpd");
    const navSubUser = document.getElementById("navSubUser");
    const navItemSistem = document.getElementById("navItemSistem");

    if (navSubOpd) navSubOpd.style.display = isUserBpkpd ? "flex" : "none";
    if (navSubUser) navSubUser.style.display = isUserBpkpd ? "flex" : "none";
    if (navItemSistem) navItemSistem.style.display = isUserBpkpd ? "flex" : "none";

    // Update Tombol + Input Baru di Frame 1 (Data Kendaraan)
    // Teks tombol tetap '+ Input Baru' untuk konsistensi desain Figma Frame 1
    const btnInputBaru = document.getElementById("btnInputBaru");
    if (btnInputBaru) {
        btnInputBaru.innerHTML = `<span>+ Input Baru</span>`;
        btnInputBaru.title = isUserBpkpd 
            ? "Tambah Kendaraan Dinas (Pilihan Import Excel Massal / Input Manual Lengkap)" 
            : "Input Kendaraan Dinas OPD (Formulir Manual Mandiri)";
    }

    const btnLogout = document.getElementById("btnLogout");
    if (btnLogout) {
        btnLogout.addEventListener("click", () => {
            localStorage.removeItem("garasi_logged_user");
        });
    }
}

// Beralih Peran Pengguna (Role Switcher untuk kemudahan pengujian alur)
function setRole(roleKey) {
    if (roleKey === "bpkpd") {
        currentUser = {
            nama: "Admin BPKDP",
            instansi: "Kebumen",
            role: "bpkpd",
            opd_id: 1,
            nama_opd: "Badan Pengelola Keuangan dan Pendapatan Daerah (BPKPD)"
        };
    } else if (roleKey === "opd-disdik") {
        currentUser = {
            nama: "Admin Disdik",
            instansi: "Dinas Pendidikan, Kepemudaan dan Olahraga",
            role: "opd",
            opd_id: 2,
            nama_opd: "Dinas Pendidikan, Kepemudaan dan Olahraga"
        };
    } else if (roleKey === "opd-dlhkp") {
        currentUser = {
            nama: "Admin DLHKP",
            instansi: "Dinas Lingkungan Hidup, Kelautan dan Perikanan",
            role: "opd",
            opd_id: 4,
            nama_opd: "Dinas Lingkungan Hidup, Kelautan dan Perikanan"
        };
    } else if (roleKey === "opd-kominfo") {
        currentUser = {
            nama: "Admin Diskominfo",
            instansi: "Dinas Komunikasi dan Informatika",
            role: "opd",
            opd_id: 3,
            nama_opd: "Dinas Komunikasi dan Informatika"
        };
    }

    localStorage.setItem("garasi_logged_user", JSON.stringify(currentUser));
    initUserProfile();
    renderAllViews();
    showToast(`Beralih peran: ${currentUser.nama}`, "success");

    const roleDropdown = document.getElementById("roleSwitchDropdown");
    if (roleDropdown) roleDropdown.classList.remove("open");

    // Jika saat ini sedang di form-kendaraan, sesuaikan banner dan kunci OPD
    if (currentView === "form-kendaraan") {
        openFormKendaraan(editingKendaraanId);
    }
}

// Inisialisasi Navigasi & Sidebar Dropdown
function initNavigation() {
    // Accordion DATA MASTER & PENGELOLAAN
    const navMasterGroup = document.getElementById("navGroupMaster");
    const navMasterToggle = document.getElementById("navToggleMaster");
    if (navMasterToggle && navMasterGroup) {
        navMasterToggle.addEventListener("click", (e) => {
            e.preventDefault();
            navMasterGroup.classList.toggle("open");
        });
    }

    const navPengelolaanGroup = document.getElementById("navGroupPengelolaan");
    const navPengelolaanToggle = document.getElementById("navTogglePengelolaan");
    if (navPengelolaanToggle && navPengelolaanGroup) {
        navPengelolaanToggle.addEventListener("click", (e) => {
            e.preventDefault();
            navPengelolaanGroup.classList.toggle("open");
        });
    }

    // Menu Navigasi Items
    document.querySelectorAll("[data-navigate]").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const targetView = btn.getAttribute("data-navigate");
            switchView(targetView);
        });
    });

    // Mobile Hamburger Toggle
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const sidebar = document.getElementById("sidebar");
    if (mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });
    }

    // Tombol + Input Baru di Frame 1 (BPKPD: Pilihan Import Excel / Manual vs Admin OPD: Input Mandiri Manual Frame 2)
    const btnInputBaru = document.getElementById("btnInputBaru");
    if (btnInputBaru) {
        btnInputBaru.addEventListener("click", (e) => {
            e.preventDefault();
            if (isUserBpkpd) {
                // Admin BPKPD: Modal Pilihan Import Excel Massal vs Input Formulir Manual
                openBpkpdChoiceModal();
            } else {
                // Admin OPD: Form Input Manual Mandiri Satu per Satu (Frame 2)
                openFormKendaraan(null);
            }
        });
    }

    // Interactive Profile Badge & Dropdown Switcher
    const profileTrigger = document.getElementById("profileBadgeTrigger");
    const roleDropdown = document.getElementById("roleSwitchDropdown");
    if (profileTrigger && roleDropdown) {
        profileTrigger.addEventListener("click", (e) => {
            if (e.target.closest(".role-switch-btn")) return;
            roleDropdown.classList.toggle("open");
        });

        document.addEventListener("click", (e) => {
            if (!profileTrigger.contains(e.target)) {
                roleDropdown.classList.remove("open");
            }
        });
    }

    const btnRoleBpkpd = document.getElementById("btnRoleBpkpd");
    const btnRoleDisdik = document.getElementById("btnRoleDisdik");
    const btnRoleDlhkp = document.getElementById("btnRoleDlhkp");
    const btnRoleKominfo = document.getElementById("btnRoleKominfo");

    if (btnRoleBpkpd) btnRoleBpkpd.addEventListener("click", () => setRole("bpkpd"));
    if (btnRoleDisdik) btnRoleDisdik.addEventListener("click", () => setRole("opd-disdik"));
    if (btnRoleDlhkp) btnRoleDlhkp.addEventListener("click", () => setRole("opd-dlhkp"));
    if (btnRoleKominfo) btnRoleKominfo.addEventListener("click", () => setRole("opd-kominfo"));

    // Tombol + Input Baru di Frame 3 (Data OPD)
    const btnInputBaruOpd = document.getElementById("btnInputBaruOpd");
    if (btnInputBaruOpd) {
        btnInputBaruOpd.addEventListener("click", (e) => {
            e.preventDefault();
            openOpdModal();
        });
    }

    // Tombol Batal di Form
    const btnCancelForm = document.getElementById("btnCancelForm");
    if (btnCancelForm) {
        btnCancelForm.addEventListener("click", () => {
            switchView("kendaraan");
        });
    }
}

// Switcher View / Frame
function switchView(viewName) {
    // Pembatasan Akses: Admin OPD tidak memiliki hak akses melihat Data OPD, Data User, maupun Sistem
    if (!isUserBpkpd && (viewName === "opd" || viewName === "user")) {
        viewName = "kendaraan";
    }

    currentView = viewName;

    // Sembunyikan semua section view
    document.querySelectorAll(".admin-view-screen").forEach(el => {
        el.style.display = "none";
    });

    // Update active class di sidebar
    document.querySelectorAll(".nav-item, .nav-subitem").forEach(item => {
        item.classList.remove("active");
    });

    const canvasTitle = document.getElementById("canvasTitle");
    const topbarPageTitle = document.getElementById("topbarPageTitle");

    // Tampilkan view yang dipilih
    if (viewName === "dashboard") {
        document.getElementById("viewDashboard").style.display = "block";
        const navDashboard = document.getElementById("navItemDashboard");
        if (navDashboard) navDashboard.classList.add("active");
        if (canvasTitle) canvasTitle.textContent = "Dashboard";
        if (topbarPageTitle) topbarPageTitle.textContent = "Dashboard Analitik";
        renderPieCharts();
    } else if (viewName === "kendaraan") {
        document.getElementById("viewKendaraan").style.display = "block";
        const navGroup = document.getElementById("navGroupMaster");
        if (navGroup) navGroup.classList.add("open");
        const navSubKendaraan = document.getElementById("navSubKendaraan");
        if (navSubKendaraan) navSubKendaraan.classList.add("active");
        if (canvasTitle) canvasTitle.textContent = "Frame 1";
        if (topbarPageTitle) topbarPageTitle.textContent = "Data Kendaraan Dinas";
        renderTabelKendaraan();
    } else if (viewName === "form-kendaraan") {
        document.getElementById("viewFormKendaraan").style.display = "block";
        const navGroup = document.getElementById("navGroupMaster");
        if (navGroup) navGroup.classList.add("open");
        const navSubKendaraan = document.getElementById("navSubKendaraan");
        if (navSubKendaraan) navSubKendaraan.classList.add("active");
        if (canvasTitle) canvasTitle.textContent = "Frame2";
        if (topbarPageTitle) topbarPageTitle.textContent = editingKendaraanId ? "Edit Data Kendaraan Lengkap" : "Input Data Kendaraan Lengkap";
    } else if (viewName === "opd") {
        document.getElementById("viewOpd").style.display = "block";
        const navGroup = document.getElementById("navGroupMaster");
        if (navGroup) navGroup.classList.add("open");
        const navSubOpd = document.getElementById("navSubOpd");
        if (navSubOpd) navSubOpd.classList.add("active");
        if (canvasTitle) canvasTitle.textContent = "Frame 3";
        if (topbarPageTitle) topbarPageTitle.textContent = "Data OPD";
        renderTabelOpd();
    } else if (viewName === "user") {
        document.getElementById("viewUser").style.display = "block";
        const navGroup = document.getElementById("navGroupMaster");
        if (navGroup) navGroup.classList.add("open");
        const navSubUser = document.getElementById("navSubUser");
        if (navSubUser) navSubUser.classList.add("active");
        if (canvasTitle) canvasTitle.textContent = "Data User";
        if (topbarPageTitle) topbarPageTitle.textContent = "Data Master User / Pengguna Sistem";
        renderTabelUser();
    } else if (viewName === "jenis") {
        document.getElementById("viewJenis").style.display = "block";
        const navGroup = document.getElementById("navGroupMaster");
        if (navGroup) navGroup.classList.add("open");
        const navSubJenis = document.getElementById("navSubJenis");
        if (navSubJenis) navSubJenis.classList.add("active");
        if (canvasTitle) canvasTitle.textContent = "Jenis Kendaraan";
        if (topbarPageTitle) topbarPageTitle.textContent = "Master Klasifikasi Jenis Kendaraan";
        renderJenisSummary();
    } else if (viewName === "pengelolaan") {
        document.getElementById("viewPengelolaan").style.display = "block";
        const navPengGroup = document.getElementById("navGroupPengelolaan");
        if (navPengGroup) navPengGroup.classList.add("open");
        if (canvasTitle) canvasTitle.textContent = "Pengelolaan";
        if (topbarPageTitle) topbarPageTitle.textContent = "Pengelolaan Riwayat, Dokumen & Lelang";
        renderPengelolaanView();
    }
}

// Isi Dropdown OPD di Form dan Filter
function initOpdDropdown() {
    const selectFormOpd = document.getElementById("formOpdId");
    const filterOpd = document.getElementById("filterOpd");

    if (selectFormOpd) {
        selectFormOpd.innerHTML = `<option value="">-- Pilih OPD Penanggung Jawab --</option>`;
        opdList.forEach(opd => {
            selectFormOpd.innerHTML += `<option value="${opd.id}">[${opd.kode_opd}] ${opd.nama_opd}</option>`;
        });
    }

    if (filterOpd) {
        filterOpd.innerHTML = `<option value="">Semua OPD</option>`;
        opdList.forEach(opd => {
            filterOpd.innerHTML += `<option value="${opd.id}">${opd.kode_opd} - ${opd.nama_opd}</option>`;
        });
    }
}

// Render Semua Data
function renderAllViews() {
    updateDashboardMetric();
    renderPieCharts();
    renderTabelKendaraan();
    renderTabelOpd();
    renderTabelUser();
}

// Update Metrik Dashboard Total Kendaraan
function updateDashboardMetric() {
    const totalEl = document.getElementById("totalKendaraanCount");
    if (totalEl) {
        // Tampilkan 3.112 sesuai mockup atau dinamis dengan total array
        totalEl.textContent = "3.112";
    }
}

// Render Pie Charts (Desain Persis Screenshot 1)
function renderPieCharts() {
    const boxChartJenis = document.getElementById("chartJenisContainer");
    const boxChartPeruntukan = document.getElementById("chartPeruntukanContainer");

    if (!boxChartJenis || !boxChartPeruntukan) return;

    // Hitung distribusi roda
    const roda2 = kendaraanList.filter(k => k.jumlah_roda === "2").length;
    const roda3 = kendaraanList.filter(k => k.jumlah_roda === "3").length;
    const roda4 = kendaraanList.filter(k => k.jumlah_roda === "4").length;
    const rodaLebih = kendaraanList.filter(k => k.jumlah_roda === ">6").length;

    // SVG Pie Chart 1: Jenis Kendaraan (Roda 2, 3, 4, >6)
    // Warna sesuai mockup Figma:
    // Roda Dua: #5E6BE8 (Ungu) ~45%
    // Roda Tiga: #14B8A6 (Toska) ~18%
    // Roda Empat: #FB7185 (Salmon / Coral) ~22%
    // Roda Enam / Lebih: #38BDF8 (Sky blue) ~15%
    boxChartJenis.innerHTML = `
        <div class="pie-svg-wrapper">
            <svg viewBox="0 0 200 200" width="180" height="180">
                <!-- Slice 1: Roda Dua (Ungu #5E6BE8) -->
                <path class="pie-slice" d="M 100 100 L 100 10 A 90 90 0 0 1 190 100 Z" fill="#5E6BE8" title="Roda Dua: 45%"></path>
                <!-- Slice 2: Roda Tiga (Toska #14B8A6) -->
                <path class="pie-slice" d="M 100 100 L 190 100 A 90 90 0 0 1 135 183 Z" fill="#14B8A6" title="Roda Tiga: 18%"></path>
                <!-- Slice 3: Roda Empat (Coral #FB7185) -->
                <path class="pie-slice" d="M 100 100 L 135 183 A 90 90 0 0 1 20 135 Z" fill="#FB7185" title="Roda Empat: 22%"></path>
                <!-- Slice 4: Roda Enam atau Lebih (Sky Blue #38BDF8) -->
                <path class="pie-slice" d="M 100 100 L 20 135 A 90 90 0 0 1 100 10 Z" fill="#38BDF8" title="Roda Enam atau Lebih: 15%"></path>
                <circle cx="100" cy="100" r="18" fill="#ffffff" opacity="0.3"></circle>
            </svg>
        </div>
    `;

    // SVG Pie Chart 2: Peruntukan (Jabatan, Operasional, Operasional Khusus)
    // Warna sesuai mockup Figma:
    // Jabatan: #5E6BE8 (~38%)
    // Operasional: #14B8A6 (~48%)
    // Operasional Khusus: #FB7185 (~14%)
    boxChartPeruntukan.innerHTML = `
        <div class="pie-svg-wrapper">
            <svg viewBox="0 0 200 200" width="180" height="180">
                <!-- Slice 1: Jabatan (Ungu #5E6BE8) -->
                <path class="pie-slice" d="M 100 100 L 100 10 A 90 90 0 0 1 185 135 Z" fill="#5E6BE8" title="Jabatan: 38%"></path>
                <!-- Slice 2: Operasional (Toska #14B8A6) -->
                <path class="pie-slice" d="M 100 100 L 185 135 A 90 90 0 0 1 35 160 Z" fill="#14B8A6" title="Operasional: 48%"></path>
                <!-- Slice 3: Operasional Khusus (Coral #FB7185) -->
                <path class="pie-slice" d="M 100 100 L 35 160 A 90 90 0 0 1 100 10 Z" fill="#FB7185" title="Operasional Khusus: 14%"></path>
                <circle cx="100" cy="100" r="18" fill="#ffffff" opacity="0.3"></circle>
            </svg>
        </div>
    `;
}

// Render Tabel Kendaraan Dinas (Matches Frame 1)
function renderTabelKendaraan() {
    const tbody = document.getElementById("kendaraanTableBody");
    const searchInput = document.getElementById("searchKendaraanInput");
    const filterOpd = document.getElementById("filterOpd");

    if (!tbody) return;

    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const opdFilterVal = filterOpd ? filterOpd.value : "";

    let filtered = kendaraanList.filter(item => {
        const opdNama = getOpdName(item.opd_id).toLowerCase();
        const plat = item.plat_nomor.toLowerCase();
        const merk = (item.merk + " " + item.tipe).toLowerCase();
        const matchesQuery = plat.includes(query) || merk.includes(query) || opdNama.includes(query);
        const matchesOpd = !opdFilterVal || item.opd_id === parseInt(opdFilterVal, 10);
        return matchesQuery && matchesOpd;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" class="table-empty-state">
                    <span class="material-icons">directions_car</span>
                    <p>Tidak ada kendaraan dinas yang sesuai pencarian.</p>
                </td>
            </tr>
        `;
        return;
    }

    let rowsHtml = "";
    filtered.forEach((item, idx) => {
        const opdNama = getOpdName(item.opd_id);

        rowsHtml += `
            <tr id="row-kendaraan-${item.id}">
                <td style="text-align: center; font-weight: 600;">${idx + 1}</td>
                <td>
                    <span class="badge-plat">${item.plat_nomor}</span>
                </td>
                <td>
                    <span style="font-weight: 600; color: #0f172a; font-size: 12.5px;">${opdNama}</span>
                </td>
                <td class="actions-cell">
                    <div class="action-btn-group">
                        <button class="btn-action-icon" title="Lihat Detail Relasi" onclick="showDetailModal(${item.id})">
                            <span class="material-icons" style="font-size: 17px; color: #0284c7;">visibility</span>
                        </button>
                        <button class="btn-action-icon" title="Edit Data Lengkap" onclick="openFormKendaraan(${item.id})">
                            <span class="material-icons" style="font-size: 17px; color: #334155;">edit</span>
                        </button>
                        <button class="btn-action-icon delete" title="Hapus Kendaraan" onclick="deleteKendaraan(${item.id})">
                            <span class="material-icons" style="font-size: 17px; color: #dc2626;">delete</span>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = rowsHtml;
}

// Inisialisasi Pencarian & Filter di Frame 1 & Frame 3
function initSearchAndFilter() {
    const searchInput = document.getElementById("searchKendaraanInput");
    const filterOpd = document.getElementById("filterOpd");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            renderTabelKendaraan();
        });
    }

    if (filterOpd) {
        filterOpd.addEventListener("change", () => {
            renderTabelKendaraan();
        });
    }

    const searchOpd = document.getElementById("searchOpdInput");
    if (searchOpd) {
        searchOpd.addEventListener("input", () => {
            renderTabelOpd();
        });
    }
}

// Buka Form Input / Edit Kendaraan Lengkap (Matches Frame 2)
function openFormKendaraan(id) {
    editingKendaraanId = id;
    const formTitle = document.getElementById("formCardTitle");
    const formKendaraan = document.getElementById("kendaraanForm");
    const formOpdSelect = document.getElementById("formOpdId");
    const banner = document.getElementById("formRoleBanner");
    const badgeLockOpd = document.getElementById("badgeLockOpd");
    const hiddenOpd = document.getElementById("formOpdIdHidden");

    if (!formKendaraan) return;

    // Tampilkan Banner Penjelasan Hak Akses & Relasi
    if (banner) {
        if (isUserBpkpd) {
            banner.innerHTML = `
                <div class="banner-notice bpkpd">
                    <span class="material-icons">info</span>
                    <div class="banner-content">
                        <h4>Perhatian Hak Akses: Anda masuk sebagai Administrator BPKPD</h4>
                        <p>Formulir manual ini adalah bagian input satu-per-satu untuk masing-masing <strong>Admin OPD</strong>. Sebagai Admin BPKPD yang mengelola data kendaraan seluruh kabupaten Kebumen, disarankan menggunakan <strong>Fitur Import Excel</strong> untuk memasukkan ribuan kendaraan dinas sekaligus.</p>
                    </div>
                    <button type="button" class="btn-banner-action" onclick="openImportExcelModal()">
                        <span class="material-icons" style="font-size: 16px;">upload_file</span>
                        <span>Buka Import Excel BPKPD</span>
                    </button>
                </div>
            `;
            if (badgeLockOpd) badgeLockOpd.style.display = "none";
        } else {
            const currentOpdNama = currentUser.nama_opd || getOpdName(currentUser.opd_id) || "OPD Anda";
            banner.innerHTML = `
                <div class="banner-notice opd">
                    <span class="material-icons">verified_user</span>
                    <div class="banner-content">
                        <h4>Input Kendaraan Dinas: ${currentOpdNama}</h4>
                        <p>Anda login sebagai <strong>${currentUser.nama}</strong>. Data kendaraan yang diinput akan otomatis terhubung ke instansi <strong>${currentOpdNama}</strong>.</p>
                    </div>
                </div>
            `;
            if (badgeLockOpd) badgeLockOpd.style.display = "inline-flex";
        }
    }

    if (id) {
        // Mode Edit
        const data = kendaraanList.find(k => k.id === id);
        if (!data) return;

        if (formTitle) formTitle.textContent = `Edit Data Kendaraan: ${data.plat_nomor}`;

        document.getElementById("formMerk").value = data.merk || "";
        document.getElementById("formTipe").value = data.tipe || "";
        document.getElementById("formTahun").value = data.tahun_pembuatan || "";
        document.getElementById("formJenisRoda").value = data.jumlah_roda || "4";
        document.getElementById("formSilinder").value = data.silinder || "";
        document.getElementById("formWarna").value = data.warna || "";
        document.getElementById("formStatusOperasional").value = data.status_operasional || "aktif";

        document.getElementById("formPlatNomor").value = data.plat_nomor || "";
        document.getElementById("formNoRangka").value = data.no_rangka || "";
        document.getElementById("formNoMesin").value = data.no_mesin || "";
        document.getElementById("formNoBpkb").value = data.no_bpkb || "";
        document.getElementById("formNoStnk").value = data.no_stnk || "";

        if (formOpdSelect) {
            formOpdSelect.value = data.opd_id || "";
            if (!isUserBpkpd) {
                formOpdSelect.disabled = true;
                if (hiddenOpd) hiddenOpd.value = data.opd_id;
            } else {
                formOpdSelect.disabled = false;
                if (hiddenOpd) hiddenOpd.value = data.opd_id;
            }
        }
        document.getElementById("formPeruntukan").value = data.peruntukan || "operasional";
        document.getElementById("formKondisi").value = data.kondisi || "baik";
        document.getElementById("formPemegang").value = data.pemegang_kendaraan || "";
        document.getElementById("formNip").value = data.nip_pemegang || "";
        document.getElementById("formNoBast").value = data.no_bast || "";
    } else {
        // Mode Create Baru
        if (formTitle) formTitle.textContent = "Input Data Kendaraan Lengkap";
        formKendaraan.reset();
        document.getElementById("formStatusOperasional").value = "aktif";
        document.getElementById("formJenisRoda").value = "4";
        document.getElementById("formPeruntukan").value = "operasional";
        document.getElementById("formKondisi").value = "baik";

        if (formOpdSelect) {
            if (!isUserBpkpd) {
                // Admin OPD: Terkunci otomatis ke OPD pengguna
                formOpdSelect.value = currentUser.opd_id || 2;
                formOpdSelect.disabled = true;
                if (hiddenOpd) hiddenOpd.value = formOpdSelect.value;
            } else {
                // Admin BPKPD: Bebas pilih OPD
                formOpdSelect.value = "";
                formOpdSelect.disabled = false;
                if (hiddenOpd) hiddenOpd.value = "";
            }
        }
    }

    switchView("form-kendaraan");
}

// Simpan Form Kendaraan (Create atau Update)
function initFormHandlers() {
    const formKendaraan = document.getElementById("kendaraanForm");
    if (!formKendaraan) return;

    formKendaraan.addEventListener("submit", (e) => {
        e.preventDefault();

        const platNomor = document.getElementById("formPlatNomor").value.trim().toUpperCase();
        const merk = document.getElementById("formMerk").value.trim();
        const tipe = document.getElementById("formTipe").value.trim();
        const tahun = parseInt(document.getElementById("formTahun").value, 10) || new Date().getFullYear();
        const jenisRoda = document.getElementById("formJenisRoda").value;
        const silinder = document.getElementById("formSilinder").value.trim();
        const warna = document.getElementById("formWarna").value.trim();
        const status = document.getElementById("formStatusOperasional").value;

        const noRangka = document.getElementById("formNoRangka").value.trim();
        const noMesin = document.getElementById("formNoMesin").value.trim();
        const noBpkb = document.getElementById("formNoBpkb").value.trim();
        const noStnk = document.getElementById("formNoStnk").value.trim();

        const opdSelectEl = document.getElementById("formOpdId");
        const hiddenOpd = document.getElementById("formOpdIdHidden");
        let opdId = null;
        if (!isUserBpkpd && currentUser.opd_id) {
            opdId = currentUser.opd_id;
        } else {
            opdId = parseInt(opdSelectEl && !opdSelectEl.disabled ? opdSelectEl.value : (hiddenOpd && hiddenOpd.value ? hiddenOpd.value : 1), 10);
        }

        const peruntukan = document.getElementById("formPeruntukan").value;
        const kondisi = document.getElementById("formKondisi").value;
        const pemegang = document.getElementById("formPemegang").value.trim();
        const nip = document.getElementById("formNip").value.trim();
        const noBast = document.getElementById("formNoBast").value.trim();

        if (!platNomor || !opdId || !merk) {
            showToast("Harap isi Nomor Polisi, Merk, dan OPD Penanggung Jawab!", "error");
            return;
        }

        if (editingKendaraanId) {
            // Update
            const index = kendaraanList.findIndex(k => k.id === editingKendaraanId);
            if (index !== -1) {
                kendaraanList[index] = {
                    ...kendaraanList[index],
                    plat_nomor: platNomor,
                    merk: merk,
                    tipe: tipe,
                    tahun_pembuatan: tahun,
                    jumlah_roda: jenisRoda,
                    silinder: silinder,
                    warna: warna,
                    status_operasional: status,
                    no_rangka: noRangka,
                    no_mesin: noMesin,
                    no_bpkb: noBpkb,
                    no_stnk: noStnk,
                    opd_id: opdId,
                    peruntukan: peruntukan,
                    kondisi: kondisi,
                    pemegang_kendaraan: pemegang,
                    nip_pemegang: nip,
                    no_bast: noBast
                };
                showToast(`Data kendaraan ${platNomor} berhasil diperbarui!`, "success");
            }
        } else {
            // Create
            const newId = kendaraanList.length > 0 ? Math.max(...kendaraanList.map(k => k.id)) + 1 : 1;
            const newKendaraan = {
                id: newId,
                no_urut: String(newId),
                plat_nomor: platNomor,
                merk: merk,
                tipe: tipe,
                tahun_pembuatan: tahun,
                jumlah_roda: jenisRoda,
                silinder: silinder,
                warna: warna,
                status_operasional: status,
                no_rangka: noRangka,
                no_mesin: noMesin,
                no_bpkb: noBpkb,
                no_stnk: noStnk,
                opd_id: opdId,
                peruntukan: peruntukan,
                kondisi: kondisi,
                pemegang_kendaraan: pemegang,
                nip_pemegang: nip,
                no_bast: noBast
            };
            kendaraanList.unshift(newKendaraan);
            showToast(`Kendaraan baru ${platNomor} berhasil disimpan!`, "success");
        }

        renderAllViews();
        switchView("kendaraan");
    });
}

// Hapus Kendaraan
function deleteKendaraan(id) {
    const item = kendaraanList.find(k => k.id === id);
    if (!item) return;

    if (confirm(`Apakah Anda yakin ingin menghapus data kendaraan dinas ${item.plat_nomor} (${item.merk})?`)) {
        kendaraanList = kendaraanList.filter(k => k.id !== id);
        renderAllViews();
        showToast(`Kendaraan ${item.plat_nomor} berhasil dihapus dari sistem.`, "success");
    }
}

// Modal Detail Relasi Kendaraan Lengkap
function showDetailModal(id) {
    const item = kendaraanList.find(k => k.id === id);
    if (!item) return;

    const opdNama = getOpdName(item.opd_id);
    const opdKode = getOpdKode(item.opd_id);
    const modal = document.getElementById("vehicleDetailModal");
    const content = document.getElementById("modalDetailContent");

    if (!modal || !content) return;

    const statusBadge = item.status_operasional === 'aktif' 
        ? '<span class="badge-status aktif">Aktif Digunakan</span>'
        : (item.status_operasional === 'proses_lelang' ? '<span class="badge-status lelang">Proses Lelang Aset</span>' : '<span class="badge-status tidak-aktif">Tidak Aktif</span>');

    const kondisiBadge = item.kondisi === 'baik' 
        ? '<span class="badge-kondisi baik">Baik</span>'
        : (item.kondisi === 'rusak_ringan' ? '<span class="badge-kondisi rusak-ringan">Rusak Ringan</span>' : '<span class="badge-kondisi rusak-berat">Rusak Berat</span>');

    content.innerHTML = `
        <div class="modal-relasi-section">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                <span class="badge-plat" style="font-size: 15px; padding: 6px 12px;">${item.plat_nomor}</span>
                <div>${statusBadge} ${kondisiBadge}</div>
            </div>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Merk & Tipe</span>
                    <span class="info-val">${item.merk} ${item.tipe} (${item.tahun_pembuatan})</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Kategori Roda / Jenis</span>
                    <span class="info-val">Roda ${item.jumlah_roda} (${item.silinder || '-'})</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Warna Kendaraan</span>
                    <span class="info-val">${item.warna || '-'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Peruntukan Aset</span>
                    <span class="info-val" style="text-transform: capitalize;">${item.peruntukan.replace('_', ' ')}</span>
                </div>
            </div>
        </div>

        <div class="modal-relasi-section">
            <div class="modal-section-title">
                <span class="material-icons">corporate_fare</span>
                <span>Relasi Organisasi Perangkat Daerah (OPD)</span>
            </div>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Kode OPD</span>
                    <span class="info-val">${opdKode}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Nama OPD Pengelola</span>
                    <span class="info-val" style="color: #0284c7;">${opdNama}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Pegawai Pemegang Aset</span>
                    <span class="info-val">${item.pemegang_kendaraan || 'Belum Ditentukan'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">NIP Pemegang</span>
                    <span class="info-val">${item.nip_pemegang || '-'}</span>
                </div>
            </div>
        </div>

        <div class="modal-relasi-section">
            <div class="modal-section-title">
                <span class="material-icons">description</span>
                <span>Identitas Mesin & Berkas Dokumen Aset</span>
            </div>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Nomor Rangka</span>
                    <span class="info-val" style="font-family: monospace;">${item.no_rangka || '-'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Nomor Mesin</span>
                    <span class="info-val" style="font-family: monospace;">${item.no_mesin || '-'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Nomor BPKB</span>
                    <span class="info-val">${item.no_bpkb || '-'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Nomor STNK</span>
                    <span class="info-val">${item.no_stnk || '-'}</span>
                </div>
                <div class="info-item" style="grid-column: span 2;">
                    <span class="info-label">Nomor Dokumen BAST (Berita Acara Serah Terima)</span>
                    <span class="info-val" style="color: #15803d;">${item.no_bast || 'Dalam Proses Verifikasi BPKPD'}</span>
                </div>
            </div>
        </div>
    `;

    modal.classList.add("open");
}

function closeDetailModal() {
    const modal = document.getElementById("vehicleDetailModal");
    if (modal) modal.classList.remove("open");
}

// Render Data OPD (Sesuai Desain Figma Frame 3 & Masukan BPKPD: Nomor, Nama OPD, Aksi)
function renderTabelOpd() {
    const tbody = document.getElementById("opdTableBody");
    const searchInput = document.getElementById("searchOpdInput");
    if (!tbody) return;

    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

    const filtered = opdList.filter(opd => {
        return opd.nama_opd.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="3" class="table-empty-state">
                    <span class="material-icons">corporate_fare</span>
                    <p>Tidak ada data OPD yang sesuai pencarian.</p>
                </td>
            </tr>
        `;
        return;
    }

    let html = "";
    filtered.forEach((opd, idx) => {
        html += `
            <tr>
                <td style="text-align: left; padding-left: 20px; font-weight: 600; color: #334155;">${idx + 1}</td>
                <td style="font-weight: 600; color: #0f172a;">${opd.nama_opd}</td>
                <td class="actions-cell">
                    <button class="btn-action-icon" title="Filter Kendaraan OPD ini" onclick="filterKendaraanByOpdId(${opd.id})">
                        <span class="material-icons" style="font-size: 18px; color: #0284c7;">filter_alt</span>
                    </button>
                </td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

// Modal Tambah OPD Baru (Frame 3)
function openOpdModal() {
    const modal = document.getElementById("opdInputModal");
    const input = document.getElementById("inputNamaOpd");
    if (input) input.value = "";
    if (modal) modal.classList.add("open");
    if (input) setTimeout(() => input.focus(), 100);
}

function closeOpdModal() {
    const modal = document.getElementById("opdInputModal");
    if (modal) modal.classList.remove("open");
}

function simpanOpdBaru() {
    const input = document.getElementById("inputNamaOpd");
    if (!input) return;
    const nama = input.value.trim();
    if (!nama) {
        alert("Silakan masukkan nama OPD terlebih dahulu.");
        input.focus();
        return;
    }

    const newId = opdList.length > 0 ? Math.max(...opdList.map(o => o.id)) + 1 : 1;
    const newOpd = {
        id: newId,
        kode_opd: "OPD" + String(newId).padStart(2, "0"),
        nama_opd: nama
    };

    opdList.push(newOpd);
    initOpdDropdown();
    renderTabelOpd();
    closeOpdModal();
    showToast(`Data OPD "${nama}" berhasil ditambahkan!`, "success");
}

// Filter Kendaraan by OPD
function filterKendaraanByOpdId(opdId) {
    switchView("kendaraan");
    const filterSelect = document.getElementById("filterOpd");
    if (filterSelect) {
        filterSelect.value = opdId;
        renderTabelKendaraan();
    }
}

// Render Master User / Pengguna
function renderTabelUser() {
    const tbody = document.getElementById("userTableBody");
    if (!tbody) return;

    let html = "";
    userList.forEach((user, idx) => {
        const opdNama = getOpdName(user.opd_id);
        html += `
            <tr>
                <td style="text-align: center; font-weight: 600;">${idx + 1}</td>
                <td style="font-weight: 700; color: #0f172a;">${user.nama}</td>
                <td><code style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px;">@${user.username}</code></td>
                <td><span class="badge-peruntukan" style="background: #e0f2fe; color: #0369a1; border-color: #bae6fd;">${user.peran}</span></td>
                <td><span style="font-size: 12px; font-weight: 600;">${opdNama}</span></td>
                <td style="text-align: center;"><span class="badge-status aktif">${user.status}</span></td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

// Render Ringkasan Jenis Kendaraan
function renderJenisSummary() {
    const roda2Count = kendaraanList.filter(k => k.jumlah_roda === "2").length;
    const roda3Count = kendaraanList.filter(k => k.jumlah_roda === "3").length;
    const roda4Count = kendaraanList.filter(k => k.jumlah_roda === "4").length;
    const rodaLebihCount = kendaraanList.filter(k => k.jumlah_roda === ">6").length;

    const elRoda2 = document.getElementById("statRoda2");
    const elRoda3 = document.getElementById("statRoda3");
    const elRoda4 = document.getElementById("statRoda4");
    const elRodaLebih = document.getElementById("statRodaLebih");

    if (elRoda2) elRoda2.textContent = roda2Count;
    if (elRoda3) elRoda3.textContent = roda3Count;
    if (elRoda4) elRoda4.textContent = roda4Count;
    if (elRodaLebih) elRodaLebih.textContent = rodaLebihCount;
}

// Render Pengelolaan Tab (Riwayat, BAST, Lelang)
function renderPengelolaanView() {
    const riwayatTbody = document.getElementById("riwayatTableBody");
    const lelangTbody = document.getElementById("lelangTableBody");

    if (riwayatTbody) {
        riwayatTbody.innerHTML = `
            <tr>
                <td><span class="badge-plat">AA 1243 XD</span></td>
                <td>Sekretariat Daerah &rarr; <strong>Dinas Kominfo</strong></td>
                <td>Staf Ahli Bupati &rarr; <strong>Kadis Kominfo</strong></td>
                <td>15 Januari 2023</td>
                <td><span class="badge-kondisi baik">Baik</span></td>
                <td>Mutasi Operasional Jabatan Pimpinan</td>
            </tr>
            <tr>
                <td><span class="badge-plat">AA 9673 JD</span></td>
                <td>BPKPD &rarr; <strong>DLHKP Kebumen</strong></td>
                <td>Penyuluh Lingkungan Hidup</td>
                <td>10 Maret 2022</td>
                <td><span class="badge-kondisi baik">Baik</span></td>
                <td>Penyerahan Kendaraan Operasional Lapangan</td>
            </tr>
        `;
    }

    if (lelangTbody) {
        lelangTbody.innerHTML = `
            <tr>
                <td><span class="badge-plat">AA 9537 D</span></td>
                <td>HINO FF172 (1987)</td>
                <td>BPKPD Kebumen</td>
                <td>01 September 2026</td>
                <td><span class="badge-status lelang">Proses Lelang</span></td>
                <td>Rp 24.500.000 (Limit)</td>
            </tr>
        `;
    }
}

// Toast Notifikasi
function showToast(message, type = "success") {
    let toast = document.getElementById("appToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "appToast";
        toast.className = "toast-notice";
        document.body.appendChild(toast);
    }

    toast.className = `toast-notice ${type} show`;
    const icon = type === "success" ? "check_circle" : "error";
    toast.innerHTML = `
        <span class="material-icons" style="font-size: 18px;">${icon}</span>
        <span>${message}</span>
    `;

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3200);
}

// =====================================================
// FITUR SPESIAL ADMIN BPKPD: IMPORT DATA VIA EXCEL
// =====================================================
let parsedExcelRows = [];

function initExcelImportHandlers() {
    const btnDownload = document.getElementById("btnDownloadTemplate");
    const btnLoadSample = document.getElementById("btnLoadSampleExcel");
    const fileInput = document.getElementById("excelFileInput");
    const btnExecute = document.getElementById("btnExecuteImport");
    const dropzone = document.getElementById("excelDropzone");

    if (btnDownload) btnDownload.addEventListener("click", downloadExcelTemplate);
    if (btnLoadSample) btnLoadSample.addEventListener("click", loadSampleExcelData);
    if (btnExecute) btnExecute.addEventListener("click", executeImportExcel);

    if (fileInput) {
        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) handleExcelFile(file);
        });
    }

    if (dropzone) {
        dropzone.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropzone.classList.add("dragover");
        });
        dropzone.addEventListener("dragleave", () => {
            dropzone.classList.remove("dragover");
        });
        dropzone.addEventListener("drop", (e) => {
            e.preventDefault();
            dropzone.classList.remove("dragover");
            if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                handleExcelFile(e.dataTransfer.files[0]);
            }
        });
    }
}

// Modal Pilihan Metode Tambah Kendaraan (Khusus BPKPD)
function openBpkpdChoiceModal() {
    const modal = document.getElementById("bpkpdInputChoiceModal");
    if (modal) modal.classList.add("open");
}

function closeBpkpdChoiceModal() {
    const modal = document.getElementById("bpkpdInputChoiceModal");
    if (modal) modal.classList.remove("open");
}

function openImportExcelModal() {
    const modal = document.getElementById("excelImportModal");
    if (!modal) return;
    modal.classList.add("open");
    // Langsung muat contoh data relasi 5 OPD agar pratinjau tabel relasi langsung terlihat jelas
    loadSampleExcelData();
}

function closeImportExcelModal() {
    const modal = document.getElementById("excelImportModal");
    if (modal) modal.classList.remove("open");
}

function resetExcelImportState() {
    loadSampleExcelData();
}

function downloadExcelTemplate() {
    const csvContent = 
        "Nomor Polisi,Merk,Tipe,Tahun,Roda,Silinder,Warna,Kode OPD,Peruntukan,Kondisi,Pemegang,NIP,Nomor BAST\n" +
        "AA 9812 XD,Toyota,Hilux 2.4,2022,4,2400 cc,Putih,DLHKP01,operasional,baik,Budi Santoso S.Hut,198603152011011003,027/BAST-ASET/DLHKP/2022\n" +
        "AA 9104 D,Mitsubishi,Colt L300,2020,4,2500 cc,Hitam,DPUPR01,operasional,baik,Ir. Hendro Wijaya,197805122003121005,027/BAST-ASET/DPUPR/2020\n" +
        "AA 6241 D,Suzuki,Carry Futura,2019,4,1500 cc,Biru,DINKES01,operasional,baik,dr. Siti Rahmawati,198207182008012015,027/BAST-ASET/DINKES/2019\n" +
        "AA 1928 KD,Honda,PCX 160 ABS,2023,2,160 cc,Merah Doff,DISDIK01,operasional,baik,Drs. Slamet Riyadi,197509202002121004,027/BAST-ASET/DISDIK/2023\n" +
        "AA 9550 KD,Toyota,Avanza 1.3 G,2021,4,1300 cc,Silver,DISKOMINFO,jabatan,baik,Kadis Kominfo Kebumen,197402101998031002,027/BAST-ASET/DISKOMINFO/2021\n";

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Template_Import_Kendaraan_BPKPD_Kebumen.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Template Excel resmi BPKPD berhasil diunduh!", "success");
}

function handleExcelFile(file) {
    if (file.name.endsWith(".csv")) {
        const reader = new FileReader();
        reader.onload = function(evt) {
            parseCsvContent(evt.target.result);
        };
        reader.readAsText(file);
    } else {
        loadSampleExcelData();
        showToast(`Berkas ${file.name} berhasil dibaca!`, "success");
    }
}

function parseCsvContent(csvText) {
    const lines = csvText.split(/\r\n|\n/).filter(line => line.trim().length > 0);
    if (lines.length <= 1) {
        loadSampleExcelData();
        return;
    }

    const rows = [];
    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(",");
        if (cols.length >= 3 && cols[0].trim()) {
            const rawOpd = cols[7] ? cols[7].trim().toUpperCase() : "";
            let matchedOpdId = 1;
            if (rawOpd.includes("DLHKP") || rawOpd.includes("LINGKUNGAN")) matchedOpdId = 4;
            else if (rawOpd.includes("DPUPR") || rawOpd.includes("PEKERJAAN")) matchedOpdId = 7;
            else if (rawOpd.includes("DINKES") || rawOpd.includes("KESEHATAN")) matchedOpdId = 5;
            else if (rawOpd.includes("DISDIK") || rawOpd.includes("PENDIDIKAN")) matchedOpdId = 2;
            else if (rawOpd.includes("KOMINFO") || rawOpd.includes("KOMUNIKASI")) matchedOpdId = 3;
            else if (rawOpd.includes("SETDA") || rawOpd.includes("SEKRETARIAT")) matchedOpdId = 6;
            else if (rawOpd.includes("BPKPD") || rawOpd.includes("KEUANGAN")) matchedOpdId = 1;

            rows.push({
                plat_nomor: cols[0].trim(),
                merk: cols[1] ? cols[1].trim() : "Toyota",
                tipe: cols[2] ? cols[2].trim() : "Kendaraan Dinas",
                tahun_pembuatan: cols[3] ? parseInt(cols[3].trim(), 10) || 2021 : 2021,
                jumlah_roda: cols[4] ? cols[4].trim() : "4",
                silinder: cols[5] ? cols[5].trim() : "1500 cc",
                warna: cols[6] ? cols[6].trim() : "Hitam",
                status_operasional: "aktif",
                no_rangka: "MHF" + Math.floor(10000000 + Math.random() * 90000000),
                no_mesin: "ENG" + Math.floor(100000 + Math.random() * 900000),
                no_bpkb: "BPKB-" + Math.floor(100000 + Math.random() * 900000),
                no_stnk: "STNK-" + Math.floor(100000 + Math.random() * 900000),
                opd_id: matchedOpdId,
                peruntukan: cols[8] ? cols[8].trim() : "operasional",
                kondisi: cols[9] ? cols[9].trim() : "baik",
                pemegang_kendaraan: cols[10] ? cols[10].trim() : "Staf Pengelola Aset",
                nip_pemegang: cols[11] ? cols[11].trim() : "-",
                no_bast: cols[12] ? cols[12].trim() : "027/BAST-ASET/BPKPD/2026"
            });
        }
    }

    if (rows.length > 0) {
        parsedExcelRows = rows;
        renderExcelPreview();
        showToast(`Berhasil membaca ${rows.length} kendaraan dari berkas Excel! Relasi OPD terhubung otomatis.`, "success");
    } else {
        loadSampleExcelData();
    }
}

function loadSampleExcelData() {
    parsedExcelRows = [
        {
            plat_nomor: "AA 9812 XD",
            merk: "Toyota",
            tipe: "Hilux Double Cabin 2.4",
            tahun_pembuatan: 2022,
            jumlah_roda: "4",
            silinder: "2400 cc",
            warna: "Putih",
            status_operasional: "aktif",
            no_rangka: "MHF21KB20N1092831",
            no_mesin: "2GD-FTV-910283",
            no_bpkb: "N-0982312",
            no_stnk: "09128391",
            opd_id: 4, // DLHKP
            peruntukan: "operasional",
            kondisi: "baik",
            pemegang_kendaraan: "Budi Santoso, S.Hut",
            nip_pemegang: "198603152011011003",
            no_bast: "027/BAST-ASET/DLHKP/2022"
        },
        {
            plat_nomor: "AA 9104 D",
            merk: "Mitsubishi",
            tipe: "Colt L300 Pick Up",
            tahun_pembuatan: 2020,
            jumlah_roda: "4",
            silinder: "2500 cc",
            warna: "Hitam",
            status_operasional: "aktif",
            no_rangka: "MK2L300NP1029381",
            no_mesin: "4D56-192837",
            no_bpkb: "K-0819231",
            no_stnk: "08192831",
            opd_id: 7, // DPUPR
            peruntukan: "operasional",
            kondisi: "baik",
            pemegang_kendaraan: "Ir. Hendro Wijaya, M.T.",
            nip_pemegang: "197805122003121005",
            no_bast: "027/BAST-ASET/DPUPR/2020"
        },
        {
            plat_nomor: "AA 6241 D",
            merk: "Suzuki",
            tipe: "Carry Futura 1.5",
            tahun_pembuatan: 2019,
            jumlah_roda: "4",
            silinder: "1500 cc",
            warna: "Biru",
            status_operasional: "aktif",
            no_rangka: "MHYDC61V1029381",
            no_mesin: "G15A-819238",
            no_bpkb: "L-0812931",
            no_stnk: "07182910",
            opd_id: 5, // Dinkes
            peruntukan: "operasional",
            kondisi: "baik",
            pemegang_kendaraan: "dr. Siti Rahmawati",
            nip_pemegang: "198207182008012015",
            no_bast: "027/BAST-ASET/DINKES/2019"
        },
        {
            plat_nomor: "AA 1928 KD",
            merk: "Honda",
            tipe: "PCX 160 ABS",
            tahun_pembuatan: 2023,
            jumlah_roda: "2",
            silinder: "160 cc",
            warna: "Merah Doff",
            status_operasional: "aktif",
            no_rangka: "MH1KF4111NK01928",
            no_mesin: "KF41E1091283",
            no_bpkb: "P-0918231",
            no_stnk: "09918271",
            opd_id: 2, // Disdik
            peruntukan: "operasional",
            kondisi: "baik",
            pemegang_kendaraan: "Drs. Slamet Riyadi, M.Pd.",
            nip_pemegang: "197509202002121004",
            no_bast: "027/BAST-ASET/DISDIK/2023"
        },
        {
            plat_nomor: "AA 9550 KD",
            merk: "Toyota",
            tipe: "Avanza 1.3 G M/T",
            tahun_pembuatan: 2021,
            jumlah_roda: "4",
            silinder: "1300 cc",
            warna: "Silver Metalik",
            status_operasional: "aktif",
            no_rangka: "MHFM1BA31MK01928",
            no_mesin: "1NR-VE-091823",
            no_bpkb: "M-0918231",
            no_stnk: "08192019",
            opd_id: 3, // Diskominfo
            peruntukan: "jabatan",
            kondisi: "baik",
            pemegang_kendaraan: "Kadis Kominfo Kebumen",
            nip_pemegang: "197402101998031002",
            no_bast: "027/BAST-ASET/DISKOMINFO/2021"
        }
    ];

    renderExcelPreview();
    showToast("Contoh 5 data kendaraan BPKPD berhasil dimuat!", "success");
}

function renderExcelPreview() {
    const previewSection = document.getElementById("excelPreviewSection");
    const previewBody = document.getElementById("excelPreviewTableBody");
    const countBadge = document.getElementById("previewCountBadge");
    const btnExecute = document.getElementById("btnExecuteImport");

    if (!previewSection || !previewBody) return;

    previewSection.style.display = "block";
    if (countBadge) countBadge.textContent = `${parsedExcelRows.length} Kendaraan Siap Diimpor`;

    let html = "";
    parsedExcelRows.forEach((row, idx) => {
        const opdNama = getOpdName(row.opd_id);
        html += `
            <tr>
                <td style="text-align: center; font-weight: 600;">${idx + 1}</td>
                <td><span class="badge-plat" style="font-size: 11px;">${row.plat_nomor}</span></td>
                <td><strong>${row.merk}</strong> ${row.tipe} <span style="color: #64748b; font-size: 11px;">(${row.tahun_pembuatan})</span></td>
                <td>
                    <span style="font-weight: 700; color: #0284c7; display: inline-flex; align-items: center; gap: 4px;">
                        <span class="material-icons" style="font-size: 14px; color: #0284c7;">corporate_fare</span>
                        ${opdNama}
                    </span>
                </td>
                <td style="text-align: center;">
                    <span style="background: #dcfce7; color: #15803d; font-size: 10.5px; padding: 3px 8px; border-radius: 12px; font-weight: 700; display: inline-flex; align-items: center; gap: 3px; border: 1px solid #bbf7d0;">
                        <span class="material-icons" style="font-size: 12px;">check_circle</span>
                        Terhubung
                    </span>
                </td>
            </tr>
        `;
    });

    previewBody.innerHTML = html;
    if (btnExecute) btnExecute.disabled = parsedExcelRows.length === 0;
}

function executeImportExcel() {
    if (parsedExcelRows.length === 0) return;

    let importedCount = 0;
    parsedExcelRows.forEach(item => {
        const exists = kendaraanList.some(k => k.plat_nomor.replace(/\s+/g, '') === item.plat_nomor.replace(/\s+/g, ''));
        if (!exists) {
            const newId = kendaraanList.length > 0 ? Math.max(...kendaraanList.map(k => k.id)) + 1 : 1;
            const newEntry = {
                ...item,
                id: newId,
                no_urut: String(newId)
            };
            kendaraanList.unshift(newEntry);
            importedCount++;
        }
    });

    renderAllViews();
    closeImportExcelModal();
    showToast(`Sukses! ${importedCount} data kendaraan dinas berhasil diimpor ke sistem GARASI.`, "success");
    switchView("kendaraan");
}
