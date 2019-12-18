
const button = document.getElementById("button")
const form = document.form
const newList = document.getElementById("incompleted-list")
const completedList = document.getElementById("completed-list")
///////////////////////////////////////creatToDo()
function creatToDo(){
    const newToDo={
        title : form.title.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.img.value
       }
       axios.post(`https://api.vschool.io/ali/todo`, newToDo)
         .then(response => console.log(response.data))
         .catch(error=> console.log(error))

    return newToDo
}
////////////////////////////////////////getData()
function getData(){
    axios.get("https://api.vschool.io/ali/todo")
    .then(res => {
        console.log(res.data)

        for( i=0 ; i<res.data.length ; i++ ){
            createnewToDo(res.data[i])
        }
    })
    .catch(error=> console.log(error))
}
/////////////////////////////////////////////delete()
function deleteToDo(){
    axios.delete(`https://api.vschool.io/ali/todo/${id}`)
    .then(response => console.log(response.data))
    .catch(error=> console.log(error))
  
}
//////////////////////////////////////////////////toDo List
button.addEventListener("click",function(){
     getData()
})
/////////////////////////////////////////////
form.addEventListener("submit",function(e){
    e.preventDefault()
    createnewToDo(creatToDo())
})           
function createnewToDo (todo) {

    const newListItem = document.createElement("li")
    const itemName  = document.createElement("div")
    const deletBtn  = document.createElement("button")
    const editBtn   = document.createElement("button")
    const selectTag = document.createElement("select")
    const option1   = document.createElement("option")
    const option2   = document.createElement("option")
    const option3   = document.createElement("option")
    
    selectTag.textContent= ""
    // nate added this
    newListItem.todoId = todo._id
    itemName.textContent = todo.title
    deletBtn.textContent="delete"
    editBtn.textContent="edit"
    option1.textContent="complete"
    option2.textContent="incomplete"
    option3.textContent="---"
    
    newListItem.appendChild(itemName)
    newListItem.appendChild(deletBtn)
    newListItem.appendChild(editBtn)
    selectTag.appendChild(option3)
    selectTag.appendChild(option1)
    selectTag.appendChild(option2)
    newListItem.appendChild(selectTag)
    
    deletBtn.addEventListener("click",function(e){
        // this.parentNode.todoId
        axios.delete(`https://api.vschool.io/ali/todo/${this.parentNode.todoId}`)
        e.target.parentNode.remove()
    })
    
    // nate added this too
    selectTag.addEventListener("input",function(){
        
        const newTrue={
            completed:true
        }
        const newFalse={
            completed:false  
        }
        
        if(this.value === "complete"){
            axios.put(`https://api.vschool.io/ali/todo/${this.parentNode.todoId}`, newTrue)
                .then(() => {
                    completedList.innerHTML = ""
                    newList.innerHTML = ""
                    getData()
                })
            // completedList.appendChild(newListItem)
   
        }else{
            axios.put(`https://api.vschool.io/ali/todo/${this.parentNode.todoId}`, newFalse)
                .then(() => {
                    completedList.innerHTML = ""
                    newList.innerHTML = ""
                    getData()
                })
        }
    })

    if(todo.completed){
        completedList.appendChild(newListItem)
    } else {
        newList.appendChild(newListItem)
    }

}
            
getData()


const selection = document.getElementById("select1")

selection.addEventListener("input",function(){
    console.dir(this)
    const newTrue={
        completed:true
    }
    const newFalse={
        completed:false  
    }

     if(option1.value){
         axios.put(`https://api.vschool.io/ali/todo`, newTrue)
         completedList.appendChild(newListItem)
     }else{
         axios.put(`https://api.vschool.io/ali/todo`, newFalse)
         newList.appendChild(newListItem)
     }
})