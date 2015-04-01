var install = require( 'gulp-install' ),
gulp = require( 'gulp' ),
stylus = require( 'gulp-stylus' ) ;

/* part of installing dependencies */
gulp.src( [ './bower.json', './package.json' ] ).pipe( install() ) ;

/* STATIC FILES */



/* /STATIC FILES */

gulp.task( 'watch', function() {
	//gulp.watch( './static/js/common.js', ['uglify'] ) ;
} ) ;