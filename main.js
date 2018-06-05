// Whiteboard Problems & Solutions //

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

/*  Take an integer and return the factorial of that integer.
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

/*  */
