import type { DoodleSketch } from './types'

export const name = 'Star';

export const sketch: DoodleSketch = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(640, 360)
    canvas.parent('canvas-root')
    p.background(255);

    const outerStarCoords = [0, 72, 144, 216, 288]
      .map(angle => {
      return {
        x: p.width / 2 + 100 * p.cos(p.radians(angle - 90)),
        y: p.height / 2 + 100 * p.sin(p.radians(angle - 90))
      }
      });
    const innerStarCoords = [36, 108, 180, 252, 324]
      .map(angle => {
      return {
        x: p.width / 2 + 40 * p.cos(p.radians(angle - 90)),
        y: p.height / 2 + 40 * p.sin(p.radians(angle - 90))
      }
      });

    p.stroke(0);
    p.strokeWeight(2);
    p.beginShape();
    for (let i = 0; i < 5; i++) {
      p.vertex(outerStarCoords[i].x, outerStarCoords[i].y);
      p.vertex(innerStarCoords[i].x, innerStarCoords[i].y);
    }
    p.endShape(p.CLOSE);
  }
}