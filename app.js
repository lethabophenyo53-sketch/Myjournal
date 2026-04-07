let pages;
let current = 0;

document.addEventListener("DOMContentLoaded", () => {
  pages = document.querySelectorAll(".page");
});

function openBook() {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("book").style.display = "block";
  showPage(0);
}

function showPage(i) {
  pages.forEach(p => p.classList.remove("active"));
  if (pages[i]) pages[i].classList.add("active");
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

/* MOOD EFFECT */
function selectMood(el) {
  let emoji = el.textContent;

  for (let i = 0; i < 20; i++) {
    let drop = document.createElement("div");
    drop.innerText = emoji;
    drop.style.position = "fixed";
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.top = "-20px";
    drop.style.fontSize = "24px";
    drop.style.animation = "fall 3s linear";

    document.body.appendChild(drop);

    setTimeout(() => drop.remove(), 3000);
  }
}
