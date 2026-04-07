let pages = [];
let current = 0;

document.addEventListener("DOMContentLoaded", () => {
  pages = document.querySelectorAll(".page");
});

function openBook() {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("book").style.display = "block";

  pages = document.querySelectorAll(".page"); // FORCE REFRESH
  current = 0;
  showPage(current);
}

function showPage(i) {
  pages.forEach(p => p.classList.remove("active"));

  if (pages[i]) {
    pages[i].classList.add("active");
  }
}

function next() {
  if (current < pages.length - 1) {
    current++;
    showPage(current);
  }
}

function prev() {
  if (current > 0) {
    current--;
    showPage(current);
  }
}
