import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import tsc from 'typescript'

export default {
    entry: 'src/main/index.ts',
    dest: 'dist/main.js',
    format: 'cjs',
    plugins: [
        typescript({
            typescript: tsc
        }),
        resolve({
            jsnext: true,
            main: true
        }),
    ]
}