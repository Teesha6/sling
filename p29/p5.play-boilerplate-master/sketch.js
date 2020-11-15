function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
 
  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon);

  slingShot = new SlingShot(this.polygon, {x:100, y:200});

  block1 = new Block (330,235,30,40);
  block2 = new Block (360,235,30,40);
  block3 = new Block (390,235,30,40);
  block4 = new Block (420,235,30,40);
  block5 = new Block (450,235,30,40);
  block6 = new Block (480,235,30,40);
  block7 = new Block (510,235,30,40);

  block8 = new Block (540,235,30,40);
  block9 = new Block (570,235,30,40);
  block10 = new Block (600,235,30,40);
  block11 = new Block (630,235,30,40);
  block12 = new Block (660,235,30,40);

  block13 = new Block (690,235,30,40);
  block14 = new Block (720,235,30,40);
  block15 = new Block (750,235,30,40);

  block16 = new Block (780,235,30,40);

  drawSprites();
}