var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    },
]

//1)Returns a list of everyone older than 18, which is

// const age = peopleArray.filter(function(some){
//     if(some.age>18){
//         return some
//     }
// })
// console.log(age)

//2)sorted alphabetically by last name, and where

// const alphabet = peopleArray.sort(function(a,b){
//     if(a.lastName===b.lastName){
//         return 0
//     }else if (a.lastName>b.lastName){
//         return 1
//     }else{
//         return -1
//     }
// })
// console.log(alphabet)

//3>each name and age is embedded in a string that looks like an HTML <li> element.

// const makeElement = peopleArray.reduce(function(final,prmt){
//        final.push("<li>"+prmt.firstName+" "+prmt.lastName+" is "+prmt.age+"</li>")
//        return final
// },[])
// console.log(makeElement)


//Extra Credit
//Create another array of one or more individuals and add it to the original array.

// const next = [1,2,3,4]

// const newarr = next.concat(peopleArray)
// console.log(newarr)

//Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array

// const newPeople = peopleArray.filter(function(abject){
//     const splitWord = abject.lastName.split("")
//     if(splitWord[splitWord.length-1] ==="a"||splitWord[splitWord.length-1] ==="y"){
//            return true
//     }
// })
// console.log(newPeople)
////////////////////////////////////////////////////////////////////////////////////Remove the second individual from the array

// peopleArray.splice(1,1)
// console.log(peopleArray)

// const aa = peopleArray.reverse()
// console.log(aa)
