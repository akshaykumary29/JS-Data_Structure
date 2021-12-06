function repeatedNumber() {
    let arrOfRepeatedNumber = [];
    for (let i = 1; i <= 100; i++) {
       if (i % 11 == 0) {
           arrOfRepeatedNumber.push(i);
       }
    }
    console.log(`Repeated numbers from 1 to 100 are : ${arrOfRepeatedNumber}`);
}
repeatedNumber();
