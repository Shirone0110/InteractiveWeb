var NextQuestion = document.createElement("button");
NextQuestion.innerText = "Next Question";

var Q = document.createElement("h2");
var ansA = document.createElement("button");
var ansB = document.createElement("button");
var ansC = document.createElement("button");
var ansD = document.createElement("button");
var correct = 0;
var cnt = 0;

ansA.style.display = "block";
ansA.style.background = "none";
ansA.style.marginBottom = "20px";

ansB.style.display = "block";
ansB.style.background = "none";
ansB.style.marginBottom = "20px";

ansC.style.display = "block";
ansC.style.background = "none";
ansC.style.marginBottom = "20px";

ansD.style.display = "block";
ansD.style.background = "none";
ansD.style.marginBottom = "20px";

var Start = function()
{
    document.querySelector("#button1").style.visibility = "hidden";
    
    setQuestion();
   
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

var disable = function()
{
    ansA.setAttribute("onclick", null);
    ansB.setAttribute("onclick", null);
    ansC.setAttribute("onclick", null);
    ansD.setAttribute("onclick", null);
    NextQuestion.setAttribute("onclick", "setQuestion()");
}

var clickA = function()
{
    ansA.style.background = "green";
    console.log("Hooray");
    correct++;
    disable();
}

var clickB = function()
{
    ansB.style.background = "red";
    disable();
}

var clickC = function()
{
    ansC.style.background = "red";
    disable();
}

var clickD = function()
{
    ansD.style.background = "red";
    disable();
}

var enable = function()
{
    ansA.setAttribute("onclick", "clickA()");
    ansA.style.background = "none";
    ansB.setAttribute("onclick", "clickB()");
    ansB.style.background = "none";
    ansC.setAttribute("onclick", "clickC()");
    ansC.style.background = "none";
    ansD.setAttribute("onclick", "clickD()");
    ansD.style.background = "none";
    NextQuestion.setAttribute("onclick", null);
}

var setQuestion = function()
{
    if (cnt == 4)
    {
        ansA.style.visibility = "hidden";
        ansB.style.visibility = "hidden";
        ansC.style.visibility = "hidden";
        ansD.style.visibility = "hidden";
        NextQuestion.style.visibility = "hidden";
        Q.innerText = "Your score is " + correct.toString();
    }
    Q.innerText = Questions[cnt].ques;
    ansA.innerText = Questions[cnt].A;
    ansB.innerText = Questions[cnt].B;
    ansC.innerText = Questions[cnt].C;
    ansD.innerText = Questions[cnt].D;
    enable();
    cnt++;
}

if (cnt == 3)
{
    NextQuestion.innerText = "End Quiz";
}