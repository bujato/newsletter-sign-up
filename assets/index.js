let email = document.getElementById("email");
let btn = document.getElementById("btn");
let btnSucess = document.getElementById("btn-success");
let erro = document.getElementById('error');
let fundo = document.getElementById('fundo');
let cardSuccess = document.getElementById('card');
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function setError(){
    email.style.border = '1.5px #d30909 solid'
    email.style.backgroundColor = "#ce51513d"
    erro.style.display = "block"
}

function removeError(){
    email.style.border = ''
    email.style.backgroundColor = "#fff"
    erro.style.display = "none"
}

function success() {
    fundo.style.display = 'none'
    cardSuccess.style.display = 'flex'
}

function verificarEmail() {
    if(emailRegex.test(email.value)) {
        success()
    } else if(email.value == '') {
        removeError()
    } else {
        setError()
    }
}

verificarEmail()

function clickCardBtn() {
    cardSuccess.style.display = 'none'
    fundo.style.display = 'flex'
}
clickCardBtn()