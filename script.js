let inputCalc = document.querySelector('.pstroka'),
    resultCalc = document.querySelector('.vstroka');

function input(i) {
    inputCalc.value = inputCalc.value + i;  
}

let num1;
let act;
function deystviye(i) {
    num1 = document.querySelector('.pstroka').value
    act = i
    inputCalc.value += act
}

let num2;

function mainresult(i) {
    num2 = document.querySelector('.pstroka').value
    
    let a = num1 + act + num2
    resultCalc.value = eval(a)
}

function clean() {
    document.querySelector('.pstroka').value = ' '
    document.querySelector('.vstroka').value = ' '
}