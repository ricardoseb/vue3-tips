// const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./src/**/*.{vue,js}",
        './*.html'

    ],
    // theme: {
    //     extend: {
    //         fontFamily: {
    //             sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
    //         },
    //     },
    // },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
        require("daisyui")
    ],

    daisyui: {
        styled: true,
        // base: true,
        // utils: true,
        // logs: true,
        // rtl: false,
        // prefix: "",
        darkTheme: "light",
        // themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
        // [
        //     {
        //         light: {
        //             ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        //             primary: "#f04f43",
        //         },
        //     },
        // ],
    },
}
