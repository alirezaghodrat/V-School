

// var a = document.addItem

// a.addEventListener("submit",function(e){
//     e.preventDefault()

//     var b= a.title.value
//     var c = document.createElement("li")
//     c.textContent=b

//     var d =document.getElementById("list")
//     d.appendChild(c)
// })


///////////////////////////////////////////////////////////////////////////part"1"

const shoppingList =document.getElementById("list")
const addItemForm=document.addItem

addItemForm.addEventListener("submit",function(e){
      e.preventDefault()
const input=document.getElementById("title")
const newListItem= document.createElement("li")
const itemName = document.createElement("div")
const deletBtn = document.createElement("button")
const editBtn = document.createElement("button")

itemName.textContent=input.value
editBtn.textContent="edit"
deletBtn.textContent="X"

deletBtn.classList.add("x-button")
newListItem.classList.add("list-item")
editBtn.classList.add("edit-button")

newListItem.appendChild(itemName)
newListItem.appendChild(editBtn)
newListItem.appendChild(deletBtn)
shoppingList.appendChild(newListItem)
input.value=""
deletBtn.addEventListener("click",function(e){
    e.target.parentNode.remove()
}) 
})

////////////////////////////////////////////////////////////////////////////part"2


const listItem = document.getElementsByClassName("list-item")
const xButons = document.getElementsByClassName("x-button")
console.log(xButons, 999)
for(let i=0;i<listItem.length;i++){

    xButons[i].addEventListener("click",function(e){
            e.target.parentNode.remove()
    })
}
