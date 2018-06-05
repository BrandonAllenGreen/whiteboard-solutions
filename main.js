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
