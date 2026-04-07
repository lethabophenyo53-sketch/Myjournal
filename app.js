let currentPage = 0;

const pages = document.querySelectorAll(".page");
const book = document.getElementById("book");
const cover = document.querySelector(".cover");

function openBook() {
  cover.style.display = "none";
  book.style.display = "block";
  showPage(0);
}

function showPage(index) {
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");
}

function next() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prev() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

function selectMood(el) {
  document.querySelectorAll(".mood span").forEach(s => s.style.transform = "scale(1)");
  el.style.transform = "scale(1.4)";
}
