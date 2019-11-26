
// console.dir(readline)
// var films =[ "abc" , "bdfg" , "cdfdf" , "drtyu" ]
// var filmIndex= readline.keyInSelect(films.whatsYourFavFilm)
// var userFavFilm=films[filmIndex]
// console.log("cool i like"+userFavFilm+"too!goodbye")
// var num1= 3
// var num2=5
////////////////////////////////////////////////////////////////






console.log('hello,im skynet')
const readline = require("readline-sync")
var username =readline.question("whats your name ? ")
console.log("hi "+username)
var userfirstnum =Number(readline.question("whats your first num ?"))
console.log("cool "+userfirstnum+" and")
var usersecondnum =Number(readline.question("whats your second num ?"))
console.log("cool "+usersecondnum+" and")
var calculate =["multiplies","divides","subtracts" ,"add"]
var calculater =readline.keyInSelect(calculate,"and you want?")


    if(calculate[calculater] === "multiplies"){
         final = userfirstnum*usersecondnum
    }else if(calculate[calculater] === "divides"){
        final=userfirstnum/usersecondnum
    }else if(calculate[calculater] === "subtracts"){
        final=userfirstnum-usersecondnum
    }else{
        final=userfirstnum+usersecondnum
    }

console.log("so",final)

//////////////////////////////////////////
// console.log("welcome")
// const readline = require("readline-sync")
// var username=readline.question("whats your name? ")
// console.log("hi "+username)
// var first=Number(readline.question("whats your first num? "))
// console.log("cool "+first+"  and")
// var second=Number(readline.question("whats your second num? "))
// console.log("yes "+second+" and")
// var calculate =["multiplies","divides","subtracts" ,"add"]
// var calculater=readline.keyInSelect(calculate," what do you want to do ?")


// if(calculate[calculater] === "multiplies"){
//    var final = first*second
// }else if(calculate[calculater]==="divides"){
//     var final = first/second
// }else if(calculate[calculater]==="subtracts"){
//     var final= first-second
// }else{
//     var final=first+second
// }

// console.log(final)