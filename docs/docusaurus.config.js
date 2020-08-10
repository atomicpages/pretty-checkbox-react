const github = 'https://github.com/atomicpages/pretty-checkbox-react';

module.exports = {
    title: 'Pretty Checkbox React',
    tagline: 'A small, super awesome React wrapper around pretty-checkbox 💅',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'atomicpages', // Usually your GitHub org/user name.
    projectName: 'pretty-checkbox-react', // Usually your repo name.
    stylesheets: ['https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css'],
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
                // { to: 'blog', label: 'Blog', position: 'left' },
                {
                    href: github,
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        // {
                        //     label: 'Style Guide',
                        //     to: 'docs/',
                        // },
                        {
                            label: 'Second Doc',
                            to: 'docs/doc2/',
                        },
                    ],
                },
                // {
                //     title: 'More',
                //     items: [
                //         {
                //             label: 'Blog',
                //             to: 'blog',
                //         },
                //         {
                //             label: 'GitHub',
                //             href: 'https://github.com/facebook/docusaurus',
                //         },
                //     ],
                // },
            ],
            copyright: `Copyright &copy; ${new Date().getFullYear()} Dennis Thompson. Built with Docusaurus.`,
        },
    },
    plugins: ['docusaurus-plugin-sass', '@docusaurus/plugin-ideal-image'],
    themes: ['@docusaurus/theme-live-codeblock'],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    homePageId: 'getting-started/installation',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: `${github}/edit/master/docs/`,
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
            },
        ],
    ],
};
