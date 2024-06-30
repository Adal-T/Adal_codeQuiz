const questions = [
    {
        question: "What is a Boolean?",
        choices: ["True or False value","Function","Number","Apple Pie"],
        answer: "True or False value"
    },
    {
        question: "What is an array?",
        choices: ["Integer","String","Object to store data","Boolean"],
        answer: "Object to store data"
    },
    {
        question: "which of the following can be used to make a loop",
        choices: ["if Statement","For Loop","Array","Var"],
        answer: "For Loop"
    },
    {
        question: "What is a string?",
        choices: ["For Loop","True or False value","Object to store data","can be any text inside double or single quotes"],
        answer: "can be any text inside double or single quotes"
    }
];
let timeLeft = 60;
let timer;
let index = 0;
function displayQuestion(){
    document.getElementById('question').innerText = questions[index].question
    document.getElementById('answer1').innerText = questions[index].choices[0]
    document.getElementById('answer2').innerText = questions[index].choices[1]
    document.getElementById('answer3').innerText = questions[index].choices[2]
    document.getElementById('answer4').innerText = questions[index].choices[3]
}
function startTimer(){
    timer = setInterval(function(){
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if(timeLeft <= 0){
            clearInterval(timer);
            document.getElementById('quiz-area').style.display = 'none';
            document.getElementById('resultArea').style.display = 'block';
        }
    },1000)
}
function checkAnswer(event){
    const choice = event.target.innerText;
    const correctAnswer = questions[index].answer;
    if(choice !== correctAnswer){
        timeLeft -= 10;
    }
    index++;
    if(index === questions.length){
        clearInterval(timer);
        document.getElementById('quiz-area').style.display = 'none';
        document.getElementById('resultArea').style.display = 'block';
        document.getElementById('score').innerText = "Your score is " + timeLeft + " seconds";
        return
    }
    displayQuestion();
}
document.getElementById('answer1').addEventListener('click', checkAnswer)
document.getElementById('answer2').addEventListener('click', checkAnswer)
document.getElementById('answer3').addEventListener('click', checkAnswer)
document.getElementById('answer4').addEventListener('click', checkAnswer)
document.getElementById('submit').addEventListener('click', function(){
    const initials = document.getElementById('initial').value 
    const scores = JSON.parse(localStorage.getItem("scores")) || []
    scores.push({initials, timeLeft})
    localStorage.setItem("scores", JSON.stringify(scores))
    window.location.replace("result.html")
})
document.getElementById('start').addEventListener('click', function(){
    document.getElementById('start-area').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';
    displayQuestion();
    startTimer();
})