
var i = 10 // strict equality ===

switch (i) {
    case "10":
    case 10 :    
        console.log(10)
        break
    case 0:
        console.log(0)
        break
    case 30:
        console.log(30)
        break
    default: console.log('invalid number')
}


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)


// for looping - while - do while - forEach , for of ,  for in

// for(variable ; condition ; increment){
//     code
// }


// for(var i = 1 ; i < 3 ; i++){
//     // var p = prompt('name')
//     console.log(i)
// }

// for(var i = 1 ; i <= 20 ; i+=2){
//     if(i == 7) continue
//     else if
//     (i == 15) break
//     console.log(i)

// }


// for(var i = 1 ; ; i++){
//     if(i == 10 ) break
// }


// var p = prompt('number')
// while(p != 0 ){
//     p = prompt('number')
// }


// var x = 1
// while(x <= 10){
//     console.log(x)


//     x++
// }

/// do-while ==> search 

// var num = 2 , num2 = "str" , num3 = 30

// console.log(num / num2) // NaN

// console.log(num3)

// function sum(){
//     // var s = 10 + 30
//     // console.log(10 + 30)
//     // return 10 + 30
//     var s = 10 + 30
//     return 10 > 30
// }

// var s = sum()
// console.log(s)
// console.log(s / 2)


// // var p = prompt()

function sum(num , num2 = 100 , name = "Nouran"){
    console.log(num2)
    return num + num2
}

console.log(sum(10 , 50))
console.log(sum(100 , 30))
sum()

// function getName(firstName = "Nouran" , lastName = "Ahmed"){
//     return `${firstName} ${lastName}`
// }

// getName(10 , 30)

// prompt("enter name " , "Nouran")

// function getUserName(){
//     var fName = prompt('enter your first name')
//     var lName = prompt('enter your last name')
//      fullName = `${fName}  ${lName}`
//     // return `${fName}  ${lName}`
// }

// console.log(getUserName())
// console.log(fullName)


