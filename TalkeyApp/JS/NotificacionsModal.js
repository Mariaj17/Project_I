let notifications;

// CARREGAR NOTIFICATIONS DA LOCALSTORAGE
export function init() {
  notifications = localStorage.notifications.filter(notifications => notifications.username === username) ? JSON.parse(localStorage.notitications) : [];
}

// ADICIONAR COMMENTS
export function add(username, text, date) {
    comments.push(new Notification(username, text, date));
    localStorage.setItem("notifications", JSON.stringify(notifications));
}

class Notificacion {
    username = "";
    text = "";
    date = "";

    constructor(username, text, date) {
      this.username = username;
      this.text = text;
      this.date = date;
    }
}