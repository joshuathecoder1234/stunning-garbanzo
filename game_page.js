var player1name = localStorage.getItem("player1");
var player2name = localStorage.getItem("player2");
player1score = 0;
player2score = 0;
document.getElementById("player1name").innerHTML = player1name + ":";
document.getElementById("player2name").innerHTML = player2name + ":";
document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;
document.getElementById("playerquestion").innerHTML = "question turn!" + player1name;
document.getElementById("playeranswer").innerHTML = "answer turn!" + player2name;


function send() {
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    console.log(word);
    charat1 = word.charAt(1);
    console.log(charat1);
    lenghtdivide2 = Math.floor(word.length / 2);
    charat2 = word.charAt(lenghtdivide2);
    console.log(charat2);
    minues = word.length - 1;
    charat3 = word.charAt(minues);
    console.log(charat3);
    removecharat1 = word.replace(charat1, "_");
    removecharat2 = removecharat1.replace(charat2, "_");
    removecharat3 = removecharat2.replace(charat3, "_");
    console.log(removecharat3);
    questionword = "<h4 id='worddisplay'>q. " + removecharat3 + "</h4>";
    inputbox = "<br> answer:<input type='text' id='input_checkbox'>";
    checkbutton = "<br> <br> <button class='btn btn-info' onclick='check()'>check </button>";
    row = questionword + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}


questionturn = "player1";
answerturn = "player2";

function check() {
    getanswer = document.getElementById("input_checkbox").value;
    answer = getanswer.toLowerCase();
    console.log("answer in lower case" + answer);
    if (answer == word) {
        if (answerturn == "player1") {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;

        } else {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }

    }
    if (questionturn == "player1") {
        questionturn = "player2";
        document.getElementById("playerquestion").innerHTML = "question turn!" + player2name;
    } else {
        questionturn = "player1";
        document.getElementById("playerquestion").innerHTML = "question turn!" + playe1name;
    }
    if (answerturn == "player1") {
        answerturn = "player2";
        document.getElementById("playeranswer").innerHTML = "answer turn!" + player2name;
    } else {
        answerturn = "player1";
        document.getElementById("playeranswer").innerHTML = "answer turn!" + player1name;
    }
    document.getElementById("output").innerHTML = "";
}
