var guestlist = ["Ali", "Asim", "Sara", "Ayesha"];
var willnotcome = guestlist[0];
console.log(willnotcome, "will not come");
guestlist.splice(0, 1, "Shahzaib");
guestlist.forEach(function (guest) { return console.log("Hi ".concat(guest, ",have a dinner with me.")); });
