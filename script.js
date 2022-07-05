let inputWordOne = document.getElementById('wordOne');
let inputWordTwo = document.getElementById('wordTwo');
let inputWordSum = document.getElementById('wordSum');
let inputWordOneTransmited = document.getElementById('wordOneTransmited');
let inputWordTwoTransmited = document.getElementById('wordTwoTransmited');
let inputWordSumInverted = document.getElementById('wordSumInverted');
let inputWordSumInverted2 = document.getElementById('wordSumInverted2');
let inputWordSumReceived = document.getElementById('wordSumReceived');
let inputWordResult = document.getElementById('wordResult');
let spanResultTransmission = document.querySelector('.resultTransmission');
let optionsTransmissionStatus = document.querySelectorAll('.optionStatus');
let buttonToTransmit = document.getElementById('toTransmit');
let transmissionCorrect = false;

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

buttonToTransmit.addEventListener('click', function () {
    let whatWordIncorret;
    let numOfError = Math.floor(Math.random() * 7) + 1;
    if (transmissionCorrect) {
        inputWordOneTransmited.value = inputWordOne.value;
        inputWordTwoTransmited.value = inputWordTwo.value;
    } else if (!transmissionCorrect) {
        whatWordIncorret = Math.round(Math.random());
        if (!whatWordIncorret) {
            inputWordOneTransmited.value = sumWords(parseInt(inputWordOne.value, 2), numOfError);
            inputWordTwoTransmited.value = inputWordTwo.value;
        } else {
            inputWordOneTransmited.value = inputWordOne.value;
            inputWordTwoTransmited.value = sumWords(parseInt(inputWordTwo.value, 2), numOfError);
        }
    }
    inputWordSumInverted.value = invertSum(document.getElementById('wordSum').value);
    inputWordSumInverted2.value = inputWordSumInverted.value;
    
    inputWordSumReceived.value = sumWords(parseInt(inputWordOneTransmited.value, 2), parseInt(inputWordTwoTransmited.value, 2));
    inputWordResult.value = sumWords(parseInt(inputWordSumInverted2.value, 2), parseInt(inputWordSumReceived.value, 2));
    verifyResult();
    setTransmissionStatus();
})

function generateRandomNumbers() {
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);

    inputWordSum.value = sumWords(num1, num2);

    num1 = defineNumberWithHeightBits(num1.toString(2));
    num2 = defineNumberWithHeightBits(num2.toString(2));

    inputWordOne.value = num1;
    inputWordTwo.value = num2;
}
generateRandomNumbers();
setTransmissionStatus();

function defineNumberWithHeightBits(num) {
    while (num.length < 8) {
        num = '0' + num;
    }
    return num;
}

function sumWords(numOne, numTwo) {
    return defineNumberWithHeightBits((numOne + numTwo).toString(2));
}

function setTransmissionStatus() {
    if (optionsTransmissionStatus[0].checked) {
        transmissionCorrect = true;
    } else if (optionsTransmissionStatus[1].checked) {
        transmissionCorrect = false;
    } else {
        transmissionCorrect = Math.round(Math.random());
    }
}

function invertSum(wordSum) {
    let wordInverted = '';
    for (let i = 0; i < wordSum.length; i++) {
        if (wordSum[i] === '0') wordInverted += '1';
        else if (wordSum[i] === '1') wordInverted += '0';
    }
    return wordInverted;
}

function verifyResult() {
    let thisWord = inputWordResult.value;
    let transmissionIsValid = true;
    for (let i = 0; i < thisWord.length; i++) {
        if (thisWord[i] === '0') {
            transmissionIsValid = false;
        }
    }
    
    if (transmissionIsValid) {
        inputWordResult.classList.remove('resultIncorrect');
        inputWordResult.classList.add('resultCorrect');
        spanResultTransmission.style.color = '#00FF00';
        spanResultTransmission.textContent = 'Transmissão CORRETA!';
    } else {
        inputWordResult.classList.remove('resultCorrect');
        inputWordResult.classList.add('resultIncorrect');
        spanResultTransmission.style.color = '#FF0000';
        spanResultTransmission.textContent = 'Transmissão INCORRETA!';
    }
}