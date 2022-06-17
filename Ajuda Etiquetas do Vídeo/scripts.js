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

// PARA GERIR AS ETIQUETAS DO VÍDEO

// SELEÇÃO DO VÍDEO DO DOCUMENTO
const video = document.querySelector("video");

// SELEÇÃO DOS TIMESTAMPS NO ACORDEÃO COM AS ETIQUETAS DO VÍDEO
const frame01 = document.querySelector('.start');
const frame02 = document.querySelector('.second-frame');
const frame03 = document.querySelector('.third-frame');
const frame04 = document.querySelector('.fourth-frame');

// NO CLIQUE DE CADA FRAME DIRECIONA PARA O RESPETIVO FRAME DO VÍDEO COM MÉTODO CURRENTTIME

// PRIMEIRO FRAME 0 SEGUNDOS
frame01.addEventListener('click',()=>{
    video.currentTime = 0;
    video.play()
})

// SEGUNDO FRAME AVANÇA 10 SEGUNDOS
frame02.addEventListener('click',()=>{
    video.currentTime = 10;
    video.play()
})

// TERCEIRO FRAME AVANÇA 20 SEGUNDOS
frame03.addEventListener('click',()=>{
    video.currentTime = 20;
    video.play()
})

// QUARTO FRAME AVANÇA 36 SEGUNDOS
frame04.addEventListener('click',()=>{
    video.currentTime = 36;
    video.play()
})


