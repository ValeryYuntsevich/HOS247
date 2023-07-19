// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// --- modules --- //
import { MaterialModule, TranslateUIModule } from '@shared/imports';
import { ValidationMessagesModule } from '../validation-messages/validation-messages.module';
import { InputTextControlModule } from '../text-control/text-control.module';
// --- components --- //
import { InputPasswordControlComponent } from './components/input-password-control.component';

@NgModule({
	declarations: [InputPasswordControlComponent],
	imports: [
		CommonModule,
		TranslateUIModule,
		ReactiveFormsModule,
		MaterialModule,
		InputTextControlModule,
		ValidationMessagesModule,
	],
	exports: [InputPasswordControlComponent],
})
export class InputPasswordControlModule {}
