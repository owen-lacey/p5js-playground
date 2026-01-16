import type { DoodleSketch } from './types'

export const name = 'Equilateral Triangle'

export const sketch: DoodleSketch = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(640, 360)
    canvas.parent('canvas-root')
    p.background(245)
    p.fill(40, 140, 220)
    p.stroke(20, 60, 120)
    p.strokeWeight(4)
    const side = 300
    const height = side * Math.sqrt(3) / 2
    const centerX = p.width / 2
    const baseY = 300
    const leftX = centerX - side / 2
    const rightX = centerX + side / 2
    const topY = baseY - height
    p.triangle(leftX, baseY, centerX, topY, rightX, baseY)
  }
}
