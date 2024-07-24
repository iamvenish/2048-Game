// scripts.js

const grid = document.querySelector(".grid");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart");
let squares = [];
let score = 0;

function createBoard() {
  for (let i = 0; i < 16; i++) {
    let square = document.createElement("div");
    square.classList.add("cell");
    square.dataset.value = 0;
    grid.appendChild(square);
    squares.push(square);
  }
  generate();
  generate();
}

function generate() {
  let randomNumber = Math.floor(Math.random() * squares.length);
  if (squares[randomNumber].dataset.value == 0) {
    squares[randomNumber].dataset.value = 2;
    squares[randomNumber].textContent = 2;
  } else generate();
}

function moveRight() {
  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0) {
      let totalOne = squares[i].dataset.value;
      let totalTwo = squares[i + 1].dataset.value;
      let totalThree = squares[i + 2].dataset.value;
      let totalFour = squares[i + 3].dataset.value;
      let row = [
        parseInt(totalOne),
        parseInt(totalTwo),
        parseInt(totalThree),
        parseInt(totalFour),
      ];
      let filteredRow = row.filter((num) => num);
      let missing = 4 - filteredRow.length;
      let zeros = Array(missing).fill(0);
      let newRow = zeros.concat(filteredRow);

      squares[i].dataset.value = newRow[0];
      squares[i].textContent = newRow[0] ? newRow[0] : "";
      squares[i + 1].dataset.value = newRow[1];
      squares[i + 1].textContent = newRow[1] ? newRow[1] : "";
      squares[i + 2].dataset.value = newRow[2];
      squares[i + 2].textContent = newRow[2] ? newRow[2] : "";
      squares[i + 3].dataset.value = newRow[3];
      squares[i + 3].textContent = newRow[3] ? newRow[3] : "";
    }
  }
}

function moveLeft() {
  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0) {
      let totalOne = squares[i].dataset.value;
      let totalTwo = squares[i + 1].dataset.value;
      let totalThree = squares[i + 2].dataset.value;
      let totalFour = squares[i + 3].dataset.value;
      let row = [
        parseInt(totalOne),
        parseInt(totalTwo),
        parseInt(totalThree),
        parseInt(totalFour),
      ];
      let filteredRow = row.filter((num) => num);
      let missing = 4 - filteredRow.length;
      let zeros = Array(missing).fill(0);
      let newRow = filteredRow.concat(zeros);

      squares[i].dataset.value = newRow[0];
      squares[i].textContent = newRow[0] ? newRow[0] : "";
      squares[i + 1].dataset.value = newRow[1];
      squares[i + 1].textContent = newRow[1] ? newRow[1] : "";
      squares[i + 2].dataset.value = newRow[2];
      squares[i + 2].textContent = newRow[2] ? newRow[2] : "";
      squares[i + 3].dataset.value = newRow[3];
      squares[i + 3].textContent = newRow[3] ? newRow[3] : "";
    }
  }
}

function moveDown() {
  for (let i = 0; i < 4; i++) {
    let totalOne = squares[i].dataset.value;
    let totalTwo = squares[i + 4].dataset.value;
    let totalThree = squares[i + 8].dataset.value;
    let totalFour = squares[i + 12].dataset.value;
    let column = [
      parseInt(totalOne),
      parseInt(totalTwo),
      parseInt(totalThree),
      parseInt(totalFour),
    ];
    let filteredColumn = column.filter((num) => num);
    let missing = 4 - filteredColumn.length;
    let zeros = Array(missing).fill(0);
    let newColumn = zeros.concat(filteredColumn);

    squares[i].dataset.value = newColumn[0];
    squares[i].textContent = newColumn[0] ? newColumn[0] : "";
    squares[i + 4].dataset.value = newColumn[1];
    squares[i + 4].textContent = newColumn[1] ? newColumn[1] : "";
    squares[i + 8].dataset.value = newColumn[2];
    squares[i + 8].textContent = newColumn[2] ? newColumn[2] : "";
    squares[i + 12].dataset.value = newColumn[3];
    squares[i + 12].textContent = newColumn[3] ? newColumn[3] : "";
  }
}

function moveUp() {
  for (let i = 0; i < 4; i++) {
    let totalOne = squares[i].dataset.value;
    let totalTwo = squares[i + 4].dataset.value;
    let totalThree = squares[i + 8].dataset.value;
    let totalFour = squares[i + 12].dataset.value;
    let column = [
      parseInt(totalOne),
      parseInt(totalTwo),
      parseInt(totalThree),
      parseInt(totalFour),
    ];
    let filteredColumn = column.filter((num) => num);
    let missing = 4 - filteredColumn.length;
    let zeros = Array(missing).fill(0);
    let newColumn = filteredColumn.concat(zeros);

    squares[i].dataset.value = newColumn[0];
    squares[i].textContent = newColumn[0] ? newColumn[0] : "";
    squares[i + 4].dataset.value = newColumn[1];
    squares[i + 4].textContent = newColumn[1] ? newColumn[1] : "";
    squares[i + 8].dataset.value = newColumn[2];
    squares[i + 8].textContent = newColumn[2] ? newColumn[2] : "";
    squares[i + 12].dataset.value = newColumn[3];
    squares[i + 12].textContent = newColumn[3] ? newColumn[3] : "";
  }
}

function combineRow() {
  for (let i = 0; i < 15; i++) {
    if (squares[i].dataset.value === squares[i + 1].dataset.value) {
      let combinedTotal =
        parseInt(squares[i].dataset.value) +
        parseInt(squares[i + 1].dataset.value);
      squares[i].dataset.value = combinedTotal;
      squares[i].textContent = combinedTotal;
      squares[i + 1].dataset.value = 0;
      squares[i + 1].textContent = "";
      score += combinedTotal;
      scoreDisplay.textContent = `Score: ${score}`;
    }
  }
}

function combineColumn() {
  for (let i = 0; i < 12; i++) {
    if (squares[i].dataset.value === squares[i + 4].dataset.value) {
      let combinedTotal =
        parseInt(squares[i].dataset.value) +
        parseInt(squares[i + 4].dataset.value);
      squares[i].dataset.value = combinedTotal;
      squares[i].textContent = combinedTotal;
      squares[i + 4].dataset.value = 0;
      squares[i + 4].textContent = "";
      score += combinedTotal;
      scoreDisplay.textContent = `Score: ${score}`;
    }
  }
}

function control(e) {
  if (e.keyCode === 39) {
    keyRight();
  } else if (e.keyCode === 37) {
    keyLeft();
  } else if (e.keyCode === 38) {
    keyUp();
  } else if (e.keyCode === 40) {
    keyDown();
  }
}

document.addEventListener("keyup", control);

function keyRight() {
  moveRight();
  combineRow();
  moveRight();
  generate();
}

function keyLeft() {
  moveLeft();
  combineRow();
  moveLeft();
  generate();
}

function keyDown() {
  moveDown();
  combineColumn();
  moveDown();
  generate();
}

function keyUp() {
  moveUp();
  combineColumn();
  moveUp();
  generate();
}

restartButton.addEventListener("click", restartGame);

function restartGame() {
  squares.forEach((square) => {
    square.dataset.value = 0;
    square.textContent = "";
  });
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  generate();
  generate();
}

// Initialize the game
createBoard();
