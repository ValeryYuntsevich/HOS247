// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --- components --- //
import { SecureLayoutComponent } from './components/secure-layout.component';
// --- routing --- //
import { SecureLayoutRoutingModule } from './secure-layout-routing.module';
// --- modules --- //

@NgModule({
  declarations: [SecureLayoutComponent],
  imports: [CommonModule, SecureLayoutRoutingModule],
})
export class SecureLayoutModule {}
