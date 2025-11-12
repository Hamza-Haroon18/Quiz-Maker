// document.addEventListener("DOMContentLoaded", function () {
//     let score = localStorage.getItem("userScore");
//     let total = localStorage.getItem("totalQuestions");
//     let userAnswers = JSON.parse(localStorage.getItem("userAnswers"));
//     // let quizSubject = "Maths"; // Change this dynamically if needed
//     if (window.location.pathname.includes("maths.html")) {
//         quizSubject = "Maths";
//         }
//         else if (window.location.pathname.includes("math_question_part1.html")) {
//             quizSubject = "Maths_part_1";
//         }
//         else if (window.location.pathname.includes("physics.html")) {
//             quizSubject = "Physics";
//         }
//         else if (window.location.pathname.includes("physics_question_part1.html")) {
//             quizSubject = "physics_part_1";
//         }
//         else if (window.location.pathname.includes("chemistry.html")) {
//             quizSubject = "Chemistry";
//         }
//         else if (window.location.pathname.includes("chemistry_question_part1.html")) {
//             quizSubject = "Chemistry_part_1";
//         }
//         else if (window.location.pathname.includes("sports.html")) {
//             quizSubject = "Sports";
//         }
//         else if (window.location.pathname.includes("sports_question_part1.html")) {
//             quizSubject = "Sports_part_1";
//         }
//         else if (window.location.pathname.includes("general_knowledge.html")) {
//             quizSubject = "General_knowledge";
//         }
//         else if (window.location.pathname.includes("General_knowledge_question_part1.html")) {
//             quizSubject = "General_knowledge_part_1";
//         }
// else if (window.location.pathname.includes("science.html")) {
//     quizSubject = "Science";
// } else if (window.location.pathname.includes("science_question_part1.html")) {
//     quizSubject = "Science_part_1";
// }

//     if (!score || !total || !userAnswers) {
//         document.body.innerHTML = "<h2>Error: No quiz data found. Please take the quiz first.</h2>";
//         return;
//     }

//     document.getElementById("score").textContent = score;
//     document.getElementById("total").textContent = total;

//     let answerSummary = document.getElementById("answerSummary");

//     // Get correct answers from `answer.js`
//     let correctAnswers = window.correctAnswers[quizSubject];

//     for (let question in userAnswers) {
//         let li = document.createElement("li");
//         let userAnswer = userAnswers[question];
//         let correctAnswer = correctAnswers[question];

//         li.innerHTML = `Question ${question}: Your Answer - <strong>${userAnswer}</strong> | Correct Answer - <strong>${correctAnswer}</strong>`;
        
//         if (userAnswer === correctAnswer) {
//             li.style.color = "green"; // Highlight correct answers
//         } else {
//             li.style.color = "red"; // Highlight incorrect answers
//         }

//         answerSummary.appendChild(li);
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    let score = localStorage.getItem("userScore");
    let totalQuestions = localStorage.getItem("totalQuestions");
    let userAnswers = JSON.parse(localStorage.getItem("userAnswers"));
    let quizSubject = localStorage.getItem("quizSubject");

    document.getElementById("score").textContent = score;
    document.getElementById("total").textContent = totalQuestions;

    let answerSummary = document.getElementById("answerSummary");
    let correct = correctAnswers[quizSubject]; 

    for (let i = 1; i <= totalQuestions; i++) {
        let answerItem = document.createElement("li");
        let userAnswer = userAnswers[i] || "Not Answered";
        let correctAnswer = correct[i];
        let result = (userAnswer === correctAnswer) ? "✅ Correct" : "❌ Incorrect";

        answerItem.innerHTML = `<strong>Q${i}:</strong> 
            <br> Your Answer: <span style="color: ${userAnswer === correctAnswer ? 'green' : 'red'}">${userAnswer}</span> 
            <br> Correct Answer: <span style="color: green">${correctAnswer}</span> 
            <br> Result: <strong>${result}</strong>`;
        answerSummary.appendChild(answerItem);
    }
});
