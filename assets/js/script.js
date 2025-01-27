/* Icon Effect */

const icons = document.querySelectorAll('.icon');
const sections = document.querySelectorAll('.section');

let lastIndex = -1;

function updateActiveIcon() {
  let index = sections.length - 1;

  while (index >= 0 && window.scrollY < sections[index].offsetTop - 50) {
    index--;
  }

  if (index !== lastIndex) {
    icons[lastIndex]?.classList.remove('active');
    icons[index]?.classList.add('active');
    lastIndex = index;
  }
}

window.addEventListener('scroll', () => {
  requestAnimationFrame(updateActiveIcon);
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