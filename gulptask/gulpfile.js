/**
 * Created by qiwei on 2017/6/29.
 */
var gulp=require('gulp'),
    //压缩html插件  教程：http://www.ydcss.com/archives/20
    htmlmin = require('gulp-htmlmin'),
    //合并插件，未用到。可根据情况自行添加。 教程:http://www.ydcss.com/archives/83
    concat = require('gulp-concat'),
    //压缩css插件。教程：http://www.ydcss.com/archives/41
    cleanCSS = require('gulp-clean-css'),
    //压缩js插件。教程：http://www.ydcss.com/archives/54
    uglify = require('gulp-uglify'),
    //压缩图片插件。教程：http://www.ydcss.com/archives/26
    imagemin = require('gulp-imagemin'),
    //生成文件版本号，以及替换文件。教程：https://www.npmjs.com/package/gulp-rev
    rev = require('gulp-rev'),
    //替换文件，根据gulp-rev生成的替换文件。教程：https://www.npmjs.com/package/gulp-rev-collector
    revCollector = require('gulp-rev-collector'),
    // 文件重命名，未用到，可根据情况自行使用。教程：https://www.npmjs.com/package/gulp-rename
    rename = require("gulp-rename"),
    //自动添加前缀插件， 教程：http://www.ydcss.com/archives/94
    autoprefixer = require('gulp-autoprefixer'),
    //合成雪碧图插件。 教程：https://www.npmjs.com/package/gulp.spritesmith，https://segmentfault.com/a/1190000007121606
    // 可以比较一下与gulp-css-sprite的差别
    spritesmith=require('gulp.spritesmith'),
    //编译less插件，教程：http://www.ydcss.com/archives/34
    less = require('gulp-less'),
    // pump 简化了gulp流的写法，教程：https://www.npmjs.com/package/pump
    pump = require('pump');
// css处理任务
gulp.task('css', function () {
    return  pump([
        gulp.src('./qiwei/styles/*.css'),
        // css添加前缀
        autoprefixer({
            // browsers属性查看 can i use
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }),
        // 合并css文件
        // concat('a.css'),
        // css压缩

        cleanCSS({keepSpecialComments: '*'}),
        // 文件生成版本号
        rev(),
        gulp.dest('./dist/styles'),
        rev.manifest(),
        gulp.dest('./qiwei/json/css')
    ]);

});
// js处理任务
gulp.task('js',function () {
    return  pump([
        gulp.src('./qiwei/scripts/all.js'),
        // 压缩js文件
        uglify(),
// 文件生成版本号
        rev(),
        gulp.dest('./dist/scripts'),
        rev.manifest(),
        gulp.dest('./qiwei/json/js')
    ])
});
// 图片处理任务
gulp.task('image', function () {
    return pump([
        gulp.src('./qiwei/images/*.{png,jpg,gif,ico}'),
        // 压缩图片
        imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }),
        gulp.dest('./dist/images')
    ]);

});
// 生成雪碧图
gulp.task('Sprites', function () {
    return pump([
        gulp.src('./qiwei/images/icon/*.png'),//需要合并的图片地址
        spritesmith({
            imgName:'./images/sprite.png',
            cssName:'./styles/sprite.css',
            padding:5,
            algorithm:'binary-tree'
        }),
        gulp.dest('./dist')
    ])
});
// 编译less任务
gulp.task('less1', function () {
    return pump([
        gulp.src('./qiwei/styles/*.less'),
        less(),
        gulp.dest('./qiwei/styles')
    ])
});
// 监控less文件变化
gulp.task('less',function () {
    gulp.watch('./qiwei/styles/*.less', ['less1']);
});
// 文件路径替换任务
gulp.task('rev',['css','js'], function () {
    return pump([
        gulp.src(['./qiwei/json/**/*.json', './qiwei/*.html']),
        revCollector({
            replaceReved: true
        }),
        htmlmin({collapseWhitespace: true}),
        gulp.dest('./dist')
    ]);
});
gulp.task('default',['rev','image'],function () {
    console.log('任务执行完成');
});

