import type { DoodleSketch } from './types'

export const name = 'Crystal Grid'

export const sketch: DoodleSketch = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(640, 360)
    canvas.parent('canvas-root')
    p.background(250)
    p.stroke(40, 60, 120)
    p.fill(200, 220, 250, 180)
    const size = 60
    for (let x = 80; x < p.width; x += size) {
      for (let y = 60; y < p.height; y += size) {
        p.push()
        p.translate(x, y)
        p.rotate((x + y) * 0.01)
        p.beginShape()
        p.vertex(0, -20)
        p.vertex(18, 0)
        p.vertex(0, 24)
        p.vertex(-18, 0)
        p.endShape(p.CLOSE)
        p.pop()
      }
    }
  }
}
