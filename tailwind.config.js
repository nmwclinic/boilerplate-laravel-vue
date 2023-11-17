/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {
            fontFamily: {
                nuninto: ['Nunito', 'Nunito Sans']
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms")
    ],
}
