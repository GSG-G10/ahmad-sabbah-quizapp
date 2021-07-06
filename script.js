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
// git labels 
const firstLabelAnswer = document.querySelector('#answer1')
const secondLabelAnswer = document.querySelector('#answer2')
const thirdLabelAnswer = document.querySelector('#answer3')
const fourthLabelAnswer = document.querySelector('#answer4')
// git radio buttons
const firstAnswer = document.querySelector('#first-answer')
const secondAnswer = document.querySelector('#second-answer')
const thirdAnswer = document.querySelector('#third-answer')
const fourthAnswer = document.querySelector('#fourth-answer')
// ***********
let i=0;
let count = 2
let selectedChoice;
let score=0
let choice=document.getElementsByName('oi')
// function to display the next content
function display(previous, next){
    previous.style.cssText = 'display: none;'
    next.style.cssText = 'display: flex' 
}
nextButton.addEventListener('click',nextQuestion)
// Next Question function 
function nextQuestion(){
 if (i<10){
  gitRadioSelected()
  ScoreCounter(i,selectedChoice) 
    console.log('score   '+score)
    counterText.textContent = `${count}/10`
  ++i
  count++
  questionText.textContent=myQuestions[i].question
  // Change labels content
  firstLabelAnswer.textContent = myQuestions[i].answers['a']
  secondLabelAnswer.textContent = myQuestions[i].answers['b']
  thirdLabelAnswer.textContent =myQuestions[i].answers['c']
  fourthLabelAnswer.textContent = myQuestions[i].answers['d']
  //change radio value 
  // firstAnswer.value = myQuestions[i].answers['a']
  firstAnswer.checked=false
  // secondAnswer.value = myQuestions[i].answers['b']
  secondAnswer.checked =false 
  // thirdAnswer.value =myQuestions[i].answers['c']
  thirdAnswer.checked =false
  // fourthAnswer.value = myQuestions[i].answers['d']
  fourthAnswer.checked = false
  // console.log('score'+score)
 }
 if (counterText.textContent === '10/10'){
   nextButton.textContent = 'Finish'
 }
 if (nextButton.textContent === 'Finish'){
     const link = document.querySelector('.question-container a')
     link.setAttribute('href','../end-page/end.html')
   
 }
}
// **********Check result **********************
function gitRadioSelected() { 
  for(j = 0; j< 4; j++) {  
   if(choice[j].type="radio") {
    if(choice[j].checked){
     selectedChoice=choice[j].value
    //  console.log(selectedChoice)
    }
      }
  }
}
// Quetions
const myQuestions = [
    {
      question: "The British promised the land of Palestine to:",
      answers: {
        a: "The Jews",
        b: "The French",
        c: "The Arabs",
        d: "All of these"
      },
      correctAnswer: "a"
    },
    {
      question: "After WWII, the newly created UN awarded Palestine to:",
      answers: {
        a: "The Jews",
        b: "Two states, both Jews and Palestinians",
        c: "The Palestinians",
        d: "The British"
      },
      correctAnswer: "a"
    },
    {
      question: " Israel fought multiple wars, in each war they:",
      answers: {
        a: "Lost, badly",
        b: "Won",
        c: "Gained land",
        d: "Both won and gained land"
      },
      correctAnswer: "c"
    },
    {
        question: "What is the holiest site in Judaism, and the 3rd holiest site in Islam?",
        answers: {
          a: "Mecca",
          b: "Israel",
          c: "Dome of the Rock - Temple Mount",
          d: "The golden domed temple"
        },
        correctAnswer: "c"
      },
      {
        question: "The main conflict is between:",
        answers: {
          a: "Jews VS Muslims",
          b: "Jews VS Arabs",
          c: "Jews Vs Palestinians",
          d: "Christian VS Muslim"
        },
        correctAnswer: "a"
      },
      {
        question: "The main thing these two groups of people are fighting over is:",
        answers: {
          a: "Land",
          b: "Ethnicity",
          c: "Religion",
          d: "Free Wifi"
        },
        correctAnswer: "a"
      },
      {
        question: " What word means the scattering of the Israelite's to many other nations?",
        answers: {
          a: "Migration",
          b: "Captivity",
          c: "Diaspora",
          d: "Wandering"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the term to describe the movement promoting the establishment of a Jewish homeland?",
        answers: {
          a: "Judaism",
          b: "Zionism",
          c: "Nationalism",
          d: "Isolationism"
        },
        correctAnswer: "b"
      },
      {
        question: "What do Judaism, Christianity and Islam all have in common?",
        answers: {
          a: "They believe Jesus was the son of God",
          b: "The holy book cannot be translated",
          c: "They are all monotheistic god of Abraham",
          d: "They are all polytheistic Trinity"
        },
        correctAnswer: "d"
      },
      {
        question: "Who controlled Israel-Palestine prior to the British?",
        answers: {
          a: "Romans",
          b: "Egyptians",
          c: "Greeks",
          d: "Ottomans"
        },
        correctAnswer: "d"
      }
  ];
  function ScoreCounter(index,choice) { 
  console.log(myQuestions[index].correctAnswer)
  console.log(choice)

 if(myQuestions[index].correctAnswer===choice){
  ++score

 }
 else {
   console.log('hiiiiii')
 }


}

