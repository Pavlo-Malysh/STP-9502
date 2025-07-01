document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('idWhyPlay');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateGroups();
          } else {
            resetGroups();
          }
        });
      },
      { threshold: 0.3 }
    );
  
    observer.observe(section);
  
    function animateGroups() {
      const groups = document.querySelectorAll('#idWhyPlay [data-group]');
      groups.forEach(item => item.removeAttribute('data-show'));
  
      const uniqueGroups = [...new Set(Array.from(groups).map(el => el.dataset.group))];
  
      uniqueGroups.forEach((groupId, index) => {
        const groupItems = document.querySelectorAll(`#idWhyPlay [data-group="${groupId}"]`);
        setTimeout(() => {
          groupItems.forEach(item => item.setAttribute('data-show', ''));
        }, index * 600);
      });
    }
  
    function resetGroups() {
      const groups = document.querySelectorAll('#idWhyPlay [data-group]');
      groups.forEach(item => item.removeAttribute('data-show'));
    }
  });
  