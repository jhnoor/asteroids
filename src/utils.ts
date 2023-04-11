```typescript
// Utility functions for the asteroids game

/**
 * Generates a random number between min and max (inclusive)
 * @param min - The minimum number
 * @param max - The maximum number
 * @returns A random number between min and max
 */
export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Calculates the distance between two points (x1, y1) and (x2, y2)
 * @param x1 - The x-coordinate of the first point
 * @param y1 - The y-coordinate of the first point
 * @param x2 - The x-coordinate of the second point
 * @param y2 - The y-coordinate of the second point
 * @returns The distance between the two points
 */
export function getDistance(x1: number, y1: number, x2: number, y2: number): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Converts degrees to radians
 * @param degrees - The angle in degrees
 * @returns The angle in radians
 */
export function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/**
 * Converts radians to degrees
 * @param radians - The angle in radians
 * @returns The angle in degrees
 */
export function radiansToDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}
```