

function calculator(num1, num2, op){
    try{
        return eval(`${num1}${op}${num2}`)
    }
    catch(err){
        return 'Invalid Operator'
    }
}

console.log(calculator(3, 4, '.'))

