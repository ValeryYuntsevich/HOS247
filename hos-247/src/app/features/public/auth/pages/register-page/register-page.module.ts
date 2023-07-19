// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// --- components --- //
import { RegisterPageComponent } from './components/register-page.component';
// --- routing --- //
import { RegisterPageRoutingModule } from './register-page-routing.module';
// --- pipes --- //
import { SafeHtmlPipeModule } from '@shared/pipes';
// --- modules --- //
import { TranslateUIModule, MaterialModule } from '@shared/imports';
import {
	HorizontalDividerModule,
	InputTextControlModule,
	ReusebleButtonModule,
	InputPasswordControlModule,
	PasswordStrengthModule,
} from '@shared/ui-kit';

@NgModule({
	declarations: [RegisterPageComponent],
	imports: [
		CommonModule,
		RegisterPageRoutingModule,
		TranslateUIModule,
		HttpClientModule,
		ReactiveFormsModule,
		MaterialModule,
		HorizontalDividerModule,
		InputTextControlModule,
		ReusebleButtonModule,
		SafeHtmlPipeModule,
		InputPasswordControlModule,
		PasswordStrengthModule,
	],
})
export class RegisterPageModule {}
