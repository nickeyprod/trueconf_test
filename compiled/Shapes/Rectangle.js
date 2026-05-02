"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
/**
 * Rectangle with area, perimeter and radius.
 */
class Rectangle extends Shape_1.Shape {
    /**
     * Creates new instance of Rectangle.
     *
     * @param width - Width of the Rectangle.
     * @param height - Height of the Rectangle.
     */
    constructor(width, height) {
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
    get area() {
        return this.width * this.height;
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
    get perimeter() {
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
    get description() {
        return `${this.name} with area of ${this.area.toFixed(2)} and perimeter of ${this.perimeter.toFixed(2)}.`;
    }
}
exports.Rectangle = Rectangle;
