module.exports = {
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true,
    },
    extends: [
        '@djthoms/eslint-config',
        '@djthoms/eslint-config/react',
        '@djthoms/eslint-config/typescript',
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/ban-ts-ignore': 'warn',
        '@typescript-eslint/no-this-alias': 'warn',
    },
};
