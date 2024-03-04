/**
 * @file questions.js
 * @description This file contains programming exercises for Week 1 of the
 *              Mobile Application Development course. It includes a series of
 *              JavaScript challenges that focus on fundamental programming
 *              concepts such as variables, operators, data types, and control
 *              structures.
 *
 *              Students are expected to write their code solutions within this
 *              file in the designated sections for each exercise. The provided
 *              exercises are designed to enhance understanding of basic JavaScript
 *              syntax and problem-solving skills within the context of web and
 *              mobile app development.
 *
 * @author Larry Wen
 * @created [23/02/2024]
 *
 * INSTRUCTIONS:
 * - Follow the prompts for each exercise and write your code in the specified
 *   areas.
 * - Run the provided tests after completing the exercises to check your work.
 * - Do not modify the structure of the file or the provided code snippets.
 * - Seek assistance if you encounter difficulty understanding the exercises or
 *   implementing the solutions.
 */

/**
 * Exercise 1:
 * Write a function named `getCircleArea` that takes a single argument `r`,
 * which represents the radius of a circle. The function should return the
 * area of the circle with the given radius.
 *
 * Area of a circle formula: A = πr^2
 * Use Math.PI for π and ensure you use the correct exponentiation operation.
 *
 * @param {number} r - The radius of the circle.
 * @return {number} The area of the circle.
 */

function getCircleArea(r) {
  // Your implementation here
}

/**
 * Exercise 2:
 * Write a function named `greeting` that takes two parameters. The first parameter
 * is `name`, a string representing the name of the person to greet. The second parameter
 * is `time`, a number representing the hour of the day in 24-hour format limited to
 * the range of [9, 12] for the morning and [13, 17] (1 PM to 5 PM) for the afternoon.
 *
 * The function should return "Good morning, [name]!" if the time is between 9 and 12,
 * inclusive, and "Good afternoon, [name]!" if the time is between 13 and 17, inclusive.
 *
 * @param {string} name - The name of the person to greet.
 * @param {number} time - The hour of the day in 24-hour format.
 * @return {string} The greeting message.
 */

function greeting(name, time) {
  // Your implementation here
}

/**
 * Exercise 3:
 * Write a function named `checkValue` that takes a single parameter `val`.
 * The function should check if the input `val` is truthy, falsy, or nullish (null or undefined).
 *
 * - If `val` is nullish (null or undefined), return "Your input is a nullish value."
 * - If `val` is falsy (but not nullish), return "Your input is a falsy value."
 * - If `val` is truthy, return "Your input is a truthy value."
 *
 *
 * @param {any} val - The value to check.
 * @return {string} A message indicating whether the value is truthy, falsy, or nullish.
 */

function checkValue(val) {
  // Your implementation here
}

/**
 * Exercise 4:
 * Write a function named `wordLengths` that takes a single parameter `sentence`.
 * The function should return an array containing the lengths of each word in the given sentence.
 * Assume the sentence contains only letters and spaces (no digits, punctuation, or special characters).
 *
 * Example: "Hello My World" should return [5, 2, 5].
 *
 * @param {string} sentence - A sentence consisting of words separated by spaces.
 * @return {number[]} An array of numbers representing the length of each word in the sentence.
 */

function wordLengths(sentence) {
  // Your implementation here
}

/**
 * Exercise 5:
 * Write a function named `capitalizeSentence` that takes a single parameter `sentence`.
 * The function should return a new string where the first letter of each word in the given
 * sentence is capitalized. Assume the sentence contains only letters and spaces (no digits,
 * punctuation, or special characters).
 *
 * Example: "hello my world" should return "Hello My World".
 *
 * @param {string} sentence - A sentence consisting of words separated by spaces.
 * @return {string} A new string with each word's first letter capitalized.
 */

function capitalizeSentence(sentence) {
  // Your implementation here
}

/**
 * Exercise 6:
 * Write a function named `rotateArray` that takes two parameters. The first parameter
 * is `array`, an array of integers without any repeated values. The second parameter is
 * `numRotations`, a number representing how many times the array should be rotated.
 * A single rotation moves the last element of the array to the front.
 *
 * Example: rotateArray([1, 2, 3, 4], 1) should return [4, 1, 2, 3].
 *
 * @param {number[]} array - An array of integers.
 * @param {number} numRotations - The number of times the array should be rotated.
 * @return {number[]} The array after being rotated the specified number of times.
 */

function rotateArray(array, numRotations) {
  // Your implementation here
}

/**
 * Exercise 7:
 * Write a function named `animalClassify` that takes two parameters. The first parameter
 * is `type`, a string representing the type of the animal. The second parameter is `weight`,
 * a number representing the weight of the animal in kilograms.
 *
 * The function should return an object with two properties: `type` and `size`.
 * The `size` property is determined by the weight of the animal:
 * - Less than 5kg is considered "small".
 * - 5kg to less than 100kg is considered "big".
 * - 100kg or more is considered "huge".
 *
 * Example: animalClassify("cat", 1) should return {type: "cat", size: "small"}.
 *
 * @param {string} type - The type of the animal.
 * @param {number} weight - The weight of the animal in kilograms.
 * @return {object} An object with the properties `type` and `size`.
 */

function animalClassify(type, weight) {
  // Your implementation here
}

/**
 * Exercise 8:
 * Write a function named `describePerson` that takes a single parameter `person`.
 * The `person` parameter is an object with the following attributes: `name`, `age`, `gender`
 * (with values "m" or "f"), and an optional attribute `hobby`.
 *
 * The function should return a string describing the person. If the person has a hobby,
 * the return string should be formatted as:
 * "[name] is a [age]-year-old [man|woman]. (He|She) likes [hobby]!"
 *
 * If the person does not have a hobby attribute, the return string should be:
 * "[name] is a [age]-year-old [man|woman]. (He|She) has no hobbies."
 *
 * Ensure that the description matches the gender specified in the `gender` attribute.
 *
 * Example:
 * Input: {name: "John", age: 30, gender: "m", hobby: "reading"}
 * Output: "John is a 30-year-old man. He likes reading!"
 *
 * @param {object} person - An object representing a person.
 * @return {string} A string description of the person.
 */

function describePerson(person) {
  // Your implementation here
}

/**
 * Exercise 9:
 * Write a function named `analyzeMarks` that takes a single parameter `marks`.
 * The `marks` parameter is an object where the keys represent subject names (e.g., "Math", "English")
 * and the values are their corresponding marks.
 *
 * The function should return an array containing three numbers:
 * - The lowest mark.
 * - The highest mark.
 * - The average mark, rounded to two decimal places.
 *
 * Example:
 * Input: { Math: 90, English: 85, Science: 92 }
 * Output: [85, 92, 89.00]
 *
 * @param {object} marks - An object representing subjects and their marks.
 * @return {number[]} An array with the lowest mark, highest mark, and average mark.
 */

function analyzeMarks(marks) {
  // Your implementation here
}

/**
 * Exercise 10:
 * Write a function named `check` that takes two arguments: an array of integers `arr`,
 * and a single integer `target`. The function should return an array of two integers
 * that represent the indices of the two numbers in `arr` which add up to `target`.
 *
 * The function should assume that there is exactly one solution, and it should not
 * use the same element twice. The return value should be the pair of indices in ascending order.
 *
 * Example:
 * If `arr` is [11, 12, 13, 14], and `target` is 24, then the function should return [0, 2]
 * because `arr[0] + arr[2]` equals `24`.
 *
 * @param {number[]} arr - An array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} An array containing the pair of indices whose values add up to `target`.
 */

function check(arr, target) {
  // Your implementation here
}

// Export the function for testing
module.exports = {
  getCircleArea,
  greeting,
  checkValue,
  wordLengths,
  capitalizeSentence,
  rotateArray,
  animalClassify,
  describePerson,
  analyzeMarks,
  check,
};
