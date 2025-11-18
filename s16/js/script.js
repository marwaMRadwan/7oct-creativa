
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
            testAddress : function(address){
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

console.log(date)

console.log(date.getFullYear())
console.log(date.getMonth())

var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

    console.log(month[date.getMonth()])  
    
    console.log(date.getDate())
    console.log(date.getDay())
    console.log(date.getHours())
    console.log(date.getMinutes())
    console.log(date.getSeconds())
    console.log(date.getMilliseconds())

    console.log(date.toLocaleDateString("ar-EG" ,
         {'weekday':'long' , 'month':'short'}))
    
     console.log(date.toLocaleDateString("en-US" ,
         {'weekday':'long' , "month":'short' , 'year':'numeric'}))   
             console.log(date.toLocaleDateString("en-US"))   
