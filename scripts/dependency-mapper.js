#!/usr/bin/env node

/**
 * Dependency Mapper for React to Next.js Conversion
 * Maps React dependencies to Next.js equivalents and generates installation commands
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dependency mapping from React to Next.js
const dependencyMap = {
  // Core dependencies that need replacement
  'react-router-dom': {
    replacement: 'next',
    note: 'Next.js has built-in routing, remove react-router-dom',
    action: 'remove'
  },
  'react-metatags-hook': {
    replacement: 'next/head',
    note: 'Use Next.js Head component or Metadata API',
    action: 'replace'
  },
  
  // Dependencies that work with Next.js
  'react': { action: 'keep', note: 'Keep as is' },
  'react-dom': { action: 'keep', note: 'Keep as is' },
  'axios': { action: 'keep', note: 'Keep as is' },
  'bootstrap': { action: 'keep', note: 'Keep as is' },
  'bootstrap-icons': { action: 'keep', note: 'Keep as is' },
  '@fortawesome/fontawesome-free': { action: 'keep', note: 'Keep as is' },
  '@fortawesome/free-brands-svg-icons': { action: 'keep', note: 'Keep as is' },
  '@fortawesome/free-solid-svg-icons': { action: 'keep', note: 'Keep as is' },
  '@fortawesome/react-fontawesome': { action: 'keep', note: 'Keep as is' },
  '@popperjs/core': { action: 'keep', note: 'Keep as is' },
  'animate.css': { action: 'keep', note: 'Keep as is' },
  'countup.js': { action: 'keep', note: 'Keep as is' },
  'jquery': { action: 'keep', note: 'Keep as is' },
  'owl.carousel': { action: 'keep', note: 'Keep as is' },
  'react-google-recaptcha': { action: 'keep', note: 'Keep as is' },
  'react-slick': { action: 'keep', note: 'Keep as is' },
  'slick-carousel': { action: 'keep', note: 'Keep as is' },
  'swiper': { action: 'keep', note: 'Keep as is' },
  'wow.js': { action: 'keep', note: 'Keep as is' }
};

// Additional Next.js specific dependencies
const nextjsDependencies = [
  'next',
  '@next/font',
  'next-seo',
  'next-sitemap'
];

function analyzePackageJson(packageJsonPath) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    console.log('🔍 Analyzing dependencies...\n');
    
    const analysis = {
      toRemove: [],
      toKeep: [],
      toReplace: [],
      toAdd: []
    };
    
    Object.entries(dependencies).forEach(([dep, version]) => {
      const mapping = dependencyMap[dep];
      if (mapping) {
        switch (mapping.action) {
          case 'remove':
            analysis.toRemove.push({ name: dep, version, note: mapping.note });
            break;
          case 'replace':
            analysis.toReplace.push({ 
              name: dep, 
              version, 
              replacement: mapping.replacement, 
              note: mapping.note 
            });
            break;
          case 'keep':
            analysis.toKeep.push({ name: dep, version, note: mapping.note });
            break;
        }
      } else {
        analysis.toKeep.push({ name: dep, version, note: 'Unknown dependency - review manually' });
      }
    });
    
    return analysis;
  } catch (error) {
    console.error('❌ Error reading package.json:', error.message);
    return null;
  }
}

function generateInstallCommands(analysis) {
  console.log('📦 Dependencies to Remove:');
  if (analysis.toRemove.length > 0) {
    analysis.toRemove.forEach(dep => {
      console.log(`  npm uninstall ${dep.name}  # ${dep.note}`);
    });
  } else {
    console.log('  None');
  }
  
  console.log('\n🔄 Dependencies to Replace:');
  if (analysis.toReplace.length > 0) {
    analysis.toReplace.forEach(dep => {
      console.log(`  npm uninstall ${dep.name}`);
      console.log(`  npm install ${dep.replacement}  # ${dep.note}`);
    });
  } else {
    console.log('  None');
  }
  
  console.log('\n✅ Dependencies to Keep:');
  analysis.toKeep.forEach(dep => {
    console.log(`  ${dep.name}@${dep.version}  # ${dep.note}`);
  });
  
  console.log('\n➕ Additional Next.js Dependencies:');
  nextjsDependencies.forEach(dep => {
    console.log(`  npm install ${dep}`);
  });
  
  console.log('\n📋 Complete Installation Command:');
  const keepDeps = analysis.toKeep.map(dep => `${dep.name}@${dep.version}`).join(' ');
  const addDeps = nextjsDependencies.join(' ');
  console.log(`npm install ${keepDeps} ${addDeps}`);
}

function generateNextJsPackageJson(analysis) {
  const template = {
    name: "devnagri-nextjs",
    version: "0.1.0",
    private: true,
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
      lint: "next lint"
    },
    dependencies: {},
    devDependencies: {}
  };
  
  // Add kept dependencies
  analysis.toKeep.forEach(dep => {
    template.dependencies[dep.name] = dep.version;
  });
  
  // Add Next.js dependencies
  nextjsDependencies.forEach(dep => {
    template.dependencies[dep] = "latest";
  });
  
  return template;
}

function main() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    console.error('❌ package.json not found in current directory');
    process.exit(1);
  }
  
  const analysis = analyzePackageJson(packageJsonPath);
  
  if (!analysis) {
    process.exit(1);
  }
  
  generateInstallCommands(analysis);
  
  console.log('\n📄 Next.js package.json template:');
  const nextPackageJson = generateNextJsPackageJson(analysis);
  console.log(JSON.stringify(nextPackageJson, null, 2));
  
  console.log('\n💡 Next Steps:');
  console.log('1. Create a new Next.js project: npx create-next-app@latest devnagri-nextjs');
  console.log('2. Copy the dependencies from the template above');
  console.log('3. Run the installation commands');
  console.log('4. Start converting your components and pages');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { analyzePackageJson, generateInstallCommands, generateNextJsPackageJson };