let rock=document.querySelector("#Rock");
let paper=document.querySelector("#Paper");
let scissor=document.querySelector("#Scissors");
let reset=document.querySelector("#Reset");
reset.addEventListener("click",()=> {
    Score.Wins=0;
    Score.Looses=0;
    Score.Ties=0;
})


rock.addEventListener("click",() => {
   playGame("Rock");
    

    alert(`You choose ${playerMoe} and Computer choose ${computerMove}  ${result}`);
})

paper.addEventListener("click", () => {
    playGame("Paper");
   
  
    alert(`You choose ${playerMoe} and Computer choose ${computerMove}  ${result}`);
})

scissor.addEventListener("click", () => {
    playGame("Scissors");
})

let Score = {
    Wins:0,
    Looses:0,
    Ties:0
};

function playGame(){
    const computerMove=printCompMove();
    
    let result="";

    if(playerMoe="Scissors"){
        if(computerMove=="Rock"){
            result="You loose";
        }else if(computerMove==="Paper"){
            result="You won";
        }else if(computerMove==="Scissors"){
            result="Tie!";
        }
    }else if(playerMoe="Paper"){
        if(computerMove=="Rock"){
            result="You won";
        }else if(computerMove==="Paper"){
            result="Tie!";
        }else if(computerMove==="Scissors"){
            result="You loose";
        }
    }else if(playerMoe="Rock"){
        if(computerMove=="Rock"){
            result="Tie!";
        }else if(computerMove==="Paper"){
            result="You loose";
        }else if(computerMove==="Scissors"){
            result="You won";
        }
    }

    if(result==="You won"){
        Score.Wins+=1;
    }else if(result==="You loose"){
        Score.Looses+=1;
    }else if(result==="Tie!"){
        Score.Ties+=1;
    }


    alert(`You choose ${playerMoe} and Computer choose ${computerMove}  ${result}
Wins:${Score.Wins} Looses:${Score.Looses} Ties:${Score.Ties}`);
}
function printCompMove(){
    let randomnum=Math.random();
    
    if(randomnum>=0 && randomnum<1/3){
        computerMove="Rock";
    }else if(randomnum>=1/3 && randomnum<2/3){
        computerMove="Paper";
    }else if(randomnum>=2/3 && randomnum<1){
        computerMove="Scissors";
    }
    return computerMove;
}



std_details = {
    name:"Tanzil",
    age:23,
    sub_details: {
        firstnam:"Shaik",
        gender:"Male",
    },
    rolno:33,
    function: function newfun(){
        console.log("This is a fucnction inside an object");
    }
};
