import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
    build: {
      cssMinify: true,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: false, // Keep console.log for debugging, set to true to remove all console statements
          drop_debugger: true,
          pure_funcs: ["console.debug", "console.trace"], // Remove these console methods
          passes: 2, // Multiple passes for better compression
          unsafe: false, // Keep safe (set to true for more aggressive compression)
          unsafe_comps: false,
          unsafe_math: false,
          unsafe_methods: false,
          dead_code: true, // Remove dead code
          unused: true, // Remove unused variables
        },
        format: {
          comments: false, // Remove all comments
          preserve_annotations: false,
        },
        mangle: {
          toplevel: false, // Don't mangle top-level names (safer)
          properties: false, // Don't mangle property names (safer)
        },
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Separate React into its own chunk for better caching
            if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
              return "react-vendor";
            }
            // Separate Fuse.js (search) into its own chunk
            if (id.includes("node_modules/fuse.js")) {
              return "search-vendor";
            }
          },
        },
      },
    },
  },
  scopedStyleStrategy: "where",
  build: {
    inlineStylesheets: "auto",
  },
});
