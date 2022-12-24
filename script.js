
      const items = document.querySelectorAll(".accordion button");

      function toggleAccordion() {
        const itemToggle = this.getAttribute("aria-expanded");

        for (i = 0; i < items.length; i++) {
          items[i].setAttribute("aria-expanded", "false");
        }

        if (itemToggle == "false") {
          this.setAttribute("aria-expanded", "true");
        }
      }

      items.forEach((item) => item.addEventListener("click", toggleAccordion));




      
      const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  hamburgerMenu.classList.toggle("active");

  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    navAnimation("out", "in");
  } else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    navAnimation("in", "out");
  }
}

hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
