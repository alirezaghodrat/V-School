//1) Turn an array of numbers into a total of all the numbers

const arr =[1,2,3,4,5,6]
const total=arr.reduce((final,a)=>final +=a)
// console.log(total)

///////////////////////////////////////2) Turn an array of numbers into a long string of all those numbers

const number = arr.reduce((final,b)=> (final + b),"")
// console.log(number)

////////////////////////////////////////3) Turn an array of voter objects into a count of how many people voted

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// const vote =voters.reduce(function(final,num){
//     if(num.voted){
//         final ++
//     }
//     return final
// },0)
// console.log(vote)
////////////////////////////
// const vote =voters.reduce(function(final,num){
//     if(num.voted){
//         final.didVote ++
//     }else{
//         final.didnot ++
//     }
//     return final
// },{didVote:0 ,didnot:0})
// console.log(vote)

////////////////////////////////////////////////////////
//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const prices = wishlist.reduce((final,bdg) => final += (bdg.price), 0)
    
// console.log(prices)


var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const newArr = arrays.reduce(function(final,items){
    final.push(...items)
    return final

},[])
// console.log(newArr)

///6) Given an array of potential voters, return an object representing the results of the vote

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const vv = voters.reduce(function(final,vtd){
     if(vtd.age<=25){
         final.youth++
        
            if( vtd . age <=25 && vtd.voted){
             final.youngVotes++
             }
     }else if(vtd.age>25&&vtd.age<=35){
        final.mids++ 
            if (vtd.age>25&&vtd.age<=35&&vtd.voted){
            final.midVotes++
             }
     }else if(vtd.age>35){
        final.olds++
             if(vtd.age>35&&vtd.voted){
             final.oldVotes++
             }
     }
     return final
     },{ youngVotes: 0,
    youth: 0,
    midVotes: 0,
    mids: 0,
    oldVotes: 0,
    olds: 0 
  })
  console.log(vv)