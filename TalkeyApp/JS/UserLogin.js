import * as User from "./Models/UserModel.js"

// VALIDAÇÕES DO REGISTRO
// AO CLICAR NO BOTÃO INICIAR SESSÃO

document.querySelector('.main-login').addEventListener('submit', (event)=>{
    event.preventDefault();
    User.init();
    try{
        User.login()
    }
})



// para ler um dos valores selecionados dos radiobuttons da opção aluno ou professor
const getRadioValue = () => {let radio = document.getElementsByName('optradio'); for(let i = 0; i < radio.length; i++){if(radio[i].checked){return radio[i].value}}}

document.querySelector('.main-login').addEventListener('submit',(event,type,user,password)=>{
event.preventDefault();
const typeUser = getRadioValue()
const username  = document.querySelector('#username').value
const psw = document.querySelector('#psw').value;
type = typeUser;
user = username;
password = psw;

setTimeout(()=>{console.log(type,user,password)},3000)


})
