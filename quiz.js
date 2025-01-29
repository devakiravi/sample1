function submitQuiz() {
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q4 = document.querySelector('input[name="q4"]:checked');
    var q5 = document.querySelector('input[name="q5"]:checked');
    var result = document.getElementById('result');
    
    var score = 0;
    if (q1 && q1.value === "html 5.0") {
        score++;
    }
    if (q2 && q2.value === "for server-side programming") {
        score++;
    }
    if (q3 && q3.value === "id") {
        score++;
    }
    if (q4 && q4.value === "a parser") {
        score++;
    }
    if (q5 && q5.value === "client-server") {
        score++;
    }
    
    result.style.display = "block";
    result.textContent = "Your score is: " + score + "/5";
}
