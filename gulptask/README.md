### 简单的gulp配置文件
功能包括css压缩、添加前缀、生成md5，js压缩、生成md5，图片压缩、雪碧图，less实时编译。<br/>
主要是我平时写单页面专题时候用。
#### 目录结构
qiwei文件夹为开发文件夹，<br/>
images文件夹为图片文件夹，<br/>
icon文件夹为要生成雪碧图小图标的文件夹，<br/>
scripts为js文件夹，<br/>
styles为css文件夹。<br/>
#### 使用方法
html文件放在根目录下，<br/>
在命令行执行npm install,安装gulp依赖的包，<br/>
命令分为3个：<br/>
1.gulp项目完成后，直接完成自动化操作。<br/>
2.npm run less,开发时，实时编译less。<br/>
3.npm run sprites,生成雪碧图。<br/>
自动化构建完成后，qiwei文件下目录会生成在dist目录下。<br/>
#### 联系方式
E-mail:qichongwei2009@163.com。
