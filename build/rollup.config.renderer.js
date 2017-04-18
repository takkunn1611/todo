import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import env from 'rollup-plugin-env';
import commonjs from 'rollup-plugin-commonjs';
import tsc from 'typescript'

export default {
    entry: 'src/renderer/index.tsx',
    dest: 'dist/renderer.js',
    format: 'cjs',
    plugins: [
        typescript({
            typescript: tsc
        }),
        resolve({
            jsnext: true,
            main: true
        }),
        env({
            NODE_ENV: process.env.NODE_ENV
        }),
        commonjs({
            namedExports: {
                'node_modules/react/react.js': [
                    'createElement',
                    'Children',
                    'Component'
                ],
                'node_modules/react-dom/index.js': [
                    'render'
                ]
            }
        })
    ]
}