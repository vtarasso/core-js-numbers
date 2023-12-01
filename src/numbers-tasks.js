/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns an area of a rectangle given by width and height.
 * Надо найти площадь прямоугольника, формула S = a ⋅ b
 * @param {number} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(width, height) {
  return width * height;
}

/**
 * Returns a circumference of circle given by radius.
 * Нужно найти длину окружности зная радиус. Для этого применяем формулу C = 2πr
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCircleCircumference(radius) {
  // Свойство Math.PI представляет отношение длины окружности круга к его диаметру, приблизительно равное 3,14159
  return 2 * Math.PI * radius;
}

/**
 * Returns an average of two given numbers.
 * Нужно вернуть среднее значение двух заданных числе, т.е. разделить пополам 1 значение и второе, сложить их
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
  const a = value1 / 2;
  const b = value2 / 2;
  return a + b;
}

/**
 * Returns a distance between two points by cartesian coordinates.
 * Расстояние между двумя точками в декартовой системе координат можно вычислить
 * с использованием формулы для расстояния между двумя точками в двухмерном пространстве.
 * Формула выглядит следующим образом:
 * A = √ ((X2-X1)²+(Y2-Y1)²).
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  // const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); <- не получилось)
  // Метод Math.sqrt() возвращает квадратный корень числа
  // Метод Math.pow() возвращает основание, возведённое в степень.Math.pow(base, exponent)
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return distance;
}

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 * Линейное уравнение с одной переменной x – это уравнение вида a⋅x+b=0, где a и b
 * – некоторые числа, называемые коэффициентами линейного уравнения.
 * Эта функция вычисляет корень линейного уравнения a⋅x+b=0 для заданных коэффициентов
 * a и b. Вспомним, что корень линейного уравнения можно выразить формулой:
 * x = -b / a
 * Алгоритм решения если а не равно 0, то решением уравнения является x=−b/a;
 * при a≠0 линейное уравнение имеет единственный корень x=−b/a;
 * при a = 0 и b≠0линейное уравнение не имеет корней;
 * при a=0 и b = 0 линейное уравнение имеет бесконечно много корней.
 * По сути в данном случае любое число может стать корнем линейного уравнения.
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
  if (a === 0) {
    throw new Error('Not implemented');
  } else {
    const res = -b / a;
    return res;
  }
}

/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in Cartesian plane.
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 */
function getAngleBetweenVectors(/* x1, y1, x2, y2 */) {
  throw new Error('Not implemented');
}

/**
 * Returns a last digit of a integer number.
 * The input parameter will always be greater than or equal to zero and will be in decimal notation.
 * Эта функция возвращает последнюю цифру целого числа.
 * Для выполнения этой задачи мы можем воспользоваться операцией взятия остатка от деления на 10.
 * Последняя цифра числа именно тот остаток, который мы получим от деления числа на 10.
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
  const res = value % 10;
  return res;
}

/**
 * Returns a number by given string representation.
 * Нужно строку вернуть числом
 * Можно через унарный метод сделать +value
 * либо через функцию parseFloat()
 * Функция parseFloat() принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой)
 * const number = parseFloat(value);
 * Функция parseInt() преобразует строку в число и возвращает целочисленное значение.
 * Number(str)
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
  const res = +value;
  return res;
}

/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 * Чтобы найти диагональ прямоугольного параллелепипеда, мы можем воспользоваться теоремой Пифагора для трехмерного пространства.
 * Обычная теорема Пифагора легко обобщается и на случай трёхмерного пространства.
 * Диагональ прямоугольного параллелепипеда равна корню квадратному из суммы квадратов трёх его измерений.
 * Если размеры параллелепипеда a, b и c, то его диагональ d равна
 * Формула для диагонали d выглядит следующим образом:
 * d = √(a^2 + b^2 + c^2).
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 *
 * @example:
 *   1,1,1   => 1.7320508075688772
 *   3,3,3   => 5.196152422706632
 *   1,2,3   => 3.741657386773941
 */
function getParallelepipedDiagonal(a, b, c) {
  const res = Math.sqrt(a * a + b * b + c * c);
  return res;
}

/**
 * Returns the number rounded to specified power of 10.
 * Насколько я понял задачу у нас есть num и pow, и нужно 10 возвести в pow
 * после чего округлить числа используя то число которое получилось из 10 в степени pow
 * то есть как то так:
 * фактор = 10 в степени pow
 * если число pow положительное то мы делаем так, если отрицательное то так
 * возьмем пример (1678, 3)
 * 10**3 = 1000

 * Math.round(1678 / 1000) => 1,678 => Math.round округляет до 2, дальше 2 * 1000 => 2000!
 * @param {number} num
 * @param {number} pow
 * @return {number}
 *
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
function roundToPowerOfTen(num, pow) {
  const power = 10 ** pow;

  return Math.round(num / power) * power;
}

/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 * Возвращает тру если число простое и фолсе в обратном случае
 * Называется тестом простоты
 * Простое число - это число, которое делится только на 1 и на само себя.
 * Если число делится на другие числа, кроме 1 и самого себя, оно не является простым.
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Tries to convert value to number and returns it if conversion was successful;
 * otherwise returns default value passed as a second argument.
 * Пытается преобразовать значение в число и возвращает его, если преобразование прошло успешно;
 * в противном случае возвращает значение по умолчанию, переданное в качестве второго аргумента.
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(value, def) {
  return +value ? +value : def;
}

/**
 * Returns the cube of the given number.
 * Возвращает куб заданного числа. Изи задача, нужно возвести числов 3 степень
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   3  => 27
 *   -2 => -8
 *   0  => 0
 */
function getCube(num) {
  return num ** 3;
}

/**
 * Returns the Fibonacci number located at the index position.
 *
 * @param {number} index
 * @return {number}
 *
 * @example:
 *   0  => 0
 *   1  => 1
 *   2  => 1
 *   3  => 2
 *   10 => 55
 */
function getFibonacciNumber(/* index */) {
  throw new Error('Not implemented');
}

/**
 * Returns the sum of all numbers from 1 to n.
 * Возвращает сумму всех чисел от 1 до n.
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   5  => 15 // (1+2+3+4+5)
 *   10 => 55 // (1+2+3+...+10)
 *   1  => 1
 */
function getSumToN(n) {
  let sum = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }

  return sum;
}

/**
 * Returns the sum of the digits of a given number.
 * Возвращает сумму цифр заданного числа. Недоконца разобрался
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   123 => 6  // (1+2+3)
 *   202 => 4  // (2+0+2)
 *   5   => 5  // 5
 */
function getSumOfDigits(num) {
  let sum = 0;
  let number = num;
  // Пока число не равно 0
  while (number !== 0) {
    // Извлекаем последнюю цифру и добавляем к сумме
    sum += number % 10;
    // Удаляем последнюю цифру
    number = Math.floor(number / 10);
  }
  return sum;
}

/**
 * Returns true if the given number is a power of two, false otherwise.
 * Возвращает true, если заданное число является степенью двойки, иначе - false.
 * @param {number} num
 * @return {boolean}
 *
 * @example:
 *   4   => true
 *   16  => true
 *   15  => false
 */
function isPowerOfTwo(num) {
  return Math.log2(num) % 1 === 0;
}

/**
 * Returns the sine of a number.
 * Возвращает синус заданного числа.
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   0 => 0
 *   Math.PI / 2 => 1
 */
function getSine(num) {
  // Метод Math.sin() возвращает синус числа.
  return Math.sin(num);
}

/**
 * Returns a string representation of a number in a specified base (radix).
 * Возвращает строковое представление числа в указанном основании (системе счисления).
 * @param {number} number
 * @param {number} base
 * @return {string}
 *
 * @example:
 * 255, 16 => 'ff'
 * 2, 2    => '10'
 */
function numberToStringInBase(number, base) {
  // Используем метод toString с указанием основания
  return number.toString(base);
}

/**
 * Returns a string representation of a number in exponential notation.
 * Возвращает строковое представление числа в экспоненциальной записи
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '1.23e+4'
 */
function toExponential(number, fractionDigits) {
  // Метод toExponential() возвращает строку, представляющую объект Number в экспоненциальной записи.
  // Преобразовываем число в экспоненциальную запись с указанным количеством знаков после запятой
  return number.toExponential(fractionDigits);
}

/**
 * Returns a string representation of a number in fixed-point notation.
 * Возвращает строковое представление числа в формате с фиксированным количеством знаков после запятой.
 * Метод toFixed() форматирует число, используя запись с фиксированной запятой. Переводит число в строку при выводе результата
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '12345.00'
 * 12.345, 1   => '12.3'
 */
function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

/**
 * Returns a string representation of a number in normal (fixed-point or exponential)
 * notation rounded to precision significant digits.
 * Возвращает строковое представление числа в нормальной (фиксированной точности или экспоненциальной) записи,
 * округленное до указанного количества значащих цифр.
 * @param {number} number
 * @param {number} precision
 * @return {string}
 *
 * @example:
 * 12345, 7    => '12345.00'
 * 12.345, 4   => '12.35'
 */
function toPrecision(number, precision) {
  // Метод toPrecision() возвращает строку, представляющую объект Number с указанной точностью.
  // Используем метод toPrecision для форматирования числа с указанной точностью
  return number.toPrecision(precision);
}

/**
 * Returns the primitive value of a Number object.
 * Возвращает примитивное значение объекта Number.
 * Метод valueOf() возвращает примитивное значение указанного объекта, т.е. из непримитивного типа данных делает примитивный тип данных
 * @param {Number} number
 * @param {Number} number
 * @return {number}
 *
 * @example:
 * new Number(5) => 5
 * Number(-5)    => -5
 */
function getNumberValue(number) {
  return number.valueOf();
}

/**
 * Returns a boolean value indicating whether the parameter is a number or not.
 * Возвращает булево значение, указывающее, является ли параметр числом.
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * Infinity => false
 * NaN      => false
 * 0        => true
 * 'a' / 1  => false
 * 'a'      => false
 * 5        => true
 * '5'      => false
 */
function isNumber(number) {
  // Эта функция использует оператор typeof, чтобы проверить, является ли переданный параметр числом, а затем проверяет, является ли число конечным с помощью isFinite
  return typeof number === 'number' && Number.isFinite(number);
  // Функция isNaN() определяет является ли литерал или переменная нечисловым значением (NaN) или нет.
  //  return typeof number === 'number' && !isNaN(number);
}

/**
 * Returns a boolean value indicating whether a number is an integer or not.
 * Возвращает булево значение, указывающее, является ли число целым.
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 5    => true
 * 5.1  => false
 * '5'  => false
 */
function isInteger(number) {
  // Метод Number.isInteger() определяет, является ли переданное значение целым числом.
  return Number.isInteger(number);
}

/**
 * Returns a floating point number or, if the number cannot be parsed from the argument, returns NaN.
 * Возвращает число с плавающей точкой или NaN, если число не может быть извлечено из аргумента.
 * Для извлечения числа из строки можно воспользоваться функцией parseFloat().
 * Эта функция пытается преобразовать строку в число с плавающей точкой. Если преобразование невозможно, она вернет NaN.
 * @param {string} str
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh' => 4.567
 * 'abcdefgh'      => NaN
 */
function getFloatOnString(str) {
  return Number.parseFloat(str);
}

/**
 * Returns an integer of the specified base or, if the number cannot be parsed
 * from the argument, returns NaN.
 * Возвращает целое число в указанной системе счисления или NaN,
 * если число не может быть извлечено из аргумента.
 * @param {string} str
 * @param {number} base
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh', 10  => 4
 * 'abcdefgh', 10       => NaN
 * '1.234', 2           => 1
 * '10', 8              => 8
 */
function getIntegerOnString(str, base) {
  // Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
  return Number.parseInt(str, base);
}

/**
 * Returns whether a number is a safe integer.
 * Возвращает булево значение, указывающее, является ли число "safe integer".
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 10       => true
 * 3.5      => false
 * 2 ** 53  => false
 */
function isSafeInteger(number) {
  // Метод Number.isSafeInteger() определяет, является ли переданное значение безопасным целым числом.
  return Number.isSafeInteger(number);
}

/**
 * Returns the smallest integer less than or equal to a given number.
 * Возвращает наименьшее целое число, меньшее или равное заданному числу.
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.9  => 5
 * -5.1 => -6
 */
function roundToSmallestInteger(number) {
  // Метод Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
  return Math.floor(number);
}

/**
 * Returns the largest integer greater than or equal to a given number.
 * Возвращает наибольшее целое число, большее или равное заданному числу.
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.1  => 6
 * -5.9 => -5
 */
function roundToLargestInteger(number) {
  // Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.
  return Math.ceil(number);
}

/**
 * Returns the value of a number rounded to the nearest integer.
 * Возвращает значение числа, округленное до ближайшего целого числа.
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 6
 * 5.4  => 5
 * -5.5 => -5
 */
function roundToNearestInteger(number) {
  // Метод Math.round() возвращает число, округлённое к ближайшему целому.
  return Math.round(number);
}

/**
 * Returns the integer part of a number by removing any fractional digits.
 * Возвращает целую часть числа, убрав десятичные дроби.
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 5
 * 5.4  => 5
 * -5.5 => -5
 */
function getIntegerPartNumber(number) {
  // Функция Math.trunc() возвращает целую часть числа путём удаления всех дробных знаков.
  return Math.trunc(number);
  // Либо можно использовать приведение к целому типу данных:
  // Функция parseInt() принимает строку в качестве аргумента
  // и возвращает целое число в соответствии с указанным основанием системы счисления.
  // return parseInt(number);
}

/**
 * Returns the sum of numbers.
 * Возвращает сумму переданных чисел.
 * @param {number} x1
 * @param {number} x2
 * @param {number} x3
 * @returns {number}
 *
 * @example:
 * 1, 2, 3       => 6
 * 0.1, 0.2, 0.3 => 0.6
 */
function getSumOfNumbers(x1, x2, x3) {
  const res = x1 + x2 + x3;
  // Метод toFixed() форматирует число, используя запись с фиксированной запятой.
  return res.toFixed(1);
}

/**
 * Returns the largest number.
 * Возвращает наибольшее число из двух заданных.
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 *
 * @example:
 * 1, 2   => 2
 * -5, -6 => -5
 * 0, 5   => 5
 */
function getMaxNumber(firstNumber, secondNumber) {
  // Метод Math.max() возвращает наибольшее из нуля или более чисел.
  return Math.max(firstNumber, secondNumber);
}

/**
 * Returns a random integer in the range from min to max.
 * Возвращает случайное целое число в диапазоне от min до max (включительно).
 * @param {number} min
 * @param {number} max
 * @return {number}
 *
 * @example:
 * 1, 2  => 1 | 2
 * -5, 0 => -5 | -4 | -3 | -2 | -1 | 0
 * -1, 1 => -1 | 0 | 1
 */
function getRandomInteger(min, max) {
  // Используем Math.floor() для округления вниз и Math.random() для получения случайного числа от 0 до 1
  return Math.floor(Math.random() * (max - min + 1)) + min;
  /*
    В этой функции Math.random() возвращает случайное число от 0 (включительно) до 1 (исключительно).
    Умножив его на разницу (max - min + 1), мы получаем случайное число в диапазоне от 0 до (max - min + 1).
    Затем, прибавив min, мы смещаем результат, чтобы он оказался в нужном нам диапазоне.
    И, наконец, Math.floor() используется для округления вниз до ближайшего целого числа.
  */
}

/**
 * Returns the length of the hypotenuse of a right triangle.
 * Возвращает длину гипотенузы прямоугольного треугольника.
 * Длина гипотенузы в прямоугольном треугольнике может быть найдена с использованием теоремы Пифагора:
 * c =  √a^2 + b^2
 * где 'c' - это длина гипотенузы, а 'a' и 'b' - длины катетов.
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 * 3, 4 => 5
 */
function getHypotenuse(a, b) {
  // Метод Math.hypot() возвращает квадратный корень суммы квадратов своих аргументов, то есть
  return Math.hypot(a, b);
}

/**
 * Returns count of odd numbers from zero to the resulting number.
 * The resulting number is taken into account.
 * Возвращает количество нечетных чисел от нуля до заданного числа (включительно).
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 4  => 2
 * 5  => 3
 * 10 => 5
 * 15 => 8
 */
function getCountOfOddNumbers(/* number */) {
  throw new Error('Not implemented');
  /*
    почему то не так решил....
    let count = 0;

    for (let i = 0; i <= number; i += 1) {
      if (i % 2 !== 0) {
        count += 1;
      }
    }

    return count;
  */
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
