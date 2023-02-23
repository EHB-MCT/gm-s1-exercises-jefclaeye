"use strict";

let w, h;
let loc, speed, acceleration;

function setup() {
    w = windowWidth;
    h = windowHeight;
    createCanvas(w, h);
    background(200);

    loc = createVector(w / 2, h / 2);
    speed = createVector();
    acceleration = createVector();
}

function draw() {
    background(200);

    //mouse vec
    let mouse = createVector(mouseX, mouseY)
    mouse.sub(loc)

    mouse.setMag(0.1)
  
    acceleration.add(mouse)
    
    //Formula for movement
    speed.add(acceleration)
    speed.limit(4)
    loc.add(speed)
   


    ellipse(loc.x, loc.y, 50);
}