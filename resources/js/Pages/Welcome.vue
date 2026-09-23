<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import { ref } from 'vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
});

const search = ref('');

const handleSearch = () => {
    if (search.value.trim() !== '') {
        router.get(route('dashboard'), { search: search.value });
    }
};
</script>

<template>
    <Head title="GARASI - Pemkab Kebumen" />

    <div class="min-h-screen bg-slate-50 flex flex-col justify-between font-sans text-slate-800">
        
        <!-- NAVBAR -->
        <nav class="bg-[#0f2b5c] px-6 py-4 flex items-center justify-between shadow-md border-b border-blue-900/50 sticky top-0 z-50">
            <div class="flex items-center gap-3">
                <!-- Logo Kebumen / GARASI -->
                <div class="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center font-black text-[#0f2b5c] text-xl shadow-inner">
                    G
                </div>
                <div>
                    <h1 class="text-white font-bold text-lg tracking-wide leading-none">GARASI</h1>
                    <p class="text-blue-200 text-xs font-light mt-0.5">VENDARA · Pemkab Kebumen</p>
                </div>
            </div>

            <div>
                <Link
                    :href="route('login')"
                    class="bg-amber-400 hover:bg-amber-300 text-[#0f2b5c] font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md active:scale-95 inline-flex items-center gap-2"
                >
                    <span>🔑</span> Login Admin
                </Link>
            </div>
        </nav>

        <!-- HERO SECTION (Layout Centered + Background Tugu Lawet) -->
        <header class="relative bg-[#1d4ed8] text-white py-24 px-6 overflow-hidden flex items-center justify-center min-h-[520px]">
            
            <!-- BACKGROUND IMAGE TUGU LAWET DENGAN OVERLAY -->
            <div class="absolute inset-0 z-0">
                <!-- Taruh file foto Tugu Lawet di folder: public/images/tugu-lawet.jpg -->
                <img 
                    src="/images/tugu-lawet.jpg" 
                    alt="Tugu Lawet Kebumen" 
                    class="w-full h-full object-cover object-center opacity-25 mix-blend-overlay"
                    @error="$event.target.style.display='none'" 
                />
                <div class="absolute inset-0 bg-gradient-to-b from-[#0f2b5c]/90 via-[#1d4ed8]/80 to-[#0f2b5c]/95"></div>
            </div>

            <!-- HERO CONTENT (Centered Layout seperti Gambar Referensi) -->
            <div class="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                
                <div class="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-400/30 px-4 py-1.5 rounded-full text-xs font-medium text-amber-300 backdrop-blur-sm shadow-sm">
                    📍 Pemerintah Kabupaten Kebumen
                </div>

                <div class="space-y-2">
                    <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
                        Welcome to <span class="text-amber-400">GARASI</span>
                    </h2>
                    <h3 class="text-xl sm:text-3xl font-bold text-blue-100">
                        Gerbang Administrasi Kendaraan Dinas
                    </h3>
                </div>

                <p class="text-blue-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    Sistem Manajemen Informasi Kendaraan Dinas milik Pemerintah Kabupaten Kebumen untuk mempermudah pencarian data, status, dan lokasi kendaraan secara transparan.
                </p>

                <!-- SEARCH BAR CENTERED -->
                <form @submit.prevent="handleSearch" class="pt-4 max-w-2xl mx-auto">
                    <div class="bg-white p-2 rounded-2xl shadow-2xl flex items-center gap-2 border-2 border-amber-400/40 focus-within:border-amber-400 transition-all">
                        <span class="pl-4 text-slate-400 text-lg">🔍</span>
                        <input
                            v-model="search"
                            type="text"
                            placeholder="Masukan Kata Kunci (Plat Nomor, OPD, Merk...)"
                            class="w-full bg-transparent border-none text-slate-800 placeholder-slate-400 text-sm sm:text-base focus:ring-0 focus:outline-none"
                        />
                        <button
                            type="submit"
                            class="bg-[#1d4ed8] hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all whitespace-nowrap shadow-md active:scale-95"
                        >
                            Cari
                        </button>
                    </div>
                </form>

                <p class="text-xs text-blue-200/80 pt-2">
                    Gunakan pencarian diatas untuk menemukan informasi kendaraan dinas secara cepat, akurat dan mudah.
                </p>
            </div>
        </header>

        <!-- STATS CARDS (Figma Style) -->
        <section class="max-w-6xl mx-auto px-6 -mt-10 relative z-20 w-full">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-lg text-center hover:-translate-y-1 transition-all duration-300">
                    <h4 class="text-3xl font-black text-[#1d4ed8]">2.988</h4>
                    <p class="text-xs text-slate-500 font-medium mt-1">Kendaraan Terdata</p>
                </div>
                <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-lg text-center hover:-translate-y-1 transition-all duration-300">
                    <h4 class="text-3xl font-black text-amber-500">48</h4>
                    <p class="text-xs text-slate-500 font-medium mt-1">OPD Terhubung</p>
                </div>
                <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-lg text-center hover:-translate-y-1 transition-all duration-300">
                    <h4 class="text-3xl font-black text-emerald-600">60</h4>
                    <p class="text-xs text-slate-500 font-medium mt-1">Unit Dilelang</p>
                </div>
                <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-lg text-center hover:-translate-y-1 transition-all duration-300">
                    <h4 class="text-3xl font-black text-[#0f2b5c]">100%</h4>
                    <p class="text-xs text-slate-500 font-medium mt-1">Transparansi Publik</p>
                </div>
            </div>
        </section>

        <!-- LAYANAN INFORMASI PUBLIK (Figma Style Cards) -->
        <section class="py-16 px-6 max-w-6xl mx-auto w-full">
            <div class="text-center max-w-xl mx-auto mb-10">
                <h3 class="text-2xl font-bold text-[#0f2b5c]">Layanan Informasi Publik</h3>
                <p class="text-xs text-slate-500 mt-2">Akses informasi kendaraan dinas yang transparan untuk mendukung tata kelola pemerintahan yang bersih.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <!-- Card 1 -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all">
                    <div class="w-12 h-12 bg-blue-50 text-[#1d4ed8] rounded-xl flex items-center justify-center text-xl font-bold mb-4">
                        🚘
                    </div>
                    <h4 class="font-bold text-[#0f2b5c] text-base mb-2">Data Kendaraan Dinas</h4>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Pencarian kendaraan dinas berdasarkan nomor polisi, OPD, atau jenis kendaraan.
                    </p>
                </div>

                <!-- Card 2 -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all">
                    <div class="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-xl font-bold mb-4">
                        🛡️
                    </div>
                    <h4 class="font-bold text-[#0f2b5c] text-base mb-2">Pengawasan Aset</h4>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Pantau status kendaraan aktif, dalam pengawasan, hingga yang perlu perbaikan.
                    </p>
                </div>

                <!-- Card 3 -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all">
                    <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl font-bold mb-4">
                        🔨
                    </div>
                    <h4 class="font-bold text-[#0f2b5c] text-base mb-2">Informasi Lelang</h4>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Lihat unit kendaraan yang akan dan sedang dilelang secara terbuka dan akuntabel.
                    </p>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="bg-[#0f2b5c] text-white py-6 px-6 border-t border-blue-900">
            <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-200/80">
                <div class="flex items-center gap-3">
                    <div class="w-7 h-7 bg-amber-400 rounded-lg flex items-center justify-center font-bold text-[#0f2b5c] text-xs">
                        G
                    </div>
                    <div>
                        <p class="font-bold text-white">GARASI</p>
                        <p class="text-[10px]">VENDARA · Pemkab Kebumen</p>
                    </div>
                </div>
                <p>© 2026 BPKPD Kabupaten Kebumen. Seluruh hak cipta dilindungi.</p>
            </div>
        </footer>

    </div>
</template>