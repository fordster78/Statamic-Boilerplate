let mix = require('laravel-mix');
require('laravel-mix-purgecss');
require('laravel-mix-tailwind');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/site.js', 'public/js')
   .sass('resources/sass/site.scss', 'public/css')
    .tailwind('tailwind.config.js');

mix.browserSync({
    proxy: process.env.APP_URL
});

if (mix.inProduction()) {
    mix.purgeCss({
        defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
        folders: ['content', 'resources'],
        whitelist: ['blockquote'],
    });
}


/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel Assets
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .sass('resources/sass/cp.scss', 'public/vendor/app/css');
