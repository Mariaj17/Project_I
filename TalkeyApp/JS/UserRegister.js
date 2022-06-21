import * as User from "./Models/UserModel.js"


// VALIDAÇÕES DO REGISTRO
// AO CLICAR NO BOTÃO CRIAR CONTA

document.querySelector('.main-register')?.addEventListener('submit',(event)=>{
    event.preventDefault();
    User.init();
    // DADOS DOS CAMPOS
    const typeUser = getRadioValue();
    const registerUser = document.querySelector("#username").value;
    const registerPassword = document.querySelector("#psw").value;
    const registerPassword2 = document.querySelector("#confirmpsw").value;
    const emailUser = document.querySelector("#email").value;
    const genderUser = getGenrerValue();

    try{
        if(registerPassword != registerPassword2){
            throw Error("PASSWORDS NÃO CORRESPONDEM !!");
        }
        else if(registerPassword.length < 8){
            throw Error("PASSWORD DEVE CONTER NO MÍNIMO 8 CARACTERES !!");
        }
        //PARA VERIFICAR AS CONDIÇÕES NA FUNÇÃO ADD NO USERMODEL.JS
        User.add(typeUser,registerUser, registerPassword,emailUser,genderUser)
        //  PARA A MENSAGEM DE SUCESSO ATRIBUIR VALORES AOS PARAMETROS A DIV E A MENSAGEM ONDE SURGIRÁ A MENSAGEM 
        // DE SUCESSO COM O INNERHTML FAZENDO DISPLAY DA MENSAGEM EDITADA VIA CSS DE SUCESSO
        dispayMessageRegisterSucess(".register-message",`REGISTRADO COM SUCESSO, BEM-VINDO ${registerUser} A TALKEY`);
        
        // ---------------REGISTRO COM SUCESSO RECARREGAR A PÁGINA PARA HOME
        //esperar 5 segundos para a visualização da mensagem de sucesso de registro
        setTimeout(()=>{
            location.reload();
            window.location.href = "/HTML/Index.html";
        }, 5000);
        // SE VERIFICAR ALGUM ERRO É LANÇADO PARA O CATCH
    } catch(error){
            //  PARA A MENSAGEM DE ERRO ATRIBUIR VALORES AOS PARAMETROS A DIV E A MENSAGEM ONDE SURGIRÁ AS MENSAGEM 
        // DE ERRO COM O INNERHTML FAZENDO DISPLAY DA MENSAGEM EDITADA VIA CSS DE ERROS
        dispayMessageAlert(".register-message",error.message)
    }
    
})


// // para ler um dos valores selecionados dos radiobuttons da opção aluno ou professor
// arrow functions !!
const getRadioValue = () => {let radio = document.getElementsByName('optradio'); for(let i = 0; i < radio.length; i++){if(radio[i].checked){return radio[i].value}}}
// para ler um dos valores selecionados do select option do género
const getGenrerValue = () => {let select = document.getElementById('genrer'); for(let i = 0; i < select.length; i++){if(select[i].selected){return select[i].value}}};


// mensagem de sucesso
function dispayMessageRegisterSucess(div,message) {
 const divMessage = document.querySelector(div);
 divMessage.innerHTML = `<div class="sucess-register"><span class="SucessContent">${message}<img class="sucess-icon" src="/Media/images/sucesso-icone.svg"></span></div>
 <div class="flex-loader">
 <div class="loader"></div>
 </div>`
}

// mensagens de erro
function dispayMessageAlert(div,message){
const divMessage = document.querySelector(div);
divMessage.innerHTML = `<div class="fail-register"><span class="FailContent">${message}<img class="fail-icon" src="/Media/images/Close-icon.svg" height="20px"></span></div>
`
 setTimeout(() => {
    divMessage.innerHTML = '';
 },3000);
}

