"use strict";

let loc;
let speed;

function setup() {
    createCanvas(windowWidth, windowHeight);    
    loc = createVector(windowWidth/2,windowHeight/2)
    speed = p5.Vector.random2D();
   /*  speed.mult(5) */
}

function draw() {
    background(255);
    fill(0);

    if ((loc.x > windowWidth) || (loc.x < 0)) {
        speed.x *= -1;
    }
    if ((loc.y > windowHeight) || (loc.y < 0)) {
        speed.y *= -1;
    }


  loc.add(speed);

    ellipse(loc.x,loc.y, 100);
}