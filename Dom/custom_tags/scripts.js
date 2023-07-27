
const color_text = document.querySelector('#color-text')
// const image_con = document.querySelector('.image-con')
const images = document.querySelector('.img')


const empty_list = [images.src, "images/img2.webp", "images/img3.webp", "images/img4.webp"]
let counter = 0

function display(list, element){
    setTimeout(function(){
        element.src = list[counter]
        counter++
        if(counter < list.length){
            display(list, element)
        }
        if(counter === list.length){
            counter = 0
            display(list, element)
        }
    }, 3000)
}

display(empty_list, images)

// btn.addEventListener('click', function(){
//     color_text.style.color = colors[counter]
//     counter++
//     if(counter === colors.length){
//         counter = 0
//     }
// })
