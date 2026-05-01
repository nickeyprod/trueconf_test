import { Shape } from './Shape';

/**
 * Right Polygon where all sides are equal with area, perimeter and inner circle radius.
 */
export class RightPolygon extends Shape {
    
    sidesWidth: number;
    vertices: number;

    /**
     * Creates new instance of RighPolygon.
     *
     * @param sidesWidth - Width of every side of the polygon.
     * @param vertices - Number of the vertices in the polygon.
     */
    constructor(sidesWidth: number, vertices: number) {
        super(`Right ${vertices} sided Polygon`);

        this.sidesWidth = sidesWidth;
        this.vertices = vertices;
    }

    /**
     * Returns inner circle radius of the polygon as number.
     *
     * @returns number
     *
     * @example
     * ```ts
     * new RightPolygon(20, 6).innerCircleRadius; // 17.32
     * ```
     */
    get innerCircleRadius(): number {
        return this.sidesWidth / (2 * Math.tan(Math.PI / this.vertices));
    }

    /**
     * Returns perimeter of the polygon as number.
     *
     * @returns number
     *
     * @example
     * ```ts
     * new RightPolygon(20, 6).perimeter; // 120.00
     * ```
     */
    get perimeter(): number {
        return this.vertices * this.sidesWidth;
    }

    /**
     * Returns area of the polygon as number.
     *
     * @returns number
     *
     * @example
     * ```ts
     * new RightPolygon(20, 6).area; // 1039.23
     * ```
     */
    get area(): number {
        return (1/2) * this.perimeter * this.innerCircleRadius;
    }

    /**
     * Returns description of the polygon as string.
     *
     * @returns string "Polygon description"
     *
     * @example
     * ```ts
     * new RightPolygon(20, 6).description; // "Right 6 sided Polygon with area of 1039.23, perimeter of 120.00 and inner circle of radius 17.32."
     * ```
     */
    get description(): string {
        return `${this.name} with area of ${this.area.toFixed(2)}, perimeter of ${this.perimeter.toFixed(2)} and an inner circle of radius ${this.innerCircleRadius.toFixed(2)}.`;
    }
}
