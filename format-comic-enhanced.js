// Enhanced Comic Formatter - Makes AWS JSON comic panels more readable

const fs = require('fs');
const path = require('path');

// Directory containing AWS JSON files
const awsContentDir = path.join(__dirname, 'content', 'aws');

// Function to enhance comic text with better formatting
function enhanceComicText(text, panelNumber) {
  let enhanced = text;
  
  // Add visual separators for different sections
  if (text.includes('Problem:')) {
    enhanced = text.replace('Problem:', '\n\n😰 PROBLEM:\n');
  }
  
  if (text.includes('TWIST:')) {
    enhanced = text.replace('TWIST:', '\n\n😱 TWIST:\n');
  }
  
  if (text.includes('Discover')) {
    enhanced = text.replace('Discover', '\n\n💡 DISCOVER:\n');
  }
  
  if (text.includes('Learn about')) {
    enhanced = text.replace('Learn about', '\n\n✅ SOLUTION:\n');
  }
  
  // Add line breaks for better readability
  enhanced = enhanced
    .replace(/\. ([A-Z])/g, '.\\n\\n$1')  // Add double newline after sentences starting new thoughts
    .replace(/! ([A-Z])/g, '!\\n\\n$1')   // Add double newline after exclamations
    .replace(/\? ([A-Z])/g, '?\\n\\n$1')  // Add double newline after questions
    .trim();
  
  return enhanced;
}

// Function to add visual panel headers
function addPanelHeader(panel, index) {
  const headers = [
    '🎬 SCENE 1',
    '⚠️ THE PROBLEM',
    '🤔 THE QUESTION',
    '💡 THE DISCOVERY',
    '😱 THE TWIST',
    '✨ THE SOLUTION'
  ];
  
  return {
    ...panel,
    header: headers[index] || `📖 PANEL ${index + 1}`,
    text: enhanceComicText(panel.text, index + 1)
  };
}

// Function to process a single JSON file
function processJsonFile(filePath) {
  try {
    console.log(`\n📄 Processing: ${path.basename(filePath)}`);
    
    // Read the JSON file
    const rawData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(rawData);
    
    // Check if comic story exists
    if (data.content && data.content.comicStory && data.content.comicStory.panels) {
      const panelCount = data.content.comicStory.panels.length;
      console.log(`✅ Found ${panelCount} comic panels`);
      
      // Enhance each panel
      data.content.comicStory.panels = data.content.comicStory.panels.map((panel, index) => {
        const enhanced = addPanelHeader(panel, index);
        
        console.log(`\n${enhanced.header}`);
        console.log(`   Image: ${panel.image}`);
        console.log(`   Text length: ${enhanced.text.length} chars`);
        
        return enhanced;
      });
      
      // Add metadata
      data.content.comicStory.formatted = true;
      data.content.comicStory.formattedDate = new Date().toISOString();
      
      // Write back to file with pretty formatting
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`\n💾 Saved enhanced version to ${path.basename(filePath)}`);
      
      return true;
    } else {
      console.log('⚠️  No comic story found in this file');
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('\n' + '='.repeat(70));
  console.log('🎨 ENHANCED COMIC FORMATTER FOR AWS JSON FILES');
  console.log('='.repeat(70) + '\n');
  
  // Check if directory exists
  if (!fs.existsSync(awsContentDir)) {
    console.error(`❌ Directory not found: ${awsContentDir}`);
    process.exit(1);
  }
  
  // Get all JSON files
  const files = fs.readdirSync(awsContentDir)
    .filter(file => file.endsWith('.json'))
    .map(file => path.join(awsContentDir, file));
  
  if (files.length === 0) {
    console.log('⚠️  No JSON files found in the directory');
    process.exit(0);
  }
  
  console.log(`📁 Found ${files.length} JSON file(s) to process\n`);
  
  // Process each file
  let successCount = 0;
  files.forEach(file => {
    if (processJsonFile(file)) {
      successCount++;
    }
  });
  
  // Summary
  console.log('\n' + '='.repeat(70));
  console.log(`\n✨ FORMATTING COMPLETE!`);
  console.log(`\n   📊 Statistics:`);
  console.log(`      • Total files: ${files.length}`);
  console.log(`      • Successfully formatted: ${successCount}`);
  console.log(`      • Failed: ${files.length - successCount}`);
  console.log(`\n   🔄 Next Steps:`);
  console.log(`      1. Restart your Node.js server`);
  console.log(`      2. Refresh your browser`);
  console.log(`      3. Navigate to the AWS topic to see enhanced comics`);
  console.log(`\n` + '='.repeat(70) + '\n');
}

// Run the script
main();
