#!/usr/bin/env node

/**
 * CSS Migrator for React to Next.js Conversion
 * Migrates CSS and styling configurations for Next.js compatibility
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CSS import patterns to update
const cssImportReplacements = [
  {
    pattern: /import\s+['"]bootstrap\/dist\/css\/bootstrap\.min\.css['"]/g,
    replacement: "@import 'bootstrap/dist/css/bootstrap.min.css';"
  },
  {
    pattern: /import\s+['"]swiper\/css['"]/g,
    replacement: "@import 'swiper/css';"
  },
  {
    pattern: /import\s+['"]swiper\/css\/navigation['"]/g,
    replacement: "@import 'swiper/css/navigation';"
  },
  {
    pattern: /import\s+['"]swiper\/css\/pagination['"]/g,
    replacement: "@import 'swiper/css/pagination';"
  },
  {
    pattern: /import\s+['"]swiper\/css\/autoplay['"]/g,
    replacement: "@import 'swiper/css/autoplay';"
  },
  {
    pattern: /import\s+['"]@fortawesome\/fontawesome-free\/css\/all\.min\.css['"]/g,
    replacement: "@import '@fortawesome/fontawesome-free/css/all.min.css';"
  },
  {
    pattern: /import\s+['"]bootstrap-icons\/font\/bootstrap-icons\.css['"]/g,
    replacement: "@import 'bootstrap-icons/font/bootstrap-icons.css';"
  },
  {
    pattern: /import\s+['"]animate\.css['"]/g,
    replacement: "@import 'animate.css';"
  }
];

// JS import patterns to update
const jsImportReplacements = [
  {
    pattern: /import\s+['"]bootstrap\/dist\/js\/bootstrap\.bundle\.min\.js['"]/g,
    replacement: "// Bootstrap JS should be loaded in layout.js or _app.js"
  }
];

function generateNextJsGlobalCss() {
  return `/* Import third-party CSS */
@import 'bootstrap/dist/css/bootstrap.min.css';
@import 'swiper/css';
@import 'swiper/css/navigation';
@import 'swiper/css/pagination';
@import 'swiper/css/autoplay';
@import '@fortawesome/fontawesome-free/css/all.min.css';
@import 'bootstrap-icons/font/bootstrap-icons.css';
@import 'animate.css';

/* Import custom CSS */
@import '../styles/index.css';
@import '../styles/App.css';

/* Global styles */
:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

/* Ensure Bootstrap components work properly */
.modal-backdrop {
  z-index: 1040;
}

.modal {
  z-index: 1050;
}

/* Fix for Bootstrap tooltips and popovers */
.tooltip {
  z-index: 1070;
}

.popover {
  z-index: 1060;
}

/* Ensure proper font loading */
@font-face {
  font-family: 'Bootstrap Icons';
  src: url('bootstrap-icons/font/fonts/bootstrap-icons.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}`;
}

function generateNextJsLayoutWithBootstrap() {
  return `import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Devnagri - AI-Powered Translation Services',
  description: 'Professional translation services powered by AI technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap JS - Load after DOM is ready */}
        <script
          dangerouslySetInnerHTML={{
            __html: \`
              document.addEventListener('DOMContentLoaded', function() {
                if (typeof window !== 'undefined' && window.bootstrap) {
                  // Bootstrap is already loaded
                } else {
                  // Load Bootstrap JS
                  const script = document.createElement('script');
                  script.src = '/bootstrap.bundle.min.js';
                  script.async = true;
                  document.head.appendChild(script);
                }
              });
            \`,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}`;
}

function generateNextJsConfig() {
  return `/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    // Handle Bootstrap CSS
    config.module.rules.push({
      test: /\\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    
    // Handle Bootstrap JS
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    
    return config;
  },
  // Copy Bootstrap assets to public directory
  async rewrites() {
    return [
      {
        source: '/bootstrap.bundle.min.js',
        destination: '/_next/static/chunks/bootstrap.bundle.min.js',
      },
    ];
  },
}

module.exports = nextConfig`;
}

function generateTailwindConfig() {
  return `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
  // Ensure Tailwind doesn't conflict with Bootstrap
  corePlugins: {
    preflight: false,
  },
}`;
}

function generatePostCssConfig() {
  return `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;
}

function updateCssImports(content) {
  let updatedContent = content;
  const changes = [];
  
  // Update CSS imports
  cssImportReplacements.forEach(({ pattern, replacement }) => {
    if (pattern.test(updatedContent)) {
      updatedContent = updatedContent.replace(pattern, replacement);
      changes.push(`Updated CSS import: ${pattern.source}`);
    }
  });
  
  // Update JS imports
  jsImportReplacements.forEach(({ pattern, replacement }) => {
    if (pattern.test(updatedContent)) {
      updatedContent = updatedContent.replace(pattern, replacement);
      changes.push(`Updated JS import: ${pattern.source}`);
    }
  });
  
  return { updatedContent, changes };
}

function copyAndUpdateCssFiles(srcDir, outputDir) {
  const cssFiles = ['App.css', 'index.css'];
  
  cssFiles.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const outputPath = path.join(outputDir, 'styles', file);
    
    if (fs.existsSync(srcPath)) {
      // Create styles directory
      const stylesDir = path.join(outputDir, 'styles');
      if (!fs.existsSync(stylesDir)) {
        fs.mkdirSync(stylesDir, { recursive: true });
      }
      
      // Copy and update CSS file
      const content = fs.readFileSync(srcPath, 'utf8');
      const { updatedContent, changes } = updateCssImports(content);
      
      fs.writeFileSync(outputPath, updatedContent);
      
      if (changes.length > 0) {
        console.log(`✅ Updated ${file}:`);
        changes.forEach(change => console.log(`   - ${change}`));
      } else {
        console.log(`📁 Copied ${file}`);
      }
    }
  });
}

function generateCssMigrationGuide() {
  return `# CSS Migration Guide for Next.js

## Changes Applied

### 1. CSS Import Updates
- Converted JavaScript CSS imports to CSS @import statements
- Moved Bootstrap JS loading to layout.js
- Updated import paths for Next.js compatibility

### 2. File Structure
\`\`\`
src/
├── app/
│   ├── globals.css          # Global styles with imports
│   └── layout.js            # Layout with Bootstrap JS
├── styles/
│   ├── App.css              # Your custom styles
│   └── index.css            # Additional styles
└── public/
    └── bootstrap.bundle.min.js  # Bootstrap JS file
\`\`\`

### 3. Configuration Files
- **next.config.js**: Webpack configuration for CSS handling
- **tailwind.config.js**: Tailwind configuration (if using)
- **postcss.config.js**: PostCSS configuration

## Manual Steps Required

### 1. Copy Bootstrap JS to Public Directory
\`\`\`bash
cp node_modules/bootstrap/dist/js/bootstrap.bundle.min.js public/
\`\`\`

### 2. Update Component CSS Imports
Remove CSS imports from component files and ensure they're in globals.css:

\`\`\`javascript
// Remove from components
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component.css';

// Add to app/globals.css
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '../styles/Component.css';
\`\`\`

### 3. Handle Dynamic CSS Loading
For components that need dynamic CSS, use Next.js dynamic imports:

\`\`\`javascript
import dynamic from 'next/dynamic';

const ComponentWithCSS = dynamic(() => import('./Component'), {
  ssr: false,
});
\`\`\`

## Bootstrap Integration

### 1. CSS Loading
Bootstrap CSS is loaded via @import in globals.css

### 2. JS Loading
Bootstrap JS is loaded in layout.js after DOM is ready

### 3. Component Usage
Bootstrap components work as usual:

\`\`\`javascript
export default function MyComponent() {
  return (
    <div className="container">
      <button className="btn btn-primary">Bootstrap Button</button>
    </div>
  );
}
\`\`\`

## Third-Party Libraries

### Swiper
\`\`\`css
@import 'swiper/css';
@import 'swiper/css/navigation';
@import 'swiper/css/pagination';
@import 'swiper/css/autoplay';
\`\`\`

### Font Awesome
\`\`\`css
@import '@fortawesome/fontawesome-free/css/all.min.css';
\`\`\`

### Bootstrap Icons
\`\`\`css
@import 'bootstrap-icons/font/bootstrap-icons.css';
\`\`\`

### Animate.css
\`\`\`css
@import 'animate.css';
\`\`\`

## Performance Optimizations

### 1. CSS Purge
Use PurgeCSS to remove unused CSS:

\`\`\`javascript
// next.config.js
const withPurgeCss = require('next-purgecss');

module.exports = withPurgeCss({
  purgeCss: {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './pages/**/*.{js,jsx,ts,tsx}',
    ],
  },
});
\`\`\`

### 2. Critical CSS
Extract critical CSS for faster loading:

\`\`\`javascript
// next.config.js
const withCritical = require('next-critical');

module.exports = withCritical({
  critical: {
    inline: true,
    base: 'public',
    html: 'index.html',
    width: 1300,
    height: 900,
  },
});
\`\`\`

## Troubleshooting

### Issue: Bootstrap styles not loading
**Solution:** Ensure Bootstrap CSS is imported in globals.css

### Issue: Bootstrap JS not working
**Solution:** Check that Bootstrap JS is loaded in layout.js

### Issue: CSS conflicts with Tailwind
**Solution:** Disable Tailwind preflight in tailwind.config.js

### Issue: Third-party CSS not loading
**Solution:** Add @import statements to globals.css

## Testing Checklist

- [ ] All Bootstrap components render correctly
- [ ] Custom CSS styles are applied
- [ ] Third-party library styles work
- [ ] Responsive design works on all devices
- [ ] No CSS conflicts between libraries
- [ ] Performance is acceptable
- [ ] Critical CSS loads quickly
- [ ] Non-critical CSS loads asynchronously
`;
}

function main() {
  const srcDir = path.join(process.cwd(), 'src');
  const outputDir = path.join(process.cwd(), 'nextjs-styles');
  
  if (!fs.existsSync(srcDir)) {
    console.error('❌ src directory not found');
    process.exit(1);
  }
  
  console.log('🎨 Migrating CSS and styles for Next.js...\n');
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Generate Next.js specific files
  const appDir = path.join(outputDir, 'app');
  if (!fs.existsSync(appDir)) {
    fs.mkdirSync(appDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(appDir, 'globals.css'), generateNextJsGlobalCss());
  fs.writeFileSync(path.join(appDir, 'layout.js'), generateNextJsLayoutWithBootstrap());
  fs.writeFileSync(path.join(outputDir, 'next.config.js'), generateNextJsConfig());
  fs.writeFileSync(path.join(outputDir, 'tailwind.config.js'), generateTailwindConfig());
  fs.writeFileSync(path.join(outputDir, 'postcss.config.js'), generatePostCssConfig());
  
  // Copy and update existing CSS files
  copyAndUpdateCssFiles(srcDir, outputDir);
  
  // Generate migration guide
  const guidePath = path.join(outputDir, 'css-migration-guide.md');
  fs.writeFileSync(guidePath, generateCssMigrationGuide());
  
  console.log('\n✅ CSS migration complete!');
  console.log(`📁 Migrated styles saved to: ${outputDir}`);
  console.log(`📖 CSS migration guide saved to: ${guidePath}`);
  
  console.log('\n💡 Next Steps:');
  console.log('1. Copy the generated files to your Next.js project');
  console.log('2. Copy Bootstrap JS to public directory');
  console.log('3. Update component CSS imports');
  console.log('4. Test all styles and components');
  console.log('5. Optimize CSS for production');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { 
  generateNextJsGlobalCss, 
  generateNextJsLayoutWithBootstrap,
  updateCssImports,
  copyAndUpdateCssFiles 
};