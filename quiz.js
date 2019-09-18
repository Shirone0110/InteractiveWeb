var NextQuestion = document.createElement("button");
NextQuestion.innerText = "Next Question";

var Q = document.createElement("h2");
var ansA = document.createElement("button");
var ansB = document.createElement("button");
var ansC = document.createElement("button");
var ansD = document.createElement("button");

ansA.id = "answerA";

var cnt = 0;

var Start = function()
{
    document.querySelector("#button1").style.visibility = "hidden";
   
    document.querySelector("body").appendChild(Q);
    document.querySelector("body").appendChild(ansA);
    document.querySelector("body").appendChild(ansB);
    document.querySelector("body").appendChild(ansC);
    document.querySelector("body").appendChild(ansD);
    document.querySelector("body").appendChild(NextQuestion);
}

var Questions = 
[
    {
        ques: "What is a <p> element?",
        A: "a paragraph",
        B: "a text header",
        C: "a list",
        D: "a link"
    },
    {
        ques: "What is a <li> element?",
        A: "a list",
        B: "a text header",
        C: "a link",
        D: "a paragraph"
    },
    {
        ques: "What is a <h1> element?",
        A: "a text header",
        B: "a list",
        C: "a paragraph",
        D: "a link"
    },
    {
        ques: "What is a <a> element?",
        A: "a link",
        B: "a text header",
        C: "a list",
        D: "a paragraph"
    }
];

var setQuestion = function()
{
    
}

NextQuestion.onclick = setQuestion();