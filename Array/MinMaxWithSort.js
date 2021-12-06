function minMaxWithSort() {
    let arrOfRandomNumber = [];
    for (let i = 0; i < 10; i++) {
        randomNumber = Math.floor(Math.random() * 899 + 100);
        arrOfRandomNumber.push(randomNumber);
    }
    arrOfRandomNumber.sort();
    console.log(`10 Random numbers in sorted order are : ${arrOfRandomNumber}`);
    console.log(`Second largest element is : ${arrOfRandomNumber[8]}`);
    console.log(`Second smallest element is : ${arrOfRandomNumber[1]}`);
}
minMaxWithSort();