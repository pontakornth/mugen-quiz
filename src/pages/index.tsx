import { route } from "preact-router"

export interface IndexProps {
	onNext: () => void
}

export function Index({ onNext }: IndexProps) {
	return (
		<>
			<h1>Mugen Quiz</h1>
			<p>Determining your language like a boss.</p>
			<button onClick={onNext}>Start the quiz</button>
		</>
	)
}
