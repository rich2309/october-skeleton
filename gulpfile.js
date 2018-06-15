const elixir = require('laravel-elixir');
require('laravel-elixir-livereload');

elixir.config.assetsPath = 'themes/enovos/assets/';
elixir.config.publicPath = 'themes/enovos/assets/compiled/';

elixir(function (mix) {
    mix.sass('style.scss');
    mix.less('bootstrap/bootstrap.less');
    mix.scripts([
        'jquery.js',
        'bootstrap/js/*.js',
       'app.js'
    ]);
    mix.livereload([
        'themes/enovos/assets/compiled/css/style.css',
        'themes/enovos/**/*.htm',
        'themes/enovos/assets/compiled/js/*.js'
    ]);
});
