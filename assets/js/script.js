/*Excuse within the Functions, the push to Next Functions being aligned all the way to left.
Was easier for eye targeting the flow.  Left as is for future reference.*/

// Variables Claimed.  Target by class or id.
var ViewHighscores = document.querySelector(".View-Highscores");
var Timer = document.querySelector(".Timer");
var Time = document.querySelector("#Time-Entered");
var Main = document.querySelector("main")
var IntroQuestion = document.querySelector("#Intro-Question");
var Directions = document.querySelector("#Directions");
var StartQuiz = document.querySelector(".Start-Quiz");
var AnswerContainer = document.querySelector("#Answer-Container");
var Answer = document.querySelector(".Answer");
var A1 = document.querySelector("#A1");
var A2 = document.querySelector("#A2");
var A3 = document.querySelector("#A3");
var A4 = document.querySelector("#A4");
var AnswerOutput = document.querySelector(".Answer-Output");
var CorrectWrong = document.querySelector(".Poppin");
var UserInitials = document.querySelector("#User");
var InitialsInput = document.querySelector("#Int");
var ClearScores = document.querySelector(".Clear-Scores");
var DisplayScore;

//Question Key
var Fragen = [  //German: Fragen means Questions.  Needed another question variable name.
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


// 1.  Onload Display
window.onload = function Welcome() {
  ViewHighscores.textContent = "View Highscores";
  Time.textContent = "0";
  IntroQuestion.textContent = "Coding Quiz Challenge";
  Directions.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that an incorrect answer will penalize your scoretime by 10 seconds.";
  StartQuiz.textContent = "Start Quiz";
  IntroQuestion.classList.toggle("Toggle-Display", false);  // Went with class toggle to seperate setAttribute style from display.
  Directions.classList.toggle("Toggle-Display", false);
  StartQuiz.classList.toggle("Toggle-Display", false);
}

// 2.  Event Listener target Start Quiz.  Second Click event Reload page.  clickCount variable to keep count.
let clickCount = 1;

StartQuiz.addEventListener("click", function() {
    if(clickCount === 2) {
      window.location.reload();
    } else {
QuizStart();     
    }
    clickCount++;
});

// 3.  Start Quiz after eventlistener.
function QuizStart() {
  Main.setAttribute("style", "text-align: left;");
  IntroQuestion.setAttribute("style", "height: 84px; font-size: 125%;");
  Directions.classList.toggle("Toggle-Display", true);
  StartQuiz.classList.toggle("Toggle-Display", true);  
  AnswerContainer.classList.toggle("Toggle-Display", false);
timer();  
Questions();
}

 // 3.5 timer function here
var oneSecond;
let Score = 75;

 function timer(){
  oneSecond = setInterval(function(){
      if (Score === 0){
clearInterval(oneSecond);
GameOver();
      } else {
        Score--;
        Time.textContent = Score;
      }
  },1000)
}

// 4.  Question Display function to Question key.
const LastQuestion = Fragen.length -1; //These are my exit compared to one another after cycling.
let QuestionOrder = 0;

function Questions() {
  if(QuestionOrder === Fragen.length) {  //Exit Questions
clearInterval(oneSecond);   //Stopped timer here to not interfere with true time for User with delayed Finish display.
setTimeout(Finish, 1000);   //Slowed down Finish Display.  Didn't like the Answer Output being displayed during Finish function.
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
      AnswerOutput.classList.toggle("Toggle-Display", false);
      QuestionOrder++;
  Questions();
    }else{
      CorrectWrong.textContent = "Wrong!";
      AnswerOutput.classList.toggle("Toggle-Display", false);
      Score = Score - 10;
      Time.textContent = Score;  // Needed to capture final score text output.
      QuestionOrder++;
  Questions();
    }
  }
  
// 5.5  Answer Output disappears
function Popped() {
  AnswerOutput.classList.toggle("Toggle-Display", true);
 }

// 6.  Finish Enter Initials and Submit score.  Next GameOver function by Submit button as eventlistner.
function Finish() {
  IntroQuestion.setAttribute("style", "height: auto;")
  IntroQuestion.textContent = "All done!";
  Directions.innerHTML = "Your final score is " + Time.textContent + ".";
  Directions.classList.toggle("Toggle-Display", false);
  AnswerContainer.classList.toggle("Toggle-Display", true);  
  UserInitials.classList.toggle("Toggle-Display", false);
}

// 7.  Event Lister for Initial and Score Submission to GameOver function. JSON Parse method included here.  Had to create function any how to prevent default.  May as well use it.
//  Places user inititals and score into localstorage.
UserInitials.addEventListener("submit", function(e) {
e.preventDefault();

  if(localStorage.getItem("Players") == null) {
    localStorage.setItem("Players", `[]`);
  }

  var Player =                             // Shout out to person in my credits.  Could not figure this our for three days.  The array part any who.
    {
      Player: InitialsInput.value,
      Scored: Score
    };

  var PreviousPlayers = JSON.parse(localStorage.getItem("Players"));
  PreviousPlayers.push(Player);
  localStorage.setItem("Players", JSON.stringify(PreviousPlayers));
Loadscores();
});



// 9.  Game Over   Go Back try again or wipe scores.
function GameOver() {
  ViewHighscores.setAttribute("style", "visibility: hidden;");// only hidden to keep object field spacing.
  Timer.setAttribute("style", "visibility: hidden;");
  Main.setAttribute("style", "text-align: center; width: 284px;");
  IntroQuestion.setAttribute("style", "font-size: 175%;");
  StartQuiz.setAttribute("style", "display: inline-block;");
  ClearScores.setAttribute("style", "display: inline-block;");
  IntroQuestion.textContent = "All done!";
  IntroQuestion.textContent = "Highscores";
  StartQuiz.textContent = "Go Back";
  Directions.classList.toggle("Toggle-Display", true);
  StartQuiz.classList.toggle("Toggle-Display", true);
  AnswerContainer.classList.toggle("Toggle-Display", true);
  UserInitials.classList.toggle("Toggle-Display", true);
}

// LoadScores created to bypass console error when loading from highscores button.
var RecordPull = [];
function Loadscores(){
  RecordPull = JSON.parse(localStorage.getItem("Players"));
  for(let i = 0; i < RecordPull.length; i++) {
    DisplayScore = document.createElement("p");
    DisplayScore.classList.add("Scores");
    DisplayScore.innerHTML = RecordPull[i].Player + " - " + RecordPull[i].Scored;  
    IntroQuestion.parentNode.insertBefore(DisplayScore, IntroQuestion.nextSibling);  
  }
GameOver();
}

// 10.  Event Listener for ClearScores function
ClearScores.addEventListener("click", function() {
console.log(RecordPull);
  DisplayScore.remove();
  
  localStorage.clear();
});

// Add this to GameOver
//function Records()
//For future reference:  parentGuest.parentNode.insertBefore(childGuest, parentGuest.nextSibling);  IntroQuestion.parentNode.insertBefore(DisplayScore, IntroQuestion.nextSibling);