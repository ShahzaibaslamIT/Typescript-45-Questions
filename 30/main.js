var username = ["Admin", "Ali", "John", "Sara", "Shahmeer"];
for (var _i = 0, username_1 = username; _i < username_1.length; _i++) {
    var a = username_1[_i];
    if (a == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(a, " thank you for logging in again."));
    }
}
