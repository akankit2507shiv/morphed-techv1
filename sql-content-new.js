// SQL Topics Content - Complete New Structure
const sqlContent = {
  // MODULE 1: Database Basics
  'database-basics': {
    topic: "Database Basics",
    category: "SQL Foundation",
    level: "Beginner",

    // 1 OBJECTIVE
    objective: `
Understand how databases store data and why companies use them
before writing SQL queries.
`,

    // 2 PROBLEM STATEMENT
    problem_statement: `
Imagine Amazon storing customer data in multiple Excel files:

customers_final.xlsx
orders_latest.xlsx
payment_updated_final.xlsx

Problems:
- Duplicate records
- Hard to search data
- No proper relationship
- Security issues
- Difficult updates

Database solves all these problems.
`,

    // 3 ANALOGY
    analogy: `
Database = Library

Library = Database
Bookshelves = Tables
Books = Rows
Book properties = Columns

Everything is organized for quick search.
`,

    // 4 INTERVIEW HOOK
    interview_hook: `
A database is an organized collection of structured data
used for efficient storage, retrieval, and management.
`,

    // 5 CONCEPT EXPLANATION
    concept_explanation: `

Database stores data electronically.

Example company data:
- Customers
- Orders
- Payments
- Products
- Employees

Everything is stored in databases.
`,

    // 6 INTERNAL WORKING
    internal_working: `
User/Application sends query

→ Database engine processes request

→ Retrieves required data

→ Returns output
`,

    // 7 DBMS VS RDBMS
    dbms_vs_rdbms: {

      DBMS: `
Stores data but relationships are weak.
Less scalable.
Examples:
- File systems
- XML storage
`,

      RDBMS: `
Stores data in related tables.
Uses keys for relationships.

Examples:
- MySQL
- Oracle
- SQL Server
- PostgreSQL
`,

      difference: `
DBMS = No strong relationships

RDBMS = Strong table relationships
`
    },

    // 8 TABLES
    tables: {
      definition: `
Tables store related data in rows and columns.
`,

      example: `
Employee Table
--------------
Employee_ID
Name
Department
Salary
`
    },

    // 9 ROWS
    rows: {
      definition: `
Each row represents one complete record.
`,

      example: `
1 | Ankit | Data Engineer | 50000
`
    },

    // 10 COLUMNS
    columns: {
      definition: `
Columns represent attributes of data.
`,

      example: `
Name
Salary
Department
`
    },

    // 11 PRIMARY KEY
    primary_key: {

      objective: `
Uniquely identify each record.
`,

      problem: `
Two employees can have same name.
Need unique identifier.
`,

      example: `
Employee_ID
Customer_ID
Order_ID
`,

      rules: [
        "Must be unique",
        "Cannot be null",
        "One primary key per table"
      ],

      analogy: `
Aadhaar card number
`
    },

    // 12 FOREIGN KEY
    foreign_key: {

      objective: `
Create relationship between tables.
`,

      example: `
Customer Table:
Customer_ID

Orders Table:
Customer_ID
`,

      explanation: `
Foreign key references primary key
of another table.
`,

      analogy: `
Student roll number referenced in exam records
`
    },

    // 13 CONSTRAINTS
    constraints: {

      objective: `
Maintain data quality and prevent invalid data.
`,

      types: [

        "NOT NULL → prevents null values",

        "UNIQUE → prevents duplicates",

        "PRIMARY KEY → unique + not null",

        "FOREIGN KEY → maintains relationship",

        "CHECK → validates condition",

        "DEFAULT → assigns default values"
      ],

      example: `
Salary > 0
Email should be unique
`
    },

    // 14 REAL WORLD USE CASE
    real_world_use_case: `
E-commerce company stores:

Customer Table
Orders Table
Payments Table
Products Table

All connected using keys.
`,

    // 15 COMMON MISTAKES
    common_mistakes: [
      "Confusing row and column",
      "Not understanding primary vs foreign key",
      "Ignoring constraints",
      "Thinking DBMS and RDBMS are same"
    ],

    // 16 INTERVIEW QUESTIONS
    interview_questions: [
      "What is database?",
      "Difference between DBMS and RDBMS?",
      "What is primary key?",
      "What is foreign key?",
      "What are constraints?",
      "Difference between row and column?"
    ],

    // 17 MEMORY TRICK
    memory_trick: `
Database Flow:

Database
→ Tables
→ Rows
→ Columns
→ Primary Key
→ Foreign Key
→ Constraints
`,

    // 18 REVISION SNAPSHOT
    revision_notes: `
Database stores data
RDBMS manages relational data
Rows = records
Columns = attributes
Primary key = unique identifier
Foreign key = relationship creator
Constraints = data quality checker
`
  }

  // More modules will be added here...
};

// Export the content
if (typeof module !== 'undefined' && module.exports) {
  module.exports = sqlContent;
}