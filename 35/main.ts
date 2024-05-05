let animal:string[]=["Dog","Cat","Chick"]
for(const a of animal) {
    console.log(animal);
}
console.log("Statement about animals:");
for(const a of animal){
    switch(animal){
        case ["Dog"]:
            console.log(`${a} is a good pet`)
            break;
        case ["Cat"]:
            console.log("Cat is very cute")    
            break;
        case ["Chick"]:
            console.log("Chick is ver small")    
            break;
        default:
            console.log("The animal is not in the list")    
    }
}
console.log("Any of these 3 pets would be a moment of joy for me")