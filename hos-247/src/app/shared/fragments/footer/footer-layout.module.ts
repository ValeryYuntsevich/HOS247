// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// --- components --- //
import { FooterLayoutComponent } from './components/footer-layout.component';
// --- modules --- //
import { MaterialModule, TranslateUIModule } from '@shared/imports';

@NgModule({
	declarations: [FooterLayoutComponent],
	imports: [CommonModule, RouterModule, MaterialModule, TranslateUIModule],
	exports: [FooterLayoutComponent],
})
export class FooterLayoutModule {}
