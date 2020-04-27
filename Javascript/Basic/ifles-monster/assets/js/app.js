const monsterHealthBar = document.getElementById("monster-health");
const playerHealthBar = document.getElementById("player-health");
const bonusLife = document.getElementById("bonus-life");


const attackBtn = document.getElementById("attack")
const strongAttackBtn = document.getElementById("strong-attack")
const healBtn = document.getElementById("heal")
const logBtn = document.getElementById("logs")


function adjustHealthBars(maxLife) {
    monsterHealthBar.max = maxLife;
    monsterHealthBar.value = maxLife;
    playerHealthBar.max = maxLife;
    playerHealthBar.value = maxLife;
  }

function dealMonsterDamage(damage){
    const dealDamage = Math.random() * damage;
    monsterHealthBar.value = monsterHealthBar.value - dealDamage
    return dealDamage
}

function dealPlayerDamage(damage){
    const dealDamage = Math.random() * damage;
    playerHealthBar.value = playerHealthBar.value - dealDamage
    return dealDamage
}

function healPlayer(healVal) {
    playerHealthBar.value = playerHealthBar.value + healVal
    return healHealth
    
}

function removeBonusLife(){
    x = parseInt(bonusLife.innerText) - 1
    bonusLife.innerText = x.toString()

}


function resetGames(maxLife){
    adjustHealthBars(maxLife);
}