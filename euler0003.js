function largestPrimeFactor(number) {
    let primefactor = 2;
    while (primefactor < number) {
        while (number % primefactor == 0) {
            number = number / primefactor;
            //console.log("prime factor: " + primefactor);
            //console.log("result: " + number);
        }
        if (number != 1)
        {
            primefactor++;
        }
    }
    console.log(primefactor);
    return primefactor;
}

largestPrimeFactor(2)
largestPrimeFactor(3)
largestPrimeFactor(5)
largestPrimeFactor(7)
largestPrimeFactor(8)
largestPrimeFactor(13195)
largestPrimeFactor(600851475143)


/* 
Project Euler: Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/

/* tests */
/*
largestPrimeFactor(2) should return a number.
largestPrimeFactor(2) should return 2.
largestPrimeFactor(3) should return 3.
largestPrimeFactor(5) should return 5.
largestPrimeFactor(7) should return 7.
largestPrimeFactor(8) should return 2.
largestPrimeFactor(13195) should return 29.
largestPrimeFactor(600851475143) should return 6857.
*/