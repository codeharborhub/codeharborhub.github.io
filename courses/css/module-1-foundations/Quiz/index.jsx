import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

const quizData = [
  {
    id: 1,
    question: "During browser rendering, which tree is constructed by combining DOM elements with visual styles?",
    options: [
      "CSSOM Tree",
      "DOM Tree",
      "Render Tree",
      "Layout Tree"
    ],
    correctAnswer: 2,
    explanation: "The Render Tree combines the visible DOM nodes with their associated CSSOM styles to determine what actually gets painted to the screen."
  },
  {
    id: 2,
    question: "In the CSS rule `h1 { color: #2563eb; }`, what term describes the `color: #2563eb;` segment?",
    options: [
      "Property",
      "Declaration",
      "Selector",
      "Declaration Block"
    ],
    correctAnswer: 1,
    explanation: "A single property-value pair (terminated by a semicolon) is called a Declaration. The entire set inside curly braces is the Declaration Block."
  },
  {
    id: 3,
    question: "Which of the following `@`-rules MUST be placed at the very top of a stylesheet before standard style rules?",
    options: [
      "@media",
      "@keyframes",
      "@import",
      "@supports"
    ],
    correctAnswer: 2,
    explanation: "`@import` and `@charset` directives must appear before any standard style rules; otherwise, browsers will invalidate them."
  },
  {
    id: 4,
    question: "What is the calculated Specificity Vector (ID, Class, Type) for the selector `div#main .card p`?",
    options: [
      "(1, 1, 2)",
      "(0, 2, 2)",
      "(1, 2, 1)",
      "(0, 1, 3)"
    ],
    correctAnswer: 0,
    explanation: "`#main` = 1 ID, `.card` = 1 Class, `div` and `p` = 2 Types. Thus, the specificity vector is (1, 1, 2)."
  },
  {
    id: 5,
    question: "Which of these CSS properties is inherited by child DOM nodes by default?",
    options: [
      "margin",
      "background-color",
      "color",
      "padding"
    ],
    correctAnswer: 2,
    explanation: "Typography-related properties like `color`, `font-family`, and `line-height` inherit naturally. Box-model properties like `margin` and `padding` do not."
  }
];

function QuizContent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: optionIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const question = quizData[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;

  return (
    <div className={styles.quizContainer}>
      <div className={styles.quizHeader}>
        <h3>Module 1 Assessment: Foundations</h3>
        {!showResults && (
          <span className={styles.progressText}>
            Question {currentQuestion + 1} of {quizData.length}
          </span>
        )}
      </div>

      {!showResults ? (
        <div className={styles.quizBody}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
            />
          </div>

          <p className={styles.questionText}>{question.question}</p>

          <div className={styles.optionsGrid}>
            {question.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentQuestion] === idx;
              return (
                <button
                  key={idx}
                  className={`${styles.optionBtn} ${isSelected ? styles.selectedOption : ''}`}
                  onClick={() => handleSelectOption(idx)}
                  type="button"
                >
                  <span className={styles.optionIndex}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className={styles.explanationBox}>
              <strong>Explanation:</strong> {question.explanation}
            </div>
          )}

          <div className={styles.navControls}>
            <button
              className={styles.controlBtn}
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              type="button"
            >
              Previous
            </button>
            <button
              className={`${styles.controlBtn} ${styles.primaryBtn}`}
              onClick={handleNext}
              disabled={!isAnswered}
              type="button"
            >
              {currentQuestion === quizData.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.resultsContainer}>
          <div className={styles.scoreCircle}>
            <span className={styles.scoreNumber}>{calculateScore()}</span>
            <span className={styles.scoreTotal}>/ {quizData.length}</span>
          </div>

          <h4>
            {calculateScore() === quizData.length
              ? '🎉 Outstanding! Perfect Score!'
              : calculateScore() >= 3
              ? '👍 Great Job! You know your CSS foundations well.'
              : '📖 Good effort! Review Module 1 and try again.'}
          </h4>

          <div className={styles.reviewList}>
            {quizData.map((q, idx) => {
              const userAns = selectedAnswers[idx];
              const isCorrect = userAns === q.correctAnswer;
              return (
                <div
                  key={q.id}
                  className={`${styles.reviewItem} ${isCorrect ? styles.correctReview : styles.incorrectReview}`}
                >
                  <p className={styles.reviewQuestion}>
                    <strong>Q{idx + 1}:</strong> {q.question}
                  </p>
                  <p className={styles.reviewAnswer}>
                    Your Answer: <span>{q.options[userAns]}</span> {isCorrect ? '✅' : '❌'}
                  </p>
                  {!isCorrect && (
                    <p className={styles.correctAnswerText}>
                      Correct Answer: <span>{q.options[q.correctAnswer]}</span>
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <button className={`${styles.controlBtn} ${styles.primaryBtn}`} onClick={handleRestart} type="button">
            Retake Module 1 Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default function Quiz(props) {
  return (
    <BrowserOnly fallback={<div>Loading Quiz Module...</div>}>
      {() => <QuizContent {...props} />}
    </BrowserOnly>
  );
}