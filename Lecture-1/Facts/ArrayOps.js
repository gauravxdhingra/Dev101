let arr = [2, 6, 17, 28, 46, 68];

// map => odd=>-1 , even=>+1
// filter=>used mapped arr=> filter prime arr

function transform(num) {
    if (num % 2 == 0) {
        return ++num;
    } else
        return --num;
}

function filterPrime(number) {
    for (let div = 2; div * div <= number; div++) {
        if (number % div == 0) {
            // console.log("Number is not prime");
            return false;
        }
        return true;
        // console.log("Number is prime");
    }
}

let transformedArr = arr.map(transform);
const primeArr = transformedArr.filter(filterPrime);
console.log(transformedArr);
console.log(primeArr);

// mymap
// myfilter

function squarer(x){
    return x*x;
}

mymap(arr, squarer){
    
}