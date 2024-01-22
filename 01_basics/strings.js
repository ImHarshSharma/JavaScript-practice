const name = "harsh"
const age = 22;

// console.log(name + repoCount + " Value");

// console.log(`Hello , my name is ${name} and my Age is ${age}`);

const gameName = new String('harry-is-Live')

console.log(gameName[2]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 7)
console.log(newString);

const anotherString = gameName.slice(-11, 5)
console.log(anotherString);

const newStringOne = "   harry    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://harsh.com/harsh%20sharma"

console.log(url.replace('%20', '-'))

console.log(url.includes('verma'))

console.log(gameName.split('-'));