var animal = ["Dog", "Cat", "Chick"];
for (var _i = 0, animal_1 = animal; _i < animal_1.length; _i++) {
    var a = animal_1[_i];
    console.log(animal);
}
console.log("Statement about animals:");
for (var _a = 0, animal_2 = animal; _a < animal_2.length; _a++) {
    var a = animal_2[_a];
    switch (animal) {
        case ["Dog"]:
            console.log("".concat(a, " is a good pet"));
            break;
        case ["Cat"]:
            console.log("Cat is very cute");
            break;
        case ["Chick"]:
            console.log("Chick is ver small");
            break;
        default:
            console.log("The animal is not in the list");
    }
}
console.log("Any of these 3 pets would be a moment of joy for me");
