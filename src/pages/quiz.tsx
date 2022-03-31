export interface QuizProps {
	onNext: () => void,
	questionNumber: number | undefined,
	currentQuestion: string,
}

export function Quiz({ onNext, questionNumber, currentQuestion }: QuizProps) {
	return (
		<>
			<h1>Question {questionNumber}</h1>
			<p>{currentQuestion}</p>
			<button onClick={onNext}>Yes</button>
			<button onClick={onNext}>No</button>
		</>
	)
}