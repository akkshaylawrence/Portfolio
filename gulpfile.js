var gulp = require('gulp'),
    bs = require('browser-sync').create(),
    sequence = require('run-sequence');

gulp.task('styles', function () {
    gulp.src('app/css/*.css')
        .pipe(gulp.dest('app/css'))
        .pipe(bs.stream());
});

gulp.task('js', function () {
    gulp.src(['app/js/*.js'])
        // .pipe(concat('all.js'))
        .pipe(gulp.dest('app/js'))
        .pipe(bs.stream());
});

gulp.task('html', function () {
    gulp.src('app/*.html')
        .pipe(gulp.dest('app'))
        .pipe(bs.stream());
});

gulp.task('browser-sync', function () {
    bs.init({
        server: 'app',
    });
});

gulp.task('watch', ['build'], function () {
    gulp.watch(['app/css/*.css'], ['styles']);
    gulp.watch(['app/js/*.js'], ['js']);
    gulp.watch(['app/*.html'], ['html']);
});

gulp.task('build', function (done) {
    sequence(
        ['html', 'js', 'styles'],
        'browser-sync',
        done);
});


gulp.task('sync', ['watch']);
