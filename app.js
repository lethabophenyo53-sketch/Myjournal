let current = 0;
const pages = document.querySelectorAll(".page");

function openBook() {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("book").style.display = "block";
  show(0);
}

function show(i) {
  pages.forEach(p => p.classList.remove("active"));
  pages[i].classList.add("active");
  current = i;
}

function next() {
  if (current < pages.length - 1) {
    show(current + 1);
  }
}

function prev() {
  if (current > 0) {
    show(current - 1);
  }
}
function selectMood(el) {
  document.querySelectorAll(".mood span").forEach(e => {
    e.classList.remove("active");
  });

  el.classList.add("active");

  // save mood
  localStorage.setItem("mood", el.textContent);
}
function saveData(userId) {
  const data = {
    feel_today: document.getElementById("feel_today")?.value,
    notes: document.getElementById("notes")?.value,
    mood: localStorage.getItem("mood")
  };

  db.collection("journals").doc(userId).set(data);
}

function loadData(userId) {
  db.collection("journals").doc(userId).get().then(doc => {
    if (doc.exists) {
      const data = doc.data();

      if (data.feel_today)
        document.getElementById("feel_today").value = data.feel_today;

      if (data.notes)
        document.getElementById("notes").value = data.notes;
    }
  });
}

function payNow() {
  let handler = PaystackPop.setup({
    key: 'YOUR_PUBLIC_KEY',
    email: document.getElementById("email").value,
    amount: 5000, // R50

    callback: function () {
      localStorage.setItem("paidUser", "true");
      window.location.href = "journal.html";
    }
  });

  handler.openIframe();
}
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();