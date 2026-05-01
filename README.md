# trueconf_test
Библиотека  для работы с геометрическими фигурами.

# EXAMPLE of using
import { Rectangle } from './Shapes/Rectangle';
import { Circle } from './Shapes/Circle';
import { Triangle } from './Shapes/Triangle';

let newCircle = new Circle(5);
console.log("Circle area: ", newCircle.area); // 78.53981633974483
console.log("Circle radius: ", newCircle.radius); // 5
console.log("Circle circumference: ", newCircle.perimeter); // 31.41592653589793
console.log("Circle diameter: ", newCircle.diameter); // 10

let newRectangle = new Rectangle(2, 2);
console.log("Rectangle area: ", newRectangle.area); // 4
console.log("Rectangle perimeter: ", newRectangle.perimeter); // 8

let newTriangle = new Triangle(4, 2);

console.log("Triangle area: ", newTriangle.area); // 4
console.log("Triangle perimeter: ", newTriangle.perimeter); // undefined
