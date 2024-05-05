var guestlist = ["Ali", "Asim", "Sara", "Ayesha"];
var willnotcome = guestlist[0];
var new_guest = "Aslam";
guestlist[guestlist.indexOf(willnotcome)] = new_guest;
console.log(guestlist);
guestlist.map(function (items) {
    return console.log("Dear ".concat(items, ", I found bigger dinner table so I invited more people"));
});
var guestnew = "Hashim";
guestlist.unshift(guestnew);
console.log(guestlist);
var middleguest = "Farah";
var middleindex = guestlist.length / 3;
guestlist.splice(middleindex, 0, middleguest);
console.log(guestlist);
guestlist.push("Zeeshan");
console.log(guestlist);
guestlist.map(function (items) {
    return console.log("Dear ".concat(items, ", we added more people to our dinner"));
});
