import { FASTElement } from '@microsoft/fast-element';
export declare enum ErrorType {
    ERROR = "error",
    INFO = "info"
}
export declare class Validation extends FASTElement {
    /**
     *
     * @public
     * HTML Attribute: message
     */
    note: string;
    /**
     * @remarks types: error | info
     */
    type: ErrorType.ERROR | ErrorType.INFO;
    /**
     *
     *
     * @public
     * HTML Attribute: aria-labelledby
     */
    ariaLabelledBy: string;
    /**
     *
     *
     * @public
     * HTML Attribute: aria-role
     */
    ariaRole: string;
}
//# sourceMappingURL=validation.d.ts.map