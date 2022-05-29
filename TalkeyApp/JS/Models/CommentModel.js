let comments;

// CARREGAR COMMENTS DA LOCALSTORAGE
export function init() {
  comments = localStorage.comments.filter(comments => comments.id===id) ? JSON.parse(localStorage.comments) : [];
}

// ADICIONAR COMMENTS
export function add(id, username, text, date) {
    comments.push(new Comment(id, username, text, date));
    localStorage.setItem("comments", JSON.stringify(comments));
}

class Comment {
    id = 0;
    username = "";
    text = "";
    date = "";
  
    constructor(id, username, text, date) {
      this.id = id;
      this.username = username;
      this.text = text;
      this.date = date;
    }
}
