let playerScore = Math.floor(Math.random()*6)+1;
let playerScore1 = Math.floor(Math.random()*6)+1;


const roll = document.getElementById("btn");
const score = document.getElementById("playerScore");


roll.addEventListener("click",()=>{
    score.textContent=playerScore;
    playerScore += playerScore1
    console.log(playerScore)
    if(playerScore >= 23) result.textContent="You win!!";
});