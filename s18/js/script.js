$(document).ready(function(){

    // document.querySelector('.owl-carousel')
  $(".owl-carousel").owlCarousel({
    items : 5,
    margin : 20 , 
    nav : true,
    navText : ['<i class="fa-solid fa-arrow-left bg-dark text-white"></i>' , '<i class="fa-solid fa-arrow-right"></i>']
  });
  
});


let form = document.getElementById('myForm')

let nameValidation = (input)=>{
    let inputValue = input.value.trim()
    if(inputValue.length <= 3) handleError(input , "enter at least 3 character")
    else handleError(input )
}
let emailValidation = (input)=>{
        let inputValue = input.value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailRegex.test(inputValue))

    if(emailRegex.test(inputValue)) handleError(input)
        else handleError(input , "please enter a valid email")

}
let passwordValidation = ()=>{

}

let handleError= (ele , msg = "")=>{
    ele.nextElementSibling.innerText = msg
}

form.addEventListener('input' , (e)=>{
    // console.log(e.target.id)
    // console.log(e.target.value)

    if(e.target.id == "userName") nameValidation(e.target)
    else if(e.target.id == "userEmail") emailValidation(e.target)
    else if(e.target.id == "userPassword") passwordValidation()
})



// let str = "lorem ipsum lorem"
// let regEx = /html/

let str = "Nouran 123 Ahmed 456 "
let regEx = /\d+/g

console.log(regEx.test(str))
console.log(str.match(regEx))

