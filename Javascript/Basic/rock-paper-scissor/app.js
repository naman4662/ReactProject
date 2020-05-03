const startGameBtn = document.getElementById('start-game-btn');

function startGame(){
    console.log("Game is starting....")
}

// addEventListener provided by browser
startGameBtn.addEventListener('click',startGame)


// A function inside object is  a method
// const patient = {acitivity : function greet(){
//     console.log("HI")
// }}

// patient.acitivity();


// functions are objects itself

// function ways , it can be added on the right side , function being used as expression , anonymous function 

// Anonymous function - Function which can be declared once and wont be used in future, so in above case 
// it will be executed when the event is triggered 


const start = function (){ // nameless function are known as anonymous function
    console.log("Game is starting....")
}; // add this semi colon - convention to follow

// Anonymous function being executed directly 
const start_direct = function (){ 
    console.log("Game is starting directly....")
}();

startGameBtn.addEventListener('click',start)

startGameBtn.addEventListener('click',start_direct)


startGameBtn.addEventListener('click', function(){
    console.log("Fnction from event")
});