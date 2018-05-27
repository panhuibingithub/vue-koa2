# vue-koa2 admin篇

## Build Setup
``` bash
# install dependencies
npm install
# serve with hot reload at localhost:8080
npm run dev
# build for production with minification
npm run build
# build for production and view the bundle analyzer report
npm run build --report
```
## 用sessionStorage来存储token

```javascript
const state = {
    token: sessionStorage.getItem('blog-token');
};
```
## marked.js+highlight.js
markdown编译器选用的是simplemde,]

## 学习资料
[koa2实现基本token的登录注册](https://github.com/sinner77/vue-koa2-login)   <br/>
[打造 Vue.js 可复用组件](http://www.jianshu.com/p/79a37137e45d)   <br/>
[vue中动态绑定图片的问题](http://www.cnblogs.com/hongmaju/p/6877090.html)   <br/>
[hljs学习](http://blog.csdn.net/spy19881201/article/details/38866033)<br/>
[防抖动函数](http://jinlong.github.io/2016/04/24/Debouncing-and-Throttling-Explained-Through-Examples/)   <br/>
[容易理解的抖动和节流函数](https://segmentfault.com/a/1190000005926579)   <br/>
[如何优雅的选择字体(font-family)](https://segmentfault.com/a/1190000006110417)
