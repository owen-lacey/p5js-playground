import type { DoodleSketch } from './types'

export const name = 'Orbiting Dots (Animated)'

export const sketch: DoodleSketch = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(640, 360)
    canvas.parent('canvas-root')
    p.noStroke()
  }

  p.draw = () => {
    p.background(248, 244, 238)
    p.translate(p.width / 2, p.height / 2)
    const rings = 6
    for (let i = 0; i < rings; i += 1) {
      const radius = 35 + i * 28
      const speed = 0.01 + i * 0.004
      const angle = p.frameCount * speed
      const x = p.cos(angle) * radius
      const y = p.sin(angle) * radius
      p.fill(30 + i * 20, 140, 220, 180)
      p.circle(x, y, 14 + i * 2)
    }
  }
}
