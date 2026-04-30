// SQL Topics Content
const sqlContent = {
  "database-basics": {
    title: "Database Basics (Foundation)",
    icon: "🗄️",
    difficulty: "Foundation",
    duration: "45 min",
    description: "What is Database, DBMS vs RDBMS, Tables, Rows, Columns, Keys, Constraints",
    
    comic: "🏢 Imagine Amazon storing customer data:\n\n📁 Old Way (Excel Files):\n- customers_final.xlsx\n- orders_latest_v2.xlsx\n- payment_updated_final_final.xlsx\n\n😰 Problems:\n❌ Duplicate records (Ankit appears 3 times!)\n❌ Hard to search (Ctrl+F in 100 files?)\n❌ No relationships (Which order belongs to which customer?)\n❌ Security issues (Anyone can open Excel!)\n❌ Manual updates (Copy-paste nightmare!)\n\n🗄️ Database Solution:\n✅ One organized system\n✅ Fast search (Find Ankit in milliseconds!)\n✅ Proper relationships (Orders linked to customers)\n✅ Security & access control (Only authorized users)\n✅ Automatic updates (No manual work!)\n\n🏠 House Analogy:\nDatabase = Building 🏢\nTables = Rooms 🚪\nRows = People 👥\nColumns = Details (Name, Age, City) 📋\nPrimary Key = Aadhaar Number 🔑\nForeign Key = Family Relations 👨👩👧\nConstraints = Security Guard 💂\n\n💡 Aha Moment:\nDatabase = Organized digital filing system!\nNo more Excel chaos! 🎯",

    deepDive: "👉 What is a Database?\nA database is an organized collection of structured data stored electronically for efficient storage, retrieval, and management.\n\n👉 Why it matters?\nIn real companies:\n- Amazon: 300 million customers, billions of orders\n- Netflix: User profiles, viewing history, recommendations\n- Banking: Accounts, transactions, loans\n- HR Systems: Employees, salaries, attendance\n\n👉 DBMS vs RDBMS:\n\nDBMS (Database Management System):\n- Basic data storage software\n- File-based or hierarchical\n- Weak or no relationships\n- Limited query capabilities\n- Examples: File systems, XML databases\n\nRDBMS (Relational Database Management System):\n- Advanced database system\n- Data stored in related tables\n- Strong relationships using keys\n- Powerful SQL query language\n- Examples: MySQL, PostgreSQL, Oracle, SQL Server\n\n👉 Key Database Components:\n\n1. Tables: Organized structure to store data (like Excel sheets but more powerful)\n2. Rows (Records): Individual data entries\n3. Columns (Fields/Attributes): Properties of data\n4. Primary Key: Unique identifier for each row (must be UNIQUE, cannot be NULL)\n5. Foreign Key: Creates relationships between tables\n6. Constraints: Rules to ensure data quality (NOT NULL, UNIQUE, CHECK, DEFAULT)\n\n👉 Real Company Examples:\nAmazon Database Structure:\n- customers table: customer_id (PK), name, email, city\n- orders table: order_id (PK), customer_id (FK), order_date, amount\n- products table: product_id (PK), name, price, category\n- payments table: payment_id (PK), order_id (FK), amount, status",

    types: "🗄️ Database Components:\n\n1️⃣ Database\n👉 Objective: Store and manage data efficiently\n👉 Problem: Excel files become unmanageable with large data\n👉 Analogy: Library building that organizes books\n👉 Real Example: Amazon database storing millions of customers\n\n2️⃣ DBMS vs RDBMS\n👉 DBMS: Basic data storage, weak relationships\n👉 RDBMS: Table-based storage, strong relationships (keys), powerful SQL queries\n👉 Examples: MySQL, PostgreSQL, Oracle\n\n3️⃣ Tables\n👉 Objective: Organize related data\n👉 Structure: Rows + Columns\n👉 Example: Customers Table with customer_id, name, email, city\n\n4️⃣ Rows (Records)\n👉 Objective: Represent individual entries\n👉 Example: One customer's complete information\n\n5️⃣ Columns (Fields/Attributes)\n👉 Objective: Define data properties\n👉 Examples: name, email, phone, salary, department\n👉 Data Types: INT, VARCHAR, DATE, DECIMAL, BOOLEAN\n\n6️⃣ Primary Key\n👉 Objective: Uniquely identify each row\n👉 Rules: Must be UNIQUE, Cannot be NULL, One per table\n👉 Examples: customer_id, order_id, employee_id\n👉 Analogy: Aadhaar number - unique for each citizen\n\n7️⃣ Foreign Key\n👉 Objective: Create relationships between tables\n👉 How it works: References primary key of another table\n👉 Example: customer_id in orders table links to customers table\n\n8️⃣ Constraints\n👉 Objective: Enforce data quality rules\n👉 Types:\n- NOT NULL: Column must have value\n- UNIQUE: No duplicate values allowed\n- PRIMARY KEY: UNIQUE + NOT NULL\n- FOREIGN KEY: Links tables together\n- CHECK: Custom validation rule\n- DEFAULT: Set default value if not provided",

    qa: [
      {
        q: "What is the difference between DBMS and RDBMS?",
        hint: "Think about relationships",
        answer: "RDBMS has relationships between tables using keys, DBMS doesn't",
        explanation: "RDBMS (Relational DBMS) stores data in tables with relationships using primary and foreign keys. DBMS is a general term for any database management system without necessarily having relational capabilities.",
        memory: "RDBMS = Tables + Relationships 🔗"
      },
      {
        q: "What is a Primary Key?",
        hint: "Think about unique identification",
        answer: "Unique identifier for each row that cannot be NULL",
        explanation: "Primary key uniquely identifies each row in a table. It must be unique and cannot be NULL. Examples: customer_id, order_id, employee_id.",
        memory: "Primary Key = Unique ID 🔑 (like Aadhaar)"
      },
      {
        q: "What is a Foreign Key?",
        hint: "Think about table relationships",
        answer: "Links tables by referencing primary key of another table",
        explanation: "Foreign key creates relationships between tables by referencing the primary key of another table. Example: customer_id in orders table references customers table.",
        memory: "Foreign Key = Table Link 🔗 (family relations)"
      },
      {
        q: "Can a table have multiple primary keys?",
        hint: "Think about uniqueness",
        answer: "No, only one primary key per table",
        explanation: "A table can have only one primary key. However, the primary key can be composite (made up of multiple columns combined).",
        memory: "One table = One primary key 🔑"
      },
      {
        q: "What does NOT NULL constraint do?",
        hint: "Think about mandatory fields",
        answer: "Ensures column must have a value",
        explanation: "NOT NULL constraint ensures that a column cannot have NULL (empty) values. It makes the field mandatory.",
        memory: "NOT NULL = Mandatory field ✅"
      },
      {
        q: "What is the purpose of UNIQUE constraint?",
        hint: "Think about duplicates",
        answer: "Prevents duplicate values in column",
        explanation: "UNIQUE constraint ensures that all values in a column are different. No two rows can have the same value in that column. Example: email addresses.",
        memory: "UNIQUE = No duplicates ❌"
      }
    ],

    coding: {
      title: "Database Design Challenge",
      scenario: "You're designing a simple e-commerce database structure with customers, orders, and products tables.",
      questions: [
        {
          q: "1. Create a customers table with customer_id (primary key), name, email (unique), and city",
          answer: "CREATE TABLE customers (customer_id INT PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(100) UNIQUE NOT NULL, city VARCHAR(50));"
        },
        {
          q: "2. Create an orders table with order_id (primary key), customer_id (foreign key), order_date, and amount",
          answer: "CREATE TABLE orders (order_id INT PRIMARY KEY, customer_id INT NOT NULL, order_date DATE NOT NULL, amount DECIMAL(10,2) NOT NULL, FOREIGN KEY (customer_id) REFERENCES customers(customer_id));"
        },
        {
          q: "3. Create a products table with product_id (primary key), name, price (must be positive), and stock quantity",
          answer: "CREATE TABLE products (product_id INT PRIMARY KEY, name VARCHAR(100) NOT NULL, price DECIMAL(10,2) CHECK (price > 0), stock_quantity INT DEFAULT 0);"
        },
        {
          q: "4. Add a status column to orders table with default value 'pending'",
          answer: "ALTER TABLE orders ADD COLUMN status VARCHAR(20) DEFAULT 'pending';"
        }
      ]
    },

    quiz: [
      { q: "Database is?", options: ["Excel file", "Organized collection of structured data", "Text file", "Image"], answer: 1 },
      { q: "RDBMS has?", options: ["No structure", "Tables with relationships using keys", "Only files", "No queries"], answer: 1 },
      { q: "Primary key must be?", options: ["Duplicate", "Unique and NOT NULL", "NULL", "Text only"], answer: 1 },
      { q: "Foreign key does?", options: ["Nothing", "Links tables together", "Deletes data", "Sorts data"], answer: 1 },
      { q: "Table contains?", options: ["Only text", "Rows and columns", "Only numbers", "Images"], answer: 1 },
      { q: "NOT NULL means?", options: ["Can be empty", "Must have value", "Can be duplicate", "Must be unique"], answer: 1 },
      { q: "UNIQUE constraint?", options: ["Allows duplicates", "Prevents duplicates", "Creates key", "Links tables"], answer: 1 },
      { q: "One table can have?", options: ["Multiple primary keys", "Only one primary key", "No primary key", "Unlimited keys"], answer: 1 }
    ],

    interview: "A database is an organized collection of structured data stored electronically. RDBMS (Relational Database Management System) stores data in tables with relationships using keys, unlike basic DBMS. Key components include tables (structure with rows and columns), rows (individual records), columns (attributes), primary key (unique identifier that must be unique and not null), foreign key (creates relationships by referencing primary key of another table), and constraints (rules like NOT NULL, UNIQUE, CHECK, DEFAULT to maintain data integrity). Real-world examples include Amazon's customer-order-product database structure where foreign keys link orders to customers and products. Primary key is like Aadhaar number - unique for each record, while foreign key is like family relations - connecting related data across tables.",

    memory: "👉 Database = Organized data storage 🗄️\n👉 RDBMS = Tables + Relationships 🔗\n👉 Table = Rows + Columns 📋\n👉 Primary Key = Unique ID 🔑 (Aadhaar)\n👉 Foreign Key = Table Link 🔗 (Family)\n👉 Constraints = Data Rules 💂\n\nDatabase House:\nDatabase = Building 🏢\nTables = Rooms 🚪\nRows = People 👥\nColumns = Details 📋\nPrimary Key = Aadhaar 🔑\nForeign Key = Relations 👨👩👧\nConstraints = Security 💂",

    revision: "Database Basics: RDBMS (tables with relationships), Primary Key (unique identifier), Foreign Key (table links), Constraints (NOT NULL, UNIQUE, CHECK, DEFAULT) - foundation for SQL"
  },

  "sql-basic-queries": {
    title: "SQL Basic Queries",
    icon: "🔍",
    difficulty: "Foundation",
    duration: "60 min",
    description: "SELECT, WHERE, DISTINCT, ORDER BY, LIMIT, Aliases - fundamental data retrieval",
    
    comic: `🔍 Imagine you're searching in a library:

📚 Without SQL:
- Manually check each book
- Write down details on paper
- Sort manually
- Takes hours!

✨ With SQL:
- SELECT: Show me books
- WHERE: Only fiction books
- ORDER BY: Sort by author name
- LIMIT: Show first 10 only
- Result: Instant!

🏢 Real Business Example:
Manager: Show me all customers from Mumbai who spent more than ₹50,000, sorted by spending

Without SQL: Manual Excel work for hours
With SQL: One query, instant results!

💡 Aha Moment:
SQL = Asking database questions in structured way 🔍
SELECT = What to show
WHERE = Filter conditions
ORDER BY = Sort results`,

    deepDive: `👉 What are SQL Basic Queries?
SQL queries retrieve data from databases using structured commands. Basic queries form the foundation of all SQL operations.

👉 Core Commands:

1. SELECT: Choose columns to display
2. FROM: Specify table
3. WHERE: Filter rows
4. DISTINCT: Remove duplicates
5. ORDER BY: Sort results
6. LIMIT: Restrict number of rows
7. AS: Create aliases

👉 Real-world Usage:
- E-commerce: Find products in specific category
- Banking: Get transactions for specific account
- HR: List employees in specific department
- Analytics: Extract data for reports

👉 Query Execution Order:
1. FROM - Choose table
2. WHERE - Filter rows
3. SELECT - Choose columns
4. DISTINCT - Remove duplicates
5. ORDER BY - Sort results
6. LIMIT - Restrict output

👉 Common Mistakes:
- Using SELECT * (fetches all columns unnecessarily)
- Forgetting WHERE clause (returns all rows)
- Wrong ORDER BY direction (ASC vs DESC)
- Not using LIMIT (returns millions of rows)`,

    types: `🔍 SQL Basic Query Components:

1️⃣ SELECT
👉 Objective: Retrieve data from table
👉 Problem: Without SELECT, cannot fetch data
👉 Analogy: Shopping search - like searching products on Amazon
👉 Syntax:
- SELECT * FROM employees; (all columns)
- SELECT name, salary FROM employees; (specific columns)
👉 Real Use: Fetching customer data for reports
👉 Common Mistakes: Using SELECT * unnecessarily
👉 Best Practice: Always select only needed columns

2️⃣ WHERE
👉 Objective: Filter required records
👉 Problem: Sometimes we don't need all records
👉 Analogy: Netflix filter - showing only action movies
👉 Syntax: SELECT * FROM employees WHERE salary > 50000;
👉 Examples:
- WHERE department='IT'
- WHERE salary > 50000
- WHERE city='Mumbai'
👉 Real Use: Finding high-value customers
👉 Operators: =, !=, >, <, >=, <=, AND, OR, NOT

3️⃣ DISTINCT
👉 Objective: Remove duplicate values
👉 Problem: Duplicate values create repeated output
👉 Analogy: Duplicate contacts - removing repeated phone numbers
👉 Syntax: SELECT DISTINCT department FROM employees;
👉 Real Use: Finding unique cities of customers
👉 Example: SELECT DISTINCT city FROM customers;

4️⃣ ORDER BY
👉 Objective: Sort query results
👉 Problem: Data may be messy and unsorted
👉 Analogy: Leaderboard ranking - sorting students by marks
👉 Syntax:
- SELECT * FROM employees ORDER BY salary DESC; (descending)
- SELECT * FROM employees ORDER BY salary ASC; (ascending)
👉 Examples:
- ORDER BY salary DESC (highest first)
- ORDER BY joining_date ASC (oldest first)
👉 Real Use: Showing top paid employees
👉 Default: ASC (ascending)

5️⃣ LIMIT / TOP
👉 Objective: Retrieve limited records
👉 Problem: Sometimes we need only few records
👉 Analogy: Top 10 search results - Google showing first few results
👉 Syntax:
- MySQL/PostgreSQL: SELECT * FROM employees LIMIT 5;
- SQL Server: SELECT TOP 5 * FROM employees;
👉 Real Use: Fetching top 10 customers
👉 Common Use: Pagination in web applications

6️⃣ Aliases (AS)
👉 Objective: Rename columns or tables temporarily
👉 Problem: Long column names reduce readability
👉 Analogy: Nickname - giving short names to people
👉 Syntax:
- SELECT salary AS employee_salary FROM employees;
- SELECT name AS employee_name FROM employees;
👉 Real Use: Used heavily in joins and reporting queries
👉 Makes output more readable`,

    qa: [
      {
        q: "What does SELECT do?",
        hint: "Think about choosing data",
        answer: "Retrieves data from database",
        explanation: "SELECT retrieves data from database tables. You specify which columns to display and from which table.",
        memory: "SELECT = Retrieve data 🔍"
      },
      {
        q: "What is the purpose of WHERE clause?",
        hint: "Think about filtering",
        answer: "Filter rows based on conditions",
        explanation: "WHERE filters rows based on specified conditions. Only rows matching the condition are returned.",
        memory: "WHERE = Filter rows 🎯"
      },
      {
        q: "What does DISTINCT do?",
        hint: "Think about duplicates",
        answer: "Removes duplicate values",
        explanation: "DISTINCT removes duplicate values from result set, showing only unique values.",
        memory: "DISTINCT = Remove duplicates ❌"
      },
      {
        q: "What is ORDER BY used for?",
        hint: "Think about arrangement",
        answer: "Sorts results in ascending or descending order",
        explanation: "ORDER BY sorts query results. ASC for ascending (default), DESC for descending order.",
        memory: "ORDER BY = Sort results 📊"
      },
      {
        q: "What is the difference between LIMIT and TOP?",
        hint: "Think about databases",
        answer: "LIMIT is for MySQL/PostgreSQL, TOP is for SQL Server",
        explanation: "Both restrict number of rows returned. LIMIT is used in MySQL/PostgreSQL, TOP is used in SQL Server.",
        memory: "LIMIT (MySQL) vs TOP (SQL Server) 🔢"
      },
      {
        q: "Why should we avoid SELECT *?",
        hint: "Think about performance",
        answer: "Fetches all columns unnecessarily, wastes resources",
        explanation: "SELECT * fetches all columns including unnecessary ones, wasting bandwidth and memory. Always select only needed columns.",
        memory: "SELECT * = Waste resources 🗑️"
      }
    ],

    coding: {
      title: "Basic Query Challenge",
      scenario: "You're querying a customer database for various business reports.",
      questions: [
        {
          q: "1. Select all columns from customers table",
          answer: "SELECT * FROM customers;"
        },
        {
          q: "2. Select only name and email from customers",
          answer: "SELECT name, email FROM customers;"
        },
        {
          q: "3. Find all customers from Mumbai",
          answer: "SELECT * FROM customers WHERE city='Mumbai';"
        },
        {
          q: "4. Get unique cities from customers table",
          answer: "SELECT DISTINCT city FROM customers;"
        },
        {
          q: "5. Show customers sorted by name",
          answer: "SELECT * FROM customers ORDER BY name ASC;"
        },
        {
          q: "6. Show top 5 customers",
          answer: "SELECT * FROM customers LIMIT 5;"
        },
        {
          q: "7. Find customers with salary greater than 50000",
          answer: "SELECT * FROM customers WHERE salary > 50000;"
        },
        {
          q: "8. Show customer names with alias 'Customer Name'",
          answer: "SELECT name AS 'Customer Name' FROM customers;"
        },
        {
          q: "9. Get top 10 highest paid employees",
          answer: "SELECT * FROM employees ORDER BY salary DESC LIMIT 10;"
        },
        {
          q: "10. Find unique departments from employees table",
          answer: "SELECT DISTINCT department FROM employees;"
        }
      ]
    },

    quiz: [
      { q: "SELECT retrieves?", options: ["Deletes data", "Retrieves data", "Updates data", "Creates table"], answer: 1 },
      { q: "WHERE is used for?", options: ["Sorting", "Filtering", "Deleting", "Creating"], answer: 1 },
      { q: "DISTINCT removes?", options: ["All data", "Duplicates", "Tables", "Columns"], answer: 1 },
      { q: "ORDER BY does?", options: ["Filters", "Sorts results", "Deletes", "Creates"], answer: 1 },
      { q: "LIMIT restricts?", options: ["Columns", "Number of rows", "Tables", "Users"], answer: 1 },
      { q: "AS is used for?", options: ["Deleting", "Creating aliases", "Filtering", "Sorting"], answer: 1 },
      { q: "Default ORDER BY?", options: ["DESC", "ASC", "RANDOM", "NONE"], answer: 1 },
      { q: "SELECT * fetches?", options: ["One column", "All columns", "No columns", "Only names"], answer: 1 }
    ],

    interview: "SQL basic queries retrieve data using SELECT for columns, FROM for table, WHERE for filtering, ORDER BY for sorting, LIMIT for row count, and DISTINCT for removing duplicates. AS creates aliases for readability. These form the foundation of all SQL operations. Query execution order is: FROM → WHERE → SELECT → DISTINCT → ORDER BY → LIMIT. Best practices include avoiding SELECT * (select only needed columns), always using WHERE to filter data, and using LIMIT to prevent fetching millions of rows.",

    memory: "👉 SELECT = Retrieve data 🔍\n👉 WHERE = Filter rows 🎯\n👉 DISTINCT = Remove duplicates ❌\n👉 ORDER BY = Sort results 📊\n👉 LIMIT = Restrict rows 🔢\n👉 AS = Create aliases 📝\n\nQuery Flow:\nFROM → WHERE → SELECT → DISTINCT → ORDER BY → LIMIT\n\nBest Practices:\n✅ Avoid SELECT *\n✅ Always use WHERE\n✅ Use LIMIT for large tables\n✅ Use aliases for readability",

    revision: "SQL Basic Queries: SELECT (retrieve), WHERE (filter), DISTINCT (unique), ORDER BY (sort), LIMIT (restrict), AS (alias) - foundation of data retrieval"
  },

  "sql-filtering": {
    title: "SQL Filtering",
    icon: "🎯",
    difficulty: "Beginner",
    duration: "50 min",
    description: "SQL filtering helps retrieve only required records from large datasets. In real companies, filtering is used daily to reduce unnecessary data processing and improve performance.",
    
    comic: `🎯 Imagine searching for food:

🍕 AND Operator:
You want Pizza AND Coke → both conditions required
Like: IT department AND salary > 50000

☕ OR Operator:
You want Tea OR Coffee → any one works
Like: IT department OR HR department

🍌 NOT Operator:
Take all fruits EXCEPT bananas
Like: All employees EXCEPT HR

🍕 IN Operator:
Select multiple toppings at once
Like: Department IN ('IT','HR','Finance')

📅 BETWEEN Operator:
Age between 18 and 25
Like: Salary BETWEEN 50000 AND 100000

🔍 LIKE Operator:
Searching names starting with 'A'
Like: Contact search in phone

🔎 Wildcards:
% = Multiple characters (A% = starts with A)
_ = Single character (A_ = two letters)

📝 NULL Handling:
Blank form fields = NULL values
Use IS NULL, not = NULL

💡 Aha Moment:
Filtering = Reducing data to only what you need! 🎯`,

    deepDive: `👉 What is SQL Filtering?
SQL filtering retrieves only required records from large datasets using WHERE clause with various operators.

👉 Why Filtering Matters?
In real companies:
- Amazon: Filter orders by date range
- Netflix: Filter movies by genre
- Banking: Filter transactions by account
- HR: Filter employees by department

👉 Filtering Operators:

1. AND: All conditions must be true
   - SELECT * FROM employees WHERE department='IT' AND salary > 50000;
   - Returns only IT employees with salary > 50000

2. OR: Any one condition can be true
   - SELECT * FROM employees WHERE department='IT' OR department='HR';
   - Returns employees from either IT or HR

3. NOT: Excludes matching conditions
   - SELECT * FROM employees WHERE NOT department='HR';
   - Returns all employees except HR

4. IN: Simplifies multiple OR conditions
   - SELECT * FROM employees WHERE department IN ('IT','HR','Finance');
   - Cleaner than multiple OR conditions

5. BETWEEN: Filters values within range
   - SELECT * FROM employees WHERE salary BETWEEN 50000 AND 100000;
   - Includes both boundary values

6. LIKE: Pattern matching
   - SELECT * FROM employees WHERE name LIKE 'A%';
   - Finds names starting with A

7. Wildcards:
   - % = Multiple characters
   - _ = Single character
   - Examples: 'A%' (starts with A), '%A' (ends with A), '%A%' (contains A)

8. NULL Handling:
   - IS NULL: Find missing values
   - IS NOT NULL: Find non-missing values
   - Common mistake: Using = NULL instead of IS NULL

👉 Real Project Flow:
1. Read raw customer data
2. Filter required records (WHERE)
3. Remove invalid records (NOT, IS NOT NULL)
4. Process only useful data
5. Load clean data into warehouse

👉 Performance Tips:
- Use indexed columns in WHERE clause
- Avoid LIKE with leading wildcard ('%A')
- Use IN instead of multiple OR
- Filter early to reduce data processing`,

    types: `🎯 SQL Filtering Operators:

1️⃣ AND Operator
👉 Objective: Filter data when multiple conditions must be true
👉 Problem: HR wants employees from IT department with salary greater than 50000
👉 Analogy: Food Order - You want Pizza AND Coke → both conditions required
👉 Deep Explanation: AND returns rows only when all specified conditions are true
👉 Syntax: SELECT * FROM employees WHERE department='IT' AND salary > 50000;
👉 Real Use: Find premium customers from Pune with purchases above 1 lakh
👉 Interview Answer: AND returns records only when all conditions are satisfied

2️⃣ OR Operator
👉 Objective: Filter data when any one condition can be true
👉 Problem: Company wants employees from IT or HR department
👉 Analogy: Tea or Coffee - Any one option works
👉 Deep Explanation: OR returns rows when at least one condition is true
👉 Syntax: SELECT * FROM employees WHERE department='IT' OR department='HR';
👉 Real Use: Finding customers from multiple departments
👉 Interview Answer: OR returns records when any condition matches

3️⃣ NOT Operator
👉 Objective: Exclude specific records
👉 Problem: Company wants all employees except HR department
👉 Analogy: Fruit Basket - Take all fruits except bananas
👉 Deep Explanation: NOT excludes matching conditions
👉 Syntax: SELECT * FROM employees WHERE NOT department='HR';
👉 Real Use: Exclude inactive customers
👉 Interview Answer: NOT excludes matching records

4️⃣ IN Operator
👉 Objective: Filter multiple values easily
👉 Problem: Writing multiple OR conditions makes queries lengthy
👉 Analogy: Multiple Toppings - Select many toppings at once
👉 Deep Explanation: IN simplifies multiple OR conditions
👉 Syntax: SELECT * FROM employees WHERE department IN ('IT','HR','Finance');
👉 Real Use: Find customers from multiple cities
👉 Interview Answer: IN simplifies multiple value filtering

5️⃣ BETWEEN Operator
👉 Objective: Filter values within a range
👉 Problem: Need employees whose salary falls between two values
👉 Analogy: Age Eligibility - Age between 18 and 25
👉 Deep Explanation: BETWEEN filters records within specified range
👉 Syntax: SELECT * FROM employees WHERE salary BETWEEN 50000 AND 100000;
👉 Real Use: Find orders between two dates
👉 Interview Answer: BETWEEN retrieves records within range

6️⃣ LIKE Operator
👉 Objective: Search pattern-based values
👉 Problem: Need names starting with A
👉 Analogy: Contact Search - Searching names starting with specific letters
👉 Deep Explanation: LIKE is used for pattern matching
👉 Syntax: SELECT * FROM employees WHERE name LIKE 'A%';
👉 Real Use: Search products by partial names
👉 Interview Answer: LIKE performs pattern matching

7️⃣ Wildcards
👉 Objective: Perform flexible searches
👉 Problem: Exact values may not always be known
👉 Analogy: Google Search - Searching partial keywords
👉 Deep Explanation:
   - % = Represents multiple characters
   - _ = Represents single character
👉 Examples:
   - A% → starts with A
   - %A → ends with A
   - %A% → contains A
   - A_ → two-letter names
👉 Real Use: Partial customer searches
👉 Interview Answer: Wildcards make LIKE queries flexible

8️⃣ NULL Handling
👉 Objective: Handle missing values properly
👉 Problem: Some records may contain missing information
👉 Analogy: Blank Form - Missing phone number in registration form
👉 Deep Explanation: NULL represents missing values and requires special handling
👉 Syntax:
   - SELECT * FROM employees WHERE email IS NULL;
   - SELECT * FROM employees WHERE email IS NOT NULL;
👉 Common Mistake: Using email = NULL instead of IS NULL
👉 Real Use: Finding incomplete customer profiles
👉 Interview Answer: NULL values are handled using IS NULL and IS NOT NULL`,

    qa: [
      {
        q: "What is the difference between AND and OR?",
        hint: "Think about conditions",
        answer: "AND requires all conditions true, OR requires any one condition true",
        explanation: "AND returns rows only when all conditions are satisfied. OR returns rows when at least one condition is satisfied.",
        memory: "AND = All conditions | OR = Any condition 🎯"
      },
      {
        q: "What is the advantage of IN over OR?",
        hint: "Think about simplicity",
        answer: "IN simplifies multiple OR conditions into cleaner syntax",
        explanation: "Instead of writing department='IT' OR department='HR' OR department='Finance', you can write department IN ('IT','HR','Finance').",
        memory: "IN = Simplified OR 📝"
      },
      {
        q: "What is the difference between BETWEEN and >= and <=?",
        hint: "Think about readability",
        answer: "BETWEEN is cleaner syntax for range queries",
        explanation: "BETWEEN 50000 AND 100000 is cleaner than salary >= 50000 AND salary <= 100000. Both are functionally same.",
        memory: "BETWEEN = Clean range syntax 📊"
      },
      {
        q: "What is the difference between LIKE and Wildcards?",
        hint: "Think about relationship",
        answer: "Wildcards (% and _) are used with LIKE for pattern matching",
        explanation: "LIKE is the operator, wildcards (% for multiple chars, _ for single char) are the patterns used with LIKE.",
        memory: "LIKE uses Wildcards 🔍"
      },
      {
        q: "Why can't we use = NULL?",
        hint: "Think about NULL behavior",
        answer: "NULL is unknown value, requires IS NULL operator",
        explanation: "NULL represents unknown/missing value. You cannot compare unknown values with =. Use IS NULL or IS NOT NULL instead.",
        memory: "NULL needs IS NULL, not = NULL ❌"
      },
      {
        q: "What does % wildcard represent?",
        hint: "Think about characters",
        answer: "Multiple characters (zero or more)",
        explanation: "% matches zero or more characters. 'A%' matches 'A', 'Ankit', 'Amazon', etc.",
        memory: "% = Multiple characters 🔤"
      },
      {
        q: "What does _ wildcard represent?",
        hint: "Think about single character",
        answer: "Exactly one character",
        explanation: "_ matches exactly one character. 'A_' matches 'AB', 'AC', but not 'A' or 'ABC'.",
        memory: "_ = Single character 🔡"
      },
      {
        q: "Does BETWEEN include boundary values?",
        hint: "Think about range",
        answer: "Yes, BETWEEN includes both boundary values",
        explanation: "BETWEEN 50000 AND 100000 includes both 50000 and 100000 in results.",
        memory: "BETWEEN = Inclusive range 📏"
      }
    ],

    coding: {
      title: "Filtering Challenge",
      scenario: "You're filtering employee data for various HR reports.",
      questions: [
        {
          q: "1. Find employees from IT department with salary greater than 50000",
          answer: "SELECT * FROM employees WHERE department='IT' AND salary > 50000;"
        },
        {
          q: "2. Find employees from IT or HR department",
          answer: "SELECT * FROM employees WHERE department='IT' OR department='HR';"
        },
        {
          q: "3. Find all employees except HR department",
          answer: "SELECT * FROM employees WHERE NOT department='HR';"
        },
        {
          q: "4. Find employees from IT, HR, or Finance departments using IN",
          answer: "SELECT * FROM employees WHERE department IN ('IT','HR','Finance');"
        },
        {
          q: "5. Find employees with salary between 50000 and 100000",
          answer: "SELECT * FROM employees WHERE salary BETWEEN 50000 AND 100000;"
        },
        {
          q: "6. Find employees whose name starts with 'A'",
          answer: "SELECT * FROM employees WHERE name LIKE 'A%';"
        },
        {
          q: "7. Find employees whose name ends with 'a'",
          answer: "SELECT * FROM employees WHERE name LIKE '%a';"
        },
        {
          q: "8. Find employees whose name contains 'kumar'",
          answer: "SELECT * FROM employees WHERE name LIKE '%kumar%';"
        },
        {
          q: "9. Find employees with missing email addresses",
          answer: "SELECT * FROM employees WHERE email IS NULL;"
        },
        {
          q: "10. Find employees with valid email addresses",
          answer: "SELECT * FROM employees WHERE email IS NOT NULL;"
        },
        {
          q: "11. Find IT employees from Mumbai with salary > 60000",
          answer: "SELECT * FROM employees WHERE department='IT' AND city='Mumbai' AND salary > 60000;"
        },
        {
          q: "12. Find employees whose name has exactly 5 characters",
          answer: "SELECT * FROM employees WHERE name LIKE '_____';"
        }
      ]
    },

    quiz: [
      { q: "AND returns rows when?", options: ["Any condition true", "All conditions true", "No conditions true", "One condition false"], answer: 1 },
      { q: "OR returns rows when?", options: ["All conditions true", "At least one condition true", "No conditions true", "All conditions false"], answer: 1 },
      { q: "NOT operator does?", options: ["Includes records", "Excludes matching records", "Sorts records", "Counts records"], answer: 1 },
      { q: "IN operator simplifies?", options: ["AND conditions", "Multiple OR conditions", "NOT conditions", "LIKE conditions"], answer: 1 },
      { q: "BETWEEN includes?", options: ["Only start value", "Both boundary values", "Only end value", "Neither boundary"], answer: 1 },
      { q: "LIKE is used for?", options: ["Exact match", "Pattern matching", "Sorting", "Counting"], answer: 1 },
      { q: "% wildcard matches?", options: ["One character", "Multiple characters", "No characters", "Numbers only"], answer: 1 },
      { q: "_ wildcard matches?", options: ["Multiple characters", "Exactly one character", "No characters", "Letters only"], answer: 1 },
      { q: "NULL values use?", options: ["= NULL", "IS NULL", "== NULL", "EQUALS NULL"], answer: 1 },
      { q: "'A%' matches?", options: ["Ends with A", "Starts with A", "Contains A", "Exactly A"], answer: 1 }
    ],

    interview: "SQL filtering retrieves only required records using WHERE clause with various operators. AND requires all conditions true, OR requires any one condition true, NOT excludes matching records. IN simplifies multiple OR conditions. BETWEEN filters values within range (inclusive). LIKE performs pattern matching using wildcards: % for multiple characters, _ for single character. NULL values require IS NULL or IS NOT NULL operators, not = NULL. Real-world usage includes filtering customers by city, orders by date range, employees by department. Performance tip: use indexed columns in WHERE clause and avoid leading wildcards in LIKE queries.",

    memory: `👉 AND = All conditions ✅
👉 OR = Any condition ✅
👉 NOT = Exclude ❌
👉 IN = Multiple values 📝
👉 BETWEEN = Range 📊
👉 LIKE = Pattern 🔍
👉 % = Multiple chars 🔤
👉 _ = Single char 🔡
👉 NULL = IS NULL ❓

Filter Formula:
AND = All | OR = Any | NOT = Exclude
IN = Multiple | BETWEEN = Range
LIKE = Pattern | NULL = Missing Data

Wildcard Patterns:
A% → starts with A
%A → ends with A
%A% → contains A
A_ → two letters starting with A`,

    revision: "SQL Filtering: AND (all conditions), OR (any condition), NOT (exclude), IN (multiple values), BETWEEN (range), LIKE (pattern), Wildcards (% multiple, _ single), NULL (IS NULL/IS NOT NULL) - essential for data filtering"
  },

  "sql-functions": {
    title: "SQL Functions (Aggregate Functions)",
    icon: "📊",
    difficulty: "Beginner",
    duration: "55 min",
    description: "Aggregate functions help summarize large amounts of data into meaningful insights. These functions are heavily used in reporting, dashboards, analytics, and real-world business decision making.",
    
    comic: `📊 Imagine School Result Summary:

📚 Without Aggregate Functions:
- Manually check every student's marks
- Calculate total students by counting
- Add all marks manually for average
- Find highest/lowest by comparing each
- Takes hours! 😰

✨ With Aggregate Functions:
- COUNT(*) → Total students instantly
- AVG(marks) → Average marks in seconds
- MAX(marks) → Highest marks found
- MIN(marks) → Lowest marks found
- SUM(marks) → Total marks calculated
- Result: Instant summary! ⚡

🏢 Real Business Example:
Manager: "Show me total sales, average order value, highest order, and lowest order for today"

Without SQL: Manual Excel work for hours
With SQL Aggregate Functions: One query, instant results!

💡 Aha Moment:
Aggregate Functions = Summarizing millions of rows into meaningful insights! 📈

C-S-A-M-M Formula:
COUNT → Total rows 🔢
SUM → Total value 💰
AVG → Average 📊
MIN → Lowest 📉
MAX → Highest 📈`,

    deepDive: `👉 What are Aggregate Functions?
Aggregate functions perform calculations on multiple rows and return a single summary value.

👉 Why They Matter?
Problem: Companies have millions of records. Managers don't want to see every single row—they want summaries like total sales, average salary, highest order.

Real Example: Amazon wants total revenue for today instead of viewing millions of transactions manually.

👉 The 5 Core Aggregate Functions:

1. COUNT() - Count total records
   - COUNT(*): Counts all rows including duplicates and null rows
   - COUNT(column_name): Counts non-null values in specific column
   - COUNT(DISTINCT column_name): Counts unique values
   - Example: SELECT COUNT(*) FROM employees;
   - Real Use: Count total customers registered today

2. SUM() - Calculate total value
   - Adds numeric values from a column
   - Example: SELECT SUM(salary) FROM employees;
   - Real Use: Calculate total company revenue
   - Analogy: Monthly expense calculator - adding all expenses

3. AVG() - Find average value
   - Returns average value of numeric columns
   - Example: SELECT AVG(salary) FROM employees;
   - Real Use: Find average employee salary
   - Analogy: Class average marks
   - Note: AVG ignores NULL values

4. MIN() - Find smallest value
   - Returns the smallest value from a column
   - Example: SELECT MIN(salary) FROM employees;
   - Real Use: Find lowest salary in company
   - Analogy: Lowest cricket score

5. MAX() - Find highest value
   - Returns the highest value from a column
   - Example: SELECT MAX(salary) FROM employees;
   - Real Use: Find highest salary in company
   - Analogy: Highest IPL score

👉 Real Project Flow:
1. Read sales/customer/order data
2. Apply aggregate functions
3. Generate business reports
4. Send data to dashboards
5. Business makes decisions

👉 Real Company Pipeline:
Oracle → SQL Aggregation → AWS S3 → AWS Glue → Redshift → Power BI Dashboard

Example: Healthcare company calculates total patients, average treatment cost, highest bill amount.

👉 Common Mistakes:
- Using SUM on text columns (only works on numbers)
- Forgetting NULL handling in COUNT(column)
- Confusing AVG with SUM
- Using aggregate functions without GROUP BY when required

👉 Performance Tips:
- Aggregate functions scan entire table
- Use WHERE clause before aggregation to reduce data
- Index columns used in WHERE clause
- Combine with GROUP BY for category-wise summaries`,

    types: `📊 SQL Aggregate Functions:

1️⃣ COUNT()
👉 Objective: Count total number of records
👉 Problem: Need to know how many records exist
👉 Analogy: Counting students in classroom
👉 Deep Explanation: COUNT() returns the total number of rows or non-null values in a column
👉 Types:
   - COUNT(*): Counts all rows including duplicates and null rows
   - COUNT(column_name): Counts non-null values in specific column
   - COUNT(DISTINCT column_name): Counts unique values
👉 Syntax:
   - SELECT COUNT(*) FROM employees;
   - SELECT COUNT(department) FROM employees;
   - SELECT COUNT(DISTINCT department) FROM employees;
👉 Real Use: Count total customers registered today
👉 Interview Answer: COUNT() is used to count total records in a table

2️⃣ SUM()
👉 Objective: Calculate total value
👉 Problem: Need to add all numeric values
👉 Analogy: Monthly Expense Calculator - Adding all monthly expenses to know total spending
👉 Deep Explanation: SUM() adds numeric values from a column
👉 Syntax:
   - SELECT SUM(salary) FROM employees;
   - SELECT SUM(total_sales) FROM orders;
👉 Real Use: Calculate total company revenue
👉 Important: Only works on numeric columns
👉 Interview Answer: SUM() calculates total numeric values

3️⃣ AVG()
👉 Objective: Find average value
👉 Problem: Need to know average of numeric values
👉 Analogy: Class Average Marks - Average marks of all students in class
👉 Deep Explanation: AVG() returns average value of numeric columns
👉 Syntax: SELECT AVG(salary) FROM employees;
👉 Real Use: Find average employee salary
👉 Important: AVG ignores NULL values
👉 Interview Answer: AVG() calculates average value

4️⃣ MIN()
👉 Objective: Find smallest value
👉 Problem: Need to find lowest value in dataset
👉 Analogy: Lowest Cricket Score - Finding lowest runs scored by players
👉 Deep Explanation: MIN() returns the smallest value from a column
👉 Syntax: SELECT MIN(salary) FROM employees;
👉 Real Use: Find lowest salary in company
👉 Works on: Numbers, dates, and text (alphabetically)
👉 Interview Answer: MIN() returns smallest value from dataset

5️⃣ MAX()
👉 Objective: Find highest value
👉 Problem: Need to find highest value in dataset
👉 Analogy: Highest IPL Score - Finding highest runs scored by player
👉 Deep Explanation: MAX() returns the highest value from a column
👉 Syntax: SELECT MAX(salary) FROM employees;
👉 Real Use: Find highest salary in company
👉 Works on: Numbers, dates, and text (alphabetically)
👉 Interview Answer: MAX() returns highest value from dataset`,

    qa: [
      {
        q: "What is the difference between COUNT(*) and COUNT(column_name)?",
        hint: "Think about NULL values",
        answer: "COUNT(*) counts all rows including NULLs, COUNT(column_name) counts only non-NULL values",
        explanation: "COUNT(*) counts every row in the table regardless of NULL values. COUNT(column_name) counts only rows where that specific column has a non-NULL value.",
        memory: "COUNT(*) = All rows | COUNT(column) = Non-NULL only 🔢"
      },
      {
        q: "Can SUM work on string values?",
        hint: "Think about data types",
        answer: "No, SUM only works on numeric columns",
        explanation: "SUM() is designed for numeric data types (INT, DECIMAL, FLOAT). It cannot add text/string values.",
        memory: "SUM = Numbers only 💰"
      },
      {
        q: "How does AVG handle NULL values?",
        hint: "Think about calculation",
        answer: "AVG ignores NULL values in calculation",
        explanation: "AVG() calculates average by summing non-NULL values and dividing by count of non-NULL values. NULL values are excluded from both sum and count.",
        memory: "AVG ignores NULL ❌"
      },
      {
        q: "What is the difference between MIN/MAX and ORDER BY?",
        hint: "Think about output",
        answer: "MIN/MAX return single value, ORDER BY sorts all rows",
        explanation: "MIN() and MAX() return a single aggregate value (smallest/largest). ORDER BY sorts all rows and returns them in order.",
        memory: "MIN/MAX = Single value | ORDER BY = Sorted rows 📊"
      },
      {
        q: "Can we use multiple aggregate functions in one query?",
        hint: "Think about SELECT clause",
        answer: "Yes, we can use multiple aggregate functions together",
        explanation: "You can combine multiple aggregate functions: SELECT COUNT(*), SUM(salary), AVG(salary), MIN(salary), MAX(salary) FROM employees;",
        memory: "Multiple aggregates = Allowed ✅"
      },
      {
        q: "What does COUNT(DISTINCT column_name) do?",
        hint: "Think about unique values",
        answer: "Counts unique values in a column",
        explanation: "COUNT(DISTINCT department) counts how many unique departments exist, removing duplicates before counting.",
        memory: "COUNT(DISTINCT) = Unique count 🎯"
      },
      {
        q: "Can MIN and MAX work on dates?",
        hint: "Think about data types",
        answer: "Yes, MIN returns earliest date, MAX returns latest date",
        explanation: "MIN() and MAX() work on dates. MIN(date) gives earliest date, MAX(date) gives latest date.",
        memory: "MIN/MAX work on dates 📅"
      },
      {
        q: "What happens if we use SUM on an empty table?",
        hint: "Think about no data",
        answer: "Returns NULL",
        explanation: "If there are no rows to aggregate, SUM() returns NULL (not 0). COUNT() returns 0 for empty tables.",
        memory: "SUM(empty) = NULL | COUNT(empty) = 0 ⚠️"
      }
    ],

    coding: {
      title: "Aggregate Functions Challenge",
      scenario: "You're analyzing employee and sales data for business reports.",
      questions: [
        {
          q: "1. Count total number of employees",
          answer: "SELECT COUNT(*) FROM employees;"
        },
        {
          q: "2. Count employees who have email addresses (non-NULL)",
          answer: "SELECT COUNT(email) FROM employees;"
        },
        {
          q: "3. Count unique departments in company",
          answer: "SELECT COUNT(DISTINCT department) FROM employees;"
        },
        {
          q: "4. Calculate total salary expense of company",
          answer: "SELECT SUM(salary) FROM employees;"
        },
        {
          q: "5. Find average employee salary",
          answer: "SELECT AVG(salary) FROM employees;"
        },
        {
          q: "6. Find lowest salary in company",
          answer: "SELECT MIN(salary) FROM employees;"
        },
        {
          q: "7. Find highest salary in company",
          answer: "SELECT MAX(salary) FROM employees;"
        },
        {
          q: "8. Get total employees, average salary, and highest salary in one query",
          answer: "SELECT COUNT(*) AS total_employees, AVG(salary) AS avg_salary, MAX(salary) AS highest_salary FROM employees;"
        },
        {
          q: "9. Calculate total sales revenue from orders table",
          answer: "SELECT SUM(order_amount) FROM orders;"
        },
        {
          q: "10. Find earliest and latest order dates",
          answer: "SELECT MIN(order_date) AS earliest_order, MAX(order_date) AS latest_order FROM orders;"
        },
        {
          q: "11. Count total orders placed by customers",
          answer: "SELECT COUNT(*) FROM orders;"
        },
        {
          q: "12. Find average order value",
          answer: "SELECT AVG(order_amount) FROM orders;"
        }
      ]
    },

    quiz: [
      { q: "COUNT(*) counts?", options: ["Only non-NULL", "All rows including NULL", "Only numbers", "Only text"], answer: 1 },
      { q: "SUM works on?", options: ["Text columns", "Numeric columns only", "All columns", "Date columns"], answer: 1 },
      { q: "AVG handles NULL by?", options: ["Including in calculation", "Ignoring NULL values", "Converting to 0", "Throwing error"], answer: 1 },
      { q: "MIN returns?", options: ["All values", "Smallest value", "Average value", "Total count"], answer: 1 },
      { q: "MAX returns?", options: ["All values", "Highest value", "Average value", "Total sum"], answer: 1 },
      { q: "COUNT(column) counts?", options: ["All rows", "Non-NULL values only", "NULL values", "Duplicates only"], answer: 1 },
      { q: "COUNT(DISTINCT) returns?", options: ["All values", "Unique values count", "Duplicate count", "NULL count"], answer: 1 },
      { q: "Multiple aggregates in one query?", options: ["Not allowed", "Allowed", "Only 2 allowed", "Requires JOIN"], answer: 1 },
      { q: "SUM on empty table returns?", options: ["0", "NULL", "Error", "-1"], answer: 1 },
      { q: "MIN/MAX work on dates?", options: ["No", "Yes", "Only MAX", "Only MIN"], answer: 1 }
    ],

    interview: "Aggregate functions summarize multiple rows into single values. COUNT() counts records (COUNT(*) includes NULLs, COUNT(column) excludes NULLs, COUNT(DISTINCT) counts unique values). SUM() adds numeric values (only works on numbers). AVG() calculates average (ignores NULL values). MIN() returns smallest value, MAX() returns highest value (both work on numbers, dates, and text). Multiple aggregate functions can be used together in one query. Real-world usage includes business reporting, dashboards, and analytics. Common pipeline: Oracle → SQL Aggregation → AWS S3 → Glue → Redshift → Power BI. Example: Healthcare company calculates total patients, average treatment cost, highest bill amount. Performance tip: use WHERE clause before aggregation to reduce data processing.",

    memory: `👉 COUNT = Total rows 🔢
👉 SUM = Total value 💰
👉 AVG = Average 📊
👉 MIN = Lowest 📉
👉 MAX = Highest 📈

C-S-A-M-M Formula:
COUNT → Total rows
SUM → Total value
AVG → Average
MIN → Lowest
MAX → Highest

Key Differences:
COUNT(*) = All rows (includes NULL)
COUNT(column) = Non-NULL only
COUNT(DISTINCT) = Unique values

Important Notes:
✅ SUM = Numbers only
✅ AVG ignores NULL
✅ MIN/MAX work on dates
✅ Multiple aggregates allowed
⚠️ SUM(empty) = NULL
⚠️ COUNT(empty) = 0`,

    revision: "SQL Aggregate Functions: COUNT (total rows), SUM (total value - numbers only), AVG (average - ignores NULL), MIN (smallest), MAX (highest) - essential for data summarization and business reporting"
  },

  "sql-data-manipulation": {
    title: "SQL Data Manipulation (DML)",
    icon: "✏️",
    difficulty: "Beginner",
    duration: "50 min",
    description: "DML commands allow users to insert new records, update existing records, and delete unnecessary records from databases.",
    
    comic: `✏️ Imagine School Admission System:

🆕 INSERT - New Student Joins:
New student Ankit joins school
→ INSERT INTO students VALUES (101, 'Ankit', 'Mumbai');
Like: Adding new contact in phone 📱

🔄 UPDATE - Student Updates Address:
Ankit moves to Pune
→ UPDATE students SET city='Pune' WHERE student_id=101;
Like: Editing contact details ✏️

🗑️ DELETE - Student Leaves School:
Ankit leaves school
→ DELETE FROM students WHERE student_id=101;
Like: Removing contact from phone 🗑️

🏢 Real E-commerce Example:
- New customer registers → INSERT
- Customer changes address → UPDATE
- Fake account removal → DELETE

⚠️ Common Mistakes:
❌ UPDATE without WHERE → Updates ALL rows!
❌ DELETE without WHERE → Deletes ALL rows!
❌ INSERT duplicate primary key → Error!

💡 Aha Moment:
DML = Data Manipulation Language
INSERT = Add new data 🆕
UPDATE = Modify existing data 🔄
DELETE = Remove data 🗑️`,

    deepDive: `👉 What is DML?
DML (Data Manipulation Language) commands manipulate data within database tables. The three core DML commands are INSERT, UPDATE, and DELETE.

👉 Why DML Matters?
Problem: E-commerce companies have dynamic data:
- New customers register daily → need INSERT
- Customers change addresses → need UPDATE
- Fake accounts need removal → need DELETE

Real Example: Amazon continuously inserts new orders, updates shipment status, and deletes invalid transactions.

👉 The 3 Core DML Commands:

1. INSERT - Add new records
   Purpose: Add new rows into a table
   Problem: When new data enters the business system, it must be stored
   
   Syntax:
   - INSERT INTO employees VALUES (101,'Ankit',50000);
   - INSERT INTO employees(employee_id,name,salary) VALUES (102,'Rahul',60000);
   
   Real Use Cases:
   - New customer registration
   - Adding new product in e-commerce system
   - Adding new employee records
   
   Common Mistakes:
   - Wrong column sequence
   - Missing mandatory values
   - Inserting duplicate primary keys
   
   Interview Traps:
   - Difference between INSERT and UPDATE?
   - Can we insert partial columns? (Yes, if other columns allow NULL or have DEFAULT)

2. UPDATE - Modify existing records
   Purpose: Modify existing records
   Problem: Business data changes frequently and old records need modification
   
   Syntax:
   - UPDATE employees SET salary = 70000 WHERE employee_id = 101;
   - UPDATE customers SET city='Pune' WHERE customer_id=10;
   
   Real Use Cases:
   - Customer updates phone number
   - Employee salary increment
   - Updating order status
   
   Common Mistakes:
   - Forgetting WHERE clause updates ALL rows (DANGEROUS!)
   - Updating wrong records
   
   Interview Traps:
   - What happens if WHERE clause is missing? (Updates ALL rows)
   - Can UPDATE modify multiple columns? (Yes: UPDATE employees SET salary=70000, city='Pune' WHERE id=101;)

3. DELETE - Remove unnecessary records
   Purpose: Remove unnecessary records
   Problem: Old, duplicate, or invalid records need removal
   
   Syntax:
   - DELETE FROM employees WHERE employee_id=101;
   - DELETE FROM customers WHERE status='inactive';
   
   Real Use Cases:
   - Delete fake accounts
   - Remove cancelled orders
   - Delete duplicate records
   
   Common Mistakes:
   - Forgetting WHERE clause deletes ENTIRE table data (VERY DANGEROUS!)
   - Deleting important production records accidentally
   
   Interview Traps:
   - DELETE vs TRUNCATE? (DELETE can use WHERE and can be rolled back, TRUNCATE removes all rows faster but cannot be rolled back)
   - Can deleted data be recovered? (Yes, if transaction not committed and using ROLLBACK)

👉 Real Project Flow:
1. Customer registers → INSERT
2. Customer updates profile → UPDATE
3. Inactive account removed → DELETE

👉 Safety Best Practices:
- Always use WHERE clause with UPDATE and DELETE
- Test with SELECT before UPDATE/DELETE
- Use transactions (BEGIN, COMMIT, ROLLBACK)
- Take backups before bulk operations
- Use soft deletes (status='deleted') instead of hard deletes in production

👉 Performance Tips:
- Batch INSERT for multiple rows
- Index columns used in WHERE clause
- Avoid updating indexed columns frequently
- Use TRUNCATE instead of DELETE for removing all rows (faster)`,

    types: `✏️ SQL DML Commands:

1️⃣ INSERT
👉 Objective: Add new records into a table
👉 Problem: When new data enters the business system, it must be stored
👉 Analogy: Adding new contact in phone 📱
👉 Deep Explanation:
   - INSERT command adds new rows into a table
   - Used when new users/customers/products enter system
👉 Syntax:
   - INSERT INTO employees VALUES (101,'Ankit',50000);
   - INSERT INTO employees(employee_id,name,salary) VALUES (102,'Rahul',60000);
   - INSERT INTO employees(employee_id,name) VALUES (103,'Priya'); (partial columns)
👉 Real Use Cases:
   - New customer registration
   - Adding new product in e-commerce system
   - Adding new employee records
👉 Common Mistakes:
   - Wrong column sequence
   - Missing mandatory values (NOT NULL columns)
   - Inserting duplicate primary keys
👉 Interview Traps:
   - Difference between INSERT and UPDATE? (INSERT adds new, UPDATE modifies existing)
   - Can we insert partial columns? (Yes, if other columns allow NULL or have DEFAULT)
👉 Quick Revision: INSERT = Add new rows 🆕

2️⃣ UPDATE
👉 Objective: Modify existing records
👉 Problem: Business data changes frequently and old records need modification
👉 Analogy: Editing contact details in phone ✏️
👉 Deep Explanation:
   - UPDATE modifies existing records
   - Usually used with WHERE clause to target specific rows
👉 Syntax:
   - UPDATE employees SET salary = 70000 WHERE employee_id = 101;
   - UPDATE customers SET city='Pune' WHERE customer_id=10;
   - UPDATE employees SET salary=70000, city='Pune' WHERE employee_id=101; (multiple columns)
👉 Real Use Cases:
   - Customer updates phone number
   - Employee salary increment
   - Updating order status (pending → shipped → delivered)
👉 Common Mistakes:
   - Forgetting WHERE clause updates ALL rows (VERY DANGEROUS!)
   - Updating wrong records due to incorrect WHERE condition
👉 Interview Traps:
   - What happens if WHERE clause is missing? (Updates ALL rows in table)
   - Can UPDATE modify multiple columns? (Yes, separate with commas)
👉 Quick Revision: UPDATE = Modify existing rows 🔄

3️⃣ DELETE
👉 Objective: Remove unnecessary records
👉 Problem: Old, duplicate, or invalid records need removal
👉 Analogy: Removing contact from phone 🗑️
👉 Deep Explanation:
   - DELETE removes records from a table
   - Can remove specific rows using WHERE clause
   - Can remove all rows if WHERE is omitted (DANGEROUS!)
👉 Syntax:
   - DELETE FROM employees WHERE employee_id=101;
   - DELETE FROM customers WHERE status='inactive';
   - DELETE FROM orders WHERE order_date < '2020-01-01';
👉 Real Use Cases:
   - Delete fake accounts
   - Remove cancelled orders
   - Delete duplicate records
   - Clean up old test data
👉 Common Mistakes:
   - Forgetting WHERE clause deletes ENTIRE table data (EXTREMELY DANGEROUS!)
   - Deleting important production records accidentally
   - Not taking backup before bulk deletes
👉 Interview Traps:
   - DELETE vs TRUNCATE? (DELETE can use WHERE and can be rolled back, TRUNCATE removes all rows faster but cannot be rolled back easily)
   - Can deleted data be recovered? (Yes, if transaction not committed, use ROLLBACK)
   - DELETE vs DROP? (DELETE removes rows, DROP removes entire table structure)
👉 Quick Revision: DELETE = Remove rows 🗑️`,

    qa: [
      {
        q: "What is the difference between INSERT and UPDATE?",
        hint: "Think about new vs existing",
        answer: "INSERT adds new records, UPDATE modifies existing records",
        explanation: "INSERT creates new rows in the table. UPDATE changes values in existing rows. You cannot UPDATE a row that doesn't exist.",
        memory: "INSERT = New 🆕 | UPDATE = Modify 🔄"
      },
      {
        q: "What happens if UPDATE has no WHERE clause?",
        hint: "Think about scope",
        answer: "Updates ALL rows in the table",
        explanation: "Without WHERE clause, UPDATE affects every single row in the table. This is very dangerous in production databases.",
        memory: "UPDATE without WHERE = Updates ALL rows ⚠️"
      },
      {
        q: "Can INSERT skip some columns?",
        hint: "Think about NULL and DEFAULT",
        answer: "Yes, if skipped columns allow NULL or have DEFAULT values",
        explanation: "You can insert partial columns if the skipped columns either allow NULL values or have DEFAULT values defined.",
        memory: "Partial INSERT = OK if NULL/DEFAULT allowed ✅"
      },
      {
        q: "What is the difference between DELETE and TRUNCATE?",
        hint: "Think about WHERE clause and speed",
        answer: "DELETE can use WHERE and can be rolled back, TRUNCATE removes all rows faster but cannot be rolled back easily",
        explanation: "DELETE removes rows one by one and can use WHERE clause. TRUNCATE removes all rows at once (faster) but cannot use WHERE clause and is harder to rollback.",
        memory: "DELETE = Selective + Rollback | TRUNCATE = All rows + Fast 🚀"
      },
      {
        q: "How to avoid accidental deletes?",
        hint: "Think about safety measures",
        answer: "Always use WHERE clause, test with SELECT first, use transactions, take backups",
        explanation: "Best practices: 1) Always write WHERE clause 2) Run SELECT with same WHERE first to verify 3) Use BEGIN TRANSACTION and ROLLBACK if needed 4) Take backups before bulk operations.",
        memory: "Safety: WHERE + SELECT test + Transaction + Backup 🛡️"
      },
      {
        q: "Can UPDATE modify multiple columns at once?",
        hint: "Think about syntax",
        answer: "Yes, separate multiple columns with commas",
        explanation: "UPDATE employees SET salary=70000, city='Pune', department='IT' WHERE employee_id=101; You can update multiple columns in one statement.",
        memory: "Multiple UPDATE = Use commas ✅"
      },
      {
        q: "What happens if you INSERT a duplicate primary key?",
        hint: "Think about uniqueness",
        answer: "Error - primary key must be unique",
        explanation: "Primary key constraint ensures uniqueness. Attempting to insert a duplicate primary key value will result in an error.",
        memory: "Duplicate PK = Error ❌"
      },
      {
        q: "Can deleted data be recovered?",
        hint: "Think about transactions",
        answer: "Yes, if transaction not committed, use ROLLBACK",
        explanation: "If you're using transactions (BEGIN TRANSACTION), you can ROLLBACK before COMMIT to undo DELETE. Once committed, recovery requires backup restoration.",
        memory: "DELETE recovery = ROLLBACK before COMMIT 🔄"
      }
    ],

    coding: {
      title: "DML Operations Challenge",
      scenario: "You're managing employee and customer databases with various DML operations.",
      questions: [
        {
          q: "1. Insert a new employee with id=101, name='Ankit', salary=50000",
          answer: "INSERT INTO employees VALUES (101, 'Ankit', 50000);"
        },
        {
          q: "2. Insert a new employee specifying only id=102, name='Rahul' (salary can be NULL)",
          answer: "INSERT INTO employees(employee_id, name) VALUES (102, 'Rahul');"
        },
        {
          q: "3. Update salary to 70000 for employee with id=101",
          answer: "UPDATE employees SET salary = 70000 WHERE employee_id = 101;"
        },
        {
          q: "4. Update city to 'Pune' and department to 'IT' for employee id=101",
          answer: "UPDATE employees SET city='Pune', department='IT' WHERE employee_id = 101;"
        },
        {
          q: "5. Delete employee with id=101",
          answer: "DELETE FROM employees WHERE employee_id = 101;"
        },
        {
          q: "6. Delete all employees from 'HR' department",
          answer: "DELETE FROM employees WHERE department = 'HR';"
        },
        {
          q: "7. Insert multiple customers in one statement (id=1, name='Amit'), (id=2, name='Priya')",
          answer: "INSERT INTO customers VALUES (1, 'Amit'), (2, 'Priya');"
        },
        {
          q: "8. Update all employees' salary by 10% increment",
          answer: "UPDATE employees SET salary = salary * 1.10;"
        },
        {
          q: "9. Delete customers who have status='inactive'",
          answer: "DELETE FROM customers WHERE status = 'inactive';"
        },
        {
          q: "10. Update order status to 'shipped' for order_id=1001",
          answer: "UPDATE orders SET status = 'shipped' WHERE order_id = 1001;"
        },
        {
          q: "11. Insert new product with id=501, name='Laptop', price=50000",
          answer: "INSERT INTO products VALUES (501, 'Laptop', 50000);"
        },
        {
          q: "12. Delete orders placed before '2020-01-01'",
          answer: "DELETE FROM orders WHERE order_date < '2020-01-01';"
        }
      ]
    },

    quiz: [
      { q: "INSERT is used to?", options: ["Modify records", "Add new records", "Delete records", "Create table"], answer: 1 },
      { q: "UPDATE is used to?", options: ["Add new records", "Modify existing records", "Delete records", "Drop table"], answer: 1 },
      { q: "DELETE is used to?", options: ["Add records", "Remove records", "Modify records", "Create table"], answer: 1 },
      { q: "UPDATE without WHERE?", options: ["Updates one row", "Updates all rows", "Error", "Updates nothing"], answer: 1 },
      { q: "DELETE without WHERE?", options: ["Deletes one row", "Deletes all rows", "Error", "Deletes nothing"], answer: 1 },
      { q: "Can INSERT skip columns?", options: ["Never", "Yes, if NULL/DEFAULT allowed", "Only primary key", "Only foreign key"], answer: 1 },
      { q: "DELETE vs TRUNCATE?", options: ["Same thing", "DELETE selective, TRUNCATE all rows", "TRUNCATE selective", "No difference"], answer: 1 },
      { q: "Duplicate primary key INSERT?", options: ["Allowed", "Error", "Overwrites", "Ignores"], answer: 1 },
      { q: "UPDATE multiple columns?", options: ["Not allowed", "Yes, use commas", "Need multiple queries", "Only 2 columns"], answer: 1 },
      { q: "Recover deleted data?", options: ["Impossible", "ROLLBACK before COMMIT", "Always automatic", "Use SELECT"], answer: 1 }
    ],

    interview: "DML (Data Manipulation Language) includes INSERT, UPDATE, and DELETE commands. INSERT adds new records (can insert partial columns if others allow NULL/DEFAULT). UPDATE modifies existing records (without WHERE updates ALL rows - dangerous). DELETE removes records (without WHERE deletes ALL rows - very dangerous). DELETE vs TRUNCATE: DELETE can use WHERE and can be rolled back, TRUNCATE removes all rows faster but cannot use WHERE. Safety practices: always use WHERE clause, test with SELECT first, use transactions (BEGIN, COMMIT, ROLLBACK), take backups. Real-world usage: Amazon inserts new orders, updates shipment status, deletes invalid transactions. UPDATE can modify multiple columns using commas. Deleted data can be recovered using ROLLBACK before COMMIT. Duplicate primary key INSERT causes error.",

    memory: `👉 INSERT = Add new rows 🆕
👉 UPDATE = Modify existing rows 🔄
👉 DELETE = Remove rows 🗑️

IUD Formula:
INSERT → Add
UPDATE → Modify
DELETE → Remove

Danger Zones:
⚠️ UPDATE without WHERE = Updates ALL rows
⚠️ DELETE without WHERE = Deletes ALL rows
⚠️ Duplicate PK = Error

Safety Checklist:
✅ Always use WHERE clause
✅ Test with SELECT first
✅ Use transactions (BEGIN/COMMIT/ROLLBACK)
✅ Take backups before bulk operations
✅ Use soft deletes in production

Key Differences:
INSERT vs UPDATE: New vs Modify
DELETE vs TRUNCATE: Selective vs All rows
DELETE vs DROP: Remove rows vs Remove table

Real Flow:
Customer registers → INSERT
Customer updates profile → UPDATE
Inactive account removed → DELETE`,

    revision: "SQL DML: INSERT (add new records), UPDATE (modify existing - dangerous without WHERE), DELETE (remove records - dangerous without WHERE) - essential for data manipulation. Safety: always use WHERE, test with SELECT, use transactions, take backups"
  },

  "sql-table-operations": {
    title: "SQL Table Operations (DDL Commands)",
    icon: "🏗️",
    difficulty: "Beginner",
    duration: "50 min",
    description: "DDL commands help create, modify, remove, and clean database tables. These commands are heavily used during project setup, schema design, and data engineering workflows.",
    
    comic: `🏗️ Imagine Building Construction:

🏠 CREATE - Build New House:
New project starts, need new table
→ CREATE TABLE employees (id INT, name VARCHAR(50), salary INT);
Like: Building new house from scratch 🏗️

🔧 ALTER - Renovate House:
Business needs new column
→ ALTER TABLE employees ADD department VARCHAR(50);
Like: Adding new room to existing house 🔨

💥 DROP - Destroy House:
Table no longer needed
→ DROP TABLE employees;
Like: Demolishing entire house 💣

🧹 TRUNCATE - Empty House:
Remove all data, keep structure
→ TRUNCATE TABLE employees;
Like: Removing all furniture but keeping house 🧹

🏢 Real Data Engineering Example:
- Project starts → CREATE tables
- Business adds column → ALTER table
- Old table removed → DROP table
- ETL staging cleanup → TRUNCATE table

⚠️ Danger Zones:
❌ DROP = Permanent deletion (no recovery!)
❌ TRUNCATE = All rows deleted (faster than DELETE)
❌ ALTER DROP COLUMN = Column gone forever

💡 Aha Moment:
DDL = Data Definition Language
CREATE = Build structure 🏗️
ALTER = Modify structure 🔧
DROP = Destroy structure 💥
TRUNCATE = Empty data 🧹`,

    deepDive: `👉 What is DDL?
DDL (Data Definition Language) commands define and modify database structure. The four core DDL commands are CREATE, ALTER, DROP, and TRUNCATE.

👉 Why DDL Matters?
Problem: Before storing customer or employee data, companies first need tables. Sometimes they need to modify schema or remove unused tables.

Real Example: ETL pipelines often TRUNCATE staging tables before loading fresh data into Redshift.

👉 The 4 Core DDL Commands:

1. CREATE - Create new tables
   Purpose: Create new tables in database
   Problem: New projects require fresh tables for storing business data
   
   Syntax:
   - CREATE TABLE employees (employee_id INT, name VARCHAR(50), salary INT);
   - CREATE TABLE customers (customer_id INT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100) UNIQUE);
   
   Real Use Cases:
   - Creating customer table
   - Creating order table
   - Building warehouse tables
   
   Common Mistakes:
   - Wrong datatype selection (using VARCHAR for numbers)
   - Missing primary key definition
   - Not defining constraints (NOT NULL, UNIQUE)
   
   Interview Traps:
   - Difference between CREATE and INSERT? (CREATE builds table structure, INSERT adds data)
   - Can CREATE define constraints? (Yes: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT)

2. ALTER - Modify existing table structure
   Purpose: Modify existing table structure
   Problem: Business requirements change over time
   
   Syntax:
   - ALTER TABLE employees ADD department VARCHAR(50);
   - ALTER TABLE employees DROP COLUMN salary;
   - ALTER TABLE employees MODIFY COLUMN name VARCHAR(100);
   - ALTER TABLE employees RENAME COLUMN name TO employee_name;
   
   Real Use Cases:
   - Adding phone number column
   - Changing datatype (VARCHAR(50) to VARCHAR(100))
   - Removing unused columns
   - Renaming columns for clarity
   
   Common Mistakes:
   - Dropping important columns accidentally
   - Changing datatype without validating existing data
   - Not checking dependencies before altering
   
   Interview Traps:
   - Can ALTER rename columns? (Yes: ALTER TABLE employees RENAME COLUMN old_name TO new_name;)
   - Can ALTER modify constraints? (Yes: can ADD or DROP constraints)

3. DROP - Remove complete table permanently
   Purpose: Remove complete table permanently
   Problem: Unused tables increase storage cost and confusion
   
   Syntax:
   - DROP TABLE employees;
   - DROP TABLE IF EXISTS employees; (safer - no error if table doesn't exist)
   
   Real Use Cases:
   - Removing temporary tables
   - Deleting deprecated project tables
   - Cleaning up test tables
   
   Common Mistakes:
   - Dropping production tables accidentally (VERY DANGEROUS!)
   - No backup before dropping
   - Not checking foreign key dependencies
   
   Interview Traps:
   - DROP vs DELETE? (DROP removes entire table structure, DELETE removes only rows)
   - Can dropped table be recovered? (No, unless you have backup)
   - DROP vs TRUNCATE? (DROP removes table, TRUNCATE removes only data)

4. TRUNCATE - Remove all rows quickly
   Purpose: Remove all rows quickly while keeping table structure
   Problem: Sometimes companies need to clean table data but keep schema intact
   
   Syntax:
   - TRUNCATE TABLE employees;
   
   Real Use Cases:
   - Refreshing staging tables in ETL pipelines
   - Cleaning temporary ETL tables
   - Resetting test data
   
   Common Mistakes:
   - Using TRUNCATE when only specific rows needed removal (use DELETE with WHERE instead)
   - Not understanding TRUNCATE cannot be rolled back easily
   
   Interview Traps:
   - TRUNCATE vs DELETE? (TRUNCATE removes all rows faster, cannot use WHERE, harder to rollback. DELETE can use WHERE, slower, can rollback)
   - Does TRUNCATE reset identity/auto-increment? (Yes, in most databases)

👉 Real Project Flow:
1. Project starts → CREATE tables
2. Business requirement changes → ALTER table
3. Old table removed → DROP table
4. ETL staging cleanup → TRUNCATE table

👉 Safety Best Practices:
- Always take backups before DROP or ALTER
- Use IF EXISTS with DROP to avoid errors
- Test ALTER commands on development environment first
- Document schema changes
- Use version control for DDL scripts

👉 Performance Tips:
- TRUNCATE is faster than DELETE for removing all rows
- CREATE indexes after bulk data load, not before
- Use appropriate data types to save storage
- Partition large tables for better performance`,

    types: `🏗️ SQL DDL Commands:

1️⃣ CREATE
👉 Objective: Create new tables in database
👉 Problem: New projects require fresh tables for storing business data
👉 Analogy: Building new house from scratch 🏗️
👉 Deep Explanation:
   - CREATE command builds new database objects
   - Most commonly used for creating tables
   - Can also create databases, views, indexes
👉 Syntax:
   - CREATE TABLE employees (employee_id INT, name VARCHAR(50), salary INT);
   - CREATE TABLE customers (customer_id INT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100) UNIQUE, city VARCHAR(50));
   - CREATE TABLE orders (order_id INT PRIMARY KEY, customer_id INT, amount DECIMAL(10,2), FOREIGN KEY (customer_id) REFERENCES customers(customer_id));
👉 Real Use Cases:
   - Creating customer table
   - Creating order table
   - Building warehouse tables
👉 Common Mistakes:
   - Wrong datatype selection (using VARCHAR for numbers)
   - Missing primary key definition
   - Not defining constraints
👉 Interview Traps:
   - Difference between CREATE and INSERT? (CREATE builds table structure, INSERT adds data)
   - Can CREATE define constraints? (Yes: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT)
👉 Quick Revision: CREATE = Build new table 🏗️

2️⃣ ALTER
👉 Objective: Modify existing table structure
👉 Problem: Business requirements change over time
👉 Analogy: Renovating house - adding new room 🔧
👉 Deep Explanation:
   - ALTER modifies existing table schema
   - Can add/remove/modify columns
   - Can add/remove constraints
👉 Syntax:
   - ALTER TABLE employees ADD department VARCHAR(50);
   - ALTER TABLE employees DROP COLUMN salary;
   - ALTER TABLE employees MODIFY COLUMN name VARCHAR(100);
   - ALTER TABLE employees RENAME COLUMN name TO employee_name;
   - ALTER TABLE employees ADD CONSTRAINT pk_emp PRIMARY KEY (employee_id);
👉 Real Use Cases:
   - Adding phone number column
   - Changing datatype (VARCHAR(50) to VARCHAR(100))
   - Removing unused columns
   - Renaming columns for clarity
👉 Common Mistakes:
   - Dropping important columns accidentally
   - Changing datatype without validating existing data
   - Not checking dependencies before altering
👉 Interview Traps:
   - Can ALTER rename columns? (Yes)
   - Can ALTER modify constraints? (Yes: can ADD or DROP constraints)
👉 Quick Revision: ALTER = Modify table structure 🔧

3️⃣ DROP
👉 Objective: Remove complete table permanently
👉 Problem: Unused tables increase storage cost and confusion
👉 Analogy: Demolishing entire house 💥
👉 Deep Explanation:
   - DROP removes entire table structure and data permanently
   - Cannot be recovered without backup
   - Also removes indexes, triggers, constraints associated with table
👉 Syntax:
   - DROP TABLE employees;
   - DROP TABLE IF EXISTS employees; (safer - no error if table doesn't exist)
👉 Real Use Cases:
   - Removing temporary tables
   - Deleting deprecated project tables
   - Cleaning up test tables
👉 Common Mistakes:
   - Dropping production tables accidentally (EXTREMELY DANGEROUS!)
   - No backup before dropping
   - Not checking foreign key dependencies
👉 Interview Traps:
   - DROP vs DELETE? (DROP removes entire table structure, DELETE removes only rows)
   - Can dropped table be recovered? (No, unless you have backup)
   - DROP vs TRUNCATE? (DROP removes table, TRUNCATE removes only data)
👉 Quick Revision: DROP = Delete complete table 💥

4️⃣ TRUNCATE
👉 Objective: Remove all rows quickly while keeping table structure
👉 Problem: Sometimes companies need to clean table data but keep schema intact
👉 Analogy: Removing all furniture but keeping house 🧹
👉 Deep Explanation:
   - TRUNCATE removes all rows from table
   - Table structure remains intact
   - Faster than DELETE (no row-by-row processing)
   - Resets auto-increment/identity counters
👉 Syntax:
   - TRUNCATE TABLE employees;
👉 Real Use Cases:
   - Refreshing staging tables in ETL pipelines
   - Cleaning temporary ETL tables
   - Resetting test data
👉 Common Mistakes:
   - Using TRUNCATE when only specific rows needed removal (use DELETE with WHERE)
   - Not understanding TRUNCATE cannot be rolled back easily
👉 Interview Traps:
   - TRUNCATE vs DELETE? (TRUNCATE removes all rows faster, cannot use WHERE, harder to rollback. DELETE can use WHERE, slower, can rollback)
   - Does TRUNCATE reset identity/auto-increment? (Yes, in most databases)
👉 Quick Revision: TRUNCATE = Remove all rows, keep table 🧹`,

    qa: [
      {
        q: "What is the difference between CREATE and INSERT?",
        hint: "Think about structure vs data",
        answer: "CREATE builds table structure, INSERT adds data to table",
        explanation: "CREATE defines the table schema (columns, data types, constraints). INSERT adds actual data rows into the table.",
        memory: "CREATE = Structure 🏗️ | INSERT = Data 📝"
      },
      {
        q: "What is the difference between DELETE and TRUNCATE?",
        hint: "Think about WHERE clause and speed",
        answer: "DELETE can use WHERE and is slower, TRUNCATE removes all rows faster but cannot use WHERE",
        explanation: "DELETE removes rows one by one (can use WHERE clause, can rollback). TRUNCATE removes all rows at once (faster, cannot use WHERE, harder to rollback, resets identity).",
        memory: "DELETE = Selective + Slow | TRUNCATE = All + Fast ⚡"
      },
      {
        q: "What is the difference between DROP and TRUNCATE?",
        hint: "Think about table structure",
        answer: "DROP removes entire table structure, TRUNCATE removes only data",
        explanation: "DROP deletes the complete table including structure. TRUNCATE removes all rows but keeps table structure intact.",
        memory: "DROP = Table gone 💥 | TRUNCATE = Data gone, table stays 🧹"
      },
      {
        q: "Can ALTER add constraints?",
        hint: "Think about modifications",
        answer: "Yes, ALTER can add or drop constraints",
        explanation: "ALTER TABLE can add constraints like PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, NOT NULL. Example: ALTER TABLE employees ADD CONSTRAINT pk_emp PRIMARY KEY (employee_id);",
        memory: "ALTER = Add/Drop constraints ✅"
      },
      {
        q: "What happens after DROP?",
        hint: "Think about recovery",
        answer: "Table is permanently deleted, cannot be recovered without backup",
        explanation: "DROP permanently removes the table and all its data. Recovery is only possible if you have a backup.",
        memory: "DROP = Permanent deletion ⚠️"
      },
      {
        q: "Can ALTER rename columns?",
        hint: "Think about column modifications",
        answer: "Yes, ALTER can rename columns",
        explanation: "ALTER TABLE employees RENAME COLUMN old_name TO new_name; Different databases may have slightly different syntax.",
        memory: "ALTER = Can rename columns ✅"
      },
      {
        q: "Does TRUNCATE reset auto-increment/identity?",
        hint: "Think about counters",
        answer: "Yes, TRUNCATE resets auto-increment counters",
        explanation: "TRUNCATE resets the auto-increment/identity counter back to its initial value. DELETE does not reset it.",
        memory: "TRUNCATE = Resets counter 🔄"
      },
      {
        q: "Can CREATE define multiple constraints?",
        hint: "Think about table definition",
        answer: "Yes, CREATE can define multiple constraints",
        explanation: "CREATE TABLE can define PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT constraints all together.",
        memory: "CREATE = Multiple constraints ✅"
      }
    ],

    coding: {
      title: "DDL Operations Challenge",
      scenario: "You're setting up database schema and managing table structures.",
      questions: [
        {
          q: "1. Create an employees table with columns: employee_id (INT), name (VARCHAR(50)), salary (INT)",
          answer: "CREATE TABLE employees (employee_id INT, name VARCHAR(50), salary INT);"
        },
        {
          q: "2. Create a customers table with customer_id as primary key, name, and email as unique",
          answer: "CREATE TABLE customers (customer_id INT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100) UNIQUE);"
        },
        {
          q: "3. Add a department column (VARCHAR(50)) to employees table",
          answer: "ALTER TABLE employees ADD department VARCHAR(50);"
        },
        {
          q: "4. Add a phone column (VARCHAR(15)) to customers table",
          answer: "ALTER TABLE customers ADD phone VARCHAR(15);"
        },
        {
          q: "5. Remove the salary column from employees table",
          answer: "ALTER TABLE employees DROP COLUMN salary;"
        },
        {
          q: "6. Rename the name column to employee_name in employees table",
          answer: "ALTER TABLE employees RENAME COLUMN name TO employee_name;"
        },
        {
          q: "7. Change the name column datatype to VARCHAR(100) in employees table",
          answer: "ALTER TABLE employees MODIFY COLUMN name VARCHAR(100);"
        },
        {
          q: "8. Remove all data from employees table but keep structure",
          answer: "TRUNCATE TABLE employees;"
        },
        {
          q: "9. Delete the employees table completely",
          answer: "DROP TABLE employees;"
        },
        {
          q: "10. Create orders table with order_id (PK), customer_id (FK), and amount",
          answer: "CREATE TABLE orders (order_id INT PRIMARY KEY, customer_id INT, amount DECIMAL(10,2), FOREIGN KEY (customer_id) REFERENCES customers(customer_id));"
        },
        {
          q: "11. Add primary key constraint to employee_id in employees table",
          answer: "ALTER TABLE employees ADD CONSTRAINT pk_emp PRIMARY KEY (employee_id);"
        },
        {
          q: "12. Drop table employees only if it exists",
          answer: "DROP TABLE IF EXISTS employees;"
        }
      ]
    },

    quiz: [
      { q: "CREATE is used to?", options: ["Add data", "Build table structure", "Modify data", "Delete data"], answer: 1 },
      { q: "ALTER is used to?", options: ["Create table", "Modify table structure", "Delete table", "Add data"], answer: 1 },
      { q: "DROP is used to?", options: ["Add column", "Remove entire table", "Remove rows", "Modify column"], answer: 1 },
      { q: "TRUNCATE is used to?", options: ["Drop table", "Remove all rows, keep structure", "Add rows", "Modify structure"], answer: 1 },
      { q: "DELETE vs TRUNCATE?", options: ["Same thing", "DELETE selective, TRUNCATE all rows", "TRUNCATE selective", "No difference"], answer: 1 },
      { q: "DROP vs TRUNCATE?", options: ["Same thing", "DROP removes table, TRUNCATE removes data", "TRUNCATE removes table", "No difference"], answer: 1 },
      { q: "Can ALTER add constraints?", options: ["No", "Yes", "Only PRIMARY KEY", "Only FOREIGN KEY"], answer: 1 },
      { q: "Can ALTER rename columns?", options: ["No", "Yes", "Only in MySQL", "Only in PostgreSQL"], answer: 1 },
      { q: "TRUNCATE resets auto-increment?", options: ["No", "Yes", "Sometimes", "Only in MySQL"], answer: 1 },
      { q: "Can dropped table be recovered?", options: ["Yes, always", "No, unless backup exists", "Yes, with ROLLBACK", "Yes, automatically"], answer: 1 }
    ],

    interview: "DDL (Data Definition Language) includes CREATE, ALTER, DROP, and TRUNCATE commands. CREATE builds table structure with columns, data types, and constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT). ALTER modifies existing table structure (add/drop/modify columns, add/drop constraints, rename columns). DROP removes entire table permanently (cannot be recovered without backup). TRUNCATE removes all rows quickly while keeping table structure (faster than DELETE, resets auto-increment, cannot use WHERE). Key differences: CREATE vs INSERT (structure vs data), DELETE vs TRUNCATE (selective vs all rows, slow vs fast), DROP vs TRUNCATE (removes table vs removes data). Real-world usage: ETL pipelines TRUNCATE staging tables before loading fresh data into Redshift. Safety practices: take backups before DROP/ALTER, use IF EXISTS with DROP, test on development first. ALTER can add/drop constraints and rename columns.",

    memory: `👉 CREATE = Build table 🏗️
👉 ALTER = Modify structure 🔧
👉 DROP = Destroy table 💥
👉 TRUNCATE = Empty data 🧹

CATD Formula:
CREATE → Build
ALTER → Modify
TRUNCATE → Empty Data
DROP → Destroy Table

Key Differences:
CREATE vs INSERT: Structure vs Data
DELETE vs TRUNCATE: Selective vs All rows
DROP vs TRUNCATE: Remove table vs Remove data
DROP vs DELETE: Remove table vs Remove rows

Danger Zones:
⚠️ DROP = Permanent (no recovery!)
⚠️ TRUNCATE = All rows deleted
⚠️ ALTER DROP COLUMN = Column gone forever

Safety Checklist:
✅ Backup before DROP/ALTER
✅ Use IF EXISTS with DROP
✅ Test on development first
✅ Document schema changes
✅ Version control DDL scripts

Real Flow:
Project starts → CREATE
Requirement changes → ALTER
Old table removed → DROP
ETL staging cleanup → TRUNCATE`,

    revision: "SQL DDL: CREATE (build table structure), ALTER (modify structure - add/drop/modify columns, add/drop constraints), DROP (remove entire table permanently), TRUNCATE (remove all rows, keep structure, reset auto-increment) - essential for schema management. Safety: backup before DROP/ALTER, use IF EXISTS, test on dev first"
  },

  "sql-joins": {
    title: "SQL Joins",
    icon: "🔗",
    difficulty: "Intermediate",
    duration: "70 min",
    description: "Joins combine data from multiple tables using related columns. This is one of the most frequently asked SQL interview topics and is heavily used in real-world data engineering pipelines.",
    
    comic: `🔗 Imagine Wedding Matchmaking:

👥 Problem:
Customers table has names 📄
Orders table has purchases 🛍️
Payments table has transactions 💳
Need combined business report! 📊

📊 Sample Data:
Customers: (1, Ankit), (2, Rahul)
Orders: (101, customer_id=1), (102, customer_id=3)

🔹 INNER JOIN - Only Mutual Friends:
Result: Only customer_id=1 matches
Like: Only mutual friends appear in both groups
Use: Show customers who placed orders

🔹 LEFT JOIN - All Left + Matched Right:
Result: All customers (Ankit, Rahul) + their orders
Like: Invite all school students even if some didn't attend event
Use: Find all customers including those who never ordered

🔹 RIGHT JOIN - All Right + Matched Left:
Result: All orders + customer details if available
Like: Show all event attendees even if registration missing
Use: Show all orders even if customer details missing

🔹 FULL JOIN - Everything:
Result: All customers + All orders
Like: Merge both family guest lists
Use: Complete audit reports

🔹 SELF JOIN - Same Table:
Employee-Manager relationship in same table
Like: Family tree relationships
Use: Hierarchical data

🔹 CROSS JOIN - All Combinations:
Colors × Sizes = All combinations
Like: All shirt colors with all sizes
Use: Product combinations

💡 Aha Moment:
Joins = Combining related data from multiple tables! 🔗`,

    deepDive: `👉 What are SQL Joins?
Joins combine data from multiple tables using related columns (usually foreign keys).

👉 Why Joins Matter?
Problem: Companies store customer, order, payment, and product data in separate tables. Business teams need combined reports.

Real Example: Amazon joins customer, orders, payment, and delivery tables daily for analytics.

👉 Sample Tables for Examples:

Customers Table:
customer_id | name
1           | Ankit
2           | Rahul
3           | Priya

Orders Table:
order_id | customer_id | amount
101      | 1           | 5000
102      | 1           | 3000
103      | 4           | 2000

👉 The 6 Types of Joins:

1. INNER JOIN - Return matching records from both tables
   Objective: Return only common records
   Deep Explanation: Only records that have matching values in both tables are returned
   
   Syntax:
   SELECT c.name, o.order_id, o.amount
   FROM customers c
   INNER JOIN orders o ON c.customer_id = o.customer_id;
   
   Result: Only customer_id=1 (Ankit) appears because only Ankit has orders
   
   Real Use: Show customers who placed orders
   Analogy: Only mutual friends appear in both friend groups
   
   Interview Tip: Most commonly used join in production

2. LEFT JOIN (LEFT OUTER JOIN) - All left + matching right
   Objective: Return all left table records + matching right table records
   Deep Explanation: All left table records appear even if no match exists (NULL for right table columns)
   
   Syntax:
   SELECT c.name, o.order_id, o.amount
   FROM customers c
   LEFT JOIN orders o ON c.customer_id = o.customer_id;
   
   Result: All customers (Ankit, Rahul, Priya) appear. Rahul and Priya have NULL for order columns
   
   Real Use: Find all customers including those who never placed orders
   Analogy: Invite all school students even if some didn't attend event
   
   Interview Tip: Used to find missing relationships

3. RIGHT JOIN (RIGHT OUTER JOIN) - All right + matching left
   Objective: Return all right table records + matching left table records
   Deep Explanation: All right table records appear even if no match exists
   
   Syntax:
   SELECT c.name, o.order_id, o.amount
   FROM customers c
   RIGHT JOIN orders o ON c.customer_id = o.customer_id;
   
   Result: All orders appear. Order 103 (customer_id=4) shows NULL for customer name
   
   Real Use: Show all orders even if customer details missing
   Analogy: Show all event attendees even if some registration forms missing
   
   Interview Tip: Can be rewritten as LEFT JOIN by swapping tables

4. FULL JOIN (FULL OUTER JOIN) - Everything
   Objective: Return all records from both tables
   Deep Explanation: Combines left + right unmatched records
   
   Syntax:
   SELECT c.name, o.order_id, o.amount
   FROM customers c
   FULL JOIN orders o ON c.customer_id = o.customer_id;
   
   Result: All customers + All orders (with NULLs where no match)
   
   Real Use: Complete audit reports, data reconciliation
   Analogy: Merge both family guest lists
   
   Interview Tip: Not supported in MySQL (use UNION of LEFT and RIGHT)

5. SELF JOIN - Join table with itself
   Objective: Join table with itself for hierarchical relationships
   Problem: Need hierarchical relationships in same table
   Deep Explanation: Used when same table references itself (employee-manager, parent-child)
   
   Example Table:
   employee_id | name   | manager_id
   1           | Ankit  | NULL
   2           | Rahul  | 1
   3           | Priya  | 1
   
   Syntax:
   SELECT e.name AS employee, m.name AS manager
   FROM employees e
   LEFT JOIN employees m ON e.manager_id = m.employee_id;
   
   Result: Shows employee-manager pairs
   
   Real Use: Employee-manager hierarchy, organizational charts
   Analogy: Family tree relationships
   
   Interview Tip: Must use table aliases (e and m)

6. CROSS JOIN - All possible combinations
   Objective: Return all possible combinations (Cartesian product)
   Deep Explanation: Each row from first table combines with every row of second table
   
   Example Tables:
   Colors: Red, Blue
   Sizes: S, M, L
   
   Syntax:
   SELECT * FROM colors CROSS JOIN sizes;
   
   Result: 2 × 3 = 6 combinations (Red-S, Red-M, Red-L, Blue-S, Blue-M, Blue-L)
   
   Real Use: Product combinations, testing scenarios
   Analogy: All shirt colors with all sizes
   
   Interview Tip: Can create huge datasets accidentally (be careful!)

👉 Real Project Flow:
1. Customer data extracted
2. Orders data extracted
3. Payment data extracted
4. Joins combine all business records
5. Dashboard/report generation

👉 Common Mistakes:
- Joining on wrong columns (non-matching data types)
- Forgetting table aliases
- Cross join accidentally creating huge datasets
- Not understanding NULL behavior in outer joins

👉 Performance Tips:
- Index join columns (especially foreign keys)
- Use INNER JOIN when possible (faster than OUTER joins)
- Filter data before joining (use WHERE clause)
- Avoid CROSS JOIN on large tables`,

    types: `🔗 SQL Join Types:

1️⃣ INNER JOIN
👉 Objective: Return matching records from both tables
👉 Problem: Need only common data from both tables
👉 Analogy: Only mutual friends appear in both friend groups 👥
👉 Deep Explanation: Only common records are returned. If no match, record is excluded
👉 Syntax:
   SELECT c.name, o.order_id
   FROM customers c
   INNER JOIN orders o ON c.customer_id = o.customer_id;
👉 Result: Only customer_id = 1 matches (Ankit with orders)
👉 Real Use: Show customers who placed orders
👉 Interview Answer: INNER JOIN returns only matching records from both tables
👉 Quick Revision: Inner Join = Common data only ✅

2️⃣ LEFT JOIN (LEFT OUTER JOIN)
👉 Objective: Return all left table records + matching right table records
👉 Problem: Need all left table data even if no match in right table
👉 Analogy: Invite all school students even if some didn't attend event 🏫
👉 Deep Explanation: All left table records appear even if no match exists (NULL for right table)
👉 Syntax:
   SELECT c.name, o.order_id
   FROM customers c
   LEFT JOIN orders o ON c.customer_id = o.customer_id;
👉 Result: All customers appear (Ankit, Rahul). Rahul has NULL for orders
👉 Real Use: Find all customers including those who never placed orders
👉 Interview Answer: LEFT JOIN returns all left table records + matching right records
👉 Quick Revision: Left Join = All left + matched right ⬅️

3️⃣ RIGHT JOIN (RIGHT OUTER JOIN)
👉 Objective: Return all right table records + matching left table records
👉 Problem: Need all right table data even if no match in left table
👉 Analogy: Show all event attendees even if registration forms missing 📝
👉 Deep Explanation: All right table records appear even if no match exists
👉 Syntax:
   SELECT c.name, o.order_id
   FROM customers c
   RIGHT JOIN orders o ON c.customer_id = o.customer_id;
👉 Result: All orders appear. Order with customer_id=3 shows NULL for customer name
👉 Real Use: Show all orders even if customer details missing
👉 Interview Answer: RIGHT JOIN returns all right table records + matching left records
👉 Quick Revision: Right Join = All right + matched left ➡️

4️⃣ FULL JOIN (FULL OUTER JOIN)
👉 Objective: Return all records from both tables
👉 Problem: Need complete data from both tables
👉 Analogy: Merge both family guest lists 👨‍👩‍👧
👉 Deep Explanation: Combines left + right unmatched records (NULLs where no match)
👉 Syntax:
   SELECT c.name, o.order_id
   FROM customers c
   FULL JOIN orders o ON c.customer_id = o.customer_id;
👉 Result: All customers + All orders (with NULLs where no match)
👉 Real Use: Complete audit reports, data reconciliation
👉 Interview Answer: FULL JOIN returns all records from both tables
👉 Note: Not supported in MySQL (use UNION of LEFT and RIGHT)
👉 Quick Revision: Full Join = Everything 🌐

5️⃣ SELF JOIN
👉 Objective: Join table with itself
👉 Problem: Need hierarchical relationships in same table
👉 Analogy: Family tree relationships 🌳
👉 Deep Explanation: Used when same table references itself (employee-manager)
👉 Example: Employee table with employee_id, name, manager_id
👉 Syntax:
   SELECT e.name AS employee, m.name AS manager
   FROM employees e
   LEFT JOIN employees m ON e.manager_id = m.employee_id;
👉 Real Use: Employee-manager hierarchy, organizational charts
👉 Interview Answer: SELF JOIN joins table with itself for hierarchical data
👉 Quick Revision: Self Join = Same table join 🔄

6️⃣ CROSS JOIN
👉 Objective: Return all possible combinations (Cartesian product)
👉 Problem: Need all combinations of two datasets
👉 Analogy: All shirt colors with all sizes 👕
👉 Deep Explanation: Each row from first table combines with every row of second table
👉 Syntax:
   SELECT * FROM colors CROSS JOIN sizes;
👉 Example: 3 colors × 4 sizes = 12 combinations
👉 Real Use: Product combinations, testing combinations
👉 Interview Answer: CROSS JOIN returns all possible combinations
👉 Warning: Can create huge datasets accidentally!
👉 Quick Revision: Cross Join = All combinations ✖️`,

    qa: [
      {
        q: "What is the difference between INNER JOIN and LEFT JOIN?",
        hint: "Think about which records are included",
        answer: "INNER JOIN returns only matching records, LEFT JOIN returns all left table records + matching right records",
        explanation: "INNER JOIN excludes non-matching records. LEFT JOIN includes all left table records even if no match exists (NULL for right table columns).",
        memory: "INNER = Common only | LEFT = All left + matched right 🔗"
      },
      {
        q: "What is the difference between LEFT JOIN and RIGHT JOIN?",
        hint: "Think about which table is preserved",
        answer: "LEFT JOIN preserves all left table records, RIGHT JOIN preserves all right table records",
        explanation: "LEFT JOIN keeps all left table rows. RIGHT JOIN keeps all right table rows. They can be rewritten by swapping table order.",
        memory: "LEFT = All left ⬅️ | RIGHT = All right ➡️"
      },
      {
        q: "What is SELF JOIN?",
        hint: "Think about same table",
        answer: "SELF JOIN joins a table with itself for hierarchical relationships",
        explanation: "SELF JOIN is used when a table references itself, like employee-manager relationships or parent-child hierarchies. Must use table aliases.",
        memory: "SELF JOIN = Same table 🔄"
      },
      {
        q: "What are CROSS JOIN use cases?",
        hint: "Think about combinations",
        answer: "Product combinations, testing scenarios, generating all possible pairs",
        explanation: "CROSS JOIN creates Cartesian product (all combinations). Used for product variants (colors × sizes), test case generation, or calendar date combinations.",
        memory: "CROSS JOIN = All combinations ✖️"
      },
      {
        q: "Which join is used most in ETL?",
        hint: "Think about common operations",
        answer: "INNER JOIN and LEFT JOIN are most commonly used",
        explanation: "INNER JOIN for matching records (fact-dimension joins). LEFT JOIN to preserve all records from main table and find missing relationships.",
        memory: "ETL favorites: INNER + LEFT 🎯"
      },
      {
        q: "Can FULL JOIN be used in MySQL?",
        hint: "Think about database support",
        answer: "No, MySQL doesn't support FULL JOIN. Use UNION of LEFT and RIGHT JOIN",
        explanation: "MySQL doesn't have FULL JOIN. Workaround: SELECT ... FROM t1 LEFT JOIN t2 ... UNION SELECT ... FROM t1 RIGHT JOIN t2 ...",
        memory: "MySQL: No FULL JOIN, use UNION ⚠️"
      },
      {
        q: "What happens if you forget ON clause in JOIN?",
        hint: "Think about default behavior",
        answer: "Results in CROSS JOIN (Cartesian product)",
        explanation: "Without ON clause, database performs CROSS JOIN, creating all possible combinations. This can create huge datasets accidentally.",
        memory: "No ON = CROSS JOIN ⚠️"
      },
      {
        q: "Why use table aliases in joins?",
        hint: "Think about readability and requirements",
        answer: "Improves readability, required for SELF JOIN, avoids ambiguity",
        explanation: "Aliases (c, o) make queries shorter and clearer. Required for SELF JOIN to distinguish same table. Prevents ambiguous column errors.",
        memory: "Aliases = Clarity + Required for SELF JOIN ✅"
      }
    ],

    coding: {
      title: "SQL Joins Challenge",
      scenario: "You're joining customer, order, and employee tables for business reports.",
      questions: [
        {
          q: "1. Show customers who placed orders (INNER JOIN)",
          answer: "SELECT c.name, o.order_id FROM customers c INNER JOIN orders o ON c.customer_id = o.customer_id;"
        },
        {
          q: "2. Show all customers including those who never ordered (LEFT JOIN)",
          answer: "SELECT c.name, o.order_id FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id;"
        },
        {
          q: "3. Show all orders even if customer details missing (RIGHT JOIN)",
          answer: "SELECT c.name, o.order_id FROM customers c RIGHT JOIN orders o ON c.customer_id = o.customer_id;"
        },
        {
          q: "4. Show all customers and all orders (FULL JOIN)",
          answer: "SELECT c.name, o.order_id FROM customers c FULL JOIN orders o ON c.customer_id = o.customer_id;"
        },
        {
          q: "5. Show employee-manager relationships (SELF JOIN)",
          answer: "SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.employee_id;"
        },
        {
          q: "6. Show all color-size combinations (CROSS JOIN)",
          answer: "SELECT * FROM colors CROSS JOIN sizes;"
        },
        {
          q: "7. Join customers, orders, and payments tables",
          answer: "SELECT c.name, o.order_id, p.amount FROM customers c INNER JOIN orders o ON c.customer_id = o.customer_id INNER JOIN payments p ON o.order_id = p.order_id;"
        },
        {
          q: "8. Find customers who never placed orders (LEFT JOIN with NULL check)",
          answer: "SELECT c.name FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL;"
        },
        {
          q: "9. Count orders per customer (JOIN with GROUP BY)",
          answer: "SELECT c.name, COUNT(o.order_id) AS order_count FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.name;"
        },
        {
          q: "10. Show customer name, order id, and total amount",
          answer: "SELECT c.name, o.order_id, o.amount FROM customers c INNER JOIN orders o ON c.customer_id = o.customer_id;"
        },
        {
          q: "11. Find employees without managers (SELF JOIN)",
          answer: "SELECT e.name FROM employees e LEFT JOIN employees m ON e.manager_id = m.employee_id WHERE m.employee_id IS NULL;"
        },
        {
          q: "12. Show all product-category combinations",
          answer: "SELECT p.product_name, c.category_name FROM products p CROSS JOIN categories c;"
        }
      ]
    },

    quiz: [
      { q: "INNER JOIN returns?", options: ["All records", "Only matching records", "All left records", "All right records"], answer: 1 },
      { q: "LEFT JOIN returns?", options: ["Only matching", "All left + matched right", "All right", "All combinations"], answer: 1 },
      { q: "RIGHT JOIN returns?", options: ["All left", "All right + matched left", "Only matching", "All combinations"], answer: 1 },
      { q: "FULL JOIN returns?", options: ["Only matching", "All records from both tables", "All left", "All right"], answer: 1 },
      { q: "SELF JOIN is?", options: ["Two different tables", "Table joined with itself", "Cross join", "Inner join"], answer: 1 },
      { q: "CROSS JOIN creates?", options: ["Matching records", "All combinations (Cartesian product)", "Only left records", "Only right records"], answer: 1 },
      { q: "Most used join in ETL?", options: ["CROSS JOIN", "INNER and LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], answer: 1 },
      { q: "MySQL supports FULL JOIN?", options: ["Yes", "No, use UNION", "Only in version 8", "Yes, but slow"], answer: 1 },
      { q: "JOIN without ON clause?", options: ["Error", "Results in CROSS JOIN", "Results in INNER JOIN", "Returns nothing"], answer: 1 },
      { q: "Table aliases required for?", options: ["INNER JOIN", "SELF JOIN", "LEFT JOIN", "RIGHT JOIN"], answer: 1 }
    ],

    interview: "SQL Joins combine data from multiple tables using related columns. INNER JOIN returns only matching records from both tables (most common in production). LEFT JOIN returns all left table records + matching right records (used to find missing relationships). RIGHT JOIN returns all right table records + matching left records (can be rewritten as LEFT JOIN by swapping tables). FULL JOIN returns all records from both tables (not supported in MySQL - use UNION of LEFT and RIGHT). SELF JOIN joins table with itself for hierarchical relationships like employee-manager (requires table aliases). CROSS JOIN returns all possible combinations (Cartesian product - use carefully as it can create huge datasets). Real-world usage: Amazon joins customer, orders, payment, and delivery tables daily for analytics. Performance tips: index join columns, use INNER JOIN when possible, filter before joining. Common mistakes: joining on wrong columns, forgetting aliases, accidental CROSS JOIN. JOIN without ON clause results in CROSS JOIN.",

    memory: `👉 INNER = Common only ✅
👉 LEFT = All left + matched right ⬅️
👉 RIGHT = All right + matched left ➡️
👉 FULL = Everything 🌐
👉 SELF = Same table 🔄
👉 CROSS = All combinations ✖️

Join Formula:
INNER = Common
LEFT = All Left
RIGHT = All Right
FULL = Everything
SELF = Same Table
CROSS = All Combinations

Visual Memory:
🔹 INNER: Only overlap
🔹 LEFT: Left circle + overlap
🔹 RIGHT: Right circle + overlap
🔹 FULL: Both circles complete
🔹 SELF: Circle pointing to itself
🔹 CROSS: Grid of all combinations

Key Points:
✅ INNER = Most common in production
✅ LEFT = Find missing relationships
✅ SELF = Requires aliases
✅ CROSS = Creates huge datasets
⚠️ MySQL: No FULL JOIN (use UNION)
⚠️ No ON = CROSS JOIN

Real Usage:
ETL: INNER + LEFT most common
Amazon: Joins customer + orders + payment + delivery`,

    revision: "SQL Joins: INNER (matching only), LEFT (all left + matched right), RIGHT (all right + matched left), FULL (all records), SELF (same table - hierarchical), CROSS (all combinations) - essential for combining related data. Most used: INNER and LEFT. Performance: index join columns, filter before joining"
  },

  "sql-aggregation": {
    title: "SQL Aggregation",
    icon: "📊",
    difficulty: "Intermediate",
    duration: "60 min",
    description: "Aggregation helps summarize large datasets into meaningful business insights using GROUP BY and HAVING clauses.",
    
    comic: `📊 Imagine Classroom Result Summary:

📚 Problem:
School has 1000 students
Manually checking each student's marks = Hours of work!
School wants: Average marks per class

❌ Without GROUP BY:
Ankit, IT, 50000
Rahul, IT, 60000
Priya, HR, 40000
→ Too much detail, hard to analyze!

✅ With GROUP BY:
IT Department: Total Salary = 110000
HR Department: Total Salary = 40000
→ Clear summary for decision making!

📊 Sample Data:
Employees:
- Ankit, IT, 50000
- Rahul, IT, 60000
- Priya, HR, 40000

🔹 GROUP BY Example:
SELECT department, SUM(salary)
FROM employees
GROUP BY department;

Result:
IT: 110000
HR: 40000

🔹 HAVING Example:
SELECT department, SUM(salary)
FROM employees
GROUP BY department
HAVING SUM(salary) > 50000;

Result:
IT: 110000 (HR filtered out!)

💡 Aha Moment:
GROUP BY = Create groups 📦
HAVING = Filter groups 🎯
WHERE = Filter rows before grouping ⚡

Real Business Use:
- Sales by region 🌍
- Orders by customer 🛒
- Revenue by product 💰
- Employees by department 👥`,

    deepDive: `👉 What is SQL Aggregation?
Aggregation summarizes large datasets into meaningful business insights using GROUP BY and HAVING clauses.

👉 Why Aggregation Matters?
Problem: Companies cannot manually analyze millions of records. They need grouped summaries for decision making.

Real Example: Amazon groups millions of orders by product/category/city for business reporting.

👉 Sample Table for Examples:

Employees Table:
employee_name | department | salary
Ankit         | IT         | 50000
Rahul         | IT         | 60000
Priya         | HR         | 40000
Neha          | HR         | 45000
Vikram        | IT         | 55000

👉 The 2 Core Aggregation Concepts:

1. GROUP BY - Group similar records together
   Objective: Group similar records together and perform calculations
   Problem: Business wants total salary department-wise instead of individual employee salaries
   
   Deep Explanation:
   - GROUP BY groups rows having similar values
   - Used with aggregate functions like COUNT, SUM, AVG, MIN, MAX
   - Creates one row per group
   
   Syntax:
   SELECT department, SUM(salary) AS total_salary
   FROM employees
   GROUP BY department;
   
   Output:
   department | total_salary
   IT         | 165000 (50000 + 60000 + 55000)
   HR         | 85000  (40000 + 45000)
   
   Real Use Cases:
   - Total revenue by city
   - Orders count by customer
   - Employees count by department
   - Average salary by department
   
   Common Mistakes:
   - Using non-grouped columns in SELECT (must be in GROUP BY or aggregate function)
   - Forgetting aggregate functions
   - Wrong: SELECT name, department, SUM(salary) FROM employees GROUP BY department;
   - Right: SELECT department, SUM(salary) FROM employees GROUP BY department;
   
   Interview Traps:
   - Can GROUP BY work without aggregate functions? (Yes, acts like DISTINCT)
   - Difference between DISTINCT and GROUP BY? (DISTINCT removes duplicates, GROUP BY allows aggregation)

2. HAVING - Filter grouped results
   Objective: Filter grouped results after aggregation
   Problem: After grouping data, business wants only specific groups
   
   Deep Explanation:
   - HAVING filters aggregated results after GROUP BY
   - Works on grouped data (after aggregation)
   - Can use aggregate functions in condition
   
   Syntax:
   SELECT department, SUM(salary) AS total_salary
   FROM employees
   GROUP BY department
   HAVING SUM(salary) > 100000;
   
   Output:
   department | total_salary
   IT         | 165000
   (HR filtered out because 85000 < 100000)
   
   Real Use Cases:
   - Show departments with high salary budgets
   - Find customers with more than 5 orders
   - Show products with sales above 1 lakh
   - Find cities with more than 100 customers
   
   Common Mistakes:
   - Using WHERE instead of HAVING after aggregation
   - Wrong: SELECT department, SUM(salary) FROM employees GROUP BY department WHERE SUM(salary) > 100000;
   - Right: SELECT department, SUM(salary) FROM employees GROUP BY department HAVING SUM(salary) > 100000;
   
   Interview Traps:
   - Difference between WHERE and HAVING? (WHERE filters rows before grouping, HAVING filters groups after aggregation)
   - Can HAVING be used without GROUP BY? (Yes, but rare - treats entire table as one group)

👉 WHERE vs HAVING:

WHERE:
- Filters rows BEFORE grouping
- Cannot use aggregate functions
- Executes first
- Example: WHERE salary > 50000

HAVING:
- Filters groups AFTER aggregation
- Can use aggregate functions
- Executes after GROUP BY
- Example: HAVING SUM(salary) > 100000

Combined Example:
SELECT department, SUM(salary) AS total_salary
FROM employees
WHERE salary > 40000  -- Filter rows first
GROUP BY department
HAVING SUM(salary) > 100000;  -- Filter groups after

👉 Query Execution Order:
1. FROM - Choose table
2. WHERE - Filter rows
3. GROUP BY - Create groups
4. HAVING - Filter groups
5. SELECT - Choose columns
6. ORDER BY - Sort results
7. LIMIT - Restrict output

👉 Real Project Flow:
1. Raw sales data collected
2. Group records (GROUP BY)
3. Apply aggregate calculations (SUM, AVG, COUNT)
4. Filter important groups (HAVING)
5. Generate dashboard reports

👉 Common Aggregate Functions with GROUP BY:
- COUNT(*) - Count rows per group
- SUM(column) - Total per group
- AVG(column) - Average per group
- MIN(column) - Minimum per group
- MAX(column) - Maximum per group

👉 Performance Tips:
- Index columns used in GROUP BY
- Use WHERE to filter before grouping (reduces data)
- Avoid grouping on too many columns
- Use HAVING only when necessary`,

    types: `📊 SQL Aggregation Concepts:

1️⃣ GROUP BY
👉 Objective: Group similar records together and perform calculations
👉 Problem: Business wants total salary department-wise instead of individual employee salaries
👉 Analogy: Organizing students by class for average marks calculation 📚
👉 Deep Explanation:
   - GROUP BY groups rows having similar values
   - Used with aggregate functions like COUNT, SUM, AVG, MIN, MAX
   - Creates one row per group
👉 Syntax:
   SELECT department, SUM(salary) AS total_salary
   FROM employees
   GROUP BY department;
👉 Output Example:
   IT: 110000
   HR: 40000
👉 Real Use Cases:
   - Total revenue by city
   - Orders by customer
   - Employees by department
   - Average salary by department
👉 Common Mistakes:
   - Using non-grouped columns in SELECT (must be in GROUP BY or aggregate)
   - Forgetting aggregate functions
👉 Interview Traps:
   - Can GROUP BY work without aggregate functions? (Yes, acts like DISTINCT)
   - Difference between DISTINCT and GROUP BY? (DISTINCT removes duplicates, GROUP BY allows aggregation)
👉 Quick Revision: GROUP BY = Group similar records 📦

2️⃣ HAVING
👉 Objective: Filter grouped results after aggregation
👉 Problem: After grouping data, business wants only specific groups
👉 Analogy: After calculating class averages, show only classes with average > 75% 🎯
👉 Deep Explanation:
   - HAVING filters aggregated results after GROUP BY
   - Works on grouped data (after aggregation)
   - Can use aggregate functions in condition
👉 Syntax:
   SELECT department, SUM(salary) AS total_salary
   FROM employees
   GROUP BY department
   HAVING SUM(salary) > 50000;
👉 Output Example:
   IT: 110000
   (HR filtered out)
👉 Real Use Cases:
   - Show departments with high salary budgets
   - Find customers with more than 5 orders
   - Show products with sales above 1 lakh
👉 Common Mistakes:
   - Using WHERE instead of HAVING after aggregation
👉 Interview Traps:
   - Difference between WHERE and HAVING? (WHERE filters rows before grouping, HAVING filters groups after)
   - Can HAVING be used without GROUP BY? (Yes, but rare - treats entire table as one group)
👉 Quick Revision: HAVING = Filter grouped data 🎯

3️⃣ WHERE vs HAVING
👉 WHERE:
   - Filters rows BEFORE grouping
   - Cannot use aggregate functions
   - Executes first
   - Example: WHERE salary > 50000
👉 HAVING:
   - Filters groups AFTER aggregation
   - Can use aggregate functions
   - Executes after GROUP BY
   - Example: HAVING SUM(salary) > 100000
👉 Combined Example:
   SELECT department, SUM(salary)
   FROM employees
   WHERE salary > 40000  -- Filter rows first
   GROUP BY department
   HAVING SUM(salary) > 100000;  -- Filter groups after
👉 Memory: WHERE = Before grouping ⚡ | HAVING = After grouping 🎯`,

    qa: [
      {
        q: "What is the difference between WHERE and HAVING?",
        hint: "Think about when they execute",
        answer: "WHERE filters rows before grouping, HAVING filters groups after aggregation",
        explanation: "WHERE executes before GROUP BY and cannot use aggregate functions. HAVING executes after GROUP BY and can use aggregate functions like SUM, COUNT, AVG.",
        memory: "WHERE = Before grouping ⚡ | HAVING = After grouping 🎯"
      },
      {
        q: "What is the difference between GROUP BY and DISTINCT?",
        hint: "Think about aggregation",
        answer: "DISTINCT removes duplicates, GROUP BY allows aggregation on groups",
        explanation: "DISTINCT simply removes duplicate rows. GROUP BY groups similar rows and allows aggregate functions (SUM, COUNT, AVG) to be applied on each group.",
        memory: "DISTINCT = Remove duplicates | GROUP BY = Group + Aggregate 📊"
      },
      {
        q: "Can HAVING work without GROUP BY?",
        hint: "Think about entire table",
        answer: "Yes, but rare - treats entire table as one group",
        explanation: "HAVING can be used without GROUP BY, treating the entire table as a single group. Example: SELECT SUM(salary) FROM employees HAVING SUM(salary) > 100000;",
        memory: "HAVING without GROUP BY = Entire table as one group 📦"
      },
      {
        q: "Why are aggregate functions used with GROUP BY?",
        hint: "Think about calculations per group",
        answer: "To perform calculations on each group separately",
        explanation: "Aggregate functions (SUM, COUNT, AVG, MIN, MAX) calculate values for each group created by GROUP BY. Without aggregates, GROUP BY just acts like DISTINCT.",
        memory: "GROUP BY + Aggregates = Calculations per group 🧮"
      },
      {
        q: "Can GROUP BY work without aggregate functions?",
        hint: "Think about DISTINCT",
        answer: "Yes, it acts like DISTINCT",
        explanation: "GROUP BY without aggregate functions simply returns unique combinations of grouped columns, similar to DISTINCT.",
        memory: "GROUP BY alone = Like DISTINCT ✨"
      },
      {
        q: "Can you use non-grouped columns in SELECT with GROUP BY?",
        hint: "Think about ambiguity",
        answer: "No, all SELECT columns must be in GROUP BY or aggregate functions",
        explanation: "When using GROUP BY, every column in SELECT must either be in GROUP BY clause or wrapped in an aggregate function. Otherwise, it's ambiguous which value to show.",
        memory: "SELECT with GROUP BY = Must be grouped or aggregated ⚠️"
      },
      {
        q: "What is the query execution order with GROUP BY?",
        hint: "Think about sequence",
        answer: "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT",
        explanation: "SQL executes in this order: FROM (table), WHERE (filter rows), GROUP BY (create groups), HAVING (filter groups), SELECT (choose columns), ORDER BY (sort), LIMIT (restrict).",
        memory: "Order: FROM → WHERE → GROUP BY → HAVING → SELECT 🔄"
      },
      {
        q: "Can WHERE clause use aggregate functions?",
        hint: "Think about execution order",
        answer: "No, WHERE executes before aggregation",
        explanation: "WHERE filters rows before GROUP BY, so aggregate functions don't exist yet. Use HAVING for filtering on aggregate functions.",
        memory: "WHERE = No aggregates | HAVING = Yes aggregates ✅"
      }
    ],

    coding: {
      title: "SQL Aggregation Challenge",
      scenario: "You're analyzing employee, sales, and customer data for business reports.",
      questions: [
        {
          q: "1. Count total employees per department",
          answer: "SELECT department, COUNT(*) AS employee_count FROM employees GROUP BY department;"
        },
        {
          q: "2. Calculate total salary per department",
          answer: "SELECT department, SUM(salary) AS total_salary FROM employees GROUP BY department;"
        },
        {
          q: "3. Find average salary per department",
          answer: "SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department;"
        },
        {
          q: "4. Show departments with total salary greater than 100000",
          answer: "SELECT department, SUM(salary) AS total_salary FROM employees GROUP BY department HAVING SUM(salary) > 100000;"
        },
        {
          q: "5. Count employees per department, show only departments with more than 5 employees",
          answer: "SELECT department, COUNT(*) AS employee_count FROM employees GROUP BY department HAVING COUNT(*) > 5;"
        },
        {
          q: "6. Find highest and lowest salary per department",
          answer: "SELECT department, MAX(salary) AS highest_salary, MIN(salary) AS lowest_salary FROM employees GROUP BY department;"
        },
        {
          q: "7. Count orders per customer",
          answer: "SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id;"
        },
        {
          q: "8. Find customers with more than 3 orders",
          answer: "SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id HAVING COUNT(*) > 3;"
        },
        {
          q: "9. Calculate total sales per product",
          answer: "SELECT product_id, SUM(amount) AS total_sales FROM orders GROUP BY product_id;"
        },
        {
          q: "10. Show products with total sales greater than 50000",
          answer: "SELECT product_id, SUM(amount) AS total_sales FROM orders GROUP BY product_id HAVING SUM(amount) > 50000;"
        },
        {
          q: "11. Count employees per department where salary > 40000, show only departments with count > 2",
          answer: "SELECT department, COUNT(*) AS employee_count FROM employees WHERE salary > 40000 GROUP BY department HAVING COUNT(*) > 2;"
        },
        {
          q: "12. Find average order amount per customer, show only customers with average > 1000",
          answer: "SELECT customer_id, AVG(amount) AS avg_order_amount FROM orders GROUP BY customer_id HAVING AVG(amount) > 1000;"
        }
      ]
    },

    quiz: [
      { q: "GROUP BY is used to?", options: ["Delete records", "Group similar records", "Sort records", "Filter records"], answer: 1 },
      { q: "HAVING is used to?", options: ["Filter rows before grouping", "Filter groups after aggregation", "Sort groups", "Create groups"], answer: 1 },
      { q: "WHERE vs HAVING?", options: ["Same thing", "WHERE before grouping, HAVING after", "HAVING before grouping", "No difference"], answer: 1 },
      { q: "GROUP BY vs DISTINCT?", options: ["Same thing", "GROUP BY allows aggregation, DISTINCT removes duplicates", "DISTINCT allows aggregation", "No difference"], answer: 1 },
      { q: "Can HAVING work without GROUP BY?", options: ["No", "Yes, treats table as one group", "Only in MySQL", "Only with WHERE"], answer: 1 },
      { q: "Aggregate functions with GROUP BY?", options: ["Not allowed", "Required for calculations per group", "Optional always", "Only COUNT allowed"], answer: 1 },
      { q: "Non-grouped columns in SELECT?", options: ["Always allowed", "Must be in GROUP BY or aggregate", "Never allowed", "Only with HAVING"], answer: 1 },
      { q: "WHERE can use aggregates?", options: ["Yes", "No, use HAVING", "Only SUM", "Only COUNT"], answer: 1 },
      { q: "Query execution order?", options: ["SELECT → WHERE → GROUP BY", "FROM → WHERE → GROUP BY → HAVING → SELECT", "GROUP BY → WHERE → SELECT", "HAVING → GROUP BY → WHERE"], answer: 1 },
      { q: "GROUP BY without aggregates?", options: ["Error", "Acts like DISTINCT", "Returns all rows", "Not allowed"], answer: 1 }
    ],

    interview: "SQL Aggregation summarizes large datasets using GROUP BY and HAVING. GROUP BY groups similar records together and works with aggregate functions (COUNT, SUM, AVG, MIN, MAX) to perform calculations per group. HAVING filters grouped results after aggregation. Key difference: WHERE filters rows before grouping (cannot use aggregates), HAVING filters groups after aggregation (can use aggregates). GROUP BY vs DISTINCT: DISTINCT removes duplicates, GROUP BY allows aggregation. HAVING can work without GROUP BY (treats entire table as one group). All SELECT columns must be in GROUP BY or aggregate functions. Query execution order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT. Real-world usage: Amazon groups millions of orders by product/category/city for business reporting. Performance tips: index GROUP BY columns, use WHERE to filter before grouping, avoid grouping on too many columns.",

    memory: `👉 GROUP BY = Group similar records 📦
👉 HAVING = Filter groups 🎯
👉 WHERE = Filter rows before grouping ⚡

Aggregation Formula:
GROUP BY = Create groups
HAVING = Filter groups

WHERE vs HAVING:
WHERE:
- Before grouping ⚡
- No aggregates
- Filters rows

HAVING:
- After grouping 🎯
- Uses aggregates
- Filters groups

Query Execution Order:
FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT

Key Rules:
✅ SELECT columns must be in GROUP BY or aggregate
✅ WHERE cannot use aggregates
✅ HAVING can use aggregates
✅ GROUP BY without aggregates = DISTINCT
✅ HAVING without GROUP BY = Entire table as one group

Common Aggregates:
COUNT(*) - Count rows
SUM(column) - Total
AVG(column) - Average
MIN(column) - Minimum
MAX(column) - Maximum

Real Usage:
Amazon: Groups orders by product/category/city
Sales by region 🌍
Orders by customer 🛒
Revenue by product 💰`,

    revision: "SQL Aggregation: GROUP BY (group similar records + aggregate functions), HAVING (filter groups after aggregation). WHERE vs HAVING: WHERE filters rows before grouping (no aggregates), HAVING filters groups after (uses aggregates). Execution order: FROM → WHERE → GROUP BY → HAVING → SELECT. All SELECT columns must be in GROUP BY or aggregates. Essential for business reporting and analytics"
  },

  "sql-subqueries": {
    title: "SQL Subqueries",
    icon: "🔍",
    difficulty: "Advanced",
    duration: "65 min",
    description: "Subqueries are queries written inside another SQL query. They help solve complex business questions where one result depends on another result.",
    
    comic: `🔍 Imagine Exam Result Process:

📚 Problem:
Manager asks: "Find employees earning more than average salary"

❌ Without Subquery:
Step 1: Calculate average salary manually
Step 2: Write another query with that value
Step 3: If data changes, repeat everything!

✅ With Subquery:
SELECT * FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
→ One query, automatic calculation! ⚡

🎯 Three Types:

1️⃣ Single Row Subquery:
Inner query returns ONE value
Example: Average salary = 50000
SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);

2️⃣ Multi Row Subquery:
Inner query returns MULTIPLE values
Example: Department IDs = [1, 2, 3]
SELECT * FROM employees WHERE department_id IN (SELECT department_id FROM departments WHERE city IN ('Pune','Mumbai'));

3️⃣ Correlated Subquery:
Inner query DEPENDS on outer query
Example: Compare each employee with their department average
SELECT e1.name FROM employees e1
WHERE salary > (SELECT AVG(e2.salary) FROM employees e2 WHERE e1.department = e2.department);

💡 Aha Moment:
Subquery = Query inside query! 🎯
First calculate → Then compare
Layered filtering logic 📊`,

    deepDive: `👉 What are SQL Subqueries?
Subqueries are queries written inside another SQL query. They help solve complex business questions where one result depends on another result.

👉 Why Companies Use Subqueries?
Business Problem: Companies often need layered filtering logic where one query result becomes input for another query.

Examples:
- Find employees earning above company average
- Find customers who spent more than top customer threshold
- Find products priced above average price

Real Example: Amazon uses nested SQL logic to identify high-value customers before sending reports to Redshift.

👉 The 3 Types of Subqueries:

1. Single Row Subquery - Returns one value
   Scenario: Manager asks: "Find employees earning more than average salary"
   
   How it works:
   - Inner query calculates average salary (returns ONE value)
   - Outer query compares employee salaries against that result
   
   SQL Example:
   SELECT * FROM employees
   WHERE salary > (SELECT AVG(salary) FROM employees);
   
   Breakdown:
   - Inner: (SELECT AVG(salary) FROM employees) → Returns 50000
   - Outer: SELECT * FROM employees WHERE salary > 50000
   
   Why called Single Row: Inner query returns only one value
   
   Real World Usage:
   - Employees above average salary
   - Products above average price
   - Orders above average revenue
   
   Interview Trick: If inner query returns one value → Single Row Subquery
   
   Mistake to Avoid:
   - Using = when inner query returns multiple values (use IN instead)

2. Multi Row Subquery - Returns multiple values
   Interview Scenario: "Find employees working in departments located in Pune and Mumbai"
   
   Problem: Inner query returns multiple values instead of one
   
   Deep Explanation:
   - Outer query must handle multiple returned values
   - Usually uses IN, ANY, ALL operators
   
   SQL Example:
   SELECT * FROM employees
   WHERE department_id IN (
     SELECT department_id FROM departments
     WHERE city IN ('Pune','Mumbai')
   );
   
   Breakdown:
   - Inner: Returns [1, 2, 3] (multiple department IDs)
   - Outer: WHERE department_id IN (1, 2, 3)
   
   Analogy: Shopping Cart - Selecting multiple items from list
   
   Business Usage:
   - Multiple department filters
   - Multiple product category filters
   - Multiple region filters
   
   Operators for Multi Row:
   - IN: Match any value in list
   - ANY: Compare with any value (salary > ANY(...))
   - ALL: Compare with all values (salary > ALL(...))
   
   Common Errors:
   - Using = instead of IN
   - Ignoring multiple returned rows
   
   Quick Revision: Multiple rows returned = Multi Row Subquery

3. Correlated Subquery - Inner depends on outer
   Real Problem: "Compare each employee salary with employees from same department"
   
   Why it is Tricky: Inner query depends on outer query row values
   
   Deep Explanation:
   - Inner query executes repeatedly for every outer row
   - Uses outer query column references in inner query
   
   SQL Example:
   SELECT e1.name, e1.salary, e1.department
   FROM employees e1
   WHERE salary > (
     SELECT AVG(e2.salary)
     FROM employees e2
     WHERE e1.department = e2.department  -- Correlation!
   );
   
   How it works:
   - For each employee in outer query (e1)
   - Inner query calculates average salary for that employee's department
   - Compare employee's salary with their department average
   
   Analogy: Personal Comparison - Comparing each student with classmates from same section
   
   Real World Usage:
   - Department-wise salary comparison
   - Regional sales comparisons
   - Category-wise product analysis
   
   Performance Warning:
   - Can be slow on huge datasets (inner query runs for each outer row)
   - Consider using JOINs or window functions for better performance
   
   Interview Trap:
   - Difference between normal subquery and correlated subquery?
   - Answer: Normal subquery executes once, correlated executes for each outer row
   
   Quick Revision: Inner query depends on outer query

👉 Subquery Placement:
- WHERE clause: Most common (filtering)
- FROM clause: Derived tables
- SELECT clause: Scalar subqueries
- HAVING clause: Aggregate filtering

👉 Real Project Usage:
1. Extract raw data
2. Apply nested filtering logic
3. Generate business-specific insights
4. Load processed data to dashboards

👉 Performance Tips:
- Use JOINs instead of subqueries when possible (often faster)
- Avoid correlated subqueries on large datasets
- Index columns used in subquery conditions
- Consider CTEs for better readability

👉 Common Mistakes:
- Using = with multi-row subquery (use IN)
- Not understanding correlated subquery execution
- Overusing subqueries when JOINs are better
- Forgetting to handle NULL values`,

    types: `🔍 SQL Subquery Types:

1️⃣ Single Row Subquery
👉 Objective: Use one calculated value for comparison
👉 Scenario: Manager asks: "Find employees earning more than average salary"
👉 Analogy: Calculate class average first, then find students above average 📊
👉 How it works:
   - Inner query calculates average salary (returns ONE value)
   - Outer query compares employee salaries against that result
👉 SQL Example:
   SELECT * FROM employees
   WHERE salary > (SELECT AVG(salary) FROM employees);
👉 Breakdown:
   - Inner: (SELECT AVG(salary) FROM employees) → Returns 50000
   - Outer: SELECT * FROM employees WHERE salary > 50000
👉 Why called Single Row: Inner query returns only one value
👉 Real World Usage:
   - Employees above average salary
   - Products above average price
   - Orders above average revenue
👉 Operators: =, >, <, >=, <=, !=
👉 Interview Trick: If inner query returns one value → Single Row Subquery
👉 Mistake to Avoid: Using = when inner query returns multiple values
👉 Quick Revision: One value → Single Row Subquery 🎯

2️⃣ Multi Row Subquery
👉 Objective: Handle multiple values from inner query
👉 Interview Scenario: "Find employees working in departments located in Pune and Mumbai"
👉 Problem: Inner query returns multiple values instead of one
👉 Analogy: Shopping Cart - Selecting multiple items from list 🛒
👉 Deep Explanation:
   - Outer query must handle multiple returned values
   - Usually uses IN, ANY, ALL operators
👉 SQL Example:
   SELECT * FROM employees
   WHERE department_id IN (
     SELECT department_id FROM departments
     WHERE city IN ('Pune','Mumbai')
   );
👉 Breakdown:
   - Inner: Returns [1, 2, 3] (multiple department IDs)
   - Outer: WHERE department_id IN (1, 2, 3)
👉 Operators:
   - IN: Match any value in list
   - ANY: Compare with any value (salary > ANY(subquery))
   - ALL: Compare with all values (salary > ALL(subquery))
👉 Business Usage:
   - Multiple department filters
   - Multiple product category filters
   - Multiple region filters
👉 Common Errors:
   - Using = instead of IN
   - Ignoring multiple returned rows
👉 Quick Revision: Multiple rows returned = Multi Row Subquery 📋

3️⃣ Correlated Subquery
👉 Objective: Compare each row with related subset of data
👉 Real Problem: "Compare each employee salary with employees from same department"
👉 Why it is Tricky: Inner query depends on outer query row values
👉 Analogy: Personal Comparison - Comparing each student with classmates from same section 👥
👉 Deep Explanation:
   - Inner query executes repeatedly for every outer row
   - Uses outer query column references in inner query
👉 SQL Example:
   SELECT e1.name, e1.salary, e1.department
   FROM employees e1
   WHERE salary > (
     SELECT AVG(e2.salary)
     FROM employees e2
     WHERE e1.department = e2.department  -- Correlation!
   );
👉 How it works:
   - For each employee in outer query (e1)
   - Inner query calculates average salary for that employee's department
   - Compare employee's salary with their department average
👉 Real World Usage:
   - Department-wise salary comparison
   - Regional sales comparisons
   - Category-wise product analysis
👉 Performance Warning:
   - Can be slow on huge datasets (inner query runs for each outer row)
   - Consider using JOINs or window functions for better performance
👉 Interview Trap:
   - Difference between normal subquery and correlated subquery?
   - Answer: Normal subquery executes once, correlated executes for each outer row
👉 Quick Revision: Inner query depends on outer query 🔄`,

    qa: [
      {
        q: "What is a subquery?",
        hint: "Think about nested queries",
        answer: "A query written inside another SQL query",
        explanation: "Subquery is a query nested inside another query. The inner query executes first and its result is used by the outer query.",
        memory: "Subquery = Query inside query 🔍"
      },
      {
        q: "What is the difference between single row and multi row subquery?",
        hint: "Think about return values",
        answer: "Single row returns one value, multi row returns multiple values",
        explanation: "Single row subquery returns exactly one value (use =, >, <). Multi row subquery returns multiple values (use IN, ANY, ALL).",
        memory: "Single = One value | Multi = Many values 📊"
      },
      {
        q: "What is a correlated subquery?",
        hint: "Think about dependency",
        answer: "A subquery where inner query depends on outer query values",
        explanation: "Correlated subquery references columns from outer query. Inner query executes repeatedly for each outer row.",
        memory: "Correlated = Inner depends on outer 🔄"
      },
      {
        q: "Why are correlated subqueries slow?",
        hint: "Think about execution",
        answer: "Inner query executes for each outer row instead of once",
        explanation: "Normal subquery executes once. Correlated subquery executes for every row in outer query, making it slower on large datasets.",
        memory: "Correlated = Executes per row = Slow ⚠️"
      },
      {
        q: "Can you use = operator with multi row subquery?",
        hint: "Think about comparison",
        answer: "No, use IN, ANY, or ALL operators",
        explanation: "= operator expects single value. Multi row subquery returns multiple values, so use IN (match any), ANY (compare with any), or ALL (compare with all).",
        memory: "Multi row = Use IN/ANY/ALL, not = ❌"
      },
      {
        q: "Where can subqueries be placed?",
        hint: "Think about query clauses",
        answer: "WHERE, FROM, SELECT, HAVING clauses",
        explanation: "Subqueries can appear in WHERE (filtering), FROM (derived tables), SELECT (scalar values), HAVING (aggregate filtering).",
        memory: "Subquery placement = WHERE/FROM/SELECT/HAVING 📍"
      },
      {
        q: "What is the difference between subquery and JOIN?",
        hint: "Think about performance and readability",
        answer: "JOINs are often faster and more readable, subqueries are better for complex logic",
        explanation: "JOINs typically perform better and are easier to read. Subqueries are useful for complex nested logic and when you need intermediate calculations.",
        memory: "JOIN = Faster | Subquery = Complex logic 🔀"
      },
      {
        q: "Can subqueries return multiple columns?",
        hint: "Think about result structure",
        answer: "Yes, especially in FROM clause (derived tables)",
        explanation: "Subqueries in FROM clause can return multiple columns and rows, creating a derived table. Subqueries in WHERE typically return single column.",
        memory: "FROM subquery = Multiple columns ✅"
      }
    ],

    coding: {
      title: "SQL Subqueries Challenge",
      scenario: "You're analyzing employee, department, and sales data using subqueries.",
      questions: [
        {
          q: "1. Find employees earning more than average salary (Single Row Subquery)",
          answer: "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);"
        },
        {
          q: "2. Find products priced above average price (Single Row Subquery)",
          answer: "SELECT * FROM products WHERE price > (SELECT AVG(price) FROM products);"
        },
        {
          q: "3. Find employees working in IT or HR departments (Multi Row Subquery)",
          answer: "SELECT * FROM employees WHERE department_id IN (SELECT department_id FROM departments WHERE department_name IN ('IT','HR'));"
        },
        {
          q: "4. Find employees in departments located in Pune or Mumbai (Multi Row Subquery)",
          answer: "SELECT * FROM employees WHERE department_id IN (SELECT department_id FROM departments WHERE city IN ('Pune','Mumbai'));"
        },
        {
          q: "5. Find employees earning more than their department average (Correlated Subquery)",
          answer: "SELECT e1.name, e1.salary, e1.department FROM employees e1 WHERE salary > (SELECT AVG(e2.salary) FROM employees e2 WHERE e1.department = e2.department);"
        },
        {
          q: "6. Find customers who placed more orders than average (Single Row Subquery)",
          answer: "SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id HAVING COUNT(*) > (SELECT AVG(order_count) FROM (SELECT COUNT(*) AS order_count FROM orders GROUP BY customer_id) AS avg_orders);"
        },
        {
          q: "7. Find employees with salary greater than maximum salary in HR department",
          answer: "SELECT * FROM employees WHERE salary > (SELECT MAX(salary) FROM employees WHERE department = 'HR');"
        },
        {
          q: "8. Find products in categories with more than 5 products (Correlated Subquery)",
          answer: "SELECT p1.product_name, p1.category FROM products p1 WHERE (SELECT COUNT(*) FROM products p2 WHERE p1.category = p2.category) > 5;"
        },
        {
          q: "9. Find employees earning less than minimum salary of IT department",
          answer: "SELECT * FROM employees WHERE salary < (SELECT MIN(salary) FROM employees WHERE department = 'IT');"
        },
        {
          q: "10. Find departments with average salary greater than company average",
          answer: "SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department HAVING AVG(salary) > (SELECT AVG(salary) FROM employees);"
        },
        {
          q: "11. Find customers who never placed orders (Multi Row Subquery with NOT IN)",
          answer: "SELECT * FROM customers WHERE customer_id NOT IN (SELECT customer_id FROM orders);"
        },
        {
          q: "12. Find second highest salary using subquery",
          answer: "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);"
        }
      ]
    },

    quiz: [
      { q: "Subquery is?", options: ["Two separate queries", "Query inside another query", "JOIN operation", "Aggregate function"], answer: 1 },
      { q: "Single row subquery returns?", options: ["Multiple values", "One value", "No values", "All rows"], answer: 1 },
      { q: "Multi row subquery uses?", options: ["= operator", "IN, ANY, ALL operators", "JOIN", "GROUP BY"], answer: 1 },
      { q: "Correlated subquery?", options: ["Executes once", "Inner depends on outer, executes per row", "Faster than normal", "Cannot use WHERE"], answer: 1 },
      { q: "Why correlated subqueries slow?", options: ["Complex syntax", "Executes for each outer row", "Uses JOIN", "Returns many rows"], answer: 1 },
      { q: "Can use = with multi row?", options: ["Yes", "No, use IN/ANY/ALL", "Only with JOIN", "Only in MySQL"], answer: 1 },
      { q: "Subquery placement?", options: ["Only WHERE", "WHERE, FROM, SELECT, HAVING", "Only SELECT", "Only FROM"], answer: 1 },
      { q: "Subquery vs JOIN?", options: ["Same thing", "JOIN often faster, subquery for complex logic", "Subquery always faster", "Cannot compare"], answer: 1 },
      { q: "Subquery executes?", options: ["After outer query", "Before outer query", "Simultaneously", "Never"], answer: 1 },
      { q: "Normal vs correlated subquery?", options: ["Same thing", "Normal executes once, correlated per row", "Correlated executes once", "No difference"], answer: 1 }
    ],

    interview: "SQL Subqueries are queries written inside another query. Three types: Single Row Subquery returns one value (use =, >, <), Multi Row Subquery returns multiple values (use IN, ANY, ALL), Correlated Subquery where inner query depends on outer query values (executes for each outer row). Single row example: Find employees above average salary. Multi row example: Find employees in specific departments. Correlated example: Compare each employee with their department average. Correlated subqueries are slower because inner query executes for each outer row. Subqueries can be placed in WHERE (filtering), FROM (derived tables), SELECT (scalar values), HAVING (aggregate filtering). JOINs are often faster than subqueries but subqueries are better for complex nested logic. Common mistakes: using = with multi-row subquery (use IN instead), not understanding correlated execution. Real-world usage: Amazon uses nested SQL logic to identify high-value customers. Performance tip: consider JOINs or window functions instead of correlated subqueries on large datasets.",

    memory: `👉 Subquery = Query inside query 🔍
👉 Single Row = One value 🎯
👉 Multi Row = Many values 📋
👉 Correlated = Inner depends on outer 🔄

Subquery Ladder:
One Value → Single Row
Many Values → Multi Row
Depends on Outer → Correlated

Key Differences:
Single Row:
- Returns one value
- Use =, >, <, >=, <=
- Example: AVG, MAX, MIN

Multi Row:
- Returns multiple values
- Use IN, ANY, ALL
- Example: List of IDs

Correlated:
- Inner depends on outer
- Executes per row
- Slower performance ⚠️

Operators:
Single Row: =, >, <, >=, <=, !=
Multi Row: IN, ANY, ALL, NOT IN

Placement:
✅ WHERE clause (filtering)
✅ FROM clause (derived tables)
✅ SELECT clause (scalar values)
✅ HAVING clause (aggregate filtering)

Performance:
⚡ Normal subquery = Executes once
🐌 Correlated = Executes per row
🚀 JOIN often faster than subquery

Common Mistakes:
❌ Using = with multi-row
❌ Not understanding correlated execution
❌ Overusing subqueries when JOINs better

Real Usage:
Amazon: Nested logic for high-value customers
Find above average values
Complex filtering logic`,

    revision: "SQL Subqueries: Query inside query. Three types: Single Row (one value, use =/>/<), Multi Row (multiple values, use IN/ANY/ALL), Correlated (inner depends on outer, executes per row - slower). Placement: WHERE/FROM/SELECT/HAVING. JOINs often faster but subqueries better for complex logic. Common mistake: using = with multi-row (use IN). Essential for layered filtering logic"
  },

  "sql-cte": {
    title: "Common Table Expressions (CTE)",
    icon: "📋",
    difficulty: "Advanced",
    duration: "70 min",
    description: "CTEs simplify complex SQL queries by breaking them into readable temporary blocks. They are widely used in modern analytics and data engineering pipelines.",
    
    comic: `📋 Imagine Cooking Preparation:

🍳 Problem:
Large SQL queries with nested subqueries = Messy and hard to debug!

Example of Messy Query:
SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM (SELECT salary FROM employees WHERE department='IT'));
😵 Hard to read and maintain!

✨ Solution: CTE (Common Table Expression)
Prepare ingredients separately before cooking final dish!

🎯 Three Types:

1️⃣ Basic CTE - One temporary block:
WITH avg_salary AS (
  SELECT AVG(salary) AS avg_sal FROM employees
)
SELECT * FROM employees
WHERE salary > (SELECT avg_sal FROM avg_salary);

✅ Clean, readable, easy to debug!

2️⃣ Multiple CTE - Multiple steps:
WITH sales_data AS (
  SELECT * FROM orders
),
revenue_data AS (
  SELECT customer_id, SUM(amount) AS total
  FROM sales_data
  GROUP BY customer_id
)
SELECT * FROM revenue_data;

🏭 Like factory assembly line - multiple processing stages!

3️⃣ Recursive CTE - Hierarchical data:
WITH RECURSIVE employee_hierarchy AS (
  SELECT employee_id, manager_id, name
  FROM employees
  WHERE manager_id IS NULL
  UNION ALL
  SELECT e.employee_id, e.manager_id, e.name
  FROM employees e
  JOIN employee_hierarchy eh ON e.manager_id = eh.employee_id
)
SELECT * FROM employee_hierarchy;

🌳 Like family tree - parent → child → grandchild!

💡 Aha Moment:
CTE = Temporary named result set 📋
Makes complex queries readable and maintainable! ✨`,

    deepDive: `👉 What are CTEs?
Common Table Expressions (CTEs) simplify complex SQL queries by breaking them into readable temporary blocks.

👉 Why CTEs Exist?
Real Problem: Large SQL queries with multiple nested subqueries become difficult to debug and maintain.

Business Examples:
- Complex sales reporting
- Customer segmentation
- Data transformation pipelines

Real Example: AWS SQL transformations often use CTEs before loading clean datasets into Redshift.

👉 The 3 Types of CTEs:

1. Basic CTE - Temporary table for one task
   Interview Question: "How do you make complex SQL queries more readable?"
   
   Problem: Nested subqueries make SQL messy
   
   Solution:
   - Create temporary named result
   - Use it in main query
   
   SQL Example:
   WITH avg_salary AS (
     SELECT AVG(salary) AS avg_sal FROM employees
   )
   SELECT * FROM employees
   WHERE salary > (SELECT avg_sal FROM avg_salary);
   
   Breakdown:
   - WITH avg_salary AS (...) creates temporary result
   - Main query uses avg_salary like a table
   - Executes once, result is reusable
   
   Why use it:
   - Better readability
   - Easier debugging
   - Cleaner SQL
   - Can reference CTE multiple times
   
   Real World Usage:
   - Sales reports
   - Customer analysis
   - Data filtering
   
   Quick Memory: Basic CTE = Temporary table for one task

2. Multiple CTE - Multiple temporary steps
   Scenario: "Business wants multiple transformations before final report generation"
   
   Problem: One temporary block is not enough
   
   Deep Explanation:
   - Multiple CTEs allow step-by-step transformations
   - Each CTE can reference previous CTEs
   - Separated by commas
   
   SQL Example:
   WITH sales_data AS (
     SELECT * FROM orders WHERE order_date >= '2024-01-01'
   ),
   revenue_data AS (
     SELECT customer_id, SUM(amount) AS total
     FROM sales_data
     GROUP BY customer_id
   ),
   top_customers AS (
     SELECT * FROM revenue_data WHERE total > 10000
   )
   SELECT * FROM top_customers;
   
   Breakdown:
   - sales_data: Filter orders
   - revenue_data: Calculate totals (uses sales_data)
   - top_customers: Filter high-value customers (uses revenue_data)
   - Final query: Select from top_customers
   
   Analogy: Factory Assembly Line - Multiple processing stages before final product
   
   Business Usage:
   - ETL transformations
   - Financial reporting
   - Data cleaning pipelines
   - Multi-step calculations
   
   Common Mistakes:
   - Improper dependency order (referencing CTE before it's defined)
   - Forgetting commas between CTEs
   
   Quick Memory: Multiple CTE = Multiple temporary steps

3. Recursive CTE - Self-repeating logic
   Real Problem: "Some datasets contain hierarchical relationships"
   
   Examples:
   - Employee-manager hierarchy
   - Folder structure
   - Family tree
   - Organization charts
   
   Deep Explanation:
   - Recursive CTE repeatedly references itself until condition stops
   - Has two parts: Anchor (base case) and Recursive (iterative case)
   - Uses UNION ALL to combine results
   
   SQL Example:
   WITH RECURSIVE employee_hierarchy AS (
     -- Anchor: Start with top-level employees (no manager)
     SELECT employee_id, manager_id, name, 1 AS level
     FROM employees
     WHERE manager_id IS NULL
     
     UNION ALL
     
     -- Recursive: Get employees reporting to current level
     SELECT e.employee_id, e.manager_id, e.name, eh.level + 1
     FROM employees e
     JOIN employee_hierarchy eh ON e.manager_id = eh.employee_id
   )
   SELECT * FROM employee_hierarchy
   ORDER BY level;
   
   How it works:
   1. Anchor query finds top-level (CEO, no manager)
   2. Recursive query finds employees reporting to current level
   3. Repeats until no more employees found
   4. UNION ALL combines all levels
   
   Analogy: Family Tree - Parent → Child → Grandchild relationships
   
   Where Used:
   - Organizational hierarchy
   - Graph traversal
   - Nested categories
   - Bill of materials
   - File system navigation
   
   Interview Traps:
   - Difference between normal and recursive CTE? (Recursive references itself, normal doesn't)
   - How to prevent infinite recursion? (Add termination condition, use MAXRECURSION option)
   
   Performance Note:
   - Can become expensive on large hierarchies
   - Consider limiting recursion depth
   
   Quick Memory: Recursive CTE = Self-repeating logic

👉 CTE vs Subquery:
- CTE: Named, reusable, more readable
- Subquery: Anonymous, inline, can be less readable
- CTE can be referenced multiple times
- Subquery executes each time it's referenced

👉 CTE vs Temporary Table:
- CTE: Exists only during query execution, no storage
- Temp Table: Stored in tempdb, persists across queries
- CTE: Better for single query
- Temp Table: Better for multiple queries

👉 Real World Pipeline:
1. Extract raw data
2. Create temporary transformations (CTEs)
3. Apply business logic
4. Generate final dataset

👉 Common Mistakes:
- Overusing CTEs (use simple queries when possible)
- Infinite recursion (missing termination condition)
- Using CTE when simple query is enough
- Not understanding CTE scope (only within query)

👉 Performance Tips:
- CTEs are not materialized (recalculated if used multiple times)
- Consider temp tables for complex CTEs used multiple times
- Index base tables, not CTEs
- Recursive CTEs can be slow on large hierarchies`,

    types: `📋 CTE Types:

1️⃣ Basic CTE
👉 Objective: Make complex queries readable with one temporary block
👉 Interview Question: "How do you make complex SQL queries more readable?"
👉 Problem: Nested subqueries make SQL messy
👉 Analogy: Preparing ingredients separately before cooking 🍳
👉 Solution:
   - Create temporary named result
   - Use it in main query
👉 SQL Example:
   WITH avg_salary AS (
     SELECT AVG(salary) AS avg_sal FROM employees
   )
   SELECT * FROM employees
   WHERE salary > (SELECT avg_sal FROM avg_salary);
👉 Breakdown:
   - WITH avg_salary AS (...) creates temporary result
   - Main query uses avg_salary like a table
   - Executes once, result is reusable
👉 Why use it:
   - Better readability ✅
   - Easier debugging 🐛
   - Cleaner SQL 🧹
   - Can reference CTE multiple times
👉 Real World Usage:
   - Sales reports
   - Customer analysis
   - Data filtering
👉 Quick Memory: Basic CTE = Temporary table for one task 📋

2️⃣ Multiple CTE
👉 Objective: Multiple step-by-step transformations
👉 Scenario: "Business wants multiple transformations before final report generation"
👉 Problem: One temporary block is not enough
👉 Analogy: Factory Assembly Line - Multiple processing stages 🏭
👉 Deep Explanation:
   - Multiple CTEs allow step-by-step transformations
   - Each CTE can reference previous CTEs
   - Separated by commas
👉 SQL Example:
   WITH sales_data AS (
     SELECT * FROM orders WHERE order_date >= '2024-01-01'
   ),
   revenue_data AS (
     SELECT customer_id, SUM(amount) AS total
     FROM sales_data
     GROUP BY customer_id
   ),
   top_customers AS (
     SELECT * FROM revenue_data WHERE total > 10000
   )
   SELECT * FROM top_customers;
👉 Breakdown:
   - sales_data: Filter orders
   - revenue_data: Calculate totals (uses sales_data)
   - top_customers: Filter high-value (uses revenue_data)
   - Final query: Select from top_customers
👉 Business Usage:
   - ETL transformations
   - Financial reporting
   - Data cleaning pipelines
   - Multi-step calculations
👉 Common Mistakes:
   - Improper dependency order
   - Forgetting commas between CTEs
👉 Quick Memory: Multiple CTE = Multiple temporary steps 🔄

3️⃣ Recursive CTE
👉 Objective: Handle hierarchical relationships
👉 Real Problem: "Some datasets contain hierarchical relationships"
👉 Examples:
   - Employee-manager hierarchy
   - Folder structure
   - Family tree
   - Organization charts
👉 Analogy: Family Tree - Parent → Child → Grandchild 🌳
👉 Deep Explanation:
   - Recursive CTE repeatedly references itself until condition stops
   - Has two parts: Anchor (base) and Recursive (iterative)
   - Uses UNION ALL to combine results
👉 SQL Example:
   WITH RECURSIVE employee_hierarchy AS (
     -- Anchor: Top-level employees
     SELECT employee_id, manager_id, name, 1 AS level
     FROM employees
     WHERE manager_id IS NULL
     
     UNION ALL
     
     -- Recursive: Get reporting employees
     SELECT e.employee_id, e.manager_id, e.name, eh.level + 1
     FROM employees e
     JOIN employee_hierarchy eh ON e.manager_id = eh.employee_id
   )
   SELECT * FROM employee_hierarchy;
👉 How it works:
   1. Anchor finds top-level (CEO)
   2. Recursive finds employees reporting to current level
   3. Repeats until no more employees
   4. UNION ALL combines all levels
👉 Where Used:
   - Organizational hierarchy
   - Graph traversal
   - Nested categories
   - Bill of materials
👉 Interview Traps:
   - Difference between normal and recursive CTE? (Recursive references itself)
   - How to prevent infinite recursion? (Termination condition, MAXRECURSION)
👉 Performance Note: Can be expensive on large hierarchies ⚠️
👉 Quick Memory: Recursive CTE = Self-repeating logic 🔁`,

    qa: [
      {
        q: "What is the difference between CTE and Subquery?",
        hint: "Think about naming and reusability",
        answer: "CTE is named and reusable, Subquery is anonymous and inline",
        explanation: "CTE (WITH clause) creates a named temporary result that can be referenced multiple times. Subquery is anonymous and executes each time it's referenced. CTE improves readability.",
        memory: "CTE = Named + Reusable | Subquery = Anonymous 📋"
      },
      {
        q: "What is the difference between CTE and Temporary Table?",
        hint: "Think about storage and persistence",
        answer: "CTE exists only during query execution, Temp Table is stored and persists",
        explanation: "CTE is a temporary result set that exists only during query execution (no storage). Temporary table is stored in tempdb and persists across multiple queries.",
        memory: "CTE = Query scope | Temp Table = Session scope 🗄️"
      },
      {
        q: "When should you use Recursive CTE?",
        hint: "Think about hierarchical data",
        answer: "For hierarchical or tree-structured data like org charts, family trees",
        explanation: "Recursive CTE is used for hierarchical relationships where data references itself (employee-manager, parent-child, folder structure).",
        memory: "Recursive CTE = Hierarchical data 🌳"
      },
      {
        q: "Why does CTE improve readability?",
        hint: "Think about structure",
        answer: "Breaks complex queries into named, logical steps",
        explanation: "CTE allows you to break complex queries into smaller, named blocks that are easier to understand, debug, and maintain. Each CTE represents a logical step.",
        memory: "CTE = Readable steps 📖"
      },
      {
        q: "Can a CTE reference another CTE?",
        hint: "Think about multiple CTEs",
        answer: "Yes, later CTEs can reference earlier CTEs",
        explanation: "In multiple CTEs, each CTE can reference any previously defined CTE. They are executed in order.",
        memory: "Multiple CTEs = Can reference previous ✅"
      },
      {
        q: "What are the two parts of a Recursive CTE?",
        hint: "Think about base and iteration",
        answer: "Anchor (base case) and Recursive (iterative case)",
        explanation: "Recursive CTE has Anchor query (starting point, base case) and Recursive query (iterative case that references the CTE itself). Combined with UNION ALL.",
        memory: "Recursive = Anchor + Recursive part 🔁"
      },
      {
        q: "Can CTE be used in multiple queries?",
        hint: "Think about scope",
        answer: "No, CTE scope is limited to the query it's defined in",
        explanation: "CTE exists only within the query where it's defined. For multiple queries, use temporary tables instead.",
        memory: "CTE scope = Single query only ⚠️"
      },
      {
        q: "How to prevent infinite recursion in Recursive CTE?",
        hint: "Think about termination",
        answer: "Add termination condition or use MAXRECURSION option",
        explanation: "Prevent infinite recursion by ensuring the recursive query eventually returns no rows (termination condition) or by setting MAXRECURSION limit.",
        memory: "Prevent infinite = Termination condition 🛑"
      }
    ],

    coding: {
      title: "CTE Challenge",
      scenario: "You're using CTEs for complex data transformations and hierarchical queries.",
      questions: [
        {
          q: "1. Find employees earning more than average salary using Basic CTE",
          answer: "WITH avg_salary AS (SELECT AVG(salary) AS avg_sal FROM employees) SELECT * FROM employees WHERE salary > (SELECT avg_sal FROM avg_salary);"
        },
        {
          q: "2. Use Multiple CTEs to find top customers: filter orders, calculate revenue, find top 10",
          answer: "WITH sales_data AS (SELECT * FROM orders WHERE order_date >= '2024-01-01'), revenue_data AS (SELECT customer_id, SUM(amount) AS total FROM sales_data GROUP BY customer_id) SELECT * FROM revenue_data ORDER BY total DESC LIMIT 10;"
        },
        {
          q: "3. Create employee hierarchy using Recursive CTE",
          answer: "WITH RECURSIVE employee_hierarchy AS (SELECT employee_id, manager_id, name, 1 AS level FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.employee_id, e.manager_id, e.name, eh.level + 1 FROM employees e JOIN employee_hierarchy eh ON e.manager_id = eh.employee_id) SELECT * FROM employee_hierarchy;"
        },
        {
          q: "4. Find products priced above category average using CTE",
          answer: "WITH category_avg AS (SELECT category, AVG(price) AS avg_price FROM products GROUP BY category) SELECT p.* FROM products p JOIN category_avg ca ON p.category = ca.category WHERE p.price > ca.avg_price;"
        },
        {
          q: "5. Use Multiple CTEs: filter active customers, calculate their orders, find customers with >5 orders",
          answer: "WITH active_customers AS (SELECT * FROM customers WHERE status='active'), customer_orders AS (SELECT c.customer_id, c.name, COUNT(o.order_id) AS order_count FROM active_customers c LEFT JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.customer_id, c.name) SELECT * FROM customer_orders WHERE order_count > 5;"
        },
        {
          q: "6. Find departments with total salary above company average using CTE",
          answer: "WITH company_avg AS (SELECT AVG(salary) AS avg_sal FROM employees), dept_totals AS (SELECT department, SUM(salary) AS total_salary FROM employees GROUP BY department) SELECT * FROM dept_totals WHERE total_salary > (SELECT avg_sal FROM company_avg);"
        },
        {
          q: "7. Create category hierarchy using Recursive CTE (parent-child categories)",
          answer: "WITH RECURSIVE category_tree AS (SELECT category_id, parent_id, category_name, 1 AS level FROM categories WHERE parent_id IS NULL UNION ALL SELECT c.category_id, c.parent_id, c.category_name, ct.level + 1 FROM categories c JOIN category_tree ct ON c.parent_id = ct.category_id) SELECT * FROM category_tree;"
        },
        {
          q: "8. Use CTE to find customers who spent more than average customer spending",
          answer: "WITH customer_spending AS (SELECT customer_id, SUM(amount) AS total_spent FROM orders GROUP BY customer_id), avg_spending AS (SELECT AVG(total_spent) AS avg_amount FROM customer_spending) SELECT cs.* FROM customer_spending cs WHERE cs.total_spent > (SELECT avg_amount FROM avg_spending);"
        },
        {
          q: "9. Multiple CTEs: filter 2024 orders, group by product, find products with sales >100000",
          answer: "WITH orders_2024 AS (SELECT * FROM orders WHERE YEAR(order_date) = 2024), product_sales AS (SELECT product_id, SUM(amount) AS total_sales FROM orders_2024 GROUP BY product_id) SELECT * FROM product_sales WHERE total_sales > 100000;"
        },
        {
          q: "10. Find all subordinates of a specific manager using Recursive CTE",
          answer: "WITH RECURSIVE subordinates AS (SELECT employee_id, manager_id, name FROM employees WHERE manager_id = 1 UNION ALL SELECT e.employee_id, e.manager_id, e.name FROM employees e JOIN subordinates s ON e.manager_id = s.employee_id) SELECT * FROM subordinates;"
        },
        {
          q: "11. Use CTE to calculate running total of sales by date",
          answer: "WITH daily_sales AS (SELECT order_date, SUM(amount) AS daily_total FROM orders GROUP BY order_date) SELECT order_date, daily_total, SUM(daily_total) OVER (ORDER BY order_date) AS running_total FROM daily_sales;"
        },
        {
          q: "12. Multiple CTEs: get active products, calculate sales, find top 5 products",
          answer: "WITH active_products AS (SELECT * FROM products WHERE status='active'), product_sales AS (SELECT p.product_id, p.product_name, SUM(o.amount) AS total_sales FROM active_products p JOIN orders o ON p.product_id = o.product_id GROUP BY p.product_id, p.product_name) SELECT * FROM product_sales ORDER BY total_sales DESC LIMIT 5;"
        }
      ]
    },

    quiz: [
      { q: "CTE stands for?", options: ["Common Table Entry", "Common Table Expression", "Complex Table Expression", "Common Temporary Expression"], answer: 1 },
      { q: "CTE vs Subquery?", options: ["Same thing", "CTE is named and reusable", "Subquery is faster", "No difference"], answer: 1 },
      { q: "CTE vs Temp Table?", options: ["Same thing", "CTE exists only during query, Temp Table persists", "CTE is stored", "No difference"], answer: 1 },
      { q: "Recursive CTE is used for?", options: ["Simple queries", "Hierarchical data", "Aggregation", "Joins"], answer: 1 },
      { q: "CTE improves?", options: ["Performance only", "Readability and maintainability", "Storage", "Security"], answer: 1 },
      { q: "Can CTE reference another CTE?", options: ["No", "Yes, later CTEs can reference earlier ones", "Only in MySQL", "Only recursive"], answer: 1 },
      { q: "Recursive CTE parts?", options: ["Only one part", "Anchor and Recursive", "Base and Final", "Start and End"], answer: 1 },
      { q: "CTE scope?", options: ["Entire database", "Single query only", "Entire session", "Multiple queries"], answer: 1 },
      { q: "Prevent infinite recursion?", options: ["Cannot prevent", "Termination condition or MAXRECURSION", "Use LIMIT", "Use WHERE"], answer: 1 },
      { q: "Multiple CTEs separated by?", options: ["Semicolon", "Comma", "AND", "OR"], answer: 1 }
    ],

    interview: "Common Table Expressions (CTEs) simplify complex SQL queries by breaking them into readable temporary blocks. Three types: Basic CTE (one temporary block for readability), Multiple CTE (step-by-step transformations), Recursive CTE (hierarchical data like org charts). CTE vs Subquery: CTE is named and reusable, subquery is anonymous. CTE vs Temp Table: CTE exists only during query execution, temp table persists. Recursive CTE has Anchor (base case) and Recursive (iterative) parts combined with UNION ALL. Used for employee-manager hierarchy, folder structures, family trees. CTE improves readability by breaking queries into logical named steps. CTE scope is limited to single query. Multiple CTEs can reference previous CTEs. Prevent infinite recursion with termination condition or MAXRECURSION. Real-world usage: AWS SQL transformations use CTEs before loading to Redshift. Common mistakes: overusing CTEs, infinite recursion, using CTE when simple query is enough. Performance: CTEs are not materialized, consider temp tables for complex CTEs used multiple times.",

    memory: `👉 CTE = Common Table Expression 📋
👉 Basic CTE = One temporary block 📄
👉 Multiple CTE = Multiple steps 🔄
👉 Recursive CTE = Hierarchical data 🌳

CTE Ladder:
Simple Task → Basic CTE
Multiple Steps → Multiple CTE
Hierarchy → Recursive CTE

CTE vs Others:
CTE vs Subquery:
- CTE: Named, reusable
- Subquery: Anonymous, inline

CTE vs Temp Table:
- CTE: Query scope, no storage
- Temp Table: Session scope, stored

Recursive CTE Structure:
Anchor (base case)
UNION ALL
Recursive (iterative case)

Key Benefits:
✅ Better readability
✅ Easier debugging
✅ Cleaner SQL
✅ Logical steps
✅ Reusable within query

Common Mistakes:
❌ Overusing CTEs
❌ Infinite recursion
❌ Using CTE when simple query enough
❌ Forgetting CTE scope (single query)

Recursive CTE Uses:
🌳 Employee-manager hierarchy
📁 Folder structure
👨‍👩‍👧 Family tree
🏢 Organization charts
📊 Graph traversal

Performance Notes:
⚠️ CTEs not materialized
⚠️ Recursive can be slow on large hierarchies
⚠️ Consider temp tables for complex reuse

Real Usage:
AWS: CTEs before loading to Redshift
ETL transformations
Complex reporting
Data cleaning pipelines`,

    revision: "SQL CTE: Common Table Expression - temporary named result set. Three types: Basic (one block), Multiple (step-by-step), Recursive (hierarchical - Anchor + Recursive with UNION ALL). CTE vs Subquery: named/reusable vs anonymous. CTE vs Temp Table: query scope vs session scope. Improves readability by breaking complex queries into logical steps. Scope limited to single query. Recursive for org charts, family trees. Prevent infinite recursion with termination condition. Essential for modern analytics and ETL pipelines"
  },

  "sql-window-functions": {
    title: "Window Functions",
    icon: "🪟",
    difficulty: "Advanced",
    duration: "75 min",
    description: "Window functions perform calculations across a set of related rows while preserving original records. These are extremely common in product company interviews and real-world analytics pipelines.",
    
    comic: `🪟 Imagine Class Ranking Board:

📚 Problem:
Company needs rankings, previous values, next values, and trend comparisons WITHOUT losing row-level details!

❌ GROUP BY Problem:
SELECT department, AVG(salary) FROM employees GROUP BY department;
Result: Only 2 rows (IT, HR) - Lost all employee details!

✅ Window Function Solution:
SELECT name, salary, department,
       AVG(salary) OVER(PARTITION BY department) AS dept_avg
FROM employees;
Result: All employees visible + department average beside each!

🎯 Core Difference:
GROUP BY = Combines rows, reduces output 📉
Window Function = Keeps all rows, adds insights 📊

🪟 Five Essential Window Functions:

1️⃣ ROW_NUMBER() - Always unique ranking:
Salary: 100000 → Rank 1
Salary: 100000 → Rank 2 (unique even for duplicates)
Salary: 90000 → Rank 3

2️⃣ RANK() - Gaps after ties:
Salary: 100000 → Rank 1
Salary: 100000 → Rank 1 (same rank for ties)
Salary: 90000 → Rank 3 (gap!)

3️⃣ DENSE_RANK() - No gaps:
Salary: 100000 → Rank 1
Salary: 100000 → Rank 1 (same rank for ties)
Salary: 90000 → Rank 2 (no gap!)

4️⃣ LEAD() - Look forward:
Jan: 5000, Next month: 6000
Feb: 6000, Next month: 7000

5️⃣ LAG() - Look backward:
Feb: 6000, Previous month: 5000
Mar: 7000, Previous month: 6000

💡 Aha Moment:
Window Functions = Add insights WITHOUT losing rows! 🪟
Students remain visible while rankings added beside names! 📋`,

    deepDive: `👉 What are Window Functions?
Window functions perform calculations across a set of related rows while preserving original records.

👉 Why Window Functions are Critical?
Business Problem: Companies need rankings, previous values, next values, and trend comparisons without losing row-level details.

Real World Questions:
- Who is top earning employee?
- What was previous month sales?
- Who ranked first in each department?
- Compare current order with previous order

Real Example: Amazon uses window functions for customer ranking, order analysis, and sales trend reporting before loading dashboards into Power BI.

👉 Core Difference:
GROUP BY:
- Combines rows and reduces output
- Loses row-level details
- Example: SELECT department, AVG(salary) FROM employees GROUP BY department;
- Result: Only department-level summary

Window Function:
- Keeps all rows and adds extra insights
- Preserves row-level details
- Example: SELECT name, salary, AVG(salary) OVER(PARTITION BY department) FROM employees;
- Result: All employees visible + department average

👉 The 5 Essential Window Functions:

1. ROW_NUMBER() - Always unique ranking
   Scenario: "Company wants unique ranking for employees based on salary"
   
   How it works:
   - Assigns unique number to every row
   - Even duplicate values get different ranks
   
   SQL Example:
   SELECT name, salary,
          ROW_NUMBER() OVER(ORDER BY salary DESC) AS row_num
   FROM employees;
   
   Output:
   Ankit, 100000, 1
   Rahul, 100000, 2  (unique even though same salary)
   Priya, 90000, 3
   
   Real World Usage:
   - Pagination (OFFSET/LIMIT alternative)
   - Top N records
   - Duplicate removal (keep first occurrence)
   
   Interview Trap: Duplicate salaries still get unique numbers
   
   Quick Memory: ROW_NUMBER = Always unique ranking

2. RANK() - Gaps after ties
   Interview Question: "How do you rank employees where duplicate salaries share same rank?"
   
   Deep Explanation:
   - Same values receive same rank
   - Next rank gets skipped (creates gap)
   
   SQL Example:
   SELECT name, salary,
          RANK() OVER(ORDER BY salary DESC) AS rank
   FROM employees;
   
   Example Output:
   100000 → Rank 1
   100000 → Rank 1  (same rank for tie)
   90000 → Rank 3   (rank 2 skipped - gap!)
   
   Business Usage:
   - Leaderboards
   - Competition ranking
   - Sports rankings
   
   Quick Memory: RANK = Gaps after ties

3. DENSE_RANK() - No gaps
   Problem: "Business wants ranking without gaps"
   
   Deep Explanation:
   - Same values get same rank
   - Next rank continues normally (no gap)
   
   SQL Example:
   SELECT name, salary,
          DENSE_RANK() OVER(ORDER BY salary DESC) AS dense_rank
   FROM employees;
   
   Example Output:
   100000 → Rank 1
   100000 → Rank 1  (same rank for tie)
   90000 → Rank 2   (no gap - continues normally)
   
   Analogy: Olympics Medal Ranking - No skipped positions after ties
   
   Business Usage:
   - Continuous rankings
   - Category rankings
   - Performance tiers
   
   Quick Memory: DENSE_RANK = No gaps

4. LEAD() - Look forward
   Scenario: "Compare current month's sales with next month sales"
   
   Deep Explanation:
   - LEAD fetches next row value
   - Can specify offset (default 1)
   - Can specify default value if no next row
   
   SQL Example:
   SELECT month, sales,
          LEAD(sales) OVER(ORDER BY month) AS next_month_sales,
          LEAD(sales, 2) OVER(ORDER BY month) AS two_months_ahead
   FROM sales_data;
   
   Output:
   Jan, 5000, 6000 (Feb), 7000 (Mar)
   Feb, 6000, 7000 (Mar), NULL
   Mar, 7000, NULL, NULL
   
   Real World Usage:
   - Forecast comparisons
   - Future sales trends
   - Next order analysis
   
   Quick Memory: LEAD = Look forward 👉

5. LAG() - Look backward
   Real Problem: "Compare current sales with previous month"
   
   Deep Explanation:
   - LAG fetches previous row value
   - Can specify offset (default 1)
   - Can specify default value if no previous row
   
   SQL Example:
   SELECT month, sales,
          LAG(sales) OVER(ORDER BY month) AS previous_month_sales,
          sales - LAG(sales) OVER(ORDER BY month) AS growth
   FROM sales_data;
   
   Output:
   Jan, 5000, NULL, NULL
   Feb, 6000, 5000, 1000 (growth)
   Mar, 7000, 6000, 1000 (growth)
   
   Business Usage:
   - Growth analysis
   - Historical comparisons
   - Previous order analysis
   
   Analogy: Previous Exam Score - Compare current score with previous exam
   
   Quick Memory: LAG = Look backward 👈

👉 OVER Clause Components:

1. ORDER BY: Defines row order
   - OVER(ORDER BY salary DESC)

2. PARTITION BY: Divides data into groups
   - OVER(PARTITION BY department ORDER BY salary DESC)
   - Like GROUP BY but keeps all rows

3. ROWS/RANGE: Defines window frame
   - ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING

👉 Common Interview Questions:

1. Find second highest salary:
   WITH ranked_salaries AS (
     SELECT salary, DENSE_RANK() OVER(ORDER BY salary DESC) AS rank
     FROM employees
   )
   SELECT salary FROM ranked_salaries WHERE rank = 2;

2. Find top 3 employees per department:
   WITH ranked_employees AS (
     SELECT name, department, salary,
            ROW_NUMBER() OVER(PARTITION BY department ORDER BY salary DESC) AS rank
     FROM employees
   )
   SELECT * FROM ranked_employees WHERE rank <= 3;

👉 Common Mistakes:
- Forgetting OVER clause (syntax error)
- Confusing RANK with DENSE_RANK
- Using GROUP BY instead of window functions
- Not understanding PARTITION BY

👉 Performance Tips:
- Index columns used in ORDER BY
- Use PARTITION BY to reduce window size
- Window functions can be expensive on large datasets
- Consider materialized views for frequently used calculations`,

    types: `🪟 Window Function Types:

1️⃣ ROW_NUMBER()
👉 Objective: Assign unique ranking to every row
👉 Scenario: "Company wants unique ranking for employees based on salary"
👉 Analogy: Student roll numbers - always unique 📋
👉 How it works:
   - Assigns unique number to every row
   - Even duplicate values get different ranks
👉 SQL Example:
   SELECT name, salary,
          ROW_NUMBER() OVER(ORDER BY salary DESC) AS row_num
   FROM employees;
👉 Output:
   Ankit, 100000, 1
   Rahul, 100000, 2  (unique even for duplicate)
   Priya, 90000, 3
👉 Real World Usage:
   - Pagination
   - Top N records
   - Duplicate removal
👉 Interview Trap: Duplicate salaries still get unique numbers
👉 Quick Memory: ROW_NUMBER = Always unique ranking 🔢

2️⃣ RANK()
👉 Objective: Rank with gaps after ties
👉 Interview Question: "How do you rank employees where duplicate salaries share same rank?"
👉 Analogy: Sports competition - tied players share rank, next rank skipped 🏆
👉 Deep Explanation:
   - Same values receive same rank
   - Next rank gets skipped (creates gap)
👉 SQL Example:
   SELECT name, salary,
          RANK() OVER(ORDER BY salary DESC) AS rank
   FROM employees;
👉 Example Output:
   100000 → Rank 1
   100000 → Rank 1  (same rank for tie)
   90000 → Rank 3   (rank 2 skipped - gap!)
👉 Business Usage:
   - Leaderboards
   - Competition ranking
   - Sports rankings
👉 Quick Memory: RANK = Gaps after ties ⬆️

3️⃣ DENSE_RANK()
👉 Objective: Rank without gaps
👉 Problem: "Business wants ranking without gaps"
👉 Analogy: Olympics Medal Ranking - No skipped positions after ties 🥇
👉 Deep Explanation:
   - Same values get same rank
   - Next rank continues normally (no gap)
👉 SQL Example:
   SELECT name, salary,
          DENSE_RANK() OVER(ORDER BY salary DESC) AS dense_rank
   FROM employees;
👉 Example Output:
   100000 → Rank 1
   100000 → Rank 1  (same rank for tie)
   90000 → Rank 2   (no gap - continues normally)
👉 Business Usage:
   - Continuous rankings
   - Category rankings
   - Performance tiers
👉 Quick Memory: DENSE_RANK = No gaps 📊

4️⃣ LEAD()
👉 Objective: Fetch next row value
👉 Scenario: "Compare current month's sales with next month sales"
👉 Analogy: Looking ahead at next exam date 👉
👉 Deep Explanation:
   - LEAD fetches next row value
   - Can specify offset (default 1)
   - Can specify default value if no next row
👉 SQL Example:
   SELECT month, sales,
          LEAD(sales) OVER(ORDER BY month) AS next_month_sales
   FROM sales_data;
👉 Output:
   Jan, 5000, 6000 (Feb sales)
   Feb, 6000, 7000 (Mar sales)
   Mar, 7000, NULL (no next month)
👉 Real World Usage:
   - Forecast comparisons
   - Future sales trends
   - Next order analysis
👉 Quick Memory: LEAD = Look forward 👉

5️⃣ LAG()
👉 Objective: Fetch previous row value
👉 Real Problem: "Compare current sales with previous month"
👉 Analogy: Previous Exam Score - Compare current score with previous exam 👈
👉 Deep Explanation:
   - LAG fetches previous row value
   - Can specify offset (default 1)
   - Can specify default value if no previous row
👉 SQL Example:
   SELECT month, sales,
          LAG(sales) OVER(ORDER BY month) AS previous_month_sales,
          sales - LAG(sales) OVER(ORDER BY month) AS growth
   FROM sales_data;
👉 Output:
   Jan, 5000, NULL, NULL
   Feb, 6000, 5000, 1000 (growth)
   Mar, 7000, 6000, 1000 (growth)
👉 Business Usage:
   - Growth analysis
   - Historical comparisons
   - Previous order analysis
👉 Quick Memory: LAG = Look backward 👈`,

    qa: [
      {
        q: "What is the difference between ROW_NUMBER, RANK, and DENSE_RANK?",
        hint: "Think about handling duplicates",
        answer: "ROW_NUMBER gives unique ranks, RANK creates gaps after ties, DENSE_RANK has no gaps",
        explanation: "ROW_NUMBER: 1,2,3 (always unique). RANK: 1,1,3 (gap after tie). DENSE_RANK: 1,1,2 (no gap).",
        memory: "ROW_NUMBER=Unique | RANK=Gaps | DENSE_RANK=No gaps 🔢"
      },
      {
        q: "What is the difference between LEAD and LAG?",
        hint: "Think about direction",
        answer: "LEAD fetches next row value, LAG fetches previous row value",
        explanation: "LEAD looks forward (next month, next order). LAG looks backward (previous month, previous order).",
        memory: "LEAD=Forward 👉 | LAG=Backward 👈"
      },
      {
        q: "What is the difference between Window Function and GROUP BY?",
        hint: "Think about row preservation",
        answer: "Window functions keep all rows, GROUP BY combines rows and reduces output",
        explanation: "GROUP BY aggregates and reduces rows. Window functions add calculations while preserving all original rows.",
        memory: "Window=Keep rows | GROUP BY=Reduce rows 📊"
      },
      {
        q: "How do you find second highest salary using window functions?",
        hint: "Think about ranking",
        answer: "Use DENSE_RANK and filter WHERE rank = 2",
        explanation: "WITH ranked AS (SELECT salary, DENSE_RANK() OVER(ORDER BY salary DESC) AS rank FROM employees) SELECT salary FROM ranked WHERE rank = 2;",
        memory: "Second highest = DENSE_RANK WHERE rank=2 🥈"
      },
      {
        q: "What is PARTITION BY in window functions?",
        hint: "Think about grouping",
        answer: "Divides data into groups for separate window calculations",
        explanation: "PARTITION BY is like GROUP BY but keeps all rows. Each partition gets separate window calculation. Example: PARTITION BY department.",
        memory: "PARTITION BY = Group without reducing rows 📦"
      },
      {
        q: "Can you use window functions in WHERE clause?",
        hint: "Think about execution order",
        answer: "No, use subquery or CTE to filter window function results",
        explanation: "Window functions execute after WHERE clause. To filter on window function results, wrap in subquery or CTE.",
        memory: "Window in WHERE = No ❌ Use CTE/Subquery ✅"
      },
      {
        q: "What happens if you forget OVER clause?",
        hint: "Think about syntax",
        answer: "Syntax error - OVER clause is mandatory for window functions",
        explanation: "Window functions require OVER clause to define the window. Without it, database throws syntax error.",
        memory: "Window function = Must have OVER ⚠️"
      },
      {
        q: "How to calculate running total using window functions?",
        hint: "Think about cumulative sum",
        answer: "Use SUM() OVER(ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)",
        explanation: "Running total accumulates values. Use SUM with ORDER BY and frame clause to sum from start to current row.",
        memory: "Running total = SUM() OVER(ORDER BY...) 📈"
      }
    ],

    coding: {
      title: "Window Functions Challenge",
      scenario: "You're using window functions for rankings, comparisons, and trend analysis.",
      questions: [
        {
          q: "1. Assign unique row numbers to employees ordered by salary descending",
          answer: "SELECT name, salary, ROW_NUMBER() OVER(ORDER BY salary DESC) AS row_num FROM employees;"
        },
        {
          q: "2. Rank employees by salary (with gaps for ties)",
          answer: "SELECT name, salary, RANK() OVER(ORDER BY salary DESC) AS rank FROM employees;"
        },
        {
          q: "3. Rank employees by salary (without gaps for ties)",
          answer: "SELECT name, salary, DENSE_RANK() OVER(ORDER BY salary DESC) AS dense_rank FROM employees;"
        },
        {
          q: "4. Find second highest salary using DENSE_RANK",
          answer: "WITH ranked_salaries AS (SELECT salary, DENSE_RANK() OVER(ORDER BY salary DESC) AS rank FROM employees) SELECT DISTINCT salary FROM ranked_salaries WHERE rank = 2;"
        },
        {
          q: "5. Show each month's sales with next month's sales",
          answer: "SELECT month, sales, LEAD(sales) OVER(ORDER BY month) AS next_month_sales FROM sales_data;"
        },
        {
          q: "6. Show each month's sales with previous month's sales",
          answer: "SELECT month, sales, LAG(sales) OVER(ORDER BY month) AS previous_month_sales FROM sales_data;"
        },
        {
          q: "7. Calculate month-over-month growth using LAG",
          answer: "SELECT month, sales, LAG(sales) OVER(ORDER BY month) AS prev_sales, sales - LAG(sales) OVER(ORDER BY month) AS growth FROM sales_data;"
        },
        {
          q: "8. Rank employees within each department by salary",
          answer: "SELECT name, department, salary, RANK() OVER(PARTITION BY department ORDER BY salary DESC) AS dept_rank FROM employees;"
        },
        {
          q: "9. Find top 3 highest paid employees in each department",
          answer: "WITH ranked_employees AS (SELECT name, department, salary, ROW_NUMBER() OVER(PARTITION BY department ORDER BY salary DESC) AS rank FROM employees) SELECT * FROM ranked_employees WHERE rank <= 3;"
        },
        {
          q: "10. Show each employee's salary with department average salary",
          answer: "SELECT name, salary, department, AVG(salary) OVER(PARTITION BY department) AS dept_avg_salary FROM employees;"
        },
        {
          q: "11. Calculate running total of sales by date",
          answer: "SELECT order_date, amount, SUM(amount) OVER(ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM orders;"
        },
        {
          q: "12. Find employees earning more than their department average",
          answer: "WITH dept_avg AS (SELECT name, salary, department, AVG(salary) OVER(PARTITION BY department) AS avg_salary FROM employees) SELECT * FROM dept_avg WHERE salary > avg_salary;"
        }
      ]
    },

    quiz: [
      { q: "ROW_NUMBER gives?", options: ["Duplicate ranks", "Unique ranks always", "Gaps after ties", "No gaps"], answer: 1 },
      { q: "RANK creates?", options: ["Unique ranks", "Gaps after ties", "No gaps", "Random ranks"], answer: 1 },
      { q: "DENSE_RANK has?", options: ["Gaps", "No gaps", "Unique always", "Random ranks"], answer: 1 },
      { q: "LEAD fetches?", options: ["Previous row", "Next row", "Current row", "Random row"], answer: 1 },
      { q: "LAG fetches?", options: ["Next row", "Previous row", "Current row", "Random row"], answer: 1 },
      { q: "Window function vs GROUP BY?", options: ["Same thing", "Window keeps rows, GROUP BY reduces", "GROUP BY keeps rows", "No difference"], answer: 1 },
      { q: "PARTITION BY does?", options: ["Reduces rows", "Divides data into groups for separate calculations", "Sorts data", "Filters data"], answer: 1 },
      { q: "Window function in WHERE?", options: ["Yes", "No, use CTE/subquery", "Only RANK", "Only ROW_NUMBER"], answer: 1 },
      { q: "OVER clause is?", options: ["Optional", "Mandatory for window functions", "Only for RANK", "Only for LEAD"], answer: 1 },
      { q: "Second highest salary?", options: ["MAX(salary)", "DENSE_RANK WHERE rank=2", "MIN(salary)", "AVG(salary)"], answer: 1 }
    ],

    interview: "Window functions perform calculations across related rows while preserving original records. Five essential types: ROW_NUMBER (unique ranks always), RANK (gaps after ties: 1,1,3), DENSE_RANK (no gaps: 1,1,2), LEAD (fetch next row value), LAG (fetch previous row value). Key difference from GROUP BY: window functions keep all rows, GROUP BY reduces output. OVER clause is mandatory, contains ORDER BY (row order) and PARTITION BY (divide into groups like GROUP BY but keeps rows). Common interview questions: second highest salary (DENSE_RANK WHERE rank=2), top N per group (ROW_NUMBER with PARTITION BY), month-over-month growth (LAG for previous value). Cannot use window functions in WHERE clause - use CTE or subquery to filter results. Real-world usage: Amazon uses for customer ranking, order analysis, sales trends before loading to Power BI. Common mistakes: forgetting OVER clause, confusing RANK with DENSE_RANK, using GROUP BY instead of window functions. Performance: index ORDER BY columns, use PARTITION BY to reduce window size.",

    memory: `👉 Window Functions = Add insights WITHOUT losing rows 🪟

Window Formula:
Unique Rank → ROW_NUMBER 🔢
Gap Rank → RANK ⬆️
No Gap Rank → DENSE_RANK 📊
Next Value → LEAD 👉
Previous Value → LAG 👈

Ranking Comparison:
ROW_NUMBER: 1, 2, 3 (always unique)
RANK: 1, 1, 3 (gaps after ties)
DENSE_RANK: 1, 1, 2 (no gaps)

Direction:
LEAD = Look forward 👉
LAG = Look backward 👈

Key Differences:
Window vs GROUP BY:
- Window: Keeps all rows ✅
- GROUP BY: Reduces rows 📉

OVER Clause Components:
✅ ORDER BY: Row order
✅ PARTITION BY: Divide into groups
✅ ROWS/RANGE: Window frame

Common Patterns:
Second highest: DENSE_RANK WHERE rank=2
Top N per group: ROW_NUMBER PARTITION BY
Growth: LAG for previous value
Running total: SUM() OVER(ORDER BY...)

Common Mistakes:
❌ Forgetting OVER clause
❌ Confusing RANK with DENSE_RANK
❌ Using GROUP BY instead of window
❌ Window function in WHERE (use CTE)

Real Usage:
Amazon: Customer ranking, order analysis
Sales trends, growth analysis
Leaderboards, pagination
Historical comparisons`,

    revision: "Window Functions: Calculations across rows while preserving all records. Five types: ROW_NUMBER (unique), RANK (gaps after ties), DENSE_RANK (no gaps), LEAD (next row), LAG (previous row). OVER clause mandatory with ORDER BY and PARTITION BY. Different from GROUP BY: keeps all rows vs reduces. Cannot use in WHERE - use CTE. Common uses: rankings, growth analysis, running totals. Essential for analytics and interviews"
  },

  "sql-optimization": {
    title: "SQL Optimization Basics",
    icon: "⚡",
    difficulty: "Advanced",
    duration: "60 min",
    description: "This module teaches how to identify slow queries and improve SQL performance using basic optimization techniques used in real projects.",
    
    comic: `⚡ Imagine Traffic Jam:

🚗 Scenario:
Your ETL job that normally runs in 5 minutes suddenly takes 2 hours!

🚨 Business Impact:
- Higher cloud cost 💸
- Slow dashboards 🐌
- Missed SLA deadlines ⏰
- Poor user experience 😞

🚦 Problem: Too many unnecessary vehicles on road = Traffic jam
Same with SQL: Too much unnecessary data = Slow queries!

📚 Four Key Optimization Topics:

1️⃣ Index Basics - Shortcut Path:
❌ Without Index: Database scans EVERY row (like reading entire book)
✅ With Index: Direct jump to data (like using book index)

Example:
CREATE INDEX idx_employee_name ON employees(name);

📚 Book Index Analogy:
Instead of reading entire book, you directly jump to page using index!

2️⃣ Why Queries Become Slow:
❌ Full table scans
❌ Too many joins
❌ Missing indexes
❌ Using SELECT *
❌ Large unnecessary datasets
❌ Poor filtering

🚪 Airport Security Analogy:
More unnecessary checks = Slower movement!

3️⃣ Avoid SELECT * - Take Only What You Need:
❌ Bad: SELECT * FROM employees; (fetches ALL columns)
✅ Good: SELECT name, salary FROM employees; (only needed columns)

Why SELECT * is bad:
- Transfers extra data 📦
- Consumes memory 💾
- Slows performance 🐌

4️⃣ Basic Query Optimization:
Optimization Steps:
✅ Filter early (WHERE clause)
✅ Use indexes
✅ Avoid unnecessary joins
✅ Select required columns only
✅ Use proper partitions
✅ Check execution plan

🎒 Packing for Travel Analogy:
Carry only necessary luggage = Faster travel!

💡 Aha Moment:
Optimization Formula:
Index + Filter Early + Avoid Extra Data = Fast Queries ⚡`,

    deepDive: `👉 What is SQL Optimization?
SQL optimization improves query performance by reducing execution time and resource consumption.

👉 Why Optimization Exists?
Scenario: Your ETL job that normally runs in 5 minutes suddenly takes 2 hours.

Business Impact:
- Higher cloud cost (more compute time)
- Slow dashboards (poor user experience)
- Missed SLA deadlines (business impact)
- Poor user experience (customer dissatisfaction)

Analogy: Traffic Jam - Too many unnecessary vehicles on road make travel slow—same happens with bad SQL queries.

👉 The 4 Core Optimization Topics:

1. Index Basics - Shortcut path
   Interview First Question: "Why does database indexing improve performance?"
   
   Problem: Without indexes, database scans every row (full table scan)
   
   Real Life Example: Book Index
   - Without index: Read entire book to find topic
   - With index: Directly jump to page using index
   
   Deep Explanation:
   - Index creates faster lookup path
   - Improves WHERE, JOIN, ORDER BY performance
   - Works like a sorted reference table
   - Database can quickly locate data without scanning all rows
   
   SQL Example:
   CREATE INDEX idx_employee_name ON employees(name);
   CREATE INDEX idx_salary ON employees(salary);
   CREATE INDEX idx_dept_salary ON employees(department, salary); -- Composite index
   
   How it helps:
   - WHERE name = 'Ankit' → Uses idx_employee_name (fast)
   - WHERE salary > 50000 → Uses idx_salary (fast)
   - Without index → Full table scan (slow)
   
   When NOT to use:
   - Very small tables (overhead not worth it)
   - Columns with frequent updates (index maintenance cost)
   - Columns with low cardinality (few unique values like gender)
   
   Types of Indexes:
   - B-Tree Index: Most common, good for range queries
   - Hash Index: Good for exact match queries
   - Composite Index: Multiple columns together
   
   Quick Memory: Index = Shortcut path

2. Why Queries Become Slow
   Scenario: "Your manager asks why a query suddenly became slow in production"
   
   Common Reasons:
   1. Full table scans (no indexes)
   2. Too many joins (complex query)
   3. Missing indexes (no optimization)
   4. Using SELECT * (fetching unnecessary data)
   5. Large unnecessary datasets (no filtering)
   6. Poor filtering (WHERE clause missing or inefficient)
   7. Data growth (table size increased)
   8. Outdated statistics (query planner makes wrong decisions)
   
   Analogy: Airport Security Line
   - More unnecessary checks = Slower movement
   - Same with SQL: More unnecessary operations = Slower query
   
   Real Project Example:
   - Joining huge raw tables without filters
   - Example: SELECT * FROM orders JOIN customers → Millions of rows!
   - Better: SELECT * FROM orders JOIN customers WHERE order_date >= '2024-01-01'
   
   How to Identify:
   - Check execution plan (EXPLAIN command)
   - Look for "Seq Scan" or "Full Table Scan"
   - Monitor query execution time
   - Check database logs
   
   Quick Memory: More scans = More time

3. Avoid SELECT * - Take only what you need
   Problem Statement: "Developers often fetch unnecessary columns"
   
   Why SELECT * is Bad:
   - Transfers extra data (network overhead)
   - Consumes memory (application memory)
   - Slows performance (I/O operations)
   - Breaks code when schema changes
   - Prevents index-only scans
   
   Bad Example:
   SELECT * FROM employees; -- Fetches all 50 columns!
   
   Better Example:
   SELECT name, salary FROM employees; -- Only 2 needed columns
   
   Real World Impact:
   - 1 million rows × 50 columns = 50 million data points
   - 1 million rows × 2 columns = 2 million data points
   - 25x less data transferred!
   
   Real World Usage:
   - Production reporting queries
   - ETL optimization
   - API responses
   - Dashboard queries
   
   Interview Trap: "Why should SELECT * be avoided in production?"
   Answer: Fetches unnecessary data, wastes bandwidth, memory, and prevents optimization
   
   Quick Memory: Take only what you need

4. Basic Query Optimization
   Scenario: "A dashboard query is taking 20 minutes"
   
   Optimization Steps:
   
   1. Filter Early (WHERE clause):
      - Bad: SELECT * FROM orders WHERE customer_id = 1;
      - Good: Add date filter: WHERE customer_id = 1 AND order_date >= '2024-01-01';
   
   2. Use Indexes:
      - Create indexes on frequently queried columns
      - Index columns used in WHERE, JOIN, ORDER BY
   
   3. Avoid Unnecessary Joins:
      - Bad: Joining 5 tables when only 2 needed
      - Good: Join only required tables
   
   4. Select Required Columns Only:
      - Bad: SELECT *
      - Good: SELECT name, salary
   
   5. Use Proper Partitions:
      - Partition large tables by date, region, etc.
      - Query only relevant partitions
   
   6. Check Execution Plan:
      - Use EXPLAIN or EXPLAIN ANALYZE
      - Identify bottlenecks
      - Look for full table scans
   
   Analogy: Packing for Travel
   - Carry only necessary luggage = Faster travel
   - Same with SQL: Fetch only necessary data = Faster query
   
   Real Company Usage:
   - ETL jobs (data pipelines)
   - Data warehouse reporting (analytics)
   - Dashboard queries (BI tools)
   
   Before Optimization:
   SELECT * FROM orders o
   JOIN customers c ON o.customer_id = c.customer_id
   JOIN products p ON o.product_id = p.product_id;
   -- Takes 20 minutes!
   
   After Optimization:
   SELECT o.order_id, c.name, p.product_name
   FROM orders o
   JOIN customers c ON o.customer_id = c.customer_id
   JOIN products p ON o.product_id = p.product_id
   WHERE o.order_date >= '2024-01-01'
   AND o.status = 'completed';
   -- Takes 30 seconds!
   
   Quick Memory: Less data = Faster query

👉 Real World Pipeline Example:
1. Oracle query extraction (optimize here!)
2. Optimization applied (indexes, filters)
3. Data moved to AWS S3
4. Processed via AWS Glue
5. Loaded into Redshift

👉 Common Mistakes:
- Adding indexes everywhere (too many indexes slow down writes)
- Ignoring execution plans (flying blind)
- Joining huge tables without filters (performance killer)
- Fetching unnecessary columns (bandwidth waste)
- Not monitoring query performance
- Over-optimizing small tables

👉 Performance Monitoring:
- Use EXPLAIN ANALYZE to see actual execution
- Monitor query execution time
- Check database logs
- Use database profiling tools
- Set up alerts for slow queries

👉 Quick Wins:
1. Add indexes on frequently queried columns
2. Replace SELECT * with specific columns
3. Add WHERE clause to filter early
4. Remove unnecessary joins
5. Use LIMIT for testing
6. Partition large tables`,

    types: `⚡ SQL Optimization Concepts:

1️⃣ Index Basics
👉 Objective: Create faster lookup path for data
👉 Interview Question: "Why does database indexing improve performance?"
👉 Problem: Without indexes, database scans every row
👉 Analogy: Book Index - Jump directly to page instead of reading entire book 📚
👉 Deep Explanation:
   - Index creates faster lookup path
   - Improves WHERE, JOIN, ORDER BY performance
   - Works like sorted reference table
👉 SQL Example:
   CREATE INDEX idx_employee_name ON employees(name);
   CREATE INDEX idx_salary ON employees(salary);
   CREATE INDEX idx_dept_salary ON employees(department, salary);
👉 How it helps:
   - WHERE name = 'Ankit' → Uses index (fast)
   - Without index → Full table scan (slow)
👉 When NOT to use:
   - Very small tables
   - Columns with frequent updates
   - Low cardinality columns (few unique values)
👉 Quick Memory: Index = Shortcut path 🛣️

2️⃣ Why Queries Become Slow
👉 Objective: Identify performance bottlenecks
👉 Scenario: "Manager asks why query suddenly became slow in production"
👉 Analogy: Airport Security Line - More checks = Slower movement 🚪
👉 Common Reasons:
   ❌ Full table scans (no indexes)
   ❌ Too many joins (complex query)
   ❌ Missing indexes (no optimization)
   ❌ Using SELECT * (unnecessary data)
   ❌ Large unnecessary datasets (no filtering)
   ❌ Poor filtering (inefficient WHERE)
👉 Real Project Example:
   - Joining huge raw tables without filters
   - Bad: SELECT * FROM orders JOIN customers
   - Good: SELECT * FROM orders JOIN customers WHERE order_date >= '2024-01-01'
👉 How to Identify:
   - Check execution plan (EXPLAIN)
   - Look for "Full Table Scan"
   - Monitor query execution time
👉 Quick Memory: More scans = More time ⏱️

3️⃣ Avoid SELECT *
👉 Objective: Fetch only required columns
👉 Problem: Developers often fetch unnecessary columns
👉 Analogy: Shopping - Buy only what you need, not entire store 🛍️
👉 Why SELECT * is Bad:
   - Transfers extra data (network overhead)
   - Consumes memory (application memory)
   - Slows performance (I/O operations)
   - Prevents index-only scans
👉 Bad Example:
   SELECT * FROM employees; -- All 50 columns!
👉 Better Example:
   SELECT name, salary FROM employees; -- Only 2 columns
👉 Real World Impact:
   - 1M rows × 50 columns = 50M data points
   - 1M rows × 2 columns = 2M data points
   - 25x less data!
👉 Real World Usage:
   - Production reporting queries
   - ETL optimization
   - API responses
👉 Interview Trap: "Why should SELECT * be avoided in production?"
👉 Quick Memory: Take only what you need 🎯

4️⃣ Basic Query Optimization
👉 Objective: Improve query performance systematically
👉 Scenario: "Dashboard query taking 20 minutes"
👉 Analogy: Packing for Travel - Carry only necessary luggage 🎒
👉 Optimization Steps:
   ✅ Filter early (WHERE clause)
   ✅ Use indexes
   ✅ Avoid unnecessary joins
   ✅ Select required columns only
   ✅ Use proper partitions
   ✅ Check execution plan
👉 Before Optimization:
   SELECT * FROM orders o
   JOIN customers c ON o.customer_id = c.customer_id
   JOIN products p ON o.product_id = p.product_id;
   -- Takes 20 minutes!
👉 After Optimization:
   SELECT o.order_id, c.name, p.product_name
   FROM orders o
   JOIN customers c ON o.customer_id = c.customer_id
   JOIN products p ON o.product_id = p.product_id
   WHERE o.order_date >= '2024-01-01'
   AND o.status = 'completed';
   -- Takes 30 seconds!
👉 Real Company Usage:
   - ETL jobs
   - Data warehouse reporting
   - Dashboard queries
👉 Quick Memory: Less data = Faster query ⚡`,

    qa: [
      {
        q: "What is indexing?",
        hint: "Think about shortcuts",
        answer: "Creating a faster lookup path to data without scanning all rows",
        explanation: "Index is like a book index - allows database to quickly locate data without reading every row. Improves WHERE, JOIN, ORDER BY performance.",
        memory: "Index = Shortcut path 🛣️"
      },
      {
        q: "Why is SELECT * bad in production?",
        hint: "Think about unnecessary data",
        answer: "Fetches unnecessary columns, wastes bandwidth, memory, and prevents optimization",
        explanation: "SELECT * transfers all columns even if you need only few. This wastes network bandwidth, application memory, and prevents index-only scans.",
        memory: "SELECT * = Waste resources 🗑️"
      },
      {
        q: "How do you optimize slow SQL queries?",
        hint: "Think about systematic approach",
        answer: "Filter early, use indexes, avoid unnecessary joins, select only needed columns, check execution plan",
        explanation: "Optimization steps: 1) Add WHERE filters 2) Create indexes 3) Remove unnecessary joins 4) Replace SELECT * 5) Use EXPLAIN to identify bottlenecks.",
        memory: "Optimize = Filter + Index + Less data ⚡"
      },
      {
        q: "What causes full table scans?",
        hint: "Think about missing optimizations",
        answer: "Missing indexes, no WHERE clause, or query conditions that cannot use indexes",
        explanation: "Full table scan happens when database must read every row. Caused by missing indexes, no filtering, or using functions on indexed columns.",
        memory: "Full scan = No index + No filter 🐌"
      },
      {
        q: "When should you NOT create an index?",
        hint: "Think about overhead",
        answer: "Small tables, frequently updated columns, low cardinality columns",
        explanation: "Indexes have maintenance overhead. Don't create on small tables (overhead not worth it), frequently updated columns (slow writes), or low cardinality columns (few unique values).",
        memory: "No index = Small tables + Frequent updates ⚠️"
      },
      {
        q: "What is the difference between clustered and non-clustered index?",
        hint: "Think about data storage",
        answer: "Clustered index determines physical order of data, non-clustered is separate structure",
        explanation: "Clustered index sorts and stores data rows (one per table, usually primary key). Non-clustered index is separate structure pointing to data (can have multiple).",
        memory: "Clustered = Physical order | Non-clustered = Pointer 📍"
      },
      {
        q: "How does EXPLAIN help in optimization?",
        hint: "Think about visibility",
        answer: "Shows query execution plan, identifies full table scans and bottlenecks",
        explanation: "EXPLAIN shows how database will execute query. Reveals full table scans, index usage, join methods, and estimated costs. Essential for optimization.",
        memory: "EXPLAIN = Query X-ray 🔍"
      },
      {
        q: "What is a composite index?",
        hint: "Think about multiple columns",
        answer: "Index on multiple columns together",
        explanation: "Composite index covers multiple columns (e.g., department, salary). Useful for queries filtering on multiple columns. Column order matters!",
        memory: "Composite = Multiple columns together 🔗"
      }
    ],

    coding: {
      title: "SQL Optimization Challenge",
      scenario: "You're optimizing slow queries in production environment.",
      questions: [
        {
          q: "1. Create an index on employee name column",
          answer: "CREATE INDEX idx_employee_name ON employees(name);"
        },
        {
          q: "2. Create a composite index on department and salary columns",
          answer: "CREATE INDEX idx_dept_salary ON employees(department, salary);"
        },
        {
          q: "3. Optimize: SELECT * FROM employees WHERE salary > 50000;",
          answer: "CREATE INDEX idx_salary ON employees(salary); SELECT employee_id, name, salary FROM employees WHERE salary > 50000;"
        },
        {
          q: "4. Rewrite to avoid SELECT *: SELECT * FROM customers WHERE city='Mumbai';",
          answer: "SELECT customer_id, name, email, city FROM customers WHERE city='Mumbai';"
        },
        {
          q: "5. Add filter to optimize: SELECT * FROM orders JOIN customers ON orders.customer_id = customers.customer_id;",
          answer: "SELECT orders.order_id, customers.name, orders.amount FROM orders JOIN customers ON orders.customer_id = customers.customer_id WHERE orders.order_date >= '2024-01-01';"
        },
        {
          q: "6. Use EXPLAIN to analyze query execution plan",
          answer: "EXPLAIN SELECT * FROM employees WHERE department='IT';"
        },
        {
          q: "7. Optimize by selecting only needed columns: SELECT * FROM products WHERE category='Electronics';",
          answer: "SELECT product_id, product_name, price FROM products WHERE category='Electronics';"
        },
        {
          q: "8. Create index for frequently used JOIN condition",
          answer: "CREATE INDEX idx_customer_id ON orders(customer_id);"
        },
        {
          q: "9. Add WHERE filter to reduce dataset: SELECT c.name, o.order_id FROM customers c JOIN orders o ON c.customer_id = o.customer_id;",
          answer: "SELECT c.name, o.order_id FROM customers c JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_date >= '2024-01-01' AND o.status='completed';"
        },
        {
          q: "10. Drop unused index",
          answer: "DROP INDEX idx_old_column;"
        },
        {
          q: "11. Create index on ORDER BY column to improve sorting performance",
          answer: "CREATE INDEX idx_order_date ON orders(order_date);"
        },
        {
          q: "12. Optimize query with multiple filters",
          answer: "CREATE INDEX idx_status_date ON orders(status, order_date); SELECT order_id, customer_id, amount FROM orders WHERE status='completed' AND order_date >= '2024-01-01';"
        }
      ]
    },

    quiz: [
      { q: "Index improves?", options: ["Write performance", "Read performance", "Storage", "Security"], answer: 1 },
      { q: "SELECT * is bad because?", options: ["Syntax error", "Fetches unnecessary data", "Cannot use WHERE", "Requires index"], answer: 1 },
      { q: "Full table scan means?", options: ["Using index", "Reading every row", "Fast query", "Optimized query"], answer: 1 },
      { q: "EXPLAIN shows?", options: ["Data", "Query execution plan", "Errors", "Schema"], answer: 1 },
      { q: "When NOT to create index?", options: ["Large tables", "Small tables", "Frequently queried columns", "JOIN columns"], answer: 1 },
      { q: "Composite index is?", options: ["One column", "Multiple columns together", "Primary key", "Foreign key"], answer: 1 },
      { q: "Filter early means?", options: ["No WHERE", "Use WHERE clause to reduce data", "Use SELECT *", "Avoid indexes"], answer: 1 },
      { q: "Clustered index?", options: ["Separate structure", "Determines physical data order", "Multiple per table", "Optional"], answer: 1 },
      { q: "Query optimization goal?", options: ["More data", "Reduce execution time and resources", "Complex queries", "More joins"], answer: 1 },
      { q: "Index overhead?", options: ["No overhead", "Slows down writes/updates", "Slows down reads", "No impact"], answer: 1 }
    ],

    interview: "SQL Optimization improves query performance by reducing execution time and resource consumption. Key concepts: Indexing creates faster lookup path (like book index), improves WHERE/JOIN/ORDER BY performance. Avoid on small tables, frequently updated columns, low cardinality columns. Queries become slow due to full table scans, missing indexes, too many joins, SELECT *, poor filtering. SELECT * is bad because it fetches unnecessary columns, wastes bandwidth and memory, prevents optimization. Optimization steps: filter early (WHERE), use indexes, avoid unnecessary joins, select only needed columns, check execution plan (EXPLAIN). EXPLAIN shows query execution plan, identifies bottlenecks. Composite index covers multiple columns. Clustered index determines physical data order (one per table), non-clustered is separate structure (multiple allowed). Common mistakes: too many indexes (slow writes), ignoring execution plans, joining huge tables without filters. Real-world pipeline: Oracle extraction → optimization → S3 → Glue → Redshift. Quick wins: add indexes on frequently queried columns, replace SELECT *, add WHERE filters, remove unnecessary joins.",

    memory: `👉 Optimization = Faster queries ⚡

Optimization Formula:
Index + Filter Early + Avoid Extra Data = Fast Queries

Key Concepts:
👉 Index = Shortcut path 🛣️
👉 SELECT * = Bad (waste resources) 🗑️
👉 Filter early = Use WHERE 🎯
👉 EXPLAIN = Query X-ray 🔍

Why Queries Slow:
❌ Full table scans
❌ Missing indexes
❌ Too many joins
❌ SELECT *
❌ No filtering
❌ Large datasets

Optimization Steps:
✅ Filter early (WHERE)
✅ Use indexes
✅ Avoid unnecessary joins
✅ Select needed columns only
✅ Check execution plan
✅ Use partitions

Index Guidelines:
✅ Create on: Frequently queried columns, JOIN columns, WHERE columns, ORDER BY columns
❌ Avoid on: Small tables, frequently updated columns, low cardinality columns

SELECT * Problems:
- Transfers extra data
- Consumes memory
- Slows performance
- Prevents optimization

Index Types:
- Clustered: Physical data order (one per table)
- Non-clustered: Separate structure (multiple allowed)
- Composite: Multiple columns together

Common Mistakes:
❌ Too many indexes
❌ Ignoring execution plans
❌ Joining without filters
❌ Fetching unnecessary columns

Quick Wins:
1. Add indexes on frequently queried columns
2. Replace SELECT * with specific columns
3. Add WHERE clause to filter early
4. Remove unnecessary joins
5. Use LIMIT for testing
6. Partition large tables

Real Pipeline:
Oracle → Optimize → S3 → Glue → Redshift

Analogies:
📚 Index = Book index
🚪 Slow query = Airport security line
🎒 Optimization = Packing light
🚗 Bad query = Traffic jam`,

    revision: "SQL Optimization: Improve query performance. Key concepts: Indexing (shortcut path for faster lookups), avoid SELECT * (fetches unnecessary data), filter early (WHERE clause), check execution plan (EXPLAIN). Queries slow due to full table scans, missing indexes, too many joins, poor filtering. Optimization steps: use indexes, select only needed columns, filter early, avoid unnecessary joins. Index types: clustered (physical order), non-clustered (separate structure), composite (multiple columns). Don't index: small tables, frequently updated columns, low cardinality. Common mistakes: too many indexes, ignoring execution plans, joining without filters. Essential for production performance"
  },

  "data-warehousing": {
    title: "Data Warehousing Concepts",
    icon: "🏢",
    difficulty: "Advanced",
    duration: "70 min",
    description: "This module teaches how enterprise data is structured for analytics, reporting, and scalable ETL pipelines. Very High Interview Importance.",
    
    comic: `🏢 E-commerce Company Story:

📊 Business Challenge:
An e-commerce company stores millions of daily transactions
Business teams need clean analytics-ready structures for dashboards

❌ Problems:
- Raw transactional data is messy
- Historical tracking is required
- Fast reporting is needed

✅ Solution: Build proper warehouse design!

🎯 Seven Core Concepts:

1️⃣ Fact Table - Shopping Bill 🧾
Business Question: Where should actual business transactions be stored?
→ Fact tables store measurable business events
→ Contains numeric metrics: sales_amount, quantity, order_count
→ Real example: Order transactions table
→ Memory: Facts = Numbers 💰

2️⃣ Dimension Table - Customer Profile 👤
Business wants descriptive details about transactions
→ Contains: Customer name, Product category, Location, Date attributes
→ Stores descriptive attributes
→ Real example: Customer details table
→ Memory: Dimension = Description 📋

3️⃣ Star Schema - Sun Structure ☀️
Need simple and fast reporting structure
→ Architecture: One central fact table + Multiple surrounding dimensions
→ Why used: Faster queries, Simple joins
→ Like sun in center with planets around it
→ Memory: Star = Simple ⭐

4️⃣ Snowflake Schema - Complex Structure ❄️
Interview Question: How is Snowflake schema different from Star schema?
→ Dimension tables are further normalized
→ Benefits: Reduced redundancy, Better storage optimization
→ Drawback: More joins required
→ Memory: Snowflake = More normalized ❄️

5️⃣ SCD Type 1 - Replace 🔄
Scenario: Customer updates address
→ How it works: Old value overwritten, No history maintained
→ Example: Pune → Mumbai (old value lost)
→ Best for: Non-critical history data
→ Memory: Type 1 = Replace

6️⃣ SCD Type 2 - History 📚
Real Problem: Business wants historical customer changes
→ How it works: Old record retained, New record inserted
→ Columns used: start_date, end_date, is_active
→ Real world usage: Banking, Healthcare, Customer history tracking
→ Memory: Type 2 = History

7️⃣ Incremental Loading - Changes Only ⚡
Problem: Loading full dataset daily is expensive
→ Only new/changed records are loaded
→ Example: Yesterday loaded 1M rows, Today load only new 10K rows
→ Benefits: Faster processing, Lower cloud cost
→ Real world usage: Daily ETL pipelines, CDC pipelines
→ Memory: Incremental = Load changes only

🏗️ Real Project Architecture:
Source DB → DMS → S3 → Glue → Fact + Dimension Modeling → Redshift → Power BI

🎯 Top Interview Questions:
- Fact vs Dimension?
- Star vs Snowflake?
- SCD Type 1 vs Type 2?
- Full load vs Incremental load?

⚠️ Common Mistakes:
- Using fact table for descriptive data
- Ignoring historical tracking requirements
- Running full loads unnecessarily

📝 Final Memory Formula:
Facts = Numbers | Dimensions = Details
Star = Simple | Snowflake = Normalized
SCD1 = Replace | SCD2 = History
Incremental = Changes Only`,

    deepDive: `👉 What is Data Warehousing?
Data warehousing structures enterprise data for analytics, reporting, and scalable ETL pipelines.

👉 Business Story:
Scenario: E-commerce company stores millions of daily transactions. Business teams need clean analytics-ready structures for dashboards.

Challenge:
- Raw transactional data is messy
- Historical tracking is required
- Fast reporting is needed

Solution: Build proper warehouse design

👉 The 7 Core Concepts:

1. Fact Table - Numbers
   Business Question: "Where should actual business transactions be stored?"
   
   Deep Explanation:
   - Fact tables store measurable business events
   - Contains numeric metrics (quantitative data)
   - Typically large tables with millions/billions of rows
   - Contains foreign keys to dimension tables
   
   Examples of Facts:
   - sales_amount
   - quantity
   - order_count
   - revenue
   - profit
   - discount_amount
   
   Real World Example: Order transactions table
   - order_id (PK)
   - customer_id (FK to customer dimension)
   - product_id (FK to product dimension)
   - date_id (FK to date dimension)
   - sales_amount (fact/measure)
   - quantity (fact/measure)
   
   Analogy: Shopping Bill
   - Contains actual purchased items and total amount
   - The "what happened" data
   
   Quick Memory: Facts = Numbers 💰

2. Dimension Table - Details
   Scenario: "Business wants descriptive details about transactions"
   
   Contains:
   - Customer name
   - Product category
   - Location
   - Date attributes
   
   Deep Explanation:
   - Dimension tables store descriptive attributes
   - Provides context to facts
   - Typically smaller than fact tables
   - Contains business-friendly descriptions
   
   Examples of Dimensions:
   - Customer Dimension: customer_id, name, email, city, country
   - Product Dimension: product_id, name, category, brand, price
   - Date Dimension: date_id, date, day, month, quarter, year
   - Location Dimension: location_id, city, state, country, region
   
   Analogy: Customer Profile
   - Details about person making purchase
   - The "who, what, where, when" data
   
   Quick Memory: Dimension = Description 📋

3. Star Schema - Simple
   Problem: "Need simple and fast reporting structure"
   
   Architecture:
   - One central fact table (center of star)
   - Multiple surrounding dimensions (points of star)
   - Direct joins between fact and dimensions
   
   Example Structure:
   
   Customer Dim
         |
   Product Dim -- FACT TABLE -- Date Dim
         |
   Location Dim
   
   Why Used:
   - Faster queries (fewer joins)
   - Simple joins (one level)
   - Easy to understand
   - Better query performance
   - Denormalized dimensions
   
   Real World Usage:
   - Most common warehouse design
   - Used in Redshift, Snowflake, BigQuery
   - Ideal for BI tools (Power BI, Tableau)
   
   Analogy: Sun Structure
   - Fact table in center like sun
   - Dimensions around it like planets
   
   Quick Memory: Star = Simple ⭐

4. Snowflake Schema - Normalized
   Interview First Question: "How is Snowflake schema different from Star schema?"
   
   Deep Explanation:
   - Dimension tables are further normalized
   - Dimensions split into sub-dimensions
   - More complex structure
   
   Example:
   
   Product Dimension splits into:
   - Product table
   - Category table (normalized)
   - Brand table (normalized)
   
   Benefits:
   - Reduced redundancy
   - Better storage optimization
   - Less data duplication
   
   Drawback:
   - More joins required
   - Slower query performance
   - More complex queries
   
   When to Use:
   - Storage is expensive
   - Data integrity is critical
   - Complex hierarchies exist
   
   Quick Memory: Snowflake = More normalized ❄️

5. SCD Type 1 - Replace
   Scenario: "Customer updates address"
   
   How it Works:
   - Old value overwritten
   - No history maintained
   - Simple UPDATE operation
   
   Example:
   Before: customer_id=1, address='Pune'
   After: customer_id=1, address='Mumbai'
   (Pune is lost forever)
   
   SQL Example:
   UPDATE customers SET address='Mumbai' WHERE customer_id=1;
   
   Best For:
   - Non-critical history data
   - Correcting data errors
   - When history not needed
   
   Pros:
   - Simple to implement
   - No additional storage
   - Easy to maintain
   
   Cons:
   - History lost
   - Cannot track changes
   
   Quick Memory: Type 1 = Replace 🔄

6. SCD Type 2 - History
   Real Problem: "Business wants historical customer changes"
   
   How it Works:
   - Old record retained (marked inactive)
   - New record inserted (marked active)
   - Full history maintained
   
   Columns Used:
   - start_date (when record became active)
   - end_date (when record became inactive)
   - is_active (current record flag)
   - version (optional)
   
   Example:
   Before:
   customer_id=1, address='Pune', start_date='2023-01-01', end_date='9999-12-31', is_active=1
   
   After customer moves:
   customer_id=1, address='Pune', start_date='2023-01-01', end_date='2024-01-15', is_active=0
   customer_id=1, address='Mumbai', start_date='2024-01-16', end_date='9999-12-31', is_active=1
   
   Real World Usage:
   - Banking (account history)
   - Healthcare (patient history)
   - Customer history tracking
   - Compliance requirements
   
   Pros:
   - Complete history maintained
   - Can analyze historical trends
   - Audit trail available
   
   Cons:
   - More storage required
   - More complex queries
   - Larger tables
   
   Quick Memory: Type 2 = History 📚

7. Incremental Loading - Changes Only
   Problem: "Loading full dataset daily is expensive"
   
   Deep Explanation:
   - Only new/changed records are loaded
   - Reduces processing time
   - Lowers cloud costs
   
   Example:
   - Yesterday loaded 1M rows (full load)
   - Today load only new 10K rows (incremental)
   - Result: 100x faster!
   
   How it Works:
   - Track last load timestamp
   - Query: WHERE modified_date > last_load_date
   - Load only matching records
   
   Benefits:
   - Faster processing
   - Lower cloud cost
   - Less network bandwidth
   - Reduced database load
   
   Real World Usage:
   - Daily ETL pipelines
   - CDC (Change Data Capture) pipelines
   - Real-time data sync
   
   Types:
   - Timestamp-based: WHERE updated_at > last_load
   - Flag-based: WHERE is_processed = 0
   - CDC-based: Capture database changes
   
   Quick Memory: Incremental = Load changes only ⚡

👉 Real Project Architecture:
Source DB → AWS DMS → S3 → Glue → Fact + Dimension Modeling → Redshift → Power BI

👉 Common Mistakes:
- Using fact table for descriptive data
- Ignoring historical tracking requirements
- Running full loads unnecessarily
- Not partitioning large fact tables
- Over-normalizing in star schema

👉 Best Practices:
- Use star schema for most cases
- Implement SCD Type 2 for critical history
- Use incremental loading for large datasets
- Partition fact tables by date
- Index foreign keys in fact tables
- Keep dimensions denormalized in star schema`,

    types: `🏢 Data Warehousing Concepts:

1️⃣ Fact Table
👉 Objective: Store measurable business events
👉 Business Question: "Where should actual business transactions be stored?"
👉 Analogy: Shopping Bill - Contains actual purchased items and total amount 🧾
👉 Deep Explanation:
   - Fact tables store measurable business events
   - Contains numeric metrics (quantitative data)
   - Typically large tables with millions/billions of rows
👉 Examples: sales_amount, quantity, order_count, revenue, profit
👉 Real World Example: Order transactions table
👉 Quick Memory: Facts = Numbers 💰

2️⃣ Dimension Table
👉 Objective: Store descriptive attributes
👉 Scenario: "Business wants descriptive details about transactions"
👉 Analogy: Customer Profile - Details about person making purchase 👤
👉 Contains: Customer name, Product category, Location, Date attributes
👉 Deep Explanation:
   - Dimension tables store descriptive attributes
   - Provides context to facts
   - Typically smaller than fact tables
👉 Examples: Customer, Product, Date, Location dimensions
👉 Quick Memory: Dimension = Description 📋

3️⃣ Star Schema
👉 Objective: Simple and fast reporting structure
👉 Problem: "Need simple and fast reporting structure"
👉 Analogy: Sun Structure - Fact table in center like sun, dimensions around it ☀️
👉 Architecture:
   - One central fact table
   - Multiple surrounding dimensions
   - Direct joins between fact and dimensions
👉 Why Used:
   - Faster queries (fewer joins)
   - Simple joins (one level)
   - Easy to understand
👉 Quick Memory: Star = Simple ⭐

4️⃣ Snowflake Schema
👉 Objective: Normalized dimension structure
👉 Interview Question: "How is Snowflake schema different from Star schema?"
👉 Analogy: Snowflake - Complex normalized structure ❄️
👉 Deep Explanation:
   - Dimension tables are further normalized
   - Dimensions split into sub-dimensions
👉 Benefits:
   - Reduced redundancy
   - Better storage optimization
👉 Drawback: More joins required
👉 Quick Memory: Snowflake = More normalized ❄️

5️⃣ SCD Type 1
👉 Objective: Simple update without history
👉 Scenario: "Customer updates address"
👉 Analogy: Overwriting old notebook entry 📝
👉 How it Works:
   - Old value overwritten
   - No history maintained
👉 Example: Pune → Mumbai (Pune is lost)
👉 Best For: Non-critical history data
👉 Quick Memory: Type 1 = Replace 🔄

6️⃣ SCD Type 2
👉 Objective: Maintain complete history
👉 Real Problem: "Business wants historical customer changes"
👉 Analogy: History book - All events recorded 📚
👉 How it Works:
   - Old record retained (marked inactive)
   - New record inserted (marked active)
👉 Columns Used: start_date, end_date, is_active
👉 Real World Usage: Banking, Healthcare, Customer history tracking
👉 Quick Memory: Type 2 = History 📚

7️⃣ Incremental Loading
👉 Objective: Load only changes, not full dataset
👉 Problem: "Loading full dataset daily is expensive"
👉 Analogy: Reading only new pages, not entire book again 📖
👉 Deep Explanation:
   - Only new/changed records are loaded
   - Reduces processing time and cost
👉 Example: Yesterday 1M rows → Today only new 10K rows
👉 Benefits: Faster processing, Lower cloud cost
👉 Real World Usage: Daily ETL pipelines, CDC pipelines
👉 Quick Memory: Incremental = Load changes only ⚡`,

    qa: [
      {
        q: "What is the difference between Fact and Dimension tables?",
        hint: "Think about numbers vs descriptions",
        answer: "Fact tables store measurable numeric data (sales, quantity), Dimension tables store descriptive attributes (customer name, product category)",
        explanation: "Fact tables contain quantitative business metrics (what happened). Dimension tables contain qualitative descriptive data (who, what, where, when).",
        memory: "Fact = Numbers 💰 | Dimension = Description 📋"
      },
      {
        q: "What is the difference between Star and Snowflake schema?",
        hint: "Think about normalization",
        answer: "Star schema has denormalized dimensions (simple, fewer joins), Snowflake schema has normalized dimensions (complex, more joins)",
        explanation: "Star schema keeps dimensions denormalized for faster queries. Snowflake schema normalizes dimensions into sub-tables for better storage but requires more joins.",
        memory: "Star = Simple ⭐ | Snowflake = Normalized ❄️"
      },
      {
        q: "What is the difference between SCD Type 1 and Type 2?",
        hint: "Think about history",
        answer: "Type 1 overwrites old values (no history), Type 2 keeps old records and inserts new ones (maintains history)",
        explanation: "SCD Type 1 simply updates the record, losing history. SCD Type 2 marks old record as inactive and inserts new record, maintaining complete history.",
        memory: "Type 1 = Replace 🔄 | Type 2 = History 📚"
      },
      {
        q: "What is the difference between Full load and Incremental load?",
        hint: "Think about data volume",
        answer: "Full load loads entire dataset, Incremental load loads only new/changed records",
        explanation: "Full load reloads all data (expensive, slow). Incremental load only loads changes since last load (faster, cheaper).",
        memory: "Full = All data | Incremental = Changes only ⚡"
      },
      {
        q: "Why is Star schema more popular than Snowflake schema?",
        hint: "Think about query performance",
        answer: "Star schema has fewer joins, faster queries, and simpler structure",
        explanation: "Star schema requires fewer joins (one level), making queries faster and easier to write. Snowflake schema requires multiple joins through normalized tables.",
        memory: "Star = Faster queries ⚡"
      },
      {
        q: "When should you use SCD Type 2?",
        hint: "Think about history requirements",
        answer: "When business needs to track historical changes and analyze trends over time",
        explanation: "Use SCD Type 2 for compliance, audit trails, historical analysis, and when business needs to know 'what was the value at that time'.",
        memory: "Type 2 = When history matters 📚"
      },
      {
        q: "What columns are typically used in SCD Type 2?",
        hint: "Think about tracking active records",
        answer: "start_date, end_date, is_active (or current_flag), and optionally version",
        explanation: "start_date marks when record became active, end_date when it became inactive, is_active flags current record, version tracks change number.",
        memory: "Type 2 columns = start_date, end_date, is_active 📅"
      },
      {
        q: "How does incremental loading identify new records?",
        hint: "Think about tracking changes",
        answer: "Using timestamp columns (modified_date), flags (is_processed), or CDC (Change Data Capture)",
        explanation: "Common methods: WHERE modified_date > last_load_date, WHERE is_processed = 0, or using database CDC features to capture changes.",
        memory: "Incremental = Track changes with timestamp/flag 🕐"
      }
    ],

    coding: {
      title: "Data Warehousing Challenge",
      scenario: "You're designing and querying a data warehouse for an e-commerce company.",
      questions: [
        {
          q: "1. Create a fact table for sales with foreign keys to dimensions",
          answer: "CREATE TABLE fact_sales (sale_id INT PRIMARY KEY, customer_id INT, product_id INT, date_id INT, sales_amount DECIMAL(10,2), quantity INT, FOREIGN KEY (customer_id) REFERENCES dim_customer(customer_id), FOREIGN KEY (product_id) REFERENCES dim_product(product_id), FOREIGN KEY (date_id) REFERENCES dim_date(date_id));"
        },
        {
          q: "2. Create a customer dimension table",
          answer: "CREATE TABLE dim_customer (customer_id INT PRIMARY KEY, customer_name VARCHAR(100), email VARCHAR(100), city VARCHAR(50), state VARCHAR(50), country VARCHAR(50));"
        },
        {
          q: "3. Create a date dimension table with date attributes",
          answer: "CREATE TABLE dim_date (date_id INT PRIMARY KEY, date DATE, day INT, month INT, quarter INT, year INT, day_name VARCHAR(20), month_name VARCHAR(20));"
        },
        {
          q: "4. Query to get total sales by customer (Star schema)",
          answer: "SELECT c.customer_name, SUM(f.sales_amount) AS total_sales FROM fact_sales f JOIN dim_customer c ON f.customer_id = c.customer_id GROUP BY c.customer_name;"
        },
        {
          q: "5. Implement SCD Type 1 update for customer address",
          answer: "UPDATE dim_customer SET city='Mumbai', state='Maharashtra' WHERE customer_id=1;"
        },
        {
          q: "6. Implement SCD Type 2 for customer address change",
          answer: "UPDATE dim_customer SET end_date=CURRENT_DATE, is_active=0 WHERE customer_id=1 AND is_active=1; INSERT INTO dim_customer (customer_id, customer_name, city, state, start_date, end_date, is_active) VALUES (1, 'Ankit', 'Mumbai', 'Maharashtra', CURRENT_DATE, '9999-12-31', 1);"
        },
        {
          q: "7. Create SCD Type 2 customer dimension with history columns",
          answer: "CREATE TABLE dim_customer_scd2 (customer_key INT PRIMARY KEY AUTO_INCREMENT, customer_id INT, customer_name VARCHAR(100), city VARCHAR(50), start_date DATE, end_date DATE, is_active BOOLEAN);"
        },
        {
          q: "8. Query for incremental load - get records modified after last load",
          answer: "SELECT * FROM orders WHERE modified_date > '2024-01-15 00:00:00';"
        },
        {
          q: "9. Get total sales by product category and year (Star schema)",
          answer: "SELECT p.category, d.year, SUM(f.sales_amount) AS total_sales FROM fact_sales f JOIN dim_product p ON f.product_id = p.product_id JOIN dim_date d ON f.date_id = d.date_id GROUP BY p.category, d.year;"
        },
        {
          q: "10. Find current active customer records (SCD Type 2)",
          answer: "SELECT * FROM dim_customer WHERE is_active = 1;"
        },
        {
          q: "11. Get customer history - all versions (SCD Type 2)",
          answer: "SELECT * FROM dim_customer WHERE customer_id = 1 ORDER BY start_date;"
        },
        {
          q: "12. Create product dimension table",
          answer: "CREATE TABLE dim_product (product_id INT PRIMARY KEY, product_name VARCHAR(100), category VARCHAR(50), brand VARCHAR(50), price DECIMAL(10,2));"
        }
      ]
    },

    quiz: [
      { q: "Fact table stores?", options: ["Descriptions", "Numeric metrics", "Customer names", "Product categories"], answer: 1 },
      { q: "Dimension table stores?", options: ["Numbers only", "Descriptive attributes", "Sales amounts", "Quantities"], answer: 1 },
      { q: "Star schema has?", options: ["Normalized dimensions", "Denormalized dimensions", "No dimensions", "Multiple fact tables"], answer: 1 },
      { q: "Snowflake schema has?", options: ["Denormalized dimensions", "Normalized dimensions", "No fact table", "One dimension"], answer: 1 },
      { q: "SCD Type 1 does?", options: ["Keeps history", "Overwrites old values", "Creates new records", "Deletes records"], answer: 1 },
      { q: "SCD Type 2 does?", options: ["Overwrites values", "Maintains history with new records", "Deletes old records", "No changes"], answer: 1 },
      { q: "Incremental load loads?", options: ["All data", "Only new/changed records", "No data", "Random data"], answer: 1 },
      { q: "Star vs Snowflake?", options: ["Same thing", "Star simpler, Snowflake normalized", "Snowflake simpler", "No difference"], answer: 1 },
      { q: "SCD Type 2 columns?", options: ["Only customer_id", "start_date, end_date, is_active", "Only name", "No special columns"], answer: 1 },
      { q: "Full load vs Incremental?", options: ["Same thing", "Full loads all, Incremental loads changes", "Incremental loads all", "No difference"], answer: 1 }
    ],

    interview: "Data Warehousing structures enterprise data for analytics. Key concepts: Fact tables store measurable numeric data (sales, quantity), Dimension tables store descriptive attributes (customer, product, date). Star schema has one central fact table with denormalized dimensions (simple, faster queries). Snowflake schema has normalized dimensions (better storage, more joins). SCD Type 1 overwrites old values (no history), SCD Type 2 maintains history by keeping old records and inserting new ones (uses start_date, end_date, is_active). Incremental loading loads only new/changed records (faster, cheaper) vs Full load (loads all data). Real architecture: Source DB → DMS → S3 → Glue → Fact+Dimension modeling → Redshift → Power BI. Star schema most popular due to fewer joins and faster queries. Use SCD Type 2 for compliance, audit trails, historical analysis. Incremental loading uses timestamp (modified_date > last_load) or CDC. Common mistakes: using fact table for descriptive data, ignoring history requirements, unnecessary full loads.",

    memory: `👉 Data Warehousing = Organized analytics structure 🏢

Warehouse Formula:
Facts = Numbers 💰
Dimensions = Details 📋
Star = Simple ⭐
Snowflake = Normalized ❄️
SCD1 = Replace 🔄
SCD2 = History 📚
Incremental = Changes Only ⚡

Key Differences:
Fact vs Dimension:
- Fact: Numeric metrics (sales, quantity)
- Dimension: Descriptions (customer, product)

Star vs Snowflake:
- Star: Denormalized, fewer joins, faster
- Snowflake: Normalized, more joins, better storage

SCD Type 1 vs Type 2:
- Type 1: Overwrite, no history
- Type 2: Keep history, new records

Full vs Incremental:
- Full: Load all data
- Incremental: Load changes only

SCD Type 2 Structure:
- start_date: When record became active
- end_date: When record became inactive
- is_active: Current record flag

Star Schema Structure:
     Customer Dim
           |
 Product -- FACT -- Date
           |
     Location Dim

Real Architecture:
Source DB → DMS → S3 → Glue → Modeling → Redshift → Power BI

Best Practices:
✅ Use Star schema for most cases
✅ SCD Type 2 for critical history
✅ Incremental loading for large datasets
✅ Partition fact tables by date
✅ Index foreign keys

Common Mistakes:
❌ Descriptive data in fact table
❌ Ignoring history requirements
❌ Unnecessary full loads
❌ Over-normalizing star schema

Analogies:
🧾 Fact = Shopping bill (numbers)
👤 Dimension = Customer profile (details)
☀️ Star = Sun structure (simple)
❄️ Snowflake = Complex structure (normalized)
📚 Type 2 = History book (all events)`,

    revision: "Data Warehousing: Fact tables (numeric metrics), Dimension tables (descriptive attributes). Star schema (denormalized, simple, faster), Snowflake schema (normalized, complex, more joins). SCD Type 1 (overwrite, no history), SCD Type 2 (maintain history with start_date, end_date, is_active). Incremental loading (changes only, faster) vs Full load (all data). Real pipeline: Source → DMS → S3 → Glue → Redshift → BI. Essential for enterprise analytics and ETL pipelines"
  },

  "real-sql-scenarios": {
    title: "Real SQL Scenarios",
    icon: "🎯",
    difficulty: "Advanced",
    duration: "80 min",
    description: "This module focuses on practical SQL business scenarios frequently asked in interviews and used in real production analytics systems. Extremely High Interview Importance.",
    
    comic: `🎯 Why This Module is Final Stage:

🏏 Cricket Match Analogy:
Learning shots = Practice
Actual match = Execution test

📊 Interview Reality:
Interviewer shares business problem instead of theory questions

🎯 What They Test:
- Problem solving 🧠
- SQL logic 💡
- Optimization thinking ⚡
- Business understanding 📈

🔥 Five Real Scenarios:

1️⃣ Duplicate Removal:
Business Problem: Customer table contains duplicate records after multiple data loads
Interviewer Question: "How will you remove duplicate rows while keeping latest record?"

Solution Approach:
- Use ROW_NUMBER()
- Partition by duplicate column
- Keep latest record

SQL:
WITH cte AS (
  SELECT *, ROW_NUMBER() OVER(PARTITION BY customer_id ORDER BY updated_date DESC) rn
  FROM customers
)
SELECT * FROM cte WHERE rn = 1;

Real World: ETL cleanup, Customer master cleanup
Memory: Duplicates → ROW_NUMBER 🔢

2️⃣ Top N Salary Problems:
Scenario: Find second highest salary or top 3 highest salaries

Why Companies Ask:
- Tests window functions
- Tests ranking knowledge

Solution Options:
- DENSE_RANK
- RANK
- Subquery

SQL:
SELECT * FROM (
  SELECT salary, DENSE_RANK() OVER(ORDER BY salary DESC) rnk
  FROM employees
) t WHERE rnk = 2;

Interview Trap: Difference between second highest vs second distinct highest
Memory: Salary problems → Ranking 🏆

3️⃣ Missing Records:
Business Problem: Orders table contains customers missing from customer table

Solution:
- LEFT JOIN
- Find NULL matches

SQL:
SELECT o.customer_id
FROM orders o
LEFT JOIN customers c ON o.customer_id = c.customer_id
WHERE c.customer_id IS NULL;

Real World: Data validation, Data quality checks
Memory: Missing → LEFT JOIN + NULL 🔍

4️⃣ Customer Order Analysis:
Scenario: Business wants top customers based on orders

Metrics Used:
- Total orders
- Total spending
- Average order value

SQL:
SELECT customer_id,
       COUNT(*) total_orders,
       SUM(amount) total_spend
FROM orders
GROUP BY customer_id;

Real World: Customer segmentation, Loyalty programs
Memory: Orders → COUNT + SUM 📊

5️⃣ Sales Analysis:
Problem: Management wants monthly sales performance insights

Analysis Required:
- Monthly revenue
- Top products
- Region-wise sales

SQL:
SELECT month, SUM(sales_amount)
FROM sales
GROUP BY month;

Real World: Dashboard reporting, Executive insights
Memory: Sales → Aggregation 📈

🏗️ Real Company Pipeline:
Raw data extraction → SQL transformations → Duplicate cleanup → Business analysis → Redshift reporting → Power BI dashboards

🎯 Top Interview Questions:
- Find second highest salary
- Remove duplicates
- Find customers with no orders
- Monthly sales trend analysis

⚠️ Common Mistakes:
- Ignoring duplicate timestamps
- Using wrong joins
- Missing NULL handling

💡 Final Memory Formula:
Duplicates → ROW_NUMBER
Salary → RANK
Missing → LEFT JOIN
Orders → Aggregation
Sales → Trends`,

    deepDive: `👉 Why Real SQL Scenarios Matter?
Interviewers test practical problem-solving, not just theory. They share business problems and expect SQL solutions.

👉 The 5 Core Real Scenarios:

1. Duplicate Removal
   Business Problem: Customer table contains duplicate records after multiple data loads
   
   Interviewer Question: "How will you remove duplicate rows while keeping latest record?"
   
   Solution Approach:
   - Use ROW_NUMBER() window function
   - Partition by duplicate column (customer_id)
   - Order by timestamp to identify latest
   - Keep only rn = 1
   
   SQL Example:
   WITH cte AS (
     SELECT *,
            ROW_NUMBER() OVER(PARTITION BY customer_id ORDER BY updated_date DESC) rn
     FROM customers
   )
   SELECT * FROM cte WHERE rn = 1;
   
   Real World Usage:
   - ETL cleanup after data loads
   - Customer master data cleanup
   - Removing test data duplicates
   
   Interview Variations:
   - Keep first record instead of latest
   - Remove duplicates based on multiple columns
   - Delete duplicates instead of selecting
   
   Quick Memory: Duplicates → ROW_NUMBER

2. Top N Salary Problems
   Scenario: Find second highest salary or top 3 highest salaries
   
   Why Companies Ask:
   - Tests window functions knowledge
   - Tests ranking understanding
   - Very common in interviews
   
   Solution Options:
   
   Option 1: DENSE_RANK (recommended)
   SELECT * FROM (
     SELECT salary, DENSE_RANK() OVER(ORDER BY salary DESC) rnk
     FROM employees
   ) t WHERE rnk = 2;
   
   Option 2: RANK
   SELECT * FROM (
     SELECT salary, RANK() OVER(ORDER BY salary DESC) rnk
     FROM employees
   ) t WHERE rnk = 2;
   
   Option 3: Subquery
   SELECT MAX(salary) FROM employees
   WHERE salary < (SELECT MAX(salary) FROM employees);
   
   Interview Trap:
   - Difference between second highest vs second distinct highest
   - RANK vs DENSE_RANK behavior with duplicates
   
   Real World Usage:
   - Salary benchmarking
   - Performance rankings
   - Top performers identification
   
   Quick Memory: Salary problems → Ranking

3. Missing Records
   Business Problem: Orders table contains customers missing from customer table
   
   Solution:
   - Use LEFT JOIN
   - Find NULL matches in right table
   
   SQL Example:
   SELECT o.customer_id
   FROM orders o
   LEFT JOIN customers c ON o.customer_id = c.customer_id
   WHERE c.customer_id IS NULL;
   
   Alternative (using NOT IN):
   SELECT customer_id FROM orders
   WHERE customer_id NOT IN (SELECT customer_id FROM customers);
   
   Alternative (using NOT EXISTS):
   SELECT o.customer_id FROM orders o
   WHERE NOT EXISTS (
     SELECT 1 FROM customers c WHERE c.customer_id = o.customer_id
   );
   
   Real World Usage:
   - Data validation checks
   - Data quality monitoring
   - Referential integrity checks
   - ETL validation
   
   Interview Variations:
   - Find customers with no orders
   - Find products never ordered
   - Identify orphan records
   
   Quick Memory: Missing → LEFT JOIN + NULL

4. Customer Order Analysis
   Scenario: Business wants top customers based on orders
   
   Metrics Used:
   - Total orders (COUNT)
   - Total spending (SUM)
   - Average order value (AVG)
   
   SQL Example:
   SELECT customer_id,
          COUNT(*) total_orders,
          SUM(amount) total_spend,
          AVG(amount) avg_order_value
   FROM orders
   GROUP BY customer_id
   ORDER BY total_spend DESC
   LIMIT 10;
   
   With Customer Names:
   SELECT c.name,
          COUNT(o.order_id) total_orders,
          SUM(o.amount) total_spend
   FROM customers c
   LEFT JOIN orders o ON c.customer_id = o.customer_id
   GROUP BY c.customer_id, c.name
   ORDER BY total_spend DESC;
   
   Real World Usage:
   - Customer segmentation (VIP, regular, inactive)
   - Loyalty program identification
   - Marketing campaign targeting
   - Revenue analysis
   
   Interview Variations:
   - Find customers with more than 5 orders
   - Identify customers who spent more than average
   - Monthly customer analysis
   
   Quick Memory: Orders → COUNT + SUM

5. Sales Analysis
   Problem: Management wants monthly sales performance insights
   
   Analysis Required:
   - Monthly revenue
   - Top products
   - Region-wise sales
   - Growth trends
   
   SQL Examples:
   
   Monthly Revenue:
   SELECT MONTH(order_date) month,
          SUM(sales_amount) monthly_revenue
   FROM sales
   GROUP BY MONTH(order_date)
   ORDER BY month;
   
   Top Products:
   SELECT product_id,
          SUM(sales_amount) total_sales
   FROM sales
   GROUP BY product_id
   ORDER BY total_sales DESC
   LIMIT 10;
   
   Region-wise Sales:
   SELECT region,
          SUM(sales_amount) regional_sales
   FROM sales
   GROUP BY region;
   
   Month-over-Month Growth:
   WITH monthly_sales AS (
     SELECT MONTH(order_date) month,
            SUM(sales_amount) revenue
     FROM sales
     GROUP BY MONTH(order_date)
   )
   SELECT month,
          revenue,
          LAG(revenue) OVER(ORDER BY month) prev_month,
          revenue - LAG(revenue) OVER(ORDER BY month) growth
   FROM monthly_sales;
   
   Real World Usage:
   - Dashboard reporting
   - Executive insights
   - Business performance tracking
   - Trend analysis
   
   Quick Memory: Sales → Aggregation

👉 Real Company Pipeline:
1. Raw data extraction from source systems
2. SQL transformations (duplicates, missing records)
3. Duplicate cleanup using ROW_NUMBER
4. Business analysis (aggregations, rankings)
5. Load to Redshift for reporting
6. Power BI dashboards for visualization

👉 Top Interview Questions:
1. Find second highest salary
2. Remove duplicate records
3. Find customers with no orders
4. Monthly sales trend analysis
5. Top N customers by revenue
6. Employee ranking within departments
7. Running total calculations
8. Year-over-year growth

👉 Common Mistakes:
- Ignoring duplicate timestamps when removing duplicates
- Using wrong join types (INNER vs LEFT)
- Missing NULL handling in comparisons
- Not considering edge cases (empty tables, all duplicates)
- Forgetting to order by timestamp in ROW_NUMBER

👉 Performance Tips:
- Index columns used in joins and WHERE clauses
- Use appropriate window functions (ROW_NUMBER vs RANK)
- Filter data early before aggregations
- Use CTEs for complex multi-step queries
- Consider partitioning for large tables`,

    types: `🎯 Real SQL Scenarios:

1️⃣ Duplicate Removal
👉 Business Problem: Customer table contains duplicate records after multiple data loads
👉 Interviewer Question: "How will you remove duplicate rows while keeping latest record?"
👉 Solution Approach:
   - Use ROW_NUMBER()
   - Partition by duplicate column
   - Keep latest record
👉 SQL Example:
   WITH cte AS (
     SELECT *, ROW_NUMBER() OVER(PARTITION BY customer_id ORDER BY updated_date DESC) rn
     FROM customers
   )
   SELECT * FROM cte WHERE rn = 1;
👉 Real World Usage:
   - ETL cleanup
   - Customer master cleanup
👉 Quick Memory: Duplicates → ROW_NUMBER 🔢

2️⃣ Top N Salary Problems
👉 Scenario: Find second highest salary or top 3 highest salaries
👉 Why Companies Ask:
   - Tests window functions
   - Tests ranking knowledge
👉 Solution Options:
   - DENSE_RANK
   - RANK
   - Subquery
👉 SQL Example:
   SELECT * FROM (
     SELECT salary, DENSE_RANK() OVER(ORDER BY salary DESC) rnk
     FROM employees
   ) t WHERE rnk = 2;
👉 Interview Trap: Difference between second highest vs second distinct highest
👉 Quick Memory: Salary problems → Ranking 🏆

3️⃣ Missing Records
👉 Business Problem: Orders table contains customers missing from customer table
👉 Solution:
   - LEFT JOIN
   - Find NULL matches
👉 SQL Example:
   SELECT o.customer_id
   FROM orders o
   LEFT JOIN customers c ON o.customer_id = c.customer_id
   WHERE c.customer_id IS NULL;
👉 Real World Usage:
   - Data validation
   - Data quality checks
👉 Quick Memory: Missing → LEFT JOIN + NULL 🔍

4️⃣ Customer Order Analysis
👉 Scenario: Business wants top customers based on orders
👉 Metrics Used:
   - Total orders
   - Total spending
   - Average order value
👉 SQL Example:
   SELECT customer_id,
          COUNT(*) total_orders,
          SUM(amount) total_spend
   FROM orders
   GROUP BY customer_id;
👉 Real World Usage:
   - Customer segmentation
   - Loyalty programs
👉 Quick Memory: Orders → COUNT + SUM 📊

5️⃣ Sales Analysis
👉 Problem: Management wants monthly sales performance insights
👉 Analysis Required:
   - Monthly revenue
   - Top products
   - Region-wise sales
👉 SQL Example:
   SELECT month, SUM(sales_amount)
   FROM sales
   GROUP BY month;
👉 Real World Usage:
   - Dashboard reporting
   - Executive insights
👉 Quick Memory: Sales → Aggregation 📈`,

    qa: [
      {
        q: "How do you remove duplicate records while keeping the latest?",
        hint: "Think about window functions",
        answer: "Use ROW_NUMBER() OVER(PARTITION BY id ORDER BY date DESC) and keep rn=1",
        explanation: "ROW_NUMBER partitioned by duplicate column and ordered by timestamp assigns unique numbers. Filter rn=1 to keep only the latest record.",
        memory: "Duplicates = ROW_NUMBER + PARTITION BY 🔢"
      },
      {
        q: "What's the best way to find second highest salary?",
        hint: "Think about ranking",
        answer: "Use DENSE_RANK() OVER(ORDER BY salary DESC) and filter WHERE rank=2",
        explanation: "DENSE_RANK handles duplicates properly without gaps. Second highest means rank=2 in descending order.",
        memory: "Second highest = DENSE_RANK WHERE rank=2 🥈"
      },
      {
        q: "How do you find customers with no orders?",
        hint: "Think about joins",
        answer: "Use LEFT JOIN from customers to orders and filter WHERE order_id IS NULL",
        explanation: "LEFT JOIN preserves all customers. NULL in order_id indicates customers with no orders.",
        memory: "No orders = LEFT JOIN + NULL check 🔍"
      },
      {
        q: "How do you calculate month-over-month growth?",
        hint: "Think about previous values",
        answer: "Use LAG() to get previous month value and subtract",
        explanation: "LAG(sales) OVER(ORDER BY month) fetches previous month sales. Current - Previous = Growth.",
        memory: "Growth = Current - LAG(previous) 📈"
      },
      {
        q: "What's the difference between RANK and DENSE_RANK for salary problems?",
        hint: "Think about gaps",
        answer: "RANK creates gaps after ties (1,1,3), DENSE_RANK has no gaps (1,1,2)",
        explanation: "For second highest salary, DENSE_RANK is better as it gives true second distinct value without gaps.",
        memory: "RANK=Gaps | DENSE_RANK=No gaps 🏆"
      },
      {
        q: "How do you identify top 10 customers by revenue?",
        hint: "Think about aggregation",
        answer: "GROUP BY customer, SUM(amount), ORDER BY total DESC LIMIT 10",
        explanation: "Aggregate orders by customer, sum amounts, sort descending, and limit to top 10.",
        memory: "Top customers = SUM + ORDER BY + LIMIT 📊"
      },
      {
        q: "How do you handle NULL values when finding missing records?",
        hint: "Think about IS NULL",
        answer: "Use IS NULL in WHERE clause, not = NULL",
        explanation: "NULL comparisons require IS NULL operator. = NULL doesn't work in SQL.",
        memory: "NULL check = IS NULL, not = NULL ❌"
      },
      {
        q: "What's the best approach for removing duplicates in production?",
        hint: "Think about safety",
        answer: "Use CTE with ROW_NUMBER, test with SELECT first, then DELETE",
        explanation: "Always test with SELECT before DELETE. Use CTE for clarity. Consider backing up data first.",
        memory: "Production = Test first + Backup 🛡️"
      }
    ],

    coding: {
      title: "Real SQL Scenarios Challenge",
      scenario: "You're solving real business problems using practical SQL scenarios.",
      questions: [
        {
          q: "1. Remove duplicate customers keeping latest record",
          answer: "WITH cte AS (SELECT *, ROW_NUMBER() OVER(PARTITION BY customer_id ORDER BY updated_date DESC) rn FROM customers) SELECT * FROM cte WHERE rn = 1;"
        },
        {
          q: "2. Find second highest salary",
          answer: "SELECT * FROM (SELECT salary, DENSE_RANK() OVER(ORDER BY salary DESC) rnk FROM employees) t WHERE rnk = 2;"
        },
        {
          q: "3. Find customers with no orders",
          answer: "SELECT c.customer_id, c.name FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL;"
        },
        {
          q: "4. Find top 10 customers by total spending",
          answer: "SELECT customer_id, SUM(amount) total_spend FROM orders GROUP BY customer_id ORDER BY total_spend DESC LIMIT 10;"
        },
        {
          q: "5. Calculate monthly sales revenue",
          answer: "SELECT MONTH(order_date) month, SUM(sales_amount) monthly_revenue FROM sales GROUP BY MONTH(order_date) ORDER BY month;"
        },
        {
          q: "6. Find top 3 employees per department by salary",
          answer: "WITH ranked AS (SELECT name, department, salary, ROW_NUMBER() OVER(PARTITION BY department ORDER BY salary DESC) rn FROM employees) SELECT * FROM ranked WHERE rn <= 3;"
        },
        {
          q: "7. Calculate month-over-month sales growth",
          answer: "WITH monthly AS (SELECT MONTH(order_date) month, SUM(sales_amount) revenue FROM sales GROUP BY MONTH(order_date)) SELECT month, revenue, LAG(revenue) OVER(ORDER BY month) prev_month, revenue - LAG(revenue) OVER(ORDER BY month) growth FROM monthly;"
        },
        {
          q: "8. Find products never ordered",
          answer: "SELECT p.product_id, p.product_name FROM products p LEFT JOIN orders o ON p.product_id = o.product_id WHERE o.order_id IS NULL;"
        },
        {
          q: "9. Find customers who ordered more than average",
          answer: "SELECT customer_id, COUNT(*) order_count FROM orders GROUP BY customer_id HAVING COUNT(*) > (SELECT AVG(order_count) FROM (SELECT COUNT(*) order_count FROM orders GROUP BY customer_id) t);"
        },
        {
          q: "10. Calculate running total of sales",
          answer: "SELECT order_date, amount, SUM(amount) OVER(ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) running_total FROM orders;"
        },
        {
          q: "11. Find duplicate emails in customers table",
          answer: "SELECT email, COUNT(*) FROM customers GROUP BY email HAVING COUNT(*) > 1;"
        },
        {
          q: "12. Find top 5 products by sales in each region",
          answer: "WITH ranked AS (SELECT region, product_id, SUM(sales_amount) total_sales, ROW_NUMBER() OVER(PARTITION BY region ORDER BY SUM(sales_amount) DESC) rn FROM sales GROUP BY region, product_id) SELECT * FROM ranked WHERE rn <= 5;"
        }
      ]
    },

    quiz: [
      { q: "Best way to remove duplicates?", options: ["DELETE all", "ROW_NUMBER() OVER(PARTITION BY...)", "DISTINCT", "GROUP BY"], answer: 1 },
      { q: "Second highest salary uses?", options: ["MAX", "DENSE_RANK WHERE rank=2", "MIN", "AVG"], answer: 1 },
      { q: "Find missing records uses?", options: ["INNER JOIN", "LEFT JOIN + NULL check", "RIGHT JOIN", "CROSS JOIN"], answer: 1 },
      { q: "Top customers by revenue uses?", options: ["COUNT only", "SUM + ORDER BY + LIMIT", "AVG", "MIN"], answer: 1 },
      { q: "Month-over-month growth uses?", options: ["LEAD", "LAG", "RANK", "COUNT"], answer: 1 },
      { q: "RANK vs DENSE_RANK?", options: ["Same", "RANK has gaps, DENSE_RANK no gaps", "DENSE_RANK has gaps", "No difference"], answer: 1 },
      { q: "NULL check uses?", options: ["= NULL", "IS NULL", "== NULL", "EQUALS NULL"], answer: 1 },
      { q: "Top N per group uses?", options: ["LIMIT only", "ROW_NUMBER() PARTITION BY", "COUNT", "SUM"], answer: 1 },
      { q: "Running total uses?", options: ["COUNT", "SUM() OVER(ORDER BY...)", "AVG", "MAX"], answer: 1 },
      { q: "Customer segmentation uses?", options: ["DELETE", "Aggregation + GROUP BY", "DROP", "TRUNCATE"], answer: 1 }
    ],

    interview: "Real SQL Scenarios test practical problem-solving. Five core scenarios: 1) Duplicate Removal - use ROW_NUMBER() OVER(PARTITION BY id ORDER BY date DESC) and keep rn=1 for latest record. 2) Top N Salary - use DENSE_RANK() OVER(ORDER BY salary DESC) WHERE rank=2 for second highest. 3) Missing Records - use LEFT JOIN + NULL check to find customers with no orders. 4) Customer Order Analysis - use COUNT, SUM, AVG with GROUP BY for customer segmentation. 5) Sales Analysis - use aggregations with GROUP BY for monthly revenue, top products, regional sales. Real pipeline: Raw data → SQL transformations → Duplicate cleanup → Business analysis → Redshift → Power BI. Common mistakes: ignoring timestamps in duplicates, wrong join types, missing NULL handling. Performance tips: index join columns, filter early, use CTEs for clarity. Top interview questions: second highest salary, remove duplicates, find missing records, monthly trends, top customers.",

    memory: `👉 Real SQL Scenarios = Practical Interview Problems 🎯

Scenario Formula:
Duplicates → ROW_NUMBER 🔢
Salary → RANK 🏆
Missing → LEFT JOIN 🔍
Orders → Aggregation 📊
Sales → Trends 📈

Key Solutions:
1. Duplicates:
   ROW_NUMBER() OVER(PARTITION BY id ORDER BY date DESC)
   Keep rn = 1

2. Second Highest:
   DENSE_RANK() OVER(ORDER BY salary DESC)
   WHERE rank = 2

3. Missing Records:
   LEFT JOIN + WHERE right_table.id IS NULL

4. Top Customers:
   SUM(amount) GROUP BY customer
   ORDER BY total DESC LIMIT 10

5. Monthly Sales:
   SUM(sales) GROUP BY month
   ORDER BY month

Real Pipeline:
Raw Data → Transformations → Cleanup → Analysis → Redshift → Power BI

Common Mistakes:
❌ Ignoring timestamps in duplicates
❌ Using wrong joins
❌ Missing NULL handling
❌ Forgetting edge cases

Performance Tips:
✅ Index join columns
✅ Filter early
✅ Use CTEs for clarity
✅ Test before production

Top Interview Questions:
🎯 Second highest salary
🎯 Remove duplicates
🎯 Find missing records
🎯 Monthly trends
🎯 Top N customers
🎯 Running totals
🎯 Growth calculations

Memory Tricks:
Duplicates = ROW_NUMBER
Ranking = DENSE_RANK
Missing = LEFT JOIN + NULL
Aggregation = SUM + GROUP BY
Growth = LAG for previous`,

    revision: "Real SQL Scenarios: Practical interview problems. 1) Duplicates - ROW_NUMBER PARTITION BY + keep rn=1. 2) Second highest - DENSE_RANK WHERE rank=2. 3) Missing records - LEFT JOIN + NULL check. 4) Customer analysis - SUM/COUNT + GROUP BY. 5) Sales trends - Aggregation + LAG for growth. Common in interviews and production. Pipeline: Raw → Transform → Cleanup → Analysis → Reporting. Essential for data engineering roles"
  },

  "sql-interview-prep": {
    title: "SQL Interview Preparation",
    icon: "🎯",
    difficulty: "Interview Mastery",
    duration: "90 min",
    description: "Master SQL interviews for service companies, product companies, and platforms like Karat. Prepare for theory, live coding, scenarios, and optimization rounds.",

    comic: `🏏 Final Match Day

Coach: "Practice is over. Now it's match time."
Player: "What if I forget?"
Coach: "You won't. You've practiced every shot."

📋 Interview Scorecard:
✅ Theory questions → Quick answers
✅ Live coding → Think aloud
✅ Scenarios → Business understanding
✅ Optimization → Performance thinking

Result: Offer Letter 🎉

SQL Interview = Practice + Speed + Communication`,

    deepDive: `🎯 SQL Interview Preparation - Complete Guide

📌 What Happens in SQL Interviews?

You cleared resume screening. Now interviewer opens SQL round.

Interview Flow:
1️⃣ Theory questions (5-10 min)
2️⃣ Live coding (20-30 min)
3️⃣ Scenario solving (15-20 min)
4️⃣ Optimization questions (10 min)

🎯 Topic 1: Top SQL Interview Questions

Interviewer Starts With:
❓ "Difference between WHERE and HAVING?"
❓ "Difference between RANK and DENSE_RANK?"
❓ "DELETE vs TRUNCATE vs DROP?"
❓ "What are join types?"

Why Asked?
Tests foundational clarity quickly.

How to Prepare:
✅ Practice concise answers
✅ Know examples
✅ Avoid theoretical confusion

Example Answer:
"WHERE filters rows before grouping. HAVING filters after GROUP BY.
Example: WHERE filters individual sales, HAVING filters total sales > 1000."

🎯 Topic 2: Scenario-Based Questions

Real Question Examples:
📊 "Find duplicate customers"
📊 "Find customers without orders"
📊 "Find top revenue product"

What Interviewer Checks:
✅ Problem breakdown
✅ SQL approach
✅ Business understanding

Real World Usage:
🏢 Analytics teams
🏢 ETL development

Example Approach:
"To find customers without orders:
1. Need customers table and orders table
2. Use LEFT JOIN from customers to orders
3. Filter WHERE orders.id IS NULL
4. This gives customers with no matching orders"

🎯 Topic 3: Karat Style Questions

Platform Focus:
Karat-style interviews focus on timed SQL logic.

Question Types:
📝 Log analysis
📝 Session tracking
📝 User activity
📝 Ranking queries

Difficulty: Medium to High

Success Tip:
⚡ Practice writing queries quickly
⚡ Think aloud while coding
⚡ Test with sample data

Example Question:
"Find users who logged in on consecutive days"

Approach:
USE LAG() to get previous login date
Compare current_date - previous_date = 1 day

🎯 Topic 4: Product Company SQL Questions

Companies:
🏢 Amazon
🏢 Google
🏢 Microsoft
🏢 Meta

Focus Areas:
🔹 Window functions
🔹 Complex joins
🔹 Data analysis
🔹 Optimization

Common Questions:
💡 Second highest salary
💡 Rolling averages
💡 Retention analysis
💡 Cohort analysis
💡 Funnel analysis

Example:
"Find second highest salary per department"

Solution:
SELECT department, salary
FROM (
  SELECT department, salary,
         DENSE_RANK() OVER(PARTITION BY department ORDER BY salary DESC) as rank
  FROM employees
) WHERE rank = 2;

📋 Mock Interview Flow

Round 1: Theory Screening (10 min)
- Basic SQL concepts
- Join types
- Aggregate functions

Round 2: SQL Coding Round (30 min)
- 2-3 medium problems
- Live coding with explanation

Round 3: Business Scenarios (20 min)
- Real-world problems
- Data analysis questions

Round 4: Project Discussion (15 min)
- Your SQL projects
- Optimization experience

🏢 Real Company Usage

Data Engineer, Data Analyst, and Analytics Engineer roles heavily test SQL problem solving.

Typical Questions:
✅ Data cleaning scenarios
✅ Pipeline design
✅ Performance optimization
✅ Business metric calculations

❌ Top Mistakes Candidates Make

1. Jumping directly to query writing
   → First understand the problem

2. Ignoring edge cases
   → Think about NULLs, duplicates, empty results

3. Poor communication during coding rounds
   → Explain your thought process

4. Weak optimization knowledge
   → Know indexing, query plans

5. Not testing queries
   → Always verify with sample data

🎯 Final Interview Formula

SQL Job Formula:
Concepts + Practice + Speed + Communication = SQL Offer

✅ Concepts: Know theory cold
✅ Practice: Solve 50+ problems
✅ Speed: Write queries quickly
✅ Communication: Explain clearly

Result: Job Offer 🎉`,

    types: `🎯 SQL Interview Question Types

1️⃣ Theory Questions (Quick Fire)
   - WHERE vs HAVING
   - RANK vs DENSE_RANK vs ROW_NUMBER
   - DELETE vs TRUNCATE vs DROP
   - Primary Key vs Unique Key
   - INNER vs LEFT vs RIGHT JOIN
   - Normalization forms
   - ACID properties
   - Index types

2️⃣ Scenario-Based Questions
   - Find duplicates
   - Find missing records
   - Top N per group
   - Customer segmentation
   - Revenue analysis
   - Retention metrics
   - Funnel analysis

3️⃣ Karat Style Questions
   - Log analysis
   - Session tracking
   - User activity patterns
   - Time-based queries
   - Ranking problems

4️⃣ Product Company Questions
   - Second highest salary
   - Rolling averages
   - Cohort analysis
   - Growth metrics
   - Complex joins
   - Window functions

5️⃣ Optimization Questions
   - Query performance
   - Index strategy
   - Execution plans
   - Partitioning
   - Query rewriting`,

    qa: [
      {
        q: "What's the difference between WHERE and HAVING?",
        a: "WHERE filters rows before grouping, HAVING filters after GROUP BY. WHERE works on individual rows, HAVING works on aggregated results. Example: WHERE filters individual sales records, HAVING filters groups where total sales > 1000."
      },
      {
        q: "Explain RANK vs DENSE_RANK vs ROW_NUMBER",
        a: "ROW_NUMBER gives unique sequential numbers (1,2,3,4). RANK gives same rank for ties with gaps (1,2,2,4). DENSE_RANK gives same rank for ties without gaps (1,2,2,3). Use ROW_NUMBER for unique ordering, DENSE_RANK for salary rankings."
      },
      {
        q: "How to find second highest salary?",
        a: "Use DENSE_RANK: SELECT salary FROM (SELECT salary, DENSE_RANK() OVER(ORDER BY salary DESC) as rank FROM employees) WHERE rank = 2. DENSE_RANK handles ties correctly without gaps."
      },
      {
        q: "How to find duplicate records?",
        a: "Use GROUP BY with HAVING: SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1. Or use ROW_NUMBER: SELECT * FROM (SELECT *, ROW_NUMBER() OVER(PARTITION BY email ORDER BY id) as rn FROM users) WHERE rn > 1."
      },
      {
        q: "How to find customers without orders?",
        a: "Use LEFT JOIN with NULL check: SELECT c.* FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE o.id IS NULL. This finds customers with no matching orders."
      },
      {
        q: "What's the difference between DELETE, TRUNCATE, and DROP?",
        a: "DELETE removes specific rows (can use WHERE), can be rolled back, slower. TRUNCATE removes all rows, cannot be rolled back, faster, resets identity. DROP removes entire table structure and data permanently."
      },
      {
        q: "How to calculate running total?",
        a: "Use window function: SELECT date, amount, SUM(amount) OVER(ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) as running_total FROM sales. This calculates cumulative sum."
      },
      {
        q: "How to find top 3 products per category?",
        a: "Use ROW_NUMBER with PARTITION BY: SELECT * FROM (SELECT *, ROW_NUMBER() OVER(PARTITION BY category ORDER BY sales DESC) as rn FROM products) WHERE rn <= 3. This ranks products within each category."
      },
      {
        q: "How to calculate month-over-month growth?",
        a: "Use LAG: SELECT month, revenue, LAG(revenue) OVER(ORDER BY month) as prev_month, ((revenue - LAG(revenue) OVER(ORDER BY month)) / LAG(revenue) OVER(ORDER BY month)) * 100 as growth_pct FROM monthly_sales."
      },
      {
        q: "What are common SQL interview mistakes?",
        a: "1) Not clarifying requirements before coding. 2) Ignoring NULL values and edge cases. 3) Poor communication during live coding. 4) Not testing queries. 5) Weak optimization knowledge. 6) Jumping to complex solutions without simple approach first."
      }
    ],

    coding: {
      title: "SQL Interview Coding Practice",
      questions: [
        {
          q: "1. Find second highest salary",
          answer: "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees); -- OR -- SELECT salary FROM (SELECT salary, DENSE_RANK() OVER(ORDER BY salary DESC) rank FROM employees) WHERE rank = 2;"
        },
        {
          q: "2. Find duplicate emails",
          answer: "SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;"
        },
        {
          q: "3. Find customers without orders",
          answer: "SELECT c.* FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE o.id IS NULL;"
        },
        {
          q: "4. Find top 3 salaries per department",
          answer: "SELECT * FROM (SELECT *, DENSE_RANK() OVER(PARTITION BY department ORDER BY salary DESC) rank FROM employees) WHERE rank <= 3;"
        },
        {
          q: "5. Calculate running total of sales",
          answer: "SELECT date, amount, SUM(amount) OVER(ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) running_total FROM sales;"
        },
        {
          q: "6. Find employees earning more than their manager",
          answer: "SELECT e.name FROM employees e JOIN employees m ON e.manager_id = m.id WHERE e.salary > m.salary;"
        },
        {
          q: "7. Find month-over-month revenue growth",
          answer: "SELECT month, revenue, LAG(revenue) OVER(ORDER BY month) prev_month, ((revenue - LAG(revenue) OVER(ORDER BY month)) / LAG(revenue) OVER(ORDER BY month)) * 100 growth_pct FROM monthly_revenue;"
        },
        {
          q: "8. Find users who logged in on consecutive days",
          answer: "SELECT user_id FROM (SELECT user_id, login_date, LAG(login_date) OVER(PARTITION BY user_id ORDER BY login_date) prev_date FROM logins) WHERE DATEDIFF(login_date, prev_date) = 1;"
        },
        {
          q: "9. Find top 5 customers by total purchase amount",
          answer: "SELECT customer_id, SUM(amount) total FROM orders GROUP BY customer_id ORDER BY total DESC LIMIT 5;"
        },
        {
          q: "10. Remove duplicate rows keeping latest record",
          answer: "DELETE FROM users WHERE id NOT IN (SELECT MAX(id) FROM users GROUP BY email); -- OR using CTE -- WITH cte AS (SELECT *, ROW_NUMBER() OVER(PARTITION BY email ORDER BY created_at DESC) rn FROM users) DELETE FROM users WHERE id IN (SELECT id FROM cte WHERE rn > 1);"
        },
        {
          q: "11. Find products never ordered",
          answer: "SELECT p.* FROM products p LEFT JOIN order_items oi ON p.id = oi.product_id WHERE oi.id IS NULL;"
        },
        {
          q: "12. Calculate retention rate",
          answer: "SELECT COUNT(DISTINCT CASE WHEN MONTH(order_date) = MONTH(first_order) + 1 THEN customer_id END) / COUNT(DISTINCT customer_id) * 100 retention_rate FROM orders JOIN (SELECT customer_id, MIN(order_date) first_order FROM orders GROUP BY customer_id) first ON orders.customer_id = first.customer_id;"
        },
        {
          q: "13. Find departments with average salary > company average",
          answer: "SELECT department, AVG(salary) dept_avg FROM employees GROUP BY department HAVING AVG(salary) > (SELECT AVG(salary) FROM employees);"
        },
        {
          q: "14. Find employees hired in last 90 days",
          answer: "SELECT * FROM employees WHERE hire_date >= CURRENT_DATE - INTERVAL 90 DAY;"
        },
        {
          q: "15. Calculate cumulative sum by category",
          answer: "SELECT category, date, amount, SUM(amount) OVER(PARTITION BY category ORDER BY date) cumulative_sum FROM sales;"
        }
      ]
    },

    quiz: [
      { q: "WHERE vs HAVING?", options: ["Same thing", "WHERE before GROUP BY, HAVING after", "HAVING before GROUP BY", "No difference"], answer: 1 },
      { q: "Second highest salary uses?", options: ["MAX only", "DENSE_RANK WHERE rank=2", "MIN", "COUNT"], answer: 1 },
      { q: "Find duplicates uses?", options: ["JOIN", "GROUP BY + HAVING COUNT(*) > 1", "WHERE", "ORDER BY"], answer: 1 },
      { q: "Customers without orders uses?", options: ["INNER JOIN", "LEFT JOIN + NULL check", "RIGHT JOIN only", "CROSS JOIN"], answer: 1 },
      { q: "Running total uses?", options: ["COUNT", "SUM() OVER(ORDER BY...)", "AVG", "MAX"], answer: 1 },
      { q: "RANK vs DENSE_RANK?", options: ["Same", "RANK has gaps, DENSE_RANK no gaps", "DENSE_RANK has gaps", "No difference"], answer: 1 },
      { q: "DELETE vs TRUNCATE?", options: ["Same", "DELETE can use WHERE, TRUNCATE removes all", "TRUNCATE can use WHERE", "No difference"], answer: 1 },
      { q: "Top N per group uses?", options: ["LIMIT only", "ROW_NUMBER() PARTITION BY", "COUNT", "SUM"], answer: 1 },
      { q: "Month-over-month growth uses?", options: ["LEAD", "LAG", "RANK", "COUNT"], answer: 1 },
      { q: "Best interview preparation?", options: ["Theory only", "Practice + Speed + Communication", "Memorize queries", "Read books only"], answer: 1 },
      { q: "Karat interviews focus on?", options: ["Theory only", "Timed SQL logic", "Database design", "No coding"], answer: 1 },
      { q: "Product company interviews test?", options: ["Basic SQL only", "Window functions + Complex joins", "Simple queries", "No optimization"], answer: 1 }
    ],

    interview: "SQL Interview Preparation is extremely critical for landing data roles. Interview flow: 1) Theory screening - quick questions on WHERE vs HAVING, RANK vs DENSE_RANK, DELETE vs TRUNCATE, join types. Answer concisely with examples. 2) Live coding - 2-3 medium problems, think aloud, test queries. Common: second highest salary (DENSE_RANK), duplicates (GROUP BY HAVING), missing records (LEFT JOIN + NULL). 3) Scenario-based - business problems like find top customers, revenue analysis, retention metrics. Show problem breakdown and SQL approach. 4) Optimization - query performance, indexing strategy, execution plans. Karat-style: timed logic problems on log analysis, session tracking, user activity. Product companies (Amazon, Google, Microsoft): window functions, complex joins, cohort analysis, rolling averages. Top mistakes: jumping to code without understanding, ignoring edge cases, poor communication, not testing. Success formula: Concepts + Practice (50+ problems) + Speed + Communication = Offer. Mock interview practice essential. Real companies heavily test SQL problem-solving for Data Engineer, Data Analyst, Analytics Engineer roles.",

    memory: `🎯 SQL Interview Preparation = Job Offer Formula 🏆

Interview Formula:
Concepts + Practice + Speed + Communication = Offer 🎉

Interview Flow:
1️⃣ Theory (10 min) → Quick answers
2️⃣ Coding (30 min) → Think aloud
3️⃣ Scenarios (20 min) → Business logic
4️⃣ Optimization (10 min) → Performance

Top Theory Questions:
❓ WHERE vs HAVING
   → WHERE before GROUP BY, HAVING after

❓ RANK vs DENSE_RANK
   → RANK has gaps (1,2,2,4)
   → DENSE_RANK no gaps (1,2,2,3)

❓ DELETE vs TRUNCATE
   → DELETE can use WHERE, rollback
   → TRUNCATE removes all, faster

Top Coding Questions:
💻 Second highest salary
   → DENSE_RANK() WHERE rank = 2

💻 Find duplicates
   → GROUP BY + HAVING COUNT(*) > 1

💻 Customers without orders
   → LEFT JOIN + WHERE orders.id IS NULL

💻 Top N per group
   → ROW_NUMBER() PARTITION BY

💻 Running total
   → SUM() OVER(ORDER BY...)

💻 Month-over-month growth
   → LAG() for previous month

Scenario Questions:
📊 Business problem → SQL solution
📊 Show problem breakdown
📊 Explain approach clearly

Karat Style:
⚡ Timed SQL logic
⚡ Log analysis
⚡ Session tracking
⚡ User activity

Product Companies:
🏢 Amazon, Google, Microsoft, Meta
🔹 Window functions
🔹 Complex joins
🔹 Data analysis
🔹 Optimization

Top Mistakes:
❌ Jump to code without understanding
❌ Ignore edge cases (NULL, duplicates)
❌ Poor communication
❌ Don't test queries
❌ Weak optimization knowledge

Success Tips:
✅ Clarify requirements first
✅ Think aloud while coding
✅ Test with sample data
✅ Explain your approach
✅ Handle edge cases
✅ Know optimization basics

Practice Plan:
📝 Solve 50+ problems
📝 Mock interviews
📝 Time yourself
📝 Practice explaining

Interview Day:
🎯 Stay calm
🎯 Clarify before coding
🎯 Think aloud
🎯 Test your query
🎯 Explain trade-offs

Result: Job Offer 🎉`,

    revision: "SQL Interview Preparation: Critical for data roles. Interview flow: Theory (WHERE vs HAVING, RANK vs DENSE_RANK, DELETE vs TRUNCATE) → Live coding (second highest salary, duplicates, missing records) → Scenarios (business problems) → Optimization (performance, indexing). Top coding: DENSE_RANK for salary, GROUP BY HAVING for duplicates, LEFT JOIN + NULL for missing records, ROW_NUMBER PARTITION BY for top N, SUM OVER for running total, LAG for growth. Karat: timed logic, log analysis. Product companies: window functions, complex joins. Mistakes: jumping to code, ignoring edge cases, poor communication. Formula: Concepts + Practice + Speed + Communication = Offer. Practice 50+ problems, mock interviews essential."
  },

  "ai-future-sql": {
    title: "AI + Future SQL",
    icon: "🤖",
    difficulty: "Future Ready",
    duration: "60 min",
    description: "Learn how modern engineers use AI tools to accelerate SQL development while ensuring correctness, optimization, and business accuracy.",

    comic: `🚀 The Future Workshop

Engineer: "I need to write complex SQL..."
AI Assistant: "Describe what you need. I'll generate it."
Engineer: "Find top 5 customers by revenue last month."
AI: *generates SQL in 2 seconds*
Engineer: "Wait, let me validate this..."

✅ Checks joins
✅ Checks filters
✅ Checks performance
✅ Verifies business logic

Result: Production-ready query in 5 minutes instead of 30! ⚡

Future = SQL Knowledge + AI Speed + Human Validation`,

    deepDive: `🤖 AI + Future SQL - The New Engineering Reality

📊 Industry Shift

What Changed:
🔄 Manual SQL writing is reducing
🔄 AI-assisted query generation is growing
🔄 Validation skills are becoming critical

Companies Using AI Tools:
🏢 Google
🏢 Microsoft
🏢 Amazon
🏢 Meta

The Reality:
AI doesn't replace SQL engineers.
It makes them 10x faster.

🎯 Topic 1: Prompt to SQL

Scenario:
Business user says: "Find top 5 customers by revenue last month."

Old Way (Manual):
1. Understand requirement
2. Identify tables
3. Write joins
4. Add filters
5. Test query
6. Optimize
Time: 20-30 minutes

Modern Solution (AI-Assisted):
1. Write natural language prompt
2. AI generates SQL query
3. Validate and optimize
Time: 5 minutes

Example Prompt:
"Generate SQL query to find top 5 customers by total revenue in March 2024.
Use customers and orders tables.
Join on customer_id.
Filter by order_date in March.
Group by customer and sum order amounts.
Order by total revenue descending.
Limit to 5 results."

AI Output:
SELECT 
  c.customer_id,
  c.customer_name,
  SUM(o.order_amount) as total_revenue
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date >= '2024-03-01' 
  AND o.order_date < '2024-04-01'
GROUP BY c.customer_id, c.customer_name
ORDER BY total_revenue DESC
LIMIT 5;

Why It Matters:
✅ Faster development
✅ Quick prototyping
✅ Less syntax errors
✅ Focus on business logic

Risk:
⚠️ AI may misunderstand schema
⚠️ May generate inefficient queries
⚠️ May miss edge cases

🤖 Topic 2: AI Query Tools

Interview Question:
"Which AI tools can help SQL engineers today?"

Popular Tools:
1️⃣ ChatGPT - Query generation, optimization, debugging
2️⃣ GitHub Copilot - Code completion in SQL editors
3️⃣ Amazon Q - AWS-specific SQL assistance
4️⃣ Cursor - AI-powered SQL IDE
5️⃣ Claude - Complex query reasoning

What They Help With:
📝 Query generation from natural language
⚡ Optimization suggestions
🐛 Debugging complex queries
📚 Documentation generation
🔄 Query refactoring
💡 Alternative approaches

Real World Usage:
🏢 Faster development teams
🏢 Prototype analytics queries
🏢 Learn new SQL patterns
🏢 Debug production issues

Example Workflow:
Problem: "Find customers who haven't ordered in 90 days"

→ Ask AI: "Generate SQL to find inactive customers"
→ AI generates query with LEFT JOIN
→ Engineer validates logic
→ Test on sample data
→ Deploy to production

Time Saved: 70%

✅ Topic 3: Validating AI Generated SQL

Real Problem:
AI-generated SQL may be wrong, slow, or risky.

What to Check:

1️⃣ Correct Joins
❓ Did AI use INNER when it should be LEFT?
❓ Are join conditions correct?
❓ Will it cause duplicates?

2️⃣ Proper Filters
❓ Are date ranges correct?
❓ Are NULL values handled?
❓ Are edge cases covered?

3️⃣ NULL Handling
❓ Does query handle missing data?
❓ Are NULL comparisons correct?

4️⃣ Performance Optimization
❓ Did AI avoid SELECT *?
❓ Are filters applied early?
❓ Are indexes used?
❓ Will it scale on large data?

5️⃣ Business Logic Accuracy
❓ Does it match business requirement?
❓ Are calculations correct?
❓ Are aggregations right?

Validation Checklist:

✅ Did AI use correct table?
✅ Did it avoid SELECT *?
✅ Are joins correct?
✅ Are filters accurate?
✅ Is NULL handling proper?
✅ Will it scale on large data?
✅ Does it match business logic?
✅ Are there security risks?

Real World Failure Example:

AI Generated:
SELECT c.*, o.*
FROM customers c
JOIN orders o ON c.id = o.customer_id;

Problem:
❌ Used SELECT * (bad practice)
❌ Used INNER JOIN (missed customers without orders)
❌ No filters (returns all data)
❌ Will cause duplicates if customer has multiple orders

Corrected by Engineer:
SELECT 
  c.customer_id,
  c.customer_name,
  COUNT(o.order_id) as order_count,
  COALESCE(SUM(o.amount), 0) as total_revenue
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE c.status = 'active'
GROUP BY c.customer_id, c.customer_name;

Most Important Skill:
🎯 Human Validation

AI writes → Engineer verifies → Production deploys

🚀 Future Workflow

Modern SQL Development Flow:

1️⃣ Business asks question
   "Which products are trending?"

2️⃣ Engineer writes prompt
   "Generate SQL to find top 10 products by sales growth"

3️⃣ AI generates SQL
   *produces query in seconds*

4️⃣ Engineer validates
   ✅ Check joins
   ✅ Check logic
   ✅ Check performance

5️⃣ Optimize query
   Add indexes
   Refine filters
   Test on sample data

6️⃣ Deploy to production
   Monitor performance
   Validate results

Time: 10 minutes (vs 1 hour manually)

🏢 Real Company Usage

Example:
Teams using Snowflake, Databricks, and Redshift increasingly combine SQL with AI productivity tools.

Typical Scenario:
- Data analyst needs complex query
- Uses ChatGPT to generate initial SQL
- Senior engineer validates and optimizes
- Query runs in production pipeline
- Saves 2-3 hours per query

🎯 Future Interview Questions

1️⃣ "How do you use AI for SQL?"
Answer: "I use AI tools like ChatGPT to generate initial queries from business requirements, then validate joins, filters, and performance. AI accelerates development but human validation ensures correctness."

2️⃣ "Can AI fully replace SQL engineers?"
Answer: "No. AI generates queries but can't validate business logic, optimize for scale, or understand data quality issues. Engineers are needed for validation, optimization, and production reliability."

3️⃣ "How do you validate AI-generated queries?"
Answer: "I check: 1) Correct joins and filters, 2) NULL handling, 3) Performance (avoid SELECT *, filter early), 4) Business logic accuracy, 5) Test on sample data before production."

❌ Biggest Mistakes

1. Blindly trusting AI output
   → Always validate before production

2. Ignoring performance issues
   → AI may generate slow queries

3. Not validating business logic
   → AI may misunderstand requirements

4. Skipping testing
   → Test on sample data first

5. Not learning SQL fundamentals
   → You can't validate what you don't understand

🎯 Final Future Formula

Future SQL Formula:
SQL Knowledge + AI Usage + Validation Skills = Future-Proof Engineer

✅ SQL Knowledge: Understand joins, aggregations, optimization
✅ AI Usage: Use tools to accelerate development
✅ Validation Skills: Verify correctness and performance

Result: 10x faster engineer who delivers quality`,

    types: `🤖 AI + Future SQL Categories

1️⃣ Prompt to SQL
   - Natural language to query
   - Business requirement to code
   - Fast prototyping
   - Reduced syntax errors

2️⃣ AI Query Tools
   - ChatGPT
   - GitHub Copilot
   - Amazon Q
   - Cursor
   - Claude

3️⃣ Validation Skills
   - Join verification
   - Filter accuracy
   - NULL handling
   - Performance check
   - Business logic validation

4️⃣ Future Workflow
   - Prompt → Generate → Validate → Optimize → Deploy

5️⃣ Interview Readiness
   - How to use AI
   - Validation techniques
   - Future-proof skills`,

    qa: [
      {
        q: "What is Prompt to SQL?",
        a: "Prompt to SQL is using natural language to describe what you want, and AI generates the SQL query. Example: 'Find top 5 customers by revenue' → AI generates SELECT with JOIN, GROUP BY, ORDER BY, LIMIT. Saves time but requires validation."
      },
      {
        q: "Which AI tools help SQL engineers?",
        a: "Popular tools: ChatGPT (query generation, debugging), GitHub Copilot (code completion), Amazon Q (AWS-specific), Cursor (AI IDE), Claude (complex reasoning). They help with generation, optimization, debugging, and documentation."
      },
      {
        q: "Can AI replace SQL engineers?",
        a: "No. AI generates queries but can't validate business logic, optimize for production scale, handle data quality issues, or understand company-specific requirements. Engineers are needed for validation, optimization, and reliability."
      },
      {
        q: "How to validate AI-generated SQL?",
        a: "Check: 1) Correct joins (INNER vs LEFT), 2) Proper filters and date ranges, 3) NULL handling, 4) Performance (avoid SELECT *, filter early, use indexes), 5) Business logic accuracy, 6) Test on sample data before production."
      },
      {
        q: "What's the future SQL workflow?",
        a: "Modern workflow: Business asks question → Engineer writes prompt → AI generates SQL → Engineer validates (joins, filters, performance) → Optimize query → Deploy to production. Time saved: 70%. Human validation remains critical."
      },
      {
        q: "What are biggest mistakes with AI SQL?",
        a: "1) Blindly trusting AI output without validation, 2) Ignoring performance issues (AI may generate slow queries), 3) Not validating business logic, 4) Skipping testing on sample data, 5) Not learning SQL fundamentals (can't validate what you don't understand)."
      },
      {
        q: "Why is validation more important than generation?",
        a: "AI can generate queries fast, but wrong queries cause: incorrect business decisions, performance issues, data quality problems, production failures. Validation ensures correctness, performance, and business accuracy. Generation is easy, validation requires expertise."
      },
      {
        q: "How do companies use AI for SQL?",
        a: "Teams using Snowflake, Databricks, Redshift combine SQL with AI tools. Typical: Data analyst uses ChatGPT for initial query → Senior engineer validates and optimizes → Runs in production pipeline. Saves 2-3 hours per query while maintaining quality."
      },
      {
        q: "What skills are future-proof for SQL engineers?",
        a: "Future formula: SQL Knowledge (joins, aggregations, optimization) + AI Usage (tools for speed) + Validation Skills (verify correctness and performance) = Future-Proof Engineer. Understanding fundamentals enables effective AI usage and validation."
      },
      {
        q: "How to answer 'How do you use AI for SQL?' in interviews?",
        a: "Answer: 'I use AI tools like ChatGPT to generate initial queries from business requirements, then validate joins, filters, NULL handling, and performance. AI accelerates development 10x, but I ensure correctness through validation, testing, and optimization before production.'"
      }
    ],

    coding: {
      title: "AI + SQL Practice Examples",
      questions: [
        {
          q: "1. Prompt: Find customers who haven't ordered in 90 days",
          answer: "SELECT c.customer_id, c.customer_name, MAX(o.order_date) last_order FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.customer_id, c.customer_name HAVING MAX(o.order_date) < CURRENT_DATE - INTERVAL 90 DAY OR MAX(o.order_date) IS NULL;"
        },
        {
          q: "2. Validate this AI query: SELECT * FROM customers c JOIN orders o ON c.id = o.customer_id;",
          answer: "Issues: 1) SELECT * is bad practice, 2) INNER JOIN misses customers without orders, 3) No filters, 4) Will duplicate if multiple orders. Fixed: SELECT c.customer_id, c.name, COUNT(o.id) orders FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.customer_id, c.name;"
        },
        {
          q: "3. Prompt: Find top 10 products by sales growth month-over-month",
          answer: "WITH monthly_sales AS (SELECT product_id, DATE_TRUNC('month', order_date) month, SUM(amount) revenue FROM orders GROUP BY product_id, month), growth AS (SELECT product_id, month, revenue, LAG(revenue) OVER(PARTITION BY product_id ORDER BY month) prev_month, ((revenue - LAG(revenue) OVER(PARTITION BY product_id ORDER BY month)) / LAG(revenue) OVER(PARTITION BY product_id ORDER BY month)) * 100 growth_pct FROM monthly_sales) SELECT product_id, growth_pct FROM growth WHERE month = DATE_TRUNC('month', CURRENT_DATE) ORDER BY growth_pct DESC LIMIT 10;"
        },
        {
          q: "4. Optimize this AI query: SELECT * FROM orders WHERE YEAR(order_date) = 2024;",
          answer: "Issues: SELECT *, function on column prevents index use. Optimized: SELECT order_id, customer_id, amount, order_date FROM orders WHERE order_date >= '2024-01-01' AND order_date < '2025-01-01'; -- Uses index, avoids SELECT *"
        },
        {
          q: "5. Prompt: Find duplicate customer emails",
          answer: "SELECT email, COUNT(*) duplicate_count FROM customers GROUP BY email HAVING COUNT(*) > 1 ORDER BY duplicate_count DESC;"
        },
        {
          q: "6. Validate NULL handling: SELECT customer_id, order_count FROM orders;",
          answer: "Issue: Missing customers with no orders. Fixed: SELECT c.customer_id, COALESCE(COUNT(o.order_id), 0) order_count FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.customer_id;"
        },
        {
          q: "7. Prompt: Calculate customer lifetime value",
          answer: "SELECT customer_id, SUM(order_amount) lifetime_value, COUNT(order_id) total_orders, AVG(order_amount) avg_order_value, MIN(order_date) first_order, MAX(order_date) last_order FROM orders GROUP BY customer_id ORDER BY lifetime_value DESC;"
        },
        {
          q: "8. Check performance: SELECT c.*, o.*, p.* FROM customers c JOIN orders o ON c.id = o.customer_id JOIN products p ON o.product_id = p.id;",
          answer: "Issues: SELECT * from 3 tables, no filters, returns everything. Optimized: SELECT c.customer_id, c.name, o.order_id, o.amount, p.product_name FROM customers c JOIN orders o ON c.customer_id = o.customer_id JOIN products p ON o.product_id = p.product_id WHERE o.order_date >= CURRENT_DATE - INTERVAL 30 DAY; -- Specific columns, filtered"
        },
        {
          q: "9. Prompt: Find products never ordered",
          answer: "SELECT p.product_id, p.product_name FROM products p LEFT JOIN order_items oi ON p.product_id = oi.product_id WHERE oi.product_id IS NULL;"
        },
        {
          q: "10. Validate business logic: Find 'top customers' - SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id ORDER BY COUNT(*) DESC LIMIT 10;",
          answer: "Issue: Counts orders, not revenue. Top customers should be by revenue. Fixed: SELECT customer_id, SUM(order_amount) total_revenue, COUNT(order_id) order_count FROM orders GROUP BY customer_id ORDER BY total_revenue DESC LIMIT 10;"
        }
      ]
    },

    quiz: [
      { q: "What is Prompt to SQL?", options: ["SQL to English", "Natural language to SQL query", "Database design", "Query optimization"], answer: 1 },
      { q: "Can AI replace SQL engineers?", options: ["Yes, completely", "No, validation still needed", "Only for simple queries", "In 10 years"], answer: 1 },
      { q: "Most important skill with AI SQL?", options: ["Fast typing", "Validation and verification", "Memorizing syntax", "Using multiple tools"], answer: 1 },
      { q: "AI-generated query validation checks?", options: ["Just run it", "Joins, filters, NULL, performance, logic", "Only syntax", "Only performance"], answer: 1 },
      { q: "Future SQL workflow?", options: ["Manual only", "Prompt → Generate → Validate → Deploy", "AI does everything", "No SQL needed"], answer: 1 },
      { q: "Biggest mistake with AI SQL?", options: ["Using AI", "Blindly trusting output", "Validating queries", "Testing queries"], answer: 1 },
      { q: "Popular AI SQL tools?", options: ["Only ChatGPT", "ChatGPT, Copilot, Amazon Q, Cursor", "No tools exist", "Only paid tools"], answer: 1 },
      { q: "Why validate AI queries?", options: ["Not needed", "AI may misunderstand, generate slow queries", "Waste of time", "Only for beginners"], answer: 1 },
      { q: "Future-proof SQL engineer formula?", options: ["AI only", "SQL + AI + Validation", "Manual SQL only", "No SQL needed"], answer: 1 },
      { q: "Time saved with AI SQL?", options: ["None", "70% with validation", "100%", "Only 10%"], answer: 1 }
    ],

    interview: "AI + Future SQL is becoming critical for modern data engineering. Industry shift: manual SQL writing reducing, AI-assisted generation growing, validation skills becoming essential. Companies like Google, Microsoft, Amazon, Meta use AI tools. Prompt to SQL: describe requirement in natural language, AI generates query. Example: 'Find top 5 customers by revenue' → AI generates SELECT with JOIN, GROUP BY, ORDER BY, LIMIT. Saves 70% time. Popular tools: ChatGPT (generation, debugging), GitHub Copilot (code completion), Amazon Q (AWS-specific), Cursor (AI IDE), Claude (reasoning). They help with generation, optimization, debugging, documentation. Critical skill: Validating AI-generated SQL. Check: 1) Correct joins (INNER vs LEFT), 2) Proper filters, 3) NULL handling, 4) Performance (avoid SELECT *, filter early, use indexes), 5) Business logic accuracy. Real failure: AI used INNER JOIN instead of LEFT, missed customers without orders, wrong revenue calculation. Future workflow: Business question → Engineer prompt → AI generates → Engineer validates → Optimize → Deploy. Time: 10 min vs 1 hour. Interview questions: 'How do you use AI for SQL?' Answer: Use AI for generation, validate joins/filters/performance, test before production. 'Can AI replace engineers?' No - AI generates but can't validate business logic, optimize for scale, handle data quality. Biggest mistakes: blindly trusting AI, ignoring performance, not validating logic, skipping tests. Future formula: SQL Knowledge + AI Usage + Validation Skills = Future-Proof Engineer. AI makes engineers 10x faster, but validation remains human responsibility.",

    memory: `🤖 AI + Future SQL = Speed + Validation 🚀

Industry Shift:
🔄 Manual SQL reducing
🔄 AI-assisted generation growing
🔄 Validation skills critical

Prompt to SQL:
English → AI → SQL Query
Example: "Find top customers" → AI generates query
Time saved: 70%

Popular AI Tools:
🤖 ChatGPT - Generation, debugging
🤖 GitHub Copilot - Code completion
🤖 Amazon Q - AWS-specific
🤖 Cursor - AI IDE
🤖 Claude - Complex reasoning

What They Help:
✅ Query generation
✅ Optimization suggestions
✅ Debugging
✅ Documentation

Critical Skill: VALIDATION ⚠️

Validation Checklist:
✅ Correct joins? (INNER vs LEFT)
✅ Proper filters?
✅ NULL handling?
✅ Avoid SELECT *?
✅ Filter early?
✅ Use indexes?
✅ Business logic correct?
✅ Test on sample data?

Real Failure Example:
AI: SELECT * FROM customers c JOIN orders o...
❌ SELECT *
❌ INNER JOIN (missed customers without orders)
❌ No filters
❌ Duplicates

Fixed by Engineer:
SELECT c.customer_id, COUNT(o.id)
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.customer_id;

Future Workflow:
1️⃣ Business asks question
2️⃣ Engineer writes prompt
3️⃣ AI generates SQL
4️⃣ Engineer validates
5️⃣ Optimize query
6️⃣ Deploy to production

Time: 10 min (vs 1 hour manually)

Interview Questions:
❓ "How do you use AI for SQL?"
→ Use AI for generation, validate everything

❓ "Can AI replace SQL engineers?"
→ No, validation requires expertise

❓ "How to validate AI queries?"
→ Check joins, filters, NULL, performance, logic

Biggest Mistakes:
❌ Blindly trust AI output
❌ Ignore performance issues
❌ Skip business logic validation
❌ Don't test queries
❌ Don't learn SQL fundamentals

Future Formula:
SQL Knowledge + AI Usage + Validation = Future-Proof Engineer

✅ SQL Knowledge: Understand fundamentals
✅ AI Usage: Accelerate development
✅ Validation: Ensure correctness

Result: 10x faster + Quality delivery

Key Insight:
AI writes → Engineer verifies → Production wins

Companies Using:
🏢 Snowflake + AI tools
🏢 Databricks + AI tools
🏢 Redshift + AI tools

Time Saved: 2-3 hours per query
Quality: Maintained through validation

Future is Here:
Embrace AI, Master Validation, Stay Relevant 🚀`,

    revision: "AI + Future SQL: Modern engineers use AI tools for 10x speed with validation. Industry shift: manual SQL reducing, AI generation growing, validation critical. Prompt to SQL: natural language → AI generates query. Tools: ChatGPT, GitHub Copilot, Amazon Q, Cursor, Claude. Help with generation, optimization, debugging. Critical: Validation - check joins (INNER vs LEFT), filters, NULL handling, performance (avoid SELECT *, filter early, indexes), business logic. Real failure: AI used wrong join, missed data. Future workflow: Business question → Prompt → AI generates → Validate → Optimize → Deploy. Time: 10 min vs 1 hour. Interview: 'How use AI?' - Generate then validate. 'AI replace engineers?' - No, validation needs expertise. Mistakes: blindly trust AI, ignore performance, skip validation. Formula: SQL Knowledge + AI Usage + Validation = Future-Proof Engineer. AI accelerates, humans validate."
  }
};

// Export the content
if (typeof module !== 'undefined' && module.exports) {
  module.exports = sqlContent;
}
