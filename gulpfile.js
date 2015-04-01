var install = require( 'gulp-install' ),
gulp = require( 'gulp' ),
stylus = require( 'gulp-stylus' ) ;
 
gulp.src( [ './bower.json', './package.json' ] )
	.pipe( install() ) ;

gulp.task( 'watch', function() {
	//gulp.watch( './static/js/common.js', ['uglify'] ) ;
} ) ;