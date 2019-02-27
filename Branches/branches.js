function setup() {
  canvasWidth = document.getElementById('branchCanvas').offsetWidth;

  createCanvas(canvasWidth,600);
  frameRate(30);
}

function draw() {
  background(0);
  angle = document.getElementById('angle').value;
  lenSlider = document.getElementById('length').value;
  limitSlider = document.getElementById('limit').value;

  document.getElementById('angleVal').innerHTML = "<p>"+(angle*45)+"</p>";
  document.getElementById('lengthVal').innerHTML = "<p>"+lenSlider+"</p>";
  document.getElementById('limitVal').innerHTML = "<p>"+limitSlider+"</p>";

  translate(width/2,height)

  branch(lenSlider);
  stroke(255);

}

function branch(len){

  line(0,0,0,-len);
  translate(0,-len)

  if(len>limitSlider){
    push();
    rotate(angle);
    branch(len*0.8);
    pop();

    push();
    rotate(-angle);
    branch(len*0.8);
    pop();
  }

}
