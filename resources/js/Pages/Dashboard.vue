<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

const logoutForm = useForm({});

const logout = () => {
    logoutForm.post(route('logout'));
};

// State untuk toggle accordion Master Data
const isMasterDataOpen = ref(true);
const toggleMasterData = () => {
    isMasterDataOpen.value = !isMasterDataOpen.value;
};

const wheelChartRef = ref(null);
const usageChartRef = ref(null);

onMounted(() => {
    // 1. Chart Donut: Roda 2, Roda 3, Roda 4, Roda > 6 (Warna-Warni)
    if (wheelChartRef.value) {
        new Chart(wheelChartRef.value, {
            type: 'doughnut',
            data: {
                labels: ['Roda 2 (R2)', 'Roda 3 (R3)', 'Roda 4 (R4)', 'Roda > 6'],
                datasets: [{
                    data: [720, 40, 474, 50],
                    // Palet Warna Kontras: Biru, Kuning-Amber, Hijau-Emerald, Merah-Rose
                    backgroundColor: ['#2563eb', '#f59e0b', '#10b981', '#f43f5e'],
                    hoverOffset: 6,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { 
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 16,
                            font: { size: 12 }
                        }
                    }
                },
                cutout: '68%'
            }
        });
    }

    // 2. Chart Bar: 6 Kategori Peruntukan Resmi
    if (usageChartRef.value) {
        new Chart(usageChartRef.value, {
            type: 'bar',
            data: {
                labels: [
                    'Kendaraan Dinas Pinjam Pakai',
                    'Kendaraan Perorangan Dinas',
                    'Kendaraan Dinas Operasional',
                    'Kendaraan Operasional Khusus',
                    'Kendaraan Dinas Jabatan',
                    'Tidak Diketahui'
                ],
                datasets: [{
                    label: 'Jumlah Unit',
                    data: [150, 210, 480, 190, 130, 80],
                    backgroundColor: '#2563eb',
                    borderRadius: 8,
                    maxBarThickness: 45
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            title: (items) => items[0].label
                        }
                    }
                },
                scales: {
                    y: { 
                        beginAtZero: true, 
                        grid: { borderDash: [4, 4], color: '#f1f5f9' } 
                    },
                    x: { 
                        grid: { display: false },
                        ticks: {
                            font: { size: 10 },
                            // Potong label panjang atau miringkan biar rapi
                            callback: function(value) {
                                const label = this.getLabelForValue(value);
                                return label.length > 20 ? label.substring(0, 18) + '...' : label;
                            }
                        }
                    }
                }
            }
        });
    }
});
</script>

<template>
    <Head title="Dashboard - GARASI Admin" />

    <div class="flex h-screen bg-slate-100 text-slate-800 font-sans overflow-hidden">
        
        <!-- SIDEBAR -->
        <aside class="w-64 bg-[#0f2a58] text-white flex flex-col justify-between shrink-0 shadow-lg select-none">
            <div>
                <!-- Header Logo -->
                <div class="p-5 flex items-center space-x-3 border-b border-slate-700/50">
                    <div class="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center font-bold text-[#0f2a58] shadow">
                        G
                    </div>
                    <div>
                        <h1 class="font-bold text-base leading-tight">GARASI Admin</h1>
                        <p class="text-xs text-slate-400">Pemkab Kebumen</p>
                    </div>
                </div>

                <!-- Navigation Links -->
                <nav class="p-4 space-y-1.5 text-sm font-medium">
                    <!-- Dashboard Active -->
                    <Link :href="route('dashboard')" class="flex items-center space-x-3 px-4 py-3 bg-amber-400 text-[#0f2a58] font-semibold rounded-xl shadow-sm transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        <span>Dashboard</span>
                    </Link>

                    <!-- MASTER DATA ACCORDION (Interactive Toggle) -->
                    <div>
                        <button 
                            @click="toggleMasterData"
                            class="w-full flex items-center justify-between px-4 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl transition cursor-pointer"
                        >
                            <div class="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7zM4 9h16M9 4v16" /></svg>
                                <span class="font-semibold text-xs tracking-wider uppercase">Master Data</span>
                            </div>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                class="w-4 h-4 transition-transform duration-200" 
                                :class="{ 'rotate-180': isMasterDataOpen }"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <!-- Sub-menu Collapsible Dropdown -->
                        <div v-show="isMasterDataOpen" class="mt-1 pl-4 space-y-1">
                            <a href="#" class="flex items-center space-x-3 px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/40 rounded-lg transition">
                                <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                                <span>Master Data OPD</span>
                            </a>
                            <a href="#" class="flex items-center space-x-3 px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/40 rounded-lg transition">
                                <span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                <span>Data Kendaraan</span>
                            </a>
                            <a href="#" class="flex items-center space-x-3 px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/40 rounded-lg transition">
                                <span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                <span>Data Penanggung Jawab</span>
                            </a>
                        </div>
                    </div>

                    <!-- Other Menu Links -->
                    <a href="#" class="flex items-center space-x-3 px-4 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 18h12l3-18H3z" /></svg>
                        <span>Data Lelang</span>
                    </a>
                    <a href="#" class="flex items-center space-x-3 px-4 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span>Laporan</span>
                    </a>
                    <Link :href="route('profile.edit')" class="flex items-center space-x-3 px-4 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
                        <span>Settings / Pengaturan</span>
                    </Link>
                </nav>
            </div>

            <!-- User Profile & Logout -->
            <div class="p-4 border-t border-slate-700/50">
                <div class="flex items-center space-x-3 mb-3 px-2">
                    <div class="w-9 h-9 bg-amber-400 text-[#0f2a58] font-bold rounded-full flex items-center justify-center text-sm">
                        AK
                    </div>
                    <div>
                        <p class="text-sm font-semibold leading-none">Admin Kebumen</p>
                        <p class="text-xs text-slate-400 mt-1">BPKPD</p>
                    </div>
                </div>
                <button @click="logout" class="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    <span>Logout</span>
                </button>
            </div>
        </aside>

        <!-- MAIN CONTENT AREA -->
        <div class="flex-1 flex flex-col h-screen overflow-y-auto">
            
            <!-- TOPBAR -->
            <header class="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
                <div>
                    <h2 class="text-xl font-bold text-slate-800">Dashboard</h2>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="relative w-80">
                        <input type="text" placeholder="Cari kendaraan, OPD..." class="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <button class="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition relative">
                        <span class="w-2 h-2 bg-amber-500 rounded-full absolute top-2 right-2"></span>
                    </button>
                </div>
            </header>

            <!-- DASHBOARD CONTENT -->
            <main class="p-8 space-y-6">

                <!-- BANNER WELCOME -->
                <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6 shadow-md flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-bold mb-1 flex items-center gap-2">
                            Selamat Datang di GARASI! 👋
                        </h2>
                        <p class="text-blue-100 text-sm">
                            Portal Pengelolaan & Administrasi Aset Kendaraan Dinas Kabupaten Kebumen.
                        </p>
                    </div>
                </div>

                <!-- CARD STATISTIK -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p class="text-xs text-slate-500 font-medium">Total Kendaraan</p>
                            <h3 class="text-2xl font-bold text-slate-800 mt-1">1.284</h3>
                            <p class="text-xs text-emerald-600 mt-1 font-medium">+42 tahun ini</p>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p class="text-xs text-slate-500 font-medium">Kendaraan Aktif</p>
                            <h3 class="text-2xl font-bold text-slate-800 mt-1">1.076</h3>
                            <p class="text-xs text-slate-500 mt-1">83.8% dari total</p>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p class="text-xs text-slate-500 font-medium">Dalam Pengawasan / Rusak</p>
                            <h3 class="text-2xl font-bold text-slate-800 mt-1">148</h3>
                            <p class="text-xs text-amber-600 mt-1 font-medium">11.5% perlu tindak lanjut</p>
                        </div>
                    </div>

                    <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p class="text-xs text-slate-500 font-medium">Total Unit Dilelang</p>
                            <h3 class="text-2xl font-bold text-slate-800 mt-1">60</h3>
                            <p class="text-xs text-slate-500 mt-1">12 menunggu approval</p>
                        </div>
                    </div>
                </div>

                <!-- GRAFIK / CHARTS -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Donut Chart Roda -->
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <h4 class="font-bold text-slate-800 text-base">Total Kendaraan Berdasarkan Jumlah Roda</h4>
                        <p class="text-xs text-slate-400 mb-4">Distribusi R2, R3, R4, dan Roda > 6</p>
                        <div class="w-full h-64 flex justify-center items-center">
                            <canvas ref="wheelChartRef"></canvas>
                        </div>
                    </div>

                    <!-- Bar Chart Peruntukan -->
                    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <h4 class="font-bold text-slate-800 text-base">Kendaraan Berdasarkan Peruntukan / Jabatan</h4>
                        <p class="text-xs text-slate-400 mb-4">6 Kategori Peruntukan Dinas Resmi</p>
                        <div class="w-full h-64">
                            <canvas ref="usageChartRef"></canvas>
                        </div>
                    </div>
                </div>

                <!-- QUICK ACTIONS -->
                <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center">
                    <div>
                        <h4 class="font-bold text-slate-800 text-base">Kendaraan Terbaru & Update Lelang</h4>
                        <p class="text-xs text-slate-400">Aktivitas registrasi dan lelang terkini</p>
                    </div>
                    <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl flex items-center gap-2 transition shadow-sm">
                        <span>+ Tambah Data</span>
                    </button>
                </div>

            </main>
        </div>
    </div>
</template>