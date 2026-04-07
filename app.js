let current = 0;

function getPages() {
  return document.querySelectorAll(".page");
}

function openBook() {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("book").style.display = "block";
  showPage(0);
}

function showPage(i) {
  const pages = getPages();

  if (!pages.length) {
    console.log("No pages found!");
    return;
  }

  pages.forEach(p => p.classList.remove("active"));

  if (pages[i]) {
    pages[i].classList.add("active");
    current = i;
  }
}

function next() {
  const pages = getPages();
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
