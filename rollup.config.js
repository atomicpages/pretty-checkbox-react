import pkg from './package.json';

import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import { uglify } from 'rollup-plugin-uglify';

const commonPlugins = [
    resolve({
        jsnext: true,
        main: true
    }),
    commonjs({
        include: 'node_modules/**',
        namedExports: {
            'node_modules/react/index.js': [
                'createElement',
                'Fragment',
                'cloneElement',
                'Children'
            ]
        }
    }),
    json()
];

const baseConfig = {
    input: './src/index.js',
    plugins: [
        babel(),
        ...commonPlugins
    ]
};

const umd_export = {
    output: {
        file: pkg.browser,
        name: 'PrettyCheckboxReact',
        format: 'umd',
        sourcemap: 'inline',
        globals: { react: 'React' },
        banner: `/* ${pkg.browser}:${pkg.version} */`
    },
    plugins: [
        babel(),
        ...commonPlugins,
        // uglify()
    ]
};

export default [
    {
        ...baseConfig,
        output: [
            {
                file: 'dist/pretty-checkbox-react.es.js',
                sourcemap: 'inline',
                format: 'esm',
                banner: `/* ${pkg.module}:${pkg.version} */`,
                compact: true
            },
            {
                file: 'dist/pretty-checkbox-react.cjs.js',
                sourcemap: 'inline',
                format: 'cjs',
                banner: `/* ${pkg.main}:${pkg.version} */`,
                compact: true
            }
        ]
    },
    {
        ...baseConfig,
        ...umd_export
    }
];
