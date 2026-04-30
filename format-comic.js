// Script to format comic panels in AWS JSON files for better readability

const fs = require('fs');
const path = require('path');

// Directory containing AWS JSON files
const awsContentDir = path.join(__dirname, 'content', 'aws');

// Function to format comic text with proper line breaks and spacing
function formatComicText(text) {
  // Add line breaks after sentences
  let formatted = text
    .replace(/\. /g, '.\\n')  // Add newline after periods
    .replace(/! /g, '!\\n')   // Add newline after exclamations
    .replace(/\? /g, '?\\n')  // Add newline after questions
    .trim();
  
  return formatted;
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
      console.log(`✅ Found ${data.content.comicStory.panels.length} comic panels`);
      
      // Format each panel's text
      data.content.comicStory.panels = data.content.comicStory.panels.map((panel, index) => {
        const originalText = panel.text;
        const formattedText = formatComicText(originalText);
        
        console.log(`\n📖 Panel ${index + 1}:`);
        console.log(`   Original length: ${originalText.length} chars`);
        console.log(`   Formatted length: ${formattedText.length} chars`);
        
        return {
          ...panel,
          text: formattedText
        };
      });
      
      // Write back to file with pretty formatting
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`\n💾 Saved formatted version to ${path.basename(filePath)}`);
      
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
  console.log('🚀 Starting Comic Formatter for AWS JSON Files\n');
  console.log('=' .repeat(60));
  
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
  
  console.log(`📁 Found ${files.length} JSON file(s)\n`);
  
  // Process each file
  let successCount = 0;
  files.forEach(file => {
    if (processJsonFile(file)) {
      successCount++;
    }
  });
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log(`\n✨ Formatting Complete!`);
  console.log(`   Processed: ${files.length} file(s)`);
  console.log(`   Formatted: ${successCount} file(s)`);
  console.log(`\n💡 Tip: Restart your server to see the changes\n`);
}

// Run the script
main();
