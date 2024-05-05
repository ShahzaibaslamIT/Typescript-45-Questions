var current_users = ["Ali", "John", "Asim", "Gulzar", "Sajid"];
var new_users = ["Gulzar", "Jam", "Saleem", "Muneer", "Asim"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var a = new_users_1[_i];
    if (current_users_lower.includes(new_users.toLocaleString())) {
        console.log("Sorry ".concat(new_users, ",that name is taken"));
    }
    else {
        console.log("Yes ".concat(new_users, ", is still avalaible in the list"));
    }
}
