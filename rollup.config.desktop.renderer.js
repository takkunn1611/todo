import resolve from 'rollup-plugin-node-resolve';
import env from 'rollup-plugin-env';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'dist/desktop/renderer/index.js',
    dest: 'dist/desktop/renderer.js',
    format: 'cjs',
    plugins: [
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