

// var a = document.addItem

// a.addEventListener("submit",function(e){
//     e.preventDefault()

//     var b= a.title.value
//     var c = document.createElement("li")
//     c.textContent=b

//     var d =document.getElementById("list")
//     d.appendChild(c)
// })

const shoppingList =document.getElementById("list")
const addItemForm=document.addItem


///////////////////////////////////////////////////////////////////////////part"1"

addItemForm.addEventListener("submit",function(e){
      e.preventDefault()

const b =addItemForm.title.value
const a = document.createElement("li")
a.textContent=b
shoppingList.appendChild(a)
const c = document.createElement("button")
c.textContent="X"
a.appendChild(c)
c.classList.add("x-button")
const d = document.createElement("button")
d.textContent="edit"
a.appendChild(d)
const input=document.getElementById("title")
input.value=""
c.addEventListener("click",function(e){
    e.target.parentNode.remove()
})
})

////////////////////////////////////////////////////////////////////////////part"2


const f = document.getElementsByClassName("list-item")
for(let i=0;i<list-item.length;i++){
    const xButons =document.getElementsByClassName("x-button")
    xButons[i].addEventListener("click",function(e){
        e.target.parentNode.remove()
    })
}
