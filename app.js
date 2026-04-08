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

updateStreak();


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

let audio = new Audio();

function changeMusic(song) {
  audio.pause();
  if (song) {
    audio = new Audio("assets/" + song); // put music in /assets
    audio.loop = true;
    audio.play();
  }
}

function changeFont(font) {
  document.body.style.fontFamily = font;
  localStorage.setItem("font", font);
}

function changeColor(color) {
  document.body.style.background = color;
  localStorage.setItem("bgColor", color);
}

function changeBg(bg) {
  if (bg) {
    document.body.style.background = `url('assets/${bg}') center/cover no-repeat`;
    localStorage.setItem("bgImage", bg);
  }
}

window.onload = () => {
  const font = localStorage.getItem("font");
  const color = localStorage.getItem("bgColor");
  const bg = localStorage.getItem("bgImage");

  if (font) document.body.style.fontFamily = font;
  if (color) document.body.style.background = color;
  if (bg) document.body.style.background = `url('assets/${bg}') center/cover no-repeat`;
};

// AUTO SAVE WEEKLY PLANNER
function saveWeek() {
  const data = {
    week: document.getElementById("weekOf").value,
    notes: document.getElementById("weeklyNotes").value,
    tasks: []
  };

  document.querySelectorAll(".day").forEach(day => {
    let dayData = [];

    day.querySelectorAll("input").forEach(t => {
      dayData.push(t.value);
    });

    dayData.push(day.querySelector("textarea").value);

    data.tasks.push(dayData);
  });

  localStorage.setItem("weeklyPlanner", JSON.stringify(data));
}

// LOAD DATA
function loadWeek() {
  const saved = JSON.parse(localStorage.getItem("weeklyPlanner"));
  if (!saved) return;

  document.getElementById("weekOf").value = saved.week;
  document.getElementById("weeklyNotes").value = saved.notes;

  document.querySelectorAll(".day").forEach((day, i) => {
    let inputs = day.querySelectorAll("input");
    let note = day.querySelector("textarea");

    inputs.forEach((input, index) => {
      input.value = saved.tasks[i][index] || "";
    });

    note.value = saved.tasks[i][inputs.length] || "";
  });
}

// AUTO SAVE ON TYPING
document.addEventListener("input", saveWeek);

// LOAD WHEN PAGE OPENS
window.addEventListener("load", loadWeek);

function updateStreak() {
  const today = new Date().toDateString();
  let lastDate = localStorage.getItem("lastEntryDate");
  let streak = parseInt(localStorage.getItem("streak")) || 0;

  if (lastDate === today) {
    // already counted today
  } else {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastDate === yesterday.toDateString()) {
      streak++; // continue streak
    } else {
      streak = 1; // reset streak
    }

    localStorage.setItem("lastEntryDate", today);
    localStorage.setItem("streak", streak);
  }

  document.getElementById("streakCount").innerText = streak;
}

// LOAD STREAK ON PAGE LOAD
window.addEventListener("load", () => {
  updateStreak();
});
