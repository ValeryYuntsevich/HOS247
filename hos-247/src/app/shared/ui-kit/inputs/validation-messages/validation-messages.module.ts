// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --- components --- //
import { ValidationMessagesComponent } from './components/validation-messages.component';
// --- modules --- //
import { TranslateUIModule } from '@shared/imports';

@NgModule({
	declarations: [ValidationMessagesComponent],
	imports: [CommonModule, TranslateUIModule],
	exports: [ValidationMessagesComponent],
})
export class ValidationMessagesModule {}
