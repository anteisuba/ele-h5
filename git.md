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

安装commitlint
npm install --save-dev @commitlint/{config-conventional,cli}

cat <<EEE > .husky/commit-msg
#!/bin/sh
. "\$(dirname "\$0")/_husky.sh"
npx --no -- commitlint --edit "\${1}"
EEE

chmod a+x .husky/commit-msg



