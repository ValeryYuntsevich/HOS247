// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --- components --- //
import { PasswordStrengthComponent } from './component/password-strength.component';

@NgModule({
	declarations: [PasswordStrengthComponent],
	imports: [CommonModule],
	exports: [PasswordStrengthComponent],
})
export class PasswordStrengthModule {}
