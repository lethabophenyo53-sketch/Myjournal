let pages = document.querySelectorAll(".page");
let current = 0;

function showPage(index){
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");
}

function next(){
  if(current < pages.length-1){
    current++;
    showPage(current);
  }
}

function prev(){
  if(current > 0){
    current--;
    showPage(current);
  }
}

/* NAVIGATION */
function enterApp(){
  document.getElementById("cover").style.display="none";
  document.getElementById("homePage").classList.remove("hidden");
}

function openJournal(){
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("journalPage").classList.remove("hidden");
}

function openSettings(){
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("settingsPage").classList.remove("hidden");
}

function goHome(){
  document.getElementById("settingsPage").classList.add("hidden");
  document.getElementById("journalPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
}

/* SETTINGS */
function changeFont(font){
  document.body.style.fontFamily = font;
}

let audio = new Audio();

function changeMusic(src){
  if(src===""){ audio.pause(); return; }
  audio.src = src;
  audio.loop = true;
  audio.play();
}

function changeColor(color){
  document.body.style.background = color;
}

/* SAVE */
function saveEntry(){
  let data = "Entry saved 💖";
  localStorage.setItem(Date.now(), data);
  alert("Saved!");
}

function finishJournal(){
  goHome();
}
