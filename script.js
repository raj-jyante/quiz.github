// page selected
const initialPage = document.querySelector(".initial-page")
const questionPage = document.querySelector(".question-page")
const resultPage = document.querySelector(".result-page")


//first page 
const start = document.querySelector("#start-btn")
const countDown= document.querySelector("#countdown")
let countDownValue =localStorage.getItem("countDownStored") || 60; //set countdown Value

let scoreCount = localStorage.getItem("score") || 0;   // to generate the question number

const questionCount =document.querySelector("#question-count")

let currentQuestion = localStorage.getItem("questionNumber");
if (currentQuestion !== null) {
    currentQuestion = parseInt(currentQuestion);
} else {
    currentQuestion = 1;
}



// event for first question
start.addEventListener("click",()=>{
   let formattedQuestionNumber = String(currentQuestion).padStart(2, "0") //to show question Number
    questionCount.textContent = `${formattedQuestionNumber}/25`
    localStorage.setItem("questionNumber", currentQuestion) 
 })


// visible the next page and add question 1
start.addEventListener("click", () => {
  
    initialPage.classList.add("hidden")
    questionPage.classList.remove("hidden")
    question.innerText=setOfQuestions[currentQuestion-1].question;
    option1.innerText=setOfQuestions[currentQuestion-1].option1;
    option2.innerText=setOfQuestions[currentQuestion-1].option2;
    option3.innerText=setOfQuestions[currentQuestion-1].option3;
    option4.innerText=setOfQuestions[currentQuestion-1].option4;
    rightAnswer.innerText=setOfQuestions[currentQuestion-1].correctAnswer;
})
let isNextTimerReload=false;
// background and countdown value for first question
start.addEventListener( "click" , ()=>{
  pageBGColor.style.backgroundColor ="rgba(204, 226, 194, 1)"
  pageBGColor.style.transition=""
  setTimeout(() => {
    pageBGColor.style.backgroundColor ="rgba(219, 173, 173, 1)"
    pageBGColor.style.transition = "60s"
  }, 1000);

  countDownValue=60
  const stopCountDown1 = setInterval(() => {
    countDownValue--
    let formattedValue= String(countDownValue).padStart(2, "0")
    localStorage.setItem("countDownStored", countDownValue)
    countDown.textContent = countDownValue
    if (countDownValue === 0 || isNextClicked){
      clearInterval(stopCountDown1)
    }
  }, 1000);
  isNextTimerReload=true;
})


//second page elements selected
let question = document.querySelector("#question-text")
let options = document.querySelectorAll(".option-text")    //main div of option
let next = document.querySelector("#next-btn")
const option1= document.querySelector(".option-1")    
const option2= document.querySelector(".option-2")
const option3= document.querySelector(".option-3")
const option4= document.querySelector(".option-4")
const rightAnswer = document.querySelector("#right-answer")
let optedOption = document.querySelectorAll(".opted")    // div of option text


//questions inside an array
const setOfQuestions = [
    {
      question: "Which tag is used to define an unordered list in HTML?",
      option1: "<ul>",
      option2: "<ol>",
      option3: "<li>",
      option4: "<div>",
      correctAnswer: "<ul>"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        option1: "<a>",
        option2: "<h1>",
        option3: "<p>",
        option4: "<div>",
        correctAnswer: "<a>"
      },
      {
        question: "Which CSS property is used to set the background color of an element?",
        option1: "color",
        option2: "background-color",
        option3: "font-color",
        option4: "text-color",
        correctAnswer: "background-color"
      },
      {
        question: "What does CSS stand for?",
        option1: "Cascading Style Sheets",
        option2: "Creative Style Syntax",
        option3: "Computer Style Sheets",
        option4: "Cascading Script Style",
        correctAnswer: "Cascading Style Sheets"
      },
    {
      question: "Which CSS property is used to change the text color of an element?",
      option1: "background-color",
      option2: "text-color",
      option3: "color",
      option4: "font-color",
      correctAnswer: "color"
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      option1: "variable",
      option2: "var",
      option3: "let",
      option4: "const",
      correctAnswer: "var"
    },
    {
      question: "What is the correct way to include JavaScript into an HTML document?",
      option1: "<script>",
      option2: "<style>",
      option3: "<body>",
      option4: "<head>",
      correctAnswer: "<script>"
    },
    {
      question: "What is the purpose of the 'alt' attribute in the 'img' tag?",
      option1: "To specify the image source",
      option2: "To provide alternative text for the image",
      option3: "To style the image with CSS",
      option4: "To link the image to another webpage",
      correctAnswer: "To provide alternative text for the image"
    },
    {
      question: "Which of the following is NOT a valid CSS unit of measurement?",
      option1: "px",
      option2: "em",
      option3: "rem",
      option4: "gr",
      correctAnswer: "gr"
    },
    {
      question: "What does HTML stand for?",
      option1: "Hyper Text Markup Language",
      option2: "Hyperlinks and Text Markup Language",
      option3: "Home Tool Markup Language",
      option4: "Hyperlinks and Text Management Language",
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "What does the 'href' attribute in an anchor tag specify?",
      option1: "The text to display for the link",
      option2: "The location of the linked document",
      option3: "The style of the link",
      option4: "The target window of the link",
      correctAnswer: "The location of the linked document"
    },
    {
      question: "Which of the following is NOT a valid JavaScript data type?",
      option1: "number",
      option2: "boolean",
      option3: "string",
      option4: "character",
      correctAnswer: "character"
    },
    {
      question: "What is the purpose of the 'type' attribute in a script tag?",
      option1: "To specify the language of the script",
      option2: "To define the type of content in the script",
      option3: "To provide an identifier for the script",
      option4: "To specify the location of the script file",
      correctAnswer: "To specify the language of the script"
    },
    {
      question: "Which CSS property is used to change the font size of text?",
      option1: "font-size",
      option2: "text-size",
      option3: "font-style",
      option4: "text-font",
      correctAnswer: "font-size"
    },
    {
      question: "What is the correct syntax for referring to an external script file called 'script.js'?",
      option1: "<script src='script.js'>",
      option2: "<script href='script.js'>",
      option3: "<script link='script.js'>",
      option4: "<script import='script.js'>",
      correctAnswer: "<script src='script.js'>"
    },
    {
      question: "What does the 'display: none;' CSS property do?",
      option1: "Hides the element without affecting the layout",
      option2: "Hides the element and removes it from the layout",
      option3: "Displays the element as a block-level element",
      option4: "Displays the element as an inline element",
      correctAnswer: "Hides the element and removes it from the layout"
    },
    {
      question: "Which HTML tag is used to define a table row?",
      option1: "<table>",
      option2: "<tr>",
      option3: "<td>",
      option4: "<th>",
      correctAnswer: "<tr>"
    },
    {
      question: "What does the 'padding' CSS property define?",
      option1: "The space between the border and the content",
      option2: "The space between the elements",
      option3: "The space outside the border",
      option4: "The space between the margin and the content",
      correctAnswer: "The space between the border and the content"
    },
    {
      question: "What is the purpose of the 'title' attribute in an anchor tag?",
      option1: "To specify the URL of the linked document",
      option2: "To provide alternative text for the link",
      option3: "To display additional information when hovering over the link",
      option4: "To define the target window of the link",
      correctAnswer: "To display additional information when hovering over the link"
    },
    {
      question: "Which JavaScript method is used to remove the last element from an array and return that element?",
      option1: "pop()",
      option2: "shift()",
      option3: "splice()",
      option4: "slice()",
      correctAnswer: "pop()"
    },
    {
      question: "What does the 'margin' CSS property define?",
      option1: "The space between the border and the content",
      option2: "The space between the elements",
      option3: "The space outside the border",
      option4: "The space between the margin and the content",
      correctAnswer: "The space outside the border"
    },
    {
      question: "What does the 'float' property do in CSS?",
      option1: "Moves the element to the left or right and allows other content to wrap around it",
      option2: "Applies a shadow effect to the element",
      option3: "Enlarges the element by a specified amount",
      option4: "Rotates the element clockwise or counterclockwise",
      correctAnswer: "Moves the element to the left or right and allows other content to wrap around it"
    },
    {
      question: "In JavaScript, what is the purpose of the 'typeof' operator?",
      option1: "To determine the type of a variable or expression",
      option2: "To concatenate two strings",
      option3: "To perform mathematical operations",
      option4: "To compare two values",
      correctAnswer: "To determine the type of a variable or expression"
    },
    {
      question: "What is the purpose of the 'z-index' property in CSS?",
      option1: "To specify the order of elements along the z-axis (depth)",
      option2: "To apply a background color to an element",
      option3: "To align text within an element",
      option4: "To create rounded corners for an element",
      correctAnswer: "To specify the order of elements along the z-axis (depth)"
    },
    {
      question: "What is the purpose of the 'flexbox' layout in CSS?",
      option1: "To create responsive grid layouts",
      option2: "To apply animations to elements",
      option3: "To add shadows to text",
      option4: "To change the font family of text",
      correctAnswer: "To create responsive grid layouts"
    }

  ];


  // event on option selection
isOptionSelected = false      // to prevent multiple selection

options.forEach ((option) => {
      option.addEventListener("click", ()=>{
        console.log("hello")
            if(isOptionSelected){
              return;
            }

            option.classList.remove("border-right", "border-wrong") 


            if(option.children[0].textContent== rightAnswer.textContent ){
              console.log("right",  option.children[0].textContent)
              option.classList.add("border-right")
              option.children[2].classList.remove("hidden")
              scoreCount++;
              localStorage.setItem("score" , scoreCount);

            } else {
              console.log("wrong", option.children[0].textContent ,  rightAnswer.textContent)
              option.classList.add("border-wrong")
              option.children[1].classList.remove("hidden")
            
              options.forEach((option) =>{
                if (option.children[0].textContent == rightAnswer.textContent){
                  option.classList.add("border-right")
                  option.children[2].classList.remove("hidden")
                }
              })
            }

            isOptionSelected=true
      })
})



let isNextClicked = false    //to stop the timer from page 1


 let i =0 ;
 
 //event for remaining question number
 next.addEventListener("click", () => { 
 if(isOptionSelected){
  let formattedQuestionNumber = String(currentQuestion).padStart(2, "0") //to show question Number
  questionCount.textContent = `${parseInt(formattedQuestionNumber)+1}/25`
    currentQuestion++
    localStorage.setItem("questionNumber", currentQuestion)
  if (currentQuestion > 25) {
    questionPage.classList.add("hidden")
    resultPage.classList.remove("hidden")
    currentQuestion = 1
  }
 } else {
  return;
 }
  
});




let isTimerReload= false;
// event for countdown 
let stopCountDown
next.addEventListener("click", ()=>{
  debugger
  if(isOptionSelected){
    isTimerReload=true} 

  if(isNextTimerReload || isTimerReload){
    countDownValue = 60
    isTimerReload = false
    isNextTimerReload=false
  }
  
  
  clearInterval(stopCountDown)  //clear privous Q's countdown
          stopCountDown = setInterval(() => {
            countDownValue--
            let formattedValue = String(countDownValue).padStart(2, "0")
            localStorage.setItem ("countDownStored" , countDownValue)
            countDown.textContent = formattedValue
          if (countDownValue <= 0){
            clearInterval(stopCountDown)           // terminate countdown after reach to 0
          }
          }, 1000);
          
        
})


 //event for next question
next.addEventListener("click" , ()=>{    
      isNextClicked = true           ////to stop the timer from page 1
        i++
        if( isOptionSelected){         //if option not selected not able to go for next question
        if(currentQuestion > setOfQuestions.length){
          
          resultPage.classList.remove("hidden")
          questionPage.classList.add("hidden")
        } else {
          question.innerText=setOfQuestions[currentQuestion-1].question;
          option2.innerText=setOfQuestions[currentQuestion-1].option2;
          option3.innerText=setOfQuestions[currentQuestion-1].option3;
          option4.innerText=setOfQuestions[currentQuestion-1].option4;
          option1.innerText=setOfQuestions[currentQuestion-1].option1;
          rightAnswer.innerText=setOfQuestions[currentQuestion-1].correctAnswer;
        }} else{
          console.log("select the option")
        }
        isOptionSelected=false
 } 
)


const pageBGColor = document.querySelector(".question-page")  // for background color
next.addEventListener("click", ()=>{
  pageBGColor.style.backgroundColor ="rgba(204, 226, 194, 1)"
  pageBGColor.style.transition="0.1s"
  setTimeout(() => {
    pageBGColor.style.backgroundColor ="rgba(219, 173, 173, 1)"
    pageBGColor.style.transition = "60s"
  }, 1000);
})




// event to remove selected options css for next Question
next.addEventListener("click", ()=>{
  options.forEach((option)=>{
    option.classList.remove("border-right", "border-wrong")
    option.children[1].classList.add("hidden")
    option.children[2].classList.add("hidden")
  })
})


let scoreCard = document.querySelector("#result-score")      //score text
const progress = document.querySelector("#incresing-bar")    //to show progress


// event to update the score for correct answers
next.addEventListener( "click" , ()=>{
let score = localStorage.getItem("score")
let formattedScore = String(score).padStart(2, "0")
  scoreCard.textContent = `${formattedScore}/25`    
  progress.style.width = `${score /25 *100}%`      // update progress bar bg color
  updateQuote(score)                               //callback function to update quote
})


let score = localStorage.getItem("score")


const quote = document.querySelector("#quote")
function updateQuote(x) {
  if ( x < 10){
    quote.textContent = " Don't Loose Hopes, But Study Hard"
  } else if (x>= 10 && x<19){
    quote.textContent = "Keep Learning, You've a Good Score"
  } else {
    quote.textContent = " excellent ! you have achieved a Mastery !!"
  }
}

const highScore = document.querySelector("#highScore")

if(score == null){
  highScore.textContent = `Highest Score :`
} else {
  highScore.textContent = `Highest Score :${score}`
}

const retry = document.querySelector("#retry")

retry.addEventListener( "click" , ()=>{

  resultPage.classList.add("hidden")
  initialPage.classList.remove("hidden")
  let finalScore = localStorage.getItem("score")
  highScore.textContent = `Highest Score :${finalScore}`
  localStorage.removeItem("score")
  scoreCount = 0;
})

if(currentQuestion>25){
  currentQuestion =1
}

window.addEventListener("beforeunload", () => {
  localStorage.removeItem("countDownStored");
  
});
