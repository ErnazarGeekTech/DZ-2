const redBtn = document.getElementById("red");
const yellowBtn = document.getElementById("yellow");
const greenBtn = document.getElementById("green");
const resetBtn = document.getElementById("reset");

let currentColor = "";

redBtn.addEventListener("click", () => {
  console.log("red");
  setTimeout(() => {
    changeColor("red");
  }, 2000)
});

yellowBtn.addEventListener("click", () => {
  console.log("Paint it yellow");
  setTimeout(() => {
    changeColor("yellow");
  }, 2000);
});

greenBtn.addEventListener("click", () => {
  console.log("green");
  setTimeout (() => {
    changeColor("green");
  }, 2000)
});

resetBtn.addEventListener("click", () => {
  changeColor("reset");
});

function changeColor(color) {
  if (currentColor === color) {
    return;
  }

  switch (color) {
    case "red":
      document.body.style.backgroundColor = "red";
      currentColor = "red";
      document.body.style.transition = "1s";
      break;
    case "yellow":
      document.body.style.backgroundColor = "yellow";
      document.body.style.transition = "1s";
      currentColor = "yellow";
      break;
    case "green":
      document.body.style.backgroundColor = "green";
      currentColor = "green";
      document.body.style.transition = "1s";
      break;
    case "reset":
      document.body.style.backgroundColor = "rgb(173, 173, 173)";
      currentColor = "";
      document.body.style.transition = "0.2s";
      break;
    default:
      break;
  }
}
