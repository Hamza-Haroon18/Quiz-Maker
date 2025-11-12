// // document.addEventListener("DOMContentLoaded", function() {
// //     let images = [
// //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbk1FeSUpnOWQGn-uTKEDOHosLnRe8_smKRCv1js3vqrJORNVUq0iCTuyR0ptL7w2_f9Q&usqp=CAU",
// //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24tzEwle3QJuj_Cbek9da-BT7h00ckg0_FPDM4vY7BdjKxn3Lhl-SQMShf-RbiBWB9CQ&usqp=CAU",
// //         "https://marketplace.canva.com/EAF2JOc3ds4/4/0/1600w/canva-landform-quiz-presentation-in-blue-orange-yellow-pastel-illustrative-style-kXgHY9jzRZg.jpg",
// //         "https://png.pngtree.com/thumb_back/fh260/background/20220819/pngtree-challenge-testing-knowledge-without-relying-on-handraising-in-the-classroom-photo-image_19595156.jpg"
// //     ];

// //     let currentIndex = 0;
// //     let slider = document.querySelector(".slider");
// //     let leftButton = document.querySelector(".slider_left a");
// //     let rightButton = document.querySelector(".slider_right a");

// //     function updateBackground() {
// //         slider.style.backgroundImage = `url('${images[currentIndex]}')`;
// //     }

// //     leftButton.addEventListener("click", function(event) {
// //         // event.preventDefault();
// //         currentIndex = (currentIndex - 1 + images.length) % images.length;
// //         updateBackground();
// //     });

// //     rightButton.addEventListener("click", function(event) {
// //         // event.preventDefault();
// //         currentIndex = (currentIndex + 1) % images.length;
// //         updateBackground();
// //     });

// //     updateBackground();
// // });
// document.addEventListener("DOMContentLoaded", function () {
//     let images = [
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbk1FeSUpnOWQGn-uTKEDOHosLnRe8_smKRCv1js3vqrJORNVUq0iCTuyR0ptL7w2_f9Q&usqp=CAU",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24tzEwle3QJuj_Cbek9da-BT7h00ckg0_FPDM4vY7BdjKxn3Lhl-SQMShf-RbiBWB9CQ&usqp=CAU",
//         "https://marketplace.canva.com/EAF2JOc3ds4/4/0/1600w/canva-landform-quiz-presentation-in-blue-orange-yellow-pastel-illustrative-style-kXgHY9jzRZg.jpg"
//     ];

//     let currentIndex = 0;
//     let sum = 0;
//     let slider = document.querySelector(".slider");

//     function updateBackground() {
//         slider.style.backgroundImage = `url('${images[currentIndex]}')`;
//     }

//     document.querySelector(".slider_left").addEventListener("click", function () {
//         currentIndex = (currentIndex - 1 + images.length) % images.length;
//         updateBackground();
//     });

//     document.querySelector(".slider_right").addEventListener("click", function () {
//         currentIndex = (currentIndex + 1) % images.length;
//         updateBackground();
//     });

//     document.querySelector(".about").addEventListener("click", function () {
//         window.location.href = "about.html";
//         // window.open("about.html", "_blank"); // Open in a new tab
//     });

//     document.querySelector(".contact_us").addEventListener("click", function () {
//         window.location.href = "contact.html";
//         // window.open("about.html", "_blank"); // Open in a new tab
//     });

//     document.querySelector(".quiz").addEventListener("click", function () {
//         window.location.href = "quiz.html";
//         // window.open("about.html", "_blank"); // Open in a new tab
//     });

//     document.querySelector(".next").addEventListener("click", function () {
//         window.location.href = "quiz_question_part2.html";
//     });
//     document.querySelector(".previous").addEventListener("click", function () {
//         window.location.href = "quiz2.html";
//     });
//     // function totalsum(){
//     //     return sum++;
//     // }
//     // document.querySelector("#select").addEventListener("click", function() {
//     //     style.backgroundImage="green";
//     //     totalsum();
//     //     print( "total sum is : `url('${images[sum]}')`")
//     // });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector("button").addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent default form submission

//         let name = document.querySelector("input[placeholder='Enter Name']").value.trim();
//         let phone = document.querySelector("input[placeholder='03XX-XXXXXXX']").value.trim();
//         let email = document.querySelector("input[placeholder='example@gmail.com']").value.trim();
//         let message = document.querySelector("textarea").value.trim();

//         if (name === "" || phone === "" || email === "" || message === "") {
//             alert("Please fill in all the fields before submitting the form.");
//         } else {
//             alert("Form submitted successfully!");
//         }
//     });
// });

// // select subject
// document.addEventListener("DOMContentLoaded", function () {
//     let selectedSubject = "";

//     document.querySelectorAll(".quiz-btn").forEach(button => {
//         button.addEventListener("click", function () {
//             document.querySelectorAll(".quiz-btn").forEach(btn => {
//                 btn.style.backgroundColor = "rgb(251 207 232)";
//                 btn.style.color = "rgb(29 78 216)";
//             });

//             this.style.backgroundColor = "red";
//             this.style.color = "white";

//             selectedSubject = this.getAttribute("data-subject");
//             console.log("Selected Subject:", selectedSubject);
//         });
//     });
//     //start button
//     let startButton = document.querySelector(".start-btn");
//     if (startButton) {
//         startButton.addEventListener("click", function () {
//             if (selectedSubject) {
//                 window.location.href = selectedSubject + ".html";
//             } else {
//                 alert("Please select a subject first!");
//             }
//         });
//     } else {
//         console.error("Start button not found! Check the class name in your HTML.");
//     }

//     // document.querySelectorAll(".next").forEach(button => {
//     //     button.addEventListener("click", function () {
//     //         if (window.location.pathname.includes("maths.html")) {
//     //             let selectedSubject = "math2";
//     //             window.location.href = selectedSubject + ".html";
//     //         } else if (window.location.pathname.includes("physics.html")) {
//     //             selectedSubject = "physics2";
//     //             window.location.href = selectedSubject + ".html";
//     //         }
//     //     });
//     // });
    
//     // document.querySelectorAll(".previous").forEach(button => {
//     //     button.addEventListener("click", function () {
//     //         if (window.location.pathname.includes("math2.html")) {
//     //             let selectedSubject = "maths";
//     //             window.location.href = selectedSubject + ".html";
//     //         } else if (window.location.pathname.includes("physics.html")) {
//     //             let currentSubject = "Physics";
//     //         }
//     //     });
//     // });
//     document.querySelectorAll(".next").forEach(button => {
//         button.addEventListener("click", function () {
//             let currentPath = window.location.pathname;
    
//             if (currentPath.includes("maths1.html")) {
//                 window.location.href = "math2.html";
//             } else if (currentPath.includes("physics1.html")) {
//                 window.location.href = "physics2.html";
//             } else if (currentPath.includes("chemistry1.html")) {
//                 window.location.href = "chemistry2.html";
//             } else if (currentPath.includes("sports1.html")) {
//                 window.location.href = "sports2.html";
//             } else if (currentPath.includes("science1.html")) {
//                 window.location.href = "science2.html";
//             } else if (currentPath.includes("general_knowledge1.html")) {
//                 window.location.href = "general_knowledge2.html";
//             }
//         });
//     });
    
//     document.querySelectorAll(".previous").forEach(button => {
//         button.addEventListener("click", function () {
//             let currentPath = window.location.pathname;
    
//             if (currentPath.includes("math2.html")) {
//                 window.location.href = "maths1.html";
//             } else if (currentPath.includes("physics2.html")) {
//                 window.location.href = "physics1.html";
//             } else if (currentPath.includes("chemistry2.html")) {
//                 window.location.href = "chemistry1.html";
//             } else if (currentPath.includes("sports2.html")) {
//                 window.location.href = "sports1.html";
//             } else if (currentPath.includes("science2.html")) {
//                 window.location.href = "science1.html";
//             } else if (currentPath.includes("general_knowledge2.html")) {
//                 window.location.href = "general_knowledge1.html";
//             }
//         });
//     });
    
//     document.querySelectorAll(".submit").forEach(button => { 
//         button.addEventListener("click", function () {
//             window.location.href = "result.html"; 
//         });
//     });
    
//     // select option timer
//     // let timeLeft = 20;
//     // const timerElement = document.querySelector(".timer");

//     // function startTimer() {
//     //     const countdown = setInterval(() => {
//     //         if (timeLeft > 0) {
//     //             timeLeft--;
//     //             timerElement.textContent = timeLeft;
//     //         } else {
//     //             clearInterval(countdown);
//     //             timerElement.textContent = "Time's up!";
//     //             timerElement.style.backgroundColor = "red";
//     //         }
//     //     }, 1000);
//     // }

//     // startTimer();

//     // select option choice
// //     let selectedoption = "";

// //     let lockTime = 5;  // Time after which the selected option is locked
// //     let optionLocked = false; // Flag to check if option is locked

// //     // Select all answer options
// //     document.querySelectorAll("#select").forEach(div => {
// //         div.addEventListener("click", function () {
// //             if (timeLeft > 0 && !optionLocked) { // Allow selection only if time is left & not locked
// //                 document.querySelectorAll("#select").forEach(btn => {
// //                     btn.style.backgroundColor = "rgb(254, 252, 232)"; // Default background
// //                     btn.style.color = "rgb(0 0 0)"; // Default text color
// //                 });

// //                 // Highlight selected option
// //                 this.style.backgroundColor = "green";
// //                 this.style.color = "white";

// //                 selectedOption = this.getAttribute("data-choice");
// //                 console.log("Selected option:", selectedOption);

// //                 // Start the locking timer
// //                 setTimeout(() => {
// //                     optionLocked = true;
// //                     console.log("Option locked:", selectedOption);
// //                 }, lockTime * 1000); // Convert seconds to milliseconds
// //             }
// //         });
// //         let sum = 0; // Score
// // let selectedOption = "";
// // let currentSubject = ""; // Identify the quiz subject
// // let currentQuestion = 1; // Track question number

// // // Detect current subject based on file name
// // if (window.location.pathname.includes("Maths.html")) {
// //     currentSubject = "Maths";
// // } else if (window.location.pathname.includes("Physics.html")) {
// //     currentSubject = "Physics";
// // }

// // // Add click event listener to all options
// // document.querySelectorAll(".option").forEach(option => {
// //     option.addEventListener("click", function () {
// //         if (!selectedOption) { // Allow selection only once
// //             selectedOption = this.getAttribute("data-choice"); // Get option value (A, B, C, D)
// //             let correctAnswer = correctAnswers[currentSubject][currentQuestion]; // Get correct answer

// //             if (selectedOption === correctAnswer) {
// //                 this.style.backgroundColor = "green"; // Correct → Green
// //                 sum++; // Increase score
// //             } else {
// //                 this.style.backgroundColor = "red"; // Incorrect → Red
// //             }

// //             console.log(`Question ${currentQuestion}: Selected ${selectedOption}, Correct ${correctAnswer}`);
// //         }
// //     });
// // });

// //     });

// // let sum = 0; // Score
// // let selectedOption = "";
// // let optionLocked = false; // Prevent multiple selections
// // let lockTime = 5; // Lock selection after 5 seconds
// // let timeLeft = 20; // Countdown time
// // let currentQuestion = 1; // Track question number
// // // let correctAnswer = "D"; // Store the correct answer

// // let currentSubject = "";

// // // ✅ Detect subject from the URL
// // if (window.location.pathname.includes("maths.html")) {
// //     currentSubject = "Maths";
// // } else if (window.location.pathname.includes("physics.html")) {
// //     currentSubject = "Physics";
// // }
// // else if (window.location.pathname.includes("math2.html")) {
// //     currentSubject = "Maths_part_1";
// // }

// // // Start the countdown timer
// // function startTimer() {
// //     let timerElement = document.querySelector(".timer");
// //     let timerInterval = setInterval(() => {
// //         if (timeLeft > 0) {
// //             timeLeft--;
// //             timerElement.innerText = timeLeft;
// //         } else {
// //             clearInterval(timerInterval);
// //             optionLocked = true; // Lock options when time runs out
// //             console.log("Time is up! Option selection is locked.");
// //         }
// //     }, 1000);
// // }

// // // Start the timer on page load
// // startTimer();

// // // Add click event listener to all answer options
// // document.querySelectorAll(".option").forEach(option => {
// //     option.addEventListener("click", function () {
// //         if (!optionLocked) { // Allow selection only if not locked
// //             document.querySelectorAll(".option").forEach(btn => {
// //                 btn.style.backgroundColor = "rgb(233, 213, 255)"; // Default purple-100
// //                 btn.style.color = "rgb(0, 0, 0)"; // Default text color
// //             });

// //             // Highlight selected option
// //             this.style.backgroundColor = "green";
// //             this.style.color = "white";

// //             selectedOption = this.getAttribute("data-choice"); // Store selected option
// //             console.log("Selected option:", selectedOption);

// //             // Check if answer is correct
// //             let correctAnswer = correctAnswers[currentSubject][currentQuestion];

// //             // ✅ Check if the answer is correct
// //             if (selectedOption === correctAnswer) {
// //                 this.style.backgroundColor = "green"; // ✅ Correct → Green
// //                 sum++; // ✅ Increase score
// //             } else {
// //                 this.style.backgroundColor = "red"; // ❌ Incorrect → Red
// //             }

// //             // Lock the option after 5 seconds
// //             setTimeout(() => {
// //                 optionLocked = true;
// //                 console.log("Option locked:", selectedOption);
// //             }, lockTime * 1000); // Convert seconds to milliseconds
// //         }
// //     });
// // });



//  });

// document.addEventListener("DOMContentLoaded", function () {
//     const questionBlocks = document.querySelectorAll(".flex.justify-between.items-center");
//     let currentIndex = 0;
//     let timer;
//     let timeLeft = 20;

//     function showQuestion(index) {
//         questionBlocks.forEach((q, i) => {
//             q.style.display = i === index ? "flex" : "none";
//             const optionsContainer = q.nextElementSibling;
//             if (optionsContainer) {
//                 optionsContainer.style.display = i === index ? "grid" : "none";
//             }
//         });
//         startTimer();
//     }

//     function startTimer() {
//         clearInterval(timer);
//         timeLeft = 20;
//         const timerElement = questionBlocks[currentIndex].querySelector(".timer");
//         timerElement.textContent = timeLeft;

//         timer = setInterval(() => {
//             timeLeft--;
//             timerElement.textContent = timeLeft;
//             if (timeLeft <= 0) {
//                 clearInterval(timer);
//                 lockQuestion(currentIndex);
//             }
//         }, 1000);
//     }

//     function lockQuestion(index) {
//         const optionsContainer = questionBlocks[index].nextElementSibling;
//         if (!optionsContainer) return;
//         const options = optionsContainer.querySelectorAll(".option");
//         options.forEach(opt => {
//             opt.classList.add("opacity-50", "pointer-events-none");
//         });
//     }

//     // Option click handling: select answer but do NOT auto-move
//     questionBlocks.forEach((q, index) => {
//         const optionsContainer = q.nextElementSibling;
//         if (!optionsContainer) return;
//         const options = optionsContainer.querySelectorAll(".option");
//         options.forEach(opt => {
//             opt.addEventListener("click", () => {
//                 if (!opt.classList.contains("opacity-50")) {
//                     // Mark selected
//                     options.forEach(o => o.classList.remove("bg-green-300")); // optional: remove highlight
//                     opt.classList.add("bg-green-300"); // optional: highlight selected
//                     // Lock question after selection
//                     lockQuestion(index);
//                     clearInterval(timer);
//                 }
//             });
//         });
//     });

//     // Next button
//     const nextBtn = document.querySelector(".next");
//     nextBtn.addEventListener("click", () => {
//         if (currentIndex + 1 < questionBlocks.length) {
//             currentIndex++;
//             showQuestion(currentIndex);
//         }
//     });

//     // Previous button
//     const prevBtn = document.querySelector(".previous");
//     prevBtn.addEventListener("click", () => {
//         if (currentIndex > 0) {
//             currentIndex--;
//             showQuestion(currentIndex);
//         }
//     });

//     // Show first question initially
//     showQuestion(currentIndex);
// });


// // document.addEventListener("DOMContentLoaded", function () {
// //     let currentQuestion = 1;
// //     let userAnswers = {}; // Stores user-selected answers
// //     let totalQuestions = 5; // Update based on your quiz
// //     let quizSubject = ""; // Dynamically update based on the selected subject
// //     if (window.location.pathname.includes("maths.html")) {
// //         quizSubject = "Maths";
// //         }
// //         else if (window.location.pathname.includes("math2.html")) {
// //             quizSubject = "Maths_part_1";
// //         }
// //         else if (window.location.pathname.includes("physics.html")) {
// //             quizSubject = "Physics";
// //         }
// //         else if (window.location.pathname.includes("physics2.html")) {
// //             quizSubject = "physics_part_1";
// //         }
// //         else if (window.location.pathname.includes("chemistry.html")) {
// //             quizSubject = "Chemistry";
// //         }
// //         else if (window.location.pathname.includes("chemistry2.html")) {
// //             quizSubject = "Chemistry_part_1";
// //         }
// //         else if (window.location.pathname.includes("sports.html")) {
// //             quizSubject = "Sports";
// //         }
// //         else if (window.location.pathname.includes("sports2.html")) {
// //             quizSubject = "Sports_part_1";
// //         }
// //         else if (window.location.pathname.includes("general_knowledge.html")) {
// //             quizSubject = "General_knowledge";
// //         }
// //         else if (window.location.pathname.includes("General_knowledge2.html")) {
// //             quizSubject = "General_knowledge_part_1";
// //         }
// //         else if (window.location.pathname.includes("science.html")) {
// //             quizSubject = "Science";
// //         } else if (window.location.pathname.includes("science2.html")) {
// //             quizSubject = "Science_part_1";
// //         }

// //     // Ensure `correctAnswers` is loaded from answer.js
// //     if (typeof correctAnswers === "undefined") {
// //         console.error("correctAnswers object not found. Ensure `answer.js` is loaded before `style.js`.");
// //         return;
// //     }

// //     function submitAnswer(selectedAnswer) {
// //         userAnswers[currentQuestion] = selectedAnswer; // Save user's choice
        
// //         if (currentQuestion < totalQuestions) {
// //             currentQuestion++; // Move to the next question
// //             loadNextQuestion();
// //         } else {
// //             calculateScore(); // End of quiz
// //         }
// //     }

// //     function calculateScore() {
// //         let score = 0;
// //         let correct = correctAnswers[quizSubject]; // Get correct answers dynamically

// //         for (let i = 1; i <= totalQuestions; i++) {
// //             if (userAnswers[i] === correct[i]) {
// //                 score++; // Increase score for correct answers
// //             }
// //         }

// //         // Save results in `localStorage` for `result.html`
// //         localStorage.setItem("userScore", score);
// //         localStorage.setItem("totalQuestions", totalQuestions);
// //         localStorage.setItem("userAnswers", JSON.stringify(userAnswers));

// //         // Redirect to result page
// //         window.location.href = "result.html";
// //     }

// //     // Attach event listeners to answer options
// //     document.querySelectorAll(".option").forEach(option => {
// //         option.addEventListener("click", function () {
// //             let selectedAnswer = this.getAttribute("data-choice");
// //             submitAnswer(selectedAnswer);
// //         });
// //     });

// //     // Handle submit button (if needed)
// //     let submitButton = document.querySelector(".submit");
// //     if (submitButton) {
// //         submitButton.addEventListener("click", () => {
// //             calculateScore();
// //         });
// //     }
// // });
// document.addEventListener("DOMContentLoaded", function () {
//     let currentQuestion = 1;
//     let userAnswers = {};
//     let totalQuestions = 5;
//     let quizSubject = "";

//     // Detect subject from URL
//     const urlPath = window.location.pathname;
//     const subjects = {
//         "maths1.html": "Math",
//         "physics1.html": "Physics",
//         "chemistry1.html": "Chemistry",
//         "sports1.html": "Sports",
//         "general_knowledge1.html": "General_knowledge",
//         "science1.html": "Science_part_1",
//          "science2.html": "Science_part_2",
//         "math2.html": "Maths_part_1",
//         "physics2.html": "physics_part_1",
//         "chemistry2.html": "Chemistry_part_1",
//         "sports2.html": "Sports_part_1",
//         "general_knowledge1.html": "General_knowledge_part_1",
//         "general_knowledge2.html": "General_knowledge_part_2"
//     };

//     for (let key in subjects) {
//         if (urlPath.includes(key)) {
//             quizSubject = subjects[key];
//             break;
//         }
//     }

//     if (typeof correctAnswers === "undefined") {
//         console.error("correctAnswers object not found. Ensure answer.js is loaded before style.js.");
//         return;
//     }

//     function loadNextQuestion() {
//         if (currentQuestion <= totalQuestions) {
//             document.getElementById("questionNumber").innerText = currentQuestion;

//             let progress = (currentQuestion / totalQuestions) * 100;
//             document.getElementById("progressBar").style.width = progress + "%";
//         }
//     }

//     function submitAnswer(selectedAnswer) {
//         userAnswers[currentQuestion] = selectedAnswer;
//         console.log(`Answered Q${currentQuestion}: ${selectedAnswer}`); // Debug

//         if (currentQuestion < totalQuestions) {
//             currentQuestion++;
//             loadNextQuestion();
//         } else {
//             calculateScore();
//         }
//     }

//     function calculateScore() {
//     let score = 0;
//     let correct = correctAnswers[quizSubject];

//     if (!correct) {
//         console.error(`Correct answers not found for subject: ${quizSubject}`);
//         return;
//     }

//     for (let i = 1; i <= totalQuestions; i++) {
//         if (String(userAnswers[i]).trim() === String(correct[i]).trim()) {
//             score++;
//         }
//     }

//     // Determine the part from quizSubject
//     let part = "part1";
//     if (quizSubject.includes("_part_1")) {
//         part = quizSubject.split("_part_1")[1] ? "part2" : "part1";
//     }

//     // Save with part-specific keys
//     localStorage.setItem(`userScore_${part}`, score);
//     localStorage.setItem(`totalQuestions_${part}`, totalQuestions);
//     localStorage.setItem(`userAnswers_${part}`, JSON.stringify(userAnswers));
//     localStorage.setItem("quizSubject", quizSubject);
//     localStorage.setItem("currentPart", part);

//     window.location.href = "result.html";
// }

    

//     document.querySelectorAll(".option").forEach(option => {
//         option.addEventListener("click", function () {
//             let selectedAnswer = this.getAttribute("data-choice");
//             submitAnswer(selectedAnswer);
//         });
//     });

//     let submitButton = document.querySelector(".submit");
//     if (submitButton) {
//         submitButton.addEventListener("click", () => {
//             calculateScore();
//         });
//     }

//     loadNextQuestion();
// });
