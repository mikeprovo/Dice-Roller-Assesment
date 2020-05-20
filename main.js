const dieRoll = []

let showAllButton = document.querySelector("#Button-2")

let rollButton = document.querySelector("#Button-1")

let numRolled = document.getElementById("Dice-number-insert")

let rolls = 0

let totalSum = 0

let totalOutcome = document.querySelector("#Total")

let rollsList = document.querySelector("#rollslist")

rollButton.addEventListener("click", function () {
    rolls=0
    let x=0
    console.log(numRolled.value)
        while (x < numRolled.value) {
            var resultForEachDice = 0;
            resultForEachDice = Math.floor((Math.random() * 6) + 1)
            dieRoll.push(resultForEachDice);
            totalSum += resultForEachDice
            x++
        }

        totalOutcome.innerHTML = "Total From Rolls: " + totalSum
        console.log(dieRoll)
        console.log(totalSum)
})

showAllButton.addEventListener("click", function (){
  let index = 0

  console.log(dieRoll.length)
  
  while (index < dieRoll.length){
    let entry = document.createElement("li")
    entry.innerHTML = dieRoll[index]
    rollsList.appendChild(entry)
    index++
  } 
})