const startGameBtn = document.getElementById('start-game-btn');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const choiceField = document.getElementById('winner');
const ROCK = 'rock'
const PAPER= 'paper'
const SCISSOR = 'scissor'
const rcp_array =[]

function startGame(e){
    choiceField.innerText = ""
    debugger
    userChoice = e.currentTarget.value
    // choiceField = document.getElementById('rcp-choice')
    // if (choiceField.style.display === "none") {
    //     choiceField.style.display = "block";
    //   } else {
    //     choiceField.style.display = "none";
    //   } 
    
    computerChoice = getComputerChoice()
    const getWInner =  (uChoice,cChoice) => {
        if ((uChoice === ROCK && cChoice === SCISSOR) || ( uChoice === PAPER && cChoice === ROCK) || ( uChoice === SCISSOR && cChoice === PAPER)){
            choiceField.innerText = "User Wins !!!"
        } else if (uChoice === cChoice ){
            choiceField.innerText = "Its a draw !!!!"
        }
        else{
            choiceField.innerText = "Computer Wins !!!"
        }
    }
    getWInner(userChoice,computerChoice)
    return
}

function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3)
    let computerChoice;
    if (randomChoice === 0){
        computerChoice = ROCK
    }else if (randomChoice === 1){
        computerChoice = PAPER
    }
    else{
        computerChoice = SCISSOR
    }

    return computerChoice
    
    
}

function getWinner(uChoice,cChoice){
    
    if ((uChoice === ROCK && cChoice === SCISSOR) || ( uChoice === PAPER && cChoice === ROCK) || ( uChoice === SCISSOR && cChoice === PAPER)){
        choiceField.innerText = "User Wins !!!"
    } else if (uChoice === cChoice ){
        choiceField.innerText = "Its a draw !!!!"
    }
    else{
        choiceField.innerText = "Computer Wins !!!"
    }
}

// addEventListener provided by browser
rockButton.addEventListener('click',startGame)
paperButton.addEventListener('click',startGame)
scissorButton.addEventListener('click',startGame)


// A function inside object is  a method
// const patient = {acitivity : function greet(){
//     console.log("HI")
// }}

// patient.acitivity();


// functions are objects itself

// function ways , it can be added on the right side , function being used as expression , anonymous function 

// Anonymous function - Function which can be declared once and wont be used in future, so in above case 
// it will be executed when the event is triggered 


// const start = function (){ // nameless function are known as anonymous function
//     console.log("Game is starting....")
// }; // add this semi colon - convention to follow

// // Anonymous function being executed directly 
// const start_direct = function (){ 
//     console.log("Game is starting directly....")
// }();

// startGameBtn.addEventListener('click',start)

// startGameBtn.addEventListener('click',start_direct)


// startGameBtn.addEventListener('click', function(){
//     console.log("Fnction from event")
// });


// rest parameters 

const sumup = (validateSum,...numbers) =>{
    let sum = 0 ;
    for (const element of numbers){
        sum = sum + element
    }

    validateSum(sum)

};



// bind 

const subtractUp = (resultHandler,...numbers) => {
    let sum = 0;
    for (const  element of numbers){
        sum = sum - element
    }
    resultHandler(sum)
}


const showResult = (messagetext,result) => {
    console.log(messagetext)
    console.log(result)
};

sumup(showResult.bind(this,"hello Naman"),1,2,3,4,5,6,6)
subtractUp(showResult,1,2,3,4,5,6,6)