// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --- components --- //
import { HomeLayoutComponent } from './layout/home-layout.component';
// --- modules --- //
import { HomeLayoutRoutingModule } from './home-layout-routing.module';

@NgModule({
	declarations: [HomeLayoutComponent],
	imports: [CommonModule, HomeLayoutRoutingModule],
	exports: [],
})
export class HomeLayoutModule {}
