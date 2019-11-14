var shopper = {
    fruit: "bnanan" ,
    food: ["taco" , "burger" ,"kabob"],
    dessert: "cookie" ,
    monye:13.99 ,
    crditAprrove: true ,
        

    dinner: function(){
        return this.food +this.dessert 

    }

};
console.log (shopper.dinner())

/* dinner: function () {
    console.log(this.fruit + ' ' + this.food + ' ' +this.dessert)
}

shopper.dinner()
n
*/