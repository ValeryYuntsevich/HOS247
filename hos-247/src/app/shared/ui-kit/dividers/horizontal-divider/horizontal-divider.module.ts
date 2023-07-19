// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --- components --- //
import { HorizontalDividerComponent } from './components/horizontal-divider.component';

@NgModule({
	declarations: [HorizontalDividerComponent],
	imports: [CommonModule],
	exports: [HorizontalDividerComponent],
})
export class HorizontalDividerModule {}
