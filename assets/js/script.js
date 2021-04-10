//Questions in an object array
var myJSON = JSON.stringify(question);
var question = [];
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
        q : "Question 2",
        a : [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4"
        ]

    },
    {
        q : "Question 3",
        a : [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4"
        ]

    },
    {
        q : "Question 4",
        a : [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4"
        ]

    },
    {
        q : "Question 5",
        a : [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4"
        ]

    },
    {
        q : "Question 6",
        a : [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4"
        ]

    },
    {
        q : "Question 7",
        a : [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4"
        ]

    },
    {
        q : "Question 8",
        a : [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4"
        ]

    },
    {
        q : "Question 9",
        a : [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4"
        ]

    },
    {
        q : "Question 10",
        a : [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4"
        ]

    },

];



//query selector for html buttons
var startButton = document.querySelector(".start-button");
var scoresButton = document.querySelector(".scores-button");

//other query selectors
var questionContainer = document.querySelector("#q-a-container");
var startMenuContainer = document.querySelector("#start-menu-container");

//Start quiz button event listener
startButton.addEventListener("click", function(event) {
    event.preventDefault();

    startQuiz();

    console.log("did i work? yes i did")
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
    
}