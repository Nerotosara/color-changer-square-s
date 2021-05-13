var object1,object2;

function setup() {
  createCanvas(800,400);
  
  object1 = createSprite(400, 200, 50, 50);
  object2=createSprite(500,200,50,50);
object1.shapeColor="green";
object2.shapeColor="black";
}

function draw() {
  background(200,55,25);  
  object1.x=World.mouseX;
  object1.y=World.mouseY;
console.log(object1.x-object2.x);
if(object1.x-object2.x <object1.width/2+object2.width/2 && 
 object2.x-object1.x<object1.width/2+object2.width/2 &&
 object1.y-object2.y <object1.width/2+object2.width/2&&
 object2.y-object1.y<object1.width/2+object2.width/2
 ){
  object1.shapeColor="yellow";
  object2.shapeColor="blue";
  object2.velocityX=random(-2,2);
  object2.velocityY=random(-2,2);

}

else{
  object1.shapeColor="green";
  object2.shapeColor=random(1,50,20);
  object2.velocityX=0;
  object2.velocityY=0;
}


  drawSprites();
}