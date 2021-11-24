const mix = require('laravel-mix');

mix
    .js('src/js/app.js', 'js')
    .sass('src/scss/app.scss', 'css')
    .options({
        postCss: [require('tailwindcss')],
    });
