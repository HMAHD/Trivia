$(document).ready(function () {
  var questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "Rome", "Madrid", "Berlin"],
      correctAnswer: 0,
    },
    {
      question: "What is the largest country in the world?",
      choices: ["China", "USA", "Russia", "Australia"],
      correctAnswer: 2,
    },
    {
      question: "What is the highest mountain in the world?",
      choices: ["Mount Everest", "Kilimanjaro", "Mount Fuji", "Matterhorn"],
      correctAnswer: 0,
    },
  ];

  var currentQuestion = 0;
  var score = 0;
  var totalQuestions = questions.length;

  // Display the current question and choices
  function displayQuestion() {
    var question = questions[currentQuestion];
    $("#question").text(question.question);
    $("#choices").empty();
    for (var i = 0; i < question.choices.length; i++) {
      $("#choices").append(
        "<li><input type='radio' name='choice' value='" +
          i +
          "' id='choice" +
          i +
          "'><label for='choice" +
          i +
          "'>" +
          question.choices[i] +
          "</label></li>"
      );
    }
  }

  // Check the user's answer and update the score
  function checkAnswer() {
    var selectedChoice = $("input[name='choice']:checked").val();
    if (selectedChoice == undefined) {
      alert("Please select an answer.");
    } else {
      if (selectedChoice == questions[currentQuestion].correctAnswer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < totalQuestions) {
        displayQuestion();
      } else {
        displayScore();
        $("#submit-btn").hide();
        $("#reset-btn").show();
      }
    }
  }

  // Display the user's score
  function displayScore() {
    $("#question").text("Quiz Complete!");
    $("#choices").empty();
    $("#score").text(score + " out of " + totalQuestions);
  }

  // Reset the quiz
  function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    $("#score").text(score);
    $("#submit-btn").show();
    $("#reset-btn").hide();
  }

  // Function to add a new question to the list
  function addNewQuestion() {
    // Get the values of the new question and answer inputs
    var newQuestion = $("#new-question-input").val();
    var newAnswer = $("#new-answer-input").val();

    // Create a new list item with the new question and answer
    var newListItem = $("<li>").html(
      "<strong>" + newQuestion + "</strong><br>" + newAnswer
    );

    // Add the new list item to the question list
    $("#question-list").append(newListItem);

    // Clear the input fields
    $("#new-question-input").val("");
    $("#new-answer-input").val("");
  }

  // Bind the addNewQuestion function to the Add Question button
  $("#add-question-btn").click(function () {
    addNewQuestion();
  });

  function addQuestion() {
    var questionInput = $("#new-question-input").val();
    var answerInput = $("#new-answer-input").val();

    // Check that the input fields are not empty
    if (questionInput && answerInput) {
      // Create a new question object with user input values
      var newQuestion = {
        question: questionInput,
        answer: answerInput,
      };

      // Add the new question to the questions array
      questions.push(newQuestion);

      // Append a new list item to the question list with the new question text
      var newQuestionItem = $("<li>").text(newQuestion.question);
      $("#question-list").append(newQuestionItem);

      // Clear the input fields
      $("#new-question-input").val("");
      $("#new-answer-input").val("");
    }
  }

  $("#add-question-btn").click(function () {
    var newQuestion = $("#new-question-input").val();
    var newAnswer = $("#new-answer-input").val();

    // Do something with the new question and answer data
  });

  // Event handlers
  $("#submit-btn").click(function () {
    checkAnswer();
  });

  $("#reset-btn").click(function () {
    resetQuiz();
  });

  // Initial setup
  displayQuestion();
  $("#reset-btn").hide();
});
