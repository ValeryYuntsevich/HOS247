import { ValidatorFn } from '@angular/forms';

export type TSelectControl = {
  type: 'select';
  key: string;
  defaultValue?: string;
  options: string[];
  validators: (ValidatorFn | null | undefined)[];
  defaultOptions?: string;
};
