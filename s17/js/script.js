let userName = document.getElementById('userName')
let h2Element = document.querySelector('#h2_element')
// let search = document.getElementById('search')

userName.addEventListener('input', () => {
    // console.log('typing')
    console.log(userName.value)
    h2Element.textContent = userName.value
    userName.nextElementSibling.innerText = userName.value

})

// search.addEventListener('keydown' , (e)=>{
//     // console.log(e)
//     if(e.key == "Enter") console.log('enter')
// })


let myForm = document.getElementById('myForm')


myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log('submitting')
    // console.log(e.target.elements.userName.value)
    // console.log(e.target[0].value)

    let obj = {
        name: e.target[0].value,
        email: e.target[1].value
    }
    console.log(obj)
})


let div = document.createElement('div')
let h2 = document.createElement('h2')

h2.textContent = "Javascript"

div.appendChild(h2)
console.log(div)

let container = document.getElementById('container')

container.appendChild(div)

// let setTime = setTimeout(() => {
//     console.log('Js')
// }, 2000)

// setInterval(() => {
//     console.log('javascript')
// }, 2000)


// let h1 = document.getElementById('h1_element')
// let i = 1
// let set = setInterval(() => {
//     h1.innerText = i
//     if (i == 20) clearInterval(set)
//         i++
// }, 500)

// console.log(setTime)
// console.log(set)


let scrollDiv = document.querySelector('.scrollDiv')

scrollDiv.addEventListener('scroll' , (e)=>{
    // console.log(e)
    console.log(e.target.scrollTop)
    if(e.target.scrollTop > 200) e.target.classList.add('bg-secondary')
})


window.addEventListener('scroll' , ()=>{
    console.log('scrolling')
    console.log(document.documentElement.scrollTop)
})