var values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
    var a = values_1[_i];
    if (a === 1) {
        console.log("".concat(a, "st"));
    }
    else if (a === 2) {
        console.log("".concat(a, "nd"));
    }
    else if (a === 3) {
        console.log("".concat(a, "rd"));
    }
    else {
        console.log("".concat(a, "th"));
    }
}
