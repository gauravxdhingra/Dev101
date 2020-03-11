let num = 1
function printIncreasing(max) {

    if (num == max+1) return;
    printIncreasing(num + 1);
    console.log(num);
   
   
}

printIncreasing(5);