这是简单的gulp配置文件，主要是css压缩、添加前缀、生成md5，js压缩、生成md5，图片压缩、雪碧图，less实时编译。
主要是我平时写单页面专题时候用。
qiwei文件夹为开发文件夹，images文件夹为图片文件夹，icon文件夹为要生成雪碧图小图标的文件夹。
scripts为js文件夹，styles为css文件夹。html文件放在根目录下，
首先在命令行执行npm install,安装gulp依赖的包，
命令分为3个：
1.gulp项目完成后，直接完成自动化操作。
2.npm run less,开发时，实时编译less。
3.npm run sprites,生成雪碧图。
自动化构建完成后，qiwei文件下目录会生成在dist目录下。
有问题请联系，邮箱qichongwei2009@163.com。
