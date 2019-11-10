import { Rover } from '../src/rover';

describe("Rover", () => {

  let rover: Rover;

  beforeEach(() => {
    rover = new Rover(1, 1, 'NORTH');
  });

  it("should be created", () => {
    expect(rover.x).toBe(1);
  })

  it("should move forward", () => {
    rover.processCommands("f");
    expect(rover.y).toBe(2)
    expect(rover.x).toBe(1);
  })

  it("should move backward", () => {
    rover.processCommands("b");
    expect(rover.y).toBe(0);
    expect(rover.x).toBe(1);
  })

  it("should move forward twice", () => {
    rover.processCommands("ff");
    expect(rover.y).toBe(3);
    expect(rover.x).toBe(1);
  })

  it("should move foward and then backward", () => {
    rover.processCommands("fb");
    expect(rover.y).toBe(1);
    expect(rover.x).toBe(1);
  })


  it("should move forward and then backward multiple times", () => {
    rover.processCommands("ffffbb");
    expect(rover.y).toBe(3);
    expect(rover.x).toBe(1);
  })

  it("should turn right and then move foward", () => {
    rover.processCommands("rf");
    expect(rover.y).toBe(1);
    expect(rover.x).toBe(2);
    expect(rover.getDirection()).toBe("EAST");
  })

  it("should move after turn", () => {
    rover.processCommands("ffrff");
    expect(rover.y).toBe(3);
    expect(rover.x).toBe(3);
    expect(rover.getDirection()).toBe("EAST");
  })

  it("should turn left twice", () => {
		rover.processCommands("ffllb");
    expect(rover.y).toBe(4);
    expect(rover.x).toBe(1);
    expect(rover.getDirection()).toBe("SOUTH");
  })

  it("should turn around", () => {
		rover.processCommands("ffllff");
    expect(rover.y).toBe(1);
    expect(rover.x).toBe(1);
    expect(rover.getDirection()).toBe("SOUTH");
  })
})