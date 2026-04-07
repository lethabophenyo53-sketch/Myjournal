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
  pages[i].classList.add("active");
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

/* EMOJI RAIN */
function selectMood(el) {
  let emoji = el.textContent;

  for (let i = 0; i < 25; i++) {
    let drop = document.createElement("div");
    drop.className = "emoji-drop";
    drop.innerText = emoji;

    drop.style.left = Math.random() * 100 + "vw";
    drop.style.position = "fixed";
    drop.style.top = "-20px";
    drop.style.animation = "fall 4s linear";

    document.body.appendChild(drop);

    setTimeout(() => drop.remove(), 4000);
  }
}
const today = new Date().toISOString().split("T")[0];

const fields = document.querySelectorAll("input, textarea");

/* LOAD */
window.onload = () => {
  fields.forEach(f => {
    const key = today + "-" + f.id;
    const saved = localStorage.getItem(key);
    if (saved) f.value = saved;
  });
};

/* SAVE */
fields.forEach(f => {
  f.addEventListener("input", () => {
    const key = today + "-" + f.id;
    localStorage.setItem(key, f.value);
  });
});
