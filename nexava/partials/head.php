<head>
    <!-- ========== Meta Tags ========== -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="HELICORP">
    <meta name="description" content="HELICORP smart pet care ecosystem landing page: connected pet devices, market expansion, nationwide distribution and after-sales support in Vietnam.">
    <meta property="og:title" content="HELICORP - Smart Pet Care Ecosystem">
    <meta property="og:description" content="Smart pet care technology, premium products and HELICORP market expansion services for Vietnam.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="assets/img/helicorp/2025_07_banner-1.webp">
    <link rel="preload" as="image" href="assets/img/helicorp/2025_07_banner-1-hero.webp" fetchpriority="high">
    <script>
        (function () {
            try {
                var theme = localStorage.getItem('helicorp-theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.dataset.theme = 'dark';
                }
            } catch (error) {}
        }());
    </script>
    <!-- ======== Page title ============ -->
    <title><?php echo $title; ?></title>
    <!--<< Favcion >>-->
    <link rel="shortcut icon" href="assets/img/favicon.svg">
    <!--<< Bootstrap min.css >>-->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <!--<< Main.css >>-->
    <link rel="stylesheet" href="assets/css/main.css">
    <!--<< Color.css >>-->
    <link rel="stylesheet" href="assets/css/color.css">
    <link rel="stylesheet" href="assets/css/performance.css">

    <?php echo (isset($css) ? $css   : '')?>
</head>
