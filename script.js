
function initNavigation() {
  const nav = document.getElementById('navigation');
  const navBtns = document.querySelectorAll('.nav-btn');
  const sections = ['now', 'work', 'systems', 'log', 'skills', 'contact'];
  
  let isScrolled = false;
  let activeSection = '';

  function handleScroll() {
    const scrollY = window.scrollY;
    const newIsScrolled = scrollY > 100;
    
    if (newIsScrolled !== isScrolled) {
      isScrolled = newIsScrolled;
      nav.style.opacity = isScrolled ? '1' : '0.6';
    }
    
    const scrollPosition = scrollY + 200;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionId = sections[i];
      const element = document.getElementById(sectionId);
      
      if (element && element.offsetTop <= scrollPosition) {
        if (activeSection !== sectionId) {
          activeSection = sectionId;
          updateActiveNavButton(sectionId);
        }
        break;
      }
    }
  }

  function updateActiveNavButton(sectionId) {
    navBtns.forEach(btn => {
      if (btn.dataset.section === sectionId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scrollToSection(btn.dataset.section);
    });
  });

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  handleScroll();
}

function initNowSection() {
  const nowItems = document.querySelectorAll('.now-item');
  
  nowItems.forEach(item => {
    const detail = item.querySelector('.now-detail');
    
    item.addEventListener('mouseenter', () => {
      detail.style.maxHeight = '40px';
      detail.style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', () => {
      detail.style.maxHeight = '0';
      detail.style.opacity = '0';
    });
  });
}

function initWorkAccordion() {
  const workItems = document.querySelectorAll('.work-item');
  let expandedIndex = 0; // First item expanded by default
  
  workItems.forEach((item, index) => {
    const content = item.querySelector('.work-content');
    const chevron = item.querySelector('.work-chevron');
    
    if (index === expandedIndex) {
      item.dataset.expanded = 'true';
      item.style.backgroundColor = 'hsl(var(--surface-subtle))';
      content.style.maxHeight = '500px';
      content.style.opacity = '1';
      chevron.style.transform = 'rotate(180deg)';
    } else {
      item.dataset.expanded = 'false';
      item.style.backgroundColor = 'transparent';
      content.style.maxHeight = '0';
      content.style.opacity = '0';
      chevron.style.transform = 'rotate(0deg)';
    }
  });
  
  workItems.forEach((item, index) => {
    const header = item.querySelector('.work-header');
    const content = item.querySelector('.work-content');
    const chevron = item.querySelector('.work-chevron');
    
    header.addEventListener('click', () => {
      const isExpanded = item.dataset.expanded === 'true';
      
      if (isExpanded) {
        expandedIndex = null;
        item.dataset.expanded = 'false';
        item.style.backgroundColor = 'transparent';
        content.style.maxHeight = '0';
        content.style.opacity = '0';
        chevron.style.transform = 'rotate(0deg)';
      } else {
        workItems.forEach((otherItem) => {
          const otherContent = otherItem.querySelector('.work-content');
          const otherChevron = otherItem.querySelector('.work-chevron');
          otherItem.dataset.expanded = 'false';
          otherItem.style.backgroundColor = 'transparent';
          otherContent.style.maxHeight = '0';
          otherContent.style.opacity = '0';
          otherChevron.style.transform = 'rotate(0deg)';
        });
        
        expandedIndex = index;
        item.dataset.expanded = 'true';
        item.style.backgroundColor = 'hsl(var(--surface-subtle))';
        content.style.maxHeight = '500px';
        content.style.opacity = '1';
        chevron.style.transform = 'rotate(180deg)';
      }
    });
  });
}

function initPhilosophyTabs() {
  const buttons = document.querySelectorAll('.philosophy-btn');
  const panels = document.querySelectorAll('.philosophy-panel');
  
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('bg-[hsl(var(--foreground))]');
        btn.classList.remove('text-[hsl(var(--background))]');
        btn.classList.add('text-[hsl(var(--text-quiet))]');
      });
      panels.forEach(panel => {
        panel.classList.remove('active');
        panel.classList.add('hidden');
      });
      
      button.classList.add('active');
      button.classList.add('bg-[hsl(var(--foreground))]');
      button.classList.add('text-[hsl(var(--background))]');
      button.classList.remove('text-[hsl(var(--text-quiet))]');
      panels[index].classList.add('active');
      panels[index].classList.remove('hidden');
    });
  });
}

function initLogSection() {
  const logEntries = document.querySelectorAll('.log-entry');
  
  logEntries.forEach(entry => {
    const context = entry.querySelector('.log-context');
    const dot = entry.querySelector('.timeline-dot');
    
    entry.addEventListener('mouseenter', () => {
      if (context) {
        context.style.maxHeight = '60px';
        context.style.opacity = '1';
      }
      if (dot) {
        dot.style.backgroundColor = 'hsl(var(--accent))';
        dot.style.transform = 'translateY(-50%) scale(1.5)';
      }
    });
    
    entry.addEventListener('mouseleave', () => {
      if (context) {
        context.style.maxHeight = '0';
        context.style.opacity = '0';
      }
      if (dot) {
        dot.style.backgroundColor = 'hsl(var(--border))';
        dot.style.transform = 'translateY(-50%) scale(1)';
      }
    });
  });
}

function initSkillsFilter() {
  const filters = document.querySelectorAll('.skill-filter');
  const skillTags = document.querySelectorAll('.skill-tag');
  
  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.category;
      
      filters.forEach(f => {
        f.classList.remove('active');
        f.classList.remove('bg-[hsl(var(--foreground))]');
        f.classList.remove('text-[hsl(var(--background))]');
        f.classList.add('text-[hsl(var(--text-quiet))]');
        f.classList.add('border');
        f.classList.add('border-[hsl(var(--border))]');
      });
      filter.classList.add('active');
      filter.classList.add('bg-[hsl(var(--foreground))]');
      filter.classList.add('text-[hsl(var(--background))]');
      filter.classList.remove('text-[hsl(var(--text-quiet))]');
      filter.classList.remove('border');
      filter.classList.remove('border-[hsl(var(--border))]');
      
      skillTags.forEach(tag => {
        if (category === 'all' || tag.dataset.category === category) {
          tag.style.display = 'inline-block';
        } else {
          tag.style.display = 'none';
        }
      });
    });
  });
  
  skillTags.forEach(tag => {
    let tooltip = null;
    
    tag.addEventListener('mouseenter', () => {
      if (tag.dataset.tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] text-[0.75rem] font-[\'JetBrains_Mono\'] rounded-sm whitespace-nowrap z-10';
        tooltip.textContent = tag.dataset.tooltip;
        tooltip.style.animation = 'fadeGentle 0.2s ease-out forwards';
        tag.appendChild(tooltip);
        
        const arrow = document.createElement('div');
        arrow.className = 'absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[hsl(var(--foreground))]';
        tooltip.appendChild(arrow);
      }
    });
    
    tag.addEventListener('mouseleave', () => {
      if (tooltip && tooltip.parentNode) {
        tooltip.parentNode.removeChild(tooltip);
        tooltip = null;
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initNowSection();
  initWorkAccordion();
  initPhilosophyTabs();
  initLogSection();
  initSkillsFilter();
  
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
});
