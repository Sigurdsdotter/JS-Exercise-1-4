// Task 1:A

let theOriginString = "asuntokionapajaa";
let originString = theOriginString.slice(11,15);
console.log("Origin string:", originString)

let newString = "";

function search() {
  const searchString = "paja";
  const index = originString.indexOf(searchString);
  

  if (index !== -1) {
    newString = originString;
    console.log("New string:", newString);
  } else {
    console.log("String not found");
  }
}

search();



// Task 1:B

let mainString = "asuntokionapajaa";
let secondString = "";

for (let i = 2; i < mainString.length; i += 3) {
  secondString += mainString[i];
  secondString = secondString.replaceAll("a", "*");
  secondString = secondString.toUpperCase();
}

console.log("Every 3rd char from:", mainString + "=", secondString);



// Task 2

function myFunction() {
  let age; 
  let txt = ""; 
  let i = 1; //index how many times y have prompt wrong age
  let prmptTxt = "What is your age?"; //prompt-box text
  let messageElement = document.getElementById("g");
  messageElement.innerHTML = txt;
  
  do {  // DO-WHILE OR WHILE -DO TO REPEATING loop , stop/end by 
    age = parseInt(prompt(prmptTxt, 0));
    // doing with switch
    if (age >=18 && age <=22){
      switch (age){   //using swich instead of if- elseif else. 
                      //In some case can be more clear to read
        case 18:
        case 19:
          txt = "You are young!";
          console.log(txt);
          break;
        case 20:
        case 21:
          txt = "You are middle age!";
          console.log(txt);
          break;
        case 22:
          txt = "You are old!";
          console.log(txt);
          break;
      }
      messageElement.innerHTML = txt;
      return;     //stop function when age is between 18 - 22
    }
    else{ 		  // 22 < age < 18  , prompt-box text changes 
      prmptTxt= i++ +": input was " + age + ". Set age between 18 -22";
    }
  } while (age > 17 || age < 23);
}


/*
//Task 2, same using only console.log
//Prompt
// npm install prompt-sync
//https://www.youtube.com/watch?v=15EKPpm261M


const prompt = require("prompt-sync")();

let age = 0;
do {
  age = prompt("Set age : ");
} while (age > 22 || age < 18);
switch (age) {
  case "18":
    console.log(age,": Young");
    break;
  case "20":
    console.log(age,": Middle age");
    break;
  case "22":
    console.log(age,": Old");
    break;
  default:
	break;
}
*/



/*
function myFunction() {
  let age;
  let messageElement = document.getElementById("g");

  do {
    age = parseInt(prompt("What is your age?", 0));
  } while (age < 18 || age > 22);

  let rightAge = "";

  if (age >= 18 && age < 19) {
    rightAge = "You are young!";
  } else if (age >= 19 && age < 21) {
    rightAge = "You are middle age!";
  } else if (age >= 21 && age < 23) {
    rightAge = "You are old!";
  }

  console.log(rightAge);

  // Du kan också uppdatera meddelandeelementet på webbsidan om du vill visa meddelandet där.
  messageElement.textContent = rightAge;
}

// Anropa funktionen när du vill använda den.
myFunction();
18
*/


/*
//My first function


function myFunction() {
  let age = parseInt(prompt("What is your age?", 0));

  let messageElement = document.getElementById("g");

  if (age >= 18 && age < 20) {
    console.log("18 : Young");
    messageElement.innerHTML = "You are young!";
  } else if (age >= 20 && age < 22) {
    console.log("20 : Middle age");
    messageElement.innerHTML = "You are middle age!";
  } else if (age === 22) {
    console.log("22 : Old");
    messageElement.innerHTML = "You are old!";
  } else {
    console.log("Thats a lovely age");
    messageElement.innerHTML = "Thats a lovely age";
  }
}
*/



// Task 3 A

const animals = ["Dog", "Horse", "Cow"];

let newArray = [...animals, "Cat, Sheep"];

console.log(animals);
console.log(newArray);



// 3 B

let searchCow = "Cow";

let searchCo = "Co";

let index = animals.indexOf(searchCow);
let indexCo = animals.indexOf(searchCo);

if (index !== -1) {
  console.log(`Search result: ${searchCow}, Founded`);
 }  else {
  console.log(`Search result: ${searchCow}, Not founded`)
 }

 if (indexCo !== -1) {
  console.log(`Search result: ${searchCo}, Founded`);
 } else {
  console.log(`Search result: ${searchCo}, Not founded`)
 }



 // Task 4:1

/*
class Flower {
  constructor(Type, Color, Amount, inStore) {
    this.Type = Type;
    this.Color = Color;
    this.Amount = Amount;
    this.inStore = inStore;
  }
};
const typeFlower = {
  Type: "Rose",
  Color: "Red",
  newColor: function(changeColor) {
    this.Color = changeColor;
  },
  Amount: 5,
  newAmount: function(changeAmount) {
    this.Amount = changeAmount;
  },
  inStore: true,
  stockStatus: function(inStock) {
    this.inStore = inStock;
  }
};

console.log("Original situation:", typeFlower);

typeFlower.stockStatus(false);
typeFlower.newColor("Yellow");
typeFlower.newAmount(4);

console.log("After change:", typeFlower);
*/

// Alternativ to Task 4:1

class Flower {
  constructor(Type, Color, Amount, inStore) {
    this.Type = Type;
    this.Color = Color;
    this.Amount = Amount;
    this.inStore = inStore;
  }

  changeColor(newColor) {
    this.Color = newColor;
  }

  changeAmount(newAmount) {
    this.Amount = newAmount;
  }

  stockStatus(inStock) {
    this.inStore = inStock;
  }
}

const typeFlower = new Flower("Rose", "Red", 5, true);

console.log("Original situation:", typeFlower);

typeFlower.stockStatus(false);
typeFlower.changeColor("Yellow");
typeFlower.changeAmount(4);

console.log("After change:", typeFlower);



 // Task 4:2

 document.getElementById("text_task").innerHTML = "Ad astra per aspera";

