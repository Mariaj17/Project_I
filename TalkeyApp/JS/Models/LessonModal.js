let levels;

// CARREGAR lessons DA LOCALSTORAGE
export function init() {
  levels = localStorage.levels ? JSON.parse(localStorage.levels) : [];
}
  
  // DEFINIR O LEVEL ATUAL
  export function setCurrentLevel(id) {
    localStorage.setItem("level", id);
  }
  
  // OBTER O LEVEL ATUAL
  export function getCurrentLevel() {
    return level.find((level) => level.id === localStorage.getItem("level"));
  }
  

class Level{
    id= 1;
    classes= [
          {
            id: 1,
            img:"",
            title:"",
            description:"",
        },
        {
          id: 2,
          img:"",
          title:"",
          description:"",
        },
        {
          id: 3,
          img:"",
          title:"",
          description:"",
        },
    ]

    constructor(id,classes) {
        this.id = id;
        this.classes = classes;
    }
}
