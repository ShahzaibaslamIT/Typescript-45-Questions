let placestovisit=["Muree","Islamabad","Kashmir","Sukkur","Hala"]
console.log("Original order:", placestovisit);
console.log("Alphabetical order:", [...placestovisit].sort());
console.log("Original order after sorting:",placestovisit);
console.log("Reverse alphabetical order:",[...placestovisit].sort().reverse());
console.log("Orinal order after reverse sorting", placestovisit);
placestovisit.reverse();
console.log("Reverse order:",placestovisit);
placestovisit.reverse();
console.log("Back to original order",placestovisit);
placestovisit.sort();
console.log("Sorted in alphabeticaL order",placestovisit);
placestovisit.sort((a,b)=>b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:",placestovisit);

