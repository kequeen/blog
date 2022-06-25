const { defaultTheme } = require('@vuepress/theme-default')
module.exports = {
  theme: defaultTheme({
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: '为什么写博客',
        link: '/guide/guide.md',
        children: [
          // SidebarItem
          {
            text: '关于终身学习',
            link: '/guide/study.md',
            children: [],
          },
        ],
      },
      // 字符串 - 页面文件路径
        {
        text: '软技能',
        link: '/soft/',
      }
    ],
  }),
}