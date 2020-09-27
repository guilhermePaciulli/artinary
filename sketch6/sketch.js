const SQUARE_SIZE = 10;

var squareMatrix = [];


function setup() {
  createCanvas(1000, 500);
  background(255);
  noStroke();
  setupColors();
}

function draw() {
  background(255);
  setupBoard();
}

function setupColors() {
  for (let x = 0; x < width; x = x + SQUARE_SIZE) {
    var row = [];
    for (let y = 0; y < height; y = y + SQUARE_SIZE) {
      var square = new SquareBlock();
      square.x = x;
      square.y = y;
      row.push(square);
    }
    squareMatrix.push(row);
  }
  for (let x = 0; x < squareMatrix.length; x = x + 1) {
    for (let y = 0; y < squareMatrix[0].length; y = y + 1) {
      if(x - 1 >= 0) {
        squareMatrix[x][y].neighbors.push(squareMatrix[x - 1][y])
      }
      if(y - 1 >= 0) {
        squareMatrix[x][y].neighbors.push(squareMatrix[x][y - 1]);
      }
      if(y + 1 < squareMatrix[0].length) {
        squareMatrix[x][y].neighbors.push(squareMatrix[x][y + 1]);
      }
      if(x + 1 < squareMatrix.length) {
        squareMatrix[x][y].neighbors.push(squareMatrix[x + 1][y]);
      }
    }
  }
}

function setupBoard() {
  squareMatrix.forEach(row => {
    row.forEach(curr => {
      curr.paint();
      curr.reduceAlpha();
    });
  });
}

function mousePressed() {
  const indexX = int(mouseX / SQUARE_SIZE);
  const indexY = int(mouseY / SQUARE_SIZE);
  selectedAtIndexes(indexX, indexY);
}

function selectedAtIndexes(x, y) {
  squareMatrix[x][y].colorfy(5);
}