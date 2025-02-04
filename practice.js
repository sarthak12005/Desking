// script.js

function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    const isAnswerVisible = answer.style.display === 'block';
    
    if (isAnswerVisible) {
      answer.style.display = 'none';
      button.textContent = 'Show Answer';
    } else {
      answer.style.display = 'block';
      button.textContent = 'Hide Answer';
    }
  
    // Prevent click event on parent div
    event.stopPropagation();
  }
  
  function highlightQuestion(questionContainer) {
    // Remove highlighting from all questions
    const allQuestions = document.querySelectorAll('.question-container');
    allQuestions.forEach((question) => {
      question.classList.remove('highlighted');
    });
  
    // Highlight the clicked question
    questionContainer.classList.add('highlighted');
  }
  