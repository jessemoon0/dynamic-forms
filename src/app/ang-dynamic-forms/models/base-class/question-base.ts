export class QuestionBase <T> {
  value: T; // Sets the type of the inherited form control
  key: string; // Sets the formControlName
  label: string; // To check if is required or not
  required: boolean; // Add the required validator if required
  order: number; // The order to be rendered (in service we do a sort)
  controlType: string; // For ngSwitch

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string
  } = {}) {
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}
