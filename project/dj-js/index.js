// var a =document.getElementById('m')
// a . addEventListener('click',function(e){
//     e.target.style.backgroundcolor="yellow"
// })

// var a = document.getElementById('a')
// var b = 4

// for ( var i=0 ; i<b ;i++ ){
//     var c =document.createElement('div')
//     c.classList.add('box')
//        a.appendChild(c)
      
// }

// var a = document.getElementById('a')
// var b = 4

// for ( var i=0 ; i<b ; i++ ){
//     var c =document.createElement('div')
//     c.classList.add('box')
//     a.appendChild(c)
// }

var otherbox = document.getElementById("this-one")
otherbox.addEventListener('click',function(e){
    if(e.target.style.backgroundColor==="greenyellow"){
        e.target.style.backgroundColor="red"
    }else{
        e.target.style.backgroundColor="greenyellow"
    }
})
console.log(otherbox)

// var a = document.getElementById("a")
// console.log(a)



// var a = document.getElementById("a")

// a.addEventListener('click',function(e){
//    if(e.target.style.backgroundColor==="red"){
//        e.target.style.backgroundColor="black"
//    }else{
//        e.target.style.backgroundColor="red"
//    }

// })

// var a = document.getElementById("a")
// a.addEventListener('click',function(e){
//    if(e.target.style.backgroundColor==="black"){
//        e.target.style.backgroundColor="red"
//    }else{
//        e.target.style.backgroundColor="black"
//    }
// })

// var a =document.getElementById("a")
// a.addEventListener('click',function(e){
//     e.target.style.backgroundColor="white"
// })

var a = document.getElementById("a")
a.addEventListener('click',function(e){
   if( e.target.style.backgroundColor==="black"){
       e.target.style.backgroundColor="red"
   }else{
       e.target.style.backgroundColor="black"
   }
})