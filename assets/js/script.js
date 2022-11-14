// I went with manipulate current.  One appendage use in Highscores.
// All variables claimed to attach to tags either by class or id.

var ViewHighscores = document.querySelector(".View-Highscores");
var Timer = document.querySelector("#Time-Entered");
var IntroQuestion = document.querySelector("#Intro-Question");
var Directions = document.querySelector("#Directions");
var StartSubmit = document.querySelector(".Start-Submit");
var Answer = document.querySelector(".Answer")
var A1 = document.querySelector("#A1");
var A2 = document.querySelector("#A2");
var A3 = document.querySelector("#A3");
var A4 = document.querySelector("#A4");
var AnswerOutput = document.querySelector(".Answer-Output");
var CorrectWrong = document.querySelector(".Poppin");
var Wrong = -10;



//1.  Which of the following type of variable is visible everywhere in your JavaScript code?
//a - global variable <--
//b - local variable
//c - Both of the above.
//d - None of the above.

//2.  Which built-in method returns the length of the string?
//a - index()
//b - size()
//c - length() <--
//d - None of the above,

//3.  Which of the following function of Array object removes the last element from an array and returns that element?
//a - push() 
//b - pop() <--
//c - join()
//d - map()

//4.  Which of the following is true about 'typeof' operator in JavaScript?
//a - The typeof is a unary operator that is placed before its single operand, which can be of any type.
//b - Its value is a string indicating the data type of the operand.
//c - Both of the above. <--
//d - None of the above.

//5. Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?
//a - anchor()
//b - big()
//c - blink()
//d - bold() <--



//Content output during page load.
ViewHighscores.textContent = "View Highscores";
//Timer.textContent = "0";
//IntroQuestion.textContent = "Coding Quiz Challenge";
//Directions.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that an incorrect answer will penalize your scoretime by 10 seconds.";
//StartSubmit.textContent = "Start Quiz";

//Question page test for display code.
// for timer we'll need to add to it Timer.textContent = whatever function is running it and subtracting from it.
IntroQuestion.textContent = "Example example example example example example example example example example example example example example?";
IntroQuestion.setAttribute("style", "text-align: left; font-size: 125%;");
Directions.setAttribute("style", "text-align: left; display: none;");
StartSubmit.textContent = "Submit";
StartSubmit.setAttribute("style", "display: none;");
A1.textContent = "a\xa0  test a";
A2.textContent = "b\xa0  test b";
A3.textContent = "c\xa0  test c";
A4.textContent = "d\xa0  test d";
A1.setAttribute("style", "display: block;");// can't get for to work four times for me ???
A2.setAttribute("style", "display: block;");
A3.setAttribute("style", "display: block;");
A4.setAttribute("style", "display: block;");

var Correct = AnswerOutput;
var Wrong = AnswerOutput;
AnswerOutput.setAttribute("style", "display: block;");//when answer selected display block
CorrectWrong.textContent = "Correct!";
//CorrectWrong.textContent = "Wrong!";





//Start Quiz Button- function Quiz()
//Some kind of timer function.
//h2 font-size: 125%; change text to question inside key.
//Answer Button- display: block;
//Answer Button click- display: block; class ".Poppin", change text depending if Correct/Wrong, Reduce timer by 10 if Wrong.
//Next Question- start with class ".Poppin" display: none; h2- gets new question, Answer Button-s- get new answers.
//Repeat
//
//Pass the timer for the next function
//Go into Quiz finish

//Quiz Finish- start with Answer Buttons- display: none; Class Poppin- display:none;, h2- change text, id "#Directions"- display block; change text and + timer, An indexbox- display inline-block;, Submit button- display inline-block;.

//Submit Button- to Highscores

//Highscores- append p for any inital input- will probably need variable for current user, "Style", "background-color: rgb(212,178,231);"
//Go Back button- function reload to Intro but keep highscores.
//Go Back button after: Clear Highscores- redirect to page link.
//Clear Highscores button- clear key containing highscores.


































