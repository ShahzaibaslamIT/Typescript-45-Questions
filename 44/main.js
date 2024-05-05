function sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Items required to make a sandwitch/n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
}
sandwiches("Chicken", "Cheese");
sandwiches("Tomato", "Salad", "Bread");
sandwiches("Egg", "Sauce", "Vegetables", "Mayonise");
