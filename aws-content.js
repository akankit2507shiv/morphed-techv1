// AWS Topics Content
const awsContent = {

  's3-storage-classes-aatma-new': {
    topic: "S3 Storage Classes",
    title: "S3 Storage Classes – Cost Optimization Strategy",
    subtitle: "Hot → Warm → Cold → Frozen",
    icon: "💰",
    difficulty: "Intermediate",
    duration: "~45 min",
    ready: true,

    // 🎭 Comic
    comic: `
You check your AWS bill and pause for a moment… 😳  

"Why is S3 so expensive?"  

You open your storage and see everything mixed together —  
recent logs, old backups, reports from last year… all in the same place.  

Manager asks:
"Can we reduce storage cost without deleting data?"  

Now you're thinking…  
"Do we really need fast access for everything?"  

That's when you realize —  
different data needs different storage.  
And that's where S3 Storage Classes come into play.
`,

    // 🎯 Objective
    objective: "Understand S3 storage classes, optimize cost based on access patterns, and implement lifecycle policies",

    // 📚 Deep Dive
    deepDive: `
Amazon S3 provides multiple storage classes to optimize cost based on how frequently data is accessed.

Instead of storing everything in high-cost storage, S3 allows you to categorize data into different tiers.

Each storage class differs in:
✔ Cost  
✔ Availability  
✔ Retrieval speed  

The idea is simple:

👉 Frequently used data → Fast but costly  
👉 Rarely used data → Slow but cheap  

This concept helps companies save huge costs while maintaining durability.
`,

    // 📋 Types
    types: `
🔥 Hot Storage:
- S3 Standard → frequently accessed data

🌤 Warm Storage:
- S3 Standard-IA → infrequent but quick access
- S3 One Zone-IA → cheaper but single AZ

❄️ Cold Storage:
- Glacier Instant Retrieval → rare but fast retrieval
- Glacier Flexible Retrieval → minutes to hours
- Glacier Deep Archive → cheapest, hours retrieval
`,

    // 📊 Real Example
    realExample: `
Real-world usage:

✔ Store logs in Standard  
✔ Move to IA after 30 days  
✔ Archive to Glacier after 90 days  

This reduces cost by 60–80%.
`,

    // ⚠️ Mistakes
    mistakes: `
❌ Keeping all data in Standard  
❌ Using Glacier for active queries  
❌ Not using lifecycle policies  

🔥 Interview Trap:
Ignoring retrieval cost while choosing storage  
`,

    // 💬 Q&A
    qa: [
      {
        q: "What is the main purpose of S3 storage classes?",
        options: [
          "Increase storage size",
          "Optimize cost based on access",
          "Delete data automatically",
          "Improve UI"
        ],
        answer: "Optimize cost based on access",
        explanation: `
S3 storage classes are designed to reduce cost by storing data based on how frequently it is accessed.

Frequently accessed → expensive but fast  
Rarely accessed → cheaper but slower  

Other options:
❌ Increase size → not purpose  
❌ Delete data → lifecycle feature  
❌ UI → unrelated  
`
      },
      {
        q: "Which storage class is best for frequently accessed data?",
        options: [
          "Glacier",
          "Deep Archive",
          "Standard",
          "IA"
        ],
        answer: "Standard",
        explanation: `
S3 Standard is optimized for:
✔ High availability  
✔ Low latency  
✔ Frequent access  

Other options:
❌ Glacier → archival  
❌ Deep Archive → very slow  
❌ IA → not for frequent access  
`
      },
      {
        q: "Which storage class is cheapest?",
        options: [
          "Standard",
          "IA",
          "Glacier Deep Archive",
          "One Zone"
        ],
        answer: "Glacier Deep Archive",
        explanation: `
Deep Archive is the lowest-cost storage option.

But:
❗ Retrieval takes hours  
❗ Not suitable for active data  

Other options are costlier due to faster access.
`
      },
      {
        q: "What is the main drawback of Glacier storage?",
        options: [
          "High cost",
          "Slow retrieval",
          "Low storage",
          "No durability"
        ],
        answer: "Slow retrieval",
        explanation: `
Glacier storage is very cheap but has delayed retrieval times.

Other options:
❌ High cost → incorrect  
❌ Low storage → incorrect  
❌ No durability → wrong (S3 is highly durable)  
`
      },
      {
        q: "What is S3 Lifecycle Policy?",
        options: [
          "Delete system",
          "Move data automatically",
          "Query system",
          "Security tool"
        ],
        answer: "Move data automatically",
        explanation: `
Lifecycle policies automate:

✔ Transition between storage classes  
✔ Expiration of old data  

This reduces manual effort and cost.  
`
      },
      {
        q: "Which storage uses only one availability zone?",
        options: [
          "Standard",
          "One Zone-IA",
          "Glacier",
          "Deep Archive"
        ],
        answer: "One Zone-IA",
        explanation: `
One Zone-IA stores data in a single AZ:

✔ Cheaper  
❌ Less durable than multi-AZ  

Used when redundancy is not critical.  
`
      },
      {
        q: "Interview Trap: Can Glacier be used for real-time applications?",
        options: [
          "Yes",
          "No",
          "Sometimes",
          "Always"
        ],
        answer: "No",
        explanation: `
Glacier is not suitable for real-time use because:

❌ Retrieval delay  
❌ Additional retrieval cost  

It is designed for archival, not active workloads.  
`
      },
      {
        q: "What is Intelligent Tiering?",
        options: [
          "Manual movement",
          "Automatic class switching",
          "Delete data",
          "Backup tool"
        ],
        answer: "Automatic class switching",
        explanation: `
Intelligent Tiering automatically moves data between:

✔ Frequent  
✔ Infrequent  

Based on access pattern → saves cost automatically.  
`
      }
    ],

    // 💻 Coding
    coding: {
      title: "Lifecycle Strategy",
      questions: [
        {
          q: "Move data after 30 days",
          answer: "Standard → IA"
        },
        {
          q: "Move after 90 days",
          answer: "IA → Glacier"
        }
      ]
    },

    // 🎯 Quiz
    quiz: [
      {
        q: "Hot storage?",
        options: ["Standard", "Glacier", "None", "Loop"],
        answer: 0,
        explanation: "Standard is used for hot (frequently accessed) data."
      }
    ],

    // 🎤 Interview
    interview: `
S3 storage classes are used to optimize cost by storing data based on access frequency.
In real projects, I use lifecycle policies to automatically move data from Standard to Glacier or Deep Archive.
`,

    // 🧠 Memory
    memory: `
Hot = Standard 🔥  
Warm = IA 🌤  
Cold = Glacier ❄️  
Cheapest = Deep Archive 💸  
`,

    // ⚡ Revision
    revision: "Optimize cost by choosing the right storage class based on access frequency",

    // Compatibility fields
    coreConcept: {
      thinking: "Match storage class to access pattern for cost optimization",
      awsMapping: "S3 Standard → IA → Glacier → Deep Archive (Cost ↓, Speed ↓)"
    },

    realTimeScenario: {
      sources: ["Daily Logs", "Monthly Reports", "Old Backups", "Compliance Data"],
      problem: "All data stored in expensive S3 Standard storage, causing high monthly costs",
      wrongApproach: [
        "Storing all data in Standard regardless of access frequency",
        "Using Glacier for active data"
      ],
      correctApproach: "Use lifecycle policies to automatically transition data: Standard → IA → Glacier → Deep Archive"
    },

    services: [
      {
        name: "S3 Standard",
        type: "Hot Storage",
        icon: "🔥",
        whatItDoes: ["Stores frequently accessed data", "Provides low latency"],
        whyUse: ["Active data requiring immediate access"],
        interviewLine: "S3 Standard is used for frequently accessed data requiring low latency"
      },
      {
        name: "S3 Glacier",
        type: "Cold Storage",
        icon: "❄️",
        whatItDoes: ["Archives rarely accessed data", "Very low storage cost"],
        whyUse: ["Long-term archives", "Maximum cost savings"],
        interviewLine: "Glacier provides the lowest cost storage for archival data"
      }
    ],

    interactiveQA: [
      {
        question: "Which is hot storage?",
        hint: "Frequent access",
        options: ["Standard", "Glacier", "Deep", "IA"],
        answer: "Standard",
        explanation: "S3 Standard is optimized for frequently accessed data.",
        memoryTrick: "Hot = Standard 🔥"
      }
    ],

    codingChallenge: {
      title: "Lifecycle Example",
      scenario: "Move data across storage classes",
      thinkingApproach: ["Identify data usage", "Define lifecycle rules"],
      questions: [
        {
          question: "Move after 30 days",
          answer: "Standard → IA"
        }
      ],
      note: "Lifecycle policies automate cost optimization."
    },

    practicalSteps: [
      { step: 1, action: "Create lifecycle policy", command: "Configure in S3 console: Transition to IA after 30 days" }
    ],

    interviewQuestions: [
      { question: "What are S3 storage classes?", answer: "S3 storage classes are different storage tiers optimized for various access patterns and cost requirements." }
    ],

    commonMistakes: [
      "Storing all data in Standard regardless of access frequency",
      "Using Glacier for active data (slow retrieval)"
    ],

    memoryTrick: {
      line: "Hot = Standard, Cold = Glacier",
      flow: "Hot → Warm → Cold → Frozen"
    },

    finalInterviewStatement: "I use S3 storage classes to optimize cost by moving data based on access patterns using lifecycle policies."
  },

  's3-storage-classes-aatma': {
    topic: "S3 Storage Classes",
    title: "S3 Storage Classes – Cost Optimization Strategy",
    subtitle: "Hot → Warm → Cold → Frozen",
    icon: "💰",
    difficulty: "Intermediate",
    duration: "~45 min",
    ready: true,

    // 🎭 Comic
    comic: `
You open your AWS bill… and your eyes freeze 😳  

"Why is S3 costing this much?"  

You check your bucket… old logs, unused files, backups… everything just sitting there.  

Manager asks:
"Can we reduce this cost?"  

Now you're thinking…  
"Not all data is used equally…"  

💡 That's when S3 Storage Classes make sense.  
`,

    // 🎯 Objective
    objective: `
✔ Understand S3 storage types  
✔ Learn when to use each class  
✔ Optimize AWS cost  
`,

    // 📚 Deep Dive
    deepDive: `
S3 Storage Classes allow you to store data based on access frequency.

Instead of keeping all data in one expensive storage,  
you can move data to cheaper options based on usage.

Hot data → Fast access  
Cold data → Cheap storage  

This helps reduce cost significantly.
`,

    // 📋 TYPES
    types: `
🔥 Hot Storage:
- S3 Standard (frequent access)

🌤 Warm Storage:
- Standard-IA (less frequent)
- One Zone-IA (cheaper, single AZ)

❄️ Cold Storage:
- Glacier Instant
- Glacier Flexible
- Glacier Deep Archive (cheapest)
`,

    // 📊 Real Example
    realExample: `
In a real project:

Daily logs → Standard  
Monthly reports → IA  
Old backups → Glacier  
Compliance data → Deep Archive  

👉 Lifecycle moves data automatically.
`,

    // ⚠️ Mistakes
    mistakes: `
❌ Storing all data in Standard → high cost  

❌ Using Glacier for active data → slow  

🔥 Interview Trap:
Glacier is cheap but has retrieval delay and cost
`,

    // 💬 Q&A
    qa: [
      {
        q: "Which is hot storage?",
        options: ["Standard", "Glacier", "Deep", "IA"],
        answer: "Standard",
        explanation: "Used for frequent access"
      }
    ],

    // 💻 Coding
    coding: {
      title: "Lifecycle Example",
      questions: [
        {
          q: "Move after 30 days",
          answer: "Standard → IA"
        }
      ]
    },

    // 🎯 Quiz
    quiz: [
      {
        q: "Cheapest?",
        options: ["Deep", "Standard", "None", "IA"],
        answer: 0,
        explanation: "Deep Archive is the cheapest storage class"
      }
    ],

    // 🎤 Interview
    interview: `
I use S3 storage classes to optimize cost by moving data based on access patterns using lifecycle policies.
`,

    // 🧠 Memory
    memory: `
Hot = Standard  
Cold = Glacier  
`,

    // ⚡ Revision
    revision: "Store smart → save cost",

    // Additional fields for compatibility
    comicStory: [
      { panel: 1, text: "You open your AWS bill… and your eyes freeze 😳\n\n'Why is S3 costing this much?'" },
      { panel: 2, text: "You check your bucket… old logs, unused files, backups… everything just sitting there." },
      { panel: 3, text: "Manager asks:\n'Can we reduce this cost?'" },
      { panel: 4, text: "Now you're thinking…\n'Not all data is used equally…'" },
      { panel: 5, text: "💡 That's when S3 Storage Classes make sense." }
    ],

    deepDive: [
      "S3 Storage Classes allow you to store data based on access frequency.",
      "Instead of keeping all data in one expensive storage, you can move data to cheaper options based on usage.",
      "Hot data → Fast access, Cold data → Cheap storage",
      "This helps reduce cost significantly."
    ],

    coreConcept: {
      thinking: "Match storage class to access pattern for cost optimization",
      awsMapping: "S3 Standard → IA → Glacier → Deep Archive (Cost ↓, Speed ↓)"
    },

    realTimeScenario: {
      sources: ["Daily Logs", "Monthly Reports", "Old Backups", "Compliance Data"],
      problem: "All data stored in expensive S3 Standard storage, causing high monthly costs",
      wrongApproach: [
        "Storing all data in Standard regardless of access frequency",
        "Using Glacier for active data"
      ],
      correctApproach: "Use lifecycle policies to automatically transition data: Standard → IA → Glacier → Deep Archive"
    },

    services: [
      {
        name: "S3 Standard",
        type: "Hot Storage",
        icon: "🔥",
        whatItDoes: ["Stores frequently accessed data", "Provides low latency"],
        whyUse: ["Active data requiring immediate access"],
        interviewLine: "S3 Standard is used for frequently accessed data requiring low latency"
      },
      {
        name: "S3 Glacier",
        type: "Cold Storage",
        icon: "❄️",
        whatItDoes: ["Archives rarely accessed data", "Very low storage cost"],
        whyUse: ["Long-term archives", "Maximum cost savings"],
        interviewLine: "Glacier provides the lowest cost storage for archival data"
      }
    ],

    interactiveQA: [
      {
        question: "Which is hot storage?",
        hint: "Frequent access",
        options: ["Standard", "Glacier", "Deep", "IA"],
        answer: "Standard",
        explanation: "S3 Standard is optimized for frequently accessed data.",
        memoryTrick: "Hot = Standard 🔥"
      }
    ],

    codingChallenge: {
      title: "Lifecycle Example",
      scenario: "Move data across storage classes",
      thinkingApproach: ["Identify data usage", "Define lifecycle rules"],
      questions: [
        {
          question: "Move after 30 days",
          answer: "Standard → IA"
        }
      ],
      note: "Lifecycle policies automate cost optimization."
    },

    practicalSteps: [
      { step: 1, action: "Create lifecycle policy", command: "Configure in S3 console: Transition to IA after 30 days" }
    ],

    interviewQuestions: [
      { question: "What are S3 storage classes?", answer: "S3 storage classes are different storage tiers optimized for various access patterns and cost requirements." }
    ],

    commonMistakes: [
      "Storing all data in Standard regardless of access frequency",
      "Using Glacier for active data (slow retrieval)"
    ],

    memoryTrick: {
      line: "Hot = Standard, Cold = Glacier",
      flow: "Hot → Warm → Cold → Frozen"
    },

    finalInterviewStatement: "I use S3 storage classes to optimize cost by moving data based on access patterns using lifecycle policies."
  },

  's3-storage-classes-old': {
    topic: "S3 Storage Classes",
    title: "S3 Storage Classes – Cost Optimization Strategy",
    subtitle: "Hot → Warm → Cold → Frozen",
    icon: "💰",
    difficulty: "Intermediate",
    duration: "~45 min",
    ready: true,

    // 🎭 1. COMIC (Problem Story)
    comicStory: [
      { panel: 1, text: "📦 Real Situation:\n\nYour company stores 100TB of data in S3.\nAll data is in S3 Standard storage.\nMonthly bill: $2,300" },
      { panel: 2, text: "😰 Problem / Confusion:\n\nYou notice:\n• 70% of data is rarely accessed\n• Old logs from 2 years ago\n• But paying same price for everything!\n\nWhy is the bill so high?" },
      { panel: 3, text: "⚠️ Pressure:\n\nManager calls you:\n'Our S3 costs are too high!\nReduce it by 60% this month.\nOr we'll have budget issues!'\n\n😰 Panic mode!" },
      { panel: 4, text: "🤔 Thinking Moment:\n\nYou analyze the data:\n• Recent logs → accessed daily\n• Monthly reports → accessed once/month\n• Old backups → never accessed\n\nWait... not all data needs fast storage!" },
      { panel: 5, text: "💡 Aha Moment → S3 Storage Classes!\n\nHot data (daily) → Standard\nWarm data (monthly) → IA\nCold data (archive) → Glacier\n\n✨ Let's solve this problem step by step" }
    ],

    // 🎯 2. OBJECTIVE
    objective: "Understand different S3 storage classes, learn when to use each class, optimize AWS cost effectively, and design lifecycle for data",

    // 📚 3. DEEP DIVE
    deepDive: [
      "👉 What are S3 Storage Classes? Different types of storage designed based on: ✔ Access frequency, ✔ Cost, ✔ Retrieval time",
      "👉 S3 Standard: ✔ Frequently accessed data, ✔ High availability, ✔ Higher cost. Use for: Active data, Real-time applications",
      "👉 S3 Standard-IA (Infrequent Access): ✔ Less frequent access, ✔ Lower cost, ✔ Retrieval fee. Use for: Backups, Monthly reports",
      "👉 S3 One Zone-IA: ✔ Stored in single AZ, ✔ Cheaper, ❌ Less durable. Use for: Non-critical data",
      "👉 S3 Glacier Instant Retrieval: ✔ Rare access, ✔ Millisecond retrieval, ✔ Cheaper. Use for: Archive with quick access needs",
      "👉 S3 Glacier Flexible Retrieval: ✔ Archive data, ✔ Retrieval in minutes/hours. Use for: Long-term archives",
      "👉 S3 Glacier Deep Archive: ✔ Very rarely used, ✔ Cheapest, ✔ Retrieval takes hours. Use for: Compliance data (7+ years)",
      "🎯 Key Idea: Hot → Standard, Warm → IA, Cold → Glacier. Lifecycle policies automate transitions between storage classes."
    ],

    // 📊 4. REAL EXAMPLE
    realExample: `
Real-world Data Lake:

📂 User logs (daily access)
→ S3 Standard  

📂 Monthly reports
→ S3 Standard-IA  

📂 Old backups (1 year old)
→ Glacier  

📂 Compliance data (7 years)
→ Deep Archive  

---

👉 Lifecycle Rule:

After 30 days → move to IA  
After 90 days → move to Glacier  
After 1 year → Deep Archive  
`,

    // 📋 5. TYPES
    types: `
🔥 Hot Storage:
- S3 Standard  

🌤 Warm Storage:
- Standard-IA  
- One Zone-IA  

❄️ Cold Storage:
- Glacier Instant  
- Glacier Flexible  
- Deep Archive  
`,

    coreConcept: {
      thinking: "Match storage class to access pattern for cost optimization",
      awsMapping: "S3 Standard → IA → Glacier → Deep Archive (Cost ↓, Speed ↓)"
    },

    realTimeScenario: {
      sources: ["User Logs", "Monthly Reports", "Old Backups", "Compliance Data"],
      problem: "All data stored in expensive S3 Standard storage, causing high monthly costs",
      wrongApproach: [
        "Using Standard for all data regardless of access frequency",
        "Manual data movement between storage classes",
        "Ignoring lifecycle policies"
      ],
      correctApproach: "Use lifecycle policies to automatically transition data: Standard (0-30 days) → IA (30-90 days) → Glacier (90-365 days) → Deep Archive (1+ years)"
    },

    services: [
      {
        name: "S3 Standard",
        type: "Hot Storage",
        icon: "🔥",
        whatItDoes: [
          "Stores frequently accessed data",
          "Provides low latency and high throughput",
          "Replicates across multiple AZs"
        ],
        whyUse: [
          "Active data requiring immediate access",
          "Real-time applications",
          "High availability requirements"
        ],
        interviewLine: "S3 Standard is used for frequently accessed data requiring low latency and high availability"
      },
      {
        name: "S3 Standard-IA",
        type: "Warm Storage",
        icon: "🌤",
        whatItDoes: [
          "Stores infrequently accessed data",
          "Lower storage cost than Standard",
          "Charges retrieval fee per GB"
        ],
        whyUse: [
          "Backups accessed monthly",
          "Disaster recovery data",
          "Cost optimization for less frequent access"
        ],
        interviewLine: "Standard-IA reduces storage costs for data accessed less than once per month while maintaining quick retrieval"
      },
      {
        name: "S3 Glacier",
        type: "Cold Storage",
        icon: "❄️",
        whatItDoes: [
          "Archives rarely accessed data",
          "Very low storage cost",
          "Retrieval takes minutes to hours"
        ],
        whyUse: [
          "Long-term archives",
          "Compliance data storage",
          "Maximum cost savings"
        ],
        interviewLine: "Glacier provides the lowest cost storage for archival data with acceptable retrieval delays"
      },
      {
        name: "S3 Lifecycle Policies",
        type: "Automation",
        icon: "⚙️",
        whatItDoes: [
          "Automatically transitions objects between storage classes",
          "Deletes objects after specified time",
          "Applies rules based on object age or tags"
        ],
        whyUse: [
          "Automate cost optimization",
          "Eliminate manual data management",
          "Ensure compliance with retention policies"
        ],
        interviewLine: "Lifecycle policies automate data transitions between storage classes, reducing costs without manual intervention"
      }
    ],

    interactiveQA: [
      {
        question: "Which storage is for frequently accessed data?",
        hint: "Hot data",
        options: ["Glacier", "Deep Archive", "Standard", "IA"],
        answer: "Standard",
        explanation: "S3 Standard is optimized for frequently accessed data with low latency requirements.",
        memoryTrick: "Hot = Standard 🔥"
      },
      {
        question: "Which is cheapest storage?",
        hint: "Cold",
        options: ["Standard", "IA", "Glacier Deep Archive", "One Zone"],
        answer: "Glacier Deep Archive",
        explanation: "Deep Archive has the lowest storage cost but highest retrieval time (12 hours).",
        memoryTrick: "Cheapest = Deep ❄️"
      },
      {
        question: "Which has retrieval cost?",
        hint: "Not free access",
        options: ["Standard", "IA", "Both", "None"],
        answer: "IA",
        explanation: "IA (Infrequent Access) has lower storage cost but charges for data retrieval.",
        memoryTrick: "IA = pay to read 💰"
      },
      {
        question: "Which storage is single AZ?",
        hint: "Less durable",
        options: ["Standard", "One Zone-IA", "Glacier", "Deep Archive"],
        answer: "One Zone-IA",
        explanation: "One Zone-IA stores data in a single Availability Zone, making it cheaper but less durable.",
        memoryTrick: "One Zone = 1 AZ 📍"
      },
      {
        question: "Interview Trap: Is Glacier real-time?",
        hint: "Think delay",
        options: ["Yes", "No", "Sometimes", "Always"],
        answer: "No",
        explanation: "Glacier has retrieval delays (minutes to hours), not suitable for real-time access.",
        memoryTrick: "Glacier = slow ❄️"
      }
    ],

    codingChallenge: {
      title: "S3 Lifecycle Configuration (Conceptual)",
      scenario: "Move data across storage classes to optimize costs",
      thinkingApproach: [
        "Identify data usage patterns",
        "Define lifecycle rules based on age",
        "Move to cheaper storage as data ages",
        "Optimize cost while maintaining availability"
      ],
      questions: [
        {
          question: "1. Move data to IA after 30 days",
          answer: "Lifecycle Rule:\nTransition to Standard-IA after 30 days"
        },
        {
          question: "2. Move to Glacier after 90 days",
          answer: "Lifecycle Rule:\nTransition to Glacier Flexible Retrieval after 90 days"
        },
        {
          question: "3. Move to Deep Archive after 1 year",
          answer: "Lifecycle Rule:\nTransition to Glacier Deep Archive after 365 days"
        },
        {
          question: "4. Delete after 5 years",
          answer: "Lifecycle Rule:\nExpire (delete) objects after 1825 days (5 years)"
        }
      ],
      note: "Lifecycle policies automate cost optimization without manual intervention."
    },

    quiz: [
      { q: "Hot data?", options: ["Standard", "Glacier", "None", "Loop"], answer: 0, explanation: "Standard is used for hot (frequently accessed) data.", difficulty: "easy" },
      { q: "Cold?", options: ["Glacier", "Standard", "None", "Loop"], answer: 0, explanation: "Glacier is cold storage for rarely accessed data.", difficulty: "easy" },
      { q: "Cheapest?", options: ["Deep", "Standard", "None", "Loop"], answer: 0, explanation: "Deep Archive is the cheapest storage class.", difficulty: "easy" },
      { q: "Lifecycle?", options: ["Auto", "Manual", "None", "Loop"], answer: 0, explanation: "Lifecycle policies automate data movement between storage classes.", difficulty: "medium" },
      { q: "Retrieval?", options: ["Cost", "Free", "None", "Loop"], answer: 0, explanation: "IA and Glacier have retrieval costs.", difficulty: "medium" },
      { q: "AZ?", options: ["One Zone", "All", "None", "Loop"], answer: 0, explanation: "One Zone-IA stores data in a single AZ.", difficulty: "medium" },
      { q: "Glacier?", options: ["Slow", "Fast", "None", "Loop"], answer: 0, explanation: "Glacier has slow retrieval (minutes to hours).", difficulty: "hard" },
      { q: "Important?", options: ["Yes", "No", "None", "Loop"], answer: 0, explanation: "Storage classes are critical for cost optimization.", difficulty: "hard" },
      { q: "Cost?", options: ["Reduce", "Increase", "None", "Loop"], answer: 0, explanation: "Proper storage class selection reduces costs significantly.", difficulty: "hard" }
    ],

    practicalSteps: [
      { step: 1, action: "Create S3 Bucket", command: "aws s3 mb s3://my-data-lake" },
      { step: 2, action: "Upload sample data", command: "aws s3 cp data.csv s3://my-data-lake/" },
      { step: 3, action: "Create lifecycle policy", command: "Configure in S3 console: Transition to IA after 30 days" },
      { step: 4, action: "Add Glacier transition", command: "Add rule: Transition to Glacier after 90 days" },
      { step: 5, action: "Set expiration", command: "Add rule: Delete objects after 365 days" }
    ],

    interviewQuestions: [
      { question: "What are S3 storage classes?", answer: "S3 storage classes are different storage tiers optimized for various access patterns and cost requirements, ranging from frequently accessed (Standard) to archival (Glacier Deep Archive)." },
      { question: "When to use Standard vs IA?", answer: "Use Standard for frequently accessed data requiring low latency. Use IA for data accessed less than once per month where retrieval cost is acceptable." },
      { question: "What is Glacier retrieval time?", answer: "Glacier Flexible Retrieval takes minutes to hours. Glacier Deep Archive takes up to 12 hours for retrieval." },
      { question: "What are lifecycle policies?", answer: "Lifecycle policies automatically transition objects between storage classes or delete them based on age or other criteria, enabling automated cost optimization." },
      { question: "How to reduce S3 costs?", answer: "Use lifecycle policies to move data to cheaper storage classes as it ages, use appropriate storage class for access patterns, and delete unnecessary data." }
    ],

    commonMistakes: [
      "Using Standard for all data regardless of access frequency",
      "Using Glacier for frequently accessed data (slow + expensive retrieval)",
      "Ignoring lifecycle policies and managing data manually",
      "Not considering retrieval costs when choosing storage class"
    ],

    memoryTrick: {
      line: "👉 Hot = Standard 🔥\n👉 Warm = IA 🌤\n👉 Cold = Glacier ❄️\n👉 Cheapest = Deep Archive 💸\n👉 Lifecycle = automation ⚙️",
      flow: "Hot → Warm → Cold → Frozen"
    },

    revision: "Choose storage based on access frequency to optimize cost",

    finalInterviewStatement: "S3 storage classes help optimize cost based on data access patterns. I use Standard for frequently accessed data, IA for less frequent access, and Glacier or Deep Archive for archival data, along with lifecycle policies to automate transitions.",

    // ⚠️ 6. MISTAKES / TRAPS
    mistakes: `
❌ Using Standard for all data  
👉 High cost  

❌ Using Glacier for frequently accessed data  
👉 Slow + expensive retrieval  

❌ Ignoring lifecycle policies  
👉 Manual management  

🔥 Interview Trap:
Glacier is cheap → but retrieval cost + delay must be considered  
`,

    // 💬 7. Q&A (MCQ)
    qa: [

      {
        q: "Which storage is for frequently accessed data?",
        hint: "Hot data",
        options: [
          "Glacier",
          "Deep Archive",
          "Standard",
          "IA"
        ],
        answer: "Standard",
        explanation: `
S3 Standard:
✔ Best for frequent access  
`,
        memory: "Hot = Standard 🔥"
      },

      {
        q: "Which is cheapest storage?",
        hint: "Cold",
        options: [
          "Standard",
          "IA",
          "Glacier Deep Archive",
          "One Zone"
        ],
        answer: "Glacier Deep Archive",
        explanation: `
Deep Archive:
✔ Lowest cost  
✔ Slow retrieval  
`,
        memory: "Cheapest = Deep ❄️"
      },

      {
        q: "Which has retrieval cost?",
        hint: "Not free access",
        options: [
          "Standard",
          "IA",
          "Both",
          "None"
        ],
        answer: "IA",
        explanation: `
IA:
✔ Low storage cost  
❌ Retrieval cost  
`,
        memory: "IA = pay to read 💰"
      },

      {
        q: "Which storage is single AZ?",
        hint: "Less durable",
        options: [
          "Standard",
          "One Zone-IA",
          "Glacier",
          "Deep Archive"
        ],
        answer: "One Zone-IA",
        explanation: `
Stored in one AZ  
✔ cheaper  
❌ less durable  
`,
        memory: "One Zone = 1 AZ 📍"
      },

      {
        q: "Interview Trap: Is Glacier real-time?",
        hint: "Think delay",
        options: [
          "Yes",
          "No",
          "Sometimes",
          "Always"
        ],
        answer: "No",
        explanation: `
Glacier:
❌ Not real-time  
✔ Delayed retrieval  
`,
        memory: "Glacier = slow ❄️"
      }

    ],

    // 💻 8. CODING (REAL SCENARIOS)
    coding: {
      title: "S3 Lifecycle Configuration (Conceptual)",

      scenario: "Move data across storage classes",

      thinkingApproach: [
        "Identify data usage",
        "Define lifecycle rules",
        "Move to cheaper storage",
        "Optimize cost"
      ],

      questions: [

        {
          q: "1. Move data to IA after 30 days",
          answer: `
Lifecycle Rule:
After 30 days → Standard-IA
`
        },

        {
          q: "2. Move to Glacier after 90 days",
          answer: `
After 90 days → Glacier
`
        },

        {
          q: "3. Move to Deep Archive after 1 year",
          answer: `
After 365 days → Deep Archive
`
        },

        {
          q: "4. Delete after 5 years",
          answer: `
After 5 years → Expire object
`
        }

      ],

      note: "Lifecycle policies automate cost optimization."
    },

    // 🎯 9. QUIZ
    quiz: [
      {
        q: "Hot data?",
        options: ["Standard", "Glacier", "None", "Loop"],
        answer: 0,
        explanation: "Standard used."
      },
      {
        q: "Cold?",
        options: ["Glacier", "Standard", "None", "Loop"],
        answer: 0,
        explanation: "Cold storage."
      },
      {
        q: "Cheapest?",
        options: ["Deep", "Standard", "None", "Loop"],
        answer: 0,
        explanation: "Deep Archive."
      },
      {
        q: "Lifecycle?",
        options: ["Auto", "Manual", "None", "Loop"],
        answer: 0,
        explanation: "Automates movement."
      },
      {
        q: "Retrieval?",
        options: ["Cost", "Free", "None", "Loop"],
        answer: 0,
        explanation: "IA has cost."
      },
      {
        q: "AZ?",
        options: ["One Zone", "All", "None", "Loop"],
        answer: 0,
        explanation: "Single AZ."
      },
      {
        q: "Glacier?",
        options: ["Slow", "Fast", "None", "Loop"],
        answer: 0,
        explanation: "Slow retrieval."
      },
      {
        q: "Important?",
        options: ["Yes", "No", "None", "Loop"],
        answer: 0,
        explanation: "Very important."
      },
      {
        q: "Cost?",
        options: ["Reduce", "Increase", "None", "Loop"],
        answer: 0,
        explanation: "Optimize cost."
      }
    ],

    // 🎤 10. INTERVIEW
    interview: `
👉 "S3 storage classes help optimize cost based on data access patterns.
I use Standard for frequently accessed data, IA for less frequent access, and Glacier or Deep Archive for archival data, along with lifecycle policies to automate transitions."
`,

    // 🧠 11. MEMORY
    memory: `
👉 Hot = Standard 🔥  
👉 Warm = IA 🌤  
👉 Cold = Glacier ❄️  
👉 Cheapest = Deep Archive 💸  
👉 Lifecycle = automation ⚙️  
`,

    // ⚡ 12. REVISION
    revision: "Choose storage based on access frequency to optimize cost"
  },

  's3-storage-classes': {
    topic: "S3 Storage Classes",
    category: "AWS S3",
    level: "Very Important (Interview + Cost)",
    title: "S3 Storage Classes – Optimize Storage Cost Based on Access Frequency",
    subtitle: "Cost Optimization Strategy",
    icon: "💰",
    difficulty: "Intermediate",
    duration: "~45 min",
    ready: true,

    objective: "Optimize storage cost based on access frequency",

    // 🎭 COMIC STORY
    comic: `📖 1
Imagine you store 10TB data in S3 💾

📖 2
😰 Problem
- Some files accessed daily
- Some files accessed monthly
- Some files never accessed
- But all stored in expensive Standard class 💸

📖 3
🤔 Solution

Use different storage classes based on access frequency!

📖 4
💡 Storage Classes:
📊 Standard → Daily access (expensive)
📦 IA → Monthly access (cheaper)
❄️ Glacier → Archive (very cheap)
🧊 Deep Archive → Compliance (cheapest)

📖 5
✨ Result:
✔ Cost reduced by 60%
✔ Same data availability
✔ Automatic transitions with lifecycle rules

📖 6
💡 Aha Moment:
Not all data needs expensive storage! 🎯
Hot data → Standard
Warm data → IA
Cold data → Glacier
Frozen data → Deep Archive`,

    types: `🔥 Hot Data (Standard)
- Accessed daily
- Low latency required
- Most expensive
- Use: Active applications, real-time analytics

🌡️ Warm Data (Standard-IA)
- Accessed monthly
- Lower cost than Standard
- Retrieval fee applies
- Use: Backups, disaster recovery

❄️ Cold Data (Glacier)
- Accessed yearly
- Very low cost
- Retrieval: minutes to hours
- Use: Long-term archives, compliance

🧊 Frozen Data (Deep Archive)
- Rarely accessed
- Cheapest option
- Retrieval: 12 hours
- Use: Regulatory archives, 7-10 year retention

🤖 Intelligent-Tiering
- Unknown access patterns
- Automatically moves data between tiers
- No retrieval fees
- Small monitoring fee`,

    problem_statement: `
Not all data is accessed equally.
Keeping everything in expensive storage increases cost.
`,

    analogy: `
Think like clothes:

- Daily wear → Standard
- Occasionally used → IA
- Rarely used → Glacier
- Never used → Deep Archive
`,

    interview_hook: `
S3 storage classes help reduce cost by storing data based on access patterns like frequent, infrequent, and archival.
`,

    concept_explanation: `
S3 provides multiple storage tiers:

Each tier balances:
- Cost
- Access speed
- Availability
`,

    internal_working: `
Lifecycle policies automatically move data between classes.
`,

    components: [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 Standard-IA",
      "S3 One Zone-IA",
      "S3 Glacier",
      "S3 Glacier Deep Archive"
    ],

    flow: [
      "Store in Standard",
      "After 30 days → IA",
      "After 90 days → Glacier",
      "After 1 year → Deep Archive"
    ],

    real_world_use_case: `
Banking logs:

Recent logs → Standard
1 month old → IA
1 year old → Glacier
Compliance data → Deep Archive
`,

    optimization_tips: [
      "Use lifecycle rules",
      "Use Intelligent Tiering for unknown patterns"
    ],

    cost_optimization: [
      "Archive unused data",
      "Avoid Standard for old data"
    ],

    mistakes: [
      "Using Standard for all data",
      "Ignoring lifecycle rules",
      "Using Glacier for frequently accessed data"
    ],

    comparison: {
      with: "Standard vs Glacier",
      difference: "Standard = fast + costly, Glacier = slow + cheap"
    },

    usage_guide: {
      use_when: [
        "Standard → frequently accessed",
        "IA → monthly access",
        "Glacier → archive",
        "Deep Archive → compliance"
      ],
      avoid_when: [
        "Glacier for real-time apps"
      ]
    },

    memory_trick: `
Hot → Warm → Cold → Frozen
(Standard → IA → Glacier → Deep Archive)
`,

    revision_notes: `
Standard → IA → Glacier → Deep Archive
Cost ↓ Speed ↓
`,

    interview_questions: [
      "Difference Standard vs IA?",
      "What is Glacier retrieval time?",
      "What is Intelligent Tiering?"
    ],

    scenario_question: `
Your company wants to reduce S3 cost by 60%. What will you do?
`,

    quiz: [
      {
        q: "Which is cheapest storage?",
        options: ["Standard", "IA", "Glacier", "Deep Archive"],
        answer: 3,
        explanation: "Deep Archive is the cheapest."
      },
      {
        q: "Which is fastest?",
        options: ["Standard", "IA", "Glacier", "Deep Archive"],
        answer: 0,
        explanation: "Standard provides fastest access."
      },
      {
        q: "What is lifecycle rule?",
        options: ["Delete data", "Move between classes", "Encrypt data", "Query data"],
        answer: 1,
        explanation: "Lifecycle rules automatically transition data between storage classes."
      }
    ],

    deepDive: [
      "👉 S3 Storage Classes Overview: S3 offers multiple storage classes optimized for different access patterns and cost requirements.",
      "👉 Standard: ✔ Frequently accessed data, ✔ Low latency, ✔ High throughput, ✔ Most expensive. Use for: Active data, Real-time applications",
      "👉 Standard-IA (Infrequent Access): ✔ Less frequently accessed, ✔ Lower cost than Standard, ✔ Retrieval fee applies. Use for: Backups, Disaster recovery",
      "👉 Intelligent-Tiering: ✔ Automatically moves data between tiers, ✔ No retrieval fees, ✔ Small monitoring fee. Use for: Unknown access patterns",
      "👉 Glacier: ✔ Archive storage, ✔ Very low cost, ✔ Retrieval time: minutes to hours. Use for: Long-term archives, Compliance data",
      "👉 Glacier Deep Archive: ✔ Lowest cost, ✔ Retrieval time: 12 hours, ✔ For rarely accessed data. Use for: Regulatory archives, Long-term retention",
      "👉 Lifecycle Policies: Automatically transition objects between storage classes based on age or other criteria to optimize costs.",
      "🎯 Interview Line: S3 storage classes enable cost optimization by storing data in appropriate tiers based on access frequency, with lifecycle policies automating transitions between classes."
    ],

    interactiveQA: [
      {
        question: "When to use Standard storage?",
        hint: "Frequent access",
        options: [
          "Archive data",
          "Frequently accessed data",
          "Backup data",
          "Compliance data"
        ],
        answer: "Frequently accessed data",
        explanation: "Standard is optimized for frequently accessed data with low latency requirements.",
        memoryTrick: "Standard = Hot data 🔥"
      },
      {
        question: "What is Intelligent-Tiering?",
        hint: "Automatic",
        options: [
          "Manual storage class",
          "Automatically moves data between tiers",
          "Deletes old data",
          "Encrypts data"
        ],
        answer: "Automatically moves data between tiers",
        explanation: "Intelligent-Tiering automatically moves objects between access tiers based on usage patterns.",
        memoryTrick: "Intelligent = Auto 🤖"
      },
      {
        question: "Glacier retrieval time?",
        hint: "Not instant",
        options: [
          "Milliseconds",
          "Minutes to hours",
          "Days",
          "Weeks"
        ],
        answer: "Minutes to hours",
        explanation: "Glacier offers different retrieval options ranging from minutes to hours.",
        memoryTrick: "Glacier = Wait ⏳"
      }
    ],

    codingChallenge: {
      title: "S3 Storage Class Management",
      scenario: "Implement lifecycle policy for cost optimization",
      thinkingApproach: [
        "Identify data access patterns",
        "Choose appropriate storage classes",
        "Define lifecycle rules",
        "Monitor cost savings"
      ],
      questions: [
        {
          question: "1. Create lifecycle policy",
          answer: "Use S3 console or AWS CLI to create lifecycle rule that transitions objects to IA after 30 days"
        },
        {
          question: "2. Transition to Glacier",
          answer: "Add transition rule to move objects to Glacier after 90 days"
        },
        {
          question: "3. Set expiration",
          answer: "Configure expiration rule to delete objects after 365 days"
        }
      ],
      note: "Lifecycle policies are critical for cost optimization in production systems."
    },

    coreConcept: {
      thinking: "Match storage class to access pattern for cost optimization",
      awsMapping: "S3 Standard → IA → Glacier → Deep Archive (Cost ↓, Speed ↓)"
    },

    memoryTrick: {
      line: "👉 Standard = Hot 🔥\n👉 IA = Warm 🌡️\n👉 Glacier = Cold ❄️\n👉 Deep Archive = Frozen 🧊\n👉 Lifecycle = Auto move 🔄",
      flow: "Hot → Warm → Cold → Frozen"
    },

    revision: "Storage classes optimize cost: Standard (hot) → IA (warm) → Glacier (cold) → Deep Archive (frozen)",

    finalInterviewStatement: "S3 storage classes enable cost optimization by providing different tiers based on access frequency. We use lifecycle policies to automatically transition data from Standard to IA, Glacier, and Deep Archive as it ages, reducing storage costs while maintaining data availability."
  },

  's3': {
    title: "Amazon S3 (Simple Storage Service – Data Lake Foundation)",
    subtitle: "Data Lake Foundation",
    icon: "🪣",
    difficulty: "Beginner",
    duration: "~60 min",
    ready: true,

    objective: "Understand Amazon S3 as object storage and data lake foundation for AWS data engineering",

    // 🎭 COMIC STORY
    comic: `📖 1
Imagine you have tons of data files 📦
CSV, JSON, Parquet, images, videos...
Where do you store them? 🤔

📖 2
😰 Problem
- Need unlimited storage
- Need to access from anywhere
- Need to store any file type
- Need it to be cheap and reliable

📖 3
🤔 Solution

Amazon S3 (Simple Storage Service)!

📖 4
🪣 What is S3?
✔ Object storage (store any file)
✔ Unlimited capacity
✔ 99.999999999% durability (11 nines!)
✔ Access from anywhere
✔ Pay only for what you use

📖 5
🏗️ S3 Structure:
Bucket → Container (like folder)
Object → File (data.csv, image.png)
Key → Path (folder/subfolder/file.csv)

📖 6
💡 Aha Moment:
S3 is the foundation of AWS Data Lake! 🎯

All data engineering starts with S3:
S3 → Glue → Athena → Redshift → QuickSight

✨ S3 = Your cloud data warehouse!`,

    // 📚 DEEP DIVE
    deepDive: [
      "S3 is object storage used as data lake.",
      "Bucket → container",
      "Object → file",
      "Key → path",
      "Used in: S3 → Glue → Athena → Dashboard"
    ],

    // 📋 TYPES
    types: `🪣 S3 Core Components:

1️⃣ Bucket
- Container for objects
- Globally unique name
- Example: my-data-lake-bucket
- Region-specific

2️⃣ Object
- Actual file stored in S3
- Can be any type: CSV, JSON, Parquet, images, videos
- Max size: 5TB per object
- Example: sales_data.csv, user_profile.json

3️⃣ Key
- Unique identifier (path) for object
- Example: data/2024/sales/jan.csv
- Acts like file path

4️⃣ Storage Classes
🔥 Standard → Frequent access (expensive)
🌡️ Standard-IA → Infrequent access (cheaper)
❄️ Glacier → Archive (very cheap)
🧊 Deep Archive → Long-term (cheapest)

5️⃣ Access Control
- IAM Policies → User permissions
- Bucket Policies → Bucket-level access
- ACLs → Object-level access

6️⃣ Versioning
- Keep multiple versions of same object
- Protect against accidental deletion
- Enable/disable per bucket

7️⃣ Lifecycle Policies
- Automatically transition objects between storage classes
- Delete old objects
- Example: Move to Glacier after 90 days`,

    // 💬 INTERACTIVE Q&A
    interactiveQA: [
      {
        question: "S3?",
        hint: "Storage",
        options: ["Compute", "Storage", "DB", "Network"],
        answer: "Storage",
        explanation: "S3 stores data.",
        memoryTrick: "S3 = 📦"
      }
    ],

    // 💻 CODING CHALLENGE (UPGRADED 🔥)
    codingChallenge: {
      title: "S3 + PySpark Practice (8 Real Questions)",
      scenario: "You are working on S3-based ETL pipeline",
      thinkingApproach: [
        "Understand requirement",
        "Identify S3 path",
        "Read/write data",
        "Apply transformation",
        "Optimize operations",
        "Validate output"
      ],
      questions: [
        {
          question: "1. Read CSV file from S3",
          answer: "df = spark.read.csv(\"s3://bucket/data.csv\", header=True)\ndf.show()"
        },
        {
          question: "2. Read JSON file from S3",
          answer: "df = spark.read.json(\"s3://bucket/data.json\")\ndf.show()"
        },
        {
          question: "3. Write DataFrame to S3 in Parquet format",
          answer: "df.write.parquet(\"s3://bucket/output/\")"
        },
        {
          question: "4. Write partitioned data by year",
          answer: "df.write.partitionBy(\"year\").parquet(\"s3://bucket/output/\")"
        },
        {
          question: "5. Filter data before writing to S3",
          answer: "filtered_df = df.filter(\"amount > 100\")\nfiltered_df.write.parquet(\"s3://bucket/output/\")"
        },
        {
          question: "6. Count number of records in S3 file",
          answer: "df = spark.read.csv(\"s3://bucket/data.csv\", header=True)\nprint(df.count())"
        },
        {
          question: "7. Select specific columns and store in S3",
          answer: "df.select(\"name\", \"amount\").write.parquet(\"s3://bucket/output/\")"
        },
        {
          question: "8. Append data to existing S3 dataset",
          answer: "df.write.mode(\"append\").parquet(\"s3://bucket/output/\")"
        }
      ],
      note: "In real projects, IAM roles and proper partitioning are critical."
    },

    // 🎯 QUIZ
    quiz: [
      {
        question: "S3 type?",
        options: ["DB", "Storage", "Compute", "Network"],
        answer: 1,
        explanation: "S3 is storage.",
        difficulty: "easy"
      }
    ],

    coreConcept: {
      thinking: "Store unlimited data in cloud with high durability",
      awsMapping: "S3 = Object Storage (Buckets + Objects + Keys)"
    },

    realTimeScenario: {
      sources: ["CSV Files", "JSON Data", "Parquet Files", "Images", "Videos"],
      problem: "Where to store massive amounts of data safely and cost-effectively?",
      wrongApproach: [
        "Using local storage (limited capacity)",
        "Storing directly in database (expensive)",
        "No backup or disaster recovery plan"
      ],
      correctApproach: "Use Amazon S3 as data lake to store raw, processed, and curated data with proper folder structure and storage classes"
    },

    services: [
      {
        name: "Amazon S3",
        type: "Object Storage",
        icon: "🪣",
        whatItDoes: [
          "Stores objects (files) in buckets (containers)",
          "Provides 99.999999999% (11 9's) durability",
          "Supports unlimited storage capacity",
          "Integrates with all AWS services"
        ],
        whyUse: [
          "Cost-effective storage for big data",
          "Foundation of data lakes",
          "Highly scalable and durable",
          "Supports multiple storage classes"
        ],
        interviewLine: "S3 is used as a data lake to store raw and processed data with high durability and scalability"
      },
      {
        name: "S3 Storage Classes",
        type: "Cost Optimization",
        icon: "💰",
        whatItDoes: [
          "Standard - frequent access",
          "IA (Infrequent Access) - monthly access",
          "Glacier - archival storage"
        ],
        whyUse: [
          "Optimize cost based on access patterns",
          "Automatic lifecycle transitions"
        ],
        interviewLine: "We use different storage classes to optimize cost - Standard for frequent access, Glacier for archives"
      },
      {
        name: "S3 Bucket",
        type: "Container",
        icon: "🗄️",
        whatItDoes: [
          "Top-level container for objects",
          "Must have globally unique name",
          "Can have folders (prefixes) for organization"
        ],
        whyUse: [
          "Organize data logically",
          "Apply security policies at bucket level"
        ],
        interviewLine: "Buckets are containers that hold objects, with globally unique names and folder-like structure"
      }
    ],

    practicalSteps: [
      { step: 1, action: "Create S3 Bucket", command: "aws s3 mb s3://morphex-data-lake" },
      { step: 2, action: "Upload file to S3", command: "aws s3 cp data.csv s3://morphex-data-lake/raw/" },
      { step: 3, action: "List objects in bucket", command: "aws s3 ls s3://morphex-data-lake/raw/" },
      { step: 4, action: "Read data using PySpark", command: "df = spark.read.csv('s3://morphex-data-lake/raw/data.csv', header=True)" }
    ],

    interviewQuestions: [
      { question: "What is Amazon S3?", answer: "S3 is scalable object storage used as data lake." }
    ],

    commonMistakes: [
      "Using S3 as a database",
      "Not using proper folder structure",
      "Ignoring storage classes for cost optimization"
    ],

    memoryTrick: {
      line: "S3 = 📦, Bucket = 🗄️, Object = 📄",
      flow: "Bucket → Object → Key"
    },

    revision: "S3 = data lake storage",

    finalInterviewStatement: "S3 is scalable object storage used as data lake."
  },

  'aws-flow-1': {
    title: "Flow 1: Data Ingestion and S3 Storage Types (Data Lake Foundation)",
    subtitle: "Data Ingestion & S3 Storage Types",
    icon: "📥",
    difficulty: "Beginner",
    duration: "~50 min",
    ready: true,

    objective: "Understand data ingestion process, S3 as data lake foundation, and storage optimization strategies",

    // 🎭 COMIC STORY
    comicStory: [
      { panel: 1, text: "Imagine you run an e-commerce company 🛒" },
      { panel: 2, text: "Data is coming from:\n- Website clicks 🌐\n- Mobile app 📱\n- Payment systems 💳" },
      { panel: 3, text: "😰 Problem\n- Data is everywhere\n- Different formats\n- No central storage" },
      { panel: 4, text: "🤔 Solution\n\n👉 Step 1: Collect data (Ingestion)\n👉 Step 2: Store in S3" },
      { panel: 5, text: "✨ This is Data Ingestion Flow!" },
      { panel: 6, text: "💡 Aha Moment:\nIngestion = collecting data 📥\nS3 = storing data 📦" }
    ],

    // 📚 DEEP DIVE
    deepDive: [
      "👉 What is Data Ingestion? Data ingestion is the process of collecting data from multiple sources and storing it in a central location (S3).",
      "👉 Types of Data Ingestion: 1. Batch Ingestion 📦 - Data comes in chunks (Example: daily sales file), 2. Real-time Ingestion ⚡ - Data comes continuously (Example: user clicks)",
      "👉 What is S3 in this flow? S3 acts as: ✔ Data lake, ✔ Central storage, ✔ Input layer",
      "👉 S3 Data Organization (VERY IMPORTANT 🔥): Raw Layer: s3://bucket/raw/, Processed Layer: s3://bucket/processed/, Curated Layer: s3://bucket/curated/",
      "👉 S3 Storage Classes: Standard → frequent access, IA → infrequent access, Glacier → archive",
      "👉 Why it matters? ✔ Centralized storage, ✔ Scalable, ✔ Cost optimization",
      "👉 Real-world pipeline: API / DB / Logs → S3 (Raw) → Processing",
      "🎯 Interview Line: Data ingestion involves collecting data from multiple sources and storing it in S3 as a data lake, using batch or real-time methods with proper data organization and storage classes."
    ],

    // 📋 TYPES
    types: [
      "📥 Data Ingestion Types: Batch 📦, Real-time ⚡",
      "📦 S3 Layers: Raw, Processed, Curated",
      "💾 Storage Classes: Standard, IA, Glacier"
    ],

    // 💬 INTERACTIVE Q&A
    interactiveQA: [
      {
        question: "What is data ingestion?",
        hint: "Collecting data",
        options: [
          "Deleting data",
          "Collecting and storing data",
          "Querying data",
          "Visualizing data"
        ],
        answer: "Collecting and storing data",
        explanation: "Ingestion = bringing data into system.\n\n❌ Not querying or visualization",
        memoryTrick: "Ingestion = collect 📥"
      },
      {
        question: "Which storage is used in ingestion?",
        hint: "AWS storage",
        options: [
          "EC2",
          "S3",
          "Lambda",
          "RDS"
        ],
        answer: "S3",
        explanation: "S3 is central storage.\n\n❌ EC2 = compute\n❌ RDS = database",
        memoryTrick: "S3 = storage 📦"
      },
      {
        question: "Batch ingestion means?",
        hint: "Time-based",
        options: [
          "Continuous",
          "One-time chunks",
          "Manual",
          "Random"
        ],
        answer: "One-time chunks",
        explanation: "Batch = scheduled loads.\n\nExample: daily file",
        memoryTrick: "Batch = chunks 📦"
      },
      {
        question: "Real-time ingestion?",
        hint: "Continuous",
        options: [
          "Delayed",
          "Continuous streaming",
          "Manual upload",
          "Static data"
        ],
        answer: "Continuous streaming",
        explanation: "Real-time = live data flow.\n\nExample: clickstream",
        memoryTrick: "Realtime = live ⚡"
      },
      {
        question: "What is raw layer?",
        hint: "Initial data",
        options: [
          "Processed data",
          "Original unprocessed data",
          "Deleted data",
          "Aggregated data"
        ],
        answer: "Original unprocessed data",
        explanation: "Raw = untouched data.\n\nUsed for reprocessing.",
        memoryTrick: "Raw = original 📥"
      },
      {
        question: "Interview Trap: Why use S3 layers?",
        hint: "Organization",
        options: [
          "No reason",
          "Better organization and pipeline flow",
          "Only for cost",
          "Only for UI"
        ],
        answer: "Better organization and pipeline flow",
        explanation: "Layers help:\n✔ Manage data lifecycle\n✔ Improve clarity\n\n👉 Very important in real projects",
        memoryTrick: "Layers = organized 📂"
      }
    ],

    // 💻 CODING CHALLENGE
    codingChallenge: {
      title: "Data Ingestion + S3 Practice",
      scenario: "Load and manage data in S3",
      thinkingApproach: [
        "Identify source",
        "Choose ingestion type",
        "Define S3 path",
        "Load data",
        "Organize layers",
        "Validate output"
      ],
      questions: [
        {
          question: "1. Read data from S3",
          answer: "df = spark.read.csv(\"s3://bucket/raw/data.csv\", header=True)"
        },
        {
          question: "2. Write raw data to S3",
          answer: "df.write.parquet(\"s3://bucket/raw/\")"
        },
        {
          question: "3. Move data to processed layer",
          answer: "df.write.parquet(\"s3://bucket/processed/\")"
        },
        {
          question: "4. Filter and store curated data",
          answer: "df.filter(\"amount > 100\").write.parquet(\"s3://bucket/curated/\")"
        },
        {
          question: "5. Partition data by date",
          answer: "df.write.partitionBy(\"date\").parquet(\"s3://bucket/raw/\")"
        },
        {
          question: "6. Count records",
          answer: "df.count()"
        },
        {
          question: "7. Append new data",
          answer: "df.write.mode(\"append\").parquet(\"s3://bucket/raw/\")"
        },
        {
          question: "8. Convert CSV to Parquet",
          answer: "df = spark.read.csv(\"s3://bucket/raw/data.csv\", header=True)\ndf.write.parquet(\"s3://bucket/processed/\")"
        }
      ],
      note: "Always organize data in raw → processed → curated layers."
    },

    // 🎯 QUIZ
    quiz: [
      {
        question: "Ingestion?",
        options: ["Collect", "Delete", "Query", "UI"],
        answer: 0,
        explanation: "Ingestion = collect data.",
        difficulty: "easy"
      },
      {
        question: "Storage?",
        options: ["S3", "EC2", "Lambda", "None"],
        answer: 0,
        explanation: "S3 stores data.",
        difficulty: "easy"
      },
      {
        question: "Batch?",
        options: ["Chunks", "Live", "None", "Loop"],
        answer: 0,
        explanation: "Batch = chunk.",
        difficulty: "easy"
      },
      {
        question: "Realtime?",
        options: ["Live", "Batch", "None", "Loop"],
        answer: 0,
        explanation: "Realtime = streaming.",
        difficulty: "medium"
      },
      {
        question: "Raw?",
        options: ["Original", "Processed", "None", "Loop"],
        answer: 0,
        explanation: "Raw = original data.",
        difficulty: "medium"
      },
      {
        question: "Processed?",
        options: ["Cleaned", "Raw", "None", "Loop"],
        answer: 0,
        explanation: "Processed = cleaned.",
        difficulty: "medium"
      },
      {
        question: "Curated?",
        options: ["Final", "Raw", "None", "Loop"],
        answer: 0,
        explanation: "Curated = final data.",
        difficulty: "hard"
      },
      {
        question: "Glacier?",
        options: ["Archive", "Fast", "None", "Loop"],
        answer: 0,
        explanation: "Glacier = archive.",
        difficulty: "hard"
      },
      {
        question: "Layers?",
        options: ["Organize", "Delete", "None", "Loop"],
        answer: 0,
        explanation: "Layers organize data.",
        difficulty: "hard"
      }
    ],

    coreConcept: {
      thinking: "First STORE then PROCESS",
      awsMapping: "Source -> S3 (Raw Layer)"
    },

    realTimeScenario: {
      sources: ["Oracle Database", "CSV Files", "APIs"],
      problem: "Where should incoming data be stored?",
      wrongApproach: [
        "Directly storing in database",
        "Processing data immediately"
      ],
      correctApproach: "Store data in S3 raw layer before any processing"
    },

    services: [
      {
        name: "Amazon S3",
        type: "Storage (Data Lake)",
        icon: "🪣",
        whatItDoes: [
          "Stores files like CSV, JSON, Parquet",
          "Provides unlimited scalable storage",
          "Ensures high durability"
        ],
        whyUse: [
          "Cost-effective storage",
          "Central data lake",
          "Scalable for big data"
        ],
        interviewLine: "S3 is used as raw data lake to store incoming data before processing"
      },
      {
        name: "AWS DMS",
        type: "Data Ingestion / Migration",
        icon: "🔄",
        whatItDoes: [
          "Moves data from source databases to AWS",
          "Supports real-time replication"
        ],
        whyUse: [
          "No manual coding required",
          "Supports continuous data ingestion"
        ],
        interviewLine: "DMS is used to continuously ingest data from source systems into S3"
      },
      {
        name: "IAM",
        type: "Security",
        icon: "🔐",
        whatItDoes: [
          "Manages access permissions",
          "Controls who can access resources"
        ],
        whyUse: [
          "Ensures secure access",
          "Implements least privilege principle"
        ],
        interviewLine: "IAM roles are used to securely allow services to access S3"
      }
    ],

    practicalSteps: [
      { step: 1, action: "Create S3 Bucket", command: "aws s3 mb s3://morphex-raw" },
      { step: 2, action: "Upload File", command: "aws s3 cp data.csv s3://morphex-raw/raw/" },
      { step: 3, action: "Verify Structure", command: "morphex-raw/raw/data.csv" }
    ],

    interviewQuestions: [
      { question: "Where do you store incoming data?", answer: "We store incoming data in Amazon S3 as raw layer to ensure scalability, durability, and preserve original data for reprocessing" },
      { question: "Why S3 instead of database?", answer: "S3 is cost-effective and scalable for large data, while databases are expensive and not suitable for raw storage" },
      { question: "What is raw layer?", answer: "Raw layer stores original unprocessed data exactly as received from source" },
      { question: "What if data gets corrupted?", answer: "We can reprocess data from raw layer stored in S3" },
      { question: "What is AWS DMS?", answer: "AWS DMS is used to migrate or replicate data from source systems into AWS services like S3" },
      { question: "Batch vs real-time ingestion?", answer: "Batch ingestion loads data at intervals, while real-time ingestion continuously streams data" },
      { question: "How do you secure S3?", answer: "Using IAM roles and policies with least privilege principle" },
      { question: "What is a bucket?", answer: "A bucket is a container in S3 used to store objects (files)" },
      { question: "Explain real project usage", answer: "We used DMS to ingest data from Oracle into S3 raw layer, ensuring scalability and easy reprocessing" }
    ],

    commonMistakes: [
      "Directly storing data in database",
      "Not maintaining raw layer",
      "No security control using IAM",
      "Mixing raw and processed data"
    ],

    memoryTrick: {
      line: "👉 Ingestion = collect 📥\n👉 S3 = store 📦\n👉 Batch = chunks 📦\n👉 Realtime = live ⚡\n👉 Raw = original 📥\n👉 Curated = final 📊",
      flow: "Source -> S3"
    },

    revision: "Ingestion = collect data, S3 = store in layers (raw → processed → curated)",

    finalInterviewStatement: "Data ingestion is the process of collecting data from multiple sources and storing it in S3 as a data lake. It can be batch or real-time, and data is organized into raw, processed, and curated layers for efficient processing and analytics."
  },

  'aws-flow-2': {
    title: "Flow 2: Data Organization (Structuring Data for Efficient Processing & Querying)",
    subtitle: "Structuring Data for Efficient Processing & Querying",
    icon: "📂",
    difficulty: "Beginner",
    duration: "~50 min",
    ready: true,

    objective: "Understand how to structure data in S3 using proper folder design, partitioning, and file formats for performance and cost optimization",

    // 🎭 COMIC STORY
    comic: `📖 1
Imagine you have 1 million files in S3 📦
All dumped in one folder: s3://bucket/data/

file1.csv, file2.json, file3.parquet...

📖 2
😰 Problem
- Query takes 10 minutes (scans all files!)
- Can't find specific data
- High cost (scans everything)
- Athena query fails ❌
- Glue job is slow 🐌

📖 3
🤔 Solution

Organize data properly!

Use:
✔ Folder structure (layers)
✔ Partitioning (year/month/day)
✔ File format (Parquet)
✔ Naming convention

📖 4
📂 Proper Structure:

s3://bucket/
  ├── raw/          → Original data
  ├── processed/   → Cleaned data
  └── curated/     → Business-ready

With partitioning:
s3://bucket/curated/sales/
  year=2024/month=01/day=15/
    sales_data.parquet

📖 5
✨ Result:
✔ Query time: 10 min → 10 seconds! ⚡
✔ Cost reduced by 80%
✔ Easy to find data
✔ Athena scans only needed partitions
✔ Glue jobs run faster

📖 6
💡 Aha Moment:
Bad organization = slow + expensive 🐢
s3://bucket/all_files/

Good organization = fast + cheap 🚀
s3://bucket/curated/sales/year=2024/month=01/

✨ Organization = Performance!`,

    // 📚 DEEP DIVE
    deepDive: [
      "👉 What is Data Organization? Data organization is the process of structuring data in S3 to make it efficient for processing and querying.",
      "👉 Key Concepts (VERY IMPORTANT 🔥): 1. Folder Structure (Layers) - s3://bucket/ ├── raw/ ├── processed/ └── curated/ ✔ Raw → original data, ✔ Processed → cleaned, ✔ Curated → business-ready",
      "👉 2. Partitioning (Performance Booster 🔥): Example: s3://bucket/sales/year=2024/month=01/ ✔ Reduces data scan, ✔ Faster queries",
      "👉 3. File Format: ✔ Parquet → best (columnar, compressed), ✔ CSV → slow, ✔ JSON → semi-structured",
      "👉 4. File Size Optimization: ✔ Ideal size: 100MB – 1GB, ❌ Too small → performance issue, ❌ Too large → slow processing",
      "👉 5. Naming Convention: ✔ Consistent naming, ✔ Easy navigation. Example: sales_2024_01.parquet",
      "👉 Why it matters? ✔ Faster queries (Athena), ✔ Lower cost, ✔ Better pipeline design",
      "👉 Real-world: Bad: s3://bucket/data1.csv, data2.csv, random files ❌ | Good: s3://bucket/curated/sales/year=2024/month=01/ ✅",
      "🎯 Interview Line: Data organization involves structuring data in S3 using layers, partitioning, optimized file formats, and proper naming conventions to improve performance and scalability."
    ],

    // 📋 TYPES
    types: [
      "📂 Organization Layers: Raw, Processed, Curated",
      "📊 Optimization: Partitioning, File Format (Parquet), File Size",
      "📛 Naming: Standardized naming convention"
    ],

    // 💬 INTERACTIVE Q&A
    interactiveQA: [
      {
        question: "Why is data organization important?",
        hint: "Performance",
        options: [
          "For UI",
          "For faster queries and better structure",
          "For deleting data",
          "No reason"
        ],
        answer: "For faster queries and better structure",
        explanation: "Organized data:\n✔ Faster access\n✔ Easy maintenance\n\n❌ Not for UI or deletion",
        memoryTrick: "Organize = fast ⚡"
      },
      {
        question: "What is partitioning?",
        hint: "Divide data",
        options: [
          "Deleting data",
          "Splitting data into folders based on column",
          "Sorting rows",
          "Merging tables"
        ],
        answer: "Splitting data into folders based on column",
        explanation: "Partitioning:\n✔ Reduces scan\n✔ Improves performance\n\nExample: year=2024",
        memoryTrick: "Partition = folders 📂"
      },
      {
        question: "Best file format for analytics?",
        hint: "Columnar",
        options: [
          "CSV",
          "JSON",
          "Parquet",
          "TXT"
        ],
        answer: "Parquet",
        explanation: "Parquet:\n✔ Columnar\n✔ Compressed\n✔ Fast\n\n❌ CSV → slow scanning",
        memoryTrick: "Parquet = fast 🚀"
      },
      {
        question: "Why avoid small files?",
        hint: "Performance",
        options: [
          "No issue",
          "Slows processing",
          "Faster",
          "Reduces cost"
        ],
        answer: "Slows processing",
        explanation: "Small files:\n❌ High overhead\n❌ Slow Spark jobs\n\n👉 Known issue in big data",
        memoryTrick: "Small files = bad ❌"
      },
      {
        question: "What is curated layer?",
        hint: "Final data",
        options: [
          "Raw data",
          "Cleaned but not final",
          "Business-ready data",
          "Deleted data"
        ],
        answer: "Business-ready data",
        explanation: "Curated:\n✔ Ready for dashboard\n✔ Final output\n\nUsed by business teams",
        memoryTrick: "Curated = final 📊"
      },
      {
        question: "Interview Trap: Why not use CSV?",
        hint: "Performance",
        options: [
          "Faster",
          "No compression",
          "Better than Parquet",
          "Used for partitioning"
        ],
        answer: "No compression",
        explanation: "CSV:\n❌ No compression\n❌ Row-based\n❌ Slow\n\n👉 Avoid in big data systems",
        memoryTrick: "CSV = slow 🐢"
      }
    ],

    // 💻 CODING CHALLENGE
    codingChallenge: {
      title: "Data Organization Practice",
      scenario: "Organize data efficiently in S3",
      thinkingApproach: [
        "Identify data type",
        "Choose correct format",
        "Apply partitioning",
        "Optimize file size",
        "Store in correct layer",
        "Validate performance"
      ],
      questions: [
        {
          question: "1. Write data in Parquet format",
          answer: "df.write.parquet(\"s3://bucket/processed/\")"
        },
        {
          question: "2. Partition data by year",
          answer: "df.write.partitionBy(\"year\").parquet(\"s3://bucket/data/\")"
        },
        {
          question: "3. Convert CSV to Parquet",
          answer: "df = spark.read.csv(\"s3://bucket/raw/data.csv\", header=True)\ndf.write.parquet(\"s3://bucket/processed/\")"
        },
        {
          question: "4. Filter and store curated data",
          answer: "df.filter(\"amount > 100\").write.parquet(\"s3://bucket/curated/\")"
        },
        {
          question: "5. Append optimized data",
          answer: "df.write.mode(\"append\").parquet(\"s3://bucket/processed/\")"
        },
        {
          question: "6. Count records",
          answer: "df.count()"
        },
        {
          question: "7. Select specific columns",
          answer: "df.select(\"name\", \"amount\").write.parquet(\"s3://bucket/processed/\")"
        },
        {
          question: "8. Repartition data",
          answer: "df.repartition(4).write.parquet(\"s3://bucket/processed/\")"
        }
      ],
      note: "Always use Parquet + partitioning for performance."
    },

    // 🎯 QUIZ
    quiz: [
      {
        question: "Partition?",
        options: ["Folder", "Row", "Delete", "None"],
        answer: 0,
        explanation: "Partition = folder-based split.",
        difficulty: "easy"
      },
      {
        question: "Best format?",
        options: ["CSV", "JSON", "Parquet", "TXT"],
        answer: 2,
        explanation: "Parquet is optimized.",
        difficulty: "easy"
      },
      {
        question: "Small files?",
        options: ["Good", "Bad", "None", "Loop"],
        answer: 1,
        explanation: "Small files degrade performance.",
        difficulty: "easy"
      },
      {
        question: "Curated?",
        options: ["Final", "Raw", "None", "Loop"],
        answer: 0,
        explanation: "Curated is final layer.",
        difficulty: "medium"
      },
      {
        question: "Raw?",
        options: ["Original", "Final", "None", "Loop"],
        answer: 0,
        explanation: "Raw = original.",
        difficulty: "medium"
      },
      {
        question: "Processed?",
        options: ["Cleaned", "Raw", "None", "Loop"],
        answer: 0,
        explanation: "Processed = cleaned.",
        difficulty: "medium"
      },
      {
        question: "Partition benefit?",
        options: ["Speed", "Delete", "UI", "None"],
        answer: 0,
        explanation: "Partition improves speed.",
        difficulty: "hard"
      },
      {
        question: "CSV issue?",
        options: ["Slow", "Fast", "None", "Loop"],
        answer: 0,
        explanation: "CSV is slow.",
        difficulty: "hard"
      },
      {
        question: "Core?",
        options: ["Yes", "No", "None", "Loop"],
        answer: 0,
        explanation: "Very important concept.",
        difficulty: "hard"
      }
    ],

    coreConcept: {
      thinking: "Clean and organize data before processing",
      awsMapping: "S3 (raw -> processed -> curated) + Partitioning"
    },

    realTimeScenario: {
      problem: "Data is stored in S3 but files are messy and difficult to query efficiently",
      wrongApproach: [
        "Storing all files in one folder",
        "No structure or naming convention",
        "No partitioning"
      ],
      correctApproach: "Use proper folder structure (raw, processed, curated) and partition data based on columns like date, region, etc."
    },

    services: [
      {
        name: "Amazon S3",
        type: "Storage (Data Lake)",
        icon: "🪣",
        whatItDoes: [
          "Stores structured and unstructured data",
          "Supports hierarchical folder-like structure",
          "Works with query engines like Athena"
        ],
        whyUse: [
          "Organizes large datasets efficiently",
          "Improves query performance with partitioning",
          "Reduces cost when querying data"
        ],
        interviewLine: "We use S3 partitioning and structured folders to optimize query performance and reduce cost"
      },
      {
        name: "AWS Athena",
        type: "Query Engine",
        icon: "🔍",
        whatItDoes: [
          "Runs SQL queries directly on S3 data",
          "Reads only required partitions"
        ],
        whyUse: [
          "Serverless querying",
          "Cost based on data scanned"
        ],
        interviewLine: "Athena benefits from partitioning as it scans only required data, reducing cost and improving performance"
      }
    ],

    practicalSteps: [
      {
        step: 1,
        action: "Create folder structure in S3",
        command: "morphex-data-lake/\n  ├── raw/\n  ├── processed/\n  └── curated/"
      },
      {
        step: 2,
        action: "Apply partitioning (example)",
        command: "s3://morphex-data-lake/raw/sales/year=2025/month=04/day=07/data.csv"
      },
      {
        step: 3,
        action: "Upload partitioned data",
        command: "aws s3 cp data.csv s3://morphex-data-lake/raw/sales/year=2025/month=04/day=07/"
      }
    ],

    interviewQuestions: [
      { question: "Why do we need folder structure in S3?", answer: "Folder structure helps organize data into layers like raw, processed, and curated, making it easier to manage and process data" },
      { question: "What is partitioning in S3?", answer: "Partitioning is dividing data into smaller parts based on columns like date or region to improve query performance" },
      { question: "Why is partitioning important?", answer: "Partitioning reduces data scanned by query engines like Athena, improving performance and reducing cost" },
      { question: "What happens if you don't use partitioning?", answer: "Query performance becomes slow and cost increases because full data is scanned" },
      { question: "How does Athena use partitioning?", answer: "Athena reads only relevant partitions instead of scanning the entire dataset" },
      { question: "What is raw, processed, curated?", answer: "Raw is original data, processed is cleaned data, and curated is business-ready data" },
      { question: "Give real project example", answer: "We stored sales data in S3 using partitioning by year and month, which improved Athena query performance and reduced cost significantly" },
      { question: "Which columns should be used for partitioning?", answer: "Columns with high filtering usage like date, region, or category are ideal for partitioning" },
      { question: "Is partitioning mandatory?", answer: "Not mandatory, but highly recommended for performance and cost optimization" },
      { question: "Difference between folder and partition?", answer: "Folders are logical grouping, while partitions are structured folders used by query engines to optimize data scanning" }
    ],

    commonMistakes: [
      "Storing all data in a single folder",
      "Not using partitioning",
      "Using wrong partition columns",
      "Mixing raw and processed data"
    ],

    memoryTrick: {
      line: "👉 Raw = original 📥\n👉 Processed = cleaned 🧼\n👉 Curated = final 📊\n👉 Partition = folders 📂\n👉 Parquet = fast 🚀\n👉 Small files = bad ❌",
      flow: "raw -> processed -> curated"
    },

    revision: "Organize data using layers, partitioning, and Parquet for performance",

    finalInterviewStatement: "Data organization involves structuring data in S3 using layered architecture, partitioning, optimized file formats like Parquet, and proper naming conventions to ensure efficient querying and scalability."
  },

  'aws-glue-etl': {
    title: "AWS Glue ETL (Serverless Data Integration Engine)",
    subtitle: "Serverless Data Integration Engine",
    icon: "🔧",
    difficulty: "Intermediate",
    duration: "~55 min",
    ready: true,

    objective: "Understand AWS Glue as serverless ETL service for data extraction, transformation, and loading",

    // 🎭 COMIC STORY
    comic: `📖 1
Imagine you're a Data Engineer at a company 🏢
Raw data comes from 5 sources daily:
- MySQL database 🗄️
- CSV files 📄
- JSON logs 📋
- API data 🌐
- Excel sheets 📊

📖 2
😰 Problem
- Data is messy (nulls, duplicates, wrong formats)
- Different formats (CSV, JSON, Parquet)
- Need to clean and combine all data
- Manual work takes 8 hours daily! 😫
- Need to load into Redshift for analytics

📖 3
🤔 Solution

Use AWS Glue ETL!

What is ETL?
E = Extract (get data from sources)
T = Transform (clean, filter, join)
L = Load (store in target)

📖 4
🔧 AWS Glue Components:

1️⃣ Glue Crawler → Scans S3, creates schema
2️⃣ Data Catalog → Stores metadata (table structure)
3️⃣ Glue Job → Runs PySpark ETL code
4️⃣ Trigger → Schedules jobs (daily, hourly)

Flow:
S3 (raw) → Crawler → Catalog → Glue Job → S3/Redshift

📖 5
✨ Result:
✔ Serverless (no servers to manage!)
✔ Auto-scaling (handles any data size)
✔ 8 hours → 15 minutes automated ⚡
✔ Clean, transformed data ready for analytics
✔ Scheduled to run daily automatically

📖 6
💡 Aha Moment:
Without Glue = Manual ETL (slow, error-prone) 😵
With Glue = Automated ETL pipeline (fast, reliable) 🚀

Glue = Your serverless data cleaner + transformer!

Real-world: S3 → Glue → Redshift → QuickSight`,

    // 📚 DEEP DIVE
    deepDive: [
      "👉 What is AWS Glue? AWS Glue is a serverless ETL service used to extract, transform, and load data.",
      "👉 Components: Glue Job → runs ETL code, Crawler → scans data and creates schema, Data Catalog → metadata store, Trigger → schedule jobs",
      "👉 ETL Flow: S3 → Glue Crawler → Glue Job → S3/Redshift",
      "👉 Features: Serverless (no infra), Auto schema detection, Scalable, PySpark based",
      "👉 Why it matters? Automates data pipelines, Reduces manual effort, Integrates with S3",
      "👉 Real-world: Data lake pipelines, Batch processing, Data cleaning",
      "🎯 Interview Line: AWS Glue is a serverless ETL service that automates data discovery, transformation, and loading using PySpark."
    ],

    // 📋 TYPES
    types: [
      "⚙️ Glue Job → ETL processing",
      "🔍 Crawler → schema detection",
      "📚 Data Catalog → metadata",
      "⏰ Trigger → scheduling"
    ],

    // 💬 INTERACTIVE Q&A
    interactiveQA: [
      {
        question: "What is AWS Glue?",
        hint: "ETL",
        options: ["Storage", "ETL", "Compute", "DB"],
        answer: "ETL",
        explanation: "Glue is ETL service.",
        memoryTrick: "Glue = ETL ⚙️"
      }
    ],

    // 💻 CODING CHALLENGE
    codingChallenge: {
      title: "Glue ETL Job Example",
      scenario: "Read from S3 → transform → write back",
      thinkingApproach: [
        "Read S3 data",
        "Transform using PySpark",
        "Write output"
      ],
      question: "Basic Glue job",
      solution: "df = spark.read.csv(\"s3://bucket/data.csv\", header=True)\n\ndf_filtered = df.filter(\"amount > 100\")\n\ndf_filtered.write.parquet(\"s3://bucket/output/\")"
    },

    // 🎯 QUIZ (12 questions: 4 Glue + 8 S3 advanced)
    quiz: [
      {
        question: "Which component automatically detects schema in AWS Glue?",
        options: ["Job", "Crawler", "Trigger", "Athena"],
        answer: 1,
        explanation: "✅ Correct: Crawler → scans data & creates schema\n\n❌ Job → runs ETL logic\n❌ Trigger → schedules jobs\n❌ Athena → query engine",
        difficulty: "easy"
      },
      {
        question: "Where does Glue store metadata?",
        options: ["S3", "Data Catalog", "EC2", "RDS"],
        answer: 1,
        explanation: "✅ Correct: Data Catalog\n\n❌ S3 → stores files\n❌ EC2 → compute\n❌ RDS → database",
        difficulty: "easy"
      },
      {
        question: "Glue is based on which engine?",
        options: ["Java", "SQL", "PySpark", "C++"],
        answer: 2,
        explanation: "✅ Correct: PySpark\n\nGlue internally uses Spark for processing.",
        difficulty: "easy"
      },
      {
        question: "Glue is serverless means?",
        options: [
          "No servers exist",
          "No need to manage infrastructure",
          "Runs only locally",
          "No execution"
        ],
        answer: 1,
        explanation: "✅ Correct: No infra management\n\nAWS handles compute automatically.",
        difficulty: "medium"
      },
      {
        question: "What happens if you store millions of small files in S3?",
        options: [
          "Improves performance",
          "No effect",
          "Degrades performance",
          "Deletes files"
        ],
        answer: 2,
        explanation: "✅ Correct: Degrades performance\n\nSmall files cause:\n❌ High metadata overhead\n❌ Slow processing\n\n👉 Known as small file problem",
        difficulty: "medium"
      },
      {
        question: "Best file format for S3 analytics?",
        options: ["CSV", "JSON", "Parquet", "TXT"],
        answer: 2,
        explanation: "✅ Correct: Parquet\n\n✔ Columnar\n✔ Compressed\n✔ Faster queries\n\n❌ CSV/JSON → row-based → slower",
        difficulty: "medium"
      },
      {
        question: "What improves S3 query performance?",
        options: [
          "More files",
          "Partitioning",
          "Random naming",
          "Deleting metadata"
        ],
        answer: 1,
        explanation: "✅ Correct: Partitioning\n\nReduces scan size → faster queries.",
        difficulty: "medium"
      },
      {
        question: "What is S3 lifecycle rule?",
        options: [
          "Delete bucket",
          "Move data between storage classes",
          "Run queries",
          "Create schema"
        ],
        answer: 1,
        explanation: "✅ Correct: lifecycle\n\nUsed for:\n✔ Cost optimization\n✔ Archival\n\n❌ Not for queries/schema",
        difficulty: "hard"
      },
      {
        question: "Why use IAM roles with S3?",
        options: [
          "For UI",
          "Security and access control",
          "Performance",
          "Storage"
        ],
        answer: 1,
        explanation: "✅ Correct: Security\n\nControls:\n✔ Who can access data\n✔ Permissions\n\n👉 Very important in real projects",
        difficulty: "hard"
      },
      {
        question: "What is S3 versioning?",
        options: [
          "Delete file",
          "Keep multiple versions of object",
          "Encrypt data",
          "Partition data"
        ],
        answer: 1,
        explanation: "✅ Correct: versioning\n\nHelps:\n✔ Recover deleted files\n✔ Track changes",
        difficulty: "hard"
      },
      {
        question: "What is prefix in S3?",
        options: [
          "File type",
          "Folder-like path",
          "Query",
          "Index"
        ],
        answer: 1,
        explanation: "✅ Correct: prefix\n\nUsed to simulate folder structure.",
        difficulty: "hard"
      },
      {
        question: "What is best practice for S3 performance?",
        options: [
          "Use single file",
          "Use partitioning + proper file size",
          "Avoid folders",
          "Use random format"
        ],
        answer: 1,
        explanation: "✅ Correct: partition + proper size\n\n✔ 100MB–1GB files ideal\n✔ Partitioned data\n\n❌ Single file → slow\n❌ Random format → inefficient",
        difficulty: "hard"
      }
    ],

    coreConcept: {
      thinking: "Take raw data → clean → transform → make usable",
      awsMapping: "S3 (raw) -> Glue -> S3 (processed)"
    },

    realTimeScenario: {
      sources: ["S3 Raw Data", "Databases", "Streaming Data"],
      problem: "Raw data is unclean and not usable for business. It contains nulls, duplicates, and incorrect formats",
      wrongApproach: [
        "Using raw data directly for reporting",
        "Running full load every time",
        "No transformation logic"
      ],
      correctApproach: "Use AWS Glue to clean, transform, and process data, and store it in processed layer with incremental logic"
    },

    services: [
      {
        name: "AWS Glue",
        type: "ETL (Extract, Transform, Load)",
        icon: "🔧",
        whatItDoes: [
          "Reads data from S3",
          "Applies transformations using Spark",
          "Writes processed data back to S3 or Redshift"
        ],
        whyUse: [
          "Serverless ETL service",
          "Built on Apache Spark",
          "Easy integration with S3 and Data Catalog"
        ],
        interviewLine: "Glue is used to process raw data into structured format using ETL logic"
      },
      {
        name: "Glue Crawler",
        type: "Metadata Discovery",
        icon: "🔍",
        whatItDoes: [
          "Scans data in S3",
          "Infers schema automatically",
          "Creates tables in Data Catalog"
        ],
        whyUse: [
          "Automates schema detection",
          "Saves manual effort"
        ],
        interviewLine: "Crawler is used to automatically detect schema and create tables in Data Catalog"
      },
      {
        name: "Glue Data Catalog",
        type: "Metadata Repository",
        icon: "📋",
        whatItDoes: [
          "Stores table definitions",
          "Acts as central metadata layer"
        ],
        whyUse: [
          "Used by Athena, Glue, Redshift Spectrum",
          "Central schema management"
        ],
        interviewLine: "Data Catalog stores metadata which is used by multiple AWS services"
      }
    ],

    practicalSteps: [
      { step: 1, action: "Run Glue Crawler on raw data", command: "Result: Creates table in Data Catalog" },
      { step: 2, action: "Create Glue Job", command: "Read from raw S3 → Apply transformations → Write to processed S3" },
      { step: 3, action: "Enable Job Bookmark", command: "Purpose: Process only new data (incremental load)" },
      { step: 4, action: "Run Glue Job", command: "Result: Processed data stored in processed layer" }
    ],

    interviewQuestions: [
      { question: "What is AWS Glue?", answer: "AWS Glue is a serverless ETL service that automates data extraction, transformation, and loading using PySpark. It integrates with S3 for storage and uses crawlers and data catalog for schema management." }
    ],

    commonMistakes: [
      "Using raw data directly",
      "Running full load every time",
      "Not using job bookmarks",
      "Ignoring data quality issues"
    ],

    memoryTrick: {
      line: "Glue = ETL ⚙️, Crawler = schema 🔍, Catalog = metadata 📚, Trigger = schedule ⏰, Parquet = fast 🚀, Small files = bad ❌",
      flow: "S3 (raw) -> Glue -> S3 (processed)"
    },

    revision: "Glue = serverless ETL using PySpark with S3 integration",

    finalInterviewStatement: "AWS Glue is a serverless ETL service that automates data extraction, transformation, and loading using PySpark. It integrates with S3 for storage and uses crawlers and data catalog for schema management."
  },

  'aws-glue-components': {
    title: "AWS Glue Components – Crawler, Data Catalog, Trigger",
    subtitle: "Crawler, Data Catalog, Trigger",
    icon: "🔧",
    difficulty: "Intermediate",
    duration: "~50 min",
    ready: true,

    objective: "Understand AWS Glue components - Crawler for schema detection, Data Catalog for metadata storage, and Triggers for automation",

    // 🎭 COMIC STORY
    // 🎭 COMIC STORY
    comic: `📖 1
Imagine you're building an ETL pipeline 🏗️
You have 100 CSV files in S3 with different structures
sales_2024.csv, users.csv, orders.csv...

How do you know what columns each file has? 🤔

📖 2
😰 Problem
- Don't know schema (columns, data types)
- Need to manually check each file
- Schema changes frequently
- Need to run ETL jobs daily
- No automation, everything manual! 😫

📖 3
🤔 Solution

Use AWS Glue Components!

3 Key Components:
1️⃣ Crawler 🔍
2️⃣ Data Catalog 📚
3️⃣ Trigger ⏰

📖 4
🔧 How They Work:

🔍 Crawler:
- Scans S3 files automatically
- Detects schema (columns, types)
- Creates tables in Data Catalog
- Example: Finds "user_id (int), name (string)"

📚 Data Catalog:
- Central metadata repository
- Stores table definitions
- Used by Glue, Athena, Redshift
- Like a library index 📖

⏰ Trigger:
- Schedules jobs (daily, hourly)
- Event-based execution
- Chains multiple jobs
- Example: "Run ETL every day at 2 AM"

📖 5
✨ Complete Flow:

Step 1: Crawler scans S3 → detects schema
Step 2: Catalog stores metadata
Step 3: Glue Job reads from Catalog
Step 4: Trigger runs job automatically
Step 5: Repeat daily! 🔄

Result:
✔ No manual schema detection
✔ Automated pipeline
✔ Schema changes handled automatically
✔ Jobs run on schedule

📖 6
💡 Aha Moment:

Without Components = Manual work 😵
- Check schema manually
- Update code for changes
- Run jobs manually

With Components = Fully Automated 🚀
- Crawler finds schema 🕵️
- Catalog stores metadata 📚
- Trigger runs jobs ⏰

Real-world: S3 → Crawler → Catalog → Glue Job (Trigger) → Redshift`,

    deepDive: [
      "👉 1. Crawler (Schema Detection): Crawler scans data (S3, DB) and detects schema (columns, types), creates tables automatically. Example: CSV → columns identified automatically",
      "👉 2. Data Catalog (Metadata Store): Stores table definitions, schema, location (S3 path). Acts like central metadata repository. Used by Glue, Athena, Redshift",
      "👉 3. Trigger (Automation): Used to schedule jobs, run jobs on events, chain workflows. Types: Time-based (cron), Event-based",
      "👉 Why it matters? Automation, Schema management, Pipeline orchestration",
      "👉 Real-world pipeline: S3 → Crawler → Catalog → Glue Job → Trigger",
      "🎯 Interview Line: AWS Glue Crawler automatically detects schema, Data Catalog stores metadata, and Triggers automate job execution, enabling fully managed ETL pipelines."
    ],

    // 📋 TYPES
    types: [
      "🔍 Crawler → schema detection",
      "📚 Data Catalog → metadata store",
      "⏰ Trigger → scheduling",
      "Trigger Types: Time-based, Event-based"
    ],

    // 💬 INTERACTIVE Q&A
    interactiveQA: [
      {
        question: "What is the role of Glue Crawler?",
        hint: "Schema detection",
        options: [
          "Run ETL job",
          "Detect schema automatically",
          "Store data",
          "Delete files"
        ],
        answer: "Detect schema automatically",
        explanation: "Crawler scans data source and creates schema.\n\n❌ Job → runs ETL\n❌ Store data → S3",
        memoryTrick: "Crawler = detect 🔍"
      },
      {
        question: "Where is schema stored?",
        hint: "Metadata",
        options: [
          "S3",
          "Data Catalog",
          "EC2",
          "Lambda"
        ],
        answer: "Data Catalog",
        explanation: "Catalog stores: schema, table definitions\n\n❌ S3 → raw data",
        memoryTrick: "Catalog = store 📚"
      },
      {
        question: "What is trigger used for?",
        hint: "Automation",
        options: [
          "Data storage",
          "Scheduling jobs",
          "Schema creation",
          "Query execution"
        ],
        answer: "Scheduling jobs",
        explanation: "Trigger runs jobs automatically.\n\n❌ Schema → crawler\n❌ Query → Athena",
        memoryTrick: "Trigger = run ⏰"
      },
      {
        question: "Can crawler update schema?",
        hint: "Think evolving data",
        options: [
          "No",
          "Yes",
          "Only manually",
          "Only SQL"
        ],
        answer: "Yes",
        explanation: "Crawler can update schema when new columns appear.\n\nImportant for evolving datasets.",
        memoryTrick: "Crawler updates 🔄"
      },
      {
        question: "Which services use Data Catalog?",
        hint: "Analytics tools",
        options: [
          "Athena & Glue",
          "EC2 only",
          "Lambda only",
          "CloudWatch"
        ],
        answer: "Athena & Glue",
        explanation: "Catalog is shared metadata layer.\n\nUsed by: Athena, Glue",
        memoryTrick: "Catalog shared 📚"
      },
      {
        question: "Interview Trap: Can trigger run without job?",
        hint: "Think dependency",
        options: [
          "Yes",
          "No",
          "Sometimes",
          "Only manual"
        ],
        answer: "No",
        explanation: "Trigger needs job to execute.\n\nIt only controls execution.",
        memoryTrick: "Trigger needs job ⚙️"
      }
    ],

    // 💻 CODING CHALLENGE
    codingChallenge: {
      title: "Glue Workflow Simulation",
      scenario: "Automate ETL pipeline",
      thinkingApproach: [
        "Identify data source",
        "Use crawler for schema",
        "Store metadata in catalog",
        "Create Glue job",
        "Schedule using trigger",
        "Monitor execution"
      ],
      questions: [
        {
          question: "1. Define S3 path for crawler",
          answer: "s3://my-bucket/data/"
        },
        {
          question: "2. Create table via crawler (concept)",
          answer: "Crawler scans and creates schema automatically"
        },
        {
          question: "3. Read catalog table in PySpark",
          answer: "df = spark.sql(\"SELECT * FROM database.table\")"
        },
        {
          question: "4. Schedule job using trigger",
          answer: "Use cron expression in Glue Trigger"
        },
        {
          question: "5. Run job manually",
          answer: "Start Glue Job from console"
        },
        {
          question: "6. Chain jobs",
          answer: "Use trigger dependency"
        },
        {
          question: "7. Update schema",
          answer: "Re-run crawler"
        },
        {
          question: "8. Validate pipeline",
          answer: "Check logs in CloudWatch"
        }
      ],
      note: "Glue is mostly configuration + PySpark combined."
    },

    // 🎯 QUIZ
    quiz: [
      {
        question: "Crawler does?",
        options: ["ETL", "Schema", "Storage", "Compute"],
        answer: 1,
        explanation: "Crawler detects schema.",
        difficulty: "easy"
      },
      {
        question: "Catalog stores?",
        options: ["Data", "Metadata", "Logs", "Code"],
        answer: 1,
        explanation: "Catalog stores metadata.",
        difficulty: "easy"
      },
      {
        question: "Trigger?",
        options: ["Run jobs", "Store data", "Delete data", "None"],
        answer: 0,
        explanation: "Trigger schedules execution.",
        difficulty: "easy"
      },
      {
        question: "Schema change?",
        options: ["Crawler", "Trigger", "Job", "None"],
        answer: 0,
        explanation: "Crawler updates schema.",
        difficulty: "medium"
      },
      {
        question: "Catalog used by?",
        options: ["Athena", "EC2", "Lambda", "None"],
        answer: 0,
        explanation: "Athena uses catalog.",
        difficulty: "medium"
      },
      {
        question: "Automation?",
        options: ["Trigger", "Crawler", "S3", "None"],
        answer: 0,
        explanation: "Trigger automates jobs.",
        difficulty: "medium"
      },
      {
        question: "Metadata?",
        options: ["Catalog", "S3", "EC2", "None"],
        answer: 0,
        explanation: "Catalog stores metadata.",
        difficulty: "hard"
      },
      {
        question: "Scan data?",
        options: ["Crawler", "Trigger", "Catalog", "None"],
        answer: 0,
        explanation: "Crawler scans data.",
        difficulty: "hard"
      },
      {
        question: "Pipeline?",
        options: ["All", "None", "One", "Two"],
        answer: 0,
        explanation: "All components used.",
        difficulty: "hard"
      }
    ],

    coreConcept: {
      thinking: "Automate data discovery, schema management, and job execution",
      awsMapping: "S3 → Crawler → Data Catalog → Glue Job → Trigger"
    },

    realTimeScenario: {
      sources: ["S3 Data Lake", "Databases", "Streaming Sources"],
      problem: "Need to automatically detect schema, store metadata, and schedule ETL jobs without manual intervention",
      wrongApproach: [
        "Manually creating schema definitions",
        "Running jobs manually",
        "No centralized metadata management"
      ],
      correctApproach: "Use Crawler to auto-detect schema, Data Catalog to store metadata centrally, and Triggers to automate job execution"
    },

    services: [
      {
        name: "Glue Crawler",
        type: "Schema Detection",
        icon: "🔍",
        whatItDoes: [
          "Scans data sources (S3, databases)",
          "Automatically detects schema",
          "Creates/updates tables in Data Catalog",
          "Handles schema evolution"
        ],
        whyUse: [
          "Eliminates manual schema definition",
          "Adapts to changing data structures",
          "Saves time and reduces errors"
        ],
        interviewLine: "Crawler automatically scans data sources and creates schema definitions in the Data Catalog"
      },
      {
        name: "Glue Data Catalog",
        type: "Metadata Repository",
        icon: "📚",
        whatItDoes: [
          "Stores table definitions and schemas",
          "Acts as central metadata store",
          "Integrates with Athena, Glue, Redshift",
          "Maintains data lineage"
        ],
        whyUse: [
          "Single source of truth for metadata",
          "Enables cross-service data discovery",
          "Simplifies data governance"
        ],
        interviewLine: "Data Catalog is a centralized metadata repository used by multiple AWS analytics services"
      },
      {
        name: "Glue Trigger",
        type: "Job Automation",
        icon: "⏰",
        whatItDoes: [
          "Schedules Glue jobs",
          "Supports time-based and event-based triggers",
          "Chains multiple jobs in workflows",
          "Handles job dependencies"
        ],
        whyUse: [
          "Automates pipeline execution",
          "Reduces manual intervention",
          "Enables complex workflows"
        ],
        interviewLine: "Triggers automate Glue job execution using schedules or events, enabling orchestrated ETL workflows"
      }
    ],

    practicalSteps: [
      { step: 1, action: "Create Crawler", command: "Configure crawler to scan S3 path: s3://my-bucket/data/" },
      { step: 2, action: "Run Crawler", command: "Crawler creates table in Data Catalog with detected schema" },
      { step: 3, action: "Query Catalog", command: "SELECT * FROM glue_catalog.database.table" },
      { step: 4, action: "Create Trigger", command: "Schedule: cron(0 2 * * ? *) - runs daily at 2 AM" }
    ],

    interviewQuestions: [
      { question: "What is AWS Glue Crawler?", answer: "In AWS Glue, the Crawler is used to automatically detect schema from data sources, the Data Catalog stores metadata centrally, and Triggers are used to schedule and automate ETL jobs, enabling efficient pipeline orchestration." }
    ],

    commonMistakes: [
      "Not updating crawler when schema changes",
      "Ignoring Data Catalog for metadata management",
      "Running jobs manually instead of using triggers",
      "Not setting up proper trigger dependencies"
    ],

    memoryTrick: {
      line: "Crawler = detect 🔍, Catalog = store 📚, Trigger = run ⏰, Crawler updates 🔄, Catalog shared 📊, Trigger automates ⚙️",
      flow: "S3 → Crawler → Catalog → Trigger → Job"
    },

    revision: "Crawler detects schema, Catalog stores metadata, Trigger automates execution",

    finalInterviewStatement: "In AWS Glue, the Crawler is used to automatically detect schema from data sources, the Data Catalog stores metadata centrally, and Triggers are used to schedule and automate ETL jobs, enabling efficient pipeline orchestration."
  },

  'aws-flow-3': {
    title: "Flow 3: Data Processing using AWS Glue & PySpark (Core Transformation Engine)",
    subtitle: "Core Transformation Engine",
    icon: "⚙️",
    difficulty: "Intermediate",
    duration: "~55 min",
    ready: true,

    objective: "Understand how to process raw data using AWS Glue, apply transformations with PySpark, and implement incremental data processing",

    comic: `📖 1
You're a Data Engineer at an e-commerce company 🛒
Raw data arrives daily from multiple sources:
- Orders (CSV) - 1M records
- Users (JSON) - 500K records
- Products (Parquet) - 100K records

All stored in S3 raw/ folder

📖 2
😰 Problem with Raw Data:
- NULL values in critical columns (amount, user_id)
- Duplicate orders (same order_id multiple times)
- Wrong data types (dates as strings)
- Inconsistent formats (USD vs EUR)
- Need to join 3 datasets
- Business needs clean data for analytics! 📊

📖 3
🤔 Solution

Use AWS Glue + PySpark for Data Processing!

What is Data Processing?
Transform raw → clean → business-ready data

📖 4
⚙️ PySpark Transformations:

1️⃣ Filter: Remove invalid records
   df.filter("amount > 0")

2️⃣ Drop Nulls: Clean missing data
   df.dropna()

3️⃣ Remove Duplicates:
   df.dropDuplicates(["order_id"])

4️⃣ Join: Combine datasets
   orders.join(users, "user_id")

5️⃣ Aggregate: Calculate metrics
   df.groupBy("category").sum("amount")

📖 5
✨ Complete ETL Flow:

S3 (raw/) → Glue Job → PySpark Transformations → S3 (curated/)

Before: 1M messy records
After: 950K clean, deduplicated, joined records

Result:
✔ No nulls
✔ No duplicates
✔ Proper data types
✔ Ready for analytics
✔ Athena can query it!

📖 6
💡 Aha Moment:

Raw data = Garbage 🗑️
- Can't use for analytics
- Full of errors
- Business can't trust it

Processed data = Gold 💰
- Clean and reliable
- Ready for insights
- Powers dashboards

Real-world: S3 raw → Glue + PySpark → S3 curated → Athena → QuickSight`,
    // 📚 DEEP DIVE
    deepDive: [
      "👉 What is Data Processing? Data processing is the step where raw data is cleaned, transformed, and prepared for analysis.",
      "👉 Tools Used: ⚙️ AWS Glue → runs ETL jobs, 🔥 PySpark → processing engine",
      "👉 Common Transformations (VERY IMPORTANT 🔥): ✔ Select columns, ✔ Filter data, ✔ Handle NULLs, ✔ Remove duplicates, ✔ Joins, ✔ Aggregations, ✔ Window functions",
      "👉 Flow: S3 (Raw) → Glue Job → PySpark Transformations → S3 (Processed)",
      "👉 Why it matters? ✔ Converts useless data → useful insights, ✔ Improves data quality, ✔ Prepares data for analytics",
      "👉 Real-world example: Raw: user_id, amount, null values | Processed: cleaned, deduplicated, aggregated",
      "🎯 Interview Line: Data processing involves transforming raw data into structured, clean, and analysis-ready data using tools like AWS Glue and PySpark."
    ],

    // 📋 TYPES
    types: [
      "🔧 Transformations: Filter, Select, WithColumn, Drop",
      "🔗 Joins: Inner, Left",
      "📊 Aggregations: SUM, COUNT",
      "🪟 Advanced: Window functions"
    ],

    // 💬 INTERACTIVE Q&A
    interactiveQA: [
      {
        question: "What is data processing?",
        hint: "Transformation",
        options: [
          "Collecting data",
          "Cleaning and transforming data",
          "Storing data",
          "Deleting data"
        ],
        answer: "Cleaning and transforming data",
        explanation: "Processing converts raw data into usable format.\n\n❌ Collecting = ingestion\n❌ Storing = S3",
        memoryTrick: "Processing = clean 🧼"
      },
      {
        question: "Which service runs ETL jobs?",
        hint: "AWS",
        options: [
          "S3",
          "Glue",
          "EC2",
          "Lambda"
        ],
        answer: "Glue",
        explanation: "Glue runs ETL jobs.\n\n❌ S3 = storage\n❌ EC2 = compute",
        memoryTrick: "Glue = ETL ⚙️"
      },
      {
        question: "What is PySpark?",
        hint: "Processing engine",
        options: [
          "Database",
          "Processing framework",
          "Storage service",
          "UI tool"
        ],
        answer: "Processing framework",
        explanation: "PySpark is used for big data processing.\n\nIt runs transformations.",
        memoryTrick: "PySpark = engine 🔥"
      },
      {
        question: "Why handle NULL values?",
        hint: "Data quality",
        options: [
          "No reason",
          "Improve data quality",
          "For UI",
          "For storage"
        ],
        answer: "Improve data quality",
        explanation: "NULL values can:\n❌ Break logic\n❌ Give wrong results\n\nHandling ensures accuracy.",
        memoryTrick: "NULL = danger ⚠️"
      },
      {
        question: "What is deduplication?",
        hint: "Duplicates",
        options: [
          "Add data",
          "Remove duplicate rows",
          "Sort data",
          "Join data"
        ],
        answer: "Remove duplicate rows",
        explanation: "Duplicates cause:\n❌ Incorrect analytics\n\nRemove using distinct/dropDuplicates().",
        memoryTrick: "Dedup = remove copy ❌"
      },
      {
        question: "Interview Trap: Where does processing happen?",
        hint: "Not S3",
        options: [
          "S3",
          "Glue/PySpark",
          "Athena",
          "UI"
        ],
        answer: "Glue/PySpark",
        explanation: "S3 = storage\nProcessing = Glue + PySpark\n\n👉 Very common interview trap",
        memoryTrick: "Process = Spark 🔥"
      }
    ],

    // 💻 CODING CHALLENGE
    codingChallenge: {
      title: "PySpark Data Processing Practice",
      scenario: "Clean and transform data using PySpark",
      thinkingApproach: [
        "Understand data structure",
        "Identify issues (NULL, duplicates)",
        "Apply transformations",
        "Validate output",
        "Store processed data"
      ],
      questions: [
        {
          question: "1. Read data from S3",
          answer: "df = spark.read.csv(\"s3://bucket/raw/data.csv\", header=True)"
        },
        {
          question: "2. Select specific columns",
          answer: "df.select(\"name\", \"amount\")"
        },
        {
          question: "3. Filter data",
          answer: "df.filter(\"amount > 100\")"
        },
        {
          question: "4. Handle NULL values",
          answer: "df.fillna(0)"
        },
        {
          question: "5. Remove duplicates",
          answer: "df.dropDuplicates()"
        },
        {
          question: "6. Add new column",
          answer: "df.withColumn(\"tax\", df.amount * 0.1)"
        },
        {
          question: "7. Aggregate data",
          answer: "df.groupBy(\"category\").sum(\"amount\")"
        },
        {
          question: "8. Join two tables",
          answer: "df1.join(df2, df1.id == df2.id, \"inner\")"
        }
      ],
      note: "These transformations are used in almost every data engineering project."
    },

    // 🎯 QUIZ
    quiz: [
      {
        question: "Processing?",
        options: ["Clean", "Store", "Delete", "UI"],
        answer: 0,
        explanation: "Processing = cleaning & transforming.",
        difficulty: "easy"
      },
      {
        question: "Tool?",
        options: ["Glue", "S3", "EC2", "None"],
        answer: 0,
        explanation: "Glue runs ETL.",
        difficulty: "easy"
      },
      {
        question: "Engine?",
        options: ["PySpark", "SQL", "None", "Loop"],
        answer: 0,
        explanation: "PySpark processes data.",
        difficulty: "easy"
      },
      {
        question: "NULL?",
        options: ["Bad", "Good", "None", "Loop"],
        answer: 0,
        explanation: "NULL can break logic.",
        difficulty: "medium"
      },
      {
        question: "Duplicates?",
        options: ["Remove", "Add", "None", "Loop"],
        answer: 0,
        explanation: "Remove duplicates.",
        difficulty: "medium"
      },
      {
        question: "Join?",
        options: ["Combine", "Delete", "None", "Loop"],
        answer: 0,
        explanation: "Join combines tables.",
        difficulty: "medium"
      },
      {
        question: "Aggregation?",
        options: ["Sum", "Delete", "None", "Loop"],
        answer: 0,
        explanation: "Aggregation summarizes.",
        difficulty: "hard"
      },
      {
        question: "Core?",
        options: ["Yes", "No", "None", "Loop"],
        answer: 0,
        explanation: "Core concept.",
        difficulty: "hard"
      },
      {
        question: "Important?",
        options: ["Yes", "No", "None", "Loop"],
        answer: 0,
        explanation: "Very important.",
        difficulty: "hard"
      }
    ],

    coreConcept: {
      thinking: "Take raw data → clean → transform → make usable",
      awsMapping: "S3 (raw) -> Glue -> S3 (processed)"
    },

    realTimeScenario: {
      sources: ["S3 Raw Data", "Databases", "Streaming Data"],
      problem: "Raw data is unclean and not usable for business. It contains nulls, duplicates, and incorrect formats",
      wrongApproach: [
        "Using raw data directly for reporting",
        "Running full load every time",
        "No transformation logic"
      ],
      correctApproach: "Use AWS Glue to clean, transform, and process data, and store it in processed layer with incremental logic"
    },

    services: [
      {
        name: "AWS Glue",
        type: "ETL (Extract, Transform, Load)",
        icon: "🔧",
        whatItDoes: [
          "Reads data from S3",
          "Applies transformations using Spark",
          "Writes processed data back to S3 or Redshift"
        ],
        whyUse: [
          "Serverless ETL service",
          "Built on Apache Spark",
          "Easy integration with S3 and Data Catalog"
        ],
        interviewLine: "Glue is used to process raw data into structured format using ETL logic"
      },
      {
        name: "Glue Crawler",
        type: "Metadata Discovery",
        icon: "🔍",
        whatItDoes: [
          "Scans data in S3",
          "Infers schema automatically",
          "Creates tables in Data Catalog"
        ],
        whyUse: [
          "Automates schema detection",
          "Saves manual effort"
        ],
        interviewLine: "Crawler is used to automatically detect schema and create tables in Data Catalog"
      },
      {
        name: "Glue Data Catalog",
        type: "Metadata Repository",
        icon: "📋",
        whatItDoes: [
          "Stores table definitions",
          "Acts as central metadata layer"
        ],
        whyUse: [
          "Used by Athena, Glue, Redshift Spectrum",
          "Central schema management"
        ],
        interviewLine: "Data Catalog stores metadata which is used by multiple AWS services"
      }
    ],

    practicalSteps: [
      { step: 1, action: "Run Glue Crawler on raw data", command: "Result: Creates table in Data Catalog" },
      { step: 2, action: "Create Glue Job", command: "Read from raw S3 → Apply transformations → Write to processed S3" },
      { step: 3, action: "Enable Job Bookmark", command: "Purpose: Process only new data (incremental load)" },
      { step: 4, action: "Run Glue Job", command: "Result: Processed data stored in processed layer" }
    ],

    interviewQuestions: [
      { question: "What is AWS Glue?", answer: "AWS Glue is a serverless ETL service used to extract, transform, and load data using Apache Spark" },
      { question: "What is ETL?", answer: "ETL stands for Extract, Transform, Load, where data is extracted from source, transformed, and loaded into target system" },
      { question: "What is Glue Crawler?", answer: "Glue Crawler scans data in S3 and automatically detects schema and creates tables in Data Catalog" },
      { question: "What is Data Catalog?", answer: "It is a centralized metadata repository that stores table definitions used by AWS services" },
      { question: "What is Job Bookmark?", answer: "Job Bookmark helps process only new data by tracking previously processed data" },
      { question: "Full load vs Incremental load?", answer: "Full load processes entire dataset every time, while incremental load processes only new or changed data" },
      { question: "Why incremental load is important?", answer: "It reduces processing time, cost, and avoids reprocessing old data" },
      { question: "Where does Glue read and write data?", answer: "Glue reads data from S3 and writes processed data back to S3 or Redshift" },
      { question: "Real project example?", answer: "We used Glue to process raw sales data, removed duplicates, applied transformations, and stored processed data in S3 using incremental logic" },
      { question: "Why not use raw data directly?", answer: "Raw data is unclean and not suitable for reporting, so transformation is required" }
    ],

    commonMistakes: [
      "Using raw data directly",
      "Running full load every time",
      "Not using job bookmarks",
      "Ignoring data quality issues"
    ],

    memoryTrick: {
      line: "👉 Processing = clean 🧼\n👉 Glue = ETL ⚙️\n👉 PySpark = engine 🔥\n👉 NULL = danger ⚠️\n👉 Dedup = remove ❌\n👉 Join = combine 🔗",
      flow: "S3 (raw) -> Glue -> S3 (processed)"
    },

    revision: "Processing = clean + transform data using Glue & PySpark",

    finalInterviewStatement: "Data processing is the stage where raw data is cleaned, transformed, and prepared for analysis using tools like AWS Glue and PySpark. It involves operations such as filtering, joins, aggregations, and handling missing or duplicate data."
  },

  'aws-flow-4': {
    title: "Flow 4: Data Querying using Athena & Redshift (Analytics Layer)",
    subtitle: "Analytics Layer",
    icon: "🏛️",
    difficulty: "Intermediate",
    duration: "~55 min",
    ready: true,

    objective: "Understand how to query data using Athena for serverless analytics and Redshift for data warehousing",

    // 🎭 COMIC STORY
    comic: `📖 1
You've successfully processed data using Glue 🎉
Clean data is now in S3 curated/ folder:
- sales_data.parquet
- user_profiles.parquet
- product_catalog.parquet

Now what? 🤔

📖 2
😰 Problem:
Business team asks:
- "What's total sales for Q1 2024?" 💰
- "Which products sold most?" 📊
- "Show me user demographics" 👥
- "I need daily revenue report" 📈

How do you answer these questions from S3 data?

📖 3
🤔 Solution

Use SQL to Query Data!

Two AWS Services:
1️⃣ Athena → Query S3 directly (serverless)
2️⃣ Redshift → Data warehouse (high performance)

📖 4
🔍 Athena - Serverless Query Engine:

SELECT product, SUM(amount) as revenue
FROM sales
WHERE year = 2024
GROUP BY product
ORDER BY revenue DESC

✔ No infrastructure
✔ Pay per query
✔ Queries S3 directly
✔ Perfect for ad-hoc analysis

🏛️ Redshift - Data Warehouse:

✔ Load data from S3
✔ Optimized for complex queries
✔ Fast performance
✔ Perfect for BI dashboards

📖 5
✨ Complete Analytics Flow:

Option 1 (Quick Analysis):
S3 → Athena → SQL Results → QuickSight

Option 2 (Heavy Analytics):
S3 → Redshift → Complex SQL → Dashboards

Result:
✔ Business gets answers in seconds
✔ Self-service analytics
✔ Data-driven decisions
✔ Automated reports

📖 6
💡 Aha Moment:

Without Querying = Data sits unused 😴
- Can't answer business questions
- No insights
- Just storage cost

With Querying = Data becomes valuable 💎
- Answer any question with SQL
- Real-time insights
- Powers entire organization

Real-world: S3 → Athena (quick) or Redshift (complex) → QuickSight → Business`,
    deepDive: [
      "👉 What is Data Querying? Data querying is the process of retrieving and analyzing data using SQL.",
      "👉 Tools Used: 📊 Athena → Query directly on S3, 🏢 Redshift → Data warehouse",
      "👉 Athena (Serverless Query Engine): ✔ Runs SQL on S3, ✔ No infrastructure, ✔ Pay per query. Use when: Ad-hoc queries, Data lake analytics",
      "👉 Redshift (Data Warehouse): ✔ Stores structured data, ✔ High performance, ✔ Optimized for BI. Use when: Large-scale analytics, Dashboards, Frequent queries",
      "👉 Key Difference 🔥: Athena → query on S3, Redshift → store + query",
      "👉 Flow: S3 → Athena (direct query) OR S3 → Redshift → Query",
      "👉 Why it matters? ✔ Business insights, ✔ Reporting, ✔ Decision making",
      "👉 Real-world example: Total sales by month, Top customers, Revenue trends",
      "🎯 Interview Line: Data querying is performed using tools like Athena for serverless SQL queries on S3 and Redshift for high-performance data warehousing and analytics."
    ],

    // 📋 TYPES
    types: [
      "📊 Query Engines: Athena (serverless), Redshift (warehouse)",
      "📈 Query Types: Aggregation, Filtering, Joins, Window functions"
    ],

    // 💬 INTERACTIVE Q&A
    interactiveQA: [
      {
        question: "What is Athena?",
        hint: "Serverless",
        options: [
          "Database",
          "Query engine on S3",
          "Storage",
          "Compute"
        ],
        answer: "Query engine on S3",
        explanation: "Athena runs SQL directly on S3.\n\n❌ Not storage\n❌ Not compute service",
        memoryTrick: "Athena = query S3 📊"
      },
      {
        question: "What is Redshift?",
        hint: "Warehouse",
        options: [
          "Query tool",
          "Data warehouse",
          "Storage only",
          "ETL tool"
        ],
        answer: "Data warehouse",
        explanation: "Redshift:\n✔ Stores structured data\n✔ Optimized for analytics",
        memoryTrick: "Redshift = warehouse 🏢"
      },
      {
        question: "When to use Athena?",
        hint: "No storage",
        options: [
          "For storing data",
          "Ad-hoc queries on S3",
          "For ETL",
          "For UI"
        ],
        answer: "Ad-hoc queries on S3",
        explanation: "Athena:\n✔ Quick queries\n✔ No setup\n\n❌ Not for storage",
        memoryTrick: "Athena = quick query ⚡"
      },
      {
        question: "When to use Redshift?",
        hint: "Heavy queries",
        options: [
          "Light queries",
          "Large-scale analytics",
          "Storage only",
          "Logging"
        ],
        answer: "Large-scale analytics",
        explanation: "Redshift handles:\n✔ Complex queries\n✔ BI workloads",
        memoryTrick: "Redshift = heavy 💪"
      },
      {
        question: "Interview Trap: Where does Athena store data?",
        hint: "Think carefully",
        options: [
          "Athena",
          "S3",
          "Redshift",
          "EC2"
        ],
        answer: "S3",
        explanation: "Athena DOES NOT store data.\n\nIt reads from S3.",
        memoryTrick: "Athena reads S3 📥"
      },
      {
        question: "Which is faster for repeated queries?",
        hint: "Optimization",
        options: [
          "Athena",
          "Redshift",
          "S3",
          "Lambda"
        ],
        answer: "Redshift",
        explanation: "Redshift:\n✔ Optimized storage\n✔ Faster repeated queries\n\nAthena scans S3 each time.",
        memoryTrick: "Redshift = fast 🔥"
      }
    ],

    // 💻 CODING CHALLENGE
    codingChallenge: {
      title: "Athena + Redshift SQL Practice",
      scenario: "Query processed data for insights",
      thinkingApproach: [
        "Understand business question",
        "Identify dataset",
        "Write SQL query",
        "Optimize query",
        "Validate output"
      ],
      questions: [
        {
          question: "1. Select all data",
          answer: "SELECT * FROM sales;"
        },
        {
          question: "2. Filter data",
          answer: "SELECT * FROM sales WHERE amount > 100;"
        },
        {
          question: "3. Aggregate total sales",
          answer: "SELECT SUM(amount) FROM sales;"
        },
        {
          question: "4. Group by category",
          answer: "SELECT category, SUM(amount) FROM sales GROUP BY category;"
        },
        {
          question: "5. Find top 5 customers",
          answer: "SELECT customer, SUM(amount) as total FROM sales GROUP BY customer ORDER BY total DESC LIMIT 5;"
        },
        {
          question: "6. Join two tables",
          answer: "SELECT c.name, o.amount\nFROM customers c\nJOIN orders o ON c.id = o.customer_id;"
        },
        {
          question: "7. Use window function",
          answer: "SELECT name, amount,\nRANK() OVER (ORDER BY amount DESC) as rank\nFROM sales;"
        },
        {
          question: "8. Count records",
          answer: "SELECT COUNT(*) FROM sales;"
        }
      ],
      note: "These SQL queries are used in Athena and Redshift."
    },

    // 🎯 QUIZ
    quiz: [
      {
        question: "Athena?",
        options: ["Query", "Storage", "ETL", "UI"],
        answer: 0,
        explanation: "Athena = query engine.",
        difficulty: "easy"
      },
      {
        question: "Redshift?",
        options: ["Warehouse", "Storage", "UI", "None"],
        answer: 0,
        explanation: "Redshift = warehouse.",
        difficulty: "easy"
      },
      {
        question: "Athena data?",
        options: ["S3", "EC2", "None", "Loop"],
        answer: 0,
        explanation: "Athena reads from S3.",
        difficulty: "easy"
      },
      {
        question: "Heavy queries?",
        options: ["Redshift", "Athena", "None", "Loop"],
        answer: 0,
        explanation: "Redshift handles heavy queries.",
        difficulty: "medium"
      },
      {
        question: "Fast repeated?",
        options: ["Redshift", "Athena", "None", "Loop"],
        answer: 0,
        explanation: "Redshift optimized.",
        difficulty: "medium"
      },
      {
        question: "Serverless?",
        options: ["Athena", "Redshift", "None", "Loop"],
        answer: 0,
        explanation: "Athena is serverless.",
        difficulty: "medium"
      },
      {
        question: "Store data?",
        options: ["Redshift", "Athena", "None", "Loop"],
        answer: 0,
        explanation: "Redshift stores data.",
        difficulty: "hard"
      },
      {
        question: "Query S3?",
        options: ["Athena", "Redshift", "None", "Loop"],
        answer: 0,
        explanation: "Athena queries S3.",
        difficulty: "hard"
      },
      {
        question: "Core?",
        options: ["Yes", "No", "None", "Loop"],
        answer: 0,
        explanation: "Important concept.",
        difficulty: "hard"
      }
    ],

    coreConcept: {
      thinking: "Processed data should be stored in structured format for analytics",
      awsMapping: "S3 (processed) -> Redshift (warehouse) OR S3 -> Athena (query)"
    },

    realTimeScenario: {
      problem: "Processed data is available in S3 but business users need fast SQL queries and reporting",
      wrongApproach: [
        "Running heavy queries directly on S3",
        "No structured storage for analytics",
        "Ignoring performance tuning"
      ],
      correctApproach: "Load processed data into Redshift using optimized design (distribution key, sort key) for fast querying OR use Athena for ad-hoc queries on S3"
    },

    services: [
      {
        name: "Amazon Redshift",
        type: "Data Warehouse",
        icon: "🏛️",
        whatItDoes: [
          "Stores structured data in tables",
          "Supports complex SQL queries",
          "Handles large-scale analytics workloads"
        ],
        whyUse: [
          "Fast query performance",
          "Columnar storage for analytics",
          "Scales for big data workloads"
        ],
        interviewLine: "Redshift is used as a data warehouse to store processed data and enable fast analytical queries"
      },
      {
        name: "COPY Command",
        type: "Data Loading",
        icon: "📥",
        whatItDoes: [
          "Loads bulk data from S3 into Redshift",
          "Parallel data loading for high performance"
        ],
        whyUse: [
          "Faster than INSERT statements",
          "Efficient for large datasets"
        ],
        interviewLine: "We use COPY command to efficiently load large data from S3 into Redshift"
      },
      {
        name: "AWS Athena",
        type: "Serverless Query Engine",
        icon: "🔍",
        whatItDoes: [
          "Runs SQL queries directly on S3 data",
          "Does not require infrastructure setup",
          "Charges based on data scanned"
        ],
        whyUse: [
          "Quick ad-hoc analysis",
          "No need to move data",
          "Cost-effective for selective queries"
        ],
        interviewLine: "Athena is used to query data directly from S3 using SQL without moving data"
      }
    ],

    practicalSteps: [
      { step: 1, action: "Create Redshift Table", command: "CREATE TABLE sales (id INT, name VARCHAR, amount INT);" },
      { step: 2, action: "Load data using COPY command", command: "COPY sales FROM 's3://morphex-data-lake/processed/sales/' IAM_ROLE 'your-role' FORMAT AS CSV;" },
      { step: 3, action: "Verify data", command: "SELECT * FROM sales LIMIT 10;" },
      { step: 4, action: "Query using Athena", command: "CREATE EXTERNAL TABLE sales (id INT, name STRING, amount INT) LOCATION 's3://morphex-data-lake/processed/sales/'; SELECT * FROM sales WHERE amount > 1000;" }
    ],

    interviewQuestions: [
      { question: "What is Amazon Redshift?", answer: "Amazon Redshift is a fully managed data warehouse used for storing and analyzing large datasets using SQL" },
      { question: "Why use Redshift instead of S3?", answer: "S3 is storage, while Redshift is optimized for fast SQL queries and analytics" },
      { question: "What is COPY command?", answer: "COPY command is used to load large amounts of data from S3 into Redshift efficiently" },
      { question: "Why COPY over INSERT?", answer: "COPY is faster as it loads data in parallel, while INSERT is slower for large data" },
      { question: "What is Distribution Key?", answer: "It determines how data is distributed across nodes to improve query performance" },
      { question: "What is Sort Key?", answer: "It defines how data is sorted within nodes to speed up query filtering" },
      { question: "What happens if no optimization is done?", answer: "Queries become slow and inefficient due to poor data distribution and sorting" },
      { question: "Real project example?", answer: "We loaded processed sales data into Redshift using COPY command and optimized performance using sort and distribution keys" },
      { question: "When to use Redshift?", answer: "When we need fast SQL-based analytics on large structured data" },
      { question: "Can Redshift query S3?", answer: "Yes, using Redshift Spectrum, it can query data directly from S3" }
    ],

    commonMistakes: [
      "Using INSERT instead of COPY for large data",
      "Ignoring distribution and sort keys",
      "Running heavy queries directly on S3",
      "Poor table design"
    ],

    memoryTrick: {
      line: "👉 Athena = query S3 📊\n👉 Redshift = warehouse 🏢\n👉 Athena = serverless ⚡\n👉 Redshift = fast 🔥\n👉 Athena ≠ storage ❌\n👉 Redshift = BI tool 📈",
      flow: "S3 (processed) -> Redshift OR S3 -> Athena"
    },

    revision: "Athena = query S3, Redshift = store + query for analytics",

    finalInterviewStatement: "Data querying is performed using Athena for serverless SQL queries directly on S3 and Redshift for high-performance data warehousing. Athena is ideal for ad-hoc queries, while Redshift is used for large-scale analytics and dashboards."
  },

  'aws-flow-5': {
    title: "Athena vs Redshift (Query Engine vs Data Warehouse)",
    subtitle: "Query Engine vs Data Warehouse",
    icon: "🔍",
    difficulty: "Intermediate",
    duration: "~50 min",
    ready: true,

    objective: "Understand the differences between Athena and Redshift, and when to use each for data querying and analytics",

    // 🎭 COMIC STORY
    comicStory: [
      { panel: 1, text: "Imagine you have data in S3 📦" },
      { panel: 2, text: "🤔 Two ways to query:\n\nOption 1:\n👉 Directly query S3 → Athena\n\nOption 2:\n👉 Load into warehouse → Redshift" },
      { panel: 3, text: "😰 Confusion:\nWhich one to use?" },
      { panel: 4, text: "✨ Answer:\nAthena = quick analysis ⚡\nRedshift = heavy analytics 💪" },
      { panel: 5, text: "💡 Aha Moment:\nAthena = read directly\nRedshift = store + optimize" }
    ],

    // 📚 DEEP DIVE
    deepDive: [
      "👉 Athena: ✔ Serverless query engine, ✔ Runs SQL on S3, ✔ No infrastructure, ✔ Pay per query. Best for: Ad-hoc queries, Data lake analysis, Quick exploration",
      "👉 Redshift: ✔ Data warehouse, ✔ Stores structured data, ✔ High performance, ✔ Columnar storage. Best for: BI dashboards, Large datasets, Frequent queries",
      "👉 Key Differences (VERY IMPORTANT 🔥): Athena: No storage, Reads from S3, Slower for repeated queries | Redshift: Stores data, Optimized queries, Faster performance",
      "👉 Cost Difference: Athena → pay per data scanned, Redshift → pay for cluster/storage",
      "👉 Real-world flow: S3 → Athena (quick query) OR S3 → Redshift → Dashboard",
      "🎯 Interview Line: Athena is a serverless query service used for querying data directly from S3, whereas Redshift is a fully managed data warehouse optimized for high-performance analytics and repeated queries."
    ],

    // 📋 TYPES
    types: [
      "📊 Athena: Serverless, Query on S3",
      "🏢 Redshift: Data warehouse, Stores data",
      "📈 Usage: Ad-hoc → Athena, BI → Redshift"
    ],

    // 💬 INTERACTIVE Q&A
    interactiveQA: [
      {
        question: "What is Athena?",
        hint: "Serverless",
        options: [
          "Database",
          "Query engine on S3",
          "Storage",
          "ETL tool"
        ],
        answer: "Query engine on S3",
        explanation: "Athena:\n✔ Runs SQL on S3\n✔ No storage\n\n❌ Not a database",
        memoryTrick: "Athena = query S3 📊"
      },
      {
        question: "What is Redshift?",
        hint: "Warehouse",
        options: [
          "Query tool",
          "Data warehouse",
          "Storage only",
          "API service"
        ],
        answer: "Data warehouse",
        explanation: "Redshift:\n✔ Stores data\n✔ Optimized queries",
        memoryTrick: "Redshift = warehouse 🏢"
      },
      {
        question: "Which is serverless?",
        hint: "No infra",
        options: [
          "Athena",
          "Redshift",
          "Both",
          "None"
        ],
        answer: "Athena",
        explanation: "Athena:\n✔ No infra\n\nRedshift:\n❌ Requires cluster",
        memoryTrick: "Athena = serverless ⚡"
      },
      {
        question: "Where does Athena read data from?",
        hint: "Storage",
        options: [
          "Athena",
          "S3",
          "Redshift",
          "EC2"
        ],
        answer: "S3",
        explanation: "Athena reads from S3.\n\n❌ Does not store data",
        memoryTrick: "Athena reads S3 📥"
      },
      {
        question: "Which is faster for dashboards?",
        hint: "Repeated queries",
        options: [
          "Athena",
          "Redshift",
          "S3",
          "Lambda"
        ],
        answer: "Redshift",
        explanation: "Redshift:\n✔ Optimized\n✔ Fast repeated queries\n\nAthena scans S3 every time.",
        memoryTrick: "Redshift = fast 🔥"
      },
      {
        question: "Interview Trap: Can Athena replace Redshift?",
        hint: "Think use-case",
        options: [
          "Yes",
          "No",
          "Sometimes",
          "Only small data"
        ],
        answer: "No",
        explanation: "Athena is not optimized for heavy BI workloads.\n\nRedshift is required for:\n✔ Complex analytics\n✔ Dashboards",
        memoryTrick: "Athena ≠ warehouse ❌"
      },
      {
        question: "Which charges per query?",
        hint: "Cost model",
        options: [
          "Athena",
          "Redshift",
          "Both",
          "None"
        ],
        answer: "Athena",
        explanation: "Athena:\n✔ Pay per data scanned\n\nRedshift:\n✔ Pay for cluster",
        memoryTrick: "Athena = pay/query 💰"
      },
      {
        question: "Which stores data?",
        hint: "Storage",
        options: [
          "Athena",
          "Redshift",
          "Both",
          "None"
        ],
        answer: "Redshift",
        explanation: "Redshift stores data.\n\nAthena only queries.",
        memoryTrick: "Redshift stores 📦"
      }
    ],

    // 💻 CODING CHALLENGE
    codingChallenge: {
      title: "Athena + Redshift SQL Practice",
      scenario: "Analyze business data",
      thinkingApproach: [
        "Understand requirement",
        "Write SQL query",
        "Optimize query",
        "Validate results"
      ],
      questions: [
        {
          question: "1. Total revenue",
          answer: "SELECT SUM(amount) FROM sales;"
        },
        {
          question: "2. Sales by month",
          answer: "SELECT month, SUM(amount)\nFROM sales\nGROUP BY month;"
        },
        {
          question: "3. Top 3 customers",
          answer: "SELECT customer, SUM(amount) as total\nFROM sales\nGROUP BY customer\nORDER BY total DESC\nLIMIT 3;"
        },
        {
          question: "4. Join customers and orders",
          answer: "SELECT c.name, o.amount\nFROM customers c\nJOIN orders o ON c.id = o.customer_id;"
        },
        {
          question: "5. Count records",
          answer: "SELECT COUNT(*) FROM sales;"
        },
        {
          question: "6. Filter high value transactions",
          answer: "SELECT * FROM sales WHERE amount > 1000;"
        },
        {
          question: "7. Window ranking",
          answer: "SELECT name, amount,\nRANK() OVER (ORDER BY amount DESC) as rank\nFROM sales;"
        },
        {
          question: "8. Average sales",
          answer: "SELECT AVG(amount) FROM sales;"
        }
      ],
      note: "Same SQL works in both Athena and Redshift."
    },

    // 🎯 QUIZ
    quiz: [
      {
        question: "Athena?",
        options: ["Query", "Storage", "ETL", "UI"],
        answer: 0,
        explanation: "Athena = query engine.",
        difficulty: "easy"
      },
      {
        question: "Redshift?",
        options: ["Warehouse", "Storage", "UI", "None"],
        answer: 0,
        explanation: "Redshift = warehouse.",
        difficulty: "easy"
      },
      {
        question: "Serverless?",
        options: ["Athena", "Redshift", "None", "Both"],
        answer: 0,
        explanation: "Athena is serverless.",
        difficulty: "easy"
      },
      {
        question: "Stores data?",
        options: ["Redshift", "Athena", "None", "Both"],
        answer: 0,
        explanation: "Redshift stores data.",
        difficulty: "medium"
      },
      {
        question: "Fast repeated?",
        options: ["Redshift", "Athena", "None", "Both"],
        answer: 0,
        explanation: "Redshift optimized.",
        difficulty: "medium"
      },
      {
        question: "Reads S3?",
        options: ["Athena", "Redshift", "None", "Both"],
        answer: 0,
        explanation: "Athena reads S3.",
        difficulty: "medium"
      },
      {
        question: "Pay/query?",
        options: ["Athena", "Redshift", "None", "Both"],
        answer: 0,
        explanation: "Athena pricing model.",
        difficulty: "hard"
      },
      {
        question: "BI dashboards?",
        options: ["Redshift", "Athena", "None", "Both"],
        answer: 0,
        explanation: "Redshift used for BI.",
        difficulty: "hard"
      },
      {
        question: "Replace?",
        options: ["No", "Yes", "Both", "None"],
        answer: 0,
        explanation: "Athena cannot replace Redshift.",
        difficulty: "hard"
      }
    ],

    coreConcept: {
      thinking: "Don't move data, query where it is",
      awsMapping: "S3 -> Athena (SQL Query Engine) OR S3 -> Redshift -> Query"
    },

    realTimeScenario: {
      problem: "Business needs quick insights from data stored in S3 without loading into warehouse",
      wrongApproach: [
        "Loading data into Redshift for every query",
        "Scanning full data without filters",
        "Ignoring cost while querying"
      ],
      correctApproach: "Use Athena to run SQL queries directly on S3 data with partitioning to reduce cost and improve performance"
    },

    services: [
      {
        name: "AWS Athena",
        type: "Serverless Query Engine",
        icon: "🔍",
        whatItDoes: [
          "Runs SQL queries directly on S3 data",
          "Does not require infrastructure setup",
          "Charges based on data scanned"
        ],
        whyUse: [
          "Quick ad-hoc analysis",
          "No need to move data",
          "Cost-effective for selective queries"
        ],
        interviewLine: "Athena is used to query data directly from S3 using SQL without moving data"
      },
      {
        name: "Amazon Redshift",
        type: "Data Warehouse",
        icon: "🏛️",
        whatItDoes: [
          "Stores structured data in tables",
          "Supports complex SQL queries",
          "Handles large-scale analytics workloads"
        ],
        whyUse: [
          "Fast query performance",
          "Columnar storage for analytics",
          "Scales for big data workloads"
        ],
        interviewLine: "Redshift is used as a data warehouse to store processed data and enable fast analytical queries"
      }
    ],

    practicalSteps: [
      { step: 1, action: "Create table in Athena", command: "CREATE EXTERNAL TABLE sales (id INT, name STRING, amount INT) LOCATION 's3://morphex-data-lake/processed/sales/';" },
      { step: 2, action: "Run query", command: "SELECT * FROM sales WHERE amount > 1000;" },
      { step: 3, action: "Use partition filter", command: "SELECT * FROM sales WHERE year=2025 AND month=04;" }
    ],

    interviewQuestions: [
      { question: "What is AWS Athena?", answer: "AWS Athena is a serverless query engine used to run SQL queries directly on data stored in S3" },
      { question: "Why use Athena?", answer: "It allows quick analysis without moving data and charges only for data scanned" },
      { question: "How Athena charges?", answer: "Athena charges based on the amount of data scanned during query execution" },
      { question: "How to reduce Athena cost?", answer: "Use partitioning, filtering, and columnar formats like Parquet to reduce data scanned" },
      { question: "Athena vs Redshift?", answer: "Athena is serverless and used for ad-hoc queries, while Redshift is a data warehouse for high-performance analytics" },
      { question: "What happens without partitioning?", answer: "Athena scans full dataset, leading to higher cost and slower performance" },
      { question: "What file formats are best for Athena?", answer: "Columnar formats like Parquet or ORC are best for performance and cost optimization" },
      { question: "Real project example?", answer: "We used Athena to analyze processed data in S3 with partition filters, reducing query cost significantly" },
      { question: "Can Athena query raw data?", answer: "Yes, but it is recommended to query processed or curated data for better performance" },
      { question: "When to use Athena?", answer: "When quick analysis is needed without loading data into a warehouse" }
    ],

    commonMistakes: [
      "Querying without filters",
      "Not using partitioning",
      "Using CSV instead of Parquet",
      "Running unnecessary queries"
    ],

    memoryTrick: {
      line: "👉 Athena = query S3 📊\n👉 Redshift = warehouse 🏢\n👉 Athena = serverless ⚡\n👉 Redshift = fast 🔥\n👉 Athena = pay/query 💰\n👉 Redshift = BI tool 📈",
      flow: "S3 -> Athena OR S3 -> Redshift"
    },

    revision: "Athena = query on S3, Redshift = store + fast analytics",

    finalInterviewStatement: "Athena is a serverless query engine used to run SQL directly on S3, making it ideal for ad-hoc queries. Redshift, on the other hand, is a data warehouse designed for high-performance analytics and frequent queries, making it suitable for dashboards and business intelligence."
  },

  'aws-flow-6': {
    title: "Flow 6: Automation using Event-Driven Pipeline (Real-Time Data Engineering)",
    subtitle: "Real-Time Data Engineering",
    icon: "⚡",
    difficulty: "Advanced",
    duration: "~55 min",
    ready: true,

    objective: "Understand how to automate data pipelines using AWS Lambda and event-driven architecture",

    // 🎭 COMIC STORY
    comic: `📖 1
Your ETL pipeline is working great! 🎉
But there's a problem...

Every day at 9 AM:
- New sales file arrives in S3
- You manually trigger Glue job
- Wait for processing
- Then run Athena queries
- Finally update dashboard

This takes 30 minutes of manual work daily! 😫

📖 2
😰 Problems with Manual Pipeline:
- Need to check S3 every hour for new files
- Forget to run job → data delayed
- Weekend/holiday → no one to run it
- Multiple files → run job multiple times
- Human error → wrong job triggered
- Not scalable for real-time needs

📖 3
🤔 Solution

Event-Driven Automation!

Concept: File arrives → Automatic processing

AWS Services:
1️⃣ S3 Event → Triggers on file upload
2️⃣ Lambda → Lightweight automation
3️⃣ EventBridge → Event routing
4️⃣ Step Functions → Workflow orchestration

📖 4
⚡ Event-Driven Flow:

Step 1: File uploaded to S3
  ↓ (S3 Event Notification)
Step 2: Lambda function triggered
  ↓ (Starts Glue Job)
Step 3: Glue processes data
  ↓ (Completion Event)
Step 4: Lambda updates Athena
  ↓ (Notification)
Step 5: SNS sends email "Data Ready!"

All happens in 5 minutes, AUTOMATICALLY! 🚀

📖 5
✨ Real-World Example:

Before (Manual):
- 9:00 AM - Check S3
- 9:05 AM - Start Glue job
- 9:20 AM - Job completes
- 9:25 AM - Run Athena
- 9:30 AM - Update dashboard
Total: 30 min + manual effort

After (Automated):
- 9:00 AM - File arrives
- 9:05 AM - Everything done automatically!
Total: 5 min, ZERO manual work ✨

📖 6
💡 Aha Moment:

Manual Pipeline = Slow + Error-prone 🐌
- Requires human intervention
- Delays in processing
- Can't scale

Event-Driven = Fast + Reliable 🚀
- Fully automatic
- Real-time processing
- Scales infinitely
- Works 24/7

Real-world: S3 Event → Lambda → Glue → SNS → Dashboard (All Automatic!)`,
    deepDive: [
      "👉 What is Event-Driven Pipeline? An event-driven pipeline automatically triggers processing when an event occurs (like file arrival).",
      "👉 Key Components (VERY IMPORTANT 🔥): 📦 S3 → Event source, ⚡ EventBridge / S3 Event → trigger event, 🧠 Lambda → lightweight processing / trigger logic, ⚙️ Glue Job → ETL processing, 📊 Target → S3 / Redshift",
      "👉 Flow: 1. File uploaded to S3, 2. S3 event triggers Lambda / EventBridge, 3. Lambda triggers Glue Job, 4. Glue processes data, 5. Output stored in S3/Redshift",
      "👉 Why use Automation? ✔ No manual effort, ✔ Real-time processing, ✔ Faster pipelines, ✔ Scalable",
      "👉 Event Types: File upload (S3 PUT), Schedule (cron), API trigger",
      "👉 Real-world example: User uploads file → automatically processed → dashboard updated",
      "🎯 Interview Line: Event-driven pipelines automate data workflows by triggering processing jobs based on events like S3 file uploads using services like Lambda, EventBridge, and Glue."
    ],

    // 📋 TYPES
    types: [
      "⚡ Event Types: S3 Event (file upload), Schedule (cron), API trigger",
      "🧩 Components: S3, Lambda, EventBridge, Glue"
    ],

    // 💬 INTERACTIVE Q&A
    interactiveQA: [
      {
        question: "What is event-driven pipeline?",
        hint: "Automatic",
        options: [
          "Manual pipeline",
          "Pipeline triggered by events",
          "Only batch processing",
          "Static system"
        ],
        answer: "Pipeline triggered by events",
        explanation: "Event-driven:\n✔ Automatic execution\n✔ Trigger-based\n\n❌ Not manual",
        memoryTrick: "Event = trigger ⚡"
      },
      {
        question: "What triggers pipeline automatically?",
        hint: "Event",
        options: [
          "User",
          "S3 event / EventBridge",
          "UI",
          "Database"
        ],
        answer: "S3 event / EventBridge",
        explanation: "Events trigger automation.\n\nExample:\n✔ File upload",
        memoryTrick: "S3 event = start ⚡"
      },
      {
        question: "Role of Lambda?",
        hint: "Light logic",
        options: [
          "Storage",
          "Trigger or small processing",
          "Database",
          "UI"
        ],
        answer: "Trigger or small processing",
        explanation: "Lambda:\n✔ Trigger Glue\n✔ Small transformations\n\n❌ Not heavy processing",
        memoryTrick: "Lambda = brain 🧠"
      },
      {
        question: "Where does heavy processing happen?",
        hint: "ETL",
        options: [
          "Lambda",
          "Glue",
          "S3",
          "UI"
        ],
        answer: "Glue",
        explanation: "Glue handles:\n✔ Large data processing\n\nLambda is lightweight only.",
        memoryTrick: "Glue = heavy ⚙️"
      },
      {
        question: "Interview Trap: Can Lambda replace Glue?",
        hint: "Scale",
        options: [
          "Yes",
          "No",
          "Sometimes",
          "Only small data"
        ],
        answer: "No",
        explanation: "Lambda:\n❌ Limited memory/time\n\nGlue:\n✔ Big data processing",
        memoryTrick: "Lambda ≠ big data ❌"
      },
      {
        question: "What is benefit of automation?",
        hint: "No manual",
        options: [
          "More work",
          "No manual effort",
          "Slow processing",
          "No scaling"
        ],
        answer: "No manual effort",
        explanation: "Automation:\n✔ Faster\n✔ Reliable\n✔ Scalable",
        memoryTrick: "Automation = auto 🤖"
      }
    ],

    // 💻 CODING CHALLENGE
    codingChallenge: {
      title: "Event-Driven Pipeline Practice",
      scenario: "Automate ETL pipeline using events",
      thinkingApproach: [
        "Identify trigger event",
        "Define pipeline flow",
        "Trigger processing job",
        "Validate execution",
        "Monitor logs"
      ],
      questions: [
        {
          question: "1. Define S3 event trigger",
          answer: "S3 PUT event triggers pipeline"
        },
        {
          question: "2. Lambda to trigger Glue job",
          answer: "import boto3\nglue = boto3.client('glue')\n\nglue.start_job_run(JobName=\"my-job\")"
        },
        {
          question: "3. Read S3 file in Glue",
          answer: "df = spark.read.csv(\"s3://bucket/raw/data.csv\", header=True)"
        },
        {
          question: "4. Write processed data",
          answer: "df.write.parquet(\"s3://bucket/processed/\")"
        },
        {
          question: "5. Schedule using cron",
          answer: "Use EventBridge cron expression"
        },
        {
          question: "6. Chain jobs",
          answer: "Use Glue triggers"
        },
        {
          question: "7. Monitor logs",
          answer: "Check CloudWatch logs"
        },
        {
          question: "8. Retry failed jobs",
          answer: "Configure retry in Glue/Lambda"
        }
      ],
      note: "Real pipelines are fully automated using events."
    },

    // 🎯 QUIZ
    quiz: [
      {
        question: "Event?",
        options: ["Trigger", "Store", "Delete", "UI"],
        answer: 0,
        explanation: "Event triggers pipeline.",
        difficulty: "easy"
      },
      {
        question: "S3 event?",
        options: ["Trigger", "Store", "Delete", "None"],
        answer: 0,
        explanation: "S3 triggers pipeline.",
        difficulty: "easy"
      },
      {
        question: "Lambda?",
        options: ["Logic", "Storage", "UI", "None"],
        answer: 0,
        explanation: "Lambda handles logic.",
        difficulty: "easy"
      },
      {
        question: "Glue?",
        options: ["ETL", "UI", "None", "Loop"],
        answer: 0,
        explanation: "Glue processes data.",
        difficulty: "medium"
      },
      {
        question: "Automation?",
        options: ["Auto", "Manual", "None", "Loop"],
        answer: 0,
        explanation: "Automation = automatic.",
        difficulty: "medium"
      },
      {
        question: "Big data?",
        options: ["Glue", "Lambda", "None", "Loop"],
        answer: 0,
        explanation: "Glue handles big data.",
        difficulty: "medium"
      },
      {
        question: "Retry?",
        options: ["Yes", "No", "None", "Loop"],
        answer: 0,
        explanation: "Retry improves reliability.",
        difficulty: "hard"
      },
      {
        question: "Logs?",
        options: ["CloudWatch", "S3", "None", "Loop"],
        answer: 0,
        explanation: "CloudWatch logs.",
        difficulty: "hard"
      },
      {
        question: "Core?",
        options: ["Yes", "No", "None", "Loop"],
        answer: 0,
        explanation: "Important concept.",
        difficulty: "hard"
      }
    ],

    coreConcept: {
      thinking: "Don't run pipeline manually, trigger it automatically",
      awsMapping: "S3 Event -> Lambda -> Glue Job"
    },

    realTimeScenario: {
      problem: "Data pipeline is running manually which causes delays and human dependency",
      wrongApproach: [
        "Running Glue jobs manually",
        "Using cron jobs without real-time triggers",
        "No automation in pipeline"
      ],
      correctApproach: "Use event-driven architecture where S3 triggers Lambda, which then triggers Glue job automatically"
    },

    services: [
      {
        name: "AWS Lambda",
        type: "Serverless Compute",
        icon: "λ",
        whatItDoes: [
          "Executes code without managing servers",
          "Triggers based on events",
          "Integrates with multiple AWS services"
        ],
        whyUse: [
          "No infrastructure management",
          "Automatic scaling",
          "Real-time processing"
        ],
        interviewLine: "Lambda is used to trigger Glue jobs automatically when new data arrives in S3"
      },
      {
        name: "S3 Event Notification",
        type: "Event Trigger",
        icon: "🔔",
        whatItDoes: [
          "Detects file upload in S3",
          "Triggers Lambda function"
        ],
        whyUse: [
          "Real-time pipeline triggering",
          "Removes manual dependency"
        ],
        interviewLine: "We configure S3 events to trigger Lambda when new files arrive"
      },
      {
        name: "AWS Glue",
        type: "ETL",
        icon: "🔧",
        whatItDoes: [
          "Processes incoming data"
        ],
        whyUse: [
          "Automated ETL execution"
        ],
        interviewLine: "Glue job is triggered by Lambda for automated data processing"
      }
    ],

    practicalSteps: [
      { step: 1, action: "Create Lambda function", command: "Purpose: Trigger Glue job" },
      { step: 2, action: "Write Lambda code", command: "import boto3\n\ndef lambda_handler(event, context):\n    client = boto3.client('glue')\n    client.start_job_run(JobName='morphex-glue-job')" },
      { step: 3, action: "Configure S3 trigger", command: "Trigger Lambda on file upload" },
      { step: 4, action: "Test pipeline", command: "Upload file → Lambda triggers → Glue job runs" }
    ],

    interviewQuestions: [
      { question: "What is AWS Lambda?", answer: "AWS Lambda is a serverless compute service that runs code in response to events without managing servers" },
      { question: "Why use Lambda in pipeline?", answer: "Lambda helps automate pipeline by triggering processes based on events like file upload" },
      { question: "What is event-driven architecture?", answer: "It is a design where system reacts to events automatically instead of manual triggers" },
      { question: "How does S3 trigger Lambda?", answer: "S3 event notification is configured to invoke Lambda when a file is uploaded" },
      { question: "How do you trigger Glue job automatically?", answer: "We use Lambda to call Glue job using AWS SDK when triggered by S3 event" },
      { question: "Lambda vs EC2?", answer: "Lambda is serverless and event-driven, while EC2 requires server management" },
      { question: "What are Lambda limitations?", answer: "Limited execution time, memory constraints, and not suitable for long-running jobs" },
      { question: "Real project example?", answer: "We configured S3 to trigger Lambda on file upload, which automatically triggered Glue job for processing" },
      { question: "Why not manual pipeline?", answer: "Manual pipelines are slow, error-prone, and not scalable" },
      { question: "What happens when file arrives?", answer: "S3 triggers Lambda, which then triggers Glue job to process data" }
    ],

    commonMistakes: [
      "Running pipelines manually",
      "Not using event triggers",
      "Poor error handling in Lambda",
      "Using Lambda for long-running jobs"
    ],

    memoryTrick: {
      line: "👉 Event = trigger ⚡\n👉 S3 = source 📦\n👉 Lambda = logic 🧠\n👉 Glue = ETL ⚙️\n👉 Automation = auto 🤖\n👉 CloudWatch = logs 📊",
      flow: "S3 -> Lambda -> Glue"
    },

    revision: "Event triggers pipeline → Lambda → Glue → Output",

    finalInterviewStatement: "An event-driven pipeline automates data workflows by triggering ETL jobs when events occur, such as file uploads in S3. It uses services like Lambda for orchestration, Glue for processing, and EventBridge for scheduling."
  },

  'aws-flow-7': {
    title: "Flow 7: Monitoring & Logging using CloudWatch (Production Reliability Layer)",
    subtitle: "Production Reliability Layer",
    icon: "🛡️",
    difficulty: "Advanced",
    duration: "~55 min",
    ready: true,

    objective: "Understand how to secure AWS pipeline, optimize cost, and monitor system for production readiness",

    // 🎭 COMIC STORY
    comic: `📖 1
Your automated pipeline is running perfectly! 🎉
Files arrive → Process → Load → Dashboard

Everything works... until it doesn't! 😱

One day:
- Dashboard shows no data
- Business team complains
- You have NO IDEA what went wrong!

📖 2
😰 Problems without Monitoring:
- Glue job failed at 3 AM (you didn't know)
- S3 file was corrupted (no alert)
- Lambda ran out of memory (silent failure)
- Redshift query timed out (no notification)
- Cost suddenly increased 5x (discovered after bill!)
- No logs to debug issues 🤷

📖 3
🤔 Solution

Monitoring + Logging + Alerts!

AWS CloudWatch provides:
1️⃣ Logs → Track everything
2️⃣ Metrics → Monitor performance
3️⃣ Alarms → Get notified
4️⃣ Dashboards → Visualize health

📖 4
🛡️ CloudWatch Components:

📊 CloudWatch Logs:
- Glue job logs
- Lambda execution logs
- Error messages
- Debug information

📈 CloudWatch Metrics:
- Job duration
- Data processed
- Error count
- Cost tracking

🚨 CloudWatch Alarms:
IF Glue job fails → Send SNS email
IF cost > $100 → Alert team
IF Lambda errors > 10 → Notify

📖 5
✨ Production-Ready Pipeline:

Normal Flow:
S3 → Glue → Redshift → Dashboard
     ↓
CloudWatch monitors everything

When Error Occurs:
1. CloudWatch detects failure
2. Alarm triggers
3. SNS sends email/SMS
4. Team investigates logs
5. Fix issue quickly

Result:
✔ Know exactly what's happening
✔ Get alerted immediately on failures
✔ Debug issues with logs
✔ Track costs in real-time
✔ 99.9% uptime!

📖 6
💡 Aha Moment:

Without Monitoring = Blind System 😵
- Don't know if pipeline is working
- Discover failures too late
- Can't debug issues
- Business loses trust

With Monitoring = Controlled System 🎯
- Real-time visibility
- Instant failure alerts
- Easy debugging with logs
- Proactive issue resolution

Real-world: Pipeline + CloudWatch Logs + Alarms + SNS = Production-Ready!`,
    deepDive: [
      "👉 What is Monitoring & Logging? Monitoring = tracking system health, Logging = recording system activity",
      "👉 AWS Tool: 📊 CloudWatch. Used for: ✔ Logs, ✔ Metrics, ✔ Alerts",
      "👉 Components (VERY IMPORTANT 🔥): 1. Logs 📜 - Glue job logs, Lambda logs, Error logs | 2. Metrics 📈 - Job success/failure, Execution time, Resource usage | 3. Alerts 🚨 - Email/SNS notifications, Trigger on failure",
      "👉 Flow: Glue/Lambda → CloudWatch Logs → Alarm → Notification",
      "👉 Why it matters? ✔ Detect failures early, ✔ Debug issues, ✔ Ensure reliability, ✔ Maintain SLA",
      "👉 Real-world example: Glue job fails → CloudWatch detects → SNS sends email → Engineer fixes issue",
      "🎯 Interview Line: Monitoring and logging are implemented using CloudWatch to track job execution, capture logs, and trigger alerts for failures, ensuring reliability and quick issue resolution."
    ],

    // 📋 TYPES
    types: [
      "📜 Logs: Glue logs, Lambda logs",
      "📈 Metrics: Success/failure, Duration",
      "🚨 Alerts: SNS notifications, Email alerts"
    ],

    // 💬 INTERACTIVE Q&A
    interactiveQA: [
      {
        question: "What is monitoring?",
        hint: "Tracking",
        options: [
          "Storing data",
          "Tracking system health",
          "Deleting logs",
          "UI design"
        ],
        answer: "Tracking system health",
        explanation: "Monitoring checks:\n✔ Job status\n✔ Performance",
        memoryTrick: "Monitoring = track 📊"
      },
      {
        question: "What is logging?",
        hint: "Record",
        options: [
          "Deleting data",
          "Recording system activity",
          "Querying data",
          "Visualizing data"
        ],
        answer: "Recording system activity",
        explanation: "Logs contain:\n✔ Errors\n✔ Execution details",
        memoryTrick: "Logs = record 📜"
      },
      {
        question: "Which service is used?",
        hint: "AWS monitoring",
        options: [
          "S3",
          "CloudWatch",
          "EC2",
          "Lambda"
        ],
        answer: "CloudWatch",
        explanation: "CloudWatch:\n✔ Logs\n✔ Metrics\n✔ Alerts",
        memoryTrick: "CloudWatch = monitor 📊"
      },
      {
        question: "What are alerts?",
        hint: "Notification",
        options: [
          "Logs",
          "Notifications on events",
          "Storage",
          "Queries"
        ],
        answer: "Notifications on events",
        explanation: "Alerts notify:\n✔ Failures\n✔ Threshold breach",
        memoryTrick: "Alert = notify 🚨"
      },
      {
        question: "Interview Trap: Where logs are stored?",
        hint: "AWS service",
        options: [
          "S3",
          "CloudWatch Logs",
          "Redshift",
          "Glue"
        ],
        answer: "CloudWatch Logs",
        explanation: "Logs go to:\n✔ CloudWatch Logs\n\n❌ Not S3 by default",
        memoryTrick: "Logs → CloudWatch 📜"
      },
      {
        question: "Why alerts important?",
        hint: "Failure detection",
        options: [
          "No use",
          "Detect issues quickly",
          "Store data",
          "Improve UI"
        ],
        answer: "Detect issues quickly",
        explanation: "Alerts:\n✔ Immediate action\n✔ Reduce downtime",
        memoryTrick: "Alert = fast fix ⚡"
      }
    ],

    // 💻 CODING CHALLENGE
    codingChallenge: {
      title: "Monitoring & Logging Practice",
      scenario: "Track and monitor pipeline execution",
      thinkingApproach: [
        "Enable logging",
        "Capture metrics",
        "Create alerts",
        "Monitor pipeline",
        "Handle failures"
      ],
      questions: [
        {
          question: "1. Enable Glue logs",
          answer: "Logs automatically go to CloudWatch"
        },
        {
          question: "2. Log message in Lambda",
          answer: "import logging\nlogger = logging.getLogger()\nlogger.error(\"Error occurred\")"
        },
        {
          question: "3. View logs",
          answer: "Check CloudWatch Logs console"
        },
        {
          question: "4. Create alarm",
          answer: "Use CloudWatch Alarm"
        },
        {
          question: "5. Send notification",
          answer: "Use SNS topic"
        },
        {
          question: "6. Monitor job failure",
          answer: "Check Glue job status"
        },
        {
          question: "7. Retry logic",
          answer: "Configure retries in Glue"
        },
        {
          question: "8. Track execution time",
          answer: "Use CloudWatch metrics"
        }
      ],
      note: "Monitoring is critical for production pipelines."
    },

    // 🎯 QUIZ
    quiz: [
      {
        question: "Monitoring?",
        options: ["Track", "Store", "Delete", "UI"],
        answer: 0,
        explanation: "Monitoring = tracking.",
        difficulty: "easy"
      },
      {
        question: "Logging?",
        options: ["Record", "Delete", "None", "Loop"],
        answer: 0,
        explanation: "Logging records activity.",
        difficulty: "easy"
      },
      {
        question: "Service?",
        options: ["CloudWatch", "S3", "EC2", "None"],
        answer: 0,
        explanation: "CloudWatch used.",
        difficulty: "easy"
      },
      {
        question: "Alerts?",
        options: ["Notify", "Store", "Delete", "None"],
        answer: 0,
        explanation: "Alerts notify.",
        difficulty: "medium"
      },
      {
        question: "Logs stored?",
        options: ["CloudWatch", "S3", "None", "Loop"],
        answer: 0,
        explanation: "Logs stored in CloudWatch.",
        difficulty: "medium"
      },
      {
        question: "Failure?",
        options: ["Detect", "Ignore", "None", "Loop"],
        answer: 0,
        explanation: "Monitoring detects failure.",
        difficulty: "medium"
      },
      {
        question: "SNS?",
        options: ["Notification", "Storage", "None", "Loop"],
        answer: 0,
        explanation: "SNS sends notifications.",
        difficulty: "hard"
      },
      {
        question: "Core?",
        options: ["Yes", "No", "None", "Loop"],
        answer: 0,
        explanation: "Important concept.",
        difficulty: "hard"
      },
      {
        question: "Production?",
        options: ["Yes", "No", "None", "Loop"],
        answer: 0,
        explanation: "Critical for production.",
        difficulty: "hard"
      }
    ],

    coreConcept: {
      thinking: "Build pipeline is easy, controlling it is real engineering",
      awsMapping: "IAM + Cost Optimization + Monitoring"
    },

    realTimeScenario: {
      problem: "Pipeline is working but is insecure, costly, and lacks monitoring",
      wrongApproach: [
        "Giving full access permissions",
        "Ignoring cost usage",
        "No logging or monitoring setup"
      ],
      correctApproach: "Implement IAM roles with least privilege, optimize cost using lifecycle policies, and monitor system using logs and alerts"
    },

    services: [
      {
        name: "IAM (Identity and Access Management)",
        type: "Security",
        icon: "🔐",
        whatItDoes: [
          "Manages user access and permissions",
          "Controls which service can access resources"
        ],
        whyUse: [
          "Secure pipeline",
          "Follow least privilege principle"
        ],
        interviewLine: "We use IAM roles with least privilege to secure access between services"
      },
      {
        name: "AWS CloudWatch",
        type: "Monitoring",
        icon: "📊",
        whatItDoes: [
          "Tracks logs and metrics",
          "Monitors performance of services",
          "Creates alerts for failures"
        ],
        whyUse: [
          "Detect failures early",
          "Monitor pipeline health"
        ],
        interviewLine: "CloudWatch is used to monitor logs and set alerts for pipeline failures"
      },
      {
        name: "S3 Lifecycle Policy",
        type: "Cost Optimization",
        icon: "💰",
        whatItDoes: [
          "Moves data to cheaper storage classes",
          "Deletes old data automatically"
        ],
        whyUse: [
          "Reduce storage cost",
          "Manage data lifecycle efficiently"
        ],
        interviewLine: "We use S3 lifecycle policies to move old data to cheaper storage and reduce cost"
      }
    ],

    practicalSteps: [
      { step: 1, action: "Create IAM Role", command: "Allow Glue/Lambda to access S3 securely" },
      { step: 2, action: "Attach policies", command: "S3 read/write permissions with limited access" },
      { step: 3, action: "Enable CloudWatch logs", command: "Track Glue and Lambda execution" },
      { step: 4, action: "Set S3 lifecycle policy", command: "Move data to Glacier after 30 days" }
    ],

    interviewQuestions: [
      { question: "What is IAM?", answer: "IAM is a service used to manage access and permissions for AWS resources" },
      { question: "What is least privilege principle?", answer: "It means giving only required permissions to users or services, nothing extra" },
      { question: "How do you secure S3?", answer: "Using IAM roles, bucket policies, and restricting public access" },
      { question: "What is CloudWatch?", answer: "CloudWatch is used for monitoring logs, metrics, and setting alerts in AWS" },
      { question: "Why monitoring is important?", answer: "It helps detect failures, debug issues, and maintain system health" },
      { question: "How to reduce AWS cost?", answer: "Use lifecycle policies, partitioning, and efficient data formats like Parquet" },
      { question: "What is S3 lifecycle policy?", answer: "It automatically moves or deletes data based on rules to reduce storage cost" },
      { question: "Real project example?", answer: "We used IAM roles for secure access, CloudWatch for monitoring, and lifecycle policies to reduce S3 storage cost" },
      { question: "What happens without IAM?", answer: "System becomes insecure and vulnerable to unauthorized access" },
      { question: "What happens without monitoring?", answer: "Failures go unnoticed and debugging becomes difficult" }
    ],

    commonMistakes: [
      "Giving full access permissions",
      "Ignoring cost optimization",
      "Not setting up monitoring",
      "No alert system for failures"
    ],

    memoryTrick: {
      line: "👉 Monitoring = track 📊\n👉 Logging = record 📜\n👉 CloudWatch = tool 📊\n👉 Alert = notify 🚨\n👉 SNS = message 📩\n👉 Logs = debug 🔍",
      flow: "IAM -> CloudWatch -> Cost Control"
    },

    revision: "CloudWatch logs + alerts = reliable pipeline",

    finalInterviewStatement: "Monitoring and logging are implemented using CloudWatch, where logs capture execution details and metrics track system performance. CloudWatch alarms integrated with SNS are used to send alerts in case of failures, ensuring high reliability and quick issue resolution."
  },

  'aws-flow-8': {
    title: "Flow 8: Control System (Security, Cost Optimization & Governance Layer)",
    subtitle: "Security, Cost Optimization & Governance Layer",
    icon: "🛡️",
    difficulty: "Advanced",
    duration: "~55 min",
    ready: true,

    objective: "Understand how to implement comprehensive control systems including security, cost optimization, and governance for production-ready AWS pipelines",

    // 🎭 COMIC STORY
    comic: `📖 1
Your pipeline is automated and monitored! 🎉
Everything runs smoothly...

But then:
- Intern accidentally deletes production data 😱
- AWS bill is $5000 (expected $500) 💸
- Competitor accesses your S3 bucket 🔓
- Compliance audit fails ❌

What went wrong?

📖 2
😰 Problems without Control:
🔓 Security Issues:
- Anyone can access S3 data
- No encryption
- Public buckets

💸 Cost Issues:
- Using expensive storage for old data
- Running large Glue jobs unnecessarily
- No budget limits

📋 Governance Issues:
- No data lineage
- Can't track who accessed what
- No compliance controls

📖 3
🤔 Solution

Implement Control System!

3 Pillars:
1️⃣ Security 🔐
2️⃣ Cost Optimization 💰
3️⃣ Governance 📊

📖 4
🔧 Control System Components:

🔐 Security:
- IAM Roles → Who can access what
- S3 Encryption → Protect data at rest
- VPC → Network isolation
- KMS → Key management

Example: Only data-team can read S3, only admin can delete

💰 Cost Optimization:
- S3 Lifecycle → Move old data to Glacier
- Glue job optimization → Right-size DPUs
- Redshift pause/resume → Save when not used
- Budget alerts → Notify if cost > $1000

📊 Governance:
- AWS Glue Data Catalog → Track metadata
- CloudTrail → Audit all actions
- Lake Formation → Fine-grained access
- Tags → Organize resources

📖 5
✨ Controlled Pipeline:

Before Controls:
- Anyone accesses data → Security risk
- Old data in Standard → High cost
- No audit trail → Compliance fail
- Monthly bill: $5000 💸

After Controls:
- IAM restricts access → Secure ✔
- Lifecycle moves to Glacier → Cost optimized ✔
- CloudTrail tracks everything → Compliant ✔
- Monthly bill: $800 💰

Saved $4200/month!

📖 6
💡 Aha Moment:

Without Controls = Risky + Expensive 😱
- Data breaches
- Unexpected costs
- Compliance violations
- No accountability

With Controls = Safe + Optimized 🛡️
- Data protected
- Costs under control
- Audit-ready
- Production-grade

Real-world: Pipeline + IAM + Encryption + Lifecycle + CloudTrail = Enterprise-Ready!`,
    deepDive: [
      "👉 What is Control System? Control system ensures: ✔ Security, ✔ Cost optimization, ✔ Governance, ✔ Access control",
      "👉 1. SECURITY (VERY IMPORTANT 🔐): ✔ IAM Roles & Policies, ✔ S3 Bucket Permissions, ✔ Encryption (at rest & in transit). Tools: IAM, KMS, S3 policies",
      "👉 2. COST OPTIMIZATION 💰: ✔ Use S3 lifecycle (move to Glacier), ✔ Partition data (reduce Athena cost), ✔ Use Parquet (less scan cost). Example: Athena cost = data scanned, Less data → less cost",
      "👉 3. GOVERNANCE 📜: ✔ Data catalog (schema control), ✔ Access control (who can see what), ✔ Audit logs. Tools: Glue Data Catalog, Lake Formation",
      "👉 4. MONITORING (ADVANCED) 📊: ✔ Cost monitoring, ✔ Usage tracking, ✔ Alerts. Tools: CloudWatch, AWS Budgets",
      "👉 FLOW: User → IAM → Access S3/Redshift, Query → Cost tracked → Alerts generated",
      "👉 Why it matters? ✔ Prevent data leaks, ✔ Reduce cost, ✔ Ensure compliance, ✔ Control system usage",
      "🎯 Interview Line: The control system layer ensures secure access using IAM, optimizes cost through efficient data storage and query strategies, and enforces governance using data catalogs and monitoring tools."
    ],

    // 📋 TYPES
    types: [
      "🔐 Security: IAM roles, Encryption",
      "💰 Cost: Partitioning, Parquet, Lifecycle",
      "📜 Governance: Data Catalog, Access control",
      "📊 Monitoring: CloudWatch, Budgets"
    ],

    // 💬 INTERACTIVE Q&A
    interactiveQA: [
      {
        question: "What is IAM?",
        hint: "Access control",
        options: [
          "Storage",
          "Access management service",
          "Database",
          "Query engine"
        ],
        answer: "Access management service",
        explanation: "IAM:\n✔ Controls access\n✔ Users & roles\n\n❌ Not storage",
        memoryTrick: "IAM = access 🔐"
      },
      {
        question: "How to secure S3?",
        hint: "Permissions",
        options: [
          "Delete data",
          "Bucket policies & IAM",
          "Query data",
          "Use EC2"
        ],
        answer: "Bucket policies & IAM",
        explanation: "Security:\n✔ IAM roles\n✔ Bucket policies",
        memoryTrick: "S3 secure = IAM 🔐"
      },
      {
        question: "How to reduce Athena cost?",
        hint: "Scan less",
        options: [
          "Increase data",
          "Partition & Parquet",
          "Use CSV",
          "Use EC2"
        ],
        answer: "Partition & Parquet",
        explanation: "Athena cost = data scanned\n\n✔ Partition\n✔ Parquet",
        memoryTrick: "Less scan = less cost 💰"
      },
      {
        question: "What is Data Catalog?",
        hint: "Metadata",
        options: [
          "Storage",
          "Metadata repository",
          "Query engine",
          "UI tool"
        ],
        answer: "Metadata repository",
        explanation: "Catalog stores:\n✔ Table schema\n✔ Metadata",
        memoryTrick: "Catalog = metadata 📚"
      },
      {
        question: "Interview Trap: Does Athena control access?",
        hint: "Think IAM",
        options: [
          "Yes",
          "No",
          "Sometimes",
          "Only admins"
        ],
        answer: "No",
        explanation: "Access control handled by:\n✔ IAM\n\nAthena only queries.",
        memoryTrick: "Athena ≠ security ❌"
      },
      {
        question: "What is cost monitoring?",
        hint: "Track usage",
        options: [
          "Deleting cost",
          "Tracking usage and spending",
          "Storing data",
          "Querying data"
        ],
        answer: "Tracking usage and spending",
        explanation: "Cost monitoring:\n✔ Alerts\n✔ Budgets",
        memoryTrick: "Cost monitor = track 💰"
      }
    ],

    // 💻 CODING CHALLENGE
    codingChallenge: {
      title: "Control System Practice",
      scenario: "Secure and optimize pipeline",
      thinkingApproach: [
        "Define access",
        "Secure data",
        "Optimize storage",
        "Monitor cost",
        "Apply governance"
      ],
      questions: [
        {
          question: "1. Assign IAM role",
          answer: "Attach IAM role to Glue/Lambda"
        },
        {
          question: "2. Secure S3 bucket",
          answer: "Use bucket policy"
        },
        {
          question: "3. Encrypt data",
          answer: "Enable KMS encryption"
        },
        {
          question: "4. Partition data",
          answer: "df.write.partitionBy(\"year\")"
        },
        {
          question: "5. Convert to Parquet",
          answer: "df.write.parquet(\"path\")"
        },
        {
          question: "6. Set lifecycle rule",
          answer: "Move data to Glacier"
        },
        {
          question: "7. Monitor cost",
          answer: "Use AWS Budgets"
        },
        {
          question: "8. Track logs",
          answer: "Use CloudWatch"
        }
      ],
      note: "Security + cost optimization are must for production systems."
    },

    // 🎯 QUIZ
    quiz: [
      {
        question: "IAM?",
        options: ["Access", "Store", "Delete", "UI"],
        answer: 0,
        explanation: "IAM controls access.",
        difficulty: "easy"
      },
      {
        question: "Security?",
        options: ["IAM", "S3", "None", "Loop"],
        answer: 0,
        explanation: "IAM secures system.",
        difficulty: "easy"
      },
      {
        question: "Cost?",
        options: ["Reduce", "Increase", "None", "Loop"],
        answer: 0,
        explanation: "Optimize cost.",
        difficulty: "easy"
      },
      {
        question: "Parquet?",
        options: ["Fast", "Slow", "None", "Loop"],
        answer: 0,
        explanation: "Parquet reduces cost.",
        difficulty: "medium"
      },
      {
        question: "Partition?",
        options: ["Less scan", "More scan", "None", "Loop"],
        answer: 0,
        explanation: "Partition reduces scan.",
        difficulty: "medium"
      },
      {
        question: "Catalog?",
        options: ["Metadata", "Data", "None", "Loop"],
        answer: 0,
        explanation: "Catalog stores metadata.",
        difficulty: "medium"
      },
      {
        question: "Budget?",
        options: ["Track", "Delete", "None", "Loop"],
        answer: 0,
        explanation: "Budget tracks cost.",
        difficulty: "hard"
      },
      {
        question: "Control?",
        options: ["Yes", "No", "None", "Loop"],
        answer: 0,
        explanation: "Control is critical.",
        difficulty: "hard"
      },
      {
        question: "Enterprise?",
        options: ["Yes", "No", "None", "Loop"],
        answer: 0,
        explanation: "Enterprise-level concept.",
        difficulty: "hard"
      }
    ],

    coreConcept: {
      thinking: "Build pipeline is easy, controlling it is real engineering",
      awsMapping: "IAM + Cost Optimization + Governance + Monitoring"
    },

    realTimeScenario: {
      problem: "Pipeline is working but is insecure, costly, and lacks proper governance",
      wrongApproach: [
        "Giving full access permissions to everyone",
        "Ignoring cost optimization strategies",
        "No governance or compliance controls",
        "No cost monitoring or budgets"
      ],
      correctApproach: "Implement IAM roles with least privilege, optimize cost using partitioning and lifecycle policies, enforce governance using Data Catalog, and monitor costs using AWS Budgets"
    },

    services: [
      {
        name: "IAM (Identity and Access Management)",
        type: "Security",
        icon: "🔐",
        whatItDoes: [
          "Manages user and service access",
          "Controls permissions with policies",
          "Implements least privilege principle"
        ],
        whyUse: [
          "Secure pipeline access",
          "Prevent unauthorized access",
          "Audit access patterns"
        ],
        interviewLine: "We use IAM roles with least privilege to secure access between services and prevent data breaches"
      },
      {
        name: "AWS KMS (Key Management Service)",
        type: "Encryption",
        icon: "🔑",
        whatItDoes: [
          "Manages encryption keys",
          "Encrypts data at rest and in transit"
        ],
        whyUse: [
          "Data security compliance",
          "Protect sensitive information"
        ],
        interviewLine: "KMS is used to encrypt sensitive data in S3 and Redshift for compliance"
      },
      {
        name: "AWS Budgets",
        type: "Cost Monitoring",
        icon: "💰",
        whatItDoes: [
          "Tracks AWS spending",
          "Sets cost alerts",
          "Monitors usage patterns"
        ],
        whyUse: [
          "Control costs",
          "Prevent budget overruns",
          "Optimize resource usage"
        ],
        interviewLine: "We use AWS Budgets to monitor costs and set alerts when spending exceeds thresholds"
      },
      {
        name: "AWS Lake Formation",
        type: "Data Governance",
        icon: "📜",
        whatItDoes: [
          "Centralized access control",
          "Data catalog management",
          "Fine-grained permissions"
        ],
        whyUse: [
          "Simplify data governance",
          "Control data access at column level",
          "Audit data usage"
        ],
        interviewLine: "Lake Formation provides centralized governance and fine-grained access control for data lake"
      }
    ],

    practicalSteps: [
      { step: 1, action: "Create IAM Role with least privilege", command: "Allow Glue/Lambda to access only required S3 buckets" },
      { step: 2, action: "Enable S3 encryption", command: "Use KMS encryption for sensitive data" },
      { step: 3, action: "Set up S3 lifecycle policy", command: "Move data to Glacier after 90 days, delete after 365 days" },
      { step: 4, action: "Create AWS Budget", command: "Set monthly budget with alerts at 80% and 100% thresholds" },
      { step: 5, action: "Implement partitioning", command: "Partition S3 data by date to reduce Athena query costs" },
      { step: 6, action: "Use Parquet format", command: "Convert CSV to Parquet to reduce storage and query costs" }
    ],

    interviewQuestions: [
      { question: "What is IAM?", answer: "IAM is Identity and Access Management service used to control access to AWS resources with roles and policies" },
      { question: "What is least privilege principle?", answer: "It means giving only the minimum permissions required for a user or service to perform their tasks" },
      { question: "How do you secure S3 buckets?", answer: "Using IAM roles, bucket policies, encryption (KMS), and blocking public access" },
      { question: "How to reduce Athena costs?", answer: "Use partitioning, Parquet format, and filter data to reduce amount of data scanned" },
      { question: "What is Data Catalog?", answer: "It's a centralized metadata repository that stores table schemas and is used by Athena, Glue, and Redshift" },
      { question: "What is AWS Budgets?", answer: "It's a service to set cost budgets and receive alerts when spending exceeds thresholds" },
      { question: "What is S3 lifecycle policy?", answer: "It automatically transitions objects to cheaper storage classes or deletes them based on age" },
      { question: "Why use KMS?", answer: "To encrypt sensitive data at rest and in transit for security and compliance" },
      { question: "What is Lake Formation?", answer: "It's a service for centralized data governance with fine-grained access control" },
      { question: "Real project example?", answer: "We implemented IAM roles for security, used partitioning and Parquet to reduce costs by 60%, set up AWS Budgets for monitoring, and used Lake Formation for governance" }
    ],

    commonMistakes: [
      "Giving full admin access to all services",
      "Not implementing encryption for sensitive data",
      "Ignoring cost optimization strategies",
      "No cost monitoring or budget alerts",
      "Not using partitioning and efficient file formats",
      "No governance or access control policies"
    ],

    memoryTrick: {
      line: "👉 IAM = access 🔐\n👉 Parquet = save cost 💰\n👉 Partition = fast ⚡\n👉 Catalog = metadata 📚\n👉 Budget = track 💸\n👉 Control = enterprise ✅",
      flow: "IAM -> CloudWatch -> Cost Control"
    },

    revision: "Secure + Optimize + Control = Production-ready system",

    finalInterviewStatement: "The control system layer ensures secure access using IAM roles and policies, optimizes cost through partitioning and efficient file formats like Parquet, and enforces governance using data catalogs and monitoring tools like CloudWatch and AWS Budgets."
  },

  'aws-premium-project': {
    title: "End-to-End Data Engineering Pipeline using AWS (S3, Glue, PySpark, Athena, Redshift)",
    subtitle: "From Raw Data to Business Insights",
    icon: "🏆",
    difficulty: "Advanced",
    duration: "~90 min",
    ready: true,
    isProject: true,

    objective: "Build a complete AWS data pipeline from ingestion to analytics with automation, security, and cost optimization",

    // 🎭 COMIC STORY
    // 🎭 COMIC STORY
    comic: `📖 1
You're hired as Data Engineer at a growing e-commerce company! 🎉

CEO says: "We have tons of data but no insights!"
- 1M orders daily
- User behavior logs
- Payment transactions
- Product catalog

All sitting unused in databases and files 😱

📖 2
😰 The Challenge:
Business needs answers:
- "What's our daily revenue?" 💰
- "Which products sell most?" 📊
- "Who are our top customers?" 👥
- "Show me real-time dashboard!" 📈

But data is:
- Scattered across systems
- Messy and unstructured
- No pipeline exists
- Everything manual!

📖 3
🤔 Your Solution

Build End-to-End AWS Data Pipeline!

🏗️ COMPLETE ARCHITECTURE:

┌─────────────────────────────────────────────┐
│         DATA SOURCES (Multiple)              │
│  📱 Mobile App  🌐 Website  💳 Payment API  │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  LAYER 1: INGESTION (Collect Data)          │
│  📥 AWS S3 - Raw Layer                       │
│  s3://bucket/raw/orders/                     │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  LAYER 2: ORGANIZATION (Structure Data)     │
│  📂 Partitioning: year=2024/month=01/        │
│  📄 Format: Parquet (optimized)              │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  LAYER 3: PROCESSING (Transform Data)       │
│  ⚙️ AWS Glue + PySpark                       │
│  • Remove nulls                              │
│  • Deduplicate                               │
│  • Join datasets                             │
│  • Aggregate metrics                         │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  📦 S3 - Curated Layer (Clean Data)          │
│  s3://bucket/curated/sales/                  │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  LAYER 4: QUERYING (Analytics)              │
│  🔍 Athena (Ad-hoc queries)                  │
│  🏛️ Redshift (Data Warehouse)                │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  LAYER 5: VISUALIZATION                     │
│  📊 QuickSight Dashboard                     │
│  Real-time business insights!                │
└─────────────────────────────────────────────┘

AUTOMATION LAYER (Runs Everything):
⚡ S3 Event → Lambda → Glue Job → SNS Alert

MONITORING LAYER (Watches Everything):
🛡️ CloudWatch Logs + Alarms + Metrics

CONTROL LAYER (Secures Everything):
🔐 IAM Roles + Encryption + Cost Optimization

📖 4
🔧 Implementation Steps:

Week 1: Setup Infrastructure
✔ Create S3 buckets (raw/processed/curated)
✔ Setup IAM roles
✔ Configure Glue Data Catalog

Week 2: Build ETL Pipeline
✔ Create Glue Crawler
✔ Write PySpark transformation code
✔ Test Glue jobs

Week 3: Setup Analytics
✔ Configure Athena
✔ Setup Redshift cluster
✔ Create QuickSight dashboards

Week 4: Automation & Monitoring
✔ Setup S3 event triggers
✔ Configure CloudWatch alarms
✔ Implement cost optimization

📖 5
✨ Results After Implementation:

Before Pipeline:
- Manual data processing: 8 hours/day
- Reports ready: Next day
- Data quality: 60% accurate
- Cost: Untracked
- Insights: None

After Pipeline:
- Automated processing: 15 minutes
- Reports ready: Real-time
- Data quality: 99% accurate
- Cost: Optimized ($800/month)
- Insights: Live dashboards! 📊

Business Impact:
✔ Revenue increased 25% (better decisions)
✔ Customer satisfaction up 40%
✔ Data team productivity 10x
✔ CEO is happy! 🎉

📖 6
💡 Aha Moment:

This is what Data Engineering is all about! 🚀

Raw Data → Pipeline → Business Value

Complete Flow:
📱 Sources → 📥 S3 Raw → 📂 Organize → ⚙️ Glue Transform → 📦 S3 Curated → 🔍 Athena/Redshift → 📊 QuickSight → 💰 Business Decisions

You've built an enterprise-grade data platform!

Skills Mastered:
✔ S3 (Storage)
✔ Glue (ETL)
✔ PySpark (Processing)
✔ Athena (Querying)
✔ Redshift (Warehouse)
✔ Lambda (Automation)
✔ CloudWatch (Monitoring)
✔ IAM (Security)

Welcome to Data Engineering! 🎓`,
    // 📚 DEEP DIVE
    deepDive: [
      "👉 Project Overview: We built a scalable data pipeline to process e-commerce data and generate insights.",
      "👉 Step 1: Ingestion - Data comes from: ✔ APIs, ✔ Logs. Stored in: 👉 S3 (Raw Layer)",
      "👉 Step 2: Organization - ✔ Raw / Processed / Curated layers, ✔ Partitioning (year, month), ✔ Parquet format",
      "👉 Step 3: Processing - Using: ✔ Glue + PySpark. Transformations: ✔ Remove NULLs, ✔ Deduplicate, ✔ Join orders + customers, ✔ Aggregations",
      "👉 Step 4: Querying - ✔ Athena → ad-hoc queries, ✔ Redshift → dashboards",
      "👉 Step 5: Automation - ✔ S3 event triggers Lambda, ✔ Lambda triggers Glue job",
      "👉 Step 6: Monitoring - ✔ CloudWatch logs, ✔ SNS alerts",
      "👉 Step 7: Control System - ✔ IAM roles, ✔ Cost optimization, ✔ Data catalog",
      "🎯 Final Output: Business dashboards showing: ✔ Sales trends, ✔ Top customers, ✔ Revenue insights"
    ],

    // 📋 TYPES
    types: [
      "📥 Ingestion → S3",
      "📂 Organization → Partition",
      "⚙️ Processing → Glue",
      "📊 Query → Athena/Redshift",
      "⚡ Automation → Lambda/Event",
      "🚨 Monitoring → CloudWatch",
      "🔐 Control → IAM"
    ],

    // 💬 INTERACTIVE Q&A
    interactiveQA: [
      {
        question: "Explain your project in 1 minute",
        hint: "Flow",
        options: [
          "Only tools",
          "End-to-end pipeline",
          "Only SQL",
          "Only Python"
        ],
        answer: "End-to-end pipeline",
        explanation: "Best Answer:\n\n\"We ingest data into S3, organize it using partitioning and Parquet, process it using Glue and PySpark, query using Athena/Redshift, automate using Lambda, and monitor using CloudWatch.\"",
        memoryTrick: "Flow answer 🎯"
      },
      {
        question: "Why S3 used?",
        hint: "Storage",
        options: [
          "Compute",
          "Storage",
          "Query",
          "UI"
        ],
        answer: "Storage",
        explanation: "S3:\n✔ Scalable\n✔ Cheap\n✔ Data lake",
        memoryTrick: "S3 = storage 📦"
      },
      {
        question: "Why Glue not Lambda?",
        hint: "Big data",
        options: [
          "Lambda faster",
          "Glue handles big data",
          "Lambda storage",
          "Glue UI"
        ],
        answer: "Glue handles big data",
        explanation: "Lambda:\n❌ Limited\n\nGlue:\n✔ Distributed processing",
        memoryTrick: "Glue = big data 🔥"
      },
      {
        question: "Athena vs Redshift?",
        hint: "Difference",
        options: [
          "Same",
          "Athena = S3 query, Redshift = warehouse",
          "Redshift = S3",
          "Athena = storage"
        ],
        answer: "Athena = S3 query, Redshift = warehouse",
        explanation: "Athena:\n✔ Serverless\n\nRedshift:\n✔ Fast analytics",
        memoryTrick: "Athena vs Redshift ⚔️"
      },
      {
        question: "How handle failures?",
        hint: "Monitoring",
        options: [
          "Ignore",
          "CloudWatch + Alerts",
          "Delete data",
          "Restart system"
        ],
        answer: "CloudWatch + Alerts",
        explanation: "Monitoring:\n✔ Logs\n✔ Alerts",
        memoryTrick: "Failure → alert 🚨"
      },
      {
        question: "How optimize cost?",
        hint: "Scan",
        options: [
          "Increase data",
          "Partition + Parquet",
          "Use CSV",
          "Use EC2"
        ],
        answer: "Partition + Parquet",
        explanation: "Less scan = less cost",
        memoryTrick: "Cost ↓ 📉"
      },
      {
        question: "Where schema stored?",
        hint: "Metadata",
        options: [
          "S3",
          "Glue Catalog",
          "Redshift",
          "Lambda"
        ],
        answer: "Glue Catalog",
        explanation: "Schema stored in catalog",
        memoryTrick: "Catalog 📚"
      },
      {
        question: "What is partitioning?",
        hint: "Folders",
        options: [
          "Delete",
          "Split into folders",
          "Join tables",
          "Sort rows"
        ],
        answer: "Split into folders",
        explanation: "Improves performance",
        memoryTrick: "Partition 📂"
      },
      {
        question: "How automation works?",
        hint: "Event",
        options: [
          "Manual",
          "S3 → Lambda → Glue",
          "Only cron",
          "UI trigger"
        ],
        answer: "S3 → Lambda → Glue",
        explanation: "Event-driven pipeline",
        memoryTrick: "Auto ⚡"
      },
      {
        question: "Biggest challenge?",
        hint: "Real world",
        options: [
          "UI",
          "Handling large data efficiently",
          "Design color",
          "Login page"
        ],
        answer: "Handling large data efficiently",
        explanation: "Real challenge:\n✔ Performance\n✔ Cost",
        memoryTrick: "Scale problem 📊"
      }
    ],

    // 💻 CODING CHALLENGE
    codingChallenge: {
      title: "Real Project Coding Flow",
      scenario: "E-commerce ETL pipeline",
      thinkingApproach: [
        "Read raw data",
        "Clean data",
        "Transform data",
        "Join datasets",
        "Store optimized data"
      ],
      questions: [
        {
          question: "1. Read raw data",
          answer: "df = spark.read.csv(\"s3://bucket/raw/orders.csv\", header=True)"
        },
        {
          question: "2. Handle NULLs",
          answer: "df = df.fillna(0)"
        },
        {
          question: "3. Remove duplicates",
          answer: "df = df.dropDuplicates()"
        },
        {
          question: "4. Join customer data",
          answer: "df = orders.join(customers, \"customer_id\")"
        },
        {
          question: "5. Aggregate sales",
          answer: "df.groupBy(\"month\").sum(\"amount\")"
        },
        {
          question: "6. Add new column",
          answer: "df.withColumn(\"tax\", df.amount * 0.1)"
        },
        {
          question: "7. Write Parquet",
          answer: "df.write.parquet(\"s3://bucket/processed/\")"
        },
        {
          question: "8. Partition data",
          answer: "df.write.partitionBy(\"year\").parquet(\"s3://bucket/curated/\")"
        }
      ],
      note: "This is real ETL pipeline coding used in industry."
    },

    // 🎯 QUIZ
    quiz: [
      {
        question: "Pipeline?",
        options: ["Yes", "No", "None", "Loop"],
        answer: 0,
        explanation: "End-to-end system.",
        difficulty: "easy"
      },
      {
        question: "S3?",
        options: ["Storage", "Compute", "None", "Loop"],
        answer: 0,
        explanation: "S3 stores data.",
        difficulty: "easy"
      },
      {
        question: "Glue?",
        options: ["ETL", "UI", "None", "Loop"],
        answer: 0,
        explanation: "Glue processes.",
        difficulty: "easy"
      },
      {
        question: "Athena?",
        options: ["Query", "Store", "None", "Loop"],
        answer: 0,
        explanation: "Athena queries.",
        difficulty: "medium"
      },
      {
        question: "Lambda?",
        options: ["Trigger", "Store", "None", "Loop"],
        answer: 0,
        explanation: "Lambda triggers.",
        difficulty: "medium"
      },
      {
        question: "CloudWatch?",
        options: ["Monitor", "Store", "None", "Loop"],
        answer: 0,
        explanation: "Monitoring tool.",
        difficulty: "medium"
      },
      {
        question: "IAM?",
        options: ["Access", "UI", "None", "Loop"],
        answer: 0,
        explanation: "Controls access.",
        difficulty: "hard"
      },
      {
        question: "Cost?",
        options: ["Optimize", "Increase", "None", "Loop"],
        answer: 0,
        explanation: "Optimize cost.",
        difficulty: "hard"
      },
      {
        question: "Final?",
        options: ["Yes", "No", "None", "Loop"],
        answer: 0,
        explanation: "Complete system.",
        difficulty: "hard"
      }
    ],

    coreConcept: {
      thinking: "All 8 flows combined into one production pipeline",
      awsMapping: "S3 -> Glue -> Redshift -> Athena -> Lambda -> CloudWatch -> IAM"
    },

    architectureDiagram: {
      title: "AWS Data Pipeline Architecture",
      flowText: "APIs/Logs -> S3 (raw) -> Glue -> S3 (processed) -> Redshift -> Athena -> Lambda -> SNS",
      nodes: [
        { id: "1", name: "Data Sources", type: "source" },
        { id: "2", name: "S3 Raw", type: "storage" },
        { id: "3", name: "Glue", type: "processing" },
        { id: "4", name: "S3 Processed", type: "storage" },
        { id: "5", name: "Redshift", type: "warehouse" },
        { id: "6", name: "Athena", type: "query" },
        { id: "7", name: "Lambda", type: "automation" },
        { id: "8", name: "CloudWatch", type: "monitoring" },
        { id: "9", name: "IAM", type: "security" }
      ]
    },

    stepCards: [
      { step: 1, title: "Data Ingestion", description: "Ingest data from APIs and logs into S3 raw layer", services: ["S3"], output: "Raw data stored in S3" },
      { step: 2, title: "Data Organization", description: "Organize data into raw, processed, and curated layers with partitioning", services: ["S3"], output: "Structured data lake" },
      { step: 3, title: "Data Processing", description: "Use Glue to clean, transform, and process raw data", services: ["Glue", "PySpark"], output: "Processed data in S3" },
      { step: 4, title: "Data Storage", description: "Load processed data into Redshift using COPY command", services: ["Redshift"], output: "Data available for analytics" },
      { step: 5, title: "Data Query", description: "Query data directly using Athena for quick analysis", services: ["Athena"], output: "Insights generated" },
      { step: 6, title: "Automation", description: "Trigger Glue jobs automatically using Lambda on file arrival", services: ["Lambda"], output: "Automated pipeline" },
      { step: 7, title: "Monitoring", description: "Monitor logs using CloudWatch and send alerts via SNS", services: ["CloudWatch", "SNS"], output: "Real-time alerts" },
      { step: 8, title: "Control System", description: "Secure using IAM and optimize costs", services: ["IAM", "Budgets"], output: "Secure and cost-optimized system" }
    ],

    keyFeatures: [
      "Incremental Data Load using Glue Job Bookmark",
      "Partitioned data in S3 for performance",
      "Automated pipeline using Lambda triggers",
      "Monitoring using CloudWatch",
      "Notifications using SNS",
      "Cost optimization using Parquet and lifecycle policies",
      "Security using IAM roles"
    ],

    interviewQuestions: [
      { question: "Explain your end-to-end project", answer: "I built an end-to-end data engineering pipeline where data is ingested into S3, organized using partitioning and Parquet, processed using Glue and PySpark, queried using Athena and Redshift, automated using Lambda and EventBridge, and monitored using CloudWatch with proper security and cost optimization" },
      { question: "How did you implement incremental load?", answer: "We used Glue job bookmarks to process only new data instead of full load" },
      { question: "How did you optimize performance?", answer: "We used partitioning in S3, Parquet format, and optimized Redshift using sort and distribution keys" },
      { question: "How did you automate pipeline?", answer: "We used S3 event triggers to invoke Lambda, which then triggered Glue jobs" },
      { question: "How did you handle failures?", answer: "We used CloudWatch logs and SNS alerts to detect and notify failures immediately" },
      { question: "How did you optimize costs?", answer: "We used partitioning, Parquet format, S3 lifecycle policies, and AWS Budgets for monitoring" },
      { question: "What was the biggest challenge?", answer: "Handling large data efficiently while keeping costs low and maintaining performance" },
      { question: "How did you secure the pipeline?", answer: "We used IAM roles with least privilege, S3 bucket policies, and KMS encryption" },
      { question: "What tools did you use?", answer: "S3, Glue, PySpark, Athena, Redshift, Lambda, CloudWatch, SNS, IAM" },
      { question: "What was the final output?", answer: "Business dashboards showing sales trends, top customers, and revenue insights" }
    ],

    commonMistakes: [
      "Not using partitioning and Parquet format",
      "Running full load every time instead of incremental",
      "Not implementing proper monitoring and alerts",
      "Ignoring cost optimization strategies",
      "Not securing data with IAM and encryption",
      "Manual pipeline execution instead of automation"
    ],

    memoryTrick: {
      line: "👉 S3 = storage 📦\n👉 Glue = ETL ⚙️\n👉 PySpark = engine 🔥\n👉 Athena = query 📊\n👉 Redshift = warehouse 🏢\n👉 Lambda = trigger ⚡\n👉 CloudWatch = monitor 🚨\n👉 IAM = security 🔐",
      flow: "Store → Process → Query → Automate → Monitor → Control"
    },

    revision: "Store → Process → Query → Automate → Monitor → Control",

    finalInterviewStatement: "I built an end-to-end data engineering pipeline where data is ingested into S3, organized using partitioning and Parquet, processed using Glue and PySpark, queried using Athena and Redshift, automated using Lambda and EventBridge, and monitored using CloudWatch with proper security and cost optimization."
  },

  'aws-security-governance': {
    topic: "Security & Governance",
    title: "Security & Governance – Data Protection and Access Control",
    subtitle: "Protecting Data and Ensuring Compliance",
    icon: "🔐",
    difficulty: "Advanced",
    duration: "~60 min",
    ready: true,

    aatma: {
      Architecture: {
        description: "Security and Governance ensure that data is protected, accessed by the right people, and used correctly. It controls who can see, use, and modify data in the system.",
        flow: "User → Authentication → Authorization → Data Access Control → Audit Logging",
        key_components: [
          "Unity Catalog",
          "Access Control (RBAC)",
          "Data Policies",
          "Security Rules",
          "Audit Logs"
        ]
      },

      Application: {
        description: "Used to protect sensitive data and ensure compliance with company and legal policies.",
        use_cases: [
          "Restricting access to financial data",
          "Protecting customer personal data",
          "Controlling who can modify tables",
          "Tracking user activity"
        ],
        real_world_example: "In a bank, only managers can see full account details, while employees see limited information."
      },

      Tools_and_Techniques: {
        tools: [
          "Databricks Unity Catalog",
          "IAM Roles",
          "Access Policies",
          "Audit Logging Systems"
        ],
        subtopics: {
          "Unity Catalog": "Central system in Databricks to manage data access, permissions, and governance across all workspaces.",
          "Role-Based Access Control (RBAC)": "Access is given based on roles. Example: Admin, Analyst, Viewer. Each role has different permissions.",
          "Data Governance": "Rules and policies to ensure data is accurate, secure, and used properly.",
          "Row-level Security": "Restricts access to specific rows of data. Example: User can see only their own data.",
          "Column-level Masking": "Hides sensitive columns like passwords or phone numbers. Example: 9876**** instead of full number.",
          "Audit Logs": "Records all actions like who accessed data, who modified data, and when. Useful for tracking and debugging."
        }
      },

      Monitoring_and_Optimization: {
        description: "Ensuring security policies are working correctly",
        methods: [
          "Monitor audit logs regularly",
          "Use RBAC properly",
          "Restrict unnecessary access",
          "Apply masking on sensitive data",
          "Review permissions periodically"
        ]
      },

      Advanced_and_RealWorld: {
        description: "In production systems, security and governance ensure compliance and prevent data misuse",
        advanced_concepts: [
          "Fine-grained access control",
          "Cross-workspace governance",
          "Data lineage tracking",
          "Policy enforcement automation",
          "Compliance (GDPR, HIPAA)"
        ],
        real_world_flow: "User Login → Role Check → Access Control → Data Masking → Query Execution → Audit Log Entry"
      }
    },

    objective: "Understand security and governance principles to protect data and ensure compliance in data engineering systems",

    comicStory: [
      { panel: 1, text: "Imagine you work at a bank 🏦" },
      { panel: 2, text: "😰 Problem:\n- Everyone can see all customer data\n- No control on who accesses what\n- Security risk!" },
      { panel: 3, text: "🤔 Solution:\nImplement Security & Governance" },
      { panel: 4, text: "✔ Role-based access\n✔ Data masking\n✔ Audit logs" },
      { panel: 5, text: "✨ Now data is secure!" },
      { panel: 6, text: "💡 Aha Moment:\nSecurity = Control who sees what 🔐" }
    ],

    deepDive: [
      "👉 What is Security & Governance? Security protects data from unauthorized access. Governance ensures data is used correctly and complies with policies.",
      "👉 Key Components: Unity Catalog (centralized governance), RBAC (role-based access), Row-level security, Column masking, Audit logs",
      "👉 Unity Catalog: Central system to manage data access, permissions, and governance across all workspaces in Databricks",
      "👉 RBAC (Role-Based Access Control): Access is given based on roles like Admin, Analyst, Viewer. Each role has different permissions.",
      "👉 Row-level Security: Restricts access to specific rows. Example: Sales rep can only see their region's data",
      "👉 Column-level Masking: Hides sensitive columns. Example: Show 9876**** instead of full phone number",
      "👉 Audit Logs: Records all actions - who accessed data, when, and what they did. Critical for compliance and debugging",
      "👉 Why it matters? Prevents data breaches, Ensures compliance (GDPR, HIPAA), Tracks data usage, Protects sensitive information",
      "🎯 Interview Line: Security and governance in data engineering involve implementing access controls, data masking, and audit logging to protect sensitive data and ensure compliance with regulations."
    ],

    coreConcept: {
      thinking: "Control who can access what data and track all activities",
      awsMapping: "IAM Roles → S3 Bucket Policies → Lake Formation → CloudTrail"
    },

    realTimeScenario: {
      sources: ["Customer Data", "Financial Records", "Healthcare Information", "Employee Data"],
      problem: "Sensitive data is accessible to everyone without proper controls, creating security and compliance risks",
      wrongApproach: [
        "Giving everyone full access to all data",
        "No data masking for sensitive fields",
        "Not tracking who accesses what data"
      ],
      correctApproach: "Implement RBAC with least privilege, apply data masking for sensitive fields, enable audit logging, and regularly review access permissions"
    },

    services: [
      {
        name: "AWS IAM",
        type: "Access Management",
        icon: "🔐",
        whatItDoes: [
          "Manages user and service access",
          "Controls permissions with policies",
          "Implements role-based access control"
        ],
        whyUse: [
          "Secure data access",
          "Least privilege principle",
          "Centralized access management"
        ],
        interviewLine: "IAM is used to control who can access AWS resources and what actions they can perform"
      },
      {
        name: "AWS Lake Formation",
        type: "Data Governance",
        icon: "📜",
        whatItDoes: [
          "Centralized data governance",
          "Fine-grained access control",
          "Column-level security",
          "Data catalog management"
        ],
        whyUse: [
          "Simplify data lake security",
          "Control access at table and column level",
          "Audit data access"
        ],
        interviewLine: "Lake Formation provides centralized governance and fine-grained access control for data lakes"
      },
      {
        name: "AWS CloudTrail",
        type: "Audit Logging",
        icon: "📋",
        whatItDoes: [
          "Records all API calls",
          "Tracks user activity",
          "Provides audit trail"
        ],
        whyUse: [
          "Compliance requirements",
          "Security monitoring",
          "Troubleshooting"
        ],
        interviewLine: "CloudTrail logs all AWS API calls for security auditing and compliance"
      }
    ],

    interactiveQA: [
      {
        question: "What is RBAC?",
        hint: "Role-based",
        options: [
          "Database system",
          "Role-Based Access Control",
          "Storage service",
          "Query engine"
        ],
        answer: "Role-Based Access Control",
        explanation: "RBAC assigns permissions based on user roles like Admin, Analyst, Viewer",
        memoryTrick: "RBAC = Roles control access 🔐"
      },
      {
        question: "What is data masking?",
        hint: "Hide sensitive data",
        options: [
          "Delete data",
          "Hide sensitive information",
          "Encrypt all data",
          "Backup data"
        ],
        answer: "Hide sensitive information",
        explanation: "Data masking hides sensitive fields like phone numbers, showing 9876**** instead of full number",
        memoryTrick: "Masking = Hide sensitive 🎭"
      },
      {
        question: "What are audit logs?",
        hint: "Track activity",
        options: [
          "Error logs",
          "Record of all data access and modifications",
          "Performance logs",
          "Debug logs"
        ],
        answer: "Record of all data access and modifications",
        explanation: "Audit logs track who accessed data, when, and what actions they performed",
        memoryTrick: "Audit = Track everything 📋"
      },
      {
        question: "What is row-level security?",
        hint: "Restrict rows",
        options: [
          "Encrypt rows",
          "Restrict access to specific rows",
          "Delete rows",
          "Sort rows"
        ],
        answer: "Restrict access to specific rows",
        explanation: "Row-level security ensures users can only see rows they're authorized to access",
        memoryTrick: "Row security = Filter by user 🔒"
      }
    ],

    codingChallenge: {
      title: "Security & Governance Implementation",
      scenario: "Implement security controls for sensitive data",
      thinkingApproach: [
        "Identify sensitive data",
        "Define access roles",
        "Apply data masking",
        "Enable audit logging",
        "Review permissions"
      ],
      questions: [
        {
          question: "1. Create IAM role with S3 read-only access",
          answer: "Create IAM role with policy:\n{\n  \"Effect\": \"Allow\",\n  \"Action\": [\"s3:GetObject\", \"s3:ListBucket\"],\n  \"Resource\": \"arn:aws:s3:::bucket-name/*\"\n}"
        },
        {
          question: "2. Apply column masking in SQL",
          answer: "SELECT \n  customer_id,\n  name,\n  CONCAT(LEFT(phone, 4), '****') as masked_phone\nFROM customers;"
        },
        {
          question: "3. Enable CloudTrail logging",
          answer: "aws cloudtrail create-trail --name my-trail --s3-bucket-name my-bucket"
        },
        {
          question: "4. Query audit logs",
          answer: "SELECT * FROM cloudtrail_logs \nWHERE eventName = 'GetObject' \nAND userIdentity.userName = 'john';"
        }
      ],
      note: "Security and governance are critical for production data systems"
    },

    quiz: [
      {
        question: "What is the purpose of RBAC?",
        options: ["Store data", "Control access based on roles", "Process data", "Query data"],
        answer: 1,
        explanation: "RBAC controls access based on user roles",
        difficulty: "easy"
      },
      {
        question: "What does data masking do?",
        options: ["Delete data", "Hide sensitive information", "Encrypt data", "Backup data"],
        answer: 1,
        explanation: "Data masking hides sensitive information while keeping data usable",
        difficulty: "easy"
      },
      {
        question: "What is Unity Catalog?",
        options: ["Storage service", "Centralized governance system", "Query engine", "ETL tool"],
        answer: 1,
        explanation: "Unity Catalog is Databricks' centralized governance system",
        difficulty: "medium"
      },
      {
        question: "Why are audit logs important?",
        options: ["Performance", "Track data access and compliance", "Storage", "Speed"],
        answer: 1,
        explanation: "Audit logs track all data access for security and compliance",
        difficulty: "medium"
      },
      {
        question: "What is row-level security?",
        options: ["Encrypt rows", "Restrict access to specific rows", "Delete rows", "Sort rows"],
        answer: 1,
        explanation: "Row-level security restricts which rows users can access",
        difficulty: "hard"
      }
    ],

    practicalSteps: [
      { step: 1, action: "Create IAM roles", command: "Define roles with least privilege access" },
      { step: 2, action: "Set up Lake Formation", command: "Configure fine-grained access control" },
      { step: 3, action: "Enable CloudTrail", command: "aws cloudtrail create-trail --name audit-trail" },
      { step: 4, action: "Apply data masking", command: "Implement masking in queries for sensitive fields" },
      { step: 5, action: "Review audit logs", command: "Regularly monitor CloudTrail logs for suspicious activity" }
    ],

    interviewQuestions: [
      { question: "What is security and governance in data engineering?", answer: "Security and governance involve implementing access controls, data protection, and compliance measures to ensure data is accessed only by authorized users and used according to policies" },
      { question: "What is RBAC?", answer: "Role-Based Access Control assigns permissions based on user roles like Admin, Analyst, Viewer, ensuring users have only the access they need" },
      { question: "What is data masking?", answer: "Data masking hides sensitive information like phone numbers or credit cards while keeping data usable for analysis" },
      { question: "What are audit logs?", answer: "Audit logs record all data access and modifications, tracking who accessed what data and when, critical for compliance and security" },
      { question: "What is Unity Catalog?", answer: "Unity Catalog is Databricks' centralized governance system for managing data access, permissions, and metadata across workspaces" },
      { question: "What is row-level security?", answer: "Row-level security restricts access to specific rows based on user permissions, ensuring users only see data they're authorized to access" },
      { question: "How do you implement security in AWS?", answer: "Using IAM roles for access control, Lake Formation for governance, CloudTrail for audit logging, and KMS for encryption" },
      { question: "Why is governance important?", answer: "Governance ensures data quality, compliance with regulations, proper access controls, and accountability for data usage" }
    ],

    commonMistakes: [
      "Giving everyone full access to all data",
      "Not implementing data masking for sensitive fields",
      "Ignoring audit logging requirements",
      "Not reviewing access permissions regularly",
      "Failing to comply with regulations like GDPR"
    ],

    memoryTrick: {
      line: "👉 RBAC = Roles 🔐\n👉 Masking = Hide 🎭\n👉 Audit = Track 📋\n👉 Row security = Filter 🔒\n👉 Governance = Control 📜",
      flow: "User → Auth → Access Control → Masking → Audit"
    },

    revision: "Security = Control access, Governance = Ensure compliance, Audit = Track everything",

    finalInterviewStatement: "Security and governance in data engineering involve implementing role-based access control, data masking for sensitive information, audit logging for compliance, and centralized governance systems like Unity Catalog or Lake Formation to ensure data is protected and used according to policies and regulations."
  }

};
