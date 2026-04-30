// Migration script to convert sql-content.js to individual JSON files
const fs = require('fs');
const path = require('path');

// Load sql-content.js
const sqlContentPath = path.join(__dirname, 'sql-content.js');
const sqlContentRaw = fs.readFileSync(sqlContentPath, 'utf8');

// Extract the sqlContent object
const sqlContent = eval(sqlContentRaw.replace('const sqlContent = ', '').replace(/;[\s\S]*$/, ''));

// Create SQL content directory if it doesn't exist
const sqlDir = path.join(__dirname, 'content', 'sql');
if (!fs.existsSync(sqlDir)) {
  fs.mkdirSync(sqlDir, { recursive: true });
}

// Convert each topic to proper JSON format
Object.entries(sqlContent).forEach(([topicId, topicData]) => {
  // Map old format to new schema format
  const jsonContent = {
    id: topicId,
    title: topicData.title || topicData.topic || topicId,
    icon: getIcon(topicId),
    difficulty: getDifficulty(topicId),
    duration: getDuration(topicId),
    description: getDescription(topicId),
    prerequisites: [],
    nextTopics: [],
    content: {
      comicStory: {
        title: `${topicData.title || topicId} - Story`,
        panels: parseComicPanels(topicData.comic || ''),
        twist: extractTwist(topicData.comic || ''),
        lesson: extractLesson(topicData.comic || '')
      },
      deepDive: {
        whatItIs: extractWhatItIs(topicData.deepDive || ''),
        whyItMatters: extractWhyItMatters(topicData.deepDive || ''),
        whereUsed: extractWhereUsed(topicData.deepDive || ''),
        visualExamples: [],
        keyPoints: extractKeyPoints(topicData.deepDive || '')
      },
      interactiveQA: (topicData.qa || []).map(q => ({
        question: q.q,
        answer: q.answer,
        explanation: q.explanation || '',
        memoryTrick: q.memory || ''
      })),
      codingChallenge: {
        title: topicData.coding?.title || 'Coding Challenge',
        scenario: topicData.coding?.scenario || '',
        dataset: topicData.coding?.tables ? { tables: convertTables(topicData.coding.tables) } : {},
        problem: topicData.coding?.question || topicData.coding?.problem || '',
        expectedOutput: formatExpectedOutput(topicData.coding?.expectedOutput),
        hints: topicData.coding?.thinkingApproach || [],
        solution: topicData.coding?.solution || '',
        explanation: topicData.coding?.explanation || ''
      },
      quiz: (topicData.quiz || []).map((q, idx) => ({
        question: q.q,
        options: q.options,
        correctAnswer: q.answer,
        explanation: q.explanation || '',
        difficulty: idx < 3 ? 'easy' : idx < 6 ? 'medium' : 'hard'
      }))
    }
  };

  // Write to file
  const filename = path.join(sqlDir, `${topicId}.json`);
  fs.writeFileSync(filename, JSON.stringify(jsonContent, null, 2));
  console.log(`✅ Created: ${topicId}.json`);
});

console.log('\n🎉 Migration complete! All SQL topics converted to JSON files.');

// Helper functions
function getIcon(topicId) {
  const icons = {
    'joins': '🔗',
    'window-functions': '🪟',
    'cte': '📝',
    'subqueries': '📦',
    'aggregations': '➕',
    'ranking-functions': '🏆',
    'data-cleaning': '🧹',
    'deduplication': '🎭',
    'scd': '🔄',
    'query-optimization': '⚡',
    'incremental-load': '📔',
    'data-validation': '✅',
    'handling-nulls': '🍱',
    'set-operations': '🎨',
    'case-statements': '📊'
  };
  return icons[topicId] || '🗄️';
}

function getDifficulty(topicId) {
  const advanced = ['scd', 'query-optimization', 'incremental-load'];
  const beginner = ['joins', 'aggregations', 'case-statements'];
  if (advanced.includes(topicId)) return 'Advanced';
  if (beginner.includes(topicId)) return 'Beginner';
  return 'Intermediate';
}

function getDuration(topicId) {
  const durations = {
    'joins': '45 min',
    'window-functions': '60 min',
    'cte': '50 min',
    'subqueries': '50 min',
    'aggregations': '45 min',
    'ranking-functions': '50 min',
    'data-cleaning': '55 min',
    'deduplication': '45 min',
    'scd': '70 min',
    'query-optimization': '65 min',
    'incremental-load': '60 min',
    'data-validation': '50 min',
    'handling-nulls': '45 min',
    'set-operations': '50 min',
    'case-statements': '40 min'
  };
  return durations[topicId] || '50 min';
}

function getDescription(topicId) {
  const descriptions = {
    'joins': 'Combine data from multiple tables',
    'window-functions': 'Calculations across rows',
    'cte': 'Common Table Expressions',
    'subqueries': 'Query inside another query',
    'aggregations': 'SUM, COUNT, AVG summarize data',
    'ranking-functions': 'ROW_NUMBER, RANK, DENSE_RANK',
    'data-cleaning': 'Fix nulls, duplicates, formatting',
    'deduplication': 'Remove duplicate records',
    'scd': 'Track historical data changes',
    'query-optimization': 'Make queries lightning fast',
    'incremental-load': 'Load only new/changed data',
    'data-validation': 'Ensure data quality with constraints',
    'handling-nulls': 'Master NULL handling techniques',
    'set-operations': 'UNION, INTERSECT, EXCEPT',
    'case-statements': 'Conditional logic in SQL'
  };
  return descriptions[topicId] || '';
}

function parseComicPanels(comic) {
  const lines = comic.split('\n').filter(l => l.trim());
  const panels = [];
  let currentPanel = { image: '📖', text: '' };
  
  lines.forEach(line => {
    if (line.includes('→') || line.includes('✨') || line.includes('💡')) {
      if (currentPanel.text) panels.push({...currentPanel});
      currentPanel = { image: line.split(' ')[0] || '📖', text: line };
    } else {
      currentPanel.text += (currentPanel.text ? ' ' : '') + line;
    }
  });
  
  if (currentPanel.text) panels.push(currentPanel);
  
  // Ensure at least 6 panels
  while (panels.length < 6) {
    panels.push({ image: '📖', text: 'Learn more about this concept...' });
  }
  
  return panels.slice(0, 6);
}

function extractTwist(comic) {
  const lines = comic.split('\n');
  const twistLine = lines.find(l => l.includes('✨') || l.includes('TWIST'));
  return twistLine || 'Understanding this concept changes everything!';
}

function extractLesson(comic) {
  const lines = comic.split('\n');
  const lessonLine = lines.find(l => l.includes('💡') || l.includes('Aha'));
  return lessonLine || 'Master this concept for better data engineering!';
}

function extractWhatItIs(deepDive) {
  const lines = deepDive.split('\n');
  const whatLine = lines.find(l => l.includes('What is') || l.includes('👉'));
  return whatLine || 'A fundamental SQL concept for data engineering.';
}

function extractWhyItMatters(deepDive) {
  const lines = deepDive.split('\n');
  const whyLine = lines.find(l => l.includes('Why it matters') || l.includes('real'));
  return whyLine || 'Essential for working with real-world data systems.';
}

function extractWhereUsed(deepDive) {
  const lines = deepDive.split('\n').filter(l => l.includes('-') || l.includes('•'));
  return lines.length > 0 ? lines : ['Data warehousing', 'ETL pipelines', 'Analytics'];
}

function extractKeyPoints(deepDive) {
  const lines = deepDive.split('\n').filter(l => l.includes('👉') || l.includes('✔'));
  return lines.length > 0 ? lines : ['Important concept', 'Used in production', 'Interview topic'];
}

function convertTables(tables) {
  return Object.entries(tables).map(([name, data]) => ({
    name: name,
    columns: data.columns || [],
    sampleData: data.data || []
  }));
}

function formatExpectedOutput(output) {
  if (Array.isArray(output)) {
    return output.map(row => Array.isArray(row) ? row.join(' | ') : row).join('\n');
  }
  return output || '';
}
