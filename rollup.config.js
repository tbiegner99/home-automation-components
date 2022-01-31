import replace from '@rollup/plugin-replace';

import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import styles from 'rollup-plugin-styles';
import svgr from "@svgr/rollup"
import { visualizer } from 'rollup-plugin-visualizer';

import pack from './package.json';

export default {
  input: './src/index.js',
  external: ['react', 'react-dom'],// , "@tbiegner99/react-forms"],
  output: [
    {
      file: pack.systemJSModule,
      format: 'system'
    },
    {
      file: pack.module,
      format: 'es'
    },
    {
      file: pack.main,
      format: 'cjs'
    }
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15
    }),
    resolve(), 
    styles({
      autoModules: true,
      modules: true
    }),
    json(),
    svgr(),
    babel({  babelHelpers:'runtime', skipPreflightCheck: true, exclude: 'node_modules/**' }),
    commonjs(),
    // terser(),
    visualizer()
  ]
};
