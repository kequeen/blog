const { defaultTheme } = require('@vuepress/theme-default')
module.exports = {
  port : 80,
  theme: defaultTheme({

    navbar : [
      {
        text : '关于我',
        link : '/nav/about_me.md'
      },
    ],


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
          {
            text: '关于java',
            link: '/language/java/',
          },
          {
            text: '关于php',
            link: '/language/php/',
          },
        ],
      },
      {
        text: '关于搜索引擎',
        link: '/search/',
        children: [
          // SidebarItem
          {
            text: '基本原理',
            link: '/search/principle.md',
          },
          {
            text: '关于ES',
            link: '/search/es/',
          },
        ],
      },
    ],
  }),
}