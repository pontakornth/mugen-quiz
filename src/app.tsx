import { Logo } from './logo'
import Router, { Route } from 'preact-router'
import { h } from 'preact'
import { Index } from './pages/index'
import { Quiz } from './pages/quiz'


export function App() {
  return (
    <>
      <Router>
        <Route component={Index} path="/" />
        <Route component={Quiz} path="/questions/:questionNumber" />
      </Router>
    </>
  )
}
