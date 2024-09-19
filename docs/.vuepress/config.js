import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    title: 'Java 面试大全',
    description: '所有面试题全部收集于网上，仅供参考。',
    head: [
        ['link',{rel:'shortcut icon',href:'java.jpg'}],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    base:'/interviewquestionforjava/',
    theme: defaultTheme({
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '向导',
                    collapsable: false,
                    children: [
                       '/guide/README.md',
                    ]
                }
            ],
            '/base/': [
                {
                    title: '基础篇',
                    collapsable: false,
                    children: [

                    ]
                }
            ],
            '/jvm/': [
                {
                    title: 'JVM篇',
                    collapsable: false,
                    children: [

                    ]
                }
            ],
        },
    }),

    bundler: webpackBundler({
        postcss: {},
        vue: {},
    }),
})
