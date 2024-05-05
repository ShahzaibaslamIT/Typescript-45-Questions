function sandwiches(...items:string[]){
    console.log("\n Items required to make a sandwitch/n")
     items.forEach(singleitem=>console.log(singleitem));

}
sandwiches("Chicken","Cheese");
sandwiches("Tomato","Salad","Bread");
sandwiches("Egg","Sauce","Vegetables","Mayonise")