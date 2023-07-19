import * as core from '@angular/core';
import * as forms from '@angular/forms';

import { TButton, TFormDescription } from '@core/models';

@core.Component({
  selector: 'app-dynamic-reactive-forms',
  templateUrl: './dynamic-reactive-forms.component.html',
  changeDetection: core.ChangeDetectionStrategy.OnPush,
})
export class DynamicReactiveFormsComponent implements core.OnInit {
  @core.Input() public formDescription: TFormDescription = [];
  @core.Input() public submitConfig: TButton;

  @core.Output() public submit = new core.EventEmitter<any>();

  form!: forms.UntypedFormGroup;

  public ngOnInit(): void {
    this.createDynamicForm();
  }

  public formControl(key: string): forms.UntypedFormControl {
    return this.form.controls[key] as forms.UntypedFormControl;
  }

  public onSubmit(form: forms.UntypedFormGroup): void {
    if (this.form.invalid) {
      return;
    }
    this.submit.emit(form.value);
  }

  private createDynamicForm(): void {
    this.form = new forms.UntypedFormGroup(
      this.formDescription.reduce((memo, fieldDesc) => {
        return {
          ...memo,
          [fieldDesc.key]: new forms.UntypedFormControl(
            fieldDesc.defaultValue || '',
            forms.Validators.compose(fieldDesc.validators),
          ),
        };
      }, {}),
    );
  }
}

// field validation and put user-friendly messages in the template;
// opportunity to add label component on UI;
// add another type of controls like Radio, Checkbox

// formDescription: any = [
//   {
//     type: 'input',
//     key: 'email',
//     defaultValue: '',
//     validators: [Validators.required, emailValidator],
//     config: {
//       label: 'login.email.label',
//       hint: '',
//       placeholder: 'login.email.placeholder',
//       type: 'email',
//       appearance: 'legacy',
//       validatorErrorMessage: {
//         required: 'login.email.errorRequiredEmailMessage',
//         invalidEmail: 'login.email.errorInvalidEmailMessage',
//       },
//     },
//   },
// ];

// fields: FormlyFieldConfig[] = [
//   {
//     key: 'input',
//     type: 'input',
//     templateOptions: {
//       label: 'Input',
//       placeholder: 'Input placeholder',
//       required: true,
//     }
//   },
//   {
//     key: 'textarea',
//     type: 'textarea',
//     templateOptions: {
//       label: 'Textarea',
//       placeholder: 'Textarea placeholder',
//       required: true,
//     }
//   },
//   {
//     key: 'checkbox',
//     type: 'checkbox',
//     templateOptions: {
//       label: 'Checkbox',
//     }
//   },
//   {
//     key: 'select',
//     type: 'select',
//     templateOptions: {
//       label: 'Select',
//       placeholder: 'Select placeholder',
//       required: true,
//       options: [
//         { label: 'Option 1', value: '1' },
//         { label: 'Option 2', value: '2' },
//         { label: 'Option 3', value: '3' },
//       ]
//     }
//   },
//   {
//     key: 'radio',
//     type: 'radio',
//     templateOptions: {
//       label: 'Radio',
//       required: true,
//       options: [
//         { label: 'Option 1', value: '1' },
//         { label: 'Option 2', value: '2' },
//       ]
//     }
//   }
// ];
