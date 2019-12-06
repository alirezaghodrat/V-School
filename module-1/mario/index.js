var pest = document.user
console.log(pest.add1.value)
pest.addEventListener("submit", function (e) {
    e.preventDefault()
    var num1 = Number(pest.add1.value)
    var num2 = 5
    var num3 = Number(pest.add11.value)
    var num4 = 7
    var num5 = Number(pest.add111.value)
    var num6 = 11
    console.log(num1 * num2)
    console.log(num3 * num4)
    console.log(num5 * num6)
    var f1 = num1 * num2
    var f2 = num3 * num4
    var f3 = num5 * num6
    var ff = f1 + f2 + f3
    console.log(f1 + f2 + f3)

    var a = document.createElement("h3")
   
    a.textContent = "Total: " + ff + " $"
    a.className = "h3"
    var total = document.getElementById("total")
    total.appendChild(a)
   
})