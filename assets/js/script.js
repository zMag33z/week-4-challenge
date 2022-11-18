// Variables Claimed.  Target by class or id.
var ViewHighscores = document.querySelector(".View-Highscores");
var Timer = document.querySelector(".Timer");
var Time = document.querySelector("#Time-Entered");
var Main = document.querySelector("main")
var IntroQuestion = document.querySelector("#Intro-Question");
var Directions = document.querySelector("#Directions");
var StartQuiz = document.querySelector(".Start-Quiz");
var AnswerContainer = document.querySelector(".Answer-Container");
var Answer = document.querySelector(".Answer");
var A1 = document.querySelector("#A1");
var A2 = document.querySelector("#A2");
var A3 = document.querySelector("#A3");
var A4 = document.querySelector("#A4");
var UserInitials = document.querySelector("#User");
var AnswerOutput = document.querySelector(".Answer-Output");
var CorrectWrong = document.querySelector(".Poppin");

//Question Key
var Fragen = [
{
Question: '1.  Which of the following type of variable is visible everywhere in your JavaScript code?',
A: 'a - global variable',
B: 'b - local variable',
C: 'c - Both of the above.',
D: 'd - None of the above.',
Correct:  "A",
},{
Question: '2.  Which built-in method returns the length of the string?',
A: 'a - index()',
B: 'b - size()',
C: 'c - length()',
D: 'd - None of the above',
Correct: "C",
},{
Question: '3.  Which of the following function of Array object removes the last element from an array and returns that element?',
A: 'a - push()',
B: 'b - pop()',
C: 'c - join()',
D: 'd - map()',
Correct: "B",
},{
Question: '4.  Which of the following is true about "typeof" operator in JavaScript?',
A: 'a - The typeof is a unary operator that is placed before its single operand, which can be of any type.',
B: 'b - Its value is a string indicating the data type of the operand.',
C: 'c - Both of the above.',
D: 'd - None of the above.',
Correct: "C",
},{
Question: '5. Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?',
A: 'a - anchor()',
B: 'b - big()',
C: 'c - blink()',
D: 'd - bold()',
Correct: "D",
}
]

// User Key
var Users = [
{
  Initials: "",
  Score: "",
}
]
/*
// Event Listener target Start Quiz
StartQuiz.addEventListener("click", QuizStart);

//Onload Display
window.onload = function Welcome() {
  
  AnswerContainer.setAttribute("style", "display: none;");
  UserInitials.setAttribute("style", "display: none;");
  AnswerOutput.setAttribute("style", "display: none;");
  ViewHighscores.textContent = "View Highscores";
  Time.textContent = secondsLeft;
  IntroQuestion.textContent = "Coding Quiz Challenge";
  Directions.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that an incorrect answer will penalize your scoretime by 10 seconds.";
  StartQuiz.textContent = "Start Quiz";
}
let secondsLeft = "0";
// Start Quiz after eventlistener
let TIMER;

function QuizStart() {
  Time.textContent = secondsLeft;
  Directions.setAttribute("style", "display: none;");
  StartQuiz.setAttribute("style", "display: none;");
  IntroQuestion.setAttribute("style", "font-size: 125%; text-align: left;");
  AnswerContainer.setAttribute("style", "display: block;");
  //TIMER = setInterval(setTime, 1000);
//setTime();
Questions();
}
/*
//Shitty timer can't get it to work
let secondsLeft = "75";

function setTime() {
  if(secondsLeft < 0) {
    secondsLeft--;
  }else{
    secondsLeft = 0;
GameOver();
  }
}

// Questions display function
const LastQuestion = Fragen.length -1;
let QuestionOrder = 0;

function Questions() {
  if(QuestionOrder === Fragen.length) {   //Exit Questions
Finish();
  }else{
    console.log("should see this after 5")
    AnswerOutput.setAttribute("style", "display: none;");
    let q = Fragen[QuestionOrder];
    IntroQuestion.textContent = q.Question;
    A1.textContent = q.A;
    A2.textContent = q.B;
    A3.textContent = q.C;
    A4.textContent = q.D;
  }
}

// Check Answer after button clicked.  Targeted by HTML button tags.
function CheckAnswer(answer) {
  if(Fragen[QuestionOrder].Correct == answer) {
    CorrectWrong.textContent = "Correct!";
    AnswerOutput.setAttribute("style", "display: block;");
    QuestionOrder++;
Questions();
  }else{
    CorrectWrong.textContent = "Wrong!";
    AnswerOutput.setAttribute("style", "display: block;");
    secondsLeft = secondsLeft - 10;
    QuestionOrder++;
Questions();
  }
}

// Finish Enter Initials 
function Finish() {
  AnswerContainer.setAttribute("style", "display: none;");
  IntroQuestion.textContent = "All done!";
  UserInitials.setAttribute("style", "display: inline-block;");
  Directions.textContent = "Your final score is\xa0" + Time.textContent;
  console.log("finish?");
  //click submit head to next function.
}

// Game Over   Go Back try again or wipe scores.
function GameOver() {
  ViewHighscores.setAttribute("style", "visibility: hidden;");// only hidden to keep tag field spacing.
  Timer.setAttribute("style", "visibility: hidden;");
  UserInitials.setAttribute("style", "display: none;");
  IntroQuestion.setAttribute("style", "font-size: 150%;");
  IntroQuestion.textContent = "Highscores";
  console.log("gavmeover?");
}


//if highscores not cleared allow to quiz start and keep global variable.
//if there is a highscores record then append new p for each. will probably need variable for current user, "Style", "background-color: rgb(212,178,231);"
function WipeScores() {

}

*/