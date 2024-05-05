let username:string[]=["Admin","Ali","John","Sara","Shahmeer"]
username=[]

if (username.length===0){
    console.log("We need to find some users!")
}else {
    for(let a of username){
        if(a=="Admin"){
            console.log("Hello Admin, would you like to see a status report?")
        }
        else{
            console.log(`Hello ${a} thank you for logging in again.`)
        }
}}