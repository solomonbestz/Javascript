
let prompt = require('prompt-sync')({sigint:true});

console.log("Welcome To Temi's Birthday Party")

let user_name = prompt('Enter Username: ')
let age = prompt('Enter Age: ')
const age_limit = 18

if(age >= age_limit && age <= 27){
    console.log(`${user_name}, Temi is excited to have you in his party.`)
}else if(age > 27){
    console.log(`${user_name}, you are too old to attend temi's party`)
}else{
    console.log(`${user_name}, you are not old enough to attend temi's party`)
}


