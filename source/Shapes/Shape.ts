/**
 * Abstract Base Type Shape.
 */
export abstract class Shape {

    name: string;

    abstract get area(): number;
    abstract get perimeter(): number | undefined;

    /**
     * Creates new instance of abstract shape with name.
     *
     * @param name - Name of the Shape.
     */
    constructor(name: string) {
        this.name = name;
    }

    /**
     * Returns description of the shape as string.
     *
     * @returns string "Shape Name".
     *
     * @example
     * ```ts
     * new Shape('Some shape').description; // "Some shape"
     * ```
     */
    get description(): string {
        return `${this.name}.`;
    }
    
}
