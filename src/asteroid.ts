```typescript
import { Vector } from './vector';

export class Asteroid {
  position: Vector;
  velocity: Vector;
  radius: number;
  rotation: number;

  constructor(x: number, y: number, radius: number, rotation: number) {
    this.position = new Vector(x, y);
    this.velocity = Vector.random();
    this.radius = radius;
    this.rotation = rotation;
  }

  update(deltaTime: number): void {
    this.position.add(this.velocity.multiply(deltaTime));
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.rotation);
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  checkCollision(shipPosition: Vector, shipRadius: number): boolean {
    const distance = this.position.distanceTo(shipPosition);
    return distance < this.radius + shipRadius;
  }
}
```