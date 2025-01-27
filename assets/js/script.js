/* Icon Effect */

const icons = document.querySelectorAll('.icon');
const sections = document.querySelectorAll('.section');

function updateActiveIcon() {
  let index = sections.length - 1;
  while (index >= 0 && window.scrollY < sections[index].offsetTop - 50) {
    index--;
  }

  icons.forEach(icon => icon.classList.remove('active'));
  if (index >= 0) {
    icons[index].classList.add('active');
  }
}

window.addEventListener('scroll', updateActiveIcon);
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
  typeSpeed: 100,   // typing speed in milliseconds
  backSpeed: 50,    // backspacing speed in milliseconds
  backDelay: 1000,  // delay before starting to backspace
  loop: true        // make it loop continuously
};

var typed = new Typed("#typed-output", options);