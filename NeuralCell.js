class NeuralCell {
  constructor(inputs = 0) {
    this.dendrites = []
    this.synapses = []

    this.teach_ratio = 0

    addInput(inputs)
  }

  addInput(number = 1) {
    for (let i = 0; i < number; i++) {
      this.dendrites.push(0.0)
      this.synapses.push(1.0)
    }
  }

  getInputSize() {
    return this.dendrites.length
  }

  getInputValue(n) {
    return this.dendrites[n]
  }
  setInputValue(n, v) {
    this.dendrites[n] = v
  }

  getInputWeight(n) {
    return this.synapses[n]
  }
  setInputWeight(n, v) {
    this.synapses[n] = v
  }

  _processDendrite(n) {
    return this.dendrites[n] * this.synapses[n]
  }
  _processMembrane() {
    let sum = 0
    for (let i = 0; i < this.getInputSize(); i++)
      sum += _processDendrite(i)
    return sum
  }
  _activationFunction(val) {
    return val
  }

  getOutput() {
    return _activationFunction(_processMembrane())
  }
}