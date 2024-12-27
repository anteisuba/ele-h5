git status

git init

查看当前所有配置项以及各个配置项存储的位置
git config --list --show-origin

设置用户信息
git config --global user.name ""
git config --global user.email ''

查看各个命令的用途以及用法
git help status
git status --help

vue脚手架工具
npm init vue

Project name ele-h5

//运行vue
run dev

git add .

git commit -m ""

git log  查看日志
 
git diff 比较文件的不同

分支
git branch
切换分支
git checkout
合并分支
git merge
远程仓库
git remote origin "link"
推送到远程仓库
git push -u origin main

hooks:一些时机的回调

Git hooks:Git流程中时机的回调 

husky:校验commit
npx husky-init && npm install

commit规范 type(scope?):subject 搜索:commitlint-config-conventional
        type:bulid chore ci docs feat fix perf refactor

安装commitlint:使commit规范化
npm install --save-dev @commitlint/{config-conventional,cli}

cat <<EEE > .husky/commit-msg
#!/bin/sh
. "\$(dirname "\$0")/_husky.sh"
npx --no -- commitlint --edit "\${1}"
EEE

chmod a+x .husky/commit-msg

vant-ui 开源移动端ui组件库

vue-router 页面路由管理

Vue的官方路由  :
        嵌套路由映射    动态路由选择    模块化,基于组件的路由配置       路由参数,查询,通配符   
        HTML5history模式或hash模式

如何配置路由    
        内容组件渲染的地方      <router-view>
        路由与组件的对应关系    router实例config
        触发路由跳转的地方      <router-link> 代码动态设置

App.vue ->  import { RouterView } from 'vue-router';

使用json-server 搭建 Mock Server
        使用json-server方式
                通过json-server命令启动一个服务
                通过module将json-server引入到自己的node服务
ele-h5-server架构
        middleware:中间件,用来处理所有请求,比如鉴权,静态资源等功能(service)
                json-server提供的中间件:静态资源,请求体解析
                自定义中间件:鉴权
        router:带路由url的中间件,处理特定路由url的请求(controller)
                json-server的路由:一些直接使用json数据的api
                自定义路由:有自定义逻辑的api

ele-h5-server文件结构
        data:存放所有json文件
        public:存放静态资源,比如图片
        src:项目的处理逻辑
                app.js:项目入口文件,包括应用创建,中间件使用
                router.js:处理自定义路由
                db.js:处理json-server的路由
                controller:存放controller
                service:存放service

Vite和使用Vite配置请求代理
        mock server的跨域问题(反向代理)
        常用的跨域方案:CORS,使不同的源编程同源的(反向代理) 
        代理:请求转发 
                正向代理:客户端告诉代理服务器资源的地址
                反向代理:客户端只告诉要什么资源
        vite:vue官方退出的前端构建工具
                依赖打包
                源码打包:利用浏览器原生的es模块提供源码,减少重新构建的需求
                热更新:利用浏览器缓存加速,直接更新对应模块的引用连接
        使用Vite配置请求代理 
                npm run server->vite.config.ts->defineConfig->server->proxy->'api','imgs'
                配置步骤:在Vite配置文件中新增service字段,配置proxy选项
                proxy选项的值是一个对象,键为需要代理的URL,值为mock server地址
        
4-8 使用axios请求库,设置请求拦截
        axios请求库
                特性:
                        支持Promise API
                        拦截请求和响应
                        取消转换
                        自动转换JSON数据
        HTTP状态码
                信息响应(100-199)
                成功相应(200-299)
                重定向消息(300-399)
                客户端错误响应(400-499)
                服务的错误响应(500-599)
        设置请求拦截
                业务状态码:msg:"请求成功"


        
