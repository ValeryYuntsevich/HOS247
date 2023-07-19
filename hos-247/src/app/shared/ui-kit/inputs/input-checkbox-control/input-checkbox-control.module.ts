import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputCheckboxControlComponent } from './components/input-checkbox-control.component';
import { MaterialModule } from '@shared/imports';

@NgModule({
	declarations: [InputCheckboxControlComponent],
	imports: [CommonModule, MaterialModule],
	exports: [InputCheckboxControlComponent],
})
export class InputCheckboxControlModule {}
