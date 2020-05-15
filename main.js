var dieRoll = []

let showAllButton = document.querySelector(".Button-2")

let rollButton = document.querySelector(".Button-1")

rollButton.addEventListener("click", function) () {
    numRolled=document.getElementById("numRolled").value
    dieRoll=[]

    let x=0
        while (x < numRolled.value) {
            x++
            var resultForEachDice = 0;
            resultForEachDice = Math.floor((Math.random() * 6) + 1)
            dieRoll.push(resultForEachDice);
        }
}