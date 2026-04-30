// Git & Version Control Topics Content
const gitContent = {

  'version-control-fundamentals': {
    title: "Version Control Fundamentals (Managing Code Changes Over Time)",
    subtitle: "Understanding version control systems and why they're essential",
    icon: "📚",
    difficulty: "Beginner",
    duration: "~45 min",
    ready: true,

    comic: `
Imagine you're writing a book 📖

Old way (No Version Control):
- Write Chapter 1 ✍️
- Save as "book.doc"
- Make changes, save again
- Realize you deleted important part 😰
- Can't get it back! ❌
- Want to try different ending?
- Copy file: "book_v2.doc", "book_final.doc", "book_final_FINAL.doc" 🤦

😰 Problems:
- Lost work forever
- Too many file copies
- Can't remember what changed
- Team members overwrite each other's work
- Chaos and confusion!

🤔 Solution: Version Control System

✨ Like a Time Machine for Your Code:
1️⃣ Save every version automatically 💾
2️⃣ Go back to any previous version ⏰
3️⃣ See exactly what changed 🔍
4️⃣ Multiple people work together safely 👥
5️⃣ Try experiments without fear 🧪
6️⃣ Track who changed what and why 📝

💡 Aha Moment:
Version Control = Time machine + Collaboration tool + Safety net!

👉 No Version Control = Chaos 🌪️
👉 With Version Control = Organized and Safe 🎯

Real-world example:
- Google Docs version history
- Wikipedia edit history
- Your code with Git!
`,

    deepDive: `
👉 What is Version Control?

Version Control is a system that:
✔ Records changes to files over time
✔ Allows you to recall specific versions later
✔ Tracks who made what changes and when
✔ Enables collaboration without conflicts
✔ Provides backup and recovery

Think of it as:
- Time machine for your code
- Detailed history book
- Collaboration coordinator
- Safety net for mistakes

---

👉 Why Version Control is Used?

Without Version Control:
❌ Lost work (accidental deletions)
❌ File chaos (file_v1, file_v2, file_final_FINAL)
❌ No history (can't see what changed)
❌ Collaboration nightmares (overwriting each other)
❌ No experimentation (fear of breaking things)
❌ No accountability (who changed what?)

With Version Control:
✅ Never lose work (everything saved)
✅ Clean workspace (one file, many versions)
✅ Complete history (see all changes)
✅ Safe collaboration (merge changes automatically)
✅ Fearless experimentation (easy to undo)
✅ Full accountability (track every change)

Real-world scenarios:

**Scenario 1: Bug Introduction**
- You deploy code on Friday
- Monday: Users report bug
- With Version Control: Revert to Thursday's working version in seconds!
- Without: Panic and manual fixing 😰

**Scenario 2: Team Collaboration**
- 5 developers working on same project
- With Version Control: Everyone works independently, merge automatically
- Without: "Don't touch login.js, I'm working on it!" 🚫

**Scenario 3: Experimentation**
- Want to try new feature but might break things
- With Version Control: Create branch, experiment freely, discard if fails
- Without: Make backup copies, hope for the best 🤞

---

👉 Types of Version Control Systems

🔹 **1. Centralized Version Control (CVCS)**

Architecture:
- ONE central server stores everything
- Developers check out files from server
- Make changes locally
- Check back in to server

Example: SVN (Subversion), CVS

Flow:
Central Server ← Developer 1
              ← Developer 2
              ← Developer 3

Pros:
✔ Simple to understand
✔ Easy administration
✔ Single source of truth

Cons:
❌ Single point of failure (server down = no work)
❌ Requires network connection
❌ Slower operations (network dependent)
❌ Limited offline work

Real-world analogy:
Like a library with one copy of each book. You borrow it, make notes, return it.

🔹 **2. Distributed Version Control (DVCS)**

Architecture:
- EVERY developer has FULL copy of repository
- Work completely offline
- Sync changes when ready
- No single point of failure

Example: Git, Mercurial

Flow:
Developer 1 (full copy) ↔ Remote Server ↔ Developer 2 (full copy)
                                        ↔ Developer 3 (full copy)

Pros:
✔ Work offline (full history locally)
✔ Fast operations (no network needed)
✔ No single point of failure
✔ Flexible workflows
✔ Better branching and merging

Cons:
❌ Steeper learning curve
❌ More disk space (full copy)
❌ Initial clone takes time

Real-world analogy:
Like everyone having their own copy of the book. Make changes, share updates when ready.

---

👉 Centralized vs Distributed

| Feature | Centralized (SVN) | Distributed (Git) |
|---------|-------------------|-------------------|
| Repository | One central server | Every developer has full copy |
| Offline work | ❌ Limited | ✅ Full capability |
| Speed | Slower (network) | ⚡ Fast (local) |
| Backup | Single point | Multiple copies |
| Branching | Difficult | Easy and fast |
| Learning curve | Easier | Steeper |
| Popularity | Declining | Industry standard |

**Modern Choice: Git (Distributed) 🎯**

Why Git won:
✔ Speed and performance
✔ Offline capability
✔ Powerful branching
✔ GitHub/GitLab ecosystem
✔ Industry standard

---

👉 Benefits of Git

🔹 **1. Complete History**
Every change recorded:
- What changed
- Who changed it
- When it changed
- Why it changed (commit message)

Example:
git log
commit abc123
Author: Ankit
Date: Jan 15, 2024
Message: Fixed login bug

🔹 **2. Branching and Merging**
Create parallel versions:
- Main branch: Production code
- Feature branch: New feature development
- Bug fix branch: Quick fixes

Work independently, merge when ready!

🔹 **3. Collaboration**
Multiple developers work together:
- No overwriting each other
- Automatic conflict detection
- Review changes before merging
- Track contributions

🔹 **4. Backup and Recovery**
Never lose work:
- Every commit is a backup
- Revert to any previous state
- Recover deleted files
- Undo mistakes easily

🔹 **5. Experimentation**
Try new ideas safely:
- Create experimental branch
- Test changes
- Keep if good, discard if bad
- Main code stays safe

🔹 **6. Code Review**
Quality assurance:
- Review changes before merging
- Discuss improvements
- Catch bugs early
- Share knowledge

🔹 **7. Continuous Integration**
Automated workflows:
- Auto-test on every commit
- Auto-deploy when tests pass
- Catch issues immediately
- Faster development

---

👉 Real-World Usage

🔹 **Software Development**
Every software company uses Git:
- Google, Facebook, Amazon, Netflix
- Open source projects (Linux, Python, React)
- Startups to enterprises

Workflow:
1️⃣ Developer creates feature branch
2️⃣ Writes code and commits changes
3️⃣ Pushes to remote repository
4️⃣ Creates pull request for review
5️⃣ Team reviews and approves
6️⃣ Merges to main branch
7️⃣ Deploys to production

🔹 **Data Engineering**
Version control for:
- ETL scripts
- SQL queries
- Configuration files
- Data pipeline code
- Notebooks (Databricks, Jupyter)

Example:
# Track changes to data pipeline
git commit -m "Optimized sales ETL pipeline"
git push origin main

🔹 **Documentation**
Track documentation changes:
- README files
- API documentation
- User guides
- Technical specs

🔹 **Configuration Management**
Version control for:
- Server configurations
- Environment variables
- Infrastructure as Code (Terraform)
- CI/CD pipelines

🔹 **Collaboration Platforms**
- GitHub: Code hosting + collaboration
- GitLab: DevOps platform
- Bitbucket: Atlassian ecosystem
- Azure DevOps: Microsoft ecosystem

---

👉 Git vs Other Tools

**Git vs SVN:**
Git: Distributed, fast, offline work
SVN: Centralized, simpler, requires server

**Git vs Manual Backups:**
Git: Automatic, organized, searchable
Manual: Messy, error-prone, no history

**Git vs Cloud Storage (Dropbox):**
Git: Version control, branching, merging
Dropbox: File sync, no version control features

---

👉 Key Concepts Summary

| Concept | Description | Benefit |
|---------|-------------|---------|
| Repository | Storage for all versions | Complete history |
| Commit | Snapshot of changes | Save point |
| Branch | Parallel version | Safe experimentation |
| Merge | Combine branches | Integrate changes |
| Remote | Server copy | Collaboration |
| Clone | Copy repository | Get full history |
| Pull | Get updates | Stay synchronized |
| Push | Send updates | Share changes |

---

👉 Common Misconceptions

❌ "Git is only for code"
✅ Git works for any text files: docs, configs, scripts

❌ "Git is too complex"
✅ Basic operations are simple, advanced features optional

❌ "Git is only for teams"
✅ Solo developers benefit from history and backup

❌ "Git replaces backups"
✅ Git is version control, still need backups of repository

❌ "GitHub is Git"
✅ GitHub hosts Git repositories, Git is the tool

---

👉 When to Use Version Control?

Always! Use version control for:
✔ Any code project (personal or team)
✔ Configuration files
✔ Documentation
✔ Scripts and automation
✔ Data pipeline code
✔ Infrastructure as Code

Don't use for:
❌ Large binary files (videos, images)
❌ Sensitive data (passwords, keys)
❌ Generated files (build outputs)

---

👉 Getting Started Mindset

Think of Git as:
- **Save button on steroids**: Every commit is a save point
- **Time machine**: Go back to any previous state
- **Collaboration tool**: Work with others safely
- **Safety net**: Experiment without fear

Start simple:
1️⃣ Learn basic commands (add, commit, push)
2️⃣ Practice on personal projects
3️⃣ Gradually learn advanced features
4️⃣ Build good habits (commit often, write clear messages)

---

🎯 Interview Line:
"Version Control is a system that tracks changes to files over time, enabling developers to recall specific versions, collaborate safely, and maintain a complete history of modifications. Git, a distributed version control system, has become the industry standard due to its speed, offline capability, powerful branching, and robust ecosystem. Unlike centralized systems like SVN, Git gives every developer a full copy of the repository, enabling fast local operations and eliminating single points of failure. Version control is essential for software development, data engineering, documentation, and configuration management, providing benefits like complete history, safe experimentation, effective collaboration, and easy recovery from mistakes."
`,

    types: `
📚 Version Control Types:

🔹 Centralized (CVCS):
- Single central server
- Check out/check in model
- Network dependent
- Example: SVN, CVS

🔹 Distributed (DVCS):
- Full copy on every machine
- Work offline
- Fast operations
- Example: Git, Mercurial

🎯 Git Benefits:
- Complete history
- Branching and merging
- Collaboration
- Backup and recovery
- Experimentation
- Code review
- CI/CD integration

📊 Use Cases:
- Software development
- Data engineering scripts
- Documentation
- Configuration management
- Infrastructure as Code
`,

    qa: [
      {
        q: "What is Version Control?",
        hint: "Think tracking changes",
        options: ["A programming language", "A system that tracks changes to files over time", "A database", "A text editor"],
        answer: "A system that tracks changes to files over time",
        explanation: `Version Control:\n✔ Records every change\n✔ Allows reverting to previous versions\n✔ Tracks who changed what\n✔ Enables collaboration\n\nLike a time machine for your code!`,
        memory: "Version Control = Time machine for code ⏰"
      },
      {
        q: "Why use Version Control?",
        hint: "Think benefits",
        options: ["To make code slower", "To track changes, collaborate safely, and never lose work", "To delete files", "To encrypt code"],
        answer: "To track changes, collaborate safely, and never lose work",
        explanation: `Benefits:\n✔ Never lose work\n✔ Complete history\n✔ Safe collaboration\n✔ Easy experimentation\n✔ Accountability\n\nEssential for any project!`,
        memory: "Version Control = Safety + History + Collaboration 🎯"
      },
      {
        q: "Difference between Centralized and Distributed Version Control?",
        hint: "Think architecture",
        options: ["No difference", "Centralized = one server, Distributed = full copy on every machine", "Centralized is faster", "Distributed is older"],
        answer: "Centralized = one server, Distributed = full copy on every machine",
        explanation: `Centralized (SVN):\n- One central server\n- Network required\n- Single point of failure\n\nDistributed (Git):\n- Full copy everywhere\n- Work offline\n- No single point of failure`,
        memory: "Centralized = One server, Distributed = Full copies 📦"
      },
      {
        q: "What is Git?",
        hint: "Think distributed",
        options: ["A centralized VCS", "A distributed version control system", "A programming language", "A database"],
        answer: "A distributed version control system",
        explanation: `Git:\n✔ Distributed VCS\n✔ Every developer has full copy\n✔ Fast and offline capable\n✔ Industry standard\n\nCreated by Linus Torvalds for Linux!`,
        memory: "Git = Distributed VCS 🚀"
      },
      {
        q: "Can you work offline with Git?",
        hint: "Think distributed",
        options: ["No, always need internet", "Yes, full history is local", "Only for reading", "Only for small files"],
        answer: "Yes, full history is local",
        explanation: `Git Offline:\n✔ Full repository locally\n✔ Commit changes offline\n✔ View history offline\n✔ Create branches offline\n\nSync when back online!`,
        memory: "Git = Offline capable ✅"
      },
      {
        q: "What is a commit in Git?",
        hint: "Think snapshot",
        options: ["Delete files", "A snapshot of changes at a point in time", "Upload to server", "Compile code"],
        answer: "A snapshot of changes at a point in time",
        explanation: `Commit:\n✔ Saves current state\n✔ Creates checkpoint\n✔ Includes message describing changes\n✔ Can revert to any commit\n\nLike a save point in a game!`,
        memory: "Commit = Save point 💾"
      },
      {
        q: "What is branching in Git?",
        hint: "Think parallel versions",
        options: ["Deleting code", "Creating parallel versions of code", "Uploading files", "Compiling code"],
        answer: "Creating parallel versions of code",
        explanation: `Branching:\n✔ Create separate line of development\n✔ Work on features independently\n✔ Experiment safely\n✔ Merge back when ready\n\nMain branch stays stable!`,
        memory: "Branch = Parallel version 🌿"
      },
      {
        q: "Why is Git the industry standard?",
        hint: "Think advantages",
        options: ["It's the oldest", "Speed, offline work, powerful branching, and ecosystem", "It's the simplest", "It's free"],
        answer: "Speed, offline work, powerful branching, and ecosystem",
        explanation: `Git Advantages:\n✔ Fast local operations\n✔ Work offline\n✔ Easy branching/merging\n✔ GitHub/GitLab ecosystem\n✔ Industry adoption\n\nUsed by Google, Facebook, Amazon!`,
        memory: "Git = Industry standard 🏆"
      },
      {
        q: "What should NOT be stored in Git?",
        hint: "Think file types",
        options: ["Code files", "Large binary files and sensitive data", "Documentation", "Configuration files"],
        answer: "Large binary files and sensitive data",
        explanation: `Don't store:\n❌ Large binaries (videos, images)\n❌ Passwords and API keys\n❌ Generated files (build outputs)\n❌ Dependencies (node_modules)\n\nGit is for text-based files!`,
        memory: "Git = Text files, not binaries/secrets 🚫"
      }
    ],

    coding: {
      title: "Understanding Version Control Workflow",
      scenario: "Simulate basic version control operations",
      thinkingApproach: [
        "Step 1: Initialize repository",
        "Step 2: Make changes to files",
        "Step 3: Stage changes",
        "Step 4: Commit with message",
        "Step 5: View history",
        "Step 6: Revert if needed"
      ],
      question: "Simulate a simple version control workflow",
      input: `file_content = "Hello World"`,
      expectedOutput: `Version 1: Hello World\nVersion 2: Hello World!\nHistory: 2 commits`,
      solution: `# Simulating Version Control
class SimpleVersionControl:
    def __init__(self):
        self.commits = []
        self.current_content = ""
    
    def commit(self, content, message):
        self.commits.append({
            'version': len(self.commits) + 1,
            'content': content,
            'message': message
        })
        self.current_content = content
        print(f"Committed: {message}")
    
    def history(self):
        print(f"History: {len(self.commits)} commits")
        for commit in self.commits:
            print(f"  Version {commit['version']}: {commit['message']}")
    
    def revert(self, version):
        if version <= len(self.commits):
            self.current_content = self.commits[version-1]['content']
            print(f"Reverted to version {version}")

# Usage
vc = SimpleVersionControl()

# Version 1
vc.commit("Hello World", "Initial commit")
print(f"Version 1: {vc.current_content}")

# Version 2
vc.commit("Hello World!", "Added exclamation")
print(f"Version 2: {vc.current_content}")

# View history
vc.history()`,
      note: "In real Git: Use git init, git add, git commit, git log, git revert"
    },

    quiz: [
      { q: "Version Control?", options: ["Track changes", "Delete files", "Compile code", "None"], answer: 0 },
      { q: "Git type?", options: ["Distributed", "Centralized", "Both", "None"], answer: 0 },
      { q: "Work offline?", options: ["Yes", "No", "Sometimes", "Never"], answer: 0 },
      { q: "Commit?", options: ["Save point", "Delete", "Upload", "None"], answer: 0 },
      { q: "Branch?", options: ["Parallel version", "Delete", "Upload", "None"], answer: 0 },
      { q: "Git benefit?", options: ["All of above", "History", "Collaboration", "Backup"], answer: 0 },
      { q: "Store passwords?", options: ["No", "Yes", "Maybe", "Always"], answer: 0 },
      { q: "Industry standard?", options: ["Git", "SVN", "CVS", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "Version Control is a system that records changes to files over time, allowing you to recall specific versions later. It's essential for tracking modifications, collaborating safely, and maintaining a complete history of your project.

There are two main types: Centralized Version Control Systems (CVCS) like SVN, which use a single central server, and Distributed Version Control Systems (DVCS) like Git, where every developer has a full copy of the repository.

Git has become the industry standard due to its distributed nature, speed, offline capability, powerful branching and merging, and robust ecosystem with platforms like GitHub and GitLab. Key benefits include complete history tracking, safe experimentation through branching, effective collaboration, backup and recovery, code review capabilities, and CI/CD integration.

Version control is used in software development, data engineering for tracking ETL scripts and pipelines, documentation management, and configuration management. It's essential for any project involving code or text files, providing a safety net for mistakes and enabling teams to work together efficiently."
`,

    memory: `
👉 Version Control = Time machine ⏰
👉 Centralized = One server 🖥️
👉 Distributed = Full copies 📦
👉 Git = Industry standard 🏆
👉 Commit = Save point 💾
👉 Branch = Parallel version 🌿
👉 Offline = Yes with Git ✅
👉 Benefits = History + Collaboration + Safety 🎯
👉 Don't store = Binaries + Secrets 🚫
👉 Use for = Code + Docs + Configs 📝
`,

    revision: "Version Control = System tracking changes over time. Git = Distributed VCS with offline work, branching, and collaboration. Essential for development."
  },

  'git-basics': {
    title: "Git Basics (Getting Started with Git)",
    subtitle: "Install, configure, and start working with Git repositories",
    icon: "🚀",
    difficulty: "Beginner",
    duration: "~50 min",
    ready: true,

    topic: "Git Basics",
    aatma: {
      Architecture: {
        description: "Git Basics includes the initial setup and essential commands required to start working with version control. It allows developers to create or copy repositories and track their current status.",
        flow: "Install Git → Configure User → Create/Clone Repo → Check Status → Start Working",
        key_components: [
          "Git Installation",
          "Configuration (username, email)",
          "Repository (local copy)",
          "Commands (init, clone, status)"
        ]
      },

      Application: {
        description: "Used to set up Git on your system and begin working with repositories.",
        use_cases: [
          "Starting a new project",
          "Cloning existing project",
          "Tracking file changes",
          "Preparing for team collaboration"
        ],
        real_world_example: "A developer installs Git, sets their name/email, clones a project from GitHub, and starts working on features."
      },

      Tools_and_Techniques: {
        tools: [
          "Git CLI",
          "GitHub",
          "VS Code"
        ],
        subtopics: {
          "Install Git": "Download and install Git from official website. This allows you to use Git commands on your system.",
          "Git Config": "Set your identity using commands:\n git config --global user.name \"Your Name\"\n git config --global user.email \"your@email.com\"",
          "Initialize Repository (git init)": "Creates a new Git repository in your project folder to start tracking changes.",
          "Clone Repository (git clone)": "Copies an existing repository from remote (GitHub) to your local system.",
          "Git Status (git status)": "Shows current state of files (modified, staged, untracked) in your repository."
        }
      },

      Monitoring_and_Optimization: {
        description: "Ensuring correct setup and smooth usage of Git",
        methods: [
          "Always configure username and email",
          "Check status frequently",
          "Use clone instead of manual copy",
          "Keep repository organized"
        ]
      },

      Advanced_and_RealWorld: {
        description: "Git basics are the starting point for all advanced version control workflows",
        advanced_concepts: [
          "Working with multiple repositories",
          "Setting global vs local config",
          "Using SSH instead of HTTPS",
          "Integration with IDEs like VS Code"
        ],
        real_world_flow: "Install Git → Configure user → Clone project → Check status → Start development"
      }
    },

    comic: `
Imagine you're joining a new company 🏢

Day 1 - Getting Started:

😰 Without Git:
- Boss: "Copy project files from shared drive"
- You: Copy 5GB of files manually 📁
- Files are outdated ❌
- No idea what changed recently 🤷
- Start working, accidentally delete important file 😱
- No way to recover! 💥

🤔 With Git:
- Boss: "Clone the repository"
- You: git clone <url> ⚡
- Get complete project + full history in seconds! ✅
- See exactly what changed and when 📊
- Make mistakes? No problem, revert easily! 🔄
- Always in sync with team 👥

💡 Aha Moment:
Git Basics = Your entry ticket to professional development!

👉 Setup once → Use forever
👉 Clone once → Get everything
👉 Status anytime → Know what's happening

Like getting keys to your new office! 🔑
`,

    deepDive: `
👉 What are Git Basics?

Git Basics are the foundational steps to:
✔ Install Git on your system
✔ Configure your identity
✔ Create or copy repositories
✔ Track changes in your project
✔ Start version control workflow

Think of it as:
- Setting up your workspace
- Getting your tools ready
- Learning the essential commands
- Building foundation for advanced features

---

👉 Step 1: Installing Git

🔹 **What is Installation?**
Downloading and setting up Git software on your computer

🔹 **How to Install**

**Windows:**
1. Go to https://git-scm.com/download/win
2. Download installer
3. Run installer (use default settings)
4. Verify: Open Command Prompt, type:
   git --version

**macOS:**
Option 1 - Homebrew (recommended):
brew install git

Option 2 - Download from:
https://git-scm.com/download/mac

Verify:
git --version

**Linux (Ubuntu/Debian):**
sudo apt-get update
sudo apt-get install git

Verify:
git --version

🔹 **Expected Output:**
git version 2.40.0 (or similar)

If you see version number → Installation successful! ✅

---

👉 Step 2: Configuring Git

🔹 **Why Configure?**
Git needs to know who you are:
- Every commit records author name and email
- Helps track who made what changes
- Required for collaboration
- Shows up in Git history

🔹 **Essential Configuration**

**Set Your Name:**
git config --global user.name "Your Name"

Example:
git config --global user.name "Ankit Kumar"

**Set Your Email:**
git config --global user.email "your@email.com"

Example:
git config --global user.email "ankit@example.com"

**Verify Configuration:**
git config --list

Or check specific values:
git config user.name
git config user.email

🔹 **Global vs Local Config**

**Global (--global):**
- Applies to ALL repositories on your system
- Stored in ~/.gitconfig
- Use for personal identity

Example:
git config --global user.name "Ankit"

**Local (no flag):**
- Applies to CURRENT repository only
- Stored in .git/config
- Use for project-specific settings

Example:
cd my-project
git config user.email "work@company.com"

🔹 **Other Useful Configurations**

**Set Default Editor:**
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "vim"          # Vim

**Set Default Branch Name:**
git config --global init.defaultBranch main

**Enable Color Output:**
git config --global color.ui auto

---

👉 Step 3: Creating Repository (git init)

🔹 **What is git init?**
Initializes a new Git repository in your project folder

🔹 **When to Use**
✔ Starting a brand new project
✔ Adding version control to existing project
✔ Creating local repository

🔹 **How to Use**

**Step 1: Navigate to project folder**
cd /path/to/your/project

**Step 2: Initialize Git**
git init

**Output:**
Initialized empty Git repository in /path/to/your/project/.git/

**What Happened?**
- Created hidden .git folder
- This folder contains all Git data
- Your project is now a Git repository!

🔹 **Example Workflow**

# Create new project
mkdir my-awesome-project
cd my-awesome-project

# Initialize Git
git init

# Create first file
echo "# My Awesome Project" > README.md

# Check status
git status

🔹 **Important Notes**
- Only run git init ONCE per project
- Don't delete .git folder (loses all history)
- Can initialize in existing project with files

---

👉 Step 4: Cloning Repository (git clone)

🔹 **What is git clone?**
Copies an existing repository from remote server to your local machine

🔹 **When to Use**
✔ Joining existing project
✔ Contributing to open source
✔ Getting code from GitHub/GitLab
✔ Working on team projects

🔹 **How to Use**

**Basic Syntax:**
git clone <repository-url>

**Example - HTTPS:**
git clone https://github.com/username/project.git

**Example - SSH:**
git clone git@github.com:username/project.git

**Clone to Specific Folder:**
git clone <url> my-folder-name

🔹 **What Happens During Clone?**

1️⃣ Creates new folder with project name
2️⃣ Downloads all files
3️⃣ Downloads complete history
4️⃣ Sets up remote connection
5️⃣ Checks out default branch

**Output:**
Cloning into 'project'...
remote: Counting objects: 100, done.
remote: Compressing objects: 100% (80/80), done.
Receiving objects: 100% (100/100), done.

🔹 **Real-World Example**

# Clone a project from GitHub
git clone https://github.com/facebook/react.git

# Navigate into project
cd react

# Check status
git status

# Start working!

🔹 **HTTPS vs SSH**

**HTTPS:**
- Easier to set up
- Works everywhere
- Requires password each time (or token)

Example:
git clone https://github.com/user/repo.git

**SSH:**
- More secure
- No password needed (after setup)
- Requires SSH key configuration

Example:
git clone git@github.com:user/repo.git

---

👉 Step 5: Checking Status (git status)

🔹 **What is git status?**
Shows the current state of your repository

🔹 **What it Shows**
✔ Which branch you're on
✔ Untracked files (new files)
✔ Modified files (changed files)
✔ Staged files (ready to commit)
✔ Files to be committed

🔹 **How to Use**

git status

🔹 **Example Output**

On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes)
        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        new-feature.js

no changes added to commit (use "git add" and/or "git commit -a")

🔹 **Understanding the Output**

**On branch main:**
- Currently on 'main' branch

**Modified files:**
- Files that changed but not staged
- Red color in terminal

**Untracked files:**
- New files Git doesn't know about
- Not in version control yet

**Staged files:**
- Files ready to be committed
- Green color in terminal

🔹 **Common Scenarios**

**Scenario 1: Clean Working Directory**
git status

Output:
On branch main
nothing to commit, working tree clean

Meaning: No changes, everything committed ✅

**Scenario 2: New File Added**
touch new-file.txt
git status

Output:
Untracked files:
  new-file.txt

Meaning: Git sees new file but not tracking it yet

**Scenario 3: File Modified**
echo "changes" >> README.md
git status

Output:
Changes not staged for commit:
  modified: README.md

Meaning: File changed but not staged for commit

🔹 **Best Practices**
✔ Run git status frequently
✔ Before committing changes
✔ After making changes
✔ When unsure about repository state
✔ To see what needs to be committed

---

👉 Complete Workflow Example

**Scenario: Starting New Project**

# Step 1: Create project folder
mkdir my-data-pipeline
cd my-data-pipeline

# Step 2: Initialize Git
git init
Output: Initialized empty Git repository

# Step 3: Check status
git status
Output: On branch main, No commits yet

# Step 4: Create files
echo "# Data Pipeline Project" > README.md
touch pipeline.py

# Step 5: Check status again
git status
Output: Untracked files: README.md, pipeline.py

# Ready to start tracking changes!

**Scenario: Joining Existing Project**

# Step 1: Clone repository
git clone https://github.com/company/project.git

# Step 2: Navigate into project
cd project

# Step 3: Check status
git status
Output: On branch main, working tree clean

# Step 4: Start working
code .  # Open in VS Code

# Step 5: Make changes and check status
git status

---

👉 Common Issues and Solutions

🔹 **Issue 1: Git not recognized**
Error: 'git' is not recognized as internal or external command

Solution:
- Git not installed or not in PATH
- Reinstall Git
- Restart terminal/computer

🔹 **Issue 2: Permission denied (SSH)**
Error: Permission denied (publickey)

Solution:
- SSH key not set up
- Use HTTPS instead
- Or configure SSH keys

🔹 **Issue 3: Already a git repository**
Error: Reinitialized existing Git repository

Solution:
- Don't run git init in folder that already has .git
- Check for .git folder first

🔹 **Issue 4: Clone failed**
Error: Repository not found

Solution:
- Check URL is correct
- Check you have access permissions
- Try HTTPS if SSH fails

---

👉 Git Basics Checklist

✅ Install Git
✅ Configure username
✅ Configure email
✅ Verify configuration
✅ Know when to use git init
✅ Know when to use git clone
✅ Use git status frequently
✅ Understand repository structure

---

👉 Next Steps

After mastering Git Basics:
1️⃣ Learn staging and committing (git add, git commit)
2️⃣ Learn branching (git branch, git checkout)
3️⃣ Learn remote operations (git push, git pull)
4️⃣ Learn collaboration workflows

---

🎯 Interview Line:
"Git Basics involve installing Git, configuring user identity with username and email, and understanding fundamental commands. git init creates a new repository in an existing project folder, while git clone copies an existing repository from a remote server like GitHub. git status shows the current state of the repository, including modified, staged, and untracked files. Proper configuration is essential as every commit records the author's information. These basics form the foundation for all Git workflows, whether working solo or in teams."
`,

    types: `
🚀 Git Commands:

📥 git init:
- Creates new repository
- Use for new projects
- Initializes .git folder

📦 git clone:
- Copies existing repository
- Downloads full history
- Use for joining projects

📊 git status:
- Shows current state
- Lists modified files
- Shows staged changes
- Use frequently

⚙️ git config:
- Sets user identity
- Global or local settings
- Required for commits

🔧 Installation:
- Windows: Download installer
- macOS: Homebrew or download
- Linux: apt-get install
`,

    qa: [
      {
        q: "What is the first step to use Git?",
        hint: "Think setup",
        options: ["Create files", "Install Git on your system", "Push to GitHub", "Create branch"],
        answer: "Install Git on your system",
        explanation: `Installation Steps:\n1. Download Git from git-scm.com\n2. Install on your system\n3. Verify: git --version\n\nWithout installation, you can't use Git commands!`,
        memory: "First step = Install Git 📥"
      },
      {
        q: "Why configure username and email?",
        hint: "Think commits",
        options: ["For fun", "Every commit records author information", "To delete files", "To speed up Git"],
        answer: "Every commit records author information",
        explanation: `Configuration Purpose:\n✔ Tracks who made changes\n✔ Shows in commit history\n✔ Required for collaboration\n✔ Accountability\n\nCommands:\ngit config --global user.name \"Name\"\ngit config --global user.email \"email\"`,
        memory: "Config = Identity for commits 👤"
      },
      {
        q: "What does git init do?",
        hint: "Think new project",
        options: ["Deletes repository", "Creates new Git repository", "Clones repository", "Shows status"],
        answer: "Creates new Git repository",
        explanation: `git init:\n✔ Initializes new repository\n✔ Creates .git folder\n✔ Starts version control\n✔ Use for NEW projects\n\nExample:\nmkdir my-project\ncd my-project\ngit init`,
        memory: "git init = New repository 🆕"
      },
      {
        q: "What does git clone do?",
        hint: "Think copy",
        options: ["Creates new repo", "Copies existing repository from remote", "Deletes files", "Shows status"],
        answer: "Copies existing repository from remote",
        explanation: `git clone:\n✔ Copies remote repository\n✔ Downloads full history\n✔ Sets up remote connection\n✔ Use for EXISTING projects\n\nExample:\ngit clone https://github.com/user/repo.git`,
        memory: "git clone = Copy remote repo 📦"
      },
      {
        q: "Difference between git init and git clone?",
        hint: "Think new vs existing",
        options: ["Same thing", "init = new project, clone = copy existing", "init is faster", "clone is older"],
        answer: "init = new project, clone = copy existing",
        explanation: `git init:\n- Start NEW project\n- Create repository locally\n\ngit clone:\n- Join EXISTING project\n- Copy from remote (GitHub)\n\nUse init for your projects, clone for others!`,
        memory: "init = New, clone = Copy 🔄"
      },
      {
        q: "What does git status show?",
        hint: "Think current state",
        options: ["Git version", "Current state of repository and files", "User configuration", "Remote URL"],
        answer: "Current state of repository and files",
        explanation: `git status shows:\n✔ Current branch\n✔ Modified files\n✔ Staged files\n✔ Untracked files\n✔ What needs to be committed\n\nUse frequently to know what's happening!`,
        memory: "git status = Current state 📊"
      },
      {
        q: "How often should you run git status?",
        hint: "Think best practice",
        options: ["Never", "Frequently, before and after changes", "Once a day", "Only when errors occur"],
        answer: "Frequently, before and after changes",
        explanation: `Run git status:\n✔ Before committing\n✔ After making changes\n✔ When unsure about state\n✔ To see what needs staging\n\nIt's free and instant - use it often!`,
        memory: "git status = Use frequently ✅"
      },
      {
        q: "What is the .git folder?",
        hint: "Think repository data",
        options: ["Temporary files", "Contains all Git repository data and history", "User settings", "Backup folder"],
        answer: "Contains all Git repository data and history",
        explanation: `.git folder:\n✔ Created by git init\n✔ Stores all commits\n✔ Stores all history\n✔ Stores configuration\n\n⚠️ Never delete this folder!\nDeleting = Losing all history`,
        memory: ".git = Repository brain 🧠"
      },
      {
        q: "Can you use Git without GitHub?",
        hint: "Think local vs remote",
        options: ["No, GitHub required", "Yes, Git works locally without GitHub", "Only for small projects", "Only with internet"],
        answer: "Yes, Git works locally without GitHub",
        explanation: `Git vs GitHub:\n\nGit:\n- Version control tool\n- Works locally\n- No internet needed\n\nGitHub:\n- Hosting platform\n- Stores remote copies\n- Enables collaboration\n\nGit ≠ GitHub!`,
        memory: "Git = Local tool, GitHub = Remote hosting 🌐"
      }
    ],

    coding: {
      title: "Git Basics Workflow",
      scenario: "Simulate Git initialization and status checking",
      thinkingApproach: [
        "Step 1: Initialize repository",
        "Step 2: Configure user",
        "Step 3: Create files",
        "Step 4: Check status",
        "Step 5: Understand output",
        "Step 6: Track changes"
      ],
      question: "Simulate basic Git workflow",
      input: `project_name = "my-project"`,
      expectedOutput: `Initialized repository\nConfigured user\nCreated file: README.md\nStatus: 1 untracked file`,
      solution: `# Simulating Git Basics
class GitRepository:
    def __init__(self, name):
        self.name = name
        self.initialized = False
        self.user_name = None
        self.user_email = None
        self.files = []
        self.tracked_files = []
    
    def init(self):
        self.initialized = True
        print(f"Initialized repository: {self.name}")
    
    def config(self, name, email):
        self.user_name = name
        self.user_email = email
        print(f"Configured user: {name} <{email}>")
    
    def create_file(self, filename):
        self.files.append(filename)
        print(f"Created file: {filename}")
    
    def status(self):
        untracked = [f for f in self.files if f not in self.tracked_files]
        print(f"Status: {len(untracked)} untracked file(s)")
        for f in untracked:
            print(f"  - {f}")

# Usage
repo = GitRepository("my-project")

# Initialize
repo.init()

# Configure
repo.config("Ankit Kumar", "ankit@example.com")

# Create file
repo.create_file("README.md")

# Check status
repo.status()`,
      note: "In real Git: Use git init, git config, touch file, git status"
    },

    quiz: [
      { q: "First step?", options: ["Install Git", "Create files", "Push code", "None"], answer: 0 },
      { q: "Configure?", options: ["Username+Email", "Password", "GitHub", "None"], answer: 0 },
      { q: "git init?", options: ["New repo", "Clone", "Delete", "None"], answer: 0 },
      { q: "git clone?", options: ["Copy remote", "New repo", "Delete", "None"], answer: 0 },
      { q: "git status?", options: ["Current state", "Delete", "Push", "None"], answer: 0 },
      { q: ".git folder?", options: ["Repository data", "Temp files", "Backup", "None"], answer: 0 },
      { q: "Use status?", options: ["Frequently", "Never", "Once", "Rarely"], answer: 0 },
      { q: "Git = GitHub?", options: ["No", "Yes", "Maybe", "Always"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "Git Basics are the foundational steps to start using version control. First, you install Git on your system and verify with 'git --version'. Then, configure your identity using 'git config --global user.name' and 'git config --global user.email', which is essential as every commit records author information.

There are two ways to start working with a repository: 'git init' creates a new repository in your current folder, initializing a .git directory that stores all version control data. This is used when starting a new project. 'git clone <url>' copies an existing repository from a remote server like GitHub, downloading the complete project history and setting up remote connections. This is used when joining existing projects.

'git status' is one of the most frequently used commands, showing the current state of your repository including which branch you're on, modified files, staged changes, and untracked files. It's a safe command that only reads information and should be used frequently to understand your repository's state.

These basics form the foundation for all Git workflows. Understanding the difference between Git (the version control tool) and GitHub (the hosting platform) is important - Git works completely locally without requiring GitHub or internet connection."
`,

    memory: `
👉 Install Git = First step 📥
👉 Config = Identity for commits 👤
👉 git init = New repository 🆕
👉 git clone = Copy remote 📦
👉 git status = Current state 📊
👉 .git folder = Repository brain 🧠
👉 Use status = Frequently ✅
👉 Git ≠ GitHub 🌐
👉 init vs clone = New vs Copy 🔄
👉 Configuration = Required ⚙️
`,

    revision: "Git Basics = Install → Configure (name/email) → init (new) or clone (existing) → status (check state). Foundation for all Git workflows."
  },

  'git-workflow-core': {
    title: "Git Workflow (Core) - The Complete Journey of Code",
    subtitle: "Understanding how code moves from your system to the team",
    icon: "🔄",
    difficulty: "Beginner",
    duration: "~55 min",
    ready: true,

    topic: "Git Workflow (Core)",
    aatma: {
      Architecture: {
        description: "Git Workflow defines how code moves from your system to the shared repository. It consists of different stages where changes are tracked, saved, and shared.",
        flow: "Working Directory → Staging Area → Local Repository → Remote Repository",
        key_components: [
          "Working Directory (where you write code)",
          "Staging Area (prepare changes)",
          "Local Repository (save changes)",
          "Remote Repository (share with team)"
        ]
      },

      Application: {
        description: "Used to manage how code changes are saved and shared in a structured way.",
        use_cases: [
          "Tracking file changes step-by-step",
          "Saving versions of code",
          "Collaborating with teams",
          "Deploying code to production"
        ],
        real_world_example: "A developer writes code → stages it → commits it → pushes it to GitHub so team members can access it."
      },

      Tools_and_Techniques: {
        tools: [
          "Git CLI",
          "GitHub",
          "VS Code"
        ],
        subtopics: {
          "Working Directory": "This is your local project folder where you create and modify files.",
          "Staging Area": "A temporary area where you prepare changes before saving them permanently.",
          "Local Repository": "Stores committed changes on your system with full history.",
          "Remote Repository": "A shared repository (like GitHub) where code is stored and accessed by team members.",
          "Flow (add → commit → push)": {
            "git add": "Moves changes from Working Directory to Staging Area.",
            "git commit": "Saves changes in Local Repository with a message.",
            "git push": "Uploads changes from Local Repository to Remote Repository."
          }
        }
      },

      Monitoring_and_Optimization: {
        description: "Ensuring smooth workflow and avoiding mistakes",
        methods: [
          "Use git status to track changes",
          "Commit frequently with meaningful messages",
          "Push regularly to avoid data loss",
          "Avoid skipping staging step"
        ]
      },

      Advanced_and_RealWorld: {
        description: "This workflow is used in all real-world development environments",
        advanced_concepts: [
          "Branch-based workflow",
          "Pull requests for collaboration",
          "CI/CD pipeline integration",
          "Automated deployments"
        ],
        real_world_flow: "Write Code → Add Changes → Commit Version → Push to GitHub → Team Review → Deploy"
      }
    },

    comic: `
Imagine you're writing a book 📖

Old way (No stages):
- Write chapter directly in final book ✍️
- Make mistake? Book is ruined! 😱
- Want to share? Photocopy entire book 📚
- No drafts, no review, no safety net ❌

🤔 Better way: Git Workflow

📝 Stage 1: Working Directory (Your Desk)
- Write on loose papers
- Make changes freely
- Experiment without fear
- Not permanent yet

📋 Stage 2: Staging Area (Review Table)
- Select which papers to keep
- Organize them
- Review before finalizing
- Can still make changes

💾 Stage 3: Local Repository (Your Safe)
- Lock finalized chapters in safe
- Create permanent record
- Can access anytime
- Your personal backup

☁️ Stage 4: Remote Repository (Publisher)
- Send to publisher (GitHub)
- Team can access
- Shared with world
- Professional backup

💡 Aha Moment:
Git Workflow = Multiple safety checkpoints!

👉 Working Directory = Draft
👉 Staging Area = Review
👉 Local Repo = Personal save
👉 Remote Repo = Team share

Each stage gives you control and safety! 🎯
`,

    deepDive: `
👉 What is Git Workflow?

Git Workflow is the process of moving code through different stages:
✔ Write code in Working Directory
✔ Stage changes in Staging Area
✔ Commit to Local Repository
✔ Push to Remote Repository

Think of it as:
- Assembly line for code
- Quality checkpoints
- Structured process
- Safety at each stage

---

👉 The Four Stages

🔹 **Stage 1: Working Directory**

What is it?
- Your project folder
- Where you write and edit code
- Files on your computer
- Not tracked by Git yet

Example:
/my-project/
  index.html
  style.css
  script.js

Characteristics:
✔ Temporary workspace
✔ Can modify freely
✔ Changes not saved in Git
✔ Can be lost if not staged

Real-world analogy:
- Your desk where you work
- Draft papers
- Work in progress

---

🔹 **Stage 2: Staging Area (Index)**

What is it?
- Temporary holding area
- Prepares changes for commit
- Like a shopping cart
- Review before finalizing

Why needed?
✔ Select specific changes
✔ Review before committing
✔ Organize related changes
✔ Flexibility in what to save

Example:
Modified 5 files, but only want to commit 3:
- Stage only those 3 files
- Leave others for later
- Commit staged files

Real-world analogy:
- Shopping cart before checkout
- Review table before filing
- Draft before final submission

---

🔹 **Stage 3: Local Repository**

What is it?
- Permanent storage on your computer
- Contains all commits
- Full project history
- Stored in .git folder

Characteristics:
✔ Permanent record
✔ Complete history
✔ Can revert to any commit
✔ Works offline

Real-world analogy:
- Your personal safe
- Filing cabinet
- Local backup

---

🔹 **Stage 4: Remote Repository**

What is it?
- Repository on server (GitHub, GitLab)
- Shared with team
- Cloud backup
- Collaboration hub

Characteristics:
✔ Accessible by team
✔ Cloud backup
✔ Enables collaboration
✔ Source of truth

Real-world analogy:
- Company server
- Shared drive
- Cloud storage

---

👉 The Complete Flow

**Visual Flow:**

Working Directory → [git add] → Staging Area → [git commit] → Local Repo → [git push] → Remote Repo

**Step-by-Step:**

1️⃣ **Write Code** (Working Directory)
# Create or modify file
echo "Hello World" > index.html

2️⃣ **Check Status**
git status
Output: Untracked files: index.html

3️⃣ **Stage Changes** (Working → Staging)
git add index.html

4️⃣ **Check Status Again**
git status
Output: Changes to be committed: index.html

5️⃣ **Commit** (Staging → Local Repo)
git commit -m "Add homepage"

6️⃣ **Push** (Local → Remote)
git push origin main

---

👉 Command: git add

**Purpose:**
Move changes from Working Directory to Staging Area

**Syntax:**

# Add specific file
git add filename.txt

# Add multiple files
git add file1.txt file2.txt

# Add all files in directory
git add .

# Add all modified files
git add -A

# Add files by pattern
git add *.js

**What it does:**
✔ Marks files for commit
✔ Prepares changes
✔ Doesn't save permanently yet
✔ Can be undone

**Example:**

# Modify file
echo "New content" >> README.md

# Check status
git status
Output: modified: README.md (red)

# Stage file
git add README.md

# Check status again
git status
Output: modified: README.md (green)

**Best Practices:**
✔ Stage related changes together
✔ Review before staging
✔ Use git add . carefully
✔ Check git status after staging

---

👉 Command: git commit

**Purpose:**
Save staged changes permanently in Local Repository

**Syntax:**

# Commit with message
git commit -m "Your commit message"

# Commit with detailed message
git commit -m "Title" -m "Detailed description"

# Commit all tracked files (skip staging)
git commit -a -m "Message"

# Open editor for message
git commit

**What it does:**
✔ Creates permanent snapshot
✔ Records author and timestamp
✔ Generates unique commit ID
✔ Saves to local history

**Commit Message Best Practices:**

✅ Good commit messages:
- "Add user login feature"
- "Fix bug in payment processing"
- "Update README with installation steps"
- "Refactor database connection code"

❌ Bad commit messages:
- "Update"
- "Fix"
- "Changes"
- "asdfgh"

**Format:**
- Present tense: "Add feature" not "Added feature"
- Imperative mood: "Fix bug" not "Fixes bug"
- Clear and descriptive
- Under 50 characters for title

**Example:**

# Stage files
git add login.js auth.js

# Commit with message
git commit -m "Add user authentication system"

Output:
[main abc1234] Add user authentication system
 2 files changed, 45 insertions(+)

**Viewing Commits:**

# View commit history
git log

# View compact history
git log --oneline

# View last 5 commits
git log -5

---

👉 Command: git push

**Purpose:**
Upload commits from Local Repository to Remote Repository

**Syntax:**

# Push to default remote and branch
git push

# Push to specific remote and branch
git push origin main

# Push and set upstream
git push -u origin main

# Force push (dangerous!)
git push -f origin main

**What it does:**
✔ Uploads local commits
✔ Updates remote repository
✔ Makes code available to team
✔ Creates backup in cloud

**First Time Push:**

# Set upstream branch
git push -u origin main

# After that, just use
git push

**Example:**

# Make changes
echo "Update" >> README.md

# Stage
git add README.md

# Commit
git commit -m "Update README"

# Push
git push origin main

Output:
Counting objects: 3, done.
Writing objects: 100% (3/3), 280 bytes | 280.00 KiB/s, done.
To https://github.com/user/repo.git
   abc1234..def5678  main -> main

**Common Issues:**

**Issue 1: Rejected push**
Error: Updates were rejected

Solution:
# Pull first, then push
git pull origin main
git push origin main

**Issue 2: No upstream branch**
Error: No upstream branch

Solution:
git push -u origin main

---

👉 Complete Workflow Example

**Scenario: Adding New Feature**

# Step 1: Check current status
git status
Output: On branch main, working tree clean

# Step 2: Create new file
echo "function login() {}" > login.js

# Step 3: Check status
git status
Output: Untracked files: login.js (red)

# Step 4: Stage file
git add login.js

# Step 5: Check status
git status
Output: Changes to be committed: login.js (green)

# Step 6: Commit
git commit -m "Add login functionality"
Output: [main abc1234] Add login functionality

# Step 7: Push to remote
git push origin main
Output: Successfully pushed

# Step 8: Verify
git status
Output: Your branch is up to date

---

👉 Understanding Each Stage with Status

**Stage 1: Untracked (Working Directory)**

# Create file
touch newfile.txt

git status
Output:
Untracked files:
  newfile.txt

Meaning: Git sees file but not tracking it

**Stage 2: Staged (Staging Area)**

git add newfile.txt

git status
Output:
Changes to be committed:
  new file: newfile.txt

Meaning: File ready to be committed

**Stage 3: Committed (Local Repository)**

git commit -m "Add new file"

git status
Output:
Your branch is ahead of 'origin/main' by 1 commit

Meaning: Saved locally, not pushed yet

**Stage 4: Pushed (Remote Repository)**

git push origin main

git status
Output:
Your branch is up to date with 'origin/main'

Meaning: Synced with remote

---

👉 Common Workflow Patterns

**Pattern 1: Single File Change**

git add file.txt
git commit -m "Update file"
git push

**Pattern 2: Multiple Files**

git add file1.txt file2.txt file3.txt
git commit -m "Update multiple files"
git push

**Pattern 3: All Changes**

git add .
git commit -m "Update all files"
git push

**Pattern 4: Quick Commit (tracked files only)**

git commit -am "Quick update"
git push

---

👉 Best Practices

1️⃣ **Commit Often**
✔ Small, focused commits
✔ Easier to track changes
✔ Easier to revert if needed

2️⃣ **Write Clear Messages**
✔ Describe what and why
✔ Use present tense
✔ Be specific

3️⃣ **Review Before Committing**
✔ Use git status
✔ Use git diff
✔ Check what's staged

4️⃣ **Push Regularly**
✔ Backup your work
✔ Share with team
✔ Avoid conflicts

5️⃣ **Don't Commit**
❌ Passwords or secrets
❌ Large binary files
❌ Generated files
❌ Dependencies (node_modules)

---

👉 Workflow Checklist

✅ Write code in Working Directory
✅ Check status (git status)
✅ Stage changes (git add)
✅ Review staged changes (git status)
✅ Commit with message (git commit -m)
✅ Push to remote (git push)
✅ Verify (git status)

---

🎯 Interview Line:
"Git workflow consists of four stages: Working Directory where code is written, Staging Area where changes are prepared using 'git add', Local Repository where changes are permanently saved using 'git commit', and Remote Repository where code is shared using 'git push'. This staged approach provides multiple checkpoints for review and organization. The staging area is particularly important as it allows selective commits - you can stage only specific changes while leaving others for later. Each commit should have a clear, descriptive message in present tense. Regular commits and pushes ensure work is backed up and shared with the team. Understanding this workflow is fundamental to effective version control and collaboration."
`,

    types: `
🔄 Git Workflow Stages:

📁 Working Directory:
- Your project folder
- Where you write code
- Changes not tracked yet
- Temporary workspace

📋 Staging Area:
- Prepare changes
- Review before commit
- Select what to save
- Temporary holding

💾 Local Repository:
- Permanent local storage
- Full history
- Offline access
- Personal backup

☁️ Remote Repository:
- Cloud storage (GitHub)
- Team collaboration
- Shared access
- Professional backup

⚡ Commands:
- git add → Stage changes
- git commit → Save locally
- git push → Upload to remote
- git status → Check state
`,

    qa: [
      {
        q: "What are the four stages of Git workflow?",
        hint: "Think progression",
        options: ["Only one stage", "Working Directory → Staging → Local Repo → Remote Repo", "Two stages", "Random stages"],
        answer: "Working Directory → Staging → Local Repo → Remote Repo",
        explanation: `Four Stages:\n1️⃣ Working Directory (write code)\n2️⃣ Staging Area (prepare changes)\n3️⃣ Local Repository (save locally)\n4️⃣ Remote Repository (share with team)\n\nEach stage has a purpose!`,
        memory: "4 Stages: Work → Stage → Commit → Push 🔄"
      },
      {
        q: "What does git add do?",
        hint: "Think staging",
        options: ["Deletes files", "Moves changes from Working Directory to Staging Area", "Pushes to remote", "Creates repository"],
        answer: "Moves changes from Working Directory to Staging Area",
        explanation: `git add:\n✔ Stages changes\n✔ Prepares for commit\n✔ Marks files to be saved\n✔ Doesn't save permanently yet\n\nExample:\ngit add file.txt`,
        memory: "git add = Stage changes 📋"
      },
      {
        q: "What does git commit do?",
        hint: "Think save",
        options: ["Stages files", "Saves changes permanently in Local Repository", "Pushes to remote", "Deletes files"],
        answer: "Saves changes permanently in Local Repository",
        explanation: `git commit:\n✔ Saves staged changes\n✔ Creates permanent snapshot\n✔ Records in local history\n✔ Requires commit message\n\nExample:\ngit commit -m \"Add feature\"`,
        memory: "git commit = Save locally 💾"
      },
      {
        q: "What does git push do?",
        hint: "Think upload",
        options: ["Stages files", "Commits changes", "Uploads commits from Local to Remote Repository", "Deletes files"],
        answer: "Uploads commits from Local to Remote Repository",
        explanation: `git push:\n✔ Uploads local commits\n✔ Updates remote repository\n✔ Shares with team\n✔ Creates cloud backup\n\nExample:\ngit push origin main`,
        memory: "git push = Upload to remote ☁️"
      },
      {
        q: "Why is Staging Area needed?",
        hint: "Think review",
        options: ["Not needed", "To review and select specific changes before committing", "To delete files", "To push faster"],
        answer: "To review and select specific changes before committing",
        explanation: `Staging Area benefits:\n✔ Review before committing\n✔ Select specific changes\n✔ Organize related changes\n✔ Flexibility in what to save\n\nLike a shopping cart before checkout!`,
        memory: "Staging = Review before save 📋"
      },
      {
        q: "What is a good commit message?",
        hint: "Think clear and descriptive",
        options: ["'Update'", "'Add user login feature'", "'asdfgh'", "'Changes'"],
        answer: "'Add user login feature'",
        explanation: `Good commit messages:\n✔ Clear and descriptive\n✔ Present tense\n✔ Explain what changed\n✔ Under 50 characters\n\n✅ \"Add user login feature\"\n❌ \"Update\"`,
        memory: "Commit message = Clear + Descriptive 📝"
      },
      {
        q: "What is the correct order of commands?",
        hint: "Think workflow",
        options: ["push → add → commit", "add → commit → push", "commit → add → push", "add → push → commit"],
        answer: "add → commit → push",
        explanation: `Correct order:\n1️⃣ git add (stage)\n2️⃣ git commit (save locally)\n3️⃣ git push (upload to remote)\n\nRemember: Stage → Save → Share`,
        memory: "Order: add → commit → push ➡️"
      },
      {
        q: "Can you commit without staging?",
        hint: "Think git commit -a",
        options: ["No, never", "Yes, using git commit -a for tracked files", "Yes, always", "Only on Mondays"],
        answer: "Yes, using git commit -a for tracked files",
        explanation: `git commit -a:\n✔ Commits all tracked files\n✔ Skips staging step\n✔ Only works for modified files\n✔ Not for new files\n\nBut staging is recommended for control!`,
        memory: "commit -a = Skip staging (tracked only) ⚡"
      },
      {
        q: "What should you check before committing?",
        hint: "Think status",
        options: ["Nothing", "Use git status to see what's staged", "Weather forecast", "Stock prices"],
        answer: "Use git status to see what's staged",
        explanation: `Before committing:\n✔ Run git status\n✔ Check staged files\n✔ Review changes\n✔ Ensure correct files staged\n\nAlways verify before committing!`,
        memory: "Before commit = Check status ✅"
      }
    ],

    coding: {
      title: "Git Workflow Simulation",
      scenario: "Simulate complete Git workflow from working directory to remote",
      thinkingApproach: [
        "Step 1: Modify files in working directory",
        "Step 2: Stage changes",
        "Step 3: Commit with message",
        "Step 4: Push to remote",
        "Step 5: Track state at each stage",
        "Step 6: Verify completion"
      ],
      question: "Simulate Git workflow stages",
      input: `file = "index.html", content = "<h1>Hello</h1>"`,
      expectedOutput: `Working: 1 file modified\nStaged: 1 file\nCommitted: 1 commit\nPushed: Success`,
      solution: `# Simulating Git Workflow
class GitWorkflow:
    def __init__(self):
        self.working_dir = []
        self.staging_area = []
        self.local_repo = []
        self.remote_repo = []
    
    def modify_file(self, filename, content):
        self.working_dir.append({'file': filename, 'content': content})
        print(f"Working: {len(self.working_dir)} file modified")
    
    def add(self, filename):
        for file in self.working_dir:
            if file['file'] == filename:
                self.staging_area.append(file)
                print(f"Staged: {len(self.staging_area)} file")
                break
    
    def commit(self, message):
        commit = {
            'files': self.staging_area.copy(),
            'message': message
        }
        self.local_repo.append(commit)
        self.staging_area.clear()
        print(f"Committed: {len(self.local_repo)} commit")
    
    def push(self):
        self.remote_repo.extend(self.local_repo)
        self.local_repo.clear()
        print("Pushed: Success")

# Usage
git = GitWorkflow()

# Stage 1: Working Directory
git.modify_file("index.html", "<h1>Hello</h1>")

# Stage 2: Staging Area
git.add("index.html")

# Stage 3: Local Repository
git.commit("Add homepage")

# Stage 4: Remote Repository
git.push()`,
      note: "In real Git: Use git add, git commit -m, git push origin main"
    },

    quiz: [
      { q: "Stages?", options: ["4 stages", "1 stage", "2 stages", "None"], answer: 0 },
      { q: "git add?", options: ["Stage", "Commit", "Push", "None"], answer: 0 },
      { q: "git commit?", options: ["Save locally", "Stage", "Push", "None"], answer: 0 },
      { q: "git push?", options: ["Upload remote", "Stage", "Commit", "None"], answer: 0 },
      { q: "Order?", options: ["add→commit→push", "push→add→commit", "commit→push→add", "None"], answer: 0 },
      { q: "Staging needed?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 },
      { q: "Good message?", options: ["Descriptive", "'Update'", "'asdf'", "None"], answer: 0 },
      { q: "Check before commit?", options: ["git status", "Nothing", "Weather", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "Git workflow consists of four distinct stages that code passes through. First, the Working Directory is where developers write and modify code - these changes are not yet tracked by Git. Second, the Staging Area (or Index) is where changes are prepared for commit using 'git add'. This intermediate stage allows developers to selectively choose which changes to include in the next commit, providing flexibility and organization.

Third, the Local Repository stores committed changes permanently on the developer's machine using 'git commit'. Each commit creates a snapshot with a unique ID, author information, timestamp, and commit message. The commit message should be clear and descriptive, written in present tense, explaining what changed and why.

Fourth, the Remote Repository (like GitHub) is where code is shared with the team using 'git push'. This provides cloud backup and enables collaboration.

The complete workflow is: write code → git add (stage) → git commit (save locally) → git push (upload to remote). The staging area is crucial as it allows reviewing changes before committing and enables committing related changes together while leaving unrelated changes for separate commits. Best practices include committing frequently with clear messages, pushing regularly for backup, and always checking 'git status' before committing to verify what's being saved."
`,

    memory: `
👉 4 Stages: Work → Stage → Commit → Push 🔄
👉 git add = Stage changes 📋
👉 git commit = Save locally 💾
👉 git push = Upload remote ☁️
👉 Staging = Review before save 📋
👉 Order: add → commit → push ➡️
👉 Commit message = Clear + Descriptive 📝
👉 Check status = Before commit ✅
👉 Working Dir = Draft 📝
👉 Remote Repo = Team share 👥
`,

    revision: "Git Workflow = Working Directory → Staging (git add) → Local Repo (git commit) → Remote Repo (git push). Four stages with checkpoints for review and organization."
  },

  'git-basic-commands': {
    title: "Git Basic Commands (Essential Commands for Daily Work)",
    subtitle: "Master the core Git commands used in everyday development",
    icon: "⚙️",
    difficulty: "Beginner",
    duration: "~60 min",
    ready: true,

    topic: "Git Basic Commands",
    aatma: {
      Architecture: {
        description: "Git basic commands are used to manage code changes, track history, and synchronize with remote repositories.",
        flow: "Write Code → Add → Commit → Push/Pull → Track Changes",
        key_components: [
          "Staging Commands",
          "Commit Commands",
          "Sync Commands",
          "History Commands"
        ]
      },

      Application: {
        description: "Used to perform daily Git operations like saving changes, updating code, and checking history.",
        use_cases: [
          "Saving code changes",
          "Uploading code to GitHub",
          "Fetching latest updates",
          "Debugging using history"
        ],
        real_world_example: "A developer writes code, stages changes, commits with a message, pushes to GitHub, and pulls latest updates from team."
      },

      Tools_and_Techniques: {
        tools: [
          "Git CLI",
          "GitHub",
          "VS Code"
        ],
        subtopics: {
          "git add": "Adds changes from Working Directory to Staging Area. Example: git add file.txt",
          "git commit": "Saves staged changes into Local Repository with a message. Example: git commit -m \"added feature\"",
          "git push": "Uploads committed changes from Local Repository to Remote Repository.",
          "git pull": "Fetches and merges latest changes from Remote Repository to Local Repository.",
          "git fetch": "Fetches latest changes from remote but does not merge them automatically.",
          "git log": "Shows history of commits including author, date, and message.",
          "git diff": "Shows difference between file changes (before and after).",
          "git show": "Displays detailed information about a specific commit."
        }
      },

      Monitoring_and_Optimization: {
        description: "Ensuring effective usage of Git commands",
        methods: [
          "Use git status before add/commit",
          "Write clear commit messages",
          "Use fetch before pull if needed",
          "Check differences before committing",
          "Review logs for debugging"
        ]
      },

      Advanced_and_RealWorld: {
        description: "These commands are used daily in real development workflows",
        advanced_concepts: [
          "Combining commands efficiently",
          "Debugging using git log and show",
          "Safe updates using fetch + merge",
          "Integration with CI/CD pipelines"
        ],
        real_world_flow: "Write Code → git add → git commit → git push → git pull (team updates) → Debug using log/diff"
      }
    },

    comic: `
Imagine you're a chef managing recipes 👨‍🍳

Old way (No commands):
- Write recipe on paper ✍️
- Lose track of changes 😰
- Can't share with team ❌
- No history of modifications 🤷
- Chaos in the kitchen! 🔥

🤔 With Git Commands:

📝 git add (Prepare ingredients)
- Select which recipes to save
- Review before finalizing
- Organize your changes

💾 git commit (Save recipe version)
- Lock in the recipe
- Add description of changes
- Create permanent record

📤 git push (Share with team)
- Upload to shared cookbook
- Team can access instantly
- Everyone stays in sync

📥 git pull (Get team updates)
- Download latest recipes
- See what others added
- Stay up to date

📚 git log (Recipe history)
- See all past versions
- Track who changed what
- Debug recipe problems

🔍 git diff (Compare versions)
- See exact changes
- Before vs after
- Spot mistakes easily

💡 Aha Moment:
Git commands = Your kitchen management system!

👉 Each command has a specific job
👉 Use them together for smooth workflow
👉 Master these = Master Git!
`,

    deepDive: `
👉 Git Basic Commands Overview

Git commands are organized into categories:
✔ Staging commands (git add)
✔ Commit commands (git commit)
✔ Sync commands (git push, git pull, git fetch)
✔ History commands (git log, git diff, git show)

Think of them as:
- Tools in your toolbox
- Each has specific purpose
- Used together for complete workflow
- Essential for daily development

---

👉 Command 1: git add

**Purpose:**
Stage changes for commit

**Syntax:**

# Add specific file
git add filename.txt

# Add multiple files
git add file1.txt file2.txt file3.txt

# Add all files in current directory
git add .

# Add all changes (including deletions)
git add -A

# Add all modified files (not new files)
git add -u

# Add files by pattern
git add *.js
git add src/*.py

# Interactive staging
git add -p

**What it does:**
✔ Moves changes to staging area
✔ Prepares files for commit
✔ Doesn't save permanently yet
✔ Can be undone

**Examples:**

# Add single file
git add index.html

# Add all JavaScript files
git add *.js

# Add everything
git add .

**Best Practices:**
✔ Review changes before adding
✔ Add related changes together
✔ Use git status to verify
✔ Be careful with git add .

---

👉 Command 2: git commit

**Purpose:**
Save staged changes permanently

**Syntax:**

# Commit with message
git commit -m "Your message"

# Commit with detailed message
git commit -m "Title" -m "Description"

# Commit all tracked files (skip staging)
git commit -a -m "Message"

# Commit and amend previous commit
git commit --amend -m "Updated message"

# Open editor for message
git commit

**What it does:**
✔ Creates permanent snapshot
✔ Records author and timestamp
✔ Generates unique commit ID
✔ Saves to local repository

**Commit Message Guidelines:**

✅ Good messages:
- "Add user authentication"
- "Fix login bug"
- "Update README documentation"
- "Refactor database queries"

❌ Bad messages:
- "Update"
- "Fix"
- "Changes"
- "asdf"

**Format:**
- Present tense: "Add" not "Added"
- Imperative: "Fix" not "Fixes"
- Clear and specific
- Under 50 characters

**Examples:**

# Simple commit
git commit -m "Add login page"

# Detailed commit
git commit -m "Add login page" -m "Includes form validation and error handling"

# Commit all tracked files
git commit -am "Update all files"

---

👉 Command 3: git push

**Purpose:**
Upload local commits to remote repository

**Syntax:**

# Push to default remote and branch
git push

# Push to specific remote and branch
git push origin main

# Push and set upstream
git push -u origin main

# Push all branches
git push --all

# Push tags
git push --tags

# Force push (dangerous!)
git push -f origin main

**What it does:**
✔ Uploads local commits
✔ Updates remote repository
✔ Makes code available to team
✔ Creates cloud backup

**Examples:**

# First time push
git push -u origin main

# Regular push
git push

# Push specific branch
git push origin feature-branch

**Common Issues:**

**Issue: Rejected push**
Error: Updates were rejected

Solution:
git pull origin main
git push origin main

**Issue: No upstream branch**
Error: No upstream branch

Solution:
git push -u origin main

---

👉 Command 4: git pull

**Purpose:**
Fetch and merge changes from remote

**Syntax:**

# Pull from default remote and branch
git pull

# Pull from specific remote and branch
git pull origin main

# Pull with rebase
git pull --rebase

# Pull all branches
git pull --all

**What it does:**
✔ Fetches remote changes
✔ Merges into current branch
✔ Updates local repository
✔ Combines fetch + merge

**Examples:**

# Regular pull
git pull origin main

# Pull with rebase
git pull --rebase origin main

**When to use:**
✔ Before starting work
✔ Before pushing changes
✔ To get team updates
✔ To stay synchronized

**Best Practices:**
✔ Pull before push
✔ Commit local changes first
✔ Resolve conflicts carefully
✔ Pull regularly

---

👉 Command 5: git fetch

**Purpose:**
Download changes without merging

**Syntax:**

# Fetch from default remote
git fetch

# Fetch from specific remote
git fetch origin

# Fetch specific branch
git fetch origin main

# Fetch all remotes
git fetch --all

**What it does:**
✔ Downloads remote changes
✔ Doesn't merge automatically
✔ Updates remote tracking branches
✔ Safe to run anytime

**fetch vs pull:**

**git fetch:**
- Downloads changes
- Doesn't merge
- Safe, no conflicts
- Review before merging

**git pull:**
- Downloads + merges
- Automatic merge
- May cause conflicts
- Faster but riskier

**Examples:**

# Fetch and review
git fetch origin
git log origin/main
git merge origin/main

# Safer workflow
git fetch
git diff main origin/main
git merge origin/main

---

👉 Command 6: git log

**Purpose:**
View commit history

**Syntax:**

# View full log
git log

# Compact one-line format
git log --oneline

# Last N commits
git log -5

# With graph
git log --graph --oneline

# By author
git log --author="John"

# By date
git log --since="2024-01-01"
git log --until="2024-12-31"

# Specific file
git log filename.txt

# With stats
git log --stat

**What it shows:**
✔ Commit ID (hash)
✔ Author name and email
✔ Date and time
✔ Commit message

**Examples:**

# Basic log
git log

Output:
commit abc123def456...
Author: John Doe <john@example.com>
Date:   Mon Jan 15 10:30:00 2024

    Add login feature

# Compact log
git log --oneline

Output:
abc123d Add login feature
def456e Fix bug in payment
789abc0 Update README

# Visual graph
git log --graph --oneline --all

**Use cases:**
✔ Track project history
✔ Find specific changes
✔ Debug issues
✔ Review team work

---

👉 Command 7: git diff

**Purpose:**
Show differences between versions

**Syntax:**

# Changes in working directory
git diff

# Changes in staging area
git diff --staged
git diff --cached

# Difference between commits
git diff commit1 commit2

# Difference in specific file
git diff filename.txt

# Difference between branches
git diff main feature-branch

**What it shows:**
✔ Lines added (green, +)
✔ Lines removed (red, -)
✔ Modified files
✔ Exact changes

**Examples:**

# See unstaged changes
git diff

Output:
diff --git a/index.html b/index.html
--- a/index.html
+++ b/index.html
@@ -1,3 +1,4 @@
 <html>
+<head><title>New Title</title></head>
 <body>

# See staged changes
git diff --staged

# Compare commits
git diff abc123 def456

**Use cases:**
✔ Review before committing
✔ Check what changed
✔ Debug issues
✔ Code review

---

👉 Command 8: git show

**Purpose:**
Show detailed information about commit

**Syntax:**

# Show latest commit
git show

# Show specific commit
git show abc123

# Show specific file in commit
git show abc123:filename.txt

# Show commit stats
git show --stat abc123

**What it shows:**
✔ Commit details
✔ Author and date
✔ Commit message
✔ Changes made

**Examples:**

# Show last commit
git show

Output:
commit abc123def456...
Author: John Doe <john@example.com>
Date:   Mon Jan 15 10:30:00 2024

    Add login feature

diff --git a/login.js b/login.js
+++ b/login.js
+function login() { ... }

# Show specific commit
git show def456

**Use cases:**
✔ Inspect specific commit
✔ Debug issues
✔ Review changes
✔ Understand history

---

👉 Complete Daily Workflow

**Morning: Start work**

# Get latest updates
git pull origin main

# Check status
git status

**During work: Make changes**

# Write code
# ...

# Check what changed
git diff

# Stage changes
git add .

# Verify staged
git status

# Commit
git commit -m "Add new feature"

**End of day: Share work**

# Push to remote
git push origin main

# Check history
git log --oneline -5

**Debugging: Find issues**

# View history
git log --oneline

# Check specific commit
git show abc123

# Compare versions
git diff abc123 def456

---

👉 Command Combinations

**Quick commit:**
git add . && git commit -m "Message" && git push

**Safe update:**
git fetch && git diff main origin/main && git merge origin/main

**Review before commit:**
git diff && git add . && git status && git commit -m "Message"

**Check and push:**
git status && git push

---

👉 Common Mistakes to Avoid

❌ **Mistake 1: Committing without reviewing**
Solution: Always run git diff before commit

❌ **Mistake 2: Bad commit messages**
Solution: Write clear, descriptive messages

❌ **Mistake 3: Not pulling before push**
Solution: Always git pull before git push

❌ **Mistake 4: Force pushing**
Solution: Avoid git push -f unless absolutely necessary

❌ **Mistake 5: Committing sensitive data**
Solution: Use .gitignore, never commit passwords

---

👉 Command Cheat Sheet

| Command | Purpose | Example |
|---------|---------|----------|
| git add | Stage changes | git add file.txt |
| git commit | Save changes | git commit -m "msg" |
| git push | Upload to remote | git push origin main |
| git pull | Download + merge | git pull origin main |
| git fetch | Download only | git fetch origin |
| git log | View history | git log --oneline |
| git diff | Show changes | git diff |
| git show | Show commit | git show abc123 |
| git status | Check state | git status |

---

🎯 Interview Line:
"Git basic commands form the foundation of daily development workflow. 'git add' stages changes, 'git commit' saves them locally with a message, and 'git push' uploads to remote. For synchronization, 'git pull' fetches and merges remote changes, while 'git fetch' downloads without merging for safer updates. History commands include 'git log' for viewing commit history, 'git diff' for comparing changes, and 'git show' for inspecting specific commits. Best practices include always checking status before committing, writing clear commit messages, pulling before pushing, and using diff to review changes. These commands are used together in a typical workflow: pull updates, make changes, add, commit, push, and use log/diff for debugging."
`,

    types: `
⚙️ Git Commands Categories:

📝 Staging:
- git add file.txt
- git add .
- git add -A

💾 Committing:
- git commit -m "message"
- git commit -am "message"
- git commit --amend

🔄 Syncing:
- git push origin main
- git pull origin main
- git fetch origin

📚 History:
- git log --oneline
- git diff
- git show commit-id

✅ Status:
- git status
- git diff --staged
`,

    qa: [
      {
        q: "What does git add do?",
        hint: "Think staging",
        options: ["Deletes files", "Stages changes for commit", "Pushes to remote", "Shows history"],
        answer: "Stages changes for commit",
        explanation: `git add:\n✔ Moves changes to staging area\n✔ Prepares for commit\n✔ Doesn't save permanently\n✔ Can add specific files or all\n\nExample:\ngit add file.txt\ngit add .`,
        memory: "git add = Stage changes 📝"
      },
      {
        q: "What does git commit do?",
        hint: "Think save",
        options: ["Stages files", "Saves staged changes permanently with message", "Uploads to remote", "Shows diff"],
        answer: "Saves staged changes permanently with message",
        explanation: `git commit:\n✔ Saves staged changes\n✔ Creates permanent snapshot\n✔ Requires commit message\n✔ Records in local history\n\nExample:\ngit commit -m \"Add feature\"`,
        memory: "git commit = Save permanently 💾"
      },
      {
        q: "What does git push do?",
        hint: "Think upload",
        options: ["Downloads changes", "Uploads local commits to remote repository", "Stages files", "Shows log"],
        answer: "Uploads local commits to remote repository",
        explanation: `git push:\n✔ Uploads commits to remote\n✔ Updates GitHub/GitLab\n✔ Shares with team\n✔ Creates cloud backup\n\nExample:\ngit push origin main`,
        memory: "git push = Upload to remote 📤"
      },
      {
        q: "What does git pull do?",
        hint: "Think download + merge",
        options: ["Only downloads", "Fetches and merges remote changes", "Stages files", "Shows history"],
        answer: "Fetches and merges remote changes",
        explanation: `git pull:\n✔ Downloads remote changes\n✔ Merges into current branch\n✔ Updates local repository\n✔ Combines fetch + merge\n\nExample:\ngit pull origin main`,
        memory: "git pull = Download + Merge 📥"
      },
      {
        q: "Difference between git fetch and git pull?",
        hint: "Think merge",
        options: ["Same thing", "fetch = download only, pull = download + merge", "fetch is faster", "pull is safer"],
        answer: "fetch = download only, pull = download + merge",
        explanation: `git fetch:\n✔ Downloads changes\n✔ Doesn't merge\n✔ Safe, no conflicts\n\ngit pull:\n✔ Downloads + merges\n✔ Automatic merge\n✔ May cause conflicts\n\nfetch is safer!`,
        memory: "fetch = Download, pull = Download+Merge 🔄"
      },
      {
        q: "What does git log show?",
        hint: "Think history",
        options: ["Current changes", "Commit history with author, date, and message", "Staged files", "Remote URL"],
        answer: "Commit history with author, date, and message",
        explanation: `git log:\n✔ Shows commit history\n✔ Author and date\n✔ Commit messages\n✔ Commit IDs\n\nUseful for:\n- Tracking changes\n- Debugging\n- Finding commits`,
        memory: "git log = History 📚"
      },
      {
        q: "What does git diff show?",
        hint: "Think differences",
        options: ["Commit history", "Differences between file versions", "Remote URL", "Branch list"],
        answer: "Differences between file versions",
        explanation: `git diff:\n✔ Shows line-by-line changes\n✔ Added lines (green +)\n✔ Removed lines (red -)\n✔ Modified files\n\nUse before committing to review!`,
        memory: "git diff = Show changes 🔍"
      },
      {
        q: "What does git show do?",
        hint: "Think specific commit",
        options: ["Shows all commits", "Shows detailed info about specific commit", "Shows branches", "Shows remote"],
        answer: "Shows detailed info about specific commit",
        explanation: `git show:\n✔ Displays commit details\n✔ Author and date\n✔ Commit message\n✔ Changes made\n\nExample:\ngit show abc123`,
        memory: "git show = Commit details 📋"
      },
      {
        q: "Best practice before pushing?",
        hint: "Think sync",
        options: ["Nothing needed", "Always pull first to get latest changes", "Delete files", "Change branch"],
        answer: "Always pull first to get latest changes",
        explanation: `Before pushing:\n1. git pull origin main\n2. Resolve conflicts if any\n3. git push origin main\n\nPrevents conflicts and keeps in sync!`,
        memory: "Before push = Pull first ✅"
      }
    ],

    coding: {
      title: "Git Commands Workflow",
      scenario: "Simulate complete Git command workflow",
      thinkingApproach: [
        "Step 1: Modify files",
        "Step 2: Check status",
        "Step 3: Stage with git add",
        "Step 4: Commit with message",
        "Step 5: Push to remote",
        "Step 6: View history"
      ],
      question: "Simulate Git commands workflow",
      input: `file = "app.js", changes = "Added login function"`,
      expectedOutput: `Modified: app.js\nStaged: 1 file\nCommitted: Added login function\nPushed: Success\nHistory: 1 commit`,
      solution: `# Simulating Git Commands
class GitCommands:
    def __init__(self):
        self.working_files = []
        self.staged_files = []
        self.commits = []
        self.remote_commits = []
    
    def modify(self, filename, changes):
        self.working_files.append({'file': filename, 'changes': changes})
        print(f"Modified: {filename}")
    
    def add(self, filename):
        for file in self.working_files:
            if file['file'] == filename:
                self.staged_files.append(file)
                print(f"Staged: {len(self.staged_files)} file")
                break
    
    def commit(self, message):
        commit = {
            'message': message,
            'files': self.staged_files.copy()
        }
        self.commits.append(commit)
        self.staged_files.clear()
        print(f"Committed: {message}")
    
    def push(self):
        self.remote_commits.extend(self.commits)
        self.commits.clear()
        print("Pushed: Success")
    
    def log(self):
        print(f"History: {len(self.remote_commits)} commit")
        for commit in self.remote_commits:
            print(f"  - {commit['message']}")

# Usage
git = GitCommands()

# Workflow
git.modify("app.js", "Added login function")
git.add("app.js")
git.commit("Added login function")
git.push()
git.log()`,
      note: "In real Git: Use git add, git commit -m, git push, git log"
    },

    quiz: [
      { q: "git add?", options: ["Stage", "Commit", "Push", "None"], answer: 0 },
      { q: "git commit?", options: ["Save permanently", "Stage", "Push", "None"], answer: 0 },
      { q: "git push?", options: ["Upload remote", "Download", "Stage", "None"], answer: 0 },
      { q: "git pull?", options: ["Download+Merge", "Upload", "Stage", "None"], answer: 0 },
      { q: "git fetch?", options: ["Download only", "Download+Merge", "Upload", "None"], answer: 0 },
      { q: "git log?", options: ["History", "Changes", "Stage", "None"], answer: 0 },
      { q: "git diff?", options: ["Show changes", "History", "Push", "None"], answer: 0 },
      { q: "Before push?", options: ["Pull first", "Nothing", "Delete", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `
👉 "Git basic commands are essential for daily development workflow. The core commands include 'git add' for staging changes, 'git commit' for saving changes permanently with a descriptive message, and 'git push' for uploading commits to remote repositories like GitHub.

For synchronization, 'git pull' fetches and merges remote changes into the local repository, while 'git fetch' only downloads changes without merging, providing a safer way to review updates before integrating them.

History and debugging commands include 'git log' which displays commit history with author, date, and messages, 'git diff' which shows line-by-line differences between versions, and 'git show' which provides detailed information about specific commits.

Best practices include always checking 'git status' before committing, writing clear and descriptive commit messages in present tense, pulling before pushing to avoid conflicts, using 'git diff' to review changes before committing, and regularly checking 'git log' for debugging and tracking project history.

A typical daily workflow involves: pull latest updates, make code changes, check diff, add changes, commit with message, push to remote, and use log/show for debugging when needed. Understanding the difference between fetch and pull is important - fetch is safer as it allows reviewing changes before merging, while pull automatically merges which may cause conflicts."
`,

    memory: `
👉 git add = Stage changes 📝
👉 git commit = Save permanently 💾
👉 git push = Upload to remote 📤
👉 git pull = Download + Merge 📥
👉 git fetch = Download only 🔄
👉 git log = History 📚
👉 git diff = Show changes 🔍
👉 git show = Commit details 📋
👉 Before push = Pull first ✅
👉 Commit message = Clear + Descriptive 📝
`,

    revision: "Git Basic Commands = add (stage) → commit (save) → push (upload) + pull (download+merge) + log/diff/show (history/debug). Essential for daily workflow."
  },

  'git-branching-merging': {
    title: "Branching & Merging",
    subtitle: "Work on features independently and merge changes safely",
    icon: "🌿",
    difficulty: "Intermediate",
    duration: "~60 min",
    ready: true,

    topic: "Branching & Merging",
    aatma: {
      Architecture: {
        description: "Branching allows developers to work on different features independently without affecting the main code. Merging combines those changes back into the main branch.",
        flow: "Main Branch → Create Branch → Work on Feature → Merge Back → Updated Main",
        key_components: [
          "Branch (separate line of development)",
          "Main/Master branch",
          "Feature branch",
          "Merge process"
        ]
      },

      Application: {
        description: "Used to develop features, fix bugs, and collaborate safely without breaking the main code.",
        use_cases: [
          "Develop new features",
          "Fix bugs independently",
          "Team collaboration",
          "Release management"
        ],
        real_world_example: "A team creates separate branches for login, payment, and UI features. After development, all branches are merged into main."
      },

      Tools_and_Techniques: {
        tools: [
          "Git CLI",
          "GitHub",
          "VS Code"
        ],
        subtopics: {
          "What is Branch": "A branch is a separate copy of code where you can work independently without affecting the main codebase.",
          "Create Branch (git branch)": "Creates a new branch. Example: git branch feature-login",
          "Switch Branch (git checkout / git switch)": "Moves from one branch to another. Example: git checkout feature-login or git switch feature-login",
          "Merge Branch (git merge)": "Combines changes from one branch into another (usually into main). Example: git merge feature-login",
          "Fast-forward merge": "When no new changes exist in main, Git simply moves forward and adds branch changes without creating extra commit.",
          "Merge conflicts": "Occurs when two branches modify the same part of code differently. Needs manual resolution."
        }
      },

      Monitoring_and_Optimization: {
        description: "Ensuring smooth branching and merging process",
        methods: [
          "Create separate branches for each feature",
          "Merge frequently to avoid conflicts",
          "Pull latest changes before merging",
          "Resolve conflicts carefully",
          "Delete unused branches"
        ]
      },

      Advanced_and_RealWorld: {
        description: "Branching and merging are core to collaborative development in real projects",
        advanced_concepts: [
          "Feature branching strategy",
          "Git flow workflow",
          "Pull requests for merging",
          "Code reviews before merge",
          "Continuous integration with branches"
        ],
        real_world_flow: "Create Branch → Develop Feature → Commit Changes → Push Branch → Create PR → Review → Merge into Main → Deploy"
      }
    },

    comic: `
Imagine you're a developer working on a website 👨💻

Old way (No branches):
- Boss: "Add login feature, but don't break the live site!"
- You: Edit main code directly 😰
- Half-done login breaks everything 💥
- Site crashes! Customers angry! ❌

🤔 With Branches:

🌿 Create Feature Branch:
- git branch feature-login
- git checkout feature-login
- Now working in parallel universe! ✨
- Main site stays safe 🛡️

💻 Work on Feature:
- Add login form
- Add validation
- Test everything
- Main site still running perfectly! ✅

🔀 Merge Back:
- git checkout main
- git merge feature-login
- Login feature now live! 🎉

😱 TWIST: Merge Conflict!
- Teammate also changed same file
- Git says: "Conflict! You decide!" ⚠️
- Manually resolve conflict
- Merge successful! ✅

💡 Aha Moment:
Branches = Parallel universes for safe development!
Merging = Combining parallel work!
Conflicts = Manual decisions needed!

👉 No branches = Chaos and broken code 🌪️
👉 With branches = Safe parallel development 🎯
`,

    deepDive: `
👉 What is Branching?

Branching creates separate lines of development:
✔ Work independently without affecting main code
✔ Develop features in isolation
✔ Experiment safely
✔ Collaborate without conflicts
✔ Keep main code stable

Think of it as:
- Parallel universes for your code
- Safe experimentation zones
- Independent workspaces
- Organized development

---

👉 Why Use Branches?

Without Branches:
❌ Everyone works on same code
❌ Changes break each other
❌ Can't experiment safely
❌ Main code always unstable
❌ Collaboration nightmare

With Branches:
✅ Safe parallel development
✅ Isolated feature work
✅ Stable main code
✅ Easy collaboration
✅ Fearless experimentation

Real-world scenarios:

**Scenario 1: Feature Development**
- Create feature-login branch
- Develop login feature
- Test thoroughly
- Merge when ready
- Main code never broken!

**Scenario 2: Bug Fix**
- Create bugfix-payment branch
- Fix bug in isolation
- Test fix
- Merge quickly
- No interference with other work!

**Scenario 3: Team Collaboration**
- Developer A: feature-login branch
- Developer B: feature-payment branch
- Developer C: feature-ui branch
- All work independently
- Merge when ready!

---

👉 Branch Basics

🔹 **Main/Master Branch**

What is it?
- Primary branch
- Production-ready code
- Always stable
- Source of truth

Characteristics:
✔ Should always work
✔ Deployed to production
✔ Protected from direct changes
✔ Only merge tested code

Real-world analogy:
- Main highway (always open)
- Published book (final version)
- Live website (customers see this)

🔹 **Feature Branch**

What is it?
- Branch for specific feature
- Isolated development
- Temporary workspace
- Merged when complete

Naming conventions:
- feature/login
- feature/payment
- bugfix/cart-error
- hotfix/security-patch

Real-world analogy:
- Side road (construction zone)
- Draft chapter (work in progress)
- Staging environment (testing)

---

👉 Creating Branches

**Command: git branch**

Purpose:
Create new branch

Syntax:

# Create new branch
git branch branch-name

# Create branch from specific commit
git branch branch-name commit-hash

# List all branches
git branch

# List all branches (including remote)
git branch -a

**Examples:**

# Create feature branch
git branch feature-login

# Create bugfix branch
git branch bugfix-payment

# List branches
git branch
Output:
  feature-login
* main
(* indicates current branch)

**What Happens:**
- Creates new branch pointer
- Points to current commit
- Doesn't switch to new branch
- Main branch unchanged

---

👉 Switching Branches

**Command: git checkout / git switch**

Purpose:
Switch from one branch to another

Syntax:

# Old syntax (still works)
git checkout branch-name

# New syntax (recommended)
git switch branch-name

# Create and switch in one command
git checkout -b branch-name
# OR
git switch -c branch-name

**Examples:**

# Switch to feature branch
git checkout feature-login
Output: Switched to branch 'feature-login'

# Create and switch
git checkout -b feature-payment
Output: Switched to a new branch 'feature-payment'

# Switch back to main
git checkout main

**What Happens:**
- Updates working directory
- Changes files to match branch
- Updates HEAD pointer
- Ready to work on that branch

**Important Notes:**
⚠️ Commit or stash changes before switching
⚠️ Uncommitted changes may be lost
⚠️ Git will warn if conflicts exist

---

👉 Working on Branches

**Complete Workflow:**

# Step 1: Create and switch to branch
git checkout -b feature-login

# Step 2: Make changes
echo "Login form" > login.html

# Step 3: Stage changes
git add login.html

# Step 4: Commit changes
git commit -m "Add login form"

# Step 5: Continue working
echo "Validation" >> login.html
git add login.html
git commit -m "Add validation"

# Step 6: Push branch to remote
git push origin feature-login

**Branch is now ready to merge!**

---

👉 Merging Branches

**Command: git merge**

Purpose:
Combine changes from one branch into another

Syntax:

# Switch to target branch (usually main)
git checkout main

# Merge source branch into current branch
git merge branch-name

**Example:**

# Switch to main
git checkout main

# Merge feature branch
git merge feature-login

Output:
Updating abc123..def456
Fast-forward
 login.html | 10 ++++++++++
 1 file changed, 10 insertions(+)

**What Happens:**
- Combines commits from both branches
- Creates merge commit (if needed)
- Updates current branch
- Feature branch unchanged

---

👉 Types of Merges

🔹 **Fast-Forward Merge**

When:
- No new commits on main
- Feature branch ahead of main
- Linear history

Visualization:
Before:
main:     A --- B
               \
feature:        C --- D

After:
main:     A --- B --- C --- D

Command:
git merge feature-login

Output:
Fast-forward

Characteristics:
✔ Simple and clean
✔ No merge commit
✔ Linear history
✔ Easy to understand

🔹 **3-Way Merge**

When:
- New commits on both branches
- Diverged history
- Need merge commit

Visualization:
Before:
main:     A --- B --- E
               \
feature:        C --- D

After:
main:     A --- B --- E --- M
               \         /
feature:        C --- D
(M = merge commit)

Command:
git merge feature-login

Output:
Merge made by the 'recursive' strategy.

Characteristics:
✔ Preserves both histories
✔ Creates merge commit
✔ Shows when branches merged
✔ More complex history

---

👉 Merge Conflicts

**What is a Conflict?**

Occurs when:
- Two branches change same lines
- Git can't auto-merge
- Manual resolution needed

Example Scenario:

**Main branch:**
file.txt: "Hello World"

**Feature branch:**
file.txt: "Hello Universe"

**Conflict!**
Git doesn't know which to keep

**Conflict Markers:**

<<<<<<< HEAD
Hello World
=======
Hello Universe
>>>>>>> feature-branch

**Resolution Steps:**

1️⃣ **Identify Conflict**
git merge feature-branch
Output: CONFLICT (content): Merge conflict in file.txt

2️⃣ **Check Status**
git status
Output: both modified: file.txt

3️⃣ **Open File**
See conflict markers

4️⃣ **Resolve Manually**
Choose which version to keep:
- Keep HEAD (current branch)
- Keep incoming (feature branch)
- Keep both
- Write new version

5️⃣ **Remove Markers**
Delete <<<<<<, =======, >>>>>>>

6️⃣ **Stage Resolution**
git add file.txt

7️⃣ **Complete Merge**
git commit -m "Resolve merge conflict"

**Example Resolution:**

Before:
<<<<<<< HEAD
Hello World
=======
Hello Universe
>>>>>>> feature-branch

After (keeping both):
Hello World and Universe

---

👉 Best Practices

1️⃣ **Branch Naming**
✔ Use descriptive names
✔ Follow conventions
✔ Include type prefix

Good:
- feature/user-authentication
- bugfix/payment-error
- hotfix/security-patch

Bad:
- branch1
- test
- new

2️⃣ **Commit Often**
✔ Small, focused commits
✔ Clear commit messages
✔ Easier to merge
✔ Better history

3️⃣ **Pull Before Merge**
✔ Get latest main changes
✔ Merge main into feature
✔ Test locally
✔ Then merge feature into main

Workflow:
git checkout main
git pull
git checkout feature-branch
git merge main
# Test everything
git checkout main
git merge feature-branch

4️⃣ **Delete Merged Branches**
✔ Keep repository clean
✔ Remove clutter
✔ Clear what's active

Command:
git branch -d feature-login

5️⃣ **Use Pull Requests**
✔ Code review before merge
✔ Discussion and feedback
✔ Quality assurance
✔ Team collaboration

---

👉 Common Workflows

**Feature Branch Workflow:**

1. Create branch from main
git checkout main
git pull
git checkout -b feature/new-feature

2. Work on feature
# Make changes
git add .
git commit -m "Add feature"

3. Push to remote
git push origin feature/new-feature

4. Create pull request
# On GitHub/GitLab

5. Review and merge
# After approval
git checkout main
git merge feature/new-feature

6. Clean up
git branch -d feature/new-feature
git push origin --delete feature/new-feature

---

👉 Viewing Branches

**List Branches:**

# Local branches
git branch

# All branches (including remote)
git branch -a

# Branches with last commit
git branch -v

# Merged branches
git branch --merged

# Unmerged branches
git branch --no-merged

**Visual History:**

# Graph view
git log --graph --oneline --all

Output:
* def456 (feature-login) Add validation
* abc123 Add login form
* 789xyz (main) Initial commit

---

🎯 Interview Line:
"Branching in Git creates separate lines of development, allowing developers to work on features independently without affecting the main codebase. The main branch contains production-ready code, while feature branches isolate development work. Creating a branch uses 'git branch branch-name', and switching uses 'git checkout branch-name' or 'git switch branch-name'. Merging combines branches using 'git merge branch-name'. There are two types of merges: fast-forward (when main hasn't changed) and 3-way merge (when both branches have new commits). Merge conflicts occur when the same code is modified differently in both branches, requiring manual resolution. Best practices include descriptive branch naming, frequent commits, pulling before merging, and deleting merged branches. This workflow enables safe parallel development and effective team collaboration."
`,

    types: `
🌿 Branch Types:

📌 Main/Master:
- Production code
- Always stable
- Protected branch
- Source of truth

🔧 Feature Branch:
- New feature development
- Isolated work
- Temporary
- Merged when complete

🐛 Bugfix Branch:
- Bug fixes
- Quick fixes
- Tested separately
- Merged after fix

🔥 Hotfix Branch:
- Critical fixes
- Production issues
- Urgent merges
- Immediate deployment

🔀 Merge Types:
- Fast-forward: Linear merge
- 3-way: Creates merge commit
- Conflict: Manual resolution
`,

    qa: [
      {
        q: "What is a branch?",
        hint: "Think parallel development",
        options: ["A type of commit", "A separate line of development", "A remote repository", "A merge conflict"],
        answer: "A separate line of development",
        explanation: `Branch:\n✔ Separate line of development\n✔ Work independently\n✔ Don't affect main code\n✔ Merge when ready\n\nLike parallel universe for code!`,
        memory: "Branch = Parallel universe 🌿"
      },
      {
        q: "Why use branches?",
        hint: "Think safety",
        options: ["To delete code", "To work safely without breaking main code", "To slow down", "To create conflicts"],
        answer: "To work safely without breaking main code",
        explanation: `Benefits:\n✔ Safe experimentation\n✔ Parallel development\n✔ Isolated features\n✔ Stable main code\n✔ Team collaboration\n\nEssential for professional development!`,
        memory: "Branches = Safe parallel work 🛡️"
      },
      {
        q: "How to create branch?",
        hint: "Think git branch",
        options: ["git merge", "git branch branch-name", "git delete", "git push"],
        answer: "git branch branch-name",
        explanation: `Create branch:\ngit branch feature-login\n\nCreate and switch:\ngit checkout -b feature-login\n\nNew syntax:\ngit switch -c feature-login`,
        memory: "git checkout -b = Create + Switch ⚡"
      },
      {
        q: "How to switch branches?",
        hint: "Think checkout",
        options: ["git branch", "git checkout branch-name", "git merge", "git delete"],
        answer: "git checkout branch-name",
        explanation: `Switch branch:\ngit checkout feature-login\n\nNew syntax:\ngit switch feature-login\n\nBoth work the same!`,
        memory: "git checkout/switch = Change branch 🔄"
      },
      {
        q: "What does git merge do?",
        hint: "Think combine",
        options: ["Deletes branch", "Combines changes from one branch into another", "Creates branch", "Pushes code"],
        answer: "Combines changes from one branch into another",
        explanation: `git merge:\n✔ Combines branches\n✔ Integrates changes\n✔ Updates current branch\n\nExample:\ngit checkout main\ngit merge feature-login`,
        memory: "git merge = Combine branches 🔀"
      },
      {
        q: "What is merge conflict?",
        hint: "Think same code",
        options: ["Git crash", "Same code changed differently in both branches", "Branch deletion", "Push failure"],
        answer: "Same code changed differently in both branches",
        explanation: `Conflict:\n✔ Same lines changed differently\n✔ Git can't auto-merge\n✔ Manual resolution needed\n✔ Choose which to keep\n\nResolve carefully!`,
        memory: "Conflict = Same code, different changes ⚠️"
      },
      {
        q: "What is fast-forward merge?",
        hint: "Think linear",
        options: ["Quick merge", "When main unchanged, Git moves pointer forward", "Type of conflict", "Branch deletion"],
        answer: "When main unchanged, Git moves pointer forward",
        explanation: `Fast-forward:\n✔ Main hasn't changed\n✔ Git moves pointer forward\n✔ No merge commit\n✔ Linear history\n\nSimple and clean!`,
        memory: "Fast-forward = Linear, no merge commit ➡️"
      },
      {
        q: "Best practice before merging?",
        hint: "Think sync",
        options: ["Delete everything", "Pull latest main, merge main into feature, test", "Never test", "Push immediately"],
        answer: "Pull latest main, merge main into feature, test",
        explanation: `Before merge:\n1. git checkout main\n2. git pull\n3. git checkout feature\n4. git merge main\n5. Test everything\n6. git checkout main\n7. git merge feature\n\nPrevents conflicts!`,
        memory: "Before merge = Pull + Test ✅"
      },
      {
        q: "How to delete merged branch?",
        hint: "Think cleanup",
        options: ["git branch -d branch-name", "git delete", "git remove", "git merge -d"],
        answer: "git branch -d branch-name",
        explanation: `Delete branch:\ngit branch -d feature-login\n\nForce delete (unmerged):\ngit branch -D feature-login\n\nKeep repository clean!`,
        memory: "git branch -d = Delete branch 🗑️"
      }
    ],

    coding: {
      title: "Branch and Merge Workflow",
      scenario: "Simulate Git branching workflow",
      thinkingApproach: [
        "Step 1: Create branch",
        "Step 2: Switch to branch",
        "Step 3: Make commits",
        "Step 4: Switch back to main",
        "Step 5: Merge branch",
        "Step 6: View result"
      ],
      question: "Simulate branching and merging",
      input: `branch_name = "feature-login"`,
      expectedOutput: `Created branch: feature-login\nSwitched to: feature-login\nCommitted: Add login\nSwitched to: main\nMerged feature-login into main\nMain has 2 commits`,
      solution: `# Simulating Git Branching
class GitBranching:
    def __init__(self):
        self.branches = {'main': ['Initial commit']}
        self.current_branch = 'main'
    
    def create_branch(self, name):
        self.branches[name] = self.branches[self.current_branch].copy()
        print(f"Created branch: {name}")
    
    def checkout(self, name):
        if name in self.branches:
            self.current_branch = name
            print(f"Switched to: {name}")
    
    def commit(self, message):
        self.branches[self.current_branch].append(message)
        print(f"Committed: {message}")
    
    def merge(self, branch_name):
        for commit in self.branches[branch_name]:
            if commit not in self.branches[self.current_branch]:
                self.branches[self.current_branch].append(commit)
        print(f"Merged {branch_name} into {self.current_branch}")
    
    def log(self):
        commits = self.branches[self.current_branch]
        print(f"{self.current_branch} has {len(commits)} commits")

# Usage
git = GitBranching()
git.create_branch("feature-login")
git.checkout("feature-login")
git.commit("Add login")
git.checkout("main")
git.merge("feature-login")
git.log()`,
      note: "In real Git: git branch, git checkout, git commit, git merge"
    },

    quiz: [
      { q: "Branch?", options: ["Separate line", "Commit", "Remote", "None"], answer: 0 },
      { q: "Why branches?", options: ["Safe work", "Delete", "Slow", "None"], answer: 0 },
      { q: "Create?", options: ["git branch", "git merge", "git delete", "None"], answer: 0 },
      { q: "Switch?", options: ["git checkout", "git branch", "git merge", "None"], answer: 0 },
      { q: "Merge?", options: ["Combine", "Delete", "Create", "None"], answer: 0 },
      { q: "Conflict?", options: ["Same code different", "Crash", "Delete", "None"], answer: 0 },
      { q: "Fast-forward?", options: ["Linear merge", "Conflict", "Delete", "None"], answer: 0 },
      { q: "Before merge?", options: ["Pull + Test", "Nothing", "Delete", "None"], answer: 0 },
      { q: "Delete?", options: ["git branch -d", "git delete", "git remove", "None"], answer: 0 }
    ],

    interview: `
👉 "Branching in Git creates separate lines of development, allowing developers to work on features independently without affecting the main codebase. The main branch contains production-ready code that should always be stable, while feature branches isolate development work.

Creating a branch uses 'git branch branch-name', which creates a new branch pointer at the current commit. Switching between branches uses 'git checkout branch-name' or the newer 'git switch branch-name' syntax. A shortcut to create and switch in one command is 'git checkout -b branch-name'.

Merging combines changes from one branch into another using 'git merge branch-name'. There are two types of merges: fast-forward merge occurs when the target branch hasn't changed since the feature branch was created, allowing Git to simply move the pointer forward without creating a merge commit. A 3-way merge happens when both branches have new commits, requiring Git to create a merge commit that combines both histories.

Merge conflicts occur when the same lines of code are modified differently in both branches. Git cannot automatically resolve these conflicts, so developers must manually choose which changes to keep. The conflict is marked with special markers (<<<<<<, =======, >>>>>>>) in the file, and after resolution, the file must be staged and committed.

Best practices include using descriptive branch names with prefixes (feature/, bugfix/, hotfix/), committing frequently with clear messages, pulling the latest main changes before merging, testing thoroughly, and deleting branches after they're merged to keep the repository clean. This workflow enables safe parallel development and effective team collaboration."
`,

    memory: `
👉 Branch = Parallel universe 🌿
👉 Branches = Safe parallel work 🛡️
👉 git branch = Create branch 🆕
👉 git checkout/switch = Change branch 🔄
👉 git checkout -b = Create + Switch ⚡
👉 git merge = Combine branches 🔀
👉 Conflict = Same code, different changes ⚠️
👉 Fast-forward = Linear, no merge commit ➡️
👉 Before merge = Pull + Test ✅
👉 git branch -d = Delete branch 🗑️
`,

    revision: "Branching & Merging = Create branch (git branch) → Switch (git checkout) → Work → Commit → Merge (git merge). Enables safe parallel development."
  },

  'git-advanced-branching': {
    title: "Advanced Branching",
    subtitle: "Master rebase, cherry-pick, squash, stash, and detached HEAD",
    icon: "🌳",
    difficulty: "Intermediate",
    duration: "~45 min",
    ready: true,

    comic: `The Time Traveler's Code

Dev was working on a feature when his manager asked: 'Can you rewrite history to make it cleaner?'

Dev thought: 'Rewrite history? Am I a time traveler now?'

Git Master appeared: 'With git rebase, you ARE a time traveler! You can rewrite commit history.'

'Rebase moves your branch on top of another, creating a clean linear history instead of messy merge commits.'

'Need just ONE commit from another branch? Use git cherry-pick to grab it!'

'Made 10 tiny commits? Squash them into one beautiful commit with git rebase -i.'

Suddenly, manager called: 'Emergency bug fix needed NOW!' But Dev had uncommitted work...

'Use git stash!' said Git Master. 'It saves your work temporarily without committing.'

Dev stashed his work, fixed the bug, then ran git stash pop to get his work back!

'One warning,' said Git Master. 'Avoid detached HEAD state - that's when you're not on any branch!'

Dev smiled: 'Now I can time travel through commits and keep history clean!'`,

    deepDive: `Advanced Branching Techniques

🔹 Git Rebase - Rewriting History
Rebase moves your branch commits on top of another branch, creating a linear history.

Why Rebase?
- Clean, linear commit history
- No merge commits cluttering history
- Easier to understand project timeline

Basic Rebase:
git checkout feature-branch
git rebase main

Golden Rule: Never rebase commits that have been pushed to shared branches!

🔹 Cherry-pick - Selective Commit Application
Cherry-pick applies a specific commit from one branch to another.

Syntax:
git cherry-pick <commit-hash>

Example:
git checkout main
git cherry-pick a1b2c3d

🔹 Squash Commits - Combining History
Squashing combines multiple commits into one for cleaner history.

Method: Interactive Rebase
git rebase -i HEAD~4

Change 'pick' to 'squash' for commits you want to combine.

🔹 Git Stash - Temporary Storage
Stash saves uncommitted changes temporarily without committing.

Basic Commands:
git stash              # Save changes
git stash list         # View all stashes
git stash pop          # Apply and remove latest stash
git stash apply        # Apply but keep stash

🔹 Detached HEAD State
Detached HEAD occurs when you checkout a specific commit instead of a branch.

How to Enter:
git checkout abc123  # Checkout specific commit

Exiting Detached HEAD:
git checkout main  # Return to branch

Best Practice: Avoid making commits in detached HEAD unless you create a branch first.`,

    types: `Advanced Branching Commands:

🔹 Rebase:
- git rebase main
- git rebase -i HEAD~3
- Creates linear history

🔹 Cherry-pick:
- git cherry-pick <hash>
- Apply specific commit
- Selective changes

🔹 Squash:
- git rebase -i (squash)
- Combine commits
- Clean history

🔹 Stash:
- git stash
- git stash pop
- Temporary storage

🔹 Detached HEAD:
- git checkout <hash>
- View old commits
- Create branch to save`,

    qa: [
      { q: "What is the main difference between merge and rebase?", hint: "Think history", options: ["No difference", "Merge creates merge commit, rebase creates linear history", "Rebase is faster", "Merge is newer"], answer: "Merge creates merge commit, rebase creates linear history", explanation: "Merge creates a new merge commit combining two branches, preserving complete history. Rebase moves your commits on top of another branch, creating linear history without merge commits.", memory: "Merge = Preserve history, Rebase = Linear history" },
      { q: "When should you use git cherry-pick?", hint: "Think selective", options: ["Always", "To apply specific commit from another branch", "To delete commits", "To create branches"], answer: "To apply specific commit from another branch", explanation: "Use cherry-pick when you need to apply a specific commit from one branch to another without merging the entire branch.", memory: "Cherry-pick = Selective commit application" },
      { q: "What is the golden rule of git rebase?", hint: "Think shared", options: ["Always rebase", "Never rebase public/shared commits", "Rebase daily", "Rebase is bad"], answer: "Never rebase public/shared commits", explanation: "Never rebase commits that have been pushed to shared branches. Rebasing rewrites commit history, which can cause serious problems for other developers.", memory: "Golden Rule = Never rebase shared commits" },
      { q: "How is git stash different from git commit?", hint: "Think temporary", options: ["Same thing", "Stash is temporary, commit is permanent", "Stash is faster", "Commit is temporary"], answer: "Stash is temporary, commit is permanent", explanation: "Git stash temporarily saves uncommitted changes without creating a commit. Git commit permanently records changes in history.", memory: "Stash = Temporary, Commit = Permanent" },
      { q: "What happens if you make commits in detached HEAD state?", hint: "Think orphaned", options: ["Saved forever", "Become orphaned and garbage collected", "Merge to main", "Nothing"], answer: "Become orphaned and garbage collected", explanation: "Commits made in detached HEAD state are not attached to any branch. When you checkout another branch, these commits become orphaned and will eventually be garbage collected.", memory: "Detached HEAD commits = Orphaned" },
      { q: "How do you squash the last 5 commits into one?", hint: "Think interactive", options: ["git squash 5", "git rebase -i HEAD~5", "git merge --squash", "git commit -5"], answer: "git rebase -i HEAD~5", explanation: "Use interactive rebase: 'git rebase -i HEAD~5'. In the editor, keep 'pick' for the first commit and change the rest to 'squash'.", memory: "Squash = git rebase -i" }
    ],

    coding: {
      title: "Advanced Branching Workflow",
      scenario: "Practice rebase, cherry-pick, squash, and stash operations",
      thinkingApproach: [
        "Step 1: Create repository with commits",
        "Step 2: Create feature branch",
        "Step 3: Squash commits using rebase",
        "Step 4: Rebase on main",
        "Step 5: Cherry-pick commits",
        "Step 6: Use stash for temporary storage"
      ],
      question: "Simulate advanced Git branching workflow",
      input: "Multiple branches with commits",
      expectedOutput: "Clean linear history with squashed commits",
      solution: `# Advanced Branching Workflow

# 1. Create repository
git init advanced-git
cd advanced-git

# 2. Make initial commits
echo 'Initial' > file.txt
git add . && git commit -m 'Initial commit'

# 3. Create feature branch
git checkout -b feature
echo 'Feature 1' >> feature.txt
git add . && git commit -m 'WIP: part 1'
echo 'Feature 2' >> feature.txt
git add . && git commit -m 'WIP: part 2'

# 4. Squash commits
git rebase -i HEAD~2
# Change second 'pick' to 'squash'

# 5. Rebase on main
git checkout main
echo 'Main update' >> file.txt
git add . && git commit -m 'Main update'
git checkout feature
git rebase main

# 6. Use stash
echo 'WIP' >> wip.txt
git stash
git stash pop

# Result: Clean linear history`,
      note: "In real Git: Use these commands carefully, especially rebase on shared branches"
    },

    quiz: [
      { q: "Rebase command?", options: ["git rebase main", "git merge", "git squash", "git stash"], answer: 0 },
      { q: "Cherry-pick?", options: ["git cherry-pick <hash>", "git pick", "git apply", "git copy"], answer: 0 },
      { q: "Golden rule?", options: ["Never rebase shared", "Always rebase", "Rebase daily", "Never rebase"], answer: 0 },
      { q: "Stash command?", options: ["git stash", "git save", "git temp", "git hide"], answer: 0 },
      { q: "Stash pop?", options: ["Apply and remove", "Just apply", "Just remove", "Nothing"], answer: 0 },
      { q: "Detached HEAD?", options: ["Checkout commit", "Checkout branch", "Delete branch", "Create branch"], answer: 0 },
      { q: "Squash method?", options: ["git rebase -i", "git squash", "git merge", "git combine"], answer: 0 },
      { q: "Safer for shared?", options: ["Merge", "Rebase", "Both", "Neither"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `Advanced branching in Git includes rebase for creating linear history, cherry-pick for applying specific commits, squash for combining commits, stash for temporary storage, and understanding detached HEAD state. The golden rule is to never rebase commits that have been pushed to shared branches as it rewrites history and causes problems for collaborators.`,

    memory: `
🌳 Rebase = Linear history
🍒 Cherry-pick = Selective commit
📦 Squash = Combine commits
🎒 Stash = Temporary save
👻 Detached HEAD = No branch
⚠️ Golden Rule = Never rebase shared
`,

    revision: "Advanced Branching = Rebase (linear) + Cherry-pick (selective) + Squash (combine) + Stash (temporary) + Detached HEAD (careful)"
  },

  'git-remote-repository': {
    title: "Remote Repository (GitHub/GitLab)",
    subtitle: "Work with remote repositories and collaborate with teams",
    icon: "☁️",
    difficulty: "Intermediate",
    duration: "~50 min",
    ready: true,

    comic: `The Cloud Code Kingdom

Dev had been coding alone on his laptop. His friend asked: 'What if your laptop crashes?'

Dev panicked: 'All my code would be lost! How do teams share code?'

Git Master appeared: 'Welcome to the Cloud Code Kingdom - Remote Repositories!'

'GitHub and GitLab are cloud castles where your code lives safely online.'

'First, connect your local repo to remote: git remote add origin <URL>'

'Use git push to upload your commits to the cloud. Your code is now safe!'

'Your team can now see your code! They use git pull to download latest changes.'

'Want to contribute to someone else's project? Fork it - creates your own copy!'

'Then clone your fork to download it locally: git clone <your-fork-URL>'

'Origin is YOUR remote repo. Upstream is the ORIGINAL repo you forked from.'

'Keep your fork updated: git pull upstream main, then git push origin main'

Dev smiled: 'Now my code is safe in the cloud and I can collaborate with the world!'`,

    deepDive: `Remote Repository Guide

🔹 What is a Remote Repository?
A remote repository is a version of your project hosted on the internet or network, enabling collaboration and backup.

Popular Services:
- GitHub: Most popular, owned by Microsoft
- GitLab: Open-source alternative with CI/CD
- Bitbucket: Atlassian's solution

Why Use Remote Repositories?
1. Backup: Code stored safely in cloud
2. Collaboration: Multiple developers work together
3. Access: Work from anywhere
4. Sharing: Share code with team or world
5. CI/CD: Integrate with automated pipelines

🔹 Adding and Managing Remotes

Add Remote:
git remote add origin https://github.com/username/repo.git

View Remotes:
git remote -v

Add Multiple Remotes:
git remote add origin https://github.com/you/repo.git
git remote add upstream https://github.com/original/repo.git

🔹 Push - Uploading to Remote

Basic Push:
git push origin main

First Time Push:
git push -u origin main

Force Push (Dangerous!):
git push --force origin main

🔹 Pull & Fetch - Downloading from Remote

Git Pull (Fetch + Merge):
git pull origin main

Git Fetch (Download Only):
git fetch origin

Pull = Fetch + Merge

🔹 Fork vs Clone

Clone: Downloads repository to local machine
git clone https://github.com/username/repo.git

Fork: Creates your copy on GitHub/GitLab (click Fork button)

Fork Workflow:
1. Fork on GitHub
2. Clone your fork
3. Make changes
4. Push to your fork
5. Create Pull Request

🔹 Upstream & Origin

Origin: Your primary remote (your fork)
Upstream: Original repository you forked from

Setting Up:
git clone https://github.com/you/repo.git
git remote add upstream https://github.com/original/repo.git

Syncing Fork:
git fetch upstream
git checkout main
git merge upstream/main
git push origin main`,

    types: `Remote Repository Commands:

🔹 Remote Management:
- git remote add origin <URL>
- git remote -v
- git remote remove origin

🔹 Push:
- git push origin main
- git push -u origin main
- git push --force (careful!)

🔹 Pull/Fetch:
- git pull origin main
- git fetch origin
- git pull --rebase

🔹 Clone:
- git clone <URL>
- git clone -b branch <URL>

🔹 Fork Workflow:
- Fork on GitHub
- Clone your fork
- Add upstream
- Sync regularly`,

    qa: [
      { q: "What is the difference between git pull and git fetch?", hint: "Think merge", options: ["Same thing", "Pull = Fetch + Merge, Fetch = Download only", "Fetch is faster", "Pull is newer"], answer: "Pull = Fetch + Merge, Fetch = Download only", explanation: "Git fetch downloads changes from remote but doesn't merge them. Git pull downloads AND merges changes automatically. Pull = Fetch + Merge.", memory: "Fetch = Download, Pull = Download + Merge" },
      { q: "What is the difference between fork and clone?", hint: "Think location", options: ["Same thing", "Fork = GitHub copy, Clone = Local copy", "Fork is faster", "Clone is newer"], answer: "Fork = GitHub copy, Clone = Local copy", explanation: "Fork creates a copy on GitHub/GitLab under your account. Clone downloads a repository to your local machine.", memory: "Fork = Server copy, Clone = Local copy" },
      { q: "What are origin and upstream in Git?", hint: "Think remotes", options: ["Same thing", "Origin = Your fork, Upstream = Original repo", "Origin is faster", "Upstream is newer"], answer: "Origin = Your fork, Upstream = Original repo", explanation: "Origin is your primary remote (usually your fork). Upstream is the original repository you forked from.", memory: "Origin = Yours, Upstream = Original" },
      { q: "When should you use git push --force?", hint: "Think careful", options: ["Always", "Only after rebase on local commits", "Never", "Daily"], answer: "Only after rebase on local commits", explanation: "Use force push very carefully, only when you've rewritten history and need to update remote. NEVER force push to shared branches.", memory: "Force push = Careful, only local commits" },
      { q: "How do you keep your fork synchronized?", hint: "Think upstream", options: ["Automatic", "Fetch upstream, merge, push to origin", "Delete and fork again", "Nothing needed"], answer: "Fetch upstream, merge, push to origin", explanation: "Fetch from upstream, merge into your branch, then push to your fork: git fetch upstream && git merge upstream/main && git push origin main", memory: "Sync = Fetch upstream → Merge → Push origin" },
      { q: "What is the difference between HTTPS and SSH URLs?", hint: "Think security", options: ["Same thing", "HTTPS = Password each time, SSH = No password after setup", "HTTPS is faster", "SSH is older"], answer: "HTTPS = Password each time, SSH = No password after setup", explanation: "HTTPS requires password/token for each push. SSH requires initial setup but then works without passwords.", memory: "HTTPS = Password, SSH = No password" }
    ],

    coding: {
      title: "Complete Remote Repository Workflow",
      scenario: "Practice working with remote repositories and fork workflow",
      thinkingApproach: [
        "Step 1: Create repository on GitHub",
        "Step 2: Connect local to remote",
        "Step 3: Push commits",
        "Step 4: Pull changes",
        "Step 5: Manage multiple remotes",
        "Step 6: Fork workflow"
      ],
      question: "Simulate remote repository workflow",
      input: "Local repository with commits",
      expectedOutput: "Synced with remote repository",
      solution: `# Remote Repository Workflow

# 1. Create local repository
mkdir git-remote-practice
cd git-remote-practice
git init
echo '# Git Remote Practice' > README.md
git add README.md
git commit -m 'Initial commit'

# 2. Add remote (after creating repo on GitHub)
git remote add origin https://github.com/YOUR-USERNAME/git-remote-practice.git

# 3. Push to remote
git branch -M main
git push -u origin main

# 4. Verify remote
git remote -v

# 5. Create and push branch
git checkout -b feature-branch
echo 'New feature' > feature.txt
git add feature.txt
git commit -m 'Add feature'
git push -u origin feature-branch

# 6. Pull changes
git checkout main
git pull origin main

# 7. Add upstream (for fork workflow)
git remote add upstream https://github.com/ORIGINAL/repo.git

# 8. Sync with upstream
git fetch upstream
git merge upstream/main
git push origin main`,
      note: "In real workflow: Create repo on GitHub first, then connect local repo"
    },

    quiz: [
      { q: "Add remote?", options: ["git remote add origin <URL>", "git add remote", "git connect", "git link"], answer: 0 },
      { q: "Pull vs Fetch?", options: ["Pull = Fetch + Merge", "Same thing", "Fetch is faster", "Pull is newer"], answer: 0 },
      { q: "Origin?", options: ["Default remote", "First commit", "Main branch", "Author"], answer: 0 },
      { q: "Fork?", options: ["Copy on GitHub", "Branch", "Merge", "Delete"], answer: 0 },
      { q: "Push with upstream?", options: ["git push -u origin main", "git push", "git upload", "git send"], answer: 0 },
      { q: "Upstream?", options: ["Original repo", "Your fork", "Main branch", "Latest commit"], answer: 0 },
      { q: "Clone command?", options: ["git clone <URL>", "git download", "git copy", "git get"], answer: 0 },
      { q: "Force push?", options: ["Only after rebase", "Always", "Never", "Daily"], answer: 0 },
      { q: "Sync fork?", options: ["Fetch upstream + merge", "Automatic", "Delete fork", "Nothing"], answer: 0 }
    ],

    interview: `Remote repositories enable collaboration through GitHub/GitLab. Key concepts include origin (your remote), upstream (original repo), push (upload), pull (download+merge), fetch (download only), fork (server copy), and clone (local copy). The fork workflow involves forking on GitHub, cloning locally, adding upstream remote, and syncing regularly with fetch upstream, merge, and push to origin.`,

    memory: `
☁️ Remote = Cloud storage
📤 Push = Upload commits
📥 Pull = Download + Merge
🔍 Fetch = Download only
🍴 Fork = GitHub copy
📦 Clone = Local copy
🎯 Origin = Your remote
⬆️ Upstream = Original repo
`,

    revision: "Remote Repository = Push/Pull + Fork/Clone + Origin/Upstream for cloud collaboration and backup"
  },

  'auth-collaboration': {
    title: "Authentication & Security + Collaboration Workflow",
    subtitle: "Secure access and team collaboration strategies",
    icon: "🔐",
    difficulty: "Intermediate",
    duration: "~45 min",
    ready: true,

    topic: "Authentication & Security + Collaboration Workflow",
    aatma: {
      Architecture: {
        description: "Authentication ensures secure access to repositories, while collaboration workflow defines how teams work together on code.",
        flow: "User Auth → Access Repo → Create Branch → PR → Review → Merge"
      },

      Application: {
        description: "Used to securely access repositories and enable smooth team collaboration."
      },

      Tools_and_Techniques: {
        subtopics: {
          "Authentication & Security": {
            "SSH Keys": "Secure way to connect to Git without passwords.",
            "HTTPS authentication": "Login using username/password or token.",
            "Personal Access Tokens (PAT)": "Secure alternative to passwords for authentication.",
            "Secure repo access": "Control who can read/write code using permissions."
          },

          "Collaboration Workflow": {
            "Pull Requests (PR)": "Request to merge your changes into main branch.",
            "Code Reviews": "Team reviews your code before merging.",
            "Merge Requests": "Same as PR (term used in GitLab).",
            "Branch naming strategy": "Use meaningful names like feature/login or bugfix/payment.",
            "Git flow vs Trunk-based": {
              "Git flow": "Uses multiple branches (develop, feature, release).",
              "Trunk-based": "Work directly on main with small frequent commits."
            }
          }
        }
      },

      Monitoring_and_Optimization: {
        methods: [
          "Use SSH or PAT for security",
          "Review code before merging",
          "Follow branch naming standards",
          "Avoid direct push to main"
        ]
      },

      Advanced_and_RealWorld: {
        description: "Used in real teams to ensure secure access and smooth collaboration with proper workflows and reviews."
      }
    },

    comic: `🔐 The Security & Collaboration Story

Dev tried to push code: "Access denied! Password authentication deprecated!"

Git Master appeared: "Time to learn secure authentication!"

"Use SSH Keys - like a secret handshake. Set up once, never type password again!"

"Or use Personal Access Tokens (PAT) - secure tokens instead of passwords."

Dev set up SSH: ssh-keygen → Add to GitHub → Push successful! ✅

Next challenge: "How do teams collaborate without chaos?"

Git Master: "Follow the collaboration workflow!"

1️⃣ Create feature branch (feature/login)
2️⃣ Write code and commit
3️⃣ Push to remote
4️⃣ Create Pull Request (PR)
5️⃣ Team reviews code
6️⃣ Approve and merge
7️⃣ Delete branch

"Never push directly to main! Always use PRs for review!"

"Use Git flow for complex projects or Trunk-based for simple ones."

Dev smiled: "Now I'm secure AND collaborative!"`,

    deepDive: `Authentication & Security + Collaboration Workflow

🔹 Authentication Methods

1. SSH Keys (Recommended)
- Secure, no password needed
- Setup once, use forever

Setup:
ssh-keygen -t ed25519 -C "your@email.com"
cat ~/.ssh/id_ed25519.pub
# Copy and add to GitHub Settings → SSH Keys

Test:
ssh -T git@github.com

2. HTTPS with Personal Access Token
- Username + Token instead of password

Create Token:
GitHub → Settings → Developer settings → Personal access tokens → Generate

Use:
git clone https://github.com/user/repo.git
# Username: your-username
# Password: paste-token-here

🔹 Collaboration Workflow

1. Pull Request (PR) Workflow

Step 1: Create branch
git checkout -b feature/login

Step 2: Make changes
echo "code" > file.js
git add .
git commit -m "Add login feature"

Step 3: Push branch
git push origin feature/login

Step 4: Create PR on GitHub
- Click "New Pull Request"
- Select base: main, compare: feature/login
- Add description
- Request reviewers

Step 5: Code Review
- Team reviews code
- Suggests changes
- Approve or request changes

Step 6: Merge
- Merge PR after approval
- Delete branch

2. Branch Naming Strategy

Good names:
- feature/user-authentication
- bugfix/payment-error
- hotfix/security-patch
- docs/update-readme

Bad names:
- branch1
- test
- new

3. Git Flow vs Trunk-based

Git Flow:
- main: Production
- develop: Integration
- feature/*: Features
- release/*: Releases
- hotfix/*: Urgent fixes

Trunk-based:
- main: Single branch
- Short-lived feature branches
- Frequent merges
- Simpler workflow

🔹 Best Practices

✅ Use SSH or PAT for authentication
✅ Never commit passwords/secrets
✅ Always create PRs for review
✅ Follow branch naming conventions
✅ Write clear PR descriptions
✅ Review code thoroughly
✅ Protect main branch
✅ Use .gitignore for sensitive files`,

    types: `Authentication & Collaboration:

🔐 Authentication:
- SSH Keys (secure)
- HTTPS + PAT (token)
- No passwords!

🔄 Workflow:
- Branch → Code → Push → PR → Review → Merge

📝 Branch Names:
- feature/name
- bugfix/name
- hotfix/name

🌿 Strategies:
- Git flow (complex)
- Trunk-based (simple)`,

    qa: [
      { q: "What is SSH?", hint: "Think secure", options: ["Password", "Secure Shell for passwordless authentication", "Username", "Email"], answer: "Secure Shell for passwordless authentication", explanation: "SSH uses cryptographic keys for secure authentication without passwords.", memory: "SSH = Secure, no password" },
      { q: "What is PAT?", hint: "Think token", options: ["Password", "Personal Access Token - secure alternative to password", "Username", "Branch"], answer: "Personal Access Token - secure alternative to password", explanation: "PAT is a secure token used instead of password for HTTPS authentication.", memory: "PAT = Token, not password" },
      { q: "What is Pull Request?", hint: "Think review", options: ["Delete code", "Request to merge changes with review", "Push code", "Clone repo"], answer: "Request to merge changes with review", explanation: "PR requests to merge your branch into main, allowing team review before merge.", memory: "PR = Merge request + Review" },
      { q: "Good branch name?", hint: "Think descriptive", options: ["branch1", "feature/login", "test", "new"], answer: "feature/login", explanation: "Use descriptive names with type prefix like feature/, bugfix/, hotfix/.", memory: "Branch name = type/description" },
      { q: "Git flow vs Trunk-based?", hint: "Think branches", options: ["Same", "Git flow = multiple branches, Trunk = main only", "No difference", "Both bad"], answer: "Git flow = multiple branches, Trunk = main only", explanation: "Git flow uses multiple branches (main, develop, feature). Trunk-based uses mainly main with short-lived branches.", memory: "Git flow = Many branches, Trunk = Main focus" }
    ],

    coding: {
      title: "Collaboration Workflow",
      scenario: "Practice PR workflow",
      thinkingApproach: [
        "Step 1: Create feature branch",
        "Step 2: Make changes",
        "Step 3: Push branch",
        "Step 4: Create PR",
        "Step 5: Review",
        "Step 6: Merge"
      ],
      question: "Simulate PR workflow",
      input: "Feature branch with changes",
      expectedOutput: "Merged after review",
      solution: `# PR Workflow

# 1. Create branch
git checkout -b feature/login

# 2. Make changes
echo "login code" > login.js
git add login.js
git commit -m "Add login feature"

# 3. Push branch
git push origin feature/login

# 4. Create PR on GitHub
# - Go to GitHub
# - Click "New Pull Request"
# - Select branches
# - Add description
# - Request reviewers

# 5. After review and approval
git checkout main
git pull origin main
git merge feature/login
git push origin main

# 6. Delete branch
git branch -d feature/login
git push origin --delete feature/login`,
      note: "In real workflow: Create PR on GitHub UI, review, then merge"
    },

    quiz: [
      { q: "SSH?", options: ["Secure no password", "Password", "Username", "None"], answer: 0 },
      { q: "PAT?", options: ["Token", "Password", "Username", "None"], answer: 0 },
      { q: "PR?", options: ["Merge request", "Delete", "Push", "None"], answer: 0 },
      { q: "Branch name?", options: ["feature/name", "branch1", "test", "None"], answer: 0 },
      { q: "Git flow?", options: ["Multiple branches", "One branch", "No branches", "None"], answer: 0 },
      { q: "Code review?", options: ["Before merge", "After merge", "Never", "None"], answer: 0 },
      { q: "Push to main?", options: ["Avoid", "Always", "Sometimes", "None"], answer: 0 },
      { q: "Important?", options: ["Yes", "No", "Maybe", "Never"], answer: 0 }
    ],

    interview: `Authentication & Security ensures secure repository access using SSH keys or Personal Access Tokens instead of passwords. Collaboration workflow involves creating feature branches, pushing changes, creating Pull Requests for team review, and merging after approval. Branch naming follows conventions like feature/, bugfix/, hotfix/. Git flow uses multiple branches (main, develop, feature) while trunk-based development focuses on main with short-lived branches. Best practices include never pushing directly to main, always using PRs for review, and protecting sensitive data.`,

    memory: `
🔐 SSH = Secure, no password
🎫 PAT = Token authentication
📋 PR = Merge + Review
🌿 Branch name = type/description
🔄 Git flow = Multiple branches
🌳 Trunk = Main focus
✅ Review = Before merge
🚫 Direct push = Avoid
`,

    revision: "Authentication (SSH/PAT) + Collaboration (Branch → PR → Review → Merge) for secure team development"
  },

  'conflict-cleanup': {
    title: "Conflict Resolution + Cleanup & History Management",
    subtitle: "Handle merge conflicts and manage Git history effectively",
    icon: "⚔️",
    difficulty: "Intermediate",
    duration: "~50 min",
    ready: true,

    topic: "Conflict Resolution + Cleanup & History Management",
    aatma: {
      Architecture: {
        description: "Conflict resolution handles code clashes between branches, while cleanup tools manage and fix commit history.",
        flow: "Branch Changes → Conflict → Resolve → Clean History → Stable Code"
      },

      Application: {
        description: "Used to fix merge issues and maintain a clean and correct Git history."
      },

      Tools_and_Techniques: {
        subtopics: {
          "Conflict Resolution": {
            "What is Merge Conflict": "Occurs when two branches modify the same code differently.",
            "How conflicts occur": "When merging branches with overlapping changes.",
            "Manual conflict resolution": "Edit conflicting code, choose correct version, then commit.",
            "Best practices": [
              "Pull latest code before working",
              "Work on separate branches",
              "Merge frequently",
              "Keep commits small"
            ]
          },

          "Cleanup & History Management": {
            "git reset": "Moves HEAD to previous commit (used to undo changes).",
            "git revert": "Creates new commit to undo previous changes safely.",
            "git rm": "Removes files from repository.",
            "git clean": "Deletes untracked files from working directory.",
            "git commit --amend": "Modifies last commit (message or content)."
          }
        }
      },

      Monitoring_and_Optimization: {
        methods: [
          "Resolve conflicts carefully",
          "Use revert instead of reset in shared repos",
          "Keep commit history clean",
          "Avoid force push in team projects"
        ]
      },

      Advanced_and_RealWorld: {
        description: "Used in real projects to handle merge issues and maintain clean, understandable version history."
      }
    },

    comic: `⚔️ The Conflict Battle & History Cleanup

Dev merged two branches: "CONFLICT! Both changed line 42!"

Git Master appeared: "Welcome to the battlefield of merge conflicts!"

"When two branches change the same code, Git can't decide which to keep."

Conflict markers appeared:
<<<<<<< HEAD
const name = "Alice";
=======
const name = "Bob";
>>>>>>> feature-branch

"You must choose! Edit the file, remove markers, keep what's correct."

Dev fixed it: const name = "Alice";
git add file.js
git commit -m "Resolve conflict"

✅ Conflict resolved!

"Now let's clean up history!"

🔹 git reset: "Go back in time, undo commits (careful!)"
🔹 git revert: "Undo safely by creating new commit"
🔹 git commit --amend: "Fix last commit message or add files"
🔹 git clean: "Delete untracked junk files"
🔹 git rm: "Remove files from Git"

"Remember: Use revert for shared repos, reset only for local!"

Dev smiled: "Now I can handle conflicts and keep history clean!"`,

    deepDive: `Conflict Resolution + Cleanup & History Management

🔹 Understanding Merge Conflicts

What is a Conflict?
- Occurs when same code is modified differently in two branches
- Git cannot automatically decide which version to keep
- Requires manual resolution

When Conflicts Occur:
1. Merging branches
2. Rebasing branches
3. Cherry-picking commits
4. Pulling remote changes

Example Scenario:

Branch A changes line 10: "Hello World"
Branch B changes line 10: "Hello Universe"

When merging: CONFLICT!

🔹 Conflict Markers

Git marks conflicts in files:

<<<<<<< HEAD
Your current branch code
=======
Incoming branch code
>>>>>>> branch-name

Example:

<<<<<<< HEAD
const price = 100;
=======
const price = 200;
>>>>>>> feature-pricing

🔹 Resolving Conflicts

Step-by-Step:

1. Identify conflict
git merge feature-branch
Output: CONFLICT (content): Merge conflict in file.js

2. Check status
git status
Output: both modified: file.js

3. Open file and see markers
<<<<<<< HEAD
code A
=======
code B
>>>>>>> feature

4. Choose resolution:
- Keep HEAD (current branch)
- Keep incoming (feature branch)
- Keep both
- Write new solution

5. Remove conflict markers
Delete <<<<<<, =======, >>>>>>>

6. Stage resolved file
git add file.js

7. Complete merge
git commit -m "Resolve merge conflict"

Real Example:

Before:
<<<<<<< HEAD
function login(user) {
  return user.name;
}
=======
function login(user) {
  return user.email;
}
>>>>>>> feature-auth

After (keeping both):
function login(user) {
  return {
    name: user.name,
    email: user.email
  };
}

🔹 Best Practices for Avoiding Conflicts

✅ Pull latest code before starting work
git pull origin main

✅ Work on separate files/features
- Developer A: login.js
- Developer B: payment.js

✅ Merge frequently
- Don't let branches diverge too much
- Merge main into feature regularly

✅ Keep commits small and focused
- Easier to resolve conflicts
- Clear what changed

✅ Communicate with team
- Coordinate who works on what
- Avoid overlapping work

🔹 Cleanup & History Management

1. git reset - Undo Commits

Moves HEAD to previous commit

Three modes:

a) Soft reset (keep changes staged)
git reset --soft HEAD~1
- Undo commit
- Keep changes in staging area
- Can re-commit

b) Mixed reset (default, keep changes unstaged)
git reset HEAD~1
git reset --mixed HEAD~1
- Undo commit
- Keep changes in working directory
- Not staged

c) Hard reset (delete changes)
git reset --hard HEAD~1
⚠️ DANGEROUS! Deletes all changes!

Examples:

# Undo last commit, keep changes
git reset HEAD~1

# Undo last 3 commits
git reset HEAD~3

# Reset to specific commit
git reset abc123

# Hard reset (careful!)
git reset --hard HEAD~1

⚠️ Warning: Never reset commits pushed to shared branches!

2. git revert - Safe Undo

Creates new commit that undoes previous commit

Syntax:
git revert <commit-hash>

Example:
git revert abc123

What happens:
- Creates new commit
- Undoes changes from specified commit
- Preserves history
- Safe for shared branches

revert vs reset:

reset:
- Rewrites history
- Dangerous for shared branches
- Use only locally

revert:
- Preserves history
- Safe for shared branches
- Creates new commit

3. git commit --amend - Fix Last Commit

Modify the last commit

Use cases:
- Fix commit message
- Add forgotten files
- Modify last commit

Examples:

# Fix commit message
git commit --amend -m "Corrected message"

# Add forgotten file
git add forgotten.js
git commit --amend --no-edit

# Modify and change message
git add file.js
git commit --amend -m "Updated message"

⚠️ Don't amend pushed commits!

4. git rm - Remove Files

Remove files from Git repository

Syntax:
git rm filename

Examples:

# Remove file from Git and disk
git rm file.txt
git commit -m "Remove file"

# Remove from Git, keep on disk
git rm --cached file.txt
git commit -m "Untrack file"

# Remove directory
git rm -r folder/

Use case:
- Remove accidentally committed files
- Untrack files (add to .gitignore)

5. git clean - Delete Untracked Files

Remove untracked files from working directory

Syntax:
git clean -n  # Dry run (preview)
git clean -f  # Force delete
git clean -fd # Delete files and directories

Examples:

# Preview what will be deleted
git clean -n

# Delete untracked files
git clean -f

# Delete files and directories
git clean -fd

# Delete ignored files too
git clean -fx

⚠️ Careful! Deleted files cannot be recovered!

🔹 Complete Workflow Examples

Scenario 1: Resolve Merge Conflict

# Try to merge
git merge feature-branch
Output: CONFLICT in file.js

# Check status
git status

# Open file.js, see conflict markers
# Edit and resolve

# Stage resolved file
git add file.js

# Complete merge
git commit -m "Resolve conflict in file.js"

Scenario 2: Undo Last Commit (Local)

# Undo commit, keep changes
git reset HEAD~1

# Make corrections
# Re-commit
git add .
git commit -m "Corrected commit"

Scenario 3: Undo Pushed Commit (Shared)

# Use revert (safe)
git revert abc123
git push origin main

Scenario 4: Fix Last Commit Message

# Amend message
git commit --amend -m "Fixed typo in message"

Scenario 5: Remove Accidentally Committed File

# Remove from Git, keep locally
git rm --cached secrets.txt
echo "secrets.txt" >> .gitignore
git add .gitignore
git commit -m "Remove secrets file"

🔹 Best Practices

✅ Conflict Resolution:
- Pull before starting work
- Merge frequently
- Communicate with team
- Test after resolving

✅ History Management:
- Use revert for shared branches
- Use reset only locally
- Don't amend pushed commits
- Be careful with git clean

✅ Safety:
- Always preview with -n flag
- Backup before destructive operations
- Understand what command does
- Test in separate branch first`,

    types: `Conflict & Cleanup:

⚔️ Conflict Resolution:
- Identify conflict
- Open file
- Remove markers
- Choose version
- Stage and commit

🔧 Cleanup Commands:
- git reset (undo commits)
- git revert (safe undo)
- git commit --amend (fix last)
- git rm (remove files)
- git clean (delete untracked)

⚠️ Safety:
- revert > reset (shared)
- Preview before clean
- Don't amend pushed commits`,

    qa: [
      { q: "What is merge conflict?", hint: "Think same code", options: ["Git error", "Same code changed differently in two branches", "Branch deletion", "Push failure"], answer: "Same code changed differently in two branches", explanation: "Merge conflict occurs when the same lines of code are modified differently in two branches being merged.", memory: "Conflict = Same code, different changes" },
      { q: "How to resolve conflict?", hint: "Think manual", options: ["Automatic", "Edit file, remove markers, choose version, commit", "Delete branch", "Reset repo"], answer: "Edit file, remove markers, choose version, commit", explanation: "Open conflicted file, remove conflict markers (<<<, ===, >>>), choose correct version, stage file, and commit.", memory: "Resolve = Edit → Remove markers → Commit" },
      { q: "git reset vs git revert?", hint: "Think history", options: ["Same thing", "reset = rewrite history, revert = new commit", "reset is safer", "revert is faster"], answer: "reset = rewrite history, revert = new commit", explanation: "git reset rewrites history (dangerous for shared branches). git revert creates new commit to undo (safe for shared branches).", memory: "reset = Rewrite, revert = New commit" },
      { q: "When to use git revert?", hint: "Think shared", options: ["Never", "For shared/pushed commits", "Only locally", "For new files"], answer: "For shared/pushed commits", explanation: "Use git revert for commits that have been pushed to shared branches. It's safe because it preserves history.", memory: "revert = Safe for shared branches" },
      { q: "What does git commit --amend do?", hint: "Think last commit", options: ["Delete commit", "Modify last commit", "Create branch", "Merge branches"], answer: "Modify last commit", explanation: "git commit --amend modifies the last commit (message or content). Don't use on pushed commits.", memory: "--amend = Fix last commit" },
      { q: "git rm vs git clean?", hint: "Think tracked", options: ["Same thing", "rm = tracked files, clean = untracked files", "rm is faster", "clean is safer"], answer: "rm = tracked files, clean = untracked files", explanation: "git rm removes tracked files from repository. git clean deletes untracked files from working directory.", memory: "rm = Tracked, clean = Untracked" }
    ],

    coding: {
      title: "Conflict Resolution Workflow",
      scenario: "Practice resolving merge conflicts and cleaning history",
      thinkingApproach: [
        "Step 1: Create conflict scenario",
        "Step 2: Identify conflict",
        "Step 3: Resolve manually",
        "Step 4: Test resolution",
        "Step 5: Clean up history",
        "Step 6: Verify result"
      ],
      question: "Simulate conflict resolution",
      input: "Two branches with conflicting changes",
      expectedOutput: "Resolved conflict and clean history",
      solution: `# Conflict Resolution Workflow

# 1. Create conflict scenario
git init conflict-demo
cd conflict-demo

# Create file in main
echo "Hello World" > file.txt
git add file.txt
git commit -m "Initial commit"

# Create branch A
git checkout -b branch-a
echo "Hello from Branch A" > file.txt
git add file.txt
git commit -m "Update from A"

# Create branch B from main
git checkout main
git checkout -b branch-b
echo "Hello from Branch B" > file.txt
git add file.txt
git commit -m "Update from B"

# 2. Try to merge (creates conflict)
git checkout main
git merge branch-a  # Success
git merge branch-b  # CONFLICT!

# 3. Check status
git status
# Output: both modified: file.txt

# 4. Open file.txt and see:
# <<<<<<< HEAD
# Hello from Branch A
# =======
# Hello from Branch B
# >>>>>>> branch-b

# 5. Resolve: Edit file.txt
echo "Hello from Both Branches" > file.txt

# 6. Stage and commit
git add file.txt
git commit -m "Resolve conflict"

# 7. Cleanup: Undo last commit (local only)
git reset --soft HEAD~1
# Make changes
git commit -m "Better resolution"

# 8. Or use revert (safe for shared)
git revert HEAD

# 9. Clean untracked files
git clean -n  # Preview
git clean -f  # Delete`,
      note: "In real scenarios: Test thoroughly after resolving conflicts"
    },

    quiz: [
      { q: "Conflict?", options: ["Same code different", "Git error", "Delete", "None"], answer: 0 },
      { q: "Resolve?", options: ["Edit + commit", "Automatic", "Delete", "None"], answer: 0 },
      { q: "reset vs revert?", options: ["reset=rewrite, revert=new", "Same", "reset safer", "None"], answer: 0 },
      { q: "Shared branch?", options: ["Use revert", "Use reset", "Use clean", "None"], answer: 0 },
      { q: "--amend?", options: ["Fix last commit", "Delete", "Merge", "None"], answer: 0 },
      { q: "git clean?", options: ["Delete untracked", "Delete tracked", "Merge", "None"], answer: 0 },
      { q: "Conflict markers?", options: ["<<<, ===, >>>", "///, ***, ###", "[[[, ===, ]]]", "None"], answer: 0 },
      { q: "Best practice?", options: ["Pull before work", "Never pull", "Always reset", "None"], answer: 0 }
    ],

    interview: `Conflict resolution handles situations where same code is modified differently in two branches. Conflicts are resolved by editing files, removing conflict markers (<<<, ===, >>>), choosing correct version, and committing. History management includes git reset (undo commits, rewrites history), git revert (safe undo with new commit), git commit --amend (fix last commit), git rm (remove tracked files), and git clean (delete untracked files). Best practices: use revert for shared branches, reset only locally, pull before working, merge frequently, and keep commits small.`,

    memory: `
⚔️ Conflict = Same code, different changes
✏️ Resolve = Edit → Remove markers → Commit
🔄 reset = Rewrite history
✅ revert = New commit (safe)
📝 --amend = Fix last commit
🗑️ rm = Remove tracked
🧹 clean = Delete untracked
⚠️ Shared = Use revert
🔒 Local = Can use reset
`,

    revision: "Conflict Resolution (edit + commit) + History Management (reset/revert/amend/rm/clean) for stable codebase"
  },

  'tagging-cicd': {
    title: "Tagging & Release Management + CI/CD Integration",
    subtitle: "Manage software releases and automate deployment pipelines",
    icon: "🏷️",
    difficulty: "Advanced",
    duration: "~55 min",
    ready: true,

    topic: "Tagging & Release Management + CI/CD Integration",
    aatma: {
      Architecture: {
        description: "Tagging marks important versions of code, while CI/CD automates building, testing, and deployment of applications.",
        flow: "Code → Tag Version → Push → CI/CD Trigger → Build → Deploy"
      },

      Application: {
        description: "Used to manage software releases and automate deployment pipelines."
      },

      Tools_and_Techniques: {
        subtopics: {
          "Tagging & Release Management": {
            "Git Tags": "Used to mark specific points in history like releases.",
            "Annotated vs Lightweight": {
              "Annotated": "Stores extra info like author, date, message.",
              "Lightweight": "Simple tag pointing to a commit."
            },
            "Versioning": "Naming releases like v1.0, v2.0 for tracking versions.",
            "Release workflow": "Develop → Test → Tag version → Release to production."
          },

          "CI/CD Integration": {
            "Git with CI/CD pipelines": "Automatically triggers build and deployment on code changes.",
            "GitHub Actions / GitLab CI": "Tools to automate workflows.",
            "Auto build & deploy": "Code is automatically built and deployed after push.",
            "Code triggers": "Events like push, pull request trigger pipelines."
          }
        }
      },

      Monitoring_and_Optimization: {
        methods: [
          "Use tags for every release",
          "Follow proper versioning",
          "Automate deployment using CI/CD",
          "Test before release"
        ]
      },

      Advanced_and_RealWorld: {
        description: "Used in production systems to ensure smooth releases and automated deployments with minimal manual effort."
      }
    },

    comic: `🏷️ The Release Manager's Journey

Dev finished a major feature: "How do I mark this as version 1.0?"

Git Master appeared: "Welcome to the world of Tags and Releases!"

"Tags are like bookmarks in your Git history - marking important versions!"

📌 Two types of tags:

1️⃣ Lightweight tag (simple pointer)
git tag v1.0

2️⃣ Annotated tag (with metadata)
git tag -a v1.0 -m "First stable release"

"Annotated tags store who, when, and why - better for releases!"

Dev created tag: git tag -a v1.0 -m "Production ready"
git push origin v1.0

✅ Version 1.0 released!

"But manually deploying is tedious..."

Git Master: "Enter CI/CD - Continuous Integration/Continuous Deployment!"

🔄 The Magic Pipeline:

1️⃣ You push code to GitHub
2️⃣ GitHub Actions automatically triggers
3️⃣ Runs tests automatically
4️⃣ Builds application
5️⃣ Deploys to production
6️⃣ All without manual work!

"Create .github/workflows/deploy.yml and define your pipeline!"

Dev set up CI/CD:
- Push code → Auto test → Auto deploy
- Tag release → Auto build → Auto publish

"Now every push is tested and deployed automatically!"

Dev smiled: "From manual releases to automated pipelines!"`,

    deepDive: `Tagging & Release Management + CI/CD Integration

🔹 Git Tags - Marking Important Versions

What are Tags?
- Pointers to specific commits
- Mark important points in history
- Usually used for releases (v1.0, v2.0)
- Immutable references

Why Use Tags?
✔ Mark release versions
✔ Easy to find specific versions
✔ Rollback to stable versions
✔ Track project milestones
✔ Semantic versioning

🔹 Types of Tags

1. Lightweight Tags
- Simple pointer to commit
- No extra metadata
- Quick and easy

Create:
git tag v1.0

Use case: Temporary markers, personal bookmarks

2. Annotated Tags (Recommended for Releases)
- Stores full metadata
- Author name and email
- Date and time
- Tag message
- Can be signed with GPG

Create:
git tag -a v1.0 -m "First stable release"

Use case: Official releases, production versions

🔹 Tag Commands

Create Annotated Tag:
git tag -a v1.0.0 -m "Release version 1.0.0"

Create Lightweight Tag:
git tag v1.0.0

Tag Specific Commit:
git tag -a v1.0.0 abc123 -m "Release 1.0"

List All Tags:
git tag
git tag -l
git tag -l "v1.*"  # Pattern matching

Show Tag Details:
git show v1.0.0

Push Tag to Remote:
git push origin v1.0.0

Push All Tags:
git push origin --tags

Delete Local Tag:
git tag -d v1.0.0

Delete Remote Tag:
git push origin --delete v1.0.0

Checkout Tag:
git checkout v1.0.0

🔹 Semantic Versioning (SemVer)

Format: MAJOR.MINOR.PATCH

Example: v2.3.1
- MAJOR (2): Breaking changes
- MINOR (3): New features (backward compatible)
- PATCH (1): Bug fixes

Examples:
v1.0.0 - Initial release
v1.0.1 - Bug fix
v1.1.0 - New feature added
v2.0.0 - Breaking changes

Pre-release versions:
v1.0.0-alpha
v1.0.0-beta
v1.0.0-rc1 (release candidate)

🔹 Release Workflow

Step-by-Step:

1. Complete feature development
git checkout main
git pull origin main

2. Test thoroughly
# Run all tests
# Manual testing
# QA approval

3. Update version in code
# Update package.json, version files
git add .
git commit -m "Bump version to 1.0.0"

4. Create tag
git tag -a v1.0.0 -m "Release version 1.0.0

Features:
- User authentication
- Payment integration
- Dashboard UI

Bug fixes:
- Fixed login issue
- Resolved payment timeout"

5. Push code and tag
git push origin main
git push origin v1.0.0

6. Create GitHub Release
# Go to GitHub → Releases → Create new release
# Select tag v1.0.0
# Add release notes
# Attach binaries if needed
# Publish release

7. Deploy to production
# Manual or automated via CI/CD

🔹 CI/CD Integration

What is CI/CD?

CI (Continuous Integration):
- Automatically build code
- Run tests on every commit
- Catch bugs early
- Merge frequently

CD (Continuous Deployment/Delivery):
- Automatically deploy to production
- Or prepare for deployment
- Reduce manual work
- Faster releases

Benefits:
✔ Automated testing
✔ Faster feedback
✔ Reduced manual errors
✔ Consistent deployments
✔ Faster time to market

🔹 GitHub Actions

What is GitHub Actions?
- Built-in CI/CD for GitHub
- Automate workflows
- Triggered by Git events
- Free for public repos

Basic Workflow File:
.github/workflows/deploy.yml

name: Deploy Application

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Install dependencies
      run: npm install
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build
    
    - name: Deploy
      run: npm run deploy

Triggers:
- push: When code is pushed
- pull_request: When PR is created
- release: When release is published
- schedule: Cron-based scheduling
- workflow_dispatch: Manual trigger

🔹 GitLab CI/CD

Configuration File:
.gitlab-ci.yml

stages:
  - test
  - build
  - deploy

test:
  stage: test
  script:
    - npm install
    - npm test

build:
  stage: build
  script:
    - npm run build
  artifacts:
    paths:
      - dist/

deploy:
  stage: deploy
  script:
    - npm run deploy
  only:
    - main

🔹 Complete CI/CD Pipeline Example

Scenario: Deploy on Tag Push

.github/workflows/release.yml

name: Release and Deploy

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build application
      run: npm run build
    
    - name: Create Release
      uses: actions/create-release@v1
      env:
        GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
      with:
        tag_name: \${{ github.ref }}
        release_name: Release \${{ github.ref }}
        draft: false
        prerelease: false
    
    - name: Deploy to Production
      run: |
        echo "Deploying to production..."
        npm run deploy:prod

Workflow:
1. Developer creates tag: git tag -a v1.0.0 -m "Release"
2. Push tag: git push origin v1.0.0
3. GitHub Actions triggers automatically
4. Runs tests
5. Builds application
6. Creates GitHub release
7. Deploys to production

🔹 Best Practices

Tagging:
✔ Use annotated tags for releases
✔ Follow semantic versioning
✔ Write detailed tag messages
✔ Tag stable, tested code only
✔ Never move or delete published tags

Release Management:
✔ Test thoroughly before release
✔ Document changes in release notes
✔ Keep changelog updated
✔ Version all releases
✔ Backup before major releases

CI/CD:
✔ Test on every commit
✔ Keep pipelines fast
✔ Fail fast on errors
✔ Use staging environment
✔ Monitor deployments
✔ Rollback plan ready

🔹 Real-World Example

Complete Release Process:

# 1. Finish development
git checkout develop
git pull origin develop

# 2. Create release branch
git checkout -b release/1.0.0

# 3. Update version
npm version 1.0.0
git add .
git commit -m "Bump version to 1.0.0"

# 4. Merge to main
git checkout main
git merge release/1.0.0

# 5. Create tag
git tag -a v1.0.0 -m "Release 1.0.0

New Features:
- User authentication
- Payment gateway
- Admin dashboard

Bug Fixes:
- Fixed login timeout
- Resolved payment errors

Breaking Changes:
- API endpoint changed from /api/v1 to /api/v2"

# 6. Push everything
git push origin main
git push origin v1.0.0

# 7. CI/CD automatically:
# - Runs tests
# - Builds application
# - Creates Docker image
# - Deploys to production
# - Sends notifications

# 8. Verify deployment
# Check production site
# Monitor logs
# Check metrics

# 9. Merge back to develop
git checkout develop
git merge main
git push origin develop

# 10. Delete release branch
git branch -d release/1.0.0
git push origin --delete release/1.0.0`,

    types: `Tagging & CI/CD:

🏷️ Tags:
- Lightweight: git tag v1.0
- Annotated: git tag -a v1.0 -m "msg"
- Push: git push origin v1.0
- List: git tag
- Delete: git tag -d v1.0

📦 Versioning:
- MAJOR.MINOR.PATCH
- v1.0.0 (initial)
- v1.0.1 (bug fix)
- v1.1.0 (feature)
- v2.0.0 (breaking)

🔄 CI/CD:
- GitHub Actions
- GitLab CI
- Auto test
- Auto build
- Auto deploy

⚡ Triggers:
- push
- pull_request
- tag
- schedule`,

    qa: [
      { q: "What is a Git tag?", hint: "Think bookmark", options: ["A branch", "A pointer to specific commit marking important version", "A merge", "A conflict"], answer: "A pointer to specific commit marking important version", explanation: "Git tag is a reference to a specific commit, typically used to mark release versions like v1.0, v2.0.", memory: "Tag = Version bookmark" },
      { q: "Annotated vs Lightweight tag?", hint: "Think metadata", options: ["Same thing", "Annotated has metadata, Lightweight is simple pointer", "Annotated is faster", "Lightweight is better"], answer: "Annotated has metadata, Lightweight is simple pointer", explanation: "Annotated tags store author, date, message. Lightweight tags are just pointers. Use annotated for releases.", memory: "Annotated = Full info, Lightweight = Simple" },
      { q: "What is semantic versioning?", hint: "Think MAJOR.MINOR.PATCH", options: ["Random numbers", "MAJOR.MINOR.PATCH format (v1.2.3)", "Date-based", "Sequential"], answer: "MAJOR.MINOR.PATCH format (v1.2.3)", explanation: "Semantic versioning uses MAJOR.MINOR.PATCH where MAJOR = breaking changes, MINOR = new features, PATCH = bug fixes.", memory: "SemVer = MAJOR.MINOR.PATCH" },
      { q: "What is CI/CD?", hint: "Think automation", options: ["A Git command", "Continuous Integration/Deployment - automated build and deploy", "A branch type", "A merge strategy"], answer: "Continuous Integration/Deployment - automated build and deploy", explanation: "CI/CD automates testing, building, and deploying code. CI = Continuous Integration, CD = Continuous Deployment.", memory: "CI/CD = Auto test + build + deploy" },
      { q: "What triggers GitHub Actions?", hint: "Think events", options: ["Nothing", "Git events like push, PR, tag", "Manual only", "Time only"], answer: "Git events like push, PR, tag", explanation: "GitHub Actions can be triggered by push, pull_request, release, tag creation, schedule, or manual dispatch.", memory: "Actions = Triggered by Git events" },
      { q: "How to push tag to remote?", hint: "Think command", options: ["git push", "git push origin v1.0", "git tag push", "git send tag"], answer: "git push origin v1.0", explanation: "Use 'git push origin v1.0' to push specific tag, or 'git push origin --tags' to push all tags.", memory: "Push tag = git push origin <tag>" }
    ],

    coding: {
      title: "Complete Release & CI/CD Workflow",
      scenario: "Practice tagging releases and setting up CI/CD pipeline",
      thinkingApproach: [
        "Step 1: Create and test feature",
        "Step 2: Prepare for release",
        "Step 3: Create version tag",
        "Step 4: Push tag to trigger CI/CD",
        "Step 5: Setup GitHub Actions",
        "Step 6: Automate deployment"
      ],
      question: "Simulate release and CI/CD workflow",
      input: "Completed feature ready for release",
      expectedOutput: "Tagged release with automated deployment",
      solution: `# Complete Release & CI/CD Workflow

# 1. Prepare release
git checkout main
git pull origin main

# 2. Update version in package.json
npm version 1.0.0
# This creates commit and tag automatically

# Or manually:
echo '{"version": "1.0.0"}' > version.json
git add version.json
git commit -m "Bump version to 1.0.0"

# 3. Create annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0

Features:
- User authentication
- Payment integration
- Dashboard

Bug Fixes:
- Fixed login issue
- Resolved timeout"

# 4. Push code and tag
git push origin main
git push origin v1.0.0

# 5. Create GitHub Actions workflow
mkdir -p .github/workflows
cat > .github/workflows/release.yml << 'EOF'
name: Release and Deploy

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      
      - name: Install dependencies
        run: npm install
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        run: echo "Deploying to production..."
EOF

# 6. Commit workflow
git add .github/workflows/release.yml
git commit -m "Add CI/CD pipeline"
git push origin main

# 7. List all tags
git tag

# 8. View tag details
git show v1.0.0

# 9. Delete tag if needed (careful!)
# git tag -d v1.0.0
# git push origin --delete v1.0.0`,
      note: "In production: Test thoroughly before tagging, use staging environment, monitor deployments"
    },

    quiz: [
      { q: "Tag?", options: ["Version marker", "Branch", "Merge", "None"], answer: 0 },
      { q: "Annotated?", options: ["Has metadata", "Simple pointer", "Faster", "None"], answer: 0 },
      { q: "SemVer?", options: ["MAJOR.MINOR.PATCH", "Random", "Date", "None"], answer: 0 },
      { q: "CI/CD?", options: ["Auto build+deploy", "Manual", "Branch", "None"], answer: 0 },
      { q: "Push tag?", options: ["git push origin v1.0", "git tag push", "git send", "None"], answer: 0 },
      { q: "GitHub Actions?", options: ["Automation tool", "Branch type", "Merge tool", "None"], answer: 0 },
      { q: "Trigger?", options: ["Git events", "Manual only", "Never", "None"], answer: 0 },
      { q: "Best for release?", options: ["Annotated tag", "Lightweight", "Branch", "None"], answer: 0 }
    ],

    interview: `Tagging marks important versions in Git history, typically for releases. Annotated tags (git tag -a) store metadata like author, date, and message, while lightweight tags are simple pointers. Semantic versioning (MAJOR.MINOR.PATCH) is standard for version numbering. CI/CD automates testing, building, and deployment. GitHub Actions and GitLab CI trigger workflows on Git events like push, pull requests, or tag creation. Complete workflow: develop → test → tag version → push → CI/CD triggers → auto build → auto deploy. Best practices include using annotated tags for releases, following semantic versioning, testing before release, and automating deployments.`,

    memory: `
🏷️ Tag = Version bookmark
📝 Annotated = Full metadata
🔖 Lightweight = Simple pointer
📦 SemVer = MAJOR.MINOR.PATCH
🔄 CI/CD = Auto test + build + deploy
⚡ Actions = Triggered by events
📤 Push tag = git push origin <tag>
✅ Release = Tag + Deploy
`,

    revision: "Tagging (version markers) + CI/CD (automated pipelines) for streamlined release management and deployment"
  },

  'git-best-practices': {
    title: "Git Best Practices",
    subtitle: "Professional Git workflows for clean, safe, and efficient development",
    icon: "⭐",
    difficulty: "Intermediate",
    duration: "~40 min",
    ready: true,

    topic: "Git Best Practices",
    aatma: {
      Architecture: {
        description: "Best practices ensure clean, safe, and efficient use of Git in real-world projects.",
        flow: "Write Code → Follow Standards → Commit Properly → Collaborate Safely → Maintain Clean Repo"
      },

      Application: {
        description: "Used to maintain code quality, avoid mistakes, and improve team collaboration."
      },

      Tools_and_Techniques: {
        subtopics: {
          "Commit message standards": "Write clear messages like 'Added login feature' instead of vague messages like 'update'.",
          "Small commits": "Commit small changes frequently instead of large changes at once.",
          "Branching strategy": "Use separate branches like feature/login, bugfix/payment for better organization.",
          "Avoid pushing directly to main": "Always use branches and pull requests to prevent breaking production code.",
          "Use .gitignore properly": "Exclude unnecessary files like node_modules, logs, and secrets from repository."
        }
      },

      Monitoring_and_Optimization: {
        methods: [
          "Follow consistent commit naming",
          "Keep commits small and frequent",
          "Use branches for all features",
          "Review code before merging",
          "Keep repository clean"
        ]
      },

      Advanced_and_RealWorld: {
        description: "Best practices are essential in real projects to ensure scalable, maintainable, and collaborative development."
      }
    },

    comic: `⭐ The Git Master's Wisdom

Junior Dev pushed code: "update", "fix", "changes", "asdf"

Senior Dev: "Stop! Let me teach you Git Best Practices!"

📝 Rule 1: Clear Commit Messages
❌ Bad: "update", "fix", "changes"
✅ Good: "Add user login feature", "Fix payment timeout bug"

"Your future self will thank you!"

🔹 Rule 2: Small, Frequent Commits
❌ Bad: 1 commit with 50 file changes
✅ Good: 10 commits, each with focused changes

"Easier to review, easier to revert!"

🌿 Rule 3: Use Branches
❌ Bad: Work directly on main
✅ Good: feature/login, bugfix/payment

"Keep main stable, experiment in branches!"

🚫 Rule 4: Never Push to Main Directly
❌ Bad: git push origin main (without review)
✅ Good: Create PR → Review → Merge

"Code review catches bugs before production!"

📁 Rule 5: Use .gitignore
❌ Bad: Commit node_modules, .env, logs
✅ Good: Add to .gitignore

"Don't bloat repo with unnecessary files!"

🔐 Rule 6: Never Commit Secrets
❌ Bad: API keys, passwords in code
✅ Good: Use environment variables

"Security first!"

✅ Rule 7: Pull Before Push
❌ Bad: Push without pulling
✅ Good: git pull → resolve conflicts → git push

"Stay in sync with team!"

📊 Rule 8: Review Before Commit
❌ Bad: git add . without checking
✅ Good: git status → git diff → then commit

"Know what you're committing!"

Junior Dev: "Now I'm a Git professional!"`,

    deepDive: `Git Best Practices - Professional Workflows

🔹 1. Commit Message Standards

Why Important?
✔ Understand what changed
✔ Easy to find specific changes
✔ Better collaboration
✔ Professional codebase

Bad Commit Messages:
❌ "update"
❌ "fix"
❌ "changes"
❌ "asdf"
❌ "final version"
❌ "test"

Good Commit Messages:
✅ "Add user authentication feature"
✅ "Fix payment timeout bug"
✅ "Update README with installation steps"
✅ "Refactor database connection logic"
✅ "Remove deprecated API endpoints"

Commit Message Format:

Basic:
<type>: <subject>

Example:
feat: Add user login
fix: Resolve payment error
docs: Update API documentation
refactor: Simplify auth logic
test: Add unit tests for login

Detailed Format:
<type>: <subject>

<body>

<footer>

Example:
feat: Add user authentication

Implemented JWT-based authentication with:
- Login endpoint
- Token validation
- Refresh token logic

Closes #123

Commit Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Adding tests
- chore: Maintenance

Best Practices:
✔ Use present tense: "Add" not "Added"
✔ Use imperative mood: "Fix" not "Fixes"
✔ Be specific and clear
✔ Keep subject under 50 characters
✔ Capitalize first letter
✔ No period at end

🔹 2. Small, Frequent Commits

Why Small Commits?
✔ Easier to review
✔ Easier to revert
✔ Clear history
✔ Better collaboration
✔ Easier debugging

Bad Practice:
❌ Work for 3 days
❌ Change 50 files
❌ One massive commit
❌ Message: "update"

Good Practice:
✅ Commit after each logical change
✅ Each commit = one purpose
✅ Clear, focused commits
✅ Descriptive messages

Example Workflow:

# Bad: One massive commit
git add .
git commit -m "update"

# Good: Multiple focused commits
git add login.js
git commit -m "Add login form validation"

git add auth.js
git commit -m "Implement JWT authentication"

git add user.model.js
git commit -m "Add user model with password hashing"

Rule of Thumb:
If you use "and" in commit message, split it!

❌ "Add login and payment and dashboard"
✅ Three separate commits

🔹 3. Branching Strategy

Why Use Branches?
✔ Isolated development
✔ Safe experimentation
✔ Parallel work
✔ Stable main branch
✔ Easy rollback

Branch Naming Convention:

Format: <type>/<description>

Examples:
✅ feature/user-authentication
✅ feature/payment-integration
✅ bugfix/login-timeout
✅ bugfix/payment-error
✅ hotfix/security-patch
✅ docs/api-documentation
✅ refactor/database-queries

❌ branch1
❌ test
❌ new
❌ my-branch

Branch Workflow:

# Create feature branch
git checkout -b feature/user-login

# Work on feature
# Make commits

# Push branch
git push origin feature/user-login

# Create Pull Request
# Review and merge

# Delete branch after merge
git branch -d feature/user-login
git push origin --delete feature/user-login

🔹 4. Never Push Directly to Main

Why?
✔ Prevents breaking production
✔ Enables code review
✔ Catches bugs early
✔ Team collaboration
✔ Quality assurance

Bad Practice:
❌ git checkout main
❌ # Make changes
❌ git push origin main

Good Practice:
✅ Create branch
✅ Make changes
✅ Push branch
✅ Create Pull Request
✅ Code review
✅ Merge after approval

Protect Main Branch:

On GitHub:
1. Settings → Branches
2. Add rule for main
3. Require pull request reviews
4. Require status checks
5. No direct pushes

🔹 5. Use .gitignore Properly

What to Ignore?
✔ Dependencies (node_modules/)
✔ Build outputs (dist/, build/)
✔ Environment files (.env)
✔ IDE files (.vscode/, .idea/)
✔ OS files (.DS_Store, Thumbs.db)
✔ Log files (*.log)
✔ Temporary files (*.tmp, *.cache)

Example .gitignore:

# Dependencies
node_modules/
vendor/

# Environment
.env
.env.local
.env.production

# Build
dist/
build/
*.min.js
*.min.css

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
logs/

# Testing
coverage/
.nyc_output/

# Secrets
*.pem
*.key
secrets.json

Create .gitignore:

# Create file
touch .gitignore

# Add patterns
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore

# Commit
git add .gitignore
git commit -m "Add .gitignore"

Untrack Already Committed Files:

# Remove from Git, keep locally
git rm --cached filename
git rm --cached -r node_modules/

# Commit
git commit -m "Remove tracked files"

🔹 6. Never Commit Secrets

What NOT to Commit:
❌ API keys
❌ Passwords
❌ Database credentials
❌ Private keys
❌ Access tokens
❌ SSH keys

Best Practices:

✅ Use environment variables
✅ Use .env files (add to .gitignore)
✅ Use secret management tools
✅ Use config files (not in Git)

Example:

Bad:
// config.js
const API_KEY = "sk_live_abc123xyz";

Good:
// config.js
const API_KEY = process.env.API_KEY;

// .env (not committed)
API_KEY=sk_live_abc123xyz

If Accidentally Committed:

1. Remove from code
2. Add to .gitignore
3. Commit changes
4. Rotate/change the secret immediately!
5. Use git filter-branch or BFG to remove from history

🔹 7. Pull Before Push

Why?
✔ Stay synchronized
✔ Avoid conflicts
✔ Get latest changes
✔ Smooth collaboration

Best Practice:

# Always pull first
git pull origin main

# Resolve any conflicts

# Then push
git push origin main

Daily Workflow:

# Morning: Start work
git checkout main
git pull origin main
git checkout -b feature/new-feature

# Work and commit

# Before pushing
git checkout main
git pull origin main
git checkout feature/new-feature
git merge main
# Resolve conflicts if any

# Push
git push origin feature/new-feature

🔹 8. Review Before Commit

Always Check:
✔ What files changed
✔ What lines changed
✔ No debug code
✔ No commented code
✔ No secrets

Workflow:

# Check status
git status

# Review changes
git diff

# Review specific file
git diff filename.js

# Stage carefully
git add filename.js

# Review staged changes
git diff --staged

# Commit
git commit -m "Clear message"

Avoid:
❌ git add .
❌ git commit -m "update"
❌ git push

🔹 Additional Best Practices

9. Keep Commits Atomic
- One commit = one logical change
- Should be revertable independently

10. Write Tests
- Test before committing
- Automated tests in CI/CD

11. Use Meaningful Branch Names
- Descriptive and clear
- Follow team conventions

12. Delete Merged Branches
- Keep repository clean
- Remove clutter

13. Rebase vs Merge
- Use merge for shared branches
- Use rebase for local cleanup

14. Document in README
- Setup instructions
- Contribution guidelines
- Branch strategy

15. Regular Commits
- Commit daily
- Don't wait too long
- Easier to track progress

🔹 Complete Best Practice Workflow

# 1. Start work
git checkout main
git pull origin main
git checkout -b feature/user-profile

# 2. Make small changes
# Edit profile.js
git add profile.js
git commit -m "Add profile component structure"

# Edit profile.css
git add profile.css
git commit -m "Add profile styling"

# Edit api.js
git add api.js
git commit -m "Add profile API endpoint"

# 3. Review before pushing
git log --oneline -3
git diff main

# 4. Push branch
git push origin feature/user-profile

# 5. Create Pull Request
# On GitHub/GitLab

# 6. After merge, cleanup
git checkout main
git pull origin main
git branch -d feature/user-profile`,

    types: `Git Best Practices:

📝 Commit Messages:
- Clear and descriptive
- Present tense
- Under 50 chars
- Type: feat, fix, docs

🔹 Small Commits:
- Frequent commits
- One purpose each
- Easy to review
- Easy to revert

🌿 Branching:
- feature/name
- bugfix/name
- hotfix/name
- Never work on main

🚫 Never:
- Push to main directly
- Commit secrets
- Commit node_modules
- Use vague messages

✅ Always:
- Pull before push
- Review before commit
- Use .gitignore
- Code review via PR`,

    qa: [
      { q: "Good commit message?", hint: "Think clear", options: ["'update'", "'Add user login feature'", "'fix'", "'changes'"], answer: "'Add user login feature'", explanation: "Good commit messages are clear, descriptive, and explain what changed. Use present tense and be specific.", memory: "Commit = Clear + Descriptive" },
      { q: "Why small commits?", hint: "Think review", options: ["Faster", "Easier to review and revert", "Required", "No reason"], answer: "Easier to review and revert", explanation: "Small, focused commits are easier to review, understand, and revert if needed. Each commit should have one logical purpose.", memory: "Small commits = Easy review + revert" },
      { q: "Branch naming?", hint: "Think descriptive", options: ["branch1", "feature/user-login", "test", "new"], answer: "feature/user-login", explanation: "Use descriptive branch names with type prefix: feature/, bugfix/, hotfix/, docs/.", memory: "Branch = type/description" },
      { q: "Push to main directly?", hint: "Think safety", options: ["Always", "Never - use PR", "Sometimes", "When urgent"], answer: "Never - use PR", explanation: "Never push directly to main. Always create branch, push, create PR, get review, then merge. Keeps main stable.", memory: "Main = Protected, use PR" },
      { q: "What to add to .gitignore?", hint: "Think unnecessary", options: ["All files", "node_modules, .env, logs", "Source code", "Nothing"], answer: "node_modules, .env, logs", explanation: "Ignore dependencies, environment files, logs, build outputs, IDE files, and OS files. Don't bloat repo.", memory: ".gitignore = Dependencies + secrets + temp" },
      { q: "Commit secrets?", hint: "Think security", options: ["Yes", "Never - use env variables", "Sometimes", "In private repos"], answer: "Never - use env variables", explanation: "Never commit API keys, passwords, or secrets. Use environment variables and .env files (add to .gitignore).", memory: "Secrets = Never commit" },
      { q: "Before pushing?", hint: "Think sync", options: ["Nothing", "Always pull first", "Delete files", "Create tag"], answer: "Always pull first", explanation: "Always pull latest changes before pushing to stay synchronized and avoid conflicts.", memory: "Before push = Pull first" },
      { q: "Before committing?", hint: "Think review", options: ["Nothing", "git status and git diff", "Delete files", "Push immediately"], answer: "git status and git diff", explanation: "Always review changes with git status and git diff before committing. Know what you're committing.", memory: "Before commit = Review changes" }
    ],

    coding: {
      title: "Git Best Practices Workflow",
      scenario: "Practice professional Git workflow with best practices",
      thinkingApproach: [
        "Step 1: Setup .gitignore",
        "Step 2: Create feature branch",
        "Step 3: Make small commits",
        "Step 4: Write clear messages",
        "Step 5: Review before commit",
        "Step 6: Create PR"
      ],
      question: "Implement best practices workflow",
      input: "New feature development",
      expectedOutput: "Clean, professional Git history",
      solution: `# Git Best Practices Workflow

# 1. Setup repository
git init best-practices-demo
cd best-practices-demo

# 2. Create .gitignore
cat > .gitignore << EOF
node_modules/
.env
.env.local
dist/
build/
*.log
.DS_Store
.vscode/
EOF

git add .gitignore
git commit -m "chore: Add .gitignore"

# 3. Create initial files
echo "# Best Practices Demo" > README.md
git add README.md
git commit -m "docs: Add README"

# 4. Create feature branch (not main!)
git checkout -b feature/user-authentication

# 5. Make small, focused commits
echo "const login = () => {}" > auth.js
git add auth.js
git commit -m "feat: Add login function structure"

echo "const validateUser = () => {}" >> auth.js
git add auth.js
git commit -m "feat: Add user validation logic"

echo "const hashPassword = () => {}" >> auth.js
git add auth.js
git commit -m "feat: Add password hashing"

# 6. Review before pushing
git log --oneline -5
git diff main

# 7. Push branch
git push origin feature/user-authentication

# 8. Create Pull Request on GitHub
# - Add description
# - Request reviewers
# - Link issues

# 9. After approval and merge
git checkout main
git pull origin main

# 10. Delete merged branch
git branch -d feature/user-authentication
git push origin --delete feature/user-authentication

# Best Practices Checklist:
# ✅ Used .gitignore
# ✅ Clear commit messages
# ✅ Small, focused commits
# ✅ Feature branch (not main)
# ✅ Reviewed before pushing
# ✅ Used Pull Request
# ✅ Cleaned up after merge`,
      note: "In real projects: Follow team conventions, use linters, write tests, document changes"
    },

    quiz: [
      { q: "Good message?", options: ["'Add login feature'", "'update'", "'fix'", "'changes'"], answer: 0 },
      { q: "Small commits?", options: ["Easy review", "Slower", "Bad", "None"], answer: 0 },
      { q: "Branch name?", options: ["feature/name", "branch1", "test", "new"], answer: 0 },
      { q: "Push to main?", options: ["Never - use PR", "Always", "Sometimes", "When urgent"], answer: 0 },
      { q: ".gitignore?", options: ["node_modules, .env", "All files", "Nothing", "Source code"], answer: 0 },
      { q: "Commit secrets?", options: ["Never", "Yes", "Sometimes", "In private"], answer: 0 },
      { q: "Before push?", options: ["Pull first", "Nothing", "Delete", "Tag"], answer: 0 },
      { q: "Before commit?", options: ["Review changes", "Nothing", "Delete", "Push"], answer: 0 }
    ],

    interview: `Git best practices ensure professional, maintainable codebases. Key practices include: writing clear, descriptive commit messages in present tense; making small, frequent commits with single purpose; using descriptive branch names (feature/, bugfix/); never pushing directly to main (use PRs); properly configuring .gitignore for dependencies, logs, and secrets; never committing sensitive data; always pulling before pushing; and reviewing changes before committing. Additional practices include atomic commits, code reviews, protecting main branch, deleting merged branches, and maintaining clean repository. These practices improve code quality, enable better collaboration, make debugging easier, and ensure stable production code.`,

    memory: `
📝 Commit = Clear + Descriptive
🔹 Small commits = Easy review + revert
🌿 Branch = type/description
🚫 Main = Protected, use PR
📁 .gitignore = Dependencies + secrets + temp
🔐 Secrets = Never commit
⬇️ Before push = Pull first
👀 Before commit = Review changes
✅ Always = Branch + PR + Review
`,

    revision: "Git Best Practices = Clear commits + Small changes + Branches + PR + .gitignore + No secrets + Pull first + Review for professional development"
  }

};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = gitContent;
}
