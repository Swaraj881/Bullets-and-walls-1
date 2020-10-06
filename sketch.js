

var bullet,wall,thickness;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(223,321)
	weight=random(30,52);
	thickness=random(22,83);

	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor=color(255);


  
  	wall=createSprite(1500,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(hascollided(bullet,wall))
  {
	  bullet.velocityX=0;
	  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
	  if (damage>10)
	  {
		  wall.shapecolor=color(255,0,0);
  }
if (damage<10)
{
	wall.shapeColor=color(0,255,0);
}
  }
  drawSprites();
 
}
function hascollided(lbullet,lwall)
{
	bulletRightedge=lbullet.x+lbullet.width;
	wallLeftedge=lwall.x;
	if (bulletRightedge>=wallLeftedge)
	{
		return true;
	}
	else
	{
	return false;
} 

}

