let guestlist=["Ali","Asim","Sara","Ayesha"];
let willnotcome =guestlist[0];
let new_guest ="Aslam"
guestlist[guestlist.indexOf(willnotcome)]=new_guest;
console.log(guestlist)

guestlist.map((items)=>
console.log(`Dear ${items}, I found bigger dinner table so I invited more people`)
);

let guestnew="Hashim"
guestlist.unshift(guestnew);
console.log(guestlist)

let middleguest="Farah"
let middleindex= guestlist.length/3
guestlist.splice(middleindex,0,middleguest)
console.log(guestlist)


guestlist.push("Zeeshan")
console.log(guestlist)

guestlist.map((items)=>
console.log(`Dear ${items}, we added more people to our dinner`)
)