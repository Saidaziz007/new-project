$(document).ready(function(){
  $("#team-carousel").owlCarousel({
    margin: 30,
    loop: true,
    nav: true,
    items: 2,
    navText: ['<img src="images/prev.svg"/>', '<img src="images/next.svg"/>'],
    dots: true,
    autoplayTimeout: 1000,
    responsive:{
        0:{
            items: 1,
        },
        800:{
            items: 2,
        },
    },
  });
});


window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}


const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);


let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/light.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});