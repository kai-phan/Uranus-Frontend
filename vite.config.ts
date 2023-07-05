import react from '@vitejs/plugin-react';
import _ from 'lodash';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: _.join(__dirname, 'src'),
    },
  },
});
