var fruit = ["banana", "apple", "orange", "watermelon"]
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]
//////////////////remove the last item  from vegetables ;
// vegetables.pop()
// console.log(vegetables)
/////////////////////Remove the first item from the fruit array
// fruit.shift()
// console.log(fruit)
/////////////////////////////Find the index of "orange."
// var a = fruit.indexOf("orange")
// console.log(a)
///////////////////////////////////add that number to the end of the fruit array
// var a =3
// fruit.push(a)
// console.log(fruit)
///////////////////////////////////Use the length property to find the length of the vegetable array
// var a = vegetables.push()
// console.log(a)
///////////////////////////////////Add that number to the end of the vegetable array
// vegetables.push(4)
// console.log(vegetables)
/////////////////////////////////Put the two arrays together into one array. Fruit first. Call the new Array "food".
// var a=fruit.concat(vegetables)
// console.log(a)
///////////////////////////////Remove 2 elements from your new array starting at index 4 with one method.
// a.splice(4,2)
// console.log(a)
////////////////////////////////Reverse your array
// a.reverse()
// console.log(a)
/////////////////////////////////Turn the array into a string and return it.
// var name = "steve"
// var splitName = name.split("")
// console.log(splitName)
// var joinedName = splitName.join("")
//     console.log(joinedName)

// var b = a.join("-")
// console.log(b)
// var c = b.split("")
// console.log(c)




function ss (string){
    if(string.length<=20){
        return string+string
    }else{
        return string.slice(0,string.length/2)
    }
}
console.log(ss("slllllllllkknknbbjhvjgvghhhhngjhhvnmjbbkb"))



function aa (string){
   if(string.length<=20){
       return string+string
   }else{
       return slice(0,string.length/2)
   }
}
console.log(aa("jjjj"))