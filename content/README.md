# Content Structure

This folder contains all learning content for each technology.

## Folder Structure

```
content/
├── sql/              # SQL Mastery content
├── python/           # Python for Data Engineering content
├── pyspark/          # PySpark content
├── aws/              # AWS Data Engineering content
├── databricks/       # Databricks content
├── airflow/          # Apache Airflow content
├── docker/           # Docker content
└── git/              # Git & GitHub content
```

## Content File Format

Each topic has its own JSON file with the following structure:

```json
{
  "id": "topic-id",
  "title": "Topic Title",
  "icon": "🔗",
  "difficulty": "Beginner|Intermediate|Advanced",
  "duration": "45 min",
  "description": "Short description",
  "content": {
    "comicStory": { ... },
    "deepDive": { ... },
    "interactiveQA": [ ... ],
    "codingChallenge": { ... },
    "quiz": [ ... ]
  }
}
```

## Adding New Content

1. Create a new JSON file in the appropriate technology folder
2. Follow the content schema (see content-schema.json)
3. Test the content in topic-viewer.html
4. Update learning-data.json if adding new topics
