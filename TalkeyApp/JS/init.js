initdata();

function initdata() {
  // LEVELS
  if (!localStorage.levels) {
    const levels = [
      {
        id: 1,
        classes: [
          {
            id: 1,
            img:"img/alpha.webp",
            title:"Maneiras de cumprimentar e despedir",
            description:"Nesta aula aprenda diversas maneiras de se cumprimentar e se despedir em Alemão.Como se comunicar formal e informalmente no quesito cumprimentos e despedidas em Alemão.",
          },
          {
            id: 2,
            img:"img/num.jpg",
            title:"Alfabeto em alemão",
            description:"Nesta aula você vai aprender o alfabeto alemão, a soletrar seu nome e a entender quando algo é soletrado para você.Saber pronunciar as palavras em alemão, principalmente soletrar seu nome é primordial.",
          },
          {
            id: 3,
            img:"img/german.jpg",
            title:"Aula de Nomes",
            description:"Nesta aula vais aprender como pronunciar os nomes alemães.",
          },
        ],
      },
      {
        id: 2,
        classes: [
          {
            id: 4,
            img:"",
            title:"Dias da semana e deuses germânicos",
            description:"Nesta aula de alemão você aprenderá os dias da semana e também a relação da sua nomenclatura com os Deuses Germânicos! ",
          },
          {
            id: 5,
            img:"",
            title:"Contar até 100",
            description:"Aprenda Neste vídeo a contar os Números em Alemão a partir de 100!",
          },
          {
            id: 6,
            img:"",
            title:"Pronomes e Conjugação de Verbos",
            description:"Nesta aula você aprenderá a reconhecer os pronomes pessoais e também a conjugar verbos  regulares em alemão no presente.",
          },
        ],
      },
      {
        id: 3,
        classes: [
          {
            id: 7,
            img:"",
            title:"Como pedir uma bebida",
            description:" Aprenda neste vídeo como pedir uma bebida em alemão.",
          },
          {
            id: 8,
            img:"",
            title:"Como pedir e pagar uma conta",
            description:"Nesta aula aprenda como pedir e pagar a sua conta em Alemão.",
          },
          {
            id: 9,
            img:"",
            title:"Comunicação básica",
            description:"Nesta aula aprenda frases de utilização diaria em Alemão.",
          },
        ],
      },
    ];
    localStorage.setItem("levels", JSON.stringify(levels));
  }

  // // USERS
  if (!localStorage.users) {
    const users = [
      {
        type: "Aluno",
        username: "user1",
        password: "pass1",
        email: "user1@example.com",
        gender: "Male",
      },
      {
        type: "Professor",
        username: "user2",
        password: "pass2",
        email: "user2@example.com",
        gender: "Female",
      },
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }

  // LESSONS
  if (!localStorage.lessons) {
    const lessons = [
      {
        id: 1,
        src_video:"Media/Videos/Alemão para iniciantes 01 - Mil maneiras de se cumprimentar e despedir Escolha a sua.mp4",
        title:"Aula Comprimento",
        likes: 0,
        shares: 0,
      },
      {
        id: 2,
        src_video:"Media/Videos/Alemão para Iniciantes 02 COMO SOLETRAR SEU NOME e o ALFABETO Alemão.mp4",
        title:"Aula Números",
        likes: 0,
        shares: 0,
      },
      {
        id: 3,
        src_video:"Media/Videos/Os Números em Alemão  Zahlen auf Deutsch - COMO CONTAR DE 0 A 100 EM ALEMÃO.mp4",
        title:"Aula de Nomes",
        likes: 0,
        shares: 0,
      },
      {
        id: 4,
        src_video:"Media/Videos/Alemão para iniciantes 04 - Os dias da semana e os Deuses germânicos.mp4",
        title:"Dias da semana e deuses germânicos",
        likes: 0,
        shares: 0,
      },
      {
        id: 5,
        src_video:"Media/Videos/Alemão para iniciantes 05 - Números a partir do 100.mp4",
        title:"Contar até 100",
        likes: 0,
        shares: 0,
      },
      {
        id: 6,
        src_video:"Media/Videos/Alemão para iniciantes 06 Pronomes e Conjugação de Verbos.mp4",
        title:"Pronomes e Conjugação de Verbos",
        likes: 0,
        shares: 0,
      },
      {
        id: 7,
        src_video:"Media/Videos/Alemão para iniciantes 07  Como Pedir uma bebida.mp4",
        title:"Como pedir uma bebida",
        likes: 0,
        shares: 0,
      },
      {
        id: 8,
        src_video:"Media/Videos/Alemão para iniciantes 08 Pedir e pagar uma conta.mp4",
        title:"Como pedir e pagar uma conta",
        likes: 0,
        shares: 0,
      },
      {
        id: 9,
        src_video:"Media/Videos/Alemão para iniciantes 09 Comunicação básica no curso.mp4",
        title:"Comunicação básica",
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
        id:1,
        exercise:[
        {
        img:"",
        question:"",
        answer1:"",
        answer2:"",
        answer3:""
        },
        {
        img:"",
        question:"",
        answer1:"",
        answer2:"",
        answer3:""
        },
        {
        img:"",
        question:"",
        answer1:"",
        answer2:"",
        answer3:""
        },
        ],
      },
      {
        id:2,
        exercise:[
        {
        img:"",
        question:"",
        answer1:"",
        answer2:"",
        answer3:""
        },
        {
        img:"",
        question:"",
        answer1:"",
        answer2:"",
        answer3:""
        },
        {
        img:"",
        question:"",
        answer1:"",
        answer2:"",
        answer3:""
        },
        ],
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
}

