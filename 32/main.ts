let current_users:string[]=["Ali","John","Asim","Gulzar","Sajid"]
let new_users:string[]=["Gulzar","Jam","Saleem","Muneer", "Asim"]

let current_users_lower:string[]=current_users.map(user=>user.toLowerCase())

for(let a of new_users){
    if(current_users_lower.includes(new_users.toLocaleString())){
        console.log(`Sorry ${new_users},that name is taken`)
    } else{
        console.log(`Yes ${new_users}, is still avalaible in the list`)
    }
}