class Dot {
  constructor(x = 0, y = 0, c = 'black') {
    this.x = x
    this.y = y
    this.color = c
  }
}

class GraphXY {
  constructor(ctx, w, h) {
    this.ctx = ctx
    this.width = w | ctx.canvas.width
    this.height = h | ctx.canvas.height
    this.dots = []
  }

  _drawBackground() {
    this.ctx.fillStyle = "white"
    this.ctx.strokeStyle = "black"

    this.ctx.beginPath()
    this.ctx.rect(0, 0, this.width, this.height)
    this.ctx.fill()

    this.ctx.beginPath()

    this.ctx.moveTo(this.width / 2, 0)
    this.ctx.lineTo(this.width / 2, this.height)
    ctx.moveTo(0, this.height / 2)
    this.ctx.lineTo(this.width, this.height / 2)

    this.ctx.stroke()
  }
  _drawDots() {
    this.dots.forEach((v) => {
      this.ctx.beginPath()
      this.ctx.fillStyle = v.color
      this.ctx.arc(v.x + this.width / 2, -v.y + this.height / 2, 4, 0, Math.PI * 2)
      this.ctx.fill()
    }, this)
  }
  addPoint(x, y, c) {
    this.dots.push(new Dot(x, y, c))
  }
  getPoint(n) {
    return this.dots[n]
  }

  draw() {
    this._drawBackground()
    this._drawDots()
  }

}