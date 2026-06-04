/**
 * Critical DE interview topics missing from core syllabus — one bonus topic per module.
 * Loaded after *-content.js; merged automatically for topic pages + RAG index.
 */
const BonusDETopics = {
  sqlContent: {
    'sql-set-operations-acid': {
      title: 'SET Operations + ACID & Normalization (Interview Bonus)',
      subtitle: 'UNION, INTERSECT, EXCEPT, ACID, 1NF–3NF — theory gaps that eliminate candidates',
      icon: '🎯',
      difficulty: 'Interview Bonus',
      duration: '~45 min',
      ready: true,
      studentGuide: {
        simple: 'SET operators combine query results; ACID guarantees reliable transactions; normalization removes duplicate data in table design.',
        why: 'Flipkart and Amazon DE rounds ask "UNION vs UNION ALL" and "explain ACID" in almost every SQL screen.',
        interviewTip: 'Always say UNION removes duplicates (slower), UNION ALL keeps all rows (faster for ETL).',
        mustRemember: 'UNION ALL = ETL default | ACID = Atomicity, Consistency, Isolation, Durability'
      },
      comic: `Two teams merge customer lists 📋

Team A query: SELECT customer_id FROM orders_2024
Team B query: SELECT customer_id FROM orders_2025

👉 UNION — dedupe automatically (slower, like checking every name twice)
👉 UNION ALL — keep every row (faster, perfect for ETL staging)

Bank transfer ₹10,000 💸
ACID saves you:
✅ Atomicity — both debit AND credit or nothing
✅ Consistency — balance never negative
✅ Isolation — two transfers don't clash
✅ Durability — committed = saved forever

Messy table with customer city repeated 50 times?
Normalization = split into Customer + City tables (1NF → 3NF)`,

      deepDive: `👉 SET Operations

UNION — combines results, removes duplicates (sort + dedupe cost)
UNION ALL — combines all rows, keeps duplicates (use in ETL 90% of time)
INTERSECT — rows in BOTH queries (customers who ordered in Jan AND Feb)
EXCEPT / MINUS — rows in A but NOT in B (new customers this month)

Rule: Same number of columns + compatible types in both SELECTs.

---

👉 ACID Properties

Atomicity — all or nothing (transaction rollback on failure)
Consistency — valid state before and after (constraints hold)
Isolation — concurrent transactions don't corrupt each other
Durability — committed data survives crashes

DE context: ETL batch = one transaction per load window; failure → full rollback.

---

👉 Normalization (1NF → 3NF)

1NF — atomic columns, no repeating groups
2NF — no partial dependency on composite key
3NF — no transitive dependency (city shouldn't live only in customer row if city has region)

Star schema in warehouses often denormalizes dimensions on purpose — know BOTH sides.`,

      types: `SET: UNION | UNION ALL | INTERSECT | EXCEPT
ACID: Atomicity | Consistency | Isolation | Durability
Normal forms: 1NF | 2NF | 3NF | BCNF (awareness)`,

      qa: [
        { q: 'What is the difference between UNION and UNION ALL?', hint: 'Think duplicates + performance', answer: 'UNION removes duplicate rows; UNION ALL keeps all rows including duplicates. UNION ALL is faster because it skips deduplication.', explanation: 'In ETL pipelines merging daily extracts, UNION ALL is preferred unless business requires dedupe.', memory: 'UNION = Unique 🐢 | UNION ALL = All rows ⚡' },
        { q: 'When would you use INTERSECT in a DE pipeline?', hint: 'Overlap of two sets', answer: 'To find records present in both datasets — e.g. customers active in both last month and this month, or keys that passed validation in two stages.', explanation: 'INTERSECT is cleaner than INNER JOIN on keys when you only need existence in both sets.', memory: 'INTERSECT = In BOTH ∩' },
        { q: 'What does EXCEPT (MINUS) return?', hint: 'Set A minus set B', answer: 'Rows from the first query that are NOT in the second query.', explanation: 'Example: new customer_ids this week = this_week EXCEPT last_week.', memory: 'EXCEPT = A − B ➖' },
        { q: 'Explain Atomicity with an ETL example.', hint: 'All or nothing', answer: 'If loading 5 staging tables, either all succeed or all roll back — no partial load leaving inconsistent warehouse state.', explanation: 'Banks and billing pipelines require atomic batches; use BEGIN/COMMIT/ROLLBACK.', memory: 'Atomic = All-or-nothing 💣' },
        { q: 'What is Isolation and why do DE teams care?', hint: 'Concurrent jobs', answer: 'Isolation prevents one session from seeing uncommitted or inconsistent data from another — important when analytics queries run while ETL loads.', explanation: 'Isolation levels (READ COMMITTED, REPEATABLE READ) trade consistency vs performance.', memory: 'Isolation = Jobs don\'t step on each other 🚧' },
        { q: 'What is 1NF?', hint: 'Atomic values', answer: 'Each column holds atomic (indivisible) values; no repeating groups like phone1, phone2, phone3 in one row.', explanation: 'Violations are fixed by splitting columns or creating detail tables.', memory: '1NF = One value per cell 1️⃣' },
        { q: 'Star schema vs 3NF — which for analytics?', hint: 'Speed vs storage', answer: 'Star schema (denormalized dimensions) for fast analytics queries; 3NF for OLTP source systems with frequent updates.', explanation: 'DE warehouses favor star; normalization reduces redundancy in operational DBs.', memory: 'Analytics = Star ⭐ | OLTP = 3NF 📐' },
        { q: 'Why use UNION ALL instead of UNION in Spark/SQL ETL?', hint: 'Performance at scale', answer: 'UNION ALL avoids expensive global sort/distinct shuffle; at billion-row scale dedupe should be explicit in a later step if needed.', explanation: 'Senior DE answer: UNION ALL + window dedupe is controllable; blind UNION hides cost.', memory: 'Big data = UNION ALL first 🚀' }
      ],

      quiz: [
        { q: 'Which SET operator removes duplicates?', options: ['UNION ALL', 'UNION', 'INTERSECT', 'CROSS JOIN'], answer: 1 },
        { q: 'Durability means…', options: ['Queries run fast', 'Committed data survives crash', 'No duplicate rows', 'Columns are atomic'], answer: 1 },
        { q: 'Finding rows in query A not in query B uses…', options: ['UNION ALL', 'INTERSECT', 'EXCEPT', 'GROUP BY'], answer: 2 }
      ],

      interview: 'SET ops: UNION dedupes (slow), UNION ALL keeps all (ETL default). INTERSECT = overlap, EXCEPT = difference. ACID: Atomicity (all/nothing), Consistency (valid rules), Isolation (concurrency), Durability (persist after commit). Normalization 1NF–3NF removes redundancy; star schema denormalizes for analytics speed.',

      memory: 'UNION ALL for ETL ⚡ | ACID = A-C-I-D | 1NF atomic, 2NF no partial key deps, 3NF no transitive deps | Star for analytics ⭐',

      revision: 'SET: UNION (unique, slow) vs UNION ALL (all rows, fast). INTERSECT = both; EXCEPT = A not B. ACID = all-or-nothing, valid state, isolated concurrency, durable commits. Normalize OLTP; denormalize star schema for BI.'
    }
  },

  pythonContent: {
    'python-logging-generators': {
      title: 'Logging & Generators for DE Pipelines (Interview Bonus)',
      subtitle: 'Production logging + memory-efficient processing — asked in every Python DE round',
      icon: '📋',
      difficulty: 'Interview Bonus',
      duration: '~50 min',
      ready: true,
      studentGuide: {
        simple: 'logging module records pipeline events by severity; generators yield rows one-at-a-time without loading full files into RAM.',
        why: 'Interviewers ask how you debug failed Airflow/Glue jobs and process 10GB CSV on a small machine.',
        interviewTip: 'Say: "I use structured logging with run_id + logging.info/error, and generators for line-by-line ETL."',
        mustRemember: 'logging > print() in prod | yield = lazy iterator | never load 10GB file into list'
      },
      comic: `Ravi's ETL job fails at 3 AM 😰

Old way: print("error") — lost when terminal closes
New way: logging.error("Batch %s failed", batch_id, exc_info=True) — saved to CloudWatch/file ✅

Processing 8GB CSV on laptop:
❌ rows = f.readlines() — RAM explodes 💥
✅ for line in read_chunks(file): yield parse(line) — smooth 🚀`,

      deepDive: `👉 logging module (production)

Levels: DEBUG < INFO < WARNING < ERROR < CRITICAL
Configure once: logging.basicConfig(level=INFO, format='%(asctime)s %(levelname)s %(message)s')
Use logger = logging.getLogger(__name__) in modules
Never use print() in production pipelines

DE pattern: log run_id, source file, row counts, duration, errors with stack trace (exc_info=True)

---

👉 Generators & yield

def read_batches(path, size=10000):
    batch = []
    with open(path) as f:
        for line in f:
            batch.append(parse(line))
            if len(batch) >= size:
                yield batch
                batch = []
    if batch:
        yield batch

Memory: O(batch_size) not O(file_size) — critical for DE on limited workers.`,

      types: 'Logging: DEBUG | INFO | WARNING | ERROR | CRITICAL\nGenerators: yield, lazy iteration, itertools',

      qa: [
        { q: 'Why use logging instead of print in ETL jobs?', a: 'Logging supports levels, timestamps, handlers (file/CloudWatch), rotation, and structured production debugging; print has no severity or persistence.' },
        { q: 'What is a generator in Python?', a: 'A function using yield that produces values lazily one at a time instead of building a full list in memory.' },
        { q: 'How do generators help with large files?', a: 'They process line-by-line or batch-by-batch so memory stays constant regardless of file size.' },
        { q: 'Explain logging levels in order.', a: 'DEBUG (dev detail) → INFO (normal progress) → WARNING (unexpected but ok) → ERROR (failure) → CRITICAL (system down).' },
        { q: 'How would you log a failed batch with stack trace?', a: 'logger.error("Batch %s failed", batch_id, exc_info=True) — exc_info adds exception traceback.' },
        { q: 'Difference between yield and return?', a: 'return exits function once; yield pauses and resumes, creating an iterator — state is preserved between yields.' },
        { q: 'What is structured logging for DE?', a: 'JSON logs with fields like run_id, pipeline, rows_in, rows_out, duration_ms — enables CloudWatch/Datadog search and alerts.' },
        { q: 'When would you use itertools.islice with a generator?', a: 'To take first N rows from infinite/large stream for sampling or testing without materializing entire dataset.' }
      ],

      quiz: [
        { q: 'Best for 5GB CSV on 4GB RAM worker?', options: ['list(f.readlines())', 'Generator batch reads', 'pandas read entire file always', 'global variable'], answer: 1 },
        { q: 'Production job progress messages should use…', options: ['print()', 'logging.info()', 'pass', 'TODO comment'], answer: 1 },
        { q: 'yield makes a function a…', options: ['Class', 'Generator', 'Decorator', 'Thread'], answer: 1 }
      ],

      interview: 'Use logging module with levels and handlers, not print. Log run_id, counts, errors with exc_info=True. Generators/yield process large files in O(batch) memory. ETL pattern: read batch → transform → write → yield next batch.',

      memory: 'logging > print | exc_info=True for traces | yield = lazy | batch 10K rows | structured JSON logs for CloudWatch',

      revision: 'Production ETL: logging.getLogger, INFO for progress, ERROR+exc_info for failures. Generators yield batches/lines for memory-safe large file processing. Never load full GB file into list.'
    }
  },

  pysparkContent: {
    'pyspark-structured-streaming': {
      title: 'Structured Streaming & Data Skew (Interview Bonus)',
      subtitle: 'Real-time Spark + shuffle skew — top senior DE interview topics',
      icon: '🌊',
      difficulty: 'Interview Bonus',
      duration: '~55 min',
      ready: true,
      studentGuide: {
        simple: 'Structured Streaming treats live data like a mini-batch table; data skew is when one key has 10x more rows and slows the whole job.',
        why: 'Swiggy/Zomato DE roles ask Kafka + Spark streaming and "one partition took 8 hours" debugging stories.',
        interviewTip: 'Mention watermark, checkpoint location, and salting skewed join keys.',
        mustRemember: 'Streaming = append mode + watermark | Skew fix = salt key + AQE + broadcast small side'
      },
      comic: `Orders stream in every second 🛒⚡

Batch Spark: wait until midnight, process everything
Structured Streaming: micro-batches every 10 seconds — like conveyor belt sushi 🍣

One celebrity customer has 50% of all orders 😱
Everyone waits on ONE executor — that's DATA SKEW
Fix: add random salt to key, join, then remove salt 🧂`,

      deepDive: `👉 Structured Streaming basics

readStream → transformations → writeStream
Output modes: append (new rows), complete (aggregates), update
Checkpoint dir = fault tolerance + exactly-once semantics
Watermark = drop late events after threshold (event-time)

Kafka source: .format("kafka").option("subscribe", "orders")

---

👉 Data Skew & Shuffle

Skew = one partition much larger than others after groupBy/join
Symptoms: 199 tasks finish in 2 min, 1 task runs 3 hours
Fixes:
1) Salting — key + random_suffix, join, aggregate back
2) Broadcast join — if one side < 10MB (configurable)
3) AQE (Adaptive Query Execution) — Spark 3.x auto skew join hints
4) repartition by different key before heavy join`,

      types: 'Streaming: micro-batch, watermark, checkpoint\nSkew: salting, broadcast, AQE, repartition',

      qa: [
        { q: 'What is Structured Streaming?', hint: 'Spark API', answer: 'Spark\'s API for stream processing using DataFrame/Dataset — treats live data as unbounded table with micro-batch execution.', explanation: 'Built on Spark SQL engine; same code patterns as batch.', memory: 'Structured Streaming = DataFrame + live 🔴' },
        { q: 'What is a watermark?', hint: 'Late data', answer: 'Policy that drops records older than threshold after event-time column — bounds state for aggregations.', explanation: 'Example: watermark 10 minutes = ignore events >10 min late.', memory: 'Watermark = late data cutoff ⏱️' },
        { q: 'Why is checkpoint location mandatory?', hint: 'Fault tolerance', answer: 'Stores offset metadata and state so job can restart after failure without reprocessing or losing exactly-once guarantees.', explanation: 'Must be reliable storage (S3/HDFS), not local disk in cluster.', memory: 'Checkpoint = streaming save point 💾' },
        { q: 'What is data skew?', hint: 'Uneven partitions', answer: 'When one key dominates partition size after shuffle — single task processes most data while others idle.', explanation: 'Common with null keys or blockbuster customers.', memory: 'Skew = 1 fat partition 🐘' },
        { q: 'How do you fix skewed join?', hint: 'Salt', answer: 'Salt hot keys with random suffix, join both sides on salted key, then aggregate to original key; or broadcast smaller table if eligible.', explanation: 'AQE skew join optimization helps automatically in Spark 3.', memory: 'Skew join = salt 🧂 + broadcast 📡' },
        { q: 'Transformation vs action in streaming?', hint: 'Lazy vs trigger', answer: 'Transformations on readStream are lazy; writeStream.start() triggers continuous micro-batch execution.', explanation: 'Like batch lazy eval but long-running.', memory: 'start() = go button ▶️' },
        { q: 'append vs complete output mode?', hint: 'Aggregates', answer: 'append writes only new rows; complete rewrites full result table each trigger — use complete for aggregations without watermark.', explanation: 'With watermark, append works for aggregations on windowed data.', memory: 'complete = full snapshot each time 📸' },
        { q: 'How read from Kafka in PySpark?', hint: 'format kafka', answer: 'spark.readStream.format("kafka").option("kafka.bootstrap.servers", host).option("subscribe", topic) then cast value as string/binary.', explanation: 'Often parse JSON from value column in next step.', memory: 'kafka format + subscribe topic 📨' }
      ],

      quiz: [
        { q: 'Checkpoint dir is used for…', options: ['Caching UI', 'Fault tolerance & offsets', 'SQL indexes', 'S3 encryption'], answer: 1 },
        { q: 'Data skew fix often includes…', options: ['SELECT *', 'Salting keys', 'DROP TABLE', 'More SELECT *'], answer: 1 },
        { q: 'Watermark controls…', options: ['CPU cores', 'Late event handling', 'S3 bucket name', 'Git branch'], answer: 1 }
      ],

      interview: 'Structured Streaming: micro-batch DataFrame API, readStream/writeStream, checkpoint for recovery, watermark for late data. Skew: uneven shuffle partitions — fix with salting hot keys, broadcast small dimension, enable AQE. Kafka source via format("kafka").',

      memory: 'Streaming: checkpoint + watermark | Skew: salt 🧂 broadcast 📡 AQE | Kafka readStream | append vs complete modes',

      revision: 'Structured Streaming = lazy transforms + writeStream.start(). Checkpoint + watermark essential. Skew = one huge partition — salt keys, broadcast join, AQE. Kafka via readStream.format("kafka").'
    }
  },

  awsContent: {
    'aws-kinesis-ingestion': {
      title: 'Amazon Kinesis & Real-Time Ingestion (Interview Bonus)',
      subtitle: 'Kinesis Data Streams, Firehose, MSK — the streaming gap in AWS DE interviews',
      icon: '📡',
      difficulty: 'Interview Bonus',
      duration: '~50 min',
      ready: true,
      tagline: 'Ingest millions of events/sec into your data lake',
      coreConcept: 'Real-time ingestion before S3/Glue processing',

      comicStory: [{ panel: 1, text: 'Swiggy gets 50,000 order clicks per minute 📱\n\nBatch S3 upload every hour = stale dashboards 😴\n\nKinesis Data Streams captures every click in real time ⚡\n\nFirehose delivers batched files to S3 automatically 📦\n\nLambda/Glue consumes stream for instant alerts 🚨' }],

      deepDive: [
        '👉 Kinesis Data Streams — durable real-time stream, you manage consumers (Lambda, Spark, custom). Shards = throughput unit (1MB/s in, 2MB/s out per shard).',
        '👉 Kinesis Data Firehose — fully managed delivery to S3, Redshift, OpenSearch; auto batch, compress, transform. Less ops than Streams.',
        '👉 Amazon MSK — managed Kafka for teams already on Kafka clients; connects to Spark Structured Streaming and Flink.',
        '👉 Pattern: Producers → Kinesis → Lambda (light) OR Firehose → S3 → Glue/Athena (analytics) OR MSK → Spark Streaming (heavy).',
        '👉 Interview: compare batch (Flow 1 S3) vs streaming (Kinesis) — latency vs cost vs complexity.'
      ],

      types: ['Kinesis Data Streams', 'Kinesis Data Firehose', 'Amazon MSK (Kafka)', 'Lambda consumer', 'Enhanced fan-out'],

      interactiveQA: [
        { question: 'Kinesis Streams vs Firehose?', hint: 'Who manages consumers?', options: ['Same service', 'Streams = you manage consumers; Firehose = managed delivery to destinations', 'Firehose only for Kafka', 'Streams only for batch'], answer: 'Streams = you manage consumers; Firehose = managed delivery to destinations', explanation: 'Streams offers low-latency custom processing; Firehose is load-to-S3/Redshift with minimal code.', memoryTrick: 'Streams = DIY 🔧 | Firehose = auto-delivery 🚚' },
        { question: 'What is a Kinesis shard?', hint: 'Throughput unit', options: ['S3 prefix', 'Throughput partition (1MB/s in)', 'IAM role', 'Glue crawler'], answer: 'Throughput partition (1MB/s in)', explanation: 'Scale shards for more throughput; partition key routes records to shards.', memoryTrick: 'Shard = lane on highway 🛣️' },
        { question: 'When choose MSK over Kinesis?', hint: 'Kafka ecosystem', options: ['Never', 'When team needs Kafka protocol, existing Kafka clients, or multi-consumer replay patterns', 'Only for static websites', 'Only for IAM'], answer: 'When team needs Kafka protocol, existing Kafka clients, or multi-consumer replay patterns', explanation: 'MSK = managed Kafka; Kinesis = AWS-native streaming.', memoryTrick: 'MSK = Kafka 🦅 | Kinesis = AWS-native ☁️' },
        { question: 'Typical Firehose destination for DE lake?', hint: 'Storage', options: ['EC2', 'S3 with optional Glue conversion', 'Route 53', 'CloudFront'], answer: 'S3 with optional Glue conversion', explanation: 'Firehose lands time-partitioned files in S3 for Athena/Glue downstream.', memoryTrick: 'Firehose → S3 → Athena 🔍' },
        { question: 'How handle duplicate records from streams?', hint: 'At-least-once', options: ['Ignore', 'Idempotent writes + dedupe keys in Silver layer', 'Delete S3', 'Disable CloudWatch'], answer: 'Idempotent writes + dedupe keys in Silver layer', explanation: 'Most stream consumers are at-least-once; design MERGE/dedupe in Delta or SQL.', memoryTrick: 'Streams duplicate — design idempotent 🔄' },
        { question: 'Lambda as Kinesis consumer use case?', hint: 'Light transform', options: ['Train ML models', 'Real-time enrichment, alerts, lightweight transforms per record/batch', 'Replace Redshift', 'DNS routing'], answer: 'Real-time enrichment, alerts, lightweight transforms per record/batch', explanation: 'Heavy aggregation goes to Spark/Flink; Lambda for fast per-event logic.', memoryTrick: 'Lambda = light & fast ⚡' },
        { question: 'Partition key purpose in PutRecord?', hint: 'Routing', options: ['Encryption', 'Routes record to shard — same key = same shard ordering', 'Billing only', 'Glue schema'], answer: 'Routes record to shard — same key = same shard ordering', explanation: 'Hot partition key causes shard skew — same problem as Spark skew.', memoryTrick: 'Partition key = shard router 🗺️' },
        { question: 'Connect Kinesis to data lake pattern?', hint: 'End-to-end', options: ['Direct Redshift only', 'Stream → Firehose → S3 → Glue Crawler → Athena/Redshift COPY', 'Email CSV', 'Manual download'], answer: 'Stream → Firehose → S3 → Glue Crawler → Athena/Redshift COPY', explanation: 'Standard AWS DE streaming reference architecture.', memoryTrick: 'Stream → S3 → Query 📊' }
      ],

      quiz: [
        { question: 'Firehose primarily…', options: ['Replaces S3', 'Delivers streams to destinations like S3', 'Is a data warehouse', 'Only logs'], answer: 1, explanation: 'Managed delivery service.', difficulty: 'medium' },
        { question: 'MSK is…', options: ['Managed Kafka', 'SQL database', 'S3 tier', 'DNS'], answer: 0, explanation: 'Amazon Managed Streaming for Apache Kafka.', difficulty: 'easy' },
        { question: 'Shard scaling addresses…', options: ['Git conflicts', 'Stream throughput limits', 'SQL joins', 'PDF export'], answer: 1, explanation: 'More shards = more ingest capacity.', difficulty: 'medium' }
      ],

      interviewQuestions: [
        { question: 'Design real-time order ingestion on AWS.', answer: 'API Gateway/Lambda producers → Kinesis Streams → Firehose to S3 (Parquet partitioned by date) → Glue catalog → Athena dashboards; optional Lambda for fraud alerts on stream.' },
        { question: 'Kinesis vs SQS vs MSK?', answer: 'Kinesis/MSK for high-throughput ordered streams and replay; SQS for simple decoupled task queues without ordering/replay at scale; MSK when Kafka ecosystem required.' }
      ],

      memoryTrick: { line: 'Streams DIY, Firehose delivers, MSK is Kafka', flow: 'Producer → Kinesis → S3/Firehose → Glue → Athena' },

      revision: 'Kinesis Streams = real-time shards, custom consumers. Firehose = managed S3/Redshift delivery. MSK = managed Kafka. Pattern: stream → lake → query. Design idempotent dedupe for at-least-once delivery.',

      finalInterviewStatement: 'I ingest real-time events with Kinesis Streams or Firehose into S3, catalog with Glue, query with Athena, and use MSK when the team standardizes on Kafka — always with idempotent Silver-layer dedupe.'
    }
  },

  databricksContent: {
    'databricks-dbt-transforms': {
      title: 'dbt + SQL Transform Layer (Interview Bonus)',
      subtitle: 'Data build tool — the #1 missing skill in modern DE interviews',
      icon: '🧱',
      difficulty: 'Interview Bonus',
      duration: '~45 min',
      ready: true,
      studentGuide: {
        simple: 'dbt lets you build warehouse tables from SQL SELECT statements with tests, docs, and lineage — "software engineering for analytics SQL".',
        why: '2025 DE jobs at Razorpay, Meesho, and global startups ask "Have you used dbt?" even if you know Spark.',
        interviewTip: 'Explain staging → intermediate → marts folder structure and dbt test on unique/not_null.',
        mustRemember: 'dbt = SELECT models + ref() + tests | materialize: view/table/incremental'
      },
      comic: `Data team chaos 😵 — 50 analysts writing SQL in notebooks

dbt arrives with:
📁 models/staging/stg_orders.sql
📁 models/marts/fct_revenue.sql
✅ tests: unique, not_null on order_id
📊 lineage graph auto-generated

Analyst: "Where does revenue column come from?"
dbt docs: click lineage → see full chain 🎯`,

      deepDive: `👉 What is dbt?

Transform data IN the warehouse using SQL + Jinja
Models = SELECT statements materialized as views/tables
ref('model_name') — dependency graph, run order automatic
sources() — declare raw tables

Folder structure:
staging/ — clean raw (1:1 with source)
intermediate/ — business logic joins
marts/ — fct_ and dim_ for BI

---

👉 dbt on Databricks

Use dbt-databricks adapter
Profiles.yml: host, http_path, token, catalog/schema
Materializations: view, table, incremental (merge strategy)

---

👉 dbt vs Spark transforms

dbt: SQL-first, great for warehouse marts, tests, docs
Spark: heavy transforms, unstructured, ML, huge scale
Modern stack: Spark Bronze/Silver → dbt Gold marts`,

      types: 'Models | Seeds | Tests | Snapshots | Incremental | Sources | Macros',

      qa: [
        { q: 'What is dbt?', hint: 'SQL transforms', answer: 'Open-source tool to transform data in warehouse using SQL models with testing, documentation, and lineage.', explanation: 'Does not extract/load — transform only (T in ELT).', memory: 'dbt = T in ELT 🔧' },
        { q: 'What does ref() do?', hint: 'Dependencies', answer: 'References another dbt model and builds dependency DAG for execution order.', explanation: 'Replaces hardcoded schema.table names.', memory: 'ref() = model pointer 🔗' },
        { q: 'dbt staging vs marts?', hint: 'Layers', answer: 'Staging cleans/raw-aligns sources; marts expose business-ready facts and dimensions for BI.', explanation: 'Medallion analogy: staging≈bronze/silver, marts≈gold.', memory: 'staging → marts 📁' },
        { q: 'Common dbt tests?', hint: 'Data quality', answer: 'unique, not_null, accepted_values, relationships — run in CI after model build.', explanation: 'Catch bad joins and null keys before dashboard breaks.', memory: 'unique + not_null = minimum ✅' },
        { q: 'Incremental model in dbt?', hint: 'Large facts', answer: 'Only processes new/changed rows since last run using is_incremental() macro — critical for large fact tables.', explanation: 'Strategies: append, merge, delete+insert.', memory: 'incremental = new rows only ⚡' },
        { q: 'dbt vs Spark — when which?', hint: 'Scale & type', answer: 'dbt for SQL warehouse marts and governance; Spark for complex semi-structured, ML features, massive scale processing.', explanation: 'Often combined in lakehouse architecture.', memory: 'dbt SQL marts | Spark heavy lift 🏋️' },
        { q: 'What is dbt snapshot?', hint: 'SCD', answer: 'Captures slowly changing dimension history using timestamp or check strategy — built-in SCD Type 2 helper.', explanation: 'Tracks row changes over time automatically.', memory: 'snapshot = SCD2 helper 📸' },
        { q: 'How run dbt in production?', hint: 'CI/CD', answer: 'dbt run/test in GitHub Actions after merge; target prod schema; use dbt Cloud or Airflow operator for schedule.', explanation: 'Same git workflow as application code.', memory: 'dbt run + dbt test in CI 🔄' }
      ],

      quiz: [
        { q: 'dbt primarily transforms data…', options: ['In Excel', 'In the warehouse with SQL', 'Only in S3 files', 'In email'], answer: 1 },
        { q: 'ref() creates…', options: ['Random SQL', 'Model dependency graph', 'S3 bucket', 'IAM policy'], answer: 1 },
        { q: 'Incremental models help with…', options: ['UI design', 'Large tables — process only new rows', 'Git merge conflicts', 'DNS'], answer: 1 }
      ],

      interview: 'dbt = SQL transform layer in warehouse. Structure: staging → intermediate → marts. ref() for dependencies, tests for quality, incremental for large facts. Combine with Spark for Bronze/Silver; dbt for Gold SQL marts. snapshots for SCD2.',

      memory: 'dbt = ELT transform | ref() DAG | staging→marts | dbt test in CI | incremental for big facts | dbt-databricks adapter',

      revision: 'dbt builds warehouse models from SQL with ref() dependencies, tests (unique/not_null), docs/lineage. Use incremental for large facts. Spark for heavy processing; dbt for governed SQL marts on Databricks/Snowflake/BQ.'
    }
  },

  gitContent: {
    'git-bisect-hooks': {
      title: 'git bisect & Hooks for DE (Interview Bonus)',
      subtitle: 'Find the breaking commit + automate quality before push',
      icon: '🔍',
      difficulty: 'Interview Bonus',
      duration: '~40 min',
      ready: true,
      comic: `Pipeline broke after 20 commits 😱 — which one?

git bisect start → mark bad (main) → mark good (last week tag)
Git checks out middle commit → you run test → good/bad
Binary search finds exact breaking commit in ~5 steps 🎯

Pre-commit hook: block SQL with SELECT * or secrets in .env 🔒`,

      deepDive: `👉 git bisect

git bisect start
git bisect bad          # current broken
git bisect good v1.2.0  # last known good
# Git checks out midpoint — run pipeline test
git bisect good|bad     # repeat until culprit commit found
git bisect reset

Use for: "Airflow DAG failed after merge — find exact SQL change"

---

👉 Git hooks

pre-commit — lint SQL, format Python, scan secrets (detect-secrets)
pre-push — run unit tests, dbt test
commit-msg — enforce JIRA ticket format

Tools: pre-commit framework (.pre-commit-config.yaml)
DE teams hook: black, sqlfluff, no credentials in repo`,

      types: 'Hooks: pre-commit | pre-push | commit-msg\nBisect: binary search commits',

      qa: [
        { q: 'What is git bisect?', hint: 'Binary search', answer: 'Binary search through commit history to find which commit introduced a bug.', explanation: 'O(log n) commits to test instead of checking all.', memory: 'bisect = binary search commits 🔍' },
        { q: 'When use bisect in DE work?', hint: 'Pipeline regression', answer: 'When ETL job broke but many commits landed — locate exact change to SQL, DAG, or config.', explanation: 'Pair with automated test script for bisect run.', memory: 'Broken pipeline → bisect 🚨' },
        { q: 'What is a pre-commit hook?', hint: 'Before commit', answer: 'Script that runs before commit completes — can block commit if lint/tests fail.', explanation: 'Catches issues before they reach remote.', memory: 'pre-commit = gate before commit 🚪' },
        { q: 'What should DE pre-commit check?', hint: 'Quality', answer: 'SQL lint (sqlfluff), Python format (black/ruff), no secrets, no hardcoded credentials, optional dbt compile.', explanation: 'Prevents bad SQL and leaked keys in repo.', memory: 'SQL lint + secret scan 🔒' },
        { q: 'pre-commit vs pre-push hook?', hint: 'Timing', answer: 'pre-commit runs on git commit; pre-push runs before push to remote — heavier tests on push.', explanation: 'Fast checks commit; slow integration tests push.', memory: 'commit=fast | push=slow tests ⏱️' },
        { q: 'How automate hooks across team?', hint: 'Framework', answer: 'Use pre-commit framework with shared .pre-commit-config.yaml in repo — everyone installs via pre-commit install.', explanation: 'Same rules for all DEs.', memory: 'pre-commit install = team standard 📋' },
        { q: 'bisect good vs bad?', hint: 'Known states', answer: 'good = commit where bug did NOT exist; bad = commit where bug exists — bisect narrows between them.', explanation: 'Must know one good and one bad boundary.', memory: 'good=works ✅ bad=broken ❌' },
        { q: 'Exit bisect mode?', hint: 'Cleanup', answer: 'git bisect reset — returns HEAD to original branch and ends bisect session.', explanation: 'Always reset after finding commit.', memory: 'bisect reset = done 🏁' }
      ],

      quiz: [
        { q: 'git bisect uses…', options: ['Linear scan all commits', 'Binary search', 'Random commit', 'Delete repo'], answer: 1 },
        { q: 'Pre-commit hooks run…', options: ['After deploy', 'Before commit finishes', 'Never', 'Only on main'], answer: 1 },
        { q: 'DE teams often lint…', options: ['Images only', 'SQL and Python in hooks', 'Only README', 'DNS records'], answer: 1 }
      ],

      interview: 'git bisect binary-searches commits between known good and bad — essential for pipeline regressions. Hooks: pre-commit for lint/secret scan, pre-push for tests. Use pre-commit framework for team consistency.',

      memory: 'bisect = binary search 🔍 | pre-commit = lint+secrets | pre-push = heavy tests | bisect reset when done',

      revision: 'git bisect finds breaking commit via binary search (good/bad markers). Hooks automate quality: pre-commit lint SQL/Python, scan secrets; pre-push run tests. pre-commit framework shares config across team.'
    }
  },

  projectsContent: {
    'project-8': {
      id: 'project-8',
      project_id: 'DE008',
      project_name: 'dbt + CI/CD for Data Pipelines',
      title: 'dbt + CI/CD for Data Pipelines',
      tagline: 'Automate SQL transforms with tests and GitHub Actions deployment',
      subtitle: 'Automate SQL transforms with tests and GitHub Actions deployment',
      icon: '🔄',
      difficulty_level: 'Intermediate',
      level: 'Intermediate',
      estimated_duration: '3 Hours',
      duration: '3 Hours',
      tools_and_technologies: ['dbt', 'GitHub Actions', 'Databricks/Snowflake SQL', 'Git'],
      tech_stack: ['dbt', 'GitHub Actions', 'SQL', 'Git', 'Databricks'],
      ready: true,
      project_info: {
        what_you_will_build: 'A dbt project with staging and mart models, automated dbt test in GitHub Actions on every PR, and scheduled production runs.',
        business_problem: 'Analytics team ships broken SQL to production because transforms lack tests and CI.',
        why_companies_need_this: 'dbt + CI catches bad joins and null keys before dashboards break; standard at modern data teams.',
        real_world_usage: ['dbt Cloud deployments', 'GitHub Actions dbt run/test', 'Medallion Gold layer in SQL'],
        expected_output: 'Tested dbt marts deployed via CI with lineage docs and passing unique/not_null tests.'
      },
      aatma: {
        '📋 Project Info': {
          title: 'dbt + CI/CD Pipeline',
          duration: '3 Hours',
          difficulty: 'Intermediate',
          tools: ['dbt', 'GitHub Actions', 'SQL Warehouse']
        },
        '🎯 Overview': {
          simple: 'Build analytics SQL models with dbt, test them automatically, and deploy using GitHub Actions — like DevOps for data transforms.',
          explanation: 'You create staging models from raw tables, mart models for BI, add dbt tests, and wire CI so every pull request runs dbt test before merge.',
          example: 'Meesho analytics: 200+ dbt models, CI blocks merge if revenue model has duplicate order_ids.',
          what_you_build: 'dbt project + GitHub Actions workflow',
          business_problem: 'Broken SQL reached production without tests',
          final_output: 'Documented, tested mart tables with CI gate'
        },
        '🎭 Comic': {
          story: 'Friday deploy: analyst merges SQL model without tests 📉\nMonday: CEO dashboard shows 2x revenue — duplicate join bug!\n\nNew way: GitHub PR → dbt test runs → unique test FAILS on order_id → merge blocked ✅\n\nTeam adds staging → marts structure, docs generated, lineage visible.\n\nInterview story: "We reduced dashboard incidents 80% with dbt tests in CI." 🎯'
        },
        '📚 Deep Dive': {
          step_by_step: [
            '1. Init dbt project — models/staging, models/marts folders',
            '2. Define sources.yml for raw orders/customers tables',
            '3. stg_orders.sql — clean types, rename columns with ref/sources',
            '4. fct_revenue.sql — join staging models with ref()',
            '5. schema.yml — unique + not_null tests on order_id',
            '6. GitHub Actions: on pull_request run dbt deps, dbt run, dbt test',
            '7. Merge to main → scheduled daily dbt run in prod target'
          ],
          architecture: ['Git repo', 'dbt models', 'GitHub Actions CI', 'Warehouse (Databricks/Snowflake)', 'BI dashboards'],
          why_each_tool: ['dbt — SQL transforms + tests', 'GitHub Actions — CI/CD gate', 'Git — version control for SQL', 'Warehouse — execution engine']
        },
        '📋 Types': {
          types: ['ELT SQL transforms (dbt)', 'CI/CD with GitHub Actions', 'Data quality tests (unique, not_null)', 'Analytics engineering workflow']
        },
        '⚙️ Components': {
          components: ['dbt models (staging + marts)', 'schema.yml tests', 'profiles.yml (CI secrets)', 'GitHub Actions workflow', 'SQL warehouse target']
        },
        '💻 Coding': {
          what_we_do: 'Define dbt SQL models with ref() dependencies and run dbt test in CI before merge.',
          examples: [
            { title: 'stg_orders.sql', description: 'Clean raw orders — cast types, filter null keys', code: 'SELECT order_id, customer_id, CAST(amount AS DECIMAL(10,2)) AS amount\\nFROM {{ source(\"raw\", \"orders\") }}\\nWHERE order_id IS NOT NULL', output: 'Staging view/table: stg_orders' },
            { title: 'fct_revenue.sql', description: 'Mart model joining staging tables', code: 'SELECT o.order_id, o.amount, c.region\\nFROM {{ ref(\"stg_orders\") }} o\\nJOIN {{ ref(\"stg_customers\") }} c ON o.customer_id = c.customer_id', output: 'Mart table: fct_revenue with region' },
            { title: 'schema.yml test', description: 'Block bad data in CI', code: 'models:\\n  - name: fct_revenue\\n    columns:\\n      - name: order_id\\n        tests: [unique, not_null]', output: 'dbt test PASS or FAIL on PR' }
          ]
        },
        '💬 Q&A': [
          { question: 'Why dbt instead of notebook SQL?', answer: 'Version control, dependency graph, automated tests, and CI — notebooks lack governance at scale.' },
          { question: 'What tests did you add?', answer: 'unique and not_null on order_id in fct_revenue; relationships test to stg_customers.' },
          { question: 'How does CI work?', answer: 'GitHub Actions runs dbt test on every PR; merge blocked if tests fail; main branch deploys to prod schema nightly.' },
          { question: 'dbt vs Spark for this project?', answer: 'dbt handles SQL marts and tests; Spark would be used upstream for heavy Bronze/Silver if data were huge or unstructured.' },
          { question: 'How handle warehouse credentials in CI?', answer: 'Store token/password in GitHub Secrets; inject into profiles.yml via env vars in workflow — never commit secrets.' },
          { question: 'What is incremental model here?', answer: 'For large fact tables, use materialized incremental with merge on order_id to process only new rows daily.' },
          { question: 'How document models?', answer: 'dbt docs generate — descriptions in schema.yml; lineage graph shows staging → marts chain.' },
          { question: 'Failure story for interview?', answer: 'CI caught duplicate order_ids before merge — would have doubled revenue metric in CEO dashboard.' }
        ],
        '🎯 Quiz': [
          'What does dbt test unique check? → No duplicate values in that column',
          'When does CI run dbt test? → On every pull request before merge',
          'What does ref() do in dbt? → References another dbt model and builds dependency order'
        ],
        '🎤 Interview': [
          'Walk through dbt project: staging cleans raw, marts serve BI, schema.yml has unique/not_null tests, CI runs dbt test on PR.',
          'How prevent bad SQL in prod? → dbt tests in GitHub Actions, PR review, prod only from main schedule.',
          'dbt vs Spark? → dbt for governed SQL marts; Spark upstream for heavy Bronze/Silver processing.',
          'How store CI credentials? → GitHub Secrets injected to profiles.yml — never commit passwords.'
        ],
        '⚠️ Mistakes': [
          'Skipping dbt test in CI — broken marts reach production',
          'Hardcoding schema.table instead of ref() — breaks dependency graph',
          'Committing profiles.yml with real passwords',
          'No incremental strategy on billion-row fact tables'
        ],
        '🔧 Practical': {
          task: 'Add a new mart model fct_daily_revenue with unique test on order_id and wire GitHub Actions to run dbt test on PR.',
          output: 'CI fails when duplicate order_id introduced; merge blocked until fixed.',
          real_cases: [
            { scenario: 'PR join duplicates rows', solution: 'unique test on order_id fails CI — developer fixes join before merge' },
            { scenario: 'New column 100% null', solution: 'not_null test fails — caught before dashboard launch' }
          ]
        },
        '🧠 Memory': {
          trick: 'dbt = SQL + ref() + tests + docs',
          shortcut: 'staging → marts | CI = dbt test on PR',
          tricks: ['ref() builds DAG', 'unique + not_null minimum tests', 'Secrets in GitHub only', 'incremental for big facts']
        },
        '⚡ Revision': {
          summary: 'dbt transforms warehouse SQL with ref() dependencies and schema tests. GitHub Actions runs dbt test on every PR. Never commit secrets; use staging → marts structure for analytics engineering interviews.',
          one_line_revision: [
            'dbt: staging → marts, ref(), schema tests',
            'CI: GitHub Actions dbt run + dbt test on PR',
            'Interview: structure + tests + CI gate + no secrets in repo'
          ]
        }
      }
    }
  }
};

(function applyBonusDETopics() {
  const pairs = [
    ['sqlContent', BonusDETopics.sqlContent],
    ['pythonContent', BonusDETopics.pythonContent],
    ['pysparkContent', BonusDETopics.pysparkContent],
    ['awsContent', BonusDETopics.awsContent],
    ['databricksContent', BonusDETopics.databricksContent],
    ['gitContent', BonusDETopics.gitContent],
    ['projectsContent', BonusDETopics.projectsContent]
  ];
  const root = typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : {});
  for (const [name, topics] of pairs) {
    if (root[name] && topics) Object.assign(root[name], topics);
  }
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BonusDETopics;
}
