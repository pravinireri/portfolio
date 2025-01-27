/* Fade-in Effect */

const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, observerOptions);


const sections = document.querySelectorAll('.section');
sections.forEach((section) => {
  observer.observe(section);
});


/* Scroll Effect */


const icons = document.querySelectorAll('.nav-icon');

const navIcons = Array.from(icons).slice(0, -1); 
let lastIndex = -1;

function updateActiveIcon() {
  let index = sections.length - 1;

  while (index >= 0 && window.scrollY + window.innerHeight / 2 < sections[index].offsetTop) {
    index--;
  }

  if (index !== lastIndex) {
    navIcons[lastIndex]?.classList.remove('active');
    navIcons[index]?.classList.add('active');
    lastIndex = index;
  }
}

window.addEventListener('scroll', () => {
  requestAnimationFrame(() => {
    updateActiveIcon();
  });
});

updateActiveIcon();


/* Type Effect */

var options = {
  strings: [
    "Web Developer",
    "Full Stack Developer",
    "Freelance Web Developer",
    "Front-End Developer",
    "Back-End Developer"
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
};

var typed = new Typed("#typed-output", options);

/* Exit Button */

const exitButton = document.querySelector('.bottom-icons .nav-icon');

exitButton.addEventListener('click', () => {
  window.location.href = 'https://github.com/pravinireri';
});

/* Smooth Scrolling */
const links = document.querySelectorAll('.sidebar a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    navIcons.forEach(icon => icon.classList.remove('active'));

    const clickedIcon = link.closest('.nav-icon');
    clickedIcon.classList.add('active');

    const targetId = link.getAttribute('href'); 
    const targetSection = document.querySelector(targetId); 

    window.scrollTo({
      top: targetSection.offsetTop - 20,
      behavior: 'smooth'
    });
  });
});

