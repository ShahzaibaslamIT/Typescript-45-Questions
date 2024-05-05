let guestlist=["Ali","Asim","Sara","Ayesha"];
let willnotcome =guestlist[0];
console.log(willnotcome,"will not come");
guestlist.splice(0,1,"Shahzaib");
guestlist.forEach(guest=>console.log(`Hi ${guest},have a dinner with me.`));