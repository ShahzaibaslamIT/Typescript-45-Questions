var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placestovisit = ["Muree", "Islamabad", "Kashmir", "Sukkur", "Hala"];
console.log("Original order:", placestovisit);
console.log("Alphabetical order:", __spreadArray([], placestovisit, true).sort());
console.log("Original order after sorting:", placestovisit);
console.log("Reverse alphabetical order:", __spreadArray([], placestovisit, true).sort().reverse());
console.log("Orinal order after reverse sorting", placestovisit);
placestovisit.reverse();
console.log("Reverse order:", placestovisit);
placestovisit.reverse();
console.log("Back to original order", placestovisit);
placestovisit.sort();
console.log("Sorted in alphabeticaL order", placestovisit);
placestovisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placestovisit);
