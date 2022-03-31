import { route } from "preact-router"

export function Index() {
	const handleClick = () => {
		route("/questions/1")
	}
	return (
		<>
			<h1>Mugen Quiz</h1>
			<p>Determining your language like a boss.</p>
			<button onClick={handleClick}>Start the quiz</button>
		</>
	)
}
