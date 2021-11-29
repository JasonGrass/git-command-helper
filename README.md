# Git 命令行增强与辅助

依据个人习惯进行的 git 命令行增强。可以 fork 仓库修改成你喜欢的增强写法。

## 当前支持的增强命令

* `gitt pn opt-abc`

将当前分支，推送到 origin，新分支名称为 t/yourname/opt-abc，
这里的 yourname 在 `./src/my.config.secret.js` 中配置

* `gitt rs`

重置当前分支到 origin 对应的分支，如当前分支为 dev，则相当于 git reset --hard origin/dev

## my.config.secret.js

在 src 目录中，此文件被设置为了 gitignore，需要自己添加，内容为：

```js
module.exports = {
    gitUserName: "yourname"
}
```

当前就只有这一个配置项

## 参考文献

* js 执行 shell 命令

[js执行shell命令的几种方式（Node）_cindy647的博客-CSDN博客_js执行shell脚本](https://blog.csdn.net/cindy647/article/details/108830841 )  
[shelljs - npm](https://www.npmjs.com/package/shelljs )  
[shelljs/shelljs: Portable Unix shell commands for Node.js](https://github.com/shelljs/shelljs )  
[enquirer/enquirer: Stylish, intuitive and user-friendly prompts, for Node.js. Used by eslint, webpack, Generate, lint-staged, pm2, gluegun, hygen, GitHub Actions Toolkit, @airbnb/nimbus, and many others!](https://github.com/enquirer/enquirer )

* 命令行参数解析

[NPM酷库：commander，命令行参数处理框架 - SegmentFault 思否](https://segmentfault.com/a/1190000012843679 )  
[Node.js 中如何收集和解析命令行参数 - 掘金](https://juejin.cn/post/6915200398512881672 )  
[commander.js/Readme_zh-CN.md at master · tj/commander.js](https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md )  

* node 命令行工具开发

[从 1 到完美，用 node 写一个命令行工具 - SegmentFault 思否](https://segmentfault.com/a/1190000016555129 )  
[npm 命令行工具开发指南 - 掘金](https://juejin.cn/post/6956027274919411726 )  
[如何使用 Node 开发一个命令行工具 | 山月行](https://shanyue.tech/node/cli.html#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7%E4%B8%8E%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F-path )
[前端扫盲-之打造一个Node命令行工具 - 知乎](https://zhuanlan.zhihu.com/p/34782812 )

* 其它参考

[Git打印且只打印本地分支名 - SegmentFault 思否](https://segmentfault.com/a/1190000020840822 )  
