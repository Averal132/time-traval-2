var frank;
var fireGround;
var fixdplatfrom
var platform, platformGroup;
function setup() {
  
  createCanvas(800,600);
  frank = createSprite(100,100,20,20);
  fixdplatfrom=createSprite(120,90,60,40)
  fireGround = createSprite(400,580,800,20);
  fireGround.shapeColor = "orange";


}

function draw() {
  background("green");  


  


  spawnPlatform();
  drawSprites();
}

function spawnPlatform(){
  var num =round(random(150,160));
  console.log(num);
  if(frameCount % num== 0){
    
      platform = createSprite(800,random(200,400),random(50,100),10);
      platform.velocityX =-1.5;

  
  
    
  }
  

}