import PromptSync from "prompt-sync";
import { add, length } from "./mathematics.js";

const prompt = PromptSync()


const fruit_list = []
const student_list = ['favour', 'wealth', 'tobi', 'captain', 'bimbola']
let count_1 = 0;

for(count_1; count_1 < 5; count_1++){
    // let student = prompt('Enter Your Name: ')
    let fruit = prompt('Write A Fruit Name: ')
    // student_list.push(student)
    fruit_list.push(fruit)
}

let count_2 = 0

for(count_2; count_2 < length(fruit_list); count_2++){
    console.log(`${student_list[count_2]} likes ${fruit_list[count_2]}`)
}
