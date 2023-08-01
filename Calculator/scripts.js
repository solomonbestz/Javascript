let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btn0 = document.getElementById('btn0')
let add_op = document.getElementById('btn-add')
let sub_op = document.getElementById('btn-sub')
let mult_op = document.getElementById('btn-mult')
let div_op = document.getElementById('btn-div')
let equals_to = document.getElementById('btn-equal')
let clear = document.getElementById('btn-clear')
let entry = document.getElementById('entry')


const buttons = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, add_op, sub_op, mult_op, div_op]


buttons.forEach( button => {
    button.addEventListener('click', function(){
        if(entry.value === 'Syntax Error'){
            entry.value = ''
        }
        entry.value += button.value
    })
})

clear.addEventListener('click', function(){
    entry.value = ''
})

equals_to.addEventListener('click', function(){
    try{
        entry.value = eval(entry.value)
    }catch{
        entry.value = 'Syntax Error'
    }
})
