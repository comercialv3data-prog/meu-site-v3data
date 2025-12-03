import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "*.csb.app",
      "p3gxrt-8080.csb.app",
      "p3gxrt-8081.csb.app",
      "localhost",
    ],
  },

  plugins: [react(), mode === "development" ? componentTagger() : null].filter(
    Boolean
  ),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
