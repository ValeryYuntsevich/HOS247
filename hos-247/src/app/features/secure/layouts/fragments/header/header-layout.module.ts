// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --- components --- //
import { HeaderLayoutComponent } from './components/header-layout.component';
// --- modules --- //
import { MaterialModule } from '@shared/imports';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [HeaderLayoutComponent],
	imports: [CommonModule, RouterModule, MaterialModule],
	exports: [HeaderLayoutComponent],
})
export class HeaderLayoutModule {}
