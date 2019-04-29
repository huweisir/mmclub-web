const paths = require('./paths');
module.exports = [
    //领取页，receive
    {
        title: "邮箱大师黑曜VIP特权免费领取",
        chunks: ["receive"],  // 指定入口 js 文件
        filename: 'receive.html', //配置输入文件名
        template: paths.appReceiveJs,
        indexHtmlTemplate: paths.appHtml,
    },
    //分享页
    {
        title: "会员中心",
        chunks: ["share"],  // 指定入口 js 文件
        filename: 'share.html', //配置输入文件名
        template: paths.appShareJs,
        indexHtmlTemplate: paths.appHtml,
    },
    // 隐私协议
    {
        title: "黑曜VIP服务协议",
        chunks: ["agreement"],  // 指定入口 js 文件
        filename: 'agreement.html', //配置输入文件名
        template: paths.appAgreementJs,
        indexHtmlTemplate: paths.appHtml,
    },
    // //桌面分享页
    {
        name: 'deskshare',
        title: "黑曜VIP会员中心",
        chunks: ["share"],  // 指定入口 js 文件
        filename: 'deskshare.html', //配置输入文件名
        template: paths.appShareJs,
        indexHtmlTemplate: paths.deskIndexHtml,
    }
]