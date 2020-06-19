function largestPalindromeProduct(n) {
    let ndigit = '9'.repeat(n);
    let palindromes = [];
    for (let i = ndigit; i > 1; i--) {
      for (let j = ndigit; j > 1; j--) {
        let number =  i * j;
        let reversed = [...String(number)].reverse().join("");
        if (number == reversed) {
          palindromes.push(number);
          break;
        }
      }
    }
    console.log(Math.max(...palindromes));
    return Math.max(...palindromes);
  }
  
  largestPalindromeProduct(2);
  largestPalindromeProduct(3);

/*
Project Euler: Problem 4: Largest palindrome product
A palindromic number reads the same both ways. The largest palindrome made 
from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

/* tests */
/*
largestPalindromeProduct(2) should return a number.
largestPalindromeProduct(2) should return 9009.
largestPalindromeProduct(3) should return 906609.
*/