class NeuralLayer {
	constructor(inputs, amount, neuralClass) {
		this.inputs = []
		this.neurons = []

		for (let i = 0; i < inputs; i++) {
			this.inputs.push(0.0)
		}
		for (let i = 0; i < amount; i++) {
			this.addNeuron(neuralClass)			
		}
	}

	addNeuron(neuralClass=NeuralCell) {
		let neuron = new neuralClass(this.inputs.length)
		this.neurons.push(neuron)
	}

	getInputSize() {
		return this.inputs.length
	}
	getInput(n) {
		return this.inputs[n]
	}
	setInput(n, v) {
		this.inputs[n] = v
		this.neurons.forEach((e) => {
			e.setInputValue(n, v)
		})
	}
	getNeuron(n){
		return this.neurons[n]
	}
	getOutput(n = 0) {
		return this.neurons[n].getOutput()
	}
}