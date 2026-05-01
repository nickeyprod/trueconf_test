# trueconf_test
Библиотека  для работы с геометрическими фигурами.

# EXAMPLE of using
import { Rectangle } from './Shapes/Rectangle';<br>
import { Circle } from './Shapes/Circle';<br>
import { Triangle } from './Shapes/Triangle';

let newCircle = new Circle(5);
console.log("Circle area: ", newCircle.area); // 78.53981633974483<br>
console.log("Circle radius: ", newCircle.radius); // 5<br>
console.log("Circle circumference: ", newCircle.perimeter); // 31.41592653589793<br>
console.log("Circle diameter: ", newCircle.diameter); // 10<br>
<br>
let newRectangle = new Rectangle(2, 2);<br>
console.log("Rectangle area: ", newRectangle.area); // 4<br>
console.log("Rectangle perimeter: ", newRectangle.perimeter); // 8<br>
<br>
let newTriangle = new Triangle(4, 2);<br>
console.log("Triangle area: ", newTriangle.area); // 4<br>
console.log("Triangle perimeter: ", newTriangle.perimeter); // undefined<br>
