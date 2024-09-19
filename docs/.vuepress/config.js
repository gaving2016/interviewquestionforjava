import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    title: 'My VuePress Site',
    description: 'This is my VuePress site',

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
