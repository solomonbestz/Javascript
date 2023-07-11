let prompt = require('prompt-sync')({sigint:true});

let score = 0
console.log(`Welcome To Our Quiz Game 
Type a or b or c or d to answer our questions
If you get a question correct you earn 2points and if you miss a question you lose 2points

`)

console.log(`0pko,1) What is the capital of lagos?
a) Iyana Ipaja
b) Oshodi
c) Ikeja 
d) Lekki `)
let question1 = prompt('Enter Answer: ')

if(question1.toLowerCase() == 'c'){
    score += 2
    console.log(`You just earned ${score} points`)
}else{
    if(score == 0){
        console.log('You got it wrong, The correct answer is c')
    }else{
        score -= 2
        console.log('You got it wrong, The correct answer is c')
        console.log(`You now have ${score} points`)
    }
    
}

console.log(`

2) Who is the president of Nigeria?
a) Abimbola Johnson
b) Ijebu Ogini
c) Ijesha Bimbo
d) Bola Ahmed Tinubu`)

let question2 = prompt('Enter Answer: ')

if(question2.toLowerCase() == 'd'){
    score += 2
    console.log(`You just earned ${score} points`)
}else{
    if(score == 0){
        console.log('You got it wrong, The correct answer is d')
    }else{
        score -= 2
        console.log('You got it wrong, The correct answer is d')
        console.log(`You now have ${score} points`)
    }
    
}

console.log(`

3) The following are human part of the body except?
a) Tail
b) Head
c) Kidney
d) Eyes`)
let question3 = prompt('Enter Answer: ')

if(question3.toLowerCase() == 'a'){
    score += 2
    console.log(`You just earned ${score} points`)
}else{
    if(score == 0){
        console.log('You got it wrong, The correct answer is a')
    }else{
        score -= 2
        console.log('You got it wrong, The correct answer is a')
        console.log(`You now have ${score} points`)
    }
    
}

console.log(`

4) Who is the chairman of UBA Group?
a) Elon Musk
b) Solomon Bestz
c) Adebakin Tobi
d) Tony Elumelu `)
let question4 = prompt('Enter Answer: ')

if(question4.toLowerCase() == 'd'){
    score += 2
    console.log(`You just earned ${score} points`)
}else{
    if(score == 0){
        console.log('You got it wrong, The correct answer is d')
    }else{
        score -= 2
        console.log('You got it wrong, The correct answer is d')
        console.log(`You now have ${score} points`)
    }
    
}

console.log(`

5) Which of this is not a javascript datatype?
a) String
b) Console
c) Boolean
d) Number`)
let question5 = prompt('Enter Answer: ')

if(question5.toLowerCase() == 'b'){
    score += 2
    console.log(`You just earned ${score} points`)
}else{
    if(score == 0){
        console.log('You got it wrong, The correct answer is b')
    }else{
        score -= 2
        console.log('You got it wrong, The correct answer is b')
        console.log(`You now have ${score} points`)
    }
    
}

console.log(`

6) Who is spider-man's girlfriend?
a) Folake
b) Biliki
c) Amaka
d) Mary-Jane`)
let question6 = prompt('Enter Answer: ')

if(question6.toLowerCase() == 'd'){
    score += 2
    console.log(`You just earned ${score} points`)
}else{
    if(score == 0){
        console.log('You got it wrong, The correct answer is d')
    }else{
        score -= 2
        console.log('You got it wrong, The correct answer is d')
        console.log(`You now have ${score} points`)
    }
    
}


console.log(`Your Total point is ${score} points`)

