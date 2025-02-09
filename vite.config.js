import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

const projectName = 'cockroach-poker-probability';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? `/${projectName}/` : '/';

  return {
    base,
    plugins: [vue(), tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src')
      }
    }
  };
});
