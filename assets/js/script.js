/*Excuse carrier on functions aligned to the left.  Easier view to follow the functions.
Only problem not error but is main criteria.  Cannot get all Score displays to remove.
LocalStorage is deleted though.
Too much time already on this project.  Moving on.*/

//  Variables Claimed.  Target by class or id.
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
var DisplayScore;  //  Only claimed as name variable to be used and passed through two functions.

//  Question Key
var Fragen = [  //  German: Fragen means Questions.  Needed another question variable name.
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
  IntroQuestion.classList.toggle("Toggle-Display", false);  //  Went with class toggle to seperate setAttribute style from display.
  Directions.classList.toggle("Toggle-Display", false);
  StartQuiz.classList.toggle("Toggle-Display", false);
}

// 2.  Event Listener target Start Quiz.  Second Click event Reload page.  clickCount variable to keep count.
let clickCount = 1;  // Claimed Globally to be added to through other click events.
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
var oneSecond;  // Global variable to be cleared from another function.
let Score = 75; // Time is the Score.
 function timer(){
  oneSecond = setInterval(function(){
      if (Score === 0){
clearInterval(oneSecond);
LoadScores();
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
  if(QuestionOrder === Fragen.length) {  // Exit Questions
clearInterval(oneSecond);   //Stopped timer here to not interfere with true time for User Score.
setTimeout(Finish, 1000);   //Slowed down Finish Display.  Didn't like the Answer Output (Correct/Wrong) being displayed during Finish function.
  }else{    
    let q = Fragen[QuestionOrder];
    IntroQuestion.textContent = q.Question;
    A1.textContent = q.A;
    A2.textContent = q.B;
    A3.textContent = q.C;
    A4.textContent = q.D;
  }
}

// 5.  Check Answer after click event.  Click event targeted by internal HTML button tags.
function CheckAnswer(answer) {
  setTimeout(Popped, 500); // Set off popped after 1/2 sec.
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
  
// 5.5  Answer Output disappears.  On setTimeout function by 1/2 sec.
function Popped() {
  AnswerOutput.classList.toggle("Toggle-Display", true);
 }

// 6.  Finish: Enter Initials and Submit score.  Next GameOver function by Submit button as eventlistner.
function Finish() {
  IntroQuestion.setAttribute("style", "height: auto;")
  IntroQuestion.textContent = "All done!";
  Directions.innerHTML = "Your final score is " + Time.textContent + ".";
  Directions.classList.toggle("Toggle-Display", false);
  AnswerContainer.classList.toggle("Toggle-Display", true);  
  UserInitials.classList.toggle("Toggle-Display", false);
}

// 7.  Event Lister for Initial and Score Submission to GameOver function. JSON Parse method included here.  Had to create function any how to prevent default.  May as well use it.
//  Submit button coded to Save user inititals and score to localstorage.
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
LoadScores();
});

// LoadScores.  Takes current localStorage and displays Player and Score.  Created to bypass console error when loading from highscores button with no localstorage.
function LoadScores(){
  if(localStorage.length === 0){  // if localstorage empty move on to gameover display.
GameOver();
  }else{      // if from highscores button this just generates previous scores from localstorage.  but again above if it's empty just move on.
    var RecordPull = JSON.parse(localStorage.getItem("Players"));
  for(let i = 0; i !== RecordPull.length; i++) {
    DisplayScore = document.createElement("p");
    DisplayScore.classList.add("Scores");
    DisplayScore.innerHTML = RecordPull[i].Player + " - " + RecordPull[i].Scored;  // Shout out to Torre for helping with this line for display which is now applied to a for loop.
    IntroQuestion.parentNode.insertBefore(DisplayScore, IntroQuestion.nextSibling); // Places them on top of eachother so latest score is on top.
    }
GameOver();
  }
}

// 9.  Game Over display.  Go Back try again or wipe scores.
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
  console.dir(DisplayScore); 
}

// 10.  Event Listener for ClearScores function
ClearScores.addEventListener("click", function() {
//  var cycle = localStorage.length;
//  for(let i = 0; i !== localStorage.length; i++){
//  cycle[i] = DisplayScore.remove();;
//  }
DisplayScore.remove();    // Been trying for hours to remove these with multiple methods.  Even tried to rerun gameover without record but once in dom always in dom.  Aint working was last thing on agenda I believe.
localStorage.clear();
});


//For future reference:  parentGuest.parentNode.insertBefore(childGuest, parentGuest.nextSibling);  IntroQuestion.parentNode.insertBefore(DisplayScore, IntroQuestion.nextSibling);
//Legend for me to understand code lingo.  Example this one: parentGuest plug in IntroQuestion,  parentnode says its now a parent, function here is insertBefore, (who we are calling, the one accepting who as . next sibling) 