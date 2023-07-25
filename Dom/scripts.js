

function create_elements(element_type, class_name, text, parent){
    const element = document.createElement(element_type)
    element.className = class_name
    element.innerText = text
    parent.appendChild(element)
    return element
}

// let first_element = create_elements('div', 'container', 'My First Div', document.body)

let first_btn = document.getElementById('btn1')
let second_btn = document.getElementById('btn2')


first_btn.addEventListener('mouseover', mouse_over)
second_btn.addEventListener('mouseover', mouse_over)

function mouse_over(){
    console.log('The mouse went over me')
}


