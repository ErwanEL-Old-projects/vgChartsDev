const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const pump = require('pump');
const browserSync = require('browser-sync').create();

/*
        TOP LEVEL FUNCTIONS
        gulp.task - Define tasks
        gulp.src - Point tofiles to use
        gulp.dest - Point to the folder to output
        gulp.watch - Watch files and folders for changes
*/

// logs Messages
gulp.task('messageDistrib', () => {
    return console.log('Création de la distribution...')
})

gulp.task('messageDev', () => {
    return console.log("Création de l'environnement...")
})

// copy all html files
gulp.task('copyHtml', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
})

//optimize images
gulp.task('imageMin', () =>
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

//compile sass
gulp.task('sass', ()=>{
    gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream())
});

//scripts
gulp.task("uglify", function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('all.js')) //attention a l'ordre
        .pipe(rename("app.min.js"))
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("dist/js"))
});

//serving with browser sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: "./dist"
    });
    
});

//watcher (ne requiert pas de module)
gulp.task('watch', () => {
    gulp.watch('src/js/*.js', ['uglify']).on('change', browserSync.reload);
    gulp.watch('src/scss/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('src/img/*', ['imageMin']);
    gulp.watch('src/*.html', ['copyHtml']).on('change', browserSync.reload);
})


gulp.task('distrib', ['messageDistrib', 'copyHtml', 'imageMin', 'sass', 'uglify']);

gulp.task('default', ['messageDev', 'copyHtml', 'imageMin', 'sass', 'uglify', 'watch', 'browser-sync']);