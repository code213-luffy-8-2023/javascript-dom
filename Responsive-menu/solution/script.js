const mobileMenuButton = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenuButton.addEventListener("click", function () {
  navList.classList.toggle("active");
  mobileMenuButton.classList.toggle("toggled");
});

// if window width is greater than 768px remove active class from navList
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    navList.classList.remove("active");
  }
});
