function Show_magicians(Magician:string[]){
    Magician.forEach(name=>console.log(name))

}

function make_Great(Text:string[]){
    return magician_names.map(name=>`The Great ${name}`);
}


let magician_names=["Hamza","Ayesha","Sara","Aeiman"]
let great_Magicians=make_Great(magician_names);

let copy_magicians= magician_names.slice()
let modified_copy_magician_names= make_Great(copy_magicians)

Show_magicians(magician_names);
Show_magicians(modified_copy_magician_names);