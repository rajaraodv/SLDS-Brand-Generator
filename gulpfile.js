var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var notifier = require('node-notifier');
var server = require('gulp-server-livereload');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

var notify = function(error) {
    var message = 'In: ';
    var title = 'Error: ';
    console.dir(error.message);
    if (error.description) {
        title += error.description;
    } else if (error.message) {
        title += error.message;
    }

    if (error.filename) {
        var file = error.filename.split('/');
        message += file[file.length - 1];
    }

    if (error.lineNumber) {
        message += '\nOn Line: ' + error.lineNumber;
    }

    notifier.notify({
        title: title,
        message: message
    });
};

var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
}));

function bundle() {
    return bundler
        .bundle()
        .on('error', notify)
        .pipe(source('main.js'))
        .pipe(gulp.dest('./www'))
        .pipe(livereload());
}
bundler.on('update', bundle)

gulp.task('build', function() {
    bundle()
});

// gulp.task('serve', function(done) {
//   gulp.src('')
//     .pipe(server({
//       livereload: {
//         enable: true,
//         filter: function(filePath, cb) {
//           if(/www\/main.js/.test(filePath)) {
//             cb(true)
//           } else if(/www\/style.css/.test(filePath)){
//             cb(true)
//           }
//         }
//       },
//       open: false
//     }));
// });

gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./www'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['build', 'sass', 'watch']);