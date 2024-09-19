import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    title: 'My VuePress Site',
    description: 'This is my VuePress site',
    head: [
        ['link',{rel:'shortcut icon',href:'/imgs/home/credit.jpg'}],
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
                    text: 'Guide',
                    children: ['/guide/README.md'],
                },
            ],
        },
    }),

    bundler: webpackBundler({
        postcss: {},
        vue: {},
    }),
})
