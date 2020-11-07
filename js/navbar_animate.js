const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 120) {
    navbar.classList.remove("top");

    if (!scrolled) {
      navbar.style.transform = "translateY(-120px)";
    }

    setTimeout(() => {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};
