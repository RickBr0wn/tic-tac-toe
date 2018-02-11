// Global Variables
let cols;
let rows;
let scale = 100;
let grid;

class Cell{
    constructor(i, j){
        this.location = createVector(i*scale, j*scale);
    }

    show(){
        push();
        stroke(0);
        noFill();
        rect(this.location.x, this.location.y, scale, scale);
        pop();
    }
}

class Circle{
    constructor(i, j){
        this.location = createVector(i*scale, j*scale);
    }

    show(){
        push();
        noFill();
        rect(this.location.x, this.location.y, scale, scale);
        pop();
        push();
        stroke(255, 0, 0);
        strokeWeight(4);
        ellipse(this.location.x+(scale/2), this.location.y+(scale/2), scale/2, scale/2);
        pop();
    }
}

function make2dArray(cols, rows){
	let arr = new Array(cols);
  for(let i = 0; i < arr.length; i++){
  	arr[i] = new Array(rows);
  }
  return arr;
}
    grid[i][j] = new Circle(i, j);

function mousePressed(){
    let cols = floor(mouseX/scale);
    let rows = floor(mouseY/scale);

    console.log("columns: " + cols + "  ||  " + "rows" + rows);

    grid[cols][rows] = new Circle(cols, rows);
}

function setup(){
    createCanvas(401, 401);
    cols = floor(width / scale);
    rows = floor(height / scale);
    grid = make2dArray(cols, rows);
    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            grid[i][j] = new Cell(i, j);
        }
    }
    console.log(grid);
}

function draw(){
    background(255);
    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            grid[i][j].show();
        }
    }
}