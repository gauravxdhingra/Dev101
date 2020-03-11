function printDecreasing(num) {

    if(num==0)return;

    console.log(num);
    printDecreasing(num-1);
}

printDecreasing(5);