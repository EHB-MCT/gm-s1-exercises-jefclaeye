"use strict";

let loc, speed, acceleration;
let m = 50;

function setup() {
    createCanvas(windowWidth, windowHeight);
    loc = createVector(windowWidth / 2, 0)
    speed = p5.Vector.random2D();
    acceleration = createVector();
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

    let gravity = createVector(0, 1)
    addForce(gravity)

    if(mouseIsPressed){
        let wind = createVector(-1,0)
        addForce(wind);
    }

    speed.add(acceleration);
    loc.add(speed);

    ellipse(loc.x, loc.y, m);
}

function addForce(force) {
    let f = force.copy();
    f.div(m);
    acceleration.add(f);


}