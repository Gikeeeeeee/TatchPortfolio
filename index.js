/*=============== autotypingHomepage ===============*/
var typed = new Typed('.autotyped', {
  strings: ['Digital Technology.','Software.', 'Computer.', 'Coding.', 'Programming.'],
  typeSpeed: 200,
  backSpeed: 150,
  loop: true
});

/*=============== navbars-crolldown ===============*/
let nav = document.querySelector("nav");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

/*=============== scroll down animation ===============*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 1500,
})

sr.reveal(`.home-info, .welcome-info, .certificate-item`,{delay: 100 ,origin: 'left'})
sr.reveal(`.title, .profile, .timeline-grade, .education-info, .category, .footer-content`,{delay: 300 ,origin: 'right'})
sr.reveal(`.school-logo`,{delay: 600 ,origin: 'right'})
sr.reveal(`.about-info, .myinformation, .project-content`,{delay: 300 ,origin: 'bottom'})
