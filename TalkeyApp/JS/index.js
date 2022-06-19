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

//--------------------------------------------------------- PARA A FUNCIONALIDADE RESPONSIVE DO MENU NO ÍCONE HAMUBGUER MENU----------------------------------------------------------------
