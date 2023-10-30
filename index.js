// autotypingHomepage 
var typed = new Typed('.autotyped', {
  strings: ['Computer Science.', 'Computer.', 'Coding.','Programming.'],
  typeSpeed: 200,
  backSpeed: 150,
  loop: true
});

let nav = document.querySelector("nav");
    window.onscroll = function() {
      if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
      }else {
        nav.classList.remove("sticky");
      }
    }