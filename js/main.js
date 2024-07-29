// ---------------------------------------------1-masala-------------------------------------------------------

// 1-question 



// function reverseThreeDigitNumber(number) {
//     let strNumber = number.toString();
    
//     if (strNumber.length !== 3) {
//         return "Iltimos, 3 xonali son kiriting.";
//     }
    
//     let reversedStrNumber = strNumber.split('').reverse().join('');
    
//     let reversedNumber = parseInt(reversedStrNumber, 10);
    
//     return reversedNumber;
// }

// let son = 123;
// let teskariSon = reverseThreeDigitNumber(son);
// console.log(`${son} ning teskari shakli: ${teskariSon}`);


// 1-question


// 2-question


// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     }
    
//     return number * factorial(number - 1);
// }

// let son = 5;
// let faktorial = factorial(son);
// console.log(`${son} ning faktoriali: ${faktorial}`);


// 2-question


// 3-question

// function compareAges(obj1, obj2) {
//     if (obj1.age > obj2.age) {
//         console.log("Age katta bo'lgan obyekt:", obj1);
//     } else if (obj1.age < obj2.age) {
//         console.log("Age katta bo'lgan obyekt:", obj2);
//     } else {
//         console.log("Ikkala obyektning yoshi teng:", obj1, obj2);
//     }
// }

// let person1 = { name: "Ali", age: 25 };
// let person2 = { name: "Vali", age: 30 };

// compareAges(person1, person2);


// 3-question


// 4-question


// function printNumbers(n) {
//     if (n < 0) {
//         return;
//     }
    
//     printNumbers(n - 1);
    
//     console.log(n);
// }

// let number = 5;
// printNumbers(number);


// 4-question



// 5-question


// let user = {name: "Shaxzod"};
// let age = {age: 25};
// let userJob = {job: "Developer"};

// let combinedObject = Object.assign({}, user, age, userJob);

// console.log(combinedObject);


// 5-question


// 6-question


// let salaries = {
//     aXodim: 150,
//     bXodim: 180,
//     cXodim: 210
// };

// function calculateTotalSalary(salaries) {
//     let totalSalary = 0;
//     for (let key in salaries) {
//         totalSalary += salaries[key];
//     }
//     return totalSalary;
// }

// let total = calculateTotalSalary(salaries);
// console.log(`Xodimlarning umumiy maoshi: ${total}`);



// 6-question


// 7-question

// function findMaxValue(arr) {
//     return Math.max.apply(null, arr);
// }

// let numbers = [10, 50, 30, 70, 20];
// let maxValue = findMaxValue(numbers);
// console.log(`Maksima qiymat: ${maxValue}`);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Bu masalani internetdan oldim!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 7-question

// 8-question


// function sumArrayValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let value = arr[i];
//         if (typeof value === 'number') {
//             sum += value;
//         } else if (value === undefined) {
//             sum += 0;
//         }
//     }
//     return sum;
// }

// // Funksiyani sinab ko'ramiz
// let arr = [2, 4, 6, 7, true, false, null, undefined];
// let sum = sumArrayValues(arr);
// console.log(`Arrayning son qiymatlari yig'indisi: ${sum}`);


// 8-question



// --------------------------------------------------------2-masala---------------------------------------------------

// 1-question


// let arr = [
//     {
//         name: "Abdulloh",
//         age: 21,
//         status: false
//     },
//     {
//         name: "Botir",
//         age: 18,
//         status: true
//     },
//     {
//         name: "Shokir",
//         age: 12,
//         status: false
//     }
// ];

// function logFalseStatus(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].status === false) {
//             console.log(arr[i]);
//         }
//     }
// }

// logFalseStatus(arr);


// 1-question


// 2-question


// function sumUpTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// let number = 10;
// let sum = sumUpTo(number);
// console.log(`${number} gacha bo'lgan sonlar yig'indisi: ${sum}`);

// let anotherNumber = 100;
// let anotherSum = sumUpTo(anotherNumber);
// console.log(`${anotherNumber} gacha bo'lgan sonlar yig'indisi: ${anotherSum}`);


// 2-question

// 3-question


// function CountNum(arrays) {
//     let counts = {};
//     for (let arr of arrays) {
//         for (let item of arr) {
//             counts[item] = (counts[item] || 0) + 1;
//         }
//     }

//     let takroriy = {};
//     for (let item in counts) {
//         if (counts[item] > 1) {
//             takroriy[item] = counts[item];
//         }
//     }

//     return takroriy;
// }

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];
// let arr3 = [5, 6, 7, 8, 9];

// let arrays = [arr1, arr2, arr3];
// let result = CountNum(arrays);
// console.log('Takroriy elementlar va ularning soni:', result);


// 3-question



// 4-question   ???????????????????????????????????????????



// 5-question

// function Numbers(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }

// let userInput = 7;
// Numbers(userInput);


// 5-question




// ------------------------------------------------------------3-masala---------------------------------------------------------


// 1-question


// function createArrayWithObjects() {
//     let size = parseInt(prompt("Massivning o'lchamini kiriting:"));

//     let array = [];

//     for (let i = 0; i < size; i++) {
//         let id = i + 1;
//         let name = prompt(`ID ${id} uchun NAME kiriting:`);
//         array.push({ id: id, name: name });
//     }

//     console.log(array);
// }

// createArrayWithObjects();


// 1-question



// 2-question ????????????????????????????????????????????????????



// 3-question

// function findIndex(arr) {
//     let num = parseInt(prompt("Array ichidan qidirilayotgan sonni kiriting:"));

//     let index = arr.indexOf(num);

//     if (index !== -1) {
//         console.log(`Son ${num} Arrayning ${index}-indeksda joylashgan.`);
//     } else {
//         console.log(`Son ${num} Arrayning topilmadi.`);
//     }
// }

// let array = [88, 75, 342, 21, 45, 67];
// findIndex(array);

// 3-question



// 4-question


// function removeElement(arr) {
//     let num = parseInt(prompt("Array ichidan o'chiriladigan sonni kiriting:"));

//     let index = arr.indexOf(num);

//     if (index !== -1) {
//         arr.splice(index, 1);
//         console.log(`Yangi array: ${arr}`);
//     } else {
//         console.log(`Son ${num} arrayda topilmadi.`);
//     }
// }

// let array = [88, 75, 342, 21, 45, 67];
// removeElement(array);

// 4-question



// 5-question ???????????????????????????????????????????????????


