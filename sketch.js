const Engine = Matter.Engine; 
const World = Matter.World;
 const Bodies = Matter.Bodies;
 var myengine,myworld,box1,box2;
function setup(){
  createCanvas(600,400)
  myengine = Engine.create();
   myworld = myengine.world;
    box1 = new Box(220,300,50,50);
     box2 = new Box(200,100,100,50)
     ground=new Ground(300,390,600,20)
}

function draw() {
  background("lightblue");
   Engine.update(myengine);
    box1.display(); 
    box2.display();
    ground.display();
}



















