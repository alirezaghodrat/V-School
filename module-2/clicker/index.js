const makeElement = document.getElementById("button")
const counter = document.getElementById("hh")

let count = 0
if(localStorage.count){
    count = localStorage.count
}else{
    count =0
}
//if localStorage.count exists, then set count to that value
//Else set count to 0
counter.textContent = count


const increaseTimer = function(){
    console.log(count)
    count ++ 
    counter.textContent = count
    localStorage.setItem("count",count)

}


makeElement.addEventListener("click",function(e){
    increaseTimer()
})







