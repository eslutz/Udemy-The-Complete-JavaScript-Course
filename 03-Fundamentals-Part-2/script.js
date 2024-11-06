'use strict';

// Activating strict mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) {
  console.log('I can drive :D');
}

// Functions
// Defining a function that logs a message to the console.
function froggerLogger() {
  console.log('I am a frog 🐸 in a log 🗒️!');
}
// Calling/running/invoking the function.
froggerLogger();
froggerLogger();
froggerLogger();

// Defining a function that takes in parameters and returns a value.
function processThatFruit(numApples, numOranges) {
  console.log(numApples, numOranges);
  const juice = `Juice with ${numApples} apples and ${numOranges} oranges.`;
  return juice;
}
// Calling/running/invoking the function.
const processedFruit = processThatFruit(5, 0);
console.log(processedFruit);
console.log(processThatFruit(57, 32));

// START functions assignment
function describeCountry(country, population, capital) {
  return `${country} has ${population} million people and its capital is in ${capital}`;
}
const country1 = describeCountry('The Moon', '1.7', 'Moon Base 1');
const country2 = describeCountry('Dunder Mifflin', '5.6', 'Scranton');
const country3 = describeCountry('Funky Town', 79.5, 'New New York');
console.log(country1, country2, country3);
// END functions assignment

// Function Declaration vs. Expressions
// Function Declaration - function can be called before declaration.
const currentYear = new Date().getFullYear();
console.log('calcAge1(1985)', calcAge1(1985));
function calcAge1(birthYear) {
  return currentYear - birthYear;
}
// Function Expression - function must be declared before it can be called.
const calcAge2 = function (birthYear) {
  return currentYear - birthYear;
};
console.log('calcAge2(1985)', calcAge2(1985));

// START function declaration vs. expressions assignment
const worldPopulation = 7900;
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};
const pop1 = percentageOfWorld1(1441),
  pop2 = percentageOfWorld1(350),
  pop3 = percentageOfWorld1(2790);
const pop4 = percentageOfWorld2(1441),
  pop5 = percentageOfWorld2(350),
  pop6 = percentageOfWorld2(2790);
console.log('function declaration - percentageOfWorld1', pop1, pop2, pop3);
console.log('function expression - percentageOfWorld2', pop4, pop5, pop6);
// END function declaration vs. expressions assignment

// Arrow Functions
const yearsUntilRetirement = (birthYear, retirementAge, firstName) => {
  const age = currentYear - birthYear;
  const retirement = retirementAge - age;
  return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1985, 70, 'Dwight'));

// START arrow functions assignment
const percentageOfWorld3 = (population) => {
  return (population / worldPopulation) * 100;
};
const pop7 = percentageOfWorld2(1441),
  pop8 = percentageOfWorld2(350),
  pop9 = percentageOfWorld2(2790);
console.log('function expression - percentageOfWorld3', pop4, pop5, pop6);
// END arrow functions assignment

// START functions calling other functions assignment
const describePopulation = (country, population) => {
  return `${country} has a population of ${population} people, which is ${percentageOfWorld1(
    population,
  )}% of the world population.`;
};
console.log(describePopulation('The Moon', '1.7'));
console.log(describePopulation('Dunder Mifflin', '5.6'));
console.log(describePopulation('Funky Town', 79.5));
// END functions calling other functions assignment

// START code challenge #1
const calcAvg = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};
const checkWinner = (avgDolphins, avgKoalas) => {
  let winner = 'No team wins...';
  if (avgDolphins > avgKoalas) {
    winner = `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgDolphins < avgKoalas) {
    winner = `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  }
  return winner;
};
let scoreDolphins = calcAvg(44, 23, 71);
let scoreKoalas = calcAvg(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));
scoreDolphins = calcAvg(85, 54, 41);
scoreKoalas = calcAvg(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));
scoreDolphins = calcAvg(10, 20, 70);
scoreKoalas = calcAvg(30, 30, 40);
console.log(checkWinner(scoreDolphins, scoreKoalas));
// END code challenge #1

// Introduction to Arrays
const friends = ['Dwight', 'Michael', 'Jim', 'Pam', 'Creed'];
const years = new Array(1999, 2001, 1985, 2023);
console.log('friends', friends);
console.log('first friend - friends[0]', friends[0]);
console.log('last friend - friends[4]', friends[4]);
console.log('total friends - friends.length', friends.length);
console.log(
  'last friend - friends[friends.length - 1]',
  friends[friends.length - 1],
);
friends[1] = 'Chandler';
console.log('friends', friends);

const aboutMe = ['Eric', 'Slutz', currentYear - 1985, 'developer', friends];
console.log(aboutMe);

const calcAge3 = (birthYear) => {
  console.log();
  return currentYear - birthYear;
};
console.log(years);
const age1 = calcAge3(years[0]);
const age2 = calcAge3(years[1]);
const age3 = calcAge3(years[2]);
console.log(age1, age2, age3);
let ages = [
  calcAge3(years[0]),
  calcAge3(years[1]),
  calcAge3(years[2]),
  calcAge3(years[years.length - 1]),
];
console.log(ages);

// START introduction to arrays assignment
const populations = [25, 37, 250, 3.5];
console.log('populations.length == 4', populations.length == 4);
const percentages = [];
populations.forEach((pop) => {
  percentages.push(percentageOfWorld1(pop));
});
console.log('percentages', percentages);
// END introduction to arrays assignment

// Basic Array Operations (Methods)
const friends2 = ['Michael', 'Pam', 'Jim'];
const newLength = friends2.push('Dwight'); // Add element to end of the array.
console.log('newLength', newLength, "friends2.push('Dwight')", friends2);
friends2.unshift('Creed'); // Add element to the start of an array.
console.log("friends2.unshift('Creed')", friends2);
const popped = friends2.pop(); // Removes last element from an array and returns the element.
console.log('popped', popped, 'friends2.pop()', friends2);
const shifted = friends2.shift(); // Removes first element from an array and returns the element.
console.log('shifted', shifted, 'friends2.shift()', friends2);
console.log("friends2.indexOf('Pam')", friends2.indexOf('Pam')); // Returns index of element.
console.log("friends2.indexOf('Bob')", friends2.indexOf('Bob'));
console.log("friends2.includes('Pam')", friends2.includes('Pam')); // Returns if array contains the element.
console.log("friends2.includes('Bob')", friends2.includes('Bob'));

// START basic array operations (methods) assignment
const neighbors = ['Canada', 'Mexico'];
console.log('neighbors', neighbors);
neighbors.push('Utopia');
console.log("neighbors.push('Utopia')", neighbors);
neighbors.pop();
console.log('neighbors.pop()', neighbors);
if (!neighbors.includes('Germany')) {
  console.log(
    "neighbors.includes('Germany')",
    neighbors.includes('Germany'),
    'Probably not a central European country ☹️',
  );
}
if (neighbors.includes('Canada')) {
  neighbors[neighbors.indexOf('Canada')] = 'New Canada';
  console.log('neighbors', neighbors);
}
// END basic array operations (methods) assignment

// START code challenge #2
const calcTip = (bill) => {
  // if (bill >= 50 && bill <= 300) {
  //     return bill * .15;
  // } else {
  //     return bill * .2;
  // }
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
let bills = [125, 555, 44];
let tips = [];
let totals = [];
bills.forEach((bill) => {
  let tip = calcTip(bill);
  tips.push(tip);
  totals.push(bill + tip);
});
console.log('bills', bills, 'tips', tips, 'totals', totals);
// END code challenge #2

// Introduction to Objects
const itsMe = {
  firstName: 'Dwight',
  lastName: 'Schrute',
  age: calcAge1(1982),
  job: 'Assistant to the Regional Manager',
  friends: ['Michael', 'Pam', 'Jim', 'Mose'],
};
console.log('itsMe', itsMe);

// START introduction to objects assignment
const myCountry = {
  country: 'The Moon',
  capital: 'Moon Base 1',
  language: 'English',
  population: 1.7,
  neighbors: ['Earth'],
};
console.log('myCountry', myCountry);
// END introduction to objects assignment

// Dot vs. Bracket Notation
console.log('itsMe.firstName', itsMe.firstName);
console.log("itsMe['firstName']", itsMe['firstName']);

const nameKey = 'Name';
console.log("itsMe['first' + nameKey]", itsMe['first' + nameKey]);
console.log("itsMe['last' + nameKey]", itsMe['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about this person (firstName, lastName, age, job, friends)?');
const interestedIn = 'job';
if (itsMe[interestedIn]) {
  console.log(itsMe[interestedIn]);
} else {
  console.log('That is not a valid option.');
}

itsMe.location = 'Scranton, PA';
itsMe['fullName'] = itsMe.firstName + ' ' + itsMe.lastName;
console.log('itsMe', itsMe);

// START dot vs. bracket notation assignment
console.log(
  `${myCountry.country} has a population of ${myCountry.population} million people, has ${myCountry.neighbors.length} neighbor(s) and it's capital is ${myCountry.capital}.`,
);
myCountry.population += 2;
console.log('myCountry.population plus two million', myCountry.population);
myCountry['population'] -= 2;
console.log('myCountry.population minus two million', myCountry.population);
// END dot vs. bracket notation assignment

// Object Methods
const itsMeAgain = {
  firstName: 'Dwight',
  lastName: 'Schrute',
  birthYear: 1988,
  job: 'Assistant to the Regional Manager',
  friends: ['Michael', 'Pam', 'Jim', 'Mose'],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //     return currentYear - birthYear;
  // }
  // calcAge: function () {
  //     return currentYear - this.birthYear;
  // }
  calcAge: function () {
    this.age = currentYear - this.birthYear;
    return this.age;
  },
  personalSummary: function () {
    return `${this.lastName}, ${this.firstName}: A ${this.calcAge()} year old ${
      this.job
    }, who has ${this.friends.length} friends and ${
      this.hasDriversLicense ? 'can' : 'cannot'
    } legally drive a car.`;
  },
};
console.log('itsMeAgain.calcAge()', itsMeAgain.calcAge());
console.log("itsMeAgain['calcAge']()", itsMeAgain['calcAge']());
console.log('itsMeAgain.age', itsMeAgain.age);
console.log('itsMeAgain.personalSummary()', itsMeAgain.personalSummary());

// START object methods assignment
const myCountryAgain = {
  country: 'The Moon',
  capital: 'Moon Base 1',
  language: 'English',
  population: 1.7,
  neighbors: ['Earth'],
  describe: function () {
    return `${myCountry.country} has a population of ${myCountryAgain.population} million people, has ${myCountryAgain.neighbors.length} neighbor(s) and it's capital is ${myCountryAgain.capital}.`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
    return this.isIsland;
  },
};
console.log('myCountryAgain', myCountryAgain);
console.log('myCountryAgain.checkIsland()', myCountryAgain.checkIsland());
console.log('myCountryAgain.describe()', myCountryAgain.describe());
// END object methods assignment

// START code challenge #3
const mark = {
  fullName: 'Mark Smith',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = (this.mass / (this.height * this.height)).toFixed(2);
    return this.BMI;
  },
};
const john = {
  fullName: 'John Miller',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = (this.mass / (this.height * this.height)).toFixed(2);
    return this.BMI;
  },
};
if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()} 😫) is higher than ${
      john.fullName
    }'s (${john.calcBMI()})!`,
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()} 😫) is higher than ${
      mark.fullName
    }'s (${mark.calcBMI()})!`,
  );
}
// END code challenge #3

// Iteration: The for Loop
for (let rep = 0; rep <= 10; rep += 2) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}

// START iteration: the for loop assignment
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}
// END iteration: the for loop assignment

// Looping Arrays, Breaking, and Continuing
const loopArray = [
  'Bob',
  'Bobson',
  currentYear - 1985,
  'Consultant',
  ['Michael', 'Peter', 'Samir'],
  true,
];
const types = [];
for (let i = 0; i < loopArray.length; i++) {
  console.log(loopArray[i], typeof loopArray[i]);
  types.push(typeof loopArray[i]);
}
console.log(types);

const birthYears = [1985, 1987, 2006, 2019];
ages = [];
for (let i = 0; i < birthYears.length; i++) {
  ages.push(currentYear - birthYears[i]);
}
console.log(ages);

for (let i = 0; i < loopArray.length; i++) {
  if (typeof loopArray[i] === 'number') {
    break;
  } else if (typeof loopArray[i] !== 'string') {
    continue;
  }
  console.log(loopArray[i], typeof loopArray[i]);
}

// START looping arrays, breaking, and continuing assignment
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log('percentages', percentages);
console.log('percentages2', percentages2);
console.log(
  'percentages == percentages2',
  percentages.length === percentages2.length &&
    JSON.stringify([...percentages].sort()) ===
      JSON.stringify([...percentages2].sort()),
);
// END looping arrays, breaking, and continuing assignment

// Looping Backwards and Loops in Loops
for (let i = loopArray.length - 1; i >= 0; i--) {
  console.log(i, loopArray[i]);
}

for (let ex = 1; ex <= 3; ex++) {
  console.log('----- Starting Exercise -----');
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${ex}, Repetition ${rep} 🏋️`);
  }
}

// START looping backwards and loops in loops assignment
const listOfNeighbors = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];
for (let x = 0; x < listOfNeighbors.length; x++) {
  for (let y = 0; y < listOfNeighbors[x].length; y++) {
    console.log(`Neighbor: ${listOfNeighbors[x][y]}`);
  }
}
// END looping backwards and loops in loops assignment

// The while Loop
let dice = 0;
while (dice !== 6) {
  dice = Math.floor(Math.random() * 6) + 1; // Random integer between 1 and 6
  console.log(`Dice roll of ${dice}`);
  if (dice === 6) {
    console.log('Dice rolling is about to end...');
  }
}

// START the while loop assignment
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log('percentages', percentages);
console.log('percentages3', percentages3);
console.log(
  'percentages == percentages3',
  percentages.length === percentages3.length &&
    JSON.stringify([...percentages].sort()) ===
      JSON.stringify([...percentages3].sort()),
);
// END the while loop assignment

// START code challenge #4
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log('Bills', bills);
console.log('Tips', tips);
console.log('Totals', totals);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log('Average', calcAverage(totals));
// END code challenge #4
