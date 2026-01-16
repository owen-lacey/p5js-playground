import type { DoodleSketch } from './types'

export const name = 'Sunset Bands'

export const sketch: DoodleSketch = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(640, 360)
    canvas.parent('canvas-root')
    p.noLoop()
    p.noStroke()
    p.background(255)
    const bands = 7
    for (let i = 0; i < bands; i += 1) {
      const y = (p.height / bands) * i
      p.fill(245 - i * 20, 120 + i * 10, 90 + i * 10)
      p.rect(0, y, p.width, p.height / bands + 1)
    }
    p.fill(248, 234, 190)
    p.circle(p.width * 0.75, p.height * 0.4, 120)
  }
}
