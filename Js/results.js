const scores = JSON.parse(localStorage.getItem("scores")) || []
for (var i = 0; i < scores.length; i++) {
    var score = scores[i];
    var li = document.createElement("li");
    li.textContent = score.initials + " - " + score.timeLeft;
    document.getElementById("results").appendChild(li);
}