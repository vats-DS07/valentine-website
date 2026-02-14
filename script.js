// ===== ELEMENTS =====
var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");

var catPopup = document.getElementById("catPopup");
var catVideo = document.getElementById("catVideo");


var letterPopup = document.getElementById("letterPopup");
var ending = document.getElementById("ending");

var stillReading = document.getElementById("stillReading");
var blushing = document.getElementById("blushing");
var timerEl = document.getElementById("timer");

var music = document.getElementById("bgMusic");
var musicBtn = document.getElementById("musicBtn");

// ===== FORCE HIDE EVERYTHING ON LOAD =====
;
var loveText = document.getElementById("loveText");

var message = `Okay listen… 😌

I wasn’t planning on falling for you… but here we are 😏

You turned my ordinary days into my favorite ones ❤️

I tease you a lot, but I’m serious about us 😉`;



ending.style.display = "none";

musicBtn.addEventListener("click", function () {
  if (music.paused) {

    music.volume = 0;
    music.play().then(() => {

      let fade = setInterval(() => {
        if (music.volume < 0.4) {
          music.volume += 0.02;
        } else {
          clearInterval(fade);
        }
      }, 100);

    }).catch(err => {
      console.log("Playback blocked:", err);
    });

    musicBtn.innerText = "⏸ Music";

  } else {
    music.pause();
    musicBtn.innerText = "▶ Music";
  }
});



// ===== NO BUTTON (HOVER ESCAPE) =====
noBtn.onmouseenter = function () {
  var parent = document.querySelector(".buttons");
  var maxX = parent.clientWidth - noBtn.offsetWidth;
  var maxY = parent.clientHeight - noBtn.offsetHeight;

  noBtn.style.transition = "all 0.5s ease-out";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
};

function typeWriter(text, element, speed = 40) {
  element.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

// ===== YES FLOW =====
yesBtn.onclick = function () {

  if (music.paused) {
    music.play().catch(() => { });
    musicBtn.innerText = "⏸ Music";
  }

  // 1. Show cat video
  document.body.classList.add("cinema-mode");
  document.body.classList.add("blur-bg");

  catPopup.classList.add("active");

  catVideo.currentTime = 0;
  catVideo.play();


  // 2. After video → show letter
  setTimeout(function () {
    catVideo.pause();
    catPopup.classList.remove("active");

    document.body.classList.remove("blur-bg");
    document.body.classList.remove("cinema-mode");



     letterPopup.classList.add("active");

     typeWriter(message, loveText, 35);



    stillReading.style.display = "none";
    blushing.style.display = "none";

    setTimeout(() => stillReading.style.display = "block", 3000);
    setTimeout(() => blushing.style.display = "block", 5000);
  }, 4000);
};
// ===== LETTER CLICK (ENDING) =====
letterPopup.onclick = function (e) {
  if (e.target === letterPopup) {

    letterPopup.classList.remove("active");

    ending.style.display = "flex";
    startTimer();

    // 💥 Full Screen Confetti Rain
    setTimeout(() => {

      const duration = 3000;
      const end = Date.now() + duration;

      const interval = setInterval(() => {
        confetti({
          particleCount: 8,
          spread: 140,
          startVelocity: 35,
          origin: {
            x: Math.random(),   // random horizontal
            y: 0               // start from top
          }
        });

        if (Date.now() > end) {
          clearInterval(interval);
        }

      }, 100);

    }, 300);
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











