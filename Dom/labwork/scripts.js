
let main_container = document.createElement('div')
let first_page = document.createElement('div')
let second_page = document.createElement('div')
let btn = document.getElementById('btn')

main_container.className = 'container'
first_page.className = 'first_page'
second_page.className = 'second_page'




// Add main container to body tag
document.body.appendChild(main_container)
// Add first page to main container
main_container.appendChild(first_page)

// Add event listener on button click to switch page
btn.addEventListener('click', function(){
    if(btn.name == '0'){
        btn.name = '1'
        main_container.removeChild(first_page)
        main_container.appendChild(second_page)
        console.log(btn.name)
    }
    else if(btn.name == '1'){
        btn.name = '0'
        main_container.removeChild(second_page)
        main_container.appendChild(first_page)
    }
    
})