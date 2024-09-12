const announcements = [
    "School will be closed on Friday due to maintenance.",
    "Parent-teacher conferences will be held next week.",
    "New assignments are available for 10th-grade students."
  ];
  
  window.onload = function() {
    const announcementList = document.getElementById('announcementList');
    announcements.forEach(announcement => {
      const li = document.createElement('li');
      li.innerText = announcement;
      announcementList.appendChild(li);
    });
  };
  