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


// -----------------------------------PARA OS COMENTÁRIOS-------------------------------
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

// FUNÇÃO PARA CONTAR O TEMPO DO COMENTÁRIO

let comments = document.querySelector('.add-comments-container');
// PARA ADICIONAR OS COMENTÁRIOS NO CLIQUE DO BOTÃO "COMENTAR"
// A SRC DO AVATAR IMG VEM DA LOCALSTORAGE IMG ID="USER AVATAR" SRC="${}" => AVATAR DO USER
// O NOME DO USER VEM DA LOCALSTORAGE <span id="username">${}</span>
document.querySelector('#commentbtn').addEventListener('click',()=>{
    // CommentInput = armazena o contéudo do comentário
    const commentInput = document.querySelector(".commentUser").value;
  comments.innerHTML += `  <div class="addUserComment">
  <div class="addUsercontentComment">
  <img id="userAvatar" src="/Media/images/avatar01.png" alt="#"><span id="username">Username</span>
    <div class="flex-container">
  <span id="timeComment">há min</span>
    <div class="commentContent">${commentInput}</div>
    </div>
  </div>  
  </div>
  ` 
})