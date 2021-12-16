function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}

//*1.2*//
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(avengers) {
  let longestWord = avengers[0];
  for (let index = 1; index < avengers.length; index++) {
    if (avengers[1].length > longestWord.length) {
      longestWord = avengers[index];
    }
  }
  return console.log(longestWord);
}
findLongestWord(avengers);

//*1.3*//

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return console.log(sum);
}
sumArray(numbers);

//*1.4*//

const nums = [12, 21, 38, 5, 45, 37, 6];

function promerdio(nums) {
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
  }
  return console.log(sum / nums.length);
}
promerdio(nums);

//*1.5*//

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function promedioPalabras(mixedElements) {
  for (let index = 0; index < mixedElements.length; index++) {
    if (typeof mixedElements[i] === "string") {
      sum += mixedElements[i].length;
    }
  }
  return console.log(sum / mixedElements.length);
}

//*1.6*//

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(duplicates) {
  let unicos = [];
  for (let index = 0; index < duplicates.length; index++) {
    if (!unicos.includes(duplicates[i])) {
      unicos.push(duplicates[i]);
    }
  }
  return console.log(unicos);
}

//*1.7*//

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function buscarNombre(nameFinder, value) {
  for (let index = 0; index < nameFinder.length; index++) {
    if (nameFinder[i] === value) {
      return console.log(true, i);
    }
    
  }
  return console.log(false);
}
buscarNombre(nameFinder, 'logan');

//*1.8*//

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(counterWords) {
  let counter = {};
  for (let i = 0; i < counterWords.length; i++) {
    if (counterWords[i] in counter) {
      counter[counterWords[i]]++;
    } else {
      counter[param[i]] = 1;
    }
  }
  return console.log(counter);
}

repeatCounter(counterWords);