import type { DoodleSketch } from './types'

export const name = 'Windy Lines'

export const sketch: DoodleSketch = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(640, 360)
    canvas.parent('canvas-root')
    p.noiseSeed(12)
    p.background(240)
    p.stroke(24, 70, 130)
    p.strokeWeight(2)
    p.noFill()
    for (let y = 40; y < p.height; y += 32) {
      p.beginShape()
      for (let x = 20; x <= p.width - 20; x += 40) {
        const offset = p.noise(x * 0.01, y * 0.02) * 30
        p.vertex(x, y + offset)
      }
      p.endShape()
    }
  }
}
