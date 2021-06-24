module.exports = {
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true,
    },
    extends: [
        '@djthoms/eslint-config',
        '@djthoms/eslint-config/jest',
        '@djthoms/eslint-config/react',
        '@djthoms/eslint-config/react-typescript',
        '@djthoms/eslint-config/typescript',
    ],
};
