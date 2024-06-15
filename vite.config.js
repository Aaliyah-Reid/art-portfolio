import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// export default defineConfig({
//   plugins: [react()],
//   base: command === 'build' ? '/art-portfolio/' : '/',
//    // Use your repository name here
// });


export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/art-portfolio/' : '/',
  };
});