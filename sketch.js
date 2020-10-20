var bullet, wall;
var speed, weight;



function setup() {
  createCanvas(1400,400);
  
  speed=random(55,90);
  weight=random(400,1500);

  thickness=random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color('white');

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor=color('grey');

  drawSprites();
}

function draw() {
  background('black');
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage= 0.5 * (weight * speed * speed)/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor='red';
    }
    if(damage<10)
    {
      wall.shapeColor='green';
    }
  }

  text(damage, 200,200);

  drawSprites();
}