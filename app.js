// Part 1: Thinking Functionally
function reverseString(str) {
  const strArray = str.split("");
  const revArray = strArray.reverse();
  const revString = revArray.join("");
  return revString;
}

function reverseString2(str) {
  return str.split("").reverse().join("");
}

function reverseString3(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

function reverseString4(str) {
  if (str === "") return "";
  else return reverseString4(str.substr(1)) + str.charAt(0);
}

function reverseString5(str) {
  return str === "" ? "" : reverseString5(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("!dlroW olleH"));
console.log(reverseString2("!dlroW olleH"));
console.log(reverseString3("!dlroW olleH"));
console.log(reverseString4("!dlroW olleH"));
console.log(reverseString5("!dlroW olleH"));

//1. Sum of Numbers in an Array:
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
//2. Average of Numbers in an Array:
function averageArray(arr) {
  if (arr.length === 0) return 0;
  return sumArray(arr) / arr.length;
}
// 3.Longest String in an Array:
function longestString(arr) {
  return arr.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
}
//4.Strings Longer Than a Given Number:
function stringsLongerThan(arr, num) {
  return arr.filter((str) => str.length > num);
}
//5.Print Numbers 1 to n Using Recursion:
function printNumbers(n) {
  if (n > 0) {
    printNumbers(n - 1);
    console.log(n);
  }
}
//You can use these functions like this:

const numbers = [1, 2, 3, 4, 5];
const strings = ["say", "hello", "in", "the", "morning"];

console.log(sumArray(numbers)); // Output: 15
console.log(averageArray(numbers)); // Output: 3
console.log(longestString(strings)); // Output: "morning"
console.log(stringsLongerThan(strings, 3)); // Output: ["hello", "morning"]
printNumbers(5); // Output: 1, 2, 3, 4, 5 (each number printed on a new line)

//Part 2: Thinking Methodically
const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Sort the array by age
const sortedByAge = data
  .slice()
  .sort((a, b) => parseInt(a.age) - parseInt(b.age));

// Filter the array to remove entries with an age greater than 50
const filteredByAge = data.filter((entry) => parseInt(entry.age) <= 50);

// Map the array to change the “occupation” key to “job” and increment every age by 1
const mappedData = data.map((entry) => ({
  ...entry,
  job: entry.occupation,
  age: parseInt(entry.age) + 1,
}));

// Use the reduce method to calculate the sum of the ages
const sumOfAges = data.reduce((acc, entry) => acc + parseInt(entry.age), 0);

// Calculate the average age
const averageAge = sumOfAges / data.length;

console.log("Sorted by age:", sortedByAge);
console.log("Filtered by age (<= 50):", filteredByAge);
console.log("Mapped data with 'job' key and incremented age:", mappedData);
console.log("Sum of ages:", sumOfAges);
console.log("Average age:", averageAge);
//  Part 3: Thinking Critically
