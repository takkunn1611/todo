import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'dist/desktop/main/index.js',
    dest: 'dist/desktop/main.js',
    format: 'cjs',
    plugins: [
        resolve({
            jsnext: true,
            main: true
        })
    ]
}