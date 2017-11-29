class NeuralCell {
  constructor(inputs = 0) {
    this.dendrites = []
    this.synapses = []

    this.teach_ratio = 0

    this.modified = true
    this.last_output = 0.0

    this.addInput(inputs)
  }

  _processDendrite(n) {
    return this.dendrites[n] * this.synapses[n]
  }
  _processMembrane() {
    if (this.getInputSize() == 0)
      return -1

    let sum = 0
    for (let i = 0; i < this.getInputSize(); i++)
      sum += this._processDendrite(i)
    return sum
  }
  _activationFunction(val) {
    return val
  }

  addInput(number = 1) {
    for (let i = 0; i < number; i++) {
      this.dendrites.push(0.0)
      this.synapses.push(1.0)
    }
    this.modified = true
  }

  getInputSize() {
    return this.dendrites.length
  }

  getInputValue(n) {
    return this.dendrites[n]
  }
  setInputValue(n, v) {
    this.dendrites[n] = v
    this.modified = true
  }

  getInputWeight(n) {
    return this.synapses[n]
  }
  setInputWeight(n, v) {
    this.synapses[n] = v
    this.modified = true
  }

  getOutput() {
    if (this.modified == true) {
      this.modified = false
      this.last_output = this._activationFunction(this._processMembrane())
    }
    return this.last_output
  }
}