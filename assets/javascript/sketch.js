// Global Variables
let cols;
let rows;
let scale = 100;
let grid;
let player = 1;

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
        if(player = 1){
            push();
            noFill();
            rect(this.location.x, this.location.y, scale, scale);
            pop();
            push();
            stroke(255, 0, 0);
            strokeWeight(12);
            ellipse(this.location.x+(scale/2), this.location.y+(scale/2), scale/2, scale/2);
            pop();
        }else{
            push();
            noFill();
            rect(this.location.x, this.location.y, scale, scale);
            pop();
            push();
            fill(0, 255, 0);
            textWeight(12);
            textSize(scale/2);
            text("X", this.location.x+(scale/2), this.location.y+(scale/2));
            pop();
        }
        
    }
}

function switchPlayer(player){
    if(player == 1){
        console.log("switched to: " + player);
        player = 2;
    }else{
        console.log("Now switched to: " + player);
        player = 1;
    }
}

function make2dArray(cols, rows){
	let arr = new Array(cols);
  for(let i = 0; i < arr.length; i++){
  	arr[i] = new Array(rows);
  }
  return arr;
}

function mousePressed(){
    let cols = floor(mouseX/scale);
    let rows = floor(mouseY/scale);

    console.log("columns: " + cols + "  ||  " + "rows: " + rows);

    grid[cols][rows] = new Circle(cols, rows);

    console.log(player);
    switchPlayer(player);
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