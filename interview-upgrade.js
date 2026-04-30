// Interview Tab Navigation
function showInterviewTab(tabNum) {
  for(let i=1; i<=5; i++) {
    document.getElementById('interview-content-'+i).classList.remove('active');
    document.getElementById('interview-tab-'+i).classList.remove('active');
  }
  document.getElementById('interview-content-'+tabNum).classList.add('active');
  document.getElementById('interview-tab-'+tabNum).classList.add('active');
  document.getElementById('interview-progress').style.width = (tabNum * 20) + '%';
  document.getElementById('interview-step-text').textContent = 'Step ' + tabNum + '/5';
}

// Copy Template Function
function copyTemplate() {
  const template = `I have X years of experience in Data Engineering.

I work primarily with SQL, Python, PySpark, and AWS.

Recently, I worked on building an end-to-end ETL pipeline where we handled around 20GB daily data.

My role was to design and implement the pipeline, ensuring performance and scalability.

For this, I used S3 for storage, PySpark for transformation, Airflow for orchestration, and Redshift for data warehousing.

My latest project was [Project Name], where I solved [specific problem].`;
  
  document.getElementById('introText').value = template;
  alert('✅ Template copied to text area!');
}

// Timer Function
let timerInterval;
function startTimer() {
  clearInterval(timerInterval);
  let seconds = 180; // 3 minutes
  const display = document.getElementById('timerDisplay');
  
  timerInterval = setInterval(() => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    display.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    
    if (seconds <= 0) {
      clearInterval(timerInterval);
      display.textContent = '⏰ Time Up!';
      alert('⏰ 3 minutes completed!');
    }
    seconds--;
  }, 1000);
}
