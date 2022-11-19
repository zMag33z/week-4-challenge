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

//These are my exit compared to one another after cycling.
const LastQuestion = Fragen.length -1;
let QuestionOrder = 0;

// 2.  Event Listener target Start Quiz
StartQuiz.addEventListener("click", QuizStart);
// 8.  Event Lister for Initial and Score Submission.
UserInitials.addEventListener("submit", function(e) {
e.preventDefault();
GameOver();
});

// 1.  Onload Display
window.onload = function Welcome() {
  AnswerContainer.setAttribute("style", "display: none;");
  UserInitials.setAttribute("style", "display: none;");
  AnswerOutput.setAttribute("style", "display: none;");
  ViewHighscores.textContent = "View Highscores";
  Time.textContent = "0";
  IntroQuestion.textContent = "Coding Quiz Challenge";
  Directions.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that an incorrect answer will penalize your scoretime by 10 seconds.";
  StartQuiz.textContent = "Start Quiz";
}

// 3.  Start Quiz after eventlistener.
function QuizStart() {
  Main.setAttribute("style", "text-align: left;")
  Directions.setAttribute("style", "display: none;");
  StartQuiz.setAttribute("style", "display: none;");
  IntroQuestion.setAttribute("style", "font-size: 125%;");
  AnswerContainer.setAttribute("style", "display: block;");
timer();  
Questions();
}

 //timer function here
var Score = 75;

 function timer(){
var oneSecond = setInterval(function(){
      if (Score == 0){ 
          clearInterval(oneSecond);
          GameOver();
      } else {
        Score--;
        Time.textContent = Score;
      }
  },1000)
}

// 4.  Question Display function to Question key.
// 6.  Comes back to see if Key length met.

function Questions() {
  if(QuestionOrder === Fragen.length) {   //Exit Questions
setTimeout(Finish, 1000);   //Slowed down Finish Display.  Didn't like the Answer Output under Finish.
//Finish();
  }else{    
    let q = Fragen[QuestionOrder];
    IntroQuestion.textContent = q.Question;
    A1.textContent = q.A;
    A2.textContent = q.B;
    A3.textContent = q.C;
    A4.textContent = q.D;
  }
}

// 5.  Check Answer after button clicked.  Targeted by internal HTML button tags.
function CheckAnswer(answer) {
setTimeout(Popped, 500); // Set off popped after 1 sec.
  if(Fragen[QuestionOrder].Correct == answer) {
    CorrectWrong.textContent = "Correct!";
    AnswerOutput.setAttribute("style", "display: block;");
    QuestionOrder++;
Questions();
  }else{
    CorrectWrong.textContent = "Wrong!";
    AnswerOutput.setAttribute("style", "display: block;");
    Score - 10;
    QuestionOrder++;
Questions();
  }
}

// 5.5 Answer Output disappears
function Popped() {
  AnswerOutput.setAttribute("style", "display: none;");
 }

// 7.  Finish Enter Initials and Submit score.  Next function by Submit button as eventlistner.
// Possibly slow load on this til pop up disappears.
function Finish() {
  Directions.setAttribute("style", "display: block;")
  AnswerContainer.setAttribute("style", "display: none;");  
  UserInitials.setAttribute("style", "display: inline-block;");
  IntroQuestion.textContent = "All done!";
  Directions.textContent = "Your final score is\xa0" + Time.textContent + ".";
}

// User Key
var Users = [
  {
    Initials: "",
    Score: "",
  }
  ]
  
// 9.  Game Over   Go Back try again or wipe scores.
function GameOver() {
  ViewHighscores.setAttribute("style", "visibility: hidden;");// only hidden to keep tag field spacing.
  Timer.setAttribute("style", "visibility: hidden;");
  Directions.setAttribute("style", "display: none;");
  StartQuiz.setAttribute("style", "display: none;");
  AnswerContainer.setAttribute("style", "display: none;");
  UserInitials.setAttribute("style", "display: none;");
  IntroQuestion.setAttribute("style", "font-size: 175%;");
  IntroQuestion.textContent = "Highscores";
}

//if highscores not cleared allow to quizstart and keep global variable.
//if there is a highscores record then append new p for each. will probably need variable for current user, "Style", "background-color: rgb(212,178,231);"
function WipeScores() {

}

