var install = require( 'gulp-install' ),
gulp = require( 'gulp' ),
stylus = require( 'gulp-stylus' ) ;

/* part of installing dependencies */
gulp.src( [ './bower.json', './package.json' ] ).pipe(  install() ) ;

/* STATIC FILES */

gulp.task( 'stylus-compile', function() {
  gulp.src( './landing/static/css/0.1/*.styl' )
    .pipe( stylus() )
    .pipe( gulp.dest( './landing/static/css/0.1/' ) ) ;
});
 
// Options compress 
gulp.task( 'stylus-compress', function() {
  gulp.src( './landing/static/css/0.1/*.styl' )
    .pipe( stylus( {
      compress: true
    }))
    .pipe( gulp.dest( './landing/static/css/0.1/' ) ) ;
});

/* /STATIC FILES */

gulp.task( 'watch', function() {
	gulp.watch( './landing/static/css/0.1/*.styl', [ 'stylus-compile' ] ) ;
} ) ;