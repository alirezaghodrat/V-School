                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




                // RPG Approach
                const readline = require("readline-sync")
                ///// Global Variables /////
                const userSelections = ["walk","your condition"]
                let gameover = false
                //  let health = (player.health&&Enemy.health<=0)
                const player = {
                    name: "",
                    health: 100,
                    item: ["gun", "bomb"]
                }

                function Enemy(name, health, item) {
                    this.name = name
                    this.health = health
                    this.item = item
                }

                function generateEnemy() {

                    const randomNum = Math.floor(Math.random() * 3)
                    if (randomNum === 0) {
                        var ali1 = new Enemy("ali1", 50, "sword")
                        console.log(ali1)
                    } else if (randomNum === 1) {
                        var ali2 = new Enemy("ali2", 100, "gun")
                        console.log(ali2)
                    } else {
                        var ali3 = new Enemy("ali3", 70, "bomb")
                        console.log(ali3)
                    }


                }

                function attact() {
                    const randomNum1 = Math.floor(Math.random() * 2)
                    if (randomNum1 === 0) {
                        console.log("your power is minimum and your health decreased(20pt)")
                        player.health -= 20
                    } else {
                        console.log("your power is max and you have reduced the health of the enemy(20pt) ")
                        Enemy.health -= 20
                    }
                    
                }

                function run() {
                    const randomNum2 = Math.floor(Math.random() * 2)
                    if (randomNum2 === 0) {
                        console.log("enemy catch you and your health decreased(20pt)")
                        player.health -= 20
                    } else {
                        console.log("good for you , you run a way ")
                        Enemy.health -= 20
                    }
                }

                function fightback() {
                    const randomNum3 = Math.floor(Math.random() * 2)
                    if (randomNum3 === 0) {
                        console.log("enemy catch you and your health decreased(40pt)")
                        player.health -= 40
                    } else {
                        console.log("good for you , you have reduced the health of enemy (40pt)")
                        Enemy.health -= 40
                    }
                }

                //////////////////////////////
                //// Game Functions /////
                /////////////////////////////



                function walk() {
                    const randomNum = (Math.floor(Math.random() * 2))
                    if (randomNum === 0) {
                        console.log("\n\t\tYou get in a fight")
                        generateEnemy()

                        while(player.health>=0){
                            const attackRun = ["attact", "run"]
                            const runAttact = readline.keyInSelect(attackRun, "\tenemy see you What would you like to do?: ")
                            
                            if (attackRun[runAttact] === "attact") {
                                attact()
                            } else {
                                run()
                            }
                            console.log("your situation")
                            console.log(player)
                            console.log("ohhhhhhh enemy come back again ")
                            fightback()
                            console.log(player)

                            if(Enemy.health<=0){
                                console.log("congratulations you won and you get some HP and some more weapon")
                                player.health+=50
                                player.item+=",superbomb"
                            }
                        console.log(player)
                        }
                    } else {
                        console.log("\n\t\tNothing happened")
                    }
                }

                // while(player.health>0 && Enemy.health>0){
                console.log("Hello and welcome to game. glhf")
                player.name = readline.question("What is your name?: ")
                console.log("Thank you " + player.name + "\n\n\n\n")
                while (!gameover) {
                    if(player.health<=0){
                        console.log("game over")
                        gameover = true
                        break;
                    }

                    const userChoice = readline.keyInSelect(userSelections, "\tWhat would you like to do?: ")
                    
                    if (userChoice === 0) {
                        walk()
                    } else if(userChoice === 1){
                         console.log(player)
                         walk()
                    } else if(userChoice===-1) {

                        process.exit()
                    }


                }

                
            // }
/////die and in the start show walk cancel and stuaction???
////mario is nesesery remov pased item
