import React, { useState, useCallback, useEffect } from 'react';
import styles from './Quiz.module.css';

export default function Quiz({ questions = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const [focusedOption, setFocusedOption] = useState(null);

  if (!questions || questions.length === 0) {
    return <div className={styles.empty}>No questions available</div>;
  }

  const currentQuestion = questions[currentIndex];
  const currentAnswer = selectedAnswers[currentIndex];
  const isAnswered = currentIndex in selectedAnswers;
  const correctAnswer = currentQuestion.correct;
  const isCorrect = currentAnswer === correctAnswer;

  const score = Object.entries(selectedAnswers).filter(([idx, answer]) => {
    return questions[parseInt(idx)].correct === answer;
  }).length;

  const handleSelectAnswer = useCallback((optionIndex) => {
    if (!isAnswered) {
      setSelectedAnswers(prev => ({
        ...prev,
        [currentIndex]: optionIndex
      }));
      setShowExplanations(prev => ({
        ...prev,
        [currentIndex]: true
      }));
      setFocusedOption(null);
    }
  }, [currentIndex, isAnswered]);

  const handleKeyDown = useCallback((e) => {
    if (isAnswered) {
      if (e.key === 'ArrowRight' && currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setFocusedOption(null);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setFocusedOption(null);
      } else if (e.key === 'End') {
        setCurrentIndex(questions.length - 1);
        setFocusedOption(null);
      } else if (e.key === 'Home') {
        setCurrentIndex(0);
        setFocusedOption(null);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedOption(prev => {
        const next = (prev === null ? 0 : Math.min(prev + 1, currentQuestion.options.length - 1));
        return next;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedOption(prev => {
        const next = (prev === null ? 0 : Math.max(prev - 1, 0));
        return prev;
      });
    } else if (e.key === 'Enter' && focusedOption !== null) {
      e.preventDefault();
      handleSelectAnswer(focusedOption);
    }
  }, [currentIndex, isAnswered, focusedOption, questions.length, currentQuestion.options.length, handleSelectAnswer]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFocusedOption(null);
    } else {
      setIsComplete(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFocusedOption(null);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanations({});
    setIsComplete(false);
    setFocusedOption(null);
  };

  if (isComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className={styles.container}>
        <div className={styles.summary}>
          <h2>Quiz Complete!</h2>
          <div className={styles.scoreCard}>
            <div className={styles.scoreCircle}>{percentage}%</div>
            <p className={styles.scoreText}>You got {score} out of {questions.length} correct</p>
          </div>
          <button className={styles.restartBtn} onClick={handleRestart}>
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.progress}>
          Question {currentIndex + 1} of {questions.length}
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className={styles.questionCard}>
        <h3 className={styles.question}>{currentQuestion.question}</h3>

        <div className={styles.optionsContainer}>
          {currentQuestion.options.map((option, idx) => {
            const isSelected = currentAnswer === idx;
            const isOptCorrect = correctAnswer === idx;
            const showAsCorrect = isAnswered && isOptCorrect;
            const showAsIncorrect = isAnswered && isSelected && !isOptCorrect;
            const isFocused = focusedOption === idx && !isAnswered;

            return (
              <button
                key={idx}
                className={`${styles.option} ${isSelected ? styles.selected : ''} ${showAsCorrect ? styles.correct : ''} ${showAsIncorrect ? styles.incorrect : ''} ${isFocused ? styles.focused : ''}`}
                onClick={() => handleSelectAnswer(idx)}
                disabled={isAnswered}
                aria-pressed={isSelected}
                aria-label={`Option ${String.fromCharCode(65 + idx)}: ${option}`}
              >
                <span className={styles.optionLabel}>{String.fromCharCode(65 + idx)}</span>
                <span className={styles.optionText}>{option}</span>
                {isAnswered && isOptCorrect && <span className={styles.checkmark}>✓</span>}
                {isAnswered && showAsIncorrect && <span className={styles.xmark}>✗</span>}
              </button>
            );
          })}
        </div>

        {showExplanations[currentIndex] && (
          <div className={`${styles.explanation} ${isCorrect ? styles.successExplanation : styles.errorExplanation}`}>
            <strong>{isCorrect ? 'Correct!' : 'Incorrect.'}</strong> {currentQuestion.explanation}
          </div>
        )}

        {isAnswered && (
          <div className={styles.navigation}>
            <button
              className={styles.navBtn}
              onClick={handlePreviousQuestion}
              disabled={currentIndex === 0}
              aria-label="Previous question"
            >
              ← Previous
            </button>
            <button
              className={styles.navBtn}
              onClick={handleNextQuestion}
              aria-label={currentIndex === questions.length - 1 ? 'Finish quiz' : 'Next question'}
            >
              {currentIndex === questions.length - 1 ? 'Finish' : 'Next →'}
            </button>
          </div>
        )}
      </div>

      {!isAnswered && (
        <div className={styles.hint}>
          Use arrow keys to navigate, Enter to select
        </div>
      )}
    </div>
  );
}
