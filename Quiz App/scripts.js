list_questions = [
{
    question: 'Who is the ecowas chairman?',
    answers: ['Captain Segun', 'Favour Chukwuemeka', 'Bola Tinubu', 'Olajide Wealth'],
    correct: 2
},
{

    question: 'What is the color of the sky?',
    answers: ['White', 'Black', 'Orange', 'Blue'],
    correct: 3

}
]

// console.log(list_questions[0].question1.correct)

const container = document.getElementById('container')
const quiz_length = document.getElementById('quiz-length')
const scores = document.getElementById('score')

//  Creating the question box
const question_box = document.createElement('div')
question_box.className = 'question-box'

// Creating children of question box
const question = document.createElement('h2')
question.id = 'question'
const options = document.createElement('div')
options.id = 'options'
const next_btn = document.createElement('button')
next_btn.className = 'next'

//  Creating children of options
const ans1 = document.createElement('button')
const ans2 = document.createElement('button')
const ans3 = document.createElement('button')
const ans4 = document.createElement('button')



const answer_btns = [ans1, ans2, ans3, ans4]


// Add class question box to container
container.appendChild(question_box)

// Added the created children to question box
question_box.appendChild(question)
question_box.appendChild(options)
question_box.appendChild(next_btn)

// Added the answers to the options
options.appendChild(ans1)
options.appendChild(ans2)
options.appendChild(ans3)
options.appendChild(ans4)

let counter = 0
let score =  0

function quiizer(){
    question.innerHTML = list_questions[counter].question
    ans1.innerHTML = list_questions[counter].answers[0]
    ans2.innerHTML = list_questions[counter].answers[1]
    ans3.innerHTML = list_questions[counter].answers[2]
    ans4.innerHTML = list_questions[counter].answers[3]
    ans1.value = 0
    ans2.value = 1
    ans3.value = 2
    ans4.value = 3

    quiz_length.innerHTML = (counter + 1) + ' of '+ list_questions.length
}

function check_correct(){
    next_btn.style.display = 'none'
    ans1.className = 'btn'
    ans2.className = 'btn'
    ans3.className = 'btn'
    ans4.className = 'btn'
    answer_btns.forEach(btn => {
        btn.addEventListener('click', function(){
            if(btn.value ==list_questions[counter].correct){
                score += 1
                scores.innerText = score
                btn.className = 'btn correct-ans'
                next_btn.innerText = 'Next'
                next_btn.style.display = 'block'
            }else{
                btn.className = 'btn wrong-ans'
                answer_btns[list_questions[counter].correct].className = 'btn correct-ans'
                next_btn.innerText = 'Next'
                next_btn.style.display = 'block'
            }
        })
    })
}

next_btn.addEventListener('click', function(){
    counter = counter + 1
    quiizer()
    check_correct()
})

quiizer()
check_correct()