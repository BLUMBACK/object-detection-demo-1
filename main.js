img="";
function preload()
{
    img=loadImage('dog_cat.jpg');

}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();

}

function draw()
{
    image(img,0,0,640,420);
    fill("red");
    text("dog",70,60);
    noFill();
    stroke("red");
    rect(50,50,504,360);


}