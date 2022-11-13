//level 1
console.log("for loop");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("while loop");
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
i = 0;
console.log("do loop");
do {
  console.log(i);
  i++;
} while (i <= 10);

console.log("for loop");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

console.log("do loop");
let j = 10;
do {
  console.log(j);
  j--;
} while (j >= 0);
console.log("while loop");
j = 10;
while (j >= 0) {
  console.log(j);
  j--;
}

let n = 7;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

for (let i = 0; i <= 7; i++) {
  console.log("#".repeat(i));
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i}*${i} =${i * i}`);
}

console.log("i\ti^2\ti^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t${i ** 2}\t${i ** 3}`);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

for (let j = 0; j <= 100; j++) {
  if (j % 2 === 1) console.log(j);
}

console.log("prime");
let prime = [];
let s = Math.sqrt(i);
for (let i = 2; i <= s; i++) {
  if (s % i === 1) prime.push(i);
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`the sum of all numbers is ${sum}`);

let evenSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) evenSum += i;
}

let oddSum = 0;
for (let j = 0; j <= 100; j++) {
  if (j % 2 === 1) oddSum += j;
}
console.log(
  `the sum of all evens from 0 to 100 is ${evenSum}.And the sum of all odds from 0 to 100 is ${oddSum}`
);

let evenOdd = [0, 0];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenOdd[0] += i;
  } else if (i % 2 === 1) {
    evenOdd[1] += i;
  }
}
console.log(evenOdd);

let randArr = Array(5).fill(Math.round(Math.random() * 10));
console.log(randArr);

let uniqueRand = [];
for (let i = 0; i < 5; i++) {
  uniqueRand.push(Math.round(Math.random() + i * 2));
}
console.log(uniqueRand);

let id = "";
let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let charactersLength = characters.length;
for (let i = 0; i < 6; i++) {
  id += characters.charAt(Math.floor(Math.random() * charactersLength));
}
console.log(id);

// level 2
function generate(num) {
  let id = "";
  for (let i = 0; i < num; i++) {
    id += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return id;
}
console.log(generate(15));
console.log(generate(8));

function generateHex() {
  let hex = "#";
  let characters = "abcdef0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    hex += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return hex;
}
console.log(generateHex());

function generateRGB() {
  let rgb = `rgb (${Math.round(Math.random()) * 255}, ${
    Math.round(Math.random()) * 255
  }, ${Math.round(Math.random()) * 255})`;
  return rgb;
}
console.log(generateRGB());

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let countriesArr = countries.slice();
for (let i = 0; i < countries.length; i++) {
  countriesArr[i] = countriesArr[i].toUpperCase();
}
console.log(countriesArr);
let countriesLength = [];
for (let i = 0; i < countries.length; i++) {
  countriesLength.push(countriesArr[i].length);
}
console.log(countriesLength);

let countriesArr2 = [];
for (let i = 0; i < countriesArr.length; i++) {
  let box = [
    `'${countriesArr[i]}','${countriesArr[i].slice(0, 3).toUpperCase()}',${
      countriesArr[i].length
    }`,
  ];
  console.log(box);

  countriesArr2.push(box);
}
console.log(countriesArr2);
let land = [];
let noLand = [];
let regex = /land/gi;
for (let i = 0; i < countriesArr.length; i++) {
  let regex = /land/gi;
  if (regex.test(countries[i]) === true) {
    land.push(countries[i]);
  } else {
    noLand.push(countries[i]);
  }
}
console.log(land);
console.log(noLand);

let ia = [];
let iaNot = [];

for (let i = 0; i < countries.length; i++) {
  let iaRegex = /ia/gi;
  if (iaRegex.test(countries[i]) === true) {
    ia.push(countries[i]);
  } else {
    iaNot.push(countries[i]);
  }
}
console.log(ia);
console.log(`this are countries not ending with ia ${iaNot}`);

let length5 = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    length5.push(countries[i]);
  }
}
console.log(length5);

let longest = "";
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longest.length) {
    longest = countries[i];
  }
}
console.log(longest);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let webLongest = "";
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > webTechs.length) {
    webLongest = webTechs[i];
  }
}
console.log(webLongest);

let webLengthArray = [];
for (let i = 0; i < webTechs.length; i++) {
  webLengthArray.push(`['${webTechs[i]}', ${webTechs[i].length}]`);
}
console.log(webLengthArray);

const mernStack = ["MongoDB", "Express", "React", "Node"];
let acronym = "";
for (let i = 0; i < mernStack.length; i++) {
  acronym += mernStack[i][0];
}
console.log(acronym);

for (let i = 0; i < webTechs.length; i++) {
  console.log(webTechs[i]);
}

let fruits = ["banana", "orange", "mango", "lemon"];
let fruitReverse = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  fruitReverse.push(fruits[i]);
}
console.log(fruitReverse);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}

// level 3
let countriesCopy = countries.slice(0);
console.log(countriesCopy);

let sortedCountries = countriesCopy.sort();
console.log(sortedCountries);

webTechs.sort();
console.log(webTechs);
mernStack.sort();
console.log(mernStack);

let landArray = [];

for (let i = 0; i < countriesArr.length; i++) {
  let landArrayRegex = /land/gi;
  let box = "";
  if (landArrayRegex.test(countries[i]) === true) {
    box = countries.slice(i);
    landArray.push(box);
  }
}
console.log(landArray);

let longest3 = "";
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longest3.length) {
    longest3 = countries[i];
  }
}
console.log(longest3);

let length4 = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 4) {
    length4.push(countries[i]);
  }
}
console.log(length4);

let moreThanTwo = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length >= 2) {
    moreThanTwo.push(countries.slice(i, i + 1));
  }
}
console.log(moreThanTwo);

let countriesReverse = [];
for (let i = countries.length - 1; i > 0; i--) {
  countriesReverse.push(countries[i].toUpperCase());
}
countriesReverse.sort();
console.log(countriesReverse);