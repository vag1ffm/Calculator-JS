let inputCalc = document.querySelector('.stroka')
let stroka = ''
let memory = ''


function input(i) {
    memory += i
    inputCalc.value = '';
    inputCalc.value = memory;
    console.log(stroka)
}

function fznak(i) {
    stroka+= document.querySelector('.stroka').value
    stroka += i
    console.log(stroka)
    memory = ''
}

function mainresult(i) {
    stroka+= document.querySelector('.stroka').value
    console.log(stroka)
    inputCalc.value = eval(stroka)
    stroka = inputCalc.value
    memory = ''
}

function clean() {
    inputCalc.value = ''
    stroka = ''
    memory= ''
}

function dlo() {
    inputCalc.value = inputCalc.value.slice(0, -1)
}
