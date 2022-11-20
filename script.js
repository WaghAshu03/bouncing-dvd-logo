function selectRandom(Arr) {
  let randomVal = Math.floor(Math.random() * Arr.length);
  while (randomVal === 0) randomVal = Math.floor(Math.random() * Arr.length);
  return randomVal;
}

let leftPos = 0;
let topPos = window.innerHeight / 2;
let leftMax = window.innerWidth - 100;
let topMax = window.innerHeight - 59;
let movingLeft = true;
let movingDown = true;
let movementSpeed = 1;

setInterval(() => {
  leftMax = window.innerWidth - 100;
  topMax = window.innerHeight - 59;

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

  document.getElementById("dvdLogo").style.top = `${topPos}px`;
  document.getElementById("dvdLogo").style.left = `${leftPos}px`;
}, 10);
