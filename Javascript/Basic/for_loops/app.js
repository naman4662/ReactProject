let fruitsList = ['Apple', 'orange' , 'banana','tomato','papaya']

let allLogs = [{
    "name":"naman",
    age:20
},
{
    "name":"naman",
    age:20
}]

//Normal Loop
for (let i = 0 ; i <=10; i ++){
    console.log(i)
    continue
}

for (let i = 0 ; i <=fruitsList.length - 1; i ++){
    console.log(`Fruit Name : ${fruitsList[i]} Fruit Index : ${i}`)
}

console.log("Reverse Looping")
for (let i = fruitsList.length - 1 ; i >=0 ; i --){
    console.log(`Fruit Name : ${fruitsList[i]} Fruit Index : ${i}`)
}


// FOR-of loop
// only for arrays

for ( const fruit of fruitsList){
    console.log(fruit)
}

// FOR-in loop - for objects
for ( const key in allLogs){
    console.log(key)
    console.log(allLogs[key])
}


// while 
j =0 ;
while(j < 3){
    console.log(j)
    j++
}


let name = "naman";
var age = 33
function greet() {
    
    console.log(age)
    console.log(name)
  }
  console.log(age)

const labelButton = document.querySelectorAll('.selectData')

for (i = 0; i < labelButton.length; i++) {
    labelButton[i].addEventListener("click", function() {
    this.remove()
  });}

function closeLabel (e) { 
    debugger
 }

 labelButton.addEventListener('click',closeLabel)


