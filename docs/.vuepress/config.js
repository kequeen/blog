const { defaultTheme } = require('@vuepress/theme-default')
module.exports = {
  port : 80,
  theme: defaultTheme({
    // 你也可以直接将它设置为一个 URL
    repo: 'https://github.com/kequeen/blog',
    docsBranch: 'master',
    docsDir: 'docs',
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
      {
        text: '软技能',
        link: '/soft/',
      },
      {
        text: '算法',
        link: '/algorithm/',
        children: [
          // SidebarItem
          {
            text: '关于排序',
            link: '/algorithm/sort.md',
            children: [],
          },
          {
            text: 'leetcode',
            link: '/algorithm/leetcode/',
            children: [],
          },
        ],
      },
      {
        text: '编程语言',
        link: '/language/',
        children: [
          // SidebarItem
          {
            text: '关于go',
            link: '/language/go/',
            children: [
                {
                    text : '与其它语言的对比',
                    link : '/language/go/compare.md',
                }
            ],
          },
        ],
      },
    ],
  }),
}