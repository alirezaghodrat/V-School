//1) Make an array of numbers that are doubles of the first array.


// const firstArray =[2,4,6,10]

// const doubles = firstArray.map(num=>num*2)
// console.log(doubles)

///////////////////////////////////////////////////////////////////
//2) Take an array of numbers and make them strings.

// const firstArray =[2,4,6,10]

// const makeString =firstArray.map(num=>JSON.stringify(num))

// console.log(makeString)

//////////////////////////////////////////////////////////////////////
//3) Capitalize each of an array of names

// const name = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// const firstIndexCaptal =name.map((string)=>string.slice(0,1).toUpperCase()+string.slice(1,string.length).toLowerCase())
// console.log(firstIndexCaptal)

//////////////////////////////////////////////////////////////////////
//4) Make an array of strings of the names

// const nameAge = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// const justName =nameAge.map(abject=>abject.name)
// console.log(justName)

////////////////////////////////////////////////////////////////////////
//5) Make an array of strings of the names saying whether or not they can go to The Matrix

// const makeString=[
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// const age = makeString.map(function(abject){
//   if(abject.age>18){
//      console.log(abject.name+"can go to the matrix")
//   }else{
//       console.log(abject.name+"is under age")
//   }
// })

////////////////////////////////////////////////////////////////////////////////
//6) Make an array of the names in h1s, and the ages in h2s

// const makeString=[
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// const makeh1 = makeString.map(function(abject){
//     return JSON.stringify("<h1>"+abject.name+"</h1><h2>"+abject.age+"</h2>")
// })
// console.log(makeh1)

