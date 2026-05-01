import { Rectangle } from './Shapes/Rectangle';
import { Circle } from './Shapes/Circle';
import { Triangle } from './Shapes/Triangle';
import { RightPolygon } from './Shapes/RightPolygon';
import { Trapezoid } from './Shapes/Trapezoid';

// TESTING FOR SHAPES CREATION 

let newCircle = new Circle(5);
let newRectangle = new Rectangle(2, 2);
let newTriangle = new Triangle(4, 2);
let newPolygon6Side = new RightPolygon(20, 6);
let newTrapezoid = new Trapezoid(2, 8, 3);

console.log(" = = = = = = = = = = = ");
console.log(newCircle.description);
console.log("Circle area: ", newCircle.area);
console.log("Circle radius: ", newCircle.radius);
console.log("Circle circumference: ", newCircle.perimeter);
console.log("Circle diameter: ", newCircle.diameter);
console.log(" = = = = = = = = = = = ");
console.log(newRectangle.description);
console.log(newTriangle.description);
console.log(newPolygon6Side.description);
console.log(newTrapezoid.description);

console.assert(new Rectangle(2,2).area === 4);
console.assert(Math.abs(new Circle(1).area - Math.PI) < 1e-12);
console.assert(new RightPolygon(1,4).perimeter === 4);