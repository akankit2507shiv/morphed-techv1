// Real Projects Content - Complete AATMA Framework
const projectsContent = {
  'project-1': {
    project_id: 'DE001',
    id: 'project-1',
    project_name: 'End-to-End Batch ETL Pipeline',
    title: 'End-to-End Batch ETL Pipeline',
    tagline: 'Build a production-ready ETL pipeline from AWS S3 to Redshift',
    subtitle: 'Build a production-ready ETL pipeline from AWS S3 to Redshift',
    icon: '📦',
    difficulty_level: 'Beginner to Intermediate',
    level: 'Beginner to Intermediate',
    estimated_duration: '4 Hours',
    duration: '4 Hours',
    tools_and_technologies: ['Python', 'SQL', 'PySpark', 'AWS S3', 'Amazon Redshift', 'Apache Airflow'],
    tech_stack: ['Python', 'SQL', 'PySpark', 'AWS S3', 'Amazon Redshift', 'Apache Airflow'],
    ready: true,
    
    // Internal metadata (hidden from users)
    internal_metadata: {
      internal_program_name: 'AATMA V2',
      internal_module_code: 'DE_BATCH_ETL_001',
      visible_to_users: false,
      notes: 'AATMA naming hidden from UI. Only used for internal operations/admin.'
    },
    
    // UI Display Information
    ui_display: {
      public_title: 'End-to-End Batch ETL Pipeline',
      subtitle: 'Build a production-ready ETL pipeline from AWS S3 to Redshift',
      category: 'Data Engineering Projects',
      difficulty_level: 'Beginner to Intermediate',
      estimated_duration: '4 Hours',
      course_type: 'Hands-on Project Based Learning',
      language: 'English',
      certificate_available: true,
      featured: true,
      thumbnail_url: '/courses/etl-batch-thumbnail.png',
      trailer_video_url: '/videos/etl-preview.mp4'
    },
    
    // Business Positioning
    business_positioning: {
      target_audience: [
        'College Students',
        'Freshers',
        'Working Professionals',
        'Career Switchers',
        'Data Engineering Aspirants'
      ],
      career_roles_targeted: [
        'Data Engineer',
        'AWS Data Engineer',
        'ETL Developer',
        'Big Data Engineer',
        'Cloud Data Engineer'
      ],
      market_positioning: 'Real-world project based learning for job preparation'
    },
    
    // Technology Stack
    technology_stack: {
      programming_languages: ['Python', 'SQL'],
      big_data_tools: ['PySpark'],
      cloud_services: ['AWS S3', 'Amazon Redshift'],
      orchestration_tools: ['Apache Airflow']
    },
    
    // Project Info
    project_info: {
      what_you_will_build: 'Build a complete production-style batch ETL pipeline where raw files are stored in S3, transformed using PySpark, orchestrated using Airflow, and loaded into Redshift for analytics.',
      business_problem: 'A retail company receives daily sales files from multiple regions but manual processing delays business reporting.',
      why_companies_need_this: 'Companies need automated batch pipelines to process large volumes of daily data efficiently.',
      real_world_usage: [
        'E-commerce sales processing',
        'Banking daily transaction reports',
        'Healthcare reporting systems',
        'Supply chain analytics'
      ],
      expected_output: 'Clean transformed analytical tables ready for BI dashboards.'
    },
    
    // Learning Outcomes
    learning_outcomes: [
      'Understand complete ETL architecture',
      'Learn PySpark transformations',
      'Understand Airflow scheduling',
      'Learn Redshift loading',
      'Handle real production scenarios'
    ],
    
    // Syllabus and Content
    syllabus: {
      project_id: 'DE001',
      project_name: 'End-to-End Batch ETL Pipeline',
      tagline: 'Build production-ready pipeline from S3 to Redshift',
      level: 'Beginner to Intermediate',
      duration: '4 Hours',
      tools: [
        'Python',
        'SQL',
        'PySpark',
        'AWS S3',
        'Redshift',
        'Airflow'
      ],
      learning_sections: {
        project_info: {
          title: '📋 Project Info',
          business_case: 'Retail company receives 20GB daily sales data from multiple stores.',
          how_much_data: '20GB daily batch files, scalable up to TB-level architecture.',
          why_company_built_this: 'Manual reporting caused delays.',
          expected_salary_relevance: 'Asked in 6–20 LPA interviews.'
        },
        overview: {
          title: '🎯 Overview',
          what_you_build: 'Complete ETL pipeline',
          business_problem: 'Slow reporting',
          final_output: 'Analytics-ready warehouse tables'
        },
        comic_learning: {
          title: '🎭 Comic',
          story: 'Imagine store managers sending messy Excel files daily and your pipeline acts like an automated employee cleaning everything.'
        },
        deep_dive: {
          title: '📚 Deep Dive',
          architecture: [
            'S3 raw layer',
            'PySpark processing',
            'Airflow orchestration',
            'Redshift warehouse'
          ],
          why_each_tool: [
            'Why S3?',
            'Why Spark?',
            'Why Airflow?',
            'Why Redshift?'
          ]
        },
        types: {
          title: '📋 Types',
          batch_types: [
            'Daily batch',
            'Weekly batch',
            'Monthly batch'
          ]
        },
        components: {
          title: '⚙️ Components',
          components_used: [
            'IAM',
            'S3',
            'Spark',
            'Airflow',
            'Redshift'
          ]
        },
        coding: {
          title: '💻 Coding',
          sql_examples: [
            {
              question: 'Find duplicate records',
              answer: 'SELECT customer_id,count(*) FROM sales GROUP BY customer_id HAVING count(*)>1;'
            }
          ],
          pyspark_examples: [
            {
              question: 'Remove duplicates',
              answer: 'df.dropDuplicates()'
            }
          ]
        },
        qna: {
          title: '💬 Real Q&A',
          questions: [
            {
              question: 'How much data did your pipeline process?',
              answer: 'Around 20GB daily.'
            },
            {
              question: 'How many tables were involved?',
              answer: '8 source tables.'
            },
            {
              question: 'How many Spark executors?',
              answer: 'Based on workload scaling.'
            }
          ]
        },
        mcq_quiz: {
          title: '🎯 Quiz',
          questions: [
            {
              question: 'Which service stores raw data?',
              options: [
                'Redshift',
                'S3',
                'Lambda',
                'RDS'
              ],
              answer: 'S3'
            }
          ]
        },
        interview: {
          title: '🎤 Interview Questions',
          realistic_questions: [
            {
              question: 'Why not use Glue instead of Spark?',
              answer: 'Spark gave more transformation flexibility.'
            },
            {
              question: 'How do you scale if data becomes 10x?',
              answer: 'Partition optimization and cluster scaling.'
            },
            {
              question: 'How do you monitor failures?',
              answer: 'Airflow logs + alerts.'
            }
          ]
        },
        mistakes: {
          title: '⚠️ Common Mistakes',
          mistakes_list: [
            'Memorizing architecture only',
            'Ignoring failure handling',
            'Unable to explain business impact'
          ]
        },
        practical: {
          title: '🔧 Practical Scenarios',
          real_cases: [
            {
              scenario: 'File corruption',
              solution: 'Validation layer'
            },
            {
              scenario: 'Schema change',
              solution: 'Schema evolution handling'
            }
          ]
        },
        memory_tricks: {
          title: '🧠 Memory Tricks',
          tricks: [
            'S3 = Store',
            'Spark = Process',
            'Airflow = Schedule',
            'Redshift = Analyze'
          ]
        },
        revision: {
          title: '⚡ Quick Revision',
          one_line_revision: [
            'What is ETL?',
            'Why Spark?',
            'Why Airflow?'
          ]
        }
      }
    },
    
    // Project Overview
    project_overview: {
      project_name: 'Retail Sales Analytics Pipeline',
      industry: 'Retail',
      problem_statement: 'Retail company receives daily sales data from multiple stores and wants centralized reporting.',
      business_goal: 'Automate ingestion, transformation, and reporting pipeline.',
      real_world_impact: 'Improves decision making through centralized analytics.'
    },
    
    // Architecture Flow
    architecture_flow: [
      {
        step_number: 1,
        component_name: 'AWS S3',
        description: 'Store raw incoming CSV files.'
      },
      {
        step_number: 2,
        component_name: 'PySpark',
        description: 'Clean and transform raw data.'
      },
      {
        step_number: 3,
        component_name: 'Apache Airflow',
        description: 'Schedule daily pipeline execution.'
      },
      {
        step_number: 4,
        component_name: 'Amazon Redshift',
        description: 'Store final processed analytical tables.'
      }
    ],
    
    // Folder Structure
    folder_structure: {
      description: 'Production-ready project folder structure',
      folders: [
        'src/',
        'config/',
        'airflow_dags/',
        'data/raw/',
        'data/processed/',
        'tests/',
        'logs/'
      ]
    },
    
    // Dataset Information
    dataset_information: {
      dataset_type: 'Retail Sales Data',
      sample_columns: [
        'customer_id',
        'order_id',
        'product_id',
        'region',
        'amount',
        'order_date'
      ],
      data_volume: '5GB daily',
      source_type: 'CSV files'
    },
    
    // Implementation Phase
    implementation_phase: {
      step_by_step_tasks: [
        'Create S3 bucket structure',
        'Upload raw files',
        'Write PySpark transformation scripts',
        'Perform SQL validations',
        'Create Airflow DAG',
        'Load final data to Redshift'
      ],
      coding_deliverables: [
        'PySpark scripts',
        'SQL queries',
        'Airflow DAG code'
      ],
      final_project_deliverables: [
        'Architecture diagram',
        'Final dataset',
        'Deployment-ready code'
      ]
    },
    
    // Core Concepts Mastery
    core_concepts_mastery: {
      technical_concepts: [
        'ETL',
        'Batch processing',
        'Data transformation',
        'Workflow orchestration',
        'Data warehousing'
      ],
      why_each_tool_is_used: [
        'S3 → raw storage',
        'PySpark → distributed processing',
        'Airflow → scheduling',
        'Redshift → analytics warehouse'
      ],
      architecture_understanding: [
        'Data flow design',
        'Scalability',
        'Performance optimization'
      ]
    },
    
    // Curriculum Modules
    curriculum_modules: [
      {
        module_number: 1,
        title: 'ETL Fundamentals',
        duration: '25 mins',
        topics: ['ETL basics', 'Batch processing', 'Architecture understanding']
      },
      {
        module_number: 2,
        title: 'AWS S3 Data Lake Setup',
        duration: '35 mins',
        topics: ['Bucket creation', 'Folder partitioning', 'Raw zone design']
      },
      {
        module_number: 3,
        title: 'PySpark Transformation',
        duration: '75 mins',
        topics: ['Data cleaning', 'Schema validation', 'Transformations', 'Aggregation']
      },
      {
        module_number: 4,
        title: 'Redshift Integration',
        duration: '45 mins',
        topics: ['Table design', 'COPY command', 'Warehouse optimization']
      },
      {
        module_number: 5,
        title: 'Airflow Orchestration',
        duration: '50 mins',
        topics: ['DAG creation', 'Scheduling', 'Retries']
      },
      {
        module_number: 6,
        title: 'Production Best Practices',
        duration: '30 mins',
        topics: ['Monitoring', 'Logging', 'Security', 'Cost optimization']
      }
    ],
    
    // Hands-on Coding Examples
    hands_on_coding_examples: {
      sql_questions: [
        {
          question: 'Find duplicate customer records',
          answer: 'SELECT customer_id, COUNT(*) FROM sales GROUP BY customer_id HAVING COUNT(*) > 1;'
        }
      ],
      python_questions: [
        {
          question: 'Read CSV file using Python',
          answer: 'Use pandas.read_csv()'
        }
      ],
      pyspark_questions: [
        {
          question: 'Remove duplicate rows',
          answer: 'df.dropDuplicates()'
        }
      ],
      airflow_questions: [
        {
          question: 'Create daily schedule DAG',
          answer: "schedule_interval='@daily'"
        }
      ]
    },
    
    // Real World Failure Scenarios
    real_world_failure_scenarios: [
      {
        scenario: 'Daily file missing',
        problem: 'Pipeline fails',
        solution: 'Implement retry and alert mechanism'
      },
      {
        scenario: 'Duplicate records',
        problem: 'Wrong reporting numbers',
        solution: 'Apply deduplication logic'
      },
      {
        scenario: 'Slow processing',
        problem: 'Delayed dashboards',
        solution: 'Optimize partitions and joins'
      }
    ],
    
    // Hands-on Deliverables
    hands_on_deliverables: [
      'Complete ETL project code',
      'PySpark scripts',
      'Airflow DAG files',
      'Redshift SQL scripts',
      'Architecture diagram',
      'Deployment checklist'
    ],
    
    // Resume Support
    resume_support: {
      resume_project_title: 'Production Batch ETL Pipeline',
      resume_bullet_points: [
        'Built batch ETL pipelines using PySpark',
        'Automated workflows using Airflow',
        'Loaded warehouse data into Redshift'
      ]
    },
    
    // Resume Building
    resume_building: {
      resume_project_title: 'Production Batch ETL Pipeline',
      strong_resume_points: [
        'Built scalable ETL pipeline',
        'Automated workflows',
        'Optimized reporting systems'
      ],
      linkedin_project_description: 'Built production-ready AWS ETL architecture.'
    },
    
    // Common Mistakes Students Make
    common_mistakes_students_make: [
      'Memorizing architecture without understanding',
      'Ignoring failure scenarios',
      'Unable to explain business value'
    ],
    
    // Salary Role Mapping
    salary_role_mapping: {
      fresher_roles: [
        'Junior Data Engineer'
      ],
      mid_level_roles: [
        'Data Engineer'
      ],
      high_paying_roles: [
        'Senior Data Engineer',
        'Cloud Data Engineer'
      ]
    },
    
    // Certification Outcome
    certification_outcome: {
      certificate_name: 'Production ETL Specialist',
      portfolio_value: 'High',
      interview_readiness_score: '9/10'
    },
    
    // Final Transformation
    final_transformation: {
      before: 'Confused about real-world ETL systems',
      after: 'Can confidently explain and build production ETL pipelines',
      final_goal: 'Become interview-ready for data engineering roles'
    },
    
    // Interview Preparation
    interview_preparation: {
      basic_questions: [
        {
          question: 'What is ETL?',
          answer: 'Extract, Transform, Load process.'
        }
      ],
      scenario_questions: [
        {
          question: 'What if Airflow DAG fails?',
          answer: 'Check logs, retries, alerts.'
        }
      ],
      deep_dive_questions: [
        {
          question: 'Why Redshift over RDS?',
          answer: 'Redshift is optimized for analytics workloads.'
        }
      ],
      mock_questions: [
        'Explain your ETL architecture',
        'How did you optimize PySpark jobs?',
        'Why Redshift?',
        'How does Airflow scheduling work?'
      ],
      mock_interview_available: true,
      
      interviewer_deep_dive_questions: [
        {
          question: "Explain your complete project architecture.",
          detailed_answer: "Raw files landed in AWS S3, PySpark transformed data, Airflow scheduled workflows, and Redshift stored final analytics data."
        },
        {
          question: "Why did you use batch processing instead of streaming?",
          detailed_answer: "Business only required daily reporting, so real-time processing would increase unnecessary infrastructure cost."
        },
        {
          question: "Why did you choose Redshift?",
          detailed_answer: "Redshift is optimized for analytical workloads and supports large-scale querying."
        },
        {
          question: "How did you handle duplicate records?",
          detailed_answer: "Used SQL deduplication logic and PySpark dropDuplicates functions."
        },
        {
          question: "What happens if Airflow fails?",
          detailed_answer: "We configured retries, alerting, and log monitoring."
        },
        {
          question: "How did you optimize PySpark performance?",
          detailed_answer: "Used partitioning, avoided unnecessary shuffles, and optimized joins."
        },
        {
          question: "What would you improve if data volume grows 10x?",
          detailed_answer: "Move toward incremental loads, optimize storage layers, and potentially introduce streaming for critical use cases."
        }
      ]
    },
    
    // Top 7 Most Asked Interviewer Questions
    top_7_most_asked_interviewer_questions: [
      {
        question: 'Explain your project architecture',
        detailed_answer: 'Raw files → S3 → PySpark → Airflow → Redshift.'
      },
      {
        question: 'Why use PySpark?',
        detailed_answer: 'Handles large distributed datasets.'
      },
      {
        question: 'Why use Airflow?',
        detailed_answer: 'Automates workflows.'
      },
      {
        question: 'How do you handle failures?',
        detailed_answer: 'Retries, alerts, monitoring.'
      },
      {
        question: 'How do you optimize Spark jobs?',
        detailed_answer: 'Partitioning and caching.'
      },
      {
        question: 'How do you validate data?',
        detailed_answer: 'SQL checks and schema validations.'
      },
      {
        question: 'How would you scale this project?',
        detailed_answer: 'Introduce incremental processing and better orchestration.'
      }
    ],
    
    // Communication Mastery
    communication_mastery: {
      how_to_introduce_project_in_interview: 'Start with business problem then architecture.',
      hr_round_explanation: 'Built automation project for faster reporting.',
      technical_round_explanation: 'Built ETL using S3, PySpark, Airflow, Redshift.',
      manager_round_explanation: 'Reduced manual dependency and improved reporting efficiency.'
    },
    
    // Gamification
    gamification: {
      xp_points: 500,
      badges: ['ETL Builder', 'Cloud Engineer']
    },
    
    // Certificate
    certificate: {
      enabled: true,
      certificate_name: 'Production Batch ETL Specialist',
      verification_enabled: true
    },
    
    // Subscription Model
    subscription_model: {
      free_preview: true,
      premium_required: true,
      pricing: {
        monthly: 999,
        yearly: 6999
      }
    },
    
    // Admin Dashboard Tracking
    admin_dashboard_tracking: {
      track_completion_rate: true,
      track_drop_off: true,
      track_project_submissions: true,
      track_assessment_scores: true
    },
    
    // Future Scalability
    future_scalability: {
      add_databricks_version: true,
      add_streaming_pipeline_version: true,
      add_azure_pipeline_version: true
    },

    aatma: {
      // OVERVIEW
      "🎯 Overview": {
        simple: "ETL is a process to take raw data, clean it, and store it for use.",
        explanation: "ETL stands for Extract, Transform, and Load. It is used in data engineering to move data from source systems into a clean and structured format so that businesses can analyze it and make decisions.",
        example: "An e-commerce company collects daily order data in CSV files, cleans incorrect values, and stores it in a data warehouse to generate sales reports.",
        what_you_build: "Complete ETL pipeline",
        business_problem: "Slow reporting",
        final_output: "Analytics-ready warehouse tables"
      },

      // PROJECT INFO
      "📋 Project Info": {
        business_case: "Retail company receives 20GB daily sales data from multiple stores.",
        how_much_data: "20GB daily batch files, scalable up to TB-level architecture.",
        why_company_built_this: "Manual reporting caused delays.",
        expected_salary_relevance: "Asked in 6–20 LPA interviews."
      },

      // COMIC
      "🎭 Comic": {
        story: "Imagine store managers sending messy Excel files daily and your pipeline acts like an automated employee cleaning everything."
      },

      // DEEP DIVE
      "📚 Deep Dive": {
        step_by_step: [
          "Step 1: Extract → Data is collected from sources like CSV files, APIs, or logs. Example: Reading CSV from AWS S3.",
          "Step 2: Store Raw Data → Raw data is stored in S3 (Data Lake) so nothing is lost.",
          "Step 3: Transform → Data is cleaned (remove nulls, fix formats, remove duplicates). Business rules are applied like filtering or joining data.",
          "Step 4: Optimize → Data is converted into efficient format like Parquet for faster processing.",
          "Step 5: Load → Clean data is stored in a data warehouse like Redshift or in S3 for analytics.",
          "Step 6: Validate → Check if data is correct using row count, null checks.",
          "Step 7: Schedule → Pipeline runs daily or hourly (batch processing)."
        ],
        architecture: [
          "S3 raw layer",
          "PySpark processing",
          "Airflow orchestration",
          "Redshift warehouse"
        ],
        why_each_tool: [
          "Why S3? → Scalable, cost-effective storage for raw data",
          "Why Spark? → Distributed processing for large datasets",
          "Why Airflow? → Workflow orchestration and scheduling",
          "Why Redshift? → Optimized for analytics queries"
        ]
      },

      // TYPES
      "📋 Types": {
        types: [
          "Batch ETL → Data is processed at fixed intervals like daily or hourly. (Used in most companies)",
          "Real-time ETL → Data is processed instantly as it comes (used in streaming systems)",
          "ETL vs ELT → In ETL, data is transformed before loading. In ELT, data is loaded first and transformed later."
        ],
        batch_types: [
          "Daily batch → Process data once per day",
          "Weekly batch → Process data once per week",
          "Monthly batch → Process data once per month"
        ]
      },

      // COMPONENTS
      "⚙️ Components": {
        components: [
          "Data Source → Where data comes from (CSV, API, logs)",
          "AWS S3 → Stores raw and processed data (data lake)",
          "AWS Glue → Runs ETL jobs using PySpark",
          "PySpark → Used to clean and transform big data",
          "Parquet → Optimized file format for fast queries",
          "Redshift → Data warehouse for analytics and reporting"
        ],
        components_used: [
          "IAM → Access management",
          "S3 → Storage layer",
          "Spark → Processing engine",
          "Airflow → Orchestration",
          "Redshift → Analytics warehouse"
        ]
      },

      // CODING
      "💻 Coding": {
        what_we_do: "We write PySpark code to read raw data, clean it, transform it, and store it in optimized format.",
        
        sql_examples: [
          {
            question: "Find duplicate records",
            answer: "SELECT customer_id, COUNT(*) FROM sales GROUP BY customer_id HAVING COUNT(*) > 1;"
          }
        ],
        
        pyspark_examples: [
          {
            question: "Remove duplicates",
            answer: "df.dropDuplicates()"
          }
        ],
        
        examples: [
          {
            title: "Example 1: Read CSV from S3",
            description: "Extract raw sales data from S3 bucket",
            code: `from pyspark.sql import SparkSession

# Initialize Spark Session
spark = SparkSession.builder \\
    .appName("ETL Pipeline") \\
    .getOrCreate()

# Read CSV from S3
input_path = "s3://my-bucket/raw/sales_data_2024.csv"

df = spark.read \\
    .option("header", "true") \\
    .option("inferSchema", "true") \\
    .csv(input_path)

# Show sample data
print(f"Total rows: {df.count()}")
df.show(5)
df.printSchema()`,
            output: `Total rows: 15000
+----------+-------------+--------+----------+
|order_id  |customer_id  |amount  |order_date|
+----------+-------------+--------+----------+
|ORD001    |CUST123      |250.50  |2024-01-15|
|ORD002    |CUST456      |null    |2024-01-15|
+----------+-------------+--------+----------+`
          },
          {
            title: "Example 2: Handle Null Values",
            description: "Clean data by removing or filling null values",
            code: `# Check null values in each column
from pyspark.sql.functions import col, count, when

df.select([
    count(when(col(c).isNull(), c)).alias(c) 
    for c in df.columns
]).show()

# Option 1: Drop rows with null in critical columns
df_clean = df.dropna(subset=['order_id', 'customer_id', 'amount'])

# Option 2: Fill null values with defaults
df_clean = df.fillna({
    'amount': 0.0,
    'discount': 0.0,
    'status': 'pending'
})

print(f"Rows after cleaning: {df_clean.count()}")`,
            output: `+----------+-------------+--------+----------+
|order_id  |customer_id  |amount  |discount  |
+----------+-------------+--------+----------+
|     0    |      0      |  150   |    0     |
+----------+-------------+--------+----------+
Rows after cleaning: 14850`
          },
          {
            title: "Example 3: Data Type Conversion",
            description: "Convert columns to correct data types",
            code: `from pyspark.sql.functions import to_date, col
from pyspark.sql.types import DoubleType, IntegerType

# Convert string to date
df_clean = df_clean.withColumn(
    "order_date", 
    to_date(col("order_date"), "yyyy-MM-dd")
)

# Convert string to numeric
df_clean = df_clean.withColumn(
    "amount", 
    col("amount").cast(DoubleType())
)

df_clean = df_clean.withColumn(
    "quantity", 
    col("quantity").cast(IntegerType())
)

df_clean.printSchema()`,
            output: `root
 |-- order_id: string
 |-- customer_id: string
 |-- amount: double
 |-- quantity: integer
 |-- order_date: date`
          },
          {
            title: "Example 4: Remove Duplicates",
            description: "Remove duplicate records based on order_id",
            code: `# Check for duplicates
print(f"Total rows: {df_clean.count()}")
print(f"Unique order_ids: {df_clean.select('order_id').distinct().count()}")

# Remove duplicates based on order_id
df_clean = df_clean.dropDuplicates(['order_id'])

print(f"Rows after removing duplicates: {df_clean.count()}")`,
            output: `Total rows: 14850
Unique order_ids: 14500
Rows after removing duplicates: 14500`
          },
          {
            title: "Example 5: Apply Transformations",
            description: "Filter, select, and add calculated columns",
            code: `from pyspark.sql.functions import col, when, year, month

# Filter: Only completed orders with amount > 0
df_transformed = df_clean.filter(
    (col("status") == "completed") & 
    (col("amount") > 0)
)

# Add calculated columns
df_transformed = df_transformed \\
    .withColumn("total_value", col("amount") * col("quantity")) \\
    .withColumn("year", year(col("order_date"))) \\
    .withColumn("month", month(col("order_date"))) \\
    .withColumn("discount_applied", 
        when(col("discount") > 0, "Yes").otherwise("No")
    )

# Select only required columns
df_final = df_transformed.select(
    "order_id",
    "customer_id", 
    "amount",
    "quantity",
    "total_value",
    "order_date",
    "year",
    "month",
    "discount_applied"
)

df_final.show(5)`,
            output: `+----------+-------------+--------+----------+-------------+------------+------+-------+------------------+
|order_id  |customer_id  |amount  |quantity  |total_value  |order_date  |year  |month  |discount_applied  |
+----------+-------------+--------+----------+-------------+------------+------+-------+------------------+
|ORD001    |CUST123      |250.50  |2         |501.00       |2024-01-15  |2024  |1      |No                |
|ORD003    |CUST789      |180.00  |1         |180.00       |2024-01-15  |2024  |1      |Yes               |
+----------+-------------+--------+----------+-------------+------------+------+-------+------------------+`
          },
          {
            title: "Example 6: Aggregate Data",
            description: "Group by and calculate summary statistics",
            code: `from pyspark.sql.functions import sum, avg, count, max, min

# Daily sales summary
daily_summary = df_final.groupBy("order_date") \\
    .agg(
        count("order_id").alias("total_orders"),
        sum("total_value").alias("total_sales"),
        avg("amount").alias("avg_order_value"),
        max("amount").alias("max_order"),
        min("amount").alias("min_order")
    ) \\
    .orderBy("order_date", ascending=False)

daily_summary.show(10)

# Monthly sales by customer
monthly_customer = df_final.groupBy("year", "month", "customer_id") \\
    .agg(
        count("order_id").alias("orders"),
        sum("total_value").alias("total_spent")
    ) \\
    .orderBy(["year", "month"], ascending=False)

monthly_customer.show(10)`,
            output: `+------------+--------------+-------------+-----------------+-----------+-----------+
|order_date  |total_orders  |total_sales  |avg_order_value  |max_order  |min_order  |
+------------+--------------+-------------+-----------------+-----------+-----------+
|2024-01-15  |450           |125000.50    |277.78           |999.99     |10.00      |
|2024-01-14  |420           |118500.00    |282.14           |950.00     |15.50      |
+------------+--------------+-------------+-----------------+-----------+-----------+`
          },
          {
            title: "Example 7: Write to Parquet (Partitioned)",
            description: "Save cleaned data in optimized Parquet format with partitioning",
            code: `# Write to Parquet with partitioning by year and month
output_path = "s3://my-bucket/clean/sales_data_parquet/"

df_final.write \\
    .mode("overwrite") \\
    .partitionBy("year", "month") \\
    .parquet(output_path)

print(f"Data written to: {output_path}")

# Verify the write
df_verify = spark.read.parquet(output_path)
print(f"Verified rows: {df_verify.count()}")`,
            output: `Data written to: s3://my-bucket/clean/sales_data_parquet/
Verified rows: 14200

S3 Structure:
sales_data_parquet/
  year=2024/
    month=1/
      part-00000.parquet
      part-00001.parquet
    month=2/
      part-00000.parquet`
          },
          {
            title: "Example 8: Complete ETL Pipeline",
            description: "Full production-ready ETL pipeline with error handling",
            code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import *
import sys

def run_etl_pipeline():
    try:
        # Initialize Spark
        spark = SparkSession.builder \\
            .appName("Sales ETL Pipeline") \\
            .getOrCreate()
        
        print("Step 1: Extracting data from S3...")
        input_path = "s3://my-bucket/raw/sales_data_2024.csv"
        df = spark.read.option("header", "true").csv(input_path)
        print(f"Extracted {df.count()} rows")
        
        print("Step 2: Transforming data...")
        # Clean nulls
        df_clean = df.dropna(subset=['order_id', 'customer_id', 'amount'])
        
        # Convert types
        df_clean = df_clean \\
            .withColumn("order_date", to_date(col("order_date"))) \\
            .withColumn("amount", col("amount").cast("double")) \\
            .withColumn("quantity", col("quantity").cast("int"))
        
        # Remove duplicates
        df_clean = df_clean.dropDuplicates(['order_id'])
        
        # Add calculated columns
        df_final = df_clean \\
            .withColumn("total_value", col("amount") * col("quantity")) \\
            .withColumn("year", year(col("order_date"))) \\
            .withColumn("month", month(col("order_date")))
        
        print(f"Transformed to {df_final.count()} clean rows")
        
        print("Step 3: Loading data to S3...")
        output_path = "s3://my-bucket/clean/sales_data_parquet/"
        df_final.write \\
            .mode("overwrite") \\
            .partitionBy("year", "month") \\
            .parquet(output_path)
        
        print("Step 4: Validating data...")
        df_verify = spark.read.parquet(output_path)
        assert df_verify.count() == df_final.count(), "Row count mismatch!"
        
        print("✅ ETL Pipeline completed successfully!")
        return True
        
    except Exception as e:
        print(f"❌ Pipeline failed: {str(e)}")
        return False
    
    finally:
        spark.stop()

# Run pipeline
if __name__ == "__main__":
    success = run_etl_pipeline()
    sys.exit(0 if success else 1)`,
            output: `Step 1: Extracting data from S3...
Extracted 15000 rows
Step 2: Transforming data...
Transformed to 14200 clean rows
Step 3: Loading data to S3...
Step 4: Validating data...
✅ ETL Pipeline completed successfully!`
          }
        ]
      },

      // Q&A - Real Interview Questions
      "💬 Q&A": [
        {
          question: "Explain the complete architecture of your ETL pipeline from end to end.",
          answer: "Raw CSV files are uploaded to S3 raw bucket. PySpark reads from S3, performs transformations like deduplication, null handling, and data type conversions. Transformed data is written to S3 processed bucket in Parquet format with partitioning. Airflow DAG orchestrates the entire workflow with retry logic. Finally, data is loaded into Redshift using COPY command for analytics. CloudWatch monitors the pipeline and SNS sends alerts on failures."
        },
        {
          question: "How did you handle schema evolution when source data structure changed?",
          answer: "Implemented schema validation layer that compares incoming schema with expected schema. Used PySpark's schema merging with mergeSchema=true option. For backward compatibility, added default values for new columns. Maintained schema version history in a metadata table. Set up alerts when schema drift is detected so the team can review and update transformation logic accordingly."
        },
        {
          question: "What was your strategy for handling duplicate records in the pipeline?",
          answer: "First identified business key columns (customer_id, order_id, timestamp). Used PySpark dropDuplicates() with subset parameter on business keys. For incremental loads, implemented window functions with row_number() partitioned by business key and ordered by timestamp to keep latest record. Also added data quality checks to log duplicate counts before and after deduplication for monitoring."
        },
        {
          question: "How did you optimize PySpark job performance when processing 20GB daily data?",
          answer: "Applied multiple optimizations: 1) Partitioned data by date in S3 to enable partition pruning. 2) Used broadcast joins for small dimension tables. 3) Avoided shuffles by using coalesce instead of repartition where possible. 4) Cached intermediate DataFrames that were reused. 5) Used Parquet with snappy compression. 6) Tuned executor memory and cores based on data volume. 7) Enabled adaptive query execution (AQE) in Spark 3.x."
        },
        {
          question: "What happens if your Airflow DAG fails midway? How do you ensure data consistency?",
          answer: "Implemented idempotent pipeline design where each task can be safely retried. Used Airflow's retry mechanism with exponential backoff. Maintained processing state in a control table with batch_id and status. Each task checks control table before processing. If failure occurs, next run identifies incomplete batch and reprocesses from last successful checkpoint. Used S3 versioning to rollback corrupted data. Implemented data validation checks at each stage to catch issues early."
        },
        {
          question: "How did you handle late-arriving data in your batch pipeline?",
          answer: "Implemented a grace period window of 2 days. Maintained a watermark timestamp in control table. When processing current day data, also checked for any updates in previous 2 days data. Used MERGE/UPSERT logic in Redshift to update existing records. Partitioned data by processing_date and event_date separately to handle late arrivals efficiently. Set up monitoring to track late arrival patterns and adjust grace period if needed."
        },
        {
          question: "Explain your data quality validation strategy in the pipeline.",
          answer: "Implemented multi-layer validation: 1) Schema validation - checked column names, data types, and mandatory fields. 2) Business rule validation - verified amount > 0, valid date ranges, referential integrity. 3) Statistical validation - compared record counts, null percentages, and value distributions with historical baselines. 4) Created separate reject/quarantine table for failed records with error reasons. 5) Generated data quality reports with metrics like completeness, accuracy, and consistency scores. 6) Set up alerts when quality score drops below threshold."
        },
        {
          question: "How did you partition data in S3 and why did you choose that partitioning strategy?",
          answer: "Used hierarchical partitioning: s3://bucket/year=2024/month=01/day=15/. This enables partition pruning when querying specific date ranges, significantly improving read performance. Chose date-based partitioning because most queries filter by date. Avoided over-partitioning (like hourly) which creates too many small files causing small file problem. Each partition contains 128-256MB files which is optimal for Spark processing. Also implemented partition lifecycle policy to archive old partitions to Glacier for cost optimization."
        },
        {
          question: "What was your approach for incremental data loading vs full load?",
          answer: "Used hybrid approach: Full load runs weekly for complete refresh and data reconciliation. Incremental load runs daily using watermark column (last_modified_timestamp). Maintained high watermark in control table. Each run fetches records where last_modified > high_watermark. Used MERGE statement in Redshift to handle updates and inserts (UPSERT). For dimension tables, implemented SCD Type 2 to maintain history. Monitored incremental load performance and switched to full load if incremental becomes slower due to too many updates."
        },
        {
          question: "How did you handle PII (Personally Identifiable Information) data in your pipeline?",
          answer: "Implemented data masking and encryption: 1) Identified PII columns (email, phone, SSN) during ingestion. 2) Applied SHA-256 hashing for columns used in joins. 3) Used AES-256 encryption for sensitive data at rest in S3 with KMS keys. 4) Implemented column-level encryption in Redshift for PII fields. 5) Applied data masking in non-production environments. 6) Maintained audit logs of who accessed PII data. 7) Set up IAM policies with least privilege access. 8) Implemented data retention policies to delete PII after specified period."
        },
        {
          question: "Explain your error handling and retry mechanism in the pipeline.",
          answer: "Implemented comprehensive error handling: 1) Airflow level - configured retries=3 with retry_delay=300 seconds and exponential backoff. 2) PySpark level - wrapped transformations in try-except blocks, logged errors with stack traces to CloudWatch. 3) Categorized errors as transient (network issues - retry) vs permanent (data quality - skip and quarantine). 4) Implemented circuit breaker pattern to stop pipeline if error rate exceeds threshold. 5) Set up SNS notifications for failures with error details. 6) Created error dashboard showing failure patterns and root causes. 7) Maintained error catalog with resolution steps."
        },
        {
          question: "How would you scale this pipeline if data volume increased from 20GB to 200GB daily?",
          answer: "Multiple scaling strategies: 1) Horizontal scaling - increase Spark cluster size with more executors and cores. 2) Optimize partitioning - increase partition count to enable more parallelism. 3) Implement dynamic partition pruning and predicate pushdown. 4) Use columnar formats like Parquet with better compression. 5) Consider moving to EMR or Databricks for auto-scaling. 6) Implement data tiering - hot data in Redshift, warm data in S3, cold data in Glacier. 7) Use Redshift Spectrum to query S3 directly for historical data. 8) Implement parallel loading to Redshift using multiple COPY commands. 9) Consider switching to micro-batch or streaming for near real-time processing."
        },
        {
          question: "What monitoring and alerting did you implement for the pipeline?",
          answer: "Comprehensive monitoring setup: 1) Airflow - monitored DAG success rate, task duration, SLA misses. 2) Spark - tracked executor failures, memory usage, shuffle read/write, stage completion times. 3) S3 - monitored bucket size, object count, request metrics. 4) Redshift - tracked query performance, disk usage, connection count, WLM queue wait times. 5) Created CloudWatch dashboards with key metrics. 6) Set up SNS alerts for: pipeline failures, data quality issues, SLA breaches, resource utilization > 80%. 7) Implemented PagerDuty integration for critical alerts. 8) Generated daily pipeline health reports with trends and anomalies."
        },
        {
          question: "How did you ensure data consistency between S3 and Redshift?",
          answer: "Implemented reconciliation framework: 1) Maintained control table with batch_id, source_count, target_count, checksum. 2) After each load, compared row counts between S3 and Redshift. 3) Calculated checksum (MD5 hash) of key columns for sample records and validated. 4) Implemented data validation queries to check for nulls, duplicates, referential integrity. 5) Created reconciliation reports highlighting discrepancies. 6) Set up automated rollback mechanism if validation fails. 7) Maintained audit trail of all data movements with timestamps. 8) Scheduled weekly full reconciliation jobs to catch any drift."
        },
        {
          question: "What was your disaster recovery and backup strategy?",
          answer: "Multi-layered DR strategy: 1) S3 - enabled versioning to recover from accidental deletes, configured cross-region replication for critical data. 2) Redshift - automated daily snapshots with 7-day retention, cross-region snapshot copy for DR. 3) Airflow - version controlled DAGs in Git, backed up metadata database. 4) Implemented RTO (Recovery Time Objective) of 4 hours and RPO (Recovery Point Objective) of 1 day. 5) Documented runbooks for common failure scenarios. 6) Conducted quarterly DR drills to test recovery procedures. 7) Maintained separate DR environment for testing. 8) Used infrastructure as code (Terraform) for quick environment recreation."
        }
      ],

      // QUIZ - MCQ Format
      "🎯 Quiz": [
        "Which step cleans the data? → Transform",
        "Where is raw data stored? → S3",
        "What type of ETL runs daily? → Batch ETL",
        "Which service stores raw data? → S3 (Options: Redshift, S3, Lambda, RDS)"
      ],

      // INTERVIEW - Realistic Questions
      "🎤 Interview": [
        "I built a batch ETL pipeline where I extracted data from S3, transformed it using PySpark in AWS Glue, and loaded it into a data warehouse for analytics.",
        "To handle data quality, I removed nulls, fixed formats, and validated output using row counts.",
        "For optimization, I used Parquet format and partitioning to improve performance.",
        "Why not use Glue instead of Spark? → Spark gave more transformation flexibility.",
        "How do you scale if data becomes 10x? → Partition optimization and cluster scaling.",
        "How do you monitor failures? → Airflow logs + alerts."
      ],

      // MISTAKES
      "⚠️ Mistakes": [
        "Not handling null values → leads to wrong results",
        "Using CSV instead of Parquet → slow performance",
        "No data validation → incorrect reports",
        "Hardcoding paths → difficult to maintain",
        "No monitoring → failures go unnoticed",
        "Memorizing architecture only → can't explain in interviews",
        "Ignoring failure handling → production issues",
        "Unable to explain business impact → weak interview answers"
      ],

      // PRACTICAL - Real Scenarios
      "🔧 Practical": {
        task: "Build an ETL pipeline using S3 + AWS Glue + PySpark to process CSV data.",
        output: "Clean, structured, and optimized dataset ready for analytics and dashboards.",
        real_cases: [
          {
            scenario: "File corruption",
            solution: "Validation layer to check file integrity"
          },
          {
            scenario: "Schema change",
            solution: "Schema evolution handling with backward compatibility"
          },
          {
            scenario: "Daily file missing",
            solution: "Implement retry and alert mechanism"
          },
          {
            scenario: "Duplicate records",
            solution: "Apply deduplication logic using dropDuplicates"
          }
        ]
      },

      // MEMORY - Tricks
      "🧠 Memory": {
        trick: "ETL = Extract → Transform → Load",
        shortcut: "Take → Clean → Store",
        tricks: [
          "S3 = Store",
          "Spark = Process",
          "Airflow = Schedule",
          "Redshift = Analyze"
        ]
      },

      // REVISION - Quick Points
      "⚡ Revision": {
        summary: "ETL pipeline extracts raw data, cleans and transforms it, and loads it into storage for analysis. It is the foundation of data engineering systems.",
        one_line_revision: [
          "What is ETL? → Extract, Transform, Load process",
          "Why Spark? → Distributed processing for big data",
          "Why Airflow? → Workflow orchestration and scheduling",
          "Why Redshift? → Optimized analytics warehouse"
        ]
      }
    }
  },

  'project-2': {
    id: 'project-2',
    title: 'Incremental Data Pipeline',
    subtitle: 'Process only new or changed data efficiently',
    icon: '🔄',
    level: 'Intermediate to Advanced',
    duration: '~5 Hours',
    tech_stack: ['PySpark', 'Delta Lake', 'AWS S3', 'Checkpoints'],
    ready: true,
    
    // Business Positioning
    business_positioning: {
      target_audience: [
        'Data Engineers',
        'Working Professionals',
        'Big Data Developers',
        'Cloud Engineers',
        'ETL Developers'
      ],
      career_roles_targeted: [
        'Data Engineer',
        'Big Data Engineer',
        'ETL Developer',
        'Cloud Data Engineer',
        'Delta Lake Specialist'
      ]
    },
    
    // Project Overview
    project_overview: {
      project_name: 'Incremental Data Pipeline',
      industry: 'E-commerce',
      problem_statement: 'An e-commerce company receives 50GB customer transaction data daily. Reprocessing full historical data every day is slow and expensive.',
      business_goal: 'Process only new or changed data to improve performance and reduce costs.',
      real_world_impact: 'Reduces processing time by 80% and cuts infrastructure costs significantly.'
    },
    
    // Architecture Flow
    architecture_flow: [
      {
        component_name: 'Raw Data Storage',
        description: 'Raw data stored in AWS S3'
      },
      {
        component_name: 'Historical Storage',
        description: 'Historical Delta table storage'
      },
      {
        component_name: 'Change Detection',
        description: 'PySpark change detection'
      },
      {
        component_name: 'Delta Merge',
        description: 'Delta merge operations'
      },
      {
        component_name: 'Checkpoint Tracking',
        description: 'Checkpoint tracking'
      }
    ],
    
    // Curriculum Modules
    curriculum_modules: [
      {
        module_number: 1,
        title: 'Incremental Processing Fundamentals',
        duration: '30 mins',
        topics: ['Incremental vs Full Load', 'Use cases', 'Performance benefits']
      },
      {
        module_number: 2,
        title: 'Delta Lake Setup',
        duration: '40 mins',
        topics: ['Delta Lake basics', 'ACID transactions', 'Time travel']
      },
      {
        module_number: 3,
        title: 'Checkpoint Management',
        duration: '45 mins',
        topics: ['Checkpoint design', 'State tracking', 'Recovery mechanisms']
      },
      {
        module_number: 4,
        title: 'MERGE Operations',
        duration: '60 mins',
        topics: ['MERGE syntax', 'Upsert logic', 'Performance optimization']
      }
    ],
    
    // Technology Stack
    technology_stack: {
      programming_languages: ['Python', 'SQL'],
      big_data_tools: ['PySpark', 'Delta Lake'],
      cloud_services: ['AWS S3'],
      orchestration_tools: ['Checkpoints', 'Watermarks']
    },
    
    // Hands-on Deliverables
    hands_on_deliverables: [
      'Complete incremental pipeline code',
      'PySpark MERGE scripts',
      'Checkpoint management system',
      'Delta Lake configuration',
      'Performance benchmarks',
      'Deployment guide'
    ],
    
    // Resume Support
    resume_support: {
      resume_project_title: 'Incremental Data Pipeline with Delta Lake',
      resume_bullet_points: [
        'Built incremental pipelines using PySpark and Delta Lake processing 50GB daily data',
        'Implemented MERGE operations for efficient upserts reducing processing time by 80%',
        'Designed checkpoint-based tracking system to prevent duplicate processing',
        'Optimized Delta Lake tables with partitioning and Z-ordering for query performance'
      ]
    },
    
    // Interview Preparation
    interview_preparation: {
      mock_questions: [
        'Explain incremental vs full load processing',
        'How does Delta Lake MERGE work?',
        'How do you handle late-arriving data?',
        'What is checkpoint management and why is it important?',
        'How would you scale this for 500GB daily data?'
      ]
    },

    // AATMA Framework Content
    aatma: {
      "📋 Project Info": {
        business_case: "An e-commerce company receives 50GB customer transaction data daily. Reprocessing full historical data every day is slow and expensive.",
        how_much_data: "50GB daily incoming data + historical datasets growing to multiple TBs over time.",
        why_company_built_this: "Full refresh pipelines were increasing cloud cost and processing time.",
        expected_salary_relevance: "Frequently asked in 10-25 LPA Data Engineering interviews."
      },

      "🎯 Overview": {
        simple: "Incremental pipeline processes only new or changed data instead of reprocessing everything.",
        explanation: "A production-ready incremental pipeline that processes only newly added or updated records using Delta Lake MERGE operations and checkpoint tracking.",
        example: "Like updating only edited pages in a book instead of rewriting the entire book.",
        what_you_build: "A production-ready incremental pipeline that processes only newly added or updated records.",
        business_problem: "Daily full loads were wasting compute resources and increasing costs.",
        final_output: "Optimized Delta tables containing only latest valid records with efficient merge operations."
      },

      "🎭 Comic": {
        story: "Imagine rewriting your entire notebook every time you add one new sentence. That's what full load pipelines do. Incremental pipelines only update what changed - like editing just the new page instead of copying the whole book again!"
      },

      "📚 Deep Dive": {
        step_by_step: [
          "Read checkpoint file to get last processed timestamp",
          "Filter source data for records newer than checkpoint",
          "Apply data quality checks and transformations",
          "Use Delta MERGE to update existing and insert new records",
          "Update checkpoint with latest processed timestamp",
          "Validate record counts and data integrity",
          "Monitor pipeline metrics and performance"
        ],
        architecture: [
          "Raw data stored in AWS S3",
          "Historical Delta table storage",
          "PySpark change detection logic",
          "Delta merge operations",
          "Checkpoint tracking system"
        ],
        why_each_tool: [
          "Why S3? → Cheap scalable storage for raw and processed data",
          "Why PySpark? → Large-scale distributed transformation engine",
          "Why Delta Lake? → ACID transactions + merge support + time travel",
          "Why Checkpoints? → Track processed files safely and prevent reprocessing"
        ]
      },

      "📋 Types": {
        types: [
          "Timestamp-based incremental load - Filter by last_modified_date",
          "CDC (Change Data Capture) incremental load - Track inserts/updates/deletes",
          "Watermark-based load - Process data up to a safe watermark",
          "Merge-based incremental load - Upsert using primary keys"
        ],
        batch_types: [
          "Daily incremental",
          "Hourly incremental",
          "Real-time streaming incremental"
        ]
      },

      "⚙️ Components": {
        components: [
          "AWS S3 bucket for raw data storage",
          "PySpark jobs for transformation",
          "Delta tables for ACID storage",
          "Checkpoint folders for state tracking",
          "Merge logic for upserts",
          "Monitoring and alerting system"
        ],
        components_used: [
          "S3",
          "PySpark",
          "Delta Lake",
          "Checkpoints"
        ]
      },

      "💻 Coding": {
        what_we_do: "We write PySpark code to read checkpoints, filter incremental data, perform MERGE operations, and update checkpoints.",
        examples: [
          {
            title: "Read Checkpoint",
            description: "Read last processed timestamp from checkpoint file",
            code: `# Read checkpoint
checkpoint_path = "s3://bucket/checkpoints/last_run.txt"
last_timestamp = spark.read.text(checkpoint_path).collect()[0][0]
print(f"Last processed: {last_timestamp}")`,
            output: "Last processed: 2024-01-15 10:30:00"
          },
          {
            title: "Filter Incremental Data",
            description: "Get only new records since last checkpoint",
            code: `# Filter incremental data
df = spark.read.parquet("s3://bucket/raw/transactions/")
incremental_df = df.filter(f"timestamp > '{last_timestamp}'")
print(f"New records: {incremental_df.count()}")`,
            output: "New records: 125000"
          },
          {
            title: "Delta MERGE Operation",
            description: "Upsert data into Delta table",
            code: `from delta.tables import DeltaTable

# Load target Delta table
target = DeltaTable.forPath(spark, "s3://bucket/delta/transactions")

# Perform MERGE
target.alias("target").merge(
    incremental_df.alias("source"),
    "target.transaction_id = source.transaction_id"
).whenMatchedUpdateAll().whenNotMatchedInsertAll().execute()

print("MERGE completed successfully")`,
            output: "MERGE completed successfully\nUpdated: 5000 rows\nInserted: 120000 rows"
          },
          {
            title: "Update Checkpoint",
            description: "Save new checkpoint timestamp",
            code: `# Get max timestamp from processed data
new_checkpoint = incremental_df.agg({"timestamp": "max"}).collect()[0][0]

# Write new checkpoint
spark.createDataFrame([(str(new_checkpoint),)], ["timestamp"]) \
    .write.mode("overwrite").text(checkpoint_path)
    
print(f"Checkpoint updated: {new_checkpoint}")`,
            output: "Checkpoint updated: 2024-01-16 09:45:00"
          }
        ]
      },

      "💬 Q&A": [
        {
          question: "How much data did your pipeline process?",
          answer: "Around 50GB daily incremental data, with historical data growing to multiple TBs."
        },
        {
          question: "Why not use full load?",
          answer: "Full load increased runtime from 2 hours to 8 hours and tripled infrastructure costs. Incremental processing reduced it to 30 minutes."
        },
        {
          question: "How did checkpoints help?",
          answer: "Checkpoints prevented reprocessing already consumed files and provided recovery points in case of failures."
        },
        {
          question: "What if duplicate records arrive?",
          answer: "We apply deduplication logic using dropDuplicates() before the MERGE operation based on primary keys."
        },
        {
          question: "How do you handle late-arriving data?",
          answer: "We use watermark strategy with a grace period (e.g., 24 hours) to handle late arrivals while maintaining data consistency."
        }
      ],

      "🎯 Quiz": [
        "Which feature allows Delta Lake to update existing records? (Answer: MERGE)",
        "What is the purpose of checkpoints? (Answer: Track processed data and prevent reprocessing)",
        "What does ACID stand for? (Answer: Atomicity, Consistency, Isolation, Durability)",
        "Which is faster: Full load or Incremental load? (Answer: Incremental load)"
      ],

      "🎤 Interview": [
        "How did you detect changed records? → Using primary keys, timestamps, and MERGE logic with Delta Lake.",
        "What if duplicate records arrive? → Applied deduplication logic using dropDuplicates() before merge operation.",
        "How would you scale for 500GB daily? → Partition optimization, auto-scaling Spark clusters, optimized Delta tables with Z-ordering.",
        "Why Delta Lake over normal Parquet? → Delta supports ACID transactions, MERGE operations, schema evolution, and time travel features.",
        "Explain your checkpoint strategy → Store last processed timestamp in S3, read before processing, update after successful completion.",
        "How do you handle pipeline failures? → Checkpoints provide recovery points, retry logic, and idempotent operations ensure data consistency."
      ],

      "⚠️ Mistakes": [
        "Using full load unnecessarily when incremental would work",
        "Forgetting checkpoint management leading to duplicate processing",
        "Ignoring duplicate handling before MERGE operations",
        "Not optimizing MERGE operations with proper partitioning",
        "Not handling late-arriving data scenarios",
        "Skipping data validation after MERGE",
        "Not monitoring checkpoint file corruption"
      ],

      "🔧 Practical": {
        task: "Build an incremental pipeline that processes only new customer transactions, merges them into a Delta table, and tracks progress using checkpoints.",
        output: "Delta table with latest customer transactions, checkpoint file with last processed timestamp, and performance metrics showing 80% reduction in processing time.",
        real_cases: [
          {
            scenario: "Duplicate records arrive",
            solution: "Apply deduplication logic using dropDuplicates() before merge"
          },
          {
            scenario: "Late arriving data",
            solution: "Use watermark strategy with grace period"
          },
          {
            scenario: "Checkpoint corruption",
            solution: "Implement checkpoint backup and recovery process"
          },
          {
            scenario: "Schema changes in source",
            solution: "Enable schema evolution in Delta Lake with mergeSchema option"
          }
        ]
      },

      "🧠 Memory": {
        trick: "S-P-D-C: Store → Process → Delta → Checkpoint",
        shortcut: "Incremental = Only NEW data",
        tricks: [
          "S3 = Store",
          "PySpark = Process",
          "Delta = Update",
          "Checkpoint = Track"
        ]
      },

      "⚡ Revision": {
        summary: "Incremental pipelines process only new or changed data using checkpoints for tracking and Delta Lake MERGE for efficient upserts, reducing processing time by 80% and cutting costs significantly.",
        one_line_revision: [
          "Incremental = process only changes, not full data",
          "MERGE = update existing + insert new records",
          "Checkpoint = avoid duplicate processing",
          "Delta Lake = optimized storage layer with ACID",
          "Watermark = handle late-arriving data"
        ]
      }
    }
  },

  'project-3': {
    id: 'project-3',
    title: 'SCD Type 2 Pipeline',
    subtitle: 'Track full history of data changes with versioning',
    icon: '📜',
    level: 'Intermediate to Advanced',
    duration: '~5 Hours',
    tech_stack: ['PySpark', 'SQL', 'Delta Lake'],
    ready: true,
    
    // Business Positioning
    business_positioning: {
      target_audience: [
        'Data Engineers',
        'Data Warehouse Developers',
        'ETL Developers',
        'Business Intelligence Engineers',
        'Analytics Engineers'
      ],
      career_roles_targeted: [
        'Data Engineer',
        'Data Warehouse Engineer',
        'ETL Developer',
        'Dimensional Modeler',
        'Analytics Engineer'
      ]
    },
    
    // Project Overview
    project_overview: {
      project_name: 'SCD Type 2 Pipeline',
      industry: 'Insurance',
      problem_statement: 'An insurance company needs to track customer address changes over time for audit and compliance requirements.',
      business_goal: 'Maintain complete historical records of customer data changes for regulatory compliance and business analytics.',
      real_world_impact: 'Enables historical analysis, audit trails, and compliance reporting while maintaining data integrity.'
    },
    
    // Architecture Flow
    architecture_flow: [
      {
        component_name: 'Source Data',
        description: 'Source incremental records with customer updates'
      },
      {
        component_name: 'Change Detection',
        description: 'Compare with existing target records to identify changes'
      },
      {
        component_name: 'Column Comparison',
        description: 'Identify which columns have changed'
      },
      {
        component_name: 'Expire Records',
        description: 'Expire old records by setting end_date and current_flag'
      },
      {
        component_name: 'Insert New Version',
        description: 'Insert new active records with updated values'
      }
    ],
    
    // Curriculum Modules
    curriculum_modules: [
      {
        module_number: 1,
        title: 'SCD Fundamentals',
        duration: '40 mins',
        topics: ['SCD Types', 'Type 1 vs Type 2 vs Type 3', 'Use cases']
      },
      {
        module_number: 2,
        title: 'Dimensional Modeling',
        duration: '45 mins',
        topics: ['Surrogate keys', 'Effective dates', 'Current flags']
      },
      {
        module_number: 3,
        title: 'Change Detection Logic',
        duration: '60 mins',
        topics: ['Column comparison', 'Hash-based detection', 'Join strategies']
      },
      {
        module_number: 4,
        title: 'SCD Type 2 Implementation',
        duration: '75 mins',
        topics: ['Expire logic', 'Insert logic', 'Delta Lake merge']
      }
    ],
    
    // Technology Stack
    technology_stack: {
      programming_languages: ['Python', 'SQL'],
      big_data_tools: ['PySpark', 'Delta Lake'],
      cloud_services: ['AWS S3'],
      orchestration_tools: ['Apache Airflow']
    },
    
    // Hands-on Deliverables
    hands_on_deliverables: [
      'Complete SCD Type 2 pipeline code',
      'Change detection logic',
      'Dimension table schema',
      'PySpark transformation scripts',
      'Data validation queries',
      'Performance optimization guide'
    ],
    
    // Resume Support
    resume_support: {
      resume_project_title: 'SCD Type 2 Dimensional Pipeline',
      resume_bullet_points: [
        'Implemented SCD Type 2 pipeline for 10M+ customer records maintaining complete historical tracking',
        'Designed change detection logic using PySpark to identify and version data changes',
        'Built dimension tables with surrogate keys, effective dates, and current flags for audit compliance',
        'Optimized Delta Lake merge operations for daily incremental updates'
      ]
    },
    
    // Interview Preparation
    interview_preparation: {
      mock_questions: [
        'Explain SCD Type 2 implementation',
        'How do you detect changes in records?',
        'What is a surrogate key and why use it?',
        'How do you handle duplicate source records?',
        'What if millions of updates arrive daily?'
      ]
    },

    // AATMA Framework Content
    aatma: {
      "📋 Project Info": {
        business_case: "An insurance company needs to track customer address changes over time for audit and compliance requirements.",
        how_much_data: "10M+ customer records with daily updates.",
        why_company_built_this: "Business needed historical tracking instead of overwriting old records.",
        expected_salary_relevance: "Frequently asked in 10-30 LPA Data Engineering interviews."
      },

      "🎯 Overview": {
        simple: "SCD Type 2 keeps history by creating new versions instead of overwriting old data.",
        explanation: "A complete SCD Type 2 pipeline that maintains historical records whenever customer data changes by expiring old records and inserting new versions.",
        example: "Like keeping all drafts of a document instead of just the final version.",
        what_you_build: "A complete SCD Type 2 pipeline that maintains historical records whenever customer data changes.",
        business_problem: "Normal updates overwrite old records and lose historical information needed for compliance.",
        final_output: "Versioned dimension table containing both active and historical records with proper effective dates."
      },

      "🎭 Comic": {
        story: "Imagine your bank changes your address. If they overwrite old data, they lose history. SCD Type 2 keeps both old and new versions - like keeping all your old addresses in a timeline instead of erasing them!"
      },

      "📚 Deep Dive": {
        step_by_step: [
          "Read source incremental records with customer updates",
          "Join with target dimension table on business key",
          "Compare all columns to detect changes",
          "For changed records, update old version: set end_date=current_date and current_flag='N'",
          "Insert new version with updated values, new surrogate key, start_date=current_date, current_flag='Y'",
          "For unchanged records, do nothing",
          "Validate record counts and data integrity"
        ],
        architecture: [
          "Source incremental records",
          "Compare with existing target records",
          "Identify changed columns",
          "Expire old records (set end_date and current_flag='N')",
          "Insert new active records (with current_flag='Y')"
        ],
        why_each_tool: [
          "Why PySpark? → Large scale processing of millions of records",
          "Why SQL? → Data validation and querying historical data",
          "Why Delta Lake? → ACID updates and merge operations for safe concurrent writes"
        ]
      },

      "📋 Types": {
        types: [
          "SCD Type 1 → Overwrite old values (no history)",
          "SCD Type 2 → Historical tracking (full history with versions)",
          "SCD Type 3 → Limited history (only previous value)",
          "SCD Type 4 → History table (separate history table)",
          "SCD Type 6 → Hybrid (combination of Type 1, 2, and 3)"
        ],
        batch_types: [
          "Daily SCD updates",
          "Real-time SCD",
          "Batch SCD processing"
        ]
      },

      "⚙️ Components": {
        components: [
          "Source table with business keys",
          "Target dimension table with surrogate keys",
          "Surrogate key generator",
          "Effective start date column",
          "Effective end date column",
          "Current flag indicator",
          "Change detection logic",
          "Merge/Upsert operations"
        ],
        components_used: [
          "Source table",
          "Dimension table",
          "Surrogate key",
          "Effective dates",
          "Current flag"
        ]
      },

      "💻 Coding": {
        what_we_do: "We write PySpark code to detect changes, expire old records, and insert new versions maintaining complete history.",
        examples: [
          {
            title: "Find Active Records",
            description: "Query to get only current active records",
            code: `-- Get all active customer records
SELECT * 
FROM customer_dim 
WHERE current_flag = 'Y';
`,
            output: "customer_id | name | address | start_date | end_date | current_flag\n1001 | John | NYC | 2024-01-01 | 9999-12-31 | Y"
          },
          {
            title: "Find Historical Records",
            description: "Query to get historical versions",
            code: `-- Get historical records for a customer
SELECT * 
FROM customer_dim 
WHERE customer_id = 1001 
  AND current_flag = 'N'
ORDER BY start_date;
`,
            output: "customer_id | name | address | start_date | end_date | current_flag\n1001 | John | LA | 2023-01-01 | 2023-12-31 | N"
          },
          {
            title: "Detect Changed Records",
            description: "PySpark code to identify changes",
            code: `from pyspark.sql.functions import col, when

# Join source and target on business key
changed_df = source_df.alias("src").join(
    target_df.alias("tgt"),
    col("src.customer_id") == col("tgt.customer_id")
).where(
    (col("tgt.current_flag") == "Y") &
    ((col("src.address") != col("tgt.address")) |
     (col("src.phone") != col("tgt.phone")))
)

print(f"Changed records: {changed_df.count()}")
`,
            output: "Changed records: 15000"
          },
          {
            title: "Expire Old Records",
            description: "Update old versions with end date",
            code: `from pyspark.sql.functions import current_date, lit

# Expire old records
expire_df = changed_df.select(
    col("tgt.surrogate_key"),
    current_date().alias("end_date"),
    lit("N").alias("current_flag")
)

# Update target table
target_table.alias("target").merge(
    expire_df.alias("updates"),
    "target.surrogate_key = updates.surrogate_key"
).whenMatchedUpdate(set={
    "end_date": "updates.end_date",
    "current_flag": "updates.current_flag"
}).execute()

print("Old records expired")
`,
            output: "Old records expired\nUpdated: 15000 rows"
          },
          {
            title: "Insert New Version",
            description: "Insert new active records",
            code: `from pyspark.sql.functions import monotonically_increasing_id, current_date, lit

# Create new versions
new_versions = changed_df.select(
    monotonically_increasing_id().alias("surrogate_key"),
    col("src.customer_id"),
    col("src.name"),
    col("src.address"),
    col("src.phone"),
    current_date().alias("start_date"),
    lit("9999-12-31").alias("end_date"),
    lit("Y").alias("current_flag")
)

# Insert new records
new_versions.write.format("delta").mode("append").save(target_path)

print(f"New versions inserted: {new_versions.count()}")
`,
            output: "New versions inserted: 15000"
          }
        ]
      },

      "💬 Q&A": [
        {
          question: "How much data did your pipeline handle?",
          answer: "Around 10 million customer records with daily incremental updates of 50,000-100,000 changes."
        },
        {
          question: "Why not use SCD Type 1?",
          answer: "Business needed full historical tracking for audit compliance and regulatory requirements. Type 1 overwrites data and loses history."
        },
        {
          question: "How often did pipeline run?",
          answer: "Daily incremental updates to capture all customer changes within 24 hours."
        },
        {
          question: "What is a surrogate key?",
          answer: "A system-generated unique identifier for each version of a record, separate from the business key."
        },
        {
          question: "How do you handle late-arriving updates?",
          answer: "We use effective dates to properly version records even if updates arrive out of order."
        }
      ],

      "🎯 Quiz": [
        "Which SCD type preserves complete history? (Answer: Type 2)",
        "What does current_flag='Y' indicate? (Answer: Active/current record)",
        "What is a surrogate key? (Answer: System-generated unique identifier)",
        "What happens to old records in SCD Type 2? (Answer: They are expired with end_date and current_flag='N')"
      ],

      "🎤 Interview": [
        "Explain your SCD Type 2 implementation → We compared source and target records, expired old records by setting end_date and current_flag='N', then inserted new versions with current_flag='Y'.",
        "How do you detect changes? → Using primary keys and column-by-column comparison in PySpark joins.",
        "What if duplicate source records arrive? → Deduplicate source data before processing using dropDuplicates() on business key.",
        "Why Delta Lake? → Delta supports ACID transactions, merge operations, and time travel for safe concurrent updates.",
        "What if millions of updates arrive daily? → Use partitioning by date, optimize merge operations, and leverage Delta Lake's optimization features.",
        "How do you ensure data quality? → Validate surrogate key uniqueness, check for orphan records, verify current_flag consistency."
      ],

      "⚠️ Mistakes": [
        "Overwriting historical records instead of versioning them",
        "Missing surrogate keys leading to duplicate business keys",
        "Incorrect end dates causing gaps in history",
        "Not filtering duplicate source records before processing",
        "Forgetting to set current_flag properly",
        "Not handling NULL values in comparison logic",
        "Missing indexes on business keys causing slow joins"
      ],

      "🔧 Practical": {
        task: "Build an SCD Type 2 pipeline that tracks customer address changes, maintains complete history with effective dates, and supports daily incremental updates.",
        output: "Dimension table with versioned customer records, proper surrogate keys, effective dates, and current flags enabling historical analysis.",
        real_cases: [
          {
            scenario: "Customer updates address twice in one day",
            solution: "Use latest timestamp logic and process updates in chronological order"
          },
          {
            scenario: "Duplicate records arrive in source",
            solution: "Deduplicate source data before merge using dropDuplicates() on business key"
          },
          {
            scenario: "Large daily updates (millions of records)",
            solution: "Optimize partitions by date, use broadcast joins for small dimensions, enable Delta optimization"
          },
          {
            scenario: "NULL values in comparison columns",
            solution: "Handle NULLs explicitly in change detection logic using coalesce or null-safe comparisons"
          }
        ]
      },

      "🧠 Memory": {
        trick: "E-I-H: Expire → Insert → History",
        shortcut: "Type 2 = Keep ALL versions",
        tricks: [
          "Type 1 = Replace (no history)",
          "Type 2 = History (all versions)",
          "Type 3 = Limited History (previous value only)",
          "Surrogate Key = System ID",
          "Business Key = Natural ID"
        ]
      },

      "⚡ Revision": {
        summary: "SCD Type 2 maintains complete historical records by expiring old versions and inserting new versions with effective dates and current flags, enabling audit trails and historical analysis.",
        one_line_revision: [
          "Detect change using business key comparison",
          "Expire old record (set end_date and current_flag='N')",
          "Insert new record (with new surrogate key and current_flag='Y')",
          "Maintain complete history for compliance",
          "Use surrogate keys for versioning"
        ]
      }
    }
  },

  'project-4': {
    id: 'project-4',
    title: 'Databricks Medallion Architecture Pipeline',
    subtitle: 'Build layered data pipeline with Bronze, Silver, and Gold',
    icon: '🪙',
    level: 'Intermediate to Advanced',
    duration: '~6 Hours',
    tech_stack: ['Databricks', 'PySpark', 'Delta Lake'],
    ready: true,
    
    // Business Positioning
    business_positioning: {
      target_audience: [
        'Data Engineers',
        'Databricks Developers',
        'Cloud Data Engineers',
        'Big Data Engineers',
        'Data Platform Engineers'
      ],
      career_roles_targeted: [
        'Databricks Engineer',
        'Data Platform Engineer',
        'Senior Data Engineer',
        'Cloud Data Architect',
        'Lakehouse Engineer'
      ]
    },
    
    // Project Overview
    project_overview: {
      project_name: 'Databricks Medallion Architecture Pipeline',
      industry: 'E-commerce',
      problem_statement: 'An e-commerce company receives raw customer, order, payment, and product data from multiple systems and needs a clean layered architecture for analytics and machine learning.',
      business_goal: 'Build a scalable, governed data architecture that progressively refines data from raw to business-ready state.',
      real_world_impact: 'Enables data governance, improves data quality, and provides clean datasets for analytics and ML models.'
    },
    
    // Architecture Flow
    architecture_flow: [
      {
        component_name: 'Bronze Layer',
        description: 'Raw ingestion - Store all data as-is from source systems'
      },
      {
        component_name: 'Silver Layer',
        description: 'Cleaning and validation - Remove duplicates, handle nulls, standardize formats'
      },
      {
        component_name: 'Gold Layer',
        description: 'Business aggregation - Create business-ready datasets for analytics'
      }
    ],
    
    // Curriculum Modules
    curriculum_modules: [
      {
        module_number: 1,
        title: 'Medallion Architecture Fundamentals',
        duration: '45 mins',
        topics: ['Bronze-Silver-Gold concept', 'Data governance', 'Layered architecture benefits']
      },
      {
        module_number: 2,
        title: 'Databricks Platform Setup',
        duration: '50 mins',
        topics: ['Workspace setup', 'Cluster configuration', 'Delta Lake basics']
      },
      {
        module_number: 3,
        title: 'Bronze Layer Implementation',
        duration: '60 mins',
        topics: ['Raw data ingestion', 'Schema inference', 'Incremental loading']
      },
      {
        module_number: 4,
        title: 'Silver Layer Transformations',
        duration: '75 mins',
        topics: ['Data cleaning', 'Deduplication', 'Validation rules', 'Quality checks']
      },
      {
        module_number: 5,
        title: 'Gold Layer Analytics',
        duration: '60 mins',
        topics: ['Business aggregations', 'Dimensional modeling', 'Performance optimization']
      },
      {
        module_number: 6,
        title: 'Production Best Practices',
        duration: '40 mins',
        topics: ['Cost optimization', 'Monitoring', 'Job scheduling']
      }
    ],
    
    // Technology Stack
    technology_stack: {
      programming_languages: ['Python', 'SQL'],
      big_data_tools: ['Databricks', 'PySpark', 'Delta Lake'],
      cloud_services: ['AWS S3', 'Azure Data Lake', 'Databricks Workspace'],
      orchestration_tools: ['Databricks Jobs', 'Workflows']
    },
    
    // Hands-on Deliverables
    hands_on_deliverables: [
      'Complete Medallion architecture implementation',
      'Bronze layer ingestion notebooks',
      'Silver layer cleaning notebooks',
      'Gold layer aggregation notebooks',
      'Delta Lake tables across all layers',
      'Job scheduling configuration',
      'Cost optimization guide'
    ],
    
    // Resume Support
    resume_support: {
      resume_project_title: 'Databricks Medallion Architecture Data Pipeline',
      resume_bullet_points: [
        'Built end-to-end Medallion architecture pipeline on Databricks processing 100GB daily data',
        'Implemented Bronze-Silver-Gold layers using PySpark and Delta Lake for data governance',
        'Designed data quality checks and validation rules in Silver layer reducing bad data by 95%',
        'Created business-ready Gold layer datasets serving 50+ analytics dashboards and ML models',
        'Optimized Databricks cluster costs by 40% using auto-scaling and job scheduling'
      ]
    },
    
    // Interview Preparation
    interview_preparation: {
      mock_questions: [
        'Explain Medallion architecture and its benefits',
        'Why Delta Lake over Parquet?',
        'What happens if bad records enter Bronze?',
        'How do you optimize Databricks costs?',
        'How would you scale for 1TB daily data?'
      ]
    },

    // AATMA Framework Content
    aatma: {
      "📋 Project Info": {
        business_case: "An e-commerce company receives raw customer, order, payment, and product data from multiple systems and needs a clean layered architecture for analytics and machine learning.",
        how_much_data: "100GB daily raw transactional data with long-term scaling to petabytes.",
        why_company_built_this: "Direct transformation from raw data caused poor governance, duplicate records, and bad reporting.",
        expected_salary_relevance: "Frequently asked in 12-35 LPA Data Engineering interviews, especially Databricks roles."
      },

      "🎯 Overview": {
        simple: "Medallion architecture organizes data into Bronze (raw), Silver (clean), and Gold (business-ready) layers.",
        explanation: "A complete Medallion architecture pipeline that progressively refines data from raw ingestion to business-ready analytics datasets using Databricks and Delta Lake.",
        example: "Like a restaurant: Bronze is raw ingredients, Silver is cleaned and prepped ingredients, Gold is the finished dish ready to serve.",
        what_you_build: "A complete Medallion architecture pipeline that moves data from Bronze → Silver → Gold layers.",
        business_problem: "Raw data is messy and not ready for business analytics, causing poor reporting and data quality issues.",
        final_output: "Gold layer business-ready datasets used for dashboards, ML models, and executive reporting."
      },

      "🎭 Comic": {
        story: "Imagine vegetables arriving from the market with mud. Bronze stores everything raw with all the mud. Silver cleans them, removes bad ones, and organizes them. Gold turns them into restaurant-ready dishes that customers can enjoy!"
      },

      "📚 Deep Dive": {
        step_by_step: [
          "Ingest raw data from multiple sources into Bronze layer as-is",
          "Store Bronze data in Delta format with minimal transformation",
          "Read Bronze data and apply cleaning rules in Silver layer",
          "Remove duplicates, handle nulls, standardize formats in Silver",
          "Validate data quality and apply business rules in Silver",
          "Create business aggregations and dimensional models in Gold",
          "Optimize Gold tables with partitioning and Z-ordering",
          "Schedule jobs and monitor pipeline performance"
        ],
        architecture: [
          "Bronze Layer → Raw ingestion with no transformation",
          "Silver Layer → Cleaning, validation, and standardization",
          "Gold Layer → Business aggregation and analytics-ready datasets"
        ],
        why_each_tool: [
          "Why Databricks? → Scalable cloud processing platform with collaborative notebooks",
          "Why PySpark? → Large distributed transformations across petabytes of data",
          "Why Delta Lake? → ACID transactions, schema evolution, time travel, and data versioning"
        ]
      },

      "📋 Types": {
        types: [
          "Bronze Layer → Raw data storage (landing zone)",
          "Silver Layer → Refined data (cleaned and validated)",
          "Gold Layer → Business-ready data (aggregated and modeled)",
          "Platinum Layer → Advanced ML features (optional)"
        ],
        batch_types: [
          "Batch Medallion",
          "Streaming Medallion",
          "Hybrid Medallion"
        ]
      },

      "⚙️ Components": {
        components: [
          "Databricks notebooks for each layer",
          "Delta tables for ACID storage",
          "Databricks clusters for compute",
          "Job scheduling for automation",
          "Unity Catalog for governance",
          "Storage layer (S3/ADLS)",
          "Monitoring and alerting"
        ],
        components_used: [
          "Databricks",
          "Delta Lake",
          "PySpark",
          "Clusters",
          "Jobs"
        ]
      },

      "💻 Coding": {
        what_we_do: "We write PySpark code to ingest raw data into Bronze, clean it in Silver, and create business aggregations in Gold.",
        examples: [
          {
            title: "Bronze Layer - Raw Ingestion",
            description: "Ingest raw data as-is into Bronze layer",
            code: `# Read raw CSV files
raw_df = spark.read.format("csv") \
    .option("header", "true") \
    .option("inferSchema", "true") \
    .load("s3://bucket/raw/customers/")

# Write to Bronze Delta table
raw_df.write.format("delta") \
    .mode("append") \
    .save("/mnt/bronze/customers")

print(f"Bronze ingestion complete: {raw_df.count()} records")
`,
            output: "Bronze ingestion complete: 1000000 records"
          },
          {
            title: "Silver Layer - Data Cleaning",
            description: "Clean and validate data in Silver layer",
            code: `from pyspark.sql.functions import col, trim, upper

# Read from Bronze
bronze_df = spark.read.format("delta").load("/mnt/bronze/customers")

# Clean data
silver_df = bronze_df \
    .filter(col("customer_id").isNotNull()) \
    .dropDuplicates(["customer_id"]) \
    .withColumn("email", trim(col("email"))) \
    .withColumn("country", upper(col("country"))) \
    .filter(col("email").rlike("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"))

# Write to Silver
silver_df.write.format("delta") \
    .mode("overwrite") \
    .save("/mnt/silver/customers")

print(f"Silver cleaning complete: {silver_df.count()} valid records")
`,
            output: "Silver cleaning complete: 950000 valid records\nRemoved: 50000 invalid records"
          },
          {
            title: "Gold Layer - Business Aggregation",
            description: "Create business-ready aggregated datasets",
            code: `from pyspark.sql.functions import sum, count, avg

# Read from Silver
silver_orders = spark.read.format("delta").load("/mnt/silver/orders")
silver_customers = spark.read.format("delta").load("/mnt/silver/customers")

# Create Gold aggregation
gold_df = silver_orders \
    .join(silver_customers, "customer_id") \
    .groupBy("country", "customer_segment") \
    .agg(
        sum("order_amount").alias("total_revenue"),
        count("order_id").alias("total_orders"),
        avg("order_amount").alias("avg_order_value")
    )

# Write to Gold
gold_df.write.format("delta") \
    .mode("overwrite") \
    .save("/mnt/gold/revenue_by_segment")

print("Gold aggregation complete")
gold_df.show(5)
`,
            output: "Gold aggregation complete\ncountry | segment | total_revenue | total_orders | avg_order_value\nUSA | Premium | 5000000 | 10000 | 500\nUSA | Standard | 2000000 | 8000 | 250"
          },
          {
            title: "Find Duplicates in Bronze",
            description: "SQL query to identify duplicate records",
            code: `-- Find duplicate customers in bronze layer
SELECT customer_id, COUNT(*) as duplicate_count
FROM bronze_customers
GROUP BY customer_id
HAVING COUNT(*) > 1
ORDER BY duplicate_count DESC;
`,
            output: "customer_id | duplicate_count\n1001 | 3\n1005 | 2"
          }
        ]
      },

      "💬 Q&A": [
        {
          question: "How much data did your architecture handle?",
          answer: "Around 100GB daily raw data across Bronze layer, with total storage growing to multiple TBs across all layers."
        },
        {
          question: "Why not directly transform raw to gold?",
          answer: "It creates poor governance, makes debugging difficult, loses raw data lineage, and mixes concerns. Medallion provides clear separation and data quality gates."
        },
        {
          question: "How many layers did you implement?",
          answer: "Three layers: Bronze (raw), Silver (cleaned), and Gold (business-ready)."
        },
        {
          question: "What happens if bad data enters Bronze?",
          answer: "Bronze stores everything as-is. Bad data is identified and filtered out in Silver layer with data quality checks."
        },
        {
          question: "How do you optimize Databricks costs?",
          answer: "Auto-scaling clusters, automatic termination, spot instances, optimized workloads, and proper job scheduling."
        }
      ],

      "🎯 Quiz": [
        "Which layer stores raw data? (Answer: Bronze)",
        "Which layer performs data cleaning? (Answer: Silver)",
        "Which layer serves business users? (Answer: Gold)",
        "What format is used for storage? (Answer: Delta Lake)"
      ],

      "🎤 Interview": [
        "Explain Medallion architecture → Bronze stores raw data, Silver cleans and validates data, Gold serves business analytics with aggregated datasets.",
        "Why Delta Lake over Parquet? → Delta supports ACID transactions, schema evolution, time travel, and merge operations.",
        "What happens if bad records enter Bronze? → They are stored as-is in Bronze and filtered out during Silver layer processing with data quality rules.",
        "How do you optimize Databricks cost? → Auto-scaling clusters, cluster termination policies, spot instances, optimized queries, and proper job scheduling.",
        "How would you scale for 1TB daily data? → Partitioning strategies, optimized clusters, parallel processing, Delta optimization, and proper resource allocation.",
        "What is the benefit of layered architecture? → Clear separation of concerns, data governance, easier debugging, data lineage, and progressive data quality improvement."
      ],

      "⚠️ Mistakes": [
        "Skipping silver layer and going directly from Bronze to Gold",
        "Poor partition strategy causing slow queries",
        "Not managing cluster costs leading to high bills",
        "Mixing raw and business logic together",
        "Not implementing data quality checks in Silver",
        "Forgetting to optimize Delta tables",
        "Not using auto-termination for clusters"
      ],

      "🔧 Practical": {
        task: "Build a complete Medallion architecture pipeline that ingests raw e-commerce data into Bronze, cleans it in Silver, and creates business aggregations in Gold.",
        output: "Three-layer data architecture with Bronze raw tables, Silver cleaned tables, and Gold business-ready datasets serving analytics dashboards.",
        real_cases: [
          {
            scenario: "Schema changes in raw files",
            solution: "Use Delta schema evolution with mergeSchema option"
          },
          {
            scenario: "Large duplicate records in Bronze",
            solution: "Implement deduplication logic in Silver layer using dropDuplicates()"
          },
          {
            scenario: "Slow Gold queries",
            solution: "Optimize partitions and use Z-ordering on frequently queried columns"
          },
          {
            scenario: "Cluster cost increases",
            solution: "Enable auto-shutdown, use spot instances, and optimize job scheduling"
          }
        ]
      },

      "🧠 Memory": {
        trick: "B-S-G: Bronze → Silver → Gold",
        shortcut: "Raw → Clean → Business",
        tricks: [
          "Bronze = Raw (store everything)",
          "Silver = Clean (validate and standardize)",
          "Gold = Business (aggregate and serve)"
        ]
      },

      "⚡ Revision": {
        summary: "Medallion architecture organizes data into Bronze (raw ingestion), Silver (cleaning and validation), and Gold (business aggregations) layers using Databricks and Delta Lake for scalable, governed data pipelines.",
        one_line_revision: [
          "Bronze stores everything as-is from source",
          "Silver cleans, validates, and standardizes data",
          "Gold serves business users with aggregated datasets",
          "Delta Lake provides ACID transactions across all layers",
          "Databricks enables scalable distributed processing"
        ]
      }
    }
  },

  'project-5': {
    id: 'project-5',
    title: 'SQL Analytics Engine',
    subtitle: 'Master SQL joins, aggregations, window functions, and real business analytics',
    icon: '📊',
    level: 'Beginner to Advanced',
    duration: '~6 Hours',
    tech_stack: ['SQL', 'PostgreSQL', 'MySQL'],
    ready: true,
    
    // Business Positioning
    business_positioning: {
      target_audience: [
        'Data Engineers',
        'Data Analysts',
        'Business Analysts',
        'SQL Developers',
        'Analytics Engineers'
      ],
      career_roles_targeted: [
        'Data Engineer',
        'Data Analyst',
        'SQL Developer',
        'Analytics Engineer',
        'Business Intelligence Developer'
      ]
    },
    
    // Project Overview
    project_overview: {
      project_name: 'SQL Analytics Engine',
      industry: 'E-commerce',
      problem_statement: 'An e-commerce company wants deep business insights from customer orders, payments, returns, and product sales data.',
      business_goal: 'Enable business teams to get fast insights without waiting for engineers to manually prepare reports.',
      real_world_impact: 'Empowers business teams with self-service analytics and reduces reporting time from days to minutes.'
    },
    
    // Architecture Flow
    architecture_flow: [
      {
        component_name: 'Raw Business Tables',
        description: 'Orders, Customers, Products, Payments, Returns tables'
      },
      {
        component_name: 'SQL Joins',
        description: 'Combine data from multiple tables using INNER, LEFT, RIGHT joins'
      },
      {
        component_name: 'Aggregations',
        description: 'Summarize data using GROUP BY, SUM, COUNT, AVG'
      },
      {
        component_name: 'Window Functions',
        description: 'Advanced analytics with RANK, ROW_NUMBER, LEAD, LAG'
      },
      {
        component_name: 'Final Analytics',
        description: 'Business-ready insights for dashboards and decision-making'
      }
    ],
    
    // Curriculum Modules
    curriculum_modules: [
      {
        module_number: 1,
        title: 'SQL Fundamentals',
        duration: '45 mins',
        topics: ['SELECT basics', 'Filtering with WHERE', 'Sorting with ORDER BY']
      },
      {
        module_number: 2,
        title: 'SQL Joins Mastery',
        duration: '60 mins',
        topics: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN', 'CROSS JOIN']
      },
      {
        module_number: 3,
        title: 'Aggregations & GROUP BY',
        duration: '50 mins',
        topics: ['SUM, COUNT, AVG', 'GROUP BY', 'HAVING clause', 'Multiple aggregations']
      },
      {
        module_number: 4,
        title: 'Subqueries & CTEs',
        duration: '55 mins',
        topics: ['Nested subqueries', 'Correlated subqueries', 'Common Table Expressions', 'Recursive CTEs']
      },
      {
        module_number: 5,
        title: 'Window Functions',
        duration: '70 mins',
        topics: ['ROW_NUMBER', 'RANK, DENSE_RANK', 'LEAD, LAG', 'Running totals', 'Moving averages']
      },
      {
        module_number: 6,
        title: 'Query Optimization',
        duration: '50 mins',
        topics: ['Indexes', 'Execution plans', 'Query performance tuning']
      }
    ],
    
    // Technology Stack
    technology_stack: {
      programming_languages: ['SQL'],
      big_data_tools: ['PostgreSQL', 'MySQL'],
      cloud_services: ['AWS RDS', 'Azure SQL Database'],
      orchestration_tools: ['SQL Workbench', 'DBeaver']
    },
    
    // Hands-on Deliverables
    hands_on_deliverables: [
      'Complete SQL query library',
      'Business analytics queries',
      'Join optimization examples',
      'Window function templates',
      'Query performance tuning guide',
      'Real-world business scenarios solved'
    ],
    
    // Resume Support
    resume_support: {
      resume_project_title: 'SQL Analytics Engine for Business Intelligence',
      resume_bullet_points: [
        'Built SQL analytics engine processing millions of e-commerce records across 8+ business tables',
        'Designed complex SQL queries using joins, CTEs, and window functions for business reporting',
        'Optimized slow-running queries reducing execution time by 70% using indexes and query tuning',
        'Created 50+ reusable SQL templates for sales analysis, customer segmentation, and product performance',
        'Implemented ranking and trend analysis using window functions (ROW_NUMBER, RANK, LEAD/LAG)'
      ]
    },
    
    // Interview Preparation
    interview_preparation: {
      mock_questions: [
        'Difference between ROW_NUMBER(), RANK(), and DENSE_RANK()?',
        'How do you remove duplicates in SQL?',
        'How do you optimize joins on huge tables?',
        'Difference between WHERE and HAVING?',
        'Explain CTE vs subquery'
      ]
    },

    // AATMA Framework Content
    aatma: {
      "📋 Project Info": {
        business_case: "An e-commerce company wants deep business insights from customer orders, payments, returns, and product sales data.",
        how_much_data: "Millions of order records across multiple tables.",
        why_company_built_this: "Business teams needed fast insights without waiting for engineers to manually prepare reports.",
        expected_salary_relevance: "Asked in almost every 4-30 LPA Data Engineering, Data Analyst, and Product company interview."
      },

      "🎯 Overview": {
        simple: "SQL Analytics Engine uses SQL queries to extract business insights from relational databases.",
        explanation: "A SQL analytics engine that solves real-world business reporting problems using joins, aggregations, CTEs, subqueries, and window functions.",
        example: "Like asking questions to a database: 'Which product made highest sales last month?' and getting instant answers.",
        what_you_build: "A SQL analytics engine that solves real-world business reporting problems using advanced SQL techniques.",
        business_problem: "Business teams struggle to analyze customer behavior, sales trends, and product performance without SQL expertise.",
        final_output: "Business-ready insights for dashboards, reports, and data-driven decision-making."
      },

      "🎭 Comic": {
        story: "Imagine a manager asking: Which product made highest sales last month? Instead of manually checking thousands of Excel rows for hours, you write one SQL query and get the answer in 2 seconds. That's your SQL superpower!"
      },

      "📚 Deep Dive": {
        step_by_step: [
          "Understand business requirements and questions",
          "Identify relevant tables (Orders, Customers, Products, Payments)",
          "Write JOIN queries to combine data from multiple tables",
          "Apply aggregations (SUM, COUNT, AVG) to summarize data",
          "Use GROUP BY to segment data by dimensions",
          "Implement window functions for rankings and trends",
          "Optimize queries with indexes and execution plan analysis",
          "Deliver insights through reports and dashboards"
        ],
        architecture: [
          "Raw business tables (Orders, Customers, Products, Payments, Returns)",
          "SQL joins to combine related data",
          "Aggregations to summarize metrics",
          "Window functions for advanced analytics",
          "Final analytics outputs for business users"
        ],
        why_each_tool: [
          "Why SQL? → Universal querying language for relational databases",
          "Why PostgreSQL? → Enterprise-grade open-source database with advanced features",
          "Why MySQL? → Widely used production database with excellent performance"
        ]
      },

      "📋 Types": {
        types: [
          "Joins → Combine data from multiple tables",
          "Group By → Summarize data by categories",
          "Subqueries → Nested queries for complex logic",
          "CTEs → Common Table Expressions for readability",
          "Window Functions → Advanced analytics and rankings",
          "Ranking Functions → ROW_NUMBER, RANK, DENSE_RANK",
          "Query Optimization → Indexes and performance tuning"
        ],
        batch_types: [
          "Ad-hoc queries",
          "Scheduled reports",
          "Real-time dashboards"
        ]
      },

      "⚙️ Components": {
        components: [
          "Orders table with transaction data",
          "Customers table with customer information",
          "Products table with product catalog",
          "Payments table with payment records",
          "Returns table with return transactions",
          "SQL query engine",
          "Indexes for performance",
          "Views for reusable queries"
        ],
        components_used: [
          "Orders",
          "Customers",
          "Products",
          "Payments",
          "Returns"
        ]
      },

      "💻 Coding": {
        what_we_do: "We write SQL queries to join tables, aggregate data, rank results, and extract business insights.",
        examples: [
          {
            title: "Top 5 Revenue Products",
            description: "Find products generating highest revenue",
            code: `-- Find top 5 highest revenue products
SELECT 
    product_id, 
    product_name,
    SUM(amount) as total_revenue
FROM orders o
JOIN products p ON o.product_id = p.id
GROUP BY product_id, product_name
ORDER BY total_revenue DESC
LIMIT 5;
`,
            output: "product_id | product_name | total_revenue\n101 | Laptop Pro | 500000\n102 | Smartphone X | 450000\n103 | Tablet Ultra | 300000"
          },
          {
            title: "Find Duplicate Customers",
            description: "Identify customers with duplicate email addresses",
            code: `-- Find duplicate customers by email
SELECT 
    email, 
    COUNT(*) as duplicate_count
FROM customers
GROUP BY email
HAVING COUNT(*) > 1
ORDER BY duplicate_count DESC;
`,
            output: "email | duplicate_count\njohn@example.com | 3\nmary@example.com | 2"
          },
          {
            title: "Second Highest Salary",
            description: "Get the second highest salary from employees table",
            code: `-- Get second highest salary
SELECT MAX(salary) as second_highest_salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
`,
            output: "second_highest_salary\n85000"
          },
          {
            title: "Rank Customers by Purchase Amount",
            description: "Rank customers based on total purchase amount using window function",
            code: `-- Rank customers by total purchase amount
SELECT 
    customer_id,
    customer_name,
    SUM(amount) as total_spent,
    RANK() OVER(ORDER BY SUM(amount) DESC) as customer_rank
FROM orders o
JOIN customers c ON o.customer_id = c.id
GROUP BY customer_id, customer_name
ORDER BY customer_rank;
`,
            output: "customer_id | customer_name | total_spent | customer_rank\n1001 | John Doe | 50000 | 1\n1002 | Jane Smith | 45000 | 2"
          },
          {
            title: "Monthly Sales Trend",
            description: "Calculate monthly sales with running total",
            code: `-- Monthly sales with running total
SELECT 
    DATE_TRUNC('month', order_date) as month,
    SUM(amount) as monthly_sales,
    SUM(SUM(amount)) OVER(ORDER BY DATE_TRUNC('month', order_date)) as running_total
FROM orders
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY month;
`,
            output: "month | monthly_sales | running_total\n2024-01 | 100000 | 100000\n2024-02 | 120000 | 220000\n2024-03 | 150000 | 370000"
          }
        ]
      },

      "💬 Q&A": [
        {
          question: "How many tables did you work with?",
          answer: "Around 8 business tables including Orders, Customers, Products, Payments, Returns, Inventory, Shipping, and Reviews."
        },
        {
          question: "How much data did you query?",
          answer: "Millions of records - typically 5-10 million order records with related customer and product data."
        },
        {
          question: "How did you optimize slow queries?",
          answer: "Added indexes on frequently joined columns, optimized JOIN order, avoided SELECT *, used EXPLAIN to analyze execution plans, and partitioned large tables."
        },
        {
          question: "What was the most complex query you wrote?",
          answer: "A customer lifetime value calculation using multiple CTEs, window functions, and recursive queries to track customer purchase patterns over time."
        },
        {
          question: "How do you handle NULL values?",
          answer: "Using COALESCE, NULLIF, IS NULL checks, and proper NULL handling in aggregations and joins."
        }
      ],

      "🎯 Quiz": [
        "Which join returns matching records from both tables? (Answer: INNER JOIN)",
        "What does GROUP BY do? (Answer: Groups rows with same values into summary rows)",
        "Difference between WHERE and HAVING? (Answer: WHERE filters before grouping, HAVING filters after)",
        "What does ROW_NUMBER() do? (Answer: Assigns unique sequential number to each row)"
      ],

      "🎤 Interview": [
        "Difference between ROW_NUMBER(), RANK(), and DENSE_RANK()? → ROW_NUMBER gives unique sequential numbers, RANK skips numbers after ties, DENSE_RANK doesn't skip numbers.",
        "How do you remove duplicates? → Using ROW_NUMBER() with PARTITION BY or DISTINCT or GROUP BY with aggregations.",
        "How do you optimize joins on huge tables? → Add indexes on join columns, filter data before joining, use appropriate join types, partition large tables.",
        "Difference between WHERE and HAVING? → WHERE filters rows before grouping, HAVING filters groups after aggregation.",
        "Explain CTE vs subquery → CTE improves readability, can be referenced multiple times, supports recursion, while subqueries are inline and less reusable.",
        "How do you find Nth highest salary? → Using LIMIT OFFSET, ROW_NUMBER(), or nested subqueries with MAX."
      ],

      "⚠️ Mistakes": [
        "Using wrong join types (INNER vs LEFT) causing data loss",
        "Ignoring NULL handling in comparisons and aggregations",
        "Poor understanding of window functions and PARTITION BY",
        "Writing inefficient nested queries instead of CTEs",
        "Not using indexes on frequently queried columns",
        "Using SELECT * instead of specific columns",
        "Forgetting to filter data before expensive joins"
      ],

      "🔧 Practical": {
        task: "Build SQL queries to analyze e-commerce data: find top customers, product performance, sales trends, and customer segmentation using joins, aggregations, and window functions.",
        output: "Business-ready analytics queries providing insights on revenue, customer behavior, product performance, and sales trends.",
        real_cases: [
          {
            scenario: "Query running too slow on large tables",
            solution: "Add indexes on join and filter columns, optimize query structure, use EXPLAIN to analyze execution plan"
          },
          {
            scenario: "Duplicate customer records causing incorrect counts",
            solution: "Use ROW_NUMBER() with PARTITION BY to deduplicate or DISTINCT on unique identifiers"
          },
          {
            scenario: "Need monthly sales trend analysis",
            solution: "Use DATE_TRUNC or DATE functions with GROUP BY and window functions for running totals"
          },
          {
            scenario: "Complex nested subqueries hard to read",
            solution: "Refactor using CTEs (WITH clause) for better readability and maintainability"
          }
        ]
      },

      "🧠 Memory": {
        trick: "J-A-W: Join → Aggregate → Window",
        shortcut: "SQL = Structure Query Language",
        tricks: [
          "JOIN = Combine tables",
          "GROUP BY = Summarize data",
          "WINDOW = Analyze rankings and trends",
          "CTE = Readable subqueries",
          "INDEX = Speed up queries"
        ]
      },

      "⚡ Revision": {
        summary: "SQL Analytics Engine uses joins to combine data, aggregations to summarize metrics, window functions for rankings and trends, and query optimization for performance.",
        one_line_revision: [
          "Join data from multiple tables using INNER, LEFT, RIGHT joins",
          "Aggregate data using GROUP BY with SUM, COUNT, AVG",
          "Rank data using ROW_NUMBER, RANK, DENSE_RANK window functions",
          "Optimize queries with indexes and execution plan analysis",
          "Use CTEs for readable and reusable query logic"
        ]
      }
    }
  },

  'project-6': {
    id: 'project-6',
    title: 'Real-Time Streaming Pipeline',
    subtitle: 'Process live data continuously with Spark Structured Streaming',
    icon: '⚡',
    level: 'Advanced',
    duration: '~7 Hours',
    tech_stack: ['Spark Structured Streaming', 'Kafka', 'Delta Lake'],
    ready: true,
    
    // Business Positioning
    business_positioning: {
      target_audience: [
        'Senior Data Engineers',
        'Streaming Engineers',
        'Real-Time Data Engineers',
        'Big Data Engineers',
        'Platform Engineers'
      ],
      career_roles_targeted: [
        'Senior Data Engineer',
        'Streaming Data Engineer',
        'Real-Time Analytics Engineer',
        'Big Data Architect',
        'Platform Engineer'
      ]
    },
    
    // Project Overview
    project_overview: {
      project_name: 'Real-Time Streaming Pipeline',
      industry: 'Food Delivery',
      problem_statement: 'A food delivery company needs real-time tracking of customer orders, delivery updates, and payment events.',
      business_goal: 'Process live events continuously to provide instant updates to customers and enable real-time business analytics.',
      real_world_impact: 'Reduces order update latency from hours to seconds, enables real-time fraud detection, and improves customer experience.'
    },
    
    // Architecture Flow
    architecture_flow: [
      {
        component_name: 'Kafka Producers',
        description: 'Generate live events from order, delivery, and payment systems'
      },
      {
        component_name: 'Kafka Topics',
        description: 'Store event streams with partitioning for scalability'
      },
      {
        component_name: 'Spark Streaming',
        description: 'Consume and process events in real-time with micro-batches'
      },
      {
        component_name: 'Transformations',
        description: 'Apply business logic, aggregations, and enrichment in real-time'
      },
      {
        component_name: 'Delta Lake',
        description: 'Store processed output with ACID guarantees'
      }
    ],
    
    // Curriculum Modules
    curriculum_modules: [
      {
        module_number: 1,
        title: 'Streaming Fundamentals',
        duration: '45 mins',
        topics: ['Batch vs Streaming', 'Streaming use cases', 'Event-driven systems']
      },
      {
        module_number: 2,
        title: 'Kafka Mastery',
        duration: '60 mins',
        topics: ['Topics', 'Partitions', 'Consumers', 'Offsets', 'Replication']
      },
      {
        module_number: 3,
        title: 'Spark Streaming Core',
        duration: '70 mins',
        topics: ['Read streams', 'Transform streams', 'Write streams', 'Triggers']
      },
      {
        module_number: 4,
        title: 'Checkpointing & Fault Tolerance',
        duration: '50 mins',
        topics: ['Checkpointing', 'Recovery', 'State management', 'Exactly-once semantics']
      },
      {
        module_number: 5,
        title: 'Late Data Handling',
        duration: '45 mins',
        topics: ['Watermarking', 'Late events', 'Deduplication', 'Event time processing']
      },
      {
        module_number: 6,
        title: 'Streaming Optimization',
        duration: '60 mins',
        topics: ['Scaling', 'Partition optimization', 'Latency reduction', 'Backpressure']
      }
    ],
    
    // Technology Stack
    technology_stack: {
      programming_languages: ['Python', 'Scala'],
      big_data_tools: ['Spark Structured Streaming', 'Apache Kafka', 'Delta Lake'],
      cloud_services: ['AWS MSK', 'Confluent Cloud', 'Databricks'],
      orchestration_tools: ['Kafka Connect', 'Schema Registry']
    },
    
    // Hands-on Deliverables
    hands_on_deliverables: [
      'Complete streaming pipeline code',
      'Kafka producer and consumer setup',
      'Spark Structured Streaming jobs',
      'Checkpointing configuration',
      'Watermarking implementation',
      'Delta Lake streaming sinks',
      'Monitoring and alerting setup'
    ],
    
    // Resume Support
    resume_support: {
      resume_project_title: 'Real-Time Streaming Data Pipeline with Kafka and Spark',
      resume_bullet_points: [
        'Built real-time streaming pipeline processing 50,000+ events per minute using Kafka and Spark Structured Streaming',
        'Implemented fault-tolerant streaming architecture with checkpointing and exactly-once semantics',
        'Designed watermarking strategy to handle late-arriving events with 5-second latency SLA',
        'Optimized Kafka partitioning and Spark cluster configuration reducing processing latency by 60%',
        'Integrated Delta Lake for ACID-compliant streaming writes enabling real-time analytics dashboards'
      ]
    },
    
    // Interview Preparation
    interview_preparation: {
      mock_questions: [
        'Difference between batch and streaming processing?',
        'What happens if Kafka broker fails?',
        'What is checkpointing in Spark Streaming?',
        'How do you handle late-arriving events?',
        'How do you scale high traffic streams?'
      ]
    },

    // AATMA Framework Content
    aatma: {
      "📋 Project Info": {
        business_case: "A food delivery company needs real-time tracking of customer orders, delivery updates, and payment events.",
        how_much_data: "50,000+ events per minute during peak traffic.",
        why_company_built_this: "Batch pipelines caused delayed order updates and poor customer experience.",
        expected_salary_relevance: "Frequently asked in 15-40 LPA Data Engineering and Streaming roles."
      },

      "🎯 Overview": {
        simple: "Real-time streaming processes live events continuously as they arrive, unlike batch which processes historical data.",
        explanation: "A real-time pipeline that continuously consumes live events from Kafka, processes them using Spark Structured Streaming, and stores final output in Delta tables.",
        example: "Like a live news broadcast vs watching recorded news - streaming gives you updates instantly.",
        what_you_build: "A real-time pipeline that continuously consumes live events from Kafka, processes them using Spark Structured Streaming, and stores results in Delta tables.",
        business_problem: "Customers need live updates for orders and businesses need instant analytics for fraud detection and monitoring.",
        final_output: "Real-time dashboards, fraud detection alerts, live monitoring systems, and instant customer notifications."
      },

      "🎭 Comic": {
        story: "Imagine waiting 6 hours to know if your food order was delivered. That's batch processing! Streaming pipelines solve that by processing events instantly - you get updates in seconds, not hours!"
      },

      "📚 Deep Dive": {
        step_by_step: [
          "Kafka producers generate live events from order, delivery, and payment systems",
          "Events are published to Kafka topics with partitioning for scalability",
          "Spark Structured Streaming consumes events from Kafka in micro-batches",
          "Apply transformations, aggregations, and business logic in real-time",
          "Handle late-arriving events using watermarking",
          "Write processed data to Delta Lake with ACID guarantees",
          "Implement checkpointing for fault tolerance and recovery",
          "Monitor pipeline latency and throughput metrics"
        ],
        architecture: [
          "Kafka producers generate events",
          "Kafka topics store event streams",
          "Spark Structured Streaming consumes events",
          "Transformations happen in real-time",
          "Delta tables store processed output"
        ],
        why_each_tool: [
          "Why Kafka? → Distributed event streaming platform with high throughput and fault tolerance",
          "Why Spark Streaming? → Real-time distributed processing with exactly-once semantics",
          "Why Delta Lake? → Reliable storage with ACID support for streaming writes"
        ]
      },

      "📋 Types": {
        types: [
          "Micro-batch streaming → Process data in small batches (Spark default)",
          "Continuous streaming → True continuous processing with millisecond latency",
          "Event-driven processing → Trigger-based event processing",
          "Windowed aggregations → Time-based or count-based windows",
          "Stateful streaming → Maintain state across batches"
        ],
        batch_types: [
          "Real-time streaming",
          "Near real-time streaming",
          "Event-driven streaming"
        ]
      },

      "⚙️ Components": {
        components: [
          "Kafka Producer for event generation",
          "Kafka Topics for event storage",
          "Kafka Consumer for event consumption",
          "Spark Executors for distributed processing",
          "Checkpointing for fault tolerance",
          "Delta Tables for ACID storage",
          "Watermarking for late data handling",
          "Monitoring and alerting system"
        ],
        components_used: [
          "Kafka",
          "Spark Streaming",
          "Delta Lake",
          "Checkpoints"
        ]
      },

      "💻 Coding": {
        what_we_do: "We write PySpark Structured Streaming code to read from Kafka, transform events in real-time, and write to Delta Lake.",
        examples: [
          {
            title: "Read Stream from Kafka",
            description: "Consume live events from Kafka topic",
            code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import *

# Create Spark session
spark = SparkSession.builder \
    .appName("RealTimeStreaming") \
    .getOrCreate()

# Read stream from Kafka
kafka_df = spark.readStream \
    .format("kafka") \
    .option("kafka.bootstrap.servers", "localhost:9092") \
    .option("subscribe", "orders") \
    .option("startingOffsets", "latest") \
    .load()

# Parse JSON from Kafka value
orders_df = kafka_df.selectExpr("CAST(value AS STRING)") \
    .select(from_json(col("value"), schema).alias("data")) \
    .select("data.*")

print("Streaming from Kafka started")
`,
            output: "Streaming from Kafka started\nProcessing events in real-time..."
          },
          {
            title: "Transform Stream",
            description: "Apply real-time transformations and aggregations",
            code: `from pyspark.sql.functions import window, sum, count

# Real-time aggregation with windowing
aggregated_df = orders_df \
    .withWatermark("order_time", "10 minutes") \
    .groupBy(
        window("order_time", "5 minutes"),
        "restaurant_id"
    ) \
    .agg(
        sum("order_amount").alias("total_revenue"),
        count("order_id").alias("order_count")
    )

print("Real-time aggregations applied")
`,
            output: "Real-time aggregations applied\nwindow | restaurant_id | total_revenue | order_count\n2024-01-15 10:00-10:05 | R001 | 5000 | 25"
          },
          {
            title: "Write Stream to Delta Lake",
            description: "Write processed stream to Delta table",
            code: `# Write stream to Delta Lake
query = aggregated_df.writeStream \
    .format("delta") \
    .outputMode("append") \
    .option("checkpointLocation", "/tmp/checkpoint") \
    .option("path", "/mnt/delta/orders_aggregated") \
    .trigger(processingTime="10 seconds") \
    .start()

print(f"Streaming query started: {query.id}")
query.awaitTermination()
`,
            output: "Streaming query started: abc-123-def\nProcessing micro-batches every 10 seconds..."
          },
          {
            title: "Handle Late Events with Watermarking",
            description: "Configure watermarking to handle late-arriving events",
            code: `# Handle late events with watermarking
late_data_df = orders_df \
    .withWatermark("event_time", "15 minutes") \
    .groupBy(
        window("event_time", "10 minutes", "5 minutes"),
        "customer_id"
    ) \
    .agg(count("*").alias("order_count"))

# Events arriving within 15 minutes of watermark are processed
print("Watermarking configured: 15 minutes")
`,
            output: "Watermarking configured: 15 minutes\nLate events within 15 min window will be processed"
          },
          {
            title: "Checkpointing for Fault Tolerance",
            description: "Enable checkpointing for recovery",
            code: `# Configure checkpointing
checkpoint_path = "s3://bucket/checkpoints/orders"

query = orders_df.writeStream \
    .format("delta") \
    .outputMode("append") \
    .option("checkpointLocation", checkpoint_path) \
    .start("/mnt/delta/orders")

print(f"Checkpoint enabled at: {checkpoint_path}")
`,
            output: "Checkpoint enabled at: s3://bucket/checkpoints/orders\nFault tolerance enabled"
          }
        ]
      },

      "💬 Q&A": [
        {
          question: "How much streaming data did you process?",
          answer: "Around 50,000 events per minute during peak traffic, scaling up to 100,000+ events during special promotions."
        },
        {
          question: "What latency did you maintain?",
          answer: "Under 5 seconds end-to-end latency from event generation to dashboard update."
        },
        {
          question: "How did you handle failures?",
          answer: "Implemented checkpointing for Spark state recovery and Kafka replication for broker failures."
        },
        {
          question: "What was your watermarking strategy?",
          answer: "Used 15-minute watermark to handle late-arriving events while balancing memory usage."
        },
        {
          question: "How did you scale for high traffic?",
          answer: "Increased Kafka partitions to 20, scaled Spark cluster to 10 executors, and optimized batch intervals."
        }
      ],

      "🎯 Quiz": [
        "Which tool handles event streaming? (Answer: Kafka)",
        "What is checkpointing used for? (Answer: Fault tolerance and recovery)",
        "What does watermarking handle? (Answer: Late-arriving events)",
        "What is micro-batch processing? (Answer: Processing data in small batches)"
      ],

      "🎤 Interview": [
        "Difference between batch and streaming? → Batch processes historical data in scheduled intervals, streaming processes live events continuously as they arrive.",
        "What happens if Kafka broker fails? → Kafka replication ensures fault tolerance - replicas take over and no data is lost.",
        "What is checkpointing? → Tracks processed offsets and maintains state for recovery in case of failures.",
        "How do you handle late-arriving events? → Using watermarking - define acceptable delay threshold and process events within that window.",
        "How do you scale high traffic streams? → Increase Kafka partitions, scale Spark cluster resources, optimize batch intervals, and use backpressure.",
        "Explain exactly-once semantics → Ensures each event is processed exactly once, preventing duplicates or data loss using idempotent writes and transactional commits."
      ],

      "⚠️ Mistakes": [
        "Ignoring checkpointing leading to data loss on failures",
        "Poor Kafka partition planning causing bottlenecks",
        "Not handling late-arriving events properly",
        "Kafka offset mismanagement causing duplicate processing",
        "Not monitoring streaming lag and latency",
        "Incorrect watermarking configuration",
        "Not implementing backpressure for high traffic"
      ],

      "🔧 Practical": {
        task: "Build a real-time streaming pipeline that consumes order events from Kafka, processes them with Spark Structured Streaming, and writes to Delta Lake with fault tolerance.",
        output: "Real-time streaming pipeline with sub-5-second latency, fault tolerance, and exactly-once processing guarantees.",
        real_cases: [
          {
            scenario: "Kafka broker failure during processing",
            solution: "Use Kafka replication factor of 3 and enable automatic failover"
          },
          {
            scenario: "Late events arrive after window closes",
            solution: "Implement watermarking with appropriate delay threshold (e.g., 15 minutes)"
          },
          {
            scenario: "High latency during peak traffic",
            solution: "Optimize Kafka partitions, increase Spark executors, reduce batch interval"
          },
          {
            scenario: "Streaming job crashes and loses state",
            solution: "Enable checkpointing to S3/HDFS for automatic state recovery"
          }
        ]
      },

      "🧠 Memory": {
        trick: "K-S-D: Kafka → Spark → Delta",
        shortcut: "Stream = Continuous processing",
        tricks: [
          "Kafka = Collect events",
          "Spark = Process events",
          "Delta = Store events",
          "Checkpoint = Save state",
          "Watermark = Handle late data"
        ]
      },

      "⚡ Revision": {
        summary: "Real-time streaming pipelines use Kafka for event ingestion, Spark Structured Streaming for continuous processing, and Delta Lake for ACID storage with checkpointing for fault tolerance and watermarking for late data handling.",
        one_line_revision: [
          "Read stream from Kafka topics",
          "Process stream with Spark transformations",
          "Store stream to Delta Lake",
          "Handle failures with checkpointing",
          "Manage late events with watermarking"
        ]
      }
    }
  },

  'project-7': {
    id: 'project-7',
    title: 'Data Quality & Validation Pipeline',
    subtitle: 'Ensure data accuracy with comprehensive validation checks',
    icon: '✅',
    level: 'Intermediate to Advanced',
    duration: '~7 hours',
    tech_stack: ['PySpark', 'SQL', 'Delta Lake'],
    ready: true,

    // Project Overview
    project_overview: {
      project_name: 'Enterprise Data Quality & Validation Framework',
      industry: 'Banking / Healthcare / E-commerce / Any Data-Driven Industry',
      problem_statement: 'Raw data contains errors, nulls, duplicates, and invalid values leading to incorrect business decisions and system failures.',
      business_goal: 'Build automated data quality pipeline that validates, cleanses, and monitors data quality metrics.',
      real_world_impact: 'Prevents bad data from entering systems, ensures regulatory compliance, and improves data trust.'
    },

    // Architecture Flow
    architecture_flow: {
      step_1: {
        name: 'Raw Data Ingestion',
        description: 'Ingest raw data from various sources (CSV, JSON, databases).'
      },
      step_2: {
        name: 'Validation Rules Definition',
        description: 'Define business and technical validation rules (nulls, ranges, formats).'
      },
      step_3: {
        name: 'Data Profiling',
        description: 'Analyze data statistics, distributions, and patterns.'
      },
      step_4: {
        name: 'Quality Checks Execution',
        description: 'Apply null checks, range checks, format checks, uniqueness checks.'
      },
      step_5: {
        name: 'Data Segregation',
        description: 'Separate valid data from invalid/rejected data.'
      },
      step_6: {
        name: 'Quality Reporting',
        description: 'Generate data quality reports with metrics and error details.'
      },
      step_7: {
        name: 'Monitoring & Alerting',
        description: 'Track quality trends and alert on threshold breaches.'
      }
    },

    // Curriculum Modules
    curriculum_modules: [
      {
        module_number: 1,
        module_name: 'Data Quality Fundamentals',
        duration: '45 mins',
        topics: [
          'Why data quality matters',
          'Business impact',
          'Validation lifecycle'
        ]
      },
      {
        module_number: 2,
        module_name: 'Null & Duplicate Validation Engine',
        duration: '60 mins',
        topics: [
          'Null checks',
          'Duplicate checks',
          'Primary key validation'
        ]
      },
      {
        module_number: 3,
        module_name: 'Schema Validation Layer',
        duration: '50 mins',
        topics: [
          'Schema mismatch',
          'Data type validation',
          'Column validation'
        ]
      },
      {
        module_number: 4,
        module_name: 'Business Rule Validation',
        duration: '65 mins',
        topics: [
          'Age validation',
          'Salary validation',
          'Custom business rules'
        ]
      },
      {
        module_number: 5,
        module_name: 'Bad Data Quarantine System',
        duration: '50 mins',
        topics: [
          'Reject records',
          'Audit tables',
          'Error logging'
        ]
      },
      {
        module_number: 6,
        module_name: 'Performance Optimization',
        duration: '40 mins',
        topics: [
          'Validation optimization',
          'Large dataset handling'
        ]
      }
    ],

    // Technology Stack
    technology_stack: {
      programming_languages: ['Python', 'SQL'],
      big_data_tools: ['PySpark', 'Delta Lake', 'Great Expectations'],
      cloud_services: ['AWS Glue Data Quality', 'Azure Data Factory', 'Databricks'],
      orchestration_tools: ['Apache Airflow', 'Databricks Workflows']
    },

    // Hands-on Deliverables
    hands_on_deliverables: [
      'Complete validation pipeline code',
      'Reusable validation functions library',
      'Data quality report templates',
      'Reject/error table schemas',
      'Quality metrics dashboard',
      'Audit logging framework'
    ],

    // Resume Support
    resume_support: {
      resume_project_title: 'Enterprise Data Quality & Validation Pipeline',
      resume_bullet_points: [
        'Built automated data quality pipeline using PySpark validating 1M+ records daily with 95%+ quality score',
        'Implemented comprehensive validation rules (null checks, range validation, duplicate detection) reducing data errors by 80%',
        'Designed reject table architecture and quality reporting dashboard for monitoring data health metrics'
      ]
    },

    // Interview Preparation
    interview_preparation: {
      mock_questions: [
        'What are the key dimensions of data quality?',
        'How do you handle null values in production pipelines?',
        'Explain your approach to duplicate detection',
        'How do you design a reject table?',
        'What validation checks would you implement for financial data?',
        'How do you measure data quality?',
        'Explain the difference between data validation and data cleansing'
      ],
      mock_interview_available: true
    },

    // Business Positioning
    business_positioning: {
      target_audience: [
        'Data Engineers',
        'Data Quality Engineers',
        'ETL Developers',
        'Data Governance Professionals',
        'Analytics Engineers'
      ],
      career_roles_targeted: [
        'Data Quality Engineer',
        'Data Engineer',
        'ETL Developer',
        'Data Governance Analyst',
        'Analytics Engineer',
        'Data Architect'
      ],
      market_positioning: 'Master data quality for enterprise-grade data pipelines'
    },

    aatma: {
      // PROJECT INFO
      "📋 Project Info": {
        business_case: "A fintech company processes loan applications daily. Incorrect data can approve wrong loans or reject valid customers.",
        how_much_data: "25M+ records processed monthly across customer, transaction, and loan datasets.",
        why_company_built_this: "Poor data quality was causing wrong reports and business losses.",
        expected_salary_relevance: "Frequently asked in 10–35 LPA Data Engineering interviews."
      },

      // OVERVIEW
      "🎯 Overview": {
        simple: "Data Quality pipeline checks if data is correct before using it.",
        explanation: "In real-world systems, raw data is often dirty, incomplete, or incorrect. A data quality pipeline ensures that only clean, accurate, and valid data is processed further. This prevents wrong business decisions and system failures.",
        example: "If an order has a negative price or missing customer ID, it should be flagged or rejected before going into reports.",
        what_you_build: "A production-ready validation pipeline that checks data before allowing it into downstream systems.",
        business_problem: "Bad data creates bad business decisions.",
        final_output: "Clean validated datasets + rejected records table + audit reports."
      },

      // COMIC
      "🎭 Comic": {
        story: "Imagine a hospital receives patient age as 500 years old. Without validation, bad data enters reports and causes chaos."
      },

      // DEEP DIVE
      "📚 Deep Dive": {
        step_by_step: [
          "Raw data ingestion",
          "Validation rules engine",
          "Good records flow",
          "Bad records quarantine",
          "Final Delta storage"
        ],
        architecture: [
          "Raw data ingestion",
          "Validation rules engine",
          "Good records flow",
          "Bad records quarantine",
          "Final Delta storage"
        ],
        why_each_tool: [
          "Why PySpark? → Large-scale validations",
          "Why SQL? → Rule-based validations",
          "Why Delta Lake? → Reliable storage and auditing"
        ]
      },

      // TYPES
      "📋 Types": {
        types: [
          "Null validation",
          "Duplicate validation",
          "Schema validation",
          "Range validation",
          "Business rule validation",
          "Referential integrity validation"
        ],
        validation_types: [
          "Null validation",
          "Duplicate validation",
          "Schema validation",
          "Range validation",
          "Business rule validation",
          "Referential integrity validation"
        ]
      },

      // COMPONENTS
      "⚙️ Components": {
        components: [
          "Raw table",
          "Validation layer",
          "Rejected records table",
          "Audit logs",
          "Final clean table"
        ],
        components_used: [
          "Raw table",
          "Validation layer",
          "Rejected records table",
          "Audit logs",
          "Final clean table"
        ]
      },

      // CODING
      "💻 Coding": {
        title: "💻 Coding",
        sql_examples: [
          {
            question: "Find duplicate customer records",
            answer: "SELECT customer_id, COUNT(*) FROM customers GROUP BY customer_id HAVING COUNT(*) > 1;"
          }
        ],
        pyspark_examples: [
          {
            question: "Filter null records",
            answer: "df.filter(col('customer_id').isNotNull())"
          },
          {
            question: "Validate age range",
            answer: "df.filter((col('age') > 0) & (col('age') < 100))"
          }
        ],
        what_we_do: "We apply validation rules using PySpark and separate valid and invalid data.",
        
        examples: [
          {
            title: "Example 1: Setup and Load Raw Data",
            description: "Load raw data with quality issues",
            code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import *
from pyspark.sql.types import *

# Initialize Spark
spark = SparkSession.builder \\
    .appName("Data Quality Pipeline") \\
    .getOrCreate()

# Sample raw data with quality issues
raw_data = [
    ("ORD001", "CUST123", "PROD001", 2, 250.50, "2024-01-15"),
    ("ORD002", None, "PROD002", 1, 180.00, "2024-01-15"),        # Missing customer
    ("ORD003", "CUST789", "PROD001", 3, -50.00, "2024-01-15"),   # Negative amount
    ("ORD004", "CUST456", None, 1, 99.99, "2024-01-15"),         # Missing product
    ("ORD005", "CUST123", "PROD003", 0, 150.00, "2024-01-15"),   # Zero quantity
    ("ORD006", "CUST789", "PROD002", 2, None, "2024-01-15"),     # Missing amount
    ("ORD007", "CUST456", "PROD001", 1, 300.00, "invalid-date"), # Invalid date
    ("ORD003", "CUST789", "PROD001", 3, 180.00, "2024-01-15"),   # Duplicate
    ("ORD008", "CUST999", "PROD004", 1, 500.00, "2024-01-15"),   # Valid
    ("ORD009", "CUST123", "PROD002", 2, 400.00, "2024-01-16")    # Valid
]

columns = ["order_id", "customer_id", "product_id", "quantity", "amount", "order_date"]
raw_df = spark.createDataFrame(raw_data, columns)

print("Raw Data (with quality issues):")
raw_df.show(truncate=False)
print(f"\nTotal raw records: {raw_df.count()}")`,
            output: `Raw Data (with quality issues):
+--------+-------------+----------+----------+--------+-------------+
|order_id|customer_id  |product_id|quantity  |amount  |order_date   |
+--------+-------------+----------+----------+--------+-------------+
|ORD001  |CUST123      |PROD001   |2         |250.5   |2024-01-15   |
|ORD002  |null         |PROD002   |1         |180.0   |2024-01-15   |
|ORD003  |CUST789      |PROD001   |3         |-50.0   |2024-01-15   |
|ORD004  |CUST456      |null      |1         |99.99   |2024-01-15   |
|ORD005  |CUST123      |PROD003   |0         |150.0   |2024-01-15   |
|ORD006  |CUST789      |PROD002   |2         |null    |2024-01-15   |
|ORD007  |CUST456      |PROD001   |1         |300.0   |invalid-date |
|ORD003  |CUST789      |PROD001   |3         |180.0   |2024-01-15   |
|ORD008  |CUST999      |PROD004   |1         |500.0   |2024-01-15   |
|ORD009  |CUST123      |PROD002   |2         |400.0   |2024-01-16   |
+--------+-------------+----------+----------+--------+-------------+

Total raw records: 10`
          },
          {
            title: "Example 2: Null Value Checks",
            description: "Identify and flag records with missing critical fields",
            code: `# Check for null values in each column
print("Null Value Analysis:")
null_counts = raw_df.select([
    count(when(col(c).isNull(), c)).alias(c) 
    for c in raw_df.columns
])
null_counts.show()

# Add validation flags for null checks
validated_df = raw_df \\
    .withColumn("has_null_order_id", col("order_id").isNull()) \\
    .withColumn("has_null_customer", col("customer_id").isNull()) \\
    .withColumn("has_null_product", col("product_id").isNull()) \\
    .withColumn("has_null_amount", col("amount").isNull())

# Filter records with any null in critical fields
invalid_nulls = validated_df.filter(
    col("has_null_order_id") | 
    col("has_null_customer") | 
    col("has_null_product") | 
    col("has_null_amount")
)

print(f"\nRecords with null values: {invalid_nulls.count()}")
invalid_nulls.select(
    "order_id", "customer_id", "product_id", "amount",
    "has_null_customer", "has_null_product", "has_null_amount"
).show(truncate=False)`,
            output: `Null Value Analysis:
+--------+-------------+----------+----------+--------+------------+
|order_id|customer_id  |product_id|quantity  |amount  |order_date  |
+--------+-------------+----------+----------+--------+------------+
|0       |1            |1         |0         |1       |0           |
+--------+-------------+----------+----------+--------+------------+

Records with null values: 3
+--------+-------------+----------+--------+------------------+-----------------+----------------+
|order_id|customer_id  |product_id|amount  |has_null_customer |has_null_product |has_null_amount |
+--------+-------------+----------+--------+------------------+-----------------+----------------+
|ORD002  |null         |PROD002   |180.0   |true              |false            |false           |
|ORD004  |CUST456      |null      |99.99   |false             |true             |false           |
|ORD006  |CUST789      |PROD002   |null    |false             |false            |true            |
+--------+-------------+----------+--------+------------------+-----------------+----------------+`
          },
          {
            title: "Example 3: Range and Business Rule Validation",
            description: "Check if values are within acceptable ranges",
            code: `# Define business rules
print("Applying Business Rules:")
print("1. Amount must be > 0")
print("2. Quantity must be > 0")
print("3. Order date must be valid")

# Add validation flags
validated_df = raw_df \\
    .withColumn("invalid_amount", 
        (col("amount").isNull()) | (col("amount") <= 0)
    ) \\
    .withColumn("invalid_quantity", 
        (col("quantity").isNull()) | (col("quantity") <= 0)
    ) \\
    .withColumn("invalid_date",
        col("order_date").rlike("^\\d{4}-\\d{2}-\\d{2}$") == False
    )

# Find records violating business rules
invalid_business_rules = validated_df.filter(
    col("invalid_amount") | 
    col("invalid_quantity") | 
    col("invalid_date")
)

print(f"\nRecords violating business rules: {invalid_business_rules.count()}")
invalid_business_rules.select(
    "order_id", "quantity", "amount", "order_date",
    "invalid_amount", "invalid_quantity", "invalid_date"
).show(truncate=False)`,
            output: `Applying Business Rules:
1. Amount must be > 0
2. Quantity must be > 0
3. Order date must be valid

Records violating business rules: 4
+--------+----------+--------+-------------+----------------+------------------+--------------+
|order_id|quantity  |amount  |order_date   |invalid_amount  |invalid_quantity  |invalid_date  |
+--------+----------+--------+-------------+----------------+------------------+--------------+
|ORD003  |3         |-50.0   |2024-01-15   |true            |false             |false         |
|ORD005  |0         |150.0   |2024-01-15   |false           |true              |false         |
|ORD006  |2         |null    |2024-01-15   |true            |false             |false         |
|ORD007  |1         |300.0   |invalid-date |false           |false             |true          |
+--------+----------+--------+-------------+----------------+------------------+--------------+`
          },
          {
            title: "Example 4: Duplicate Detection",
            description: "Find and handle duplicate records",
            code: `# Find duplicates based on order_id
print("Duplicate Detection:")

# Count occurrences of each order_id
duplicate_check = raw_df.groupBy("order_id") \\
    .agg(count("*").alias("count")) \\
    .filter(col("count") > 1)

print(f"\nDuplicate order_ids: {duplicate_check.count()}")
duplicate_check.show()

# Get all records with duplicate order_ids
duplicate_ids = [row.order_id for row in duplicate_check.collect()]
duplicate_records = raw_df.filter(col("order_id").isin(duplicate_ids))

print("\nDuplicate records:")
duplicate_records.orderBy("order_id").show(truncate=False)

# Remove duplicates (keep first occurrence)
deduped_df = raw_df.dropDuplicates(["order_id"])
print(f"\nAfter deduplication: {deduped_df.count()} records")`,
            output: `Duplicate Detection:

Duplicate order_ids: 1
+--------+-----+
|order_id|count|
+--------+-----+
|ORD003  |2    |
+--------+-----+

Duplicate records:
+--------+-------------+----------+----------+--------+------------+
|order_id|customer_id  |product_id|quantity  |amount  |order_date  |
+--------+-------------+----------+----------+--------+------------+
|ORD003  |CUST789      |PROD001   |3         |-50.0   |2024-01-15  |
|ORD003  |CUST789      |PROD001   |3         |180.0   |2024-01-15  |
+--------+-------------+----------+----------+--------+------------+

After deduplication: 9 records`
          },
          {
            title: "Example 5: Comprehensive Validation Function",
            description: "Apply all validation rules and categorize records",
            code: `def validate_data(df):
    """
    Apply comprehensive validation rules
    Returns: valid_df, invalid_df, validation_report
    """
    # Add all validation flags
    validated = df \\
        .withColumn("validation_timestamp", current_timestamp()) \\
        .withColumn("null_check_failed", 
            col("order_id").isNull() | 
            col("customer_id").isNull() | 
            col("product_id").isNull() | 
            col("amount").isNull()
        ) \\
        .withColumn("range_check_failed",
            (col("amount") <= 0) | (col("quantity") <= 0)
        ) \\
        .withColumn("format_check_failed",
            col("order_date").rlike("^\\d{4}-\\d{2}-\\d{2}$") == False
        )
    
    # Overall validation status
    validated = validated.withColumn(
        "is_valid",
        ~(col("null_check_failed") | 
          col("range_check_failed") | 
          col("format_check_failed"))
    )
    
    # Add error reasons
    validated = validated.withColumn(
        "error_reason",
        when(col("null_check_failed"), "Missing required fields")
        .when(col("range_check_failed"), "Invalid range")
        .when(col("format_check_failed"), "Invalid format")
        .otherwise("Valid")
    )
    
    # Split valid and invalid
    valid_df = validated.filter(col("is_valid") == True) \\
        .drop("null_check_failed", "range_check_failed", "format_check_failed", "is_valid")
    
    invalid_df = validated.filter(col("is_valid") == False)
    
    # Remove duplicates from valid data
    valid_df = valid_df.dropDuplicates(["order_id"])
    
    return valid_df, invalid_df

# Apply validation
valid_df, invalid_df = validate_data(raw_df)

print("Validation Results:")
print(f"Valid records: {valid_df.count()}")
print(f"Invalid records: {invalid_df.count()}")

print("\nValid Data:")
valid_df.select("order_id", "customer_id", "amount", "error_reason").show()

print("\nInvalid Data with Reasons:")
invalid_df.select("order_id", "customer_id", "amount", "error_reason").show(truncate=False)`,
            output: `Validation Results:
Valid records: 3
Invalid records: 6

Valid Data:
+--------+-------------+--------+-------------+
|order_id|customer_id  |amount  |error_reason |
+--------+-------------+--------+-------------+
|ORD001  |CUST123      |250.5   |Valid        |
|ORD008  |CUST999      |500.0   |Valid        |
|ORD009  |CUST123      |400.0   |Valid        |
+--------+-------------+--------+-------------+

Invalid Data with Reasons:
+--------+-------------+--------+------------------------+
|order_id|customer_id  |amount  |error_reason            |
+--------+-------------+--------+------------------------+
|ORD002  |null         |180.0   |Missing required fields |
|ORD003  |CUST789      |-50.0   |Invalid range           |
|ORD004  |CUST456      |99.99   |Missing required fields |
|ORD005  |CUST123      |150.0   |Invalid range           |
|ORD006  |CUST789      |null    |Missing required fields |
|ORD007  |CUST456      |300.0   |Invalid format          |
+--------+-------------+--------+------------------------+`
          },
          {
            title: "Example 6: Data Quality Report",
            description: "Generate comprehensive quality metrics",
            code: `def generate_quality_report(raw_df, valid_df, invalid_df):
    """
    Generate data quality report
    """
    total_records = raw_df.count()
    valid_count = valid_df.count()
    invalid_count = invalid_df.count()
    
    # Calculate quality score
    quality_score = (valid_count / total_records) * 100 if total_records > 0 else 0
    
    # Error breakdown
    error_breakdown = invalid_df.groupBy("error_reason") \\
        .agg(count("*").alias("count")) \\
        .orderBy(col("count").desc())
    
    print("="*70)
    print("DATA QUALITY REPORT")
    print("="*70)
    print(f"\nTotal Records Processed: {total_records}")
    print(f"Valid Records: {valid_count} ({quality_score:.2f}%)")
    print(f"Invalid Records: {invalid_count} ({100-quality_score:.2f}%)")
    print(f"\nData Quality Score: {quality_score:.2f}%")
    
    if quality_score >= 90:
        status = "✅ EXCELLENT"
    elif quality_score >= 70:
        status = "⚠️ GOOD"
    else:
        status = "❌ POOR"
    
    print(f"Quality Status: {status}")
    
    print("\nError Breakdown:")
    error_breakdown.show(truncate=False)
    
    # Column-level quality
    print("\nColumn-Level Quality:")
    for col_name in raw_df.columns:
        null_count = raw_df.filter(col(col_name).isNull()).count()
        null_pct = (null_count / total_records) * 100
        print(f"  {col_name}: {null_pct:.2f}% nulls")
    
    return {
        "total_records": total_records,
        "valid_records": valid_count,
        "invalid_records": invalid_count,
        "quality_score": quality_score
    }

# Generate report
report = generate_quality_report(raw_df, valid_df, invalid_df)`,
            output: `======================================================================
DATA QUALITY REPORT
======================================================================

Total Records Processed: 10
Valid Records: 3 (30.00%)
Invalid Records: 7 (70.00%)

Data Quality Score: 30.00%
Quality Status: ❌ POOR

Error Breakdown:
+------------------------+-----+
|error_reason            |count|
+------------------------+-----+
|Missing required fields |3    |
|Invalid range           |3    |
|Invalid format          |1    |
+------------------------+-----+

Column-Level Quality:
  order_id: 0.00% nulls
  customer_id: 10.00% nulls
  product_id: 10.00% nulls
  quantity: 0.00% nulls
  amount: 10.00% nulls
  order_date: 0.00% nulls`
          },
          {
            title: "Example 7: Store Valid and Invalid Data",
            description: "Write validated data to Delta tables",
            code: `# Paths for Delta tables
valid_path = "/mnt/delta/valid_orders"
invalid_path = "/mnt/delta/rejected_orders"
audit_path = "/mnt/delta/quality_audit"

# Write valid data
print("Writing valid data to Delta...")
valid_df.write \\
    .format("delta") \\
    .mode("overwrite") \\
    .save(valid_path)

print(f"✅ Valid data written: {valid_path}")

# Write invalid data with error details
print("\nWriting rejected data to Delta...")
invalid_df.write \\
    .format("delta") \\
    .mode("overwrite") \\
    .save(invalid_path)

print(f"✅ Rejected data written: {invalid_path}")

# Create audit record
audit_data = [(
    current_timestamp(),
    report["total_records"],
    report["valid_records"],
    report["invalid_records"],
    report["quality_score"]
)]

audit_df = spark.createDataFrame(
    audit_data,
    ["run_timestamp", "total_records", "valid_records", "invalid_records", "quality_score"]
)

print("\nWriting audit log...")
audit_df.write \\
    .format("delta") \\
    .mode("append") \\
    .save(audit_path)

print(f"✅ Audit log written: {audit_path}")

# Verify
print("\nVerification:")
print(f"Valid records in Delta: {spark.read.format('delta').load(valid_path).count()}")
print(f"Rejected records in Delta: {spark.read.format('delta').load(invalid_path).count()}")
print(f"Audit records: {spark.read.format('delta').load(audit_path).count()}")

print("\n✅ Data Quality Pipeline Completed!")`,
            output: `Writing valid data to Delta...
✅ Valid data written: /mnt/delta/valid_orders

Writing rejected data to Delta...
✅ Rejected data written: /mnt/delta/rejected_orders

Writing audit log...
✅ Audit log written: /mnt/delta/quality_audit

Verification:
Valid records in Delta: 3
Rejected records in Delta: 7
Audit records: 1

✅ Data Quality Pipeline Completed!`
          }
        ]
      },

      // Q&A
      "💬 Q&A": {
        title: "💬 Real Q&A",
        questions: [
          {
            question: "How much data did your validation pipeline process?",
            answer: "Around 25 million records monthly."
          },
          {
            question: "What percentage of bad data arrived?",
            answer: "Around 2–5% invalid records."
          },
          {
            question: "How did you handle rejected records?",
            answer: "Moved them to quarantine tables."
          }
        ]
      },

      // QUIZ
      "🎯 Quiz": {
        title: "🎯 Quiz",
        questions: [
          {
            question: "Which validation checks duplicate records?",
            options: [
              "Range validation",
              "Schema validation",
              "Duplicate validation",
              "Null validation"
            ],
            answer: "Duplicate validation"
          }
        ]
      },

      // INTERVIEW
      "🎤 Interview": {
        title: "🎤 Interview Questions",
        realistic_questions: [
          {
            question: "How do you validate incoming data?",
            answer: "Using null checks, duplicates checks, schema validations, and business rules."
          },
          {
            question: "What happens to bad records?",
            answer: "They are moved to quarantine tables."
          },
          {
            question: "How do you validate huge datasets?",
            answer: "Distributed validation using PySpark."
          },
          {
            question: "How do you prevent schema mismatch failures?",
            answer: "Schema validation before transformation."
          },
          {
            question: "What business validations did you implement?",
            answer: "Age, salary, transaction amount validations."
          }
        ]
      },

      // MISTAKES
      "⚠️ Mistakes": {
        title: "⚠️ Common Mistakes",
        mistakes_list: [
          "Only checking nulls",
          "Ignoring schema mismatch",
          "No rejected record handling",
          "No audit tracking"
        ]
      },

      // PRACTICAL
      "🔧 Practical": {
        title: "🔧 Practical Scenarios",
        real_cases: [
          {
            scenario: "Negative transaction amount",
            solution: "Reject record"
          },
          {
            scenario: "Schema changed unexpectedly",
            solution: "Schema validation alerts"
          },
          {
            scenario: "Mass duplicate records",
            solution: "Deduplication layer"
          },
          {
            scenario: "Invalid customer age",
            solution: "Range validation"
          }
        ],
        task: "Build a validation pipeline that checks data quality and separates invalid records.",
        output: "Clean dataset with separate reject table for bad data."
      },

      // MEMORY
      "🧠 Memory": {
        title: "🧠 Memory Tricks",
        tricks: [
          "Null",
          "Duplicate",
          "Schema",
          "Range",
          "Business Rule"
        ],
        trick: "Validate Before You Trust",
        shortcut: "Check → Clean → Store"
      },

      // REVISION
      "⚡ Revision": {
        title: "⚡ Quick Revision",
        one_line_revision: [
          "Validate",
          "Separate bad data",
          "Store clean data",
          "Track audit logs"
        ],
        summary: "Data quality pipeline ensures only valid and clean data is processed by applying checks and separating invalid records."
      }
    }
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsContent;
}
