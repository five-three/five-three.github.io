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
        html {
          height: 100%;
        }
      
        body {
          margin: 0;
          overflow: hidden; /* 禁止body的滚动条 */
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      
        .background-container {
          background-image: url('/bg.png');
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          flex: 1;
          overflow-y: auto; /* 允许滚动 */
        }
      
        /* 添加其他页面内容样式，确保内容不被背景遮挡 */
        .content {
          padding: 20px;
          /* 其他内容样式 */
        }
      `]      
    ],
}
