function selectRandom(Arr) {
  let randomVal = Arr[Math.floor(Math.random() * Arr.length)];
  while (randomVal === 0) randomVal = Math.floor(Math.random() * Arr.length);
  return randomVal;
}

let leftPos = 0;
let topPos = window.innerHeight / 2;
let leftMax = window.innerWidth - 100;
let topMax = window.innerHeight - 50;
let movingLeft = true;
let movingDown = true;
let current = { left: movingLeft, down: movingDown };
let movementSpeed = parseInt(document.getElementById("inputSpeed").value) / 5;

setInterval(() => {
  movementSpeed = parseInt(document.getElementById("inputSpeed").value) / 5;
  leftMax = window.innerWidth - 100;
  topMax = window.innerHeight - 50;

  if (movingDown) topPos = topPos + movementSpeed;
  else topPos = topPos - movementSpeed;

  if (movingLeft) leftPos = leftPos + movementSpeed;
  else leftPos = leftPos - movementSpeed;

  if (topPos < 0) {
    movingDown = true;
    topPos =
      topPos + selectRandom([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]);
  }
  if (topPos > topMax) {
    movingDown = false;

    topPos =
      topPos - selectRandom([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]);
  }
  if (leftPos < 0) {
    movingLeft = true;

    leftPos =
      leftPos + selectRandom([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]);
  }
  if (leftPos > leftMax) {
    movingLeft = false;

    leftPos =
      leftPos - selectRandom([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]);
  }

  if (current.left !== movingLeft || current.down !== movingDown) {
    document.getElementById("dvdLogo").style.backgroundColor = selectRandom([
      "#00f",
      "#0ff",
      "#f0f",
      "#f00",
      "#ff0",
      "#0f0",
      "#0ff",
    ]);
    current = { left: movingLeft, down: movingDown };
  }

  document.getElementById("dvdLogo").style.top = `${topPos}px`;
  document.getElementById("dvdLogo").style.left = `${leftPos}px`;
}, 25);
