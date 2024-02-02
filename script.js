  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector(".header .nav-bar .hamburger");
    const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
    const menu_items = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
    const header = document.querySelector(".header.container");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobile_menu.classList.toggle("active");

      if (mobile_menu.classList.contains("active")) {
        mobile_menu.style.right = "0";
        mobile_menu.style.transform = "translateX(0%)";
        mobile_menu.style.width = "30vw";
        mobile_menu.style.height = "50vh";
      } else {
        mobile_menu.style.right = "-100%";
      }
    });

    document.addEventListener("scroll", () => {
      var scroll_position = window.scrollY;
      if (scroll_position > 250) {
        header.style.backgroundColor = "#003366";
      } else {
        header.style.backgroundColor = "#003366";
      }
    });

    menu_items.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobile_menu.classList.remove("active");

        mobile_menu.style.width = "0";
        mobile_menu.style.height = "0";
        mobile_menu.style.right = "-100%";
      });
    });

    const navLinks = document.querySelectorAll('.nav-bar .nav-list ul a');

    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        let yOffset = -90;

        if (targetId === 'projects' || targetId === 'blogs') {
          yOffset = -190; 
        }

        window.scrollTo({
          top: targetSection.offsetTop + yOffset,
          behavior: 'smooth'
        });

        hamburger.classList.remove("active");
        mobile_menu.classList.remove("active");
        mobile_menu.style.width = "0";
        mobile_menu.style.height = "0";
        mobile_menu.style.right = "-100%";
      });
    });
  });