function generateRelease(text, releaseNum) {
  const items = []
  for (let index = releaseNum - 1; index > -1; index--) {
    const releaseId = text + '.' + index
    items.push({
      text: releaseId,
      link: `https://github.com/cytoscape/cytoscape.js/issues?q=milestone%3A${releaseId}+is%3Aclosed`
    })
  }
  return { text, items }
}

module.exports = {
  title: 'cytoscape',
  base: '/cytoscape/',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }]
  ],
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      {
        text: 'demo',
        link: '/demo/'
      },
      {
        text: 'API',
        link: '/api/'
      },
      {
        text: '历史版本',
        items: [
          generateRelease('3.12', 2),
          generateRelease('3.11', 2),
          generateRelease('3.10', 3),
          generateRelease('3.9', 5),
          generateRelease('3.8', 6),
          generateRelease('3.7', 7),
          generateRelease('3.6', 7),
          generateRelease('3.5', 10),
          generateRelease('3.4', 10),
          generateRelease('3.3', 7),
          generateRelease('3.2', 23),
          generateRelease('3.1', 6),
          generateRelease('3.0', 2),
          generateRelease('2.7', 30),
          generateRelease('2.6', 13),
          generateRelease('2.5', 6),
          generateRelease('2.4', 10),
          generateRelease('2.3', 17),
          generateRelease('2.2', 15),
          generateRelease('2.1', 2),
          generateRelease('2.0', 6)
        ]
      },
      { text: '我的博客', link: 'https://lost-dream.github.io/blog/' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '基础',
          collapsable: false,
          children: [
            'installation',
            '',
            'notation',
          ]
        },
        {
          title: '开始使用',
          collapsable: false,
          children: [
            'start'
          ]
        }
      ],
      '/api/': [
        {
          title: '',
          collapsable: false,
          children: [
            '',
            'graph-manipulation'
          ]
        }
      ]
    }
  }
}
