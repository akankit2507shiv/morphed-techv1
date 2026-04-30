# 🏗️ Multilingual System Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    MORPHED TECH PLATFORM                         │
│                  Data Engineering Learning                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   MULTILINGUAL SYSTEM                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Language   │  │    Audio     │  │      UI      │         │
│  │   Manager    │  │    Player    │  │  Components  │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      CONTENT LAYER                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   English    │  │   Hinglish   │  │   Marathi    │         │
│  │   Content    │  │   Content    │  │   Content    │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    AATMA FRAMEWORK                               │
│  Overview │ Comic │ Deep Dive │ Types │ Components │ Coding    │
│  Q&A │ Quiz │ Interview │ Mistakes │ Practical │ Memory │ Rev  │
└─────────────────────────────────────────────────────────────────┘
```

## Component Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    language-config.js                            │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  LANGUAGE_CONFIG                                        │    │
│  │  - supported: ['english', 'hinglish', 'marathi']       │    │
│  │  - default: 'hinglish'                                 │    │
│  │  - labels: { english: 'English', ... }                 │    │
│  │  - icons: { english: '🇬🇧', ... }                      │    │
│  └────────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  LanguageManager                                        │    │
│  │  + loadLanguagePreference()                            │    │
│  │  + setLanguage(lang)                                   │    │
│  │  + getCurrentLanguage()                                │    │
│  │  + notifyLanguageChange()                              │    │
│  │  + getContent(contentObj)                              │    │
│  └────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     audio-player.js                              │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  AudioPlayer                                            │    │
│  │  + play(text, language, audioUrl)                      │    │
│  │  + playFromUrl(url)                                    │    │
│  │  + playTTS(text, language)                             │    │
│  │  + stop()                                              │    │
│  │  + pause()                                             │    │
│  │  + resume()                                            │    │
│  │  + getLanguageCode(language)                           │    │
│  │  + selectVoice(voices, language)                       │    │
│  │  - currentAudio: Audio                                 │    │
│  │  - cache: Map<url, Audio>                              │    │
│  └────────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Web Speech API Integration                             │    │
│  │  - SpeechSynthesisUtterance                            │    │
│  │  - Voice selection (en-US, hi-IN, mr-IN)              │    │
│  │  - Rate, pitch, volume control                         │    │
│  └────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   multilingual-ui.js                             │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  UI Components                                          │    │
│  │  + createLanguageToggle()                              │    │
│  │  + createAudioControls(sectionId, contentObj)          │    │
│  │  + updateLanguageToggleUI()                            │    │
│  │  + insertLanguageToggle(selector)                      │    │
│  │  + getContentForLanguage(contentObj, language)         │    │
│  │  + showToast(message, type)                            │    │
│  └────────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Event Handlers                                         │    │
│  │  - languageChanged → updateContentForLanguage()        │    │
│  │  - audioPlaybackStart → visual feedback                │    │
│  │  - audioPlaybackEnd → reset UI                         │    │
│  └────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                multilingual-integration.js                       │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Auto-Integration                                       │    │
│  │  + init()                                              │    │
│  │  + addAudioControlsToSections()                        │    │
│  │  + updatePageContent(language)                         │    │
│  │  + updateQASection(language)                           │    │
│  └────────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Manual Control                                         │    │
│  │  + enableMultilingualFeatures(options)                 │    │
│  │  + isMultilingualSystemReady()                         │    │
│  └────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow

```
┌─────────────┐
│    User     │
│   Action    │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────────┐
│  Language Toggle Click                   │
│  or Audio Button Click                   │
└──────┬──────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────┐
│  Language Manager                        │
│  - Update current language               │
│  - Save to localStorage                  │
│  - Dispatch 'languageChanged' event      │
└──────┬──────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────┐
│  Event Listeners                         │
│  - Catch 'languageChanged' event         │
│  - Trigger content update                │
└──────┬──────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────┐
│  Content Update                          │
│  - Get content for selected language     │
│  - Update DOM elements                   │
│  - Update audio controls                 │
└──────┬──────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────┐
│  UI Update                               │
│  - Highlight active language button      │
│  - Show toast notification               │
│  - Smooth transition                     │
└──────┬──────────────────────────────────┘
       │
       ▼
┌─────────────┐
│   Updated   │
│     UI      │
└─────────────┘
```

## Audio Flow

```
┌─────────────┐
│    User     │
│ Clicks 🔊   │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────────┐
│  Get Content                             │
│  - Extract text for selected language    │
│  - Check for audio URL                   │
└──────┬──────────────────────────────────┘
       │
       ├─────────────────┬─────────────────┐
       │                 │                 │
       ▼                 ▼                 ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Pre-recorded │  │     TTS      │  │    Cache     │
│    Audio     │  │  Generation  │  │    Check     │
└──────┬───────┘  └──────┬───────┘  └──────┬───────┘
       │                 │                 │
       └─────────────────┴─────────────────┘
                         │
                         ▼
                ┌─────────────────┐
                │  Audio Player   │
                │  - Play audio   │
                │  - Show loading │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │   Playback      │
                │  - Visual cues  │
                │  - Stop button  │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │   Complete      │
                │  - Reset UI     │
                │  - Cache audio  │
                └─────────────────┘
```

## Content Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                        Topic Object                              │
│  {                                                               │
│    title: "SQL Joins",                                          │
│    icon: "🔗",                                                  │
│    difficulty: "Beginner",                                      │
│    duration: "15 min",                                          │
│                                                                  │
│    overview: {                                                  │
│      english: { simple: "...", explanation: "...", ... },      │
│      hinglish: { simple: "...", explanation: "...", ... },     │
│      marathi: { simple: "...", explanation: "...", ... }       │
│    },                                                           │
│                                                                  │
│    comic: {                                                     │
│      english: "Story...",                                       │
│      hinglish: "Story...",                                      │
│      marathi: "Story..."                                        │
│    },                                                           │
│                                                                  │
│    deepDive: { ... },                                          │
│    memory: { ... },                                            │
│    interview: { ... },                                         │
│    revision: { ... },                                          │
│                                                                  │
│    audio: {                                                     │
│      overview: { english: "url", hinglish: null, ... },       │
│      comic: { english: "url", hinglish: null, ... }           │
│    }                                                            │
│  }                                                              │
└─────────────────────────────────────────────────────────────────┘
```

## Storage Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      LocalStorage                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  preferredLanguage: "hinglish"                          │    │
│  │  - Persists user's language choice                      │    │
│  │  - Loaded on page init                                  │    │
│  │  - Updated on language change                           │    │
│  └────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      Memory Cache                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Audio Cache (Map)                                      │    │
│  │  - Key: audio URL                                       │    │
│  │  - Value: Audio instance                                │    │
│  │  - Prevents re-downloading                              │    │
│  └────────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Voice Cache                                            │    │
│  │  - Preloaded on page load                               │    │
│  │  - Available voices for TTS                             │    │
│  └────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

## Integration Points

```
┌─────────────────────────────────────────────────────────────────┐
│                    Existing Platform                             │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  sql-topic.html                                         │    │
│  │  python-topic.html                                      │    │
│  │  pyspark-topic.html                                     │    │
│  │  databricks-topic.html                                  │    │
│  │  git-topic.html                                         │    │
│  │  aws-topic.html                                         │    │
│  │  project-detail.html                                    │    │
│  └────────────────────────────────────────────────────────┘    │
│                           │                                      │
│                           ▼                                      │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Add 4 Script Tags                                      │    │
│  │  <script src="language-config.js"></script>            │    │
│  │  <script src="audio-player.js"></script>               │    │
│  │  <script src="multilingual-ui.js"></script>            │    │
│  │  <script src="multilingual-integration.js"></script>   │    │
│  └────────────────────────────────────────────────────────┘    │
│                           │                                      │
│                           ▼                                      │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Auto-Initialization                                    │    │
│  │  - Language toggle added                                │    │
│  │  - Audio controls added                                 │    │
│  │  - Event listeners attached                             │    │
│  │  - Content updated                                      │    │
│  └────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

## Event System

```
┌─────────────────────────────────────────────────────────────────┐
│                      Custom Events                               │
│                                                                  │
│  languageChanged                                                │
│  ├─ detail: { language: 'hinglish' }                           │
│  ├─ Triggered by: LanguageManager.setLanguage()                │
│  └─ Listeners: UI update functions                             │
│                                                                  │
│  updatePageContent                                              │
│  ├─ detail: { language: 'hinglish' }                           │
│  ├─ Triggered by: languageChanged handler                      │
│  └─ Listeners: Page-specific content updaters                  │
│                                                                  │
│  audioPlaybackStart                                             │
│  ├─ detail: none                                                │
│  ├─ Triggered by: AudioPlayer.play()                           │
│  └─ Listeners: UI visual feedback                              │
│                                                                  │
│  audioPlaybackEnd                                               │
│  ├─ detail: none                                                │
│  ├─ Triggered by: Audio completion                             │
│  └─ Listeners: UI reset                                        │
└─────────────────────────────────────────────────────────────────┘
```

## Performance Considerations

```
┌─────────────────────────────────────────────────────────────────┐
│                    Optimization Strategy                         │
│                                                                  │
│  Lazy Loading                                                   │
│  ├─ Content loaded only when language selected                 │
│  ├─ Audio generated on-demand                                  │
│  └─ Voices preloaded in background                             │
│                                                                  │
│  Caching                                                        │
│  ├─ Language preference in localStorage                        │
│  ├─ Audio instances in memory                                  │
│  └─ Voice list cached                                          │
│                                                                  │
│  Event Delegation                                               │
│  ├─ Single listener for multiple buttons                       │
│  ├─ Efficient DOM manipulation                                 │
│  └─ Minimal re-renders                                         │
│                                                                  │
│  Bundle Size                                                    │
│  ├─ No external dependencies                                   │
│  ├─ Modular architecture                                       │
│  └─ ~15KB total (uncompressed)                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Scalability

```
┌─────────────────────────────────────────────────────────────────┐
│                    Future Extensions                             │
│                                                                  │
│  Add New Language                                               │
│  ├─ Update LANGUAGE_CONFIG.supported                           │
│  ├─ Add language label and icon                                │
│  ├─ Add language code mapping                                  │
│  └─ Update content structure                                   │
│                                                                  │
│  Add New Section                                                │
│  ├─ Add to sectionsWithAudio config                            │
│  ├─ Update content structure                                   │
│  └─ Auto-integration handles rest                              │
│                                                                  │
│  Custom Voice                                                   │
│  ├─ Extend AudioPlayer.selectVoice()                           │
│  ├─ Add voice preference storage                               │
│  └─ UI for voice selection                                     │
│                                                                  │
│  Pre-recorded Audio                                             │
│  ├─ Add audio URLs to content                                  │
│  ├─ Upload to CDN                                              │
│  └─ System auto-detects and uses                               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Summary

**Architecture Type**: Modular, Event-Driven, Component-Based

**Key Principles**:
- Separation of Concerns
- Single Responsibility
- Open/Closed (extensible)
- Dependency Injection
- Event-Driven Communication

**Performance**: Optimized for speed and minimal memory footprint

**Scalability**: Easy to add languages, sections, and features

**Maintainability**: Well-documented, modular, testable

**Compatibility**: Works with existing code, no breaking changes
