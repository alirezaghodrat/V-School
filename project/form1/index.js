// var userForm = document.user

// console.log(userForm.add1.value)

// userForm.addEventListener("submit",function(e){
//     e.preventDefault()
//     var num1= Number(userForm.add1.value)
//     var num2= Number(userForm.add2.value)
//     console.log(num1 + num2)

// })
  var userForm = document.user
     console.log(userForm.add1.value)
  userForm.addEventListener("submit",function(e){
      e.preventDefault()
      var num1= Number(userForm.add1.value)
      var num2= Number(userForm.add2.value)
      console.log(num1+num2)
  })