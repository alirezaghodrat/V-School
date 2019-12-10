const makeElement = document.getElementById("button")
const counter = document.getElementById("hh")

let count = 0
counter.textContent = count

const increaseTimer=function  (){
    count ++
    counter.textContent = count

}


makeElement.addEventListener("click",function(e){
    increaseTimer ()
})


localStorage.setItem("count",count)






