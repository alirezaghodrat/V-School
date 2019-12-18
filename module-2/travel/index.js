const form = document.form


form.addEventListener("submit",function(e){
    e.preventDefault()
  const firstName = form.firstName.value
  const lastName = form.lastName.value
  const age = form.age.value
  const gender = form.gender.value
  const city = form.city.value


//   const h1 = document.createElement("h1")

//   h1.textContent=firstName+" "+lastName
//   document.getElementsById("form").append(h1)
  

alert(
 `First name: ${firstName} 
  Last  name: ${lastName}
  Age: ${age}
  Gender: ${gender}
  Location: ${city}`)
  

})