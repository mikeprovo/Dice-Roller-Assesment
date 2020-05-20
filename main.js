var dieRoll = []

let showAllButton = document.querySelector(".Button-2")

let rollButton = document.querySelector(".Button-1")

let rolls = 0

rollButton.addEventListener("click", function) () {
    numRolled=document.getElementById("numRolled").value
    dieRoll=[]
    rolls=0
    let x=0
        while (x < numRolled.value) {
            x++
            var resultForEachDice = 0;
            resultForEachDice = Math.floor((Math.random() * 6) + 1)
            dieRoll.push(resultForEachDice);
        }


}
showAllButton.addEventListener("click", function) (){

let numberOfRolls=dieRolls.length, roll,i;
    for (i = 0; i < numberOfRolls; ++i) {  
    }
}
}
//* need to create a java function to add up the sum and make the reveal button show an ordered list of the dice rolls //*

/* function rnd(dice){
var number=Math.floor(Math.random(dice)*25);
}

var dice = ["One" , "Two" , "Three" , "Four" , "Five" , "Six"];

length = dice.length;
console.log(length);

for (var i = 0; i < dice.length; i++) {
console.log("i:" + i + "" + dice[i]);
} /*

/* Cite: https://stackoverflow.com/questions/46438847/dice-roll-counter-in-javascript /*

/* function rollDie() {
  return Math.floor(Math.random() * 6); 
}

var counts = [0, 0, 0, 0, 0, 0];

var results = [];

for (var i = 0; i < 25; i++) {
  var result = rollDie();
  counts[result] = counts[result] + 1;
  results.push(result);
}

console.log(results);  
console.log(counts);    

Cite: user663031 https://stackoverflow.com/questions/46438847/dice-roll-counter-in-javascript /*
