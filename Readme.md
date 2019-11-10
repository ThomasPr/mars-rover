
# Mars Rover

from: http://kata-log.rocks/mars-rover-kata


## Requirements

You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. Develop an API that translates the commands sent from earth to instructions that are understood by the rover.


### Level 1

* You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
* The rover receives a character array of commands.
* Implement commands that move the rover forward/backward (f,b).
* Implement commands that turn the rover left/right (l,r).

### Level 2

* Implement wrapping from one edge of the grid to another. (planets are spheres after all)
* Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.


## Rules

* Practice TDD. Change roles (driver, navigator) after each TDD cycle. No red phases while refactoring.
* Write clean code.
* Be careful about edge cases and exceptions. We can not afford to lose a mars rover, just because the developers overlooked a null pointer.
* avoid `if`, `switch`, `for` where possible
