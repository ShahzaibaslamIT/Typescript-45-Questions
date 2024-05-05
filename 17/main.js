var guest = ["Asim", "Sara", "Ali", "Hasan", "Ikhtiar"];
guest.map(function (items) {
    return console.log("Sorry ".concat(items, " only 2 people are oinvited for dinner due to limited space"));
});
while (guest.length > 2) {
    var removedguest = guest.pop();
    console.log("Sorry ".concat(removedguest, ", you are no longer invited."));
}
var Guest = ["Asim", "Sara"];
guest.forEach(function (person) {
    console.log("Dear ".concat(person, ", you are still invited."));
});
guest.pop();
console.log("Final guest list is ", guest);
