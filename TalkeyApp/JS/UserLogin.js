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
        displaySucessMessage("","")
        // para esperar 3 segundos para user ver a mensagem de sucesso
        setTimeout(()=>{
            location.reload();
        },3000);
    } catch(e){
        displayErrorMessage("","");
        // para esperar 5 segundos para user ver a mensagem de erro
        setTimeout(()=>{
            location.reload();
        },5000);
    }
});



// para ler um dos valores selecionados dos radiobuttons da opção aluno ou professor
const getRadioValue = () => {let radio = document.getElementsByName('optradio'); for(let i = 0; i < radio.length; i++){if(radio[i].checked){return radio[i].value}}}

// mensagem de sucesso 
function  displaySucessMessage(div,message) {
    
}

// mensagens de erro
function  displayErrorMessage(div,message) {
    
}


// EXEMPLO PARA DISPLAY MESSAGE
// function displayMessage(modal, message, type) {
//     const divMessage = document.getElementById(modal);
//     divMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
//     // DEMORAR 12 SEGUNDOS PARA DESAPARECER A MENSAGEM
//     setTimeout(() => {
//       divMessage.innerHTML = "";
//     }, 12000);
//   }