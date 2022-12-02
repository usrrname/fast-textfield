import { attr, observable } from '@microsoft/fast-element';
import { FASTTextField } from '@microsoft/fast-foundation';

export class CustomTextField extends FASTTextField {
  /**
   * @public
   * @remarks
   * unique ID on the input text element
   */
  public id: string = '';
  /**
   * @public
   * @remarks
   * HTML element: label text value
   */
  @attr({ attribute: 'label' }) public label?: string = '';

  /**
   * @public
   * @remarks
   * invalid attribute: initializes as false
   */
  @attr({ attribute: 'invalid', mode: 'boolean' })
  @observable
  public invalid: ValidityState['valid'] = false;

  @attr({ attribute: 'validationmessage' })
  public validationMessage: string = '';
  /**
   * @public
   * @remarks
   * paragraph element that takes instructional text
   */
  @attr({ attribute: 'helptext' })
  public helpText?: string;

  /**
   * @public
   * @remarks
   * For accessibililty purposes, allows author to mentions in text next to label
   * whether the field is optional '(Optional)' or '(Required)'
   */
  @attr({ attribute: 'optionality' })
  public optionality?: string;

  @attr({ attribute: 'aria-errormessage' })
  @observable
  public ariaErrormessage: string = this.validationMessage;
}
