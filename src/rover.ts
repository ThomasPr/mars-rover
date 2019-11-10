import { WorldMap, Position } from './world_map';

enum Direction { NORTH, EAST, SOUTH, WEST };

export class Rover {

  worldMap: WorldMap;

  position: Position;
  direction: Direction;
  hasObstacle: boolean;

  constructor(x: number, y: number, direction: string, worldMap?: WorldMap) {
    this.position = { x, y };
    this.direction = (<any>Direction)[direction];
    this.worldMap = worldMap || new WorldMap(1000, 1000)
    this.hasObstacle = false;
  }

  processCommands(commands: string): void {
    type Command = 'l' | 'r' | 'f' | 'b';
    const capabilities: { command: Command, action: () => void }[] = [
      { command: 'l', action: () => this.turn(-1) },
      { command: 'r', action: () => this.turn(+1) },
      { command: 'f', action: () => this.move(+1) },
      { command: 'b', action: () => this.move(-1) },
    ]

    commands
      .toLowerCase()
      .trim()
      .split('')
      .filter(() => !this.hasObstacle)
      .map(command => capabilities.find(capability => capability.command === command))
      .forEach(capability => capability ?.action());
  }

  private turn(numericTurnDirection: -1 | 1) {
    const numberOfDirections = 4;
    this.direction = (this.direction + numericTurnDirection + numberOfDirections) % numberOfDirections
  }

  private move(length: -1 | 1) {
    let newPosition: Position = { x: this.position.x, y: this.position.y };

    switch (this.direction) {
      case Direction.NORTH: newPosition.y += length; break;
      case Direction.EAST:  newPosition.x += length; break;
      case Direction.SOUTH: newPosition.y -= length; break;
      case Direction.WEST:  newPosition.x -= length; break;
    }

    newPosition = this.worldMap.wrapAround(newPosition);

    if (this.worldMap.isCollision(newPosition))
      this.hasObstacle = true
    else {
      this.position = newPosition;
    }
  }

  private isCollision(rover: { x: number, y: number }): boolean {
    return this.worldMap.obstacles
      .some(obstacle => obstacle.x === rover.x && obstacle.y === rover.y)
  }

  public get x() {
    return this.position.x;
  }

  public get y() {
    return this.position.y;
  }

  public getDirection() {
    return Direction[this.direction];
  }
}
