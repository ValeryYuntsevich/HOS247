// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// --- modules --- //
import { MaterialModule } from '@shared/imports';
// --- components --- //
import { DynamicReactiveFormsComponent } from './dynamic-reactive-form/components/dynamic-reactive-forms.component';

@NgModule({
	declarations: [DynamicReactiveFormsComponent],
	imports: [CommonModule, ReactiveFormsModule, MaterialModule],
	exports: [DynamicReactiveFormsComponent],
})
export class DynamicReactiveFormModule {}
