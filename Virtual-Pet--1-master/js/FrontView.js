class Frontview{

constructor(){
this.feedButton=createButton("FEED THE DOG");
this.addFoodButton=createButton("ADD FOOD")


}
display(){
this.feedButton.position(700,95);
this.addFoodButton.position(800,95)
foodStock1.getFoodStock();
this.feedButton.mousePressed(()=>{
foodStock1.deductFood()


})
this.addFoodButton.mousePressed(()=>{
    foodStock1.addFood()
    
    
    })



}







}






