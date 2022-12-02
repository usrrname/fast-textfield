import { FASTTextField } from '@microsoft/fast-foundation';
export declare class CustomTextField extends FASTTextField {
    /**
     * @public
     * @remarks
     * unique ID on the input text element
     */
    id: string;
    /**
     * @public
     * @remarks
     * HTML element: label text value
     */
    label?: string;
    /**
     * @public
     * @remarks
     * invalid attribute: initializes as false
     */
    invalid: ValidityState['valid'];
    errorMessage: string;
    /**
     * @public
     * @remarks
     * paragraph element that takes instructional text
     */
    helpText?: string;
    /**
     * @public
     * @remarks
     * For accessibililty purposes, allows author to mentions in text next to label
     * whether the field is optional '(Optional)' or '(Required)'
     */
    optionality?: string;
    ariaErrormessage: string;
}
//# sourceMappingURL=custom-text-field.d.ts.map