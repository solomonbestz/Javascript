import PromptSync from "prompt-sync";
import { add } from "./mathematics.js";

const prompt = PromptSync()


let first_num = Number(prompt('Enter First Number: '))
let second_num = Number(prompt('Enter Second Number: '))

console.log(add(first_num, second_num))