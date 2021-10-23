var display = ''
var result = 0
document.querySelector('#display').value = 0

function button(token) {
    display = document.querySelector('#display').value 
    if (display == 0) {
        document.querySelector('#display').value = ''
    }
    display = document.querySelector('#display').value += token
}

function clean() {
    document.querySelector('#display').value = 0
    display = ''
    result = 0
}

function calculate() {
    if (display != '') {
        result = eval(display)
    }
    display = ''
    document.querySelector('#display').value = result
    result = 0
}
