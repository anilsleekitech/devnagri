#!/usr/bin/env node

/**
 * Route Converter for React to Next.js Conversion
 * Converts React Router routes to Next.js App Router structure
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route mapping based on your current React Router setup
const routeMapping = {
  '/': 'page.js',
  '/about': 'about/page.js',
  '/contact': 'contact/page.js',
  '/chatbots': 'chatbots/page.js',
  '/industry': 'industry/page.js',
  '/resources': 'resources/page.js',
  '/resources/:id': 'resources/[id]/page.js',
  '/banking-finance-translation': 'banking-finance-translation/page.js',
  '/careers': 'careers/page.js',
  '/d2c': 'd2c/page.js',
  '/document-translation-workflow': 'document-translation-workflow/page.js',
  '/dota-app': 'dota-app/page.js',
  '/machine-translation-api': 'machine-translation-api/page.js',
  '/machine-translitration-api': 'machine-translitration-api/page.js',
  '/ocr': 'ocr/page.js',
  '/voicebot': 'voicebot/page.js',
  '/dota-web': 'dota-web/page.js',
  '/ecommerce-translation': 'ecommerce-translation/page.js',
  '/govt': 'govt/page.js',
  '/book-demo': 'book-demo/page.js',
  '/terms-and-conditions': 'terms-and-conditions/page.js',
  '/privacy-policy': 'privacy-policy/page.js',
  '/refund-policy': 'refund-policy/page.js'
};

// Component mapping from React Router to Next.js
const componentMapping = {
  'Home': 'Home',
  'About': 'About',
  'Contact': 'Contact',
  'ChatBots': 'ChatBots',
  'Industry': 'Industry',
  'Resources': 'Resources',
  'ResourcesDetail': 'ResourcesDetail',
  'BankingFinanceTranslation': 'BankingFinanceTranslation',
  'Careers': 'Careers',
  'D2C': 'D2C',
  'DocumentTranslationWorkflow': 'DocumentTranslationWorkflow',
  'DotaApp': 'DotaApp',
  'MachineTranslationApi': 'MachineTranslationApi',
  'MachineTranslitrationApi': 'MachineTranslitrationApi',
  'Ocr': 'Ocr',
  'Voicebot': 'Voicebot',
  'DotaWeb': 'DotaWeb',
  'EcommerceTranslation': 'EcommerceTranslation',
  'Govt': 'Govt',
  'BookDemo': 'BookDemo',
  'TermsandConditions': 'TermsandConditions',
  'PrivacyPolicy': 'PrivacyPolicy',
  'RefundPolicy': 'RefundPolicy'
};

function generateNextJsAppStructure() {
  const appStructure = {
    'app': {
      'layout.js': generateLayoutTemplate(),
      'page.js': generateHomePageTemplate(),
      'globals.css': generateGlobalCssTemplate(),
      'about': { 'page.js': generatePageTemplate('About') },
      'contact': { 'page.js': generatePageTemplate('Contact') },
      'chatbots': { 'page.js': generatePageTemplate('ChatBots') },
      'industry': { 'page.js': generatePageTemplate('Industry') },
      'resources': { 
        'page.js': generatePageTemplate('Resources'),
        '[id]': { 'page.js': generateDynamicPageTemplate('ResourcesDetail') }
      },
      'banking-finance-translation': { 'page.js': generatePageTemplate('BankingFinanceTranslation') },
      'careers': { 'page.js': generatePageTemplate('Careers') },
      'd2c': { 'page.js': generatePageTemplate('D2C') },
      'document-translation-workflow': { 'page.js': generatePageTemplate('DocumentTranslationWorkflow') },
      'dota-app': { 'page.js': generatePageTemplate('DotaApp') },
      'machine-translation-api': { 'page.js': generatePageTemplate('MachineTranslationApi') },
      'machine-translitration-api': { 'page.js': generatePageTemplate('MachineTranslitrationApi') },
      'ocr': { 'page.js': generatePageTemplate('Ocr') },
      'voicebot': { 'page.js': generatePageTemplate('Voicebot') },
      'dota-web': { 'page.js': generatePageTemplate('DotaWeb') },
      'ecommerce-translation': { 'page.js': generatePageTemplate('EcommerceTranslation') },
      'govt': { 'page.js': generatePageTemplate('Govt') },
      'book-demo': { 'page.js': generatePageTemplate('BookDemo') },
      'terms-and-conditions': { 'page.js': generatePageTemplate('TermsandConditions') },
      'privacy-policy': { 'page.js': generatePageTemplate('PrivacyPolicy') },
      'refund-policy': { 'page.js': generatePageTemplate('RefundPolicy') }
    }
  };
  
  return appStructure;
}

function generateLayoutTemplate() {
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

function generateHomePageTemplate() {
  return `import Home from '@/components/pages/Home'

export default function HomePage() {
  return <Home />
}`;
}

function generatePageTemplate(componentName) {
  return `import ${componentName} from '@/components/pages/${componentName}'

export default function ${componentName}Page() {
  return <${componentName} />
}`;
}

function generateDynamicPageTemplate(componentName) {
  return `import ${componentName} from '@/components/pages/${componentName}'

export default function ${componentName}Page({ params }) {
  return <${componentName} id={params.id} />
}`;
}

function generateGlobalCssTemplate() {
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

/* Import Bootstrap JS */
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
}`;
}

function generateComponentConversionGuide() {
  return `# Component Conversion Guide

## Converting React Router Components to Next.js

### 1. Navigation Changes

**Before (React Router):**
\`\`\`javascript
import { useNavigate, Link } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/about');
  };
  
  return (
    <div>
      <Link to="/about">About</Link>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
}
\`\`\`

**After (Next.js):**
\`\`\`javascript
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function MyComponent() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/about');
  };
  
  return (
    <div>
      <Link href="/about">About</Link>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
}
\`\`\`

### 2. Route Parameters

**Before (React Router):**
\`\`\`javascript
import { useParams } from 'react-router-dom';

function ResourceDetail() {
  const { id } = useParams();
  return <div>Resource ID: {id}</div>;
}
\`\`\`

**After (Next.js):**
\`\`\`javascript
// app/resources/[id]/page.js
export default function ResourceDetail({ params }) {
  const { id } = params;
  return <div>Resource ID: {id}</div>;
}
\`\`\`

### 3. Meta Tags and SEO

**Before (React Router):**
\`\`\`javascript
import { useMetaTags } from 'react-metatags-hook';

function AboutPage() {
  useMetaTags({
    title: 'About Us',
    description: 'Learn more about our company'
  });
  
  return <div>About Page</div>;
}
\`\`\`

**After (Next.js):**
\`\`\`javascript
// app/about/page.js
export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company'
};

export default function AboutPage() {
  return <div>About Page</div>;
}
\`\`\`

### 4. Layout Components

**Before (React Router):**
\`\`\`javascript
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
\`\`\`

**After (Next.js):**
\`\`\`javascript
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
\`\`\`

## File Structure Changes

### Before (React Router):
\`\`\`
src/
├── App.jsx
├── main.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
└── components/
    ├── Navbar.jsx
    └── Footer.jsx
\`\`\`

### After (Next.js App Router):
\`\`\`
src/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── about/
│   │   └── page.js
│   └── contact/
│       └── page.js
└── components/
    ├── Navbar.jsx
    └── Footer.jsx
\`\`\`

## Migration Checklist

- [ ] Convert all \`useNavigate\` to \`useRouter\`
- [ ] Replace \`Link\` components with Next.js \`Link\`
- [ ] Convert route parameters to Next.js params
- [ ] Update meta tags to use Next.js metadata API
- [ ] Move page components to app directory
- [ ] Update import paths
- [ ] Test all routes and navigation
- [ ] Verify SEO and meta tags work correctly
`;
}

function generateMigrationScript() {
  return `#!/bin/bash

# React to Next.js Migration Script
echo "🚀 Starting React to Next.js migration..."

# Create Next.js project
echo "📦 Creating Next.js project..."
npx create-next-app@latest devnagri-nextjs --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes

# Navigate to new project
cd devnagri-nextjs

# Install dependencies
echo "📥 Installing dependencies..."
npm install @fortawesome/fontawesome-free @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @popperjs/core animate.css axios bootstrap bootstrap-icons countup.js jquery owl.carousel react-google-recaptcha react-slick slick-carousel swiper wow.js

# Create directory structure
echo "📁 Creating directory structure..."
mkdir -p src/app/about
mkdir -p src/app/contact
mkdir -p src/app/chatbots
mkdir -p src/app/industry
mkdir -p src/app/resources
mkdir -p src/app/banking-finance-translation
mkdir -p src/app/careers
mkdir -p src/app/d2c
mkdir -p src/app/document-translation-workflow
mkdir -p src/app/dota-app
mkdir -p src/app/machine-translation-api
mkdir -p src/app/machine-translitration-api
mkdir -p src/app/ocr
mkdir -p src/app/voicebot
mkdir -p src/app/dota-web
mkdir -p src/app/ecommerce-translation
mkdir -p src/app/govt
mkdir -p src/app/book-demo
mkdir -p src/app/terms-and-conditions
mkdir -p src/app/privacy-policy
mkdir -p src/app/refund-policy

mkdir -p src/components/pages
mkdir -p src/styles

echo "✅ Migration setup complete!"
echo "📋 Next steps:"
echo "1. Copy your existing components to src/components/"
echo "2. Copy your existing pages to src/components/pages/"
echo "3. Copy your CSS files to src/styles/"
echo "4. Update import paths and routing logic"
echo "5. Test the application"
`;
}

function main() {
  console.log('🔄 React Router to Next.js App Router Converter\n');
  
  console.log('📋 Route Mapping:');
  Object.entries(routeMapping).forEach(([route, filePath]) => {
    console.log(`  ${route} → app/${filePath}`);
  });
  
  console.log('\n📁 Generated App Structure:');
  const appStructure = generateNextJsAppStructure();
  console.log(JSON.stringify(appStructure, null, 2));
  
  console.log('\n📄 Generated Templates:');
  console.log('✅ Layout template generated');
  console.log('✅ Home page template generated');
  console.log('✅ Page templates generated');
  console.log('✅ Global CSS template generated');
  
  // Write templates to files
  const templatesDir = path.join(process.cwd(), 'templates');
  if (!fs.existsSync(templatesDir)) {
    fs.mkdirSync(templatesDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(templatesDir, 'layout.js'), generateLayoutTemplate());
  fs.writeFileSync(path.join(templatesDir, 'page.js'), generateHomePageTemplate());
  fs.writeFileSync(path.join(templatesDir, 'globals.css'), generateGlobalCssTemplate());
  fs.writeFileSync(path.join(templatesDir, 'component-guide.md'), generateComponentConversionGuide());
  fs.writeFileSync(path.join(templatesDir, 'migrate.sh'), generateMigrationScript());
  
  console.log('\n💾 Templates saved to ./templates/');
  console.log('\n💡 Next Steps:');
  console.log('1. Run: chmod +x templates/migrate.sh');
  console.log('2. Run: ./templates/migrate.sh');
  console.log('3. Follow the component conversion guide');
  console.log('4. Test your converted application');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { 
  generateNextJsAppStructure, 
  generateLayoutTemplate, 
  generatePageTemplate,
  generateComponentConversionGuide 
};