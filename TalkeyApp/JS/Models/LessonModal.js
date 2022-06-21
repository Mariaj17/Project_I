let exercises;

export function init() {
  exercises = localStorage.lessons ? JSON.parse(localStorage.exercises) : [];
}
  
export function setCurrentExercise(id) {
    localStorage.setItem("exercise", id);
}
  
export function getCurrentExercise() {
    return exercises.find((exercise) => exercise.id === localStorage.getItem("exercise"));
}
  
class Exercise{
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


let lessons;

export function init() {
  lessons = localStorage.lessons ? JSON.parse(localStorage.lessons) : [];
}
  
export function setCurrentLesson(id) {
    localStorage.setItem("lesson", id);
}
  
export function getCurrentLesson() {
    return levels.find((level) => level.id === localStorage.getItem("lesson"));
}

class Lesson{
  lessons = [
  {
    id: 0,
    src_video:"",
    title:"",
    likes: 0,
    shares: 0,
  },
  ]

  constructor(id,src_video,title,likes,shares) {
      this.id = id+lessons.length+1;
      this.src_video = src_video;
      this.title = title;
      this.likes = likes;
      this.shares = shares;
  }
}