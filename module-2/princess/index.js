

class User {
   constructor (name, star, status,coin) {
    this.name = name
    this.status = status
    this.star = star
    this.coin=coin
}
////////////////////////////setName
    setName(){
        const d = Math.ceil(Math.random()*1)
        if(d===0){
            console.log("namepiked Mario")
            this.name = "mario"
        }else{
            console.log("namepiked Luigi")
            this.name = "luigi"
        }
    }
////////////////////////////////gotHit
    gotHit (){
        if(this.status==="powered up"){
            this.status="big"
            this.star=false
        }else if(this.status==="big"){
            this.status="small"
        }else if(this.status === "small"){
            console.log("Dead")
            this.status = "dead"  
        }
    }
////////////////////////////////gotpowerup()
    gotpowerup(){
        if(this.status==="powered up"){
            this.addCoin ()
            this.star=true
        }else if(this.status==="big"){
            this.status="powered up"
        }else{
            console.log("small")
            this.status="big" 
        }
    }
    addCoin (){
        return this.coin ++
    }
    print (){
        console.log(`Name : ${this.name}`)
        console.log("Status "+this.status+" ,star:  "+this.star+" ,coin: "+this.coin)
    }
}
const player = new User("",0,"big",0)


let intervalId
let  run = ()=>{
    intervalId=setInterval(action,1000)
}
let stop =()=>{
    clearInterval(intervalId)}
//////////////////////////////
 function randomRange (){
      player.setName()
      run() 
 }

 function action(){
    const c =Math.floor(Math.random()*3)
    if(c===0){
        player.gotHit()
    }else if(c===1){
        player.gotpowerup()
    }else if(c === 2){
        player.addCoin()
    }
    if(player.status === "dead"){
        stop()
    }
    player.print()
 }
////set intraval function thtas ends after game acctive false

randomRange()
