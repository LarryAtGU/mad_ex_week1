/**
 * @file ex.test.js
 * @description Test suite for Week 1 exercises of the Mobile Application Development
 *              course. This file contains test cases that validate the correctness of
 *              the code written in the exercises. The tests are designed to assess
 *              the functionality of the implemented solutions against specified
 *              requirements and scenarios.
 * @author Larry Wen
 * @created [23/02/2024]
 *
 * NOTE: This file is not intended to be modified by the students. Alterations to this
 * test suite may result in inaccurate assessments of the exercise solutions.
 */

const {
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
} = require("./questions");

describe("Exercise 1: getCircleArea Function", () => {
  test("returns the correct area for radius 1", () => {
    expect(getCircleArea(1)).toBeCloseTo(Math.PI * 1 * 1, 5);
  });

  test("returns the correct area for radius 5", () => {
    expect(getCircleArea(5)).toBeCloseTo(Math.PI * 5 * 5, 5);
  });

  test("returns the correct area for radius 10", () => {
    expect(getCircleArea(10)).toBeCloseTo(Math.PI * 10 * 10, 5);
  });
});

describe("Exercise 2: greeting Function", () => {
  test("returns Good morning message for time within [9, 12]", () => {
    expect(greeting("Alice", 9)).toBe("Good morning, Alice!");
    expect(greeting("Bob", 12)).toBe("Good morning, Bob!");
  });

  test("returns Good afternoon message for time within [13, 17]", () => {
    expect(greeting("Charlie", 13)).toBe("Good afternoon, Charlie!");
    expect(greeting("Dana", 17)).toBe("Good afternoon, Dana!");
  });
});

describe("Exercise 3: checkValue Function", () => {
  test("returns correct message for nullish values", () => {
    expect(checkValue(null)).toBe("Your input is a nullish value.");
    expect(checkValue(undefined)).toBe("Your input is a nullish value.");
  });

  test("returns correct message for falsy values", () => {
    expect(checkValue("")).toBe("Your input is a falsy value.");
    expect(checkValue(0)).toBe("Your input is a falsy value.");
    expect(checkValue(false)).toBe("Your input is a falsy value.");
    // Note: NaN is a special case that may need to be stringified if you want to include it in the output
  });

  test("returns correct message for truthy values", () => {
    expect(checkValue("hello")).toBe("Your input is a truthy value.");
    expect(checkValue(1)).toBe("Your input is a truthy value.");
    expect(checkValue([])).toBe("Your input is a truthy value."); // Arrays are truthy, but displaying them might need special handling
  });
});

describe("Exercise 4: wordLengths Function", () => {
  test("correctly returns the lengths of each word in a sentence", () => {
    expect(wordLengths("Hello My World")).toEqual([5, 2, 5]);
    expect(wordLengths("This is a test")).toEqual([4, 2, 1, 4]);
    expect(wordLengths("")).toEqual([]);
    expect(wordLengths("JavaScript")).toEqual([10]);
  });
});

describe("Exercise 5: capitalizeSentence Function", () => {
  test("correctly capitalizes each word in a sentence", () => {
    expect(capitalizeSentence("hello my world")).toBe("Hello My World");
    expect(capitalizeSentence("this is a test")).toBe("This Is A Test");
    expect(capitalizeSentence("a")).toBe("A");
    expect(capitalizeSentence("")).toBe("");
  });
});
describe("Exercise 6: rotateArray Function", () => {
  test("correctly rotates the array 1 time", () => {
    expect(rotateArray([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]);
  });

  test("correctly rotates the array multiple times", () => {
    expect(rotateArray([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2]);
    expect(rotateArray([1, 2, 3, 4], 3)).toEqual([2, 3, 4, 1]);
  });

  test("handles rotation more than the length of the array", () => {
    expect(rotateArray([1, 2, 3, 4], 5)).toEqual([4, 1, 2, 3]);
  });

  test("returns the same array for zero rotations", () => {
    expect(rotateArray([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
  });
});

describe("Exercise 7: animalClassify Function", () => {
  test("correctly classifies a small animal", () => {
    expect(animalClassify("cat", 1)).toEqual({ type: "cat", size: "small" });
    expect(animalClassify("rabbit", 4)).toEqual({
      type: "rabbit",
      size: "small",
    });
  });

  test("correctly classifies a big animal", () => {
    expect(animalClassify("dog", 10)).toEqual({ type: "dog", size: "big" });
    expect(animalClassify("sheep", 50)).toEqual({ type: "sheep", size: "big" });
  });

  test("correctly classifies a huge animal", () => {
    expect(animalClassify("elephant", 1000)).toEqual({
      type: "elephant",
      size: "huge",
    });
    expect(animalClassify("cow", 250)).toEqual({ type: "cow", size: "huge" });
  });
});

describe("Exercise 8: describePerson Function", () => {
  test("correctly describes a person with a hobby", () => {
    expect(
      describePerson({ name: "John", age: 30, gender: "m", hobby: "reading" })
    ).toBe("John is a 30-year-old man. He likes reading!");
    expect(
      describePerson({ name: "Alice", age: 25, gender: "f", hobby: "cycling" })
    ).toBe("Alice is a 25-year-old woman. She likes cycling!");
  });

  test("correctly describes a person without a hobby", () => {
    expect(describePerson({ name: "Bob", age: 20, gender: "m" })).toBe(
      "Bob is a 20-year-old man. He has no hobbies."
    );
    expect(describePerson({ name: "Sara", age: 22, gender: "f" })).toBe(
      "Sara is a 22-year-old woman. She has no hobbies."
    );
  });
});

describe("Exercise 9: analyzeMarks Function", () => {
  test("correctly analyzes marks for given subjects", () => {
    expect(analyzeMarks({ Math: 95, English: 80, Science: 90 })).toEqual([
      80, 95, 88.33,
    ]);
    expect(analyzeMarks({ History: 70, Geography: 85, Art: 78 })).toEqual([
      70, 85, 77.67,
    ]);
  });

  test("handles a single subject", () => {
    expect(analyzeMarks({ Math: 100 })).toEqual([100, 100, 100]);
  });

  test("returns [0, 0, 0] for an empty object", () => {
    expect(analyzeMarks({})).toEqual([0, 0, 0]);
  });
});

describe("Exercise 10: check Function", () => {
  test("finds the correct indices for a given target sum", () => {
    expect(check([11, 12, 13, 14], 24)).toEqual([0, 2]);
    expect(check([3, 2, 4], 6)).toEqual([1, 2]);
    expect(check([1, 4, 5, 3, 2], 7)).toEqual([1, 3]);
    expect(check([4, 3, 2, 7], 9)).toEqual([2, 3]);
  });
});
