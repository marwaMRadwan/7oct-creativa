
let firstName = "zein"
let lastName = "Ahmed"
let obj = {
    firstName: 'Nouran',
    lastName: "Ahmed",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    addressList: function () {
        return {
            homeAddress: "Nasr city",
            officeAddress: 'October',
            testAddress: function (address) {
                return address
            }
        }
    }
}

// console.log(obj.fullName())
// console.log(obj.addressList().officeAddress)
// console.log(obj.addressList().testAddress('Maadi'))

/// string Method

let courses = "       html , css, bootstrap , Js , html        "

// console.log(courses[0])

// for(let i = 0 ; i< courses.length ; i++){
//     console.log(courses[i])
// }

// console.log(courses.includes('css'))
// console.log(courses.replace('html' , 'Hypertext markup language'))
// console.log(courses.replaceAll('html' , 'Hypertext markup language'))
// console.log(courses.toUpperCase())
// console.log(courses.toLowerCase())
// console.log(courses.slice(0 , 10))
// console.log(courses.trim())
// console.log(courses.trimEnd())
// console.log(courses.trimStart())
// console.log(courses.trim().startsWith('html'))
// console.log(courses.trim().endsWith('html'))


////// Number Methods 

// let p = prompt('enter your age')
// console.log(typeof p)
// console.log(parseInt(p))
// console.log(parseFloat(p))
// console.log(Number(p))


// console.log(Math.random()*100)

// let num = 25.6
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.max(20 , 5, 3, 100))
// console.log(Math.min(20 , 5, 3, 100))
// console.log(Math.abs(-5))


// isNaN() ==> search 

// console.log(courses)

let date = new Date()

// console.log(date)

// console.log(date.getFullYear())
// console.log(date.getMonth())

var month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

// console.log(month[date.getMonth()])  

// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())

// console.log(date.toLocaleDateString("ar-EG",
//     { 'weekday': 'long', 'month': 'short' }))

// console.log(date.toLocaleDateString("en-US",
//     { 'weekday': 'long', "month": 'short', 'year': 'numeric' }))
// console.log(date.toLocaleDateString("en-US"))   



// DOM ==> document object model

console.log()
let h2Elements = document.getElementsByTagName('h2')
h2Elements[1].innerText = "Javascript"

let textClass = document.getElementsByClassName('text-class')

textClass.innerText = "Javascript"
textClass.firstName = "dfghj"
console.log(textClass)

for(let i = 0 ; i < textClass.length ; i++){
    textClass[i].innerHTML = "<a href=''>HTml</a>"   
}

let h1 = document.getElementById('h1_id')
console.log(h1)
h1.textContent = "Javascript"

// let h1Element = document.querySelector("h2 span.active")
// let element = document.querySelector(".text-class")
// let elements = document.querySelectorAll(".text-class")

// console.log(elements)


let h1Element = document.querySelector("#h1_id")

// h1Element.style.color = "red"
// h1Element.style.backgroundColor = "lightgray"
// h1Element.style.padding = "5%"

h1Element.classList.add("bg-light" , "text-primary" , 'p-2')
h1Element.classList.remove('border')
h1Element.classList.toggle('border')


function changeImg(){

    let img = document.getElementById('img-id');
    // console.log(img.id)
    // console.log(img.src)

    // img.src = "images/2.jpg"

    (img.src.endsWith('2.jpg')) ? 
     img.src = "images/1.jpg" : img.src = "images/2.jpg"
}


function handleMouseEvent(flag , element , e = null){
    console.log(element)
    console.log(e)
    element.classList.toggle('bg-info')
    console.log(flag)
}


