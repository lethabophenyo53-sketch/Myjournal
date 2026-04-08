// ===================== GLOBAL =====================
let currentPage = 0;

// get all journal pages ONLY
const pages = document.querySelectorAll("#journalPage .page");

let audio = new Audio();


// ===================== COVER =====================
function enterApp() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("homePage").classList.remove("hidden");
}


// ===================== NAVIGATION =====================
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


// ===================== PAGE SWITCHING =====================
function openJournal() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("journalPage").classList.remove("hidden");

  currentPage = 0;
  showPage(currentPage);
}

function openSettings() {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("settingsPage").classList.remove("hidden");
}

function goHome() {
  document.getElementById("journalPage").classList.add("hidden");
  document.getElementById("settingsPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");

  loadEntries();
}


// ===================== MOOD RAIN =====================
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
  const date = document.getElementById("date")?.value || "";
  const feel = document.getElementById("feel")?.value || "";
  const why = document.getElementById("why")?.value || "";
  const what = document.getElementById("whatHappened")?.value || "";
  const closingFeel = document.getElementById("closingFeel")?.value || "";
  const grateful = document.getElementById("closingGrateful")?.value || "";

  if (!date) {
    alert("Please select a date 💖");
    return;
  }

  const entry = {
    date,
    feel,
    why,
    what,
    closingFeel,
    grateful
  };

  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.push(entry);

  localStorage.setItem("entries", JSON.stringify(entries));

  alert("Saved successfully ✨");
}


// ===================== LOAD ENTRIES =====================
function loadEntries() {
  const container = document.getElementById("entries");
  if (!container) return;

  container.innerHTML = "";

  let entries = JSON.parse(localStorage.getItem("entries")) || [];

  entries.forEach((e, index) => {
    const div = document.createElement("div");
    div.classList.add("entry-card");

    div.innerHTML = `
      <h3>${e.date}</h3>
      <p>${e.feel}</p>
    `;

    div.onclick = () => viewEntry(index);

    container.appendChild(div);
  });
}


// ===================== VIEW ENTRY =====================
function viewEntry(index) {
  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  const e = entries[index];

  alert(
    "📅 " + e.date +
    "\n\n💖 Feeling: " + e.feel +
    "\n\n🌷 Why: " + e.why +
    "\n\n📖 Day: " + e.what +
    "\n\n🌙 Now: " + e.closingFeel +
    "\n\n🙏 Grateful: " + e.grateful
  );
}


// ===================== REAL STORY =====================
function saveStory() {
  const story = document.getElementById("realStory")?.value || "";
  localStorage.setItem("realStory", story);

  alert("Story saved 💖");
}


// ===================== SETTINGS =====================
function changeFont(font) {
  document.body.style.fontFamily = font;
  localStorage.setItem("font", font);
}

function changeMusic(song) {
  audio.pause();

  if (song) {
    audio = new Audio(song);
    audio.loop = true;
    audio.play();
  }
}


// ===================== FINISH JOURNAL =====================
function finishJournal() {
  alert("Your entry is complete 💖");

  goHome();
}


// ===================== AUTO LOAD =====================
window.onload = () => {
  // load font
  const savedFont = localStorage.getItem("font");
  if (savedFont) {
    document.body.style.fontFamily = savedFont;
  }

  // load story
  const savedStory = localStorage.getItem("realStory");
  const storyBox = document.getElementById("realStory");
  if (storyBox && savedStory) {
    storyBox.value = savedStory;
  }

  loadEntries();
};


// ===================== BACKGROUND SPARKLES =====================
setInterval(() => {
  const s = document.createElement("div");
  s.classList.add("sparkle");

  s.style.left = Math.random() * window.innerWidth + "px";
  s.style.top = window.innerHeight + "px";

  document.body.appendChild(s);

  setTimeout(() => {
    s.remove();
  }, 3000);
}, 300);
