import { Rover } from '../src/rover';
import { WorldMap } from '../src/world_map';

describe("Rover", () => {

  let rover: Rover;
  let map: WorldMap;

  beforeEach(() => {
    map = new WorldMap(10, 10);
    rover = new Rover(1, 1, 'NORTH', map);
  });

  it("should wrap around", () => {
    rover.processCommands("fffffffff");
    expect(rover.x).toBe(1);
    expect(rover.y).toBe(0);
  })

  it("should not hit obstacles", () => {
    map.putObstacle(4,4);
    map.putObstacle(4,5);
    map.putObstacle(4,6);
    rover.processCommands("ffffRffff");
    expect(rover.x).toBe(3);
    expect(rover.y).toBe(5);
    expect(rover.hasObstacle).toBeTruthy();
  })

  it("should avoid obstancles and wrap", () => {
    map.putObstacle(9, 2);
    rover.processCommands("flfff");
    expect(rover.x).toBe(0);
    expect(rover.y).toBe(2);
  })

  it("should ignore bad commands", () => {
    rover.processCommands("xyz");
    expect(rover.x).toBe(1);
    expect(rover.y).toBe(1);
  })
})
