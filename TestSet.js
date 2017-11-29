class Question {
	constructor(input, output) {
		this.input = input
		this.output = output
	}
}
class TestSet {
	constructor() {
		this.questions = []
	}
	addQuestion(input, output) {
		this.questions.push(
			new Question(input, output)
		)
	}
	askNetwork(network, questionIndex){
		let quest = this.questions[questionIndex]

		for (let i = 0; i < quest.input; i++) {
			network.setInput(i, quest[i])			
		}
		let answer = []
		let pass = true
		for (let i = 0; i < quest.output; i++) {
			answer[i] = network.getOutput(i)
			if (quest.output[i] != answer[i])
				pass = false
		}
		return {
			"input_data": quest.input,
			"properly_answer": quest.output,
			"network_answer": answer,
			"pass": pass
		}
	}
	testNetwork(network){
		let results = []
		let fails = 0
		let successes = 0
		for (let i = 0; i < this.questions.length; i++) {
			results[i] = this.askNetwork(network, i)
			if( results[i].pass )
				successes++
			else
				fails++
		}
		return {
			"results": results,
			"fails": fails,
			"succesess": successes,
			"questions": results.length,
			"neural_network": network
		}
	}
}