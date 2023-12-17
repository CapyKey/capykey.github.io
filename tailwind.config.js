/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{njk,md,html}'],
    plugins: [
        require('@tailwindcss/typography')
    ],
  };
