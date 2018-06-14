const elixir = require('laravel-elixir');
require('laravel-elixir-livereload');

elixir.config.assetsPath = 'themes/enovos/assets/';
elixir.config.publicPath = 'themes/enovos/assets/compiled/';

elixir(function (mix) {
    mix.sass('style.scss');
    mix.scripts([
       'jquery.js',
       'app.js'
    ]);
    mix.livereload([
        'themes/enovos/assets/compiled/css/style.css',
        'themes/enovos/**/*.htm',
        'themes/enovos/assets/compiled/js/*.js'
    ]);
});
