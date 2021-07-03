// declaring DOM variables
const startBtn = document.querySelector('#start-btn') 
const description = document.querySelector('.description')
const nameSection = document.querySelector('.name-section')
const nameFeild = document.querySelector('#name-field')
const nameBtn = document.querySelector('#name-btn')
const nameText = document.querySelector('.name-container p')
const questionSection = document.querySelector('.questions')
const questionText = document.querySelector('.question-text')
const answersDiv = document.querySelector('.answers')
const nextButton = document.querySelector('.next-btn')
const counterText = document.querySelector('.counter')

/* ****************************************************** */
// function to display the next content
function display(previous, next){
    previous.style.cssText = 'display: none;'
    next.style.cssText = 'display: flex' 
}
startBtn.addEventListener('click',display(description,nameSection))
// function to save name and move to questions
function saveName(){
    if (nameFeild.value != null){
        nameBtn.addEventListener('click', display(nameSection, questionSection))

    }else if(nameFeild.value === null) {
        nameBtn.addEventListener('click', ()=>{
            alert('Enter your name')


        })

    }
}
// Quetions
const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      }
  ];

