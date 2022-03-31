import { route } from "preact-router"
import { useEffect } from "preact/hooks"

export interface QuizProps {
	onNext: () => void,
	questionNumber: number | undefined,
	currentQuestion: string,
	started: boolean,
}

export function Quiz({ onNext, questionNumber, currentQuestion, started }: QuizProps) {
	useEffect(() => {
		if (!started) {
			// Go home. You haven't visit home yet.
			route("/", true)
		}
	}, [])
	return (
		<>
			<h1>Question {questionNumber}</h1>
			<p>{currentQuestion}</p>
			<button onClick={onNext}>Yes</button>
			<button onClick={onNext}>No</button>
		</>
	)
}