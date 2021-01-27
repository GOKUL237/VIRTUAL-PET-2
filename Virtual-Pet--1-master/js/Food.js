class Food {

constructor(){

//this.foodStock=0
//this.lastFed;

this.milk=loadImage("images/Milk.png")


}
getFoodStock(){

var FoodStockref=database.ref("FoodStock");
FoodStockref.on("value",(data)=>{
FoodStock=data.val();
console.log(FoodStock);
})

}
updateFoodStock(foodCount){
database.ref("/").update({
FoodStock:foodCount

})

}
deductFood(){
 if(FoodStock>0){
FoodStock=FoodStock-1

 }   
}
addFood(){
    if(FoodStock===0){
   FoodStock=FoodStock+1
   
    }   
   }
}