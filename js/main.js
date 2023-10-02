const ROCK="rock"
const PAPER="paper"
const SCISSORS="scissors"

let playGame=confirm("let's play")
// if(playGame){
//     let playerChoice= prompt("pls enter rock,paper,or scissors.")
//     if(playerChoice){
//         let playerOne=playerChoice.trim().toLowerCase()
//         if(playerOne===ROCK||playerOne===PAPER||playerOne===SCISSORS){
//             let computerChoice=Math.floor(Math.random()*3+1)
//             let computerPlayer= 1?ROCK:computerChoice===2?PAPER:SCISSORS

//             let result = playerOne===computerPlayer?"Tie game"
//                         :playerOne===ROCK && computerPlayer===PAPER
//                             ?`player: ${playerOne}\nComputer: ${computerPlayer}\nComputer wins!`
//                             :playerOne===PAPER && computerPlayer===SCISSORS
//                             ?`player: ${playerOne}\nComputer: ${computerPlayer}\nComputer wins!`
//                             :playerOne===SCISSORS && computerPlayer===ROCK
//                             ?`player: ${playerOne}\nComputer: ${computerPlayer}\nComputer wins!`
//                             :`player: ${playerOne}\nComputer: ${computerPlayer}\nPlayerOne wins!`
//             alert(result)

//             let playAgain = confirm("play again?")
//             playAgain? location.reload():alert("Thanks for playing...")
        
                            
//         }else{
//             alert("no correct input(rock/paper/scissors)")
//         }
//     } else {
//         alert("Changed mind? It's fine.")
//     }
// } else {
//     alert("see you next time!")
// }

if(playGame){
    // play
    while (playGame) {
        const playerChoice= prompt("pls enter rock,paper,or scissors.")
        if(playerChoice||playerChoice===""){
            const playerOne = playerChoice.trim().toLowerCase()
            if(playerOne===ROCK||
                playerOne===PAPER||
                playerOne===SCISSORS){
                    const computerChoice= Math.floor(Math.random()*3)
                    const rpsArr = [ROCK,PAPER,SCISSORS]
                    const computerPlayer=rpsArr[computerChoice]

                    let result = playerOne===computerPlayer?"Tie game"
                                            :playerOne===ROCK && computerPlayer===PAPER
                                                ?`player: ${playerOne}\nComputer: ${computerPlayer}\nComputer wins!`
                                                :playerOne===PAPER && computerPlayer===SCISSORS
                                                ?`player: ${playerOne}\nComputer: ${computerPlayer}\nComputer wins!`
                                                :playerOne===SCISSORS && computerPlayer===ROCK
                                                ?`player: ${playerOne}\nComputer: ${computerPlayer}\nComputer wins!`
                                                :`player: ${playerOne}\nComputer: ${computerPlayer}\nPlayerOne wins!`
                     alert(result)

                     playGame=confirm("Play again?")
                     if(!playGame){ alert("Thanks for playing...")}
                     continue
                }else{
                    alert("no correct input(rock/paper/scissors)")
                    continue
                }
        }else{
           alert("Changed mind? It's fine.") 
           break
        }
    }
}else{
    alert("next time")
}