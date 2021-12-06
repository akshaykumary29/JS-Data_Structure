const prompt = require(`prompt-sync`)();

let isPrime = 0;
let arrOfPrimeFactor = [];
let number = parseInt(prompt("Enter any number to print its prime factors: "));

for (let i = 2; i <= number; i++) {
   let a = number % i;
   if (a == 0) {
       isPrime = 1;
       for (let j = 2; j <= i / 2; j++) {
           let b = i % j;
           if (b == 0) {
               isPrime = 0;
               break;
           }
       }
       if (isPrime == 1) {
           arrOfPrimeFactor.push(i);
       }
   }
}
if (isPrime == 0 || isPrime == 1) {
    console.log(arrOfPrimeFactor);
}