let users;

// CARREGAR UTILIZADORES DA LOCALSTORAGE
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

// ADICIONAR UTILIZADOR
export function add(type,username, password, email, gender) {
  if (users.some((user) => user.username === username)) {
    throw Error(`O "${username}" JÁ EXISTE!!`);
  } else if (users.some((user) => user.email === email)) {
    throw Error(`"O ENDEREÇO ${email}" JÁ EXISTE!!`);
  }else {
    users.push(new User(type,username, password, email, gender));
    localStorage.setItem("users", JSON.stringify(users));
  }
}

// LOGIN DO UTILIZADOR
export function login(type,username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password && user.type === type);
  if (user) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  } else {
    throw Error("LOGIN INVÁLIDO!");
  }
}

// LOGOUT DO UTILIZADOR
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

// VERIFICA EXISTÊNCIA DE ALGUÉM AUTENTICADO
export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

// DEVOLVE UTILZIADOR AUTENTICADO
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}



class User {
  type = "";
  username = "";
  password = "";
  email = "";
  gender = "";
  birthday = "";

  constructor(type,username, password, email, gender) {
    this.type = type;
    this.username = username;
    this.password = password;
    this.email = email;
    this.gender = gender;
  }
}