//para atribuir o ano máximo (atual)

const year = document.querySelector('#year');

let currentYear = new Date().getFullYear();

year.setAttribute("max",currentYear);