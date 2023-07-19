// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// --- components --- //
import { LoginPageComponent } from './components/login-page.component';
// --- routing --- //
import { LoginPageRoutingModule } from './login-page-routing.module';
// --- pipes --- //
import { SafeHtmlPipeModule } from '@shared/pipes';
// --- modules --- //
import { MaterialModule, TranslateUIModule } from '@shared/imports';
import {
	HorizontalDividerModule,
	InputPasswordControlModule,
	ReusebleButtonModule,
	InputTextControlModule,
} from '@shared/ui-kit';

@NgModule({
	declarations: [LoginPageComponent],
	imports: [
		CommonModule,
		LoginPageRoutingModule,
		TranslateUIModule,
		HttpClientModule,
		ReactiveFormsModule,
		MaterialModule,
		HorizontalDividerModule,
		InputPasswordControlModule,
		ReusebleButtonModule,
		InputTextControlModule,
		SafeHtmlPipeModule,
	],
})
export class LoginPageModule {}
