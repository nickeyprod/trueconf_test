import { Shape } from './Shape';

/**
 * Trapezoid with area.
 */
export class Trapezoid extends Shape {
    
    bottomBaseWidth: number;
    topBaseWidth: number;
    height: number;

    /**
     * Creates new instance of Trapezoid.
     *
     * @param bottomBaseWidth - Bottom base's width of the Trapezoid.
     * @param topBaseWidth - Top base's width of the Trapezoid.
     * @param height - Height of the Trapezoid.
     */
    constructor(bottomBaseWidth: number, topBaseWidth: number, height: number) {
        
        super("Trapezoid");

        if (bottomBaseWidth <= 0 || topBaseWidth <= 0 || height <= 0)  { 
            throw new TypeError('Bases/height cannot be negative or zero.');
        }

        this.bottomBaseWidth = bottomBaseWidth;
        this.topBaseWidth = topBaseWidth;
        this.height = height;
        
    }

    /**
     * Returns area of the trapezoid as number.
     *
     * @returns number
     *
     * @example
     * ```ts
     * new Trapezoid(2, 8, 3).area; // 15.00
     * ```
     */
    get area(): number {
        return (1/2 * (this.bottomBaseWidth + this.topBaseWidth)) * this.height;
    }

    /**
     * Returns perimeter of the trapezoid as number.
     *
     * @returns undefined
     * 
     * @remarks
     * Trapezoid has no side lengths.
     * 
     * @example
     * ```ts
     * new Trapezoid(2, 8, 3).perimeter; // undefined
     * ```
     */
    get perimeter(): undefined {
        return undefined;
    }

    /**
     * Returns description of the trapezoid as string.
     *
     * @returns string "Trapezoid description".
     *
     * @example
     * ```ts
     *  new Trapezoid(2, 8, 3).description; // "Trapezoid with area of 15.00."
     * ```
     */
    get description(): string {
        return `${this.name} with area of ${this.area.toFixed(2)}.`;
    }
}