let users;

// CARREGAR UTILIZADORES DA LOCALSTORAGE
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

// ADICIONAR UTILIZADOR
export function add(username, password, email, gender, birthday,type) {
  if (users.some((user) => user.username === username)) {
    throw Error(`User with username "${username}" already exists!`);
  } else if (users.some((user) => user.email === email)) {
    throw Error(`User with email "${email}" already been used!`);
  }else {
    users.push(new User(username, password, email, gender, birthday,type));
    localStorage.setItem("users", JSON.stringify(users));
  }
}

// LOGIN DO UTILIZADOR
export function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  } else {
    throw Error("Invalid login!");
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

  constructor(username, password, email, gender, birthday,type) {
    this.type = type;
    this.username = username;
    this.password = password;
    this.email = email;
    this.gender = gender;
    this.birthday = birthday;
  }
}