// const animals = ["dog", "cat", "mouse", "jackolope", "platypus"]
//  const a = function collectAnimals(... animal) {  
//     return animal
// }
// ////////////

// function combineFruit(fruit, sweets, vegetables){
//     return {...combineFruit}
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"])
// console.log(combineFruit)

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => {
         if (animal.type === "dog") {
             return true
         } else {
             return false
         }
     })
 }
 console.log(animals)