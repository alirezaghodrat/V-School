// for(i=0;i<10;i++){
//     if(i%2===0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }


// const first = (word,sentece) => {
   
//     //return edited sentence
//     return split("hello")
// }

// first("hello","hello world")
// Output: "world"

// first("France", "hi, my name is France, and France is a beautiful place. I love France")
//Output: "hi, my name is , and  is a beautiful place. I love "

// var a ="hello word "

// function ali (){


 
// let b =a.split("hello")


// }




// let aa =(word,sentece)=>{ "hellow".textContet=""}

// aa("hellow","uujyuu hellow")
      


// var b = a.split('o')
// console.log(b)
// let c =b.join("")
// console.log(c)
// let d =a.reverse()
// console.log(d)
// var b= a.reverse()
// console.log(b)

//  a.splice(1,2,"kkkk")
// console.log(a)


// function ali (word,sentece){
//    return splice("hello")
// }

// ali ("hello","hello word tt")


// var a = "DDDDDD"
// var b = a.toLowerCase()
// console.log(b)

///////////////////////////

// const aa = (string)=>{
//     return Math.floor(string.length/2)
// }
// console.log(aa("kjjdhhdgggd"))
///////////////////////////////////

// const aa =(String)=>{
//   return String.slice(0,String.length/2)
// }
// console.log(aa("hhhgghhgyyg"))


//////////////////////////////////////////////

// const aa=(word,sentence)=>{
//     return sentence.split(word)
// }
// console.log(aa("hello", "hefgdfd hello fhegfdf dhedfhehello"))

// //////////////////////////////


// const aa = (string)=>{
//      return string.slice(0,string.length/2).toUpperCase()+string.slice(string.length/2,string.length).toLowerCase()            
// }

// console.log(aa("jhjhhjGFGFGF"))



// const aa = (string)=>{
//     return string.slice(0,string.length/2).toUpperCase()+ string.slice(string.length/2,string.length).toLowerCase()
// }

// console.log(aa("lllAAAA"))


// const aa = (String)=>{
//     return String.slice(0,String.length/2).toUpperCase() + String.slice(String.length/2,String.length).toLowerCase()
// }
// console.log(aa("kkkkkksssDDD"))

// const aa = (string) => {return  string.slice(0,string.length/2).toLowerCase()+string.slice(string.length/2,string.length).toUpperCase()
// }
// console.log(aa("AAAAAAggggggg"))

// const user = {
//     username: "joe123",
//     age: 20,
//     _id: "f892jf2jf98j39fj"
// }

// `Welcome ${user.username}`

////////////////////////////////////////////////////////////////////////1
// using .toLowerCase(), .toUpperCase(), .slice(), .length and .concat()
// , make a capitalized version of any string/////////////////////////
//////////////////////////////////////////////////////////////////////////

// const aa = (string)=>{
//     return string.slice(0,1).toUpperCase()+string.slice(1,string.length).toLowerCase()
// }

// console.log(aa("lAAAAAAAAAA"))

//////////////////////////////////////////////2

//box model;
//1-margin
//2-padding
//3-border
//4-content


/////////////////////////////////////////3


//@media(max-width 800px)

//row
//flex direction column
//space between space around =
//flex-start & flex-end

/////////////////

//repeat(3,1fr)
//gird column :2/4
//gid gap
//with any screen you can have same sqoure size for example 
//repeat(auto-fit,minmax(100px,1fr))minsize 100px maxsize 1fr


////////////
//node//
//give you an overview of what makes the Express web and allow you run yiur code in terminal

//node for ? Node Package Manage pacage manager for js
///////////////////////////////////////////////////////
//how to we create a new h1
// , give it text, and add it to the DOM in JavaScript?

//var a = documet.createElement
//a.textcontent
//addeventlisener

//////////////////nested
// var a = [[3, 4, 2], [1, 2, 3]]

// for (var i=0;i<a.length;i++){
//   for  (var j=0;j<a[i].length;j++){
//       console.log(a[i][j])
//   }
// }

//////////////////////write fName + lName using .concat()
// how would one make a new string from the first 3 characters?

// var fName = "alex"
// var lName= " fergi"

// var fullName=fName.concat(lName)
// console.log(fullName)


////////////////////////////////////////

//from the first 3 characters?
// const phone = "801.555.5555"

// var a = phone.slice(0,3)
// var b = phone.slice(3,12)
// console.log(a+"-"+b)


/////////////////////////////////////////////////////////
//How would one get the index of the first instance of the "@" symbol?
// const email = "every1@gmail.com"
// const usernameEndIndex = email.indexOf("@")
// console.log(usernameEndIndex)
  ///////////////////////////////////////////

  //strin to array split
  //array to string join
  //-string
  //toLowerCase()

  //////////////////////////////////////////

//   .push()
//   ,pop move the last item in array
//yes .slice (startindex,and cuntinu)

////////////////////////////////////

//immutable -string -number -boolean
//cant change


///////////////////////////////////


//Write an es6 arrow function the would return 15 if called like this => "add10ToNum(5)"

//   const aa =(num1,num2)=> {return(num1+num2)}
//   console.log(aa(10,5))

  /////////////////////////////////////

  //how would I write: "hello " + fName +"\nit's good to meet you", using template literals
//  const hi = fName=>{
//     console.log(`hello ${fName} It’s good to meet you`)
//     return fName
// }
///////////////////////
////rest oprator ? 
//

//rest or gathering to function()and gathering the items
//////////////////

// let dogs = ['dog1', 'dog2'];
// let cats = ['catone', 'cattwo', 'catthree'];
// console.log([...numbers, ...parts]);

/////////////////
//
// document.textContent =""
//add class withh gotter or add class list

/////let change const not

//////////

//How do I instantiate something from a constructor?

//function Car(make, model, year){
//     this.make = make
//     this.model = model
//     this.year = year
// }


// var jeep = new Car("Jeep", "Cherokee", 1995)
// var mazda = new Car("Mazda", "3 hatchback", 2015)
 
// console.log(jeep.model)


    // localStorage.setItem("name","steve")
    // localStorage.setItem("age",10)
    // localStorage.setItem("isAlive",true)
    // localStorage.setItem("friends",JSON.stringify(["matik","tina"]))
    // localStorage.setItem("addres",JSON.stringify({street:"2231 street ",city:"slc" ,country:"usa"}))



    // const name = localStorage.getItem("name")
    // const age = localStorage.getItem("age")
    // const isAlive=localStorage.getItem("isAlive")
    // const friends=JSON.parse(localStorage.getItem("friends"))
    // const address=JSON.parse(localStorage.getItem("address"))

    // localStorage.removeItem("age")

///////////////////higher order function
function doMath(num1, num2, callback){
    return callback(num1, num2)
}
function sum(num1, num2){
    return num1 + num2
}
////////////////////////map()
const users = [{name:"javad"},{name:"jadid"},{name:"man"},{name:"bob"}]
const number=[4,6,7,1,0,88,64,33,2,7]
const newarr =users.map(kir=>kir+10)
////////////////////////////////filter()
const newfilter = users.filter(num=>(num%2===0))
////////////////////////////////////////////////forEach()
const newArr =[]
users.forEach(num=>(num%2===0)&&newArr.push(num))
const result =users.find(keke=>(keke.name[0]==="j"))
//////////////////////////////////////////////////////findIndex()
const result1 =users.findIndex(keke=>(keke.name==="bob"))
/////////////////////////////////////////////////////////////some()
const result2 =users.some(keke=>(keke.name[0]==="m"))
////////////////////////////////////////////////////////////every()
const result3 =users.every(keke=>(keke.name[0]==="m"))
////////////////////////////////////////////////////////////sort()
const result4 = number.sort((a,b)=>a-b)
////////////////////////////////////////////////////////////reduce()
const result5 =number.reduce((final,num)=> final+=num,2)
//////

console.log(result5)



