//() var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
// var alphabet = "abcdefghijklmnopqrstuvwxyz"
// var peopleAlphabet = people + alphabet

// // for (let i=0;i<people.length;i++){
//     for(let j=0;j<alphabet.length;j++){
//         console.log(peopleAlphabet[i][j])
//     }
// }

// var zeroGrid = []
// for (var i = 0; i < 3; i++){
//   var preZeroGrid = []
//   for (var j = 0; j < 3; j++){
//     preZeroGrid.push(0)
//   }
//   zeroGrid.push(preZeroGrid)
// }
// console.log(zeroGrid)
// var preZeroGrid=[]
// var zeroGrid =[]
// for(var i=0;i<3;i++){
// for(j=0;j<3;j++){
//     zeroGrid.push([i])
// }
// preZeroGrid.push([j])
// }
// console.log(zeroGrid)
// console.log(preZeroGrid)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////con,x
// var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
// var alphabet = "abcdefghijklmnopqrstuvwxyz"
// // var b = alphabet.split("")
// // var d =b+people
// // var c = []

// // var f = c.push(d)

// // console.log(b)

// //Create a new array
// var a =[]
// //For each name added to the array,
// //Add each letter of the alphabet following each name
// for(i=0;i<people.length;i++){
//     a.push(people[i])

//    for(j=0;j<alphabet.length;j++){
//      a.push(alphabet[j])
//    }
// }
// console.log(a)
// console.log(people)
//////////////////////////////////////////////////////////////
// var c =[1,1,1,1,1,1,1,1,1,1]
// var d =[2,3,4,5,6,7]
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var a =[]

for(i=0;i<people.length;i++){
    a.push(people[i])
    for(j=0;j<alphabet.length;j++){
        a.push(alphabet[j])
    }
}
console.log(a)