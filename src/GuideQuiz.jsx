import { useState } from 'react'

export default function GuideQuiz({ quiz, completed, onPass }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  if (!quiz || quiz.length === 0) return null

  const allAnswered = quiz.every((_, i) => answers[i] !== undefined)
  const score = quiz.filter((q, i) => answers[i] === q.correctIndex).length
  const allCorrect = score === quiz.length

  function selectOption(qi, oi) {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [qi]: oi }))
  }

  function handleSubmit() {
    setSubmitted(true)
    if (quiz.every((q, i) => answers[i] === q.correctIndex)) {
      onPass()
    }
  }

  function handleRetry() {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <div className="quiz-box">
      <h3 className="quiz-title">
        📝 Bài kiểm tra nhanh {completed && <span className="quiz-completed-tag">✅ Đã hoàn thành</span>}
      </h3>

      {quiz.map((q, qi) => (
        <div key={qi} className="quiz-question">
          <p className="quiz-question-text">
            {qi + 1}. {q.question}
          </p>
          <div className="quiz-options">
            {q.options.map((opt, oi) => {
              const isSelected = answers[qi] === oi
              const isCorrectOpt = oi === q.correctIndex
              let cls = 'quiz-option'
              if (isSelected) cls += ' quiz-option-selected'
              if (submitted && isCorrectOpt) cls += ' quiz-option-correct'
              if (submitted && isSelected && !isCorrectOpt) cls += ' quiz-option-wrong'
              return (
                <button key={oi} type="button" className={cls} disabled={submitted} onClick={() => selectOption(qi, oi)}>
                  {opt}
                </button>
              )
            })}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button className="quiz-submit-btn" disabled={!allAnswered} onClick={handleSubmit}>
          Nộp bài
        </button>
      ) : (
        <div className="quiz-result">
          <p className={allCorrect ? 'quiz-result-pass' : 'quiz-result-fail'}>
            Đúng {score}/{quiz.length} câu {allCorrect ? '🎉 Bạn đã hoàn thành bài học này!' : '— xem lại và thử lại nhé'}
          </p>
          {!allCorrect && (
            <button className="quiz-retry-btn" onClick={handleRetry}>
              Làm lại
            </button>
          )}
        </div>
      )}
    </div>
  )
}
