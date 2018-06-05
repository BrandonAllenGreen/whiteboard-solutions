///////////// Whiteboard Problems & Solutions /////////////

/* Write a program that console logs the numbers from 1 to n. But for multiples of three print “fizz”
instead of the number and for the multiples of five print “buzz”. For numbers which are multiples 
of both three and five print “fizzbuzz”. */

const fizzbuzz = n => {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
};

/* Create a func that takes a str & returns a new str with its first & last chars swapped, except under 3 conditions:
1. If the length of the str is less than 2, return "Incompatible.".
2. If the argument is not a str, return "Incompatible.".
3. If the first and last chars are the same, return "Two's a pair.". 
Example: "Cat, dog, and mouse." ➞ ".at, dog, and mouseC" */

const swapFirstLastChars = str => {
  if (typeof str !== 'string' || str.length < 2) {
    return 'Incompatible.';
  } else if (str.charAt(0) === str.charAt(str.length - 1)) {
    return "Two's a pair.";
  } else {
    return (
      str.charAt(str.length - 1) +
      str.substring(1, str.length - 1) +
      str.charAt(0)
    );
  }
};

/* Add up the numbers from a single number.
Example: 1 + 2 + 3 + 4 = 10. */

const addUp = n => {
  if (n === 1) {
    return 1;
  }
  return n + addUp(n - 1);
};

/* Return the factorial of an integer.
Example: 5! = 120 */

const factorial = n => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

/* Take an arr of names and return an arr with the first letter cap'd. 
Example: ["samuel", "MABELLE", "LeTeCiA"] ➞ ["Samuel", "Mabelle", "Letitia"] */

const capFirst = arr => {
  return arr.map(name => {
    return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
  });
};

/* Test if 2 strings are anagrams (case insensitive).
Example: 'Dave Barry', 'Ray Adverb' ➞ true */

const anagramCheck = (str1, str2) => {
  const sortStr = s => {
    return s
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  };
  return sortStr(str1) === sortStr(str2);
};

/* Remove all duplicate integers from arr and sort from least to greatest.
Example: [1, 4, 4, 4, 3, 2, 1, 2] ➞ [1, 2, 3, 4] */

const removeDupesAndSort = arr => {
  const filtered = arr.filter((x, i, a) => {
    return a.indexOf(x) === i;
  });
  return filtered.sort((a, b) => {
    return a - b;
  });
};

/* Find the min, max, length and avg values for a given arr of integers.
Example: [30, 43, 20, 92, 3, 74] ➞ [3, 92, 6, 43.67] */

const minMaxLengthAverage = arr => {
  const sorted = arr.sort((a, b) => {
    return a - b;
  });
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  const len = sorted.length;
  const avg =
    sorted.reduce((count, num) => {
      return count + num;
    }, 0) / len;

  return [min, max, len, +avg.toFixed(2)];
};

/* Create a function that returns true if a number is prime and false if it's not. */

const primeCheck = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

/* Create a func that takes an arr of nums & returns an arr where each num is the sum of itself + all previous nums in the arr. 
Example: [1, 2, 3] ➞ [1, 3, 6] */

const cumulativeSum = arr => {
  let sum = 0;
  return arr.map(num => {
    return (sum += num);
  });
};

/* Create a func that takes 3 arguments (str, strLength, strSuffix) & returns a truncated string. 
Truncated returned string length should adjust to passed length in parameters regardless of length of the suffix.

 str: Original string.
 strLength: Truncated length limit.
 strSuffix: Optional suffix string parameter. 

 Example:  "CatDogDuck", 9, "Rat" ➞ "CatDogRat" */

const strTruncate = (str, strLength, strSuffix) => {
  let truncated;

  if (!strSuffix) {
    truncated = str.substr(0, strLength);
  } else {
    truncated = str.substr(0, strLength - strSuffix.length) + strSuffix;
  }
  return truncated;
};

/*  */
