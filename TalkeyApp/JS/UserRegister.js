import * as User from "./Models/UserModel.js"

// SCRIPT INCOMPLETO !!
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
        //APÓS SUCESSO NO REGISTRO
        User.add(typeUser,registerUser, registerPassword,emailUser,genderUser)
        //  PARA A MENSAGEM DE SUCESSO ATRIBUIR VALORES AOS PARAMETROS A DIV E A MENSAGEM ONDE SURGIRÁ A MENSAGEM 
        // DE SUCESSO COM O INNERHTML FAZENDO DISPLAY DA MENSAGEM EDITADA VIA CSS DE SUCESSO
        dispayMessageRegisterSucess("","");
        //esperar 3 segundos para a visualização da mensagem de sucesso de registro
        setTimeout(()=>{
            location.reload();
        }, 3000);
        // APÓS A VERIFICAÇÃO DE UMA ANOMALIA NOS CAMPOS DA PASSWORD RECOLHE O ERRO
    } catch(e){
            //  PARA A MENSAGEM DE SUCESSO ATRIBUIR VALORES AOS PARAMETROS A DIV E A MENSAGEM ONDE SURGIRÁ AS MENSAGEM 
        // DE ERRO COM O INNERHTML FAZENDO DISPLAY DA MENSAGEM EDITADA VIA CSS DE ERROS
        dispayMessagePasswordAlert("","")
    }
    
})


// // para ler um dos valores selecionados dos radiobuttons da opção aluno ou professor
// arrow functions !!
const getRadioValue = () => {let radio = document.getElementsByName('optradio'); for(let i = 0; i < radio.length; i++){if(radio[i].checked){return radio[i].value}}}
// para ler um dos valores selecionados do select option do género
const getGenrerValue = () => {let select = document.getElementById('genrer'); for(let i = 0; i < select.length; i++){if(select[i].selected){return select[i].value}}};


// mensagem de sucesso
function dispayMessageRegister(div,message) {

}

// mensagens de erro da password
function dispayMessagePasswordAlert(div,message){
    
}