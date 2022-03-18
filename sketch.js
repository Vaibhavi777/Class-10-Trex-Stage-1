
var trex ,trex_running;
var ground,ground_image
// var number=[7,4,1,9,10]//array defining
// function sumofnumbers(){
//   var sum=number[0]+number[1]+number[2]+number[3]+number[4]
//   console.log("sum"+"="+sum)
// }
// function multiplication(){
//   var multiply= number[0]*number[1]*number[2]*number[3]*number[4]
//   console.log(multiply)
// }
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
ground_image=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  // sumofnumbers()
  // multiplication()
  //create a trex sprite
trex=createSprite(50,160,20,10)
trex.addAnimation("running",trex_running)
trex.scale=0.7
//creating sprite for the ground
ground=createSprite(200,180,400,20)
ground.addImage("image",ground_image)
}

function draw(){
  background("pink")
  // console.log("Welcome")

  //trex jumping
  if(keyDown("space")){
trex.velocityY=-10
  }
  //giving gravity
  trex.velocityY = trex.velocityY + 0.8
//(-10)+ 0.8 =-9.2
// -9.2 +0.8 = -8.4
//-8.4+0.8 =-7.6
console.log(trex.velocityY)
trex.collide(ground)
ground.velocityX=-4
if(ground.x<0){
  ground.x = 200;
}
drawSprites()

}
