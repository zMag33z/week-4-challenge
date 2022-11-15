console.dir(document);


// I went with manipulate current.  One appendage use in Highscores.
// All variables claimed to attach to tags either by class or id.

var ViewHighscores = document.querySelector(".View-Highscores");
var Timer = document.querySelector(".Timer");
var Time = document.querySelector("#Time-Entered");
var Main = document.querySelector("main")
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
var UserInitials = document.querySelector("#User");
var Scored = document.createElement("p");




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
Time.textContent = "0";
//IntroQuestion.textContent = "Coding Quiz Challenge";
//Directions.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that an incorrect answer will penalize your scoretime by 10 seconds.";
//StartSubmit.textContent = "Start Quiz";




//Question page test for display code.
// for timer we'll need to add to it Timer.textContent = whatever function is running it and subtracting from it.
//IntroQuestion.textContent = "Example example example example example example example example example example example example example example?";
Main.setAttribute("style", "text-align: left;");
IntroQuestion.setAttribute("style", "font-size: 125%;");
//Directions.setAttribute("style", "display: none;");
//StartSubmit.textContent = "Submit";
//StartSubmit.setAttribute("style", "display: none;");
//A1.textContent = "\xa0a.\xa0  test a\xa0";
//A2.textContent = "\xa0b.\xa0  test b\xa0";
//A3.textContent = "\xa0c.\xa0  test c\xa0";
//A4.textContent = "\xa0d.\xa0  test d\xa0";
//A1.setAttribute("style", "display: block;");// can't get for to work four times for me ???
//A2.setAttribute("style", "display: block;");
//A3.setAttribute("style", "display: block;");
//A4.setAttribute("style", "display: block;");
//var Correct = AnswerOutput;
//var Wrong = AnswerOutput;
//AnswerOutput.setAttribute("style", "display: block;");//when answer selected display block
//CorrectWrong.textContent = "Correct!";
//CorrectWrong.textContent = "Wrong!";
//End of questions move to next function and pass time.




//Finish Enter Initials
//A1.setAttribute("style", "display: none;");// can't get for to work four times for me ???
//A2.setAttribute("style", "display: none;");
//A3.setAttribute("style", "display: none;");
//A4.setAttribute("style", "display: none;");
//AnswerOutput.setAttribute("style", "display: none;");
IntroQuestion.textContent = "All done!";
Directions.textContent = "Your final score is\xa0" + Time.textContent;
Directions.setAttribute("style", "display: block;");
//StartSubmit.setAttribute("style", "display: inline-block;");
//click submit head to next function.




//Highscores
//Retrieve initals and score
ViewHighscores.setAttribute("style", "visibility: hidden;");
Timer.setAttribute("style", "visibility: hidden;");
Directions.setAttribute("style", "display: none;");
StartSubmit.setAttribute("style", "display: none;");
UserInitials.setAttribute("style", "display: none;");
IntroQuestion.textContent = "Highscores";
//IntroQuestion.appendChild("p");



//if there is a highscores record then append new p for each. will probably need variable for current user, "Style", "background-color: rgb(212,178,231);"
//if highscores not cleared allow to quiz start and keep global variable.




