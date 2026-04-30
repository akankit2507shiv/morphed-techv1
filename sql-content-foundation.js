// Foundation Topics to be added to sql-content.js

const foundationTopics = {
  "database-basics": {
    title: "Database Basics (Foundation)",
    icon: "🗄️",
    difficulty: "Foundation",
    duration: "45 min",
    description: "What is Database, DBMS vs RDBMS, Tables, Rows, Columns, Keys, Constraints",
    
    comic: `📚 Imagine you're running a library:

📖 Old Way (Excel Files):
- Books scattered everywhere
- No proper organization
- Hard to find specific books
- Multiple people can't access simultaneously
- No backup if file corrupts

🗄️ New Way (Database):
- Books organized in shelves (tables)
- Each book has unique ID (primary key)
- Easy search by author, title, genre
- Multiple people can access together
- Automatic backup and security

😰 Real Problem:
Amazon storing customer data in Excel:
- customers_final.xlsx
- orders_latest_v2.xlsx
- payment_updated_final_final.xlsx

Problems:
❌ Duplicate records
❌ Hard to search
❌ No relationships
❌ Security issues
❌ Manual updates

✨ Database Solution:
✅ Organized tables
✅ Fast search
✅ Proper relationships
✅ Security & access control
✅ Automatic updates

💡 Aha Moment:
Database = Organized digital filing system 🗄️
Tables = Organized shelves 📋
Rows = Individual records 📝`,

    deepDive: `👉 What is a Database?
A database is an organized collection of structured data stored electronically, designed for efficient storage, retrieval, and management.

👉 Why it matters?
In real companies:
- Store millions of customer records
- Handle thousands of transactions per second
- Ensure data consistency and integrity
- Enable fast search and retrieval
- Support multiple users simultaneously

👉 Real-world Problem:
Before databases, companies used:
- Paper files (slow, error-prone)
- Excel sheets (limited, no concurrent access)
- Text files (no structure, hard to query)

👉 DBMS vs RDBMS:

DBMS (Database Management System):
- Software to manage databases
- Examples: File systems, hierarchical databases
- No relationships between data
- Limited query capabilities

RDBMS (Relational Database Management System):
- Advanced DBMS with relationships
- Data stored in tables (rows & columns)
- Tables connected via keys
- Powerful SQL query language
- Examples: MySQL, PostgreSQL, Oracle, SQL Server

👉 Key Concepts:

1. Tables:
- Organized structure to store data
- Like Excel sheets but more powerful
- Example: customers, orders, products

2. Rows (Records):
- Individual data entries
- Example: One customer's information

3. Columns (Fields):
- Attributes of data
- Example: name, email, phone

4. Primary Key:
- Unique identifier for each row
- Cannot be NULL or duplicate
- Example: customer_id, order_id

5. Foreign Key:
- Links tables together
- References primary key of another table
- Example: customer_id in orders table

6. Constraints:
- Rules to ensure data quality
- NOT NULL, UNIQUE, CHECK, DEFAULT

👉 Real Company Examples:
- Amazon: Customer, Orders, Products tables
- Netflix: Users, Movies, Viewing_History tables
- Banking: Accounts, Transactions, Customers tables

👉 Interview Line:
"A database is an organized collection of structured data managed by DBMS. RDBMS adds relationships between tables using keys, enabling complex queries with SQL. Key components include tables (structure), rows (records), columns (attributes), primary keys (unique identifiers), and foreign keys (relationships)."`,

    types: `🗄️ Database Components:

1️⃣ Tables
👉 Objective: Organize data in structured format
👉 Structure: Rows and columns
👉 Example:
   Customers Table:
   customer_id | name    | email           | city
   1          | Ankit   | ankit@email.com | Mumbai
   2          | Priya   | priya@email.com | Delhi

2️⃣ Primary Key
👉 Objective: Uniquely identify each row
👉 Rules: NOT NULL, UNIQUE
👉 Example: customer_id, order_id, employee_id

3️⃣ Foreign Key
👉 Objective: Create relationships between tables
👉 Links to primary key of another table
👉 Example: customer_id in orders table references customers table

4️⃣ Constraints
👉 NOT NULL: Column cannot be empty
👉 UNIQUE: No duplicate values
👉 CHECK: Validate data (age > 18)
👉 DEFAULT: Set default value

5️⃣ Data Types
👉 INT: Integer numbers
👉 VARCHAR: Text strings
👉 DATE: Date values
👉 DECIMAL: Decimal numbers`,

    qa: [
      {
        q: "What is the difference between DBMS and RDBMS?",
        hint: "Think about relationships",
        options: ["No difference", "RDBMS has relationships between tables, DBMS doesn't", "DBMS is newer", "RDBMS is slower"],
        answer: "RDBMS has relationships between tables, DBMS doesn't",
        explanation: "RDBMS (Relational DBMS) stores data in tables with relationships using keys. DBMS is a general term for any database management system without necessarily having relational capabilities.",
        memory: "RDBMS = Tables + Relationships 🔗"
      },
      {
        q: "What is a Primary Key?",
        hint: "Think about unique identification",
        options: ["Any column", "Unique identifier for each row", "First column", "Last column"],
        answer: "Unique identifier for each row",
        explanation: "Primary key uniquely identifies each row in a table. It must be unique and cannot be NULL. Examples: customer_id, order_id.",
        memory: "Primary Key = Unique ID 🔑"
      },
      {
        q: "What is a Foreign Key?",
        hint: "Think about table relationships",
        options: ["Primary key copy", "Links tables together", "Any key", "Backup key"],
        answer: "Links tables together",
        explanation: "Foreign key creates relationships between tables by referencing the primary key of another table. Example: customer_id in orders table references customers table.",
        memory: "Foreign Key = Table Link 🔗"
      }
    ],

    coding: {
      title: "Database Design Challenge",
      scenario: "You're designing a simple e-commerce database structure.",
      questions: [
        {
          q: "1. Create a customers table with customer_id (primary key), name, email, and city",
          answer: "CREATE TABLE customers (customer_id INT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100), city VARCHAR(50));"
        },
        {
          q: "2. Create an orders table with order_id (primary key), customer_id (foreign key), order_date, and amount",
          answer: "CREATE TABLE orders (order_id INT PRIMARY KEY, customer_id INT, order_date DATE, amount DECIMAL(10,2), FOREIGN KEY (customer_id) REFERENCES customers(customer_id));"
        }
      ]
    },

    quiz: [
      { q: "Database is?", options: ["Excel file", "Organized data collection", "Text file", "Image"], answer: 1 },
      { q: "RDBMS has?", options: ["No structure", "Tables with relationships", "Only files", "No queries"], answer: 1 },
      { q: "Primary key must be?", options: ["Duplicate", "Unique and NOT NULL", "NULL", "Text only"], answer: 1 },
      { q: "Foreign key links?", options: ["Nothing", "Tables together", "Columns", "Rows"], answer: 1 },
      { q: "Table contains?", options: ["Only text", "Rows and columns", "Only numbers", "Images"], answer: 1 }
    ],

    interview: `"A database is an organized collection of structured data managed by DBMS. RDBMS adds relationships between tables using primary and foreign keys. Tables store data in rows (records) and columns (attributes). Primary key uniquely identifies each row and must be unique and NOT NULL. Foreign key creates relationships by referencing primary key of another table. Constraints ensure data quality through rules like NOT NULL, UNIQUE, and CHECK."`,

    memory: `👉 Database = Organized data 🗄️
👉 RDBMS = Tables + Relationships 🔗
👉 Primary Key = Unique ID 🔑
👉 Foreign Key = Table Link 🔗
👉 Table = Rows + Columns 📋`,

    revision: "Database Basics: RDBMS (tables with relationships), Primary Key (unique identifier), Foreign Key (table links), Constraints (data rules) - foundation for SQL"
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
- SELECT: "Show me books"
- WHERE: "Only fiction books"
- ORDER BY: "Sort by author name"
- LIMIT: "Show first 10 only"
- Result: Instant!

🏢 Real Business Example:
Manager: "Show me all customers from Mumbai who spent more than ₹50,000, sorted by spending"

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

👉 Interview Line:
"SQL basic queries retrieve data using SELECT (columns), FROM (table), WHERE (filters), ORDER BY (sorting), and LIMIT (row count). DISTINCT removes duplicates, and AS creates aliases for readability."`,

    types: `🔍 SQL Basic Query Components:

1️⃣ SELECT
👉 Syntax: SELECT column1, column2 FROM table;
👉 Example: SELECT name, email FROM customers;
👉 SELECT *: All columns (avoid in production)

2️⃣ WHERE
👉 Syntax: SELECT * FROM table WHERE condition;
👉 Example: SELECT * FROM customers WHERE city='Mumbai';
👉 Operators: =, !=, >, <, >=, <=

3️⃣ DISTINCT
👉 Syntax: SELECT DISTINCT column FROM table;
👉 Example: SELECT DISTINCT city FROM customers;
👉 Removes duplicate values

4️⃣ ORDER BY
👉 Syntax: SELECT * FROM table ORDER BY column ASC/DESC;
👉 Example: SELECT * FROM products ORDER BY price DESC;
👉 ASC: Ascending (default), DESC: Descending

5️⃣ LIMIT
👉 Syntax: SELECT * FROM table LIMIT number;
👉 Example: SELECT * FROM customers LIMIT 10;
👉 Restricts result rows

6️⃣ AS (Aliases)
👉 Syntax: SELECT column AS alias_name FROM table;
👉 Example: SELECT name AS customer_name FROM customers;
👉 Makes output readable`,

    qa: [
      {
        q: "What does SELECT do?",
        hint: "Think about choosing data",
        options: ["Deletes data", "Retrieves data from database", "Updates data", "Creates table"],
        answer: "Retrieves data from database",
        explanation: "SELECT retrieves data from database tables. You specify which columns to display and from which table.",
        memory: "SELECT = Retrieve data 🔍"
      },
      {
        q: "What is the purpose of WHERE clause?",
        hint: "Think about filtering",
        options: ["Sort data", "Filter rows based on conditions", "Delete data", "Create table"],
        answer: "Filter rows based on conditions",
        explanation: "WHERE filters rows based on specified conditions. Only rows matching the condition are returned.",
        memory: "WHERE = Filter rows 🎯"
      },
      {
        q: "What does DISTINCT do?",
        hint: "Think about duplicates",
        options: ["Sorts data", "Removes duplicate values", "Filters data", "Counts rows"],
        answer: "Removes duplicate values",
        explanation: "DISTINCT removes duplicate values from result set, showing only unique values.",
        memory: "DISTINCT = Remove duplicates ❌"
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
        }
      ]
    },

    quiz: [
      { q: "SELECT retrieves?", options: ["Deletes data", "Retrieves data", "Updates data", "Creates table"], answer: 1 },
      { q: "WHERE is used for?", options: ["Sorting", "Filtering", "Deleting", "Creating"], answer: 1 },
      { q: "DISTINCT removes?", options: ["All data", "Duplicates", "Tables", "Columns"], answer: 1 },
      { q: "ORDER BY does?", options: ["Filters", "Sorts results", "Deletes", "Creates"], answer: 1 },
      { q: "LIMIT restricts?", options: ["Columns", "Number of rows", "Tables", "Users"], answer: 1 }
    ],

    interview: `"SQL basic queries retrieve data using SELECT for columns, FROM for table, WHERE for filtering, ORDER BY for sorting, LIMIT for row count, and DISTINCT for removing duplicates. AS creates aliases for readability. These form the foundation of all SQL operations."`,

    memory: `👉 SELECT = Retrieve data 🔍
👉 WHERE = Filter rows 🎯
👉 DISTINCT = Remove duplicates ❌
👉 ORDER BY = Sort results 📊
👉 LIMIT = Restrict rows 🔢`,

    revision: "SQL Basic Queries: SELECT (retrieve), WHERE (filter), DISTINCT (unique), ORDER BY (sort), LIMIT (restrict) - foundation of data retrieval"
  }
};

// Continue with remaining 4 topics...
