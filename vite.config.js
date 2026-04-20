/**
 * VITE CONFIGURATION - C HAWK CONSTRUCTION
 * 
 * @fileoverview Production build configuration with advanced optimization
 * @version 2.0.0 - MULTI-PAGE SUPPORT ADDED
 * @author David Mauricio Herazo Lopez
 * 
 * @description
 * Comprehensive Vite configuration for optimal production builds including:
 * - Multi-page application support (index, contact, services, etc.)
 * - CSS code splitting and lazy loading
 * - JavaScript chunking strategy
 * - Asset optimization and fingerprinting
 * - Terser compression with aggressive settings
 * - HTML minification
 * 
 * Build Strategy:
 * - Separate vendor dependencies into dedicated chunk
 * - Split large modules (translations, sections) into individual chunks
 * - Organize assets by type (images, fonts, CSS, JS)
 * - Enable CSS code splitting for lazy loading
 * 
 * Performance Targets:
 * - Initial bundle: < 100KB (gzipped)
 * - Chunk size warning: 500KB
 * - Tree shaking: Enabled
 * - Dead code elimination: Enabled
 * 
 * @requires vite
 * @requires vite-plugin-html
 * @requires path (Node.js built-in)
 */

import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { resolve } from 'path';

export default defineConfig({
  // ============================================================================
  // PLUGINS CONFIGURATION
  // ============================================================================
  
  plugins: [
    /**
     * HTML Plugin Configuration
     * Minifies HTML output with aggressive settings
     */
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,    // Remove whitespace between tags
        removeComments: true,          // Strip HTML comments
        minifyCSS: true,               // Minify inline CSS
        minifyJS: true,                // Minify inline JavaScript
      },
    }),
  ],
  
  // ============================================================================
  // BUILD CONFIGURATION
  // ============================================================================
  
  build: {
    /**
     * Output directory for production build
     * @type {string}
     */
    outDir: 'dist',
    
    /**
     * Assets subdirectory within outDir
     * @type {string}
     */
    assetsDir: 'assets',
    
    /**
     * Generate sourcemaps for debugging (disabled for production)
     * @type {boolean}
     */
    sourcemap: false,
    
    /**
     * Minification engine for JavaScript
     * Options: 'terser' | 'esbuild' | false
     * @type {string}
     */
    minify: 'terser',
    
    /**
     * CSS minification engine
     * 'lightningcss' is faster than default postcss
     * @type {string}
     */
    cssMinify: 'lightningcss',
    
    /**
     * Terser compression options
     * Aggressive optimization for production
     */
    terserOptions: {
      compress: {
        drop_console: true,              // Remove console.* statements
        drop_debugger: true,             // Remove debugger statements
        passes: 3,                       // Multiple optimization passes
        pure_funcs: [                    // Functions to remove if unused
          'console.log',
          'console.info',
          'console.warn'
        ],
        dead_code: true,                 // Remove unreachable code
        unused: true,                    // Remove unused variables
      },
      mangle: {
        safari10: true,                  // Safari 10 compatibility
        toplevel: true,                  // Mangle top-level variable names
      },
      format: {
        comments: false,                 // Remove all comments
      },
    },
    
    /**
     * Rollup-specific build options
     * Controls code splitting and asset handling
     */
    rollupOptions: {
      /**
       * ========================================================================
       * MULTI-PAGE APPLICATION CONFIGURATION
       * ========================================================================
       * Define all HTML entry points for the application
       * Each HTML file will be processed and included in the build
       * 
       * Add new pages here as you create them:
       * - index: Main homepage
       * - contact: Contact page
       * - services: Services listing (future)
       * - portfolio: Portfolio/Gallery (future)
       * - about: About page (future)
       * - blog: Blog listing (future)
       */
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        blog:            resolve(__dirname, 'blog-index.html'),
        blogKitchen:     resolve(__dirname, 'blog-kitchen-cost.html'),
        blogHicpa:       resolve(__dirname, 'blog-hicpa-v2.html'),
        blogMold:        resolve(__dirname, 'blog-mold-health.html'),
        blogPsychology:  resolve(__dirname, 'blog-psychology-home.html'),
        blogFlooring:    resolve(__dirname, 'blog-flooring-pa.html'),
        blogPlanning:    resolve(__dirname, 'blog-planning-guide.html'),
        about:    resolve(__dirname, 'about.html'),
        remodeling: resolve(__dirname, 'remodeling.html'),
        carpentry: resolve(__dirname, 'carpentry.html'),
        drywall: resolve(__dirname, 'drywall.html'),
        flooring: resolve(__dirname, 'flooring.html'),
        painting: resolve(__dirname, 'painting.html'),
        weatherization: resolve(__dirname, 'weatherization.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),



      },
      
      output: {
        /**
         * Manual chunk splitting strategy
         * Separates code into logical bundles for optimal caching
         * 
         * @param {string} id - Module identifier (file path)
         * @returns {string|undefined} Chunk name or undefined for default
         */
        manualChunks(id) {
          // Vendor dependencies (node_modules)
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          
          // Translation data (separate for caching)
          if (id.includes('Language')) {
            return 'translations';
          }
          
          // Conversion section (lazy loaded)
          if (id.includes('Conversion')) {
            return 'conversion';
          }
          
          // Gallery section (lazy loaded)
          if (id.includes('Gallery')) {
            return 'gallery';
          }
          
          // FAQ section (lazy loaded)
          if (id.includes('faq') || id.includes('FAQ')) {
            return 'faq';
          }
          
          // Navigation module
          if (id.includes('Navigation')) {
            return 'navigation';
          }
        },
        
        /**
         * Asset file naming pattern with content hashing
         * Organizes assets by type for better caching strategy
         * 
         * @param {Object} assetInfo - Asset metadata
         * @param {string} assetInfo.name - Original asset filename
         * @returns {string} Output path with hash
         */
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split('.').pop();
          
          // Images: png, jpg, jpeg, svg, gif, webp, avif
          if (/png|jpe?g|svg|gif|webp|avif/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          
          // CSS stylesheets
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          
          // Fonts: woff, woff2, ttf, eot
          if (/woff|woff2|ttf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          
          // Other assets (fallback)
          return `assets/[name]-[hash][extname]`;
        },
        
        /**
         * JavaScript chunk file naming pattern
         * @type {string}
         */
        chunkFileNames: 'assets/js/[name]-[hash].js',
        
        /**
         * Entry point file naming pattern
         * @type {string}
         */
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    
    /**
     * Report compressed (gzipped) bundle sizes
     * Useful for monitoring build output size
     * @type {boolean}
     */
    reportCompressedSize: true,
    
    /**
     * Chunk size warning threshold in KB
     * Warns if any chunk exceeds this size
     * @type {number}
     */
    chunkSizeWarningLimit: 500,
  },
  
  // ============================================================================
  // DEPENDENCY OPTIMIZATION
  // ============================================================================
  
  /**
   * Dependencies to pre-bundle and optimize
   * Improves dev server cold start time
   */
  optimizeDeps: {
    include: ['./assets/js/core/Language.js']
  },
  
  // ============================================================================
  // CSS CONFIGURATION
  // ============================================================================
  
  css: {
    /**
     * Generate sourcemaps for CSS in development
     * Disabled for cleaner build output
     * @type {boolean}
     */
    devSourcemap: false,
    
    /**
     * Enable CSS code splitting (CRITICAL FOR OPTIMIZATION)
     * Automatically splits CSS per chunk
     * Enables lazy loading of section-specific styles
     * @type {boolean}
     * @default true
     */
    // cssCodeSplit: true, // This is true by default in Vite
  },
  
  // ============================================================================
  // DEVELOPMENT SERVER CONFIGURATION
  // ============================================================================
  
  server: {
    /**
     * Development server port
     * @type {number}
     */
    port: 3000,
    
    /**
     * Automatically open browser on server start
     * @type {boolean}
     */
    open: true,
    
    /**
     * Enable CORS for development
     * @type {boolean}
     */
    // cors: true,
    
    /**
     * Enable Hot Module Replacement (HMR)
     * @type {boolean}
     * @default true
     */
    // hmr: true,
  },
});