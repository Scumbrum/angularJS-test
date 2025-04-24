const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const templateCache = require('gulp-angular-templatecache');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const webpack = require('webpack-stream');
const glob = require('glob');

// Paths
const paths = {
    src: {
        js: [
            './app/app.js',
            './app/components/**/*.component.js',
            './app/app.templates.js'
        ],
        view: [
           "./app/**/*.html"
        ],
        css: [
            './app/styles.css',
            './app/variables.css',
            './app/**/*.component.css'
        ],
        html: [
            './index.html',
            './app/components/**/*.component.html'
        ]
    },
    dist: {
        base: './dist',
        js: './dist/js',
        css: './dist/css',
        html: './dist/app/components'
    }
};

// Clean dist folder
function clean() {
    return del([paths.dist.base]);
}

// Copy HTML templates
function templates() {
    return gulp.src(paths.src.view[0])
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(rename("app.templates.js"))
    .pipe(gulp.dest('./app'));
}


function scripts() {

    const jsFiles = paths.src.js.reduce((files, pattern) => {
        return files.concat(glob.sync(pattern));
    }, []);

    return gulp.src('app/app.js')
        .pipe(webpack({
            mode: 'development',
            entry: {
                app: jsFiles
            },
            output: {
                filename: 'app.min.js',
                path: __dirname + paths.dist.js
            },
        }))
        .pipe(gulp.dest(paths.dist.js))
        .pipe(browserSync.stream());
}

// Process CSS files
function styles() {
    return gulp.src(paths.src.css)
        .pipe(sourcemaps.init())
        .pipe(concat('styles.min.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dist.css))
        .pipe(browserSync.stream());
}

function copyIndex() {
    return gulp.src('./index.html')
        .pipe(gulp.dest(paths.dist.base));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch(paths.src.js, scripts);
    gulp.watch(paths.src.css, styles);
    gulp.watch(paths.src.html, templates);
}

const build = gulp.series(clean, templates, gulp.parallel(scripts, styles, copyIndex));


const serve = gulp.series(build, watch);

exports.clean = clean;
exports.build = build;
exports.serve = serve;
exports.default = serve; 