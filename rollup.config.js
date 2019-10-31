import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [
  {
    input: './src/App.js',
    output: {
      file: './dist/app.js',
      format: 'iife',
      name: 'App',
    },
    plugins: [resolve({ browser: true }), commonjs(), babel()],
    watch: {
      chokidar: {
        usePolling: true,
      },
      include: './{src|assets}/**',
    },
  },
]
