// ===============================
// MOBILE MENU
// ===============================
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ===============================
// PREMIUM DARK MODE SYSTEM
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  const themeToggle = document.getElementById("theme-toggle");

  // 🧠 Auto detect system theme
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function setTheme(mode) {
    if (mode === "dark") {
      document.body.classList.add("dark");
      themeToggle.checked = true;
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      themeToggle.checked = false;
      localStorage.setItem("theme", "light");
    }
  }

  // 1️⃣ Load saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // 2️⃣ If no saved theme → use system preference
    setTheme(prefersDark.matches ? "dark" : "light");
  }

  // 3️⃣ Manual toggle
  themeToggle.addEventListener("change", () => {
    setTheme(themeToggle.checked ? "dark" : "light");
  });

  // 4️⃣ If user changes OS theme
  prefersDark.addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      setTheme(e.matches ? "dark" : "light");
    }
  });

});

// ===============================
// YEAR
// ===============================
document.getElementById("year").textContent =
  new Date().getFullYear();

// ===============================
// SCROLL REVEAL
// ===============================
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((el) => observer.observe(el));

// ===============================
// PROJECT FILTERING
// ===============================
const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelector(".filter-btn.active")
      .classList.remove("active");
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projects.forEach((card) => {
      if (
        filter === "all" ||
        card.dataset.category === filter
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ===============================
// MODAL
// ===============================
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".close");

window.openImage = function (src) {
  modal.style.display = "flex";
  modalImg.src = src;
  modalImg.style.display = "block";
  modalVideo.style.display = "none";
};

window.openVideo = function (src) {
  modal.style.display = "flex";
  modalVideo.src = src;
  modalVideo.style.display = "block";
  modalImg.style.display = "none";
  modalVideo.play();
};

closeBtn.onclick = function () {
  modal.style.display = "none";
  modalVideo.pause();
};

window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
    modalVideo.pause();
  }
};
// ===== TYPING EFFECT =====
const text = ["WELCOME TO MY PORTFOLIO"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "hi";

(function type(){
    if(count === text.length){
        count = 2;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 1000);
    } else {
        setTimeout(type, 100);
    }
})();

// NAVBAR SCROLL EFFECT
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// ===============================
// CONTACT FORM
// ===============================
document
  .getElementById("contact-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  });