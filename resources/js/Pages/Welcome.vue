<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import { ref } from 'vue';

// Import gambar dari folder public/image/
import logoKebumen from '/public/image/logo_kebumen.png';
import tuguLawet from '/public/image/tugu_lawet.png';

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    // Tambahan props dari controller untuk hasil pencarian
    vehicles: {
        type: Array,
        default: () => []
    },
    searched: {
        type: Boolean,
        default: false
    },
    keyword: {
        type: String,
        default: ''
    }
});

const search = ref(props.keyword || '');

const handleSearch = () => {
    if (search.value.trim() !== '') {
        // Mengirimkan request ke route welcome agar tetap di halaman publik
        router.get(route('welcome'), { search: search.value }, {
            preserveState: true,
            preserveScroll: true
        });
    }
};
</script>

<template>
    <Head title="GARASI - Pemkab Kebumen" />

    <div class="min-h-screen bg-slate-50 flex flex-col justify-between font-sans text-slate-800">
        
        <!-- NAVBAR -->
        <nav class="bg-[#0f2b5c] px-6 py-4 flex items-center justify-between shadow-md border-b border-blue-900/50 sticky top-0 z-50">
            <div class="flex items-center gap-3">
                <!-- LOGO KABUPATEN KEBUMEN -->
                <img 
                    :src="logoKebumen" 
                    alt="Logo Kebumen" 
                    class="h-10 w-auto object-contain"
                />
                <div>
                    <h1 class="text-white font-bold text-xl tracking-wide leading-none">GARASI</h1>
                    <p class="text-blue-200 text-xs font-light mt-1">Pemerintah Kabupaten Kebumen</p>
                </div>
            </div>

            <div>
                <Link
                    :href="route('login')"
                    class="bg-amber-400 hover:bg-amber-300 text-[#0f2b5c] font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md active:scale-95 inline-flex items-center gap-2"
                >
                    Login Admin
                </Link>
            </div>
        </nav>

        <!-- HERO SECTION -->
        <header class="relative bg-[#0f2b5c] text-white py-24 px-6 overflow-hidden flex items-center justify-center min-h-[520px]">
            <!-- BACKGROUND TUGU LAWET -->
            <div class="absolute inset-0 z-0">
                <img 
                    :src="tuguLawet" 
                    alt="Tugu Lawet Kebumen" 
                    class="w-full h-full object-cover object-center opacity-85"
                />
                <!-- OVERLAY BIRU TRANSPARAN -->
                <div class="absolute inset-0 bg-gradient-to-b from-[#0f2b5c]/40 via-[#1d4ed8]/35 to-[#0f2b5c]/70"></div>
            </div>

            <div class="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                <!-- BADGE -->
                <div class="inline-block bg-blue-950/80 border border-blue-400/40 px-4 py-1.5 rounded-full text-xs font-medium text-amber-300 backdrop-blur-sm shadow-md">
                    Pemerintah Kabupaten Kebumen
                </div>

                <div class="space-y-2">
                    <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
                        Welcome to <span class="text-amber-400">GARASI</span>
                    </h2>
                    <h3 class="text-xl sm:text-3xl font-bold text-blue-100 drop-shadow-sm">
                        Gerbang Administrasi Kendaraan Dinas
                    </h3>
                </div>

                <p class="text-blue-50 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                    Sistem Manajemen Informasi Kendaraan Dinas milik Pemerintah Kabupaten Kebumen untuk mempermudah pencarian data, status, dan lokasi kendaraan secara transparan.
                </p>

                <form @submit.prevent="handleSearch" class="pt-4 max-w-2xl mx-auto">
                    <div class="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl flex items-center gap-2 border-2 border-amber-400/60 focus-within:border-amber-400 transition-all">
                        <span class="pl-4 text-slate-400 text-lg">🔍</span>
                        <input
                            v-model="search"
                            type="text"
                            placeholder="Masukan Kata Kunci"
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

                <p class="text-xs text-blue-100/90 pt-2 drop-shadow-sm">
                    Gunakan pencarian diatas untuk menemukan informasi kendaraan dinas secara cepat, akurat dan mudah.
                </p>
            </div>
        </header>

        <!-- ================================================================= -->
        <!-- TAMPILAN HASIL PENCARIAN (HANYA MUNCUL SAAT MENCARI)             -->
        <!-- ================================================================= -->
        <main v-if="searched" class="max-w-4xl w-full mx-auto px-6 py-10 flex-1">
            
            <!-- 1. JIKA KATA KUNCI ADA DI DATABASE -->
            <div v-if="vehicles && vehicles.length > 0" class="space-y-6">
                <div class="space-y-1">
                    <div class="inline-flex items-center gap-2 bg-blue-100 text-blue-900 font-semibold text-xs px-3 py-1 rounded-md">
                        Yuk Cek Kendaraan Dinas
                    </div>
                    <p class="text-slate-800 font-bold text-lg sm:text-xl">
                        Menampilkan kendaraan yang sesuai dengan pencarian Anda.
                    </p>
                </div>

                <!-- CARD DETAIL KENDARAAN -->
                <div v-for="(item, index) in vehicles" :key="index" class="bg-white rounded-2xl shadow-md border border-slate-200 p-6 sm:p-8">
                    <h4 class="text-[#0f2b5c] font-bold text-lg border-b border-slate-100 pb-3 mb-4">
                        Detail Kendaraan
                    </h4>

                    <div class="divide-y divide-slate-100 text-sm">
                        <div class="py-3 flex justify-between items-center">
                            <span class="font-bold text-slate-700">Nomor</span>
                            <span class="font-bold text-slate-900">{{ item.id || (index + 1) }}</span>
                        </div>
                        <div class="py-3 flex justify-between items-center">
                            <span class="font-bold text-slate-700">Nomor Polisi</span>
                            <span class="font-medium text-slate-600 uppercase">{{ item.plat_nomor || item.PLAT_NOMOR }}</span>
                        </div>
                        <div class="py-3 flex justify-between items-center">
                            <span class="font-bold text-slate-700">Merk / Tipe</span>
                            <span class="font-medium text-slate-600 capitalize">
                                {{ item.merk_tipe || item.MERK_TIPE || item.merk || '-' }}
                            </span>
                        </div>
                        <div class="py-3 flex justify-between items-center">
                            <span class="font-bold text-slate-700">OPD</span>
                            <span class="font-medium text-slate-600 uppercase">
                                {{ item.opd?.NAMA_OPD || item.opd?.nama_opd || item.NAMA_OPD || item.nama_opd || '-' }}
                            </span>
                        </div>
                        <div class="py-3 flex justify-between items-center">
                            <span class="font-bold text-slate-700">Status</span>
                            <span class="bg-emerald-500 text-white font-semibold text-xs px-4 py-1 rounded-full shadow-sm">
                                {{ item.status || item.STATUS || 'Aktif' }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. JIKA KATA KUNCI TIDAK ADA DI DATABASE -->
            <div v-else class="space-y-6">
                <div class="space-y-1">
                    <div class="inline-flex items-center gap-2 bg-blue-100 text-blue-900 font-semibold text-xs px-3 py-1 rounded-md">
                        <span>🚚</span> Hasil Pencarian
                    </div>
                </div>

                <!-- ALERT NOTIFIKASI MERAH -->
                <div class="bg-red-200/90 border border-red-300 text-red-800 px-5 py-4 rounded-2xl flex items-center gap-4 shadow-sm">
                    <div class="w-10 h-10 rounded-full bg-red-500 text-white font-black text-xl flex items-center justify-center shrink-0 shadow">
                        !
                    </div>
                    <div class="text-xs sm:text-sm">
                        <p class="font-bold text-red-700 text-sm sm:text-base">No. yang Anda masukkan bukan kendaraan dinas</p>
                        <p class="text-red-600 mt-0.5">Pastikan Anda memasukkan nomor polisi kendaraan dinas yang terdaftar pada sistem.</p>
                    </div>
                </div>

                <!-- CARD EMPTY STATE -->
                <div class="bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-300 p-10 sm:p-14 text-center space-y-3 shadow-sm">
                    <div class="flex justify-center">
                        <div class="w-16 h-16 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-slate-200">
                            🚚
                        </div>
                    </div>
                    <h4 class="text-slate-800 font-bold text-base sm:text-lg">Data tidak ditemukan</h4>
                    <p class="text-slate-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                        Nomor polisi yang Anda masukkan bukan merupakan kendaraan dinas Pemerintah Kabupaten Kebumen
                    </p>
                </div>
            </div>

        </main>

        <!-- ================================================================= -->
        <!-- TAMPILAN AWAL - HANYA MUNCUL JIKA BELUM SEARCH                    -->
        <!-- ================================================================= -->
        <template v-else>
            <!-- STATS CARDS -->
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

            <!-- LAYANAN INFORMASI PUBLIK -->
            <section class="py-16 px-6 max-w-6xl mx-auto w-full">
                <div class="text-center max-w-xl mx-auto mb-10">
                    <h3 class="text-2xl font-bold text-[#0f2b5c]">Layanan Informasi Publik</h3>
                    <p class="text-xs text-slate-500 mt-2">Akses informasi kendaraan dinas yang transparan untuk mendukung tata kelola pemerintahan yang bersih.</p>
                </div>

                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 bg-blue-50 text-[#1d4ed8] rounded-xl flex items-center justify-center text-xl font-bold mb-4">🚘</div>
                        <h4 class="font-bold text-[#0f2b5c] text-base mb-2">Data Kendaraan Dinas</h4>
                        <p class="text-xs text-slate-500 leading-relaxed">Pencarian kendaraan dinas berdasarkan nomor polisi, OPD, atau jenis kendaraan.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-xl font-bold mb-4">🛡️</div>
                        <h4 class="font-bold text-[#0f2b5c] text-base mb-2">Pengawasan Aset</h4>
                        <p class="text-xs text-slate-500 leading-relaxed">Pantau status kendaraan aktif, dalam pengawasan, hingga yang perlu perbaikan.</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl font-bold mb-4">🔨</div>
                        <h4 class="font-bold text-[#0f2b5c] text-base mb-2">Informasi Lelang</h4>
                        <p class="text-xs text-slate-500 leading-relaxed">Lihat unit kendaraan yang akan dan sedang dilelang secara terbuka dan akuntabel.</p>
                    </div>
                </div>
            </section>
        </template>

        <!-- FOOTER -->
        <footer class="bg-[#0f2b5c] text-white py-6 px-8 border-t border-blue-900 w-full">
            <div class="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-xs text-blue-200/80">
                <!-- LOGO & NAMA -->
                <div class="flex items-center gap-3 justify-center md:justify-start">
                    <img 
                        :src="logoKebumen" 
                        alt="Logo Kebumen" 
                        class="h-8 w-auto object-contain"
                    />
                    <div>
                        <p class="font-bold text-white">GARASI</p>
                        <p class="text-[10px]">Pemerintah Kabupaten Kebumen</p>
                    </div>
                </div>

                <!-- COPYRIGHT -->
                <div class="text-center">
                    <p>© 2026 BPKPD Kabupaten Kebumen. Seluruh hak cipta dilindungi.</p>
                </div>

                <!-- DUMMY SPACE -->
                <div class="hidden md:block"></div>
            </div>
        </footer>

    </div>
</template>