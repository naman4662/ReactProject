const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK = 10;
const HEAL_VALUE = 40;
const chosenMaxLife = 100;
let currentHealthMonster = chosenMaxLife;
let currentHealthPlayer = chosenMaxLife;
let hasbonusLife = true
let logDetail = []
adjustHealthBars(chosenMaxLife);
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }
function attackMonster(mode){
    let maxDamage ;
    const initialPlayerHealth = currentHealthPlayer
    if (mode === "ATTACK"){
        maxDamage  = ATTACK_VALUE
    }else if (mode === "STRONG_ATTACK"){
        maxDamage  = STRONG_ATTACK_VALUE
    }
    const damage = dealMonsterDamage(maxDamage)
    currentHealthMonster = currentHealthMonster - damage
    const damagePlayer = dealPlayerDamage(MONSTER_ATTACK)
    currentHealthPlayer = currentHealthPlayer - damagePlayer
    if (currentHealthPlayer <= 0 && hasbonusLife){
        debugger
        hasbonusLife = false;
        removeBonusLife();
        currentHealthPlayer = initialPlayerHealth
    }
    if (currentHealthMonster <= 0 ){
        alert("monster Died")
        resetGames(chosenMaxLife)
    }else if(currentHealthPlayer <=0){
        alert("Player Died")
        resetGames(chosenMaxLife)
    }else if (currentHealthMonster <= 0 && currentHealthPlayer <=0){
        alert("You have a draw")
        resetGames(chosenMaxLife)
    }
}


function attackHandler(){
    // try{
    //     throw {message :"Error"}
    // }catch(error){
    //     console.log(error)
    // }finally{
    //     console.log("Always")
    // }
    
    writeToLogs("ATTACK")
    attackMonster("ATTACK")

}

function strongAttack(){
    attackMonster('STRONG_ATTACK')
}


function healPlayerMain() {
    const healv = healPlayer(HEAL_VALUE)
    currentHealthPlayer = currentHealthPlayer + healv

}

function writeToLogs(event){
    let logEntry
    if(event === "ATTACK")
    logEntry = {
        event:event
    }

    logDetail.push(event)
    console.log(logDetail)

}

attackBtn.addEventListener('click',attackHandler);
healBtn.addEventListener('click',healPlayerMain)
strongAttackBtn.addEventListener('click',strongAttack)