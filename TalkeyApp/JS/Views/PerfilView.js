import * as User from "../Models/UserModel.js"

function showuser(){
    let user = document.querySelector('#username');
    user.innerHTML = `${User.getUserLogged().username}`
}


function showprogress() {
    let progress= document.querySelector('.progress');
    progress.innerHTML = `<div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">0%</div>`
}



// para mostar o username na tab do browser
let Tabname = document.querySelector('#user');
Tabname.innerHTML = `${User.getUserLogged().username} || Talkey `

// alterar password
document.querySelector('#change').addEventListener('submit',(event)=>{
    event.preventDefault();
    User.init();
    const changepsw = document.getElementById('Changepsw').value;
    const newpsw = document.getElementById('confirmNewpsw').value;

    try{
        if(changepsw != newpsw){
            throw Error("PASSWORDS NÃO CORRESPONDEM");
        }
        User.changePsw(changepsw);
        displayMessageSucess('.message-change',"ALTERADA COM SUCESSO");
    
        setTimeout(() =>{
            location.reload();
        },5000);
    }catch(error){
        displayMessageWrong(".message-change",error.message);
    }

})


function displayMessageSucess(div,message) {
      const divmessage = document.querySelector(div);
      divmessage.innerHTML = `<span class="pit">${message}</span>`

      setTimeout(() =>{
        divmessage.innerHTML = "";
      },5000);
}

function displayMessageWrong(div,message) {
    const divmessage = document.querySelector(div);
    divmessage.innerHTML = `<span class="pit2">${message}</span>`
    setTimeout(() =>{
        divmessage.innerHTML = "";
    },5000);
}




showprogress()
showuser()
