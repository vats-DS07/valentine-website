// ===== ELEMENTS =====
var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");

var catPopup = document.getElementById("catPopup");
var catFrame = document.getElementById("catFrame");

var letterPopup = document.getElementById("letterPopup");
var ending = document.getElementById("ending");

var stillReading = document.getElementById("stillReading");
var blushing = document.getElementById("blushing");
var timerEl = document.getElementById("timer");

var music = document.getElementById("bgMusic");
var musicBtn = document.getElementById("musicBtn");

// ===== FORCE HIDE EVERYTHING ON LOAD =====
catPopup.style.display = "none";
letterPopup.style.display = "none";
ending.style.display = "none";

// ===== MUSIC =====
musicBtn.onclick = function () {
  if (music.paused) {
    music.play().catch(() => {});
    music.volume = 0.4;
    musicBtn.innerText = "⏸ Music";
  } else {
    music.pause();
    musicBtn.innerText = "▶ Music";
  }
};

// ===== NO BUTTON (HOVER ESCAPE) =====
noBtn.onmouseenter = function () {
  var parent = document.querySelector(".buttons");
  var maxX = parent.clientWidth - noBtn.offsetWidth;
  var maxY = parent.clientHeight - noBtn.offsetHeight;

  noBtn.style.transition = "all 1.5s ease-out";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
};

// ===== YES FLOW =====
yesBtn.onclick = function () {
  // 1. Show cat video
  catPopup.style.display = "flex";
  catFrame.src =
    "https://www.youtube.com/embed/laOirrx8NZg?autoplay=1&controls=0";

  // 2. After video → show letter
  setTimeout(function () {
    catPopup.style.display = "none";
    catFrame.src = "";

    letterPopup.style.display = "flex";

    stillReading.style.display = "none";
    blushing.style.display = "none";

    setTimeout(() => stillReading.style.display = "block", 3000);
    setTimeout(() => blushing.style.display = "block", 5000);
  }, 4000);
};

// ===== CLOSE LETTER (CLICK ANYWHERE OUTSIDE) =====
letterPopup.onclick = function (e) {
  if (e.target === letterPopup) {
    letterPopup.style.display = "none";
    ending.style.display = "flex";
    startTimer();
  }
};

// ===== TIMER =====
var targetDate = new Date("February 14, 2026 21:00:00").getTime();

function startTimer() {
  setInterval(function () {
    var now = Date.now();
    var diff = targetDate - now;

    if (diff <= 0) {
      timerEl.innerText = "It's finally us ❤️";
      return;
    }

    var d = Math.floor(diff / (1000 * 60 * 60 * 24));
    var h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    var m = Math.floor((diff / (1000 * 60)) % 60);
    var s = Math.floor((diff / 1000) % 60);

    timerEl.innerText =
      d + "d " + h + "h " + m + "m " + s + "s left ❤️";
  }, 1000);
}

// 🎬 INSANE DRAMA REVEAL
window.onload = function () {
  setTimeout(() => {
    const intro = document.getElementById("cinemaIntro");
    if (intro) intro.style.display = "none";
  }, 4000);
};
setTimeout(() => {
  for (let i = 0; i < 25; i++) {
    const s = document.createElement("span");
    s.innerText = "✨";
    s.style.position = "fixed";
    s.style.left = Math.random() * window.innerWidth + "px";
    s.style.top = Math.random() * window.innerHeight + "px";
    s.style.fontSize = "18px";
    s.style.animation = "sparkle 1.2s ease-out forwards";
    document.body.appendChild(s);

    setTimeout(() => s.remove(), 1200);
  }
}, 3800);











