function Show_magicians(Magician:string[]){
    Magician.forEach(name=>console.log(name))

}

function make_Great(Text:string[]){
    return magician_names.map(name=>`The Great ${name}`);
}

let magician_names=["Hamza","Ayesha","Sara","Aeiman"]
let great_Magicians=make_Great(magician_names);
console.log(great_Magicians)