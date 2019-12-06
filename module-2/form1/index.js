



var userForm = document.user
// console.log(userForm.add1.value)
userForm.addEventListener("submit",  (e) => {
    e.preventDefault()
    var num1 = Number(userForm.add1.value)
    var num2 = Number(userForm.add2.value)
    var totalNum = num1 + num2

    userForm.add1.value=""
    userForm.add2.value=""

    var pTag = document.createElement("p")
    pTag.textContent = totalNum
    var a = document.getElementById("div")
    a.appendChild(pTag)
})



let form2 = document.form2

form2.addEventListener("submit",(e)=>{e.preventDefault()

let s = Number(form2.ad2.value)
let ss = Number(form2.dd22.value)
let totals =s*ss

form2.ad2.value=""
form2.dd22.value=""

let injabesaz=document.getElementById("form2") 
let chiBesaz =document.createElement("p")
chiBesaz.textContent=totals
injabesaz.appendChild(chiBesaz)


})


let form3 = document.form3
form3.addEventListener("submit",(e)=>{
    e.preventDefault()

    let input3=Number(form3.d3.value)
    let input4=Number(form3.d4.value)
    let totalInput=input3-input4

    form3.d3.value=""
    form3.d4.value=""

   let at= document.createElement("p")
   let ed=document.getElementById("in")
   at.textContent=totalInput
   ed.appendChild(at)
})

