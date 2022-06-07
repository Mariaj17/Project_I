// selecionar o botão editar para abrir o modal
const editBtn = document.querySelector('#editBtn');

editBtn.addEventListener('click', () => {
    // display block para abrir o modal
    document.getElementById('modal').style.display = 'block'; 
})

// display none para fechar o modal ao clicar no icone X
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
})