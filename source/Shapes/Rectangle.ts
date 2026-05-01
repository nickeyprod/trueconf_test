
import { Shape } from './Shape';

/**
 * Rectangle with area, perimeter and radius.
 */
export class Rectangle extends Shape {
    width: number;
    height: number;

    /**
     * Creates new instance of Circle.
     *
     * @param width - Width of the Rectangle.
     * @param height - Height of the Rectangle.
     */
    constructor(width: number, height: number) {
        
        super("Rectangle");

        if (width <= 0 || height <= 0) { 
            throw new TypeError('Width/Height cannot be negative or zero.');
        }

        this.width = width;
        this.height = height;
    }

    /**
     * Returns area of the rectangle as number.
     *
     * @returns number
     *
     * @example
     * ```ts
     * new Rectangle(2, 2).area; // 4.00
     * ```
     */
    get area(): number {
        return this.width * this.height
    }
    
    /**
     * Returns perimeter of the rectangle as number.
     *
     * @returns number
     *
     * @example
     * ```ts
     * new Rectangle(2, 2).perimeter; // 8.00
     * ```
     */
    get perimeter(): number { 
        return 2 * (this.width + this.height); 
    }

    /**
     * Returns description of the rectangle as string.
     *
     * @returns string "Rectangle description".
     *
     * @example
     * ```ts
     *  new Rectangle(2, 2).description; // "Rectangle with area of 4.00 and perimeter of 8.00."
     * ```
     */
    get description(): string {
        return `${this.name} with area of ${this.area.toFixed(2)} and perimeter of ${this.perimeter.toFixed(2)}.`;
    }

}