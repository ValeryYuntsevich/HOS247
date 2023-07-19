// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --- components --- //
import { AuthLayoutComponent } from './layout/auth-layout.component';
// --- routing --- //
import { AuthLayoutRoutingModule } from './auth-layout-routing.module';

@NgModule({
	declarations: [AuthLayoutComponent],
	imports: [CommonModule, AuthLayoutRoutingModule],
})
export class AuthLayoutModule {}
