/*? no js js needed from me */
const pemain = document.getElementById("pemain");
const bot = document.getElementById("bot");
const hasil = document.getElementById("hasil");
const reset = document.getElementById("reset");
const jurus1 = document.getElementById("gunting");
const jurus2 = document.getElementById("batu");
const jurus3 = document.getElementById("kertas");
const j1 = document.getElementById("j1");
const j2 = document.getElementById("j2");
const j3 = document.getElementById("j3");

let klik = 0;
let gtg = "src/icons/scissors.png";
let bt = "src/icons/stone.png";
let kts = "src/icons/paper.png";

reset.style.display = "none";

function gunting() {
  klik = Math.floor(Math.random() * 3) + 1;
  reset.style.display = "block";
  pemain.src = "src/icons/scissors.png";

  if (klik == 1) {
    bot.src = gtg;
  } else if (klik == 2) {
    bot.src = bt;
  } else if (klik == 3) {
    bot.src = kts;
  }

  jurus1.style.display = "none";
  jurus2.style.display = "none";
  jurus3.style.display = "none";
  j1.style.display = "none";
  j2.style.display = "none";
  j3.style.display = "none";

  if (bot.src.includes("scissors") && pemain.src.includes("scissors")) {
    hasil.textContent = "seri!";
  } else if (bot.src.includes("stone") && pemain.src.includes("scissors")) {
    hasil.textContent = "kamu kalah!";
  } else if (bot.src.includes("paper") && pemain.src.includes("scissors")) {
    hasil.textContent = "kamu menang!";
  }
}

function batu() {
  klik = Math.floor(Math.random() * 3) + 1;
  reset.style.display = "block";
  pemain.src = "src/icons/stone.png";

  if (klik == 1) {
    bot.src = gtg;
  } else if (klik == 2) {
    bot.src = bt;
  } else if (klik == 3) {
    bot.src = kts;
  }

  jurus1.style.display = "none";
  jurus2.style.display = "none";
  jurus3.style.display = "none";
  j1.style.display = "none";
  j2.style.display = "none";
  j3.style.display = "none";

  if (bot.src.includes("scissors") && pemain.src.includes("stone")) {
    hasil.textContent = "kamu menang!";
  } else if (bot.src.includes("stone") && pemain.src.includes("stone")) {
    hasil.textContent = "kamu seri!";
  } else if (bot.src.includes("paper") && pemain.src.includes("stone")) {
    hasil.textContent = "kamu kalah!";
  }
}

function kertas() {
  klik = Math.floor(Math.random() * 3) + 1;
  reset.style.display = "block";
  pemain.src = "src/icons/paper.png";

  if (klik == 1) {
    bot.src = gtg;
  } else if (klik == 2) {
    bot.src = bt;
  } else if (klik == 3) {
    bot.src = kts;
  }

  jurus1.style.display = "none";
  jurus2.style.display = "none";
  jurus3.style.display = "none";
  j1.style.display = "none";
  j2.style.display = "none";
  j3.style.display = "none";

  if (bot.src.includes("scissors") && pemain.src.includes("paper")) {
    hasil.textContent = "kamu kalah!";
  } else if (bot.src.includes("stone") && pemain.src.includes("paper")) {
    hasil.textContent = "kamu menang!";
  } else if (bot.src.includes("paper") && pemain.src.includes("paper")) {
    hasil.textContent = "kamu seri!";
  }
}

function lagi() {
  hasil.textContent = "AYO COBA LAGI"
  reset.style.display = "none";

  jurus1.style.display = "block";
  jurus2.style.display = "block";
  jurus3.style.display = "block";
  j3.style.display = "block";
  j2.style.display = "block";
  j1.style.display = "block";

  pemain.src = "src/icons/gamer.png";
  bot.src = "src/icons/robot.png";
}
