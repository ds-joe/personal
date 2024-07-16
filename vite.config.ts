import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// @ts-expect-error path type not found :D
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      // @ts-expect-error __dirname not found
      "@/": `${path.resolve(__dirname, "./src")}/`,
      // @ts-expect-error __dirname not found
      "~/": `${path.resolve(__dirname, "./public")}/`,
    },
  },
});
