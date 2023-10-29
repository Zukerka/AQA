/*
1. 
  Напиши функцію map(fn, array), яка приймає на вхід функцію та масив, 
  та обробляє кожен елемент масиву цією функцією, повертаючи новий масив. 
  Приклад:
*/

function map(fn, array) {
  let newArray = []; 
  
  //First option 
  //   for (const iterator of array) {
  //   newArray.push(fn(iterator));
  // }
  
  // Second option: 
  array.forEach(element => { 
    newArray.push(fn(element)); 
  });
  return newArray; 
}

function square(x) {
  return x * x;
} // повертає квадрат числа

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

// Зверніть увагу: функція не повинна змінювати переданий їй масив:

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

/*
  2. Написати функцію яка форматує текст: 
    - прибирає пробіли з початку і кінця, 
    - прибарає всі займі пробіли (два і більше підряд)
    - кожне речення починає з великої букви, а всі наступні символи в речені робить маленькими
*/

/*First option
function formatText(text) {
  let sentences = text.split('.'); 
  let res = []; 
  for (const item of sentences) {
    let newSentence = item.trim();
    let updSentence = newSentence[0].toUpperCase() + newSentence.slice(1).toLowerCase();  
    res.push(updSentence)
  }
  return res.join('. '); 
}
*/ 

//Second option
function formatText(text) {
  let sentences = text.split('.'); 
  let processedSentences = sentences.map(el => {
    el = el.trim();
    let updSentence = el[0].toUpperCase() + el.slice(1).toLowerCase();
    return updSentence;
  }) 
    return processedSentences.join('. '); 
  }
  

console.log(formatText("   heLLo, this is My teXT.   have A NiCe DaY  ")); // "Hello, this is my text. Have a nice day"
console.log(formatText(" Hello woRld   ")); // "Hello world"

// /*
//     3. Написати функцію, яка поверне число голосних букв в строкі
// */

function countVowels(str) { 
  let vowels = str.match(/(a|o|u|i|e)/g); 
  return vowels.length;
}

console.log(countVowels("aaaat")); // виводить 4
console.log(countVowels("Hello world")); // виводить 3

/*
    4. Написати функцію, яка видаляє всі спеціальні символи зі строки (залишає лише числа, букви і пробіли в будь-якому регістрі)
*/
// Option #1 (If we need to exclude spare spaces I would'n add them to regex in the first place)
// function clearStr(str) {
//   let pattern = /[a-z0-9]+/gi; 
//   let res = str.match(pattern).join(' '); 

//   return res; 
 
// }

// Option #2 (With deleting extra spaces)
function clearStr(str) {
  let pattern = /[a-z0-9\s]+/gi; 
  let res = str.match(pattern); 

  let newRes = res.map(el => el = el.trim())

  return newRes.join(' '); 
 
}

console.log(clearStr("My var: 22 ")); // виведе "My var 22"
console.log(clearStr("Foo %$#% bar")); // виведе "Foo bar"
console.log(clearStr("; SELECT * FROM passwords ")); // виведе "SELECT FROM passwords"