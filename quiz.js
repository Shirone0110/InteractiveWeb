var Start = function()
{
    document.querySelector("#button1").style.visibility = "hidden";
    
    var NextQuestion = document.createElement("button");
    NextQuestion.innerText = "Next Question";
    
    document.querySelector("body").appendChild(NextQuestion);
}

var EndQuiz = function()
{
    var EndButton = document.createElement("button");
    EndButton.innerText = "End Quiz";
    
    document.querySelector("body").appendChild(EndButton);
}