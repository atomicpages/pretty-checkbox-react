module.exports = {
    env: {
        jest: true,
        browser: true,
        node: true,
    },
    extends: [
        '@djthoms/eslint-config',
        '@djthoms/eslint-config/react',
        '@djthoms/eslint-config/flow',
    ],
};
