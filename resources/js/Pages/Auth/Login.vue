<script setup>
import { ref } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const showPassword = ref(false);

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Masuk ke Admin Panel" />

    <div class="min-h-screen flex text-slate-800 bg-slate-50 font-sans">
        <!-- SEKSI KIRI: Hero Section -->
        <div class="hidden lg:flex lg:w-1/2 relative bg-slate-950 overflow-hidden flex-col justify-between p-10 text-white shadow-xl">
            
            <!-- Foto Background Tugu Lawet Kebumen -->
            <div 
                class="absolute inset-0 bg-cover bg-center z-0 opacity-90 scale-105"
                style="background-image: url('/image/tugu_lawet.png');"
            ></div>

            <!-- Overlay Gradient Biru Khas (Opacity 70% - 75% untuk Keseimbangan Kontras & Keterbacaan Teks) -->
            <div class="absolute inset-0 bg-gradient-to-br from-sky-950/75 via-slate-900/70 to-blue-950/80 z-0"></div>

            <!-- Header Brand Kiri -->
            <div class="relative z-10 flex items-center gap-3.5">
                <!-- Logo Official Kabupaten Kebumen -->
                <img 
                    src="/image/logo_kebumen.png" 
                    alt="Logo Kabupaten Kebumen" 
                    class="h-12 w-auto object-contain drop-shadow-md"
                />
                <div>
                    <h1 class="text-2xl font-black tracking-wider text-white uppercase leading-tight drop-shadow-md">GARASI</h1>
                    <p class="text-xs text-sky-200 font-semibold tracking-wide drop-shadow">Pemerintah Kabupaten Kebumen</p>
                </div>
            </div>

            <!-- Konten Utama Kiri -->
            <div class="relative z-10 my-auto max-w-lg space-y-6">
                <div>
                    <h2 class="text-4xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
                        Gerbang Administrasi
                    </h2>
                    <h2 class="text-4xl font-extrabold tracking-tight text-amber-400 leading-tight drop-shadow-lg">
                        Kendaraan Dinas
                    </h2>
                </div>

                <p class="text-slate-100 leading-relaxed text-sm font-medium drop-shadow-md">
                    Portal internal pengelolaan aset kendaraan dinas Pemerintah Kabupaten Kebumen. Masuk untuk mengakses data master, pengawasan, dan lelang kendaraan.
                </p>

                <!-- Badge Keamanan -->
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/50 backdrop-blur-md border border-white/20 text-xs font-semibold text-sky-100 shadow-lg">
                    <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Akses terenkripsi & tercatat audit trail</span>
                </div>
            </div>

            <!-- Footer Kiri -->
            <div class="relative z-10 text-xs text-slate-200 font-medium drop-shadow-md">
                © 2026 BPKPD Kabupaten Kebumen
            </div>
        </div>

        <!-- SEKSI KANAN: Form Login -->
        <div class="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 bg-white">
            <div class="w-full max-w-md space-y-8">
                
                <!-- Title & Subtitle -->
                <div class="space-y-2">
                    <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">
                        Masuk ke Admin Panel
                    </h2>
                    <p class="text-sm text-slate-500 font-medium">
                        Gunakan akun resmi OPD Anda untuk melanjutkan.
                    </p>
                </div>

                <!-- Status Alert -->
                <div v-if="status" class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
                    {{ status }}
                </div>

                <!-- Form -->
                <form @submit.prevent="submit" class="space-y-5">
                    
                    <!-- Input Email Dinas -->
                    <div class="space-y-1.5">
                        <label class="block text-xs font-bold text-slate-700 tracking-wide">
                            Email Dinas
                        </label>
                        <div class="relative rounded-xl shadow-sm">
                            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <input
                                id="email"
                                type="email"
                                v-model="form.email"
                                required
                                autofocus
                                placeholder="admin@garasi.kebumenkab.go.id"
                                class="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200"
                            />
                        </div>
                        <p v-if="form.errors.email" class="text-xs text-rose-600 font-medium mt-1">
                            {{ form.errors.email }}
                        </p>
                    </div>

                    <!-- Input Kata Sandi -->
                    <div class="space-y-1.5">
                        <label class="block text-xs font-bold text-slate-700 tracking-wide">
                            Kata Sandi
                        </label>
                        <div class="relative rounded-xl shadow-sm">
                            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <input
                                id="password"
                                :type="showPassword ? 'text' : 'password'"
                                v-model="form.password"
                                required
                                placeholder="••••••••"
                                class="block w-full pl-11 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200"
                            />
                            <!-- Toggle Eye Button -->
                            <button
                                type="button"
                                @click="showPassword = !showPassword"
                                class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
                            >
                                <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a8.96 8.96 0 012.122-.063c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21M3 3l18 18" />
                                </svg>
                            </button>
                        </div>
                        <p v-if="form.errors.password" class="text-xs text-rose-600 font-medium mt-1">
                            {{ form.errors.password }}
                        </p>
                    </div>

                    <!-- Remember Me & Forgot Password -->
                    <div class="flex items-center justify-between pt-1">
                        <label class="flex items-center cursor-pointer select-none">
                            <input
                                type="checkbox"
                                v-model="form.remember"
                                class="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 transition duration-150"
                            />
                            <span class="ml-2 text-xs font-semibold text-slate-600">Ingat saya</span>
                        </label>

                        <Link
                            v-if="canResetPassword"
                            :href="route('password.request')"
                            class="text-xs font-bold text-sky-600 hover:text-sky-700 hover:underline transition-colors"
                        >
                            Lupa sandi?
                        </Link>
                    </div>

                    <!-- Tombol Masuk -->
                    <button
                        type="submit"
                        :disabled="form.processing"
                        class="w-full py-3.5 px-4 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold rounded-xl text-sm shadow-lg shadow-sky-600/25 hover:shadow-sky-600/40 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span v-if="!form.processing">Masuk</span>
                        <span v-else class="flex items-center justify-center gap-2">
                            <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Memproses...
                        </span>
                    </button>
                </form>

                <!-- Kembali ke Halaman Publik -->
                <div class="pt-4 border-t border-slate-100 text-center">
                    <Link
                        :href="route('welcome')"
                        class="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Kembali ke halaman publik</span>
                    </Link>
                </div>

            </div>
        </div>
    </div>
</template>