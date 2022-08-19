<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <title inertia>{{ config('app.name', 'Kitter') }}</title>

    <meta property="og:site_name" content="{{ config('app.name', 'Goldfish') }}">
    <meta property="og:title" content="{{ config('app.name', 'Goldfish') }}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="{{ request()->url() }}">

    @laravelPWA

    <!-- Scripts -->
    @routes
    @vite('resources/js/app.js')
    @inertiaHead
</head>

<body class="bg-white dark:bg-dim-900">
    @inertia
</body>

</html>
