<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Login - GARASI</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }

        body {
            min-height: 100vh;
            background: #f5f8fc;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .login-container {
            width: 900px;
            min-height: 540px;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            display: flex;
            box-shadow: 0 10px 35px rgba(0, 0, 0, 0.10);
        }

        /* BAGIAN KIRI */
        .login-left {
            width: 50%;
            background: linear-gradient(135deg, #075985, #0c4a6e);
            color: white;
            padding: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .logo {
            width: 80px;
            height: 80px;
            background: white;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 25px;
            overflow: hidden;
        }

        .logo img {
            width: 65px;
            height: 65px;
            object-fit: contain;
        }

        .login-left h1 {
            font-size: 34px;
            margin-bottom: 12px;
        }

        .login-left h2 {
            font-size: 19px;
            font-weight: 500;
            margin-bottom: 20px;
        }

        .login-left p {
            font-size: 14px;
            line-height: 1.7;
            color: #e0f2fe;
        }

        /* BAGIAN KANAN */
        .login-right {
            width: 50%;
            padding: 55px 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .login-right h2 {
            color: #123047;
            font-size: 28px;
            margin-bottom: 8px;
        }

        .subtitle {
            color: #718096;
            font-size: 14px;
            margin-bottom: 30px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            color: #334155;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .form-group input {
            width: 100%;
            height: 48px;
            border: 1px solid #d9e2ec;
            border-radius: 9px;
            padding: 0 15px;
            font-size: 14px;
            outline: none;
            transition: 0.2s;
        }

        .form-group input:focus {
            border-color: #0ea5e9;
            box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.10);
        }

        .remember {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 25px;
            font-size: 13px;
            color: #64748b;
        }

        .remember input {
            width: 15px;
            height: 15px;
        }

        .login-button {
            width: 100%;
            height: 48px;
            border: none;
            border-radius: 9px;
            background: #075985;
            color: white;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.2s;
        }

        .login-button:hover {
            background: #064e73;
        }

        .footer-text {
            text-align: center;
            margin-top: 25px;
            color: #94a3b8;
            font-size: 12px;
        }

        .error-message {
            background: #fee2e2;
            color: #b91c1c;
            padding: 10px 12px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 13px;
        }

        @media (max-width: 768px) {
            .login-container {
                width: 90%;
                flex-direction: column;
            }

            .login-left,
            .login-right {
                width: 100%;
            }

            .login-left {
                padding: 35px;
            }

            .login-right {
                padding: 40px 30px;
            }
        }
    </style>
</head>

<body>

<div class="login-container">

    <!-- BAGIAN KIRI -->
    <div class="login-left">

        <div class="logo">
            <img src="{{ asset('assets/logo-kebumen.png') }}"
                 alt="Logo Kabupaten Kebumen">
        </div>

        <h1>GARASI</h1>

        <h2>Gerbang Administrasi Kendaraan Dinas</h2>

        <p>
            Sistem informasi pengelolaan kendaraan dinas
            Pemerintah Kabupaten Kebumen untuk membantu
            pengelolaan data kendaraan secara terintegrasi,
            mudah, dan terstruktur.
        </p>

    </div>


    <!-- BAGIAN KANAN -->
    <div class="login-right">

        <h2>Selamat Datang</h2>

        <p class="subtitle">
            Silakan masuk untuk mengakses sistem GARASI
        </p>

        @if(session('error'))
            <div class="error-message">
                {{ session('error') }}
            </div>
        @endif

        <form action="{{ route('login') }}" method="POST">

            @csrf

            <div class="form-group">
                <label for="username">
                    Username
                </label>

                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Masukkan username"
                    value="{{ old('username') }}"
                    required
                >
            </div>

            <div class="form-group">
                <label for="password">
                    Password
                </label>

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Masukkan password"
                    required
                >
            </div>

            <div class="remember">
                <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                >

                <label for="remember">
                    Ingat saya
                </label>
            </div>

            <button type="submit" class="login-button">
                Masuk
            </button>

        </form>

        <div class="footer-text">
            © {{ date('Y') }} GARASI Kabupaten Kebumen
        </div>

    </div>

</div>

</body>
</html>
