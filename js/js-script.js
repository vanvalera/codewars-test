// Task #1
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// function sumTwoSmallestNumbers(numbers) {
//   let minScore1 = Infinity;
//   let minScore2 = Infinity;

//   for (const number of numbers) {
//     if (number < minScore1) {
//       minScore2 = minScore1;
//       minScore1 = number;
//     } else if (number < minScore2) {
//       minScore2 = number;
//     }
//   }

//   console.log(minScore1);
//   console.log(minScore2);
//   return minScore1 + minScore2;
// }
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
// console.log(sumTwoSmallestNumbers([2, 0, 23, 8, 4, 10]));
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));

// Task #2

// function fireFight(s) {
//   if (s.includes("Fire")) {
//     return s.replaceAll("Fire", "~~");
//   }
//   return s;
// }

// console.log(
//   fireFight(
//     "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"
//   )
// );

// Task #3
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

// function past(h, m, s) {
//   const hours = 1000 * 60 * 60 * h;
//   const minutes = 1000 * 60 * m;
//   const seconds = 1000 * s;
//   return hours + minutes + seconds;
// }
// console.log(past(0, 1, 1));
// console.log(past(1, 1, 1));
// console.log(past(1, 0, 0));
//   Task #4

// function nbYear(p0, percent, aug, p) {
//   console.log(p0);
//   console.log(percent);
//   console.log(aug);
//   console.log(p);
//   const newPercent = percent * 0.01;
//   let years = 0;
//   let population = p0;

//   while (population < p) {
//     population = population * (1 + newPercent) + aug;
//     population = Math.floor(population);
//     years++;
//   }
//   return years;
// }
// console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 0.25, 1000, 2000000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
// console.log(nbYear(1000, 2, 50, 1214));
