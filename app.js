let pages = document.querySelectorAll(".page");
let current = 0;

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

/* EMOJI SELECT + RAIN */
function selectMood(el) {
  let emoji = el.textContent;
  emojiRain(emoji);
}

function emojiRain(emoji) {
  for (let i = 0; i < 25; i++) {
    let drop = document.createElement("div");
    drop.className = "emoji-drop";
    drop.innerText = emoji;

    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = (Math.random() * 2 + 3) + "s";

    document.body.appendChild(drop);

    setTimeout(() => drop.remove(), 5000);
  }
}
