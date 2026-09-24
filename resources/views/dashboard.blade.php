<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Dashboard - GARASI</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            background: #d8cece;
            color: #1f2937;
        }

        /* =========================
           JUDUL HALAMAN
        ========================= */

        .page-title {
            width: 92%;
            max-width: 1100px;
            margin: 25px auto 8px;
            font-size: 15px;
            color: #444;
        }

        /* =========================
           CONTAINER UTAMA
        ========================= */

        .container {
            width: 92%;
            max-width: 1100px;
            margin: auto;
            background: white;
            min-height: 650px;
            overflow: hidden;
        }

        /* =========================
           HEADER
        ========================= */

        .header {
            height: 58px;
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 15px;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .logo-kebumen {
            width: 27px;
            height: 34px;
            object-fit: contain;
        }

        .government-name {
            font-size: 12px;
            font-weight: 600;
            color: #ffffff;
            text-transform: uppercase;
        }

        /* tulisan dibuat putih karena berada pada area header biru */
        .header-left span {
            color: #ffffff;
        }

        .profile {
            width: 22px;
            height: 22px;
            border: 1px solid #1e6091;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #075985;
            font-size: 11px;
        }

        /* =========================
           HERO
        ========================= */

        .hero {
            position: relative;
            min-height: 265px;
            background-image:
                linear-gradient(
                    rgba(8, 103, 165, 0.88),
                    rgba(14, 116, 175, 0.88)
                ),
                url("{{ asset('assets/dashboard-bg.jpg') }}");

            background-size: cover;
            background-position: center;

            display: flex;
            justify-content: center;
            align-items: center;

            text-align: center;
            color: white;
        }

        .hero-content {
            width: 80%;
            max-width: 700px;
            margin-top: -5px;
        }

        .hero h1 {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 5px;
        }

        .hero h2 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 15px;
        }

        .hero-description {
            font-size: 11px;
            line-height: 1.5;
            margin-bottom: 18px;
        }

        /* =========================
           SEARCH
        ========================= */

        .search-box {
            width: 100%;
            height: 42px;
            background: white;
            border-radius: 4px;

            display: flex;
            align-items: center;

            padding: 4px 5px 4px 12px;
        }

        .search-icon {
            color: #555;
            font-size: 13px;
            margin-right: 9px;
        }

        .search-box input {
            flex: 1;
            height: 100%;
            border: none;
            outline: none;
            font-size: 11px;
            color: #333;
        }

        .search-box input::placeholder {
            color: #aaa;
        }

        .search-button {
            height: 30px;
            min-width: 65px;

            border: none;
            border-radius: 4px;

            background: #4f7899;
            color: white;

            font-size: 10px;
            cursor: pointer;

            transition: 0.2s;
        }

        .search-button:hover {
            background: #365f7e;
        }

        /* =========================
           INFORMASI BAWAH
        ========================= */

        .information {
            min-height: 325px;

            background-image:
                linear-gradient(
                    rgba(255,255,255,0.88),
                    rgba(255,255,255,0.88)
                ),
                url("{{ asset('assets/dashboard-bg.jpg') }}");

            background-size: cover;
            background-position: center;

            display: flex;
            justify-content: center;
            align-items: flex-start;

            padding-top: 40px;
        }

        .information p {
            width: 70%;
            max-width: 650px;

            text-align: center;

            font-size: 12px;
            line-height: 1.6;

            color: #222;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 700px) {

            .container,
            .page-title {
                width: 95%;
            }

            .hero-content {
                width: 90%;
            }

            .hero h1 {
                font-size: 20px;
            }

            .hero h2 {
                font-size: 15px;
            }

            .hero-description {
                font-size: 10px;
            }

            .information p {
                width: 85%;
            }
        }

    </style>
</head>

<body>

    <!-- JUDUL -->
    <div class="page-title">
        Dashboard
    </div>


    <!-- CONTAINER -->
    <div class="container">

        <!-- ================= HEADER ================= -->
        <header class="header">

            <div class="header-left">

                <img
                    src="{{ asset('assets/logo-kebumen.png') }}"
                    alt="Logo Kabupaten Kebumen"
                    class="logo-kebumen"
                >

                <span class="government-name">
                    PEMERINTAH KABUPATEN KEBUMEN
                </span>

            </div>


            <!-- PROFILE -->
            <div class="profile">
                👤
            </div>

        </header>


        <!-- ================= HERO ================= -->
        <section class="hero">

            <div class="hero-content">

                <h1>
                    Welcome to GARASI
                </h1>

                <h2>
                    Gerbang Administrasi Kendaraan Dinas
                </h2>

                <p class="hero-description">
                    Sistem Manajemen Informasi Kendaraan Dinas Milik
                    Pemerintah Kabupaten Kebumen untuk mempermudah
                    pencarian data dan lokasi kendaraan.
                </p>


                <!-- SEARCH -->
                <form
                    action="#"
                    method="GET"
                    class="search-box"
                >

                    <span class="search-icon">
                        🔍
                    </span>

                    <input
                        type="text"
                        name="search"
                        placeholder="Masukkan Kata kunci"
                    >

                    <button
                        type="submit"
                        class="search-button"
                    >
                        🔍 &nbsp;Cari
                    </button>

                </form>

            </div>

        </section>


        <!-- ================= INFORMASI ================= -->
        <section class="information">

            <p>
                Gunakan pencarian diatas untuk menemukan informasi
                kendaraan dinas secara cepat, akurat dan mudah.
            </p>

        </section>

    </div>

</body>
</html>
