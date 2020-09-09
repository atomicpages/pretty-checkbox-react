const path = require('path');

const github = 'https://github.com/atomicpages/pretty-checkbox-react';

module.exports = {
    title: 'Pretty Checkbox React',
    tagline: 'A small, super awesome React wrapper around pretty-checkbox 💅',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'atomicpages', // Usually your GitHub org/user name.
    projectName: 'pretty-checkbox-react', // Usually your repo name.
    stylesheets: [
        'https://unpkg.com/@djthoms/pretty-checkbox@3.0.4/dist/pretty-checkbox.min.css',
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
                            label: 'Style Guide',
                            to: 'docs/',
                        },
                    ],
                },
            ],
            copyright: `Made with \u2665 by Dennis Thompson \uFF5C &copy; ${new Date().getFullYear()} \uFF5C Built with Docusaurus.`,
        },
    },
    plugins: [
        [
            '@djthoms/docusaurus-plugin-sass',
            {
                implementation: require('sass'),
            },
        ],
        '@docusaurus/plugin-ideal-image',
        [
            'docusaurus-plugin-module-alias',
            {
                alias: {
                    '@local/pretty-checkbox-react': path.resolve(__dirname, '../src/index.ts'),
                },
            },
        ],
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
    ],
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
