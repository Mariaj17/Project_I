import * as User from "./Models/UserModel.js"


// SCCRIPT INCOMPLETO !!
// VALIDAÇÕES DO LOGIN
// AO CLICAR NO BOTÃO INICIAR SESSÃO

document.querySelector('.main-login').addEventListener('submit', (event)=>{
    event.preventDefault();
    User.init();
    try{
        // FUNÇÃO LOGIN QUE RECEBE COMO PAREMETROS OS VALORES DOS CAMPOS DE LOGIN
        // PARA VERIFICAR AS CONDIÇÕES NA FUNÇÃO LOGIN NO USERMODEL.JS
        User.login(getRadioValue(), document.querySelector('#username').value, document.querySelector('#psw').value);
         //  PARA A MENSAGEM DE SUCESSO ATRIBUIR VALORES AOS PARAMETROS A DIV E A MENSAGEM ONDE SURGIRÁ A MENSAGEM 
        // DE SUCESSO COM O INNERHTML FAZENDO DISPLAY DA MENSAGEM EDITADA VIA CSS DE SUCESSO
        displaySucessMessage(".login-message",`BEM-VINDO DE VOLTA ${document.querySelector('#username').value}`)
        // para esperar 3 segundos para user ver a mensagem de sucesso
        setTimeout(()=>{
            location.reload();
        },3000);
    } catch(error){
        displayErrorMessage(".login-message",error.message);
    }
});



// para ler um dos valores selecionados dos radiobuttons da opção aluno ou professor
const getRadioValue = () => {let radio = document.getElementsByName('optradio'); for(let i = 0; i < radio.length; i++){if(radio[i].checked){return radio[i].value}}}

// mensagem de sucesso 
function  displaySucessMessage(div,message) {
    const divMessage = document.querySelector(div);
    divMessage.innerHTML = `<div class="sucess-login"><span class="SucessContent">${message}<img class="sucess-icon" src="/Media/images/sucesso-icone.svg"></span></div>
    <div class="flex-loader">
      <div class="loader"></div>
    </div>`
}

// mensagens de erro
function  displayErrorMessage(div,message) {
    const divMessage = document.querySelector(div);
    divMessage.innerHTML = `<div class="fail-login"><span class="FailContent">${message}<img class="fail-icon" src="/Media/images/Close-icon.svg" height="20px"></span></div>
    `
    setTimeout(() =>{
        divMessage.innerHTML = '';
    },3000);
}










