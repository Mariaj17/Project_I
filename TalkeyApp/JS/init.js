initdata();

function initdata() {
  // LEVELS
  if (!localStorage.levels) {
    const levels = [
      {
        id: 0,
        classes: [
          {
            id: 0,
            img:"",
            title:"",
            description:"",
          },
          {
            id: 0,
            img:"",
            title:"",
            description:"",
          },
          {
            id: 0,
            img:"",
            title:"",
            description:"",
          },
        ],
      },
      {
        id: 0,
        classes: [
          {
            id: 0,
            img:"",
            title:"",
            description:"",
          },
          {
            id: 0,
            img:"",
            title:"",
            description:"",
          },
          {
            id: 0,
            img:"",
            title:"",
            description:"",
          },
        ],
      },
      {
        id: 0,
        classes: [
          {
            id: 0,
            img:"",
            title:"",
            description:"",
          },
          {
            id: 0,
            img:"",
            title:"",
            description:"",
          },
          {
            id: 0,
            img:"",
            title:"",
            description:"",
          },
        ],
      },
    ];
    localStorage.setItem("levels", JSON.stringify(levels));
  }

  // USERS
  if (!localStorage.users) {
    const users = [
      {
        type: "Aluno",
        username: "user1",
        password: "pass1",
        email: "user1@example.com",
        gender: "Male",
        birthday: "",
      },
      {
        type: "Professor",
        username: "user2",
        password: "pass2",
        email: "user2@example.com",
        gender: "Female",
        birthday: "",
      },
    ];
    console.log("inject");
    localStorage.setItem("users", JSON.stringify(users));
  }

  // LESSONS
  if (!localStorage.lessons) {
    const lessons = [
      {
        id: 0,
        video:"",
        title:"",
        likes: 0,
        shares: 0,
      },
      {
        id: 0,
        video:"",
        title:"",
        likes: 0,
        shares: 0,
      },
      {
        id: 0,
        video:"",
        title:"",
        likes: 0,
        shares: 0,
      },
      {
        id: 0,
        video:"",
        title:"",
        likes: 0,
        shares: 0,
      },
      {
        id: 0,
        video:"",
        title:"",
        likes: 0,
        shares: 0,
      },
      {
        id: 0,
        video:"",
        title:"",
        likes: 0,
        shares: 0,
      },
      {
        id: 0,
        video:"",
        title:"",
        likes: 0,
        shares: 0,
      },
      {
        id: 0,
        video:"",
        title:"",
        likes: 0,
        shares: 0,
      },
      {
        id: 0,
        video:"",
        title:"",
        likes: 0,
        shares: 0,
      },
    ];
    localStorage.setItem("lessons", JSON.stringify(lessons));
  }
   
  // EXERCISES
  if (!localStorage.exercises) {
    const exercises = [
      {
        id:0,
        img:"",
        question1:"",
        answer1:"",
        answer2:"",
        answer3:"",
        question2:"",
        answer4:"",
        answer5:"",
        answer6:"",
        question3:"",
        answer7:"",
        answer8:"",
        answer9:"",
      },
      {
        id:0,
        img:"",
        question1:"",
        answer1:"",
        answer2:"",
        answer3:"",
        question2:"",
        answer4:"",
        answer5:"",
        answer6:"",
        question3:"",
        answer7:"",
        answer8:"",
        answer9:"",
      },
    ];
    localStorage.setItem("exercises", JSON.stringify(exercises));
  }

  // AVATARES
  if (!localStorage.avatares) {
    const avatares = [
      {
        id: 0,
        avatar:"",
        img:"",
        link:"",
        price: 0,
      },
      {
        id: 0,
        avatar:"",
        img:"",
        link:"",
        price: 0,
      },
      {
        id: 0,
        avatar:"",
        img:"",
        link:"",
        price: 0,
      },
    ];
    localStorage.setItem("avatares", JSON.stringify(avatares));
  }

  // Ranking
  if (!localStorage.rankings) {
    const rankings = [
      {
        place:1,
        username: "",
        totalPoints: 0,
      },
      {
        place:2,
        username: "",
        totalPoints: 0,
      },
      {
        place:3,
        username: "",
        totalPoints: 0,
      },
    ];
    localStorage.setItem("rankings", JSON.stringify(rankings));
  }

  // COMMENTS
  if (!localStorage.comments) {
    const comments= [];
    localStorage.setItem("comments", JSON.stringify(comments));
  }

  // NOTIFICATION
  if (!localStorage.comments) {
    const notifications= [];
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }
}
