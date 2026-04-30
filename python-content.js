// Python Topics Content - New 15 Module Structure
// Optimized for Data Engineering Job Market

const pythonContent = {
  // ============================================================================
  // MODULE 1: PYTHON BASICS
  // ============================================================================

  "python-basics": {
    title: "Python Basics",
    icon: "🐍",
    difficulty: "Foundation",
    duration: "60 min",
    description: "Variables, Data Types, Operators, Type Casting, Input/Output - Foundation for coding interviews and real-world development",

    comic: `🏗️ Building a House

Builder: "I want to build a skyscraper!"
Engineer: "Wait! Do you have a strong foundation?"
Builder: "No, I'll start from the 10th floor."
Engineer: "That's impossible! 😱"

💡 Reality Check:
✅ Strong foundation = Strong building
✅ Weak foundation = Building collapses

Same with Python:
👉 Variables = Storage boxes 📦
👉 Data Types = Nature of data 🔢
👉 Operators = Actions ➕
👉 Type Casting = Conversion 🔄
👉 Input/Output = Communication 💬

🎯 Aha Moment:
Python Basics = Foundation of your coding career!

You cannot build ETL pipelines without knowing basics 🚀`,

    deepDive: `🐍 Python Basics - Complete Foundation

📌 Why This Module Matters?

Interviewer Goal:
Test whether your fundamentals are strong before moving to advanced coding questions.

Real World Usage:
✅ Writing automation scripts
✅ Building ETL logic
✅ Creating APIs
✅ Working in AWS Lambda functions

Analogy:
Building Foundation = You cannot build a skyscraper without strong ground support.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 Topic 1: Variables

Scenario:
You need to store employee salary information temporarily.

What it does:
✅ Stores values in memory
✅ Makes data reusable

Example:
salary = 50000
name = "Ankit"
age = 25

Real Usage:
🔹 Store API responses
🔹 Store file paths
🔹 Store calculations

Rules:
1. Variable names are case-sensitive
2. Cannot start with numbers
3. Use meaningful names

Example:
# Good
employee_salary = 50000

# Bad
x = 50000

Quick Memory: Variable = Storage box 📦

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔢 Topic 2: Data Types

Interview Question: "What are Python data types?"

Types:
1️⃣ Integer (int) - Whole numbers
   age = 25

2️⃣ Float - Decimal numbers
   salary = 50000.50

3️⃣ String (str) - Text
   name = "Ankit"

4️⃣ Boolean (bool) - True/False
   is_active = True

5️⃣ List - Ordered collection
   numbers = [1, 2, 3]

6️⃣ Dictionary (dict) - Key-value pairs
   user = {"name": "Ankit", "age": 25}

7️⃣ Tuple - Immutable list
   coordinates = (10, 20)

8️⃣ Set - Unique values
   unique_ids = {1, 2, 3}

Real Problem:
Wrong data types cause application bugs.

Example:
age = "25"  # String
age = 25    # Integer

Checking Type:
print(type(age))  # <class 'int'>

Quick Memory: Data type = Nature of data 🔢

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

➕ Topic 3: Operators

Business Scenario:
Calculate revenue and compare targets.

Types:

1️⃣ Arithmetic Operators:
   + (Addition)
   - (Subtraction)
   * (Multiplication)
   / (Division)
   % (Modulus)
   ** (Power)
   // (Floor Division)

Example:
sales = 1000
profit = 200
total = sales + profit  # 1200

2️⃣ Comparison Operators:
   == (Equal)
   != (Not equal)
   > (Greater than)
   < (Less than)
   >= (Greater or equal)
   <= (Less or equal)

Example:
salary = 50000
if salary > 40000:
    print("High salary")

3️⃣ Logical Operators:
   and (Both conditions true)
   or (At least one true)
   not (Reverse)

Example:
age = 25
salary = 50000

if age > 20 and salary > 40000:
    print("Eligible")

4️⃣ Assignment Operators:
   = (Assign)
   += (Add and assign)
   -= (Subtract and assign)
   *= (Multiply and assign)

Example:
count = 10
count += 5  # count = count + 5 → 15

Quick Memory: Operators = Perform actions ➕

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 Topic 4: Type Casting

Problem:
API sends age as string "25" instead of integer 25.

Solution:
Convert one datatype to another.

Types:

1️⃣ int() - Convert to integer
age = int("25")  # "25" → 25

2️⃣ float() - Convert to float
price = float("99.99")  # "99.99" → 99.99

3️⃣ str() - Convert to string
age = str(25)  # 25 → "25"

4️⃣ bool() - Convert to boolean
status = bool(1)  # 1 → True

Real World Usage:
🔹 CSV parsing (all data comes as strings)
🔹 API data conversion
🔹 User input handling

Example:
# CSV data comes as string
age_str = "25"
age_int = int(age_str)
print(age_int + 5)  # 30

Common Error:
age = "25"
print(age + 5)  # TypeError: can only concatenate str

Quick Memory: Type casting = Conversion 🔄

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 Topic 5: Input Output

Scenario:
Take user input and print output.

Input:
name = input("Enter name: ")
print("Hello", name)

Note: input() always returns string!

Example:
age = input("Enter age: ")  # Returns "25" (string)
age = int(age)  # Convert to integer

Output:
print("Hello World")
print("Name:", name)
print(f"Age: {age}")  # f-string (modern way)

Where Used:
🔹 CLI tools
🔹 Automation scripts
🔹 Testing scripts
🔹 Data validation

Real Example:
# ETL script
file_path = input("Enter file path: ")
data = read_file(file_path)
print(f"Loaded {len(data)} records")

Quick Memory: Input → Process → Output 💬

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Most Asked Interview Questions:

1. Difference between list and tuple?
   Answer: List is mutable (can change), Tuple is immutable (cannot change).

2. Mutable vs immutable?
   Answer: Mutable objects can be modified after creation (list, dict, set).
   Immutable objects cannot be modified (int, float, string, tuple).

3. What is type casting?
   Answer: Converting one data type to another using int(), float(), str(), bool().

4. Types of operators?
   Answer: Arithmetic (+, -, *, /), Comparison (==, !=, >, <), Logical (and, or, not), Assignment (=, +=, -=).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Common Mistakes:

1. Wrong datatype assignment
   age = "25"  # Should be int
   age = 25    # Correct

2. Forgetting type conversion
   age = input("Age: ")  # Returns string
   age = int(input("Age: "))  # Correct

3. Confusing assignment vs comparison
   if age = 25:  # Wrong (assignment)
   if age == 25:  # Correct (comparison)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Connection:

Python basics are heavily used while:
✅ Building ETL scripts in AWS Glue
✅ Automation scripts in Jenkins
✅ Lambda functions in AWS
✅ Data validation scripts
✅ API development

Example:
# AWS Lambda function
def lambda_handler(event, context):
    # Variables
    user_id = event['user_id']
    
    # Type casting
    age = int(event['age'])
    
    # Operators
    if age >= 18:
        status = "Adult"
    else:
        status = "Minor"
    
    # Output
    return {
        'statusCode': 200,
        'body': f"User {user_id} is {status}"
    }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Memory Formula:

Python Base Formula:
Store → Identify → Operate → Convert → Display

📦 Store = Variables
🔢 Identify = Data Types
➕ Operate = Operators
🔄 Convert = Type Casting
💬 Display = Input/Output

Master these 5 → Build anything in Python! 🚀`,

    types: `🐍 Python Basics - Quick Reference

📦 Variables:
- Storage boxes for data
- name = "Ankit"
- age = 25

🔢 Data Types:
- int: 25
- float: 25.5
- str: "Hello"
- bool: True/False
- list: [1,2,3]
- dict: {"key": "value"}
- tuple: (1,2,3)
- set: {1,2,3}

➕ Operators:
- Arithmetic: +, -, *, /, %, **, //
- Comparison: ==, !=, >, <, >=, <=
- Logical: and, or, not
- Assignment: =, +=, -=, *=, /=

🔄 Type Casting:
- int("25") → 25
- float("25.5") → 25.5
- str(25) → "25"
- bool(1) → True

💬 Input/Output:
- input("Enter: ")
- print("Output")
- print(f"Value: {var}")`,

    qa: [
      {
        q: "What is a variable in Python?",
        a: "A variable is a storage location with a name that holds a value. Example: age = 25. Variables store data temporarily in memory and make it reusable throughout the program."
      },
      {
        q: "What are the main data types in Python?",
        a: "Main data types: int (25), float (25.5), str ('Hello'), bool (True/False), list ([1,2,3]), dict ({'key':'value'}), tuple ((1,2,3)), set ({1,2,3}). Each type serves different purposes in data storage and manipulation."
      },
      {
        q: "Difference between mutable and immutable?",
        a: "Mutable objects can be changed after creation (list, dict, set). Immutable objects cannot be changed (int, float, string, tuple). Example: list can be modified, but string creates new object when changed."
      },
      {
        q: "What is type casting and why is it needed?",
        a: "Type casting converts one data type to another using int(), float(), str(), bool(). Needed when: API returns string '25' but you need int 25, CSV data comes as strings, user input is always string."
      },
      {
        q: "What are arithmetic operators in Python?",
        a: "Arithmetic operators: + (add), - (subtract), * (multiply), / (divide), % (modulus), ** (power), // (floor division). Example: 10 + 5 = 15, 10 % 3 = 1, 2 ** 3 = 8."
      },
      {
        q: "What are comparison operators?",
        a: "Comparison operators: == (equal), != (not equal), > (greater), < (less), >= (greater or equal), <= (less or equal). Return True or False. Example: 5 > 3 returns True."
      },
      {
        q: "What are logical operators?",
        a: "Logical operators: and (both true), or (at least one true), not (reverse). Example: age > 18 and salary > 50000 checks both conditions. Used in if statements and filtering."
      },
      {
        q: "Why does input() always return string?",
        a: "input() function always returns string type, even if user enters number. Must convert: age = int(input('Age: ')). This is common source of bugs when doing calculations with user input."
      },
      {
        q: "Difference between = and ==?",
        a: "= is assignment operator (assigns value): age = 25. == is comparison operator (checks equality): if age == 25. Common mistake: using = in if statements instead of ==."
      },
      {
        q: "How to check data type of a variable?",
        a: "Use type() function: type(25) returns <class 'int'>, type('Hello') returns <class 'str'>. Useful for debugging and validation in real projects."
      }
    ],

    coding: {
      title: "Python Basics Coding Exercises",
      questions: [
        {
          q: "1. Create variables for name, age, and salary",
          answer: "name = 'Ankit'\nage = 25\nsalary = 50000.50\nprint(f'Name: {name}, Age: {age}, Salary: {salary}')"
        },
        {
          q: "2. Check data types of different variables",
          answer: "age = 25\nname = 'Ankit'\nis_active = True\nprint(type(age))  # <class 'int'>\nprint(type(name))  # <class 'str'>\nprint(type(is_active))  # <class 'bool'>"
        },
        {
          q: "3. Perform arithmetic operations",
          answer: "a = 10\nb = 3\nprint(a + b)  # 13\nprint(a - b)  # 7\nprint(a * b)  # 30\nprint(a / b)  # 3.333\nprint(a % b)  # 1\nprint(a ** b)  # 1000\nprint(a // b)  # 3"
        },
        {
          q: "4. Use comparison operators",
          answer: "salary = 50000\ntarget = 40000\nprint(salary > target)  # True\nprint(salary == target)  # False\nprint(salary >= 50000)  # True"
        },
        {
          q: "5. Use logical operators",
          answer: "age = 25\nsalary = 50000\nif age > 20 and salary > 40000:\n    print('Eligible')\nelse:\n    print('Not eligible')"
        },
        {
          q: "6. Convert string to integer (type casting)",
          answer: "age_str = '25'\nage_int = int(age_str)\nprint(age_int + 5)  # 30\nprint(type(age_int))  # <class 'int'>"
        },
        {
          q: "7. Convert integer to string",
          answer: "age = 25\nage_str = str(age)\nprint('Age: ' + age_str)  # Age: 25\nprint(type(age_str))  # <class 'str'>"
        },
        {
          q: "8. Take user input and convert to integer",
          answer: "age = int(input('Enter your age: '))\nprint(f'You are {age} years old')\nprint(f'Next year you will be {age + 1}')"
        },
        {
          q: "9. Calculate total salary with bonus",
          answer: "base_salary = 50000\nbonus = 5000\ntotal = base_salary + bonus\nprint(f'Base: {base_salary}')\nprint(f'Bonus: {bonus}')\nprint(f'Total: {total}')"
        },
        {
          q: "10. Check if number is even or odd using modulus",
          answer: "num = int(input('Enter number: '))\nif num % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')"
        }
      ]
    },

    quiz: [
      { q: "Variable stores?", options: ["Nothing", "Data in memory", "Functions", "Classes"], answer: 1 },
      { q: "int data type?", options: ["Decimal", "Whole number", "Text", "True/False"], answer: 1 },
      { q: "String data type?", options: ["Number", "Text", "Boolean", "List"], answer: 1 },
      { q: "Type casting is?", options: ["Deleting", "Converting types", "Looping", "Printing"], answer: 1 },
      { q: "input() returns?", options: ["Integer", "String", "Float", "Boolean"], answer: 1 },
      { q: "Comparison operator?", options: ["+", "==", "=", "and"], answer: 1 },
      { q: "Logical operator?", options: ["+", "==", "and", "="], answer: 2 },
      { q: "Assignment operator?", options: ["==", "=", ">=", "!="], answer: 1 },
      { q: "Mutable type?", options: ["int", "str", "list", "tuple"], answer: 2 },
      { q: "Immutable type?", options: ["list", "dict", "tuple", "set"], answer: 2 }
    ],

    interview: "Python Basics are foundation for all coding interviews and real-world development. Key concepts: Variables store data in memory (salary = 50000). Data types include int, float, str, bool, list, dict, tuple, set - each serves different purposes. Operators: Arithmetic (+,-,*,/), Comparison (==,!=,>,<), Logical (and,or,not), Assignment (=,+=,-=). Type casting converts types using int(), float(), str(), bool() - essential for API data and CSV parsing. input() always returns string, must convert for calculations. Common mistakes: wrong datatype assignment, forgetting type conversion, confusing = (assignment) with == (comparison). Real usage: ETL scripts, AWS Lambda functions, automation scripts, API development. Mutable types (list, dict, set) can change, immutable types (int, float, str, tuple) cannot. Master these fundamentals before moving to advanced topics.",

    memory: `🐍 Python Basics Memory Map

📦 Variables = Storage Boxes
name = "Ankit"
age = 25

🔢 Data Types:
int → 25
float → 25.5
str → "Hello"
bool → True/False
list → [1,2,3]
dict → {"key": "value"}
tuple → (1,2,3)
set → {1,2,3}

➕ Operators:
Arithmetic: + - * / % ** //
Comparison: == != > < >= <=
Logical: and or not
Assignment: = += -= *= /=

🔄 Type Casting:
int("25") → 25
float("25.5") → 25.5
str(25) → "25"
bool(1) → True

💬 Input/Output:
input() → always string!
print() → display output
f"Value: {var}" → f-string

🎯 Quick Formula:
Store → Identify → Operate → Convert → Display

❌ Common Mistakes:
= vs == (assignment vs comparison)
Forgetting int(input())
Wrong data types

✅ Real Usage:
ETL scripts
AWS Lambda
Automation
API development`,

    revision: "Python Basics: Variables store data (age=25). Data types: int, float, str, bool, list, dict, tuple, set. Operators: Arithmetic (+,-,*,/), Comparison (==,!=,>,<), Logical (and,or,not), Assignment (=,+=). Type casting: int(), float(), str(), bool() - convert types. input() returns string, must convert. Mutable (list,dict,set) vs Immutable (int,float,str,tuple). Common mistakes: = vs ==, forgetting type conversion. Used in: ETL scripts, Lambda functions, automation, APIs. Foundation for all Python development."
  },

  // ============================================================================
  // MODULE 2: CONDITIONAL STATEMENTS AND LOOPS
  // ============================================================================

  "conditional-loops": {
    title: "Conditional Statements and Loops",
    icon: "🔁",
    difficulty: "Foundation",
    duration: "75 min",
    description: "Decision making and repetition logic required for coding interviews and real-world automation projects",

    comic: `🎬 Movie Ticket Entry

Security Guard at Cinema:
"Show me your ID!"

Person: "I'm 20 years old"
Guard: "Age >= 18? ✅ Enter!"

Child: "I'm 15 years old"
Guard: "Age < 18? ❌ Not allowed!"

💡 Real Life Decision:
IF age >= 18 → Allow entry
ELSE → Deny entry

🏢 Airport Security (Nested Check):
First Check: "Show passport" ✅
Second Check: "Show ticket" ✅
Result: "Proceed to gate" 🛫

👨‍🏫 Attendance Teacher:
Teacher calls each student one by one:
"Ankit?" → Present ✅
"Rahul?" → Present ✅
"Priya?" → Present ✅

This is FOR LOOP → Fixed repetition!

🏧 ATM Retry:
Transaction failed ❌
Retry... Attempt 1
Retry... Attempt 2
Retry... Attempt 3
Success! ✅

This is WHILE LOOP → Retry until success!

📝 School Exam:
Question 1: Easy → Answer ✅
Question 2: Hard → Skip (Continue) ⏭️
Question 3: Easy → Answer ✅
Time Over → Stop Exam (Break) ⏹️

🎯 Aha Moment:
Life is full of decisions and repetitions!
Programming just automates them! 🚀`,

    deepDive: `🔁 Conditional Statements and Loops - Complete Guide

📌 Module Description:
This module teaches decision making and repetition logic required for coding interviews and real-world automation projects.

Category: Logic Building
Importance: Very High

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎬 Topic 1: If Else

Comic Story: Movie Ticket Entry
Security checks your age before allowing entry.

What It Is:
Used to make decisions based on conditions.

Interview Q&A:
Q: When should we use if else?
A: When different actions are required based on condition results.

Coding Example - Check voting eligibility:
age = 20
if age >= 18:
    print('Eligible')
else:
    print('Not Eligible')

Coding Challenge:
Check whether a number is even or odd

Hint: Use modulus operator %

Solution:
num = 10
if num % 2 == 0:
    print('Even')
else:
    print('Odd')

Quiz:
Q: Which statement helps in decision making?
A: If Else

Interview Question:
How do you validate records in ETL?
Answer: Use if-else to check conditions like null values, data types, range validation.

Memory Trick: IF = Decision maker

Revision: Used when program needs choices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛫 Topic 2: Nested If

Comic Story: Airport Security
First verify passport, then verify ticket.

What It Is:
Condition inside another condition.

Coding Example - Loan eligibility:
age = 25
salary = 40000

if age > 18:
    if salary > 30000:
        print('Approved')

Coding Challenge:
Check student pass and scholarship eligibility
(Pass: marks >= 40, Scholarship: marks >= 90)

Hint: Use two conditions

Solution:
marks = 92

if marks >= 40:
    print('Pass')
    if marks >= 90:
        print('Scholarship Eligible')

Memory Trick: Nested = Check inside check

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👨🏫 Topic 3: For Loop

Comic Story: Attendance Teacher
Teacher checks every student one by one.

What It Is:
Used for fixed repetition.

Interview Q&A:
Q: When do we use for loop?
A: When iteration count is known.

Coding Example 1 - Print numbers 1 to 5:
for i in range(1, 6):
    print(i)

Coding Example 2 - Loop through names list:
names = ['Ankit', 'Rahul']
for i in names:
    print(i)

Coding Challenge:
Print all even numbers from 1 to 20

Hint: Use range + modulus

Solution:
for i in range(1, 21):
    if i % 2 == 0:
        print(i)

Quiz:
Q: Best loop for fixed iterations?
A: For Loop

Memory Trick: FOR = Fixed repetition

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏧 Topic 4: While Loop

Comic Story: Retry ATM Transaction
Keep trying until transaction succeeds.

What It Is:
Runs until condition becomes false.

Coding Example - Print numbers 1 to 5:
i = 1
while i <= 5:
    print(i)
    i += 1

Coding Challenge:
Create password retry system (max 3 attempts)

Hint: Use counter variable

Solution:
attempts = 0
max_attempts = 3
correct_password = 'python123'

while attempts < max_attempts:
    password = input('Enter password: ')
    if password == correct_password:
        print('Login successful')
        break
    else:
        attempts += 1
        print(f'Wrong password. {max_attempts - attempts} attempts left')

if attempts == max_attempts:
    print('Account locked')

Interview Question:
Where do you use while loop in production?
Answer: Retry logic for API calls, polling for job status, continuous monitoring.

Memory Trick: WHILE = Wait until condition fails

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 Topic 5: Break Continue

Comic Story: School Exam
Skip hard questions, stop exam when time ends.

What It Is:
Break stops loop, continue skips iteration.

Coding Example 1 - Stop at number 5:
for i in range(10):
    if i == 5:
        break
    print(i)  # Prints 0,1,2,3,4

Coding Example 2 - Skip number 3:
for i in range(5):
    if i == 3:
        continue
    print(i)  # Prints 0,1,2,4

Coding Challenge:
Skip negative numbers in list

Hint: Use continue statement

Solution:
numbers = [10, -5, 20, -3, 30, -1, 40]

for num in numbers:
    if num < 0:
        continue
    print(num)  # Prints only positive numbers

Quiz:
Q: Which statement stops loop completely?
A: Break

Memory Trick: Break = Stop | Continue = Skip

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Top Interview Questions:

1. Difference between for and while loop?
   Answer: For loop is used when iterations are known (for i in range(10)).
   While loop is used when condition-based (while count < 10, retry logic).

2. What causes infinite loop?
   Answer: While loop without proper exit condition or forgetting to update counter.
   Example: while True: print('Forever') - runs forever.

3. Where are loops used in ETL pipelines?
   Answer: Processing multiple files from S3, validating records, retry failed operations,
   batch data transformation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Usage:

Used in AWS Glue ETL jobs for looping through files in S3 buckets.

Example:
import boto3

s3 = boto3.client('s3')
bucket = 'my-data-bucket'

# List all files
response = s3.list_objects_v2(Bucket=bucket)

# Loop through each file
for obj in response['Contents']:
    file_key = obj['Key']
    
    # Validate file
    if not file_key.endswith('.csv'):
        continue  # Skip non-CSV files
    
    # Process file
    print(f'Processing {file_key}')
    
    # Stop if critical error
    if error_occurred:
        break

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Revision Formula:

Logic Formula:
Decision → Repeat → Skip → Stop

🚦 Decision = If/Else
🔄 Repeat = For/While
⏭️ Skip = Continue
⏹️ Stop = Break

Master these 4 concepts → Build any automation logic! 🚀`,

    types: `🔁 Conditional Statements + Loops - Quick Reference

🚦 If/Else:
if condition:
    # code
else:
    # alternative

🔀 Elif:
if condition1:
    # code
elif condition2:
    # code
else:
    # default

🔄 For Loop:
for i in range(5):
    print(i)

for item in list:
    print(item)

⏳ While Loop:
while condition:
    # code
    # update condition!

⏹️ Break:
for i in range(10):
    if i == 5:
        break

⏭️ Continue:
for i in range(5):
    if i == 2:
        continue
    print(i)

🔀 Nested If:
if condition1:
    if condition2:
        # code`,

    qa: [
      {
        q: "What is if-else statement?",
        a: "If-else is a conditional statement that executes code based on whether condition is True or False. Example: if salary > 50000: print('High') else: print('Low'). Used for decision making in programs."
      },
      {
        q: "Difference between for loop and while loop?",
        a: "For loop: Used when iterations are known (for i in range(5)). While loop: Used when iterations depend on condition (while count < 10). For is preferred when iterating over sequences, while for retry logic."
      },
      {
        q: "What is nested if?",
        a: "Nested if is an if statement inside another if statement. Used for multi-level validation. Example: if age > 18: if salary > 30000: print('Eligible'). Can be replaced with 'and' operator for simpler cases."
      },
      {
        q: "What is break statement?",
        a: "Break statement exits the loop completely. Example: for i in range(10): if i == 5: break. Used when you want to stop loop early (error found, target reached, file missing)."
      },
      {
        q: "What is continue statement?",
        a: "Continue statement skips current iteration and moves to next. Example: for i in range(5): if i == 2: continue. Used to skip invalid records, cancelled orders, or bad data."
      },
      {
        q: "What is elif?",
        a: "Elif (else if) checks additional conditions when previous if is false. Example: if age < 18: print('Minor') elif age < 60: print('Adult') else: print('Senior'). Avoids multiple nested if statements."
      },
      {
        q: "What causes infinite loop?",
        a: "Infinite loop occurs when while condition never becomes false. Example: while True: print('Forever'). Always ensure condition is updated inside loop: while count < 10: count += 1."
      },
      {
        q: "When to use for vs while?",
        a: "Use for when: iterating over list, range, known iterations. Use while when: retry logic, polling, condition-based repetition, unknown iterations. For is more common in data processing."
      },
      {
        q: "What is range() function?",
        a: "range() generates sequence of numbers. range(5) = 0,1,2,3,4. range(1,6) = 1,2,3,4,5. range(0,10,2) = 0,2,4,6,8 (step 2). Used with for loops for iterations."
      },
      {
        q: "Can you use break in nested loops?",
        a: "Yes, but break only exits the innermost loop. To exit all loops, use flag variable or function return. Example: for i in range(5): for j in range(5): if condition: break (exits inner loop only)."
      }
    ],

    coding: {
      title: "Conditional Statements and Loops - Coding Challenges",
      scenario: "Practice decision making and repetition logic with real-world problems",
      question: "Write a program to check if a number is even or odd",
      input: "num = 10",
      expectedOutput: "Even",
      hint: "Use modulus operator (%) to check if number is divisible by 2",
      solution: "num = 10\nif num % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')",
      note: "Modulus operator (%) returns remainder after division. If num % 2 == 0, number is even.",
      thinkingApproach: [
        "Understand the problem: Check if number is divisible by 2",
        "Use modulus operator to get remainder",
        "If remainder is 0, number is even",
        "Otherwise, number is odd"
      ],
      questions: [
        {
          q: "1. Check whether a number is even or odd",
          answer: "num = 10\nif num % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')"
        },
        {
          q: "2. Check voting eligibility (age >= 18)",
          answer: "age = 20\nif age >= 18:\n    print('Eligible')\nelse:\n    print('Not Eligible')"
        },
        {
          q: "3. Check student pass and scholarship eligibility (Pass: marks >= 40, Scholarship: marks >= 90)",
          answer: "marks = 92\n\nif marks >= 40:\n    print('Pass')\n    if marks >= 90:\n        print('Scholarship Eligible')"
        },
        {
          q: "4. Print numbers from 1 to 5 using for loop",
          answer: "for i in range(1, 6):\n    print(i)"
        },
        {
          q: "5. Loop through names list",
          answer: "names = ['Ankit', 'Rahul', 'Priya']\nfor name in names:\n    print(name)"
        },
        {
          q: "6. Print all even numbers from 1 to 20",
          answer: "for i in range(1, 21):\n    if i % 2 == 0:\n        print(i)"
        },
        {
          q: "7. Print numbers 1 to 5 using while loop",
          answer: "i = 1\nwhile i <= 5:\n    print(i)\n    i += 1"
        },
        {
          q: "8. Create password retry system (max 3 attempts)",
          answer: "attempts = 0\nmax_attempts = 3\ncorrect_password = 'python123'\n\nwhile attempts < max_attempts:\n    password = input('Enter password: ')\n    if password == correct_password:\n        print('Login successful')\n        break\n    else:\n        attempts += 1\n        print(f'Wrong password. {max_attempts - attempts} attempts left')\n\nif attempts == max_attempts:\n    print('Account locked')"
        },
        {
          q: "9. Stop loop at number 5 using break",
          answer: "for i in range(10):\n    if i == 5:\n        break\n    print(i)  # Prints 0,1,2,3,4"
        },
        {
          q: "10. Skip number 3 using continue",
          answer: "for i in range(5):\n    if i == 3:\n        continue\n    print(i)  # Prints 0,1,2,4"
        },
        {
          q: "11. Skip negative numbers in list",
          answer: "numbers = [10, -5, 20, -3, 30, -1, 40]\n\nfor num in numbers:\n    if num < 0:\n        continue\n    print(num)  # Prints only positive numbers"
        },
        {
          q: "12. Print multiplication table of 5",
          answer: "for i in range(1, 11):\n    print(f'5 x {i} = {5 * i}')"
        }
      ]
    },

    quiz: [
      { q: "Which statement helps in decision making?", options: ["For Loop", "If Else", "While Loop", "Break"], answer: 1 },
      { q: "Best loop for fixed iterations?", options: ["While Loop", "For Loop", "If Else", "Continue"], answer: 1 },
      { q: "Which statement stops loop completely?", options: ["Continue", "Break", "If", "While"], answer: 1 },
      { q: "Nested if means?", options: ["Loop inside loop", "Condition inside condition", "Function inside function", "List inside list"], answer: 1 },
      { q: "When to use for loop?", options: ["Unknown iterations", "Known iterations", "Never", "Always"], answer: 1 },
      { q: "When to use while loop?", options: ["Fixed iterations", "Condition-based iterations", "Never", "Only with break"], answer: 1 },
      { q: "What does continue do?", options: ["Stops loop", "Skips current iteration", "Restarts loop", "Nothing"], answer: 1 },
      { q: "What causes infinite loop?", options: ["For loop", "While without exit condition", "If else", "Break statement"], answer: 1 },
      { q: "Which is used for retry logic?", options: ["For loop", "While loop", "If else", "Break"], answer: 1 },
      { q: "range(1, 6) generates?", options: ["0-5", "1-6", "1-5", "0-6"], answer: 2 }
    ],

    interview: "Conditional Statements and Loops are fundamental for logic building in coding interviews and real-world automation projects. If-else makes decisions based on conditions (if age >= 18: eligible). Used for validation, eligibility checks, data validation. Comic: Movie ticket entry - security checks age. Nested if validates multiple levels (if age > 18: if salary > 30000: approved). Comic: Airport security - verify passport then ticket. For loop iterates when count is known (for i in range(1,6), for name in names). Used for batch file processing, looping through records. Comic: Attendance teacher checks each student. While loop runs until condition fails (while i <= 5, retry ATM transaction). Used for retry logic, polling, continuous monitoring. Comic: Keep trying until transaction succeeds. Break stops loop completely (stop at number 5). Continue skips current iteration (skip number 3). Comic: School exam - skip hard questions, stop when time ends. Top interview questions: Difference between for and while? For=known iterations, While=condition-based. What causes infinite loop? While without exit condition. Where used in ETL? Processing S3 files, validating records, retry operations. Real project: AWS Glue loops through S3 bucket files, skips non-CSV, stops on critical error. Memory tricks: IF=Decision maker, FOR=Fixed repetition, Break=Stop, Continue=Skip. Final formula: Decision → Repeat → Skip → Stop. Master these 4 concepts for automation logic.",

    memory: `🔁 Conditional Statements and Loops - Memory Map

🎬 If Else = Decision Maker
Comic: Movie ticket entry
age = 20
if age >= 18:
    print('Eligible')
else:
    print('Not Eligible')
Memory: IF = Decision maker

🛫 Nested If = Check Inside Check
Comic: Airport security
if age > 18:
    if salary > 30000:
        print('Approved')
Memory: Nested = Multi-level validation

👨🏫 For Loop = Fixed Repetition
Comic: Attendance teacher
for i in range(1, 6):
    print(i)
names = ['Ankit', 'Rahul']
for name in names:
    print(name)
Memory: FOR = Fixed repetition

🏧 While Loop = Retry Until Success
Comic: ATM retry
i = 1
while i <= 5:
    print(i)
    i += 1
Memory: WHILE = Wait until condition fails

📝 Break & Continue = Stop & Skip
Comic: School exam
# Break = Stop completely
for i in range(10):
    if i == 5:
        break

# Continue = Skip iteration
for i in range(5):
    if i == 3:
        continue
Memory: Break = Stop | Continue = Skip

🎯 Logic Formula:
Decision → Repeat → Skip → Stop

📊 Top Interview Questions:
1. For vs While? For=known, While=condition
2. Infinite loop? While without exit
3. ETL usage? S3 file processing

✅ Real Usage:
AWS Glue ETL jobs
S3 bucket file processing
Retry logic
Validation
Automation scripts

🔑 Quick Reference:
If Else → Decision making
Nested If → Multi-level check
For Loop → Known iterations
While Loop → Condition-based
Break → Exit loop
Continue → Skip iteration`,

    revision: "Conditional Statements and Loops: Logic building for interviews and automation. If-else for decisions (movie ticket entry - age check). Nested if for multi-level validation (airport security - passport then ticket). For loop for fixed iterations (attendance teacher checks each student). While loop for condition-based (ATM retry until success). Break stops loop (school exam time over). Continue skips iteration (skip hard questions). Top questions: For vs While (For=known, While=condition), Infinite loop (while without exit), ETL usage (S3 file processing). Real project: AWS Glue loops through S3 files, skips non-CSV, stops on error. Memory: IF=Decision, FOR=Fixed, Break=Stop, Continue=Skip. Formula: Decision → Repeat → Skip → Stop. Master these 4 for automation logic."
  },
  // ============================================================================
  // MODULE 3: STRINGS
  // ============================================================================

  "strings": {
    title: "Strings",
    icon: "📝",
    difficulty: "Foundation",
    duration: "70 min",
    description: "Text manipulation techniques required for interviews, log parsing, API processing, and real-world data cleaning",

    comic: `🍰 Cake Cutting (Slicing)

Baker: "I have a big cake: ANKITKAMBLE"
Customer: "I only want first 5 letters"
Baker: *Cuts cake* "Here's ANKIT"

💡 In Python:
name = 'ANKITKAMBLE'
print(name[0:5])  # ANKIT

You only cut the portion you need! ✂️

🧺 Cleaning Dirty Clothes (String Methods)

Mom: "This shirt has spaces and dirt!"
Shirt: "  hello  "

After Washing:
✅ Remove spaces → strip()
✅ Make uppercase → upper()
✅ Make lowercase → lower()

Result: "HELLO" or "hello"

Raw strings need cleaning too! 🧼

🔧 Replacing Broken Parts (Replace)

Mechanic: "This car has broken_parts"
text = 'hello world'

Replace spaces with underscore:
print(text.replace(' ', '_'))  # hello_world

Swap unwanted text with correct text! 🔄

🍕 Pizza Slices (Split)

Pizza: "A,B,C" (one big string)
Customer: "I want separate slices!"

data = 'A,B,C'
print(data.split(','))  # ['A', 'B', 'C']

Break large string into smaller pieces! 🍕

🚔 Police Scanner (Regex)

Police: "Find all numbers in this text!"
text = 'Order123 and Order456'

import re
print(re.findall('\\d+', text))  # ['123', '456']

Find specific patterns quickly! 🔍

🎯 Aha Moment:
Strings are everywhere in data engineering!
Log files, APIs, CSV files - all need string manipulation! 🚀`,

    deepDive: `📝 Strings - Complete Guide

📌 Module Description:
This module teaches text manipulation techniques required for interviews, log parsing, API processing, and real-world data cleaning.

Category: Data Cleaning and Parsing
Importance: Very High

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍰 Topic 1: Slicing

Comic Story: Cake Cutting
You only cut the portion you need.

What It Is:
Extract specific part of a string using indexes.

Interview Q&A:
Q: How do you extract part of a string?
A: Using slicing with start:end indexes.

Coding Example - Extract first name:
name = 'AnkitKamble'
print(name[0:5])  # Ankit

Coding Challenge:
Extract last 4 digits from account number

Hint: Use negative indexing

Solution:
account = '1234567890'
print(account[-4:])  # 7890

Quiz:
Q: What does string[0:3] return?
A: First three characters

Memory Trick: Slice = Cut

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧺 Topic 2: String Methods

Comic Story: Cleaning Dirty Clothes
Raw strings need cleaning too.

What It Is:
Built-in methods to manipulate strings.

Important Methods:
- upper() - Convert to uppercase
- lower() - Convert to lowercase
- strip() - Remove leading/trailing spaces
- capitalize() - Capitalize first letter

Coding Example - Remove spaces:
text = ' hello '
print(text.strip())  # hello

Coding Challenge:
Convert username to lowercase

Hint: Use lower() method

Solution:
username = 'ANKIT'
print(username.lower())  # ankit

Memory Trick: Methods = Clean text

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 Topic 3: Replace

Comic Story: Replacing Broken Parts
Swap unwanted text with correct text.

What It Is:
Replaces existing characters or words.

Coding Example - Replace spaces with underscore:
text = 'hello world'
print(text.replace(' ', '_'))  # hello_world

Coding Challenge:
Replace all dashes in phone number

Hint: Use replace(old, new)

Solution:
phone = '123-456-7890'
print(phone.replace('-', ''))  # 1234567890

Memory Trick: Replace = Swap

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍕 Topic 4: Split

Comic Story: Pizza Slices
Break large string into smaller pieces.

What It Is:
Converts string into list.

Coding Example - Split CSV values:
data = 'A,B,C'
print(data.split(','))  # ['A', 'B', 'C']

Coding Challenge:
Split email domain

Hint: Split using @ symbol

Solution:
email = 'ankit@gmail.com'
parts = email.split('@')
print(parts[1])  # gmail.com

Quiz:
Q: What does split return?
A: List

Memory Trick: Split = Break into pieces

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚔 Topic 5: Regex Basics

Comic Story: Police Scanner
Find specific patterns quickly.

What It Is:
Used to search patterns inside text.

Coding Example - Find digits in string:
import re
text = 'Order123'
print(re.findall('\\d+', text))  # ['123']

Coding Challenge:
Extract all email IDs from text

Hint: Use regex pattern matching

Solution:
import re
text = 'Contact: ankit@gmail.com or rahul@yahoo.com'
emails = re.findall(r'\\S+@\\S+', text)
print(emails)  # ['ankit@gmail.com', 'rahul@yahoo.com']

Interview Question:
Where is regex used in real projects?
Answer: Log parsing, data validation, pattern extraction, email/phone validation.

Memory Trick: Regex = Pattern hunter

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Top Interview Questions:

1. Reverse string program
   Answer: text[::-1] or ''.join(reversed(text))

2. Palindrome string
   Answer: Check if text == text[::-1]

3. Difference between split and replace?
   Answer: Split breaks string into list. Replace swaps characters/words.

4. Regex real-world use cases
   Answer: Log parsing, email validation, phone number extraction, data cleaning.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Usage:

Used for log parsing before loading files into S3 and transforming through AWS Glue.

Example:
# Parse log file
log = '2024-01-15 ERROR: Connection failed'

# Extract date
date = log[0:10]  # 2024-01-15

# Extract level
level = log.split()[1]  # ERROR:

# Clean level
level = level.replace(':', '')  # ERROR

# Extract message
message = log.split('ERROR:')[1].strip()  # Connection failed

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Revision Formula:

String Flow:
Extract → Clean → Replace → Split → Pattern Match

✂️ Extract = Slicing
🧼 Clean = String Methods
🔄 Replace = Replace()
🍕 Split = Split()
🔍 Pattern Match = Regex

Master these 5 → Handle any text data! 🚀`,

    types: `📝 Strings - Quick Reference

✂️ Slicing:
text = 'Hello'
text[0:3]    # Hel
text[:3]     # Hel
text[2:]     # llo
text[-3:]    # llo
text[::-1]   # olleH (reverse)

🧼 String Methods:
text.upper()       # HELLO
text.lower()       # hello
text.strip()       # Remove spaces
text.capitalize()  # Hello
text.title()       # Hello World
text.count('l')    # Count occurrences
text.find('l')     # Find position
text.startswith('H')  # True/False
text.endswith('o')    # True/False

🔄 Replace:
text.replace('old', 'new')

🍕 Split:
text.split(',')    # Split by comma
text.split()       # Split by space

🔗 Join:
','.join(['A','B','C'])  # A,B,C

🔍 Regex:
import re
re.findall(pattern, text)
re.search(pattern, text)
re.match(pattern, text)
re.sub(old, new, text)`,

    qa: [
      {
        q: "What is string slicing?",
        a: "String slicing extracts part of a string using indexes. Syntax: string[start:end]. Example: name='Ankit', name[0:3] returns 'Ank'. Negative indexing works from end: name[-3:] returns 'kit'."
      },
      {
        q: "What does strip() method do?",
        a: "strip() removes leading and trailing whitespace from string. Example: text=' hello '.strip() returns 'hello'. Also has lstrip() (left) and rstrip() (right) variants."
      },
      {
        q: "Difference between split() and replace()?",
        a: "split() breaks string into list based on delimiter. replace() swaps characters/words. Example: 'a,b'.split(',') returns ['a','b']. 'hello'.replace('l','x') returns 'hexxo'."
      },
      {
        q: "How to reverse a string?",
        a: "Use slicing with step -1: text[::-1]. Example: 'hello'[::-1] returns 'olleh'. Alternative: ''.join(reversed('hello'))."
      },
      {
        q: "What is regex used for?",
        a: "Regex (Regular Expression) finds patterns in text. Used for: email validation, phone extraction, log parsing, data cleaning. Example: re.findall('\\d+', 'Order123') returns ['123']."
      },
      {
        q: "How to check if string contains substring?",
        a: "Use 'in' operator: 'hello' in 'hello world' returns True. Or use find() method: text.find('hello') returns index or -1 if not found."
      },
      {
        q: "What does upper() and lower() do?",
        a: "upper() converts string to uppercase. lower() converts to lowercase. Example: 'Hello'.upper() returns 'HELLO'. 'Hello'.lower() returns 'hello'. Used for case-insensitive comparisons."
      },
      {
        q: "How to split email into username and domain?",
        a: "Use split('@'): email='ankit@gmail.com', parts=email.split('@'), username=parts[0], domain=parts[1]. Returns ['ankit', 'gmail.com']."
      },
      {
        q: "What is the difference between find() and index()?",
        a: "Both find position of substring. find() returns -1 if not found. index() raises ValueError if not found. Example: 'hello'.find('x') returns -1, 'hello'.index('x') raises error."
      },
      {
        q: "How to remove all spaces from string?",
        a: "Use replace(' ', ''): text='hello world'.replace(' ', '') returns 'helloworld'. Or use ''.join(text.split()) for all whitespace."
      }
    ],

    coding: {
      title: "Strings - Coding Challenges",
      scenario: "Practice text manipulation for data cleaning and parsing",
      question: "Extract last 4 digits from account number",
      input: "account = '1234567890'",
      expectedOutput: "7890",
      hint: "Use negative indexing with slicing",
      solution: "account = '1234567890'\\nprint(account[-4:])",
      note: "Negative indexing starts from end. -4: means last 4 characters.",
      thinkingApproach: [
        "Understand the problem: Get last 4 characters",
        "Use negative indexing to count from end",
        "Slice from -4 to end using [-4:]",
        "Print the result"
      ],
      questions: [
        {
          q: "1. Extract last 4 digits from account number",
          answer: "account = '1234567890'\\nprint(account[-4:])"
        },
        {
          q: "2. Convert username to lowercase",
          answer: "username = 'ANKIT'\\nprint(username.lower())"
        },
        {
          q: "3. Remove spaces from text",
          answer: "text = ' hello '\\nprint(text.strip())"
        },
        {
          q: "4. Replace spaces with underscore",
          answer: "text = 'hello world'\\nprint(text.replace(' ', '_'))"
        },
        {
          q: "5. Split CSV values",
          answer: "data = 'A,B,C'\\nprint(data.split(','))"
        },
        {
          q: "6. Extract email domain",
          answer: "email = 'ankit@gmail.com'\\nparts = email.split('@')\\nprint(parts[1])"
        },
        {
          q: "7. Reverse a string",
          answer: "text = 'hello'\\nprint(text[::-1])"
        },
        {
          q: "8. Check if string is palindrome",
          answer: "text = 'madam'\\nif text == text[::-1]:\\n    print('Palindrome')\\nelse:\\n    print('Not Palindrome')"
        },
        {
          q: "9. Find all digits in string using regex",
          answer: "import re\\ntext = 'Order123'\\nprint(re.findall('\\\\d+', text))"
        },
        {
          q: "10. Replace all dashes in phone number",
          answer: "phone = '123-456-7890'\\nprint(phone.replace('-', ''))"
        }
      ]
    },

    quiz: [
      { q: "What does string[0:3] return?", options: ["Last 3 chars", "First 3 chars", "All chars", "Nothing"], answer: 1 },
      { q: "What does split return?", options: ["String", "List", "Integer", "Boolean"], answer: 1 },
      { q: "Which method removes spaces?", options: ["remove()", "strip()", "delete()", "clean()"], answer: 1 },
      { q: "How to reverse string?", options: ["reverse()", "[::-1]", "flip()", "back()"], answer: 1 },
      { q: "What does upper() do?", options: ["Lowercase", "Uppercase", "Capitalize", "Nothing"], answer: 1 },
      { q: "Replace method syntax?", options: ["replace(new,old)", "replace(old,new)", "swap(old,new)", "change(old,new)"], answer: 1 },
      { q: "Regex is used for?", options: ["Math", "Pattern matching", "Loops", "Variables"], answer: 1 },
      { q: "What does lower() return?", options: ["Uppercase", "Lowercase", "Numbers", "List"], answer: 1 },
      { q: "Negative indexing starts from?", options: ["Start", "End", "Middle", "Random"], answer: 1 },
      { q: "Split email by?", options: [".", "@", "#", "/"], answer: 1 }
    ],

    interview: "Strings are essential for data cleaning and parsing in interviews and real-world projects. Slicing extracts parts using indexes (name[0:5] gets first 5 chars, account[-4:] gets last 4). Comic: Cake cutting - cut only what you need. String methods clean text: strip() removes spaces, upper()/lower() change case, capitalize() capitalizes first letter. Comic: Cleaning dirty clothes. Replace swaps text (text.replace(' ','_') replaces spaces). Comic: Replacing broken parts. Split breaks string into list (data.split(',') splits CSV). Comic: Pizza slices. Regex finds patterns (re.findall('\\d+',text) finds digits). Comic: Police scanner. Top questions: Reverse string (text[::-1]), Palindrome (text==text[::-1]), Split vs Replace (split breaks into list, replace swaps text), Regex use cases (log parsing, email validation, data cleaning). Real usage: Parse log files before loading to S3, transform through AWS Glue. Extract date, level, message from logs. Memory: Slice=Cut, Methods=Clean, Replace=Swap, Split=Break, Regex=Pattern hunter. Formula: Extract → Clean → Replace → Split → Pattern Match. Master text manipulation for data engineering.",

    memory: `📝 Strings - Memory Map

🍰 Slicing = Cut
Comic: Cake cutting
name = 'ANKITKAMBLE'
name[0:5]    # ANKIT
name[-4:]    # MBLE
name[::-1]   # ELBMAKTIKNA (reverse)
Memory: Slice = Cut

🧺 String Methods = Clean
Comic: Cleaning clothes
text = ' hello '
text.strip()      # hello
text.upper()      # HELLO
text.lower()      # hello
text.capitalize() # Hello
Memory: Methods = Clean text

🔧 Replace = Swap
Comic: Replacing parts
text = 'hello world'
text.replace(' ', '_')  # hello_world
Memory: Replace = Swap

🍕 Split = Break
Comic: Pizza slices
data = 'A,B,C'
data.split(',')  # ['A', 'B', 'C']
Memory: Split = Break into pieces

🚔 Regex = Pattern Hunter
Comic: Police scanner
import re
text = 'Order123'
re.findall('\\d+', text)  # ['123']
Memory: Regex = Pattern hunter

🎯 String Flow Formula:
Extract → Clean → Replace → Split → Pattern Match

📊 Top Interview Questions:
1. Reverse string? text[::-1]
2. Palindrome? text == text[::-1]
3. Split vs Replace? Split=list, Replace=swap
4. Regex usage? Log parsing, validation

✅ Real Usage:
Log parsing
API data cleaning
CSV processing
Email validation
Phone extraction

🔑 Quick Reference:
Slicing → Extract parts
Methods → Clean text
Replace → Swap text
Split → Break into list
Regex → Find patterns`,

    revision: "Strings: Text manipulation for data cleaning and parsing. Slicing extracts parts (name[0:5] first 5, account[-4:] last 4). Comic: Cake cutting. Methods clean text: strip() removes spaces, upper()/lower() change case. Comic: Cleaning clothes. Replace swaps text (replace(' ','_')). Comic: Replacing parts. Split breaks into list (split(',')). Comic: Pizza slices. Regex finds patterns (re.findall('\\d+',text)). Comic: Police scanner. Top questions: Reverse ([::-1]), Palindrome (text==text[::-1]), Split vs Replace, Regex uses. Real usage: Log parsing for S3/Glue, extract date/level/message. Memory: Slice=Cut, Methods=Clean, Replace=Swap, Split=Break, Regex=Pattern. Formula: Extract → Clean → Replace → Split → Pattern Match. Master text manipulation for data engineering."
  },

  // ============================================================================
  // MODULE 4: LISTS DICTIONARY TUPLES SETS
  // ============================================================================

  "collections": {
    title: "Lists Dictionary Tuples Sets",
    icon: "📦",
    difficulty: "Foundation",
    duration: "80 min",
    description: "Python collection structures used heavily in interviews, ETL pipelines, APIs, and automation workflows",

    comic: `🛒 Shopping Cart (Lists)

Customer: "I want to add items to my cart"
Cart: []

*Adds Apple* → ['Apple']
*Adds Banana* → ['Apple', 'Banana']
*Removes Apple* → ['Banana']
*Adds Orange* → ['Banana', 'Orange']

You keep adding and removing items from your cart! 🛒

📚 School Register (Dictionary)

Teacher: "Every student has roll number and name"

Register = {
  1: 'Ankit',
  2: 'Rahul',
  3: 'Priya'
}

Teacher: "Who is roll number 2?"
Register[2] → 'Rahul'

Key-value pairs make lookup fast! 📚

🎫 Train Seat Number (Tuples)

Ticket: Seat (A1, 23)
Passenger: "Can I change my seat?"
Railway: "No! Once assigned, seat doesn't change"

location = (18.5, 73.8)  # Coordinates fixed!

Tuples are immutable! 🎫

🎭 VIP Guest Entry (Sets)

Bouncer: "Only unique guests allowed!"
Guest List: {1, 2, 3, 2, 1}
Actual Entry: {1, 2, 3}  # Duplicates removed!

nums = [1, 2, 2, 3]
unique = set(nums)  # {1, 2, 3}

Sets store unique values only! 🎭

⚡ Shortcut Route (List Comprehension)

Normal Route (Loop):
result = []
for x in [1,2,3]:
    result.append(x*x)

Shortcut Route (Comprehension):
result = [x*x for x in [1,2,3]]  # [1, 4, 9]

Reach destination faster! ⚡

🎯 Aha Moment:
Collections are the backbone of data engineering!
APIs return JSON (dictionaries), ETL processes lists! 🚀`,

    deepDive: `📦 Lists Dictionary Tuples Sets - Complete Guide

📌 Module Description:
This module teaches Python collection structures used heavily in interviews, ETL pipelines, APIs, and automation workflows.

Category: Python Collections
Importance: Extremely High

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛒 Topic 1: Lists

Comic Story: Shopping Cart
You keep adding and removing items from your cart.

What It Is:
Ordered collection that allows duplicates and can be modified.

CRUD Operations:
- append() - Add item at end
- remove() - Remove specific item
- insert() - Add item at position
- pop() - Remove and return item
- Update values - Modify existing items

Interview Q&A:
Q: Why are lists widely used?
A: Because they are flexible and support dynamic updates.

Coding Example 1 - Add employee names:
employees = ['Ankit', 'Rahul']
employees.append('Amit')
print(employees)  # ['Ankit', 'Rahul', 'Amit']

Coding Example 2 - Remove duplicate values manually:
nums = [1, 2, 3, 2]
print(nums)  # [1, 2, 3, 2]

Coding Challenge:
Find largest number in list

Hint: Loop through list or use max()

Solution:
nums = [10, 50, 30, 90, 20]
largest = max(nums)
print(largest)  # 90

# Or using loop
largest = nums[0]
for num in nums:
    if num > largest:
        largest = num
print(largest)

Quiz:
Q: Are lists mutable?
A: Yes

Memory Trick: List = Flexible box

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 Topic 2: Dictionary

Comic Story: School Register
Every student has roll number and name.

What It Is:
Stores key-value pairs.

Dictionary Methods:
- get() - Get value by key
- keys() - Get all keys
- values() - Get all values
- items() - Get key-value pairs
- update() - Update dictionary

Coding Example - Store employee data:
emp = {'name': 'Ankit', 'salary': 50000}
print(emp['name'])  # Ankit

Coding Challenge:
Count frequency of characters in string

Hint: Use dictionary counters

Solution:
text = 'hello'
freq = {}

for char in text:
    if char in freq:
        freq[char] += 1
    else:
        freq[char] = 1

print(freq)  # {'h': 1, 'e': 1, 'l': 2, 'o': 1}

Interview Question:
Why are dictionaries used in API handling?
Answer: APIs return JSON data which maps to Python dictionaries. Fast key-based lookup.

Memory Trick: Dictionary = Key-value map

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎫 Topic 3: Tuples

Comic Story: Train Seat Number
Once assigned, seat doesn't change.

What It Is:
Ordered collection but immutable.

Coding Example - Store fixed coordinates:
location = (18.5, 73.8)
print(location[0])  # 18.5

Coding Challenge:
Convert tuple into list

Hint: Use list() conversion

Solution:
my_tuple = (1, 2, 3)
my_list = list(my_tuple)
print(my_list)  # [1, 2, 3]

Quiz:
Q: Can tuples be modified?
A: No

Memory Trick: Tuple = Fixed container

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎭 Topic 4: Sets

Comic Story: VIP Guest Entry
Only unique guests allowed.

What It Is:
Stores unique values only.

Coding Example - Remove duplicates:
nums = [1, 2, 2, 3]
print(set(nums))  # {1, 2, 3}

Coding Challenge:
Find common values between two lists

Hint: Use set intersection

Solution:
list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]

common = set(list1) & set(list2)
print(common)  # {3, 4}

Memory Trick: Set = Unique values

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ Topic 5: List Comprehension

Comic Story: Shortcut Route
Reach destination faster.

What It Is:
Compact way to create lists.

Coding Example - Square numbers:
nums = [1, 2, 3]
result = [x*x for x in nums]
print(result)  # [1, 4, 9]

Coding Challenge:
Create list of even numbers from 1 to 20

Hint: Use condition inside comprehension

Solution:
evens = [x for x in range(1, 21) if x % 2 == 0]
print(evens)  # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

Interview Question:
Why is list comprehension popular in interviews?
Answer: More concise, readable, and often faster than traditional loops.

Memory Trick: Comprehension = Smart shortcut

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Top Interview Questions:

1. List vs Tuple
   Answer: List is mutable (can change), Tuple is immutable (cannot change).
   List uses [], Tuple uses ().

2. Set vs List
   Answer: Set stores unique values, List allows duplicates.
   Set is unordered, List is ordered.

3. Dictionary frequency problem
   Answer: Use dictionary to count character/word frequency in text.

4. Remove duplicates
   Answer: Convert list to set: unique = list(set(my_list))

5. List comprehension optimization
   Answer: More concise and often faster than traditional for loops.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Usage:

Used heavily in AWS Lambda API processing and AWS Glue ETL pipelines.

Example:
# AWS Lambda - Process API data
def lambda_handler(event, context):
    # Dictionary from API
    user_data = event['body']
    
    # List of users
    users = []
    for record in user_data:
        users.append(record['name'])
    
    # Remove duplicates using set
    unique_users = list(set(users))
    
    # List comprehension for filtering
    active_users = [u for u in unique_users if u['status'] == 'active']
    
    return {
        'statusCode': 200,
        'body': active_users
    }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Revision Formula:

Collections Formula:
List → Dynamic | Dictionary → Key Value | Tuple → Fixed | Set → Unique | Comprehension → Fast

🛒 List = Dynamic (mutable, ordered, duplicates allowed)
📚 Dictionary = Key-Value (fast lookup, JSON mapping)
🎫 Tuple = Fixed (immutable, ordered)
🎭 Set = Unique (no duplicates, unordered)
⚡ Comprehension = Fast (concise list creation)

Master these 5 → Handle any data structure! 🚀`,

    types: `📦 Collections - Quick Reference

🛒 Lists:
my_list = [1, 2, 3]
my_list.append(4)      # Add
my_list.remove(2)      # Remove
my_list.insert(0, 0)   # Insert at position
my_list.pop()          # Remove last
my_list[0] = 10        # Update
len(my_list)           # Length
max(my_list)           # Maximum
min(my_list)           # Minimum
my_list.sort()         # Sort

📚 Dictionary:
my_dict = {'name': 'Ankit', 'age': 25}
my_dict['name']        # Access
my_dict.get('name')    # Safe access
my_dict.keys()         # All keys
my_dict.values()       # All values
my_dict.items()        # Key-value pairs
my_dict['city'] = 'Pune'  # Add/Update
del my_dict['age']     # Delete

🎫 Tuples:
my_tuple = (1, 2, 3)
my_tuple[0]            # Access
len(my_tuple)          # Length
my_tuple.count(2)      # Count occurrences
my_tuple.index(2)      # Find index

🎭 Sets:
my_set = {1, 2, 3}
my_set.add(4)          # Add
my_set.remove(2)       # Remove
set1 & set2            # Intersection
set1 | set2            # Union
set1 - set2            # Difference

⚡ List Comprehension:
[x*x for x in range(5)]              # [0, 1, 4, 9, 16]
[x for x in range(10) if x % 2 == 0] # [0, 2, 4, 6, 8]
[x.upper() for x in ['a','b','c']]   # ['A', 'B', 'C']`,

    qa: [
      {
        q: "What is a list in Python?",
        a: "List is an ordered, mutable collection that allows duplicates. Created with []. Example: nums = [1,2,3]. Supports append(), remove(), insert(), pop(). Used for dynamic data storage."
      },
      {
        q: "Difference between list and tuple?",
        a: "List is mutable (can change), uses []. Tuple is immutable (cannot change), uses (). Example: list=[1,2,3] can be modified, tuple=(1,2,3) cannot. Tuples are faster and safer."
      },
      {
        q: "What is a dictionary?",
        a: "Dictionary stores key-value pairs. Created with {}. Example: user={'name':'Ankit','age':25}. Fast lookup by key. Used for JSON data, API responses, configuration."
      },
      {
        q: "What is a set?",
        a: "Set stores unique values only, unordered. Created with {} or set(). Example: nums={1,2,2,3} becomes {1,2,3}. Used to remove duplicates, find common elements."
      },
      {
        q: "What is list comprehension?",
        a: "Concise way to create lists. Syntax: [expression for item in iterable if condition]. Example: [x*x for x in range(5)] creates [0,1,4,9,16]. Faster than traditional loops."
      },
      {
        q: "How to remove duplicates from list?",
        a: "Convert to set then back to list: unique = list(set(my_list)). Example: list(set([1,2,2,3])) returns [1,2,3]. Note: order may not be preserved."
      },
      {
        q: "How to count character frequency?",
        a: "Use dictionary: freq={}. Loop through string, increment count. Example: for char in 'hello': freq[char]=freq.get(char,0)+1. Result: {'h':1,'e':1,'l':2,'o':1}."
      },
      {
        q: "When to use tuple vs list?",
        a: "Use tuple for fixed data (coordinates, RGB values, database records). Use list for dynamic data (shopping cart, user inputs). Tuples are faster and protect data from modification."
      },
      {
        q: "How to find common elements in two lists?",
        a: "Convert to sets and use intersection: common = set(list1) & set(list2). Example: set([1,2,3]) & set([2,3,4]) returns {2,3}."
      },
      {
        q: "Why are dictionaries used in APIs?",
        a: "APIs return JSON data which maps directly to Python dictionaries. Fast key-based lookup O(1). Example: user_data['name'] instantly retrieves name without looping."
      }
    ],

    coding: {
      title: "Collections - Coding Challenges",
      scenario: "Practice Python collections for data manipulation",
      question: "Find largest number in list",
      input: "nums = [10, 50, 30, 90, 20]",
      expectedOutput: "90",
      hint: "Use max() function or loop through list",
      solution: "nums = [10, 50, 30, 90, 20]\\nprint(max(nums))",
      note: "max() function returns the largest value in the list.",
      thinkingApproach: [
        "Understand the problem: Find maximum value",
        "Option 1: Use built-in max() function",
        "Option 2: Loop and compare each element",
        "Print the result"
      ],
      questions: [
        {
          q: "1. Find largest number in list",
          answer: "nums = [10, 50, 30, 90, 20]\\nprint(max(nums))"
        },
        {
          q: "2. Add employee names to list",
          answer: "employees = ['Ankit', 'Rahul']\\nemployees.append('Amit')\\nprint(employees)"
        },
        {
          q: "3. Remove duplicates from list",
          answer: "nums = [1, 2, 2, 3, 3, 4]\\nunique = list(set(nums))\\nprint(unique)"
        },
        {
          q: "4. Count character frequency using dictionary",
          answer: "text = 'hello'\\nfreq = {}\\nfor char in text:\\n    freq[char] = freq.get(char, 0) + 1\\nprint(freq)"
        },
        {
          q: "5. Store employee data in dictionary",
          answer: "emp = {'name': 'Ankit', 'salary': 50000}\\nprint(emp['name'])"
        },
        {
          q: "6. Convert tuple to list",
          answer: "my_tuple = (1, 2, 3)\\nmy_list = list(my_tuple)\\nprint(my_list)"
        },
        {
          q: "7. Find common elements between two lists",
          answer: "list1 = [1, 2, 3, 4]\\nlist2 = [3, 4, 5, 6]\\ncommon = set(list1) & set(list2)\\nprint(common)"
        },
        {
          q: "8. Create list of even numbers from 1 to 20 using comprehension",
          answer: "evens = [x for x in range(1, 21) if x % 2 == 0]\\nprint(evens)"
        },
        {
          q: "9. Square numbers using list comprehension",
          answer: "nums = [1, 2, 3, 4, 5]\\nsquares = [x*x for x in nums]\\nprint(squares)"
        },
        {
          q: "10. Get all keys from dictionary",
          answer: "emp = {'name': 'Ankit', 'age': 25, 'city': 'Pune'}\\nprint(list(emp.keys()))"
        }
      ]
    },

    quiz: [
      { q: "Are lists mutable?", options: ["No", "Yes", "Sometimes", "Never"], answer: 1 },
      { q: "What does set store?", options: ["Duplicates", "Unique values", "Keys", "Pairs"], answer: 1 },
      { q: "Dictionary stores?", options: ["Values", "Keys", "Key-value pairs", "Lists"], answer: 2 },
      { q: "Can tuples be modified?", options: ["Yes", "No", "Sometimes", "Always"], answer: 1 },
      { q: "List comprehension is?", options: ["Slow", "Fast and concise", "Complex", "Useless"], answer: 1 },
      { q: "How to remove duplicates?", options: ["list()", "set()", "dict()", "tuple()"], answer: 1 },
      { q: "Dictionary lookup is?", options: ["Slow", "Fast O(1)", "Medium", "Very slow"], answer: 1 },
      { q: "List uses?", options: ["()", "[]", "{}", "<>"], answer: 1 },
      { q: "Tuple uses?", options: ["[]", "()", "{}", "<>"], answer: 1 },
      { q: "Set intersection operator?", options: ["+", "-", "&", "|"], answer: 2 }
    ],

    interview: "Lists Dictionary Tuples Sets are Python collections used heavily in interviews, ETL pipelines, and APIs. Lists are mutable, ordered, allow duplicates (shopping cart - add/remove items). Methods: append(), remove(), insert(), pop(). Comic: Shopping cart. Dictionary stores key-value pairs, fast lookup O(1), used for JSON/API data (school register - roll number to name). Methods: get(), keys(), values(), items(). Comic: School register. Tuples are immutable, ordered (train seat - once assigned, doesn't change). Comic: Train seat. Sets store unique values only, unordered (VIP entry - only unique guests). Used to remove duplicates. Comic: VIP guest entry. List comprehension creates lists concisely [x*x for x in nums]. Faster than loops. Comic: Shortcut route. Top questions: List vs Tuple (mutable vs immutable), Set vs List (unique vs duplicates), Dictionary frequency problem, Remove duplicates (set()), List comprehension optimization. Real usage: AWS Lambda processes API data (dictionaries), AWS Glue ETL uses lists for batch processing. Memory: List=Flexible box, Dictionary=Key-value map, Tuple=Fixed container, Set=Unique values, Comprehension=Smart shortcut. Formula: List→Dynamic, Dictionary→Key Value, Tuple→Fixed, Set→Unique, Comprehension→Fast. Master collections for data engineering.",

    memory: `📦 Collections - Memory Map

🛒 Lists = Flexible Box
Comic: Shopping cart
employees = ['Ankit', 'Rahul']
employees.append('Amit')  # Add
employees.remove('Rahul') # Remove
Memory: List = Flexible box

📚 Dictionary = Key-Value Map
Comic: School register
register = {1: 'Ankit', 2: 'Rahul'}
register[2]  # 'Rahul'
Memory: Dictionary = Key-value map

🎫 Tuples = Fixed Container
Comic: Train seat
location = (18.5, 73.8)
# Cannot modify!
Memory: Tuple = Fixed container

🎭 Sets = Unique Values
Comic: VIP guest entry
nums = [1, 2, 2, 3]
unique = set(nums)  # {1, 2, 3}
Memory: Set = Unique values

⚡ List Comprehension = Smart Shortcut
Comic: Shortcut route
squares = [x*x for x in [1,2,3]]  # [1, 4, 9]
Memory: Comprehension = Smart shortcut

🎯 Collections Formula:
List → Dynamic | Dictionary → Key Value | Tuple → Fixed | Set → Unique | Comprehension → Fast

📊 Top Interview Questions:
1. List vs Tuple? Mutable vs Immutable
2. Set vs List? Unique vs Duplicates
3. Dictionary frequency? Count characters
4. Remove duplicates? Use set()
5. List comprehension? Faster than loops

✅ Real Usage:
AWS Lambda API processing
AWS Glue ETL pipelines
JSON data handling
Batch processing
Data deduplication

🔑 Quick Reference:
List → [] → Mutable → Ordered → Duplicates OK
Dictionary → {} → Key-Value → Fast lookup
Tuple → () → Immutable → Ordered
Set → {} → Unique → Unordered
Comprehension → [x for x in ...] → Concise`,

    revision: "Collections: Lists are mutable, ordered, allow duplicates (shopping cart). Methods: append(), remove(), insert(), pop(). Dictionary stores key-value pairs, fast O(1) lookup (school register). Methods: get(), keys(), values(), items(). Tuples are immutable, ordered (train seat). Sets store unique values (VIP entry). Remove duplicates: set(). List comprehension: [x*x for x in nums] - faster than loops (shortcut route). Top questions: List vs Tuple (mutable vs immutable), Set vs List (unique vs duplicates), Dictionary frequency, Remove duplicates, Comprehension optimization. Real usage: AWS Lambda API (dictionaries), AWS Glue ETL (lists). Memory: List=Flexible, Dictionary=Key-value, Tuple=Fixed, Set=Unique, Comprehension=Fast. Formula: List→Dynamic, Dictionary→Key Value, Tuple→Fixed, Set→Unique, Comprehension→Fast. Master collections for data engineering."
  },

  // ============================================================================
  // MODULE 5: FUNCTIONS
  // ============================================================================

  "functions": {
    title: "Functions",
    icon: "⚙️",
    difficulty: "Foundation",
    duration: "75 min",
    description: "Reusable coding logic heavily asked in interviews and used in production systems",

    comic: `🍔 Food Delivery App (Functions Basics)

Customer: "I'm hungry again!"
Instead of cooking every time...
Customer: *Opens app* → Order from same restaurant

def order_food():
    print("Pizza delivered!")

order_food()  # Call anytime!
order_food()  # Reuse!

Function = Reusable machine! ⚙️

🍕 Pizza Order (Parameters)

Customer 1: "I want Margherita"
Customer 2: "I want Pepperoni"
Customer 3: "I want Veggie"

def order_pizza(topping):
    print(f"Pizza with {topping}")

order_pizza("Margherita")
order_pizza("Pepperoni")

Different customers give different toppings! 🍕

🏧 ATM Withdrawal (Return Statement)

Customer: "I want $100"
ATM: *Processes* → Returns $100

def withdraw(amount):
    return amount

money = withdraw(100)
print(money)  # 100

Machine gives money back after request! 🏧

⚡ Shortcut Button (Lambda Functions)

Normal Function:
def square(x):
    return x*x

Lambda (Shortcut):
square = lambda x: x*x

Quick one-click action! ⚡

🛍️ Unlimited Shopping Bag (*args)

Cashier: "How many items?"
Customer: "I don't know... maybe 5, maybe 10!"

def total(*args):
    return sum(args)

total(10, 20, 30)  # 60
total(5, 10)       # 15

Can hold multiple items! 🛍️

📝 Online Form (**kwargs)

Form Fields:
- Name: ?
- Age: ?
- City: ?
- Email: ?

def register(**kwargs):
    print(kwargs)

register(name="Ankit", age=25, city="Pune")

Users fill multiple fields with names! 📝

🎯 Aha Moment:
Functions are the backbone of clean code!
Write once, use everywhere! 🚀`,

    deepDive: `⚙️ Functions - Complete Guide

📌 Module Description:
This module teaches reusable coding logic heavily asked in interviews and used in production systems.

Category: Reusable Programming Logic
Importance: Extremely High

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍔 Topic 1: Functions Basics

Comic Story: Food Delivery App
Instead of cooking every time, you order from the same restaurant repeatedly.

What It Is:
Function is a reusable block of code.

Interview Q&A:
Q: Why do we use functions?
A: To avoid duplicate code and improve reusability.

Coding Example - Create greeting function:
def greet():
    print('Hello')

greet()  # Call function

Coding Challenge:
Create function to check even/odd number

Hint: Use modulus operator inside function

Solution:
def check_even_odd(num):
    if num % 2 == 0:
        print('Even')
    else:
        print('Odd')

check_even_odd(10)  # Even
check_even_odd(7)   # Odd

Quiz:
Q: What keyword is used to create function?
A: def

Memory Trick: Function = Reusable machine

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍕 Topic 2: Parameters

Comic Story: Pizza Order
Different customers give different toppings.

What It Is:
Parameters allow dynamic input.

Coding Example - Pass employee name:
def greet(name):
    print(f'Hello {name}')

greet('Ankit')  # Hello Ankit
greet('Rahul')  # Hello Rahul

Coding Challenge:
Create function that accepts salary and prints bonus eligibility

Hint: Pass salary as parameter

Solution:
def check_bonus(salary):
    if salary > 50000:
        print('Bonus Eligible')
    else:
        print('Not Eligible')

check_bonus(60000)  # Bonus Eligible
check_bonus(40000)  # Not Eligible

Interview Question:
Parameter vs argument?
Answer: Parameter is variable in function definition. Argument is actual value passed when calling.
Example: def greet(name) - name is parameter. greet('Ankit') - 'Ankit' is argument.

Memory Trick: Parameters = Input slots

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏧 Topic 3: Return Statement

Comic Story: ATM Withdrawal
Machine gives money back after request.

What It Is:
Returns output from function.

Coding Example - Return sum:
def add(a, b):
    return a + b

result = add(10, 20)
print(result)  # 30

Coding Challenge:
Return largest of two numbers

Hint: Use if condition

Solution:
def find_max(a, b):
    if a > b:
        return a
    else:
        return b

print(find_max(10, 20))  # 20

Memory Trick: Return = Give back result

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ Topic 4: Lambda Functions

Comic Story: Shortcut Button
Quick one-click action.

What It Is:
Anonymous one-line function.

Coding Example - Square number:
square = lambda x: x*x
print(square(5))  # 25

Coding Challenge:
Create lambda for multiplying two numbers

Hint: Use lambda x, y

Solution:
multiply = lambda x, y: x * y
print(multiply(5, 3))  # 15

Memory Trick: Lambda = Quick shortcut

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛍️ Topic 5: *args

Comic Story: Unlimited Shopping Bag
Can hold multiple items.

What It Is:
Accepts multiple positional arguments.

Coding Example - Add multiple numbers:
def total(*args):
    print(sum(args))

total(10, 20, 30)  # 60
total(5, 10)       # 15

Coding Challenge:
Find maximum number from unlimited inputs

Hint: Use max(args)

Solution:
def find_maximum(*args):
    return max(args)

print(find_maximum(10, 50, 30, 90, 20))  # 90

Interview Question:
Why use *args?
Answer: When you don't know how many arguments will be passed. Useful for flexible functions.

Memory Trick: *args = Multiple inputs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 Topic 6: **kwargs

Comic Story: Online Form
Users fill multiple fields with names.

What It Is:
Accepts multiple keyword arguments.

Coding Example - Store employee details:
def emp(**kwargs):
    print(kwargs)

emp(name='Ankit', age=25, city='Pune')
# {'name': 'Ankit', 'age': 25, 'city': 'Pune'}

Coding Challenge:
Print student details dynamically

Hint: Pass named arguments

Solution:
def student_info(**kwargs):
    for key, value in kwargs.items():
        print(f'{key}: {value}')

student_info(name='Ankit', marks=90, grade='A')

Quiz:
Q: What does kwargs store?
A: Dictionary

Memory Trick: **kwargs = Named inputs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Top Interview Questions:

1. Parameter vs Argument
   Answer: Parameter is variable in definition (def func(x)). Argument is value passed (func(5)).

2. Return vs Print
   Answer: Return sends value back to caller, can be stored. Print displays output, cannot be stored.

3. Lambda vs normal function
   Answer: Lambda is one-line anonymous function. Normal function uses def, can have multiple lines.

4. *args vs **kwargs
   Answer: *args accepts multiple positional arguments (tuple). **kwargs accepts keyword arguments (dictionary).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Usage:

Functions are heavily used in AWS Glue scripts, PySpark transformations, and Databricks reusable notebooks.

Example - AWS Glue ETL:
def clean_data(df):
    # Remove nulls
    df = df.dropna()
    # Remove duplicates
    df = df.drop_duplicates()
    return df

def transform_data(df):
    # Apply transformations
    df['salary'] = df['salary'] * 1.1
    return df

# Reuse functions
raw_data = read_s3_file()
cleaned = clean_data(raw_data)
transformed = transform_data(cleaned)
write_to_s3(transformed)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Revision Formula:

Function Formula:
Create → Pass → Return → Simplify → Scale

⚙️ Create = def function_name()
📥 Pass = Parameters/args/kwargs
📤 Return = return value
⚡ Simplify = Lambda
📈 Scale = Reuse everywhere

Master functions → Write clean code! 🚀`,

    types: `⚙️ Functions - Quick Reference

🔧 Basic Function:
def greet():
    print('Hello')

greet()  # Call

📥 With Parameters:
def greet(name):
    print(f'Hello {name}')

greet('Ankit')

📤 With Return:
def add(a, b):
    return a + b

result = add(10, 20)

⚡ Lambda:
square = lambda x: x*x
add = lambda x, y: x + y

🛍️ *args (Multiple positional):
def total(*args):
    return sum(args)

total(10, 20, 30)  # 60

📝 **kwargs (Multiple keyword):
def info(**kwargs):
    print(kwargs)

info(name='Ankit', age=25)

🔄 Combined:
def func(a, b, *args, **kwargs):
    print(a, b)
    print(args)
    print(kwargs)

func(1, 2, 3, 4, name='Ankit')`,

    qa: [
      {
        q: "What is a function?",
        a: "Function is a reusable block of code that performs specific task. Created with def keyword. Example: def greet(): print('Hello'). Called with greet(). Avoids code duplication."
      },
      {
        q: "What are parameters?",
        a: "Parameters are variables in function definition that accept input. Example: def greet(name) - name is parameter. When calling greet('Ankit'), 'Ankit' is argument passed to parameter."
      },
      {
        q: "What does return statement do?",
        a: "Return sends value back from function to caller. Example: def add(a,b): return a+b. result=add(10,20) stores 30 in result. Without return, function returns None."
      },
      {
        q: "Difference between return and print?",
        a: "Return sends value back, can be stored/used. Print displays output, cannot be stored. Example: def add(a,b): return a+b allows result=add(10,20). Print just shows value."
      },
      {
        q: "What is lambda function?",
        a: "Lambda is anonymous one-line function. Syntax: lambda arguments: expression. Example: square=lambda x: x*x. Used for simple operations, often with map(), filter()."
      },
      {
        q: "What is *args?",
        a: "*args accepts multiple positional arguments as tuple. Example: def total(*args): return sum(args). Can call total(10,20,30) or total(5,10). Flexible argument count."
      },
      {
        q: "What is **kwargs?",
        a: "**kwargs accepts multiple keyword arguments as dictionary. Example: def info(**kwargs): print(kwargs). Call info(name='Ankit',age=25). Returns {'name':'Ankit','age':25}."
      },
      {
        q: "Difference between *args and **kwargs?",
        a: "*args for positional arguments (tuple). **kwargs for keyword arguments (dictionary). Example: func(*args) → func(1,2,3). func(**kwargs) → func(name='Ankit',age=25)."
      },
      {
        q: "Parameter vs Argument?",
        a: "Parameter is variable in function definition. Argument is actual value passed. Example: def greet(name) - name is parameter. greet('Ankit') - 'Ankit' is argument."
      },
      {
        q: "Why use functions?",
        a: "Functions provide code reusability, modularity, easier testing, better organization. Write once, use multiple times. Example: def validate_email(email) can be reused throughout application."
      }
    ],

    coding: {
      title: "Functions - Coding Challenges",
      scenario: "Practice reusable functions for clean code",
      question: "Create function to check even/odd number",
      input: "num = 10",
      expectedOutput: "Even",
      hint: "Use modulus operator inside function",
      solution: "def check_even_odd(num):\\n    if num % 2 == 0:\\n        print('Even')\\n    else:\\n        print('Odd')\\n\\ncheck_even_odd(10)",
      note: "Functions make code reusable. Define once, call multiple times.",
      thinkingApproach: [
        "Define function with def keyword",
        "Accept number as parameter",
        "Use modulus to check even/odd",
        "Print result"
      ],
      questions: [
        {
          q: "1. Create function to check even/odd number",
          answer: "def check_even_odd(num):\\n    if num % 2 == 0:\\n        print('Even')\\n    else:\\n        print('Odd')\\n\\ncheck_even_odd(10)"
        },
        {
          q: "2. Create greeting function with parameter",
          answer: "def greet(name):\\n    print(f'Hello {name}')\\n\\ngreet('Ankit')"
        },
        {
          q: "3. Function to add two numbers and return result",
          answer: "def add(a, b):\\n    return a + b\\n\\nresult = add(10, 20)\\nprint(result)"
        },
        {
          q: "4. Function to check bonus eligibility based on salary",
          answer: "def check_bonus(salary):\\n    if salary > 50000:\\n        print('Bonus Eligible')\\n    else:\\n        print('Not Eligible')\\n\\ncheck_bonus(60000)"
        },
        {
          q: "5. Return largest of two numbers",
          answer: "def find_max(a, b):\\n    if a > b:\\n        return a\\n    else:\\n        return b\\n\\nprint(find_max(10, 20))"
        },
        {
          q: "6. Lambda function to square a number",
          answer: "square = lambda x: x*x\\nprint(square(5))"
        },
        {
          q: "7. Lambda to multiply two numbers",
          answer: "multiply = lambda x, y: x * y\\nprint(multiply(5, 3))"
        },
        {
          q: "8. Use *args to add multiple numbers",
          answer: "def total(*args):\\n    return sum(args)\\n\\nprint(total(10, 20, 30))"
        },
        {
          q: "9. Find maximum using *args",
          answer: "def find_maximum(*args):\\n    return max(args)\\n\\nprint(find_maximum(10, 50, 30, 90, 20))"
        },
        {
          q: "10. Use **kwargs to print student details",
          answer: "def student_info(**kwargs):\\n    for key, value in kwargs.items():\\n        print(f'{key}: {value}')\\n\\nstudent_info(name='Ankit', marks=90, grade='A')"
        }
      ]
    },

    quiz: [
      { q: "What keyword creates function?", options: ["function", "def", "func", "define"], answer: 1 },
      { q: "What does return do?", options: ["Print", "Give back value", "Delete", "Loop"], answer: 1 },
      { q: "Lambda is?", options: ["Multi-line", "One-line function", "Loop", "Variable"], answer: 1 },
      { q: "*args stores?", options: ["Dictionary", "Tuple", "List", "Set"], answer: 1 },
      { q: "**kwargs stores?", options: ["Tuple", "Dictionary", "List", "Set"], answer: 1 },
      { q: "Parameter is?", options: ["Value passed", "Variable in definition", "Return value", "Print"], answer: 1 },
      { q: "Argument is?", options: ["Variable in definition", "Value passed", "Return value", "Function name"], answer: 1 },
      { q: "Return vs Print?", options: ["Same", "Return gives back value", "Print gives back", "No difference"], answer: 1 },
      { q: "Why use functions?", options: ["Slow code", "Reusability", "Complex", "Useless"], answer: 1 },
      { q: "Lambda syntax?", options: ["def", "lambda x: x*x", "function", "return"], answer: 1 }
    ],

    interview: "Functions are reusable blocks of code heavily asked in interviews and used in production. Basic function uses def keyword (def greet(): print('Hello')). Comic: Food delivery app - order repeatedly. Parameters allow dynamic input (def greet(name)). Comic: Pizza order - different toppings. Return statement gives back value (def add(a,b): return a+b). Comic: ATM withdrawal - machine returns money. Lambda is one-line anonymous function (square=lambda x: x*x). Comic: Shortcut button. *args accepts multiple positional arguments as tuple (def total(*args)). Comic: Unlimited shopping bag. **kwargs accepts keyword arguments as dictionary (def info(**kwargs)). Comic: Online form with named fields. Top questions: Parameter vs Argument (parameter in definition, argument is value passed), Return vs Print (return gives back value, print displays), Lambda vs normal (lambda one-line, def multi-line), *args vs **kwargs (args=tuple positional, kwargs=dictionary keyword). Real usage: AWS Glue ETL scripts use functions for clean_data(), transform_data() - reusable logic. PySpark transformations, Databricks notebooks. Memory: Function=Reusable machine, Parameters=Input slots, Return=Give back, Lambda=Quick shortcut, *args=Multiple inputs, **kwargs=Named inputs. Formula: Create → Pass → Return → Simplify → Scale. Master functions for clean code.",

    memory: `⚙️ Functions - Memory Map

🍔 Functions Basics = Reusable Machine
Comic: Food delivery app
def greet():
    print('Hello')

greet()  # Call anytime
Memory: Function = Reusable machine

🍕 Parameters = Input Slots
Comic: Pizza order
def greet(name):
    print(f'Hello {name}')

greet('Ankit')
Memory: Parameters = Input slots

🏧 Return = Give Back Result
Comic: ATM withdrawal
def add(a, b):
    return a + b

result = add(10, 20)
Memory: Return = Give back result

⚡ Lambda = Quick Shortcut
Comic: Shortcut button
square = lambda x: x*x
print(square(5))
Memory: Lambda = Quick shortcut

🛍️ *args = Multiple Inputs
Comic: Unlimited shopping bag
def total(*args):
    return sum(args)

total(10, 20, 30)
Memory: *args = Multiple inputs

📝 **kwargs = Named Inputs
Comic: Online form
def info(**kwargs):
    print(kwargs)

info(name='Ankit', age=25)
Memory: **kwargs = Named inputs

🎯 Function Formula:
Create → Pass → Return → Simplify → Scale

📊 Top Interview Questions:
1. Parameter vs Argument? Definition vs Value
2. Return vs Print? Give back vs Display
3. Lambda vs Normal? One-line vs Multi-line
4. *args vs **kwargs? Tuple vs Dictionary

✅ Real Usage:
AWS Glue ETL scripts
PySpark transformations
Databricks notebooks
Reusable data pipelines
Clean code organization

🔑 Quick Reference:
def func() → Basic function
def func(x) → With parameter
return value → Give back
lambda x: x*x → One-liner
*args → Multiple positional
**kwargs → Multiple keyword`,

    revision: "Functions: Reusable blocks of code for clean programming. Basic function uses def (def greet()). Comic: Food delivery - order repeatedly. Parameters accept input (def greet(name)). Comic: Pizza order - different toppings. Return gives back value (def add(a,b): return a+b). Comic: ATM withdrawal. Lambda is one-line function (square=lambda x: x*x). Comic: Shortcut button. *args accepts multiple positional arguments as tuple (def total(*args)). Comic: Shopping bag. **kwargs accepts keyword arguments as dictionary (def info(**kwargs)). Comic: Online form. Top questions: Parameter vs Argument (definition vs value), Return vs Print (give back vs display), Lambda vs Normal (one-line vs multi-line), *args vs **kwargs (tuple vs dictionary). Real usage: AWS Glue scripts, PySpark transformations, Databricks notebooks for reusable logic. Memory: Function=Reusable, Parameters=Input, Return=Give back, Lambda=Shortcut, *args=Multiple, **kwargs=Named. Formula: Create → Pass → Return → Simplify → Scale. Master functions for production code."
  },

  // ============================================================================
  // MODULE 6: EXCEPTION HANDLING
  // ============================================================================

  "exception-handling": {
    title: "Exception Handling",
    icon: "🛡️",
    difficulty: "Foundation",
    duration: "65 min",
    description: "Error handling techniques used in production scripts, ETL jobs, APIs, and automation workflows",

    comic: `🚗 Car Airbag (Try Except)

Driver: *Driving safely*
Suddenly... CRASH! 💥

Without Airbag:
Driver gets hurt badly ❌

With Airbag:
Airbag deploys → Driver protected ✅

In Python:
try:
    print(10/0)  # Error!
except:
    print('Error handled')  # Protected!

If accident happens, airbag protects you! 🛡️

🍽️ Restaurant Bill (Finally)

Customer: "I'm done eating"
Waiter: "Here's your bill"

Scenario 1: Customer pays → Bill settled ✅
Scenario 2: Customer runs away → Bill still must be paid! 💰

In Python:
try:
    file = open('data.txt')
except:
    print('Error')
finally:
    print('Closing resources')  # Always runs!

No matter what happens, bill must be paid! 🍽️

🎭 Private Club Entry (Custom Errors)

Bouncer: "Special rules for this club!"

Rule 1: Age must be 21+
Rule 2: Dress code required
Rule 3: Membership card needed

If rules broken → Custom warning!

In Python:
age = 18
if age < 21:
    raise Exception('Age too low for club')

Special rules need custom warnings! 🎭

🎯 Aha Moment:
Exception handling prevents production crashes!
ETL jobs, APIs, automation - all need error protection! 🚀`,

    deepDive: `🛡️ Exception Handling - Complete Guide

📌 Module Description:
This module teaches error handling techniques used in production scripts, ETL jobs, APIs, and automation workflows.

Category: Production Safe Coding
Importance: Extremely High

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚗 Topic 1: Try Except

Comic Story: Car Airbag
If accident happens, airbag protects you.

What It Is:
Prevents program from crashing when errors occur.

Interview Q&A:
Q: Why use try except?
A: To handle runtime errors gracefully.

Coding Example 1 - Handle division error:
try:
    print(10/0)
except:
    print('Error handled')

Coding Example 2 - Handle missing file:
try:
    open('data.csv')
except FileNotFoundError:
    print('File not found')

Coding Challenge:
Handle invalid user input for age conversion

Hint: Use int() conversion inside try block

Solution:
try:
    age = int(input('Enter age: '))
    print(f'Age: {age}')
except ValueError:
    print('Invalid input! Please enter a number')

Quiz:
Q: Which block catches error?
A: Except block

Memory Trick: Try = Attempt | Except = Handle

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍽️ Topic 2: Finally

Comic Story: Restaurant Bill
No matter what happens, bill must be paid.

What It Is:
Runs whether error happens or not.

Coding Example - Close file connection:
try:
    file = open('demo.txt')
    data = file.read()
except:
    print('Error reading file')
finally:
    print('Closing resources')
    # file.close()  # Always cleanup

Coding Challenge:
Create database connection cleanup example

Hint: Finally is used for cleanup tasks

Solution:
try:
    # Connect to database
    connection = connect_db()
    # Execute query
    result = connection.execute('SELECT * FROM users')
except Exception as e:
    print(f'Database error: {e}')
finally:
    # Always close connection
    connection.close()
    print('Connection closed')

Interview Question:
Why is finally important in production?
Answer: Ensures cleanup tasks (closing files, database connections, network sockets) always execute, preventing resource leaks.

Memory Trick: Finally = Always cleanup

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎭 Topic 3: Custom Errors

Comic Story: Private Club Entry
Special rules need custom warnings.

What It Is:
Create your own business-specific exceptions.

Coding Example - Raise salary validation error:
salary = 2000
if salary < 5000:
    raise Exception('Salary too low')

Coding Challenge:
Raise custom exception for invalid age below 18

Hint: Use raise keyword

Solution:
age = 15

if age < 18:
    raise Exception('Age must be 18 or above')

# Better approach with custom exception class
class AgeError(Exception):
    pass

if age < 18:
    raise AgeError('Invalid age: Must be 18+')

Quiz:
Q: Which keyword creates custom exception?
A: raise

Memory Trick: Custom error = Business rule protection

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Top Interview Questions:

1. Difference between syntax error and exception?
   Answer: Syntax error occurs during code parsing (before execution). Exception occurs during runtime.
   Example: print('hello' - syntax error (missing parenthesis). 10/0 - runtime exception.

2. Try vs finally?
   Answer: Try block contains code that might raise exception. Finally block always executes for cleanup,
   regardless of whether exception occurred or not.

3. Why create custom exceptions?
   Answer: To handle business-specific validation rules, make code more readable, provide meaningful
   error messages for domain-specific problems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Usage:

Used heavily in AWS Lambda API scripts, AWS Glue ETL jobs, and database scripts.

Example - AWS Glue ETL Job:
try:
    # Read from S3
    df = spark.read.csv('s3://bucket/data.csv')
    
    # Transform data
    df_clean = df.dropna()
    
    # Validate
    if df_clean.count() == 0:
        raise Exception('No valid records found')
    
    # Write to S3
    df_clean.write.parquet('s3://bucket/output/')
    
except FileNotFoundError:
    print('Input file not found in S3')
    # Send alert
    
except Exception as e:
    print(f'ETL job failed: {e}')
    # Log error
    # Retry logic
    
finally:
    # Cleanup resources
    spark.stop()
    print('Spark session closed')

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Revision Formula:

Error Handling Formula:
Try → Catch → Cleanup → Protect

🚗 Try = Attempt risky code
🛡️ Catch = Handle errors (except)
🍽️ Cleanup = Always execute (finally)
🎭 Protect = Custom validations (raise)

Master exception handling → Production-safe code! 🚀`,

    types: `🛡️ Exception Handling - Quick Reference

🚗 Try Except:
try:
    # Risky code
    result = 10/0
except ZeroDivisionError:
    print('Cannot divide by zero')
except Exception as e:
    print(f'Error: {e}')

🍽️ Finally:
try:
    file = open('data.txt')
except:
    print('Error')
finally:
    print('Cleanup')  # Always runs

🎭 Raise Custom Error:
if age < 18:
    raise Exception('Age too low')

📋 Common Exceptions:
- ZeroDivisionError
- FileNotFoundError
- ValueError
- TypeError
- KeyError
- IndexError
- AttributeError

🔄 Complete Pattern:
try:
    # Attempt
    risky_operation()
except SpecificError:
    # Handle specific
    handle_error()
except Exception as e:
    # Handle general
    log_error(e)
finally:
    # Cleanup
    cleanup_resources()`,

    qa: [
      {
        q: "What is exception handling?",
        a: "Exception handling prevents program crashes by catching and handling runtime errors. Uses try-except blocks. Example: try: 10/0 except: print('Error'). Keeps program running even when errors occur."
      },
      {
        q: "What is try-except block?",
        a: "Try block contains code that might raise exception. Except block handles the error. Example: try: open('file.txt') except FileNotFoundError: print('File not found'). Prevents crash."
      },
      {
        q: "What does finally block do?",
        a: "Finally block always executes, whether exception occurred or not. Used for cleanup (closing files, connections). Example: try: file=open() except: pass finally: file.close(). Ensures resource cleanup."
      },
      {
        q: "Difference between syntax error and exception?",
        a: "Syntax error occurs during parsing (before execution), like missing colon. Exception occurs during runtime, like 10/0. Syntax errors must be fixed, exceptions can be handled with try-except."
      },
      {
        q: "What is raise keyword?",
        a: "Raise keyword creates custom exceptions. Example: if age<18: raise Exception('Too young'). Used for business rule validation. Stops execution and throws error with custom message."
      },
      {
        q: "Why use exception handling in production?",
        a: "Prevents application crashes, provides graceful error handling, enables logging, allows retry logic, ensures resource cleanup. Critical for ETL jobs, APIs, automation scripts."
      },
      {
        q: "What is Exception as e?",
        a: "Captures exception object in variable. Example: except Exception as e: print(e). Allows accessing error message, type, traceback. Useful for logging and debugging."
      },
      {
        q: "Common exception types?",
        a: "ZeroDivisionError (10/0), FileNotFoundError (missing file), ValueError (int('abc')), TypeError (wrong type), KeyError (missing dict key), IndexError (list out of range)."
      },
      {
        q: "When to use finally?",
        a: "Use finally for cleanup tasks that must always execute: closing files, database connections, network sockets, releasing locks. Prevents resource leaks in production."
      },
      {
        q: "How to create custom exception?",
        a: "Create class inheriting from Exception. Example: class AgeError(Exception): pass. Then raise AgeError('Invalid age'). Makes code more readable and maintainable."
      }
    ],

    coding: {
      title: "Exception Handling - Coding Challenges",
      scenario: "Practice error handling for production-safe code",
      question: "Handle invalid user input for age conversion",
      input: "age_input = 'abc'",
      expectedOutput: "Invalid input! Please enter a number",
      hint: "Use int() conversion inside try block",
      solution: "try:\\n    age = int('abc')\\n    print(f'Age: {age}')\\nexcept ValueError:\\n    print('Invalid input! Please enter a number')",
      note: "Try-except prevents crashes when converting invalid input to integer.",
      thinkingApproach: [
        "Identify risky operation (int conversion)",
        "Wrap in try block",
        "Catch ValueError in except block",
        "Provide user-friendly error message"
      ],
      questions: [
        {
          q: "1. Handle division by zero error",
          answer: "try:\\n    result = 10/0\\nexcept ZeroDivisionError:\\n    print('Cannot divide by zero')"
        },
        {
          q: "2. Handle file not found error",
          answer: "try:\\n    file = open('data.csv')\\nexcept FileNotFoundError:\\n    print('File not found')"
        },
        {
          q: "3. Handle invalid age input conversion",
          answer: "try:\\n    age = int(input('Enter age: '))\\n    print(f'Age: {age}')\\nexcept ValueError:\\n    print('Invalid input! Please enter a number')"
        },
        {
          q: "4. Use finally to close file",
          answer: "try:\\n    file = open('demo.txt')\\n    data = file.read()\\nexcept:\\n    print('Error')\\nfinally:\\n    print('Closing resources')"
        },
        {
          q: "5. Raise custom exception for low salary",
          answer: "salary = 2000\\nif salary < 5000:\\n    raise Exception('Salary too low')"
        },
        {
          q: "6. Raise custom exception for invalid age",
          answer: "age = 15\\nif age < 18:\\n    raise Exception('Age must be 18 or above')"
        },
        {
          q: "7. Handle multiple exception types",
          answer: "try:\\n    num = int('abc')\\n    result = 10/num\\nexcept ValueError:\\n    print('Invalid number')\\nexcept ZeroDivisionError:\\n    print('Cannot divide by zero')"
        },
        {
          q: "8. Catch exception with message",
          answer: "try:\\n    result = 10/0\\nexcept Exception as e:\\n    print(f'Error occurred: {e}')"
        },
        {
          q: "9. Complete try-except-finally pattern",
          answer: "try:\\n    file = open('data.txt')\\n    data = file.read()\\nexcept FileNotFoundError:\\n    print('File not found')\\nfinally:\\n    print('Cleanup complete')"
        },
        {
          q: "10. Handle list index error",
          answer: "try:\\n    nums = [1, 2, 3]\\n    print(nums[10])\\nexcept IndexError:\\n    print('Index out of range')"
        }
      ]
    },

    quiz: [
      { q: "Which block catches error?", options: ["Try", "Except", "Finally", "Raise"], answer: 1 },
      { q: "Which block always runs?", options: ["Try", "Except", "Finally", "Raise"], answer: 2 },
      { q: "Keyword to create custom error?", options: ["throw", "raise", "error", "exception"], answer: 1 },
      { q: "Syntax error occurs?", options: ["Runtime", "Before execution", "After execution", "Never"], answer: 1 },
      { q: "Exception occurs?", options: ["Before execution", "During runtime", "Never", "Always"], answer: 1 },
      { q: "Finally is used for?", options: ["Error handling", "Cleanup", "Creating errors", "Nothing"], answer: 1 },
      { q: "10/0 raises?", options: ["ValueError", "ZeroDivisionError", "TypeError", "KeyError"], answer: 1 },
      { q: "int('abc') raises?", options: ["ValueError", "TypeError", "KeyError", "IndexError"], answer: 0 },
      { q: "Why use exception handling?", options: ["Slow code", "Prevent crashes", "Complex", "Useless"], answer: 1 },
      { q: "except Exception as e does?", options: ["Nothing", "Captures error message", "Raises error", "Deletes error"], answer: 1 }
    ],

    interview: "Exception Handling prevents production crashes by catching runtime errors. Try-except blocks handle errors gracefully. Try contains risky code, except catches errors. Comic: Car airbag - if accident happens, airbag protects. Example: try: 10/0 except: print('Error'). Finally block always executes for cleanup, regardless of error. Comic: Restaurant bill - no matter what, bill must be paid. Used for closing files, database connections. Example: finally: file.close(). Custom errors use raise keyword for business rules. Comic: Private club - special rules need custom warnings. Example: if age<18: raise Exception('Too young'). Top questions: Syntax error vs Exception (syntax before execution, exception during runtime), Try vs Finally (try attempts, finally always cleans up), Why custom exceptions (business rule validation, meaningful errors). Real usage: AWS Lambda APIs handle request errors, AWS Glue ETL jobs handle S3 file errors, database scripts handle connection errors. Common exceptions: ZeroDivisionError, FileNotFoundError, ValueError, TypeError, KeyError, IndexError. Memory: Try=Attempt, Except=Handle, Finally=Cleanup, Raise=Protect. Formula: Try → Catch → Cleanup → Protect. Master exception handling for production-safe code.",

    memory: `🛡️ Exception Handling - Memory Map

🚗 Try Except = Airbag Protection
Comic: Car airbag
try:
    print(10/0)
except:
    print('Error handled')
Memory: Try = Attempt | Except = Handle

🍽️ Finally = Always Cleanup
Comic: Restaurant bill
try:
    file = open('data.txt')
except:
    print('Error')
finally:
    print('Closing resources')
Memory: Finally = Always cleanup

🎭 Custom Errors = Business Rules
Comic: Private club entry
salary = 2000
if salary < 5000:
    raise Exception('Salary too low')
Memory: Raise = Custom protection

🎯 Error Handling Formula:
Try → Catch → Cleanup → Protect

📊 Top Interview Questions:
1. Syntax vs Exception? Before vs During runtime
2. Try vs Finally? Attempt vs Always cleanup
3. Why custom exceptions? Business validation

✅ Real Usage:
AWS Lambda API error handling
AWS Glue ETL job failures
Database connection errors
File processing errors
API request failures

🔑 Common Exceptions:
ZeroDivisionError → 10/0
FileNotFoundError → Missing file
ValueError → int('abc')
TypeError → Wrong type
KeyError → Missing dict key
IndexError → List out of range

📋 Complete Pattern:
try:
    # Risky code
except SpecificError:
    # Handle specific
except Exception as e:
    # Handle general
finally:
    # Always cleanup`,

    revision: "Exception Handling: Prevents crashes by catching runtime errors. Try-except handles errors gracefully. Try contains risky code, except catches errors. Comic: Car airbag protects during accident. Example: try: 10/0 except: print('Error'). Finally always executes for cleanup (close files, connections). Comic: Restaurant bill must be paid. Example: finally: file.close(). Custom errors use raise for business rules. Comic: Private club special rules. Example: if age<18: raise Exception('Too young'). Top questions: Syntax vs Exception (before vs during runtime), Try vs Finally (attempt vs cleanup), Custom exceptions (business validation). Real usage: AWS Lambda APIs, AWS Glue ETL, database scripts handle errors. Common: ZeroDivisionError, FileNotFoundError, ValueError, TypeError, KeyError, IndexError. Memory: Try=Attempt, Except=Handle, Finally=Cleanup, Raise=Protect. Formula: Try → Catch → Cleanup → Protect. Master for production-safe code."
  },

  // ============================================================================
  // MODULE 7: FILE HANDLING
  // ============================================================================

  "file-handling": {
    title: "File Handling",
    icon: "📁",
    difficulty: "Foundation",
    duration: "70 min",
    description: "File handling techniques heavily used in ETL pipelines, automation scripts, and data engineering projects",

    comic: `📖 Reading Diary (TXT Files)

Person: "Let me read my diary"
*Opens diary* → Reads content → Closes diary

In Python:
file = open('diary.txt', 'r')
content = file.read()
print(content)
file.close()

You open a diary, read content, and close it! 📖

📊 Excel Sheet (CSV Files)

Manager: "Show me employee data"
Employee: *Opens spreadsheet*

Name, Age, Salary
Ankit, 25, 50000
Rahul, 30, 60000

In Python:
import csv
with open('data.csv') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

Rows and columns stored like spreadsheets! 📊

📦 Online Order Form (JSON Files)

Customer Order:
{
  "name": "Ankit",
  "items": ["Pizza", "Coke"],
  "total": 500
}

In Python:
import json
with open('order.json') as file:
    data = json.load(file)
    print(data['name'])

Customer details stored in nested format! 📦

🎯 Aha Moment:
Files are the foundation of data engineering!
S3 uploads, ETL processing, data pipelines - all use files! 🚀`,

    deepDive: `📁 File Handling - Complete Guide

📌 Module Description:
This module teaches file handling techniques heavily used in ETL pipelines, automation scripts, and data engineering projects.

Category: ETL File Processing
Importance: Extremely High

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📖 Topic 1: TXT Files

Comic Story: Reading Diary
You open a diary, read content, and close it.

What It Is:
Used for reading plain text files such as logs and reports.

Interview Q&A:
Q: Why are text files important?
A: System logs and raw reports often come as text files.

Coding Example 1 - Read text file:
file = open('data.txt', 'r')
print(file.read())
file.close()

Coding Example 2 - Write text file:
file = open('output.txt', 'w')
file.write('Hello AATMA')
file.close()

Better approach with context manager:
with open('data.txt', 'r') as file:
    content = file.read()
    print(content)
# File automatically closed

Coding Challenge:
Count total words in text file

Hint: Use split() after reading file

Solution:
with open('data.txt', 'r') as file:
    content = file.read()
    words = content.split()
    print(f'Total words: {len(words)}')

Quiz:
Q: Which mode is used for reading?
A: r

File Modes:
- 'r' - Read (default)
- 'w' - Write (overwrites)
- 'a' - Append
- 'r+' - Read and write

Memory Trick: TXT = Raw text data

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Topic 2: CSV Files

Comic Story: Excel Sheet
Rows and columns stored like spreadsheets.

What It Is:
CSV stores structured tabular data.

Coding Example - Read CSV file:
import csv

with open('data.csv') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

Write CSV file:
import csv

data = [
    ['Name', 'Age', 'Salary'],
    ['Ankit', 25, 50000],
    ['Rahul', 30, 60000]
]

with open('output.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)

Coding Challenge:
Find total salary from CSV records

Hint: Loop through rows and sum salary column

Solution:
import csv

total_salary = 0
with open('employees.csv') as file:
    reader = csv.reader(file)
    next(reader)  # Skip header
    for row in reader:
        total_salary += int(row[2])  # Salary column

print(f'Total Salary: {total_salary}')

Interview Question:
How do you process multiple CSV files in ETL?
Answer: Use glob to find all CSV files, loop through each, read data, transform, and load to destination.
Example: for file in glob.glob('*.csv'): process(file)

Memory Trick: CSV = Comma Separated Values

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 Topic 3: JSON Files

Comic Story: Online Order Form
Customer details stored in nested format.

What It Is:
JSON stores hierarchical key-value data.

Coding Example 1 - Read JSON file:
import json

with open('data.json') as file:
    data = json.load(file)
    print(data)

Coding Example 2 - Write JSON file:
import json

data = {'name': 'Ankit', 'age': 25, 'city': 'Pune'}

with open('output.json', 'w') as file:
    json.dump(data, file, indent=2)

Coding Challenge:
Extract customer names from JSON orders file

Hint: Access dictionary keys properly

Solution:
import json

with open('orders.json') as file:
    orders = json.load(file)
    
    for order in orders:
        print(order['customer_name'])

Quiz:
Q: JSON data mostly resembles which Python structure?
A: Dictionary

Memory Trick: JSON = API friendly format

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Top Interview Questions:

1. Difference between CSV and JSON?
   Answer: CSV is tabular (rows/columns), flat structure. JSON is hierarchical, supports nested data.
   CSV for simple data, JSON for complex nested structures and APIs.

2. How do you process large files?
   Answer: Read line by line instead of loading entire file. Use generators, chunking.
   Example: for line in file: process(line) - memory efficient.

3. How do you handle missing files?
   Answer: Use try-except with FileNotFoundError. Check file existence with os.path.exists().
   Example: try: open('file.txt') except FileNotFoundError: print('File not found')

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Usage:

Files are uploaded to S3, processed using AWS Glue, and loaded into Redshift.

Example - ETL Pipeline:
import boto3
import csv
import json

# Download from S3
s3 = boto3.client('s3')
s3.download_file('my-bucket', 'data.csv', 'local_data.csv')

# Process CSV
records = []
with open('local_data.csv') as file:
    reader = csv.DictReader(file)
    for row in reader:
        # Transform
        row['salary'] = int(row['salary']) * 1.1
        records.append(row)

# Write to JSON
with open('output.json', 'w') as file:
    json.dump(records, file, indent=2)

# Upload to S3
s3.upload_file('output.json', 'my-bucket', 'processed/output.json')

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Revision Formula:

File Flow:
Read → Validate → Transform → Store

📖 Read = Open and read files
✅ Validate = Check data quality
🔄 Transform = Process data
💾 Store = Write to destination

Master file handling → Build ETL pipelines! 🚀`,

    types: `📁 File Handling - Quick Reference

📖 TXT Files:
# Read
with open('file.txt', 'r') as f:
    content = f.read()

# Write
with open('file.txt', 'w') as f:
    f.write('Hello')

# Append
with open('file.txt', 'a') as f:
    f.write('More text')

# Read line by line
with open('file.txt', 'r') as f:
    for line in f:
        print(line)

📊 CSV Files:
import csv

# Read
with open('data.csv') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)

# Read as dictionary
with open('data.csv') as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row['name'])

# Write
with open('out.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['Name', 'Age'])
    writer.writerow(['Ankit', 25])

📦 JSON Files:
import json

# Read
with open('data.json') as f:
    data = json.load(f)

# Write
with open('out.json', 'w') as f:
    json.dump(data, f, indent=2)

# Read JSON string
json_str = '{"name": "Ankit"}'
data = json.loads(json_str)

# Write JSON string
json_str = json.dumps(data, indent=2)

🔧 File Modes:
'r'  - Read (default)
'w'  - Write (overwrite)
'a'  - Append
'r+' - Read and write
'rb' - Read binary
'wb' - Write binary`,

    qa: [
      {
        q: "What is file handling?",
        a: "File handling is reading from and writing to files. Uses open() function with modes: 'r' (read), 'w' (write), 'a' (append). Example: with open('file.txt','r') as f: content=f.read(). Essential for ETL pipelines."
      },
      {
        q: "What is with statement?",
        a: "With statement is context manager that automatically closes file. Example: with open('file.txt') as f: content=f.read(). No need to call f.close(). Prevents resource leaks."
      },
      {
        q: "Difference between CSV and JSON?",
        a: "CSV is tabular (rows/columns), flat structure, simple data. JSON is hierarchical, supports nested data, used for APIs. CSV: Name,Age. JSON: {'name':'Ankit','age':25}."
      },
      {
        q: "How to read CSV file?",
        a: "Use csv module. Example: import csv; with open('data.csv') as f: reader=csv.reader(f); for row in reader: print(row). Returns list of values per row."
      },
      {
        q: "How to read JSON file?",
        a: "Use json module. Example: import json; with open('data.json') as f: data=json.load(f). Returns Python dictionary. json.load() for files, json.loads() for strings."
      },
      {
        q: "How to handle large files?",
        a: "Read line by line instead of loading entire file. Example: with open('large.txt') as f: for line in f: process(line). Memory efficient, processes one line at a time."
      },
      {
        q: "How to handle missing files?",
        a: "Use try-except with FileNotFoundError. Example: try: open('file.txt') except FileNotFoundError: print('Not found'). Or check with os.path.exists('file.txt')."
      },
      {
        q: "What are file modes?",
        a: "'r' read (default), 'w' write (overwrite), 'a' append, 'r+' read/write, 'rb' read binary, 'wb' write binary. Example: open('file.txt','w') creates/overwrites file."
      },
      {
        q: "How to write CSV file?",
        a: "Use csv.writer(). Example: import csv; with open('out.csv','w',newline='') as f: writer=csv.writer(f); writer.writerow(['Name','Age']); writer.writerow(['Ankit',25])."
      },
      {
        q: "How to write JSON file?",
        a: "Use json.dump(). Example: import json; data={'name':'Ankit'}; with open('out.json','w') as f: json.dump(data,f,indent=2). indent=2 for pretty formatting."
      }
    ],

    coding: {
      title: "File Handling - Coding Challenges",
      scenario: "Practice file operations for ETL pipelines",
      question: "Count total words in text file",
      input: "file contains: 'Hello World Python'",
      expectedOutput: "Total words: 3",
      hint: "Use split() after reading file",
      solution: "with open('data.txt', 'r') as file:\\n    content = file.read()\\n    words = content.split()\\n    print(f'Total words: {len(words)}')",
      note: "split() breaks text into list of words. len() counts total words.",
      thinkingApproach: [
        "Open file in read mode",
        "Read entire content",
        "Split content into words using split()",
        "Count words using len()"
      ],
      questions: [
        {
          q: "1. Read text file and print content",
          answer: "with open('data.txt', 'r') as file:\\n    content = file.read()\\n    print(content)"
        },
        {
          q: "2. Write text to file",
          answer: "with open('output.txt', 'w') as file:\\n    file.write('Hello AATMA')"
        },
        {
          q: "3. Count total words in text file",
          answer: "with open('data.txt', 'r') as file:\\n    content = file.read()\\n    words = content.split()\\n    print(f'Total words: {len(words)}')"
        },
        {
          q: "4. Read CSV file and print rows",
          answer: "import csv\\nwith open('data.csv') as file:\\n    reader = csv.reader(file)\\n    for row in reader:\\n        print(row)"
        },
        {
          q: "5. Calculate total salary from CSV",
          answer: "import csv\\ntotal = 0\\nwith open('employees.csv') as file:\\n    reader = csv.reader(file)\\n    next(reader)  # Skip header\\n    for row in reader:\\n        total += int(row[2])\\nprint(f'Total: {total}')"
        },
        {
          q: "6. Read JSON file",
          answer: "import json\\nwith open('data.json') as file:\\n    data = json.load(file)\\n    print(data)"
        },
        {
          q: "7. Write dictionary to JSON file",
          answer: "import json\\ndata = {'name': 'Ankit', 'age': 25}\\nwith open('output.json', 'w') as file:\\n    json.dump(data, file, indent=2)"
        },
        {
          q: "8. Extract customer names from JSON",
          answer: "import json\\nwith open('orders.json') as file:\\n    orders = json.load(file)\\n    for order in orders:\\n        print(order['customer_name'])"
        },
        {
          q: "9. Handle missing file with try-except",
          answer: "try:\\n    with open('data.txt', 'r') as file:\\n        print(file.read())\\nexcept FileNotFoundError:\\n    print('File not found')"
        },
        {
          q: "10. Read file line by line",
          answer: "with open('data.txt', 'r') as file:\\n    for line in file:\\n        print(line.strip())"
        }
      ]
    },

    quiz: [
      { q: "Which mode is used for reading?", options: ["w", "r", "a", "x"], answer: 1 },
      { q: "Which mode overwrites file?", options: ["r", "w", "a", "r+"], answer: 1 },
      { q: "CSV stands for?", options: ["Computer Separated Values", "Comma Separated Values", "Code Separated Values", "Cell Separated Values"], answer: 1 },
      { q: "JSON resembles which Python structure?", options: ["List", "Dictionary", "Tuple", "Set"], answer: 1 },
      { q: "What does with statement do?", options: ["Nothing", "Auto closes file", "Opens file", "Deletes file"], answer: 1 },
      { q: "How to read large files efficiently?", options: ["Load all", "Line by line", "Load twice", "Skip reading"], answer: 1 },
      { q: "json.load() is for?", options: ["Strings", "Files", "Lists", "Numbers"], answer: 1 },
      { q: "csv.reader() returns?", options: ["Dictionary", "List of rows", "String", "Number"], answer: 1 },
      { q: "FileNotFoundError is?", options: ["Syntax error", "Runtime exception", "Warning", "Nothing"], answer: 1 },
      { q: "Which is hierarchical?", options: ["CSV", "JSON", "TXT", "All"], answer: 1 }
    ],

    interview: "File Handling is essential for ETL pipelines and data engineering. TXT files store plain text like logs and reports. Comic: Reading diary - open, read, close. Example: with open('data.txt','r') as f: content=f.read(). File modes: 'r' read, 'w' write (overwrite), 'a' append. CSV files store tabular data (rows/columns). Comic: Excel sheet - structured data. Example: import csv; reader=csv.reader(file). Used for employee data, sales records. JSON files store hierarchical key-value data. Comic: Online order form - nested structure. Example: import json; data=json.load(file). Used for APIs, configuration. Top questions: CSV vs JSON (CSV tabular/flat, JSON hierarchical/nested), Process large files (read line by line for memory efficiency), Handle missing files (try-except FileNotFoundError or os.path.exists()). Real usage: Files uploaded to S3, processed by AWS Glue ETL, loaded to Redshift. Download from S3, read CSV, transform data, write JSON, upload back. Memory: TXT=Raw text, CSV=Comma Separated, JSON=API friendly. Formula: Read → Validate → Transform → Store. Master file handling for data pipelines.",

    memory: `📁 File Handling - Memory Map

📖 TXT Files = Raw Text Data
Comic: Reading diary
with open('data.txt', 'r') as file:
    content = file.read()
    print(content)
Memory: TXT = Raw text data

📊 CSV Files = Tabular Data
Comic: Excel sheet
import csv
with open('data.csv') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)
Memory: CSV = Comma Separated Values

📦 JSON Files = API Friendly
Comic: Online order form
import json
with open('data.json') as file:
    data = json.load(file)
    print(data)
Memory: JSON = API friendly format

🎯 File Flow Formula:
Read → Validate → Transform → Store

📊 Top Interview Questions:
1. CSV vs JSON? Tabular vs Hierarchical
2. Large files? Read line by line
3. Missing files? try-except FileNotFoundError

✅ Real Usage:
S3 file uploads
AWS Glue ETL processing
Redshift data loading
Log file parsing
API data exchange

🔑 File Modes:
'r' → Read (default)
'w' → Write (overwrite)
'a' → Append
'r+' → Read and write

📋 Quick Reference:
TXT → Plain text, logs
CSV → Tabular, spreadsheets
JSON → Nested, APIs
with → Auto close file
Line by line → Memory efficient`,

    revision: "File Handling: Essential for ETL pipelines. TXT files for plain text (logs, reports). Comic: Reading diary. Example: with open('data.txt','r') as f: content=f.read(). Modes: 'r' read, 'w' write, 'a' append. CSV files for tabular data (rows/columns). Comic: Excel sheet. Example: import csv; reader=csv.reader(file). JSON files for hierarchical data (nested key-value). Comic: Online order form. Example: import json; data=json.load(file). Top questions: CSV vs JSON (tabular vs hierarchical), Large files (line by line), Missing files (try-except FileNotFoundError). Real usage: S3 upload, AWS Glue processing, Redshift loading. Download CSV from S3, transform, write JSON, upload back. Memory: TXT=Raw, CSV=Comma Separated, JSON=API friendly. Formula: Read → Validate → Transform → Store. Master for data engineering."
  },

  "oop-basics": {
    title: "OOP Basics",
    icon: "🏗️",
    difficulty: "Structured Programming",
    duration: "60 min",
    description: "Object-oriented programming concepts frequently asked in interviews and used in scalable application development",

    comic: `🏗️ Car Blueprint (Class)

Engineer: "I have a blueprint for cars"
Blueprint defines:
- 4 wheels
- Engine
- Color
- Brand

This is CLASS = Blueprint! 🏗️

🚗 Actual Car (Object)

Factory: "Let's build cars from blueprint"
Car 1: Red Toyota
Car 2: Blue Honda
Car 3: Black BMW

Each car is OBJECT = Instance of blueprint! 🚗

👨‍👦 Family Traits (Inheritance)

Father: Brown eyes, Tall
Son: *Inherits* Brown eyes, Tall

class Parent:
    eyes = "Brown"

class Child(Parent):
    pass

Child gets parent's features! 👨‍👦

📱 Same Remote Different Devices (Polymorphism)

TV Remote: Power button → TV turns on
AC Remote: Power button → AC turns on
Fan Remote: Power button → Fan turns on

Same button, different behavior!

class TV:
    def power(self):
        print("TV On")

class AC:
    def power(self):
        print("AC On")

Polymorphism = Same method, different actions! 📱

🎯 Aha Moment:
OOP makes code reusable and scalable!
Used in AWS Lambda, Glue, and production systems! 🚀`,

    deepDive: `🏗️ OOP Basics - Complete Guide

📌 Module Description:
This module teaches object-oriented programming concepts frequently asked in interviews and used in scalable application development.

Category: Structured Programming
Importance: High Interview Importance

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ Topic 1: Class

Comic Story: Car Blueprint
Blueprint defines how all cars should be built.

What It Is:
Class is a blueprint/template for creating objects.

Interview Q&A:
Q: What is class?
A: A template that defines properties and behaviors.

Coding Example - Create employee class:
class Employee:
    name = 'Ankit'
    salary = 50000

print(Employee.name)  # Ankit

Coding Challenge:
Create Student class with name and marks

Hint: Use class keyword

Solution:
class Student:
    name = 'Rahul'
    marks = 90

print(Student.name)
print(Student.marks)

Quiz:
Q: Class is blueprint or object?
A: Blueprint

Memory Trick: Class = Blueprint

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚗 Topic 2: Object

Comic Story: Actual Car
Blueprint becomes real car.

What It Is:
Object is instance of class.

Coding Example - Create object:
class Employee:
    name = 'Ankit'

emp = Employee()
print(emp.name)  # Ankit

Coding Challenge:
Create multiple student objects

Hint: Instantiate class using parentheses

Solution:
class Student:
    name = 'Default'

student1 = Student()
student1.name = 'Ankit'

student2 = Student()
student2.name = 'Rahul'

print(student1.name)  # Ankit
print(student2.name)  # Rahul

Memory Trick: Object = Real instance

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👨‍👦 Topic 3: Inheritance

Comic Story: Family Traits
Children inherit qualities from parents.

What It Is:
Child class inherits parent class properties.

Coding Example - Employee inheritance:
class Parent:
    def show(self):
        print('Parent')

class Child(Parent):
    pass

obj = Child()
obj.show()  # Parent

Coding Challenge:
Create vehicle inheritance example

Hint: Pass parent class inside child class

Solution:
class Vehicle:
    def start(self):
        print('Vehicle started')

class Car(Vehicle):
    pass

my_car = Car()
my_car.start()  # Vehicle started

Interview Question:
Q: Why use inheritance?
A: Code reusability, avoid duplication, create hierarchies.

Memory Trick: Inheritance = Child gets parent features

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 Topic 4: Polymorphism

Comic Story: Same Remote Different Devices
Same button behaves differently.

What It Is:
Same method behaves differently in different classes.

Coding Example - Animal sounds:
class Dog:
    def sound(self):
        print('Bark')

class Cat:
    def sound(self):
        print('Meow')

dog = Dog()
cat = Cat()

dog.sound()  # Bark
cat.sound()  # Meow

Coding Challenge:
Create payment method polymorphism example

Hint: Use same method name in multiple classes

Solution:
class CreditCard:
    def pay(self):
        print('Paid with Credit Card')

class PayPal:
    def pay(self):
        print('Paid with PayPal')

class Cash:
    def pay(self):
        print('Paid with Cash')

payment1 = CreditCard()
payment2 = PayPal()

payment1.pay()  # Paid with Credit Card
payment2.pay()  # Paid with PayPal

Interview Question:
Q: Why is polymorphism useful in large systems?
A: Allows same interface for different implementations, makes code flexible and maintainable.

Memory Trick: Poly = Many forms

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Top Interview Questions:

1. Class vs Object
   Answer: Class is blueprint/template. Object is instance of class.
   Example: class Car (blueprint), my_car = Car() (object).

2. Inheritance types
   Answer: Single (one parent), Multiple (many parents), Multilevel (chain), Hierarchical (one parent, many children).

3. Real-world polymorphism example
   Answer: Payment systems - CreditCard, PayPal, Cash all have pay() method but different implementations.

4. Why OOP is used?
   Answer: Code reusability, modularity, easier maintenance, real-world modeling, scalability.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Usage:

OOP is used for building reusable ETL frameworks in AWS Glue and utility classes in Databricks notebooks.

Example - ETL Framework:
class DataProcessor:
    def __init__(self, source):
        self.source = source
    
    def extract(self):
        print(f'Extracting from {self.source}')
    
    def transform(self):
        print('Transforming data')
    
    def load(self, destination):
        print(f'Loading to {destination}')

class S3Processor(DataProcessor):
    def extract(self):
        print(f'Extracting from S3: {self.source}')

class RedshiftProcessor(DataProcessor):
    def load(self, destination):
        print(f'Loading to Redshift: {destination}')

# Usage
s3_job = S3Processor('s3://bucket/data.csv')
s3_job.extract()
s3_job.transform()
s3_job.load('s3://bucket/output/')

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Revision Formula:

OOP Formula:
Blueprint → Instance → Reuse → Flexibility

🏗️ Blueprint = Class (template)
🚗 Instance = Object (real entity)
👨‍👦 Reuse = Inheritance (child gets parent features)
📱 Flexibility = Polymorphism (same method, different behavior)

Master OOP → Build scalable systems! 🚀`,

    types: `🏗️ OOP Basics - Quick Reference

🏗️ Class:
class Employee:
    name = 'Ankit'
    salary = 50000

🚗 Object:
emp = Employee()
print(emp.name)

👨‍👦 Inheritance:
class Parent:
    def show(self):
        print('Parent')

class Child(Parent):
    pass

obj = Child()
obj.show()

📱 Polymorphism:
class Dog:
    def sound(self):
        print('Bark')

class Cat:
    def sound(self):
        print('Meow')

🔧 Constructor:
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

emp = Employee('Ankit', 50000)

📊 Method:
class Calculator:
    def add(self, a, b):
        return a + b

calc = Calculator()
print(calc.add(10, 20))`,

    qa: [
      {
        q: "What is a class?",
        a: "Class is a blueprint/template for creating objects. Defines properties and methods. Example: class Employee: name='Ankit'. Used to create multiple objects with same structure."
      },
      {
        q: "What is an object?",
        a: "Object is an instance of a class. Example: emp = Employee(). Each object has its own data. Multiple objects can be created from one class."
      },
      {
        q: "Difference between class and object?",
        a: "Class is blueprint/template (design). Object is instance (real entity). Example: class Car is blueprint, my_car = Car() is object. Class defined once, objects created many times."
      },
      {
        q: "What is inheritance?",
        a: "Inheritance allows child class to inherit properties and methods from parent class. Example: class Child(Parent). Provides code reusability, avoids duplication."
      },
      {
        q: "What is polymorphism?",
        a: "Polymorphism means same method name behaves differently in different classes. Example: Dog.sound() prints 'Bark', Cat.sound() prints 'Meow'. Provides flexibility."
      },
      {
        q: "Why use OOP?",
        a: "OOP provides code reusability, modularity, easier maintenance, real-world modeling, scalability. Used in large systems, frameworks, libraries. Makes code organized and manageable."
      },
      {
        q: "What is self in Python?",
        a: "self refers to current instance of class. Used to access instance variables and methods. Example: def __init__(self, name): self.name = name. First parameter in instance methods."
      },
      {
        q: "What is __init__ method?",
        a: "__init__ is constructor method, called when object is created. Initializes object attributes. Example: def __init__(self, name): self.name = name. Automatically invoked."
      },
      {
        q: "Types of inheritance?",
        a: "Single (one parent), Multiple (many parents), Multilevel (chain), Hierarchical (one parent, many children). Example: class Child(Parent) is single inheritance."
      },
      {
        q: "Real-world OOP example?",
        a: "Payment systems: CreditCard, PayPal, Cash classes all have pay() method. ETL frameworks: S3Processor, RedshiftProcessor inherit from DataProcessor. Provides reusable, maintainable code."
      }
    ],

    coding: {
      title: "OOP Basics - Coding Challenges",
      scenario: "Practice object-oriented programming for scalable applications",
      question: "Create Employee class with name and salary",
      input: "class Employee with attributes",
      expectedOutput: "Employee object with name and salary",
      hint: "Use class keyword and define attributes",
      solution: "class Employee:\n    name = 'Ankit'\n    salary = 50000\n\nprint(Employee.name)\nprint(Employee.salary)",
      note: "Class is blueprint, defines structure for objects.",
      thinkingApproach: [
        "Define class using class keyword",
        "Add attributes (name, salary)",
        "Access attributes using ClassName.attribute",
        "Create objects to use the class"
      ],
      questions: [
        {
          q: "1. Create Employee class with name and salary",
          answer: "class Employee:\n    name = 'Ankit'\n    salary = 50000\n\nprint(Employee.name)"
        },
        {
          q: "2. Create Student class with name and marks",
          answer: "class Student:\n    name = 'Rahul'\n    marks = 90\n\nprint(Student.name)\nprint(Student.marks)"
        },
        {
          q: "3. Create object from Employee class",
          answer: "class Employee:\n    name = 'Ankit'\n\nemp = Employee()\nprint(emp.name)"
        },
        {
          q: "4. Create multiple student objects",
          answer: "class Student:\n    name = 'Default'\n\nstudent1 = Student()\nstudent1.name = 'Ankit'\n\nstudent2 = Student()\nstudent2.name = 'Rahul'\n\nprint(student1.name)\nprint(student2.name)"
        },
        {
          q: "5. Create inheritance example with Parent and Child",
          answer: "class Parent:\n    def show(self):\n        print('Parent')\n\nclass Child(Parent):\n    pass\n\nobj = Child()\nobj.show()"
        },
        {
          q: "6. Create vehicle inheritance example",
          answer: "class Vehicle:\n    def start(self):\n        print('Vehicle started')\n\nclass Car(Vehicle):\n    pass\n\nmy_car = Car()\nmy_car.start()"
        },
        {
          q: "7. Create polymorphism example with Dog and Cat",
          answer: "class Dog:\n    def sound(self):\n        print('Bark')\n\nclass Cat:\n    def sound(self):\n        print('Meow')\n\ndog = Dog()\ncat = Cat()\n\ndog.sound()\ncat.sound()"
        },
        {
          q: "8. Create payment method polymorphism",
          answer: "class CreditCard:\n    def pay(self):\n        print('Paid with Credit Card')\n\nclass PayPal:\n    def pay(self):\n        print('Paid with PayPal')\n\npayment1 = CreditCard()\npayment2 = PayPal()\n\npayment1.pay()\npayment2.pay()"
        },
        {
          q: "9. Create class with constructor",
          answer: "class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n\nemp = Employee('Ankit', 50000)\nprint(emp.name)\nprint(emp.salary)"
        },
        {
          q: "10. Create Calculator class with add method",
          answer: "class Calculator:\n    def add(self, a, b):\n        return a + b\n\ncalc = Calculator()\nresult = calc.add(10, 20)\nprint(result)"
        }
      ]
    },

    quiz: [
      { q: "Class is blueprint or object?", options: ["Object", "Blueprint", "Method", "Variable"], answer: 1 },
      { q: "Object is?", options: ["Blueprint", "Instance of class", "Function", "Loop"], answer: 1 },
      { q: "Inheritance provides?", options: ["Nothing", "Code reusability", "Errors", "Loops"], answer: 1 },
      { q: "Polymorphism means?", options: ["One form", "Many forms", "No forms", "Two forms"], answer: 1 },
      { q: "self refers to?", options: ["Parent", "Current instance", "Child", "Nothing"], answer: 1 },
      { q: "__init__ is?", options: ["Destructor", "Constructor", "Method", "Variable"], answer: 1 },
      { q: "Child class inherits from?", options: ["Object", "Parent class", "Method", "Variable"], answer: 1 },
      { q: "Why use OOP?", options: ["Complexity", "Reusability", "Errors", "Slowness"], answer: 1 },
      { q: "Class keyword creates?", options: ["Object", "Blueprint", "Function", "Loop"], answer: 1 },
      { q: "Real-world OOP example?", options: ["Variables", "Payment systems", "Loops", "Conditions"], answer: 1 }
    ],

    interview: "OOP Basics: Object-oriented programming for scalable applications. Class is blueprint/template defining structure. Comic: Car blueprint - defines how cars are built. Example: class Employee: name='Ankit'. Object is instance of class, real entity. Comic: Actual car - blueprint becomes real car. Example: emp=Employee(). Inheritance allows child class to inherit parent properties. Comic: Family traits - son inherits father's features. Example: class Child(Parent). Provides code reusability. Polymorphism means same method behaves differently in different classes. Comic: Same remote different devices - power button behaves differently. Example: Dog.sound() prints 'Bark', Cat.sound() prints 'Meow'. Provides flexibility. Top questions: Class vs Object (blueprint vs instance), Inheritance types (single, multiple, multilevel, hierarchical), Real-world polymorphism (payment systems), Why OOP (reusability, modularity, maintenance, scalability). Real usage: AWS Glue ETL frameworks, Databricks utility classes. Example: DataProcessor parent class, S3Processor and RedshiftProcessor child classes inherit and override methods. Memory: Class=Blueprint, Object=Instance, Inheritance=Reuse, Polymorphism=Flexibility. Formula: Blueprint → Instance → Reuse → Flexibility. Master OOP for scalable systems.",

    memory: `🏗️ OOP Basics - Memory Map

🏗️ Class = Blueprint
Comic: Car blueprint
class Employee:
    name = 'Ankit'
    salary = 50000
Memory: Class = Blueprint

🚗 Object = Real Instance
Comic: Actual car
emp = Employee()
print(emp.name)
Memory: Object = Real instance

👨‍👦 Inheritance = Child Gets Parent Features
Comic: Family traits
class Parent:
    def show(self):
        print('Parent')

class Child(Parent):
    pass

obj = Child()
obj.show()
Memory: Inheritance = Reuse

📱 Polymorphism = Many Forms
Comic: Same remote different devices
class Dog:
    def sound(self):
        print('Bark')

class Cat:
    def sound(self):
        print('Meow')
Memory: Poly = Many forms

🎯 OOP Formula:
Blueprint → Instance → Reuse → Flexibility

📊 Top Interview Questions:
1. Class vs Object? Blueprint vs Instance
2. Inheritance types? Single, Multiple, Multilevel
3. Polymorphism example? Payment systems
4. Why OOP? Reusability, Modularity, Scalability

✅ Real Usage:
AWS Glue ETL frameworks
Databricks utility classes
Reusable data pipelines
Scalable applications
Production systems

🔑 Quick Reference:
Class → Blueprint (template)
Object → Instance (real entity)
Inheritance → Code reusability
Polymorphism → Flexibility
self → Current instance
__init__ → Constructor`,

    revision: "OOP Basics: Class is blueprint (car blueprint), Object is instance (actual car). Inheritance allows child to inherit parent features (family traits). Polymorphism means same method, different behavior (same remote, different devices). Top questions: Class vs Object (blueprint vs instance), Inheritance types (single, multiple, multilevel), Polymorphism example (payment systems), Why OOP (reusability, modularity, scalability). Real usage: AWS Glue ETL frameworks, Databricks utility classes. Memory: Class=Blueprint, Object=Instance, Inheritance=Reuse, Polymorphism=Flexibility. Formula: Blueprint → Instance → Reuse → Flexibility. Master OOP for scalable systems."
  },

  "builtin-functions": {
    title: "Important Built-in Functions",
    icon: "⚡",
    difficulty: "Python Productivity",
    duration: "55 min",
    description: "Python built-in functions frequently asked in interviews and widely used in real-world data transformations",

    comic: `🏭 Factory Machine (map)

Factory Manager: "Apply same operation to every product"
Products: [Raw1, Raw2, Raw3]
Machine: *Processes each* → [Finished1, Finished2, Finished3]

In Python:
nums = [1, 2, 3]
result = list(map(lambda x: x*x, nums))
print(result)  # [1, 4, 9]

Same operation applied everywhere! 🏭

🛂 Airport Security Filter (filter)

Security: "Only valid passengers move ahead"
Passengers: [Valid, Invalid, Valid, Invalid]
After Filter: [Valid, Valid]

In Python:
nums = [1, 2, 3, 4]
result = list(filter(lambda x: x%2==0, nums))
print(result)  # [2, 4]

Keep only what passes the test! 🛂

💑 Marriage Pairing (zip)

Matchmaker: "Pair boys with girls"
Boys: [A, B, C]
Girls: [X, Y, Z]
Pairs: [(A,X), (B,Y), (C,Z)]

In Python:
names = ['Ankit', 'Rahul']
salary = [50000, 60000]
print(list(zip(names, salary)))
# [('Ankit', 50000), ('Rahul', 60000)]

Two groups paired together! 💑

📋 Class Attendance (enumerate)

Teacher: "Every student gets roll number"
Students: [Ankit, Rahul, Priya]
With Roll: [(0,Ankit), (1,Rahul), (2,Priya)]

In Python:
names = ['Ankit', 'Rahul']
for i, name in enumerate(names):
    print(i, name)
# 0 Ankit
# 1 Rahul

Index automatically tracked! 📋

🎯 Aha Moment:
Built-in functions make code cleaner and faster!
Used heavily in AWS Glue and PySpark transformations! 🚀`,

    deepDive: `⚡ Important Built-in Functions - Complete Guide

📌 Module Description:
This module teaches Python built-in functions frequently asked in interviews and widely used in real-world data transformations.

Category: Python Productivity
Importance: High Interview Importance

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏭 Topic 1: map()

Comic Story: Factory Machine
Same operation applied to every product.

What It Is:
Applies function to every element of iterable.

Interview Q&A:
Q: Why use map instead of loop?
A: Cleaner syntax for applying same transformation.

Coding Example 1 - Square all numbers:
nums = [1, 2, 3]
result = list(map(lambda x: x*x, nums))
print(result)  # [1, 4, 9]

Coding Example 2 - Convert to uppercase:
names = ['ankit', 'rahul']
result = list(map(str.upper, names))
print(result)  # ['ANKIT', 'RAHUL']

Coding Challenge:
Convert all names to uppercase

Hint: Use lambda with upper()

Solution:
names = ['ankit', 'rahul', 'priya']
result = list(map(lambda x: x.upper(), names))
print(result)  # ['ANKIT', 'RAHUL', 'PRIYA']

Quiz:
Q: map returns what type?
A: Map object (need to convert to list)

Interview Question:
Q: Where is map used in data engineering?
A: Transforming column values in DataFrames, applying same function to all records, data cleaning operations.

Memory Trick: Map = Apply everywhere

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛂 Topic 2: filter()

Comic Story: Airport Security Filter
Only valid passengers move ahead.

What It Is:
Filters elements based on condition.

Coding Example 1 - Find even numbers:
nums = [1, 2, 3, 4]
result = list(filter(lambda x: x%2==0, nums))
print(result)  # [2, 4]

Coding Example 2 - Filter adults:
ages = [15, 20, 17, 25, 30]
adults = list(filter(lambda x: x>=18, ages))
print(adults)  # [20, 25, 30]

Coding Challenge:
Filter salaries greater than 50000

Hint: Use conditional lambda

Solution:
salaries = [40000, 60000, 45000, 70000, 55000]
high_salaries = list(filter(lambda x: x>50000, salaries))
print(high_salaries)  # [60000, 70000, 55000]

Memory Trick: Filter = Keep valid

Interview Question:
Q: Difference between map and filter?
A: Map transforms all elements (returns same count). Filter selects elements (returns fewer or equal count).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💑 Topic 3: zip()

Comic Story: Marriage Pairing
Two groups are paired together.

What It Is:
Combines multiple iterables.

Coding Example 1 - Combine names and salaries:
names = ['Ankit', 'Rahul']
salary = [50000, 60000]
print(list(zip(names, salary)))
# [('Ankit', 50000), ('Rahul', 60000)]

Coding Example 2 - Create dictionary from two lists:
keys = ['name', 'age', 'city']
values = ['Ankit', 25, 'Pune']
result = dict(zip(keys, values))
print(result)  # {'name': 'Ankit', 'age': 25, 'city': 'Pune'}

Coding Challenge:
Combine product names with prices

Hint: Pass multiple lists in zip()

Solution:
products = ['Laptop', 'Mouse', 'Keyboard']
prices = [50000, 500, 1500]
result = list(zip(products, prices))
print(result)
# [('Laptop', 50000), ('Mouse', 500), ('Keyboard', 1500)]

Interview Question:
Q: Where is zip used in ETL?
A: Combining data from multiple sources, creating key-value pairs, merging parallel lists into records.

Memory Trick: Zip = Pair together

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Topic 4: enumerate()

Comic Story: Class Attendance
Every student gets roll number.

What It Is:
Provides index with values.

Coding Example 1 - Print index with names:
names = ['Ankit', 'Rahul', 'Priya']
for i, name in enumerate(names):
    print(i, name)
# 0 Ankit
# 1 Rahul
# 2 Priya

Coding Example 2 - Start index from 1:
names = ['Ankit', 'Rahul']
for i, name in enumerate(names, start=1):
    print(f'Student {i}: {name}')
# Student 1: Ankit
# Student 2: Rahul

Coding Challenge:
Print product positions in cart

Hint: Use enumerate in loop

Solution:
cart = ['Laptop', 'Mouse', 'Keyboard']
for position, product in enumerate(cart, start=1):
    print(f'Position {position}: {product}')
# Position 1: Laptop
# Position 2: Mouse
# Position 3: Keyboard

Quiz:
Q: What extra value does enumerate provide?
A: Index

Memory Trick: Enumerate = Index tracker

Interview Question:
Q: enumerate vs normal loop?
A: enumerate provides automatic index tracking, cleaner than manual counter (i=0, i+=1).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Top Interview Questions:

1. map vs filter
   Answer: map transforms all elements (same count). filter selects elements (fewer or equal count).
   Example: map(lambda x: x*2, [1,2,3]) → [2,4,6]. filter(lambda x: x>1, [1,2,3]) → [2,3].

2. zip use cases
   Answer: Combine parallel lists, create dictionaries from keys/values, merge data from multiple sources.

3. enumerate vs normal loop
   Answer: enumerate provides automatic index, cleaner than manual counter. Example: for i,val in enumerate(list).

4. Lambda with map
   Answer: Lambda provides inline function for map. Example: map(lambda x: x*x, nums) squares all numbers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Usage:

Used for data transformations inside AWS Glue jobs and PySpark notebook pipelines.

Example - AWS Glue ETL:
# Map - Transform all salaries
salaries = [40000, 50000, 60000]
increased = list(map(lambda x: x * 1.1, salaries))

# Filter - Get high performers
scores = [60, 75, 85, 90, 55]
high_performers = list(filter(lambda x: x >= 80, scores))

# Zip - Combine employee data
names = ['Ankit', 'Rahul', 'Priya']
departments = ['IT', 'HR', 'Finance']
employees = list(zip(names, departments))

# Enumerate - Track record positions
for index, record in enumerate(data_records):
    print(f'Processing record {index}: {record}')

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Revision Formula:

Built-in Formula:
Transform → Filter → Combine → Track

🏭 Transform = map() (apply function everywhere)
🛂 Filter = filter() (keep valid only)
💑 Combine = zip() (pair together)
📋 Track = enumerate() (index tracker)

Master built-in functions → Write cleaner code! 🚀`,

    types: `⚡ Built-in Functions - Quick Reference

🏭 map():
nums = [1, 2, 3]
result = list(map(lambda x: x*x, nums))
# [1, 4, 9]

names = ['ankit', 'rahul']
result = list(map(str.upper, names))
# ['ANKIT', 'RAHUL']

🛂 filter():
nums = [1, 2, 3, 4]
result = list(filter(lambda x: x%2==0, nums))
# [2, 4]

ages = [15, 20, 17, 25]
adults = list(filter(lambda x: x>=18, ages))
# [20, 25]

💑 zip():
names = ['Ankit', 'Rahul']
salary = [50000, 60000]
result = list(zip(names, salary))
# [('Ankit', 50000), ('Rahul', 60000)]

keys = ['name', 'age']
values = ['Ankit', 25]
result = dict(zip(keys, values))
# {'name': 'Ankit', 'age': 25}

📋 enumerate():
names = ['Ankit', 'Rahul']
for i, name in enumerate(names):
    print(i, name)
# 0 Ankit
# 1 Rahul

for i, name in enumerate(names, start=1):
    print(f'{i}: {name}')
# 1: Ankit
# 2: Rahul`,

    qa: [
      {
        q: "What does map() do?",
        a: "map() applies function to every element of iterable. Returns map object (convert to list). Example: list(map(lambda x: x*2, [1,2,3])) returns [2,4,6]. Used for transforming all elements."
      },
      {
        q: "What does filter() do?",
        a: "filter() selects elements based on condition. Returns filter object. Example: list(filter(lambda x: x>2, [1,2,3,4])) returns [3,4]. Used for selecting valid elements."
      },
      {
        q: "Difference between map and filter?",
        a: "map transforms all elements (same count). filter selects elements (fewer or equal count). map: [1,2,3] → [2,4,6]. filter: [1,2,3,4] → [2,4] (only even)."
      },
      {
        q: "What does zip() do?",
        a: "zip() combines multiple iterables into tuples. Example: zip(['A','B'], [1,2]) returns [('A',1), ('B',2)]. Used for pairing parallel lists, creating dictionaries."
      },
      {
        q: "What does enumerate() do?",
        a: "enumerate() provides index with values. Example: for i,val in enumerate(['A','B']): print(i,val) prints 0 A, 1 B. Can start from custom index: enumerate(list, start=1)."
      },
      {
        q: "Why use map instead of loop?",
        a: "map provides cleaner syntax, more readable, functional programming style. Example: map(lambda x: x*2, nums) vs for loop with append. Often faster for simple transformations."
      },
      {
        q: "How to create dictionary from two lists?",
        a: "Use dict(zip(keys, values)). Example: keys=['name','age'], values=['Ankit',25], dict(zip(keys,values)) returns {'name':'Ankit','age':25}."
      },
      {
        q: "enumerate vs normal loop?",
        a: "enumerate provides automatic index tracking. Cleaner than manual counter (i=0, i+=1). Example: for i,val in enumerate(list) vs i=0; for val in list: i+=1."
      },
      {
        q: "Where is map used in data engineering?",
        a: "Transforming DataFrame columns, applying same function to all records, data cleaning (uppercase, strip, format), salary increases, price calculations."
      },
      {
        q: "Where is filter used in ETL?",
        a: "Selecting valid records, removing nulls, filtering by date range, getting high-value transactions, quality checks, data validation."
      }
    ],

    coding: {
      title: "Built-in Functions - Coding Challenges",
      scenario: "Practice built-in functions for data transformations",
      question: "Square all numbers using map",
      input: "nums = [1, 2, 3, 4, 5]",
      expectedOutput: "[1, 4, 9, 16, 25]",
      hint: "Use map with lambda function",
      solution: "nums = [1, 2, 3, 4, 5]\nresult = list(map(lambda x: x*x, nums))\nprint(result)",
      note: "map applies function to every element. Returns map object, convert to list.",
      thinkingApproach: [
        "Identify transformation needed (square)",
        "Use map with lambda function",
        "Convert map object to list",
        "Print result"
      ],
      questions: [
        {
          q: "1. Square all numbers using map",
          answer: "nums = [1, 2, 3]\nresult = list(map(lambda x: x*x, nums))\nprint(result)"
        },
        {
          q: "2. Convert all names to uppercase using map",
          answer: "names = ['ankit', 'rahul', 'priya']\nresult = list(map(lambda x: x.upper(), names))\nprint(result)"
        },
        {
          q: "3. Find even numbers using filter",
          answer: "nums = [1, 2, 3, 4, 5, 6]\nresult = list(filter(lambda x: x%2==0, nums))\nprint(result)"
        },
        {
          q: "4. Filter salaries greater than 50000",
          answer: "salaries = [40000, 60000, 45000, 70000, 55000]\nhigh_salaries = list(filter(lambda x: x>50000, salaries))\nprint(high_salaries)"
        },
        {
          q: "5. Filter adults (age >= 18)",
          answer: "ages = [15, 20, 17, 25, 30]\nadults = list(filter(lambda x: x>=18, ages))\nprint(adults)"
        },
        {
          q: "6. Combine names and salaries using zip",
          answer: "names = ['Ankit', 'Rahul']\nsalary = [50000, 60000]\nresult = list(zip(names, salary))\nprint(result)"
        },
        {
          q: "7. Combine product names with prices",
          answer: "products = ['Laptop', 'Mouse', 'Keyboard']\nprices = [50000, 500, 1500]\nresult = list(zip(products, prices))\nprint(result)"
        },
        {
          q: "8. Create dictionary from keys and values using zip",
          answer: "keys = ['name', 'age', 'city']\nvalues = ['Ankit', 25, 'Pune']\nresult = dict(zip(keys, values))\nprint(result)"
        },
        {
          q: "9. Print index with names using enumerate",
          answer: "names = ['Ankit', 'Rahul', 'Priya']\nfor i, name in enumerate(names):\n    print(i, name)"
        },
        {
          q: "10. Print product positions in cart (start from 1)",
          answer: "cart = ['Laptop', 'Mouse', 'Keyboard']\nfor position, product in enumerate(cart, start=1):\n    print(f'Position {position}: {product}')"
        }
      ]
    },

    quiz: [
      { q: "map returns what type?", options: ["List", "Map object", "Tuple", "Set"], answer: 1 },
      { q: "filter returns what type?", options: ["List", "Filter object", "Tuple", "Set"], answer: 1 },
      { q: "map vs filter?", options: ["Same", "map transforms, filter selects", "filter transforms", "Both select"], answer: 1 },
      { q: "zip combines?", options: ["One list", "Multiple iterables", "Nothing", "Only two lists"], answer: 1 },
      { q: "enumerate provides?", options: ["Values only", "Index with values", "Index only", "Nothing"], answer: 1 },
      { q: "Why use map?", options: ["Slower", "Cleaner syntax", "Complex", "Useless"], answer: 1 },
      { q: "dict(zip(keys,values)) creates?", options: ["List", "Dictionary", "Tuple", "Set"], answer: 1 },
      { q: "enumerate start parameter?", options: ["Cannot change", "Can customize", "Always 0", "Always 1"], answer: 1 },
      { q: "map with lambda?", options: ["Not possible", "Inline function", "Complex", "Slow"], answer: 1 },
      { q: "filter condition returns?", options: ["String", "True/False", "Number", "List"], answer: 1 }
    ],

    interview: "Important Built-in Functions: Python productivity tools for data transformations. map() applies function to every element. Comic: Factory machine - same operation on every product. Example: list(map(lambda x: x*x, [1,2,3])) returns [1,4,9]. Used for transforming all elements. filter() selects elements based on condition. Comic: Airport security - only valid passengers pass. Example: list(filter(lambda x: x%2==0, [1,2,3,4])) returns [2,4]. Used for selecting valid elements. zip() combines multiple iterables into tuples. Comic: Marriage pairing - two groups paired. Example: zip(['A','B'], [1,2]) returns [('A',1),('B',2)]. Used for pairing lists, creating dictionaries. enumerate() provides index with values. Comic: Class attendance - every student gets roll number. Example: for i,name in enumerate(names): print(i,name). Automatic index tracking. Top questions: map vs filter (map transforms all, filter selects), zip use cases (combine lists, create dicts), enumerate vs loop (automatic index vs manual counter), Lambda with map (inline function). Real usage: AWS Glue transformations, PySpark pipelines. Transform salaries with map, filter high performers, zip employee data, enumerate records. Memory: Map=Apply everywhere, Filter=Keep valid, Zip=Pair together, Enumerate=Index tracker. Formula: Transform → Filter → Combine → Track. Master built-in functions for cleaner code.",

    memory: `⚡ Built-in Functions - Memory Map

🏭 map() = Apply Everywhere
Comic: Factory machine
nums = [1, 2, 3]
result = list(map(lambda x: x*x, nums))
# [1, 4, 9]
Memory: Map = Apply everywhere

🛂 filter() = Keep Valid
Comic: Airport security
nums = [1, 2, 3, 4]
result = list(filter(lambda x: x%2==0, nums))
# [2, 4]
Memory: Filter = Keep valid

💑 zip() = Pair Together
Comic: Marriage pairing
names = ['Ankit', 'Rahul']
salary = [50000, 60000]
result = list(zip(names, salary))
# [('Ankit', 50000), ('Rahul', 60000)]
Memory: Zip = Pair together

📋 enumerate() = Index Tracker
Comic: Class attendance
names = ['Ankit', 'Rahul']
for i, name in enumerate(names):
    print(i, name)
# 0 Ankit
# 1 Rahul
Memory: Enumerate = Index tracker

🎯 Built-in Formula:
Transform → Filter → Combine → Track

📊 Top Interview Questions:
1. map vs filter? Transform vs Select
2. zip use cases? Combine lists, create dicts
3. enumerate vs loop? Auto index vs manual
4. Lambda with map? Inline function

✅ Real Usage:
AWS Glue transformations
PySpark pipelines
Data cleaning
Column transformations
Record filtering

🔑 Quick Reference:
map() → Transform all elements
filter() → Select valid elements
zip() → Combine iterables
enumerate() → Index + values
Lambda → Inline function`,

    revision: "Built-in Functions: map() applies function to all elements (factory machine). Example: list(map(lambda x: x*x, [1,2,3])). filter() selects based on condition (airport security). Example: list(filter(lambda x: x%2==0, [1,2,3,4])). zip() combines iterables (marriage pairing). Example: zip(['A','B'], [1,2]). enumerate() provides index with values (class attendance). Example: for i,val in enumerate(list). Top questions: map vs filter (transform vs select), zip use cases (combine lists, dicts), enumerate vs loop (auto index), Lambda with map (inline function). Real usage: AWS Glue, PySpark transformations. Memory: Map=Apply, Filter=Keep valid, Zip=Pair, Enumerate=Index. Formula: Transform → Filter → Combine → Track. Master for cleaner code."
  },

  "pandas-basics": {
    title: "Pandas Basics",
    icon: "🐼",
    difficulty: "Data Analysis & Data Engineering",
    duration: "70 min",
    description: "Pandas fundamentals required for data projects, interviews, analytics work, and ETL debugging",

    comic: `📊 Excel Sheet (DataFrames)

Manager: "Show me employee data in table format"
Excel Sheet:
| Name  | Salary |
|-------|--------|
| Ankit | 50000  |
| Rahul | 60000  |

In Python:
import pandas as pd
data = {'name': ['Ankit', 'Rahul'], 'salary': [50000, 60000]}
df = pd.DataFrame(data)
print(df)

DataFrame = Digital Excel Sheet! 📊

🛍️ Shopping Filter (Filtering)

Customer: "Show only products under ₹1000"
All Products: [₹500, ₹1500, ₹800, ₹2000]
Filtered: [₹500, ₹800]

In Python:
df[df['salary'] > 50000]

Keep only what matches condition! 🛍️

💑 Marriage Matching (Merge)

Matchmaker: "Combine two families based on relation"
Family A: [Person1, Person2]
Family B: [Details1, Details2]
Combined: [Person1+Details1, Person2+Details2]

In Python:
pd.merge(df1, df2, on='id')

Join tables like SQL! 💑

📚 School Result Summary (GroupBy)

Principal: "Calculate class-wise averages"
Class A: [80, 90, 85] → Average: 85
Class B: [70, 75, 80] → Average: 75

In Python:
df.groupby('class')['marks'].mean()

Group and calculate! 📚

📝 Incomplete Forms (Missing Values)

Form Checker: "Some users forgot to fill fields"
Forms: [Complete, Incomplete, Complete, Incomplete]
Action: Fill missing or remove incomplete

In Python:
df.isnull().sum()  # Find missing
df.fillna(0)       # Fill missing

Clean the data! 📝

🎯 Aha Moment:
Pandas is Excel on steroids!
Used in every data project, ETL pipeline, and analytics work! 🚀`,

    deepDive: `🐼 Pandas Basics - Complete Guide

📌 Module Description:
This module teaches Pandas fundamentals required for data projects, interviews, analytics work, and ETL debugging.

Category: Data Analysis & Data Engineering
Importance: Extremely High

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Topic 1: DataFrames

Comic Story: Excel Sheet
Rows and columns organized in table format.

What It Is:
DataFrame is a tabular structure with rows and columns.

Interview Q&A:
Q: What is DataFrame?
A: A 2D table-like structure in Pandas.

Coding Example 1 - Create DataFrame:
import pandas as pd

data = {'name': ['Ankit', 'Rahul'], 'salary': [50000, 60000]}
df = pd.DataFrame(data)
print(df)

Coding Example 2 - Read CSV:
df = pd.read_csv('employees.csv')
print(df.head())  # First 5 rows

Coding Example 3 - Basic operations:
print(df.shape)      # (rows, columns)
print(df.columns)    # Column names
print(df.info())     # Data types and info
print(df.describe()) # Statistical summary

Coding Challenge:
Create student marks DataFrame

Hint: Pass dictionary into pd.DataFrame()

Solution:
import pandas as pd

data = {
    'name': ['Ankit', 'Rahul', 'Priya'],
    'marks': [85, 90, 88]
}
df = pd.DataFrame(data)
print(df)

Quiz:
Q: DataFrame resembles what?
A: Table/Excel sheet

Memory Trick: DataFrame = Table

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛍️ Topic 2: Filtering

Comic Story: Shopping Filter
Show only products under budget.

What It Is:
Used to filter rows based on conditions.

Coding Example 1 - Find high salary employees:
df[df['salary'] > 50000]

Coding Example 2 - Multiple conditions:
df[(df['salary'] > 50000) & (df['age'] < 30)]

Coding Example 3 - Filter by list:
df[df['department'].isin(['IT', 'HR'])]

Coding Challenge:
Filter students with marks above 80

Hint: Use boolean filtering

Solution:
high_performers = df[df['marks'] > 80]
print(high_performers)

Interview Question:
Q: How to filter with multiple conditions?
A: Use & (and), | (or) with parentheses. Example: df[(condition1) & (condition2)]

Memory Trick: Filter = Keep what matches

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💑 Topic 3: Merge

Comic Story: Marriage Matching
Combine two families based on relation.

What It Is:
Combines multiple DataFrames.

Coding Example 1 - Merge employee and department tables:
df1 = pd.DataFrame({'id': [1, 2], 'name': ['Ankit', 'Rahul']})
df2 = pd.DataFrame({'id': [1, 2], 'dept': ['IT', 'HR']})

result = pd.merge(df1, df2, on='id')
print(result)

Coding Example 2 - Different join types:
# Inner join (default)
pd.merge(df1, df2, on='id', how='inner')

# Left join
pd.merge(df1, df2, on='id', how='left')

# Right join
pd.merge(df1, df2, on='id', how='right')

# Outer join
pd.merge(df1, df2, on='id', how='outer')

Coding Challenge:
Merge customer and order data

Hint: Use common column

Solution:
customers = pd.DataFrame({'cust_id': [1, 2], 'name': ['Ankit', 'Rahul']})
orders = pd.DataFrame({'cust_id': [1, 2], 'amount': [5000, 3000]})

result = pd.merge(customers, orders, on='cust_id')
print(result)

Interview Question:
Q: Merge vs join?
A: merge() is more flexible, works on any column. join() works on index by default. merge is preferred.

Memory Trick: Merge = Combine tables

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 Topic 4: GroupBy

Comic Story: School Result Summary
Calculate class-wise averages.

What It Is:
Groups data and performs aggregations.

Coding Example 1 - Department salary total:
df.groupby('department')['salary'].sum()

Coding Example 2 - Multiple aggregations:
df.groupby('department').agg({
    'salary': ['sum', 'mean', 'count'],
    'age': 'mean'
})

Coding Example 3 - Group by multiple columns:
df.groupby(['department', 'city'])['salary'].mean()

Coding Challenge:
Find average marks by class

Hint: Use groupby + mean()

Solution:
data = {
    'class': ['A', 'A', 'B', 'B'],
    'marks': [80, 90, 70, 75]
}
df = pd.DataFrame(data)

avg_marks = df.groupby('class')['marks'].mean()
print(avg_marks)

Interview Question:
Q: How is groupby similar to SQL GROUP BY?
A: Both group rows by column values and perform aggregations (SUM, AVG, COUNT). Pandas groupby is SQL GROUP BY equivalent.

Memory Trick: GroupBy = Group and calculate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 Topic 5: Missing Values

Comic Story: Incomplete Forms
Some users forget to fill fields.

What It Is:
Handle null or missing values.

Coding Example 1 - Find missing values:
df.isnull().sum()  # Count nulls per column
df.isnull()        # Boolean mask

Coding Example 2 - Fill missing values:
df.fillna(0)                    # Fill with 0
df.fillna(df.mean())            # Fill with mean
df['salary'].fillna(50000)      # Fill specific column

Coding Example 3 - Drop missing values:
df.dropna()              # Drop rows with any null
df.dropna(subset=['age']) # Drop if age is null

Coding Challenge:
Replace missing salary with average salary

Hint: Use fillna()

Solution:
avg_salary = df['salary'].mean()
df['salary'].fillna(avg_salary, inplace=True)
print(df)

Quiz:
Q: Which function finds nulls?
A: isnull()

Memory Trick: Missing values = Data cleanup

Interview Question:
Q: How to handle null values?
A: Three approaches: 1) Fill with mean/median/mode (fillna), 2) Drop rows (dropna), 3) Forward/backward fill (ffill/bfill).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Top Interview Questions:

1. Merge vs join
   Answer: merge() is more flexible, works on any column. join() works on index. merge preferred for SQL-like joins.

2. Groupby vs SQL group by
   Answer: Both group rows and aggregate. Pandas: df.groupby('col')['val'].sum(). SQL: SELECT col, SUM(val) GROUP BY col.

3. How to handle null values?
   Answer: fillna() to fill, dropna() to remove, isnull() to detect. Choose based on data: fill with mean for numeric, drop if too many nulls.

4. Difference between loc and iloc?
   Answer: loc uses labels (column names, index labels). iloc uses integer positions. Example: df.loc[0, 'name'] vs df.iloc[0, 0].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Usage:

Teams often clean CSV files from S3 using Pandas before scaling transformations in PySpark or AWS Glue.

Example - ETL Pipeline:
import pandas as pd
import boto3

# Download from S3
s3 = boto3.client('s3')
s3.download_file('my-bucket', 'data.csv', 'local_data.csv')

# Load with Pandas
df = pd.read_csv('local_data.csv')

# Data cleaning
print(f"Original shape: {df.shape}")
print(f"Missing values: {df.isnull().sum()}")

# Fill missing values
df['salary'].fillna(df['salary'].mean(), inplace=True)

# Filter valid records
df = df[df['age'] >= 18]

# Group and aggregate
dept_summary = df.groupby('department')['salary'].agg(['sum', 'mean', 'count'])

# Merge with department info
dept_info = pd.read_csv('departments.csv')
final_df = pd.merge(df, dept_info, on='dept_id')

# Save cleaned data
final_df.to_csv('cleaned_data.csv', index=False)

# Upload to S3
s3.upload_file('cleaned_data.csv', 'my-bucket', 'processed/cleaned_data.csv')

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Revision Formula:

Pandas Formula:
Load → Filter → Merge → Aggregate → Clean

📊 Load = pd.read_csv(), pd.DataFrame()
🛍️ Filter = df[condition]
💑 Merge = pd.merge(df1, df2)
📚 Aggregate = df.groupby().agg()
📝 Clean = fillna(), dropna()

Master Pandas → Handle any data task! 🚀`,

    types: `🐼 Pandas Basics - Quick Reference

📊 Create DataFrame:
import pandas as pd

# From dictionary
data = {'name': ['A', 'B'], 'age': [25, 30]}
df = pd.DataFrame(data)

# From CSV
df = pd.read_csv('file.csv')

# Basic info
df.head()        # First 5 rows
df.tail()        # Last 5 rows
df.shape         # (rows, cols)
df.columns       # Column names
df.info()        # Data types
df.describe()    # Statistics

🛍️ Filtering:
df[df['age'] > 25]                    # Single condition
df[(df['age'] > 25) & (df['salary'] > 50000)]  # Multiple
df[df['dept'].isin(['IT', 'HR'])]     # Filter by list

💑 Merge:
pd.merge(df1, df2, on='id')           # Inner join
pd.merge(df1, df2, on='id', how='left')   # Left join
pd.merge(df1, df2, on='id', how='right')  # Right join
pd.merge(df1, df2, on='id', how='outer')  # Outer join

📚 GroupBy:
df.groupby('dept')['salary'].sum()    # Single agg
df.groupby('dept')['salary'].mean()   # Average
df.groupby('dept').agg({              # Multiple agg
    'salary': ['sum', 'mean'],
    'age': 'mean'
})

📝 Missing Values:
df.isnull().sum()        # Count nulls
df.fillna(0)             # Fill with 0
df.fillna(df.mean())     # Fill with mean
df.dropna()              # Drop rows with nulls

🔍 Selection:
df['name']               # Select column
df[['name', 'age']]      # Multiple columns
df.loc[0, 'name']        # By label
df.iloc[0, 0]            # By position`,

    qa: [
      {
        q: "What is Pandas DataFrame?",
        a: "DataFrame is 2D table-like structure with rows and columns. Like Excel sheet in Python. Example: pd.DataFrame({'name':['A','B'], 'age':[25,30]}). Used for data analysis and manipulation."
      },
      {
        q: "How to create DataFrame?",
        a: "Three ways: 1) From dictionary: pd.DataFrame(dict), 2) From CSV: pd.read_csv('file.csv'), 3) From lists: pd.DataFrame(data, columns=['col1','col2']). Dictionary is most common."
      },
      {
        q: "How to filter DataFrame?",
        a: "Use boolean indexing: df[df['age']>25]. Multiple conditions: df[(df['age']>25) & (df['salary']>50000)]. Use & for AND, | for OR, wrap conditions in parentheses."
      },
      {
        q: "What is merge in Pandas?",
        a: "merge() combines DataFrames like SQL JOIN. Example: pd.merge(df1, df2, on='id'). Types: inner (default), left, right, outer. Similar to SQL JOIN operations."
      },
      {
        q: "What is groupby?",
        a: "groupby() groups rows by column values and performs aggregations. Example: df.groupby('dept')['salary'].sum(). Similar to SQL GROUP BY. Used for summaries and analytics."
      },
      {
        q: "How to handle missing values?",
        a: "Three approaches: 1) fillna() to fill (df.fillna(0)), 2) dropna() to remove (df.dropna()), 3) isnull() to detect (df.isnull().sum()). Choose based on data context."
      },
      {
        q: "Difference between loc and iloc?",
        a: "loc uses labels (names): df.loc[0, 'name']. iloc uses integer positions: df.iloc[0, 0]. loc for named access, iloc for positional access."
      },
      {
        q: "How to read CSV file?",
        a: "Use pd.read_csv('file.csv'). Returns DataFrame. Options: sep for delimiter, header for column names, index_col for index. Example: pd.read_csv('data.csv', sep=',')."
      },
      {
        q: "Merge vs join?",
        a: "merge() is more flexible, works on any column. join() works on index by default. merge preferred for SQL-like operations. Example: pd.merge(df1, df2, on='id')."
      },
      {
        q: "Where is Pandas used in data engineering?",
        a: "Data cleaning before PySpark, ETL debugging, small file processing, exploratory analysis, CSV transformations, data validation, prototyping pipelines before scaling to Spark."
      }
    ],

    coding: {
      title: "Pandas Basics - Coding Challenges",
      scenario: "Practice Pandas for data analysis and ETL tasks",
      question: "Create DataFrame with employee data",
      input: "names=['Ankit','Rahul'], salaries=[50000,60000]",
      expectedOutput: "DataFrame with name and salary columns",
      hint: "Use pd.DataFrame() with dictionary",
      solution: "import pandas as pd\n\ndata = {'name': ['Ankit', 'Rahul'], 'salary': [50000, 60000]}\ndf = pd.DataFrame(data)\nprint(df)",
      note: "DataFrame is created from dictionary where keys become column names.",
      thinkingApproach: [
        "Import pandas library",
        "Create dictionary with column names as keys",
        "Pass dictionary to pd.DataFrame()",
        "Print the DataFrame"
      ],
      questions: [
        {
          q: "1. Create DataFrame with employee data",
          answer: "import pandas as pd\n\ndata = {'name': ['Ankit', 'Rahul'], 'salary': [50000, 60000]}\ndf = pd.DataFrame(data)\nprint(df)"
        },
        {
          q: "2. Create student marks DataFrame",
          answer: "import pandas as pd\n\ndata = {'name': ['Ankit', 'Rahul', 'Priya'], 'marks': [85, 90, 88]}\ndf = pd.DataFrame(data)\nprint(df)"
        },
        {
          q: "3. Filter employees with salary > 50000",
          answer: "high_salary = df[df['salary'] > 50000]\nprint(high_salary)"
        },
        {
          q: "4. Filter students with marks above 80",
          answer: "high_performers = df[df['marks'] > 80]\nprint(high_performers)"
        },
        {
          q: "5. Merge employee and department DataFrames",
          answer: "df1 = pd.DataFrame({'id': [1, 2], 'name': ['Ankit', 'Rahul']})\ndf2 = pd.DataFrame({'id': [1, 2], 'dept': ['IT', 'HR']})\n\nresult = pd.merge(df1, df2, on='id')\nprint(result)"
        },
        {
          q: "6. Merge customer and order data",
          answer: "customers = pd.DataFrame({'cust_id': [1, 2], 'name': ['Ankit', 'Rahul']})\norders = pd.DataFrame({'cust_id': [1, 2], 'amount': [5000, 3000]})\n\nresult = pd.merge(customers, orders, on='cust_id')\nprint(result)"
        },
        {
          q: "7. Find average marks by class using groupby",
          answer: "data = {'class': ['A', 'A', 'B', 'B'], 'marks': [80, 90, 70, 75]}\ndf = pd.DataFrame(data)\n\navg_marks = df.groupby('class')['marks'].mean()\nprint(avg_marks)"
        },
        {
          q: "8. Calculate department-wise salary total",
          answer: "dept_total = df.groupby('department')['salary'].sum()\nprint(dept_total)"
        },
        {
          q: "9. Find missing values in DataFrame",
          answer: "missing_count = df.isnull().sum()\nprint(missing_count)"
        },
        {
          q: "10. Fill missing salary with average salary",
          answer: "avg_salary = df['salary'].mean()\ndf['salary'].fillna(avg_salary, inplace=True)\nprint(df)"
        }
      ]
    },

    quiz: [
      { q: "DataFrame resembles what?", options: ["List", "Table/Excel sheet", "Dictionary", "Tuple"], answer: 1 },
      { q: "How to filter DataFrame?", options: ["filter()", "df[condition]", "select()", "where()"], answer: 1 },
      { q: "merge() is similar to?", options: ["Python join", "SQL JOIN", "List merge", "String merge"], answer: 1 },
      { q: "groupby() is similar to?", options: ["Python group", "SQL GROUP BY", "List group", "Dict group"], answer: 1 },
      { q: "Which finds missing values?", options: ["missing()", "isnull()", "null()", "empty()"], answer: 1 },
      { q: "Which fills missing values?", options: ["fill()", "fillna()", "replace()", "update()"], answer: 1 },
      { q: "loc uses?", options: ["Positions", "Labels/names", "Numbers", "Indexes"], answer: 1 },
      { q: "iloc uses?", options: ["Labels", "Integer positions", "Names", "Strings"], answer: 1 },
      { q: "Read CSV function?", options: ["read()", "pd.read_csv()", "load_csv()", "import_csv()"], answer: 1 },
      { q: "Pandas is used for?", options: ["Web dev", "Data analysis", "Gaming", "Graphics"], answer: 1 }
    ],

    interview: "Pandas Basics: Essential for data analysis and ETL debugging. DataFrame is 2D table structure like Excel. Comic: Excel sheet with rows and columns. Example: pd.DataFrame({'name':['A','B'], 'salary':[50000,60000]}). Created from dictionary, CSV, or lists. Filtering selects rows based on conditions. Comic: Shopping filter - show products under budget. Example: df[df['salary']>50000]. Use & for AND, | for OR. Merge combines DataFrames like SQL JOIN. Comic: Marriage matching - combine families. Example: pd.merge(df1, df2, on='id'). Types: inner, left, right, outer. GroupBy groups and aggregates data. Comic: School result summary - class-wise averages. Example: df.groupby('dept')['salary'].sum(). Similar to SQL GROUP BY. Missing values handled with isnull(), fillna(), dropna(). Comic: Incomplete forms - some fields empty. Example: df.isnull().sum() finds nulls, df.fillna(0) fills them. Top questions: Merge vs join (merge flexible, join on index), GroupBy vs SQL (both group and aggregate), Handle nulls (fill, drop, detect), loc vs iloc (labels vs positions). Real usage: Clean CSV from S3 before PySpark, ETL debugging, small file processing, data validation. Memory: DataFrame=Table, Filter=Keep matches, Merge=Combine, GroupBy=Group+Calculate, Missing=Cleanup. Formula: Load → Filter → Merge → Aggregate → Clean. Master Pandas for data tasks.",

    memory: `🐼 Pandas Basics - Memory Map

📊 DataFrame = Table
Comic: Excel sheet
import pandas as pd
data = {'name': ['Ankit', 'Rahul'], 'salary': [50000, 60000]}
df = pd.DataFrame(data)
Memory: DataFrame = Table

🛍️ Filtering = Keep Matches
Comic: Shopping filter
df[df['salary'] > 50000]
df[(df['age'] > 25) & (df['salary'] > 50000)]
Memory: Filter = Keep what matches

💑 Merge = Combine Tables
Comic: Marriage matching
pd.merge(df1, df2, on='id')
pd.merge(df1, df2, on='id', how='left')
Memory: Merge = Combine tables

📚 GroupBy = Group + Calculate
Comic: School result summary
df.groupby('department')['salary'].sum()
df.groupby('class')['marks'].mean()
Memory: GroupBy = Group and calculate

📝 Missing Values = Data Cleanup
Comic: Incomplete forms
df.isnull().sum()  # Find
df.fillna(0)       # Fill
df.dropna()        # Drop
Memory: Missing = Cleanup

🎯 Pandas Formula:
Load → Filter → Merge → Aggregate → Clean

📊 Top Interview Questions:
1. Merge vs join? merge flexible, join on index
2. GroupBy vs SQL? Both group and aggregate
3. Handle nulls? fill, drop, detect
4. loc vs iloc? labels vs positions

✅ Real Usage:
Clean CSV from S3
ETL debugging
Small file processing
Data validation
Exploratory analysis
Prototyping pipelines

🔑 Quick Reference:
pd.DataFrame() → Create table
df[condition] → Filter rows
pd.merge() → Combine tables
df.groupby() → Group and aggregate
df.isnull() → Find missing
df.fillna() → Fill missing
df.loc[] → By label
df.iloc[] → By position`,

    revision: "Pandas Basics: DataFrame is 2D table (Excel sheet). Create: pd.DataFrame(dict) or pd.read_csv(). Filtering: df[df['salary']>50000], use & for AND. Merge combines DataFrames (marriage matching): pd.merge(df1, df2, on='id'). Types: inner, left, right, outer. GroupBy groups and aggregates (school summary): df.groupby('dept')['salary'].sum(). Missing values: isnull() finds, fillna() fills, dropna() drops. Top questions: Merge vs join (merge flexible), GroupBy vs SQL (both group+aggregate), Handle nulls (fill/drop/detect), loc vs iloc (labels vs positions). Real usage: Clean CSV from S3, ETL debugging, data validation. Memory: DataFrame=Table, Filter=Keep matches, Merge=Combine, GroupBy=Group+Calculate, Missing=Cleanup. Formula: Load → Filter → Merge → Aggregate → Clean. Master Pandas for data tasks."
  },

  "api-handling": {
    title: "API Handling",
    icon: "🌐",
    difficulty: "Real Time Data Integration",
    duration: "60 min",
    description: "API integration skills used in modern pipelines, automation systems, and real-world engineering workflows",

    comic: `📞 Food Delivery Call (requests Library)

Customer: "I want to order food"
*Calls restaurant* → Request sent
Restaurant: "Here's your order" → Response received

In Python:
import requests
response = requests.get('https://api.example.com/data')
print(response.status_code)  # 200 = Success

You request, system responds! 📞

📦 Courier Box (JSON Response Parsing)

Delivery Person: "Here's your package"
You: *Opens box* → Checks contents inside

Package Contents (JSON):
{
  "name": "Ankit",
  "items": ["Laptop", "Mouse"],
  "total": 50000
}

In Python:
data = response.json()
print(data['name'])  # Ankit
print(data['items'])  # ['Laptop', 'Mouse']

Open response and extract data! 📦

🎯 Aha Moment:
APIs connect different systems!
Used in every modern pipeline, automation, and integration! 🚀`,

    deepDive: `🌐 API Handling - Complete Guide

📌 Module Description:
This module teaches API integration skills used in modern pipelines, automation systems, and real-world engineering workflows.

Category: Real Time Data Integration
Importance: Extremely High

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 Topic 1: requests Library

Comic Story: Food Delivery Call
You request food and restaurant sends response.

What It Is:
requests library is used to call external APIs.

Interview Q&A:
Q: Why use requests library?
A: To communicate with external systems through APIs.

Coding Example 1 - GET API data:
import requests

response = requests.get('https://api.example.com/data')
print(response.status_code)  # 200 = Success
print(response.text)          # Raw response

Coding Example 2 - POST request:
import requests

data = {'name': 'Ankit', 'age': 25}
response = requests.post('https://api.example.com/users', json=data)
print(response.status_code)

Coding Example 3 - Headers and authentication:
headers = {
    'Authorization': 'Bearer token123',
    'Content-Type': 'application/json'
}
response = requests.get('https://api.example.com/data', headers=headers)

Coding Example 4 - Query parameters:
params = {'city': 'Pune', 'limit': 10}
response = requests.get('https://api.example.com/weather', params=params)

Coding Challenge:
Fetch weather API data

Hint: Use requests.get()

Solution:
import requests

url = 'https://api.openweathermap.org/data/2.5/weather'
params = {
    'q': 'Pune',
    'appid': 'your_api_key'
}

response = requests.get(url, params=params)

if response.status_code == 200:
    data = response.json()
    print(f"Temperature: {data['main']['temp']}")
else:
    print(f"Error: {response.status_code}")

Quiz:
Q: Which library calls APIs?
A: requests

Memory Trick: Request = Ask system

Interview Question:
Q: GET vs POST?
A: GET retrieves data (read-only), POST sends data to create/update. GET uses URL params, POST uses request body.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 Topic 2: JSON Response Parsing

Comic Story: Courier Box
You open package and check contents.

What It Is:
Most APIs return JSON data which must be parsed.

Coding Example 1 - Parse JSON response:
import requests

response = requests.get('https://api.example.com/users')
data = response.json()  # Convert to Python dict

print(data['name'])
print(data['email'])

Coding Example 2 - Loop through API records:
response = requests.get('https://api.example.com/users')
users = response.json()

for user in users:
    print(f"ID: {user['id']}, Name: {user['name']}")

Coding Example 3 - Handle nested JSON:
data = {
    'user': {
        'name': 'Ankit',
        'address': {
            'city': 'Pune',
            'zip': '411001'
        }
    }
}

print(data['user']['name'])           # Ankit
print(data['user']['address']['city']) # Pune

Coding Example 4 - Extract specific fields:
response = requests.get('https://api.example.com/products')
products = response.json()

# Extract only names and prices
for product in products:
    name = product.get('name', 'Unknown')
    price = product.get('price', 0)
    print(f"{name}: \${price}")

Coding Challenge:
Extract customer emails from API response

Hint: Understand dictionary/list structure first

Solution:
import requests

response = requests.get('https://api.example.com/customers')
customers = response.json()

emails = []
for customer in customers:
    email = customer.get('email')
    if email:
        emails.append(email)

print(emails)

# Or using list comprehension
emails = [c['email'] for c in customers if 'email' in c]
print(emails)

Interview Question:
Q: How do you handle nested JSON responses?
A: Access nested keys using multiple brackets: data['user']['address']['city']. Use .get() for safe access to avoid KeyError.

Memory Trick: JSON = Dictionary + List structure

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Top Interview Questions:

1. GET vs POST
   Answer: GET retrieves data (read-only), appears in URL. POST sends data to create/update, data in request body. 
   Example: GET /users?id=1, POST /users with body {"name":"Ankit"}.

2. How to handle API failures?
   Answer: Check status_code (200=success, 404=not found, 500=server error). Use try-except for network errors.
   Example: if response.status_code == 200: process() else: log_error().

3. How to parse nested JSON?
   Answer: Use multiple brackets for nested access: data['user']['address']['city']. Use .get() for safe access.
   Example: city = data.get('user', {}).get('address', {}).get('city', 'Unknown').

4. How to secure APIs?
   Answer: Use authentication (API keys, OAuth tokens), HTTPS, rate limiting, input validation.
   Example: headers = {'Authorization': 'Bearer token123'}.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Usage:

Many teams pull customer data from REST APIs and load it into S3 before processing in AWS Glue.

Example - API to S3 Pipeline:
import requests
import json
import boto3
from datetime import datetime

# Fetch data from API
def fetch_api_data():
    url = 'https://api.example.com/customers'
    headers = {'Authorization': 'Bearer token123'}
    
    try:
        response = requests.get(url, headers=headers, timeout=30)
        
        if response.status_code == 200:
            return response.json()
        else:
            print(f"API Error: {response.status_code}")
            return None
            
    except requests.exceptions.RequestException as e:
        print(f"Network Error: {e}")
        return None

# Transform data
def transform_data(raw_data):
    transformed = []
    
    for record in raw_data:
        transformed_record = {
            'customer_id': record.get('id'),
            'name': record.get('name'),
            'email': record.get('email'),
            'city': record.get('address', {}).get('city'),
            'created_at': record.get('created_at'),
            'processed_date': datetime.now().isoformat()
        }
        transformed.append(transformed_record)
    
    return transformed

# Upload to S3
def upload_to_s3(data, bucket, key):
    s3 = boto3.client('s3')
    
    json_data = json.dumps(data, indent=2)
    
    s3.put_object(
        Bucket=bucket,
        Key=key,
        Body=json_data,
        ContentType='application/json'
    )
    
    print(f"Uploaded to s3://{bucket}/{key}")

# Main pipeline
def main():
    # Fetch
    raw_data = fetch_api_data()
    
    if raw_data:
        # Transform
        transformed_data = transform_data(raw_data)
        
        # Load to S3
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        s3_key = f"raw/customers_{timestamp}.json"
        
        upload_to_s3(transformed_data, 'my-data-bucket', s3_key)
        
        print(f"Pipeline completed: {len(transformed_data)} records processed")

if __name__ == '__main__':
    main()

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Revision Formula:

API Formula:
Request → Receive → Parse → Transform → Store

📞 Request = requests.get/post()
📥 Receive = response.status_code
📦 Parse = response.json()
🔄 Transform = Extract and clean data
💾 Store = Upload to S3/Database

Master API handling → Build modern integrations! 🚀`,

    types: `🌐 API Handling - Quick Reference

📞 requests Library:
import requests

# GET request
response = requests.get('https://api.example.com/data')
print(response.status_code)  # 200
print(response.text)          # Raw text
print(response.json())        # JSON data

# POST request
data = {'name': 'Ankit', 'age': 25}
response = requests.post(url, json=data)

# Headers
headers = {'Authorization': 'Bearer token123'}
response = requests.get(url, headers=headers)

# Query parameters
params = {'city': 'Pune', 'limit': 10}
response = requests.get(url, params=params)

# Timeout
response = requests.get(url, timeout=30)

📦 JSON Parsing:
# Parse response
data = response.json()

# Access data
print(data['name'])
print(data['user']['email'])

# Safe access
email = data.get('email', 'default@example.com')
city = data.get('user', {}).get('address', {}).get('city')

# Loop through list
for item in data:
    print(item['id'])

# Extract fields
names = [user['name'] for user in data]

🛡️ Error Handling:
try:
    response = requests.get(url, timeout=30)
    
    if response.status_code == 200:
        data = response.json()
    elif response.status_code == 404:
        print("Not found")
    else:
        print(f"Error: {response.status_code}")
        
except requests.exceptions.Timeout:
    print("Request timeout")
except requests.exceptions.RequestException as e:
    print(f"Error: {e}")

🔑 Status Codes:
200 - Success
201 - Created
400 - Bad Request
401 - Unauthorized
404 - Not Found
500 - Server Error`,

    qa: [
      {
        q: "What is requests library?",
        a: "requests is Python library for making HTTP requests to APIs. Example: requests.get('url') fetches data, requests.post('url', json=data) sends data. Used for API integration and web scraping."
      },
      {
        q: "What is GET request?",
        a: "GET retrieves data from server (read-only). Data passed in URL parameters. Example: requests.get('https://api.example.com/users?id=1'). Used for fetching data without modifying server."
      },
      {
        q: "What is POST request?",
        a: "POST sends data to server to create/update resources. Data in request body. Example: requests.post(url, json={'name':'Ankit'}). Used for creating users, submitting forms, uploading data."
      },
      {
        q: "Difference between GET and POST?",
        a: "GET retrieves data (read-only), data in URL. POST sends data (create/update), data in body. GET is cacheable and bookmarkable, POST is not. GET for fetching, POST for submitting."
      },
      {
        q: "How to parse JSON response?",
        a: "Use response.json() to convert JSON to Python dictionary. Example: data = response.json(); print(data['name']). Access nested data: data['user']['address']['city']."
      },
      {
        q: "How to handle API failures?",
        a: "Check response.status_code (200=success, 404=not found, 500=error). Use try-except for network errors. Example: if response.status_code == 200: process() else: log_error()."
      },
      {
        q: "How to handle nested JSON?",
        a: "Use multiple brackets: data['user']['address']['city']. Use .get() for safe access: data.get('user', {}).get('address', {}).get('city', 'Unknown'). Prevents KeyError."
      },
      {
        q: "How to add headers to request?",
        a: "Pass headers dict to requests. Example: headers = {'Authorization': 'Bearer token123'}; requests.get(url, headers=headers). Used for authentication, content type."
      },
      {
        q: "How to secure APIs?",
        a: "Use authentication (API keys, OAuth tokens), HTTPS, rate limiting, input validation, timeout. Example: headers = {'Authorization': 'Bearer token'}; requests.get(url, headers=headers, timeout=30)."
      },
      {
        q: "Where is API handling used in data engineering?",
        a: "Fetch data from REST APIs, load to S3/databases, real-time data ingestion, third-party integrations (Salesforce, Stripe), webhook processing, microservices communication."
      }
    ],

    coding: {
      title: "API Handling - Coding Challenges",
      scenario: "Practice API integration for data pipelines",
      question: "Fetch data from API using GET request",
      input: "url = 'https://api.example.com/users'",
      expectedOutput: "Status code and JSON data",
      hint: "Use requests.get() and response.json()",
      solution: "import requests\n\nurl = 'https://api.example.com/users'\nresponse = requests.get(url)\n\nprint(f'Status: {response.status_code}')\nif response.status_code == 200:\n    data = response.json()\n    print(data)",
      note: "Always check status_code before parsing JSON to avoid errors.",
      thinkingApproach: [
        "Import requests library",
        "Make GET request to URL",
        "Check status code (200 = success)",
        "Parse JSON response",
        "Handle errors appropriately"
      ],
      questions: [
        {
          q: "1. Fetch data from API using GET request",
          answer: "import requests\n\nurl = 'https://api.example.com/users'\nresponse = requests.get(url)\n\nprint(f'Status: {response.status_code}')\nif response.status_code == 200:\n    data = response.json()\n    print(data)"
        },
        {
          q: "2. Send POST request with JSON data",
          answer: "import requests\n\nurl = 'https://api.example.com/users'\ndata = {'name': 'Ankit', 'age': 25}\n\nresponse = requests.post(url, json=data)\nprint(f'Status: {response.status_code}')"
        },
        {
          q: "3. Add authentication header to request",
          answer: "import requests\n\nurl = 'https://api.example.com/data'\nheaders = {'Authorization': 'Bearer token123'}\n\nresponse = requests.get(url, headers=headers)\nprint(response.status_code)"
        },
        {
          q: "4. Parse JSON response and extract name",
          answer: "import requests\n\nresponse = requests.get('https://api.example.com/user')\ndata = response.json()\n\nprint(data['name'])\nprint(data['email'])"
        },
        {
          q: "5. Loop through API records",
          answer: "import requests\n\nresponse = requests.get('https://api.example.com/users')\nusers = response.json()\n\nfor user in users:\n    print(f\"ID: {user['id']}, Name: {user['name']}\")"
        },
        {
          q: "6. Extract customer emails from API response",
          answer: "import requests\n\nresponse = requests.get('https://api.example.com/customers')\ncustomers = response.json()\n\nemails = [c['email'] for c in customers if 'email' in c]\nprint(emails)"
        },
        {
          q: "7. Handle nested JSON response",
          answer: "data = {\n    'user': {\n        'name': 'Ankit',\n        'address': {'city': 'Pune'}\n    }\n}\n\nprint(data['user']['name'])\nprint(data['user']['address']['city'])"
        },
        {
          q: "8. Handle API errors with status code check",
          answer: "import requests\n\nresponse = requests.get('https://api.example.com/data')\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelif response.status_code == 404:\n    print('Not found')\nelse:\n    print(f'Error: {response.status_code}')"
        },
        {
          q: "9. Add query parameters to request",
          answer: "import requests\n\nurl = 'https://api.example.com/weather'\nparams = {'city': 'Pune', 'limit': 10}\n\nresponse = requests.get(url, params=params)\nprint(response.json())"
        },
        {
          q: "10. Handle request timeout",
          answer: "import requests\n\ntry:\n    response = requests.get('https://api.example.com/data', timeout=30)\n    print(response.json())\nexcept requests.exceptions.Timeout:\n    print('Request timeout')\nexcept requests.exceptions.RequestException as e:\n    print(f'Error: {e}')"
        }
      ]
    },

    quiz: [
      { q: "Which library calls APIs?", options: ["urllib", "requests", "http", "api"], answer: 1 },
      { q: "GET request is for?", options: ["Sending data", "Retrieving data", "Deleting data", "Updating data"], answer: 1 },
      { q: "POST request is for?", options: ["Retrieving data", "Sending data", "Reading data", "Viewing data"], answer: 1 },
      { q: "How to parse JSON?", options: ["response.parse()", "response.json()", "response.data()", "response.dict()"], answer: 1 },
      { q: "Status code 200 means?", options: ["Error", "Success", "Not found", "Timeout"], answer: 1 },
      { q: "Status code 404 means?", options: ["Success", "Not found", "Error", "Created"], answer: 1 },
      { q: "How to add headers?", options: ["headers param", "head param", "auth param", "token param"], answer: 0 },
      { q: "Nested JSON access?", options: ["data.user.name", "data['user']['name']", "data->user->name", "data::user::name"], answer: 1 },
      { q: "Safe JSON access?", options: ["data['key']", "data.get('key')", "data->key", "data::key"], answer: 1 },
      { q: "API authentication uses?", options: ["Cookies", "Headers", "URL", "Body"], answer: 1 }
    ],

    interview: "API Handling: Essential for modern data integration. requests library calls external APIs. Comic: Food delivery call - you request, restaurant responds. Example: requests.get('url') fetches data, requests.post(url, json=data) sends data. GET retrieves data (read-only, URL params), POST sends data (create/update, request body). JSON Response Parsing extracts data from API. Comic: Courier box - open package and check contents. Example: data = response.json(); print(data['name']). Access nested: data['user']['address']['city']. Use .get() for safe access. Top questions: GET vs POST (GET retrieves, POST sends), Handle failures (check status_code, try-except), Parse nested JSON (multiple brackets, .get()), Secure APIs (authentication headers, HTTPS, timeout). Real usage: Pull data from REST APIs, load to S3, process in AWS Glue. Fetch customer data, transform, upload to S3. Status codes: 200=success, 404=not found, 500=server error. Memory: Request=Ask system, JSON=Dictionary+List. Formula: Request → Receive → Parse → Transform → Store. Master API handling for integrations.",

    memory: `🌐 API Handling - Memory Map

📞 requests Library = Ask System
Comic: Food delivery call
import requests
response = requests.get('https://api.example.com/data')
print(response.status_code)  # 200 = Success

# POST request
data = {'name': 'Ankit'}
requests.post(url, json=data)
Memory: Request = Ask system

📦 JSON Parsing = Open Package
Comic: Courier box
data = response.json()
print(data['name'])
print(data['user']['address']['city'])  # Nested

# Safe access
email = data.get('email', 'default')
Memory: JSON = Dictionary + List

🎯 API Formula:
Request → Receive → Parse → Transform → Store

📊 Top Interview Questions:
1. GET vs POST? GET retrieves, POST sends
2. Handle failures? Check status_code, try-except
3. Parse nested JSON? Multiple brackets, .get()
4. Secure APIs? Headers, HTTPS, timeout

✅ Real Usage:
Pull data from REST APIs
Load to S3
Process in AWS Glue
Third-party integrations
Real-time data ingestion

🔑 Status Codes:
200 - Success
201 - Created
400 - Bad Request
401 - Unauthorized
404 - Not Found
500 - Server Error

📋 Quick Reference:
requests.get() → Fetch data
requests.post() → Send data
response.json() → Parse JSON
response.status_code → Check status
headers → Authentication
params → Query parameters
timeout → Prevent hanging`,

    revision: "API Handling: requests library calls APIs (food delivery call). Example: requests.get('url') fetches, requests.post(url, json=data) sends. GET retrieves data (read-only, URL params), POST sends data (create/update, body). JSON parsing extracts data (courier box): data = response.json(); print(data['name']). Nested access: data['user']['address']['city']. Safe: data.get('key', 'default'). Top questions: GET vs POST (retrieve vs send), Handle failures (status_code, try-except), Parse nested (brackets, .get()), Secure (headers, HTTPS). Real usage: Pull from REST APIs, load to S3, process in Glue. Status codes: 200=success, 404=not found, 500=error. Memory: Request=Ask, JSON=Dict+List. Formula: Request → Receive → Parse → Transform → Store. Master for integrations."
  },


  "python-sql-etl": {
    title: "Python for SQL and ETL",
    icon: "🔄",
    difficulty: "Real Data Engineering Workflow",
    duration: "75 min",
    description: "How Python is used in real ETL pipelines to read source data, transform records, and load data into target systems",

    comic: `📦 Warehouse Pickup (Read Source Data)

Manager: "Before delivery starts, packages must be collected"
Warehouse: [CSV Files, JSON APIs, Databases, Cloud Storage]
Truck: *Picks up all packages*

In Python:
import pandas as pd
df = pd.read_csv('sales.csv')  # Read CSV
data = requests.get(url).json()  # Read API

Collect data from sources! 📦

🏭 Factory Cleaning Unit (Transform Data)

Factory: "Raw materials are cleaned before final product"
Raw Material: [Dirty, Duplicates, Nulls, Wrong Format]
After Cleaning: [Clean, Unique, Valid, Standardized]

In Python:
df = df.dropna()  # Remove nulls
df = df.drop_duplicates()  # Remove duplicates
df['bonus'] = df['salary'] * 0.10  # Calculate

Clean and transform data! 🏭

🚚 Final Delivery (Load Target Systems)

Delivery: "Processed package reaches final customer"
Destinations: [S3, Redshift, Snowflake, Data Warehouses]

In Python:
df.to_csv('output.csv')  # Write CSV
df.to_sql('employees', connection)  # Load SQL

Deliver to destination! 🚚

🎯 Aha Moment:
ETL is the backbone of data engineering!
Extract → Transform → Load = Complete pipeline! 🚀`,

    deepDive: `🔄 Python for SQL and ETL - Complete Guide

📌 Module Description:
This module teaches how Python is used in real ETL pipelines to read source data, transform records, and load data into target systems.

Category: Real Data Engineering Workflow
Importance: Extremely High

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 Topic 1: Read Source Data

Comic Story: Warehouse Pickup
Before delivery starts, packages must be collected.

What It Is:
Extract data from multiple sources like files, APIs, and databases.

Data Sources:
1. CSV Files
2. JSON APIs
3. Databases
4. Cloud Storage (S3, Azure Blob)

Coding Example 1 - Read CSV source file:
import pandas as pd

df = pd.read_csv('sales.csv')
print(df.head())
print(f"Loaded {len(df)} records")

Coding Example 2 - Read API source:
import requests
import pandas as pd

response = requests.get('https://api.example.com/customers')
data = response.json()
df = pd.DataFrame(data)

Coding Example 3 - Read from S3:
import boto3
import pandas as pd

s3 = boto3.client('s3')
obj = s3.get_object(Bucket='my-bucket', Key='data/sales.csv')
df = pd.read_csv(obj['Body'])

Coding Example 4 - Read from database:
import pandas as pd
import psycopg2

connection = psycopg2.connect(
    host='localhost',
    database='mydb',
    user='user',
    password='password'
)

query = "SELECT * FROM customers WHERE active = true"
df = pd.read_sql(query, connection)

Coding Challenge:
Read customer file from S3

Hint: Use boto3 or pandas based on source type

Solution:
import boto3
import pandas as pd

s3 = boto3.client('s3')
obj = s3.get_object(Bucket='my-data-bucket', Key='customers.csv')
df = pd.read_csv(obj['Body'])

print(f"Loaded {len(df)} customer records")
print(df.head())

Memory Trick: Read = Extract

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏭 Topic 2: Transform Data

Comic Story: Factory Cleaning Unit
Raw materials are cleaned before final product creation.

What It Is:
Clean, validate, enrich, and transform raw data.

Common Transformations:
1. Remove null values
2. Remove duplicates
3. Standardize columns
4. Business calculations
5. Data type conversions
6. Join/merge datasets
7. Filter invalid records
8. Aggregate data

Coding Example 1 - Remove null values:
df = df.dropna()  # Remove all nulls
df = df.dropna(subset=['email'])  # Remove if email is null

Coding Example 2 - Remove duplicates:
df = df.drop_duplicates()
df = df.drop_duplicates(subset=['customer_id'])

Coding Example 3 - Create calculated column:
df['bonus'] = df['salary'] * 0.10
df['full_name'] = df['first_name'] + ' ' + df['last_name']
df['year'] = pd.to_datetime(df['date']).dt.year

Coding Example 4 - Standardize columns:
df['email'] = df['email'].str.lower().str.strip()
df['phone'] = df['phone'].str.replace('-', '')

Coding Example 5 - Filter invalid records:
df = df[df['age'] >= 18]
df = df[df['salary'] > 0]

Coding Example 6 - Data type conversion:
df['age'] = df['age'].astype(int)
df['date'] = pd.to_datetime(df['date'])

Coding Challenge:
Remove duplicate customer records

Hint: Use drop_duplicates()

Solution:
# Remove duplicates based on customer_id
df = df.drop_duplicates(subset=['customer_id'], keep='first')

print(f"After deduplication: {len(df)} unique customers")

Interview Question:
Q: How do you optimize large transformations?
A: Use chunking for large files, vectorized operations instead of loops, filter early to reduce data size, use appropriate data types, leverage Spark for very large datasets.

Memory Trick: Transform = Clean and enrich

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚚 Topic 3: Load Target Systems

Comic Story: Final Delivery
Processed package reaches final customer.

What It Is:
Load transformed data into final systems.

Target Systems:
1. S3 (Data Lake)
2. Redshift (Data Warehouse)
3. Snowflake (Cloud DW)
4. PostgreSQL/MySQL (Databases)
5. CSV/Parquet files

Coding Example 1 - Write CSV output:
df.to_csv('final_output.csv', index=False)

Coding Example 2 - Upload to S3:
import boto3

s3 = boto3.client('s3')
df.to_csv('output.csv', index=False)
s3.upload_file('output.csv', 'my-bucket', 'processed/output.csv')

Coding Example 3 - Load to SQL database:
import pandas as pd
import psycopg2

connection = psycopg2.connect(
    host='localhost',
    database='mydb',
    user='user',
    password='password'
)

df.to_sql('employees', connection, if_exists='replace', index=False)

Coding Example 4 - Load to Redshift:
import pandas as pd
import psycopg2

connection = psycopg2.connect(
    host='redshift-cluster.amazonaws.com',
    database='analytics',
    user='admin',
    password='password',
    port=5439
)

df.to_sql('sales_fact', connection, if_exists='append', index=False)

Coding Challenge:
Load transformed data into warehouse table

Hint: Use connectors or cloud SDKs

Solution:
import pandas as pd
import psycopg2

# Connect to warehouse
connection = psycopg2.connect(
    host='warehouse.example.com',
    database='analytics',
    user='etl_user',
    password='password'
)

# Load data
df.to_sql(
    'customer_dim',
    connection,
    if_exists='append',  # or 'replace'
    index=False,
    method='multi'
)

print(f"Loaded {len(df)} records to warehouse")

Quiz:
Q: L in ETL stands for?
A: Load

Memory Trick: Load = Final destination

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Top Interview Questions:

1. How do you design ETL pipelines?
   Answer: Identify sources → Define transformations → Choose target → Handle errors → Add logging → Schedule jobs → Monitor performance.

2. How do you handle failed loads?
   Answer: Use try-except blocks, implement retry logic, log errors, send alerts, maintain audit tables, use dead letter queues.

3. How do you optimize transformations?
   Answer: Filter early, use vectorized operations, chunk large files, use appropriate data types, leverage parallel processing, cache intermediate results.

4. How do you process incremental data?
   Answer: Use watermarks (last_updated timestamp), track processed IDs, use change data capture (CDC), implement upsert logic, maintain state.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Usage:

Read data from S3 → transform using Python → load into Redshift or Snowflake pipelines.

Complete ETL Pipeline Example:
import pandas as pd
import boto3
import psycopg2
from datetime import datetime

def extract_from_s3(bucket, key):
    """Extract data from S3"""
    s3 = boto3.client('s3')
    obj = s3.get_object(Bucket=bucket, Key=key)
    df = pd.read_csv(obj['Body'])
    print(f"Extracted {len(df)} records from S3")
    return df

def transform_data(df):
    """Transform and clean data"""
    # Remove nulls
    df = df.dropna(subset=['customer_id', 'email'])
    
    # Remove duplicates
    df = df.drop_duplicates(subset=['customer_id'])
    
    # Standardize
    df['email'] = df['email'].str.lower().str.strip()
    df['phone'] = df['phone'].str.replace('-', '')
    
    # Calculate fields
    df['full_name'] = df['first_name'] + ' ' + df['last_name']
    df['processed_date'] = datetime.now()
    
    # Filter invalid
    df = df[df['age'] >= 18]
    
    print(f"Transformed to {len(df)} valid records")
    return df

def load_to_warehouse(df, table_name):
    """Load data to Redshift"""
    connection = psycopg2.connect(
        host='redshift-cluster.amazonaws.com',
        database='analytics',
        user='etl_user',
        password='password',
        port=5439
    )
    
    df.to_sql(
        table_name,
        connection,
        if_exists='append',
        index=False,
        method='multi'
    )
    
    connection.close()
    print(f"Loaded {len(df)} records to {table_name}")

def run_etl_pipeline():
    """Main ETL pipeline"""
    try:
        # Extract
        df = extract_from_s3('my-data-bucket', 'raw/customers.csv')
        
        # Transform
        df_transformed = transform_data(df)
        
        # Load
        load_to_warehouse(df_transformed, 'customer_dim')
        
        print("ETL pipeline completed successfully")
        
    except Exception as e:
        print(f"ETL pipeline failed: {e}")
        # Send alert, log error, retry logic here

if __name__ == '__main__':
    run_etl_pipeline()

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Revision Formula:

ETL Formula:
Extract → Transform → Load

📦 Extract = Read from sources (CSV, API, DB, S3)
🏭 Transform = Clean, validate, enrich, calculate
🚚 Load = Write to targets (S3, Redshift, Snowflake)

Master ETL → Build production pipelines! 🚀`,

    types: `🔄 Python for SQL and ETL - Quick Reference

📦 Extract (Read):
# CSV
df = pd.read_csv('file.csv')

# API
data = requests.get(url).json()
df = pd.DataFrame(data)

# S3
s3 = boto3.client('s3')
obj = s3.get_object(Bucket='bucket', Key='file.csv')
df = pd.read_csv(obj['Body'])

# Database
df = pd.read_sql(query, connection)

🏭 Transform:
# Remove nulls
df = df.dropna()
df = df.dropna(subset=['email'])

# Remove duplicates
df = df.drop_duplicates()
df = df.drop_duplicates(subset=['id'])

# Calculate
df['bonus'] = df['salary'] * 0.10
df['full_name'] = df['first'] + ' ' + df['last']

# Standardize
df['email'] = df['email'].str.lower()
df['phone'] = df['phone'].str.replace('-', '')

# Filter
df = df[df['age'] >= 18]

# Convert types
df['age'] = df['age'].astype(int)
df['date'] = pd.to_datetime(df['date'])

🚚 Load:
# CSV
df.to_csv('output.csv', index=False)

# S3
s3.upload_file('file.csv', 'bucket', 'key')

# Database
df.to_sql('table', connection, if_exists='append', index=False)

# Redshift
df.to_sql('table', redshift_conn, if_exists='append', index=False)`,

    qa: [
      {
        q: "What is ETL?",
        a: "ETL stands for Extract, Transform, Load. Extract data from sources, Transform (clean/enrich), Load to targets. Example: Read CSV from S3, remove nulls, load to Redshift. Core data engineering workflow."
      },
      {
        q: "What are common data sources in ETL?",
        a: "CSV files, JSON APIs, databases (PostgreSQL, MySQL), cloud storage (S3, Azure Blob), data warehouses, streaming sources (Kafka). Use pandas, requests, boto3, database connectors to read."
      },
      {
        q: "What are common transformations?",
        a: "Remove nulls (dropna), remove duplicates (drop_duplicates), standardize (lower, strip), calculate fields, filter invalid records, convert data types, join datasets, aggregate data."
      },
      {
        q: "What are common load targets?",
        a: "S3 (data lake), Redshift (AWS warehouse), Snowflake (cloud warehouse), PostgreSQL/MySQL (databases), CSV/Parquet files. Use to_csv(), to_sql(), boto3 upload."
      },
      {
        q: "How to handle failed loads?",
        a: "Use try-except blocks, implement retry logic with exponential backoff, log errors to CloudWatch, send alerts (SNS/email), maintain audit tables, use dead letter queues for failed records."
      },
      {
        q: "How to optimize transformations?",
        a: "Filter early to reduce data size, use vectorized operations (avoid loops), chunk large files, use appropriate data types, leverage parallel processing, cache intermediate results, use Spark for very large data."
      },
      {
        q: "How to process incremental data?",
        a: "Use watermarks (last_updated timestamp), track processed IDs in state table, use change data capture (CDC), implement upsert logic (update if exists, insert if new), maintain processing state."
      },
      {
        q: "How to design ETL pipeline?",
        a: "Identify sources → Define transformations → Choose targets → Handle errors → Add logging → Schedule jobs (Airflow/Glue) → Monitor performance → Implement retry logic → Document pipeline."
      },
      {
        q: "What is data validation in ETL?",
        a: "Check data quality: null checks, duplicate checks, data type validation, range validation, referential integrity, business rule validation. Reject or quarantine invalid records."
      },
      {
        q: "Where is Python ETL used?",
        a: "AWS Glue jobs, Airflow DAGs, Lambda functions, batch processing, real-time streaming, data migration, data warehouse loading, API integrations, file processing pipelines."
      }
    ],

    coding: {
      title: "Python for SQL and ETL - Coding Challenges",
      scenario: "Practice building ETL pipelines",
      question: "Read CSV file and print record count",
      input: "sales.csv file",
      expectedOutput: "Loaded X records",
      hint: "Use pd.read_csv() and len()",
      solution: "import pandas as pd\n\ndf = pd.read_csv('sales.csv')\nprint(f'Loaded {len(df)} records')\nprint(df.head())",
      note: "Always check data after reading to verify structure and content.",
      thinkingApproach: [
        "Import pandas library",
        "Read CSV file using pd.read_csv()",
        "Check record count using len()",
        "Preview data using head()",
        "Validate data structure"
      ],
      questions: [
        {
          q: "1. Read CSV file and print record count",
          answer: "import pandas as pd\n\ndf = pd.read_csv('sales.csv')\nprint(f'Loaded {len(df)} records')\nprint(df.head())"
        },
        {
          q: "2. Read data from API and convert to DataFrame",
          answer: "import requests\nimport pandas as pd\n\nresponse = requests.get('https://api.example.com/customers')\ndata = response.json()\ndf = pd.DataFrame(data)\nprint(f'Loaded {len(df)} records')"
        },
        {
          q: "3. Read CSV from S3",
          answer: "import boto3\nimport pandas as pd\n\ns3 = boto3.client('s3')\nobj = s3.get_object(Bucket='my-bucket', Key='data/sales.csv')\ndf = pd.read_csv(obj['Body'])\nprint(f'Loaded {len(df)} records')"
        },
        {
          q: "4. Remove null values from DataFrame",
          answer: "df = df.dropna()\nprint(f'After removing nulls: {len(df)} records')"
        },
        {
          q: "5. Remove duplicate customer records",
          answer: "df = df.drop_duplicates(subset=['customer_id'], keep='first')\nprint(f'After deduplication: {len(df)} unique customers')"
        },
        {
          q: "6. Create calculated bonus column",
          answer: "df['bonus'] = df['salary'] * 0.10\nprint(df[['salary', 'bonus']].head())"
        },
        {
          q: "7. Standardize email column",
          answer: "df['email'] = df['email'].str.lower().str.strip()\nprint(df['email'].head())"
        },
        {
          q: "8. Filter records where age >= 18",
          answer: "df = df[df['age'] >= 18]\nprint(f'Valid records: {len(df)}')"
        },
        {
          q: "9. Write DataFrame to CSV",
          answer: "df.to_csv('output.csv', index=False)\nprint('Data written to output.csv')"
        },
        {
          q: "10. Complete ETL pipeline (read, transform, write)",
          answer: "import pandas as pd\n\n# Extract\ndf = pd.read_csv('sales.csv')\nprint(f'Extracted: {len(df)} records')\n\n# Transform\ndf = df.dropna()\ndf = df.drop_duplicates()\ndf['bonus'] = df['salary'] * 0.10\nprint(f'Transformed: {len(df)} records')\n\n# Load\ndf.to_csv('output.csv', index=False)\nprint('Loaded to output.csv')"
        }
      ]
    },

    quiz: [
      { q: "E in ETL stands for?", options: ["Export", "Extract", "Execute", "Enable"], answer: 1 },
      { q: "T in ETL stands for?", options: ["Transfer", "Transform", "Transmit", "Test"], answer: 1 },
      { q: "L in ETL stands for?", options: ["List", "Load", "Link", "Log"], answer: 1 },
      { q: "Which removes nulls?", options: ["remove_null()", "dropna()", "delete_null()", "clear_null()"], answer: 1 },
      { q: "Which removes duplicates?", options: ["drop_duplicates()", "remove_dup()", "unique()", "dedupe()"], answer: 0 },
      { q: "Common ETL source?", options: ["Monitor", "CSV files", "Printer", "Scanner"], answer: 1 },
      { q: "Common ETL target?", options: ["Keyboard", "Data warehouse", "Mouse", "Screen"], answer: 1 },
      { q: "How to read S3 file?", options: ["open()", "boto3", "read()", "load()"], answer: 1 },
      { q: "How to write to database?", options: ["to_sql()", "write_db()", "insert()", "save()"], answer: 0 },
      { q: "ETL pipeline order?", options: ["Load→Extract→Transform", "Extract→Transform→Load", "Transform→Extract→Load", "Load→Transform→Extract"], answer: 1 }
    ],


    memory: `🔄 Python for SQL and ETL - Memory Map
data = requests.get(url).json()  # API
df = pd.read_csv(s3_obj['Body'])  # S3
Memory: Extract = Read

🏭 Transform = Clean & Enrich
Comic: Factory cleaning
df = df.dropna()  # Remove nulls
df = df.drop_duplicates()  # Remove duplicates
df['bonus'] = df['salary'] * 0.10  # Calculate
df['email'] = df['email'].str.lower()  # Standardize
df = df[df['age'] >= 18]  # Filter
Memory: Transform = Clean

🚚 Load = Write Targets
Comic: Final delivery
df.to_csv('output.csv')  # CSV
df.to_sql('table', connection)  # Database
s3.upload_file('file', 'bucket', 'key')  # S3
Memory: Load = Write

🎯 ETL Formula:
Extract → Transform → Load

📊 Top Interview Questions:
1. Design ETL? Sources→Transforms→Targets→Errors→Logging
2. Handle failures? try-except, retry, alerts, audit
3. Optimize? Filter early, vectorized, chunk, types
4. Incremental? Watermarks, track IDs, CDC, upsert

✅ Real Usage:
AWS Glue jobs
Airflow DAGs
Lambda functions
Batch processing
Data warehouse loading

🔑 Common Operations:
Extract: read_csv, read_sql, boto3
Transform: dropna, drop_duplicates, calculate
Load: to_csv, to_sql, upload_file

📋 Pipeline Pattern:
try:
    df = extract()
    df = transform(df)
    load(df)
except Exception as e:
    log_error(e)
    send_alert()`,

    revision: "Python for SQL and ETL: Extract, Transform, Load workflow. Extract reads from sources (CSV, API, DB, S3). Comic: Warehouse pickup. Example: pd.read_csv(), requests.get().json(), boto3 S3. Transform cleans data. Comic: Factory cleaning. Operations: dropna() nulls, drop_duplicates(), calculate fields, standardize, filter. Example: df['bonus']=df['salary']*0.10. Load writes to targets (S3, Redshift, Snowflake, DB). Comic: Final delivery. Example: to_csv(), to_sql(), s3.upload_file(). Top questions: Design ETL (sources→transforms→targets→errors→logging), Handle failures (try-except, retry, alerts), Optimize (filter early, vectorized, chunk), Incremental (watermarks, CDC, upsert). Real usage: S3→Python→Redshift pipeline. Memory: Extract=Read, Transform=Clean, Load=Write. Formula: Extract → Transform → Load. Master for production pipelines."
  },
  "coding-interview": {
    title: "Coding Interview Questions",
    icon: "💻",
    difficulty: "Interview Preparation",
    duration: "90 min",


    comic: `🪞 Mirror Word (Palindrome)

Person: "Is 'madam' same from both sides?"
Mirror: *Reflects* → madam = madam ✅

In Python:
word = 'madam'
if word == word[::-1]:
    print('Palindrome')

Same both ways! 🪞

🔄 Reverse Queue (Reverse String)

Queue: [A, B, C, D]
Reversed: [D, C, B, A]

In Python:
text = 'ankit'
print(text[::-1])  # tikna

Opposite order! 🔄

🐰 Rabbit Growth (Fibonacci)

Month 1: 1 pair
Month 2: 1 pair
Month 3: 2 pairs (1+1)
Month 4: 3 pairs (1+2)
Month 5: 5 pairs (2+3)

In Python:
a, b = 0, 1
for i in range(5):
    print(a)
    a, b = b, a+b

Each number = sum of previous two! 🐰

🎫 Event Entry (Duplicate Handling)

Tickets: [101, 102, 102, 103, 101]
Valid: [101, 102, 103]  # Duplicates removed

In Python:
nums = [1, 2, 2, 3]
print(list(set(nums)))  # [1, 2, 3]

Remove duplicates! 🎫

🗳️ Vote Counting (Dictionary Problems)

Votes: [A, B, A, C, A, B]
Count: {A: 3, B: 2, C: 1}

In Python:
text = 'apple'
freq = {}
for char in text:
    freq[char] = freq.get(char, 0) + 1

Count frequency! 🗳️

🎯 Aha Moment:
Master these patterns → Crack any coding interview! 🚀`,

    deepDive: `💻 Coding Interview Questions - Complete Guide

📌 Module Description:
This module covers the most frequently asked Python coding questions across interviews.

Category: Interview Preparation
Importance: Extremely High

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🪞 Topic 1: Palindrome

Comic Story: Mirror Word
Word looks same from both sides.

What It Is:
Check whether string reads same forward and backward.

Coding Example 1 - Check palindrome string:
word = 'madam'
if word == word[::-1]:
    print('Palindrome')
else:
    print('Not Palindrome')

Coding Example 2 - Check palindrome number:
num = 121
num_str = str(num)
if num_str == num_str[::-1]:
    print('Palindrome')

Coding Example 3 - Ignore case and spaces:
text = 'A man a plan a canal Panama'
cleaned = text.lower().replace(' ', '')
if cleaned == cleaned[::-1]:
    print('Palindrome')

Coding Challenge:
Check palindrome number

Hint: Reverse first

Solution:
def is_palindrome(num):
    num_str = str(num)
    return num_str == num_str[::-1]

print(is_palindrome(121))  # True
print(is_palindrome(123))  # False

Memory Trick: Palindrome = Same both sides

Interview Question:
Q: Palindrome optimization?
A: Compare only first half with second half, avoid creating reversed string for large inputs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 Topic 2: Reverse String

Comic Story: Reverse Queue
People stand in opposite order.

What It Is:
Reverse characters of string.

Coding Example 1 - Reverse string:
text = 'ankit'
print(text[::-1])  # tikna

Coding Example 2 - Reverse using loop:
text = 'hello'
reversed_text = ''
for char in text:
    reversed_text = char + reversed_text
print(reversed_text)  # olleh

Coding Example 3 - Reverse using reversed():
text = 'python'
print(''.join(reversed(text)))  # nohtyp

Coding Challenge:
Reverse sentence words

Hint: Use split + reverse

Solution:
sentence = 'Hello World Python'
words = sentence.split()
reversed_words = words[::-1]
print(' '.join(reversed_words))  # Python World Hello

# Or reverse each word
reversed_each = ' '.join([word[::-1] for word in words])
print(reversed_each)  # olleH dlroW nohtyP

Memory Trick: Reverse = Opposite order

Interview Question:
Q: String reversal methods?
A: 1) Slicing [::-1] (fastest), 2) reversed() function, 3) Loop (manual), 4) Stack (LIFO).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🐰 Topic 3: Fibonacci

Comic Story: Rabbit Growth
Population grows based on previous values.

What It Is:
Series where next number is sum of previous two.

Coding Example 1 - Print fibonacci series:
a, b = 0, 1
for i in range(10):
    print(a, end=' ')
    a, b = b, a + b
# Output: 0 1 1 2 3 5 8 13 21 34

Coding Example 2 - Fibonacci using function:
def fibonacci(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

print(fibonacci(10))  # 55

Coding Example 3 - Recursive fibonacci:
def fib_recursive(n):
    if n <= 1:
        return n
    return fib_recursive(n-1) + fib_recursive(n-2)

print(fib_recursive(7))  # 13

Coding Challenge:
Find nth fibonacci number

Hint: Track previous two numbers

Solution:
def nth_fibonacci(n):
    if n <= 1:
        return n
    
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    
    return b

print(nth_fibonacci(10))  # 55

Memory Trick: Fibonacci = Previous two sum

Interview Question:
Q: Recursive fibonacci?
A: Simple but inefficient (exponential time). Use iterative or memoization for optimization.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎫 Topic 4: Duplicate Handling

Comic Story: Event Entry
Duplicate tickets are removed.

What It Is:
Remove duplicate values.

Coding Example 1 - Remove duplicates from list:
nums = [1, 2, 2, 3, 3, 4]
unique = list(set(nums))
print(unique)  # [1, 2, 3, 4]

Coding Example 2 - Remove duplicates preserving order:
nums = [1, 2, 2, 3, 3, 4]
unique = []
for num in nums:
    if num not in unique:
        unique.append(num)
print(unique)  # [1, 2, 3, 4]

Coding Example 3 - Remove duplicate characters:
text = 'hello'
unique_chars = ''.join(set(text))
print(unique_chars)  # helo (order may vary)

# Preserve order
unique_chars = ''
for char in text:
    if char not in unique_chars:
        unique_chars += char
print(unique_chars)  # helo

Coding Challenge:
Remove duplicate characters

Hint: Use set or loop

Solution:
def remove_duplicates(text):
    seen = set()
    result = []
    for char in text:
        if char not in seen:
            seen.add(char)
            result.append(char)
    return ''.join(result)

print(remove_duplicates('hello'))  # helo

Memory Trick: Duplicate = Remove repeats

Interview Question:
Q: Duplicate removal approaches?
A: 1) set() (fast but loses order), 2) Loop with tracking (preserves order), 3) dict.fromkeys() (preserves order in Python 3.7+).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🗳️ Topic 5: Dictionary Problems

Comic Story: Vote Counting
Count repeated votes.

What It Is:
Frequency-based interview questions.

Coding Example 1 - Character frequency:
text = 'apple'
freq = {}
for char in text:
    freq[char] = freq.get(char, 0) + 1
print(freq)  # {'a': 1, 'p': 2, 'l': 1, 'e': 1}

Coding Example 2 - Word frequency:
sentence = 'hello world hello'
words = sentence.split()
freq = {}
for word in words:
    freq[word] = freq.get(word, 0) + 1
print(freq)  # {'hello': 2, 'world': 1}

Coding Example 3 - Find most frequent element:
nums = [1, 2, 2, 3, 3, 3]
freq = {}
for num in nums:
    freq[num] = freq.get(num, 0) + 1

most_frequent = max(freq, key=freq.get)
print(most_frequent)  # 3

Coding Challenge:
Find first non-repeating character

Hint: Use dictionary counting

Solution:
def first_non_repeating(text):
    freq = {}
    
    # Count frequency
    for char in text:
        freq[char] = freq.get(char, 0) + 1
    
    # Find first non-repeating
    for char in text:
        if freq[char] == 1:
            return char
    
    return None

print(first_non_repeating('aabbcde'))  # c

Quiz:
Q: Best DS for frequency counting?
A: Dictionary

Memory Trick: Dictionary = Counter machine

Interview Question:
Q: Frequency counting problems?
A: Use dictionary to count occurrences, then iterate to find max/min/first non-repeating. Time: O(n), Space: O(k) where k is unique elements.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Top Interview Questions:

1. Palindrome optimization
   Answer: Compare only first half with second half instead of creating reversed string. Use two pointers from start and end.

2. String reversal methods
   Answer: 1) Slicing [::-1] (fastest), 2) reversed() function, 3) Manual loop, 4) Stack approach.

3. Recursive fibonacci
   Answer: Simple but inefficient O(2^n). Use iterative O(n) or memoization/DP for optimization.

4. Duplicate removal approaches
   Answer: 1) set() (fast, loses order), 2) Loop with set tracking (preserves order), 3) dict.fromkeys().

5. Frequency counting problems
   Answer: Use dictionary to count, iterate to find target. Common: most frequent, first non-repeating, top K frequent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Usage:

Duplicate removal and string cleaning are commonly used before loading data into Redshift and Snowflake.

Example - Data Cleaning Pipeline:
import pandas as pd

def clean_customer_data(df):
    # Remove duplicate records
    df = df.drop_duplicates(subset=['customer_id'])
    
    # Remove null emails
    df = df.dropna(subset=['email'])
    
    # Standardize emails (lowercase, trim)
    df['email'] = df['email'].str.lower().str.strip()
    
    # Remove duplicate emails
    df = df.drop_duplicates(subset=['email'])
    
    # Count frequency of cities
    city_freq = df['city'].value_counts()
    print(f"Top cities: {city_freq.head()}")
    
    return df

# Usage
df = pd.read_csv('customers.csv')
df_cleaned = clean_customer_data(df)
df_cleaned.to_csv('customers_cleaned.csv', index=False)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Revision Formula:

Coding Formula:
String Logic → Loop Logic → Dictionary Logic → Optimization

🪞 String Logic = Palindrome, Reverse
🔄 Loop Logic = Fibonacci, Iteration
🗳️ Dictionary Logic = Frequency, Counting
⚡ Optimization = Time/Space complexity

Master these patterns → Crack interviews! 🚀`,

    types: `💻 Coding Interview - Quick Reference

🪞 Palindrome:
word = 'madam'
word == word[::-1]  # True

# Number
num = 121
str(num) == str(num)[::-1]

🔄 Reverse String:
text = 'hello'
text[::-1]  # olleh
''.join(reversed(text))

🐰 Fibonacci:
a, b = 0, 1
for i in range(10):
    print(a)
    a, b = b, a+b

🎫 Remove Duplicates:
nums = [1, 2, 2, 3]
list(set(nums))  # [1, 2, 3]

# Preserve order
unique = []
for n in nums:
    if n not in unique:
        unique.append(n)

🗳️ Frequency Count:
text = 'apple'
freq = {}
for char in text:
    freq[char] = freq.get(char, 0) + 1

# Or use Counter
from collections import Counter
freq = Counter(text)`,

    qa: [
      {
        q: "What is palindrome?",
        a: "String that reads same forward and backward. Example: 'madam', 'racecar', 121. Check: word == word[::-1]. Used in string validation problems."
      },
      {
        q: "How to reverse string?",
        a: "Three methods: 1) Slicing text[::-1] (fastest), 2) reversed() function ''.join(reversed(text)), 3) Loop manually. Slicing is most common in interviews."
      },
      {
        q: "What is Fibonacci series?",
        a: "Series where each number is sum of previous two: 0, 1, 1, 2, 3, 5, 8, 13... Formula: F(n) = F(n-1) + F(n-2). Used in recursion and DP problems."
      },
      {
        q: "How to remove duplicates?",
        a: "Two approaches: 1) set() - fast but loses order: list(set(nums)), 2) Loop with tracking - preserves order. Choose based on requirement."
      },
      {
        q: "How to count character frequency?",
        a: "Use dictionary: freq = {}; for char in text: freq[char] = freq.get(char, 0) + 1. Or use Counter from collections. Common in string problems."
      },
      {
        q: "Palindrome optimization?",
        a: "Instead of creating reversed string, use two pointers from start and end, compare characters. Saves space. Time: O(n), Space: O(1)."
      },
      {
        q: "Recursive vs iterative Fibonacci?",
        a: "Recursive: simple but slow O(2^n). Iterative: efficient O(n). Use iterative or memoization in interviews. Recursive good for understanding, not production."
      },
      {
        q: "How to find first non-repeating character?",
        a: "Count frequency in dictionary, then iterate string to find first char with count 1. Time: O(n), Space: O(k) where k is unique chars."
      },
      {
        q: "Best data structure for frequency counting?",
        a: "Dictionary (hash map). Fast O(1) insert and lookup. Use dict or Counter from collections. Essential for counting problems."
      },
      {
        q: "Where are these patterns used in data engineering?",
        a: "Duplicate removal in ETL, string cleaning before loading, frequency analysis for data quality, validation checks, data deduplication in pipelines."
      }
    ],

    coding: {
      title: "Coding Interview Questions - Practice",
      scenario: "Master frequently asked coding patterns",
      question: "Check if string is palindrome",
      input: "word = 'madam'",
      expectedOutput: "Palindrome",
      hint: "Compare with reversed string",
      solution: "word = 'madam'\nif word == word[::-1]:\n    print('Palindrome')\nelse:\n    print('Not Palindrome')",
      note: "Palindrome reads same forward and backward.",
      thinkingApproach: [
        "Understand palindrome concept",
        "Reverse the string using [::-1]",
        "Compare original with reversed",
        "Return result"
      ],
      questions: [
        {
          q: "1. Check if string is palindrome",
          answer: "word = 'madam'\nif word == word[::-1]:\n    print('Palindrome')\nelse:\n    print('Not Palindrome')"
        },
        {
          q: "2. Check if number is palindrome",
          answer: "num = 121\nnum_str = str(num)\nif num_str == num_str[::-1]:\n    print('Palindrome')\nelse:\n    print('Not Palindrome')"
        },
        {
          q: "3. Reverse a string",
          answer: "text = 'ankit'\nprint(text[::-1])  # tikna"
        },
        {
          q: "4. Reverse sentence words",
          answer: "sentence = 'Hello World Python'\nwords = sentence.split()\nreversed_words = words[::-1]\nprint(' '.join(reversed_words))  # Python World Hello"
        },
        {
          q: "5. Print Fibonacci series (first 10 numbers)",
          answer: "a, b = 0, 1\nfor i in range(10):\n    print(a, end=' ')\n    a, b = b, a + b"
        },
        {
          q: "6. Find nth Fibonacci number",
          answer: "def nth_fibonacci(n):\n    if n <= 1:\n        return n\n    a, b = 0, 1\n    for _ in range(2, n + 1):\n        a, b = b, a + b\n    return b\n\nprint(nth_fibonacci(10))  # 55"
        },
        {
          q: "7. Remove duplicates from list",
          answer: "nums = [1, 2, 2, 3, 3, 4]\nunique = list(set(nums))\nprint(unique)  # [1, 2, 3, 4]"
        },
        {
          q: "8. Remove duplicate characters from string",
          answer: "text = 'hello'\nunique_chars = ''\nfor char in text:\n    if char not in unique_chars:\n        unique_chars += char\nprint(unique_chars)  # helo"
        },
        {
          q: "9. Count character frequency",
          answer: "text = 'apple'\nfreq = {}\nfor char in text:\n    freq[char] = freq.get(char, 0) + 1\nprint(freq)  # {'a': 1, 'p': 2, 'l': 1, 'e': 1}"
        },
        {
          q: "10. Find first non-repeating character",
          answer: "def first_non_repeating(text):\n    freq = {}\n    for char in text:\n        freq[char] = freq.get(char, 0) + 1\n    for char in text:\n        if freq[char] == 1:\n            return char\n    return None\n\nprint(first_non_repeating('aabbcde'))  # c"
        }
      ]
    },

    quiz: [
      { q: "Palindrome reads?", options: ["Forward only", "Same both ways", "Backward only", "Random"], answer: 1 },
      { q: "Reverse string method?", options: ["reverse()", "[::-1]", "flip()", "back()"], answer: 1 },
      { q: "Fibonacci formula?", options: ["F(n) = n", "F(n) = F(n-1) + F(n-2)", "F(n) = n*2", "F(n) = n^2"], answer: 1 },
      { q: "Remove duplicates fast?", options: ["loop", "set()", "sort()", "filter()"], answer: 1 },
      { q: "Best for frequency count?", options: ["List", "Dictionary", "Tuple", "Set"], answer: 1 },
      { q: "Palindrome check?", options: ["word == word", "word == word[::-1]", "word == reverse(word)", "word.palindrome()"], answer: 1 },
      { q: "Fibonacci starts with?", options: ["1, 1", "0, 1", "1, 2", "0, 0"], answer: 1 },
      { q: "set() preserves order?", options: ["Yes", "No", "Sometimes", "Always"], answer: 1 },
      { q: "Recursive Fibonacci is?", options: ["Fast", "Slow", "Medium", "Best"], answer: 1 },
      { q: "Dictionary get() default?", options: ["None", "0", "Custom", "Error"], answer: 2 }
    ],

    interview: "Coding Interview Questions: Master frequently asked patterns. Palindrome checks if string reads same both ways. Comic: Mirror word. Example: word=='madam', word==word[::-1]. Optimization: two pointers instead of reversing. Reverse String flips order. Comic: Reverse queue. Methods: [::-1] (fastest), reversed(), loop. Example: text[::-1]. Fibonacci series where each number is sum of previous two. Comic: Rabbit growth. Example: a,b=0,1; a,b=b,a+b. Recursive slow O(2^n), iterative fast O(n). Duplicate Handling removes repeats. Comic: Event entry. Methods: set() (fast, loses order), loop with tracking (preserves order). Example: list(set(nums)). Dictionary Problems count frequency. Comic: Vote counting. Example: freq[char]=freq.get(char,0)+1. Find most frequent, first non-repeating. Top questions: Palindrome optimization (two pointers), String reversal methods (slicing, reversed, loop), Recursive fibonacci (slow, use iterative), Duplicate removal (set vs loop), Frequency counting (dictionary). Real usage: Duplicate removal in ETL, string cleaning before loading to Redshift/Snowflake. Memory: Palindrome=Same both sides, Reverse=Opposite, Fibonacci=Previous two sum, Duplicate=Remove repeats, Dictionary=Counter. Formula: String Logic → Loop Logic → Dictionary Logic → Optimization. Master patterns for interviews.",

    memory: `💻 Coding Interview - Memory Map

🪞 Palindrome = Same Both Sides
Comic: Mirror word
word = 'madam'
word == word[::-1]  # True
Memory: Palindrome = Mirror

🔄 Reverse String = Opposite Order
Comic: Reverse queue
text = 'hello'
text[::-1]  # olleh
Memory: Reverse = Flip

🐰 Fibonacci = Previous Two Sum
Comic: Rabbit growth
a, b = 0, 1
a, b = b, a+b
Series: 0, 1, 1, 2, 3, 5, 8...
Memory: Fibonacci = Sum pattern

🎫 Duplicate = Remove Repeats
Comic: Event entry
nums = [1, 2, 2, 3]
list(set(nums))  # [1, 2, 3]
Memory: Duplicate = Unique only

🗳️ Dictionary = Counter Machine
Comic: Vote counting
freq = {}
freq[char] = freq.get(char, 0) + 1
Memory: Dictionary = Counter

🎯 Coding Formula:
String Logic → Loop Logic → Dictionary Logic → Optimization

📊 Top Interview Questions:
1. Palindrome? Two pointers optimization
2. Reverse? [::-1] fastest
3. Fibonacci? Iterative O(n) not recursive
4. Duplicates? set() or loop with tracking
5. Frequency? Dictionary counting

✅ Real Usage:
Duplicate removal in ETL
String cleaning before loading
Frequency analysis
Data validation
Deduplication pipelines

🔑 Quick Patterns:
Palindrome → word == word[::-1]
Reverse → text[::-1]
Fibonacci → a, b = b, a+b
Duplicates → set() or loop
Frequency → dict with get()`,

    revision: "Coding Interview: Palindrome checks same both ways (mirror word). Example: word==word[::-1]. Optimize with two pointers. Reverse String flips order (reverse queue). Methods: [::-1], reversed(), loop. Fibonacci sum of previous two (rabbit growth). Example: a,b=0,1; a,b=b,a+b. Iterative O(n) better than recursive O(2^n). Duplicate Handling removes repeats (event entry). Methods: set() fast but loses order, loop preserves order. Example: list(set(nums)). Dictionary Problems count frequency (vote counting). Example: freq[char]=freq.get(char,0)+1. Find first non-repeating. Top questions: Palindrome optimization (two pointers), Reverse methods (slicing fastest), Fibonacci (iterative not recursive), Duplicates (set vs loop), Frequency (dictionary). Real usage: ETL duplicate removal, string cleaning for Redshift/Snowflake. Memory: Palindrome=Mirror, Reverse=Flip, Fibonacci=Sum, Duplicate=Unique, Dictionary=Counter. Formula: String → Loop → Dictionary → Optimization. Master for interviews."
  },

  "scenario-based": {
    title: "Scenario Based Questions",
    icon: "🎯",
    difficulty: "Production Engineering Thinking",

    description: "Real-world production scenarios frequently asked in interviews",

    comic: `🚚 Truck Overload (Large File Handling)

Manager: "Load entire warehouse into one truck"
Driver: "Impossible! Truck will break!" 💥

Solution: Multiple trips with smaller loads

In Python:
import pandas as pd
for chunk in pd.read_csv('big.csv', chunksize=10000):
    process(chunk)

Big file = Small chunks! 🚚

🏪 Restaurant Closed (API Failures)

Customer: "I want to order food"
*Calls restaurant* → "Sorry, we're closed" ❌

In Python:
try:
    response = requests.get(url)
except:
    print('API failed')
    # Use fallback or alert

APIs can fail! 🏪

🏧 ATM Retry (Retry Logic)

Customer: "Transaction failed"
ATM: "Try again... Attempt 1"
ATM: "Try again... Attempt 2"
ATM: "Success!" ✅

In Python:
for attempt in range(3):
    try:
        result = api_call()
        break
    except:
        print(f'Retry {attempt + 1}')

Keep trying! 🏧

🚗 Traffic Shortcut (Performance Optimization)

Driver: "This route is too slow!"
GPS: "Take shortcut → Save 30 minutes" ⚡

In Python:
# Slow: list lookup O(n)
if id in id_list:  # Slow

# Fast: set lookup O(1)
if id in id_set:  # Fast

Find faster route! 🚗

🎯 Aha Moment:
Production scenarios test real engineering thinking!
Handle failures, optimize performance, scale systems! 🚀`,

    deepDive: `🎯 Scenario Based Questions - Complete Guide

📌 Module Description:
This module teaches real-world production scenarios frequently asked in interviews.

Category: Production Engineering Thinking
Importance: Extremely High

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚚 Topic 1: Large File Handling

Comic Story: Truck Overload
You cannot load entire warehouse into one truck.

Problem:
Large files may crash memory.

Interview Q&A:
Q: How do you process 50GB CSV file?
A: Use chunk processing instead of loading full file.

Coding Example 1 - Read CSV in chunks:
import pandas as pd

for chunk in pd.read_csv('big.csv', chunksize=10000):
    # Process each chunk
    print(f"Processing {len(chunk)} records")
    # Your transformation logic here
    chunk_cleaned = chunk.dropna()

Coding Example 2 - Process line by line:
with open('large_file.txt', 'r') as file:
    for line in file:
        # Process each line
        process_line(line)

Coding Example 3 - Use generators:
def read_large_file(file_path):
    with open(file_path, 'r') as file:
        for line in file:
            yield line.strip()

for line in read_large_file('big.txt'):
    process(line)

Coding Challenge:
Process 100GB transaction file

Hint: Use chunking or distributed tools

Solution:
import pandas as pd

def process_large_file(file_path, output_path):
    chunk_size = 100000
    
    for i, chunk in enumerate(pd.read_csv(file_path, chunksize=chunk_size)):
        # Transform
        chunk = chunk.dropna()
        chunk = chunk[chunk['amount'] > 0]
        
        # Write to output
        mode = 'w' if i == 0 else 'a'
        header = True if i == 0 else False
        chunk.to_csv(output_path, mode=mode, header=header, index=False)
        
        print(f"Processed chunk {i + 1}")

process_large_file('transactions_100gb.csv', 'output.csv')

Memory Trick: Big file = Small chunks

Interview Question:
Q: How do you process huge files?
A: Chunking (pandas chunksize), line-by-line reading, generators, or distributed processing (Spark) for very large files.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏪 Topic 2: API Failures

Comic Story: Restaurant Closed
Sometimes service is unavailable.

Problem:
APIs may timeout or fail.

Coding Example 1 - Handle API failure:
import requests

try:
    response = requests.get(url, timeout=30)
    if response.status_code == 200:
        data = response.json()
    else:
        print(f"API error: {response.status_code}")
except requests.exceptions.Timeout:
    print("API timeout")
except requests.exceptions.RequestException as e:
    print(f"API failed: {e}")

Coding Example 2 - Fallback mechanism:
def fetch_data_with_fallback(primary_url, backup_url):
    try:
        response = requests.get(primary_url, timeout=30)
        return response.json()
    except:
        print("Primary API failed, trying backup")
        try:
            response = requests.get(backup_url, timeout=30)
            return response.json()
        except:
            print("Both APIs failed")
            return None

Coding Challenge:
Handle timeout scenario

Hint: Use exception handling

Solution:
import requests
from datetime import datetime

def safe_api_call(url):
    try:
        response = requests.get(url, timeout=30)
        
        if response.status_code == 200:
            return response.json()
        elif response.status_code == 404:
            print("Resource not found")
        elif response.status_code == 500:
            print("Server error")
        else:
            print(f"Unexpected status: {response.status_code}")
            
    except requests.exceptions.Timeout:
        print("Request timeout - API too slow")
    except requests.exceptions.ConnectionError:
        print("Connection error - API unreachable")
    except Exception as e:
        print(f"Unexpected error: {e}")
    
    return None

Memory Trick: API = Can fail anytime

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏧 Topic 3: Retry Logic

Comic Story: ATM Retry
Try again if first attempt fails.

Problem:
Temporary failures need retries.

Coding Example 1 - Simple retry:
import time

for attempt in range(3):
    try:
        response = requests.get(url)
        print("Success!")
        break
    except:
        print(f"Attempt {attempt + 1} failed")
        time.sleep(2)  # Wait before retry

Coding Example 2 - Exponential backoff:
import time

def retry_with_backoff(func, max_retries=3):
    for attempt in range(max_retries):
        try:
            return func()
        except Exception as e:
            if attempt == max_retries - 1:
                raise e
            
            wait_time = 2 ** attempt  # 1, 2, 4, 8...
            print(f"Retry {attempt + 1} after {wait_time}s")
            time.sleep(wait_time)

Coding Challenge:
Build retry mechanism for database connection

Hint: Use loops

Solution:
import time
import psycopg2

def connect_with_retry(max_retries=3):
    for attempt in range(max_retries):
        try:
            connection = psycopg2.connect(
                host='localhost',
                database='mydb',
                user='user',
                password='password'
            )
            print("Connected successfully")
            return connection
            
        except psycopg2.OperationalError as e:
            print(f"Connection attempt {attempt + 1} failed: {e}")
            
            if attempt < max_retries - 1:
                wait_time = 2 ** attempt
                print(f"Retrying in {wait_time} seconds...")
                time.sleep(wait_time)
            else:
                print("Max retries reached")
                raise

Memory Trick: Retry = Try again

Interview Question:
Q: What is retry logic?
A: Automatically retry failed operations with delays. Use exponential backoff (increasing delays) to avoid overwhelming systems.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚗 Topic 4: Performance Optimization

Comic Story: Traffic Shortcut
Find faster route.

Problem:
Slow code impacts production pipelines.

Coding Example 1 - Use set instead of list:
# Slow: O(n) lookup
ids_list = [1, 2, 3, 4, 5]
if 3 in ids_list:  # Checks each element
    print("Found")

# Fast: O(1) lookup
ids_set = {1, 2, 3, 4, 5}
if 3 in ids_set:  # Hash lookup
    print("Found")

Coding Example 2 - Avoid nested loops:
# Slow: O(n²)
for i in list1:
    for j in list2:
        if i == j:
            print(i)

# Fast: O(n)
set2 = set(list2)
for i in list1:
    if i in set2:
        print(i)

Coding Example 3 - Use list comprehension:
# Slow
result = []
for i in range(1000):
    result.append(i * 2)

# Fast
result = [i * 2 for i in range(1000)]

Coding Challenge:
Optimize duplicate detection logic

Hint: Reduce loops and memory usage

Solution:
# Slow approach: O(n²)
def find_duplicates_slow(data):
    duplicates = []
    for i in range(len(data)):
        for j in range(i + 1, len(data)):
            if data[i] == data[j] and data[i] not in duplicates:
                duplicates.append(data[i])
    return duplicates

# Fast approach: O(n)
def find_duplicates_fast(data):
    seen = set()
    duplicates = set()
    
    for item in data:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)
    
    return list(duplicates)

Quiz:
Q: Best way to improve slow loops?
A: Optimization

Memory Trick: Optimize = Faster delivery

Interview Question:
Q: How do you optimize slow Python scripts?
A: Use appropriate data structures (set for lookups), avoid nested loops, use vectorized operations (pandas/numpy), profile code to find bottlenecks, use caching.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Top Interview Questions:

1. How do you process huge files?
   Answer: Chunking (pandas chunksize), line-by-line reading, generators, or Spark for distributed processing.

2. How do you handle API downtime?
   Answer: Try-except blocks, retry logic with exponential backoff, fallback APIs, circuit breakers, monitoring/alerts.

3. What is retry logic?
   Answer: Automatically retry failed operations with delays. Use exponential backoff to avoid overwhelming systems.

4. How do you optimize slow Python scripts?
   Answer: Use appropriate data structures (set for lookups), avoid nested loops, vectorized operations, profiling, caching.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Usage:

These scenarios happen frequently in AWS Glue pipelines, Lambda jobs, and cloud ETL systems.

Complete Production Example:
import pandas as pd
import requests
import time
import logging

logging.basicConfig(level=logging.INFO)

def fetch_api_with_retry(url, max_retries=3):
    """Fetch data from API with retry logic"""
    for attempt in range(max_retries):
        try:
            response = requests.get(url, timeout=30)
            if response.status_code == 200:
                return response.json()
            else:
                logging.warning(f"API returned {response.status_code}")
        except Exception as e:
            logging.error(f"Attempt {attempt + 1} failed: {e}")
            if attempt < max_retries - 1:
                wait_time = 2 ** attempt
                time.sleep(wait_time)
    
    return None

def process_large_file_optimized(file_path):
    """Process large file with chunking and optimization"""
    chunk_size = 100000
    processed_count = 0
    
    # Use set for fast lookups
    valid_ids = set(range(1, 1000000))
    
    for chunk in pd.read_csv(file_path, chunksize=chunk_size):
        # Optimize: vectorized operations
        chunk = chunk[chunk['id'].isin(valid_ids)]
        chunk = chunk.dropna()
        
        # Process chunk
        processed_count += len(chunk)
        logging.info(f"Processed {processed_count} records")
    
    return processed_count

def production_pipeline():
    """Complete production pipeline with error handling"""
    try:
        # Fetch data from API with retry
        api_data = fetch_api_with_retry('https://api.example.com/data')
        
        if api_data:
            # Process large file with optimization
            count = process_large_file_optimized('large_data.csv')
            logging.info(f"Pipeline completed: {count} records")
        else:
            logging.error("API fetch failed after retries")
            
    except Exception as e:
        logging.error(f"Pipeline failed: {e}")
        # Send alert, trigger fallback

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Revision Formula:

Production Formula:
Handle → Retry → Optimize → Scale

🚚 Handle = Chunk large files, handle errors
🏧 Retry = Exponential backoff for failures
🚗 Optimize = Use right data structures
📈 Scale = Design for growth

Master production thinking → Build reliable systems! 🚀`,

    types: `🎯 Scenario Based - Quick Reference

🚚 Large File Handling:
# Chunking
for chunk in pd.read_csv('big.csv', chunksize=10000):
    process(chunk)

# Line by line
with open('file.txt') as f:
    for line in f:
        process(line)

# Generator
def read_file(path):
    with open(path) as f:
        for line in f:
            yield line

🏪 API Failures:
try:
    response = requests.get(url, timeout=30)
    data = response.json()
except requests.exceptions.Timeout:
    print("Timeout")
except Exception as e:
    print(f"Error: {e}")

🏧 Retry Logic:
import time

for attempt in range(3):
    try:
        result = api_call()
        break
    except:
        wait = 2 ** attempt
        time.sleep(wait)

🚗 Performance:
# Use set for lookups
ids_set = set(ids)
if id in ids_set:  # O(1)

# List comprehension
result = [x*2 for x in data]

# Avoid nested loops
set2 = set(list2)
for i in list1:
    if i in set2:
        process(i)`,

    qa: [
      {
        q: "How to process large files?",
        a: "Use chunking with pandas chunksize, read line-by-line, use generators, or Spark for distributed processing. Never load entire file into memory. Example: pd.read_csv('file.csv', chunksize=10000)."
      },
      {
        q: "How to handle API failures?",
        a: "Use try-except blocks, check status codes, implement retry logic with exponential backoff, use fallback APIs, add timeouts, monitor and alert. Example: try: requests.get(url, timeout=30) except: handle_error()."
      },
      {
        q: "What is retry logic?",
        a: "Automatically retry failed operations with delays between attempts. Use exponential backoff (1s, 2s, 4s, 8s...) to avoid overwhelming systems. Essential for API calls, database connections, network operations."
      },
      {
        q: "How to optimize slow code?",
        a: "Use appropriate data structures (set for lookups O(1) vs list O(n)), avoid nested loops, use vectorized operations (pandas/numpy), list comprehensions, profile code, cache results, use generators."
      },
      {
        q: "What is exponential backoff?",
        a: "Retry strategy with increasing delays: 1s, 2s, 4s, 8s... Prevents overwhelming failed systems. Formula: wait_time = 2^attempt. Used in API retries, database connections."
      },
      {
        q: "How to handle memory issues?",
        a: "Process data in chunks, use generators (yield), read line-by-line, delete unused variables, use appropriate data types, consider distributed processing (Spark) for very large data."
      },
      {
        q: "What is circuit breaker pattern?",
        a: "Stop calling failing service after threshold. Prevents cascading failures. States: Closed (normal), Open (failing, stop calls), Half-Open (test recovery). Used in microservices."
      },
      {
        q: "How to optimize database queries?",
        a: "Use indexes, limit results, avoid SELECT *, use WHERE filters early, batch operations, use connection pooling, cache frequent queries, analyze query plans."
      },
      {
        q: "How to handle timeout scenarios?",
        a: "Set appropriate timeouts (requests.get(url, timeout=30)), catch Timeout exceptions, implement retry logic, use async operations for multiple calls, monitor timeout rates."
      },
      {
        q: "Where are these scenarios used?",
        a: "AWS Glue jobs (large file processing), Lambda functions (API calls with retry), ETL pipelines (error handling), data warehouses (optimization), production systems (reliability)."
      },
    ],

    coding: {
      thinkingApproach: [
        "Identify memory constraint",
        "Use chunking to process in batches",
        "Process each chunk independently",
        "Aggregate results if needed"
      ],
      questions: [
        {
          q: "1. Process large CSV in chunks",
          answer: "import pandas as pd\n\nfor chunk in pd.read_csv('big.csv', chunksize=10000):\n    chunk_cleaned = chunk.dropna()\n    print(f'Processed {len(chunk)} records')"
        },
        {
          q: "2. Handle API timeout",
          answer: "import requests\n\ntry:\n    response = requests.get(url, timeout=30)\n    data = response.json()\nexcept requests.exceptions.Timeout:\n    print('API timeout')\nexcept Exception as e:\n    print(f'Error: {e}')"
        },
        {
          q: "3. Implement retry logic for API",
          answer: "import time\n\nfor attempt in range(3):\n    try:\n        response = requests.get(url)\n        print('Success')\n        break\n    except:\n        print(f'Retry {attempt + 1}')\n        time.sleep(2 ** attempt)"
        },
        {
          q: "4. Retry with exponential backoff",
          answer: "import time\n\ndef retry_with_backoff(func, max_retries=3):\n    for attempt in range(max_retries):\n        try:\n            return func()\n        except Exception as e:\n            if attempt == max_retries - 1:\n                raise e\n            wait = 2 ** attempt\n            time.sleep(wait)"
        },
        {
          q: "5. Optimize duplicate detection",
          answer: "def find_duplicates_fast(data):\n    seen = set()\n    duplicates = set()\n    for item in data:\n        if item in seen:\n            duplicates.add(item)\n        else:\n            seen.add(item)\n    return list(duplicates)"
        },
        {
          q: "6. Use set for fast lookup",
          answer: "# Slow: O(n)\nif id in id_list:\n    process()\n\n# Fast: O(1)\nid_set = set(id_list)\nif id in id_set:\n    process()"
        },
        {
          q: "7. Read large file line by line",
          answer: "with open('large_file.txt', 'r') as file:\n    for line in file:\n        process_line(line.strip())"
        },
        {
          q: "8. Handle API with fallback",
          answer: "try:\n    data = requests.get(primary_url).json()\nexcept:\n    print('Primary failed, trying backup')\n    try:\n        data = requests.get(backup_url).json()\n    except:\n        print('Both failed')\n        data = None"
        },
        {
          q: "9. Optimize nested loop",
          answer: "# Slow: O(n²)\nfor i in list1:\n    for j in list2:\n        if i == j:\n            print(i)\n\n# Fast: O(n)\nset2 = set(list2)\nfor i in list1:\n    if i in set2:\n        print(i)"
        },
        {
          q: "10. Complete production pipeline",
          answer: "import pandas as pd\nimport requests\nimport time\n\ndef production_pipeline():\n    try:\n        # Fetch with retry\n        for attempt in range(3):\n            try:\n                data = requests.get(url).json()\n                break\n            except:\n                time.sleep(2 ** attempt)\n        \n        # Process in chunks\n        for chunk in pd.read_csv('file.csv', chunksize=10000):\n            chunk.dropna()\n            # Process\n    except Exception as e:\n        print(f'Pipeline failed: {e}')"
        }
      ]
    },

    quiz: [
      { q: "Large file solution?", options: ["Load all", "Chunking", "Ignore", "Delete"], answer: 1 },
      { q: "API failure handling?", options: ["Ignore", "try-except", "Skip", "Wait"], answer: 1 },
      { q: "Retry strategy?", options: ["Give up", "Exponential backoff", "Infinite loop", "Random"], answer: 1 },
      { q: "Fast lookup DS?", options: ["List", "Set", "Tuple", "String"], answer: 1 },
      { q: "Optimize nested loops?", options: ["Add more loops", "Use set", "Use list", "Use tuple"], answer: 1 },
      { q: "Memory issue solution?", options: ["Buy more RAM", "Chunking", "Ignore", "Restart"], answer: 1 },
      { q: "Timeout handling?", options: ["Wait forever", "Set timeout", "Ignore", "Retry infinite"], answer: 1 },
      { q: "Exponential backoff means?", options: ["Same delay", "Increasing delay", "No delay", "Random delay"], answer: 1 },
      { q: "Best for large files?", options: ["Load all", "Generators", "Lists", "Tuples"], answer: 1 },
      { q: "Production priority?", options: ["Speed only", "Reliability", "Complexity", "Size"], answer: 1 }
    ],

    interview: "Scenario Based Questions: Production engineering thinking. Large File Handling processes huge files without memory crash. Comic: Truck overload - can't load entire warehouse. Solution: Chunking with pd.read_csv(chunksize=10000), line-by-line reading, generators. Example: for chunk in pd.read_csv('big.csv', chunksize=10000). API Failures happen when services are down. Comic: Restaurant closed. Solution: try-except blocks, check status codes, timeouts. Example: try: requests.get(url, timeout=30) except: handle_error(). Retry Logic automatically retries failed operations. Comic: ATM retry. Solution: Loop with exponential backoff (1s, 2s, 4s, 8s). Example: for attempt in range(3): try: break except: time.sleep(2**attempt). Performance Optimization makes code faster. Comic: Traffic shortcut. Solution: Use set for O(1) lookup vs list O(n), avoid nested loops, list comprehensions. Example: id_set=set(ids); if id in id_set. Top questions: Process huge files (chunking, generators, Spark), Handle API downtime (try-except, retry, fallback), Retry logic (exponential backoff), Optimize slow scripts (right data structures, avoid nested loops, vectorized ops). Real usage: AWS Glue pipelines, Lambda jobs, ETL systems. Memory: Big file=Chunks, API=Can fail, Retry=Try again, Optimize=Faster. Formula: Handle → Retry → Optimize → Scale. Master production thinking.",

    memory: `🎯 Scenario Based - Memory Map

🚚 Large Files = Small Chunks
Comic: Truck overload
for chunk in pd.read_csv('big.csv', chunksize=10000):
    process(chunk)
Memory: Big file = Chunks

🏪 API Failures = Can Happen
Comic: Restaurant closed
try:
    requests.get(url, timeout=30)
except:
    handle_error()
Memory: API = Can fail

🏧 Retry Logic = Try Again
Comic: ATM retry
for attempt in range(3):
    try:
        break
    except:
        time.sleep(2 ** attempt)
Memory: Retry = Exponential backoff

🚗 Optimize = Faster Route
Comic: Traffic shortcut
# Slow: list O(n)
if id in id_list

# Fast: set O(1)
if id in id_set
Memory: Optimize = Right DS

🎯 Production Formula:
Handle → Retry → Optimize → Scale

📊 Top Interview Questions:
1. Huge files? Chunking, generators, Spark
2. API downtime? try-except, retry, fallback
3. Retry logic? Exponential backoff
4. Optimize? Set for lookups, avoid nested loops

✅ Real Usage:
AWS Glue pipelines
Lambda functions
ETL systems
Production reliability
Error handling

🔑 Quick Solutions:
Large files → chunksize
API failures → try-except + timeout
Retry → exponential backoff
Slow code → set, vectorized ops
Memory → generators, chunking`,

    revision: "Scenario Based: Production engineering thinking. Large File Handling uses chunking (truck overload). Example: pd.read_csv(chunksize=10000), line-by-line, generators. Never load all into memory. API Failures need error handling (restaurant closed). Example: try: requests.get(url, timeout=30) except: handle_error(). Check status codes, use timeouts. Retry Logic automatically retries with exponential backoff (ATM retry). Example: for attempt in range(3): try: break except: time.sleep(2**attempt). Delays: 1s, 2s, 4s, 8s. Performance Optimization uses right data structures (traffic shortcut). Set O(1) vs list O(n), avoid nested loops, list comprehensions. Top questions: Huge files (chunking, Spark), API downtime (try-except, retry, fallback), Retry logic (exponential backoff), Optimize (set, vectorized). Real usage: AWS Glue, Lambda, ETL. Memory: Big file=Chunks, API=Can fail, Retry=Backoff, Optimize=Right DS. Formula: Handle → Retry → Optimize → Scale. Master production thinking."
  },

  "ai-future-python": {
    title: "AI and Future Python",
    icon: "🤖",
    difficulty: "Future Proof Engineering",
    duration: "60 min",
    description: "How modern engineers use AI tools for coding, debugging, and productivity",

    comic: `🤖 Smart Assistant (Prompt to Code)

Developer: "I need to write CSV cleaning code"
*Types manually* → Takes 30 minutes ⏰

With AI:
Developer: "Write Python code to clean CSV data"
AI: *Generates code instantly* → Takes 2 minutes ⚡

Work smarter, not harder! 🤖

💾 Google Drive for Developers (GitHub)

Person: "Where's my code from last month?"
*Searches laptop* → Lost forever ❌

With GitHub:
Developer: git push
*Code saved in cloud* → Always accessible ✅

Never lose code again! 💾

🍽️ Restaurant Food Check (Validate AI Code)

Customer: "Is this food safe?"
*Checks before eating* → Verified ✅

Developer: "Is this AI code correct?"
*Reviews logic, tests cases* → Validated ✅

Always verify before using! 🍽️

🔧 Mechanic Inspection (Debug AI Code)

Car: *Breaks down* 💥
Mechanic: *Inspects, finds issue, fixes* ✅

AI Code: *Has bug* 🐛
Developer: *Reads error, debugs, fixes* ✅

Fix what breaks! 🔧

🎯 Aha Moment:
AI accelerates development, humans ensure quality!
Future engineers use AI + validation skills! 🚀`,

    deepDive: `🤖 AI and Future Python - Complete Guide

📌 Module Description:
This module teaches how modern engineers use AI tools for coding, debugging, and productivity.

Category: Future Proof Engineering
Importance: Extremely High

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🤖 Topic 1: Prompt to Code using AI

Comic Story: Smart Assistant
Instead of writing everything manually, you ask an assistant.

What It Is:
Generate Python code using prompts with AI tools (ChatGPT, GitHub Copilot, Amazon Q).

Example Prompts:
1. "Write Python code to clean CSV data"
2. "Generate API retry logic"
3. "Build duplicate removal script"
4. "Create ETL pipeline for S3 to Redshift"
5. "Write unit tests for this function"

Coding Example - Generate SQL file parser:
Workflow:
1. Prompt AI: "Write Python code to parse SQL file and extract table names"
2. Review code: Check logic, imports, error handling
3. Test output: Run with sample SQL file

AI Generated Code:
import re

def extract_table_names(sql_file):
    with open(sql_file, 'r') as f:
        sql_content = f.read()
    
    # Find CREATE TABLE statements
    pattern = r'CREATE TABLE\\s+(\\w+)'
    tables = re.findall(pattern, sql_content, re.IGNORECASE)
    
    return tables

# Test
tables = extract_table_names('schema.sql')
print(f"Found tables: {tables}")

Coding Challenge:
Generate ETL validation script using AI

Hint: Give very clear prompts

Solution Approach:
Prompt: "Write Python script to validate ETL data: check nulls, duplicates, data types, and row counts"

Memory Trick: Good prompt = Better code

Interview Question:
Q: Do you use AI in development?
A: Yes, AI accelerates coding (boilerplate, documentation, tests) but I always review, test, and validate generated code before using in production.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💾 Topic 2: GitHub Usage

Comic Story: Google Drive for Developers
Store and manage your code safely.

What It Is:
Use GitHub for version control and collaboration.

Important Commands:
1. git init - Initialize repository
2. git add . - Stage all changes
3. git commit -m "message" - Save changes
4. git push - Upload to GitHub
5. git pull - Download latest changes
6. git clone - Copy repository
7. git branch - Create branches
8. git merge - Combine branches

Basic Workflow:
# Initialize
git init

# Add files
git add .

# Commit
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin https://github.com/username/repo.git

# Push
git push -u origin main

Coding Challenge:
Push ETL project to GitHub repository

Hint: Practice Git basics

Solution:
# Create repository on GitHub first
# Then in your project folder:

git init
git add .
git commit -m "Add ETL pipeline code"
git remote add origin https://github.com/yourusername/etl-project.git
git push -u origin main

Memory Trick: GitHub = Code backup + collaboration

Interview Question:
Q: How does Git help teams?
A: Version control (track changes), collaboration (multiple developers), branching (parallel work), rollback (undo mistakes), code review (pull requests).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🍽️ Topic 3: Validate AI Generated Code

Comic Story: Restaurant Food Check
You verify food before eating.

Problem:
AI may generate incorrect code.

Validation Steps:
1. Check logic - Does it solve the problem?
2. Review edge cases - What if input is empty, null, or invalid?
3. Validate performance - Is it efficient?
4. Run test cases - Does it work with real data?
5. Check security - Any vulnerabilities?
6. Review dependencies - Are imports correct?

Coding Example - Validate generated SQL parser:
# AI Generated Code
def parse_sql(file):
    return open(file).read().split(';')

# Issues:
# 1. File not closed (resource leak)
# 2. No error handling
# 3. Doesn't handle comments
# 4. Splits on ; inside strings

# Validated Code
def parse_sql(file):
    try:
        with open(file, 'r') as f:
            content = f.read()
        
        # Remove comments
        content = re.sub(r'--.*', '', content)
        
        # Split statements (basic approach)
        statements = [s.strip() for s in content.split(';') if s.strip()]
        
        return statements
    except FileNotFoundError:
        print(f"File not found: {file}")
        return []

Interview Question:
Q: How do you validate AI code?
A: Review logic, test edge cases, check performance, run tests, verify security, ensure error handling, validate with real data.

Memory Trick: Trust but verify

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 Topic 4: Debug AI Code

Comic Story: Mechanic Inspection
Fix machine when it breaks.

What It Is:
Debug incorrect AI-generated code.

Debug Process:
1. Read errors - Understand error message
2. Use logs - Add print statements
3. Check inputs - Validate data
4. Test fixes - Verify solution
5. Understand code - Don't blindly trust AI

Coding Challenge:
Fix broken AI-generated API code

Example - Broken AI Code:
def fetch_data(url):
    response = requests.get(url)
    return response.json()

# Issues:
# 1. No error handling
# 2. No timeout
# 3. Doesn't check status code

# Fixed Code:
import requests

def fetch_data(url):
    try:
        response = requests.get(url, timeout=30)
        
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Error: Status {response.status_code}")
            return None
            
    except requests.exceptions.Timeout:
        print("Request timeout")
        return None
    except Exception as e:
        print(f"Error: {e}")
        return None

Quiz:
Q: Should developers blindly trust AI code?
A: No

Memory Trick: AI writes faster, humans verify smarter

Interview Question:
Q: Can AI replace developers?
A: No. AI accelerates coding but developers are needed for: requirements understanding, architecture design, code review, debugging, optimization, security, business logic, and critical thinking.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Top Interview Questions:

1. Do you use AI in development?
   Answer: Yes, for boilerplate code, documentation, tests, debugging suggestions. Always review and validate before production use.

2. How do you validate AI code?
   Answer: Review logic, test edge cases, check performance, run tests, verify security, ensure error handling, validate with real data.

3. How does Git help teams?
   Answer: Version control, collaboration, branching, rollback, code review, conflict resolution, history tracking.

4. Can AI replace developers?
   Answer: No. AI is a tool that accelerates development. Developers needed for architecture, requirements, validation, debugging, optimization, security, business logic.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Real Project Usage:

Modern teams use ChatGPT, GitHub Copilot, and Amazon Q to accelerate delivery while maintaining quality.

Complete Modern Workflow:
# 1. Use AI to generate initial code
Prompt: "Write Python ETL script to read CSV from S3, clean data, load to Redshift"

# 2. Review and validate
- Check logic
- Add error handling
- Optimize performance
- Add logging

# 3. Test thoroughly
- Unit tests
- Integration tests
- Edge cases

# 4. Version control with Git
git add .
git commit -m "Add ETL pipeline with validation"
git push

# 5. Code review
- Team reviews changes
- Suggests improvements
- Approves merge

# 6. Deploy to production
- CI/CD pipeline
- Monitoring
- Alerts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Final Revision Formula:

Future Formula:
Prompt → Generate → Validate → Debug → Ship

🤖 Prompt = Clear requirements to AI
⚡ Generate = AI creates code fast
✅ Validate = Review logic and tests
🔧 Debug = Fix issues
🚀 Ship = Deploy to production

Master AI + validation → Future-proof career! 🚀`,

    types: `🤖 AI and Future Python - Quick Reference

🤖 AI Prompts:
"Write Python code to clean CSV data"
"Generate API retry logic"
"Build duplicate removal script"
"Create ETL pipeline"
"Write unit tests for this function"

💾 Git Commands:
git init              # Initialize
git add .             # Stage changes
git commit -m "msg"   # Save changes
git push              # Upload
git pull              # Download
git clone url         # Copy repo
git branch name       # Create branch
git merge branch      # Combine branches

✅ Validation Checklist:
□ Check logic
□ Review edge cases
□ Validate performance
□ Run test cases
□ Check security
□ Review dependencies
□ Test with real data

🔧 Debug Process:
1. Read error message
2. Add print/log statements
3. Check inputs
4. Test fixes
5. Understand code logic`,

    qa: [
      {
        q: "How to use AI for coding?",
        a: "Give clear prompts to AI tools (ChatGPT, Copilot, Amazon Q). Example: 'Write Python code to clean CSV data'. Always review, test, and validate generated code before using."
      },
      {
        q: "What is GitHub?",
        a: "Version control platform for storing and managing code. Tracks changes, enables collaboration, allows rollback. Basic commands: git init, git add, git commit, git push."
      },
      {
        q: "How to validate AI code?",
        a: "Review logic, test edge cases (null, empty, invalid inputs), check performance, run tests, verify security, ensure error handling, validate with real data."
      },
      {
        q: "How to debug AI generated code?",
        a: "Read error messages, add logging, check inputs, test fixes, understand code logic. Don't blindly trust AI - verify and validate."
      },
      {
        q: "Can AI replace developers?",
        a: "No. AI accelerates coding but developers needed for: requirements understanding, architecture design, code review, debugging, optimization, security, business logic, critical thinking."
      },
      {
        q: "What are good AI prompts?",
        a: "Be specific and clear. Good: 'Write Python function to remove duplicates from list preserving order'. Bad: 'Write code'. Include context, requirements, constraints."
      },
      {
        q: "Why use Git?",
        a: "Version control (track changes), collaboration (multiple developers), branching (parallel work), rollback (undo mistakes), code review (pull requests), history tracking."
      },
      {
        q: "How to push code to GitHub?",
        a: "git init, git add ., git commit -m 'message', git remote add origin url, git push -u origin main. Creates repository and uploads code."
      },
      {
        q: "What to check in AI code?",
        a: "Logic correctness, edge cases, error handling, performance, security, resource management (file closing), dependencies, test coverage."
      },
      {
        q: "Where is AI used in data engineering?",
        a: "Generate ETL scripts, write SQL queries, create data validation logic, generate documentation, write unit tests, debug errors, optimize code."
      }
    ],

    coding: {
      title: "AI and Future Python - Practice",
      scenario: "Use AI tools effectively for modern development",
      question: "Use AI to generate CSV cleaning code",
      input: "Prompt: 'Write Python code to clean CSV data'",
      expectedOutput: "Validated and tested code",
      hint: "Give clear prompt, then review and test",
      solution: "# 1. Prompt AI\n# 2. Review generated code\n# 3. Add error handling\n# 4. Test with sample data\n# 5. Validate edge cases",
      note: "Always validate AI generated code before using in production.",
      thinkingApproach: [
        "Write clear prompt",
        "Review AI generated code",
        "Add error handling",
        "Test with real data",
        "Validate edge cases"
      ],
      questions: [
        {
          q: "1. Generate CSV cleaning code with AI",
          answer: "# Prompt: 'Write Python code to clean CSV: remove nulls, duplicates, standardize columns'\n# Then review and test generated code"
        },
        {
          q: "2. Initialize Git repository",
          answer: "git init\ngit add .\ngit commit -m 'Initial commit'"
        },
        {
          q: "3. Push code to GitHub",
          answer: "git remote add origin https://github.com/username/repo.git\ngit push -u origin main"
        },
        {
          q: "4. Validate AI generated SQL parser",
          answer: "# Check: error handling, file closing, edge cases, comments handling\n# Add try-except, with statement, input validation"
        },
        {
          q: "5. Fix AI code without error handling",
          answer: "# Original: response = requests.get(url)\n# Fixed:\ntry:\n    response = requests.get(url, timeout=30)\n    if response.status_code == 200:\n        return response.json()\nexcept Exception as e:\n    print(f'Error: {e}')"
        },
        {
          q: "6. Generate API retry logic with AI",
          answer: "# Prompt: 'Write Python function with retry logic and exponential backoff for API calls'\n# Review and test generated code"
        },
        {
          q: "7. Clone GitHub repository",
          answer: "git clone https://github.com/username/repo.git\ncd repo"
        },
        {
          q: "8. Create and switch to new branch",
          answer: "git branch feature-branch\ngit checkout feature-branch\n# Or: git checkout -b feature-branch"
        },
        {
          q: "9. Validate AI code for edge cases",
          answer: "# Test with: empty input, null values, invalid types, large data\n# Add validation: if not data: return None"
        },
        {
          q: "10. Debug AI generated code with error",
          answer: "# Read error message\n# Add print statements\n# Check inputs\n# Test fix\n# Understand logic"
        }
      ]
    },

    quiz: [
      { q: "AI generates code?", options: ["Never", "Yes", "Sometimes", "No"], answer: 1 },
      { q: "Should trust AI blindly?", options: ["Yes", "No", "Maybe", "Always"], answer: 1 },
      { q: "Git is for?", options: ["Testing", "Version control", "Deployment", "Design"], answer: 1 },
      { q: "git push does?", options: ["Download", "Upload", "Delete", "Test"], answer: 1 },
      { q: "Validate AI code?", options: ["Skip", "Always", "Never", "Sometimes"], answer: 1 },
      { q: "Can AI replace developers?", options: ["Yes", "No", "Maybe", "Soon"], answer: 1 },
      { q: "Good prompt is?", options: ["Vague", "Clear and specific", "Short", "Long"], answer: 1 },
      { q: "GitHub stores?", options: ["Images", "Code", "Videos", "Music"], answer: 1 },
      { q: "Debug AI code?", options: ["Ignore errors", "Read and fix", "Delete", "Rewrite"], answer: 1 },
      { q: "AI accelerates?", options: ["Nothing", "Development", "Bugs", "Errors"], answer: 1 }
    ],

    interview: "AI and Future Python: Modern engineers use AI for productivity. Prompt to Code uses AI tools (ChatGPT, Copilot, Amazon Q) to generate code. Comic: Smart assistant - ask instead of writing manually. Example prompts: 'Write CSV cleaning code', 'Generate API retry logic'. Always review and test. GitHub Usage stores code safely. Comic: Google Drive for developers. Commands: git init, git add, git commit, git push. Version control, collaboration, rollback. Validate AI Code before using. Comic: Restaurant food check - verify before eating. Steps: check logic, test edge cases, validate performance, run tests, check security. Debug AI Code when it breaks. Comic: Mechanic inspection - fix issues. Process: read errors, use logs, check inputs, test fixes. Don't blindly trust AI. Top questions: Use AI in development (yes, but validate), Validate AI code (review, test, check edge cases), Git helps teams (version control, collaboration, rollback), AI replace developers (no, AI is tool, developers needed for architecture, validation, debugging). Real usage: ChatGPT, Copilot, Amazon Q accelerate delivery. Memory: Good prompt=Better code, GitHub=Code backup, Trust but verify, AI writes faster humans verify smarter. Formula: Prompt → Generate → Validate → Debug → Ship. Master AI + validation for future-proof career.",

    memory: `🤖 AI and Future Python - Memory Map

🤖 Prompt to Code = Smart Assistant
Comic: Ask instead of write manually
Prompts:
- "Write CSV cleaning code"
- "Generate API retry logic"
- "Build ETL pipeline"
Memory: Good prompt = Better code

💾 GitHub = Code Backup
Comic: Google Drive for developers
git init
git add .
git commit -m "message"
git push
Memory: GitHub = Version control

🍽️ Validate = Food Check
Comic: Verify before eating
Steps:
□ Check logic
□ Test edge cases
□ Validate performance
□ Run tests
Memory: Trust but verify

🔧 Debug = Mechanic Fix
Comic: Fix when breaks
Process:
1. Read errors
2. Add logs
3. Check inputs
4. Test fixes
Memory: AI writes, humans verify

🎯 Future Formula:
Prompt → Generate → Validate → Debug → Ship

📊 Top Interview Questions:
1. Use AI? Yes, but validate
2. Validate how? Review, test, edge cases
3. Git helps? Version control, collaboration
4. AI replace? No, tool not replacement

✅ Real Usage:
ChatGPT for code generation
GitHub Copilot for suggestions
Amazon Q for AWS code
Git for version control
Always validate before production

🔑 Quick Tips:
Clear prompts → Better code
Always review AI output
Test edge cases
Use Git for backup
Debug systematically
Understand before trusting`,

    revision: "AI and Future Python: Prompt to Code uses AI (ChatGPT, Copilot, Amazon Q) to generate code fast (smart assistant). Example: 'Write CSV cleaning code'. Always review and test. GitHub stores code safely (Google Drive for developers). Commands: git init, add, commit, push. Version control, collaboration, rollback. Validate AI Code before using (food check). Steps: check logic, test edge cases, validate performance, run tests, check security. Debug AI Code when broken (mechanic fix). Process: read errors, add logs, check inputs, test fixes. Don't blindly trust. Top questions: Use AI (yes but validate), Validate how (review, test, edge cases), Git helps (version control, collaboration), AI replace (no, tool not replacement). Real usage: ChatGPT, Copilot, Amazon Q accelerate delivery. Memory: Good prompt=Better code, GitHub=Backup, Trust but verify, AI writes humans verify. Formula: Prompt → Generate → Validate → Debug → Ship. Master AI + validation for future career."
  }

};

// Export the content
if (typeof module !== 'undefined' && module.exports) {
  module.exports = pythonContent;
}
