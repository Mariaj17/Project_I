let levels;

export function init() {
  levels = localStorage.levels ? JSON.parse(localStorage.levels) : [];
}
  
export function setCurrentLevel(id) {
    localStorage.setItem("level", id);
}
  
export function getCurrentLevel() {
    return levels.find((level) => level.id === localStorage.getItem("level"));
}
  
class Level{
  classes= [
        {
          id: 0,
          img:"",
          title:"",
          description:"",
      },
  ]

  constructor(id,img,title,description) {
      this.id = id+classes.length+1;
      this.img = img;
      this.title = title;
      this.description = description;
  }
}

