const questions = [
  {
    text: "What is 25 + 37?",
    options: { A: "45", B: "73", C: "38", D: "62" },
    answer: "C"
  },
  {
    text: "If a shirt costs $20 and there is a 25% discount, what is the final price?",
    options: { A: "$15", B: "$10", C: "$16", D: "$15" },
    answer: "A"
  },
  {
    text: "Solve for x: 2x + 5 = 15",
    options: { A: "3", B: "4", C: "5", D: "8" },
    answer: "B"
  },
  {
    text: "If y = 3x + 2 and x = 4, what is the value of y?",
    options: { A: "10", B: "12", C: "14", D: "16" },
    answer: "C"
  },
  {
    text: "What is the next number in the sequence: 2, 4, 8, 16, __?",
    options: { A: "32", B: "35", C: "99", D: "23" },
    answer: "A"
  }
];

let currentQuestion = 0;
let timer = 20;
let timerInterval;
