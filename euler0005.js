function smallestMult(n) {
    let smallest = n;
    let flag = true;
    while (flag) {
        let i = n;
        while (smallest % i == 0 && i > 0) {
            i--;
            if (i === 1) {
                flag = false;
                break;
            }
        }
      smallest++;
    }
    console.log(smallest-1);
    return smallest-1;
}
  
    smallestMult(5)  
    smallestMult(7)  
    smallestMult(10)  
    smallestMult(13)  
    smallestMult(20)

/* 
Project Euler: Problem 5: Smallest multiple
2520 is the smallest number that can be divided by each 
of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible 
by all of the numbers from 1 to n?
*/

/* tests */
/*
smallestMult(5) should return a number.
smallestMult(5) should return 60.
smallestMult(7) should return 420.
smallestMult(10) should return 2520.
smallestMult(13) should return 360360.
smallestMult(20) should return 232792560.
*/