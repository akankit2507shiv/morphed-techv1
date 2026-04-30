# Comic Formatter Scripts

## Overview
These scripts format comic panels in AWS JSON files to make them more readable and visually appealing when displayed in the application.

## Available Scripts

### 1. Basic Comic Formatter (`format-comic.js`)
Adds basic line breaks and formatting to comic text.

**Usage:**
```bash
node format-comic.js
```

**Features:**
- Adds line breaks after sentences
- Preserves original structure
- Simple and fast

---

### 2. Enhanced Comic Formatter (`format-comic-enhanced.js`) ⭐ RECOMMENDED
Adds visual headers, emojis, and enhanced formatting to comic panels.

**Usage:**
```bash
node format-comic-enhanced.js
```

**Features:**
- ✅ Adds visual panel headers (🎬 SCENE 1, ⚠️ THE PROBLEM, etc.)
- ✅ Enhances text with better line breaks
- ✅ Adds section separators (PROBLEM, TWIST, SOLUTION)
- ✅ Includes metadata (formatted date)
- ✅ Better visual hierarchy

---

## How It Works

### Before Formatting:
```json
{
  "image": "😰",
  "text": "Problem: Where to store massive amounts of data safely? Local storage keeps running out!"
}
```

### After Enhanced Formatting:
```json
{
  "image": "😰",
  "header": "⚠️ THE PROBLEM",
  "text": "\n\n😰 PROBLEM:\nWhere to store massive amounts of data safely?\n\nLocal storage keeps running out!"
}
```

---

## Directory Structure
```
morphed-tech/
├── format-comic.js              # Basic formatter
├── format-comic-enhanced.js     # Enhanced formatter (recommended)
├── content/
│   └── aws/
│       ├── s3.json             # AWS topic files
│       └── ...
```

---

## After Running the Script

### Step 1: Run the formatter
```bash
node format-comic-enhanced.js
```

### Step 2: Restart your server
```bash
# Stop the current server (Ctrl+C)
node server.js
```

### Step 3: Refresh your browser
Navigate to: `http://localhost:5000/aws-syllabus.html`

---

## Output Example

```
======================================================================
🎨 ENHANCED COMIC FORMATTER FOR AWS JSON FILES
======================================================================

📁 Found 1 JSON file(s) to process

📄 Processing: s3.json
✅ Found 6 comic panels

🎬 SCENE 1
   Image: 🗄️
   Text length: 108 chars

⚠️ THE PROBLEM
   Image: 😰
   Text length: 93 chars

💾 Saved enhanced version to s3.json

======================================================================
✨ FORMATTING COMPLETE!

   📊 Statistics:
      • Total files: 1
      • Successfully formatted: 1
      • Failed: 0
======================================================================
```

---

## Adding New AWS Topics

When you add new AWS JSON files with comic stories:

1. Place the JSON file in `content/aws/` directory
2. Ensure it has the following structure:
```json
{
  "content": {
    "comicStory": {
      "panels": [
        {
          "image": "🎬",
          "text": "Your comic text here"
        }
      ]
    }
  }
}
```
3. Run the formatter: `node format-comic-enhanced.js`
4. Restart the server

---

## Troubleshooting

### Script not found
```bash
# Make sure you're in the correct directory
cd /Users/ankit25/Desktop/project/DataEngineer_web/morphed-tech
```

### No files processed
- Check if JSON files exist in `content/aws/` directory
- Verify JSON files have `comicStory.panels` structure

### Changes not visible
- Restart the Node.js server
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

---

## Tips

💡 **Best Practice**: Always run the enhanced formatter for better visual presentation

💡 **Backup**: The script overwrites files, so keep backups if needed

💡 **Testing**: Test with one file first before processing multiple files

---

## Support

For issues or questions, check:
- Server logs: `node server.js`
- Browser console: F12 → Console tab
- JSON validation: Use online JSON validators

---

**Last Updated**: 2024
**Version**: 1.0
