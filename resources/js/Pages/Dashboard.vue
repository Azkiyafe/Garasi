<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-slate-800">
                Dashboard Admin
            </h2>
        </template>

        <div class="py-8">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-6">
                <!-- Banner Selamat Datang -->
                <div class="p-6 bg-gradient-to-r from-sky-600 to-blue-700 rounded-2xl shadow-lg text-white">
                    <h3 class="text-2xl font-bold">Selamat Datang di GARASI! 👋</h3>
                    <p class="text-sky-100 text-sm mt-1">
                        Portal Pengelolaan & Administrasi Aset Kendaraan Dinas Kabupaten Kebumen.
                    </p>
                </div>

                <!-- Menu Pintas / Quick Action -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between space-y-4">
                        <div>
                            <h4 class="text-lg font-bold text-slate-800">Kelola Data Kendaraan</h4>
                            <p class="text-xs text-slate-500 mt-1">
                                Lihat, tambah, edit, atau hapus data kendaraan dinas OPD.
                            </p>
                        </div>
                        <div>
                            <Link
                                :href="route('kendaraan.index')"
                                class="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs rounded-xl transition"
                            >
                                Buka Data Kendaraan &rarr;
                            </Link>
                        </div>
                    </div>

                    <div class="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between space-y-4">
                        <div>
                            <h4 class="text-lg font-bold text-slate-800">Pengaturan Akun</h4>
                            <p class="text-xs text-slate-500 mt-1">
                                Kelola informasi profil dan keamanan kata sandi akun Anda.
                            </p>
                        </div>
                        <div>
                            <Link
                                :href="route('profile.edit')"
                                class="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-medium text-xs rounded-xl transition"
                            >
                                Pengaturan Profil &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>