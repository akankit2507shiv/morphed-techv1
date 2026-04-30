// PySpark Topics Content
const pysparkContent = {

  'pyspark-intro': {
    title: "PySpark Introduction (Big Data Processing Engine for Real-World Pipelines)",
    subtitle: "Distributed data processing with Apache Spark",
    icon: "⚡",
    difficulty: "Beginner",
    duration: "~45 min",
    ready: true,

    comic: `
Imagine you're a delivery manager 🚚  

You have 1 lakh packages 📦  

😰 Problem  
One person tries to deliver ALL → very slow ❌  

🤔 Solution  
You hire 100 delivery boys 👥  
Each delivers some packages → work done FAST 🚀  

✨ This is PySpark!

👉 PySpark = Process data using multiple machines  

💡 Aha Moment:
PySpark = Teamwork for data processing 🤝
`,

    deepDive: `
👉 What is PySpark?
PySpark is a Python API for Apache Spark used to process large-scale data in distributed systems.

👉 Key Idea:
Instead of processing data on ONE machine  
→ PySpark distributes work across MANY machines  

👉 Architecture:
- Driver → controls execution  
- Executors → process data  
- Cluster → group of machines  

👉 Example:
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("Demo").getOrCreate()

df = spark.read.csv("data.csv", header=True)
df.show()

👉 Why it matters?
- Handles BIG data (GBs, TBs, PBs)  
- Fast processing  
- Used in real-time pipelines  

👉 Real-world use:
- Amazon → order processing  
- Netflix → recommendation system  
- Swiggy → delivery analytics  

🎯 Interview Line:
"PySpark is a distributed data processing framework that allows handling large datasets efficiently by parallelizing computations across multiple nodes."
`,

    types: `
🧠 Driver → controls job  
⚙️ Executor → processes data  
📦 Cluster → group of nodes  

📊 Data Types:
RDD → low-level  
DataFrame → structured data (most used)  
Dataset → advanced  

🔥 Prefer DataFrame in interviews
`,

    qa: [
      {
        q: "PySpark is used for?",
        hint: "Big data",
        options: ["UI", "Big data processing", "Gaming", "Loop"],
        answer: "Big data processing",
        explanation: `Used for large data.`,
        memory: "PySpark = big data 📊"
      },
      {
        q: "Main benefit?",
        hint: "Speed",
        options: ["Slow", "Fast processing", "UI", "None"],
        answer: "Fast processing",
        explanation: `Parallel execution.`,
        memory: "Parallel = fast ⚡"
      },
      {
        q: "Driver?",
        hint: "Control",
        options: ["Worker", "Control program", "Storage", "None"],
        answer: "Control program",
        explanation: `Driver controls job.`,
        memory: "Driver = boss 🧠"
      },
      {
        q: "Executor?",
        hint: "Work",
        options: ["Control", "Process data", "Store data", "None"],
        answer: "Process data",
        explanation: `Executors process.`,
        memory: "Executor = worker ⚙️"
      },
      {
        q: "Cluster?",
        hint: "Group",
        options: ["Single", "Group of machines", "Loop", "None"],
        answer: "Group of machines",
        explanation: `Cluster = many nodes.`,
        memory: "Cluster = team 👥"
      },
      {
        q: "Best API?",
        hint: "Structured",
        options: ["RDD", "DataFrame", "Loop", "None"],
        answer: "DataFrame",
        explanation: `Most used.`,
        memory: "DF = best 📋"
      }
    ],

    coding: {
      title: "Basic PySpark Setup",
      scenario: "Simulate PySpark data loading using Python",
      thinkingApproach: [
        "Step 1: Understand SparkSession concept",
        "Step 2: Simulate data loading",
        "Step 3: Display records",
        "Step 4: Check structure",
        "Step 5: Validate output",
        "Step 6: Understand real PySpark equivalent"
      ],
      question: "Simulate loading and displaying CSV data",
      input: `data = [\n  {"name": "Ankit", "age": 25},\n  {"name": "Rahul", "age": 28}\n]`,
      expectedOutput: `name: Ankit, age: 25\nname: Rahul, age: 28`,
      solution: `# Simulating PySpark DataFrame.show()
data = [
  {"name": "Ankit", "age": 25},
  {"name": "Rahul", "age": 28}
]

for row in data:
    print(f"name: {row['name']}, age: {row['age']}")`,
      note: "In real PySpark: spark.read.csv('data.csv', header=True).show()"
    },

    quiz: [
      { q: "PySpark?", options: ["UI", "Big data", "Game", "Loop"], answer: 1 },
      { q: "Speed?", options: ["Slow", "Fast", "None", "Loop"], answer: 1 },
      { q: "Driver?", options: ["Control", "Worker", "None", "Loop"], answer: 0 },
      { q: "Executor?", options: ["Control", "Process", "None", "Loop"], answer: 1 },
      { q: "Cluster?", options: ["Single", "Group", "None", "Loop"], answer: 1 },
      { q: "API?", options: ["RDD", "DF", "Loop", "None"], answer: 1 },
      { q: "Parallel?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "Used?", options: ["Game", "DE", "UI", "Loop"], answer: 1 },
      { q: "Important?", options: ["Yes", "No", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "PySpark is a distributed data processing framework built on Apache Spark that allows processing large datasets efficiently using parallel computing.
It uses a driver-executor architecture and is widely used in data engineering for building scalable ETL pipelines."
`,

    memory: `
👉 PySpark = big data 📊  
👉 Driver = boss 🧠  
👉 Executor = worker ⚙️  
👉 Cluster = team 👥  
👉 Parallel = fast ⚡  
`,

    revision: "PySpark = process big data using distributed parallel computing"
  },

  'pyspark-rdd': {
    title: "RDD vs DataFrame vs Table (Understanding Spark Data Abstractions)",
    subtitle: "Choose the right Spark data abstraction",
    icon: "🧱",
    difficulty: "Beginner",
    duration: "~50 min",
    ready: true,

    comic: `
Imagine you have data written in 3 formats 📚  

1️⃣ Raw notes (messy, manual work)  
2️⃣ Excel sheet (structured)  
3️⃣ Database table (organized + queryable)  

😰 Problem  
Which one should you use?

🤔 Solution  

RDD → raw notes  
DataFrame → Excel  
Table → database  

✨ This is Spark abstraction!

💡 Aha Moment:
Higher abstraction = easier + faster 🚀
`,

    deepDive: `
👉 What is RDD?
- Low-level distributed data structure  
- No schema  
- Manual transformations  

👉 What is DataFrame?
- Structured data (like table)  
- Has schema (columns + types)  
- Optimized using Catalyst  

👉 What is Table?
- DataFrame stored in metastore  
- Can be queried using SQL  
- Persistent storage  

👉 Key Differences:

RDD:
✔ Full control  
❌ No optimization  
❌ Hard to use  

DataFrame:
✔ Easy  
✔ Optimized  
✔ Most used  

Table:
✔ Stored data  
✔ SQL access  
✔ Used in production  

👉 Why it matters?
- Choose correct abstraction  
- Improve performance  
- Write better pipelines  

👉 Real-world use:
- RDD → rarely used  
- DataFrame → ETL pipelines  
- Table → Data warehouse  

🎯 Interview Line:
"RDD is a low-level abstraction with no schema, DataFrame is a structured and optimized abstraction, and Tables are persistent DataFrames stored for SQL-based querying."
`,

    types: `
🧱 RDD → low-level  
📊 DataFrame → structured  
🗄️ Table → stored + SQL  

🔥 Most used: DataFrame
`,

    qa: [
      {
        q: "Which abstraction is lowest level in Spark?",
        hint: "Manual control",
        options: ["DataFrame", "Table", "RDD", "SQL"],
        answer: "RDD",
        explanation: `RDD is the lowest-level abstraction.\nIt requires manual transformations and no schema.`,
        memory: "RDD = raw 🧱"
      },
      {
        q: "Why DataFrame is preferred over RDD?",
        hint: "Optimization",
        options: ["More complex", "Better optimization and easier syntax", "Less memory", "No reason"],
        answer: "Better optimization and easier syntax",
        explanation: `DataFrame uses Catalyst optimizer.\nThis improves performance automatically.`,
        memory: "DataFrame = smart 📊"
      },
      {
        q: "What is a Table in Spark?",
        hint: "Stored data",
        options: ["Temporary variable", "Stored DataFrame accessible via SQL", "RDD storage", "Cache"],
        answer: "Stored DataFrame accessible via SQL",
        explanation: `Table is:\n✔ Stored data\n✔ Queryable via SQL\n✔ Persistent`,
        memory: "Table = stored 🗄️"
      },
      {
        q: "Which supports SQL queries?",
        hint: "Think abstraction",
        options: ["RDD", "DataFrame", "Table", "Both DataFrame and Table"],
        answer: "Both DataFrame and Table",
        explanation: `DataFrame → SQL via Spark SQL\nTable → Direct SQL\nRDD does NOT support SQL.`,
        memory: "SQL = DF + Table 💻"
      },
      {
        q: "Which is most used in industry?",
        hint: "ETL pipelines",
        options: ["RDD", "DataFrame", "Table", "None"],
        answer: "DataFrame",
        explanation: `DataFrame is:\n✔ Easy\n✔ Optimized\n✔ Scalable\nMost commonly used abstraction.`,
        memory: "DataFrame = king 👑"
      },
      {
        q: "Interview Trap: When use RDD?",
        hint: "Rare cases",
        options: ["Always", "Never", "When low-level control required", "For SQL"],
        answer: "When low-level control required",
        explanation: `RDD is used only when:\n✔ Need full control\n✔ Complex transformations\nOtherwise use DataFrame.`,
        memory: "RDD = special case ⚙️"
      }
    ],

    coding: {
      title: "Convert RDD to DataFrame",
      scenario: "You have raw data and need structured DataFrame",
      thinkingApproach: [
        "Step 1: Identify raw data",
        "Step 2: Define structure",
        "Step 3: Convert to DataFrame",
        "Step 4: Apply transformations",
        "Step 5: Validate structure",
        "Step 6: Use SQL if needed"
      ],
      question: "Simulate RDD to DataFrame conversion",
      input: `rdd_data = [("Ankit", 25), ("Rahul", 30)]`,
      expectedOutput: `name,age\nAnkit,25\nRahul,30`,
      solution: `rdd_data = [("Ankit", 25), ("Rahul", 30)]

# Simulate DataFrame from RDD
columns = ["name", "age"]
print(",".join(columns))
for row in rdd_data:
    print(f"{row[0]},{row[1]}")`,
      note: "Always prefer DataFrame over RDD in production."
    },

    quiz: [
      { q: "RDD?", options: ["Low-level", "High", "None", "Loop"], answer: 0 },
      { q: "DataFrame?", options: ["Structured", "Raw", "None", "Loop"], answer: 0 },
      { q: "Table?", options: ["Stored", "Temp", "None", "Loop"], answer: 0 },
      { q: "SQL?", options: ["DF+Table", "RDD", "None", "Loop"], answer: 0 },
      { q: "Best?", options: ["DataFrame", "RDD", "None", "Loop"], answer: 0 },
      { q: "RDD use?", options: ["Rare", "Always", "None", "Loop"], answer: 0 },
      { q: "Optimize?", options: ["DF", "RDD", "None", "Loop"], answer: 0 },
      { q: "Industry?", options: ["DF", "RDD", "None", "Loop"], answer: 0 },
      { q: "Core?", options: ["Yes", "No", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "RDD is a low-level distributed data abstraction without schema, DataFrame is a structured and optimized abstraction with schema support, and Tables are persistent DataFrames stored in a metastore for SQL-based querying.
In modern data engineering, DataFrames and Tables are preferred due to better performance and ease of use."
`,

    memory: `
👉 RDD = raw 🧱  
👉 DataFrame = structured 📊  
👉 Table = stored 🗄️  
👉 SQL = DF + Table 💻  
👉 DataFrame = most used 👑  
👉 RDD = rare ⚙️  
`,

    revision: "RDD = raw, DataFrame = structured, Table = stored and queryable"
  },

  'pyspark-dataframe': {
    title: "DataFrame Basics (Core Data Structure for Big Data Processing)",
    subtitle: "Distributed table for structured big data",
    icon: "📋",
    difficulty: "Beginner",
    duration: "~50 min",
    ready: true,

    comic: `
Imagine you're managing a school 📚  

You maintain a register:
- Student Name  
- Class  
- Marks  

😰 Problem  
Data is huge (lakhs of students)  
Excel can't handle it ❌  

🤔 Solution  
Use a SUPER register that:
- Stores huge data  
- Allows fast filtering  
- Works across machines  

✨ This is DataFrame!

👉 DataFrame = Table for big data  

💡 Aha Moment:
DataFrame = Excel sheet on steroids 💪
`,

    deepDive: `
👉 What is DataFrame?
A DataFrame is a distributed collection of data organized into rows and columns.

👉 Key Features:
- Schema (structure of data)  
- Distributed processing  
- Optimized execution  

👉 Example:
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("DF").getOrCreate()

df = spark.read.csv("data.csv", header=True, inferSchema=True)

👉 Common Operations:
df.show() → display data  
df.printSchema() → structure  
df.columns → column names  
df.count() → row count  

👉 Why it matters?
- Most used API in PySpark  
- Faster than RDD  
- Optimized with Catalyst engine  

👉 Real-world use:
- Data ingestion  
- Data transformation  
- Reporting pipelines  

🎯 Interview Line:
"DataFrame in PySpark is a distributed table-like structure used for processing structured data efficiently with optimized execution."
`,

    types: `
📊 Rows & Columns  
📋 Schema → structure  
⚡ Distributed processing  

🔥 Core Methods:
show(), printSchema(), count(), columns  
`,

    qa: [
      {
        q: "DataFrame is?",
        hint: "Table",
        options: ["List", "Table", "Loop", "Function"],
        answer: "Table",
        explanation: `DataFrame is table-like structure.`,
        memory: "DF = table 📋"
      },
      {
        q: "Used for?",
        hint: "Big data",
        options: ["Game", "Big data", "UI", "Loop"],
        answer: "Big data",
        explanation: `Handles large data.`,
        memory: "DF = big data 📊"
      },
      {
        q: "Schema?",
        hint: "Structure",
        options: ["Data", "Structure", "Loop", "None"],
        answer: "Structure",
        explanation: `Schema defines columns.`,
        memory: "Schema = structure 🧱"
      },
      {
        q: "show()?",
        hint: "Display",
        options: ["Delete", "Display", "Sort", "None"],
        answer: "Display",
        explanation: `Shows data.`,
        memory: "show = display 👀"
      },
      {
        q: "count()?",
        hint: "Rows",
        options: ["Columns", "Rows", "Loop", "None"],
        answer: "Rows",
        explanation: `Counts rows.`,
        memory: "count = rows 🔢"
      },
      {
        q: "Best API?",
        hint: "Preferred",
        options: ["RDD", "DataFrame", "Loop", "None"],
        answer: "DataFrame",
        explanation: `Most used API.`,
        memory: "DF > RDD 💪"
      }
    ],

    coding: {
      title: "Create and Explore DataFrame",
      scenario: "Simulate loading and exploring a DataFrame",
      thinkingApproach: [
        "Step 1: Create data structure",
        "Step 2: Display all rows",
        "Step 3: Show column names",
        "Step 4: Count rows",
        "Step 5: Validate output",
        "Step 6: Understand real PySpark equivalent"
      ],
      question: "Display data, columns and row count",
      input: `data = [\n  {"name": "Ankit", "age": 25},\n  {"name": "Rahul", "age": 28}\n]`,
      expectedOutput: `name: Ankit, age: 25\nname: Rahul, age: 28\nColumns: name, age\nRow count: 2`,
      solution: `data = [
  {"name": "Ankit", "age": 25},
  {"name": "Rahul", "age": 28}
]

# show()
for row in data:
    print(f"name: {row['name']}, age: {row['age']}")

# columns
print("Columns:", ", ".join(data[0].keys()))

# count()
print("Row count:", len(data))`,
      note: "In real PySpark: df.show(), df.columns, df.count()"
    },

    quiz: [
      { q: "DataFrame?", options: ["List", "Table", "Loop", "None"], answer: 1 },
      { q: "Used?", options: ["Game", "Big data", "UI", "Loop"], answer: 1 },
      { q: "Schema?", options: ["Data", "Structure", "Loop", "None"], answer: 1 },
      { q: "show?", options: ["Delete", "Display", "Sort", "None"], answer: 1 },
      { q: "count?", options: ["Rows", "Cols", "Loop", "None"], answer: 0 },
      { q: "API?", options: ["RDD", "DF", "Loop", "None"], answer: 1 },
      { q: "Distributed?", options: ["Yes", "No", "Maybe", "None"], answer: 0 },
      { q: "Fast?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "A DataFrame in PySpark is a distributed collection of structured data organized in rows and columns.
It is the most commonly used API in Spark as it provides optimized execution and is used extensively in data processing and ETL pipelines."
`,

    memory: `
👉 DF = table 📋  
👉 Schema = structure 🧱  
👉 show = display 👀  
👉 count = rows 🔢  
👉 DF > RDD 💪  
`,

    revision: "DataFrame = distributed table for big data processing"
  },

  'pyspark-transformations': {
    title: "Transformations vs Actions (The Core Execution Engine of PySpark)",
    subtitle: "Lazy evaluation and execution model",
    icon: "⚙️",
    difficulty: "Intermediate",
    duration: "~55 min",
    ready: true,

    comic: `
Imagine you're ordering food online 🍔  

You:
✔ Browse menu  
✔ Add items to cart  
✔ Apply coupon  

😰 Problem  
Nothing is actually ordered yet!

🤔 When does real action happen?  
👉 Only when you click "PLACE ORDER"

✨ This is EXACTLY how PySpark works!

👉 Transformations = Adding to cart 🧠  
👉 Actions = Placing order 🚀  

💡 Aha Moment:
Until you "place order", nothing is executed!
`,

    deepDive: `
👉 What are Transformations?
Transformations are operations that define how data should be processed, but they DO NOT execute immediately.

Examples:
- select()
- filter()
- withColumn()
- groupBy()

👉 What are Actions?
Actions trigger execution and return results.

Examples:
- show()
- count()
- collect()
- write()

👉 Lazy Evaluation (VERY IMPORTANT)
Spark does NOT run code immediately.

Instead:
✔ Builds execution plan (DAG)
✔ Optimizes it
✔ Executes only when action is called

👉 Example:
df.filter(df.age > 25).select("name")
→ Nothing happens yet ❌  

df.show()
→ Now execution happens ✅  

👉 Why it matters?
- Optimizes performance  
- Reduces unnecessary computation  
- Improves speed  

🎯 Interview Line:
"Transformations in PySpark are lazy operations that define computation logic, while actions trigger execution. Spark uses lazy evaluation to optimize performance."
`,

    types: `
🧠 Transformations (Lazy)
- select()
- filter()
- withColumn()
- groupBy()

🚀 Actions (Execution)
- show()
- count()
- collect()
- write()
`,

    qa: [
      {
        q: "You applied filter() and select() but nothing is printed. Why?",
        hint: "Think: when does Spark actually execute?",
        options: ["Because filter() is wrong", "Because no action is triggered", "Because data is empty", "Because Spark is slow"],
        answer: "Because no action is triggered",
        explanation: `Transformations like filter() and select() are LAZY.\nThey only define the logic but do not execute.\nExecution happens only when an action like show() or count() is called.`,
        memory: "No Action = No Output 🚫"
      },
      {
        q: "Which of the following is an ACTION?",
        hint: "Which one triggers execution?",
        options: ["filter()", "select()", "show()", "withColumn()"],
        answer: "show()",
        explanation: `show() triggers execution.\nOthers are transformations that only define logic.`,
        memory: "show() = run 🚀"
      },
      {
        q: "Why does Spark use lazy evaluation?",
        hint: "Think performance optimization",
        options: ["To delay execution", "To optimize execution plan", "To reduce memory only", "To avoid syntax errors"],
        answer: "To optimize execution plan",
        explanation: `Spark builds a DAG and optimizes it before execution.\nIt removes unnecessary steps and improves performance.`,
        memory: "Lazy = Smart Execution 🧠"
      },
      {
        q: "What will happen? df.filter(df.age > 25).select('name')",
        hint: "Is there any action?",
        options: ["Data will print", "Error will occur", "Nothing happens", "Data gets saved"],
        answer: "Nothing happens",
        explanation: `Only transformations are used → no execution.\nSpark just prepares the plan.`,
        memory: "Only plan, no run 🧠"
      },
      {
        q: "Which query will give result?",
        hint: "Need both transformation + action",
        options: ["df.filter(df.age > 25)", "df.select('name')", "df.filter(df.age > 25).count()", "df.withColumn('x', df.age + 1)"],
        answer: "df.filter(df.age > 25).count()",
        explanation: `filter() → transformation\ncount() → action\nTogether → execution + output`,
        memory: "Transform + Action = Result 🎯"
      },
      {
        q: "Interview Trap: Which is TRUE?",
        hint: "Careful — tricky question",
        options: ["Transformations execute immediately", "Actions define logic", "Transformations are lazy and actions trigger execution", "Actions are faster than transformations"],
        answer: "Transformations are lazy and actions trigger execution",
        explanation: `✔ Transformations = lazy\n✔ Actions = execution\nOther options are incorrect.`,
        memory: "Plan first, run later 🧠🚀"
      }
    ],

    coding: {
      title: "Understanding Lazy Execution",
      scenario: "Filter data and trigger execution properly",
      thinkingApproach: [
        "Step 1: Load data",
        "Step 2: Apply transformation (filter)",
        "Step 3: Add action to trigger execution",
        "Step 4: Validate output",
        "Step 5: Understand lazy evaluation",
        "Step 6: Apply in real PySpark"
      ],
      question: "Filter users with age > 27 and display result",
      input: `data = [\n  {"name": "Ankit", "age": 25},\n  {"name": "Rahul", "age": 30},\n  {"name": "Priya", "age": 28}\n]`,
      expectedOutput: `Rahul,30\nPriya,28`,
      solution: `data = [
  {"name": "Ankit", "age": 25},
  {"name": "Rahul", "age": 30},
  {"name": "Priya", "age": 28}
]

# Transformation (filter) + Action (print)
for row in data:
    if row["age"] > 27:
        print(f"{row['name']},{row['age']}")`,
      note: "Without action, Spark will not execute anything."
    },

    quiz: [
      { q: "Transformation?", options: ["Run", "Plan", "Store", "None"], answer: 1 },
      { q: "Action?", options: ["Plan", "Run", "Store", "None"], answer: 1 },
      { q: "Lazy?", options: ["Immediate", "Delayed", "None", "Loop"], answer: 1 },
      { q: "show?", options: ["Transform", "Action", "Loop", "None"], answer: 1 },
      { q: "filter?", options: ["Action", "Transform", "Loop", "None"], answer: 1 },
      { q: "Execution?", options: ["Always", "On action", "Never", "None"], answer: 1 },
      { q: "Optimize?", options: ["No", "Yes", "Maybe", "None"], answer: 1 },
      { q: "Important?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "Core?", options: ["Yes", "No", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "In PySpark, transformations are lazy operations that define computation logic, while actions trigger execution and return results.
Spark uses lazy evaluation to build and optimize execution plans before running them, which improves performance in large-scale data processing."
`,

    memory: `
👉 Transform = plan 🧠  
👉 Action = run 🚀  
👉 Lazy = wait 😴  
👉 show = execute 👀  
👉 No action = no output ❌  
`,

    revision: "Transformations define logic (lazy), Actions trigger execution"
  },

  'pyspark-actions': {
    title: "Select, Filter & WithColumn (Core Data Manipulation in PySpark)",
    subtitle: "Core column and row operations",
    icon: "🎯",
    difficulty: "Intermediate",
    duration: "~45 min",
    ready: true,

    comic: `
Imagine you're managing a student database 📚  

You want to:
✔ See only names → SELECT  
✔ Find students with marks > 80 → FILTER  
✔ Add grade column → WITHCOLUMN  

😰 Problem  
Raw data is messy and too big  

🤔 Solution  
Use operations to:
- Pick needed data  
- Remove unwanted rows  
- Create new insights  

✨ This is Select, Filter, WithColumn!

💡 Aha Moment:
SELECT = choose columns 📋  
FILTER = choose rows 🔍  
WITHCOLUMN = create/update columns ➕
`,

    deepDive: `
👉 select()
Used to choose specific columns from DataFrame.

Example:
df.select("name", "age")

👉 filter() / where()
Used to filter rows based on condition.

Example:
df.filter(df.age > 25)

👉 withColumn()
Used to create or update a column.

Example:
df.withColumn("age_plus_1", df.age + 1)

👉 Why it matters?
- Core data transformation logic  
- Used in EVERY pipeline  
- Helps in cleaning & feature engineering  

👉 Real-world use:
- Selecting required fields from large datasets  
- Filtering valid records  
- Creating derived columns  

🎯 Interview Line:
"Select is used to choose columns, filter is used to filter rows, and withColumn is used to create or modify columns in PySpark DataFrames."
`,

    types: `
📋 select → choose columns  
🔍 filter → choose rows  
➕ withColumn → create/update column  

🔥 All are transformations (lazy)
`,

    qa: [
      {
        q: "You want only 'name' and 'age' columns from DataFrame. What should you use?",
        hint: "Think: selecting columns",
        options: ["filter()", "select()", "withColumn()", "count()"],
        answer: "select()",
        explanation: `select() is used to choose specific columns.\nfilter() → rows\nwithColumn() → create/update columns`,
        memory: "select = columns 📋"
      },
      {
        q: "You want only employees with salary > 50000. What should you use?",
        hint: "Think: filtering rows",
        options: ["select()", "filter()", "withColumn()", "groupBy()"],
        answer: "filter()",
        explanation: `filter() is used to apply conditions on rows.\nselect() only picks columns, not rows.`,
        memory: "filter = rows 🔍"
      },
      {
        q: "You want to create a new column 'bonus' = salary * 0.1. What to use?",
        hint: "Think: adding column",
        options: ["select()", "filter()", "withColumn()", "drop()"],
        answer: "withColumn()",
        explanation: `withColumn() is used to create or modify columns.\nIt is widely used for feature engineering.`,
        memory: "withColumn = create ➕"
      },
      {
        q: "What will happen? df.select('name').filter(df.age > 25)",
        hint: "Check column usage",
        options: ["Works fine", "Error occurs", "Returns all rows", "Returns empty"],
        answer: "Error occurs",
        explanation: `After select('name'), only 'name' column exists.\nfilter(df.age > 25) → 'age' column not present ❌\nSo it will fail.`,
        memory: "Select first → columns limited ⚠️"
      },
      {
        q: "Which statement is TRUE?",
        hint: "Think: transformation behavior",
        options: ["select() executes immediately", "filter() deletes data permanently", "withColumn() modifies DataFrame lazily", "filter() is an action"],
        answer: "withColumn() modifies DataFrame lazily",
        explanation: `All three (select, filter, withColumn) are transformations.\nThey are lazy and do not execute immediately.`,
        memory: "All lazy 🧠"
      },
      {
        q: "Best way to filter multiple conditions?",
        hint: "Think logical operators",
        options: ["df.filter(age > 25 AND salary > 50000)", "df.filter((df.age > 25) & (df.salary > 50000))", "df.filter(age > 25, salary > 50000)", "df.select(age > 25)"],
        answer: "df.filter((df.age > 25) & (df.salary > 50000))",
        explanation: `In PySpark:\n✔ Use & (AND)\n✔ Use | (OR)\n✔ Wrap conditions in brackets\nSQL-style AND does NOT work directly ❌`,
        memory: "& = AND, | = OR 🔗"
      }
    ],

    coding: {
      title: "Student Data Transformation",
      scenario: "Filter high-performing students and add bonus column",
      thinkingApproach: [
        "Step 1: Load data",
        "Step 2: Filter rows with marks > 80",
        "Step 3: Create grade_bonus column",
        "Step 4: Display result",
        "Step 5: Validate output",
        "Step 6: Apply in real PySpark"
      ],
      question: "Get students with marks > 80 and add 'grade_bonus' column",
      input: `data = [\n  {"name": "Ankit", "marks": 75},\n  {"name": "Rahul", "marks": 85},\n  {"name": "Priya", "marks": 90}\n]`,
      expectedOutput: `Rahul,85,8.5\nPriya,90,9.0`,
      solution: `data = [
  {"name": "Ankit", "marks": 75},
  {"name": "Rahul", "marks": 85},
  {"name": "Priya", "marks": 90}
]

# filter + withColumn equivalent
for row in data:
    if row["marks"] > 80:
        bonus = round(row["marks"] * 0.1, 1)
        print(f"{row['name']},{row['marks']},{bonus}")`,
      note: "Select → Filter → WithColumn is a common ETL pattern."
    },

    quiz: [
      { q: "Select?", options: ["Rows", "Columns", "Loop", "None"], answer: 1 },
      { q: "Filter?", options: ["Columns", "Rows", "Loop", "None"], answer: 1 },
      { q: "withColumn?", options: ["Delete", "Create", "Loop", "None"], answer: 1 },
      { q: "Lazy?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "AND?", options: ["AND", "&", "&&", "None"], answer: 1 },
      { q: "OR?", options: ["|", "OR", "||", "None"], answer: 0 },
      { q: "Execution?", options: ["Immediate", "Lazy", "None", "Loop"], answer: 1 },
      { q: "Core?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "In PySpark, select is used to choose specific columns, filter is used to apply conditions on rows, and withColumn is used to create or modify columns.
These are core transformations used in almost every ETL pipeline and follow lazy evaluation for optimized execution."
`,

    memory: `
👉 select = columns 📋  
👉 filter = rows 🔍  
👉 withColumn = create ➕  
👉 & = AND, | = OR 🔗  
👉 All = lazy 🧠  
`,

    revision: "Select columns, Filter rows, WithColumn create/update — core transformations in PySpark"
  },

  'pyspark-sql': {
    title: "Data Cleaning (Handling Real-World Messy Data in PySpark)",
    subtitle: "Fix NULLs, formats and inconsistencies",
    icon: "🧹",
    difficulty: "Intermediate",
    duration: "~55 min",
    ready: true,

    comic: `
Imagine you're a restaurant manager 🍽️  

Customers write orders like:
- "Pizza"  
- " pizza "  
- "PIZZA"  
- "" (empty)  
- NULL  

😰 Problem  
System treats them as DIFFERENT values ❌  

Reports become wrong!

🤔 Solution  
Clean the data:
✔ Trim spaces  
✔ Standardize case  
✔ Handle NULLs  

✨ This is Data Cleaning!

💡 Aha Moment:
Garbage data → Garbage output ❌  
Clean data → Correct insights ✅
`,

    deepDive: `
👉 What is Data Cleaning?
Data cleaning is the process of fixing or removing incorrect, inconsistent, or missing data.

👉 Common Issues:
- NULL values  
- Duplicate records  
- Inconsistent formats  
- Extra spaces  
- Wrong data types  

👉 Common Functions:
- dropna() → remove NULL  
- fillna() → replace NULL  
- trim() → remove spaces  
- lower()/upper() → standardize text  
- cast() → convert data types  

👉 Example:
from pyspark.sql.functions import col, trim, lower

df = df.withColumn("name", trim(lower(col("name"))))

👉 Why it matters?
- Real data is ALWAYS dirty  
- Bad data → wrong insights  
- Essential for pipelines  

🎯 Interview Line:
"Data cleaning in PySpark involves handling null values, removing inconsistencies, and standardizing data to ensure accurate processing and analysis."
`,

    types: `
🧹 Remove NULL → dropna()  
🔄 Replace NULL → fillna()  
✂️ Trim spaces → trim()  
🔤 Case standardization → lower()/upper()  
🔢 Data type fix → cast()  

🔥 Most pipelines start with cleaning
`,

    qa: [
      {
        q: "Why is data cleaning important in data engineering?",
        hint: "Think output quality",
        options: ["For faster execution", "To improve data quality and accuracy", "To reduce memory only", "To delete data"],
        answer: "To improve data quality and accuracy",
        explanation: `Dirty data leads to wrong results.\nCleaning ensures:\n✔ Correct insights\n✔ Reliable analytics\n✔ Better decision-making`,
        memory: "Clean data = correct output ✅"
      },
      {
        q: "Which function is used to replace NULL values?",
        hint: "Fill missing data",
        options: ["dropna()", "fillna()", "filter()", "select()"],
        answer: "fillna()",
        explanation: `fillna() replaces NULL with a value.\ndropna() removes rows entirely.`,
        memory: "fillna = fill gaps 🔄"
      },
      {
        q: "What will happen? df.dropna()",
        hint: "Rows with NULL",
        options: ["Replace NULL", "Remove rows with NULL", "Sort data", "Nothing happens"],
        answer: "Remove rows with NULL",
        explanation: `dropna() deletes rows containing NULL values.\nBe careful — data loss can happen.`,
        memory: "dropna = delete ❌"
      },
      {
        q: "You have ' Pizza ' and 'pizza'. How to standardize?",
        hint: "Trim + case",
        options: ["filter()", "groupBy()", "trim() + lower()", "dropna()"],
        answer: "trim() + lower()",
        explanation: `trim() removes spaces\nlower() standardizes case\nThis ensures consistency.`,
        memory: "Trim + Lower = clean text ✂️"
      },
      {
        q: "Why is casting important?",
        hint: "Data types",
        options: ["For sorting only", "To convert data types correctly", "To remove duplicates", "To filter rows"],
        answer: "To convert data types correctly",
        explanation: `Wrong data types can break logic.\nExample:\nString "100" vs integer 100 → different behavior.`,
        memory: "cast = correct type 🔢"
      },
      {
        q: "Interview Trap: Best practice for NULL handling?",
        hint: "Think business logic",
        options: ["Always drop NULLs", "Always fill NULLs", "Depends on business logic", "Ignore NULLs"],
        answer: "Depends on business logic",
        explanation: `Correct answer:\n✔ Sometimes drop\n✔ Sometimes fill\n✔ Sometimes keep\nDecision depends on business requirement.`,
        memory: "NULL = decision ⚖️"
      }
    ],

    coding: {
      title: "Clean Customer Data",
      scenario: "Fix messy customer dataset",
      thinkingApproach: [
        "Step 1: Identify issues (NULL, spaces, case)",
        "Step 2: Handle NULL values",
        "Step 3: Trim spaces",
        "Step 4: Standardize case",
        "Step 5: Fix data types",
        "Step 6: Validate cleaned data"
      ],
      question: "Clean name column and handle NULL age values",
      input: `data = [\n  {"name": " Ankit ", "age": 25},\n  {"name": "RAHUL", "age": None},\n  {"name": "", "age": 30}\n]`,
      expectedOutput: `ankit,25\nrahul,0\nunknown,30`,
      solution: `data = [
  {"name": " Ankit ", "age": 25},
  {"name": "RAHUL", "age": None},
  {"name": "", "age": 30}
]

for row in data:
    name = row["name"].strip().lower()
    name = name if name else "unknown"
    age = row["age"] if row["age"] is not None else 0
    print(f"{name},{age}")`,
      note: "Cleaning is the first step in every ETL pipeline."
    },

    quiz: [
      { q: "dropna?", options: ["Delete NULL", "Fill NULL", "Sort", "None"], answer: 0 },
      { q: "fillna?", options: ["Fill NULL", "Delete", "Sort", "None"], answer: 0 },
      { q: "trim?", options: ["Space", "Case", "Type", "None"], answer: 0 },
      { q: "lower?", options: ["Case", "Sort", "Type", "None"], answer: 0 },
      { q: "cast?", options: ["Type", "Sort", "Delete", "None"], answer: 0 },
      { q: "important?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "first step?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "NULL?", options: ["Important", "Ignore", "None", "Loop"], answer: 0 },
      { q: "real data?", options: ["Dirty", "Clean", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "Data cleaning in PySpark involves handling null values, removing inconsistencies, and standardizing data formats to ensure accurate processing.
It is a critical step in ETL pipelines, as real-world data is often messy and directly impacts analytics and business decisions."
`,

    memory: `
👉 dropna = delete ❌  
👉 fillna = replace 🔄  
👉 trim = remove space ✂️  
👉 lower = fix case 🔤  
👉 cast = correct type 🔢  
👉 Clean data = correct insights ✅  
`,

    revision: "Data Cleaning = fix NULLs, formats, and inconsistencies for accurate results"
  },

  'pyspark-joins': {
    title: "Joins (Combining Distributed Data at Scale)",
    subtitle: "Combine DataFrames using common keys",
    icon: "🔀",
    difficulty: "Intermediate",
    duration: "~55 min",
    ready: true,

    comic: `
Imagine you're managing a company 👨‍💼  

You have 2 systems:

📘 Employee Table → name, id  
📗 Salary Table → id, salary  

😰 Problem  
You don't know which employee earns how much!

🤔 Solution  
Match both tables using employee ID  

✨ This is JOIN!

👉 Combine data from multiple tables  

💡 Aha Moment:
JOIN = Matching puzzle pieces 🧩
`,

    deepDive: `
👉 What is Join?
Join combines data from multiple DataFrames using a common column.

👉 Syntax:
df1.join(df2, on="id", how="inner")

👉 Types:
- inner
- left
- right
- full
- cross

👉 Example:
df_emp.join(df_sal, "id", "inner")

👉 Why it matters?
- Data is always distributed across tables  
- Needed for analytics and reporting  
- Core of ETL pipelines  

🔥 Performance Note (IMPORTANT):
Joins are EXPENSIVE in PySpark due to shuffling.

👉 Optimization:
- Broadcast Join (small table)  
- Partitioning  
- Avoid unnecessary joins  

🎯 Interview Line:
"Joins in PySpark are used to combine DataFrames based on a common key, and optimizing joins using techniques like broadcast joins is crucial for performance."
`,

    types: `
🎯 inner → only matching  
👈 left → all left + match  
👉 right → all right + match  
🌐 full → everything  
❌ cross → all combinations  

🔥 Most used: INNER & LEFT
`,

    qa: [
      {
        q: "You want only matching records from two DataFrames. Which join?",
        hint: "Think: common data only",
        options: ["left", "inner", "full", "cross"],
        answer: "inner",
        explanation: `Inner join returns only matching rows from both tables.\nNon-matching rows are excluded.`,
        memory: "INNER = only match 🎯"
      },
      {
        q: "You want ALL customers even if they have no orders. Which join?",
        hint: "Keep all from main table",
        options: ["inner", "left", "right", "cross"],
        answer: "left",
        explanation: `Left join keeps all records from left table.\nEven if no match → NULL values.`,
        memory: "LEFT = keep left 👈"
      },
      {
        q: "Why are joins expensive in PySpark?",
        hint: "Think distributed system",
        options: ["Because of syntax", "Because of shuffling data across nodes", "Because of memory only", "Because of filtering"],
        answer: "Because of shuffling data across nodes",
        explanation: `During joins, data is shuffled across cluster nodes.\nThis is expensive and impacts performance.`,
        memory: "Join = shuffle ⚡"
      },
      {
        q: "What is Broadcast Join?",
        hint: "Small table optimization",
        options: ["Join without condition", "Sending small table to all nodes", "Joining multiple tables", "Sorting before join"],
        answer: "Sending small table to all nodes",
        explanation: `Broadcast join sends small table to all executors.\nAvoids shuffle → much faster 🚀`,
        memory: "Small table → broadcast 📡"
      },
      {
        q: "What will happen? df1.join(df2) with no condition?",
        hint: "Check join condition",
        options: ["Works fine", "Error or Cartesian product", "Only left join", "Only inner join"],
        answer: "Error or Cartesian product",
        explanation: `Without join condition:\n- Can throw error\n- Or create cross join (huge data explosion)`,
        memory: "No condition = danger ❌"
      },
      {
        q: "Best join strategy for small + large table?",
        hint: "Think optimization",
        options: ["Normal join", "Broadcast join", "Cross join", "Full join"],
        answer: "Broadcast join",
        explanation: `Best practice:\n✔ Small table → broadcast\n✔ Large table → normal\nThis avoids shuffle and improves performance.`,
        memory: "Small → broadcast 🚀"
      }
    ],

    coding: {
      title: "Employee Salary Join",
      scenario: "Combine employee and salary data",
      thinkingApproach: [
        "Step 1: Identify tables",
        "Step 2: Find common key",
        "Step 3: Choose join type (left)",
        "Step 4: Apply join",
        "Step 5: Validate result",
        "Step 6: Optimize if needed"
      ],
      question: "Show employee name with salary (include all employees)",
      input: `employees = [{"id":1,"name":"Ankit"},{"id":2,"name":"Rahul"},{"id":3,"name":"Priya"}]\nsalary = [{"id":1,"salary":50000},{"id":2,"salary":60000}]`,
      expectedOutput: `Ankit,50000\nRahul,60000\nPriya,NULL`,
      solution: `employees = [{"id":1,"name":"Ankit"},{"id":2,"name":"Rahul"},{"id":3,"name":"Priya"}]
salary = [{"id":1,"salary":50000},{"id":2,"salary":60000}]

sal_map = {s["id"]: s["salary"] for s in salary}

for emp in employees:
    sal = sal_map.get(emp["id"], "NULL")
    print(f"{emp['name']},{sal}")`,
      note: "LEFT JOIN ensures all employees are included."
    },

    quiz: [
      { q: "Inner?", options: ["All", "Match", "None", "Loop"], answer: 1 },
      { q: "Left?", options: ["Left all", "Right all", "None", "Loop"], answer: 0 },
      { q: "Join cost?", options: ["Low", "High", "None", "Loop"], answer: 1 },
      { q: "Broadcast?", options: ["Small", "Large", "None", "Loop"], answer: 0 },
      { q: "Shuffle?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "Cross?", options: ["All combos", "Match", "None", "Loop"], answer: 0 },
      { q: "Condition?", options: ["Needed", "Not needed", "None", "Loop"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "Core?", options: ["Yes", "No", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "Joins in PySpark are used to combine DataFrames based on a common key, such as inner, left, right, and full joins.
Since joins involve data shuffling across nodes, optimizing them using techniques like broadcast joins is critical for performance in large-scale data processing."
`,

    memory: `
👉 INNER = match 🎯  
👉 LEFT = keep left 👈  
👉 RIGHT = keep right 👉  
👉 FULL = everything 🌐  
👉 Join = shuffle ⚡  
👉 Small table = broadcast 🚀  
`,

    revision: "Join = combine DataFrames using key, optimize with broadcast to avoid shuffle"
  },

  'pyspark-groupby': {
    title: "Aggregations & GroupBy (Turning Raw Data into Insights)",
    subtitle: "Group and aggregate data for analytics",
    icon: "📊",
    difficulty: "Intermediate",
    duration: "~50 min",
    ready: true,

    comic: `
Imagine you're running a supermarket 🛒  

You have thousands of sales records:
- Product  
- Price  
- Quantity  

😰 Problem  
You don't know:
- Total sales  
- Average price  
- Best-selling product  

🤔 Solution  
Group data and calculate metrics  

✨ This is Aggregation!

👉 Group + Calculate  

💡 Aha Moment:
Aggregation = Summary of data 📊
`,

    deepDive: `
👉 What is Aggregation?
Aggregation is the process of grouping data and applying functions like sum, count, avg.

👉 Syntax:
df.groupBy("column").agg()

👉 Common Functions:
- sum()
- count()
- avg()
- max()
- min()

👉 Example:
df.groupBy("product").sum("sales")

👉 Why it matters?
- Converts raw data into insights  
- Used in dashboards  
- Core of reporting  

👉 Real-world use:
- Total revenue per day  
- Customer count  
- Product performance  

🎯 Interview Line:
"Aggregations in PySpark are used to group data and compute summary statistics like sum, count, and average, which are essential for analytics and reporting."
`,

    types: `
📊 groupBy → grouping  
➕ sum → total  
🔢 count → count  
📉 avg → average  
📈 max/min → extremes  

🔥 Multiple aggregations possible
`,

    qa: [
      {
        q: "You want total sales per product. What should you use?",
        hint: "Group + sum",
        options: ["select()", "filter()", "groupBy().sum()", "withColumn()"],
        answer: "groupBy().sum()",
        explanation: `To calculate totals:\n✔ First group data\n✔ Then apply aggregation function\ngroupBy + sum = correct solution`,
        memory: "Group + Sum = Total 📊"
      },
      {
        q: "Which function gives average?",
        hint: "Mean value",
        options: ["count()", "avg()", "sum()", "max()"],
        answer: "avg()",
        explanation: `avg() calculates mean value.\nOthers serve different purposes.`,
        memory: "avg = average 📉"
      },
      {
        q: "Why is groupBy important?",
        hint: "Without grouping?",
        options: ["For filtering", "For column selection", "For aggregating by category", "For sorting"],
        answer: "For aggregating by category",
        explanation: `groupBy groups data into categories.\nThen aggregation functions are applied on each group.`,
        memory: "Group = category 📂"
      },
      {
        q: "What will happen? df.sum('sales') without groupBy?",
        hint: "Missing grouping",
        options: ["Works fine", "Error", "Aggregates whole dataset", "Returns NULL"],
        answer: "Aggregates whole dataset",
        explanation: `Without groupBy:\nAggregation applies to entire dataset.\nNo grouping = single result.`,
        memory: "No group = full data 📊"
      },
      {
        q: "How to calculate multiple aggregations?",
        hint: "Use agg()",
        options: ["df.groupBy('col').sum().avg()", "df.groupBy('col').agg({'sales':'sum','qty':'avg'})", "df.select().groupBy()", "df.filter().agg()"],
        answer: "df.groupBy('col').agg({'sales':'sum','qty':'avg'})",
        explanation: `agg() allows multiple aggregations.\nVery common in real pipelines.`,
        memory: "agg = multiple 📊"
      },
      {
        q: "Interview Trap: What is TRUE?",
        hint: "Think execution + performance",
        options: ["groupBy is an action", "Aggregation always fast", "groupBy causes shuffle", "Aggregation removes duplicates"],
        answer: "groupBy causes shuffle",
        explanation: `groupBy triggers shuffle in distributed systems.\nThis is expensive and needs optimization.`,
        memory: "GroupBy = shuffle ⚡"
      }
    ],

    coding: {
      title: "Sales Aggregation Analysis",
      scenario: "Calculate total sales per product",
      thinkingApproach: [
        "Step 1: Identify grouping column",
        "Step 2: Choose aggregation function",
        "Step 3: Apply groupBy",
        "Step 4: Apply aggregation",
        "Step 5: Validate result",
        "Step 6: Optimize if needed"
      ],
      question: "Find total sales per product",
      input: `data = [\n  {"product": "A", "sales": 100},\n  {"product": "A", "sales": 200},\n  {"product": "B", "sales": 150},\n  {"product": "B", "sales": 50}\n]`,
      expectedOutput: `A,300\nB,200`,
      solution: `data = [
  {"product": "A", "sales": 100},
  {"product": "A", "sales": 200},
  {"product": "B", "sales": 150},
  {"product": "B", "sales": 50}
]

totals = {}
for row in data:
    p = row["product"]
    totals[p] = totals.get(p, 0) + row["sales"]

for product, total in sorted(totals.items()):
    print(f"{product},{total}")`,
      note: "Aggregation is used in almost every reporting pipeline."
    },

    quiz: [
      { q: "groupBy?", options: ["Filter", "Group", "Sort", "None"], answer: 1 },
      { q: "sum?", options: ["Total", "Avg", "Count", "None"], answer: 0 },
      { q: "avg?", options: ["Mean", "Total", "Count", "None"], answer: 0 },
      { q: "count?", options: ["Rows", "Cols", "None", "Loop"], answer: 0 },
      { q: "agg?", options: ["Multi", "Single", "None", "Loop"], answer: 0 },
      { q: "shuffle?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "important?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "core?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "used?", options: ["Analytics", "UI", "Game", "None"], answer: 0 }
    ],

    interview: `
👉 "Aggregations in PySpark are used to group data using groupBy and compute summary metrics like sum, count, and average.
Since groupBy operations involve data shuffling, optimizing them is important for performance in large-scale data processing."
`,

    memory: `
👉 groupBy = group 📂  
👉 sum = total ➕  
👉 avg = mean 📉  
👉 count = rows 🔢  
👉 agg = multiple 📊  
👉 groupBy = shuffle ⚡  
`,

    revision: "Aggregation = group data and calculate metrics like sum, count, avg"
  },

  'pyspark-window': {
    title: "Window Functions (Advanced Analytics Without Losing Row-Level Data)",
    subtitle: "Ranking and analytics while keeping all rows",
    icon: "🪟",
    difficulty: "Advanced",
    duration: "~60 min",
    ready: true,

    comic: `
Imagine you're managing a cricket tournament 🏑  

You want:
✔ Rank players within each team  
✔ Compare player score with team average  
✔ Find top scorer per team  

😰 Problem  
If you use groupBy → you lose individual player data ❌  

🤔 Solution  
Use a window that:
- Groups data  
- BUT keeps all rows  

✨ This is Window Function!

👉 Group + Keep rows  

💡 Aha Moment:
Window = Grouping without collapsing data 📊
`,

    deepDive: `
👉 What is Window Function?
Window functions perform calculations across a group of rows while retaining individual rows.

👉 Key Concept:
Unlike groupBy:
- groupBy → reduces rows  
- window → keeps rows  

👉 Syntax:
from pyspark.sql.window import Window

windowSpec = Window.partitionBy("team").orderBy("score")

👉 Common Functions:
- row_number()
- rank()
- dense_rank()
- sum()
- avg()

👉 Example:
from pyspark.sql.functions import row_number

df.withColumn("rank", row_number().over(windowSpec))

👉 Why it matters?
- Advanced analytics  
- Ranking  
- Running totals  
- Comparisons  

👉 Real-world use:
- Top customers per region  
- Salary ranking  
- Fraud detection  
- Time-based trends  

🎯 Interview Line:
"Window functions allow performing calculations across partitions of data while retaining row-level details, unlike groupBy which aggregates and reduces rows."
`,

    types: `
🔢 row_number → unique rank  
🏆 rank → skip ranks on tie  
🎖 dense_rank → no gaps  
➕ sum → running total  
📉 avg → moving average  

⚙️ Components:
partitionBy → grouping  
orderBy → sorting  
`,

    qa: [
      {
        q: "Why use window functions instead of groupBy?",
        hint: "Think about row-level data",
        options: ["For faster execution", "To keep all rows while calculating", "To delete duplicates", "To reduce memory"],
        answer: "To keep all rows while calculating",
        explanation: `groupBy → aggregates and reduces rows ❌\nwindow → keeps all rows and adds calculations ✅\nThis is the key difference.`,
        memory: "Window = keep rows 📊"
      },
      {
        q: "Difference between rank() and dense_rank()?",
        hint: "Think about gaps",
        options: ["No difference", "rank skips numbers, dense_rank doesn't", "dense_rank skips numbers", "rank deletes duplicates"],
        answer: "rank skips numbers, dense_rank doesn't",
        explanation: `Example:\nScores: 100, 100, 90\n\nrank → 1, 1, 3\ndense_rank → 1, 1, 2\n\nrank skips, dense_rank doesn't.`,
        memory: "rank = gaps, dense = no gaps 🎯"
      },
      {
        q: "What does partitionBy() do?",
        hint: "Think grouping",
        options: ["Sorts data", "Filters data", "Groups data logically", "Deletes rows"],
        answer: "Groups data logically",
        explanation: `partitionBy defines group boundaries.\nAll calculations happen within each partition.`,
        memory: "partition = group 📂"
      },
      {
        q: "What will happen without orderBy()?",
        hint: "Ranking needs order",
        options: ["Works fine", "Random results", "Error", "Sorted output"],
        answer: "Random results",
        explanation: `Without orderBy:\nRanking functions don't know ordering.\nResults may be inconsistent.`,
        memory: "No order = random ❌"
      },
      {
        q: "Which function gives unique row numbers?",
        hint: "No duplicates",
        options: ["rank()", "dense_rank()", "row_number()", "sum()"],
        answer: "row_number()",
        explanation: `row_number assigns unique numbers.\nEven if values are same.`,
        memory: "row_number = unique 🔢"
      },
      {
        q: "Interview Trap: Window functions are?",
        hint: "Execution behavior",
        options: ["Actions", "Transformations", "Both", "None"],
        answer: "Transformations",
        explanation: `Window functions are transformations.\nThey follow lazy evaluation and need action to execute.`,
        memory: "Window = lazy 🧠"
      }
    ],

    coding: {
      title: "Rank Students by Marks per Class",
      scenario: "Assign rank within each class",
      thinkingApproach: [
        "Step 1: Identify grouping column (class)",
        "Step 2: Identify sorting column (marks)",
        "Step 3: Define window spec",
        "Step 4: Apply ranking function",
        "Step 5: Validate ranking",
        "Step 6: Handle ties"
      ],
      question: "Rank students within each class by marks (highest first)",
      input: `data = [\n  {"name":"A","cls":10,"marks":90},\n  {"name":"B","cls":10,"marks":85},\n  {"name":"C","cls":10,"marks":90},\n  {"name":"D","cls":9,"marks":80},\n  {"name":"E","cls":9,"marks":70}\n]`,
      expectedOutput: `A,10,90,1\nC,10,90,1\nB,10,85,3\nD,9,80,1\nE,9,70,2`,
      solution: `data = [
  {"name":"A","cls":10,"marks":90},
  {"name":"B","cls":10,"marks":85},
  {"name":"C","cls":10,"marks":90},
  {"name":"D","cls":9,"marks":80},
  {"name":"E","cls":9,"marks":70}
]

from collections import defaultdict

groups = defaultdict(list)
for row in data:
    groups[row["cls"]].append(row)

for cls in sorted(groups.keys(), reverse=True):
    rows = sorted(groups[cls], key=lambda x: -x["marks"])
    rank = 1
    for i, row in enumerate(rows):
        if i > 0 and row["marks"] < rows[i-1]["marks"]:
            rank = i + 1
        print(f"{row['name']},{row['cls']},{row['marks']},{rank}")`,
      note: "Window functions are essential for ranking and analytics."
    },

    quiz: [
      { q: "Window?", options: ["Reduce", "Keep rows", "Delete", "None"], answer: 1 },
      { q: "rank?", options: ["Gaps", "No gaps", "None", "Loop"], answer: 0 },
      { q: "dense_rank?", options: ["No gaps", "Gaps", "None", "Loop"], answer: 0 },
      { q: "row_number?", options: ["Unique", "Duplicate", "None", "Loop"], answer: 0 },
      { q: "partition?", options: ["Group", "Sort", "None", "Loop"], answer: 0 },
      { q: "order?", options: ["Sort", "Group", "None", "Loop"], answer: 0 },
      { q: "lazy?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "important?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "advanced?", options: ["Yes", "No", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "Window functions in PySpark are used to perform calculations across partitions of data while retaining individual rows.
They are commonly used for ranking, running totals, and advanced analytics, and differ from groupBy as they do not collapse data."
`,

    memory: `
👉 Window = keep rows 📊  
👉 rank = gaps 🎯  
👉 dense = no gaps 🔥  
👉 row_number = unique 🔢  
👉 partition = group 📂  
👉 order = sort 📈  
`,

    revision: "Window = group data but keep rows for advanced analytics like ranking"
  },

  'pyspark-partitioning-bucketing': {
    title: "Partitioning vs Bucketing (Optimizing Data Storage & Query Performance)",
    subtitle: "Optimize storage and query performance",
    icon: "📂",
    difficulty: "Advanced",
    duration: "~60 min",
    ready: true,

    comic: `
Imagine you're organizing a library 📚  

You have thousands of books  

😰 Problem  
Finding a book is slow  

🤔 Solution  

✔ Partitioning → Arrange books by category (Science, History)  
✔ Bucketing → Arrange books into numbered shelves  

✨ This is optimization!

💡 Aha Moment:
Partition = logical grouping 📂  
Bucket = fixed distribution 🔢
`,

    deepDive: `
👉 What is Partitioning?
Splitting data into folders based on column values.

Example:
data/year=2024/month=01/

👉 Syntax:
df.write.partitionBy("year").parquet("path")

👉 Benefits:
✔ Faster filtering  
✔ Less data scan  

---

👉 What is Bucketing?
Splitting data into fixed number of buckets using hash function.

👉 Syntax:
df.write.bucketBy(4, "id").saveAsTable("table")

👉 Benefits:
✔ Faster joins  
✔ Balanced data distribution  

---

👉 Key Difference:

Partitioning:
✔ Based on column values  
✔ Dynamic number of partitions  
✔ Good for filtering  

Bucketing:
✔ Fixed number of buckets  
✔ Based on hash  
✔ Good for joins  

👉 Why it matters?
- Improves query performance  
- Reduces data scan  
- Optimizes joins  

🎯 Interview Line:
"Partitioning divides data based on column values for efficient filtering, while bucketing distributes data into fixed buckets using hashing to optimize joins and performance."
`,

    types: `
📂 Partitioning → column-based  
🔢 Bucketing → hash-based  

🔥 Use partition for filtering  
🔥 Use bucket for joins  
`,

    qa: [
      {
        q: "What is partitioning in PySpark?",
        hint: "Think folders",
        options: ["Sorting data", "Splitting data into folders based on column", "Deleting data", "Joining data"],
        answer: "Splitting data into folders based on column",
        explanation: `Partitioning creates directory structure.\nHelps in faster data access.`,
        memory: "Partition = folders 📂"
      },
      {
        q: "When should you use partitioning?",
        hint: "Filtering",
        options: ["For joins", "For filtering large datasets", "For sorting", "For caching"],
        answer: "For filtering large datasets",
        explanation: `Partitioning reduces data scan.\nUsed when queries filter on column.`,
        memory: "Filter → partition 🔍"
      },
      {
        q: "What is bucketing?",
        hint: "Fixed buckets",
        options: ["Dynamic grouping", "Hash-based distribution into fixed buckets", "Sorting data", "Filtering data"],
        answer: "Hash-based distribution into fixed buckets",
        explanation: `Bucketing distributes data evenly using hash.\nImproves join performance.`,
        memory: "Bucket = fixed 🔢"
      },
      {
        q: "When should you use bucketing?",
        hint: "Joins",
        options: ["Filtering", "Sorting", "Join optimization", "Caching"],
        answer: "Join optimization",
        explanation: `Bucketing helps avoid shuffle in joins.\nVery useful for large datasets.`,
        memory: "Join → bucket 🔗"
      },
      {
        q: "Interview Trap: Why not partition by high cardinality column?",
        hint: "Too many folders",
        options: ["Faster", "Creates too many partitions", "Improves join", "Reduces memory"],
        answer: "Creates too many partitions",
        explanation: `High cardinality → too many small files.\nThis degrades performance.`,
        memory: "Too many = bad ❌"
      },
      {
        q: "Best practice?",
        hint: "Think use case",
        options: ["Always partition", "Always bucket", "Choose based on use case", "Avoid both"],
        answer: "Choose based on use case",
        explanation: `Correct approach:\n✔ Partition for filtering\n✔ Bucket for joins\nNo universal rule.`,
        memory: "Use case first 🧠"
      }
    ],

    coding: {
      title: "Optimize Data Storage",
      scenario: "Simulate partitioned data storage by year",
      thinkingApproach: [
        "Step 1: Identify query pattern",
        "Step 2: Choose partition column",
        "Step 3: Group data by partition",
        "Step 4: Simulate folder structure",
        "Step 5: Validate output",
        "Step 6: Apply bucketing concept"
      ],
      question: "Group sales data by year (simulate partitioning)",
      input: `data = [\n  {"year": 2024, "product": "A", "sales": 100},\n  {"year": 2024, "product": "B", "sales": 200},\n  {"year": 2023, "product": "A", "sales": 150}\n]`,
      expectedOutput: `year=2023: 1 records\nyear=2024: 2 records`,
      solution: `data = [
  {"year": 2024, "product": "A", "sales": 100},
  {"year": 2024, "product": "B", "sales": 200},
  {"year": 2023, "product": "A", "sales": 150}
]

from collections import defaultdict
partitions = defaultdict(list)
for row in data:
    partitions[row["year"]].append(row)

for year in sorted(partitions.keys()):
    print(f"year={year}: {len(partitions[year])} records")`,
      note: "Use bucketing when performing frequent joins on same column."
    },

    quiz: [
      { q: "Partition?", options: ["Folder", "Hash", "None", "Loop"], answer: 0 },
      { q: "Bucket?", options: ["Hash", "Folder", "None", "Loop"], answer: 0 },
      { q: "Filter?", options: ["Partition", "Bucket", "None", "Loop"], answer: 0 },
      { q: "Join?", options: ["Bucket", "Partition", "None", "Loop"], answer: 0 },
      { q: "High cardinality?", options: ["Bad", "Good", "None", "Loop"], answer: 0 },
      { q: "Fixed?", options: ["Bucket", "Partition", "None", "Loop"], answer: 0 },
      { q: "Dynamic?", options: ["Partition", "Bucket", "None", "Loop"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "Core?", options: ["Yes", "No", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "Partitioning in PySpark divides data based on column values into directory structures, improving query performance for filtering operations.
Bucketing distributes data into a fixed number of buckets using hashing, which helps optimize joins and reduce shuffle."
`,

    memory: `
👉 Partition = folder 📂  
👉 Bucket = hash 🔢  
👉 Filter = partition 🔍  
👉 Join = bucket 🔗  
👉 Too many partitions = bad ❌  
👉 Use case = key 🧠  
`,

    revision: "Partition = filter optimization, Bucket = join optimization"
  },

  'pyspark-optimization': {
    title: "Deduplication (Removing Duplicate Records in Data Pipelines)",
    subtitle: "Remove duplicates using smart window-based approach",
    icon: "🎟️",
    difficulty: "Advanced",
    duration: "~65 min",
    ready: true,

    comic: `
Imagine you're managing online orders 🛒  

Due to system issues:
Same order gets recorded multiple times 😰  

Example:
Order 101 appears 3 times  

😡 Problem  
Reports show wrong revenue (3x!)

🤔 Solution  
Keep only ONE correct record  

✨ This is Deduplication!

💡 Aha Moment:
Duplicate data = wrong business decisions ❌
`,

    deepDive: `
👉 What is Deduplication?
Deduplication is the process of removing duplicate records from data.

👉 Why duplicates occur?
- Data ingestion errors  
- Multiple data sources  
- System retries  
- Late-arriving data  

👉 Methods:
- dropDuplicates()
- Using window functions
- Using distinct()

👉 Example:
df.dropDuplicates(["id"])

👉 Advanced Approach (IMPORTANT):
Use window functions to:
✔ Keep latest record  
✔ Remove older duplicates  

👉 Why it matters?
- Prevents wrong analytics  
- Ensures data consistency  
- Critical for ETL pipelines  

🎯 Interview Line:
"Deduplication in PySpark is used to remove duplicate records using methods like dropDuplicates or window functions, often keeping the latest record based on business logic."
`,

    types: `
🧹 dropDuplicates → remove duplicates  
📊 distinct → full row uniqueness  
🧠 window → smart dedup (latest record)  

🔥 Best practice: use window for production
`,

    qa: [
      {
        q: "Why is deduplication important?",
        hint: "Think business impact",
        options: ["For faster execution", "To avoid duplicate records affecting analytics", "To reduce memory only", "To filter data"],
        answer: "To avoid duplicate records affecting analytics",
        explanation: `Duplicate records lead to:\n❌ Wrong revenue\n❌ Incorrect counts\nDeduplication ensures data accuracy.`,
        memory: "Duplicate = wrong results ❌"
      },
      {
        q: "Which function removes duplicate rows?",
        hint: "Direct method",
        options: ["filter()", "dropDuplicates()", "select()", "groupBy()"],
        answer: "dropDuplicates()",
        explanation: `dropDuplicates removes duplicate rows based on columns.\nMost commonly used method.`,
        memory: "dropDuplicates = clean 🧹"
      },
      {
        q: "What is limitation of dropDuplicates()?",
        hint: "Think control",
        options: ["Slow", "Cannot choose which record to keep", "Does not remove duplicates", "Only works on small data"],
        answer: "Cannot choose which record to keep",
        explanation: `dropDuplicates keeps arbitrary record.\nNo control over which record is retained.`,
        memory: "No control ❌"
      },
      {
        q: "Best way to keep latest record?",
        hint: "Advanced approach",
        options: ["distinct()", "dropDuplicates()", "window function", "select()"],
        answer: "window function",
        explanation: `Window functions allow:\n✔ Sorting\n✔ Ranking\n✔ Keeping latest record\nUsed in real production pipelines.`,
        memory: "Window = smart dedup 🧠"
      },
      {
        q: "What will happen? df.distinct()",
        hint: "Full row check",
        options: ["Remove duplicates based on one column", "Remove fully duplicate rows", "Sort data", "Filter data"],
        answer: "Remove fully duplicate rows",
        explanation: `distinct() removes exact duplicate rows.\nNot based on specific columns.`,
        memory: "distinct = full row 🔁"
      },
      {
        q: "Interview Trap: Best practice?",
        hint: "Production-level thinking",
        options: ["Always use dropDuplicates", "Always use distinct", "Use window function with business logic", "Ignore duplicates"],
        answer: "Use window function with business logic",
        explanation: `Correct approach:\n✔ Define business rule (latest, highest, etc.)\n✔ Use window function\n✔ Keep correct record\nThis is production-grade solution.`,
        memory: "Business logic first 🧠"
      }
    ],

    coding: {
      title: "Remove Duplicate Orders",
      scenario: "Keep latest order per customer",
      thinkingApproach: [
        "Step 1: Identify duplicate key",
        "Step 2: Identify sorting column (timestamp)",
        "Step 3: Group by customer",
        "Step 4: Sort by timestamp descending",
        "Step 5: Keep first record per group",
        "Step 6: Validate output"
      ],
      question: "Remove duplicates and keep latest record per customer",
      input: `data = [\n  {"customer_id":1,"order_id":101,"ts":"2024-01-02"},\n  {"customer_id":1,"order_id":101,"ts":"2024-01-01"},\n  {"customer_id":2,"order_id":102,"ts":"2024-01-01"}\n]`,
      expectedOutput: `1,101,2024-01-02\n2,102,2024-01-01`,
      solution: `data = [
  {"customer_id":1,"order_id":101,"ts":"2024-01-02"},
  {"customer_id":1,"order_id":101,"ts":"2024-01-01"},
  {"customer_id":2,"order_id":102,"ts":"2024-01-01"}
]

from collections import defaultdict

latest = {}
for row in data:
    cid = row["customer_id"]
    if cid not in latest or row["ts"] > latest[cid]["ts"]:
        latest[cid] = row

for row in sorted(latest.values(), key=lambda x: x["customer_id"]):
    print(f"{row['customer_id']},{row['order_id']},{row['ts']}")`,
      note: "Window-based deduplication is production standard."
    },

    quiz: [
      { q: "dropDuplicates?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "distinct?", options: ["Full row", "Partial", "None", "Loop"], answer: 0 },
      { q: "best method?", options: ["Window", "Drop", "None", "Loop"], answer: 0 },
      { q: "control?", options: ["No", "Yes", "None", "Loop"], answer: 0 },
      { q: "important?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "real data?", options: ["Duplicate", "Clean", "None", "Loop"], answer: 0 },
      { q: "pipeline?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "logic?", options: ["Needed", "Not", "None", "Loop"], answer: 0 },
      { q: "impact?", options: ["High", "Low", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "Deduplication in PySpark is used to remove duplicate records using functions like dropDuplicates or distinct, but in production, window functions are preferred to retain the correct record based on business logic such as latest timestamp."
`,

    memory: `
👉 dropDuplicates = simple 🧹  
👉 distinct = full row 🔁  
👉 window = smart 🧠  
👉 duplicate = wrong ❌  
👉 latest = correct ⏱️  
`,

    revision: "Deduplication = remove duplicates, use window for correct record selection"
  },

  'pyspark-partitioning': {
    title: "SCD Type 1 & Type 2 (Managing Historical Data in Data Warehousing)",
    subtitle: "Track dimension changes over time",
    icon: "🗂️",
    difficulty: "Advanced",
    duration: "~60 min",
    ready: true,

    comic: `
Imagine you're tracking customer addresses 🏠  

Customer changes address:
Old → Mumbai  
New → Pune  

😰 Problem  
Should you:
1️⃣ Replace old address?  
2️⃣ Keep history?

🤔 Solution  

✔ Type 1 → Replace old value  
✔ Type 2 → Keep history  

✨ This is SCD!

💡 Aha Moment:
Type 1 = overwrite ✏️  
Type 2 = history 📜
`,

    deepDive: `
👉 What is SCD?
Slowly Changing Dimensions (SCD) handle changes in dimension tables over time.

👉 Why needed?
Business data changes:
- Address  
- Salary  
- Status  

👉 Types:

🔹 Type 1:
- Overwrites old data  
- No history  

🔹 Type 2:
- Keeps history  
- Adds new row  
- Uses:
  ✔ start_date  
  ✔ end_date  
  ✔ is_active flag  

👉 Example:

Type 1:
Old → Mumbai  
New → Pune (overwrite)

Type 2:
Row 1 → Mumbai (inactive)  
Row 2 → Pune (active)

👉 Why it matters?
- Reporting accuracy  
- Historical tracking  
- Audit compliance  

🎯 Interview Line:
"SCD Type 1 overwrites existing data without maintaining history, while SCD Type 2 preserves historical changes by creating new records with effective dates."
`,

    types: `
✏️ Type 1 → overwrite (no history)  
📜 Type 2 → keep history (new rows)  

🔥 Type 2 = most important
`,

    qa: [
      {
        q: "What is SCD Type 1?",
        hint: "Think overwrite",
        options: ["Keep history", "Overwrite existing data", "Delete data", "Duplicate data"],
        answer: "Overwrite existing data",
        explanation: `Type 1 replaces old values.\nNo historical tracking is maintained.`,
        memory: "Type 1 = overwrite ✏️"
      },
      {
        q: "What is SCD Type 2?",
        hint: "Think history",
        options: ["Overwrite data", "Keep only latest", "Maintain history with new rows", "Delete old rows"],
        answer: "Maintain history with new rows",
        explanation: `Type 2:\n✔ Creates new record\n✔ Preserves history\n✔ Uses flags/dates`,
        memory: "Type 2 = history 📜"
      },
      {
        q: "Which columns are used in Type 2?",
        hint: "Tracking changes",
        options: ["Only id", "start_date, end_date, is_active", "Only name", "Only timestamp"],
        answer: "start_date, end_date, is_active",
        explanation: `These columns track:\n✔ Validity period\n✔ Active record`,
        memory: "Dates + flag 📅"
      },
      {
        q: "When should you use Type 1?",
        hint: "No need for history",
        options: ["Audit systems", "Temporary data", "When history is not required", "Financial data"],
        answer: "When history is not required",
        explanation: `Type 1 is used when:\n✔ Only latest value matters\n✔ No audit/history needed`,
        memory: "No history = Type 1 ❌📜"
      },
      {
        q: "When should you use Type 2?",
        hint: "Tracking changes",
        options: ["Temporary data", "When history is required", "For performance only", "For filtering"],
        answer: "When history is required",
        explanation: `Type 2 is used when:\n✔ Historical tracking is required\n✔ Auditing needed`,
        memory: "History = Type 2 📜"
      },
      {
        q: "Interview Trap: Why is Type 2 complex?",
        hint: "Think operations",
        options: ["More rows", "Insert + update logic", "Slow only", "Memory issue"],
        answer: "Insert + update logic",
        explanation: `Type 2 requires:\n✔ Expire old record\n✔ Insert new record\nThis makes logic complex.`,
        memory: "Expire + Insert 🔄"
      }
    ],

    coding: {
      title: "Implement SCD Type 2",
      scenario: "Track customer address changes",
      thinkingApproach: [
        "Step 1: Identify change in data",
        "Step 2: Match existing records",
        "Step 3: Expire old record (is_active=0)",
        "Step 4: Insert new record (is_active=1)",
        "Step 5: Maintain flags",
        "Step 6: Validate active records"
      ],
      question: "Implement SCD Type 2 logic for address change",
      input: `existing = [{"id":1,"name":"Ankit","city":"Mumbai","is_active":1}]\nnew_data = [{"id":1,"name":"Ankit","city":"Pune"}]`,
      expectedOutput: `1,Ankit,Mumbai,0\n1,Ankit,Pune,1`,
      solution: `existing = [{"id":1,"name":"Ankit","city":"Mumbai","is_active":1}]
new_data = [{"id":1,"name":"Ankit","city":"Pune"}]

new_ids = {r["id"] for r in new_data}

# Expire old records
result = []
for row in existing:
    if row["id"] in new_ids:
        row = dict(row)
        row["is_active"] = 0
    result.append(row)

# Insert new records
for row in new_data:
    result.append({**row, "is_active": 1})

for row in result:
    print(f"{row['id']},{row['name']},{row['city']},{row['is_active']}")`,
      note: "In real projects, SCD Type 2 is implemented using Delta Lake MERGE."
    },

    quiz: [
      { q: "Type 1?", options: ["Overwrite", "History", "Delete", "None"], answer: 0 },
      { q: "Type 2?", options: ["History", "Overwrite", "Delete", "None"], answer: 0 },
      { q: "Columns?", options: ["Dates", "Only id", "None", "Loop"], answer: 0 },
      { q: "Complex?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "Used?", options: ["DW", "UI", "Game", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "History?", options: ["Type2", "Type1", "None", "Loop"], answer: 0 },
      { q: "Overwrite?", options: ["Type1", "Type2", "None", "Loop"], answer: 0 },
      { q: "Core?", options: ["Yes", "No", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "SCD Type 1 overwrites existing data without maintaining history, while SCD Type 2 preserves historical changes by inserting new records and marking old ones inactive using flags or date ranges.
Type 2 is widely used in data warehousing for tracking changes over time."
`,

    memory: `
👉 Type 1 = overwrite ✏️  
👉 Type 2 = history 📜  
👉 Type 2 = insert + expire 🔄  
👉 No history = Type 1 ❌  
👉 Audit = Type 2 📊  
`,

    revision: "SCD Type 1 overwrites data, Type 2 preserves history using new rows"
  },

  'pyspark-etl': {
    title: "Incremental Load (Efficient Data Processing in ETL Pipelines)",
    subtitle: "Process only new or changed data",
    icon: "🏭",
    difficulty: "Advanced",
    duration: "~70 min",
    ready: true,

    comic: `
Imagine you're checking WhatsApp messages 📱  

Do you read ALL messages every time? ❌  

NO!  
You only read NEW messages ✅  

😰 Problem  
If you process full data daily:
- Slow  
- Expensive  
- Waste of resources  

🤔 Solution  
Process only NEW or CHANGED data  

✨ This is Incremental Load!

💡 Aha Moment:
Incremental = Only new data ⚡
`,

    deepDive: `
👉 What is Incremental Load?
Incremental load means processing only new or updated data instead of full dataset.

👉 Types:

🔹 Full Load:
- Loads all data every time ❌  

🔹 Incremental Load:
- Loads only new/changed data ✅  

👉 How to identify new data?

✔ Timestamp column (created_at, updated_at)  
✔ Primary key comparison  
✔ CDC (Change Data Capture)  

👉 Example:
Load data where updated_at > last_run_time

👉 Why it matters?
- Faster pipelines  
- Cost-efficient  
- Scalable  

👉 Real-world use:
- Daily sales update  
- Streaming pipelines  
- Data warehouse refresh  

🔥 Advanced:
- Upsert (insert + update)  
- Merge operations (Delta Lake)  

🎯 Interview Line:
"Incremental load processes only new or updated records based on timestamps or keys, improving performance and reducing cost compared to full loads."
`,

    types: `
📦 Full Load → all data  
⚡ Incremental → new data only  

🔥 Methods:
- Timestamp-based  
- Key-based  
- CDC (advanced)
`,

    qa: [
      {
        q: "What is incremental load?",
        hint: "Think new data only",
        options: ["Load all data", "Load only new or changed data", "Delete data", "Sort data"],
        answer: "Load only new or changed data",
        explanation: `Incremental load processes only new or updated records.\nThis improves performance and efficiency.`,
        memory: "Incremental = new data ⚡"
      },
      {
        q: "Why not use full load always?",
        hint: "Think performance",
        options: ["Too fast", "Too costly and slow", "Not possible", "Deletes data"],
        answer: "Too costly and slow",
        explanation: `Full load:\n❌ Processes entire dataset\n❌ Slow\n❌ Expensive\nIncremental is preferred.`,
        memory: "Full = heavy 🐘"
      },
      {
        q: "How to detect new records?",
        hint: "Tracking column",
        options: ["Sorting", "Timestamp column", "Grouping", "Filtering"],
        answer: "Timestamp column",
        explanation: `Common approach:\nUse timestamp like created_at or updated_at.\nFilter new records based on last run.`,
        memory: "Time = track ⏱️"
      },
      {
        q: "What is upsert?",
        hint: "Insert + update",
        options: ["Delete data", "Insert only", "Update only", "Insert + update"],
        answer: "Insert + update",
        explanation: `Upsert = insert new records + update existing ones.\nUsed in incremental pipelines.`,
        memory: "Upsert = update + insert 🔄"
      },
      {
        q: "Interview Trap: What is biggest challenge?",
        hint: "Think data correctness",
        options: ["Syntax", "Handling late-arriving data", "Sorting", "Filtering"],
        answer: "Handling late-arriving data",
        explanation: `Late data can break pipeline logic.\nNeeds proper handling (watermarking, reprocessing).`,
        memory: "Late data = danger ⚠️"
      },
      {
        q: "Best tool for incremental load in Databricks?",
        hint: "Think merge",
        options: ["select()", "filter()", "MERGE INTO (Delta)", "groupBy()"],
        answer: "MERGE INTO (Delta)",
        explanation: `Delta Lake provides MERGE for:\n✔ Insert\n✔ Update\n✔ Delete\nPerfect for incremental pipelines.`,
        memory: "Delta = merge 🚀"
      }
    ],

    coding: {
      title: "Incremental Load Using Timestamp",
      scenario: "Load only new records into target table",
      thinkingApproach: [
        "Step 1: Identify timestamp column",
        "Step 2: Get last processed time",
        "Step 3: Filter new records",
        "Step 4: Load filtered data",
        "Step 5: Update metadata",
        "Step 6: Handle edge cases"
      ],
      question: "Load only records with updated_at >= last_run_time",
      input: `data = [\n  {"id":1,"name":"A","updated_at":"2024-01-01"},\n  {"id":2,"name":"B","updated_at":"2024-01-02"},\n  {"id":3,"name":"C","updated_at":"2024-01-03"}\n]\nlast_run = "2024-01-02"`,
      expectedOutput: `2,B,2024-01-02\n3,C,2024-01-03`,
      solution: `data = [
  {"id":1,"name":"A","updated_at":"2024-01-01"},
  {"id":2,"name":"B","updated_at":"2024-01-02"},
  {"id":3,"name":"C","updated_at":"2024-01-03"}
]
last_run = "2024-01-02"

for row in data:
    if row["updated_at"] >= last_run:
        print(f"{row['id']},{row['name']},{row['updated_at']}")`,
      note: "In real projects, last_run_time is stored in metadata table."
    },

    quiz: [
      { q: "Incremental?", options: ["New data", "All data", "Delete", "None"], answer: 0 },
      { q: "Full load?", options: ["All", "New", "None", "Loop"], answer: 0 },
      { q: "Timestamp?", options: ["Track", "Delete", "None", "Loop"], answer: 0 },
      { q: "Upsert?", options: ["Insert+Update", "Delete", "None", "Loop"], answer: 0 },
      { q: "Late data?", options: ["Problem", "No issue", "None", "Loop"], answer: 0 },
      { q: "Delta?", options: ["Merge", "Select", "None", "Loop"], answer: 0 },
      { q: "Fast?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "Cost?", options: ["Low", "High", "None", "Loop"], answer: 0 },
      { q: "Used?", options: ["Everywhere", "Nowhere", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "Incremental load processes only new or updated data using techniques like timestamp filtering or primary key comparison.
It improves performance and reduces cost compared to full loads, and is commonly implemented using upsert or merge operations in modern data pipelines."
`,

    memory: `
👉 Incremental = new ⚡  
👉 Full load = all 🐘  
👉 Timestamp = track ⏱️  
👉 Upsert = insert + update 🔄  
👉 Late data = danger ⚠️  
👉 Delta = merge 🚀  
`,

    revision: "Incremental Load = process only new or changed data using timestamp or keys"
  },

  'pyspark-etl-pipeline': {
    title: "ETL Pipeline (End-to-End Data Processing in PySpark)",
    subtitle: "Build complete Extract, Transform, Load pipelines",
    icon: "🏭",
    difficulty: "Advanced",
    duration: "~70 min",
    ready: true,

    comic: `
Imagine you're running a food delivery company 🍕  

Orders come from:
- Website  
- Mobile app  
- Call center  

😰 Problem  
Data is:
- Messy  
- In different formats  
- Duplicate  

🤔 Solution  
Build a pipeline:

1️⃣ Extract → collect data  
2️⃣ Transform → clean & process  
3️⃣ Load → store in database  

✨ This is ETL Pipeline!

💡 Aha Moment:
ETL = Raw data → Clean insights 🚀
`,

    deepDive: `
👉 What is ETL?
ETL stands for Extract, Transform, Load.

👉 Steps:

🔹 Extract:
- Read data from sources (CSV, S3, DB)

🔹 Transform:
- Clean data  
- Apply business logic  
- Join, filter, aggregate  

🔹 Load:
- Save data to warehouse (S3, Redshift, Delta)

👉 Example Flow:
S3 → PySpark → Clean → Join → Aggregate → Store

👉 Why it matters?
- Backbone of data engineering  
- Used in every company  
- Converts raw data into usable data  

👉 Real-world use:
- Daily sales pipeline  
- Customer analytics  
- Fraud detection  

🔥 Tools used:
- PySpark  
- AWS Glue  
- Databricks  
- Airflow  

🎯 Interview Line:
"An ETL pipeline extracts data from various sources, transforms it using business logic, and loads it into a target system for analytics and reporting."
`,

    types: `
📥 Extract → read data  
🔄 Transform → process data  
📤 Load → store data  

🔥 Types:
- Batch ETL  
- Real-time ETL (Streaming)
`,

    qa: [
      {
        q: "What is the first step in ETL?",
        hint: "Data source",
        options: ["Transform", "Load", "Extract", "Validate"],
        answer: "Extract",
        explanation: `ETL starts with extracting data from source systems.\nWithout data → no processing.`,
        memory: "E = Extract first 📥"
      },
      {
        q: "What happens in Transform step?",
        hint: "Processing",
        options: ["Store data", "Clean and process data", "Delete data", "Visualize data"],
        answer: "Clean and process data",
        explanation: `Transform step includes:\n✔ Cleaning\n✔ Joining\n✔ Aggregation\n✔ Business logic`,
        memory: "T = Transform 🔄"
      },
      {
        q: "Where is data stored in Load step?",
        hint: "Target system",
        options: ["Source system", "Temporary memory", "Data warehouse", "Logs"],
        answer: "Data warehouse",
        explanation: `Load step stores processed data into:\n✔ S3\n✔ Redshift\n✔ Delta tables`,
        memory: "L = Load 📤"
      },
      {
        q: "Why is ETL important?",
        hint: "Business impact",
        options: ["For UI design", "To convert raw data into usable insights", "For gaming", "For testing"],
        answer: "To convert raw data into usable insights",
        explanation: `ETL converts messy raw data into structured, usable data.\nThis drives business decisions.`,
        memory: "ETL = value 🚀"
      },
      {
        q: "Batch vs Real-time ETL?",
        hint: "Time difference",
        options: ["No difference", "Batch = periodic, Real-time = continuous", "Batch = fast", "Real-time = slow"],
        answer: "Batch = periodic, Real-time = continuous",
        explanation: `Batch → runs on schedule\nReal-time → processes continuously\nBoth are used based on use case.`,
        memory: "Batch = delay ⏳, Stream = instant ⚡"
      },
      {
        q: "Interview Trap: Most critical part of ETL?",
        hint: "Think complexity",
        options: ["Extract", "Transform", "Load", "All equal"],
        answer: "Transform",
        explanation: `Transform step is most complex:\n✔ Cleaning\n✔ Business rules\n✔ Joins\n✔ Aggregations\nThis defines data quality.`,
        memory: "Transform = brain 🧠"
      }
    ],

    coding: {
      title: "Build Simple ETL Pipeline",
      scenario: "Process sales data and calculate totals per product",
      thinkingApproach: [
        "Step 1: Extract data from source",
        "Step 2: Clean data (remove nulls)",
        "Step 3: Transform (filter, aggregate)",
        "Step 4: Validate output",
        "Step 5: Load into target",
        "Step 6: Monitor pipeline"
      ],
      question: "Create ETL pipeline to calculate total sales per product",
      input: `data = [\n  {"product": "A", "sales": 100},\n  {"product": "A", "sales": 200},\n  {"product": "B", "sales": 150},\n  {"product": "B", "sales": 50}\n]`,
      expectedOutput: `A,300\nB,200`,
      solution: `# ETL Pipeline
data = [
  {"product": "A", "sales": 100},
  {"product": "A", "sales": 200},
  {"product": "B", "sales": 150},
  {"product": "B", "sales": 50}
]

# Extract + Transform
totals = {}
for row in data:
    if row["sales"] is not None:  # clean
        p = row["product"]
        totals[p] = totals.get(p, 0) + row["sales"]

# Load (output)
for product, total in sorted(totals.items()):
    print(f"{product},{total}")`,
      note: "Real pipelines include scheduling, monitoring, and error handling."
    },

    quiz: [
      { q: "E?", options: ["Extract", "Load", "Transform", "None"], answer: 0 },
      { q: "T?", options: ["Transform", "Extract", "Load", "None"], answer: 0 },
      { q: "L?", options: ["Load", "Extract", "Transform", "None"], answer: 0 },
      { q: "important?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "transform?", options: ["Brain", "UI", "Game", "None"], answer: 0 },
      { q: "batch?", options: ["Scheduled", "Live", "None", "Loop"], answer: 0 },
      { q: "stream?", options: ["Live", "Batch", "None", "Loop"], answer: 0 },
      { q: "core?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "used?", options: ["Everywhere", "Nowhere", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "An ETL pipeline involves extracting data from source systems, transforming it using business logic and data cleaning techniques, and loading it into a target system such as a data warehouse.
The transformation phase is the most critical as it ensures data quality and usability for analytics."
`,

    memory: `
👉 E = Extract 📥  
👉 T = Transform 🔄  
👉 L = Load 📤  
👉 Transform = brain 🧠  
👉 ETL = value 🚀  
👉 Batch = schedule ⏳  
👉 Stream = real-time ⚡  
`,

    revision: "ETL = extract raw data, transform it, and load into system for analytics"
  },

  'pyspark-performance': {
    title: "Performance Optimization (Making PySpark Jobs Fast & Efficient)",
    subtitle: "Reduce shuffle, broadcast joins, cache and partition",
    icon: "🚀",
    difficulty: "Advanced",
    duration: "~65 min",
    ready: true,

    comic: `
Imagine you're delivering food 🚚  

You send ONE delivery boy for 100 orders 😰  

Result:
❌ Slow delivery  
❌ Angry customers  

🤔 Solution:
Send multiple delivery boys in parallel  

✨ This is Optimization!

👉 Use resources efficiently  

💡 Aha Moment:
Optimization = Do same work faster ⚡
`,

    deepDive: `
👉 What is Performance Optimization?
Improving speed and efficiency of Spark jobs by reducing unnecessary computation and data movement.

👉 Why slow happens?
- Data shuffling  
- Too many partitions  
- Large joins  
- Unoptimized queries  

👉 Key Techniques:

🔹 1. Reduce Shuffling
- Avoid unnecessary groupBy/join  
- Use partition wisely  

🔹 2. Broadcast Join
- Use for small tables  
- Avoid shuffle  

from pyspark.sql.functions import broadcast  
df1.join(broadcast(df2), "id")

🔹 3. Caching
- Store intermediate results  

df.cache()

🔹 4. Repartition / Coalesce
- Control partitions  

df.repartition(10)  
df.coalesce(2)

🔹 5. Filter Early
- Reduce data size before heavy operations  

🔹 6. Column Pruning
- Select only required columns  

👉 Why it matters?
- Faster jobs  
- Lower cost  
- Better scalability  

🎯 Interview Line:
"PySpark performance optimization involves reducing shuffles, optimizing joins using broadcast, managing partitions, and applying transformations efficiently to improve execution speed."
`,

    types: `
⚡ Broadcast Join → avoid shuffle  
📦 Partitioning → control data  
💾 Cache → reuse data  
🔍 Filter early → reduce size  
📉 Column pruning → select needed  

🔥 Biggest enemy = shuffle
`,

    qa: [
      {
        q: "What is the biggest performance issue in PySpark?",
        hint: "Data movement",
        options: ["Filtering", "Shuffling", "Sorting", "Selecting"],
        answer: "Shuffling",
        explanation: `Shuffling moves data across nodes.\nThis is:\n❌ Expensive\n❌ Slow\nMain performance bottleneck.`,
        memory: "Shuffle = slow ⚡❌"
      },
      {
        q: "When should you use broadcast join?",
        hint: "Table size",
        options: ["Both large tables", "Small + large table", "Only large tables", "No join"],
        answer: "Small + large table",
        explanation: `Broadcast small table to all nodes.\nAvoids shuffle → faster execution.`,
        memory: "Small → broadcast 📡"
      },
      {
        q: "What does cache() do?",
        hint: "Reuse data",
        options: ["Delete data", "Store intermediate result in memory", "Sort data", "Filter data"],
        answer: "Store intermediate result in memory",
        explanation: `cache() avoids recomputation.\nUsed when same DataFrame is reused.`,
        memory: "Cache = reuse 💾"
      },
      {
        q: "Difference between repartition and coalesce?",
        hint: "Shuffle vs no shuffle",
        options: ["Same", "repartition = shuffle, coalesce = no shuffle", "coalesce = shuffle", "Both avoid shuffle"],
        answer: "repartition = shuffle, coalesce = no shuffle",
        explanation: `repartition → full shuffle\ncoalesce → reduce partitions without shuffle\nUsed for optimization.`,
        memory: "Repartition = heavy 🔄"
      },
      {
        q: "Why filter early?",
        hint: "Data size",
        options: ["For syntax", "To reduce data before heavy operations", "To delete all data", "To join data"],
        answer: "To reduce data before heavy operations",
        explanation: `Filtering early reduces:\n✔ Data size\n✔ Processing time\nAlways good practice.`,
        memory: "Filter early = fast 🚀"
      },
      {
        q: "Interview Trap: Best optimization strategy?",
        hint: "Think logic first",
        options: ["Always cache", "Always repartition", "Understand data and optimize accordingly", "Use more memory"],
        answer: "Understand data and optimize accordingly",
        explanation: `Correct approach:\n✔ Analyze data\n✔ Identify bottlenecks\n✔ Apply correct technique\nNo one-size-fits-all solution.`,
        memory: "Think first 🧠"
      }
    ],

    coding: {
      title: "Optimize Join Operation",
      scenario: "Improve join performance using broadcast",
      thinkingApproach: [
        "Step 1: Identify join operation",
        "Step 2: Check table sizes",
        "Step 3: Apply broadcast for small table",
        "Step 4: Filter early to reduce data",
        "Step 5: Select only needed columns",
        "Step 6: Validate performance"
      ],
      question: "Simulate optimized join — filter early and select only needed columns",
      input: `large = [{"id":i,"name":f"user{i}","extra":"x"} for i in range(1,6)]\nsmall = [{"id":1,"role":"admin"},{"id":3,"role":"user"}]`,
      expectedOutput: `user1,admin\nuser3,user`,
      solution: `large = [{"id":i,"name":f"user{i}","extra":"x"} for i in range(1,6)]
small = [{"id":1,"role":"admin"},{"id":3,"role":"user"}]

# Broadcast small table (simulate)
small_map = {r["id"]: r["role"] for r in small}

# Filter early + column pruning
for row in large:
    if row["id"] in small_map:
        print(f"{row['name']},{small_map[row['id']]}")`,
      note: "Broadcast join is one of the most powerful optimizations."
    },

    quiz: [
      { q: "Shuffle?", options: ["Slow", "Fast", "None", "Loop"], answer: 0 },
      { q: "Broadcast?", options: ["Small", "Large", "None", "Loop"], answer: 0 },
      { q: "Cache?", options: ["Reuse", "Delete", "None", "Loop"], answer: 0 },
      { q: "Repartition?", options: ["Shuffle", "No", "None", "Loop"], answer: 0 },
      { q: "Coalesce?", options: ["No shuffle", "Shuffle", "None", "Loop"], answer: 0 },
      { q: "Filter?", options: ["Early", "Late", "None", "Loop"], answer: 0 },
      { q: "Optimize?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "None", "Loop"], answer: 0 },
      { q: "Core?", options: ["Yes", "No", "None", "Loop"], answer: 0 }
    ],

    interview: `
👉 "PySpark performance optimization focuses on reducing data shuffling, optimizing joins using broadcast, managing partitions effectively, and applying transformations efficiently.
Understanding data distribution and applying the right strategy is key to improving performance."
`,

    memory: `
👉 Shuffle = slow ⚡  
👉 Broadcast = fast 📡  
👉 Cache = reuse 💾  
👉 Repartition = heavy 🔄  
👉 Coalesce = light ⚡  
👉 Filter early = fast 🚀  
👉 Think first = best 🧠  
`,

    revision: "Optimization = reduce shuffle, use broadcast, manage partitions, and process data efficiently"
  }

};
