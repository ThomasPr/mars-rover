
export type Position = {x: number, y: number};

export class WorldMap {

  private width: number;
  private height: number;

  obstacles: { x: number, y: number }[] = [];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height
  }

  public putObstacle(x: number, y: number) {
    if (!this.isCollision({x, y}))
      this.obstacles.push({ x, y });
  }

  public isCollision(rover: Position): boolean {
    return this.obstacles
      .some(obstacle =>
        rover.x === obstacle.x && rover.y === obstacle.y
      );
  }

  public wrapAround(position: Position): Position {
    return {
      x: (position.x + this.width) % this.width,
      y: (position.y + this.height) % this.height,
    }
  }
}
