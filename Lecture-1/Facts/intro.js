let number=20;
for (let div = 2; div*div <= number; div++) {
    if(number%div==0){
        console.log("Number is not prime");
        return;
    }
    console.log("Number is prime");
}

var opn=require('opn')
opn('https://www.facebook.com')
