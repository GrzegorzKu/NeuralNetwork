class NeuralNetwork {
	constructor() {
		this.layers = []
	}

	/*
	*	Process layers parallel (every neurons in every layer)
	* Don't process the last layer, but copy data from
	* penultimate layer to the last one
	*/
	_processLayers() {
		for (let layerIndex = 0; layerIndex < this.getLayerSize(); layerIndex++) {
			
			let layer = this.layers[layerIndex]
			if (layerIndex > 0) {
				//first layer don't need copy
				//output of previous layer

				//copy output of previous layer
				//to input in current layer
				let previousLayer = this.layers[layerIndex - 1]
				for (let inputIndex = 0; inputIndex < layer.getInputSize(); inputIndex++) {
					layer.setInput(previousLayer.getOutput(inputIndex))
				}
			}
		}
	}
	addLayer(layer) {
		this.layers.push(layer)
	}
	getLayer(n) {
		return this.layers[n]
	}
	getLayerSize() {
		return this.layers.length
	}

	setInput(n, v) {
		this.layers[0].setInput(n, v)
	}
	getInput(n) {
		return this.layers[0].getInput(n)
	}
	getOutput(n = 0) {
		this._processLayers()
		let layer = this.layers[this.getLayerSize() - 1]
		return layer.getOutput(n)
	}
}