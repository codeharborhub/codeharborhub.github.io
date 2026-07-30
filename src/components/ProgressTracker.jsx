import React, { useState, useEffect } from 'react';
import styles from './ProgressTracker.module.css';

export default function ProgressTracker({ seriesId = 'default', lessons = [], onProgress = null }) {
  const [completed, setCompleted] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const storageKey = `tutorial_progress_${seriesId}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setCompleted(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load progress:', e);
      }
    }
  }, [storageKey]);

  const toggleLesson = (lessonId) => {
    const updated = {
      ...completed,
      [lessonId]: !completed[lessonId]
    };
    setCompleted(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setLastUpdated(new Date().toLocaleTimeString());
    if (onProgress) onProgress(updated);
  };

  const markAllComplete = () => {
    const updated = {};
    lessons.forEach(lesson => {
      updated[lesson.id] = true;
    });
    setCompleted(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setLastUpdated(new Date().toLocaleTimeString());
  };

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset your progress?')) {
      setCompleted({});
      localStorage.removeItem(storageKey);
      setLastUpdated(new Date().toLocaleTimeString());
    }
  };

  const completedCount = Object.values(completed).filter(Boolean).length;
  const totalCount = lessons.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const remainingLessons = totalCount - completedCount;
  const estimatedHours = (remainingLessons * 0.5).toFixed(1);

  return (
    <div className={styles.tracker}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h3 className={styles.title}>Learning Progress</h3>
          {lastUpdated && (
            <span className={styles.lastUpdated}>
              Updated: {lastUpdated}
            </span>
          )}
        </div>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.progressCircle}>
          <svg viewBox="0 0 100 100" className={styles.svg}>
            <circle cx="50" cy="50" r="45" className={styles.bgCircle} />
            <circle
              cx="50"
              cy="50"
              r="45"
              className={styles.progressCircle}
              style={{
                strokeDasharray: `${percentage * 2.83} 283`,
                transition: 'stroke-dasharray 0.3s ease'
              }}
            />
          </svg>
          <div className={styles.percentageText}>{percentage}%</div>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statLabel}>Completed</div>
            <div className={styles.statValue}>{completedCount} of {totalCount}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statLabel}>Remaining</div>
            <div className={styles.statValue}>{remainingLessons}</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statLabel}>Est. Time</div>
            <div className={styles.statValue}>{estimatedHours}h</div>
          </div>
        </div>
      </div>

      {percentage === 100 && (
        <div className={styles.celebration}>
          🎉 Congratulations! You've completed all lessons!
        </div>
      )}

      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className={styles.actions}>
        <button
          className={styles.toggleBtn}
          onClick={() => setShowDetails(!showDetails)}
          aria-expanded={showDetails}
        >
          {showDetails ? '▼' : '▶'} Lessons
        </button>
        <button
          className={styles.actionBtn}
          onClick={markAllComplete}
          disabled={completedCount === totalCount}
          title="Mark all lessons as complete"
        >
          ✓ Complete All
        </button>
        <button
          className={styles.actionBtn}
          onClick={resetProgress}
          title="Reset all progress"
        >
          ↻ Reset
        </button>
      </div>

      {showDetails && (
        <div className={styles.lessonsList}>
          <div className={styles.lessonsHeader}>
            <span className={styles.lessonCount}>
              {completedCount} of {totalCount} lessons completed
            </span>
          </div>
          <div className={styles.lessons}>
            {lessons.length === 0 ? (
              <div className={styles.emptyMessage}>
                No lessons added yet. Create lessons with unique IDs to track progress.
              </div>
            ) : (
              lessons.map((lesson) => {
                const isComplete = completed[lesson.id];
                return (
                  <div
                    key={lesson.id}
                    className={`${styles.lessonItem} ${isComplete ? styles.completed : ''}`}
                  >
                    <button
                      className={styles.checkbox}
                      onClick={() => toggleLesson(lesson.id)}
                      aria-label={`Mark "${lesson.title}" as ${isComplete ? 'incomplete' : 'complete'}`}
                      title={isComplete ? 'Mark as incomplete' : 'Mark as complete'}
                    >
                      {isComplete && <span className={styles.checkmark}>✓</span>}
                    </button>
                    <div className={styles.lessonContent}>
                      <div className={styles.lessonTitle}>{lesson.title}</div>
                      {lesson.duration && (
                        <div className={styles.lessonMeta}>
                          {lesson.duration} min
                        </div>
                      )}
                      {lesson.description && (
                        <div className={styles.lessonDescription}>
                          {lesson.description}
                        </div>
                      )}
                    </div>
                    {isComplete && (
                      <div className={styles.completedBadge}>
                        Completed
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {percentage > 0 && percentage < 100 && (
        <div className={styles.encouragement}>
          {percentage < 25 && '🚀 Great start! Keep going!'}
          {percentage >= 25 && percentage < 50 && '⚡ You\'re making progress!'}
          {percentage >= 50 && percentage < 75 && '💪 More than halfway there!'}
          {percentage >= 75 && '🎯 Almost done! Don\'t stop now!'}
        </div>
      )}
    </div>
  );
}
