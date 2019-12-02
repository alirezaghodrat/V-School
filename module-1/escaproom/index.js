//for install
//do that 
//interminal
// 1-npm init -y
// 2-npm install readline-sync
//const readline = require("readline-sync")
//////////////////////////////////////////////////////////////////////////////////////////////////////////////




console.log(" hi thats a room and the door is locked  find a away to go out  ")
const readline = require("readline-sync")
const userName = readline.question(" whats your name ?   ")
console.log("hi  "+userName+"  lets go to game  ")
const option = [ "Put hand in hole","Find the key","open the door"]
let selectOption = readline.keyInSelect(option,"you can select one of this option")
console.log(selectOption)
let final


while (selectOption === 2) {
    console.log(" you must find the key befor open the door  ")
   
    selectOption = readline.keyInSelect(option,"you can select one of this option")
    console.log(selectOption)  
   
}

if(selectOption === 0){
    final= "you die "

}else if(selectOption === 1) {
    console.log(" cool you find the key after that what do you want to do ?   ")
    const option1 = [ "Put hand in hole","open the door"]
    let selectOption1 = readline.keyInSelect(option1,"you can select one of this option")
            if(selectOption1===1){
                final = "you win   "
            }else{
                final="you die"
            }

}

console.log(final)

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   console.log("joooooooon che kosi")
//   const readline = require("readline-sync")
//   const userName = readline.question(" whats your name ?   ")
//   console.log("hi koseta bokhoram    "+userName+" lets go for fucking")
//   const option =["midi","mikonamet"]
//   const jende =readline.keyInSelect(option,"you can select one of this option")
//   console.log(jende)
//   let final 

//   if(option[jende]==="midi"){
//       final="yedoonei"
//   }else{
//       final="goftam mikonamet"
//   }

//   console.log(final)








///////////////////////////////////////////////////////////////////

//  const a=(Math.ceil(Math.random()*2))
//  console.log(a)