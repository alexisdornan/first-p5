// Let's build functions in p5.js
//functions are actiosn; they make stuff happen

//Define setup function 
function setup(){
    //call createCanvas anf background functions
    createCanvas(800,600)
}


var position = 100
var speed = 3


function draw(){
    clear()
    background(100)
    fill(256)
    rect(position, 100, 150, 60, 20)
    fill("pink")
    ellipse(position,150,75,75)
    ellipse(position + 150,150,75,75)
    
    position = position + speed 
    
    if (position > 800) {
        speed = speed * -1    
    }
    
    if (position < 0) {
        speed = speed * -1
    }
    
    fill(0)
    textSize(40)
    text("Position: " + position, 30, 30)
    text("Speed: " + speed, 60, 60)
    
}