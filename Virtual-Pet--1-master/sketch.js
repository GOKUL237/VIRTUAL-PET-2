//Create variables here
var dog,happyDog, database, foodS, foodStock1,happyDogimg,dogimg
var frontView
var FoodStock;

function preload()
{
	//load images here
dogimg=loadImage("images/dogImg.png")
happyDogimg=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
  
  
  createCanvas(500, 500);
 dog =createSprite(250,250,20,20)  
 dog.addImage("dog1",dogimg)
 dog.addImage("happyDog",happyDogimg)
dog.scale=0.5
foodStock1=new Food();


frontView= new Frontview();








}


function draw() {  
  background(46, 139, 87)
  /*if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.changeImage("happyDog")
  }
  drawSprites();
  fill("RED")
  textSize(14)
  text("food:"+foodS,200,50)
  //add styles here
 */ foodStock1.getFoodStock();
 
frontView.display();
fill("RED")
  textSize(14)
text("food:"+FoodStock,200,50)

}

function readStock(data){
  foodS=data.val();
  
}

function writeStock(x){
  if(x>0){
    x=x-1;
  }
  else{
x=0

  }
database.ref('/').update({
  Food:x
})
}