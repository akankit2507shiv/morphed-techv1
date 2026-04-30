// Databricks Topics Content
const databricksContent = {

  'databricks-fundamentals': {
    title: "Data Engineering Fundamentals (Building Blocks of Modern Data Pipelines)",
    subtitle: "Understanding the core concepts of data engineering",
    icon: "🏗️",
    difficulty: "Beginner",
    duration: "~60 min",
    ready: true,

    comic: `
Imagine you're managing a city's water supply system 💧

Water comes from different sources:
- Rivers 🏞️
- Lakes 🌊
- Wells 🕳️

😰 Problem
Water is:
- Dirty (needs cleaning)
- Different formats (some salty, some fresh)
- Scattered everywhere

🤔 Solution
Build a pipeline system:
1️⃣ Collect water from all sources
2️⃣ Clean and purify it
3️⃣ Store in tanks
4️⃣ Deliver to homes

✨ This is EXACTLY Data Engineering!

👉 Data = Water
👉 Pipeline = Water pipes
👉 Storage = Water tanks
👉 Users = Homes getting clean water

💡 Aha Moment:
Without proper pipelines, data (like water) cannot reach users correctly! 🚰
`,

    deepDive: `
👉 What is Data Engineering?

Data Engineering is the practice of designing and building systems that:
✔ Collect raw data from multiple sources
✔ Transform and clean the data
✔ Store it in an organized way
✔ Make it available for analysis and decision-making

Think of it like preparing ingredients before cooking:
- Raw vegetables (raw data) → Washed and chopped (cleaned data) → Ready to cook (ready for analysis)

---

👉 Why Data Engineering Matters?

In today's world:
- Companies generate MASSIVE amounts of data every second
- Raw data is messy, incomplete, and inconsistent
- Business decisions depend on CLEAN and ORGANIZED data

Example: Amazon
- Collects data from: website clicks, purchases, reviews, delivery tracking
- Processes it to: recommend products, optimize delivery routes, predict demand
- Without data engineering → No personalized recommendations! ❌

---

👉 Core Concepts:

🔹 1. Data Pipeline
A data pipeline is the complete journey of data from source to destination.

Real-world example:
You order food on Swiggy 🍕
→ Order data goes to server
→ Data is stored in database
→ Restaurant receives order
→ Delivery tracking updates in real-time
→ You see "Order Delivered" ✅

This entire flow = Data Pipeline

---

🔹 2. Batch vs Streaming Processing

Batch Processing:
- Like doing laundry once a week
- Collect all data → Process together at scheduled time
- Example: Monthly sales report

Streaming Processing:
- Like washing dishes immediately after eating
- Process data as soon as it arrives (real-time)
- Example: Fraud detection in credit card transactions

---

🔹 3. OLTP vs OLAP

OLTP (Online Transaction Processing):
- Like a shop counter where customers place orders one by one
- Fast, small transactions
- Example: ATM withdrawal, online shopping checkout

OLAP (Online Analytical Processing):
- Like a manager analyzing monthly sales reports
- Slow, complex queries on large data
- Example: "Which product sold most in last 6 months?"

---

🔹 4. Data Storage Types

Data Warehouse:
- Like a well-organized library 📚
- Everything is properly categorized and indexed
- Fast to search, but expensive to maintain
- Example: Amazon Redshift, Snowflake

Data Lake:
- Like a huge storage room where everything is dumped 📦
- Raw data stored as-is (no organization)
- Cheap storage, but hard to find things
- Example: AWS S3, Azure Data Lake

Data Lakehouse:
- Best of both worlds! 🎯
- Combines flexibility of Data Lake + organization of Data Warehouse
- Example: Databricks Delta Lake

---

🔹 5. ETL vs ELT

ETL (Extract, Transform, Load):
- Old approach
- Clean vegetables BEFORE putting in fridge
- Transform data → Then load into warehouse

ELT (Extract, Load, Transform):
- Modern approach
- Put vegetables in fridge → Clean when needed
- Load raw data → Transform later when needed
- Faster and more flexible ✅

---

👉 Real-World Data Pipeline Architecture

Source → Ingestion → Processing → Storage → Consumption

Example: Netflix Recommendation System

1️⃣ Source: User watches a movie
2️⃣ Ingestion: Data collected (what movie, how long, did they finish?)
3️⃣ Processing: Analyze patterns (this user likes action movies)
4️⃣ Storage: Store in database
5️⃣ Consumption: Show recommendations on homepage

---

👉 Key Roles in Data Engineering

Data Engineer:
- Builds pipelines
- Ensures data quality
- Optimizes performance

Data Analyst:
- Uses cleaned data
- Creates reports and dashboards

Data Scientist:
- Builds ML models
- Predicts future trends

---

👉 Tools Used in Data Engineering

- Apache Spark / PySpark → Process big data
- Databricks → Unified platform for data engineering
- AWS S3 → Store raw data
- Airflow → Schedule and monitor pipelines
- SQL → Query and transform data
- Python → Write data processing logic

---

🎯 Interview Line:
"Data Engineering is the backbone of modern data-driven organizations. It involves building robust pipelines that extract data from various sources, transform it into a usable format, and load it into storage systems for analytics and decision-making. The key is ensuring data quality, reliability, and scalability."
`,

    types: `
🔄 Batch Processing → Process data in groups at scheduled intervals
⚡ Streaming Processing → Process data in real-time as it arrives

📊 OLTP → Fast transactions (INSERT, UPDATE, DELETE)
📈 OLAP → Complex analytics (aggregations, reports)

🏢 Data Warehouse → Structured, organized, expensive
🌊 Data Lake → Raw, unstructured, cheap
🎯 Data Lakehouse → Best of both worlds

🔧 ETL → Transform before loading
🔄 ELT → Load first, transform later
`,

    qa: [
      {
        q: "Why do we need Data Engineering?",
        hint: "Think about raw data quality",
        options: ["For fun", "To clean and organize messy data", "To delete data", "To slow down systems"],
        answer: "To clean and organize messy data",
        explanation: `Raw data is always messy, incomplete, and inconsistent.\nData Engineering ensures:\n✔ Data is cleaned\n✔ Data is organized\n✔ Data is reliable for decision-making\n\nWithout it → Garbage data leads to wrong decisions! ❌`,
        memory: "Clean data = Correct decisions ✅"
      },
      {
        q: "What is a Data Pipeline?",
        hint: "Think about data journey",
        options: ["A type of database", "The complete journey of data from source to destination", "A programming language", "A storage system"],
        answer: "The complete journey of data from source to destination",
        explanation: `A data pipeline is like a water pipeline:\n- Collects data from sources\n- Processes and cleans it\n- Stores it\n- Makes it available for use\n\nExample: Order placed → Stored → Processed → Delivered`,
        memory: "Pipeline = Data journey 🚰"
      },
      {
        q: "Difference between Batch and Streaming?",
        hint: "Think about timing",
        options: ["No difference", "Batch = scheduled groups, Streaming = real-time", "Batch is faster", "Streaming is older"],
        answer: "Batch = scheduled groups, Streaming = real-time",
        explanation: `Batch:\n- Process data in groups\n- Scheduled (hourly, daily)\n- Example: Monthly reports\n\nStreaming:\n- Process data immediately\n- Real-time\n- Example: Fraud detection`,
        memory: "Batch = later ⏰, Stream = now ⚡"
      },
      {
        q: "What is OLTP?",
        hint: "Think transactions",
        options: ["Analytical queries", "Fast transactional operations", "Data storage", "Reporting system"],
        answer: "Fast transactional operations",
        explanation: `OLTP = Online Transaction Processing\n- Fast operations\n- Small transactions\n- INSERT, UPDATE, DELETE\n\nExample:\n- ATM withdrawal\n- Online shopping checkout\n- Booking a ticket`,
        memory: "OLTP = Fast transactions 💳"
      },
      {
        q: "What is OLAP?",
        hint: "Think analysis",
        options: ["Fast transactions", "Complex analytical queries", "Data deletion", "User login"],
        answer: "Complex analytical queries",
        explanation: `OLAP = Online Analytical Processing\n- Slow, complex queries\n- Large data analysis\n- Aggregations, reports\n\nExample:\n- "Total sales last quarter?"\n- "Which product sold most?"\n- "Customer trends?"`,
        memory: "OLAP = Analysis 📊"
      },
      {
        q: "Difference between Data Warehouse and Data Lake?",
        hint: "Think organization",
        options: ["Same thing", "Warehouse = organized, Lake = raw", "Lake is faster", "Warehouse is cheaper"],
        answer: "Warehouse = organized, Lake = raw",
        explanation: `Data Warehouse:\n✔ Structured and organized\n✔ Fast queries\n✔ Expensive\n\nData Lake:\n✔ Raw, unstructured data\n✔ Cheap storage\n✔ Flexible\n\nLakehouse = Best of both! 🎯`,
        memory: "Warehouse = organized 📚, Lake = raw 🌊"
      },
      {
        q: "What is ETL?",
        hint: "Think process order",
        options: ["Extract, Transform, Load", "Extract, Load, Transform", "Execute, Test, Launch", "Error, Test, Log"],
        answer: "Extract, Transform, Load",
        explanation: `ETL:\n1️⃣ Extract → Get data from sources\n2️⃣ Transform → Clean and process\n3️⃣ Load → Store in warehouse\n\nLike:\n- Collect vegetables\n- Wash and chop them\n- Put in fridge`,
        memory: "ETL = Extract → Transform → Load 🔄"
      },
      {
        q: "What is ELT?",
        hint: "Modern approach",
        options: ["Extract, Load, Transform", "Extract, Transform, Load", "Execute, Load, Test", "Error, Load, Transform"],
        answer: "Extract, Load, Transform",
        explanation: `ELT (Modern approach):\n1️⃣ Extract → Get data\n2️⃣ Load → Store raw data\n3️⃣ Transform → Process when needed\n\nBenefits:\n✔ Faster ingestion\n✔ More flexible\n✔ Can reprocess anytime`,
        memory: "ELT = Load first, transform later ⚡"
      },
      {
        q: "What happens if data pipeline breaks?",
        hint: "Think business impact",
        options: ["Nothing happens", "Wrong data reaches users, leading to bad decisions", "System runs faster", "Data gets cleaned automatically"],
        answer: "Wrong data reaches users, leading to bad decisions",
        explanation: `If pipeline breaks:\n❌ Data doesn't flow\n❌ Reports show wrong numbers\n❌ Business makes wrong decisions\n❌ Revenue loss\n\nExample:\n- Wrong inventory count → Out of stock\n- Wrong pricing → Loss of profit`,
        memory: "Broken pipeline = Bad decisions ❌"
      }
    ],

    coding: {
      title: "Understanding Data Flow",
      scenario: "Simulate a simple data pipeline",
      thinkingApproach: [
        "Step 1: Extract data from source",
        "Step 2: Transform (clean and process)",
        "Step 3: Load into target",
        "Step 4: Validate output",
        "Step 5: Handle errors",
        "Step 6: Monitor pipeline"
      ],
      question: "Create a simple ETL pipeline to count users by city",
      input: `data = [\n  {"name": "Ankit", "city": "Mumbai", "age": 25},\n  {"name": "Rahul", "city": "Delhi", "age": 30},\n  {"name": "Priya", "city": "Mumbai", "age": 28}\n]`,
      expectedOutput: `Mumbai: 2\nDelhi: 1`,
      solution: `# Simple ETL Pipeline
data = [
  {"name": "Ankit", "city": "Mumbai", "age": 25},
  {"name": "Rahul", "city": "Delhi", "age": 30},
  {"name": "Priya", "city": "Mumbai", "age": 28}
]

# Extract (already have data)

# Transform (count by city)
city_count = {}
for record in data:
    city = record["city"]
    city_count[city] = city_count.get(city, 0) + 1

# Load (output results)
for city, count in sorted(city_count.items()):
    print(f"{city}: {count}")`,
      note: "This is a basic example. Real pipelines handle millions of records using tools like PySpark and Databricks."
    },

    quiz: [
      { q: "Data Engineering?", options: ["UI Design", "Building data pipelines", "Gaming", "Testing"], answer: 1 },
      { q: "Pipeline?", options: ["Data journey", "Storage", "UI", "None"], answer: 0 },
      { q: "Batch?", options: ["Real-time", "Scheduled", "Never", "Always"], answer: 1 },
      { q: "Streaming?", options: ["Real-time", "Scheduled", "Never", "Monthly"], answer: 0 },
      { q: "OLTP?", options: ["Transactions", "Analysis", "Storage", "UI"], answer: 0 },
      { q: "OLAP?", options: ["Analysis", "Transactions", "UI", "Gaming"], answer: 0 },
      { q: "Data Lake?", options: ["Raw data", "Organized", "Fast", "Small"], answer: 0 },
      { q: "ETL?", options: ["Extract-Transform-Load", "Load-Extract-Transform", "Test-Execute-Load", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "Data Engineering is the foundation of modern data-driven organizations. It involves designing and building robust data pipelines that extract data from various sources, transform it through cleaning and processing, and load it into storage systems for analytics and business intelligence.

The key challenges include ensuring data quality, handling large-scale data efficiently, maintaining pipeline reliability, and choosing the right architecture (batch vs streaming, ETL vs ELT, warehouse vs lake).

Understanding these fundamentals is crucial because every data engineering tool and platform, including Databricks, is built on these core concepts."
`,

    memory: `
👉 Data Engineering = Building pipelines 🏗️
👉 Pipeline = Data journey 🚰
👉 Batch = Scheduled processing ⏰
👉 Streaming = Real-time processing ⚡
👉 OLTP = Fast transactions 💳
👉 OLAP = Complex analysis 📊
👉 Warehouse = Organized 📚
👉 Lake = Raw data 🌊
👉 Lakehouse = Best of both 🎯
👉 ETL = Transform before load 🔄
👉 ELT = Load before transform ⚡
👉 Clean data = Good decisions ✅
`,

    revision: "Data Engineering = Building pipelines to collect, clean, and organize data for business decisions"
  },

  'databricks-overview': {
    title: "Databricks Overview (Unified Analytics Platform for Big Data)",
    subtitle: "Understanding Databricks architecture and core components",
    icon: "🚀",
    difficulty: "Beginner",
    duration: "~55 min",
    ready: true,

    comic: `
Imagine you're running a smart factory 🏭

Raw materials (data) come in:
- From trucks 🚚
- From ships 🚢
- From trains 🚂

😰 Problem
You need:
- Storage room (to keep materials)
- Machines (to process)
- Workers (to operate)
- Office (to manage)

All in DIFFERENT places → Slow and messy! ❌

🤔 Solution
Build ONE SMART FACTORY that has:
✔ Storage (DBFS)
✔ Processing machines (Clusters)
✔ Control room (Notebooks)
✔ Management office (Workspace)

✨ This is EXACTLY Databricks!

👉 Everything in ONE place
👉 Work faster and smarter
👉 Team can collaborate easily

💡 Aha Moment:
Databricks = All-in-one data factory 🏭
`,

    deepDive: `
👉 What is Databricks?

Databricks is a unified analytics platform built on Apache Spark that combines:
✔ Data Engineering (building pipelines)
✔ Data Science (ML models)
✔ Data Analytics (insights)
✔ Business Intelligence (dashboards)

Think of it as:
- Google Docs for data engineers
- Everyone works on same platform
- Real-time collaboration
- Cloud-based (no setup needed)

---

👉 Why Databricks?

Traditional Approach:
❌ Data stored in one place (S3)
❌ Processing in another (EMR)
❌ Code in another (GitHub)
❌ Results in another (Redshift)

Databricks Approach:
✅ Everything in ONE platform
✅ Write code → Process data → Store results
✅ All in same workspace

---

👉 Lakehouse Architecture

Imagine you have:
- Data Warehouse → Organized but expensive
- Data Lake → Cheap but messy

Lakehouse = Best of both! 🎯

How it works:
1️⃣ Store raw data (like Data Lake)
2️⃣ Organize it (like Data Warehouse)
3️⃣ Query fast (like Data Warehouse)
4️⃣ Pay less (like Data Lake)

Real-world example:
- Netflix stores viewing data in Lakehouse
- Analyzes patterns
- Recommends shows
- All in one system!

---

👉 Databricks Workspace UI

Workspace is your control center 🎛️

Main sections:

1️⃣ **Workspace**
- Your project folders
- Notebooks (code files)
- Dashboards
- Like your computer's file explorer

2️⃣ **Repos**
- Connect to GitHub/GitLab
- Version control
- Team collaboration
- Like Google Drive for code

3️⃣ **Data**
- Tables and databases
- File storage (DBFS)
- External connections (S3, Azure)

4️⃣ **Compute**
- Clusters (processing power)
- Start/stop machines
- Monitor usage

5️⃣ **Workflows**
- Schedule jobs
- Automate pipelines
- Monitor runs

---

👉 Clusters (The Processing Engine)

Cluster = Group of computers working together

Types:

🔹 **Single Node Cluster**
- ONE computer doing all work
- Like one chef cooking entire meal
- Use cases:
  ✔ Testing code
  ✔ Small datasets
  ✔ Learning/practice
- Pros: Cheap
- Cons: Slow for big data

🔹 **Multi Node Cluster**
- MANY computers working together
- Like restaurant kitchen with many chefs
- Components:
  ✔ Driver Node (boss chef)
  ✔ Worker Nodes (assistant chefs)
- Use cases:
  ✔ Production workloads
  ✔ Large datasets (GBs, TBs)
  ✔ Real-time processing
- Pros: Fast, scalable
- Cons: More expensive

Real-world example:
Processing 1 TB data:
- Single Node → 10 hours ⏰
- Multi Node (10 workers) → 1 hour ⚡

---

👉 DBFS (Databricks File System)

DBFS is your storage room 📦

What is it?
- Distributed file system
- Stores data files (CSV, JSON, Parquet)
- Accessible from all notebooks
- Like Google Drive but for data

Structure:
/FileStore/
  - data/
    - sales.csv
    - customers.json
  - tables/
  - jars/

How to use:
# Read from DBFS
df = spark.read.csv('/FileStore/data/sales.csv')

# Write to DBFS
df.write.parquet('/FileStore/output/processed_data')

Important:
- DBFS ≠ Database
- DBFS = File storage
- Database = Structured tables

---

👉 Notebooks (Your Coding Environment)

Notebook = Interactive coding environment

Supported languages:
- 🐍 Python (most popular)
- 📊 SQL (for queries)
- ⚙️ Scala (advanced)
- 📈 R (data science)

Features:
✔ Write code in cells
✔ Run cell-by-cell
✔ See output immediately
✔ Add comments and markdown
✔ Visualize data (charts, graphs)
✔ Share with team

Example notebook structure:
Cell 1: Load data
Cell 2: Clean data
Cell 3: Transform data
Cell 4: Analyze data
Cell 5: Visualize results

Real-world use:
- Data engineers write ETL pipelines
- Data scientists build ML models
- Analysts create reports
- All in same notebook!

---

👉 Repos & Version Control

Repos = Save different versions of your work

Why needed?
- Track changes
- Collaborate with team
- Rollback if something breaks
- Code review

How it works:
1️⃣ Connect Databricks to GitHub
2️⃣ Write code in notebook
3️⃣ Commit changes
4️⃣ Push to GitHub
5️⃣ Team can pull and review

Like:
- Google Docs version history
- But for code

---

👉 Key Concepts Summary

| Component | Purpose | Example |
|-----------|---------|----------|
| Workspace | Project management | Your folders |
| Cluster | Processing power | Computers |
| DBFS | File storage | Data files |
| Notebook | Coding environment | Write code |
| Repos | Version control | GitHub |
| Tables | Structured data | SQL tables |

---

👉 Real-World Workflow

Example: Daily Sales Report

1️⃣ **Store**: Sales data lands in DBFS
2️⃣ **Process**: Notebook reads and cleans data
3️⃣ **Compute**: Cluster processes millions of records
4️⃣ **Transform**: Aggregate sales by region
5️⃣ **Store**: Save results to Delta table
6️⃣ **Visualize**: Create dashboard
7️⃣ **Schedule**: Run daily at 6 AM

All done in Databricks! 🚀

---

🎯 Interview Line:
"Databricks is a unified analytics platform built on Apache Spark that provides an integrated environment for data engineering, data science, and analytics. It combines data storage (DBFS, Delta Lake), processing (Spark clusters), development (notebooks), and collaboration (workspace) in a single cloud-based platform, following the Lakehouse architecture."
`,

    types: `
🖥️ Single Node Cluster:
- One machine
- Good for: Testing, small data
- Cost: Low
- Speed: Slower

👥 Multi Node Cluster:
- Multiple machines
- Good for: Production, big data
- Cost: Higher
- Speed: Much faster

📦 DBFS:
- File storage system
- Stores: CSV, JSON, Parquet
- Access: From all notebooks

📓 Notebooks:
- Interactive coding
- Languages: Python, SQL, Scala, R
- Features: Cell execution, visualization

🏗️ Lakehouse:
- Combines warehouse + lake
- Flexible + Fast
- Cost-effective
`,

    qa: [
      {
        q: "Why is Databricks popular?",
        hint: "Think all-in-one",
        options: ["Only for storage", "Combines data engineering, analytics, and ML in one platform", "Only for visualization", "Only for databases"],
        answer: "Combines data engineering, analytics, and ML in one platform",
        explanation: `Databricks provides:\n✔ Data Engineering (ETL pipelines)\n✔ Data Science (ML models)\n✔ Analytics (SQL queries)\n✔ Collaboration (team workspace)\n\nAll in ONE platform → No need for multiple tools!`,
        memory: "Databricks = All-in-one platform 🏭"
      },
      {
        q: "What is Lakehouse Architecture?",
        hint: "Best of both worlds",
        options: ["Only data lake", "Only data warehouse", "Combines data lake flexibility with warehouse performance", "Only for storage"],
        answer: "Combines data lake flexibility with warehouse performance",
        explanation: `Lakehouse:\n✔ Store raw data (like Lake)\n✔ Query fast (like Warehouse)\n✔ Cost-effective\n✔ ACID transactions\n\nBest of both worlds! 🎯`,
        memory: "Lakehouse = Lake + Warehouse 🏠"
      },
      {
        q: "What are clusters in Databricks?",
        hint: "Processing power",
        options: ["Storage systems", "Group of computers for processing data", "Databases", "Notebooks"],
        answer: "Group of computers for processing data",
        explanation: `Cluster = Processing engine\n\nComponents:\n- Driver Node (coordinator)\n- Worker Nodes (processors)\n\nLike a team working together to process data faster!`,
        memory: "Cluster = Processing team 👥"
      },
      {
        q: "Difference between Single Node and Multi Node cluster?",
        hint: "One vs many",
        options: ["No difference", "Single = 1 machine, Multi = many machines working together", "Single is faster", "Multi is cheaper"],
        answer: "Single = 1 machine, Multi = many machines working together",
        explanation: `Single Node:\n✔ One computer\n✔ Cheap\n✔ Good for testing\n\nMulti Node:\n✔ Many computers\n✔ Expensive\n✔ Fast for big data\n✔ Production use`,
        memory: "Single = 1 🖥️, Multi = Many 👥"
      },
      {
        q: "What is DBFS?",
        hint: "File storage",
        options: ["Database", "Databricks File System for storing files", "Cluster type", "Notebook"],
        answer: "Databricks File System for storing files",
        explanation: `DBFS = File storage system\n\nStores:\n- CSV files\n- JSON files\n- Parquet files\n- Images, logs, etc.\n\nNOT a database! Just file storage.`,
        memory: "DBFS = File storage 📦"
      },
      {
        q: "What happens if cluster is stopped?",
        hint: "Think cost and processing",
        options: ["Data is lost", "Processing stops and cost stops", "Nothing happens", "Data gets deleted"],
        answer: "Processing stops and cost stops",
        explanation: `When cluster stops:\n✔ Processing stops\n✔ Billing stops\n✔ Data remains safe (in DBFS/tables)\n✔ Can restart anytime\n\nImportant: Always stop clusters when not in use to save money! 💰`,
        memory: "Stop cluster = Save money 💰"
      },
      {
        q: "What are Notebooks in Databricks?",
        hint: "Coding environment",
        options: ["Storage system", "Interactive coding environment", "Database", "Cluster type"],
        answer: "Interactive coding environment",
        explanation: `Notebooks:\n✔ Write code (Python, SQL, Scala)\n✔ Run cell by cell\n✔ See output immediately\n✔ Visualize data\n✔ Collaborate with team\n\nLike Jupyter notebooks but better!`,
        memory: "Notebook = Code + Run + Visualize 📓"
      },
      {
        q: "Why use version control (Repos) in Databricks?",
        hint: "Track changes",
        options: ["For storage", "To track code changes and collaborate", "To run clusters", "To store data"],
        answer: "To track code changes and collaborate",
        explanation: `Version control:\n✔ Track all changes\n✔ Rollback if needed\n✔ Team collaboration\n✔ Code review\n✔ Backup\n\nLike Google Docs history but for code!`,
        memory: "Repos = Track changes 📝"
      },
      {
        q: "Can you run SQL in Databricks?",
        hint: "Yes!",
        options: ["No", "Yes, in notebooks and SQL editor", "Only Python", "Only Scala"],
        answer: "Yes, in notebooks and SQL editor",
        explanation: `Databricks supports:\n✔ SQL queries in notebooks\n✔ SQL editor\n✔ SQL dashboards\n✔ Query Delta tables\n\nVery powerful for data analysis!`,
        memory: "SQL = Yes ✅"
      }
    ],

    coding: {
      title: "Reading Data from DBFS",
      scenario: "Load a CSV file from DBFS and display records",
      thinkingApproach: [
        "Step 1: Understand DBFS path structure",
        "Step 2: Use spark.read to load data",
        "Step 3: Specify file format (CSV)",
        "Step 4: Display data",
        "Step 5: Check schema",
        "Step 6: Validate output"
      ],
      question: "Simulate reading CSV from DBFS and displaying data",
      input: `data = [\n  {"name": "Ankit", "city": "Mumbai", "sales": 5000},\n  {"name": "Rahul", "city": "Delhi", "sales": 7000}\n]`,
      expectedOutput: `Ankit,Mumbai,5000\nRahul,Delhi,7000`,
      solution: `# Simulating Databricks DBFS read
data = [
  {"name": "Ankit", "city": "Mumbai", "sales": 5000},
  {"name": "Rahul", "city": "Delhi", "sales": 7000}
]

# Display data (simulating df.show())
for row in data:
    print(f"{row['name']},{row['city']},{row['sales']}")`,
      note: "In real Databricks: df = spark.read.csv('/FileStore/data.csv', header=True)"
    },

    quiz: [
      { q: "Databricks?", options: ["Only storage", "Unified platform", "Only DB", "None"], answer: 1 },
      { q: "DBFS?", options: ["File storage", "Database", "Cluster", "None"], answer: 0 },
      { q: "Single Node?", options: ["One machine", "Many", "None", "Loop"], answer: 0 },
      { q: "Multi Node?", options: ["One", "Many machines", "None", "Loop"], answer: 1 },
      { q: "Lakehouse?", options: ["Lake+Warehouse", "Only lake", "None", "Loop"], answer: 0 },
      { q: "Notebook?", options: ["Coding env", "Storage", "None", "Loop"], answer: 0 },
      { q: "Stop cluster?", options: ["Save cost", "Lose data", "None", "Loop"], answer: 0 },
      { q: "SQL?", options: ["Yes", "No", "Maybe", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "Databricks is a unified analytics platform built on Apache Spark that provides an integrated environment for data engineering, data science, and business analytics.

Key components include:
- Workspace for project management and collaboration
- Clusters for distributed data processing (single-node for testing, multi-node for production)
- DBFS (Databricks File System) for file storage
- Notebooks for interactive development supporting Python, SQL, Scala, and R
- Repos for version control and team collaboration
- Lakehouse architecture combining the flexibility of data lakes with the performance of data warehouses

Databricks simplifies big data processing by providing everything in one platform, eliminating the need for multiple tools and reducing complexity in data workflows."
`,

    memory: `
👉 Databricks = All-in-one platform 🏭
👉 Lakehouse = Lake + Warehouse 🏠
👉 Cluster = Processing team 👥
👉 Single Node = 1 machine 🖥️
👉 Multi Node = Many machines ⚡
👉 DBFS = File storage 📦
👉 Notebook = Code + Run 📓
👉 Repos = Version control 📝
👉 Stop cluster = Save money 💰
👉 Workspace = Control center 🎛️
`,

    revision: "Databricks = Unified platform with Workspace, Clusters, DBFS, Notebooks, and Lakehouse architecture for big data processing"
  },

  'apache-spark-core': {
    title: "Apache Spark Core (Distributed Data Processing Engine)",
    subtitle: "Understanding Spark architecture and execution model",
    icon: "⚡",
    difficulty: "Intermediate",
    duration: "~65 min",
    ready: true,

    comic: `
Imagine you're running a restaurant kitchen 🍳

One chef cooking alone:
- Takes 10 hours to cook 100 meals 😰
- Slow and tiring
- Customers wait forever ❌

🤔 Solution
Hire 10 chefs working together:
- Each cooks 10 meals
- All done in 1 hour! ⚡
- Customers happy ✅

✨ This is EXACTLY Apache Spark!

👉 Driver = Head Chef (gives instructions)
👉 Executors = Assistant Chefs (do the cooking)
👉 Data = Ingredients to process

💡 Aha Moment:
More workers = Faster processing! 🚀

BUT there's a twist:
Head chef plans everything first (lazy evaluation)
Only starts cooking when customer orders (action) 😄
`,

    deepDive: `
👉 What is Apache Spark?

Apache Spark is a distributed data processing engine that:
✔ Processes massive amounts of data (GBs, TBs, PBs)
✔ Uses multiple machines working together
✔ Keeps data in memory (RAM) for speed
✔ Supports multiple languages (Python, SQL, Scala, R)

Think of it as:
- Google for big data processing
- 100x faster than traditional MapReduce
- Industry standard for data engineering

---

👉 Why Apache Spark?

Traditional Processing:
❌ Single machine → Slow
❌ Disk-based → Very slow
❌ Limited by one computer's power

Spark Processing:
✅ Multiple machines → Fast
✅ Memory-based → Super fast
✅ Scalable (add more machines = more power)

Real-world example:
Processing 1 TB of log files:
- Traditional: 10 hours ⏰
- Spark (10 machines): 30 minutes ⚡

---

👉 Spark Architecture

Spark has 2 main components:

🔹 **Driver (The Manager)**
- Your main program
- Creates execution plan
- Distributes work to executors
- Collects results
- Like a project manager

Responsibilities:
✔ Parse your code
✔ Create DAG (execution plan)
✔ Schedule tasks
✔ Monitor progress

🔹 **Executors (The Workers)**
- Run on worker machines
- Execute actual tasks
- Store data in memory
- Send results back to driver
- Like team members doing work

Responsibilities:
✔ Execute code
✔ Store data partitions
✔ Return results

Flow:
You write code → Driver plans → Executors execute → Results returned

---

👉 RDD vs DataFrame vs Dataset

Spark has 3 data abstractions:

🔹 **RDD (Resilient Distributed Dataset)**
- Lowest level
- Most flexible
- Most control
- Slowest (no optimization)

Like:
- Raw ingredients
- You decide everything
- More work, more control

When to use:
✔ Need low-level control
✔ Complex custom logic
✔ Rarely used in modern projects

Example:
rdd = sc.parallelize([1, 2, 3, 4, 5])
rdd.map(lambda x: x * 2).collect()

🔹 **DataFrame (Most Popular)**
- High level
- Table-like structure (rows + columns)
- Optimized by Catalyst engine
- Fast and easy

Like:
- Excel spreadsheet
- Organized and structured
- Easy to work with

When to use:
✔ Structured data
✔ SQL-like operations
✔ Most common in production

Example:
df = spark.read.csv('data.csv')
df.filter(df.age > 25).show()

🔹 **Dataset (Scala Only)**
- Type-safe
- Compile-time checks
- Best of RDD + DataFrame
- Only in Scala/Java

Like:
- Smart spreadsheet with rules
- Catches errors early

When to use:
✔ Using Scala
✔ Need type safety
✔ Complex applications

**Recommendation:**
Use DataFrame for 99% of cases! 🎯

---

👉 Transformations vs Actions

Spark operations are divided into 2 types:

🔹 **Transformations (Planning Phase)**
- Define WHAT to do
- Don't execute immediately
- Lazy evaluation
- Return new DataFrame/RDD

Like:
- Writing a recipe
- Planning steps
- No actual cooking yet

Common transformations:
✔ select() - Choose columns
✔ filter() - Filter rows
✔ withColumn() - Add/modify column
✔ groupBy() - Group data
✔ join() - Combine datasets
✔ orderBy() - Sort data

Example:
df.filter(df.age > 25)  # Just planning, not executed!

🔹 **Actions (Execution Phase)**
- Trigger actual execution
- Return results
- Spark runs all transformations

Like:
- Actually cooking the food
- Getting final result
- Work happens now!

Common actions:
✔ show() - Display data
✔ count() - Count rows
✔ collect() - Get all data
✔ take(n) - Get first n rows
✔ write() - Save data

Example:
df.count()  # NOW Spark executes everything!

**Key Point:**
Transformations = Lazy (plan)
Actions = Eager (execute)

---

👉 Lazy Evaluation (VERY IMPORTANT)

Spark doesn't execute code immediately!

How it works:
1️⃣ You write transformations
2️⃣ Spark builds execution plan (DAG)
3️⃣ Spark optimizes the plan
4️⃣ Only when action is called → Execute!

Why lazy?
✔ Optimization opportunities
✔ Avoid unnecessary work
✔ Better performance

Example:
df = spark.read.csv('data.csv')  # Not executed
df2 = df.filter(df.age > 25)     # Not executed
df3 = df2.select('name')          # Not executed
df3.show()                        # NOW everything executes!

Real-world analogy:
You don't start cooking until customer orders!
You plan the full meal first, then cook efficiently.

---

👉 Narrow vs Wide Transformations

🔹 **Narrow Transformations**
- Each input partition → One output partition
- No data shuffling
- Fast!
- Data stays on same executor

Examples:
✔ map()
✔ filter()
✔ select()
✔ withColumn()

Like:
- Each chef works on their own station
- No need to share ingredients

🔹 **Wide Transformations**
- Data from multiple partitions → One partition
- Requires shuffling (data movement)
- Slow!
- Network transfer needed

Examples:
✔ groupBy()
✔ join()
✔ orderBy()
✔ distinct()

Like:
- Chefs need to share ingredients
- Takes time to move things around

**Performance Tip:**
Minimize wide transformations! They're expensive.

---

👉 DAG (Directed Acyclic Graph)

DAG = Execution plan created by Spark

What is it?
- Visual flowchart of operations
- Shows dependencies
- No loops (acyclic)
- Optimized by Spark

Example flow:
Read CSV → Filter → Select → GroupBy → Count

Why important?
✔ Spark optimizes this plan
✔ Combines operations
✔ Removes unnecessary steps
✔ Improves performance

You can view DAG in Spark UI!

---

👉 Spark Execution Flow

Complete flow:

1️⃣ **Write Code**
You: df.filter(df.age > 25).count()

2️⃣ **Driver Creates Plan**
Driver: Analyzes code → Creates DAG → Optimizes

3️⃣ **Divide into Tasks**
Driver: Breaks work into small tasks

4️⃣ **Send to Executors**
Driver: Distributes tasks to executors

5️⃣ **Executors Process**
Executors: Run tasks on data partitions

6️⃣ **Return Results**
Executors: Send results back to driver

7️⃣ **Show Output**
Driver: Displays final result to you

---

👉 Key Concepts Summary

| Concept | Description | Example |
|---------|-------------|----------|
| Driver | Manager/Coordinator | Your laptop |
| Executor | Worker doing tasks | Cluster machines |
| RDD | Low-level API | Rarely used |
| DataFrame | High-level API | Most common |
| Transformation | Planning step | filter(), select() |
| Action | Execution trigger | show(), count() |
| Lazy Evaluation | Delayed execution | Optimize first |
| Narrow | No shuffle | Fast |
| Wide | Shuffle needed | Slow |
| DAG | Execution plan | Optimized flow |

---

👉 Real-World Use Cases

1️⃣ **Log Analysis**
- Process millions of log files
- Find errors and patterns
- Generate reports

2️⃣ **ETL Pipelines**
- Extract from databases
- Transform and clean
- Load to warehouse

3️⃣ **Real-time Analytics**
- Process streaming data
- Detect fraud
- Monitor systems

4️⃣ **Machine Learning**
- Process training data
- Feature engineering
- Model training

---

🎯 Interview Line:
"Apache Spark is a distributed data processing engine that uses in-memory computation and parallel processing across multiple machines. It follows a master-slave architecture with a Driver coordinating work and Executors performing tasks. Spark uses lazy evaluation to optimize execution plans (DAG) and provides multiple APIs (RDD, DataFrame, Dataset) with DataFrame being the most commonly used due to its optimization and ease of use."
`,

    types: `
⚡ RDD (Resilient Distributed Dataset):
- Low-level API
- Flexible but slower
- Manual optimization needed
- Use case: Complex custom logic

📊 DataFrame:
- High-level API (most popular)
- Table-like structure
- Optimized by Catalyst
- Use case: 99% of projects

🎯 Dataset:
- Type-safe (Scala/Java)
- Compile-time checks
- Best of RDD + DataFrame
- Use case: Scala applications

🔄 Transformations:
- Lazy operations
- Build execution plan
- Examples: filter, select, groupBy

🚀 Actions:
- Trigger execution
- Return results
- Examples: show, count, collect

📈 Narrow Transformations:
- No shuffle (fast)
- Examples: map, filter

📉 Wide Transformations:
- Shuffle required (slow)
- Examples: groupBy, join
`,

    qa: [
      {
        q: "Why is Spark fast?",
        hint: "Think memory and parallel",
        options: ["Uses disk", "In-memory computation and parallel processing", "Single machine", "Uses loops"],
        answer: "In-memory computation and parallel processing",
        explanation: `Spark is fast because:\n✔ Processes data in RAM (not disk)\n✔ Uses multiple machines in parallel\n✔ Optimizes execution plans\n✔ Minimizes data movement\n\n100x faster than traditional MapReduce!`,
        memory: "Spark = Memory + Parallel ⚡"
      },
      {
        q: "What is the role of Driver in Spark?",
        hint: "Think manager",
        options: ["Executes tasks", "Coordinates and manages execution", "Stores data", "Displays UI"],
        answer: "Coordinates and manages execution",
        explanation: `Driver:\n✔ Creates execution plan (DAG)\n✔ Schedules tasks\n✔ Distributes work to executors\n✔ Collects results\n\nLike a project manager coordinating team!`,
        memory: "Driver = Manager 🧑💼"
      },
      {
        q: "What is the role of Executor in Spark?",
        hint: "Think worker",
        options: ["Plans execution", "Executes tasks and stores data", "Writes code", "Creates DAG"],
        answer: "Executes tasks and stores data",
        explanation: `Executor:\n✔ Runs actual tasks\n✔ Stores data partitions in memory\n✔ Sends results to driver\n\nLike workers doing the actual job!`,
        memory: "Executor = Worker 👷"
      },
      {
        q: "Difference between RDD and DataFrame?",
        hint: "Think level and speed",
        options: ["Same thing", "RDD = low-level/slow, DataFrame = high-level/fast", "RDD is faster", "DataFrame is older"],
        answer: "RDD = low-level/slow, DataFrame = high-level/fast",
        explanation: `RDD:\n✔ Low-level API\n✔ No optimization\n✔ More control\n\nDataFrame:\n✔ High-level API\n✔ Optimized by Catalyst\n✔ Easier to use\n\nUse DataFrame in 99% cases!`,
        memory: "DataFrame > RDD 🎯"
      },
      {
        q: "What is Lazy Evaluation?",
        hint: "Think delayed execution",
        options: ["Immediate execution", "Delayed execution until action is called", "Slow processing", "Error handling"],
        answer: "Delayed execution until action is called",
        explanation: `Lazy Evaluation:\n✔ Transformations don't execute immediately\n✔ Spark builds execution plan\n✔ Optimizes the plan\n✔ Executes only when action is called\n\nLike planning full meal before cooking!`,
        memory: "Lazy = Plan first, execute later 🧠"
      },
      {
        q: "Difference between Transformation and Action?",
        hint: "Think plan vs execute",
        options: ["Same thing", "Transformation = plan, Action = execute", "Action is slower", "Transformation returns results"],
        answer: "Transformation = plan, Action = execute",
        explanation: `Transformation:\n✔ Lazy (doesn't execute)\n✔ Returns new DataFrame\n✔ Examples: filter, select\n\nAction:\n✔ Triggers execution\n✔ Returns results\n✔ Examples: show, count`,
        memory: "Transform = Plan 📋, Action = Execute 🚀"
      },
      {
        q: "When does Spark execute code?",
        hint: "Think action",
        options: ["Immediately", "Only when action is called", "Never", "After 5 seconds"],
        answer: "Only when action is called",
        explanation: `Spark uses lazy evaluation:\n✔ Transformations → Just planning\n✔ Action → Triggers execution\n\nExample:\ndf.filter() → No execution\ndf.show() → NOW executes!`,
        memory: "Action = Trigger ⚡"
      },
      {
        q: "What is DAG in Spark?",
        hint: "Think execution plan",
        options: ["Database", "Directed Acyclic Graph (execution plan)", "Data storage", "Programming language"],
        answer: "Directed Acyclic Graph (execution plan)",
        explanation: `DAG:\n✔ Visual execution plan\n✔ Shows operation dependencies\n✔ No loops (acyclic)\n✔ Optimized by Spark\n\nLike a flowchart of your data processing!`,
        memory: "DAG = Execution flowchart 📊"
      },
      {
        q: "Difference between Narrow and Wide transformations?",
        hint: "Think data movement",
        options: ["No difference", "Narrow = no shuffle, Wide = shuffle required", "Narrow is slower", "Wide is better"],
        answer: "Narrow = no shuffle, Wide = shuffle required",
        explanation: `Narrow:\n✔ No data movement\n✔ Fast\n✔ Examples: filter, map\n\nWide:\n✔ Data shuffles across network\n✔ Slow\n✔ Examples: groupBy, join\n\nMinimize wide transformations!`,
        memory: "Narrow = Fast 🚀, Wide = Slow 🐌"
      }
    ],

    coding: {
      title: "Spark Transformations and Actions",
      scenario: "Filter data and count results",
      thinkingApproach: [
        "Step 1: Understand lazy evaluation",
        "Step 2: Apply transformation (filter)",
        "Step 3: Apply action (count)",
        "Step 4: Observe execution",
        "Step 5: Validate output",
        "Step 6: Understand the flow"
      ],
      question: "Filter users with age > 25 and count them",
      input: `data = [\n  {"name": "Ankit", "age": 30},\n  {"name": "Rahul", "age": 22},\n  {"name": "Priya", "age": 28}\n]`,
      expectedOutput: `2`,
      solution: `# Simulating Spark transformation and action
data = [
  {"name": "Ankit", "age": 30},
  {"name": "Rahul", "age": 22},
  {"name": "Priya", "age": 28}
]

# Transformation (lazy - just planning)
filtered = [row for row in data if row["age"] > 25]

# Action (triggers execution)
count = len(filtered)
print(count)`,
      note: "In real Spark: df.filter(df.age > 25).count()"
    },

    quiz: [
      { q: "Spark fast?", options: ["Disk", "Memory", "Loop", "None"], answer: 1 },
      { q: "Driver?", options: ["Manager", "Worker", "Storage", "None"], answer: 0 },
      { q: "Executor?", options: ["Worker", "Manager", "Storage", "None"], answer: 0 },
      { q: "Faster?", options: ["RDD", "DataFrame", "Both", "None"], answer: 1 },
      { q: "Lazy?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 },
      { q: "Transform?", options: ["Plan", "Execute", "Store", "None"], answer: 0 },
      { q: "Action?", options: ["Execute", "Plan", "Store", "None"], answer: 0 },
      { q: "DAG?", options: ["Plan", "Storage", "UI", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "Apache Spark is a distributed data processing engine that enables fast, in-memory computation across multiple machines. 

Key architecture components:
- Driver: Coordinates execution, creates DAG, schedules tasks
- Executors: Run tasks, store data partitions, return results

Spark provides three APIs:
- RDD: Low-level, flexible but slower
- DataFrame: High-level, optimized, most commonly used
- Dataset: Type-safe, Scala/Java only

Spark uses lazy evaluation where transformations build an execution plan (DAG) and only execute when an action is called. This allows Spark to optimize the entire workflow before execution.

Transformations are categorized as:
- Narrow: No shuffle, fast (filter, map)
- Wide: Shuffle required, slower (groupBy, join)

This architecture makes Spark 100x faster than traditional MapReduce and ideal for big data processing."
`,

    memory: `
👉 Spark = Memory + Parallel ⚡
👉 Driver = Manager 🧑💼
👉 Executor = Worker 👷
👉 DataFrame > RDD 🎯
👉 Lazy = Plan first 🧠
👉 Transform = Plan 📋
👉 Action = Execute 🚀
👉 DAG = Flowchart 📊
👉 Narrow = Fast 🚀
👉 Wide = Slow 🐌
`,

    revision: "Apache Spark = Distributed engine with Driver-Executor architecture, lazy evaluation, and optimized DataFrame API for fast big data processing"
  },

  'pyspark': {
    title: "PySpark (Python API for Apache Spark)",
    subtitle: "Process big data using Python with distributed computing",
    icon: "🐍",
    difficulty: "Intermediate",
    duration: "~70 min",
    ready: true,

    comic: `
Imagine you're a chef managing a huge restaurant 🍽️

Old way (Regular Python):
- You cook ALL dishes alone 👨‍🍳
- 1000 orders = 1000 hours! 😰
- Customers wait forever ❌
- Kitchen is chaos 🔥

🤔 Solution: PySpark Kitchen

Hire 100 assistant chefs:
- Each cooks 10 dishes
- All done in 1 hour! ⚡
- Customers happy ✅

✨ This is EXACTLY PySpark!

👉 SparkSession = Kitchen Manager
👉 Driver = Head Chef (coordinates)
👉 Executors = Assistant Chefs (cook in parallel)
👉 DataFrame = Recipe book (organized instructions)

💡 Aha Moment:
Regular Python = One chef 🐌
PySpark = 100 chefs working together 🚀

You write Python code → Spark distributes work → Results come back fast!
`,

    deepDive: `
👉 What is PySpark?

PySpark is the Python API for Apache Spark that allows you to:
✔ Process large-scale data (GBs, TBs, PBs)
✔ Use familiar Python syntax
✔ Leverage distributed computing
✔ Work with DataFrames (like pandas but distributed)
✔ Run on clusters (multiple machines)

Think of it as:
- Pandas on steroids 💪
- Python + Spark power combined
- Big data processing made easy

---

👉 Architecture

Flow: User Code → SparkSession → Driver → Executors → Parallel Processing → Result

🔹 **SparkSession**
- Entry point to PySpark
- Creates DataFrames
- Manages cluster connection
- Like opening a connection to database

Creating SparkSession:
from pyspark.sql import SparkSession

spark = SparkSession.builder \
  .appName("MyApp") \
  .getOrCreate()

🔹 **Driver**
- Your Python program
- Controls execution
- Coordinates work
- Collects results

🔹 **Executors**
- Worker processes
- Run on cluster nodes
- Process data partitions
- Store data in memory

🔹 **DataFrame**
- Main data structure
- Distributed table (rows + columns)
- Optimized by Spark
- Similar to pandas DataFrame

---

👉 Reading Data

PySpark can read from multiple sources:

🔹 **CSV**
df = spark.read.csv('file.csv', header=True, inferSchema=True)

Options:
- header=True → First row is column names
- inferSchema=True → Auto-detect data types
- sep=',' → Delimiter (default comma)

🔹 **JSON**
df = spark.read.json('file.json')

Automatic schema detection!

🔹 **Parquet**
df = spark.read.parquet('file.parquet')

Fastest format for big data!

🔹 **Delta Lake**
df = spark.read.format('delta').load('/path/to/table')

Recommended for production!

🔹 **Database**
df = spark.read.format('jdbc') \
  .option('url', 'jdbc:mysql://host:port/db') \
  .option('dbtable', 'table_name') \
  .option('user', 'username') \
  .option('password', 'password') \
  .load()

---

👉 Writing Data

Save processed data:

🔹 **Parquet**
df.write.format('parquet').mode('overwrite').save('/path')

🔹 **Delta**
df.write.format('delta').mode('overwrite').save('/path')

🔹 **CSV**
df.write.format('csv').mode('overwrite').option('header', True).save('/path')

Modes:
- overwrite → Replace existing data
- append → Add to existing data
- ignore → Skip if exists
- error → Fail if exists (default)

---

👉 DataFrame Operations

🔹 **select() - Choose Columns**
df.select('name', 'age').show()

# Multiple ways
df.select(df.name, df.age).show()
df.select(df['name'], df['age']).show()

🔹 **filter() / where() - Filter Rows**
df.filter(df.age > 18).show()
df.where(df.age > 18).show()  # Same as filter

# Multiple conditions
df.filter((df.age > 18) & (df.city == 'Mumbai')).show()

🔹 **withColumn() - Add/Modify Column**
# Add new column
df = df.withColumn('age_plus_one', df.age + 1)

# Modify existing column
df = df.withColumn('age', df.age * 2)

🔹 **drop() - Remove Column**
df = df.drop('age')

🔹 **distinct() - Remove Duplicates**
df_unique = df.distinct()

🔹 **dropDuplicates() - Remove Duplicates by Columns**
df_unique = df.dropDuplicates(['name', 'email'])

🔹 **orderBy() / sort() - Sort Data**
df.orderBy('age').show()  # Ascending
df.orderBy(df.age.desc()).show()  # Descending

🔹 **limit() - Get First N Rows**
df.limit(10).show()

---

👉 GroupBy & Aggregations

Group data and calculate metrics:

🔹 **Basic GroupBy**
df.groupBy('department').count().show()

🔹 **Multiple Aggregations**
from pyspark.sql.functions import sum, avg, max, min, count

df.groupBy('department').agg(
  count('*').alias('emp_count'),
  sum('salary').alias('total_salary'),
  avg('salary').alias('avg_salary'),
  max('salary').alias('max_salary')
).show()

Real-world example:
Sales by region:
df.groupBy('region').agg(
  sum('amount').alias('total_sales'),
  count('order_id').alias('order_count')
).show()

---

👉 Joins in PySpark

Combine data from multiple DataFrames:

🔹 **INNER JOIN**
df1.join(df2, df1.id == df2.id, 'inner').show()

# Or using column name
df1.join(df2, 'id', 'inner').show()

🔹 **LEFT JOIN**
df1.join(df2, 'id', 'left').show()

🔹 **RIGHT JOIN**
df1.join(df2, 'id', 'right').show()

🔹 **OUTER JOIN**
df1.join(df2, 'id', 'outer').show()

Real-world example:
Customers with orders:
customers.join(orders, customers.id == orders.customer_id, 'left').show()

---

👉 Window Functions

Calculations across rows:

from pyspark.sql.window import Window
from pyspark.sql.functions import row_number, rank, dense_rank

# Define window
window = Window.partitionBy('department').orderBy(df.salary.desc())

# Apply window function
df.withColumn('rank', rank().over(window)).show()

Use cases:
- Top N per group
- Running totals
- Moving averages
- Ranking

Example - Top 3 earners per department:
window = Window.partitionBy('department').orderBy(df.salary.desc())
df.withColumn('rank', rank().over(window)) \
  .filter(df.rank <= 3) \
  .show()

---

👉 Handling Nulls

🔹 **fillna() - Fill Nulls**
df.fillna(0).show()  # Fill all nulls with 0
df.fillna({'age': 0, 'name': 'Unknown'}).show()  # Fill specific columns

🔹 **dropna() - Drop Nulls**
df.dropna().show()  # Drop rows with any null
df.dropna(subset=['age']).show()  # Drop if age is null

🔹 **isNull() / isNotNull()**
df.filter(df.age.isNull()).show()  # Get rows with null age
df.filter(df.age.isNotNull()).show()  # Get rows with non-null age

---

👉 SQL Queries in PySpark

You can use SQL syntax!

# Register DataFrame as temp table
df.createOrReplaceTempView('employees')

# Run SQL query
result = spark.sql("""
  SELECT department, COUNT(*) as emp_count
  FROM employees
  WHERE age > 25
  GROUP BY department
""")

result.show()

Best of both worlds:
- Use SQL when comfortable
- Use DataFrame API when needed

---

👉 Common Functions

from pyspark.sql.functions import *

🔹 **String Functions**
- upper(), lower() → Case conversion
- trim(), ltrim(), rtrim() → Remove whitespace
- concat() → Combine strings
- substring() → Extract substring

df.withColumn('name_upper', upper(df.name)).show()

🔹 **Date Functions**
- current_date(), current_timestamp()
- date_format() → Format dates
- datediff() → Difference between dates
- add_months() → Add months to date

df.withColumn('today', current_date()).show()

🔹 **Math Functions**
- round(), ceil(), floor()
- abs() → Absolute value
- sqrt() → Square root

df.withColumn('salary_rounded', round(df.salary, 2)).show()

🔹 **Conditional Functions**
- when(), otherwise() → IF-ELSE logic

from pyspark.sql.functions import when

df.withColumn('category',
  when(df.age < 18, 'Minor')
  .when(df.age < 60, 'Adult')
  .otherwise('Senior')
).show()

---

👉 Performance Optimization

🔹 **Cache / Persist**
Cache frequently used DataFrames:

df.cache()  # Store in memory
df.persist()  # Store in memory/disk

When to use:
- DataFrame used multiple times
- Iterative algorithms
- Interactive analysis

🔹 **Repartition**
Control data distribution:

df.repartition(10)  # Split into 10 partitions
df.coalesce(1)  # Reduce to 1 partition (for small data)

🔹 **Broadcast Join**
For small lookup tables:

from pyspark.sql.functions import broadcast

large_df.join(broadcast(small_df), 'id').show()

🔹 **Select Only Needed Columns**
❌ df.select('*')
✅ df.select('id', 'name', 'age')

---

👉 Real-World Pipeline Example

Scenario: Process daily sales data

# Step 1: Read data
df = spark.read.csv('/data/sales.csv', header=True, inferSchema=True)

# Step 2: Clean data
df_clean = df.dropDuplicates(['order_id']) \
  .filter(df.amount > 0) \
  .fillna({'customer_name': 'Unknown'})

# Step 3: Transform
from pyspark.sql.functions import when, current_date

df_transform = df_clean.withColumn('order_category',
  when(df_clean.amount > 1000, 'High')
  .when(df_clean.amount > 500, 'Medium')
  .otherwise('Low')
).withColumn('processed_date', current_date())

# Step 4: Aggregate
df_summary = df_transform.groupBy('region').agg(
  sum('amount').alias('total_sales'),
  count('order_id').alias('order_count'),
  avg('amount').alias('avg_order_value')
)

# Step 5: Save
df_summary.write.format('delta').mode('overwrite').save('/output/sales_summary')

print("Pipeline completed successfully!")

---

👉 Best Practices

1️⃣ **Use DataFrames over RDDs**
DataFrames are optimized and easier to use

2️⃣ **Avoid collect() on large data**
collect() brings all data to driver → Memory issues

3️⃣ **Use proper file formats**
Parquet/Delta > CSV for big data

4️⃣ **Cache wisely**
Only cache DataFrames used multiple times

5️⃣ **Partition data properly**
Partition by date for time-series data

6️⃣ **Use broadcast for small tables**
Speeds up joins significantly

7️⃣ **Monitor Spark UI**
Check execution plans and performance

---

🎯 Interview Line:
"PySpark is the Python API for Apache Spark that enables distributed data processing using familiar Python syntax. It provides a SparkSession as the entry point and uses DataFrames as the primary data structure. Key operations include reading data from various sources (CSV, JSON, Parquet, Delta), transformations (select, filter, withColumn, groupBy, join), and actions (show, count, write). PySpark supports SQL queries, window functions, and various optimizations like caching and broadcast joins. It's widely used in production for building scalable ETL pipelines and processing large datasets efficiently."
`,

    types: `
🐍 SparkSession:
- Entry point to PySpark
- Creates DataFrames
- Manages cluster

📊 DataFrame:
- Distributed table
- Rows + Columns
- Optimized by Spark

📖 Read Operations:
- CSV: spark.read.csv()
- JSON: spark.read.json()
- Parquet: spark.read.parquet()
- Delta: spark.read.format('delta')

✏️ Write Operations:
- Parquet: df.write.parquet()
- Delta: df.write.format('delta')
- Modes: overwrite, append, ignore

🔧 Transformations:
- select() → Choose columns
- filter() → Filter rows
- withColumn() → Add/modify column
- groupBy() → Group data
- join() → Combine DataFrames

📊 Aggregations:
- count(), sum(), avg(), max(), min()
- Used with groupBy()

🔗 Joins:
- inner, left, right, outer
- Combine multiple DataFrames

🪟 Window Functions:
- rank(), row_number(), dense_rank()
- Calculations across rows

🧹 Null Handling:
- fillna() → Fill nulls
- dropna() → Drop nulls
- isNull() → Check nulls
`,

    qa: [
      {
        q: "What is PySpark?",
        hint: "Think Python + Spark",
        options: ["Database", "Python API for Apache Spark", "Programming language", "Storage system"],
        answer: "Python API for Apache Spark",
        explanation: `PySpark:\n✔ Python interface to Spark\n✔ Process big data with Python\n✔ Distributed computing\n✔ Familiar Python syntax\n\nLike pandas but for big data!`,
        memory: "PySpark = Python + Spark 🐍⚡"
      },
      {
        q: "What is SparkSession?",
        hint: "Think entry point",
        options: ["Database", "Entry point to PySpark applications", "File format", "Cluster type"],
        answer: "Entry point to PySpark applications",
        explanation: `SparkSession:\n✔ Starting point\n✔ Creates DataFrames\n✔ Manages cluster connection\n✔ Required for all operations\n\nLike opening database connection!`,
        memory: "SparkSession = Entry point 🚪"
      },
      {
        q: "Difference between select() and filter()?",
        hint: "Think columns vs rows",
        options: ["Same thing", "select = choose columns, filter = filter rows", "select is faster", "filter chooses columns"],
        answer: "select = choose columns, filter = filter rows",
        explanation: `select():\n✔ Choose which columns to keep\n✔ Like SELECT in SQL\n\nfilter():\n✔ Choose which rows to keep\n✔ Like WHERE in SQL`,
        memory: "select = columns, filter = rows 📊"
      },
      {
        q: "What does withColumn() do?",
        hint: "Think add/modify",
        options: ["Delete column", "Add or modify column", "Filter rows", "Join tables"],
        answer: "Add or modify column",
        explanation: `withColumn():\n✔ Add new column\n✔ Modify existing column\n✔ Apply transformations\n\nExample:\ndf.withColumn('age_plus_one', df.age + 1)`,
        memory: "withColumn = Add/Modify ✏️"
      },
      {
        q: "What is groupBy() used for?",
        hint: "Think aggregation",
        options: ["Filter rows", "Group data and calculate metrics", "Join tables", "Sort data"],
        answer: "Group data and calculate metrics",
        explanation: `groupBy():\n✔ Group rows by column\n✔ Apply aggregations (count, sum, avg)\n\nExample:\ndf.groupBy('dept').count()`,
        memory: "groupBy = Aggregate 📊"
      },
      {
        q: "How to handle null values?",
        hint: "Think fill or drop",
        options: ["Ignore them", "Use fillna() or dropna()", "Delete table", "Restart Spark"],
        answer: "Use fillna() or dropna()",
        explanation: `Null handling:\n✔ fillna(0) → Fill with value\n✔ dropna() → Remove rows\n✔ isNull() → Check for nulls\n\nChoose based on use case!`,
        memory: "fillna/dropna = Handle nulls 🧹"
      },
      {
        q: "What is cache() used for?",
        hint: "Think performance",
        options: ["Delete data", "Store DataFrame in memory for faster access", "Save to disk", "Filter data"],
        answer: "Store DataFrame in memory for faster access",
        explanation: `cache():\n✔ Stores DataFrame in memory\n✔ Faster repeated access\n✔ Use for DataFrames used multiple times\n\ndf.cache()`,
        memory: "cache = Store in memory 💾"
      },
      {
        q: "Can you run SQL in PySpark?",
        hint: "Yes!",
        options: ["No", "Yes, using spark.sql()", "Only Python", "Only Scala"],
        answer: "Yes, using spark.sql()",
        explanation: `SQL in PySpark:\n✔ Register DataFrame as temp view\n✔ Run SQL queries\n✔ Best of both worlds\n\ndf.createOrReplaceTempView('table')\nspark.sql('SELECT * FROM table')`,
        memory: "SQL = Yes ✅"
      },
      {
        q: "Best file format for big data?",
        hint: "Think performance",
        options: ["CSV", "Parquet or Delta", "Text", "Excel"],
        answer: "Parquet or Delta",
        explanation: `File formats:\n❌ CSV → Slow, no schema\n✅ Parquet → Fast, columnar\n✅ Delta → Parquet + ACID\n\nUse Parquet/Delta in production!`,
        memory: "Parquet/Delta = Best 🎯"
      }
    ],

    coding: {
      title: "PySpark Data Processing",
      scenario: "Read, clean, transform, and aggregate data",
      thinkingApproach: [
        "Step 1: Create SparkSession",
        "Step 2: Read data",
        "Step 3: Clean (remove duplicates, handle nulls)",
        "Step 4: Transform (add columns)",
        "Step 5: Aggregate (groupBy)",
        "Step 6: Display results"
      ],
      question: "Process sales data: clean, categorize, and aggregate by region",
      input: `data = [\n  {'order_id': 1, 'region': 'North', 'amount': 1500},\n  {'order_id': 1, 'region': 'North', 'amount': 1500},\n  {'order_id': 2, 'region': 'South', 'amount': 800}\n]`,
      expectedOutput: `North: High, 1500\nSouth: Medium, 800`,
      solution: `# Simulating PySpark pipeline
data = [
  {'order_id': 1, 'region': 'North', 'amount': 1500},
  {'order_id': 1, 'region': 'North', 'amount': 1500},  # duplicate
  {'order_id': 2, 'region': 'South', 'amount': 800}
]

# Clean: Remove duplicates
seen = set()
clean_data = []
for row in data:
    if row['order_id'] not in seen:
        clean_data.append(row)
        seen.add(row['order_id'])

# Transform: Add category
for row in clean_data:
    if row['amount'] > 1000:
        row['category'] = 'High'
    elif row['amount'] > 500:
        row['category'] = 'Medium'
    else:
        row['category'] = 'Low'

# Display
for row in clean_data:
    print(f"{row['region']}: {row['category']}, {row['amount']}")`,
      note: "In real PySpark: Use df.dropDuplicates(), withColumn(), and groupBy()"
    },

    quiz: [
      { q: "PySpark?", options: ["Python+Spark", "Database", "Language", "None"], answer: 0 },
      { q: "SparkSession?", options: ["Entry point", "Database", "File", "None"], answer: 0 },
      { q: "select()?", options: ["Columns", "Rows", "Tables", "None"], answer: 0 },
      { q: "filter()?", options: ["Rows", "Columns", "Tables", "None"], answer: 0 },
      { q: "withColumn()?", options: ["Add/Modify", "Delete", "Filter", "None"], answer: 0 },
      { q: "groupBy()?", options: ["Aggregate", "Filter", "Join", "None"], answer: 0 },
      { q: "cache()?", options: ["Memory", "Disk", "Delete", "None"], answer: 0 },
      { q: "Best format?", options: ["Parquet/Delta", "CSV", "Text", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "PySpark is the Python API for Apache Spark that enables distributed data processing using Python syntax. It provides SparkSession as the entry point and DataFrame as the primary data structure.

Key capabilities:
- Reading data from multiple sources (CSV, JSON, Parquet, Delta, databases)
- DataFrame operations: select, filter, withColumn, groupBy, join
- Aggregations: count, sum, avg, max, min
- Window functions for advanced analytics
- SQL support through spark.sql()
- Null handling with fillna and dropna
- Performance optimization through caching and broadcast joins

PySpark is widely used in production for building ETL pipelines, processing large datasets, and preparing data for analytics and machine learning. Best practices include using DataFrames over RDDs, choosing appropriate file formats (Parquet/Delta), caching strategically, and monitoring performance through Spark UI."
`,

    memory: `
👉 PySpark = Python + Spark 🐍⚡
👉 SparkSession = Entry point 🚪
👉 DataFrame = Distributed table 📊
👉 select = Columns 📋
👉 filter = Rows 🔍
👉 withColumn = Add/Modify ✏️
👉 groupBy = Aggregate 📊
👉 cache = Memory 💾
👉 Parquet/Delta = Best format 🎯
👉 SQL = Yes ✅
`,

    revision: "PySpark = Python API for Spark with SparkSession, DataFrame operations, aggregations, joins, and SQL support for distributed big data processing"
  },

  'sql-for-databricks': {
    title: "SQL for Databricks (Query Language for Big Data)",
    subtitle: "Master SQL on distributed data with Spark SQL engine",
    icon: "📊",
    difficulty: "Beginner",
    duration: "~60 min",
    ready: true,

    comic: `
Imagine you're a librarian 📚

You have millions of books stored across 10 buildings 🏛️

Student asks: "Find all books about Python published after 2020" 👨‍🎓

😰 Problem
One person searching all buildings → Takes days!

🤔 Solution
Hire 10 assistants (one per building)
Each searches their building simultaneously
Results combined in minutes! ⚡

✨ This is SQL in Databricks!

👉 SQL Query = Your request
👉 Spark SQL Engine = Smart coordinator
👉 Cluster = Multiple assistants working together
👉 Delta Tables = Organized book storage

💡 Aha Moment:
SQL runs on ONE machine → Slow 🐌
SQL on Databricks → Runs on MANY machines → Fast! 🚀
`,

    deepDive: `
👉 What is SQL for Databricks?

SQL in Databricks is NOT regular SQL!

Key differences:
✔ Runs on distributed data (across multiple machines)
✔ Uses Spark SQL engine (not MySQL/PostgreSQL)
✔ Works on Delta Lake tables
✔ Processes TBs of data easily

Think of it as:
- Regular SQL on steroids 💪
- Same syntax, but distributed execution
- Scales to massive datasets

---

👉 Architecture Flow

User Query → Spark SQL Engine → Execution Plan → Cluster Processing → Result

Example:
SELECT * FROM sales WHERE amount > 1000

1️⃣ You write SQL query
2️⃣ Spark SQL parses it
3️⃣ Creates optimized plan
4️⃣ Distributes work across cluster
5️⃣ Each node processes its data
6️⃣ Results combined and returned

---

👉 Core SQL Operations

🔹 **SELECT, WHERE, ORDER BY**

Purpose: Fetch, filter, and sort data

Example:
SELECT name, age 
FROM users 
WHERE age > 18 
ORDER BY name;

Real-world:
- Get all active customers
- Find high-value transactions
- List products by price

🔹 **GROUP BY & Aggregations**

Purpose: Group data and calculate metrics

Functions:
✔ COUNT() - Count rows
✔ SUM() - Total
✔ AVG() - Average
✔ MAX() - Maximum
✔ MIN() - Minimum

Example:
SELECT department, COUNT(*) as emp_count
FROM employees 
GROUP BY department;

Real-world:
- Total sales per region
- Average order value
- Customer count by city

🔹 **Joins**

Purpose: Combine data from multiple tables

Types:

**INNER JOIN** - Only matching records
SELECT * FROM orders o
INNER JOIN customers c ON o.customer_id = c.id;

**LEFT JOIN** - All from left + matches
SELECT * FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;

**RIGHT JOIN** - All from right + matches
**FULL JOIN** - All from both tables

Real-world:
- Customer orders with details
- Employee departments
- Product categories

🔹 **Window Functions**

Purpose: Calculations across rows without grouping

Common functions:
✔ ROW_NUMBER() - Unique row number
✔ RANK() - Ranking with gaps
✔ DENSE_RANK() - Ranking without gaps
✔ LAG() - Previous row value
✔ LEAD() - Next row value

Example:
SELECT name, salary,
  RANK() OVER (ORDER BY salary DESC) as rank
FROM employees;

Real-world:
- Top 10 customers
- Running totals
- Month-over-month comparison

🔹 **Subqueries**

Purpose: Query inside another query

Example:
SELECT * FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

Real-world:
- Above average performers
- Customers with no orders
- Products above median price

🔹 **CTE (Common Table Expression)**

Purpose: Temporary named query for readability

Example:
WITH high_earners AS (
  SELECT * FROM employees WHERE salary > 100000
)
SELECT * FROM high_earners WHERE department = 'IT';

Benefits:
✔ Better readability
✔ Reusable in same query
✔ Easier debugging

🔹 **CASE Statements**

Purpose: Conditional logic (IF-ELSE)

Example:
SELECT name,
  CASE 
    WHEN salary > 100000 THEN 'High'
    WHEN salary > 50000 THEN 'Medium'
    ELSE 'Low'
  END as salary_category
FROM employees;

Real-world:
- Customer segmentation
- Product categorization
- Risk classification

---

👉 Query Optimization

Important tips:

1️⃣ **Avoid SELECT ***
❌ SELECT * FROM large_table
✅ SELECT id, name FROM large_table

Why? Reduces data transfer

2️⃣ **Use WHERE for filtering**
✅ Filter early to reduce data

SELECT * FROM sales 
WHERE date >= '2024-01-01'

3️⃣ **Use proper partitioning**
Delta tables support partitioning
Queries on partitioned columns are faster

4️⃣ **Avoid unnecessary joins**
Only join tables you actually need

5️⃣ **Use CTE for complex queries**
Makes queries readable and maintainable

---

👉 Real-World Flow

Example: E-commerce Sales Dashboard

1️⃣ Raw data → Stored in Delta Table
2️⃣ SQL Query → Aggregate sales by region
3️⃣ Spark SQL → Processes across cluster
4️⃣ Results → Sent to Power BI/Tableau
5️⃣ Dashboard → Shows insights to business

Query:
SELECT region, 
  SUM(amount) as total_sales,
  COUNT(*) as order_count,
  AVG(amount) as avg_order_value
FROM sales
WHERE date >= '2024-01-01'
GROUP BY region
ORDER BY total_sales DESC;

---

🎯 Interview Line:
"SQL in Databricks runs on the Spark SQL engine, which distributes queries across multiple nodes for parallel processing. It supports standard SQL syntax but operates on distributed data stored in Delta Lake tables. Key features include window functions, CTEs, and query optimization through partition pruning and predicate pushdown, making it suitable for processing terabytes of data efficiently."
`,

    types: `
📊 SELECT, WHERE, ORDER BY:
- Fetch, filter, sort data
- Most basic operations

📊 GROUP BY & Aggregations:
- COUNT, SUM, AVG, MAX, MIN
- Calculate metrics

🔗 Joins:
- INNER: Common data
- LEFT: All left + matches
- RIGHT: All right + matches
- FULL: All data

📊 Window Functions:
- RANK, ROW_NUMBER, DENSE_RANK
- Calculations without grouping

📋 Subqueries:
- Query inside query
- Nested logic

📝 CTE:
- Temporary named query
- Better readability

🔀 CASE:
- Conditional logic
- IF-ELSE in SQL
`,

    qa: [
      {
        q: "How is SQL in Databricks different from regular SQL?",
        hint: "Think distributed",
        options: ["No difference", "Runs on distributed data across multiple machines", "Different syntax", "Slower"],
        answer: "Runs on distributed data across multiple machines",
        explanation: `Databricks SQL:\n✔ Distributed execution\n✔ Spark SQL engine\n✔ Processes TBs of data\n✔ Same syntax, different engine\n\nRegular SQL runs on one machine!`,
        memory: "Databricks SQL = Distributed 🚀"
      },
      {
        q: "What is GROUP BY used for?",
        hint: "Think aggregation",
        options: ["Sorting", "Grouping data and calculating metrics", "Filtering", "Joining"],
        answer: "Grouping data and calculating metrics",
        explanation: `GROUP BY:\n✔ Groups rows by column\n✔ Applies aggregation (COUNT, SUM, AVG)\n\nExample: Total sales per region`,
        memory: "GROUP BY = Aggregate 📊"
      },
      {
        q: "Difference between INNER and LEFT JOIN?",
        hint: "Think matching",
        options: ["Same thing", "INNER = only matches, LEFT = all left + matches", "LEFT is faster", "INNER includes all"],
        answer: "INNER = only matches, LEFT = all left + matches",
        explanation: `INNER JOIN:\n✔ Only matching records\n\nLEFT JOIN:\n✔ All from left table\n✔ Matches from right\n✔ NULL if no match`,
        memory: "INNER = Match only, LEFT = Keep left 👈"
      },
      {
        q: "What are Window Functions?",
        hint: "Think ranking",
        options: ["Filtering", "Calculations across rows without grouping", "Joining tables", "Sorting"],
        answer: "Calculations across rows without grouping",
        explanation: `Window Functions:\n✔ RANK, ROW_NUMBER\n✔ Calculate without GROUP BY\n✔ Keep all rows\n\nExample: Rank employees by salary`,
        memory: "Window = Rank without grouping 🏆"
      },
      {
        q: "What is a CTE?",
        hint: "Think temporary",
        options: ["Permanent table", "Temporary named query for readability", "Join type", "Function"],
        answer: "Temporary named query for readability",
        explanation: `CTE (Common Table Expression):\n✔ WITH clause\n✔ Temporary result\n✔ Better readability\n✔ Reusable in query`,
        memory: "CTE = Temp query 📝"
      },
      {
        q: "Why avoid SELECT * in production?",
        hint: "Think performance",
        options: ["Syntax error", "Fetches unnecessary columns, wastes resources", "Not allowed", "Too fast"],
        answer: "Fetches unnecessary columns, wastes resources",
        explanation: `SELECT *:\n❌ Fetches all columns\n❌ Wastes network bandwidth\n❌ Slower\n\n✅ Select only needed columns!`,
        memory: "SELECT * = Bad ❌"
      },
      {
        q: "What is CASE statement used for?",
        hint: "Think conditions",
        options: ["Joining", "Conditional logic (IF-ELSE)", "Sorting", "Filtering"],
        answer: "Conditional logic (IF-ELSE)",
        explanation: `CASE:\n✔ IF-ELSE logic in SQL\n✔ Categorize data\n✔ Create new columns\n\nExample: Salary categories (High/Medium/Low)`,
        memory: "CASE = IF-ELSE 🔀"
      },
      {
        q: "What is a Subquery?",
        hint: "Think nested",
        options: ["Join type", "Query inside another query", "Function", "Table"],
        answer: "Query inside another query",
        explanation: `Subquery:\n✔ Nested query\n✔ Used in WHERE, FROM, SELECT\n\nExample:\nWHERE salary > (SELECT AVG(salary) FROM emp)`,
        memory: "Subquery = Query in query 🔄"
      },
      {
        q: "Best practice for query optimization?",
        hint: "Think filtering",
        options: ["Use SELECT *", "Filter early with WHERE clause", "Avoid indexes", "Join all tables"],
        answer: "Filter early with WHERE clause",
        explanation: `Optimization tips:\n✔ Filter early (WHERE)\n✔ Select only needed columns\n✔ Use partitioning\n✔ Avoid unnecessary joins\n\nReduces data processed!`,
        memory: "Filter early = Fast ⚡"
      }
    ],

    coding: {
      title: "SQL Aggregation Query",
      scenario: "Calculate total sales per region",
      thinkingApproach: [
        "Step 1: Identify grouping column (region)",
        "Step 2: Choose aggregation (SUM)",
        "Step 3: Apply GROUP BY",
        "Step 4: Sort results",
        "Step 5: Validate output",
        "Step 6: Optimize if needed"
      ],
      question: "Find total sales per region and sort by highest sales",
      input: `data = [\n  {"region": "North", "sales": 1000},\n  {"region": "South", "sales": 1500},\n  {"region": "North", "sales": 2000}\n]`,
      expectedOutput: `North,3000\nSouth,1500`,
      solution: `# Simulating SQL GROUP BY
data = [
  {"region": "North", "sales": 1000},
  {"region": "South", "sales": 1500},
  {"region": "North", "sales": 2000}
]

# GROUP BY region, SUM(sales)
from collections import defaultdict
totals = defaultdict(int)
for row in data:
    totals[row["region"]] += row["sales"]

# ORDER BY sales DESC
for region, total in sorted(totals.items(), key=lambda x: -x[1]):
    print(f"{region},{total}")`,
      note: "In Databricks: SELECT region, SUM(sales) FROM sales GROUP BY region ORDER BY SUM(sales) DESC"
    },

    quiz: [
      { q: "Distributed?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 },
      { q: "GROUP BY?", options: ["Aggregate", "Filter", "Join", "None"], answer: 0 },
      { q: "INNER?", options: ["Match only", "All", "None", "Loop"], answer: 0 },
      { q: "LEFT?", options: ["Keep left", "Match only", "None", "Loop"], answer: 0 },
      { q: "Window?", options: ["Rank", "Filter", "Join", "None"], answer: 0 },
      { q: "CTE?", options: ["Temp query", "Table", "Join", "None"], answer: 0 },
      { q: "CASE?", options: ["IF-ELSE", "Join", "Filter", "None"], answer: 0 },
      { q: "SELECT *?", options: ["Bad", "Good", "Best", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "SQL in Databricks leverages the Spark SQL engine to execute queries on distributed data stored in Delta Lake tables. Unlike traditional SQL that runs on a single machine, Databricks SQL distributes query execution across multiple nodes in a cluster for parallel processing.

Key features include:
- Standard SQL syntax with distributed execution
- Support for complex operations: window functions, CTEs, subqueries
- Query optimization through partition pruning and predicate pushdown
- Integration with Delta Lake for ACID transactions
- Ability to process terabytes of data efficiently

Common operations include SELECT, WHERE, GROUP BY, JOIN, and window functions. Best practices involve filtering early, selecting only needed columns, using partitioning, and avoiding unnecessary joins to optimize performance."
`,

    memory: `
👉 Databricks SQL = Distributed 🚀
👉 GROUP BY = Aggregate 📊
👉 INNER = Match only 🎯
👉 LEFT = Keep left 👈
👉 Window = Rank 🏆
👉 CTE = Temp query 📝
👉 CASE = IF-ELSE 🔀
👉 SELECT * = Bad ❌
👉 Filter early = Fast ⚡
`,

    revision: "SQL for Databricks = Distributed SQL on Spark engine with standard syntax, window functions, and query optimization for big data"
  },

  'delta-lake': {
    title: "Delta Lake (Reliable Storage Layer for Data Lakes)",
    subtitle: "ACID transactions, time travel, and data reliability on Data Lake",
    icon: "🏔️",
    difficulty: "Intermediate",
    duration: "~70 min",
    ready: true,

    comic: `
Imagine you're managing a warehouse 📦

Traditional warehouse (Parquet):
- Someone updates inventory → No record of change ❌
- Two people update same item → Conflict! 💥
- Want to see yesterday's inventory → Impossible! 😰
- Wrong data entered → Can't undo! 🚫

🤔 Solution: Smart Warehouse (Delta Lake)

✨ Features:
✔ Every change is logged in a diary 📔
✔ No conflicts (one person at a time)
✔ Can see any past date (time travel) ⏰
✔ Can undo mistakes (rollback) ↩️
✔ Automatic quality checks (schema enforcement) ✅

💡 Aha Moment:
Delta Lake = Parquet files + Transaction Log (diary)

👉 Parquet = Just storage
👉 Delta Lake = Storage + Reliability + History

Like:
Regular notebook vs Google Docs with version history! 📝
`,

    deepDive: `
👉 What is Delta Lake?

Delta Lake is an open-source storage layer that brings:
✔ ACID transactions to Data Lakes
✔ Time travel (versioning)
✔ Schema enforcement and evolution
✔ Unified batch and streaming
✔ Audit history

Think of it as:
- Data Lake with superpowers 💪
- Parquet files + Transaction log
- Reliability layer on top of cloud storage

---

👉 Architecture

Delta Lake has 2 main components:

🔹 **Data Files (Parquet)**
- Actual data stored as Parquet
- Columnar format (fast reads)
- Compressed (saves space)
- Stored in cloud (S3, ADLS, GCS)

Example:
/delta_table/
  part-00000.parquet
  part-00001.parquet
  part-00002.parquet

🔹 **Transaction Log (_delta_log)**
- JSON files tracking all changes
- Every operation recorded
- Ordered sequence of transactions
- Source of truth

Example:
/delta_table/_delta_log/
  00000000000000000000.json
  00000000000000000001.json
  00000000000000000002.json

Flow:
User Operation → Delta Table → Transaction Log → Data Files → Result

---

👉 Delta vs Parquet

| Feature | Parquet | Delta Lake |
|---------|---------|------------|
| Format | Columnar | Parquet + Log |
| Updates | ❌ No | ✅ Yes |
| Deletes | ❌ No | ✅ Yes |
| ACID | ❌ No | ✅ Yes |
| Time Travel | ❌ No | ✅ Yes |
| Schema Enforcement | ❌ No | ✅ Yes |
| Audit History | ❌ No | ✅ Yes |

Key Point:
Delta Lake USES Parquet for storage but ADDS reliability features!

---

👉 ACID Transactions

ACID = Atomicity, Consistency, Isolation, Durability

🔹 **Atomicity**
- All or nothing
- If operation fails → No partial changes

Example:
Inserting 1000 rows → Either all 1000 or none!

🔹 **Consistency**
- Data always in valid state
- Schema rules enforced

Example:
Can't insert string in integer column ❌

🔹 **Isolation**
- Multiple users can read/write simultaneously
- No conflicts

Example:
User A reads while User B writes → No issues ✅

🔹 **Durability**
- Once committed → Permanent
- Survives system crashes

Real-world benefit:
E-commerce order processing:
- Deduct inventory
- Create order
- Charge payment

If ANY step fails → Everything rolls back! 🔄

---

👉 Creating Delta Tables

**Method 1: SQL**
CREATE TABLE employees (
  id INT,
  name STRING,
  salary DOUBLE
) USING DELTA;

**Method 2: PySpark**
df.write.format("delta").save("/path/to/table")

**Method 3: Convert Parquet to Delta**
CONVERT TO DELTA parquet.'/path/to/parquet';

---

👉 Insert, Update, Delete

Unlike regular Data Lakes, Delta supports modifications!

🔹 **INSERT**
INSERT INTO employees VALUES (1, 'Ankit', 50000);

🔹 **UPDATE**
UPDATE employees 
SET salary = salary * 1.1 
WHERE department = 'IT';

🔹 **DELETE**
DELETE FROM employees WHERE status = 'inactive';

Real-world use:
- Update order status (pending → shipped)
- Delete old records
- Fix data errors

---

👉 MERGE (Upsert) - VERY IMPORTANT

MERGE = Update if exists, Insert if not

Syntax:
MERGE INTO target
USING source
ON target.id = source.id
WHEN MATCHED THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *;

Real-world example:
Daily customer data update:
- Existing customers → Update info
- New customers → Insert

Use cases:
✔ Incremental data loads
✔ Slowly Changing Dimensions (SCD)
✔ Data synchronization
✔ CDC (Change Data Capture)

Why important?
Most production pipelines use MERGE for efficiency!

---

👉 Time Travel (Game Changer!)

Time Travel = Access previous versions of data

How it works:
- Every change creates new version
- Old versions preserved
- Can query any version

**Query by Version**
SELECT * FROM employees VERSION AS OF 5;

**Query by Timestamp**
SELECT * FROM employees TIMESTAMP AS OF '2024-01-15';

**PySpark**
df = spark.read.format("delta").option("versionAsOf", 5).load("/path")

Real-world use cases:
✔ Audit and compliance
✔ Reproduce reports
✔ Debug data issues
✔ Rollback mistakes
✔ A/B testing

Example:
"What was revenue on Jan 1st?" → Query that version!

---

👉 Table History

View all changes made to table:

DESCRIBE HISTORY employees;

Output shows:
- Version number
- Timestamp
- Operation (INSERT, UPDATE, DELETE, MERGE)
- User who made change
- Number of rows affected

Like Git history for data! 📝

---

👉 Schema Evolution

Schema Evolution = Automatically add new columns

Without Delta:
❌ New column → Error!
❌ Must rewrite all data

With Delta:
✅ New column → Automatically added
✅ Old data gets NULL for new column

Example:
df.write.format("delta") \
  .mode("append") \
  .option("mergeSchema", "true") \
  .save("/path")

Real-world:
App adds new feature → New data field
Delta handles it automatically! ✅

---

👉 Schema Enforcement

Schema Enforcement = Prevent wrong data types

Example:
Table expects: id (INT), name (STRING)
You try to insert: id (STRING) → ❌ Error!

Benefits:
✔ Data quality
✔ Prevent bugs
✔ Consistent data

Like type checking in programming! 🔒

---

👉 VACUUM (Cleanup)

VACUUM = Delete old unused files

Why needed?
- Time travel keeps old versions
- Old files consume storage
- Need to clean up periodically

Syntax:
VACUUM employees RETAIN 168 HOURS;

What it does:
✔ Deletes files older than 7 days (168 hours)
✔ Keeps recent versions for time travel
✔ Saves storage costs

Important:
- Default retention: 7 days
- Can't time travel beyond retention period
- Run regularly in production

---

👉 Optimization

🔹 **OPTIMIZE**
Compacts small files into larger ones

OPTIMIZE employees;

Why?
- Many small files → Slow reads
- Fewer large files → Fast reads

🔹 **Z-ORDER**
Co-locates related data for faster queries

OPTIMIZE employees ZORDER BY (department, city);

Why?
- Queries on department/city → Much faster
- Reduces data scanned

Best practice:
Run OPTIMIZE + ZORDER regularly on large tables!

---

👉 Real-World Use Cases

1️⃣ **E-commerce Order Management**
- Orders stored in Delta table
- Update status: pending → shipped → delivered
- Track all changes
- Audit history for disputes

2️⃣ **Customer Data Platform**
- Daily customer data updates
- MERGE new/updated customers
- Maintain history
- GDPR compliance (delete on request)

3️⃣ **Financial Transactions**
- ACID guarantees
- No data loss
- Audit trail
- Regulatory compliance

4️⃣ **IoT Sensor Data**
- Streaming data ingestion
- Batch processing
- Unified pipeline
- Time travel for analysis

---

👉 Complete Workflow Example

Scenario: Daily sales data pipeline

**Day 1: Create table**
CREATE TABLE sales (
  order_id INT,
  amount DOUBLE,
  date DATE
) USING DELTA;

**Day 2: Insert data**
INSERT INTO sales VALUES (1, 100, '2024-01-01');

**Day 3: Update data**
UPDATE sales SET amount = 150 WHERE order_id = 1;

**Day 4: Merge new data**
MERGE INTO sales USING new_data
ON sales.order_id = new_data.order_id
WHEN MATCHED THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *;

**Day 5: Query history**
SELECT * FROM sales VERSION AS OF 1;  -- See Day 1 data

**Day 6: Optimize**
OPTIMIZE sales ZORDER BY (date);

**Day 7: Cleanup**
VACUUM sales RETAIN 168 HOURS;

---

👉 Key Concepts Summary

| Feature | Purpose | Command |
|---------|---------|----------|
| ACID | Reliability | Automatic |
| INSERT | Add data | INSERT INTO |
| UPDATE | Modify data | UPDATE SET |
| DELETE | Remove data | DELETE FROM |
| MERGE | Upsert | MERGE INTO |
| Time Travel | Query history | VERSION AS OF |
| History | View changes | DESCRIBE HISTORY |
| Schema Evolution | Add columns | mergeSchema=true |
| Schema Enforcement | Data quality | Automatic |
| VACUUM | Cleanup | VACUUM RETAIN |
| OPTIMIZE | Compact files | OPTIMIZE |
| Z-ORDER | Fast queries | ZORDER BY |

---

🎯 Interview Line:
"Delta Lake is an open-source storage layer that brings ACID transactions, time travel, and schema management to Data Lakes. It stores data as Parquet files with a transaction log (_delta_log) that tracks all changes. Key features include support for UPDATE/DELETE/MERGE operations, time travel for querying historical data, schema evolution and enforcement, and optimization commands like OPTIMIZE and ZORDER. Delta Lake is essential for building reliable data pipelines and is the foundation of the Lakehouse architecture."
`,

    types: `
🏔️ Delta Lake:
- Parquet files + Transaction log
- ACID transactions
- Time travel enabled

📦 Parquet:
- Just data files
- No transactions
- No history

✅ ACID:
- Atomicity: All or nothing
- Consistency: Valid state
- Isolation: No conflicts
- Durability: Permanent

🔄 Operations:
- INSERT: Add data
- UPDATE: Modify data
- DELETE: Remove data
- MERGE: Upsert (update + insert)

⏰ Time Travel:
- VERSION AS OF: Query by version
- TIMESTAMP AS OF: Query by date

📋 Schema:
- Evolution: Add columns automatically
- Enforcement: Prevent wrong types

🧹 Maintenance:
- VACUUM: Delete old files
- OPTIMIZE: Compact files
- Z-ORDER: Fast queries
`,

    qa: [
      {
        q: "What is Delta Lake?",
        hint: "Think storage layer",
        options: ["Database", "Storage layer with ACID transactions on Data Lake", "Programming language", "Cluster type"],
        answer: "Storage layer with ACID transactions on Data Lake",
        explanation: `Delta Lake:\n✔ Storage layer (not database)\n✔ Built on Data Lake\n✔ Adds ACID transactions\n✔ Parquet + Transaction log\n\nUpgrades Data Lake with reliability!`,
        memory: "Delta = Data Lake + Reliability 🏔️"
      },
      {
        q: "Difference between Delta Lake and Parquet?",
        hint: "Think features",
        options: ["Same thing", "Delta = Parquet + Transaction log with ACID", "Parquet is better", "Delta is slower"],
        answer: "Delta = Parquet + Transaction log with ACID",
        explanation: `Parquet:\n✔ Just data files\n❌ No updates/deletes\n❌ No history\n\nDelta Lake:\n✔ Parquet files\n✔ Transaction log\n✔ ACID transactions\n✔ Time travel`,
        memory: "Delta = Parquet + Log 📔"
      },
      {
        q: "What is ACID in Delta Lake?",
        hint: "Think reliability",
        options: ["Programming language", "Atomicity, Consistency, Isolation, Durability", "File format", "Cluster type"],
        answer: "Atomicity, Consistency, Isolation, Durability",
        explanation: `ACID:\n✔ Atomicity: All or nothing\n✔ Consistency: Valid state\n✔ Isolation: No conflicts\n✔ Durability: Permanent\n\nEnsures data reliability!`,
        memory: "ACID = Reliable transactions ✅"
      },
      {
        q: "What is MERGE operation?",
        hint: "Think upsert",
        options: ["Only insert", "Update if exists, Insert if not (Upsert)", "Only delete", "Only select"],
        answer: "Update if exists, Insert if not (Upsert)",
        explanation: `MERGE (Upsert):\n✔ If record exists → Update\n✔ If record doesn't exist → Insert\n\nUse cases:\n- Incremental loads\n- CDC pipelines\n- Data sync`,
        memory: "MERGE = Update + Insert 🔄"
      },
      {
        q: "What is Time Travel in Delta Lake?",
        hint: "Think history",
        options: ["Faster queries", "Query previous versions of data", "Delete data", "Compress data"],
        answer: "Query previous versions of data",
        explanation: `Time Travel:\n✔ Access old versions\n✔ Query by version or timestamp\n✔ Audit and compliance\n✔ Rollback mistakes\n\nLike Git for data!`,
        memory: "Time Travel = Query history ⏰"
      },
      {
        q: "What does VACUUM do?",
        hint: "Think cleanup",
        options: ["Compress data", "Delete old unused files to save storage", "Create backups", "Speed up queries"],
        answer: "Delete old unused files to save storage",
        explanation: `VACUUM:\n✔ Deletes old data files\n✔ Keeps recent versions\n✔ Saves storage costs\n\nDefault retention: 7 days\n\nRun regularly in production!`,
        memory: "VACUUM = Cleanup old files 🧹"
      },
      {
        q: "What is Schema Evolution?",
        hint: "Think new columns",
        options: ["Delete columns", "Automatically add new columns", "Rename table", "Delete table"],
        answer: "Automatically add new columns",
        explanation: `Schema Evolution:\n✔ Add new columns automatically\n✔ Old data gets NULL\n✔ No rewrite needed\n\nUse: mergeSchema=true`,
        memory: "Schema Evolution = Add columns ➕"
      },
      {
        q: "What is Schema Enforcement?",
        hint: "Think data quality",
        options: ["Allow any data", "Prevent wrong data types from being inserted", "Delete data", "Compress data"],
        answer: "Prevent wrong data types from being inserted",
        explanation: `Schema Enforcement:\n✔ Validates data types\n✔ Prevents bad data\n✔ Ensures quality\n\nExample: Can't insert string in INT column ❌`,
        memory: "Schema Enforcement = Data quality 🔒"
      },
      {
        q: "Why use OPTIMIZE and Z-ORDER?",
        hint: "Think performance",
        options: ["Delete data", "Compact files and speed up queries", "Create backups", "Add columns"],
        answer: "Compact files and speed up queries",
        explanation: `OPTIMIZE:\n✔ Compacts small files\n✔ Faster reads\n\nZ-ORDER:\n✔ Co-locates related data\n✔ Reduces data scanned\n\nRun regularly for performance!`,
        memory: "OPTIMIZE = Fast queries ⚡"
      }
    ],

    coding: {
      title: "Delta Lake MERGE Operation",
      scenario: "Simulate upsert operation (update existing, insert new)",
      thinkingApproach: [
        "Step 1: Understand existing data",
        "Step 2: Identify new/updated records",
        "Step 3: Match by key (id)",
        "Step 4: Update if exists",
        "Step 5: Insert if not exists",
        "Step 6: Validate final result"
      ],
      question: "Merge new customer data into existing table",
      input: `existing = [{"id": 1, "name": "Ankit", "city": "Mumbai"}]\nnew_data = [{"id": 1, "name": "Ankit", "city": "Delhi"}, {"id": 2, "name": "Rahul", "city": "Pune"}]`,
      expectedOutput: `id=1, name=Ankit, city=Delhi (updated)\nid=2, name=Rahul, city=Pune (inserted)`,
      solution: `# Simulating Delta Lake MERGE
existing = [{"id": 1, "name": "Ankit", "city": "Mumbai"}]
new_data = [
  {"id": 1, "name": "Ankit", "city": "Delhi"},
  {"id": 2, "name": "Rahul", "city": "Pune"}
]

# Create lookup for existing data
existing_dict = {row["id"]: row for row in existing}

# MERGE logic
for new_row in new_data:
    if new_row["id"] in existing_dict:
        # UPDATE
        existing_dict[new_row["id"]] = new_row
        print(f"id={new_row['id']}, name={new_row['name']}, city={new_row['city']} (updated)")
    else:
        # INSERT
        existing_dict[new_row["id"]] = new_row
        print(f"id={new_row['id']}, name={new_row['name']}, city={new_row['city']} (inserted)")`,
      note: "In Databricks: MERGE INTO target USING source ON target.id = source.id WHEN MATCHED THEN UPDATE SET * WHEN NOT MATCHED THEN INSERT *"
    },

    quiz: [
      { q: "Delta Lake?", options: ["Storage layer", "Database", "Language", "None"], answer: 0 },
      { q: "ACID?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 },
      { q: "MERGE?", options: ["Upsert", "Delete", "Select", "None"], answer: 0 },
      { q: "Time Travel?", options: ["Query history", "Delete", "Insert", "None"], answer: 0 },
      { q: "VACUUM?", options: ["Cleanup", "Insert", "Update", "None"], answer: 0 },
      { q: "OPTIMIZE?", options: ["Compact files", "Delete", "Insert", "None"], answer: 0 },
      { q: "Schema Evolution?", options: ["Add columns", "Delete", "Update", "None"], answer: 0 },
      { q: "Schema Enforcement?", options: ["Data quality", "Delete", "Insert", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "Delta Lake is an open-source storage layer that brings ACID transactions and reliability to Data Lakes. It consists of Parquet data files and a transaction log (_delta_log) that tracks all changes.

Key features:
- ACID transactions ensuring data consistency and reliability
- Support for UPDATE, DELETE, and MERGE operations
- Time travel for querying historical versions of data
- Schema evolution to automatically add new columns
- Schema enforcement to prevent incorrect data types
- Audit history through DESCRIBE HISTORY
- Optimization through OPTIMIZE and Z-ORDER commands
- Storage management through VACUUM

Delta Lake is essential for building reliable data pipelines and forms the foundation of the Lakehouse architecture. It's widely used in production for incremental data loads, slowly changing dimensions, CDC pipelines, and scenarios requiring data versioning and audit trails."
`,

    memory: `
👉 Delta = Data Lake + Reliability 🏔️
👉 Delta = Parquet + Log 📔
👉 ACID = Reliable ✅
👉 MERGE = Upsert 🔄
👉 Time Travel = History ⏰
👉 VACUUM = Cleanup 🧹
👉 OPTIMIZE = Fast ⚡
👉 Schema Evolution = Add columns ➕
👉 Schema Enforcement = Quality 🔒
👉 Transaction Log = Source of truth 📝
`,

    revision: "Delta Lake = Parquet + Transaction log with ACID, time travel, MERGE, schema management, and optimization for reliable Data Lake storage"
  },

  'data-pipelines': {
    title: "Data Pipelines (Automating Data Flow from Source to Destination)",
    subtitle: "Building scalable ETL/ELT pipelines with Medallion Architecture",
    icon: "🔄",
    difficulty: "Intermediate",
    duration: "~75 min",
    ready: true,

    comic: `
Imagine you're running a juice factory 🧃

Raw Process:
- Fruits arrive from farms 🍎🍊🍇
- Workers manually wash each fruit 🚿
- Manually cut and juice 🔪
- Manually bottle and label 🏷️
- Manually deliver to stores 🚚

😰 Problem:
- Slow and tiring ⏰
- Human errors (dirty fruits, wrong labels) ❌
- Can't handle large orders 📦
- Workers forget steps 🤔

🤔 Solution: Automated Assembly Line (Pipeline)

✨ Automated Steps:
1️⃣ Conveyor belt brings fruits (Ingestion)
2️⃣ Washing machine cleans (Processing)
3️⃣ Juicer extracts juice (Transformation)
4️⃣ Bottling machine fills bottles (Storage)
5️⃣ Trucks deliver automatically (Consumption)

💡 Aha Moment:
Data Pipeline = Automated assembly line for data!

👉 Raw fruits = Raw data
👉 Assembly line = Data pipeline
👉 Quality checks = Data validation
👉 Final product = Clean, ready-to-use data

No manual work → Fast, reliable, scalable! 🚀
`,

    deepDive: `
👉 What is a Data Pipeline?

A Data Pipeline is an automated system that:
✔ Moves data from source to destination
✔ Cleans and transforms data
✔ Ensures data quality
✔ Runs on schedule or in real-time
✔ Handles errors gracefully

Think of it as:
- Assembly line for data
- Automated data factory
- Data highway with checkpoints

---

👉 Pipeline Architecture

Flow: Source → Ingestion → Processing → Storage → Consumption

🔹 **Source**
Where data comes from:
- APIs (REST, GraphQL)
- Databases (MySQL, PostgreSQL, MongoDB)
- Files (CSV, JSON, Parquet)
- Streaming (Kafka, Kinesis)
- Cloud Storage (S3, ADLS, GCS)

🔹 **Ingestion Layer**
Collecting data into system:
- Batch ingestion (scheduled)
- Streaming ingestion (real-time)
- Full load vs Incremental load

🔹 **Processing Layer**
Cleaning and transforming:
- Remove duplicates
- Handle nulls
- Data type conversions
- Business logic application

🔹 **Storage Layer**
Where processed data lives:
- Data Lake (raw storage)
- Data Warehouse (structured)
- Delta Lake (reliable)

🔹 **Consumption Layer**
How data is used:
- Dashboards (Power BI, Tableau)
- Analytics (SQL queries)
- ML models
- APIs for applications

---

👉 ETL vs ELT in Databricks

🔹 **ETL (Extract, Transform, Load)**
Old approach:
1️⃣ Extract data from source
2️⃣ Transform (clean) BEFORE storing
3️⃣ Load into warehouse

Example:
Extract from MySQL → Clean with Python → Load to Redshift

Pros:
✔ Data is clean when stored
✔ Less storage needed

Cons:
❌ Slow (transform before load)
❌ Can't reprocess raw data
❌ Inflexible

🔹 **ELT (Extract, Load, Transform)**
Modern approach (Databricks uses this!):
1️⃣ Extract data from source
2️⃣ Load raw data into Data Lake
3️⃣ Transform using Spark/SQL when needed

Example:
Extract from API → Load to Delta Lake → Transform with Spark

Pros:
✔ Fast ingestion
✔ Keep raw data (can reprocess)
✔ Flexible transformations
✔ Scalable

Cons:
❌ More storage needed

**Databricks Recommendation: Use ELT! 🎯**

---

👉 Medallion Architecture (VERY IMPORTANT)

Medallion = 3-layer data organization pattern

Think of it as:
- Bronze = Raw ingredients
- Silver = Washed and cut
- Gold = Final dish

🥉 **Bronze Layer (Raw Data)**
Purpose: Store data exactly as received

Characteristics:
- No transformations
- All data preserved
- Append-only
- Source of truth

Example:
Raw API responses, log files, CSV dumps

SQL:
CREATE TABLE bronze_orders USING DELTA
AS SELECT * FROM source;

🥈 **Silver Layer (Cleaned Data)**
Purpose: Clean and standardize data

Transformations:
- Remove duplicates
- Handle nulls
- Fix data types
- Filter invalid records
- Join related tables

Example:
CREATE TABLE silver_orders USING DELTA AS
SELECT DISTINCT
  order_id,
  CAST(order_date AS DATE) as order_date,
  COALESCE(customer_name, 'Unknown') as customer_name,
  amount
FROM bronze_orders
WHERE amount > 0;

🥇 **Gold Layer (Business-Ready Data)**
Purpose: Aggregated, business-ready data

Transformations:
- Aggregations (SUM, AVG, COUNT)
- Business metrics
- Denormalized tables
- Optimized for reporting

Example:
CREATE TABLE gold_daily_sales USING DELTA AS
SELECT 
  DATE(order_date) as date,
  region,
  SUM(amount) as total_sales,
  COUNT(*) as order_count,
  AVG(amount) as avg_order_value
FROM silver_orders
GROUP BY DATE(order_date), region;

**Real-World Flow:**
API → Bronze (raw JSON) → Silver (cleaned tables) → Gold (daily metrics) → Dashboard

---

👉 Data Ingestion

Ingestion = Getting data into the system

🔹 **Batch Ingestion**
Scheduled data loads:
- Hourly, daily, weekly
- Process large volumes
- Cost-effective

Example:
Load yesterday's sales data every morning at 6 AM

🔹 **Streaming Ingestion**
Real-time data loads:
- Continuous flow
- Low latency
- Event-driven

Example:
Process credit card transactions as they happen

🔹 **Full Load vs Incremental Load**

**Full Load:**
- Load ALL data every time
- Simple but slow
- Expensive

Example:
Load entire customer table (1M rows) daily

**Incremental Load:**
- Load only NEW or CHANGED data
- Fast and efficient
- Requires tracking mechanism

Example:
Load only customers added/updated since last run

SQL:
SELECT * FROM customers
WHERE updated_at > '2024-01-15';

**Best Practice: Use Incremental Load! 🎯**

---

👉 CDC (Change Data Capture)

CDC = Track changes in source data

What it captures:
- INSERT (new records)
- UPDATE (modified records)
- DELETE (removed records)

How it works:
1️⃣ Source database logs changes
2️⃣ CDC tool captures changes
3️⃣ Pipeline applies changes to target

Example:
Customer updates email → CDC captures → Pipeline updates Delta table

Tools:
- Debezium
- AWS DMS
- Databricks Auto Loader

Use cases:
✔ Real-time sync
✔ Audit trails
✔ Data replication

---

👉 SCD (Slowly Changing Dimensions)

SCD = How to handle changing data

🔹 **SCD Type 1 (Overwrite)**
Old data is replaced

Example:
Customer moves from Mumbai to Delhi

Before:
id=1, name=Ankit, city=Mumbai

After:
id=1, name=Ankit, city=Delhi

❌ No history preserved
✅ Simple and fast

Use case: Corrections, non-critical changes

🔹 **SCD Type 2 (Add New Record)**
Old data preserved with timestamps

Example:
Customer moves from Mumbai to Delhi

Before:
id=1, name=Ankit, city=Mumbai, valid_from=2023-01-01, valid_to=9999-12-31, is_current=true

After:
id=1, name=Ankit, city=Mumbai, valid_from=2023-01-01, valid_to=2024-01-15, is_current=false
id=1, name=Ankit, city=Delhi, valid_from=2024-01-15, valid_to=9999-12-31, is_current=true

✅ Full history preserved
❌ More storage needed

Use case: Audit, compliance, historical analysis

**Databricks Implementation:**
MERGE INTO target USING source
ON target.id = source.id AND target.is_current = true
WHEN MATCHED AND source.city != target.city THEN
  UPDATE SET is_current = false, valid_to = current_date()
WHEN NOT MATCHED THEN
  INSERT (id, name, city, valid_from, valid_to, is_current)
  VALUES (source.id, source.name, source.city, current_date(), '9999-12-31', true);

---

👉 Data Transformation Logic

Common transformations:

1️⃣ **Cleaning**
- Remove duplicates: DISTINCT
- Handle nulls: COALESCE, IFNULL
- Trim whitespace: TRIM

2️⃣ **Filtering**
- Remove invalid records: WHERE
- Date ranges: WHERE date BETWEEN

3️⃣ **Type Conversion**
- CAST(column AS type)
- TO_DATE, TO_TIMESTAMP

4️⃣ **Joining**
- Combine related tables: JOIN
- Enrich data with lookups

5️⃣ **Aggregation**
- GROUP BY with SUM, AVG, COUNT
- Window functions for rankings

6️⃣ **Business Logic**
- CASE statements for categorization
- Calculated columns
- Custom UDFs

Example Pipeline:
df = spark.read.format("delta").load("/bronze/orders")

# Clean
df_clean = df.dropDuplicates(["order_id"]) \
  .filter(df.amount > 0) \
  .withColumn("order_date", to_date(df.order_date))

# Transform
df_transform = df_clean.withColumn(
  "order_category",
  when(df_clean.amount > 1000, "High")
  .when(df_clean.amount > 500, "Medium")
  .otherwise("Low")
)

# Save to Silver
df_transform.write.format("delta").mode("overwrite").save("/silver/orders")

---

👉 Monitoring and Optimization

🔹 **Monitoring**
Track pipeline health:
- Job success/failure rates
- Execution time
- Data quality metrics
- Row counts (input vs output)
- Error logs

Tools:
- Databricks Jobs UI
- Spark UI
- CloudWatch/Azure Monitor
- Custom alerts

🔹 **Optimization**
Make pipelines faster:

1️⃣ **Use Incremental Loads**
Don't reprocess all data

2️⃣ **Partition Data**
Partition by date for faster queries

3️⃣ **Optimize Delta Tables**
Run OPTIMIZE and Z-ORDER

4️⃣ **Cache Frequently Used Data**
df.cache() for reused DataFrames

5️⃣ **Minimize Shuffles**
Avoid unnecessary groupBy/join

6️⃣ **Use Broadcast Joins**
For small lookup tables

7️⃣ **Schedule Wisely**
Run heavy jobs during off-peak hours

---

👉 Error Handling

Pipelines must handle failures:

1️⃣ **Data Quality Checks**
Validate before processing:
- Check for nulls in critical columns
- Validate data types
- Check row counts

2️⃣ **Retry Mechanisms**
Retry failed tasks:
- Transient errors (network issues)
- Configurable retry count

3️⃣ **Dead Letter Queue**
Store failed records:
- Separate table for bad data
- Investigate and reprocess later

4️⃣ **Alerting**
Notify on failures:
- Email/Slack alerts
- PagerDuty for critical issues

5️⃣ **Logging**
Track everything:
- Input/output row counts
- Transformation steps
- Error messages

---

👉 Real-World Pipeline Example

Scenario: E-commerce Daily Sales Pipeline

**Step 1: Ingest (Bronze)**
# Read from API
raw_orders = spark.read.json("/landing/orders/*.json")
raw_orders.write.format("delta").mode("append").save("/bronze/orders")

**Step 2: Clean (Silver)**
CREATE OR REPLACE TABLE silver_orders USING DELTA AS
SELECT DISTINCT
  order_id,
  CAST(order_date AS DATE) as order_date,
  customer_id,
  CAST(amount AS DOUBLE) as amount,
  status
FROM bronze_orders
WHERE amount > 0 AND order_id IS NOT NULL;

**Step 3: Aggregate (Gold)**
CREATE OR REPLACE TABLE gold_daily_sales USING DELTA AS
SELECT 
  order_date,
  COUNT(*) as total_orders,
  SUM(amount) as total_revenue,
  AVG(amount) as avg_order_value,
  COUNT(DISTINCT customer_id) as unique_customers
FROM silver_orders
GROUP BY order_date;

**Step 4: Schedule**
Run daily at 6 AM using Databricks Jobs

**Step 5: Monitor**
Check row counts, execution time, data quality

---

👉 Advanced Concepts

🔹 **Streaming Pipelines**
Process data in real-time:

df = spark.readStream \
  .format("delta") \
  .load("/bronze/events")

df_processed = df.filter(df.event_type == "purchase")

df_processed.writeStream \
  .format("delta") \
  .outputMode("append") \
  .option("checkpointLocation", "/checkpoints/events") \
  .start("/silver/purchases")

🔹 **Idempotency**
Pipeline produces same result when run multiple times:
- Use MERGE instead of INSERT
- Deduplicate on unique keys
- Important for retry logic

🔹 **Data Lineage**
Track data flow:
- Where data came from
- What transformations applied
- Where data went
- Tools: Unity Catalog, Apache Atlas

---

🎯 Interview Line:
"A Data Pipeline is an automated system that moves data from source to destination while applying transformations. In Databricks, we follow the Medallion Architecture with Bronze (raw), Silver (cleaned), and Gold (aggregated) layers. Modern pipelines use ELT approach where data is loaded first into Delta Lake, then transformed using Spark. Key concepts include incremental loading, CDC for change tracking, SCD for handling dimension changes, and proper error handling with monitoring. Pipelines should be idempotent, scalable, and optimized for performance."
`,

    types: `
🔄 ETL:
- Extract → Transform → Load
- Transform before storing
- Old approach

⚡ ELT:
- Extract → Load → Transform
- Load raw, transform later
- Modern approach (Databricks)

🥉 Bronze Layer:
- Raw data as-is
- No transformations
- Source of truth

🥈 Silver Layer:
- Cleaned data
- Deduplicated
- Standardized

🥇 Gold Layer:
- Business-ready
- Aggregated
- Optimized for reporting

📥 Full Load:
- Load all data
- Simple but slow

📊 Incremental Load:
- Load only changes
- Fast and efficient

🔄 CDC:
- Track INSERT/UPDATE/DELETE
- Real-time sync

📋 SCD Type 1:
- Overwrite old data
- No history

📚 SCD Type 2:
- Keep history
- Add new records with timestamps
`,

    qa: [
      {
        q: "What is a Data Pipeline?",
        hint: "Think automation",
        options: ["Manual process", "Automated system that moves and transforms data", "Database", "Programming language"],
        answer: "Automated system that moves and transforms data",
        explanation: `Data Pipeline:\n✔ Automates data flow\n✔ Source → Destination\n✔ Cleans and transforms\n✔ Scheduled or real-time\n\nLike assembly line for data!`,
        memory: "Pipeline = Automated data flow 🔄"
      },
      {
        q: "Difference between ETL and ELT?",
        hint: "Think order",
        options: ["Same thing", "ETL = transform before load, ELT = load before transform", "ETL is faster", "ELT is older"],
        answer: "ETL = transform before load, ELT = load before transform",
        explanation: `ETL:\n- Transform → Then load\n- Slow, inflexible\n\nELT (Databricks):\n- Load → Then transform\n- Fast, flexible\n- Keep raw data\n\nUse ELT! 🎯`,
        memory: "ELT = Load first ⚡"
      },
      {
        q: "What is Medallion Architecture?",
        hint: "Think layers",
        options: ["Single layer", "Bronze (raw), Silver (cleaned), Gold (aggregated)", "Only storage", "Only processing"],
        answer: "Bronze (raw), Silver (cleaned), Gold (aggregated)",
        explanation: `Medallion:\n🥉 Bronze = Raw data\n🥈 Silver = Cleaned data\n🥇 Gold = Business-ready\n\nOrganizes data by quality level!`,
        memory: "Bronze → Silver → Gold 🏅"
      },
      {
        q: "What is Bronze layer?",
        hint: "Think raw",
        options: ["Cleaned data", "Raw data as received from source", "Aggregated data", "Deleted data"],
        answer: "Raw data as received from source",
        explanation: `Bronze Layer:\n✔ Raw, unprocessed\n✔ Exactly as received\n✔ No transformations\n✔ Source of truth\n\nCan always reprocess!`,
        memory: "Bronze = Raw 🥉"
      },
      {
        q: "What is Silver layer?",
        hint: "Think cleaned",
        options: ["Raw data", "Cleaned and standardized data", "Aggregated data", "Deleted data"],
        answer: "Cleaned and standardized data",
        explanation: `Silver Layer:\n✔ Deduplicated\n✔ Nulls handled\n✔ Types fixed\n✔ Validated\n\nReady for analysis!`,
        memory: "Silver = Cleaned 🥈"
      },
      {
        q: "What is Gold layer?",
        hint: "Think business-ready",
        options: ["Raw data", "Cleaned data", "Aggregated, business-ready data", "Deleted data"],
        answer: "Aggregated, business-ready data",
        explanation: `Gold Layer:\n✔ Aggregated metrics\n✔ Business KPIs\n✔ Optimized for dashboards\n✔ Denormalized\n\nDirect to reports!`,
        memory: "Gold = Business-ready 🥇"
      },
      {
        q: "Difference between Full Load and Incremental Load?",
        hint: "Think efficiency",
        options: ["Same thing", "Full = all data, Incremental = only changes", "Full is faster", "Incremental loads everything"],
        answer: "Full = all data, Incremental = only changes",
        explanation: `Full Load:\n- Load ALL data\n- Slow, expensive\n\nIncremental Load:\n- Load only NEW/CHANGED\n- Fast, efficient\n\nUse Incremental! 🎯`,
        memory: "Incremental = Only changes 📊"
      },
      {
        q: "What is CDC?",
        hint: "Think change tracking",
        options: ["Database", "Change Data Capture - tracks INSERT/UPDATE/DELETE", "Programming language", "Storage system"],
        answer: "Change Data Capture - tracks INSERT/UPDATE/DELETE",
        explanation: `CDC:\n✔ Tracks all changes\n✔ INSERT, UPDATE, DELETE\n✔ Real-time sync\n✔ Efficient pipelines\n\nCaptures what changed!`,
        memory: "CDC = Track changes 🔄"
      },
      {
        q: "Difference between SCD Type 1 and Type 2?",
        hint: "Think history",
        options: ["Same thing", "Type 1 = overwrite, Type 2 = keep history", "Type 1 is better", "Type 2 is faster"],
        answer: "Type 1 = overwrite, Type 2 = keep history",
        explanation: `SCD Type 1:\n- Overwrite old data\n- No history\n- Simple\n\nSCD Type 2:\n- Keep all versions\n- Full history\n- Audit trail\n\nUse Type 2 for important data!`,
        memory: "Type 1 = Overwrite, Type 2 = History 📚"
      }
    ],

    coding: {
      title: "Medallion Architecture Pipeline",
      scenario: "Transform data through Bronze → Silver → Gold layers",
      thinkingApproach: [
        "Step 1: Load raw data (Bronze)",
        "Step 2: Clean and deduplicate (Silver)",
        "Step 3: Aggregate metrics (Gold)",
        "Step 4: Validate each layer",
        "Step 5: Handle errors",
        "Step 6: Monitor quality"
      ],
      question: "Process orders through medallion layers",
      input: `bronze_data = [\n  {"order_id": 1, "amount": 100, "city": "Mumbai"},\n  {"order_id": 1, "amount": 100, "city": "Mumbai"},\n  {"order_id": 2, "amount": 200, "city": "Delhi"}\n]`,
      expectedOutput: `Silver: 2 unique orders\nGold: Mumbai=100, Delhi=200`,
      solution: `# Medallion Architecture Pipeline
bronze_data = [
  {"order_id": 1, "amount": 100, "city": "Mumbai"},
  {"order_id": 1, "amount": 100, "city": "Mumbai"},  # duplicate
  {"order_id": 2, "amount": 200, "city": "Delhi"}
]

# SILVER: Clean and deduplicate
silver_data = []
seen = set()
for row in bronze_data:
    if row["order_id"] not in seen:
        silver_data.append(row)
        seen.add(row["order_id"])

print(f"Silver: {len(silver_data)} unique orders")

# GOLD: Aggregate by city
from collections import defaultdict
gold_data = defaultdict(int)
for row in silver_data:
    gold_data[row["city"]] += row["amount"]

print("Gold:", ", ".join([f"{city}={amount}" for city, amount in gold_data.items()]))`,
      note: "In Databricks: Use Delta tables for each layer with proper transformations"
    },

    quiz: [
      { q: "Pipeline?", options: ["Automated", "Manual", "None", "Loop"], answer: 0 },
      { q: "ELT?", options: ["Load first", "Transform first", "None", "Loop"], answer: 0 },
      { q: "Bronze?", options: ["Raw", "Cleaned", "Aggregated", "None"], answer: 0 },
      { q: "Silver?", options: ["Cleaned", "Raw", "Aggregated", "None"], answer: 0 },
      { q: "Gold?", options: ["Business-ready", "Raw", "Cleaned", "None"], answer: 0 },
      { q: "Incremental?", options: ["Only changes", "All data", "None", "Loop"], answer: 0 },
      { q: "CDC?", options: ["Track changes", "Delete all", "None", "Loop"], answer: 0 },
      { q: "SCD Type 2?", options: ["Keep history", "Overwrite", "Delete", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "A Data Pipeline is an automated system that orchestrates the flow of data from source to destination with transformations applied along the way. In Databricks, we implement pipelines using the Medallion Architecture with three layers:

Bronze Layer stores raw data exactly as received, serving as the source of truth. Silver Layer contains cleaned, deduplicated, and validated data ready for analysis. Gold Layer holds aggregated, business-ready data optimized for reporting and dashboards.

Modern pipelines follow the ELT pattern where data is loaded into Delta Lake first, then transformed using Spark SQL. Key concepts include:
- Incremental loading to process only new or changed data
- CDC (Change Data Capture) for tracking source changes
- SCD (Slowly Changing Dimensions) for handling dimension updates
- Proper error handling with retry mechanisms and dead letter queues
- Monitoring and optimization for performance

Pipelines should be idempotent, scalable, and include data quality checks at each stage."
`,

    memory: `
👉 Pipeline = Automated flow 🔄
👉 ELT = Load first ⚡
👉 Bronze = Raw 🥉
👉 Silver = Cleaned 🥈
👉 Gold = Business-ready 🥇
👉 Incremental = Only changes 📊
👉 CDC = Track changes 🔄
👉 SCD Type 1 = Overwrite 📝
👉 SCD Type 2 = History 📚
👉 Medallion = 3 layers 🏅
`,

    revision: "Data Pipelines = Automated ELT flow through Medallion Architecture (Bronze/Silver/Gold) with incremental loads, CDC, and SCD for reliable data processing"
  },

  'databricks-workflows': {
    title: "Databricks Workflows & Jobs (Automating Data Pipeline Execution)",
    subtitle: "Schedule, orchestrate, and monitor automated data pipelines",
    icon: "⚙️",
    difficulty: "Intermediate",
    duration: "~65 min",
    ready: true,

    comic: `
Imagine you're a factory manager 🏭

Old way (Manual):
- Wake up at 1 AM ⏰
- Manually start Machine 1 🔧
- Wait for it to finish ⏳
- Start Machine 2 🔨
- Wait again ⏳
- Start Machine 3 🔩
- Monitor everything 👀
- Do this EVERY DAY! 😰

❌ Problems:
- Exhausting and error-prone
- Can't take vacation
- Forget steps sometimes
- Waste time waiting

🤔 Solution: Automated Factory (Workflows)

✨ Set it once:
1️⃣ Define: Machine 1 → Machine 2 → Machine 3
2️⃣ Schedule: Run every day at 1 AM
3️⃣ Alerts: Notify if something fails
4️⃣ Retry: Auto-retry if temporary issue

💡 Aha Moment:
Databricks Workflows = Automatic factory manager!

👉 Job = Complete production plan
👉 Tasks = Individual machines
👉 Schedule = Automatic timer
👉 Dependencies = Machine order
👉 Alerts = Notification system

Set it once → Runs forever → You sleep peacefully! 😴
`,

    deepDive: `
👉 What are Databricks Workflows?

Databricks Workflows is an orchestration system that:
✔ Automates data pipeline execution
✔ Schedules jobs to run at specific times
✔ Manages task dependencies
✔ Monitors execution and sends alerts
✔ Handles failures with retries

Think of it as:
- Cron jobs on steroids 💪
- Airflow built into Databricks
- Automatic pipeline manager

---

👉 Architecture

Flow: Create Job → Add Tasks → Define Order → Schedule Time → Run on Cluster → Monitor Output

🔹 **Job**
- Complete pipeline definition
- Contains one or more tasks
- Has schedule and configuration
- Like a project plan

🔹 **Task**
- Individual step in pipeline
- Can be: Notebook, SQL, Python script, JAR
- Runs on cluster
- Like a single operation

🔹 **Cluster**
- Compute engine that runs tasks
- Can be: Job cluster (created per run) or All-purpose cluster
- Auto-scales based on workload

🔹 **Scheduler**
- Time-based trigger
- Cron expressions or simple intervals
- Triggers job execution

🔹 **Workflow Engine**
- Controls execution flow
- Manages dependencies
- Handles retries and failures

---

👉 Jobs in Databricks

Job = Complete automated pipeline

Components:
1️⃣ **Name**: Identify your job
2️⃣ **Tasks**: Steps to execute
3️⃣ **Schedule**: When to run
4️⃣ **Cluster**: Where to run
5️⃣ **Parameters**: Input values
6️⃣ **Alerts**: Notifications

Example Job:
Name: "Daily Sales ETL"
Tasks:
- Task 1: Load raw data
- Task 2: Clean data
- Task 3: Aggregate metrics
- Task 4: Update dashboard
Schedule: Every day at 2 AM

---

👉 Creating a Job

**Step 1: Navigate to Workflows**
Databricks UI → Workflows → Create Job

**Step 2: Add Task**
- Task name: "Load Data"
- Type: Notebook
- Source: Select notebook path
- Cluster: Choose or create

**Step 3: Add More Tasks**
- Task name: "Clean Data"
- Depends on: "Load Data"
- Type: Notebook
- Source: Select cleaning notebook

**Step 4: Set Schedule**
- Trigger type: Scheduled
- Schedule: Cron expression or simple
- Example: "0 2 * * *" (2 AM daily)

**Step 5: Configure Alerts**
- On success: Email to team
- On failure: Email + Slack alert

**Step 6: Save and Run**
- Save job
- Test with "Run now"
- Monitor execution

---

👉 Task Types

🔹 **Notebook Task**
Run a Databricks notebook:
- Most common type
- Can pass parameters
- Full PySpark/SQL capabilities

Example:
Task: Run ETL notebook
Path: /Workspace/ETL/daily_sales
Parameters: {"date": "2024-01-15"}

🔹 **SQL Task**
Run SQL queries:
- Execute SQL statements
- Query Delta tables
- Generate reports

Example:
Task: Aggregate sales
Query: SELECT region, SUM(amount) FROM sales GROUP BY region

🔹 **Python Task**
Run Python scripts:
- Execute .py files
- Use libraries
- Custom logic

🔹 **JAR Task**
Run Scala/Java applications:
- For Scala-based pipelines
- Advanced use cases

---

👉 Scheduling

Automate job execution:

🔹 **Cron Expression**
Flexible scheduling:

# Every day at 2 AM
0 2 * * *

# Every hour
0 * * * *

# Every Monday at 9 AM
0 9 * * 1

# Every 15 minutes
*/15 * * * *

Format: minute hour day month weekday

🔹 **Simple Schedule**
User-friendly options:
- Every day at specific time
- Every week on specific day
- Every month

🔹 **Manual Trigger**
Run on-demand:
- Click "Run now"
- API trigger
- Event-based (file arrival)

---

👉 Task Dependencies

Define execution order:

🔹 **Linear Dependency**
Task A → Task B → Task C

Example:
Load Data → Clean Data → Aggregate Data

🔹 **Parallel Execution**
Task A → Task B
         → Task C

Example:
Load Data → Clean Sales Data
         → Clean Customer Data

🔹 **Complex Dependencies**
Task A → Task B → Task D
      → Task C → Task D

Example:
Load → Process Sales → Merge
    → Process Customers → Merge

Task D waits for both B and C to complete!

---

👉 Retry Mechanism

Handle transient failures:

🔹 **Automatic Retry**
Configuration:
- Max retries: 3
- Retry interval: 5 minutes
- Retry on: Specific error types

Example:
Task fails due to network issue
→ Wait 5 minutes
→ Retry automatically
→ If succeeds, continue
→ If fails 3 times, mark as failed

🔹 **Retry Strategies**
- Immediate retry
- Exponential backoff (1min, 2min, 4min)
- Fixed interval

Best Practice:
Enable retries for tasks that might have temporary issues (network, API rate limits)

---

👉 Alerts & Notifications

Stay informed about job status:

🔹 **Email Alerts**
Configure:
- On start
- On success
- On failure
- On duration exceeded

Example:
Send email to data-team@company.com when job fails

🔹 **Slack/Teams Integration**
Real-time notifications:
- Post to channel
- Tag specific users
- Include error details

🔹 **Webhook**
Custom integrations:
- Call external API
- Trigger other systems
- Log to monitoring tools

---

👉 Monitoring Jobs

Track execution:

🔹 **Job Runs Page**
View:
- All job executions
- Status (Running, Success, Failed)
- Duration
- Start/end time

🔹 **Task Details**
For each task:
- Logs (stdout, stderr)
- Spark UI link
- Cluster metrics
- Error messages

🔹 **Metrics**
Track:
- Success rate
- Average duration
- Failure patterns
- Resource usage

---

👉 Job Clusters vs All-Purpose Clusters

🔹 **Job Cluster (Recommended)**
Created per job run:

Pros:
✔ Cost-effective (only runs when needed)
✔ Isolated (no interference)
✔ Auto-terminates after job
✔ Right-sized for workload

Cons:
❌ Startup time (2-5 minutes)

Use for: Production jobs

🔹 **All-Purpose Cluster**
Always running:

Pros:
✔ No startup time
✔ Good for development

Cons:
❌ Expensive (runs 24/7)
❌ Shared resource

Use for: Development, testing

---

👉 Parameters & Variables

Pass values to tasks:

🔹 **Job Parameters**
Define at job level:

Job parameters:
{
  "environment": "production",
  "date": "2024-01-15"
}

🔹 **Task Parameters**
Override per task:

Task parameters:
{
  "table_name": "sales",
  "partition": "2024-01-15"
}

🔹 **Access in Notebook**
dbutils.widgets.get("date")

🔹 **Dynamic Parameters**
Use expressions:
- {{job.start_time}}
- {{task.key}}
- {{job.run_id}}

---

👉 Real-World Example

Scenario: Daily E-commerce ETL Pipeline

**Job Name**: "Daily Sales ETL"

**Task 1: Extract**
- Type: Notebook
- Path: /ETL/extract_sales
- Cluster: Job cluster (2 workers)
- Parameters: {"date": "{{job.start_date}}"}

**Task 2: Transform (depends on Task 1)**
- Type: Notebook
- Path: /ETL/transform_sales
- Cluster: Same as Task 1

**Task 3: Load (depends on Task 2)**
- Type: SQL
- Query: MERGE INTO gold_sales ...
- Cluster: SQL warehouse

**Task 4: Refresh Dashboard (depends on Task 3)**
- Type: Notebook
- Path: /ETL/refresh_dashboard

**Schedule**: Every day at 2 AM (0 2 * * *)

**Alerts**:
- On failure: Email to data-team@company.com
- On success: Slack message to #data-pipeline

**Retry**: Max 2 retries with 5-minute interval

---

👉 Advanced Concepts

🔹 **Parallel Task Execution**
Run multiple tasks simultaneously:

Task A → Task B
      → Task C
      → Task D

All B, C, D run in parallel after A completes!

Benefits:
✔ Faster execution
✔ Better resource utilization

🔹 **Conditional Tasks**
Run tasks based on conditions:

IF Task A succeeds → Run Task B
IF Task A fails → Run Task C (cleanup)

🔹 **Dynamic Task Generation**
Create tasks programmatically:
- Process multiple files
- Handle variable workloads

🔹 **Integration with CI/CD**
Deploy jobs automatically:
- Git integration
- Automated testing
- Version control

---

👉 Best Practices

1️⃣ **Use Job Clusters**
Save costs by using job-specific clusters

2️⃣ **Enable Retries**
Handle transient failures automatically

3️⃣ **Set Alerts**
Know immediately when jobs fail

4️⃣ **Monitor Regularly**
Check job runs and optimize slow tasks

5️⃣ **Use Parameters**
Make jobs reusable and flexible

6️⃣ **Document Jobs**
Add descriptions to tasks and jobs

7️⃣ **Test Before Scheduling**
Run manually first to verify

8️⃣ **Optimize Task Order**
Run independent tasks in parallel

---

👉 Troubleshooting

Common issues:

🔹 **Job Fails Immediately**
Check:
- Cluster configuration
- Notebook path
- Parameters format

🔹 **Task Timeout**
Solution:
- Increase timeout setting
- Optimize task code
- Use larger cluster

🔹 **Dependency Issues**
Check:
- Task dependencies are correct
- No circular dependencies

🔹 **Cluster Startup Failure**
Check:
- Cluster configuration
- Instance availability
- Permissions

---

🎯 Interview Line:
"Databricks Workflows is an orchestration system for automating data pipeline execution. It allows you to create Jobs containing multiple Tasks with defined dependencies, schedule them using cron expressions, and monitor execution. Key features include automatic retries for transient failures, alerts and notifications for job status, support for parallel task execution, and integration with job clusters for cost optimization. Workflows eliminate manual intervention in data pipelines and ensure reliable, scheduled execution of ETL processes."
`,

    types: `
⚙️ Job:
- Complete pipeline
- Contains multiple tasks
- Has schedule and config

📋 Task:
- Individual step
- Types: Notebook, SQL, Python, JAR
- Runs on cluster

⏰ Schedule:
- Cron expression
- Simple intervals
- Manual trigger

🔗 Dependencies:
- Linear: A → B → C
- Parallel: A → B, C, D
- Complex: Multiple paths

🔄 Retry:
- Automatic retry on failure
- Configurable attempts
- Exponential backoff

🔔 Alerts:
- Email notifications
- Slack/Teams integration
- Webhooks

🖥️ Job Cluster:
- Created per run
- Cost-effective
- Auto-terminates

🖥️ All-Purpose Cluster:
- Always running
- Good for dev
- More expensive
`,

    qa: [
      {
        q: "What is a Databricks Job?",
        hint: "Think automated pipeline",
        options: ["Database", "Automated pipeline with scheduled tasks", "Programming language", "Storage system"],
        answer: "Automated pipeline with scheduled tasks",
        explanation: `Databricks Job:\n✔ Complete pipeline definition\n✔ Contains one or more tasks\n✔ Scheduled execution\n✔ Automated monitoring\n\nLike a project plan that runs automatically!`,
        memory: "Job = Automated pipeline ⚙️"
      },
      {
        q: "What is a Task?",
        hint: "Think individual step",
        options: ["Complete pipeline", "Individual step in a job", "Database", "Cluster"],
        answer: "Individual step in a job",
        explanation: `Task:\n✔ Single operation\n✔ Part of a job\n✔ Can be: Notebook, SQL, Python\n✔ Runs on cluster\n\nLike one step in a recipe!`,
        memory: "Task = Single step 📋"
      },
      {
        q: "How to schedule a job?",
        hint: "Think timing",
        options: ["Manual only", "Using cron expressions or simple intervals", "Cannot schedule", "Random times"],
        answer: "Using cron expressions or simple intervals",
        explanation: `Scheduling:\n✔ Cron: 0 2 * * * (2 AM daily)\n✔ Simple: Every day at 2 AM\n✔ Manual: Run now\n\nAutomates execution!`,
        memory: "Schedule = Cron/Intervals ⏰"
      },
      {
        q: "What are task dependencies?",
        hint: "Think order",
        options: ["Random execution", "Defines execution order of tasks", "Storage location", "Cluster type"],
        answer: "Defines execution order of tasks",
        explanation: `Dependencies:\n✔ Task B runs after Task A\n✔ Can be linear or parallel\n✔ Ensures correct order\n\nExample: Load → Clean → Aggregate`,
        memory: "Dependencies = Execution order 🔗"
      },
      {
        q: "What is retry mechanism?",
        hint: "Think failure handling",
        options: ["Delete job", "Automatically retry failed tasks", "Stop execution", "Ignore errors"],
        answer: "Automatically retry failed tasks",
        explanation: `Retry:\n✔ Auto-retry on failure\n✔ Configurable attempts (e.g., 3 times)\n✔ Handles transient issues\n\nExample: Network error → Wait → Retry`,
        memory: "Retry = Auto-retry failures 🔄"
      },
      {
        q: "Difference between Job Cluster and All-Purpose Cluster?",
        hint: "Think cost and usage",
        options: ["Same thing", "Job = per-run, All-Purpose = always running", "Job is slower", "All-Purpose is cheaper"],
        answer: "Job = per-run, All-Purpose = always running",
        explanation: `Job Cluster:\n✔ Created per run\n✔ Cost-effective\n✔ Auto-terminates\n\nAll-Purpose:\n✔ Always running\n✔ Expensive\n✔ Good for dev\n\nUse Job clusters in production!`,
        memory: "Job Cluster = Cost-effective 💰"
      },
      {
        q: "How to get alerts when job fails?",
        hint: "Think notifications",
        options: ["No alerts available", "Configure email, Slack, or webhook alerts", "Check manually", "Wait for report"],
        answer: "Configure email, Slack, or webhook alerts",
        explanation: `Alerts:\n✔ Email notifications\n✔ Slack/Teams messages\n✔ Webhooks for custom integrations\n\nKnow immediately when issues occur!`,
        memory: "Alerts = Notifications 🔔"
      },
      {
        q: "Can tasks run in parallel?",
        hint: "Think simultaneous",
        options: ["No, always sequential", "Yes, independent tasks can run simultaneously", "Only one task at a time", "Never"],
        answer: "Yes, independent tasks can run simultaneously",
        explanation: `Parallel Execution:\n✔ Multiple tasks run together\n✔ Faster pipeline\n✔ Better resource use\n\nExample: Task A → Task B, C, D (parallel)`,
        memory: "Parallel = Faster ⚡"
      },
      {
        q: "Why use Databricks Workflows?",
        hint: "Think automation",
        options: ["Manual work", "Automate pipeline execution and eliminate manual intervention", "Slow down processes", "Delete data"],
        answer: "Automate pipeline execution and eliminate manual intervention",
        explanation: `Workflows:\n✔ Automate repetitive tasks\n✔ Schedule execution\n✔ Handle failures\n✔ Monitor pipelines\n\nNo manual work needed!`,
        memory: "Workflows = Automation 🤖"
      }
    ],

    coding: {
      title: "Workflow Task Dependency",
      scenario: "Simulate task execution with dependencies",
      thinkingApproach: [
        "Step 1: Define tasks",
        "Step 2: Set dependencies",
        "Step 3: Execute in order",
        "Step 4: Handle failures",
        "Step 5: Retry if needed",
        "Step 6: Report status"
      ],
      question: "Execute tasks with dependencies: Load → Clean → Aggregate",
      input: `tasks = ['Load', 'Clean', 'Aggregate']\ndependencies = {'Clean': 'Load', 'Aggregate': 'Clean'}`,
      expectedOutput: `Executing: Load\nCompleted: Load\nExecuting: Clean\nCompleted: Clean\nExecuting: Aggregate\nCompleted: Aggregate`,
      solution: `# Simulating Workflow Execution
tasks = ['Load', 'Clean', 'Aggregate']
dependencies = {'Clean': 'Load', 'Aggregate': 'Clean'}

# Track completed tasks
completed = set()

# Execute tasks in order
for task in tasks:
    # Check if dependency is met
    if task in dependencies:
        dep = dependencies[task]
        if dep not in completed:
            print(f"Waiting for {dep} to complete...")
            continue
    
    # Execute task
    print(f"Executing: {task}")
    # Simulate work
    completed.add(task)
    print(f"Completed: {task}")`,
      note: "In Databricks: Define tasks in UI with dependencies, system handles execution automatically"
    },

    quiz: [
      { q: "Job?", options: ["Automated pipeline", "Database", "Language", "None"], answer: 0 },
      { q: "Task?", options: ["Single step", "Complete pipeline", "Cluster", "None"], answer: 0 },
      { q: "Schedule?", options: ["Cron/Intervals", "Random", "Never", "None"], answer: 0 },
      { q: "Dependencies?", options: ["Execution order", "Random", "None", "Loop"], answer: 0 },
      { q: "Retry?", options: ["Auto-retry", "Never", "Manual", "None"], answer: 0 },
      { q: "Job Cluster?", options: ["Cost-effective", "Expensive", "Slow", "None"], answer: 0 },
      { q: "Alerts?", options: ["Notifications", "None", "Manual", "Loop"], answer: 0 },
      { q: "Parallel?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "Databricks Workflows is an orchestration system that automates data pipeline execution. It allows you to create Jobs containing multiple Tasks with defined dependencies, schedule them using cron expressions or simple intervals, and monitor execution through a centralized UI.

Key features:
- Task types: Notebook, SQL, Python script, JAR
- Dependency management: Linear, parallel, or complex task graphs
- Scheduling: Cron expressions or simple time-based triggers
- Retry mechanism: Automatic retries for transient failures
- Alerts: Email, Slack, Teams, or webhook notifications
- Job clusters: Cost-effective, per-run clusters that auto-terminate
- Monitoring: Detailed logs, metrics, and execution history

Workflows eliminate manual intervention in data pipelines, ensure reliable scheduled execution, and provide visibility into pipeline health. They're essential for production ETL processes, automated reporting, and maintaining data freshness in analytics systems."
`,

    memory: `
👉 Job = Automated pipeline ⚙️
👉 Task = Single step 📋
👉 Schedule = Cron/Intervals ⏰
👉 Dependencies = Order 🔗
👉 Retry = Auto-retry 🔄
👉 Job Cluster = Cost-effective 💰
👉 Alerts = Notifications 🔔
👉 Parallel = Faster ⚡
👉 Workflows = Automation 🤖
👉 Monitor = Track execution 📊
`,

    revision: "Databricks Workflows = Automated job orchestration with tasks, dependencies, scheduling, retries, and alerts for reliable pipeline execution"
  },

  'aws-databricks-integration': {
    title: "AWS + Databricks Integration (Building Cloud Data Platforms)",
    subtitle: "Connect AWS services with Databricks for scalable data pipelines",
    icon: "☁️",
    difficulty: "Advanced",
    duration: "~70 min",
    ready: true,

    comic: `
Imagine you're building a smart city 🏙️

Old way (Isolated systems):
- Storage warehouse in City A 📦
- Processing factory in City B 🏭
- No roads connecting them 🚫
- Manual trucks move data 🚚
- Slow, expensive, error-prone ❌

😰 Problems:
- Can't access data easily
- Security issues (passwords everywhere)
- No coordination
- Waste time moving data

🤔 Solution: Connected Smart City (AWS + Databricks)

✨ Build highways and systems:
1️⃣ S3 = Central warehouse (stores everything)
2️⃣ Databricks = Processing factory (transforms data)
3️⃣ IAM = Security gates (controls access)
4️⃣ Glue Catalog = City map (knows where everything is)
5️⃣ Redshift = Analytics center (reports and insights)

💡 Aha Moment:
AWS + Databricks = Complete data city!

👉 S3 = Storage layer
👉 Databricks = Processing layer
👉 IAM = Security layer
👉 Glue = Metadata layer
👉 Redshift = Analytics layer

Everything connected, secure, and automated! 🚀
`,

    deepDive: `
👉 What is AWS + Databricks Integration?

Integration combines:
✔ AWS services (storage, security, analytics)
✔ Databricks (processing, transformation)
✔ Seamless data flow between systems
✔ Unified data platform

Think of it as:
- AWS = Infrastructure provider
- Databricks = Processing engine
- Together = Complete data platform

---

👉 Architecture

Flow: Data Source → S3 (Storage) → Databricks (Processing) → Glue Catalog (Metadata) → Redshift (Analytics)

🔹 **S3 (Storage Layer)**
- Stores raw data
- Stores processed data
- Cheap and scalable
- Databricks reads/writes directly

🔹 **Databricks (Processing Layer)**
- Processes data using Spark
- Transforms and cleans
- Creates Delta tables
- Runs analytics

🔹 **IAM Roles (Security)**
- Controls access
- No passwords needed
- Secure authentication
- Fine-grained permissions

🔹 **Glue Catalog (Metadata)**
- Stores table schemas
- Tracks data location
- Centralized metadata
- Shared across services

🔹 **Redshift (Analytics)**
- Data warehouse
- Fast SQL queries
- Business intelligence
- Reporting and dashboards

---

👉 S3 Integration

S3 = Primary storage for data lake

🔹 **Reading from S3**
Direct access:

# Read CSV from S3
df = spark.read.csv('s3://bucket-name/path/data.csv', header=True)

# Read Parquet from S3
df = spark.read.parquet('s3://bucket-name/path/data.parquet')

# Read Delta from S3
df = spark.read.format('delta').load('s3://bucket-name/delta-table')

🔹 **Writing to S3**
Save processed data:

# Write Parquet to S3
df.write.parquet('s3://bucket-name/output/data.parquet')

# Write Delta to S3
df.write.format('delta').save('s3://bucket-name/delta-table')

🔹 **S3 Best Practices**
✔ Use partitioning (by date, region)
✔ Use compression (snappy, gzip)
✔ Use Delta Lake for reliability
✔ Organize with folder structure

Example structure:
s3://my-bucket/
  raw/
    sales/
      year=2024/
        month=01/
          data.parquet
  processed/
    sales_clean/
  delta/
    sales_table/

---

👉 IAM Roles (Security)

IAM = Identity and Access Management

🔹 **Why IAM Roles?**
✔ No hardcoded credentials
✔ Secure access
✔ Temporary credentials
✔ Fine-grained permissions

🔹 **Setting up IAM Role**

**Step 1: Create IAM Role in AWS**
- Service: EC2 (for Databricks)
- Permissions: S3 access, Glue access
- Trust relationship: Databricks account

**Step 2: Attach Policies**
Example policy:
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::my-bucket/*",
        "arn:aws:s3:::my-bucket"
      ]
    }
  ]
}

**Step 3: Configure in Databricks**
- Add instance profile
- Attach to cluster
- Access S3 without credentials!

🔹 **Using IAM Role**
No credentials needed:

# Just use S3 path
df = spark.read.parquet('s3://bucket/data')

Databricks uses IAM role automatically!

---

👉 AWS Glue Catalog Integration

Glue Catalog = Centralized metadata store

🔹 **What is Glue Catalog?**
- Stores table schemas
- Tracks data location
- Shared metadata repository
- Works with multiple services

🔹 **Benefits**
✔ Single source of truth
✔ No need to redefine schemas
✔ Works with Databricks, Athena, Redshift
✔ Automatic schema discovery

🔹 **Configuring Glue Catalog**

**In Databricks:**
Spark configuration:
spark.conf.set("spark.sql.catalogImplementation", "hive")
spark.conf.set("spark.hadoop.hive.metastore.client.factory.class",
  "com.amazonaws.glue.catalog.metastore.AWSGlueDataCatalogHiveClientFactory")

**Or in cluster config:**
spark.sql.catalogImplementation hive
spark.hadoop.hive.metastore.client.factory.class com.amazonaws.glue.catalog.metastore.AWSGlueDataCatalogHiveClientFactory

🔹 **Creating Tables in Glue Catalog**

# Create external table
spark.sql("""
  CREATE EXTERNAL TABLE IF NOT EXISTS sales (
    order_id INT,
    amount DOUBLE,
    date DATE
  )
  USING PARQUET
  LOCATION 's3://bucket/sales/'
""")

# Table now visible in Glue Catalog!

🔹 **Querying Glue Tables**

# Query from Databricks
df = spark.sql("SELECT * FROM sales WHERE date >= '2024-01-01'")

# Same table accessible from Athena, Redshift Spectrum!

---

👉 Redshift Integration

Redshift = AWS data warehouse

🔹 **Why Integrate with Redshift?**
✔ Fast SQL analytics
✔ Business intelligence
✔ Reporting and dashboards
✔ Optimized for queries

🔹 **Loading Data to Redshift**

**Method 1: Direct Write**
df.write \
  .format("jdbc") \
  .option("url", "jdbc:redshift://cluster.region.redshift.amazonaws.com:5439/db") \
  .option("dbtable", "sales") \
  .option("user", "username") \
  .option("password", "password") \
  .option("driver", "com.amazon.redshift.jdbc.Driver") \
  .mode("overwrite") \
  .save()

**Method 2: Via S3 (Recommended)**
Faster for large data:

# Step 1: Write to S3
df.write.parquet('s3://bucket/temp/sales')

# Step 2: COPY from S3 to Redshift
spark.sql("""
  COPY sales
  FROM 's3://bucket/temp/sales'
  IAM_ROLE 'arn:aws:iam::account:role/RedshiftRole'
  FORMAT AS PARQUET
""")

🔹 **Reading from Redshift**

df = spark.read \
  .format("jdbc") \
  .option("url", "jdbc:redshift://cluster.region.redshift.amazonaws.com:5439/db") \
  .option("dbtable", "sales") \
  .option("user", "username") \
  .option("password", "password") \
  .load()

---

👉 Secrets Management

Secure storage for credentials

🔹 **AWS Secrets Manager**
Store sensitive data:

# Store secret in AWS Secrets Manager
# Then retrieve in Databricks

import boto3
import json

def get_secret(secret_name):
    client = boto3.client('secretsmanager', region_name='us-east-1')
    response = client.get_secret_value(SecretId=secret_name)
    return json.loads(response['SecretString'])

# Use secret
secret = get_secret('redshift-credentials')
username = secret['username']
password = secret['password']

🔹 **Databricks Secrets**
Built-in secret management:

# Create secret scope (CLI)
databricks secrets create-scope --scope my-scope

# Store secret
databricks secrets put --scope my-scope --key db-password

# Access in notebook
password = dbutils.secrets.get(scope="my-scope", key="db-password")

**Best Practice:**
Never hardcode credentials in notebooks!

---

👉 External Tables

Tables pointing to external data

🔹 **What are External Tables?**
- Data stored in S3
- Table metadata in Databricks/Glue
- No data duplication
- Query data in place

🔹 **Creating External Table**

CREATE EXTERNAL TABLE sales (
  order_id INT,
  amount DOUBLE,
  date DATE
)
USING PARQUET
LOCATION 's3://bucket/sales/';

🔹 **Benefits**
✔ No data movement
✔ Save storage costs
✔ Data accessible from multiple tools
✔ Single source of truth

🔹 **Managed vs External**

**Managed Table:**
- Data stored in Databricks
- DROP TABLE deletes data

**External Table:**
- Data stored in S3
- DROP TABLE keeps data
- Only metadata deleted

---

👉 Real-World Pipeline Example

Scenario: E-commerce Data Platform

**Architecture:**
API → S3 (Raw) → Databricks (Process) → S3 (Processed) → Redshift (Analytics) → Dashboard

**Step 1: Ingest to S3**
# API data lands in S3
s3://my-bucket/raw/orders/2024-01-15/orders.json

**Step 2: Process in Databricks**
# Read from S3
df = spark.read.json('s3://my-bucket/raw/orders/2024-01-15/')

# Clean and transform
df_clean = df.dropDuplicates(['order_id']) \
  .filter(df.amount > 0) \
  .withColumn('processed_date', current_date())

# Write to Delta Lake on S3
df_clean.write.format('delta') \
  .mode('overwrite') \
  .save('s3://my-bucket/delta/orders')

**Step 3: Register in Glue Catalog**
spark.sql("""
  CREATE EXTERNAL TABLE IF NOT EXISTS orders
  USING DELTA
  LOCATION 's3://my-bucket/delta/orders'
""")

**Step 4: Load to Redshift**
# Aggregate data
df_summary = spark.sql("""
  SELECT 
    DATE(order_date) as date,
    region,
    SUM(amount) as total_sales
  FROM orders
  GROUP BY DATE(order_date), region
""")

# Write to S3 temp
df_summary.write.parquet('s3://my-bucket/temp/sales_summary')

# COPY to Redshift
spark.sql("""
  COPY sales_summary
  FROM 's3://my-bucket/temp/sales_summary'
  IAM_ROLE 'arn:aws:iam::account:role/RedshiftRole'
  FORMAT AS PARQUET
""")

**Step 5: Dashboard**
Power BI/Tableau connects to Redshift for reporting

---

👉 Advanced Concepts

🔹 **Cross-Account Access**
Access S3 from different AWS account:

# Configure cross-account IAM role
# Trust relationship allows Databricks account
# Access S3 in another account

🔹 **Delta Lake on S3**
Reliable data lake:

# Create Delta table on S3
df.write.format('delta') \
  .mode('overwrite') \
  .save('s3://bucket/delta-table')

# Benefits: ACID, time travel, schema enforcement

🔹 **Data Sharing**
Share data between systems:
- Databricks reads from S3
- Athena queries same data
- Redshift Spectrum queries S3
- All use Glue Catalog metadata

🔹 **Automated Pipelines**
Combine AWS + Databricks:
- S3 event triggers Lambda
- Lambda triggers Databricks job
- Job processes data
- Updates Redshift
- Sends SNS notification

---

👉 Best Practices

1️⃣ **Use IAM Roles**
Never hardcode credentials

2️⃣ **Partition Data in S3**
Faster queries and lower costs

3️⃣ **Use Delta Lake**
Reliability and performance

4️⃣ **Centralize Metadata in Glue**
Single source of truth

5️⃣ **Optimize S3 Storage**
Compression, file sizes, partitioning

6️⃣ **Secure Secrets**
Use Secrets Manager or Databricks Secrets

7️⃣ **Monitor Costs**
Track S3 storage, Databricks compute, Redshift usage

8️⃣ **Use External Tables**
Avoid data duplication

---

👉 Troubleshooting

Common issues:

🔹 **Access Denied to S3**
Check:
- IAM role permissions
- S3 bucket policy
- Instance profile attached to cluster

🔹 **Glue Catalog Not Working**
Check:
- Spark configuration
- IAM permissions for Glue
- Database exists in Glue

🔹 **Redshift Connection Fails**
Check:
- Network connectivity
- Security groups
- Credentials
- JDBC driver installed

🔹 **Slow Performance**
Optimize:
- Partition data
- Use appropriate file formats
- Optimize cluster size
- Use broadcast joins

---

🎯 Interview Line:
"AWS and Databricks integration creates a unified data platform where AWS provides storage (S3), security (IAM), metadata management (Glue Catalog), and analytics (Redshift), while Databricks handles data processing and transformation using Spark. Key components include S3 for scalable storage, IAM roles for secure access without credentials, Glue Catalog for centralized metadata, and Redshift for data warehousing. This integration enables building end-to-end data pipelines with external tables, Delta Lake on S3, and seamless data sharing across services. Best practices include using IAM roles, partitioning data, leveraging Delta Lake, and centralizing metadata in Glue Catalog."
`,

    types: `
☁️ S3:
- Primary storage
- Raw and processed data
- Cheap and scalable
- Direct Databricks access

🔐 IAM Roles:
- Secure access
- No passwords
- Fine-grained permissions
- Temporary credentials

📚 Glue Catalog:
- Metadata store
- Table schemas
- Centralized repository
- Shared across services

🏢 Redshift:
- Data warehouse
- Fast SQL queries
- Business intelligence
- Reporting

🔒 Secrets Management:
- AWS Secrets Manager
- Databricks Secrets
- Secure credentials
- No hardcoding

📊 External Tables:
- Data in S3
- Metadata in Databricks/Glue
- No duplication
- Query in place

🔄 Delta Lake on S3:
- ACID transactions
- Time travel
- Reliable storage
- Performance
`,

    qa: [
      {
        q: "Why integrate AWS with Databricks?",
        hint: "Think complete platform",
        options: ["Not needed", "Combines AWS storage/security with Databricks processing", "Only for storage", "Only for security"],
        answer: "Combines AWS storage/security with Databricks processing",
        explanation: `Integration benefits:\n✔ AWS = Storage (S3), Security (IAM), Analytics (Redshift)\n✔ Databricks = Processing (Spark)\n✔ Together = Complete data platform\n\nBest of both worlds!`,
        memory: "AWS + Databricks = Complete platform ☁️"
      },
      {
        q: "What is S3 used for?",
        hint: "Think storage",
        options: ["Processing", "Primary storage for data lake", "Security", "Metadata"],
        answer: "Primary storage for data lake",
        explanation: `S3:\n✔ Stores raw data\n✔ Stores processed data\n✔ Cheap and scalable\n✔ Databricks reads/writes directly\n\nFoundation of data lake!`,
        memory: "S3 = Storage layer 📦"
      },
      {
        q: "Why use IAM Roles instead of passwords?",
        hint: "Think security",
        options: ["Faster", "Secure access without hardcoded credentials", "Cheaper", "Required by law"],
        answer: "Secure access without hardcoded credentials",
        explanation: `IAM Roles:\n✔ No passwords in code\n✔ Temporary credentials\n✔ Fine-grained permissions\n✔ Secure and auditable\n\nBest practice for security!`,
        memory: "IAM = Secure access 🔐"
      },
      {
        q: "What is Glue Catalog?",
        hint: "Think metadata",
        options: ["Storage system", "Centralized metadata store for tables and schemas", "Processing engine", "Security tool"],
        answer: "Centralized metadata store for tables and schemas",
        explanation: `Glue Catalog:\n✔ Stores table schemas\n✔ Tracks data location\n✔ Shared across services\n✔ Single source of truth\n\nLike a library catalog!`,
        memory: "Glue = Metadata store 📚"
      },
      {
        q: "What is Redshift used for?",
        hint: "Think analytics",
        options: ["Storage", "Data warehouse for fast SQL analytics", "Processing", "Security"],
        answer: "Data warehouse for fast SQL analytics",
        explanation: `Redshift:\n✔ Data warehouse\n✔ Fast SQL queries\n✔ Business intelligence\n✔ Reporting and dashboards\n\nOptimized for analytics!`,
        memory: "Redshift = Analytics 🏢"
      },
      {
        q: "What are External Tables?",
        hint: "Think data location",
        options: ["Tables with data in Databricks", "Tables pointing to data in S3", "Temporary tables", "Deleted tables"],
        answer: "Tables pointing to data in S3",
        explanation: `External Tables:\n✔ Data stored in S3\n✔ Metadata in Databricks/Glue\n✔ No data duplication\n✔ Query in place\n\nSaves storage costs!`,
        memory: "External = Data in S3 📊"
      },
      {
        q: "How to secure credentials?",
        hint: "Think secrets",
        options: ["Hardcode in notebooks", "Use Secrets Manager or Databricks Secrets", "Share in email", "Write in comments"],
        answer: "Use Secrets Manager or Databricks Secrets",
        explanation: `Secrets Management:\n✔ AWS Secrets Manager\n✔ Databricks Secrets\n✔ Never hardcode\n✔ Secure and auditable\n\nProtect sensitive data!`,
        memory: "Secrets = Secure storage 🔒"
      },
      {
        q: "Can multiple services access same data in S3?",
        hint: "Think sharing",
        options: ["No", "Yes, using Glue Catalog for shared metadata", "Only one at a time", "Need to copy data"],
        answer: "Yes, using Glue Catalog for shared metadata",
        explanation: `Data Sharing:\n✔ Data in S3\n✔ Metadata in Glue Catalog\n✔ Databricks, Athena, Redshift all access\n✔ No duplication\n\nSingle source of truth!`,
        memory: "Glue = Shared metadata 🔄"
      },
      {
        q: "Best practice for S3 storage?",
        hint: "Think optimization",
        options: ["Store everything in one folder", "Use partitioning and compression", "Use CSV only", "No organization needed"],
        answer: "Use partitioning and compression",
        explanation: `S3 Best Practices:\n✔ Partition by date/region\n✔ Use compression (snappy, gzip)\n✔ Use Parquet/Delta\n✔ Organize folder structure\n\nFaster queries, lower costs!`,
        memory: "S3 = Partition + Compress ⚡"
      }
    ],

    coding: {
      title: "AWS S3 + Databricks Pipeline",
      scenario: "Read from S3, process, write back to S3",
      thinkingApproach: [
        "Step 1: Read data from S3",
        "Step 2: Clean and transform",
        "Step 3: Apply business logic",
        "Step 4: Write to S3",
        "Step 5: Register in Glue Catalog",
        "Step 6: Validate output"
      ],
      question: "Process sales data from S3 and save cleaned data back",
      input: `s3_path = 's3://bucket/raw/sales.csv'\ndata = [{'order_id': 1, 'amount': 100}, {'order_id': 1, 'amount': 100}]`,
      expectedOutput: `Read from S3: 2 rows\nCleaned: 1 unique row\nWritten to S3: s3://bucket/processed/sales`,
      solution: `# Simulating S3 + Databricks Pipeline
s3_input = 's3://bucket/raw/sales.csv'
s3_output = 's3://bucket/processed/sales'

# Simulate data
data = [
  {'order_id': 1, 'amount': 100},
  {'order_id': 1, 'amount': 100}  # duplicate
]

print(f"Read from S3: {len(data)} rows")

# Clean: Remove duplicates
seen = set()
clean_data = []
for row in data:
    if row['order_id'] not in seen:
        clean_data.append(row)
        seen.add(row['order_id'])

print(f"Cleaned: {len(clean_data)} unique row")

# Write to S3
print(f"Written to S3: {s3_output}")`,
      note: "In real Databricks: Use spark.read.csv('s3://...') and df.write.parquet('s3://...')"
    },

    quiz: [
      { q: "AWS+Databricks?", options: ["Complete platform", "Only storage", "Only processing", "None"], answer: 0 },
      { q: "S3?", options: ["Storage", "Processing", "Security", "None"], answer: 0 },
      { q: "IAM?", options: ["Secure access", "Storage", "Processing", "None"], answer: 0 },
      { q: "Glue Catalog?", options: ["Metadata", "Storage", "Processing", "None"], answer: 0 },
      { q: "Redshift?", options: ["Analytics", "Storage", "Processing", "None"], answer: 0 },
      { q: "External Tables?", options: ["Data in S3", "Data in Databricks", "Temporary", "None"], answer: 0 },
      { q: "Secrets?", options: ["Secure storage", "Hardcode", "Share", "None"], answer: 0 },
      { q: "Data Sharing?", options: ["Yes via Glue", "No", "Copy data", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "AWS and Databricks integration creates a unified data platform combining AWS infrastructure with Databricks processing capabilities.

Key components:
- S3: Primary storage for data lake (raw and processed data)
- IAM Roles: Secure access without hardcoded credentials
- Glue Catalog: Centralized metadata store for tables and schemas
- Redshift: Data warehouse for fast SQL analytics and reporting
- Secrets Management: Secure storage for credentials

Architecture flow:
Data Source → S3 (storage) → Databricks (processing) → Glue Catalog (metadata) → Redshift (analytics) → Dashboard

Best practices include:
- Using IAM roles for secure access
- Partitioning and compressing data in S3
- Leveraging Delta Lake on S3 for reliability
- Centralizing metadata in Glue Catalog
- Using external tables to avoid data duplication
- Securing credentials with Secrets Manager

This integration enables building scalable, secure, and cost-effective data platforms for enterprise data engineering."
`,

    memory: `
👉 AWS + Databricks = Complete platform ☁️
👉 S3 = Storage layer 📦
👉 IAM = Secure access 🔐
👉 Glue = Metadata store 📚
👉 Redshift = Analytics 🏢
👉 External Tables = Data in S3 📊
👉 Secrets = Secure storage 🔒
👉 Delta on S3 = Reliable 🔄
👉 Partition = Optimize ⚡
👉 Glue = Shared metadata 🔄
`,

    revision: "AWS + Databricks = Integrated platform with S3 storage, IAM security, Glue metadata, Redshift analytics for scalable data pipelines"
  },

  'streaming-real-time': {
    title: "Streaming (Real-Time Data Processing)",
    subtitle: "Process data continuously as it arrives using Spark Structured Streaming",
    icon: "⚡",
    difficulty: "Advanced",
    duration: "~75 min",
    ready: true,

    comic: `
Imagine you're watching a live cricket match 🏏

Old way (Batch Processing):
- Watch entire match ⏰
- Wait for match to end 🏁
- Then see highlights 📺
- Know score after hours ❌

😰 Problem:
- No live updates
- Can't react in real-time
- Miss exciting moments
- Delayed information

🤔 Solution: Live Streaming (Real-Time)

✨ Watch as it happens:
- Score updates every second ⚡
- See wickets instantly 🎯
- Live commentary 🎤
- React immediately 🎉

💡 Aha Moment:
Streaming = Process data as it flows (like a river 🌊)
Batch = Process data in buckets (like a tank 🪣)

👉 Batch = Wait → Collect → Process
👉 Streaming = Process → Process → Process (continuously)

Real-world examples:
- Uber location updates 🚗
- Stock prices 📈
- Fraud detection 🔒
- Live dashboards 📊

No waiting! Instant processing! 🚀
`,

    deepDive: `
👉 What is Streaming?

Streaming is continuous data processing where:
✔ Data processed as it arrives
✔ No waiting for batches
✔ Real-time insights
✔ Immediate actions

Think of it as:
- Live TV vs recorded show
- River flowing vs water tank
- Continuous assembly line vs batch production

---

👉 Architecture

Flow: Data Source → Streaming Engine → Processing → Sink (Storage/Dashboard)

🔹 **Data Source**
Where data comes from:
- Kafka (message queue)
- APIs (webhooks)
- IoT sensors
- Log files
- Event streams

🔹 **Streaming Engine**
Processes data:
- Spark Structured Streaming
- Reads continuously
- Applies transformations
- Writes to sink

🔹 **Checkpoint**
Stores state:
- Tracks progress
- Enables recovery
- Fault tolerance
- Exactly-once processing

🔹 **Sink**
Where data goes:
- Delta tables
- Databases
- Dashboards
- APIs

---

👉 Batch vs Streaming

🔹 **Batch Processing**
Process data in groups:

Characteristics:
- Collect data over time
- Process at scheduled intervals
- Higher latency (minutes to hours)
- Simpler to implement

Example:
Daily sales report:
- Collect all day's data
- Process at midnight
- Generate report
- Available next morning

🔹 **Streaming Processing**
Process data continuously:

Characteristics:
- Process as data arrives
- Continuous execution
- Low latency (seconds)
- More complex

Example:
Fraud detection:
- Transaction happens
- Analyzed immediately
- Alert if suspicious
- Block within seconds

**When to use what?**

Use Batch:
✔ Historical analysis
✔ Reports and summaries
✔ Non-urgent processing
✔ Large data volumes

Use Streaming:
✔ Real-time alerts
✔ Live dashboards
✔ Fraud detection
✔ Monitoring systems

---

👉 Spark Structured Streaming

Spark's streaming API:

🔹 **What is it?**
- Built on Spark SQL engine
- Uses DataFrame API
- Same code as batch!
- Optimized for streaming

Key benefit:
Write once, run as batch OR streaming!

🔹 **Basic Streaming Query**

# Read stream
df = spark.readStream \
  .format("kafka") \
  .option("kafka.bootstrap.servers", "localhost:9092") \
  .option("subscribe", "orders") \
  .load()

# Process
df_processed = df.selectExpr("CAST(value AS STRING)") \
  .select(from_json(col("value"), schema).alias("data")) \
  .select("data.*")

# Write stream
query = df_processed.writeStream \
  .format("delta") \
  .outputMode("append") \
  .option("checkpointLocation", "/checkpoints/orders") \
  .start("/delta/orders")

query.awaitTermination()

---

👉 Kafka Integration

Kafka = Distributed message queue

🔹 **What is Kafka?**
- Stores streams of events
- High throughput
- Fault tolerant
- Distributed

Think of it as:
- Post office for data
- Messages queue up
- Consumers read messages

🔹 **Reading from Kafka**

df = spark.readStream \
  .format("kafka") \
  .option("kafka.bootstrap.servers", "host:9092") \
  .option("subscribe", "topic-name") \
  .option("startingOffsets", "latest") \
  .load()

Options:
- subscribe: Topic name
- startingOffsets: "earliest" or "latest"
- kafka.bootstrap.servers: Kafka cluster address

🔹 **Writing to Kafka**

df.writeStream \
  .format("kafka") \
  .option("kafka.bootstrap.servers", "host:9092") \
  .option("topic", "output-topic") \
  .option("checkpointLocation", "/checkpoints/output") \
  .start()

---

👉 Output Modes

How to write streaming results:

🔹 **Append Mode**
Only new rows:
- Default mode
- Adds new records only
- Cannot update existing

Use case: Log processing, event tracking

.outputMode("append")

🔹 **Complete Mode**
Entire result table:
- Rewrites full output
- Includes all data
- Used with aggregations

Use case: Real-time dashboards, counts

.outputMode("complete")

🔹 **Update Mode**
Only updated rows:
- Updates changed records
- Efficient for aggregations
- Doesn't rewrite everything

Use case: Aggregations, summaries

.outputMode("update")

---

👉 Triggers

Control execution frequency:

🔹 **Default (Micro-batch)**
Process as fast as possible:

.trigger(processingTime="0 seconds")

🔹 **Fixed Interval**
Process every N seconds:

.trigger(processingTime="10 seconds")

Process every 10 seconds

🔹 **Once**
Process available data once and stop:

.trigger(once=True)

Good for testing

🔹 **Continuous**
Low-latency processing:

.trigger(continuous="1 second")

Millisecond latency (experimental)

---

👉 Checkpointing

Fault tolerance mechanism:

🔹 **What is Checkpointing?**
- Saves processing state
- Tracks progress
- Enables recovery
- Ensures exactly-once

Think of it as:
- Saving game progress
- Bookmark in a book
- Resume from last point

🔹 **How to use:**

.option("checkpointLocation", "/path/to/checkpoint")

Required for all streaming queries!

🔹 **What's stored:**
- Offsets (what's been processed)
- Metadata
- State information

🔹 **Recovery:**
If job fails:
1️⃣ Restart job
2️⃣ Read checkpoint
3️⃣ Resume from last offset
4️⃣ No data loss!

---

👉 Watermarking

Handle late-arriving data:

🔹 **Problem:**
Data doesn't always arrive in order:
- Network delays
- System issues
- Clock differences

Example:
Event at 10:00 AM arrives at 10:05 AM

🔹 **Solution: Watermarking**
Set time limit for late data:

df.withWatermark("timestamp", "10 minutes") \
  .groupBy(window("timestamp", "5 minutes")) \
  .count()

Meaning:
- Wait up to 10 minutes for late data
- After that, ignore it
- Prevents infinite waiting

🔹 **Event Time vs Processing Time**

**Event Time:**
- When event actually happened
- Embedded in data
- More accurate

**Processing Time:**
- When system processes event
- System timestamp
- Less accurate

Always use Event Time for accuracy!

---

👉 Exactly-Once Processing

Guarantee no duplicates:

🔹 **Processing Guarantees**

**At-most-once:**
- May lose data
- No duplicates
- Fastest

**At-least-once:**
- No data loss
- May have duplicates
- Common

**Exactly-once:**
- No data loss
- No duplicates
- Ideal but complex

🔹 **Achieving Exactly-Once**

Spark Structured Streaming provides:
✔ Checkpointing
✔ Idempotent writes
✔ Transactional sinks (Delta Lake)

Use Delta Lake as sink:

.format("delta") \
.option("checkpointLocation", "/checkpoints") \
.start("/delta/table")

Delta ensures exactly-once!

---

👉 Stateful Streaming

Maintain state across events:

🔹 **What is State?**
Information remembered between events:
- Running counts
- Aggregations
- Session data

🔹 **Stateless vs Stateful**

**Stateless:**
Each event independent:
- Filter
- Map
- Select

**Stateful:**
Events depend on previous:
- Aggregations (count, sum)
- Joins
- Deduplication

🔹 **Example: Running Count**

df.groupBy("user_id") \
  .count()

Maintains count for each user across all events!

---

👉 Stream-Stream Joins

Join two streams:

🔹 **Use Case:**
Combine related events:
- Orders + Payments
- Clicks + Impressions
- Sensor readings

🔹 **Example:**

# Stream 1: Orders
orders = spark.readStream.format("kafka").load()

# Stream 2: Payments
payments = spark.readStream.format("kafka").load()

# Join with watermark
orders.withWatermark("order_time", "10 minutes") \
  .join(
    payments.withWatermark("payment_time", "10 minutes"),
    expr("""
      order_id = payment_order_id AND
      payment_time >= order_time AND
      payment_time <= order_time + interval 1 hour
    """)
  )

Watermark required for stream-stream joins!

---

👉 Real-World Example

Scenario: Real-time Fraud Detection

**Architecture:**
Transactions → Kafka → Spark Streaming → Fraud Check → Alert + Store

**Implementation:**

# Read transactions from Kafka
transactions = spark.readStream \
  .format("kafka") \
  .option("kafka.bootstrap.servers", "localhost:9092") \
  .option("subscribe", "transactions") \
  .load()

# Parse JSON
from pyspark.sql.functions import from_json, col

schema = StructType([
  StructField("transaction_id", StringType()),
  StructField("user_id", StringType()),
  StructField("amount", DoubleType()),
  StructField("timestamp", TimestampType())
])

df = transactions.selectExpr("CAST(value AS STRING)") \
  .select(from_json(col("value"), schema).alias("data")) \
  .select("data.*")

# Fraud detection logic
from pyspark.sql.functions import window, sum as _sum

fraud_check = df.withWatermark("timestamp", "10 minutes") \
  .groupBy(
    window("timestamp", "5 minutes"),
    "user_id"
  ) \
  .agg(_sum("amount").alias("total_amount")) \
  .filter(col("total_amount") > 10000)  # Suspicious if > 10k in 5 min

# Write alerts
query = fraud_check.writeStream \
  .format("delta") \
  .outputMode("append") \
  .option("checkpointLocation", "/checkpoints/fraud") \
  .start("/delta/fraud_alerts")

query.awaitTermination()

---

👉 Integration with Delta Lake

Best sink for streaming:

🔹 **Why Delta Lake?**
✔ ACID transactions
✔ Exactly-once guarantee
✔ Schema enforcement
✔ Time travel
✔ Unified batch + streaming

🔹 **Streaming to Delta**

df.writeStream \
  .format("delta") \
  .outputMode("append") \
  .option("checkpointLocation", "/checkpoints/orders") \
  .start("/delta/orders")

🔹 **Reading Delta as Stream**

df = spark.readStream \
  .format("delta") \
  .load("/delta/orders")

Delta table acts as streaming source!

---

👉 Monitoring Streaming Jobs

Track performance:

🔹 **Streaming Query UI**
Databricks provides:
- Input rate
- Processing rate
- Batch duration
- Latency

🔹 **Key Metrics**

**Input Rate:**
Records/second arriving

**Processing Rate:**
Records/second processed

**Batch Duration:**
Time to process each batch

**Latency:**
Delay between arrival and processing

🔹 **Health Check**

Healthy streaming:
✔ Processing rate > Input rate
✔ Low latency
✔ No errors

Unhealthy:
❌ Processing rate < Input rate (backlog building)
❌ High latency
❌ Frequent failures

---

👉 Best Practices

1️⃣ **Always use Checkpointing**
Ensures fault tolerance

2️⃣ **Use Delta Lake as Sink**
Exactly-once guarantee

3️⃣ **Set Watermarks**
Handle late data properly

4️⃣ **Monitor Metrics**
Track input/processing rates

5️⃣ **Optimize Trigger Intervals**
Balance latency vs throughput

6️⃣ **Use Event Time**
More accurate than processing time

7️⃣ **Test with Small Data**
Validate logic before production

8️⃣ **Handle Failures Gracefully**
Retry logic, alerts

---

🎯 Interview Line:
"Spark Structured Streaming enables real-time data processing using the DataFrame API. It processes data continuously as it arrives from sources like Kafka, with features like checkpointing for fault tolerance, watermarking for handling late data, and exactly-once processing guarantees. Key concepts include output modes (append, complete, update), triggers for controlling execution frequency, and stateful operations for maintaining state across events. Integration with Delta Lake provides ACID transactions and unified batch-streaming architecture. Streaming is essential for use cases requiring low latency like fraud detection, live dashboards, and real-time monitoring."
`,

    types: `
⚡ Streaming:
- Continuous processing
- Real-time insights
- Low latency (seconds)
- Process as data arrives

🪣 Batch:
- Scheduled processing
- Historical analysis
- Higher latency (hours)
- Process in groups

📊 Output Modes:
- Append: New rows only
- Complete: Full result
- Update: Changed rows only

⏰ Triggers:
- Default: As fast as possible
- Fixed: Every N seconds
- Once: Single execution
- Continuous: Low latency

💾 Checkpointing:
- Saves state
- Fault tolerance
- Exactly-once
- Required for all streams

⏱️ Watermarking:
- Handle late data
- Set time limit
- Prevent infinite wait
- Use event time

🔒 Processing Guarantees:
- At-most-once: May lose data
- At-least-once: May duplicate
- Exactly-once: Perfect (Delta)

🔄 Stateful:
- Maintains state
- Aggregations
- Joins
- Deduplication
`,

    qa: [
      {
        q: "Difference between Batch and Streaming?",
        hint: "Think timing",
        options: ["Same thing", "Batch = scheduled groups, Streaming = continuous real-time", "Batch is faster", "Streaming is older"],
        answer: "Batch = scheduled groups, Streaming = continuous real-time",
        explanation: `Batch:\n- Process in groups\n- Scheduled (hourly, daily)\n- Higher latency\n\nStreaming:\n- Process continuously\n- Real-time\n- Low latency (seconds)\n\nUse streaming for real-time needs!`,
        memory: "Batch = Later 🪣, Stream = Now ⚡"
      },
      {
        q: "What is Spark Structured Streaming?",
        hint: "Think API",
        options: ["Database", "Spark's streaming API using DataFrame", "Storage system", "Security tool"],
        answer: "Spark's streaming API using DataFrame",
        explanation: `Structured Streaming:\n✔ Built on Spark SQL\n✔ Uses DataFrame API\n✔ Same code as batch\n✔ Optimized for streaming\n\nWrite once, run as batch OR streaming!`,
        memory: "Structured Streaming = DataFrame API ⚡"
      },
      {
        q: "What is Checkpointing?",
        hint: "Think fault tolerance",
        options: ["Delete data", "Saves state for fault tolerance and recovery", "Speed up queries", "Compress data"],
        answer: "Saves state for fault tolerance and recovery",
        explanation: `Checkpointing:\n✔ Saves processing state\n✔ Tracks progress\n✔ Enables recovery\n✔ Exactly-once guarantee\n\nLike saving game progress!`,
        memory: "Checkpoint = Save state 💾"
      },
      {
        q: "What is Watermarking?",
        hint: "Think late data",
        options: ["Delete old data", "Handle late-arriving data with time limits", "Speed up processing", "Compress data"],
        answer: "Handle late-arriving data with time limits",
        explanation: `Watermarking:\n✔ Sets time limit for late data\n✔ Prevents infinite waiting\n✔ Uses event time\n\nExample: Wait 10 minutes for late data`,
        memory: "Watermark = Late data limit ⏱️"
      },
      {
        q: "What is Exactly-Once processing?",
        hint: "Think guarantees",
        options: ["Process multiple times", "Ensures no duplicates and no data loss", "Process randomly", "Skip some data"],
        answer: "Ensures no duplicates and no data loss",
        explanation: `Exactly-Once:\n✔ No data loss\n✔ No duplicates\n✔ Perfect guarantee\n\nAchieved with:\n- Checkpointing\n- Delta Lake\n- Idempotent writes`,
        memory: "Exactly-Once = Perfect 🔒"
      },
      {
        q: "Why use Delta Lake for streaming?",
        hint: "Think reliability",
        options: ["Faster", "Provides ACID and exactly-once guarantee", "Cheaper", "Required by law"],
        answer: "Provides ACID and exactly-once guarantee",
        explanation: `Delta Lake for Streaming:\n✔ ACID transactions\n✔ Exactly-once guarantee\n✔ Schema enforcement\n✔ Unified batch + streaming\n\nBest sink for streaming!`,
        memory: "Delta = Reliable streaming 🔒"
      },
      {
        q: "What are Output Modes?",
        hint: "Think write behavior",
        options: ["Storage types", "How streaming results are written (append/complete/update)", "Cluster types", "Security modes"],
        answer: "How streaming results are written (append/complete/update)",
        explanation: `Output Modes:\n- Append: New rows only\n- Complete: Full result\n- Update: Changed rows\n\nChoose based on use case!`,
        memory: "Output Modes = Write behavior 📊"
      },
      {
        q: "What is Kafka used for?",
        hint: "Think message queue",
        options: ["Database", "Distributed message queue for streaming data", "Processing engine", "Storage system"],
        answer: "Distributed message queue for streaming data",
        explanation: `Kafka:\n✔ Stores event streams\n✔ High throughput\n✔ Fault tolerant\n✔ Common streaming source\n\nLike post office for data!`,
        memory: "Kafka = Message queue 📬"
      },
      {
        q: "When to use Streaming vs Batch?",
        hint: "Think use case",
        options: ["Always streaming", "Streaming for real-time, Batch for historical", "Always batch", "Random choice"],
        answer: "Streaming for real-time, Batch for historical",
        explanation: `Use Streaming:\n✔ Real-time alerts\n✔ Live dashboards\n✔ Fraud detection\n\nUse Batch:\n✔ Historical analysis\n✔ Reports\n✔ Non-urgent processing`,
        memory: "Streaming = Real-time, Batch = Historical 📊"
      }
    ],

    coding: {
      title: "Streaming Word Count",
      scenario: "Process streaming data and count words",
      thinkingApproach: [
        "Step 1: Read stream",
        "Step 2: Parse data",
        "Step 3: Split into words",
        "Step 4: Count words",
        "Step 5: Write stream",
        "Step 6: Monitor"
      ],
      question: "Simulate streaming word count",
      input: `stream_data = ['hello world', 'hello spark', 'world spark']`,
      expectedOutput: `hello: 2\nworld: 2\nspark: 2`,
      solution: `# Simulating Streaming Word Count
stream_data = ['hello world', 'hello spark', 'world spark']

# Process stream
word_count = {}
for line in stream_data:
    words = line.split()
    for word in words:
        word_count[word] = word_count.get(word, 0) + 1

# Output
for word, count in sorted(word_count.items()):
    print(f"{word}: {count}")`,
      note: "In real Spark: Use readStream, transformations, and writeStream with checkpointing"
    },

    quiz: [
      { q: "Streaming?", options: ["Real-time", "Batch", "Manual", "None"], answer: 0 },
      { q: "Structured Streaming?", options: ["DataFrame API", "RDD", "SQL only", "None"], answer: 0 },
      { q: "Checkpoint?", options: ["Save state", "Delete data", "Speed up", "None"], answer: 0 },
      { q: "Watermark?", options: ["Late data", "Delete data", "Speed up", "None"], answer: 0 },
      { q: "Exactly-Once?", options: ["No duplicates", "Many duplicates", "Random", "None"], answer: 0 },
      { q: "Delta for streaming?", options: ["Reliable", "Slow", "Expensive", "None"], answer: 0 },
      { q: "Output Modes?", options: ["Append/Complete/Update", "Only one", "Random", "None"], answer: 0 },
      { q: "Kafka?", options: ["Message queue", "Database", "Processing", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "Spark Structured Streaming enables real-time data processing using the DataFrame API, providing a unified approach for batch and streaming workloads. It processes data continuously as it arrives from sources like Kafka, with key features including:

- Checkpointing: Saves processing state for fault tolerance and exactly-once guarantees
- Watermarking: Handles late-arriving data by setting time limits
- Output modes: Append (new rows), Complete (full result), Update (changed rows)
- Triggers: Control execution frequency (default, fixed interval, once, continuous)
- Stateful operations: Maintain state across events for aggregations and joins

Integration with Delta Lake provides ACID transactions, schema enforcement, and unified batch-streaming architecture. Streaming is essential for low-latency use cases like fraud detection, real-time monitoring, live dashboards, and event-driven applications. Best practices include using checkpointing, Delta Lake as sink, watermarking for late data, and monitoring input/processing rates."
`,

    memory: `
👉 Batch = Later 🪣, Stream = Now ⚡
👉 Structured Streaming = DataFrame API ⚡
👉 Checkpoint = Save state 💾
👉 Watermark = Late data limit ⏱️
👉 Exactly-Once = Perfect 🔒
👉 Delta = Reliable streaming 🔒
👉 Output Modes = Write behavior 📊
👉 Kafka = Message queue 📬
👉 Stateful = Maintain state 🔄
👉 Real-time = Streaming use case ⚡
`,

    revision: "Streaming = Real-time continuous processing with Spark Structured Streaming, checkpointing, watermarking, and Delta Lake for reliable low-latency pipelines"
  },

  'security-governance': {
    title: "Security & Governance (Protecting and Controlling Data Access)",
    subtitle: "Manage data access, permissions, and compliance with Unity Catalog",
    icon: "🔐",
    difficulty: "Advanced",
    duration: "~65 min",
    ready: true,

    topic: "Security & Governance",
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
    }
  },

  'performance-optimization': {
    topic: "Performance Optimization",
    title: "Performance Optimization (Making Data Processing Faster and Efficient)",
    subtitle: "Optimize storage, processing, and execution for faster results",
    icon: "⚡",
    difficulty: "Advanced",
    duration: "~70 min",
    ready: true,

    aatma: {
      Architecture: {
        description: "Performance Optimization is about making data processing faster and more efficient by reducing unnecessary work, improving data organization, and using system resources smartly.",
        flow: "Raw Data → Optimize Storage → Optimize Processing → Efficient Execution → Faster Results",
        key_components: [
          "Partitions (data distribution)",
          "Indexes/Z-Ordering",
          "Cache (memory usage)",
          "Execution Plan",
          "Cluster Resources"
        ]
      },

      Application: {
        description: "Used to reduce execution time, cost, and improve system performance in large-scale data processing.",
        use_cases: [
          "Speeding up slow queries",
          "Reducing job execution time",
          "Handling large datasets efficiently",
          "Optimizing ETL pipelines"
        ],
        real_world_example: "A report taking 30 minutes can be optimized to run in 2 minutes using partitioning, caching, and proper joins."
      },

      Tools_and_Techniques: {
        tools: [
          "Databricks",
          "Spark UI",
          "Delta Lake",
          "PySpark",
          "SQL Optimization"
        ],
        subtopics: {
          "Partitioning": "Data is divided into smaller parts so multiple executors can process it in parallel. Example: splitting data by date or region.",
          "Z-Ordering": "Organizes data in storage so related data is stored close together. This improves query performance when filtering.",
          "Caching & Persistence": "Stores frequently used data in memory so it doesn't need to be recomputed again.",
          "Broadcast Joins": "Small table is sent to all executors to avoid data shuffling, making joins faster.",
          "Data Skew Handling": "When one partition has too much data, it slows down processing. Skew handling balances data across partitions.",
          "File Compaction": "Combines many small files into fewer large files to improve read performance.",
          "Query Optimization": "Writing efficient queries by selecting only needed columns, filtering early, and avoiding unnecessary operations."
        }
      },

      Monitoring_and_Optimization: {
        description: "Continuously improving performance using monitoring tools",
        methods: [
          "Analyze Spark UI for bottlenecks",
          "Reduce data shuffling",
          "Use caching for repeated queries",
          "Apply partitioning wisely",
          "Optimize joins and filters",
          "Compact small files regularly"
        ]
      },

      Advanced_and_RealWorld: {
        description: "In production systems, optimization ensures scalability, cost efficiency, and fast data processing",
        advanced_concepts: [
          "Adaptive Query Execution (AQE)",
          "Dynamic partition pruning",
          "Optimized file formats (Delta)",
          "Cluster auto-scaling",
          "End-to-end pipeline optimization"
        ],
        real_world_flow: "Raw Data → Partitioned Storage → Optimized Queries → Faster Execution → Reduced Cost → Efficient Dashboard"
      }
    },

    objective: "Understand performance optimization techniques to make data processing faster, more efficient, and cost-effective",

    comic: `
Imagine you're organizing a massive library 📚

Old way (Unoptimized):
- All books mixed together 📦
- No categories or sections 🚫
- Search takes hours ⏰
- Multiple people searching same shelf 🤦
- Small notes scattered everywhere 📄

😰 Problem:
- Finding a book takes forever
- Wasting time and energy
- Frustrated users
- High costs

🤔 Solution: Optimize the Library!

✨ Smart Organization:
1️⃣ Partition: Organize by category (Fiction, Science, History)
2️⃣ Index: Create catalog (Z-Ordering)
3️⃣ Cache: Keep popular books at front desk
4️⃣ Compact: Combine small notes into books
5️⃣ Broadcast: Give everyone a map (no asking repeatedly)

💡 Aha Moment:
Performance Optimization = Smart organization + Efficient access!

👉 Unoptimized = Chaos and slow 🐌
👉 Optimized = Fast and efficient ⚡

Result: Find any book in seconds! 🚀
`,

    deepDive: `
👉 What is Performance Optimization?

Performance Optimization is the process of:
✔ Making queries run faster
✔ Reducing resource usage
✔ Lowering costs
✔ Improving user experience
✔ Scaling efficiently

Think of it as:
- Tuning a car engine for better performance
- Organizing a warehouse for faster access
- Optimizing a route for shorter travel time

---

👉 Why Performance Matters?

Without optimization:
❌ Queries take hours instead of minutes
❌ High compute costs
❌ Poor user experience
❌ System bottlenecks
❌ Wasted resources

With optimization:
✅ Faster results (10x-100x improvement)
✅ Lower costs (50-80% reduction)
✅ Better scalability
✅ Happy users
✅ Efficient resource usage

Real-world impact:
- Report generation: 30 min → 2 min
- Dashboard refresh: 5 min → 30 sec
- ETL pipeline: 4 hours → 30 min

---

👉 Key Optimization Areas

🔹 **1. Storage Optimization**
How data is stored affects read performance

Techniques:
- Partitioning
- File format (Parquet/Delta)
- File size optimization
- Z-Ordering
- Compression

🔹 **2. Processing Optimization**
How data is processed affects execution time

Techniques:
- Caching
- Broadcast joins
- Avoiding shuffles
- Predicate pushdown
- Column pruning

🔹 **3. Query Optimization**
How queries are written affects performance

Techniques:
- Filter early
- Select only needed columns
- Avoid SELECT *
- Use appropriate joins
- Optimize aggregations

🔹 **4. Cluster Optimization**
How resources are configured affects speed

Techniques:
- Right cluster size
- Auto-scaling
- Spot instances
- Photon engine
- Resource allocation

---

👉 Partitioning (VERY IMPORTANT)

Partitioning = Dividing data into smaller chunks

🔹 **What is Partitioning?**
Organize data into folders based on column values

Example:
/sales/
  year=2024/
    month=01/
      data.parquet
    month=02/
      data.parquet
  year=2023/
    month=12/
      data.parquet

🔹 **Benefits**
✔ Faster queries (scan only needed partitions)
✔ Parallel processing
✔ Lower costs (less data scanned)
✔ Better organization

🔹 **How to Partition**

# Write partitioned data
df.write.partitionBy("year", "month").parquet("/path")

# Query with partition filter
df = spark.read.parquet("/path")
df.filter("year = 2024 AND month = 01").show()

Only scans year=2024/month=01 folder!

🔹 **Choosing Partition Columns**

Good partition columns:
✔ Low cardinality (not too many unique values)
✔ Frequently used in filters
✔ Evenly distributed data

Examples:
✔ Date (year, month, day)
✔ Region (country, state)
✔ Category (product_type, department)

Bad partition columns:
❌ High cardinality (user_id, transaction_id)
❌ Rarely used in queries
❌ Skewed distribution

🔹 **Partition Pruning**
Spark automatically skips irrelevant partitions

Query:
SELECT * FROM sales WHERE year = 2024

Spark only reads year=2024 partitions!
Skips all other years → Much faster!

---

👉 Z-Ordering (Data Clustering)

Z-Ordering = Organizing data for faster filtering

🔹 **What is Z-Ordering?**
Co-locates related data in storage

Example:
Without Z-Order: Data scattered randomly
With Z-Order: Similar values stored together

🔹 **When to Use**
✔ Columns frequently used in WHERE clauses
✔ High cardinality columns
✔ Multiple filter columns

🔹 **How to Use**

OPTIMIZE table_name ZORDER BY (column1, column2)

Example:
OPTIMIZE sales ZORDER BY (customer_id, product_id)

Queries filtering by customer_id or product_id become much faster!

🔹 **Benefits**
✔ Faster point lookups
✔ Reduced data scanning
✔ Better compression
✔ Lower costs

---

👉 Caching & Persistence

Caching = Storing data in memory for reuse

🔹 **What is Caching?**
Keep frequently accessed data in RAM

Benefits:
✔ Avoid recomputation
✔ Faster subsequent queries
✔ Reduced I/O

🔹 **When to Cache**
✔ Data used multiple times
✔ Iterative algorithms
✔ Interactive analysis
✔ Small to medium datasets

🔹 **How to Cache**

# Cache DataFrame
df.cache()

# Or persist with storage level
df.persist(StorageLevel.MEMORY_AND_DISK)

# Unpersist when done
df.unpersist()

🔹 **Storage Levels**

MEMORY_ONLY: Store in RAM only (fastest)
MEMORY_AND_DISK: Spill to disk if RAM full
DISK_ONLY: Store on disk only
MEMORY_ONLY_SER: Serialized in RAM (saves space)

🔹 **Best Practices**
✔ Cache after expensive operations
✔ Cache before multiple actions
✔ Unpersist when no longer needed
✔ Monitor memory usage

---

👉 Broadcast Joins

Broadcast = Send small table to all executors

🔹 **What is Broadcast Join?**
Instead of shuffling large table, send small table to all nodes

Regular Join:
Large Table (shuffle) + Small Table (shuffle) = Slow

Broadcast Join:
Large Table (no shuffle) + Small Table (broadcast) = Fast!

🔹 **When to Use**
✔ One table is small (< 10MB)
✔ Joining large table with lookup table
✔ Avoid shuffle overhead

🔹 **How to Use**

from pyspark.sql.functions import broadcast

# Automatic (Spark decides)
large_df.join(small_df, "id")

# Manual (force broadcast)
large_df.join(broadcast(small_df), "id")

🔹 **Benefits**
✔ No shuffle (much faster)
✔ Lower network traffic
✔ Better performance

---

👉 Avoiding Data Skew

Data Skew = Uneven data distribution

🔹 **What is Data Skew?**
Some partitions have much more data than others

Example:
Partition 1: 1000 rows
Partition 2: 1000 rows
Partition 3: 1,000,000 rows ← Skewed!

Result: Partition 3 takes forever, others finish quickly

🔹 **Detecting Skew**
Check Spark UI:
- One task takes much longer
- Uneven task durations
- Some executors idle while one works

🔹 **Solutions**

**1. Salting**
Add random prefix to skewed key

# Add salt
df = df.withColumn("salted_key", concat(col("key"), lit("_"), (rand() * 10).cast("int")))

# Join on salted key
df1.join(df2, "salted_key")

**2. Repartitioning**
df.repartition(100, "key")

**3. Broadcast Join**
If one side is small, broadcast it

**4. Adaptive Query Execution (AQE)**
Enable AQE to handle skew automatically

spark.conf.set("spark.sql.adaptive.enabled", "true")
spark.conf.set("spark.sql.adaptive.skewJoin.enabled", "true")

---

👉 File Optimization

File size and format matter!

🔹 **Small File Problem**
Many small files = Slow performance

Why?
- High metadata overhead
- More tasks to schedule
- Inefficient I/O

Solution: Compact files

OPTIMIZE table_name

🔹 **Optimal File Size**
Target: 128MB - 1GB per file

Too small (< 10MB): Overhead issues
Too large (> 2GB): Memory issues

🔹 **File Format**

CSV:
❌ Slow to read
❌ No schema
❌ No compression

Parquet:
✅ Columnar format
✅ Compressed
✅ Fast reads
✅ Schema included

Delta:
✅ All Parquet benefits
✅ ACID transactions
✅ Time travel
✅ Schema enforcement

Always use Parquet or Delta!

---

👉 Query Optimization

Write efficient queries

🔹 **1. Filter Early**

❌ Bad:
df.select("*").filter("year = 2024")

✅ Good:
df.filter("year = 2024").select("needed_columns")

Filter reduces data before other operations!

🔹 **2. Select Only Needed Columns**

❌ Bad:
SELECT * FROM large_table

✅ Good:
SELECT id, name, amount FROM large_table

Reduces data transfer and memory usage!

🔹 **3. Avoid Unnecessary Shuffles**

❌ Bad:
df.repartition(100).filter("amount > 1000")

✅ Good:
df.filter("amount > 1000").repartition(10)

Filter first to reduce data before repartition!

🔹 **4. Use Appropriate Joins**

Small table + Large table → Broadcast join
Large table + Large table → Sort-merge join

🔹 **5. Optimize Aggregations**

❌ Bad:
df.groupBy("key").agg(count("*"), sum("amount"), avg("amount"))

✅ Good (if possible):
Use approximate aggregations for large datasets

---

👉 Adaptive Query Execution (AQE)

AQE = Spark optimizes queries at runtime

🔹 **What is AQE?**
Spark adjusts execution plan based on runtime statistics

Features:
✔ Dynamically coalesce partitions
✔ Dynamically switch join strategies
✔ Dynamically optimize skew joins

🔹 **Enable AQE**

spark.conf.set("spark.sql.adaptive.enabled", "true")
spark.conf.set("spark.sql.adaptive.coalescePartitions.enabled", "true")
spark.conf.set("spark.sql.adaptive.skewJoin.enabled", "true")

🔹 **Benefits**
✔ Automatic optimization
✔ Handles skew
✔ Better performance
✔ No code changes needed

---

👉 Cluster Optimization

Right-size your cluster

🔹 **Cluster Configuration**

**Driver:**
- Coordinates work
- Collects results
- Needs enough memory for results

**Workers:**
- Execute tasks
- Process data
- Need enough cores and memory

🔹 **Sizing Guidelines**

Small data (< 1GB):
- 1-2 workers
- 4-8 cores each

Medium data (1-100GB):
- 2-10 workers
- 8-16 cores each

Large data (> 100GB):
- 10+ workers
- 16-32 cores each

🔹 **Auto-scaling**
Automatically add/remove workers based on workload

Benefits:
✔ Cost savings
✔ Better resource utilization
✔ Handle variable workloads

---

👉 Monitoring Performance

Use Spark UI to identify bottlenecks

🔹 **Key Metrics**

**1. Stage Duration**
Which stage takes longest?

**2. Task Duration**
Are tasks evenly distributed?

**3. Shuffle Read/Write**
How much data is shuffled?

**4. GC Time**
Is garbage collection slowing things down?

**5. Spill**
Is data spilling to disk?

🔹 **Common Issues**

**Long-running tasks:**
→ Data skew or large partitions

**High shuffle:**
→ Unnecessary joins or groupBy

**High GC time:**
→ Memory pressure, increase executor memory

**Spill to disk:**
→ Not enough memory, increase executor memory

---

👉 Real-World Example

Scenario: Slow sales report query

**Original Query (30 minutes):**
SELECT * FROM sales
WHERE year = 2024
GROUP BY customer_id

**Optimizations Applied:**

1️⃣ Partition by year
df.write.partitionBy("year").parquet("/sales")

2️⃣ Select only needed columns
SELECT customer_id, amount FROM sales

3️⃣ Filter early
WHERE year = 2024

4️⃣ Z-Order by customer_id
OPTIMIZE sales ZORDER BY (customer_id)

5️⃣ Cache if used multiple times
df.cache()

6️⃣ Enable AQE
spark.conf.set("spark.sql.adaptive.enabled", "true")

**Result: 2 minutes! (15x faster)**

---

👉 Best Practices Summary

1️⃣ **Partition data** by frequently filtered columns
2️⃣ **Use Delta Lake** for ACID and optimization features
3️⃣ **Z-Order** on high-cardinality filter columns
4️⃣ **Cache** frequently accessed data
5️⃣ **Broadcast** small lookup tables
6️⃣ **Compact** small files regularly
7️⃣ **Filter early** in queries
8️⃣ **Select only needed columns**
9️⃣ **Enable AQE** for automatic optimization
🔟 **Monitor Spark UI** to identify bottlenecks

---

🎯 Interview Line:
"Performance optimization in Databricks involves multiple strategies: partitioning data for faster queries, Z-ordering for better data locality, caching for repeated access, broadcast joins for small tables, handling data skew, compacting small files, and writing efficient queries. Key techniques include filtering early, selecting only needed columns, using appropriate file formats like Delta, and enabling Adaptive Query Execution. Monitoring through Spark UI helps identify bottlenecks like shuffles, skew, and memory issues. These optimizations can improve performance by 10-100x and reduce costs by 50-80%."
`,

    types: `
📊 Partitioning:
- Divide data by column
- Faster queries
- Parallel processing
- Lower costs

🔍 Z-Ordering:
- Cluster related data
- Faster filtering
- Better compression
- Reduced scanning

💾 Caching:
- Store in memory
- Avoid recomputation
- Faster repeated access
- Limited by RAM

📡 Broadcast Join:
- Send small table to all nodes
- No shuffle
- Much faster
- For small tables only

⚖️ Data Skew:
- Uneven distribution
- Some partitions overloaded
- Solutions: Salting, AQE
- Monitor task durations

📁 File Optimization:
- Compact small files
- Optimal size: 128MB-1GB
- Use Parquet/Delta
- Avoid CSV

🔧 Query Optimization:
- Filter early
- Select needed columns
- Avoid SELECT *
- Appropriate joins

⚡ AQE:
- Adaptive Query Execution
- Runtime optimization
- Handles skew automatically
- Enable in Spark config
`,

    qa: [
      {
        q: "What is Performance Optimization?",
        hint: "Think faster and efficient",
        options: ["Deleting data", "Making data processing faster and more efficient", "Adding more data", "Changing data format"],
        answer: "Making data processing faster and more efficient",
        explanation: `Performance Optimization:\n✔ Faster queries\n✔ Lower costs\n✔ Better resource usage\n✔ Improved user experience\n\nLike tuning a car engine!`,
        memory: "Optimization = Faster + Efficient ⚡"
      },
      {
        q: "What is Partitioning?",
        hint: "Think dividing data",
        options: ["Deleting data", "Dividing data into smaller chunks based on column values", "Combining data", "Encrypting data"],
        answer: "Dividing data into smaller chunks based on column values",
        explanation: `Partitioning:\n✔ Organize data into folders\n✔ Scan only needed partitions\n✔ Faster queries\n✔ Lower costs\n\nExample: Partition by year, month`,
        memory: "Partition = Divide data 📊"
      },
      {
        q: "What is Z-Ordering?",
        hint: "Think data clustering",
        options: ["Sorting alphabetically", "Clustering related data together for faster filtering", "Deleting data", "Compressing data"],
        answer: "Clustering related data together for faster filtering",
        explanation: `Z-Ordering:\n✔ Co-locates similar data\n✔ Faster point lookups\n✔ Reduced scanning\n✔ Better compression\n\nUse: OPTIMIZE table ZORDER BY (column)`,
        memory: "Z-Order = Cluster data 🔍"
      },
      {
        q: "What is Caching?",
        hint: "Think memory",
        options: ["Deleting data", "Storing frequently used data in memory", "Compressing data", "Encrypting data"],
        answer: "Storing frequently used data in memory",
        explanation: `Caching:\n✔ Store in RAM\n✔ Avoid recomputation\n✔ Faster repeated access\n✔ Use for frequently accessed data\n\nCode: df.cache()`,
        memory: "Cache = Store in memory 💾"
      },
      {
        q: "What is Broadcast Join?",
        hint: "Think small table",
        options: ["Regular join", "Sending small table to all executors to avoid shuffle", "Deleting data", "Sorting data"],
        answer: "Sending small table to all executors to avoid shuffle",
        explanation: `Broadcast Join:\n✔ Send small table to all nodes\n✔ No shuffle needed\n✔ Much faster\n✔ Use for small lookup tables\n\nCode: broadcast(small_df)`,
        memory: "Broadcast = Send small table 📡"
      },
      {
        q: "What is Data Skew?",
        hint: "Think uneven",
        options: ["Even distribution", "Uneven data distribution across partitions", "Sorted data", "Compressed data"],
        answer: "Uneven data distribution across partitions",
        explanation: `Data Skew:\n❌ Some partitions have much more data\n❌ Slows down processing\n\nSolutions:\n✔ Salting\n✔ Repartitioning\n✔ AQE`,
        memory: "Skew = Uneven distribution ⚖️"
      },
      {
        q: "Why compact small files?",
        hint: "Think performance",
        options: ["Save space", "Improve read performance and reduce overhead", "Delete data", "Encrypt data"],
        answer: "Improve read performance and reduce overhead",
        explanation: `Small File Problem:\n❌ High metadata overhead\n❌ Slow reads\n❌ More tasks\n\nSolution: OPTIMIZE table\n\nTarget: 128MB-1GB per file`,
        memory: "Compact = Combine small files 📁"
      },
      {
        q: "What is AQE?",
        hint: "Think adaptive",
        options: ["Database", "Adaptive Query Execution - runtime optimization", "File format", "Security feature"],
        answer: "Adaptive Query Execution - runtime optimization",
        explanation: `AQE:\n✔ Optimizes at runtime\n✔ Handles skew automatically\n✔ Adjusts join strategies\n✔ Coalesces partitions\n\nEnable: spark.sql.adaptive.enabled=true`,
        memory: "AQE = Auto-optimize ⚡"
      },
      {
        q: "Best practice for queries?",
        hint: "Think efficiency",
        options: ["SELECT *", "Filter early and select only needed columns", "No filters", "Complex joins"],
        answer: "Filter early and select only needed columns",
        explanation: `Query Optimization:\n✔ Filter early (reduce data)\n✔ Select needed columns only\n✔ Avoid SELECT *\n✔ Use appropriate joins\n\nReduces data transfer and processing!`,
        memory: "Query = Filter early + Select needed 🔧"
      }
    ],

    coding: {
      title: "Performance Optimization Example",
      scenario: "Optimize a slow query using partitioning and filtering",
      thinkingApproach: [
        "Step 1: Identify slow operations",
        "Step 2: Apply partitioning",
        "Step 3: Filter early",
        "Step 4: Select needed columns",
        "Step 5: Cache if reused",
        "Step 6: Measure improvement"
      ],
      question: "Optimize sales query to run faster",
      input: `data = [{'year': 2024, 'month': 1, 'sales': 100}, {'year': 2024, 'month': 2, 'sales': 200}, {'year': 2023, 'month': 12, 'sales': 150}]`,
      expectedOutput: `Filtered: 2 rows (only 2024)\nOptimized query completed`,
      solution: `# Simulating Performance Optimization
data = [
  {'year': 2024, 'month': 1, 'sales': 100},
  {'year': 2024, 'month': 2, 'sales': 200},
  {'year': 2023, 'month': 12, 'sales': 150}
]

# Optimization 1: Filter early (partition pruning)
filtered = [row for row in data if row['year'] == 2024]
print(f"Filtered: {len(filtered)} rows (only 2024)")

# Optimization 2: Select only needed columns
result = [{'month': row['month'], 'sales': row['sales']} for row in filtered]

print("Optimized query completed")`,
      note: "In Databricks: Use partitionBy(), filter(), select(), cache(), and OPTIMIZE for real optimization"
    },

    quiz: [
      { q: "Optimization?", options: ["Faster", "Slower", "Same", "None"], answer: 0 },
      { q: "Partition?", options: ["Divide data", "Combine", "Delete", "None"], answer: 0 },
      { q: "Z-Order?", options: ["Cluster data", "Delete", "Encrypt", "None"], answer: 0 },
      { q: "Cache?", options: ["Memory", "Disk", "Delete", "None"], answer: 0 },
      { q: "Broadcast?", options: ["Small table", "Large table", "All tables", "None"], answer: 0 },
      { q: "Skew?", options: ["Uneven", "Even", "Sorted", "None"], answer: 0 },
      { q: "Compact?", options: ["Combine files", "Delete files", "Encrypt", "None"], answer: 0 },
      { q: "AQE?", options: ["Auto-optimize", "Manual", "Delete", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "Performance optimization in Databricks involves multiple strategies to make data processing faster and more cost-effective.

Key techniques include:

1. Partitioning: Dividing data by frequently filtered columns (date, region) to enable partition pruning and parallel processing

2. Z-Ordering: Clustering related data together for faster point lookups and reduced data scanning

3. Caching: Storing frequently accessed data in memory to avoid recomputation

4. Broadcast Joins: Sending small lookup tables to all executors to eliminate shuffle overhead

5. Data Skew Handling: Using salting, repartitioning, or AQE to balance data distribution

6. File Optimization: Compacting small files into optimal sizes (128MB-1GB) using OPTIMIZE command

7. Query Optimization: Filtering early, selecting only needed columns, avoiding SELECT *, and using appropriate join strategies

8. Adaptive Query Execution (AQE): Enabling runtime optimization for automatic handling of skew and dynamic join strategy selection

9. Cluster Optimization: Right-sizing clusters and using auto-scaling for variable workloads

Monitoring through Spark UI helps identify bottlenecks like excessive shuffles, data skew, memory pressure, and long-running tasks. These optimizations can improve performance by 10-100x and reduce costs by 50-80% in production systems."
`,

    memory: `
👉 Optimization = Faster + Efficient ⚡
👉 Partition = Divide data 📊
👉 Z-Order = Cluster data 🔍
👉 Cache = Store in memory 💾
👉 Broadcast = Send small table 📡
👉 Skew = Uneven distribution ⚖️
👉 Compact = Combine files 📁
👉 AQE = Auto-optimize ⚡
👉 Filter early = Reduce data 🔧
👉 Monitor = Spark UI 📊
`,

    revision: "Performance Optimization = Partitioning + Z-Ordering + Caching + Broadcast Joins + File Compaction + Query Optimization + AQE for faster and cost-effective data processing"
  },

  'monitoring-debugging': {
    topic: "Monitoring & Debugging",
    title: "Monitoring & Debugging (Track, Identify, and Fix Issues in Data Pipelines)",
    subtitle: "Use Spark UI, logs, and debugging techniques to ensure reliable pipelines",
    icon: "🔍",
    difficulty: "Advanced",
    duration: "~70 min",
    ready: true,

    aatma: {
      Architecture: {
        description: "Monitoring and Debugging help you track what is happening inside your Spark/Databricks jobs and fix issues when something goes wrong.",
        flow: "Job Execution → Monitoring Tools → Identify Issue → Debug → Fix → Optimize",
        key_components: [
          "Spark UI",
          "Job Logs",
          "Execution Plan (DAG)",
          "Error Messages",
          "Performance Metrics"
        ]
      },

      Application: {
        description: "Used to identify failures, understand execution flow, and improve performance of data pipelines.",
        use_cases: [
          "Fixing failed jobs",
          "Improving slow pipelines",
          "Understanding execution flow",
          "Detecting bottlenecks"
        ],
        real_world_example: "If a data pipeline fails at 2 AM, engineers use logs and Spark UI to find the error and fix it quickly."
      },

      Tools_and_Techniques: {
        tools: [
          "Spark UI",
          "Databricks Job UI",
          "Logs (Driver & Executor)",
          "DAG Visualization"
        ],
        subtopics: {
          "Spark UI": "A web interface that shows job execution details like stages, tasks, memory usage, and execution time. Helps identify slow operations.",
          "Job Logs": "Detailed logs generated during execution. Includes error messages, execution steps, and debugging information.",
          "DAG Visualization": "Graphical representation of all transformations and execution flow. Helps understand how Spark processes data step-by-step.",
          "Debugging Failed Jobs": "Process of identifying the root cause of failure by checking logs, error messages, and execution stages.",
          "Performance Analysis": "Analyzing execution time, data shuffling, and resource usage to optimize performance."
        }
      },

      Monitoring_and_Optimization: {
        description: "Ensuring jobs run successfully and efficiently",
        methods: [
          "Check Spark UI for slow stages",
          "Read logs carefully for errors",
          "Identify bottlenecks in DAG",
          "Reduce data shuffling",
          "Optimize queries and transformations"
        ]
      },

      Advanced_and_RealWorld: {
        description: "In real production systems, monitoring and debugging are critical to maintain reliable pipelines",
        advanced_concepts: [
          "Automated alerting for failures",
          "Log aggregation systems",
          "Performance tuning using metrics",
          "Root cause analysis (RCA)",
          "Observability tools integration"
        ],
        real_world_flow: "Job Run → Failure Detected → Check Logs → Analyze DAG → Identify Issue → Fix Code → Re-run Job → Optimize"
      }
    },

    objective: "Master monitoring and debugging techniques to identify issues, understand execution flow, and maintain reliable data pipelines",

    comic: `
Imagine you're a detective solving a mystery 🕵️

Crime Scene (Failed Job):
- Pipeline crashed at 2 AM 💥
- Dashboard shows no data 📊
- Boss is angry 😠
- You need to find the culprit! 🔍

😰 Problem:
- What went wrong?
- Where did it fail?
- Why did it fail?
- How to fix it?

🤔 Investigation Tools:

1️⃣ Crime Scene Photos (Spark UI)
- See what happened step by step
- Find the exact moment of failure
- Identify suspicious activities

2️⃣ Witness Statements (Logs)
- Read detailed error messages
- Understand what each component did
- Find clues in execution history

3️⃣ Timeline (DAG Visualization)
- See the sequence of events
- Understand the flow
- Identify bottlenecks

4️⃣ Evidence Analysis (Metrics)
- Memory usage
- Execution time
- Data shuffling

💡 Aha Moment:
Found it! Partition had too much data (data skew) 🎯

✨ Solution:
- Fix the skew
- Re-run the job
- Success! ✅

👉 Monitoring = Watching what happens
👉 Debugging = Finding and fixing problems
👉 Like being a detective for data pipelines! 🔍
`,

    deepDive: `
👉 What is Monitoring & Debugging?

Monitoring = Tracking job execution and performance
Debugging = Finding and fixing issues when things go wrong

Think of it as:
- Monitoring = Health checkup (preventive)
- Debugging = Doctor visit (when sick)

---

👉 Why Monitoring & Debugging Matter?

Without monitoring:
❌ Don't know when jobs fail
❌ Can't identify performance issues
❌ No visibility into execution
❌ Difficult to optimize

With monitoring:
✅ Immediate failure detection
✅ Performance insights
✅ Proactive optimization
✅ Quick issue resolution

Real-world impact:
- Detect failures in minutes, not hours
- Reduce debugging time from days to hours
- Prevent data quality issues
- Maintain SLAs

---

👉 Spark UI (Primary Monitoring Tool)

Spark UI = Web interface showing job execution details

🔹 **Accessing Spark UI**

In Databricks:
1. Go to Cluster page
2. Click on running cluster
3. Click "Spark UI" tab

Or from notebook:
- Click on job execution link
- Opens Spark UI for that job

🔹 **Spark UI Tabs**

**1. Jobs Tab**
Shows all Spark jobs:
- Job ID
- Description
- Duration
- Stages
- Tasks

**2. Stages Tab**
Details of each stage:
- Stage ID
- Duration
- Tasks (success/failed)
- Input/Output size
- Shuffle read/write

**3. Storage Tab**
Cached DataFrames:
- RDD name
- Storage level
- Size in memory
- Partitions

**4. Environment Tab**
Configuration:
- Spark properties
- System properties
- Classpath

**5. Executors Tab**
Executor metrics:
- Executor ID
- Memory usage
- Task time
- Shuffle read/write
- Failed tasks

**6. SQL Tab**
SQL query execution:
- Query plan
- Duration
- Scanned data

---

👉 Understanding DAG Visualization

DAG = Directed Acyclic Graph (execution plan)

🔹 **What is DAG?**
Visual representation of:
- All transformations
- Dependencies between operations
- Execution flow

🔹 **Reading DAG**

Example DAG:
Read CSV → Filter → Select → GroupBy → Write

Each box = Stage
Arrows = Dependencies

🔹 **Identifying Issues in DAG**

**Wide transformations (shuffle):**
- groupBy, join, orderBy
- Shown with shuffle read/write
- Can be slow

**Skipped stages:**
- Already computed (cached)
- Shown in green

**Failed stages:**
- Shown in red
- Click for error details

---

👉 Job Logs

Logs = Detailed execution records

🔹 **Types of Logs**

**Driver Logs:**
- Main program execution
- Job submission
- High-level errors

**Executor Logs:**
- Task execution
- Data processing
- Detailed errors

**Event Logs:**
- Spark events
- Stage completion
- Task metrics

🔹 **Accessing Logs**

In Databricks:
1. Go to job run page
2. Click on cluster logs
3. View driver/executor logs

Or use:
dbutils.fs.ls("/databricks/driver/logs")

🔹 **Reading Logs**

Look for:
- ERROR: Critical failures
- WARN: Potential issues
- INFO: Execution details

Example error:
ERROR: java.lang.OutOfMemoryError: Java heap space
→ Need more executor memory!

---

👉 Common Errors & Solutions

🔹 **1. OutOfMemoryError**

Error:
java.lang.OutOfMemoryError: Java heap space

Causes:
- Too much data in memory
- Large broadcast join
- Insufficient executor memory

Solutions:
✔ Increase executor memory
✔ Reduce data size (filter early)
✔ Avoid collecting large datasets
✔ Use disk persistence instead of memory

spark.conf.set("spark.executor.memory", "8g")

🔹 **2. File Not Found**

Error:
FileNotFoundException: s3://bucket/path/file.csv

Causes:
- Wrong file path
- File deleted
- Permission issues

Solutions:
✔ Verify file path
✔ Check file exists
✔ Verify IAM permissions
✔ Check bucket name

🔹 **3. Data Skew**

Symptom:
- One task takes much longer
- Other tasks finish quickly
- Uneven task durations

Solutions:
✔ Salting (add random key)
✔ Repartition data
✔ Use broadcast join if possible
✔ Enable AQE

🔹 **4. Shuffle Errors**

Error:
FetchFailedException: Failed to fetch shuffle block

Causes:
- Network issues
- Executor failure
- Large shuffle data

Solutions:
✔ Increase shuffle partitions
✔ Reduce shuffle data size
✔ Enable external shuffle service
✔ Increase network timeout

spark.conf.set("spark.sql.shuffle.partitions", "200")

🔹 **5. Schema Mismatch**

Error:
AnalysisException: cannot resolve column

Causes:
- Column doesn't exist
- Wrong column name
- Schema changed

Solutions:
✔ Verify column names
✔ Check schema
✔ Use schema enforcement
✔ Handle schema evolution

🔹 **6. Timeout Errors**

Error:
TimeoutException: Futures timed out

Causes:
- Long-running operations
- Insufficient resources
- Network delays

Solutions:
✔ Increase timeout settings
✔ Optimize query
✔ Add more resources
✔ Check network connectivity

---

👉 Performance Debugging

Identify and fix slow jobs

🔹 **Step 1: Identify Slow Stage**

In Spark UI:
1. Go to Stages tab
2. Sort by duration
3. Find longest stage

🔹 **Step 2: Analyze Tasks**

Click on slow stage:
- Check task durations
- Look for skew (one task much longer)
- Check shuffle read/write

🔹 **Step 3: Check Metrics**

Key metrics:
- Input size: How much data read?
- Shuffle read/write: How much shuffled?
- GC time: Garbage collection overhead
- Spill: Data spilled to disk?

🔹 **Step 4: Identify Bottleneck**

Common bottlenecks:
- Large shuffle (groupBy, join)
- Data skew (uneven partitions)
- Memory pressure (GC time high)
- Small files (many tasks)

🔹 **Step 5: Apply Fix**

Based on bottleneck:
- Shuffle → Reduce shuffles, broadcast join
- Skew → Salting, repartition
- Memory → Increase executor memory
- Small files → Compact files

---

👉 Debugging Failed Jobs

Systematic approach to fix failures

🔹 **Step 1: Check Error Message**

In Databricks:
- Job run page shows error
- Click for full stack trace

Read error carefully:
- What type of error?
- Which line of code?
- What was the operation?

🔹 **Step 2: Check Logs**

Driver logs:
- High-level errors
- Job submission issues

Executor logs:
- Task failures
- Data processing errors

🔹 **Step 3: Reproduce Locally**

Test with small data:
- Use .limit(100) for testing
- Run in notebook interactively
- Add print statements

Example:
df = spark.read.csv("path")
print(f"Rows: {df.count()}")
df.show(5)

🔹 **Step 4: Check Data Quality**

Common data issues:
- Null values
- Wrong data types
- Malformed records
- Encoding issues

Validate:
df.printSchema()
df.describe().show()
df.filter(col("column").isNull()).count()

🔹 **Step 5: Fix and Test**

Apply fix:
- Handle nulls: fillna(), dropna()
- Fix types: cast()
- Filter bad data: filter()

Test thoroughly:
- Run with small data
- Validate output
- Check edge cases

---

👉 Monitoring Best Practices

🔹 **1. Set Up Alerts**

Alert on:
- Job failures
- Long execution times
- High error rates
- Resource exhaustion

Tools:
- Databricks Jobs (email alerts)
- CloudWatch (AWS)
- PagerDuty
- Slack webhooks

🔹 **2. Track Key Metrics**

Monitor:
- Job success rate
- Execution time
- Data processed
- Resource usage
- Error frequency

🔹 **3. Regular Health Checks**

Daily:
- Check job runs
- Review failures
- Monitor performance

Weekly:
- Analyze trends
- Optimize slow jobs
- Review resource usage

🔹 **4. Document Issues**

Maintain runbook:
- Common errors
- Solutions
- Contact information
- Escalation procedures

🔹 **5. Proactive Monitoring**

Don't wait for failures:
- Monitor trends
- Identify degradation
- Optimize proactively
- Capacity planning

---

👉 Advanced Debugging Techniques

🔹 **1. Explain Plan**

Understand query execution:

df.explain(True)

Shows:
- Parsed logical plan
- Analyzed logical plan
- Optimized logical plan
- Physical plan

🔹 **2. Sampling for Testing**

Test with subset:

df_sample = df.sample(0.01)  # 1% sample
df_sample.write.parquet("test_output")

Faster iteration during debugging!

🔹 **3. Checkpoint for Long Pipelines**

Break long pipelines:

df1 = spark.read.parquet("input")
df2 = df1.filter("condition")
df2.write.parquet("checkpoint1")  # Save intermediate

df3 = spark.read.parquet("checkpoint1")
df3.groupBy("key").count().write.parquet("output")

Easier to debug each step!

🔹 **4. Add Logging**

Custom logging:

import logging
logger = logging.getLogger(__name__)

logger.info(f"Processing {df.count()} rows")
logger.error(f"Failed at step X")

🔹 **5. Use Try-Except**

Handle errors gracefully:

try:
    df = spark.read.csv("path")
    df.write.parquet("output")
except Exception as e:
    logger.error(f"Error: {str(e)}")
    # Send alert
    # Save to dead letter queue

---

👉 Real-World Debugging Example

Scenario: Daily ETL job fails at 2 AM

**Step 1: Check Error**
Error: OutOfMemoryError in executor

**Step 2: Check Spark UI**
- Stage 3 takes 90% of time
- High shuffle read (500GB)
- One task takes 2 hours, others 5 minutes

**Step 3: Identify Issue**
Data skew in groupBy operation!

**Step 4: Check Code**
df.groupBy("customer_id").agg(sum("amount"))

One customer has 80% of data!

**Step 5: Apply Fix**
# Add salting
from pyspark.sql.functions import rand, concat, lit

df_salted = df.withColumn(
    "salted_key", 
    concat(col("customer_id"), lit("_"), (rand() * 10).cast("int"))
)

df_salted.groupBy("salted_key").agg(sum("amount"))

**Step 6: Test and Deploy**
- Test with sample data
- Verify results
- Deploy to production
- Monitor next run

**Result: Job completes in 15 minutes! ✅**

---

👉 Monitoring Tools Integration

🔹 **CloudWatch (AWS)**
- Collect metrics
- Set alarms
- View dashboards

🔹 **Datadog**
- APM monitoring
- Log aggregation
- Custom dashboards

🔹 **Grafana**
- Visualization
- Alerting
- Custom metrics

🔹 **Prometheus**
- Metrics collection
- Time-series data
- Alerting rules

---

👉 Best Practices Summary

1️⃣ **Always check Spark UI** for performance insights
2️⃣ **Read logs carefully** to understand errors
3️⃣ **Test with small data** before full runs
4️⃣ **Set up alerts** for failures
5️⃣ **Monitor key metrics** regularly
6️⃣ **Document common issues** and solutions
7️⃣ **Use explain()** to understand query plans
8️⃣ **Add logging** for better visibility
9️⃣ **Handle errors gracefully** with try-except
🔟 **Learn from failures** and optimize

---

🎯 Interview Line:
"Monitoring and debugging in Databricks involves using Spark UI to analyze job execution, stages, and tasks, reading driver and executor logs to identify errors, understanding DAG visualization to see execution flow, and analyzing performance metrics like shuffle size, GC time, and task durations. Common issues include OutOfMemoryError (increase executor memory), data skew (use salting or AQE), shuffle errors (increase partitions), and schema mismatches (validate schemas). Best practices include setting up alerts, tracking key metrics, testing with samples, using explain() for query plans, and maintaining runbooks for common issues. Effective monitoring and debugging are critical for maintaining reliable production pipelines."
`,

    types: `
🔍 Spark UI:
- Job execution details
- Stage and task metrics
- Performance analysis
- DAG visualization

📋 Logs:
- Driver logs (high-level)
- Executor logs (detailed)
- Error messages
- Execution history

📊 DAG:
- Execution plan
- Transformation flow
- Dependencies
- Bottleneck identification

❌ Common Errors:
- OutOfMemoryError
- FileNotFoundException
- Data skew
- Shuffle failures
- Schema mismatches

⚡ Performance Metrics:
- Execution time
- Shuffle read/write
- GC time
- Memory usage
- Task durations

🔧 Debugging Steps:
1. Check error message
2. Review logs
3. Analyze Spark UI
4. Reproduce with sample
5. Fix and test

🚨 Monitoring:
- Set up alerts
- Track metrics
- Regular health checks
- Proactive optimization
`,

    qa: [
      {
        q: "What is Spark UI?",
        hint: "Think monitoring tool",
        options: ["Database", "Web interface showing job execution details", "Programming language", "Storage system"],
        answer: "Web interface showing job execution details",
        explanation: `Spark UI:\n✔ Shows jobs, stages, tasks\n✔ Performance metrics\n✔ DAG visualization\n✔ Memory usage\n\nPrimary tool for monitoring!`,
        memory: "Spark UI = Monitoring dashboard 🔍"
      },
      {
        q: "What is DAG?",
        hint: "Think execution plan",
        options: ["Database", "Directed Acyclic Graph - execution plan visualization", "File format", "Security feature"],
        answer: "Directed Acyclic Graph - execution plan visualization",
        explanation: `DAG:\n✔ Visual execution plan\n✔ Shows transformations\n✔ Dependencies between operations\n✔ Helps identify bottlenecks\n\nLike a flowchart of your job!`,
        memory: "DAG = Execution flowchart 📊"
      },
      {
        q: "What are Driver and Executor logs?",
        hint: "Think log types",
        options: ["Same thing", "Driver = high-level, Executor = detailed task logs", "Only errors", "Only warnings"],
        answer: "Driver = high-level, Executor = detailed task logs",
        explanation: `Driver Logs:\n✔ Main program execution\n✔ Job submission\n✔ High-level errors\n\nExecutor Logs:\n✔ Task execution\n✔ Data processing\n✔ Detailed errors`,
        memory: "Driver = High-level, Executor = Detailed 📋"
      },
      {
        q: "What causes OutOfMemoryError?",
        hint: "Think memory",
        options: ["Too much disk space", "Insufficient executor memory or large data in memory", "Network issues", "Wrong file path"],
        answer: "Insufficient executor memory or large data in memory",
        explanation: `OutOfMemoryError:\n❌ Too much data in memory\n❌ Large broadcast join\n❌ Insufficient executor memory\n\nSolution:\n✔ Increase executor memory\n✔ Filter data early\n✔ Avoid collecting large datasets`,
        memory: "OOM = Need more memory 💾"
      },
      {
        q: "How to identify data skew?",
        hint: "Think task durations",
        options: ["All tasks same time", "One task takes much longer than others", "All tasks fail", "No tasks run"],
        answer: "One task takes much longer than others",
        explanation: `Data Skew Signs:\n❌ One task takes hours\n✔ Other tasks finish in minutes\n❌ Uneven task durations\n\nCheck Spark UI → Stages → Task durations`,
        memory: "Skew = One slow task ⚖️"
      },
      {
        q: "What is explain() used for?",
        hint: "Think query plan",
        options: ["Delete data", "Show query execution plan", "Run query", "Cache data"],
        answer: "Show query execution plan",
        explanation: `explain():\n✔ Shows logical plan\n✔ Shows physical plan\n✔ Helps understand execution\n✔ Identify optimizations\n\nCode: df.explain(True)`,
        memory: "explain() = Show plan 📋"
      },
      {
        q: "Why test with sample data?",
        hint: "Think debugging",
        options: ["Slower", "Faster iteration and easier debugging", "More accurate", "Required by Spark"],
        answer: "Faster iteration and easier debugging",
        explanation: `Sample Data Benefits:\n✔ Faster execution\n✔ Quick testing\n✔ Easier debugging\n✔ Iterate rapidly\n\nCode: df.sample(0.01)  # 1% sample`,
        memory: "Sample = Fast testing 🔬"
      },
      {
        q: "What should you monitor in production?",
        hint: "Think metrics",
        options: ["Nothing", "Job success rate, execution time, errors, resource usage", "Only failures", "Only costs"],
        answer: "Job success rate, execution time, errors, resource usage",
        explanation: `Monitor:\n✔ Job success rate\n✔ Execution time\n✔ Error frequency\n✔ Resource usage\n✔ Data processed\n\nProactive monitoring prevents issues!`,
        memory: "Monitor = Track everything 📊"
      },
      {
        q: "Best practice for debugging?",
        hint: "Think systematic",
        options: ["Random guessing", "Check error → Review logs → Analyze UI → Fix → Test", "Delete everything", "Restart cluster"],
        answer: "Check error → Review logs → Analyze UI → Fix → Test",
        explanation: `Debugging Steps:\n1️⃣ Check error message\n2️⃣ Review logs\n3️⃣ Analyze Spark UI\n4️⃣ Reproduce with sample\n5️⃣ Fix and test\n\nSystematic approach!`,
        memory: "Debug = Systematic approach 🔧"
      }
    ],

    coding: {
      title: "Debugging Example",
      scenario: "Debug a failed job by checking logs and fixing the issue",
      thinkingApproach: [
        "Step 1: Identify error message",
        "Step 2: Check data quality",
        "Step 3: Add validation",
        "Step 4: Handle errors",
        "Step 5: Test fix",
        "Step 6: Monitor results"
      ],
      question: "Debug and fix a job that fails due to null values",
      input: `data = [{'id': 1, 'amount': 100}, {'id': 2, 'amount': None}, {'id': 3, 'amount': 200}]`,
      expectedOutput: `Error detected: Null values found\nFixed: Null values handled\nProcessed: 3 rows`,
      solution: `# Simulating Debugging Process
data = [
  {'id': 1, 'amount': 100},
  {'id': 2, 'amount': None},  # This causes error
  {'id': 3, 'amount': 200}
]

# Step 1: Detect issue
null_count = sum(1 for row in data if row['amount'] is None)
if null_count > 0:
    print(f"Error detected: Null values found")

# Step 2: Fix - Handle nulls
fixed_data = []
for row in data:
    if row['amount'] is None:
        row['amount'] = 0  # Fill with 0
    fixed_data.append(row)

print("Fixed: Null values handled")
print(f"Processed: {len(fixed_data)} rows")`,
      note: "In Databricks: Use df.fillna(), df.dropna(), and proper error handling with try-except"
    },

    quiz: [
      { q: "Spark UI?", options: ["Monitoring tool", "Database", "Language", "None"], answer: 0 },
      { q: "DAG?", options: ["Execution plan", "Database", "File format", "None"], answer: 0 },
      { q: "Driver logs?", options: ["High-level", "Detailed", "None", "Both"], answer: 0 },
      { q: "OOM error?", options: ["Memory issue", "Disk issue", "Network", "None"], answer: 0 },
      { q: "Data skew?", options: ["One slow task", "All slow", "All fast", "None"], answer: 0 },
      { q: "explain()?", options: ["Show plan", "Run query", "Delete", "None"], answer: 0 },
      { q: "Sample data?", options: ["Fast testing", "Slow", "Required", "None"], answer: 0 },
      { q: "Monitor?", options: ["Track metrics", "Ignore", "Delete", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "Monitoring and debugging in Databricks are critical for maintaining reliable production pipelines. Key tools and techniques include:

Spark UI: Primary monitoring tool showing job execution details, stages, tasks, DAG visualization, and performance metrics like shuffle size, GC time, and memory usage.

Logs: Driver logs provide high-level execution information and job submission details, while executor logs contain detailed task execution and error messages.

DAG Visualization: Graphical representation of the execution plan showing transformations, dependencies, and bottlenecks.

Common Issues and Solutions:
- OutOfMemoryError: Increase executor memory, filter data early, avoid collecting large datasets
- Data Skew: Use salting, repartitioning, or enable AQE for automatic handling
- Shuffle Errors: Increase shuffle partitions, reduce shuffle data size
- Schema Mismatches: Validate schemas, use schema enforcement
- File Not Found: Verify paths, check permissions

Debugging Process:
1. Check error message and stack trace
2. Review driver and executor logs
3. Analyze Spark UI for bottlenecks
4. Reproduce with sample data
5. Apply fix and test thoroughly

Best Practices:
- Set up alerts for failures and performance degradation
- Monitor key metrics (success rate, execution time, resource usage)
- Use explain() to understand query plans
- Test with samples for faster iteration
- Maintain runbooks for common issues
- Add logging for better visibility
- Handle errors gracefully with try-except

Effective monitoring and debugging reduce downtime, improve performance, and ensure data quality in production systems."
`,

    memory: `
👉 Spark UI = Monitoring dashboard 🔍
👉 DAG = Execution flowchart 📊
👉 Driver = High-level logs 📋
👉 Executor = Detailed logs 📝
👉 OOM = Need more memory 💾
👉 Skew = One slow task ⚖️
👉 explain() = Show plan 📋
👉 Sample = Fast testing 🔬
👉 Monitor = Track metrics 📊
👉 Debug = Systematic approach 🔧
`,

    revision: "Monitoring & Debugging = Spark UI + Logs + DAG analysis + Error handling + Performance metrics for reliable pipelines"
  },

  'advanced-features': {
    topic: "Advanced Features (Databricks & Modern Data Engineering)",
    title: "Advanced Features (Databricks & Modern Data Engineering)",
    subtitle: "Automate pipelines, scale compute, and integrate AI capabilities",
    icon: "🚀",
    difficulty: "Advanced",
    duration: "~70 min",
    ready: true,

    aatma: {
      Architecture: {
        description: "Advanced features in Databricks help automate data pipelines, improve scalability, reduce manual effort, and integrate AI capabilities into data systems.",
        flow: "Data Source → Auto Ingestion → Managed Pipelines → Scalable Compute → Data Processing → AI/ML Integration",
        key_components: [
          "Auto Loader",
          "Delta Live Tables (DLT)",
          "Serverless Compute",
          "Data Mesh Architecture",
          "AI/ML Integration"
        ]
      },

      Application: {
        description: "Used to build modern, automated, and intelligent data platforms with minimal manual work.",
        use_cases: [
          "Automated data ingestion pipelines",
          "Managed ETL workflows",
          "Scalable compute without cluster management",
          "Decentralized data ownership",
          "AI-powered analytics and predictions"
        ],
        real_world_example: "A company automatically ingests data from cloud storage, processes it using DLT, and applies ML models to predict customer behavior."
      },

      Tools_and_Techniques: {
        tools: [
          "Databricks Auto Loader",
          "Delta Live Tables (DLT)",
          "Serverless Databricks",
          "MLflow",
          "AI/ML Libraries"
        ],
        subtopics: {
          "Auto Loader": "Automatically detects and loads new files into the system as they arrive, without manual intervention.",
          "Delta Live Tables (DLT)": "A managed pipeline system that allows you to define data transformations declaratively and ensures data quality automatically.",
          "Serverless Compute": "Runs workloads without managing clusters. Databricks automatically handles scaling and resource allocation.",
          "Data Mesh": "A decentralized architecture where different teams manage their own data as a product instead of a centralized team controlling everything.",
          "AI/ML Integration": "Combining data engineering with machine learning using tools like MLflow to build, train, and deploy models."
        }
      },

      Monitoring_and_Optimization: {
        description: "Ensuring advanced systems run efficiently and automatically",
        methods: [
          "Use Auto Loader for incremental ingestion",
          "Use DLT for pipeline reliability",
          "Leverage serverless for cost optimization",
          "Monitor ML models performance",
          "Ensure data quality checks in pipelines"
        ]
      },

      Advanced_and_RealWorld: {
        description: "These features are used in modern data platforms to build scalable, automated, and intelligent systems",
        advanced_concepts: [
          "Event-driven pipelines",
          "Data quality enforcement in DLT",
          "Fully managed pipelines",
          "Decentralized data ownership (Data Mesh)",
          "End-to-end AI pipelines"
        ],
        real_world_flow: "New Data → Auto Loader → DLT Pipeline → Processed Data → ML Model → Predictions → Dashboard"
      }
    },

    objective: "Master advanced Databricks features for building automated, scalable, and intelligent data platforms",

    comic: `
Imagine you're running a smart restaurant 🍽️

Old way (Manual):
- Wait for delivery trucks 🚚
- Manually unload ingredients 📦
- Manually check quality ✅
- Manually cook everything 👨‍🍳
- Manually serve customers 🍽️
- Hire more staff when busy 👥

😰 Problems:
- Exhausting manual work
- Slow and error-prone
- Can't scale quickly
- No automation
- High costs

🤔 Solution: Smart Automated Restaurant (Advanced Features)

✨ Automation:
1️⃣ Auto Loader = Automatic delivery detection 🚪
   - Detects when trucks arrive
   - Automatically unloads ingredients
   - No waiting or manual checking

2️⃣ Delta Live Tables = Automated cooking pipeline 🍳
   - Define recipes once
   - Automatic quality checks
   - Self-healing if something fails
   - Always fresh food

3️⃣ Serverless = Smart kitchen that scales 📈
   - More stoves appear when busy
   - Fewer stoves when quiet
   - Pay only for what you use
   - No manual management

4️⃣ Data Mesh = Multiple specialized kitchens 🏪
   - Pizza team owns pizza kitchen
   - Sushi team owns sushi kitchen
   - Each team manages their specialty
   - Decentralized but coordinated

5️⃣ AI/ML = Smart recommendations 🤖
   - Predicts what customers want
   - Suggests menu items
   - Optimizes inventory
   - Personalized experience

💡 Aha Moment:
Advanced Features = Automation + Intelligence + Scalability!

👉 Manual = Slow and expensive 🐌
👉 Automated = Fast and efficient ⚡
👉 Intelligent = Smart decisions 🧠

Result: Restaurant runs itself! 🚀
`,

    deepDive: `
👉 What are Advanced Features?

Advanced Features in Databricks are capabilities that:
✔ Automate repetitive tasks
✔ Scale without manual intervention
✔ Ensure data quality automatically
✔ Integrate AI/ML seamlessly
✔ Enable modern architectures

Think of it as:
- Moving from manual to autopilot
- From reactive to proactive
- From monolithic to distributed
- From data processing to intelligent systems

---

👉 Auto Loader (Incremental File Ingestion)

Auto Loader = Automatically detect and load new files

🔹 **What is Auto Loader?**
Continuously monitors cloud storage for new files and loads them automatically

Traditional approach:
❌ Manually check for new files
❌ Track which files are processed
❌ Handle duplicates manually
❌ Complex error handling

Auto Loader approach:
✅ Automatically detects new files
✅ Tracks processed files automatically
✅ Handles duplicates
✅ Fault tolerant
✅ Scalable

🔹 **How Auto Loader Works**

Flow: Cloud Storage → Auto Loader → Delta Table

# Basic Auto Loader
df = spark.readStream.format("cloudFiles") \\
  .option("cloudFiles.format", "json") \\
  .option("cloudFiles.schemaLocation", "/schema/location") \\
  .load("s3://bucket/incoming/")

df.writeStream \\
  .format("delta") \\
  .option("checkpointLocation", "/checkpoints/autoloader") \\
  .start("/delta/raw_data")

🔹 **Key Features**

**1. Schema Inference**
Automatically detects schema from files

.option("cloudFiles.schemaLocation", "/schema/path")

**2. Schema Evolution**
Handles new columns automatically

.option("cloudFiles.schemaEvolutionMode", "addNewColumns")

**3. File Notification**
Two modes:
- Directory listing (default)
- File notification (faster for large directories)

.option("cloudFiles.useNotifications", "true")

**4. Rescue Data Column**
Captures malformed records

.option("cloudFiles.rescuedDataColumn", "_rescued_data")

🔹 **Use Cases**

✔ Log file ingestion
✔ IoT sensor data
✔ Continuous data feeds
✔ Event streaming from storage
✔ CDC file processing

🔹 **Benefits**

✔ No manual file tracking
✔ Exactly-once processing
✔ Automatic schema handling
✔ Scalable to millions of files
✔ Cost-effective

🔹 **Real-World Example**

Scenario: Ingest daily sales files

# Auto Loader setup
sales_stream = spark.readStream.format("cloudFiles") \\
  .option("cloudFiles.format", "csv") \\
  .option("cloudFiles.schemaLocation", "/schemas/sales") \\
  .option("cloudFiles.inferColumnTypes", "true") \\
  .option("header", "true") \\
  .load("s3://data-lake/sales/incoming/")

# Write to Delta
sales_stream.writeStream \\
  .format("delta") \\
  .option("checkpointLocation", "/checkpoints/sales") \\
  .option("mergeSchema", "true") \\
  .trigger(availableNow=True) \\
  .start("/delta/bronze/sales")

New files appear → Auto Loader detects → Automatically loaded → No manual work!

---

👉 Delta Live Tables (DLT)

DLT = Declarative pipeline framework

🔹 **What is Delta Live Tables?**
A framework for building reliable, maintainable data pipelines

Traditional pipelines:
❌ Write complex orchestration code
❌ Manual error handling
❌ Manual data quality checks
❌ Hard to maintain
❌ No automatic retries

DLT pipelines:
✅ Declare what you want (not how)
✅ Automatic error handling
✅ Built-in data quality
✅ Self-healing
✅ Automatic retries
✅ Lineage tracking

🔹 **Core Concepts**

**1. Tables**
Define data transformations as tables

import dlt

@dlt.table
def customers_clean():
  return spark.read.format("delta").load("/bronze/customers")

**2. Views**
Intermediate transformations

@dlt.view
def customers_filtered():
  return dlt.read("customers_clean").filter("age > 18")

**3. Expectations (Data Quality)**
Define quality rules

@dlt.table(
  expectations={
    "valid_email": "email IS NOT NULL",
    "valid_age": "age > 0 AND age < 120"
  }
)
def customers_validated():
  return dlt.read("customers_filtered")

🔹 **Expectation Modes**

**1. Warn**
Log violations but continue

expectations={"valid_email": "email IS NOT NULL"}
expect_or_warn=True

**2. Drop**
Drop invalid records

expectations={"valid_email": "email IS NOT NULL"}
expect_or_drop=True

**3. Fail**
Fail pipeline on violations

expectations={"valid_email": "email IS NOT NULL"}
expect_or_fail=True

🔹 **Medallion Architecture with DLT**

**Bronze Layer (Raw)**
import dlt

@dlt.table
def bronze_orders():
  return spark.readStream.format("cloudFiles") \\
    .option("cloudFiles.format", "json") \\
    .load("/incoming/orders")

**Silver Layer (Cleaned)**
@dlt.table(
  expectations={
    "valid_order": "order_id IS NOT NULL",
    "positive_amount": "amount > 0"
  }
)
def silver_orders():
  return dlt.read_stream("bronze_orders") \\
    .select("order_id", "customer_id", "amount", "order_date") \\
    .dropDuplicates(["order_id"])

**Gold Layer (Aggregated)**
@dlt.table
def gold_daily_sales():
  return dlt.read("silver_orders") \\
    .groupBy("order_date") \\
    .agg(
      sum("amount").alias("total_sales"),
      count("*").alias("order_count")
    )

🔹 **Benefits**

✔ Declarative (focus on what, not how)
✔ Automatic dependency management
✔ Built-in data quality
✔ Automatic retries and recovery
✔ Lineage tracking
✔ Simplified maintenance
✔ Cost optimization

🔹 **DLT vs Traditional Pipelines**

| Feature | Traditional | DLT |
|---------|-------------|-----|
| Code style | Imperative | Declarative |
| Dependencies | Manual | Automatic |
| Quality checks | Manual | Built-in |
| Error handling | Manual | Automatic |
| Retries | Manual | Automatic |
| Lineage | Manual tracking | Automatic |
| Maintenance | Complex | Simple |

---

👉 Serverless Compute

Serverless = No cluster management

🔹 **What is Serverless?**
Run workloads without creating or managing clusters

Traditional approach:
❌ Create cluster
❌ Configure size
❌ Wait for startup
❌ Monitor usage
❌ Terminate manually
❌ Pay for idle time

Serverless approach:
✅ No cluster creation
✅ Automatic sizing
✅ Instant startup
✅ Auto-scaling
✅ Auto-termination
✅ Pay per second

🔹 **Serverless Features**

**1. SQL Warehouses**
Serverless SQL execution

- No cluster management
- Automatic scaling
- Instant queries
- Pay per query

**2. Serverless Notebooks**
Run notebooks without clusters

- Instant execution
- Automatic resources
- Cost-effective
- No waiting

**3. Serverless Jobs**
Run jobs without clusters

- Automatic provisioning
- Fast startup
- Auto-scaling
- Cost optimization

🔹 **Benefits**

✔ Zero cluster management
✔ Instant startup (no 5-minute wait)
✔ Automatic scaling
✔ Cost savings (pay per use)
✔ Better resource utilization
✔ Simplified operations

🔹 **When to Use Serverless**

Use Serverless:
✔ Ad-hoc queries
✔ Interactive analysis
✔ Variable workloads
✔ Development/testing
✔ Cost optimization

Use Traditional Clusters:
✔ Long-running jobs
✔ Predictable workloads
✔ Custom configurations
✔ Specific libraries

---

👉 Data Mesh Architecture

Data Mesh = Decentralized data ownership

🔹 **What is Data Mesh?**
An architectural approach where domain teams own their data

Traditional (Centralized):
❌ One data team owns everything
❌ Bottleneck for all requests
❌ Doesn't scale
❌ Slow to deliver
❌ Domain knowledge lost

Data Mesh (Decentralized):
✅ Domain teams own their data
✅ Data as a product
✅ Self-serve infrastructure
✅ Federated governance
✅ Scales with organization

🔹 **Four Principles**

**1. Domain-Oriented Ownership**
Teams own their domain data

Example:
- Sales team owns sales data
- Marketing team owns marketing data
- Product team owns product data

**2. Data as a Product**
Treat data like a product

- Quality standards
- Documentation
- SLAs
- Versioning
- Support

**3. Self-Serve Data Platform**
Infrastructure that enables autonomy

- Easy to create pipelines
- Automated deployment
- Monitoring tools
- Standard patterns

**4. Federated Governance**
Decentralized but coordinated

- Common standards
- Security policies
- Quality rules
- Interoperability

🔹 **Implementation in Databricks**

**Domain Data Products**
Each team creates their data products

# Sales domain
@dlt.table
def sales_product():
  return process_sales_data()

# Marketing domain
@dlt.table
def marketing_product():
  return process_marketing_data()

**Unity Catalog for Governance**
- Centralized metadata
- Access control
- Data discovery
- Lineage tracking

**Delta Sharing**
Share data across domains

- Secure sharing
- No data duplication
- Real-time access
- Cross-organization

🔹 **Benefits**

✔ Scales with organization
✔ Faster delivery
✔ Domain expertise preserved
✔ Reduced bottlenecks
✔ Better data quality
✔ Clear ownership

---

👉 AI/ML Integration

Integrate machine learning into data pipelines

🔹 **MLflow**
Platform for ML lifecycle

**1. Tracking**
Track experiments

import mlflow

with mlflow.start_run():
  mlflow.log_param("learning_rate", 0.01)
  mlflow.log_metric("accuracy", 0.95)
  mlflow.log_model(model, "model")

**2. Models**
Register and version models

mlflow.register_model("runs:/run-id/model", "sales_predictor")

**3. Deployment**
Deploy models for inference

model = mlflow.pyfunc.load_model("models:/sales_predictor/production")
predictions = model.predict(data)

🔹 **Feature Store**
Centralized feature management

from databricks.feature_store import FeatureStoreClient

fs = FeatureStoreClient()

# Create feature table
fs.create_table(
  name="customer_features",
  primary_keys=["customer_id"],
  df=features_df
)

# Use features for training
training_set = fs.create_training_set(
  df=labels_df,
  feature_lookups=[
    FeatureLookup(
      table_name="customer_features",
      lookup_key="customer_id"
    )
  ]
)

🔹 **Model Serving**
Real-time predictions

- REST API endpoints
- Automatic scaling
- Low latency
- Monitoring

🔹 **End-to-End ML Pipeline**

1️⃣ Data Ingestion (Auto Loader)
2️⃣ Feature Engineering (DLT)
3️⃣ Model Training (MLflow)
4️⃣ Model Registry (MLflow)
5️⃣ Model Deployment (Serving)
6️⃣ Monitoring (Metrics)

---

👉 Real-World Complete Example

Scenario: E-commerce Recommendation System

**1. Auto Loader (Ingestion)**
# Ingest user events
events = spark.readStream.format("cloudFiles") \\
  .option("cloudFiles.format", "json") \\
  .load("s3://events/")

**2. DLT Pipeline (Processing)**
import dlt

@dlt.table
def bronze_events():
  return spark.readStream.format("cloudFiles") \\
    .option("cloudFiles.format", "json") \\
    .load("s3://events/")

@dlt.table(
  expectations={
    "valid_user": "user_id IS NOT NULL",
    "valid_product": "product_id IS NOT NULL"
  }
)
def silver_events():
  return dlt.read_stream("bronze_events") \\
    .select("user_id", "product_id", "event_type", "timestamp")

@dlt.table
def gold_user_features():
  return dlt.read("silver_events") \\
    .groupBy("user_id") \\
    .agg(
      count("*").alias("total_events"),
      countDistinct("product_id").alias("unique_products")
    )

**3. ML Model (Training)**
import mlflow

with mlflow.start_run():
  model = train_recommendation_model(features)
  mlflow.log_metric("accuracy", accuracy)
  mlflow.sklearn.log_model(model, "model")

**4. Serverless Serving (Deployment)**
Model deployed as serverless endpoint

**5. Real-time Predictions**
User visits → Features fetched → Model predicts → Recommendations shown

---

👉 Best Practices

1️⃣ **Use Auto Loader** for file ingestion
2️⃣ **Use DLT** for reliable pipelines
3️⃣ **Leverage Serverless** for cost optimization
4️⃣ **Implement Data Mesh** for scale
5️⃣ **Integrate ML** with MLflow
6️⃣ **Monitor** pipeline health
7️⃣ **Enforce** data quality
8️⃣ **Document** data products
9️⃣ **Version** everything
🔟 **Automate** as much as possible

---

🎯 Interview Line:
"Advanced features in Databricks enable building modern, automated data platforms. Auto Loader automatically ingests files from cloud storage with schema evolution and exactly-once guarantees. Delta Live Tables provides declarative pipeline development with built-in data quality, automatic dependency management, and self-healing capabilities. Serverless compute eliminates cluster management with instant startup and automatic scaling. Data Mesh architecture enables decentralized data ownership where domain teams manage their data as products. MLflow integration provides end-to-end ML lifecycle management from experimentation to deployment. These features together enable building scalable, reliable, and intelligent data platforms with minimal manual intervention."
`,

    types: `
🚪 Auto Loader:
- Automatic file detection
- Schema inference
- Exactly-once processing
- Scalable ingestion

📊 Delta Live Tables:
- Declarative pipelines
- Built-in quality checks
- Automatic dependencies
- Self-healing

⚡ Serverless:
- No cluster management
- Instant startup
- Auto-scaling
- Pay per use

🏪 Data Mesh:
- Decentralized ownership
- Data as product
- Self-serve platform
- Federated governance

🤖 AI/ML Integration:
- MLflow tracking
- Feature Store
- Model serving
- End-to-end pipelines
`,

    qa: [
      {
        q: "What is Auto Loader?",
        hint: "Think automatic ingestion",
        options: ["Manual file loading", "Automatically detects and loads new files from cloud storage", "Database loader", "Cluster manager"],
        answer: "Automatically detects and loads new files from cloud storage",
        explanation: `Auto Loader:\n✔ Monitors cloud storage\n✔ Detects new files automatically\n✔ Handles schema evolution\n✔ Exactly-once processing\n\nNo manual file tracking needed!`,
        memory: "Auto Loader = Automatic file ingestion 🚪"
      },
      {
        q: "What is Delta Live Tables (DLT)?",
        hint: "Think declarative pipelines",
        options: ["Database", "Declarative framework for building reliable data pipelines", "Storage system", "Cluster type"],
        answer: "Declarative framework for building reliable data pipelines",
        explanation: `DLT:\n✔ Declarative (what, not how)\n✔ Built-in data quality\n✔ Automatic dependencies\n✔ Self-healing\n✔ Simplified maintenance\n\nDefine transformations as tables!`,
        memory: "DLT = Declarative pipelines 📊"
      },
      {
        q: "What are Expectations in DLT?",
        hint: "Think data quality",
        options: ["Performance metrics", "Data quality rules and constraints", "Cluster settings", "Storage options"],
        answer: "Data quality rules and constraints",
        explanation: `Expectations:\n✔ Define quality rules\n✔ Validate data automatically\n✔ Modes: warn, drop, fail\n\nExample: "email IS NOT NULL"\n\nEnsures data quality!`,
        memory: "Expectations = Quality rules ✅"
      },
      {
        q: "What is Serverless Compute?",
        hint: "Think no management",
        options: ["Slow clusters", "Compute without cluster management", "Manual scaling", "Local processing"],
        answer: "Compute without cluster management",
        explanation: `Serverless:\n✔ No cluster creation\n✔ Instant startup\n✔ Auto-scaling\n✔ Pay per use\n✔ Zero management\n\nFocus on code, not infrastructure!`,
        memory: "Serverless = No cluster management ⚡"
      },
      {
        q: "What is Data Mesh?",
        hint: "Think decentralized",
        options: ["Centralized data team", "Decentralized architecture with domain ownership", "Database type", "Storage system"],
        answer: "Decentralized architecture with domain ownership",
        explanation: `Data Mesh:\n✔ Domain teams own their data\n✔ Data as a product\n✔ Self-serve infrastructure\n✔ Federated governance\n\nScales with organization!`,
        memory: "Data Mesh = Decentralized ownership 🏪"
      },
      {
        q: "What is MLflow?",
        hint: "Think ML lifecycle",
        options: ["Database", "Platform for managing ML lifecycle", "Storage system", "Cluster type"],
        answer: "Platform for managing ML lifecycle",
        explanation: `MLflow:\n✔ Track experiments\n✔ Register models\n✔ Version models\n✔ Deploy models\n✔ Monitor performance\n\nEnd-to-end ML management!`,
        memory: "MLflow = ML lifecycle 🤖"
      },
      {
        q: "Benefits of Auto Loader?",
        hint: "Think automation",
        options: ["Manual work", "Automatic detection, schema evolution, exactly-once", "Slower processing", "More complex"],
        answer: "Automatic detection, schema evolution, exactly-once",
        explanation: `Auto Loader Benefits:\n✔ No manual tracking\n✔ Schema inference\n✔ Exactly-once guarantee\n✔ Scalable\n✔ Cost-effective\n\nFully automated ingestion!`,
        memory: "Auto Loader = Automated + Reliable 🚀"
      },
      {
        q: "DLT vs Traditional Pipelines?",
        hint: "Think simplicity",
        options: ["Same thing", "DLT is declarative with built-in quality and automation", "Traditional is better", "DLT is slower"],
        answer: "DLT is declarative with built-in quality and automation",
        explanation: `DLT Advantages:\n✔ Declarative syntax\n✔ Built-in quality checks\n✔ Automatic dependencies\n✔ Self-healing\n✔ Easier maintenance\n\nTraditional = Complex manual code`,
        memory: "DLT = Simple + Reliable 📊"
      },
      {
        q: "When to use Serverless?",
        hint: "Think use cases",
        options: ["Never", "Ad-hoc queries, variable workloads, cost optimization", "Only for storage", "Only for ML"],
        answer: "Ad-hoc queries, variable workloads, cost optimization",
        explanation: `Use Serverless:\n✔ Interactive analysis\n✔ Variable workloads\n✔ Development/testing\n✔ Cost optimization\n✔ No long-running jobs\n\nPerfect for unpredictable workloads!`,
        memory: "Serverless = Variable workloads ⚡"
      }
    ],

    coding: {
      title: "Auto Loader Example",
      scenario: "Set up Auto Loader to ingest files automatically",
      thinkingApproach: [
        "Step 1: Configure Auto Loader",
        "Step 2: Set schema location",
        "Step 3: Enable schema evolution",
        "Step 4: Set checkpoint",
        "Step 5: Write to Delta",
        "Step 6: Monitor ingestion"
      ],
      question: "Create Auto Loader pipeline for JSON files",
      input: `source_path = 's3://bucket/incoming/'\ntarget_path = '/delta/bronze/data'`,
      expectedOutput: `Auto Loader configured\nMonitoring: s3://bucket/incoming/\nWriting to: /delta/bronze/data\nSchema evolution: enabled`,
      solution: `# Simulating Auto Loader Setup
source_path = 's3://bucket/incoming/'
target_path = '/delta/bronze/data'

print("Auto Loader configured")
print(f"Monitoring: {source_path}")
print(f"Writing to: {target_path}")
print("Schema evolution: enabled")

# In real Databricks:
# df = spark.readStream.format("cloudFiles") \\
#   .option("cloudFiles.format", "json") \\
#   .option("cloudFiles.schemaLocation", "/schemas/data") \\
#   .option("cloudFiles.schemaEvolutionMode", "addNewColumns") \\
#   .load(source_path)
#
# df.writeStream \\
#   .format("delta") \\
#   .option("checkpointLocation", "/checkpoints/autoloader") \\
#   .start(target_path)`,
      note: "In Databricks: Use cloudFiles format with schema location and checkpoint for production Auto Loader"
    },

    quiz: [
      { q: "Auto Loader?", options: ["Automatic", "Manual", "Slow", "None"], answer: 0 },
      { q: "DLT?", options: ["Declarative", "Imperative", "Manual", "None"], answer: 0 },
      { q: "Expectations?", options: ["Quality rules", "Performance", "Storage", "None"], answer: 0 },
      { q: "Serverless?", options: ["No management", "Manual", "Slow", "None"], answer: 0 },
      { q: "Data Mesh?", options: ["Decentralized", "Centralized", "Single team", "None"], answer: 0 },
      { q: "MLflow?", options: ["ML lifecycle", "Database", "Storage", "None"], answer: 0 },
      { q: "Auto Loader benefit?", options: ["Automated", "Manual", "Complex", "None"], answer: 0 },
      { q: "DLT advantage?", options: ["Simple", "Complex", "Manual", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "Advanced features in Databricks enable building modern, automated, and intelligent data platforms.

Key features include:

1. Auto Loader: Automatically detects and ingests new files from cloud storage with schema inference, schema evolution, and exactly-once processing guarantees. Eliminates manual file tracking and handles millions of files efficiently.

2. Delta Live Tables (DLT): Declarative framework for building reliable data pipelines. Define transformations as tables with built-in data quality checks (expectations), automatic dependency management, self-healing capabilities, and simplified maintenance. Supports warn, drop, and fail modes for quality enforcement.

3. Serverless Compute: Eliminates cluster management with instant startup, automatic scaling, and pay-per-use pricing. Ideal for ad-hoc queries, variable workloads, and cost optimization.

4. Data Mesh Architecture: Decentralized approach where domain teams own their data as products. Enables scalability through self-serve infrastructure and federated governance while maintaining standards.

5. AI/ML Integration: MLflow provides end-to-end ML lifecycle management including experiment tracking, model registry, versioning, and deployment. Feature Store centralizes feature management for consistency across models.

These features together enable building scalable, reliable, and intelligent data platforms with minimal manual intervention, reduced operational overhead, and faster time to value."
`,

    memory: `
👉 Auto Loader = Automatic ingestion 🚪
👉 DLT = Declarative pipelines 📊
👉 Expectations = Quality rules ✅
👉 Serverless = No management ⚡
👉 Data Mesh = Decentralized 🏪
👉 MLflow = ML lifecycle 🤖
👉 Auto Loader = Automated + Reliable 🚀
👉 DLT = Simple + Reliable 📊
👉 Serverless = Variable workloads ⚡
👉 Advanced = Automation + Intelligence 🚀
`,

    revision: "Advanced Features = Auto Loader + DLT + Serverless + Data Mesh + MLflow for automated, scalable, and intelligent data platforms"
  }

};

// Export the content
if (typeof module !== 'undefined' && module.exports) {
  module.exports = databricksContent;
}
