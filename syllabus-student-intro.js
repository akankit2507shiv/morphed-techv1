/** Inject student learning banner on syllabus / module list pages */
function injectSyllabusStudentIntro(moduleKey, title, topicCount, anchorId) {
  if (typeof TopicStudentView === 'undefined') return;
  const anchor = document.getElementById(anchorId || 'syllabusStudentIntro');
  if (!anchor) return;
  anchor.innerHTML = TopicStudentView.renderSyllabusBanner(moduleKey, title, topicCount);
}
