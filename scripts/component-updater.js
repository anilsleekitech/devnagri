#!/usr/bin/env node

/**
 * Component Updater for React to Next.js Conversion
 * Automatically updates component imports and patterns for Next.js compatibility
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import pattern replacements
const importReplacements = [
  {
    pattern: /import\s+\{\s*useNavigate\s*\}\s+from\s+['"]react-router-dom['"]/g,
    replacement: "import { useRouter } from 'next/navigation'"
  },
  {
    pattern: /import\s+\{\s*Link\s*\}\s+from\s+['"]react-router-dom['"]/g,
    replacement: "import Link from 'next/link'"
  },
  {
    pattern: /import\s+\{\s*useParams\s*\}\s+from\s+['"]react-router-dom['"]/g,
    replacement: "// useParams replaced with params prop in Next.js"
  },
  {
    pattern: /import\s+\{\s*useMetaTags\s*\}\s+from\s+['"]react-metatags-hook['"]/g,
    replacement: "// useMetaTags replaced with metadata export in Next.js"
  },
  {
    pattern: /import\s+\{\s*BrowserRouter\s*\}\s+from\s+['"]react-router-dom['"]/g,
    replacement: "// BrowserRouter not needed in Next.js"
  },
  {
    pattern: /import\s+\{\s*Routes\s*\}\s+from\s+['"]react-router-dom['"]/g,
    replacement: "// Routes not needed in Next.js"
  },
  {
    pattern: /import\s+\{\s*Route\s*\}\s+from\s+['"]react-router-dom['"]/g,
    replacement: "// Route not needed in Next.js"
  }
];

// Code pattern replacements
const codeReplacements = [
  {
    pattern: /const\s+navigate\s*=\s*useNavigate\(\)/g,
    replacement: "const router = useRouter()"
  },
  {
    pattern: /navigate\(['"]([^'"]+)['"]\)/g,
    replacement: "router.push('$1')"
  },
  {
    pattern: /<Link\s+to=/g,
    replacement: "<Link href="
  },
  {
    pattern: /const\s+\{\s*([^}]+)\s*\}\s*=\s*useParams\(\)/g,
    replacement: "// const { $1 } = useParams() - use params prop instead"
  },
  {
    pattern: /useMetaTags\(\{([^}]+)\}\)/g,
    replacement: "// useMetaTags({$1}) - use metadata export instead"
  }
];

// Component structure replacements
const componentReplacements = [
  {
    pattern: /function\s+(\w+)\s*\(/g,
    replacement: "export default function $1("
  },
  {
    pattern: /const\s+(\w+)\s*=\s*\(/g,
    replacement: "export default function $1("
  }
];

function updateFileContent(content, filePath) {
  let updatedContent = content;
  const changes = [];
  
  // Apply import replacements
  importReplacements.forEach(({ pattern, replacement }) => {
    if (pattern.test(updatedContent)) {
      updatedContent = updatedContent.replace(pattern, replacement);
      changes.push(`Updated import: ${pattern.source}`);
    }
  });
  
  // Apply code replacements
  codeReplacements.forEach(({ pattern, replacement }) => {
    if (pattern.test(updatedContent)) {
      updatedContent = updatedContent.replace(pattern, replacement);
      changes.push(`Updated code: ${pattern.source}`);
    }
  });
  
  // Apply component replacements (only for page components)
  if (filePath.includes('pages/') || filePath.includes('components/pages/')) {
    componentReplacements.forEach(({ pattern, replacement }) => {
      if (pattern.test(updatedContent)) {
        updatedContent = updatedContent.replace(pattern, replacement);
        changes.push(`Updated component: ${pattern.source}`);
      }
    });
  }
  
  return { updatedContent, changes };
}

function generateNextJsComponentTemplate(componentName, originalContent) {
  // Remove React Router specific code
  let template = originalContent
    .replace(/import\s+\{\s*[^}]*useNavigate[^}]*\}\s+from\s+['"]react-router-dom['"]/g, '')
    .replace(/import\s+\{\s*[^}]*Link[^}]*\}\s+from\s+['"]react-router-dom['"]/g, '')
    .replace(/import\s+\{\s*[^}]*useParams[^}]*\}\s+from\s+['"]react-router-dom['"]/g, '')
    .replace(/import\s+\{\s*[^}]*useMetaTags[^}]*\}\s+from\s+['"]react-metatags-hook['"]/g, '')
    .replace(/import\s+\{\s*[^}]*BrowserRouter[^}]*\}\s+from\s+['"]react-router-dom['"]/g, '')
    .replace(/import\s+\{\s*[^}]*Routes[^}]*\}\s+from\s+['"]react-router-dom['"]/g, '')
    .replace(/import\s+\{\s*[^}]*Route[^}]*\}\s+from\s+['"]react-router-dom['"]/g, '');
  
  // Add Next.js imports
  const nextImports = [];
  if (template.includes('useRouter')) {
    nextImports.push("import { useRouter } from 'next/navigation'");
  }
  if (template.includes('Link')) {
    nextImports.push("import Link from 'next/link'");
  }
  
  if (nextImports.length > 0) {
    template = nextImports.join('\n') + '\n\n' + template;
  }
  
  // Update component export
  if (template.includes('function ' + componentName)) {
    template = template.replace(
      new RegExp(`function\\s+${componentName}\\s*\\(`, 'g'),
      `export default function ${componentName}(`
    );
  } else if (template.includes('const ' + componentName)) {
    template = template.replace(
      new RegExp(`const\\s+${componentName}\\s*=\\s*\\(`, 'g'),
      `export default function ${componentName}(`
    );
  }
  
  return template;
}

function processDirectory(dirPath, outputDir) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Create corresponding directory in output
      const newDirPath = path.join(outputDir, file);
      if (!fs.existsSync(newDirPath)) {
        fs.mkdirSync(newDirPath, { recursive: true });
      }
      processDirectory(filePath, newDirPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      // Process React component files
      const content = fs.readFileSync(filePath, 'utf8');
      const { updatedContent, changes } = updateFileContent(content, filePath);
      
      // Generate Next.js template
      const componentName = path.basename(file, path.extname(file));
      const nextJsTemplate = generateNextJsComponentTemplate(componentName, updatedContent);
      
      // Write updated file
      const outputPath = path.join(outputDir, file);
      fs.writeFileSync(outputPath, nextJsTemplate);
      
      if (changes.length > 0) {
        console.log(`✅ Updated ${file}:`);
        changes.forEach(change => console.log(`   - ${change}`));
      }
    } else {
      // Copy other files as-is
      const outputPath = path.join(outputDir, file);
      fs.copyFileSync(filePath, outputPath);
    }
  });
}

function generateComponentMigrationGuide() {
  return `# Component Migration Guide

## Automatic Updates Applied

The following changes have been automatically applied to your components:

### 1. Import Updates
- \`useNavigate\` → \`useRouter\` from 'next/navigation'
- \`Link\` → \`Link\` from 'next/link'
- \`useParams\` → params prop (for page components)
- \`useMetaTags\` → metadata export (for page components)
- Removed React Router specific imports

### 2. Code Updates
- \`navigate('/path')\` → \`router.push('/path')\`
- \`<Link to="/path">\` → \`<Link href="/path">\`
- Component exports updated to default exports

### 3. Manual Updates Required

#### Navigation Components
Update your Navbar component to use Next.js Link:

\`\`\`javascript
// Before
import { Link } from 'react-router-dom';
<Link to="/about">About</Link>

// After
import Link from 'next/link';
<Link href="/about">About</Link>
\`\`\`

#### Page Components
Update page components to use Next.js patterns:

\`\`\`javascript
// Before
import { useParams } from 'react-router-dom';
function ResourceDetail() {
  const { id } = useParams();
  return <div>Resource: {id}</div>;
}

// After
export default function ResourceDetail({ params }) {
  const { id } = params;
  return <div>Resource: {id}</div>;
}
\`\`\`

#### Meta Tags
Update meta tags to use Next.js metadata API:

\`\`\`javascript
// Before
import { useMetaTags } from 'react-metatags-hook';
function AboutPage() {
  useMetaTags({
    title: 'About Us',
    description: 'About our company'
  });
  return <div>About</div>;
}

// After
export const metadata = {
  title: 'About Us',
  description: 'About our company'
};

export default function AboutPage() {
  return <div>About</div>;
}
\`\`\`

## Testing Checklist

- [ ] All navigation links work correctly
- [ ] Dynamic routes receive correct parameters
- [ ] Meta tags are properly set
- [ ] No console errors related to routing
- [ ] All components render without issues
- [ ] External links work properly
- [ ] Form submissions work correctly
- [ ] Image and asset paths are correct

## Common Issues and Solutions

### Issue: Navigation not working
**Solution:** Ensure you're using \`router.push()\` instead of \`navigate()\`

### Issue: Links not working
**Solution:** Use \`href\` instead of \`to\` in Link components

### Issue: Route parameters undefined
**Solution:** Use the \`params\` prop in page components instead of \`useParams()\`

### Issue: Meta tags not updating
**Solution:** Use the \`metadata\` export instead of \`useMetaTags()\`

## Performance Optimizations

1. **Image Optimization**: Use Next.js Image component
2. **Font Optimization**: Use Next.js font optimization
3. **Code Splitting**: Automatic with Next.js
4. **Static Generation**: Use \`generateStaticParams\` for static pages
5. **Server Components**: Convert components to server components where possible
`;
}

function main() {
  const srcDir = path.join(process.cwd(), 'src');
  const outputDir = path.join(process.cwd(), 'nextjs-components');
  
  if (!fs.existsSync(srcDir)) {
    console.error('❌ src directory not found');
    process.exit(1);
  }
  
  console.log('🔄 Converting React components to Next.js...\n');
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Process components
  processDirectory(srcDir, outputDir);
  
  // Generate migration guide
  const guidePath = path.join(outputDir, 'migration-guide.md');
  fs.writeFileSync(guidePath, generateComponentMigrationGuide());
  
  console.log('\n✅ Component conversion complete!');
  console.log(`📁 Converted components saved to: ${outputDir}`);
  console.log(`📖 Migration guide saved to: ${guidePath}`);
  
  console.log('\n💡 Next Steps:');
  console.log('1. Review the converted components in the nextjs-components directory');
  console.log('2. Follow the migration guide for manual updates');
  console.log('3. Test all components in your Next.js project');
  console.log('4. Update any remaining React Router specific code');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { 
  updateFileContent, 
  generateNextJsComponentTemplate, 
  processDirectory 
};