```typescript
class Vector {
  constructor(public x: number, public y: number) {}

  add(vector: Vector): Vector {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  subtract(vector: Vector): Vector {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

function circleCollision(
  position1: Vector,
  radius1: number,
  position2: Vector,
  radius2: number
): boolean {
  const distanceVector = position1.subtract(position2);
  const distance = distanceVector.magnitude();
  const sumOfRadii = radius1 + radius2;

  return distance <= sumOfRadii;
}

function pointInPolygon(point: Vector, vertices: Vector[]): boolean {
  let inside = false;
  for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
    const xi = vertices[i].x,
      yi = vertices[i].y;
    const xj = vertices[j].x,
      yj = vertices[j].y;

    const intersect =
      (yi > point.y) !== (yj > point.y) &&
      point.x < ((xj - xi) * (point.y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function polygonCollision(
  vertices1: Vector[],
  vertices2: Vector[]
): boolean {
  for (const vertex of vertices1) {
    if (pointInPolygon(vertex, vertices2)) {
      return true;
    }
  }

  for (const vertex of vertices2) {
    if (pointInPolygon(vertex, vertices1)) {
      return true;
    }
  }

  return false;
}

export { circleCollision, pointInPolygon, polygonCollision, Vector };
```