console.log(
  "JS #1. Homework. JavaScript Basics: Working with Variables, Data Types",
);

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної: myObj, значення: first: 'First Name', last: 'Last Name'

let myNum = 10;
let myStr = "some string";
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
let myObj = { first: "First Name", last: "Last Name" };

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */
let deciml2 = myNum.toFixed(2);
console.log(deciml2);
// decimal2

/*
 * #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
 * Потім збільште його на 1 та запищіть в цю ж саму змінну.
 */
let myBigInt = 123n;
myBigInt = myBigInt + BigInt(1);
console.log(myBigInt);
// myBigInt

// Задачи по теме "Основные операторы, математика"

// №1

let a = 1,
  b = 1;

let c = ++a; // ?
let d = b++; // ?

// №2

let a = 2;

let x = 1 + (a *= 2);

// №3

"" + 1 + 0;
"" - 1 + 0;
true + false;
6 / "3";
"2" * "3";
4 + 5 + "px";
"$" + 4 + 5;
"4" - 2;
"4px" - 2;
"  -9  " + 5;
"  -9  " - 5;
null + 1;
undefined + 1;
" \t \n" - 2;

// №4

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12
