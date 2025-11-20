let userName = document.getElementById('userName')
let h2Element = document.querySelector('#h2_element')
// let search = document.getElementById('search')

userName.addEventListener('input' , ()=>{
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


myForm.addEventListener('submit' , (e)=>{
    e.preventDefault()
    // console.log('submitting')
    // console.log(e.target.elements.userName.value)
    // console.log(e.target[0].value)

    let obj = {
        name : e.target[0].value,
        email : e.target[1].value
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


