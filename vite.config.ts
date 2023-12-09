import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";


export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      workbox: {
        cleanupOutdatedCaches: false,
        sourcemap: true
      }
    })
  ],
  build: {
    outDir: 'cordova/www',
  },
});
