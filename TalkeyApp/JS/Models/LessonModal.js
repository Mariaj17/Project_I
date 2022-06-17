let lessons;

// CARREGAR lessons DA LOCALSTORAGE
export function init() {
  lessons = localStorage.lessons ? JSON.parse(localStorage.lessons) : [];
}

