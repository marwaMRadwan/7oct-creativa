/// var let const

// var x = 20
// let y = 10

// if(true){
//     let y = 100
//     var x = 200
//     console.log(y) // 100
// }

// console.log(x) /// 200
// console.log(y) // 10



// var firstName = "Nouran"
// firstName = "Ahmed"

// let lastName = "Fayez"
// lastName = "cgcg"

// const age = 50
// age = 30


// console.log(firstName)
// console.log(lastName)
// console.log(age)

// let - const ==> block scope
// var ==> global / function scope

// function getNum (){
//     var num = 10
//     if(true){
//         var num2 = 20
//         let sum = 200
//     }
//     console.log(num2)
//     // console.log(sum)
// }
// getNum()

///// Array Methods 

let courses = ["html", 'css', 'js']

/// splice(index , deletedCount , item/s)

courses.splice(1, 0, "Bootstrap", "Ts") // add item/s
courses.splice(2, 2) // remove item/s
courses.splice(1, 1, "Angular", "React") // add - remove item/s
// console.log(courses)


// let ind = courses.indexOf("php")

// console.log(ind)

// if(ind == -1) {
// courses.push('php')
// }



let nums = [10, 40, 5, 20]

// console.log(nums[0])
// console.log(nums[1])
// console.log(nums[2])
// console.log(nums[3])

// for(let i = 0 ; i < nums.length ; i++ ){
//     //  console.log(nums[i])
//     console.log(i)
// }


// for(let item of nums){
//     console.log(item)
// }


// let fName =  ()=>{
//     return "Js"
// }

nums.forEach((item, i, arr) => {
    // console.log(arr)
    // console.log(`index of ${i} = ${item}`)
    if (item > 5) return item
})
// console.log(element)

// ()=>{}

//    let result =  nums.find((item)=>{
//         return  item > 5
//     })

// let result =  nums.find((item)=>item > 5)
let result = nums.find((item) => item > 50)

// let index = nums.findIndex((item)=> item> 5)
let index = nums.findIndex((item) => item > 50)



//     console.log(index)

// console.log(result)


// let sum = (num)=>{
//     if(num > 10 ) return true
//     else return false
// }
//  let sum = (num)=>{
//      return num > 10
// }

let sum = (num) => num > 10


//   let newArray = nums.filter(item => item > 5)
let newArray = nums.filter(item => item > 50)
//   console.log(newArray)


// map() ==> search    
// concate() ==> search
// reverse() ==> search
// slice() ==> search
// sort() ==> search

let n = nums.length
// console.log(n)



// let user = ["Nouran" , "Ahmed" , 31 , true , "Nasr city"]

// let user = {
//     firstName: "Nouran",
//     lastName: "Ahmed",
//     age: 31,
//     isGraduated: true
// }
// let user = {
//     firstName: "Marwa",
//     lastName: "Ahmed",
//     age: 31,
//     isGraduated: true
// }
// let user = {
//     firstName: "Zein",
//     lastName: "Ahmed",
//     age: 31,
//     isGraduated: true
// }
// let user = {
//     firstName: "Tamer",
//     lastName: "Ahmed",
//     age: 31,
//     isGraduated: true
// }
// console.log(user.firstName)
// console.log(user['firstName'])
// user.addres = "Nasr city"
// user.age = 20
// console.log(user)


let users = [
    {
        firstName: "Nouran",
        lastName: "Ahmed",
        age: 31,
        isGraduated: true
    },
    {
        firstName: "Marwa",
        lastName: "Ahmed",
        age: 31,
        isGraduated: true
    },
    {
        firstName: "Tamer",
        lastName: "Ahmed",
        age: 31,
        isGraduated: true
    }
]

let i = users.findIndex(item=> item.firstName == "Tamer")
console.log(users)
console.log(i)
console.table(users)

// let fName = prompt('enter first name')
// let fName = prompt('enter first name')
// let fName = prompt('enter first name')
// let fName = prompt('enter first name')
let newUser = {
    firstName : prompt('enter first Name'),
    lastName : prompt('enter last Name'),
}

users.push(newUser)

console.log(users)



// newOfUsers ==> user Number

// addUser ==> userName , id , balance
// editUserBalanceByID ==> id , newBalance
// deleteUserById ==> id 