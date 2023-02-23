"use strict";

//Draw a line which follow your mouse pointer from the center of the screen
//Check https://p5js.org/reference/ on how to access mouse data

let w, h;
let loc;
function setup() {
    w = windowWidth;
    h = windowHeight;
    createCanvas(w, h);
    background(200);
  
}

function draw() {
    background(200);
    let center = createVector(w/2,h/2)
    let mouse =createVector(mouseX, mouseY)

/*     line(0,0,mouse.x, mouse.y );
    line(0, 0, center.x, center.y);
 */

    mouse.sub(center)

    translate(w/2,h/2)
    line(0,0,mouse.x, mouse.y );
}