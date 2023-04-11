```typescript
import { Vector } from './vector';

export class Ship {
  position: Vector;
  velocity: Vector;
  acceleration: Vector;
  rotation: number;
  rotationSpeed: number;

  constructor(x: number, y: number) {
    this.position = new Vector(x, y);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.rotation = 0;
    this.rotationSpeed = 0.1;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  applyForce(force: Vector) {
    this.acceleration.add(force);
  }

  rotate(direction: number) {
    this.rotation += this.rotationSpeed * direction;
  }

  thrust() {
    const force = Vector.fromAngle(this.rotation);
    force.mult(0.1);
    this.applyForce(force);
  }

  shoot() {
    // Implement shooting logic here
  }
}
```