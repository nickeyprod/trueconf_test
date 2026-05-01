import { Shape } from './Shape';

/**
 * Circle with area, perimeter and radius.
 */
export class Circle extends Shape {
    
    radius: number;

    /**
     * Creates new instance of Circle.
     *
     * @param radius - Radius of the Circle.
     */
    constructor(radius: number) {
        
        super("Circle");

        if (radius <= 0) {
            throw new TypeError('Radius cannot be negative or zero.');
        }

        this.radius = radius;
    }

    /**
     * Returns area of the circle as number.
     *
     * @returns number
     *
     * @example
     * ```ts
     * new Circle(5).area; // 78.54
     * ```
     */
    get area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    /**
     * Returns length of circumference of the circle as number.
     *
     * @returns number
     *
     * @example
     * ```ts
     * new Circle(5).perimeter; // 31.42
     * ```
     */
    get perimeter(): number { 
        return 2 * Math.PI * this.radius; 
    }

    /**
     * Returns diameter of the circle as number.
     *
     * @returns number
     *
     * @example
     * ```ts
     * new Circle(5).diameter; // 10.00
     * ```
     */
    get diameter(): number {
        return this.radius! * 2;
    }

    /**
     * Returns description of the circle as string.
     *
     * @returns string "Circle description."
     *
     * @example
     * ```ts
     * new Shape('Some shape').description; // "Circle with area of 78.54, diameter of 10.00 and circumference of 31.42."
     * ```
     */
    get description(): string {
        return `${this.name} with area of ${this.area.toFixed(2)}, diameter of ${this.diameter.toFixed(2)} and circumference of ${this.perimeter.toFixed(2)}.`;
    }
}
