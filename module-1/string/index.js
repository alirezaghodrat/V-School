// var a ="Hello"
// var b = a.toLocaleLowerCase()
// console.log(b)
///////////////////////////////////////////////math.floor()

// var b ="kikiki".length
// console.log (b)
// var a=Math.floor(b)
// console.log(a)

function halfString(string){
    return Math.floor(string.length/2)
}
console.log(halfString("hello"))
////////////??????????????????????????????????????????????

// function aa (string){
//  return string.math.floor(string.length)
// }
// console.log(aa("kiuryt"))


///////////////////////////first half of the string

// function returnFirstHalf(string){
//   return  string.slice(0,string.length/2)
// }
// console.log(returnFirstHalf("hmrteo"))

//////////////////////////////////////////////Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased

function kk (string){
  return (string.slice(0,string.length/2).toUpperCase()) +(string.slice(string.length/2,string.length).toLowerCase())
}
console.log (kk("bcbhbvv"))