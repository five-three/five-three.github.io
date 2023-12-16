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
          margin: 0;
          overflow: hidden; /* 禁止body的滚动条 */
        }
      
        .background-container {
          background-image: url('/bg.png');
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          height: 100vh;
          overflow-y: auto; /* 允许滚动 */
          margin: 0;
          display: flex;
          flex-direction: column;
        }
      
        /* 添加其他页面内容样式，确保内容不被背景遮挡 */
        .content {
          flex: 1;
          padding: 20px;
          /* 其他内容样式 */
        }
      `]
    ],
}
