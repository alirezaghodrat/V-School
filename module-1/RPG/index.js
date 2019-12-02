                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




                // RPG Approach
                const readline = require("readline-sync")
                ///// Global Variables /////
                const userSelections = ["walk"]
                let gameover = false

                const player = {
                    name: "",
                    health: 50,
                    item: ["gun", "bomb"]
                }

                function Enemy(name, health, item) {
                    this.name = name
                    this.health = health
                    this.item = item
                }
                var ali1 = new Enemy("ali1", 50, "sword")
                var ali2 = new Enemy("ali2", 50, "gun")
                var ali3 = new Enemy("ali3", 50, "bomb")
                var allEnemy = ["ali1", "ali2", "ali3"]
                //////////////////////////////
                //// Game Functions /////
                /////////////////////////////


                console.log("Hello and welcome to game. glhf")
                player.name = readline.question("What is your name?: ")
                console.log("Thank you " + player.name + "\n\n\n\n")
                while (!gameover) {
                    const userChoice = readline.keyInSelect(userSelections, "\tWhat would you like to do?: ")
                    if (userChoice === 0) {
                        walk()
                    }


                    function walk() {
                        const randomNum = generateRandomChance(3)
                        if (randomNum === 0) {
                            console.log("\n\t\tYou get in a fight")
                            while (player.health > 0 && enemy.health > 0) {
                                const selectEnemy = readline.keyInSelect(allEnemy, "\tselect your enemy ?: ")
                                if (allEnemy[selectEnemy] === 0) {

                                    console.log("that is your enemy " + ali1)
                                } else if (allEnemy[selectEnemy] === 1) {

                                    console.log("that is your enemy " + ali2)
                                } else {

                                    console.log("that is your enemy " + ali3)
                                }


                                const attackRun = ["attact", "run"]
                                const runAttact = readline.keyInSelect(attackRun, "\tenemy see you What would you like to do?: ")

                                if (attackRun[runAttact] === 1) {
                                    let attackPower = (Math.ceil(Math.random() * 2))
                                    if (attackPower === 1) {
                                        player.health -= 20
                                        Enemy.health += 20
                                        console.log(" min power ")
                                    } else if (attackPower === 2) {
                                        player.health += 20
                                        Enemy.health -= 20
                                        console.log("power  max")
                                    }
                                } else if (attackRun[runAttact] === 2) {
                                    let escaporCatch = (Math.ceil(Math.random() * 2))
                                    if (escaporCatch === 1) {
                                        player.health -= 20
                                        Enemy.health += 20
                                        console.log("enemy catch you")
                                    } else if (escaporCatch === 2) {
                                        player.health += 20
                                        Enemy.health -= 20
                                        console.log("you run")
                                    }


                                } else {
                                    console.log("\n\t\tNothing happened")
                                }
                            }

                            function generateRandomChance(chance) {
                                return Math.floor(Math.random() * chance)
                            }
                        }
                    }
                }