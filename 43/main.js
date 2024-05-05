function Show_magicians(Magician) {
    Magician.forEach(function (name) { return console.log(name); });
}
function make_Great(Text) {
    return magician_names.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Hamza", "Ayesha", "Sara", "Aeiman"];
var great_Magicians = make_Great(magician_names);
var copy_magicians = magician_names.slice();
var modified_copy_magician_names = make_Great(copy_magicians);
Show_magicians(magician_names);
Show_magicians(modified_copy_magician_names);
