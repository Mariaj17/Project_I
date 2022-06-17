import * as User from "../JS/Models/UserModel.js"


// VALIDAÇÕES DO REGISTRO
// AO CLICAR NO BOTÃO CRIAR CONTA

document.querySelector('.main-register')?.addEventListener('submit',(event)=>{
    event.preventDefault();
    User.init();
    // DADOS DOS CAMPOS
    const registerUser = document.querySelector("#username").value;
    const registerPassword = document.querySelector("#psw").value;
    const registerPassword2 = document.querySelector("#confirmpsw").value;

    try{
        if(registerPassword != registerPassword2){
            throw Error("Password e Confirmar Password não correspondem !!");
        }
        else if(registerPassword.length < 8){
            throw Error("Password deve conter no mínimo 8 caracteres !!");
        }
        //APÓS SUCESSO NO REGISTRO
        User.add(registerUser, registerPassword)
        // alterar
        dispayMessageRegisterSucess("","");
        //esperar 2 segundos para a visualização da mensagem de sucesso de registro
        setTimeout(()=>{
            location.reload();
        }, 2000);
        // APÓS A VERIFICAÇÃO DE UMA ANOMALIA NOS CAMPOS DA PASSWORD
    } catch(e){
        // alterar
        dispayMessagePasswordAlert("","")
    }
    
})

function dispayMessageRegister(div,message) {

}

function dispayMessagePasswordAlert(div,message){
    
}