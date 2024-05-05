let guest=["Asim","Sara","Ali","Hasan","Ikhtiar"];
guest.map((items)=>
console.log(`Sorry ${items} only 2 people are oinvited for dinner due to limited space`)
)
while(guest.length>2){
    const removedguest = guest.pop();
    console.log(`Sorry ${removedguest}, you are no longer invited.`);
}
let Guest=["Asim","Sara"];
guest.forEach((person)=>{
console.log(`Dear ${person}, you are still invited.`);
});

guest.pop();
console.log("Final guest list is ", guest);