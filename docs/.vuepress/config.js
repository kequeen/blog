import { defaultTheme } from 'vuepress'
module.exports = {
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'G-WRXCG8WJ9G' // UA-00000000-0
      }
    ]
  ],
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
            text: '数据结构',
            link: '/algorithm/data_structure.md',
            children: [],
          },
          {
            text: '关于排序',
            link: '/algorithm/sort.md',
            children: [],
          },
          {
            text: 'leetcode',
            link: '/algorithm/leetcode/',
            children: [
              {
                text: '动态规划',
                link: '/algorithm/leetcode/dp.md',
                children: [],
              },
              {
                text: '链表',
                link: '/algorithm/leetcode/linked_list.md',
                children: [],
              },
              {
                text: '树',
                link: '/algorithm/leetcode/tree.md',
                children: [],
              },
              {
                text: '矩阵',
                link: '/algorithm/leetcode/matrix.md',
                children: [],
              },
              {
                text: '回溯法',
                link: '/algorithm/leetcode/backtrace.md',
                children: [],
              },
              {
                text: '图论',
                link: '/algorithm/leetcode/graph.md',
                children: [],
              },
              {
                text: '贪心',
                link: '/algorithm/leetcode/greedy.md',
                children: [],
              },
              {
                text: 'lru',
                link: '/algorithm/leetcode/lru.md',
                children: [],
              },
              {
                text: '滑动窗口',
                link: '/algorithm/leetcode/sliding_window.md',
                children: [],
              },
            ],
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
                    text : '常见问题',
                    link : '/language/go/interview.md',
                },
                {
                    text : '并发',
                    link : '/language/go/concurrency.md',
                },
                {
                    text : '调度器',
                    link : '/language/go/scheduler.md',
                },
                {
                    text : '对golang的一些意见',
                    link : '/language/go/complaint.md',
                },

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
      {
        text: '关于网络协议',
        link: '/protocal/',
        children: [
          // SidebarItem
          {
            text: 'rpc',
            link: '/protocal/rpc.md',
          },
          {
            text: 'http',
            link: '/protocal/http.md',
          },
        ],
      },
      {
        text: '存储',
        link: '/storage/',
        children: [
          // SidebarItem
          {
            text: 'mysql',
            link: '/storage/mysql.md',
          },
          {
            text: 'nosql',
            link: '/storage/nosql.md',
          },
          {
            text: 'redis',
            link: '/storage/redis.md',
          },
          {
            text: 'mongodb',
            link: '/storage/mongodb.md',
          },
        ],
      },
      {
        text: '云原生',
        link: '/cloud_native/',
        children: [
          {
            text: 'k8s',
            link: '/cloud_native/k8s.md',
          },
        ],
      },
      {
        text: '系统设计',
        link: '/system_design/',
        children: [
          {
            text: '消息队列',
            link: '/system_design/mq.md',
          },
        ],
      },
      {
        text: '关于前端',
        link: '/front_end/',
        children: [
          {
            text: 'react',
            link: '/front_end/react.md',
          },
        ],
      },
      {
        text: '关于其它',
        link: '/other/',
        children: [
          {
            text: '区块链',
            link: '/other/block_train/',
          },
        ],
      },
      {
        text: '关于书',
        link: '/book/',
        children: [
          // SidebarItem
          {
            text: '计算之魂',
            link: '/book/the_essence_of_computing.md',
          },
          {
            text: 'ddia',
            link: '/book/ddia.md',
          },
        ],
      },
    ],
  }),
}