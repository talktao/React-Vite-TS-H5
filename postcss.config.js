/**
 * 具体配置可以去 postcss-pxtorem 仓库看看文档
 * 默认配置
    rootValue: 16,
    unitPrecision: 5,
    propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
    selectorBlackList: [],
    replace: true,
    mediaQuery: false,
    minPixelValue: 0,
    exclude: /node_modules/i
 * */
module.exports = {
    "plugins": [
        require("postcss-pxtorem")({
            rootValue: 37.5,
            propList: ['*'],
            // selectorBlackList: ['norem'] // 过滤掉 .norem 开头的 class，不进行 rem 转换，比如：['body'] will match .body-class
        })
    ]
};