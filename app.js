let currentPage = 0;
const pages = document.querySelectorAll("#journalPage .page");

/* COVER */
function enterApp(){
  document.getElementById("cover").style.display="none";
}

/* NAVIGATION */

function showPage(i) {
  pages.forEach(p => p.classList.remove("active"));
  if (pages[i]) pages[i].classList.add("active");
}

function next() {
  page++;
  if (page >= pages.length) page = pages.length - 1;
  showPage(page);
}

function prev() {
  page--;
  if (page < 0) page = 0;
  showPage(page);
}
/* SCREENS */
function openJournal(){
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("journalPage").classList.remove("hidden");
  currentPage=0;
  showPage(currentPage);
}

function openSettings(){
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("settingsPage").classList.remove("hidden");
}

function goHome(){
  document.querySelectorAll(".screen").forEach(s=>s.classList.add("hidden"));
  document.getElementById("homePage").classList.remove("hidden");
  loadEntries();
}

/* SAVE */
function saveEntry(){
  let entry = {
    date: document.getElementById("date").value,
    feel: document.getElementById("feel").value
  };

  let data = JSON.parse(localStorage.getItem("entries")) || [];
  data.push(entry);

  localStorage.setItem("entries", JSON.stringify(data));
  alert("Saved 💖");
}

/* LOAD */
function loadEntries(){
  const box = document.getElementById("entries");
  box.innerHTML = "";

  let data = JSON.parse(localStorage.getItem("entries")) || [];

  data.forEach(e=>{
    let div = document.createElement("div");
    div.className="todo-box";
    div.innerHTML = `<b>${e.date}</b><br>${e.feel}`;
    box.appendChild(div);
  });
}

/* MOOD RAIN */
function moodRain(emoji){
  for(let i=0;i<20;i++){
    let el=document.createElement("div");
    el.className="fall";
    el.innerText=emoji;
    el.style.left=Math.random()*window.innerWidth+"px";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),3000);
  }
}

/* SETTINGS */
function changeFont(font){
  document.body.style.fontFamily=font;
}

let audio=new Audio();
function changeMusic(song){
  audio.pause();
  if(song){
    audio=new Audio(song);
    audio.loop=true;
    audio.play();
  }

  function saveStory() {
  const story = document.getElementById("realStory").value;

  localStorage.setItem("realStory", story);

  alert("Your story is saved 💖");
}

// LOAD SAVED STORY
window.addEventListener("load", () => {
  const saved = localStorage.getItem("realStory");
  if (saved) {
    const box = document.getElementById("realStory");
    if (box) box.value = saved;
  }
});
}

/* START */
window.onload = loadEntries;


function finishJournal() {
  alert("Your entry is complete 💖");

  // go back to home
  document.getElementById("journalPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");

  loadEntries();
}
