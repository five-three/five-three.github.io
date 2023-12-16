module.exports = {
    // 站点的标题
    title: "Welcome to Five_Three's page!",
    // 站点的描述
    description: "个人博客",
    // 站点配置, 设置为 /[仓库名]/
    base: '/',
    head: [
        // ...
        ['style', {}, `
          body {
            background-image: url('/bg.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
          }
        `]
    ],
}
