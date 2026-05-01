"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const Shape_1 = require("./Shape");
/**
 * Triangle with area and perimeter.
 */
class Triangle extends Shape_1.Shape {
    /**
     * Creates new instance of Triangle.
     *
     * @param base - Width of the base of the Triangle.
     * @param height - Height of the Triangle.
     */
    constructor(base, height) {
        super("Triangle");
        if (base <= 0 || height <= 0) {
            throw new TypeError('Base/Height cannot be negative or zero.');
        }
        this.base = base;
        this.height = height;
    }
    /**
     * Returns area of the triangle as number.
     *
     * @returns number
     *
     * @example
     * ```ts
     * new Triangle(4, 2).area; // 4.00
     * ```
     */
    get area() {
        return 1 / 2 * (this.base * this.height);
    }
    /**
     * Returns perimeter of the triangle as number.
     *
     *
     * @returns undefined
     *
     * @remarks
     * Triangle has no side lengths.
     *
     * @example
     * ```ts
     * new Rectangle(2, 2).perimeter; // undefined
     * ```
     */
    get perimeter() {
        return undefined;
    }
    /**
     * Returns description of the triangle as string.
     *
     * @returns string "Triangle description".
     *
     * @example
     * ```ts
     *  new Triangle(4, 2).description; // "Triangle with area of 4.00."
     * ```
     */
    get description() {
        return `${this.name} with area of ${this.area.toFixed(2)}.`;
    }
}
exports.Triangle = Triangle;
