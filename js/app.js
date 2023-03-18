// define quiz questions with their respective choices and answers
const quizData = [
    {
      question: "What is the capital of France?",
      choices: ["London", "Paris", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is the largest mammal in the world?",
      choices: ["Elephant", "Giraffe", "Whale", "Hippopotamus"],
      answer: "Whale"
    },
    {
      question: "What is the smallest country in the world?",
      choices: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      answer: "Vatican City"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  // display the current question and its choices
  function showQuestion() {
    const questionEl = $("#question");
    const choicesEl = $("#choices");
  
    questionEl.text(quizData[currentQuestion].question);
    choicesEl.empty();
  
    quizData[currentQuestion].choices.forEach((choice) => {
      const li = $("<li></li>");
      li.text(choice);
      li.click(() => checkAnswer(choice));
      choicesEl.append(li);
    });
  }
  
  // check if user's answer is correct and update score accordingly
  function checkAnswer(answer) {
    if (answer === quizData[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
  
    // move to next question or end the quiz if all questions have been answered
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      const quizContainer = $("#quiz-container");
      quizContainer.html(`<h2>You scored ${score} out of ${quizData.length}</h2>`);
    }
  }
  
  // start the quiz by showing the first question
  showQuestion();
  
  // add event listener to submit button
  const submitBtn = $("#submit-btn");
  submitBtn.click(() => checkAnswer());
  
  // highlight selected choice on click
  $("#choices li").click(function() {
    $(this).addClass("selected").siblings().removeClass("selected");
  });
  