const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Pretty Checkbox React',
        description: 'A tiny react wrapper around pretty-checkbox',
        author: '@atomicpages',
    },
    plugins: [
        {
            resolve: `gatsby-mdx`,
            options: {
                defaultLayouts: { default: path.resolve('./src/components/layout.js') },
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-default-mdx-basic',
                short_name: 'starter',
                start_url: '/',
                background_color: '#f1f3f5',
                theme_color: '#f1f3f5',
                display: 'minimal-ui',
                icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
            },
        },
        // {
        //     resolve: 'gatsby-transformer-remark',
        //     options: {
        //         plugins: [
        //             'gatsby-remark-prismjs'
        //         ]
        //     },
        // },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ],
};
