import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'es',
      dir: 'dist',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [typescript(), dts()],
};
