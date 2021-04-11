



//query selector for html buttons
var startButton = document.querySelector(".start-button");
var scoresButton = document.querySelector(".scores-button");

//other query selectors
var questionContainer = document.querySelector("#q-a-container");
var startMenuContainer = document.querySelector("#start-menu-container");
var questionElement = document.querySelector("#question");
var answerOne = document.querySelector("#choice-1");
var answerTwo = document.querySelector("#choice-2");
var answerThree = document.querySelector("#choice-3");
var answerFour = document.querySelector("#choice-4");

//Start quiz button event listener
startButton.addEventListener("click", function(event) {
    event.preventDefault();

    startQuiz();

    console.log("did i work? yes i did")
    console.log(questionList);
}); 

//check highscores button event listener
scoresButton.addEventListener("click", function(event) {
    event.preventDefault();

    //showScores();

    console.log("did i work? yes i did")
}); 


function startQuiz() {

    startMenuContainer.classList.add("hide");
    questionContainer.classList.remove("hide");

    nextQuestion();



}

function nextQuestion() {

    var questionIndex = Math.floor(Math.random() * questionList.length);

    questionElement.innerHTML = questionList[questionIndex].q;
    answerOne.innerText = questionList[questionIndex].a[0];
    answerTwo.innerText = questionList[questionIndex].a[1];
    answerThree.innerText = questionList[questionIndex].a[2];
    answerFour.innerText = questionList[questionIndex].a[3];
    

}

    




//Questions in an object array
var randomQuestion = [];
var questionList = [
    {
        q : "Which container would you put the <title></title> element in?",
        a : [
            "<body></body>",
            "<div></div>",
            "<main></main>",
            "<head></head>"
        ]
    },
    {
        q : "What does CSS stand for?",
        a : [
            "Cascading Style Sheets",
            "Concaving Style Sheets",
            "Curriculum Style Socket",
            "Computer Sheet Styler"
        ]

    },
    {
        q : "What is the first line in every index.HTML?",
        a : [
            "<DOCTYPE html>",
            "!DOCTYPE html",
            "<!DOCTYPE html>",
            "DOCTYPE html"
        ]

    },
    {
        q : "What is an algorithm?",
        a : [
            "A list of instructions",
            "A programming language",
            "Computer Code",
            "A type of bread"
        ]

    },
    {
        q : "Finding and fixing problems in code is known as what?",
        a : [
            "Automating",
            "Programming",
            "Faceroll",
            "Debugging"
        ]

    },
    {
        q : "Which HTML tag is used to define an internal style sheet?",
        a : [
            "<style></style>",
            "<script></script>",
            "<css></css>",
            "<div></div>"
        ]

    },
    {
        q : "How do you insert a comment in a CSS file?",
        a : [
            "/ this is a comment",
            "// this is a comment",
            "<!--this is a comment-->",
            "<this is a comment>"
        ]

    },
    {
        q : "Which property is used to change background color?",
        a : [
            "color",
            "bgs",
            "background-color",
            "bgcolor"
        ]

    },
    {
        q : "Inside which HTML element do we put the JavaScript?",
        a : [
            "<scripting></scripting>",
            "<js></js>",
            "<style></style>",
            "<script></script>"
        ]

    },
    {
        q : "How do you create a Function in JavaScript?",
        a : [
            "function = myFunction",
            "createFunction.myFunction",
            "function myFunction()",
            "function:myFunction()"
        ]

    },

];