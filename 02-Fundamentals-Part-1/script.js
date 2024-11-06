let js = 'ok';
if (js === 'ok') {
    // alert('JavaScript is here in the script.js file!');
    console.log('JavaScript is here in the script.js file!');
}

console.log('Math operation: 77 * 273 + 171 - 371', 77 * 273 + 171 - 371);

let firstName = 'Eric';
console.log('First Name', firstName);

// START variables assignment
let country = 'United States', continent = 'The Moon', population = 116;
console.log('Country', country);
console.log('Continent', continent);
console.log('Population', population);
// END variables assignment

let whatTheWhat = true;
console.log(whatTheWhat, typeof whatTheWhat);
console.log(false, typeof false);
console.log(population, typeof population);
console.log(13, typeof 13);
console.log(firstName, typeof firstName);
console.log('word', typeof 'word');

whatTheWhat = 'Steven Toast says "Yes!"';
console.log(whatTheWhat, typeof whatTheWhat);

let year;
console.log(year, typeof year);
year = 2023;
console.log(year, typeof year);

console.log(null, typeof null);

// START data types assignment
let isIsland = false, language;
console.log('isIsland', isIsland);
console.log(language, typeof language);
// END data types assignment

let age = 37;
age = age++;
const BIRTH_YEAR = 1985;
// BIRTH_YEAR = 1995; // TypeError: Attempted to assign to readonly property.
// const PI; //'const' declarations must be initialized.

// START let, const, var assignment
language = 'Klingon';
console.log(language, typeof language);
// END let, const, var assignment

const currentYear = 2023
const ageEric = currentYear - 1985;
const ageDwight = currentYear - 1976;
console.log('ageEric', ageEric, 'ageDwight', ageDwight);

console.log('multiply ericAge by 3', ageEric * 3, 'divide ericAge by 5', ageEric / 5, '3^2', 3 ** 2);

firstName = 'Dwight';
lastName = 'Schrute';
console.log("firstName + ' ' + lastName", firstName + ' ' + lastName);

// Assignment operators
let x = 5 + 3; // 8
x += 12; // 20
x++; // 21
x *= 3; // 63
x--; // 62
x /= 2; // 31
console.log('x', x);

// Comparison operators
console.log('ageEric > ageDwight', `${ageEric} > ${ageDwight}`, ageEric > ageDwight); // true
console.log('ageDwight >= 30', `${ageDwight} >= 30`, ageDwight >= 18); // true

const isOld = ageDwight >= 30;
console.log('isOld', isOld);

// START basic operators assignment
console.log('population / 2', `${population} / 2`, population / 2);
population++;
console.log('population++', population);
const finlandPop = 6;
console.log('finlandPop > population', `${finlandPop} > ${population}`, finlandPop > population);
const avgCountryPop = 33;
console.log('avgCountryPop < population', `${avgCountryPop} < ${population}`, avgCountryPop < population);
let description = country + ' is in ' + continent +', and its ' + population + ' million people speak ' + language;
console.log(description);
// END basic operators assignment

// START code challenge #1
let markMass = 78, markHeight = 1.69, johnMass = 92, johnHeight = 1.95;
const markBMI = markMass / markHeight ** 2, johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log('markBMI', markBMI.toFixed(2), 'johnBMI', johnBMI.toFixed(2), 'markHigherBMI', markHigherBMI);
// END code challenge #1

// Strings and template literals
const myName = 'Eric', job = 'office worker', birthYear = 1985, yearNow = 2023;
const me = "I'm" + ' ' + myName + ', a ' + (yearNow - birthYear) + ' year old ' + job + '!';
console.log('me', me);

const meNew = `I'm ${myName}, a ${yearNow - birthYear} year old ${job}!`;
console.log('meNew', meNew);

console.log('String with \n\
multiple \nlines');
console.log(`String with
multiple
lines2`);

// START strings and template literals assignment
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);
// END strings and template literals assignment

// If else statements
const yourAge = [21, 12];
yourAge.forEach(age => {
    const canDrive = age >= 16;
    if (canDrive) {
        console.log('You can get a drivers license! 🚗 🚙', `current age: ${age}`);
    } else {
        const yearsLeft = 16 - age;
        console.log(`You're too young!  Wait another ${yearsLeft} years. 🥺`, `current age: ${age}`);
    }
});

const yearOfBirth = [1985, 2019, 1876, 2000, 1900, 2100];
yearOfBirth.forEach(year => {
    let century;
    if (year <= 1900) {
        century = 19;
    } else if (year <= 2000) {
        century = 20;
    } else {
        century = 21;
    }
    console.log('String concatenation', 'Year ' + year + ' is in the ' + century + 'th century.');
});

// START if else assignment
if (population > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average.`);
}
if (population - 100 > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33 - (population - 100)} million below average.`);
}
// END if else assignment

// START code challenge #2
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(2)} 😫) is higher than John's (${johnBMI.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${johnBMI.toFixed(2)} 😫) is higher than Mark's (${markBMI.toFixed(2)})!`);
}
// END code challenge #2

// Type conversion and coercion
const inputYear = '1999';
console.log('inputYear', inputYear, Number(inputYear), Number(inputYear) + 17);
console.log("Number('Eric')", Number('Eric'), "typeof Number('Eric')", typeof Number('Eric'));
console.log('String(23)', String(23), 'typeof String(23)', typeof String(23), 23, 'typeof 23', typeof 23);

console.log("'23' - '10' - 3", '23' - '10' - 3);
console.log("'25' * '3'", '25' * '3');
console.log("'36' / '8'", '36' / '8');

let n = '3' + 5;
n -= 7;
console.log("n = '3' + 5; n -= 7;", n);

// START type conversion and coercion assignment
console.log("'9' - '5'", '9' - '5'); // 4
console.log("'19' - '13' + '17'", '19' - '13' + '17'); // 617
console.log("'19' - '13' + 17", '19' - '13' + 17); // 23
console.log("'123' < 57", '123' < 57); // false
console.log("5 + 6 + '4' + 9 - 4 - 2", 5 + 6 + '4' + 9 - 4 - 2); // 1143
// END type conversion and coercion assignment

// Truthy and falsy values
// 6 falsy values: false, 0, '', undefined, null, NaN
console.log('Boolean(0)', Boolean(0), 'Boolean(undefined)', Boolean(undefined), "Boolean('Eric')", Boolean('Eric'), 'Boolean({})', Boolean({}), "Boolean('')", Boolean(''));

let money = [0, 1000];
money.forEach(m => {
    if (m) {
        console.log("Don't spend it all!");
    } else {
        console.log('MONEY PLEASE!');
    }
});

let height;
if (height) {
    console.log('The height is defined!');
} else {
    console.log("You're hight is UNDEFINED!");
}
height = 0;
if (height) {
    console.log('The height is defined!');
} else {
    console.log("You're hight is UNDEFINED!");
}
height = 6.1;
if (height) {
    console.log('The height is defined!');
} else {
    console.log("You're hight is UNDEFINED!");
}

// Equality operators
const ageEquality = [18, '18', 17, '17'];
ageEquality.forEach(age => {
    if (age === 18) {
        console.log(`age: ${age}, typeof age: ${typeof age}`, 'You can vote! (strict)');
    } else {
        console.log(`age: ${age}, typeof age: ${typeof age}`, 'You cannot vote! (strict)');
    }
    if (age == 18) {
        console.log(`age: ${age}, typeof age: ${typeof age}`, 'You can still vote! (loose)');
    } else {
        console.log(`age: ${age}, typeof age: ${typeof age}`, 'You still cannot vote! (loose)');
    }
});

// const favNum = Number(prompt('What is your favorite number?'));
const favNum = 13
console.log('favNum', favNum, 'typeof favNum', typeof favNum);
if (favNum === 13) {
    console.log('Good choice.');
} else if (favNum === 42) {
    console.log('The answer to life, the universe, and everything.');
}  else {
    console.log('Wrong!');
}
if (!(favNum === 13 || favNum === 42)) {
    console.log('Maybe you should reload the page and rethink your life.');
}

// START equality operators assignment
// const numNeigh = Number(prompt('How many neighbors does your country have?'));
const numNeigh = 2;
if (numNeigh === 1) {
    console.log('Only 1 border!');
} else if (numNeigh > 1) {
    console.log('More than 1 border.');
} else {
    console.log('No borders.');
}
// END equality operators assignment

// Boolean logic and logical operators
const hasDriversLicense = true, hasGoodVision = false;
console.log('hasDriversLicense && hasGoodVision', hasDriversLicense && hasGoodVision);
console.log('hasDriversLicense || hasGoodVision', hasDriversLicense || hasGoodVision);
console.log('!hasDriversLicense', !hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log('You are permitted to drive.');
} else {
    console.log('You should let someone else drive. You are not permitted to drive.');
}

const leTired = true;
console.log('hasDriversLicense && hasGoodVision && leTired', hasDriversLicense && hasGoodVision && leTired);
if (hasDriversLicense && hasGoodVision && !leTired) {
    console.log('You are permitted to drive.');
} else {
    console.log('You should let someone else drive. You are too tired to drive.');
}

// START logical operators assignment
if (language === 'english' && population < 50 && numNeigh > 0) {
    console.log(`You should live in ${country}!`);
} else {
    console.log(`Learn some ${language} so you can live in ${country}, located in ${continent}.`);
}
// END logical operators assignment

// START code challenge #3
let scoreDolphins = [96, 108, 89], scoreKoalas = [87, 96, 110];
const scoreAverage = scores => {
    let scoreTotal = 0;
    scores.forEach(score => scoreTotal += score);
    return scoreTotal / scores.length;
}
let avgDolphinScore = scoreAverage(scoreDolphins), avgKoalaScore = scoreAverage(scoreKoalas);
console.log('avgDolphinScore', avgDolphinScore, 'avgKoalaScore', avgKoalaScore);
if (avgDolphinScore > avgKoalaScore) {
    console.log('Dolphins win the sports ball trophy!');
} else if (avgDolphinScore < avgKoalaScore) {
    console.log('Koalas win the sports ball trophy!');
} else if (avgDolphinScore === avgKoalaScore && avgDolphinScore >= 100 && avgKoalaScore >= 100) {
    console.log('Both teams must share the sports ball trophy!');
} else {
    console.log('No one wins the sports ball trophy!');
}
// END code challenge #3

// Switch statement
// const day = prompt('What day is it?').toLowerCase();
const day = 'monday';
switch (day) {
    case 'monday':
        console.log('It is Monday.');
        break;
    case 'tuesday':
        console.log('It is Tuesday.');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('It is Wednesday or Thursday.');
        break;
    case 'friday':
        console.log('It is Friday.');
        break;
    case 'saturday':
    case 'sunday':
        console.log('It is Weekend.');
        break;
    default:
        console.log('It is NaD (Not a Day).');
}

// START switch statement assignment
// const spkoenLanguage = prompt('What language do you speak?').toLowerCase();
const spkoenLanguage = 'klingon';
switch (spkoenLanguage) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers.');
        break;
    case 'english':
        console.log('3rd place.');
        break;
    case 'hindi':
        console.log('Number 4.');
        break;
    case 'arabic':
        console.log('5th most spoken language.');
        break;
    case 'klingon':
        console.log('A good day to die!');
        break;
    default:
        console.log("That's certainly another language.");
}
// END switch statement assignment

// Conditional (ternary) operator
age >= 37 ? console.log(`I'm at the age of ${age} or older.`) : console.log(`I'm younger than ${age}.`);

const letsDrink = age >= 21 ? 'Lets get drinking! 🍷🍻' : "Meh.  I guess I'll have water 💧";
console.log(letsDrink);

// START conditional (ternary) operator assignment
const moneyMoneyMoney = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
let billAmount = [275, 40, 430];
billAmount.forEach(bill => {
    let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    console.log(`The bill was ${moneyMoneyMoney.format(bill)}, the tip was ${moneyMoneyMoney.format(tip)}, and the total value ${moneyMoneyMoney.format(bill + tip)}.`);
});
// END conditional (ternary) operator assignment
