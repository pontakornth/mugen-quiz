import { route } from "preact-router"

export interface IndexProps {
	onNext: () => void
}

export function Index({ onNext }: IndexProps) {
	return (
		<>
			<h1>Mugen Quiz</h1>
			<p>
				Choose your favorite programming language. We will ask some
				questions and determine what is your choice.
			</p>
			<button onClick={onNext}>Start the quiz</button>
		</>
	)
}
