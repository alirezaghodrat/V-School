var a = document.body

var b = document.createElement("h1")
b.textContent="take it easy thats a beutiful day"
a.append(b)
////////////////////////////////////////////////////////////////////
var j=document.getElementById("messages")
var x =document.getElementsByClassName("message-left")
var z =document.createElement("div")
x[0].textContent=" have fun";
x[1].textContent=" index  at 1";
// console.log(x);
// x.appendChild(j)
// console.log(x)
console.log(x[0].textContent)
j.appendChild(x[0])
j.appendChild(x[1])

//////////////////////////////////////////////////////////////////////////

// var c = document.body
// c.textContent="
const colors =["red","blue"]

// function theme(){
var select = document.getElementById("theme-drop-down")

 for (var i=0;i<colors.length;i++){
 const newOption = document.createElement('option')    
 newOption.textContent=colors[i]
 newOption.value=colors[i]

 console.log(newOption)
select.appendChild(newOption)
 }
console.log(select.newOption)

select.addEventListener("input",function(e){
    if(e.target.value==="red"){
        document.body.style.backgroundColor="red"
    }else{
        document.body.style.backgroundColor="blue"
    } 
})

//  return document.body.style.backgroundColor=select.value

// }

// console.log(theme())







var c = document.getElementById('clear-button')
var d = document.getElementById("messages")
console.log(d)
c.addEventListener("click",function(){
    d.textContent=""
})
/////////////////////////////////////////////////////////////////////////////[silver]
var blue = document.getElementById("blue")

blue.addEventListener("click",function(e){
   
    e.target.style.body.backgroundColor="blue"
})

var red =document.getElementById("red")
red.addEventListener("click",function(){
    e.target.style.body.backgroundColor="red"
})
////////////////////////////////////////////////////////////////////////////////[gold]
var form =document.massage
form.addEventListener("submit",function(){
    e.preventDefalt()
})
var newI=form.Thanks.value

newMassage = document.createElement("h2")
newMassage.textContent=newI
newMassage.classList.add("hi")
newChild=document.getElementsByClassName("hi")
form.appendChild(newMassage)