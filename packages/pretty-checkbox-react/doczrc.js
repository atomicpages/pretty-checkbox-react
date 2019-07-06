export default {
    htmlContext: {
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href:
                        'https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0.3/dist/pretty-checkbox.min.css',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://codemirror.net/theme/dracula.css',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
                },
            ],
        },
    },
    themeConfig: {
        mode: 'light',
        codemirrorTheme: 'dracula',
    },
};
