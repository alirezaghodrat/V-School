const numbers =[1,2,3,4,5,6,7,8,9,10]

//////1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater

const fiveMore = numbers.filter(num=>( num >= 5 ))
// console.log(fiveMore)

///////////////////////////////////2) Given an array of numbers, return a new array that only includes the even numbers

const evenNum = numbers.filter(num=>num%2===0)
// console.log(evenNum)

///////////////////////////////////3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const strings =["dog","wolf","family","eaten", "camping","by","kkkkkkkkkkk"]

 const fiveLess = strings.filter(String=>(String.length<=5))
// console.log(fiveLess)

/////////////////////////////4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club

const names=[
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
const clubMember = names.filter(function(members){
    if(members.member){
        return members
    }
})
// console.log(clubMember)

///////////////////////////////5) Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)

const matrix =[
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 18 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
 const age = matrix.filter(function(visitor){
     if(visitor.age>=18){
         return true
     }
 }) 
//  console.log(age)