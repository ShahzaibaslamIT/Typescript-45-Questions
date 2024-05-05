function Show_magicians(Magician) {
    Magician.forEach(function (name) { return console.log(name); });
}
function make_Great(Text) {
    return magician_names.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Hamza", "Ayesha", "Sara", "Aeiman"];
var great_Magicians = make_Great(magician_names);
console.log(great_Magicians);
