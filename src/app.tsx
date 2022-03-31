import { Logo } from './logo'
import Router, { route, Route } from 'preact-router'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Index } from './pages/index'
import { Quiz, QuizProps } from './pages/quiz'
import { questions } from './data/questions'

function getQuestion() {
  return questions[Math.floor(Math.random() * questions.length)]
}

export function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState<string>(getQuestion())

  const handleNext = () => {
    setStarted(_ => true)
    setQuestionNumber(n => n + 1)
    setCurrentQuestion(oldQuestion => {
      let newQuestion: string
      do {
        newQuestion = getQuestion()
      } while (newQuestion == oldQuestion)
      return newQuestion
    })
    route(`/questions/${questionNumber}`)
  }
  return (
    <>
      <Router>
        <Route component={() => <Index onNext={handleNext} />} path="/" />
        <Route component={({ questionNumber }: Partial<QuizProps>) => <Quiz onNext={handleNext} questionNumber={questionNumber} currentQuestion={currentQuestion} started={started} />} path="/questions/:questionNumber" />
      </Router>
    </>
  )
}
