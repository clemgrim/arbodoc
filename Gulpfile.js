var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var argv = require('minimist')(process.argv.slice(2));
var sass = {
	includePaths: [
       'bower_components',
       'bower_components/bootstrap-sass-official/assets/stylesheets',
   ]
};

gulp.task('js', function () {
	return gulp.src('./src/js/app.js')
	   .pipe($.browserify())
	   .pipe($.if(argv.min, $.uglify()))
	   .pipe(gulp.dest('./public/js'))
	   .pipe($.size());
});

gulp.task('watch:js', ['js'], function () {
	return gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('scss', function () {
	return gulp.src('./src/sass/app.scss')
	   .pipe($.sass(sass))
	   .pipe($.minifyCss())
	   .pipe(gulp.dest('./public/css'))
	   .pipe($.size());
});

gulp.task('watch:scss', ['scss'], function () {
	return gulp.watch('./src/sass/**/*.scss', ['scss']);
});