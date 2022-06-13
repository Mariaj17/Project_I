// selecionar todos os headers do acordeão
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

// para alterar o ícone da seta de forma dinámica no toogle no evento clique
accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', event => {
        accordionItemHeader.classList.toggle("active")
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        // se conter a class active 
        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }else{
            accordionItemBody.style.maxHeight = 0;
        }
    })
})

// GUARDAR A INFORMAÇÃO TODA NA LOCALSTORAGE DOS COMENTÁRIOS
// PARA O ACORDEÃO DOS COMENTÁRIOS
// selecionar todos os headers do acordeão
const accordionItemHeaders02 = document.querySelectorAll(".accordion-header");

// para alterar o ícone da seta de forma dinámica no toogle no evento clique
accordionItemHeaders02.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', event => {
        accordionItemHeader.classList.toggle("actived")
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        // se conter a class active 
        if(accordionItemHeader.classList.contains("actived")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }else{
            accordionItemBody.style.maxHeight = 0;
        }
    })
})

// -------------------------------------------PARA SELECIONAR PARES DE BOTÕES----------------------------------------------------------------
// COMBINAR PARES DE BOTÕES




// -----------------------------------PARA OS COMENTÁRIOS COLOCAR NA LOCALSTORAGE-------------------------------
const commentField = document.querySelector('#comment');
const backUp = commentField.getAttribute('placeholder');
const btn = document.querySelector('.btns');
const clear = document.getElementById('cancelbtn');
const cancelBtn = document.querySelector('#cancelbtn');
const commentBtn = document.querySelector('#commentbtn');


commentField.onfocus = function(){
    this.setAttribute('placeholder','');
    this.style.borderColor = '#005086';
    btn.style.opacity = '1';
    cancelBtn.style.cursor = 'pointer';
    commentBtn.style.cursor = 'pointer';
}

commentField.onblur = function(){
    this.setAttribute('placeholder',backUp);
    this.style.borderColor = '#00508633';
}

clear.onclick = function(){
    btn.style.opacity = '0';
    commentField.value = '';
}

//PARA CONTAR O TEMPO DO COMENTÁRIO
const d = new Date();
let day = d.getDate();
let mouth = d.getMonth() + 1;
let year = d.getFullYear();
let comments = document.querySelector('.add-comments-container');
// PARA ADICIONAR OS COMENTÁRIOS NO CLIQUE DO BOTÃO "COMENTAR"
// A SRC DO AVATAR IMG VEM DA LOCALSTORAGE IMG ID="USER AVATAR" SRC="${}" => AVATAR DO USER
// O NOME DO USER VEM DA LOCALSTORAGE <span id="username">${}</span>

// SELECIONAR 0 ELEMENTO HTML ONDE SURGIRÁ O Nº DE COMENTÁRIOS
const commentCounter = document.querySelector("#comments-header");
// CONTADOR DOS COMENTÁRIOS
let countComment = 0;
document.querySelector('#commentbtn').addEventListener('click',()=>{
    // CommentInput = armazena o contéudo do comentário
    const commentInput = document.querySelector(".commentUser").value;
  comments.innerHTML += `  <div class="addUserComment">
  <div class="addUsercontentComment">
  <img id="userAvatar" src="/Media/images/avatar01.png" alt="#"><span id="username">Username</span>
    <div class="flex-container">
  <span id="timeComment">Publicado em ${day}/${mouth}/${year}</span>
    <div class="commentContent">${commentInput}</div>
    </div>
  </div>  
  </div>
  ` 

// INCREMENTAR O Nº DE COMENTÁRIOS
countComment ++;
                                                                                    //CALLBACK DA VARIAVEL DO CONTADOR 
    commentCounter.innerHTML = `<div class="heading"><span id="comments-header">COMENTÁRIOS(${countComment})</span></div>`
})