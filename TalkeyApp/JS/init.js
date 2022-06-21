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
            img:"Media\images\greet.jpg",
            title:"Maneiras de cumprimentar e despedir",
            description:"Nesta aula aprenda diversas maneiras de se cumprimentar e se despedir em Alemão.Como se comunicar formal e informalmente no quesito cumprimentos e despedidas em Alemão.",
          },
          {
            id: 2,
            img:"Media\images\alpha.webp",
            title:"Alfabeto em alemão",
            description:"Nesta aula você vai aprender o alfabeto alemão, a soletrar seu nome e a entender quando algo é soletrado para você.Saber pronunciar as palavras em alemão, principalmente soletrar seu nome é primordial.",
          },
          {
            id: 3,
            img:"Media\images\num.jpg",
            title:"Aula de Números",
            description:"Nesta aula vais aprender a contar em alemão até 100.",
          },
        ],
      },
      {
        id: 2,
        classes: [
          {
            id: 4,
            img:"Media\images\calendar.jpg",
            title:"Dias da semana e deuses germânicos",
            description:"Nesta aula de alemão você aprenderá os dias da semana e também a relação da sua nomenclatura com os Deuses Germânicos! ",
          },
          {
            id: 5,
            img:"Media\images\100.jpg",
            title:"Contar apartir de 100",
            description:"Aprenda Neste vídeo a contar os Números em Alemão a partir de 100!",
          },
          {
            id: 6,
            img:"Media\images\pronouns.jpg",
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
            img:"Media\images\drinks.webp",
            title:"Como pedir uma bebida",
            description:" Aprenda neste vídeo como pedir uma bebida em alemão.",
          },
          {
            id: 8,
            img:"Media\images\pay.jpg",
            title:"Como pedir e pagar uma conta",
            description:"Nesta aula aprenda como pedir e pagar a sua conta em Alemão.",
          },
          {
            id: 9,
            img:"Media\images\german.jpg",
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
        type: "Aluno",
        username: "user3",
        password: "pass3",
        email: "user3@example.com",
        gender: "Female",
      },
      {
        type: "Professor",
        username: "user2",
        password: "pass2",
        email: "user2@example.com",
        gender: "Female",
      },
      {
        type: "Professor",
        username: "user4",
        password: "pass4",
        email: "user4@example.com",
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
        title:"Aula Alfabeto",
        likes: 0,
        shares: 0,
      },
      {
        id: 3,
        src_video:"Media/Videos/Os Números em Alemão  Zahlen auf Deutsch - COMO CONTAR DE 0 A 100 EM ALEMÃO.mp4",
        title:"Aula de Números",
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
        title:"Contar apartir de 100",
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
        question:"Que frase deves usar para cumprimentar alguem de noite?",
        option1:"Guten Tag",
        option2:"Guten Abend",
        option3:"Guten Morgen",
        answer:2,
        },
        {
        question:"O que dizes quando te queres despedir de alguem?",
        option1:"Wiedersehen",
        option2:"Moin moin",
        answer:1,
        },
        {
        question:"Que frase serve para perguntar como a outra pessoa esta?",
        option1:"Und bei dir?",
        option2:"Danke gut! Und dir?",
        option3:"Hallo, wie geht?",
        answer:3
        },
        ],
      },
      {
        id:2,
        exercise:[
        {
        question:"Como se pronuncia V em alemão?",
        option1:"fau",
        option2:"we",
        option3:"de",
        answer:1,
        },
        {
        question:"Como se pronuncia C em alemão?",
        option1:"ka",
        option2:"tse",
        answer:2,
        },
        {
        question:"Como se pronuncia Q em alemão?",
        option1:"ku",
        option2:"gue",
        option3:"te",
        answer:1,
        },
        ],
      },
      {
        id:3,
        exercise:[
        {
        question:"Como se escreve 8 em alemão?",
        option1:"eins",
        option2:"drei",
        option3:"acht",
        answer:3,
        },
        {
        question:"Como se escreve 17 em alemão?",
        option1:"siebzehn",
        option2:"vierzehn",
        answer:1,
        },
        {
        question:"Como se escreve 88 em alemão?",
        option1:"achtundacchzig",
        option2:"zweiundachzig",
        option3:"dreiundneunzig",
        answer:1,
        },
        ],
      },
      {
        id:4,
        exercise:[
        {
        question:"Os dias da semana são inspiradas nos ...",
        option1:"Sete deuses germânicos",
        option2:"Sete cores do arco-íris",
        option3:"Sete anões da branca de neve",
        answer:1,
        },
        {
        question:"Como se escreve sábado em alemão?",
        option1:"samstag",
        option2:"der Montag",
        answer:1,
        },
        {
        question:"Como se escreve quarta-feira em alemão?",
        option1:"Dienstag",
        option2:"Mittwoch",
        option3:"Donnerstag",
        answer:2,
        },
        ],
      },
      {
        id:5,
        exercise:[
        {
        question:"Como se escreve 1000 em alemão?",
        option1:"hundert",
        option2:"dreihundert",
        option3:"tausend",
        answer:3,
        },
        {
        question:"Como se escreve 571 em alemão?",
        option1:"achthundertsiebzehn",
        option2:"zweihundertsechs",
        answer:1,
        },
        {
        question:"Como se escreve 2117 em alemão?",
        option1:"zweitausenhundersiebzig",
        option2:"zweitausendsiebzehn",
        option3:"zweitausenhundertsiebzehn",
        answer:3,
        },
        ],
      },
      {
        id:6,
        exercise:[
        {
        question:"Como se escreve Ele alemão?",
        option1:"Ich",
        option2:"Er",
        option3:"Sie",
        answer:2,
        },
        {
        question:"Completa. Ich ...",
        option1:"kommen",
        option2:"komme",
        answer:2,
        },
        {
        question:"Completa. Sie ...",
        option1:"trinke",
        option2:"trinkst",
        option3:"trinken",
        answer:3,
        },
        ],
      },
      {
        id:7,
        exercise:[
        {
        question:"Como se diz chá gelado em alemão?",
        option1:"Wasser",
        option2:"Rorwein",
        option3:"Eistee",
        answer:3,
        },
        {
        question:"Como se pede uma fanta com muito gelo?",
        option1:"Fanta mit wenig Eis",
        option2:"Fanta mit viel Eis",
        answer:2,
        },
        {
        question:"Como posso pedir um descafeinado com leite e açucar?",
        option1:"Ich trinke lieber Eiskaffe ohne milch und zucker",
        option2:"Ich trinke lieber Kaffe mit milch und zucker",
        option3:"Ich trinke lieber Einskaffe mit milch und zucker",
        answer:1,
        },
        ],
      },
      {
        id:8,
        exercise:[
        {
        question:"Como se se pede a conta?",
        option1:"Ich mit zhen",
        option2:"Wir mochten Zahlen, bitte",
        option3:"Das macht dan",
        answer:2,
        },
        {
        question:"Como se diz quando se quer contas separadas?",
        option1:"zusammen",
        option2:"getrennt",
        answer:2,
        },
        {
        question:"Como se escreve conta em alemão?",
        option1:"Danke",
        option2:"Bitte",
        option3:"Zahlen",
        answer:2,
        },
        ],
      },
      {
        id:9,
        exercise:[
        {
        question:"Qual o significado de: Wie ist das auf Deutsch?",
        option1:"O que esta escrito em alemão?",
        option2:"O que significa em alemão?",
        option3:"Como aprendo a escrever em alemão?",
        answer:2,
        },
        {
        question:"Qual o significado de: Wo finde ich Toiletten?",
        option1:"Onde posso encontrar a casa de banho?",
        option2:"Aqui tem uma casa de banho?",
        answer:1,
        },
        {
        question:"Qual o significado de: Entschuldigung, wie bitte?",
        option1:"Com licença, você pode passar isso?",
        option2:"Com licença, você pode fazer isso de novo?",
        option3:"Com licença, você pode dizer isso de novo?",
        answer:3,
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
        price: 0,
      },
      {
        id: 0,
        avatar:"",
        img:"",
        price: 0,
      },
      {
        id: 0,
        avatar:"",
        img:"",
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
        username: "user3",
        totalPoints: 160,
      },
      {
        place:2,
        username: "user1",
        totalPoints: 90,
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

