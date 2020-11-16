const path = require('path');

const github = 'https://github.com/atomicpages/pretty-checkbox-react';

const plugins = [
    [
        '@docusaurus/plugin-pwa',
        {
            debug: true,
            offlineModeActivationStrategies: ['appInstalled', 'queryString'],
            pwaHead: [
                {
                    tagName: 'link',
                    rel: 'icon',
                    href: '/img/logo.png',
                },
                {
                    tagName: 'link',
                    rel: 'manifest',
                    href: '/manifest.json', // your PWA manifest
                },
                {
                    tagName: 'meta',
                    name: 'theme-color',
                    content: 'rgb(131, 56, 194)',
                },
            ],
        },
    ],
    [
        '@djthoms/docusaurus-plugin-sass',
        {
            implementation: require('sass'),
        },
    ],
    '@docusaurus/plugin-ideal-image',
    [
        'docusaurus-plugin-react-docgen-typescript',
        {
            src: ['../src/**/*.{ts,tsx}', '!../src/**/*.test.*'],
            global: true,
            parserOptions: {
                shouldExtractLiteralValuesFromEnum: true,
                shouldRemoveUndefinedFromOptional: true,
                propFilter: prop => {
                    if (prop.parent) {
                        return !prop.parent.fileName.includes('@types/react');
                    }

                    return prop.name !== 'iconType';
                },
            },
        },
    ],
];

if (process.env.NODE_ENV !== 'production') {
    // const [, config] = plugins[plugins.length - 1];
    // config.src = ['../src/**/*.{ts,tsx}', '!../src/**/*.test.*'];

    plugins.push([
        'docusaurus-plugin-module-alias',
        {
            alias: {
                'pretty-checkbox-react': path.resolve(__dirname, '../src/index.ts'),
            },
        },
    ]);
}

module.exports = {
    title: 'Pretty Checkbox React',
    tagline: 'A small, super awesome React wrapper around pretty-checkbox 💅',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'atomicpages', // Usually your GitHub org/user name.
    projectName: 'pretty-checkbox-react', // Usually your repo name.
    stylesheets: [
        'https://unpkg.com/@djthoms/pretty-checkbox@3.1.0/dist/pretty-checkbox.min.css',
        'https://cdn.materialdesignicons.com/5.5.55/css/materialdesignicons.min.css',
    ],
    themeConfig: {
        navbar: {
            title: 'Pretty Checkbox React',
            logo: {
                alt: 'Pretty Checkbox React Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    href: github,
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/palenight'),
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Getting Started',
                            to: 'docs/',
                        },
                        {
                            label: 'Main Concepts',
                            to: 'docs/main-concepts/components/',
                        },
                        {
                            label: 'API Reference',
                            to: 'docs/api/checkbox/',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Github',
                            href: 'https://github.com/atomicpages/pretty-checkbox-react',
                        },
                        {
                            label: 'Pretty Checkbox',
                            href: 'https://lokesh-coder.github.io/pretty-checkbox/',
                        },
                    ],
                },
            ],
            copyright: `Made with \u2665 by Dennis Thompson & Docusaurus \uFF5C &copy; ${new Date().getFullYear()}`,
        },
        algolia: {
            apiKey: process.env.ALGOLIA_KEY,
            indexName: 'pretty-checkbox',
            searchParameters: {}, // Optional (if provided by Algolia)
        },
    },
    plugins,
    themes: ['@docusaurus/theme-live-codeblock'],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: `${github}/edit/master/docs/`,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
            },
        ],
    ],
};
