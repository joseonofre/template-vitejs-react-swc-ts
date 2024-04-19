import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    svgr(
      {
        // svgr options: https://react-svgr.com/docs/options/
        svgrOptions: {
          // ...
        },

        // esbuild options, to transform jsx to js
        esbuildOptions: {
          // ...
        },

        // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include.
        include: "**/*.svg",

        //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
        exclude: "",
      }
    )
  ],
})
