// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// --- components --- //
import { TextControlComponent } from './components/text-control.component';
// --- modules --- //
import { MaterialModule, TranslateUIModule } from '@shared/imports';
import { ValidationMessagesModule } from '../validation-messages/validation-messages.module';

@NgModule({
	declarations: [TextControlComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MaterialModule,
		TranslateUIModule,
		ValidationMessagesModule,
	],
	exports: [TextControlComponent],
})
export class InputTextControlModule {}
