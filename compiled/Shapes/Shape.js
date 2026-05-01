"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
/**
 * Abstract Base Type Shape.
 */
class Shape {
    /**
     * Creates new instance of abstract shape with name.
     *
     * @param name - Name of the Shape.
     */
    constructor(name) {
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
    get description() {
        return `${this.name}.`;
    }
}
exports.Shape = Shape;
