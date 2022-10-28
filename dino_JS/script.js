const dino = document.getElementById("dino");
const kaktus = document.getElementById("kaktus");

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let kaktusLeft = parseInt(
    window.getComputedStyle(kaktus).getPropertyValue("left")
  );

  if (kaktusLeft < 50 && kaktusLeft > 0 && dinoTop >= 140) {
    alert("TI SEL NA 4LEN!!!");
  }
}, 10);
