let inputCalc = document.querySelector('.pstroka'),
    resultCalc = document.querySelector('.vstroka');

function input(i) {
    inputCalc.value += i;  
}

function deystviye(i) {
    inputCalc.value += act
}

function mainresult(i) {
    let result = document.querySelector('.pstroka').value
    resultCalc.value = eval(result)  
}

function clean() {
    document.querySelector('.pstroka').value = ' '
    document.querySelector('.vstroka').value = ' '
}