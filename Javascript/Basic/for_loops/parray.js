//creating array
arr = [1,2,3]
console.log(arr)

//Array from

arr1 = document.querySelectorAll('li') //Return a node list
console.log(arr1)

arr2 = Array.from(arr1)
console.log(arr2)


//array splice

arrGames = ["GOW 4","Assassins Creed","Farcry 4"]

// start index - number of elements to delete - add any number of elements
arrGames.splice(1,0,"Farc Cry 3","Farc Cry 2")

console.log(arrGames)


//array slice

console.log(arrGames.slice(0,2));

//array concat
console.log(arrGames.concat([1,3,4]));
arrGames.indexOf("Farc Cry 2")
