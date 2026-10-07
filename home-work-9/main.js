/*
1. Функция с несколькими возвращаемыми значениями
Написать функцию stats(numbers), которая принимает список чисел и возвращает одновременно минимум, максимум и среднее (через кортеж/несколько return-значений). 
Внутри — обычный цикл по списку, без рекурсии. 
Тренирует return нескольких значений и распаковку результата при вызове.
*/

function stats(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);
  let middle = (a + b + c) / 3;

  let numbers = {
    minimum: min,
    maximum: max,
    average: middle,
  };
  return numbers;
}

console.log(stats(1, 2, 3));

/*
2. Функция с параметром по умолчанию и произвольным числом аргументов
Написать функцию total_price(price, discount=0, *extra_fees), которая считает итоговую цену с необязательной скидкой (в %) и произвольным числом дополнительных сборов. 
Тренирует параметры по умолчанию и *args.
*/
/*
let price = +prompt("Enter the product price:");
let discount = +prompt("Enter the discount in %:");
let extra_fees = +prompt("Enter the additional fees:");
function total_price(price, discount = 0, extra_fees) {
  if (discount > 0 && extra_fees > 0) {
    return price - (price * discount) / 100 + extra_fees;
  } else if (discount > 0) {
    return price - (price * discount) / 100;
  } else if (extra_fees > 0) {
    return price + extra_fees;
  } else {
    return price;
  }
}
console.log("Total price:", total_price(price, discount, extra_fees));
*/
/*
3. Проверка числа на простоту
Написать функцию is_prime(n), которая принимает число и возвращает True/False — является ли оно простым. 
Внутри — обычный цикл (for/while) с проверкой делителей до √n и return False при первом найденном делителе. 
Тренирует ранний return и работу с булевым результатом.
*/
function is_prime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(is_prime(2));
console.log(is_prime(6));
/*
function is_prime(number) {
  for (let i = 2; i <= number; i++) {
    if (number % i !== 0) {
      return true;
    } else if (number % i === 0) {
      return false;
    }
  }
}

console.log(is_prime(3));
console.log(is_prime(6));
*/
/*
4. Проверка данных: функция-валидатор
Написать функцию is_valid_password(password), которая проверяет строку по нескольким условиям (длина ≥ 8, есть цифра, есть заглавная буква, нет пробелов) и возвращает True/False. 
Затем написать вторую функцию password_errors(password), которая вместо булева значения возвращает список текстовых причин, почему пароль не прошёл проверку. 
Тренирует разные виды return в зависимости от задачи.
*/

/*
5. Функция с несколькими параметрами и вычислением по формуле
Написать функцию bmi(weight, height), которая считает индекс массы тела по формуле weight / height² и возвращает число. 
Затем написать вторую функцию bmi_category(bmi_value), которая принимает результат первой и возвращает текстовую категорию («недостаток», «норма», «избыток», «ожирение»). 
Тренирует передачу параметров и вызов одной обычной функции из другой (без рекурсии — вторая функция не вызывает саму себя и не вызывает первую).
*/

/*
4. Угадай число (эмуляция do-while)
Сгенерировать случайное число от 1 до 100 и в цикле «повторять, пока не угадано» запрашивать у пользователя число, сообщая «больше»/«меньше». 
Так как во многих языках нет do-while, нужно правильно организовать цикл с постусловием через while True + break.
*/
/*
let randomNumber = Math.floor(Math.random() * 100) + 1; // Генерация рандомного числа от 1 до 100 // Генерация рандомного числа от 1 до 100
let userInput; // Зопрос числа
let userNumber; // Из string в number
do {
  userInput = +prompt("Introduce number 1 to 100:"); // Зопрос числа

  if (randomNumber === userInput) {
    alert("Good job! You guessed the number!");
    break;
  } else if (randomNumber > userInput) {
    alert("More");
  } else if (randomNumber < userInput) {
    alert("Less");
  }
} while (randomNumber !== userInput);
*/
/*
// Используйте forцикл для вывода четных чисел от 2 до 10
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

for (
  let num = +prompt("Введите число больше 100:");
  num < 100 || isNaN(num);
  num = +prompt("Введите число больше 100:")
) {
  if (isNaN(num)) {
    alert("is letter");
  }
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

function pow(x, n) {
  return x ** n;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

*/
