const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '前端总结与思考',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/my_docs/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'JAVASCRIPT',
        link: '/javascript/',
      },
      {
        text: 'VUE',
        link: '/vue/'
      },
      {
        text: 'REACT',
        link: '/react/'
      },
      {
        text: 'HTML&CSS',
        link: '/html&css/'
      },
      {
        text: 'WEIXIN',
        link: '/weixin/'
      }
    ],
    sidebar: {
      '/javascript/': [
        {
          title: 'javascript',
          collapsable: false,
          children: [
            'tcp',
            'closure',
          ]
        }
      ],
      '/html&css/': [
        {
          title: 'html&css',
          collapsable: false,
          children: [
            'margin',
            '扇形',
            '垂直居中'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
