const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        screens: {
            xs: "614px",
            sm: "1002px",
            md: "1022px",
            lg: "1092px",
            xl: "1280px",
        },
        extend: {
            animation: {
                "spin-fast": "spin 0.7s linear infinite",
            },
            colors: {
                dim: {
                    50: "#a60000",
                    100: "#a60000",
                    200: "#38444d",
                    300: "#3d3b3b",
                    400: "#333131",
                    500: "#a60000",
                    600: "#a60000",
                    700: "#2b2a2a",
                    800: "#1f1e1e",
                    900: "#141414",
                },
            },
            width: {
                68: "68px",
                88: "88px",
                275: "275px",
                290: "290px",
                350: "350px",
                600: "600px",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("daisyui"),
    ],
    // daisyUI config (optional)
    daisyui: {
        styled: true,
        themes: false,
        base: false,
        utils: false,
        logs: false,
        rtl: false,
        prefix: "",
        // darkTheme: "dark",
    },
};
