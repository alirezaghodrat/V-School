//1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:


// function sum (x,y){
//     return x+y
// }
// try{
//    if( sum(1,2)){
//        throw new Error("the function is works good")
//    }
//    console.log("here is some error")
// }
// catch(error){
//     console.log(error)
// }
// finally{
//     console.log("I'm running no matter what!")
// }


//2a) Given a user object, write a function called login that takes a username and password as parameters.
// Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"



function login(username, password){
  //check credentials
  if(username==="sam"&&password==="123abc"){
    return "true"
}else{
    return "false"
}
}
// console.log(login("sattm","123abc"))

const actual =login("stam", "123abc")
const Expected="true"

if (actual !== Expected){
    throw new console.error(`Test FAILED :Expected ${ Expected } , but receved ${actual} `);
    
}else{
    console.log(`Test PASSED ${ Expected} === ${actual}`)
}

//2b) Call the login function within a try block. In one instance use the correct credentials, 
//and in another use incorrect ones. Make sure you see the appropriate message!