import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';

export default [
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom'],
    output: [
      {
        format: 'esm',
        dir: 'dist',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      typescript(),
      commonjs(),
      nodeResolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      esbuild(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'esm',
        dir: 'dist',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [dts()],
  },
];
