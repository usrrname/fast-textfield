import { attr, FASTElement } from '@microsoft/fast-element';

export enum ErrorType {
  ERROR = 'error',
  INFO = 'info',
}

export class Validation extends FASTElement {
  /**
   *
   * @public
   * HTML Attribute: message
   */
  @attr({ attribute: 'note' })
  public note: string;

  /**
   * @remarks types: error | info
   */
  @attr public type: ErrorType.ERROR | ErrorType.INFO;
  /**
   *
   *
   * @public
   * HTML Attribute: aria-labelledby
   */
  @attr({ attribute: 'aria-labelledby' })
  public ariaLabelledBy: string;
  /**
   *
   *
   * @public
   * HTML Attribute: aria-role
   */
  @attr({ attribute: 'aria-role' })
  public ariaRole: string;
}
