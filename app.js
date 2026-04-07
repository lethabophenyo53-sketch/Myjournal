let current = 0;
const pages = document.querySelectorAll(".page");

function showPage(i) {
  pages.forEach(p => p.classList.remove("active"));
  pages[i].classList.add("active");
}

function next() {
  if (current < pages.length - 1) current++;
  showPage(current);
}

function prev() {
  if (current > 0) current--;
  showPage(current);
}

function openBook() {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("book").style.display = "block";
}

/* SAVE */
const today = new Date().toISOString().split("T")[0];
const fields = document.querySelectorAll("input, textarea");

window.onload = () => {
  fields.forEach(f => {
    const saved = localStorage.getItem(today + "-" + f.id);
    if (saved) f.value = saved;
  });
};

fields.forEach(f => {
  f.addEventListener("input", () => {
    localStorage.setItem(today + "-" + f.id, f.value);
  });
});

/* EMOJI RAIN */
function rain(emoji) {
  for (let i = 0; i < 20; i++) {
    let drop = document.createElement("div");
    drop.className = "emoji-drop";
    drop.innerText = emoji;
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = (Math.random() * 2 + 2) + "s";
    document.body.appendChild(drop);

    setTimeout(() => drop.remove(), 4000);
  }
}
