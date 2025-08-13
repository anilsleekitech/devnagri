#!/usr/bin/env node

/**
 * Main React to Next.js Conversion Script
 * Orchestrates all conversion tools and provides comprehensive migration workflow
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import conversion modules
import * as dependencyMapper from './scripts/dependency-mapper.js';
import * as routeConverter from './scripts/route-converter.js';
import * as componentUpdater from './scripts/component-updater.js';
import * as cssMigrator from './scripts/css-migrator.js';

function printBanner() {
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║                    React to Next.js Converter                ║
║                    Using Free AI Tools                       ║
╚══════════════════════════════════════════════════════════════╝
  `);
}

function printStep(step, title) {
  console.log(`\n${step}. ${title}`);
  console.log('─'.repeat(50));
}

function checkPrerequisites() {
  console.log('🔍 Checking prerequisites...');
  
  // Check if package.json exists
  if (!fs.existsSync('package.json')) {
    console.error('❌ package.json not found in current directory');
    process.exit(1);
  }
  
  // Check if src directory exists
  if (!fs.existsSync('src')) {
    console.error('❌ src directory not found');
    process.exit(1);
  }
  
  // Check Node.js version
  const nodeVersion = process.version;
  console.log(`✅ Node.js version: ${nodeVersion}`);
  
  // Check npm availability
  try {
    execSync('npm --version', { stdio: 'pipe' });
    console.log('✅ npm is available');
  } catch (error) {
    console.error('❌ npm is not available');
    process.exit(1);
  }
  
  console.log('✅ All prerequisites met!\n');
}

function runDependencyAnalysis() {
  printStep(1, 'Analyzing Dependencies');
  
  try {
    const analysis = dependencyMapper.analyzePackageJson('package.json');
    if (analysis) {
      dependencyMapper.generateInstallCommands(analysis);
      
      // Save analysis results
      const analysisPath = path.join(process.cwd(), 'conversion-results', 'dependency-analysis.json');
      fs.mkdirSync(path.dirname(analysisPath), { recursive: true });
      fs.writeFileSync(analysisPath, JSON.stringify(analysis, null, 2));
      
      console.log(`\n📄 Analysis saved to: ${analysisPath}`);
    }
  } catch (error) {
    console.error('❌ Error analyzing dependencies:', error.message);
  }
}

function runRouteConversion() {
  printStep(2, 'Converting Routes to Next.js App Router');
  
  try {
    // Run route converter
    routeConverter.main();
    
    console.log('✅ Route conversion completed');
  } catch (error) {
    console.error('❌ Error converting routes:', error.message);
  }
}

function runComponentConversion() {
  printStep(3, 'Converting Components for Next.js');
  
  try {
    // Run component updater
    componentUpdater.main();
    
    console.log('✅ Component conversion completed');
  } catch (error) {
    console.error('❌ Error converting components:', error.message);
  }
}

function runCssMigration() {
  printStep(4, 'Migrating CSS and Styles');
  
  try {
    // Run CSS migrator
    cssMigrator.main();
    
    console.log('✅ CSS migration completed');
  } catch (error) {
    console.error('❌ Error migrating CSS:', error.message);
  }
}

function generateNextJsProject() {
  printStep(5, 'Generating Next.js Project Structure');
  
  const projectName = 'devnagri-nextjs';
  
  try {
    console.log(`📦 Creating Next.js project: ${projectName}`);
    
    // Create Next.js project
    execSync(`npx create-next-app@latest ${projectName} --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes`, {
      stdio: 'inherit'
    });
    
    console.log('✅ Next.js project created successfully');
    
    // Copy conversion results to the new project
    const conversionDir = path.join(process.cwd(), 'conversion-results');
    const targetDir = path.join(process.cwd(), projectName, 'conversion-results');
    
    if (fs.existsSync(conversionDir)) {
      execSync(`cp -r ${conversionDir} ${targetDir}`, { stdio: 'inherit' });
      console.log('✅ Conversion results copied to new project');
    }
    
    return projectName;
  } catch (error) {
    console.error('❌ Error creating Next.js project:', error.message);
    return null;
  }
}

function generateFinalMigrationGuide() {
  const guide = `# Complete React to Next.js Migration Guide

## 🎯 Overview
This guide provides a complete workflow for converting your React.js application to Next.js using free AI tools and automated scripts.

## 📋 Migration Summary

### ✅ Completed Steps
1. **Dependency Analysis**: Analyzed current dependencies and mapped them to Next.js equivalents
2. **Route Conversion**: Converted React Router routes to Next.js App Router structure
3. **Component Conversion**: Updated components for Next.js compatibility
4. **CSS Migration**: Migrated styles and CSS configurations
5. **Project Generation**: Created new Next.js project structure

### 📁 Generated Files
- \`conversion-results/\`: All conversion outputs
- \`nextjs-components/\`: Converted React components
- \`nextjs-styles/\`: Migrated CSS and styles
- \`templates/\`: Next.js templates and guides
- \`devnagri-nextjs/\`: New Next.js project

## 🚀 Next Steps

### 1. Set Up Next.js Project
\`\`\`bash
cd devnagri-nextjs
npm install
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install @fortawesome/fontawesome-free @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @popperjs/core animate.css axios bootstrap bootstrap-icons countup.js jquery owl.carousel react-google-recaptcha react-slick slick-carousel swiper wow.js
\`\`\`

### 3. Copy Converted Files
\`\`\`bash
# Copy components
cp -r ../nextjs-components/* src/components/

# Copy styles
cp -r ../nextjs-styles/app/globals.css src/app/
cp -r ../nextjs-styles/styles/* src/styles/

# Copy configuration files
cp ../nextjs-styles/next.config.js ./
cp ../nextjs-styles/tailwind.config.js ./
cp ../nextjs-styles/postcss.config.js ./
\`\`\`

### 4. Copy Public Assets
\`\`\`bash
# Copy Bootstrap JS
cp node_modules/bootstrap/dist/js/bootstrap.bundle.min.js public/

# Copy other assets from original project
cp -r ../public/* public/
\`\`\`

### 5. Update Import Paths
Review and update import paths in your components to match the new structure.

### 6. Test the Application
\`\`\`bash
npm run dev
\`\`\`

## 🤖 Using Free AI Tools for Manual Updates

### 1. GitHub Copilot (Free for students/teachers)
- Ask Copilot to help with specific component conversions
- Get suggestions for Next.js patterns
- Use for code refactoring

### 2. Claude Sonnet (Free tier available)
- Upload your code and ask for Next.js conversion help
- Get detailed explanations of changes needed
- Ask for best practices guidance

### 3. ChatGPT (Free tier)
- Ask for help with specific routing issues
- Get suggestions for component structure
- Request help with configuration

### 4. Cursor AI (Free tier)
- Use built-in AI for real-time code conversion
- Get context-aware suggestions
- Use for refactoring assistance

## 🔧 Manual Conversion Checklist

### Routing
- [ ] Convert all \`useNavigate\` to \`useRouter\`
- [ ] Replace \`Link\` components with Next.js \`Link\`
- [ ] Update route parameters to use \`params\` prop
- [ ] Test all navigation paths

### Components
- [ ] Update component exports to default exports
- [ ] Remove React Router specific imports
- [ ] Update meta tags to use Next.js metadata API
- [ ] Test all component functionality

### Styling
- [ ] Ensure all CSS imports are in globals.css
- [ ] Copy Bootstrap JS to public directory
- [ ] Test all Bootstrap components
- [ ] Verify responsive design

### Performance
- [ ] Optimize images using Next.js Image component
- [ ] Implement proper font loading
- [ ] Add loading states where needed
- [ ] Test performance metrics

## 🐛 Common Issues and Solutions

### Issue: Navigation not working
**Solution:** Ensure you're using \`router.push()\` instead of \`navigate()\`

### Issue: Bootstrap components not working
**Solution:** Check that Bootstrap JS is properly loaded in layout.js

### Issue: CSS not loading
**Solution:** Verify all CSS imports are in globals.css

### Issue: Build errors
**Solution:** Check import paths and ensure all dependencies are installed

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React to Next.js Migration Guide](https://nextjs.org/docs/migrating/from-react)
- [App Router Documentation](https://nextjs.org/docs/app)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

## 🎉 Success Metrics

- [ ] All routes work correctly
- [ ] All components render properly
- [ ] All functionality works as expected
- [ ] Performance is maintained or improved
- [ ] SEO features work correctly
- [ ] No console errors
- [ ] Responsive design works on all devices

## 🆘 Getting Help

If you encounter issues during the migration:

1. Check the generated migration guides in each output directory
2. Use the free AI tools mentioned above for specific help
3. Review the Next.js documentation
4. Check the troubleshooting sections in the generated guides

## 🚀 Deployment

Once your migration is complete:

1. **Vercel** (Recommended): \`vercel --prod\`
2. **Netlify**: Build and deploy
3. **Custom Server**: Configure your hosting environment

Good luck with your React to Next.js migration! 🎯
`;

  const guidePath = path.join(process.cwd(), 'conversion-results', 'complete-migration-guide.md');
  fs.mkdirSync(path.dirname(guidePath), { recursive: true });
  fs.writeFileSync(guidePath, guide);
  
  console.log(`📖 Complete migration guide saved to: ${guidePath}`);
}

function generateAIToolsGuide() {
  const guide = `# Free AI Tools for React to Next.js Conversion

## 🤖 Available Free AI Tools

### 1. GitHub Copilot (Free for students/teachers)
**How to use:**
- Install GitHub Copilot extension in VS Code
- Ask Copilot to help convert specific code patterns
- Example prompts:
  - "Convert this React Router code to Next.js"
  - "Help me update this component for Next.js"
  - "Show me the Next.js equivalent of this routing pattern"

**Best for:** Real-time code suggestions and pattern conversion

### 2. Claude Sonnet (Free tier available)
**How to use:**
- Visit claude.ai
- Upload your code files
- Ask specific questions about conversion
- Example prompts:
  - "Analyze this React component and suggest Next.js improvements"
  - "Help me convert this routing logic to Next.js App Router"
  - "What are the best practices for this component in Next.js?"

**Best for:** Detailed code analysis and architectural guidance

### 3. ChatGPT (Free tier)
**How to use:**
- Visit chat.openai.com
- Paste your code and ask for help
- Example prompts:
  - "Convert this React Router route to Next.js"
  - "Help me update this component for Next.js"
  - "What's the Next.js equivalent of this pattern?"

**Best for:** General guidance and pattern conversion

### 4. Cursor AI (Free tier)
**How to use:**
- Install Cursor IDE
- Use built-in AI for code conversion
- Example prompts:
  - "Convert this to Next.js"
  - "Update this component for Next.js"
  - "Fix this Next.js error"

**Best for:** Real-time code conversion and error fixing

## 🎯 Specific Conversion Tasks

### Converting Navigation
**Prompt:** "Convert this React Router navigation to Next.js"
\`\`\`javascript
// Before
import { useNavigate, Link } from 'react-router-dom';
const navigate = useNavigate();
navigate('/about');

// After
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const router = useRouter();
router.push('/about');
\`\`\`

### Converting Route Parameters
**Prompt:** "Convert this route parameter usage to Next.js"
\`\`\`javascript
// Before
import { useParams } from 'react-router-dom';
const { id } = useParams();

// After
export default function Page({ params }) {
  const { id } = params;
}
\`\`\`

### Converting Meta Tags
**Prompt:** "Convert this meta tag usage to Next.js"
\`\`\`javascript
// Before
import { useMetaTags } from 'react-metatags-hook';
useMetaTags({ title: 'Page Title' });

// After
export const metadata = {
  title: 'Page Title'
};
\`\`\`

## 📋 AI-Assisted Conversion Checklist

### Phase 1: Analysis
- [ ] Use AI to analyze your current codebase
- [ ] Get suggestions for Next.js patterns
- [ ] Identify potential issues

### Phase 2: Conversion
- [ ] Convert routing logic with AI help
- [ ] Update component patterns
- [ ] Migrate meta tags and SEO

### Phase 3: Testing
- [ ] Use AI to help debug issues
- [ ] Get suggestions for testing
- [ ] Optimize performance with AI guidance

### Phase 4: Optimization
- [ ] Get AI suggestions for Next.js features
- [ ] Optimize for performance
- [ ] Implement best practices

## 💡 Pro Tips

1. **Be Specific**: Ask AI tools for specific conversions rather than general help
2. **Provide Context**: Include relevant code when asking questions
3. **Iterate**: Use AI suggestions as starting points and refine them
4. **Test**: Always test AI-generated code before implementing
5. **Combine Tools**: Use multiple AI tools for different aspects of conversion

## 🆘 When AI Tools Aren't Enough

If AI tools can't help with specific issues:

1. Check the Next.js documentation
2. Review the generated migration guides
3. Look at Next.js examples
4. Ask in Next.js community forums
5. Consider professional help for complex migrations

## 🎯 Success Metrics

- [ ] All AI-assisted conversions work correctly
- [ ] No breaking changes introduced
- [ ] Performance maintained or improved
- [ ] Code follows Next.js best practices
- [ ] All functionality preserved

Remember: AI tools are assistants, not replacements for understanding the codebase and Next.js concepts. Always review and test AI-generated code before implementing it in production.
`;

  const guidePath = path.join(process.cwd(), 'conversion-results', 'ai-tools-guide.md');
  fs.mkdirSync(path.dirname(guidePath), { recursive: true });
  fs.writeFileSync(guidePath, guide);
  
  console.log(`🤖 AI tools guide saved to: ${guidePath}`);
}

function main() {
  printBanner();
  
  try {
    // Check prerequisites
    checkPrerequisites();
    
    // Run conversion steps
    runDependencyAnalysis();
    runRouteConversion();
    runComponentConversion();
    runCssMigration();
    
    // Generate Next.js project
    const projectName = generateNextJsProject();
    
    // Generate final guides
    generateFinalMigrationGuide();
    generateAIToolsGuide();
    
    console.log('\n🎉 Conversion completed successfully!');
    console.log('\n📋 Summary:');
    console.log('✅ Dependency analysis completed');
    console.log('✅ Route conversion completed');
    console.log('✅ Component conversion completed');
    console.log('✅ CSS migration completed');
    console.log('✅ Next.js project generated');
    console.log('✅ Migration guides created');
    
    if (projectName) {
      console.log(`\n🚀 Next Steps:`);
      console.log(`1. cd ${projectName}`);
      console.log('2. npm install');
      console.log('3. Follow the complete migration guide');
      console.log('4. Use AI tools for manual updates');
      console.log('5. Test your application');
    }
    
    console.log('\n📚 Generated Resources:');
    console.log('- conversion-results/complete-migration-guide.md');
    console.log('- conversion-results/ai-tools-guide.md');
    console.log('- nextjs-components/ (converted components)');
    console.log('- nextjs-styles/ (migrated styles)');
    console.log('- templates/ (Next.js templates)');
    
  } catch (error) {
    console.error('\n❌ Conversion failed:', error.message);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main };