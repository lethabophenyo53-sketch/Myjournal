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

function moodRain(emoji) {
  for (let i = 0; i < 25; i++) {
    const el = document.createElement("div");
    el.classList.add("fall");
    el.innerText = emoji;

    el.style.left = Math.random() * window.innerWidth + "px";
    el.style.fontSize = (15 + Math.random() * 20) + "px";
    el.style.animationDuration = (2 + Math.random() * 2) + "s";

    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 3000);
  }
}

// ===================== SAVE ENTRY =====================
function saveEntry() {
  const date = document.getElementById("date").value;
  const feel = document.getElementById("feel").value;
  const why = document.getElementById("why").value;
  const day = document.getElementById("whatHappened").value;

  if (!date) {
    alert("Please select a date first 💖");
    return;
  }

  const entry = { date, feel, why, day };

  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.push(entry);

  localStorage.setItem("entries", JSON.stringify(entries));

  alert("Saved successfully ✨");
  loadEntries();
}
