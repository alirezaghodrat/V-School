///////////////////////////////////1) Sort an array from smallest number to largest

const number =[1, 3, 5, 2, 90, 20]

const lessToGreat = number.sort((a,b)=> a-b)
// console.log(lessToGreat)

////////////////////////////////////2) Sort an array from largest number to smallest

const greatToLess = number.sort((a,b)=> b-a)
// console.log(greatToLess)

/////////////////////////////////////3) Sort an array from shortest string to longest

const arr = ["dog", "zebra","aa","wolf", "by", "family", "eaten"]

// const length = string.sort(function(a,b){
//     return (a.length)-(b.length)
// })

// console.log(length)

/////////////////////////////////

// const alphabet = string.sort(function(a,b){
//     return a === b ? 0 : a < b ? 1 : -1;
// })
// console.log(alphabet)

const alphbet = arr.sort(function(a, b) {
    // console.log("A: ", a)
    // console.log("B: ", b)
    // console.log("is a < b: ", a < b)
      if (a === b) {
        return 0;
      }
      else if (a < b) {
        return 1;
      }
      else {
        return -1;
      }
    });
  
//   console.log(alphbet)

////5) Sort the objects in the array by age

const ageCompair = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
const result = ageCompair.sort(function(c,d){
    if(c.age===d.age){
        return 0;
    }else if(c.age>d.age){
        return 1;
    }else{
        return -1;
    }
})
// console.log(result)
