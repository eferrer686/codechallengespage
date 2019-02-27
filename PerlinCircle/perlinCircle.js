let radius = 200;
let border = 100;

let xoff = 500;
let yoff = 500;

let vertexSlider, offSet ;


function setup(){
    createCanvas(radius*2+border,radius*2+border);
    background(100);

    vertexSlider =  createSlider(3,1000,10);

    offSet =  createSlider(0,1,0.1,0.001);
 
}

function draw() {
    stroke(255);
    
    v = TWO_PI/vertexSlider.value();
    off = offSet.value();

    beginShape();

    for (let i = 0; i <= TWO_PI; i+=v) {

            background(100);

            r = radius * noise(xoff,yoff);

            x = r * cos(i) + width/2;
            y = r * sin(i) + height/2;
            vertex(x,y);

            xoff += off * cos(i) ;
            yoff += off * sin(i) ;
        
    }
    endShape();
    //noLoop();
}