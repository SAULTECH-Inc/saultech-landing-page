import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
    plugins: [svgr({
      svgrOptions: {
          icon: true,
        typescript: true,
        prettier: true,
        svgo: true
        },
      esbuildOptions: {
        jsxImportSource: "@emotion/react",
      },
    }), react()],
    server: {
        host: true,
        port: 5175,
    }
});
