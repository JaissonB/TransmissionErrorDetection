var inputWordOne = document.getElementById('wordOne');
var inputWordTwo = document.getElementById('wordTwo');
var inputWordSum = document.getElementById('wordSum');

function generateRandomNumbers() {
    var num1 = Math.floor(Math.random() * 255);
    var num2 = Math.floor(Math.random() * 255);

    inputWordSum.value = sumWords(num1, num2);

    num1 = defineNumberWithHeightBits(num1.toString(2));
    num2 = defineNumberWithHeightBits(num2.toString(2));

    inputWordOne.value = num1;
    inputWordTwo.value = num2;
}
generateRandomNumbers();

function defineNumberWithHeightBits(num) {
    console.log(num)
    while (num.length < 8) {
        console.log(num)
        num = '0' + num;
    }
    return num;
}

function sumWords(numOne, numTwo) {
    console.log(numOne, numTwo)
    return defineNumberWithHeightBits((numOne + numTwo).toString(2));
}

// inputWordOne.value = (0b001 + 0b011).toString(2);

inputWordOne.addEventListener('keyup', function () {
    inputWordOne.value = inputWordOne.value.replace(/[^0-1]/g,'');
})

inputWordTwo.addEventListener('keyup', function () {
    inputWordTwo.value = inputWordTwo.value.replace(/[^0-1]/g,'');
})

inputWordOne.addEventListener('blur', function () {
    inputWordSum.value = sumWords(parseInt(inputWordOne.value, 2), parseInt(inputWordTwo.value, 2));
})

inputWordTwo.addEventListener('blur', function () {
    inputWordSum.value = sumWords(parseInt(inputWordOne.value, 2), parseInt(inputWordTwo.value, 2));
})
console.log("AIN")