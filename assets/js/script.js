// Bad Practice
// I went with manipulate current.

// All variables claimed to attach to tags either by class or id.

var ViewHighscores = document.querySelector(".View-Highscores");
var Timer = document.querySelector(".Timer");
var Time = document.querySelector("#Time-Entered");
var Main = document.querySelector("main")
var IntroQuestion = document.querySelector("#Intro-Question");
var Directions = document.querySelector("#Directions");
var StartSubmit = document.querySelector(".Start-Submit");
var AnswerContainer = document.querySelector(".Answer-Container");
var Answer = document.querySelector(".Answer");
var A1 = document.querySelector("#A1");
var A2 = document.querySelector("#A2");
var A3 = document.querySelector("#A3");
var A4 = document.querySelector("#A4");
var UserInitials = document.querySelector("#User");
var AnswerOutput = document.querySelector(".Answer-Output");
var CorrectWrong = document.querySelector(".Poppin");





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





StartSubmit.addEventListener("click", QuizStart);

onload = function Welcome() {
  //Content output during page load.
  AnswerContainer.setAttribute("style", "display: none;");
  UserInitials.setAttribute("style", "display: none;");
  AnswerOutput.setAttribute("style", "display: none;");
  ViewHighscores.textContent = "View Highscores";
  Time.textContent = "0";
  IntroQuestion.textContent = "Coding Quiz Challenge";
  Directions.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that an incorrect answer will penalize your scoretime by 10 seconds.";
  StartSubmit.textContent = "Start Quiz";
}

function QuizStart() {
  Time.textContent = secondsLeft;
  Directions.setAttribute("style", "display: none;");
  StartSubmit.setAttribute("style", "display: none;");
  IntroQuestion.setAttribute("style", "font-size: 125%; text-align: left;");
  AnswerContainer.setAttribute("style", "display: block;");
  TIMER = setInterval(setTime, 1000);
setTime();
Questions();
}

let secondsLeft = 75;

function setTime() {
  if(secondsLeft < 0) {
    secondsLeft--;
  }else{
    secondsLeft = 0;
    GameOver();
  }
}

const FragenIndex = Fragen.length - 1;
let QuestionOrder = 0;

function Questions() {
  let q = Fragen[QuestionOrder];
  IntroQuestion.textContent = q.Question;
  A1.textContent = q.A;
  A2.textContent = q.B;
  A3.textContent = q.C;
  A4.textContent = q.D;
}

function CheckAnswer(answer) {
  if(Fragen[QuestionOrder].Correct == answer) {
    CorrectWrong.textContent = "Correct!";
    AnswerOutput.setAttribute("style", "display: block;");
    ContinueQuestions();
  }else{
    CorrectWrong.textContent = "Wrong!";
    AnswerOutput.setAttribute("style", "display:block;");
    secondsLeft - 10;
    ContinueQuestions();
  }
  if(QuestionOrder = Fragen.length) {
    Finish();
  }

}

function ContinueQuestions() {
  if(QuestionOrder < FragenIndex) {
    QuestionOrder++;
    Questions();
  }
}

function Finish() {

}

function GameOver() {

}

function WipeScores() {

}









/*
//Question page test for display code.

for(var i = 0; i < Answers.length; i++) {
    Answer.setAttribute("style", "display: none;");
}

// for timer we'll need to add to it Timer.textContent = whatever function is running it and subtracting from it.
IntroQuestion.textContent = "Example example example example example example example example example example example example example example?";
Main.setAttribute("style", "text-align: left;");

var Correct = AnswerOutput;
var Wrong = AnswerOutput;
AnswerOutput.setAttribute("style", "display: block;");//when answer selected display block
CorrectWrong.textContent = "Correct!";
CorrectWrong.textContent = "Wrong!";
//End of questions move to next function and pass time.
*/


/*
//Finish Enter Initials
A1.setAttribute("style", "display: none;");// can't get for to work four times for me ???
A2.setAttribute("style", "display: none;");
A3.setAttribute("style", "display: none;");
A4.setAttribute("style", "display: none;");
AnswerOutput.setAttribute("style", "display: none;");
IntroQuestion.textContent = "All done!";
Directions.textContent = "Your final score is\xa0" + Time.textContent;
Directions.setAttribute("style", "display: block;");
StartSubmit.setAttribute("style", "display: inline-block;");
//click submit head to next function.
*/


/*
//Highscores
//Retrieve initals and score
ViewHighscores.setAttribute("style", "visibility: hidden;");
Timer.setAttribute("style", "visibility: hidden;");
Directions.setAttribute("style", "display: none;");
StartSubmit.setAttribute("style", "display: none;");
UserInitials.setAttribute("style", "display: none;");
IntroQuestion.textContent = "Highscores";
IntroQuestion.appendChild(Scored);


function countdown() {
    var timeLeft = 75;
  

}
*/


//if there is a highscores record then append new p for each. will probably need variable for current user, "Style", "background-color: rgb(212,178,231);"
//if highscores not cleared allow to quiz start and keep global variable.
