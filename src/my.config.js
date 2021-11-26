const path = require('path')
const fs = require("fs");
const file = path.resolve(__dirname, "my.config.secret.js");

fs.exists(file, exists => {
    if (!exists) {
        throw new Error("没有找到配置文件 my.config.secret.js, 请添加")
    }
})

module.exports = require("./my.config.secret")

/*
所有的配置，放在 my.config.secret.js 文件中

module.exports = {
    gitUserName: "xxx"
}

*/