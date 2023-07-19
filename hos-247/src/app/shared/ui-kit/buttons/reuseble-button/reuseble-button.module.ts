// --- node_modules --- //
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// --- modules --- //
import { MaterialModule, TranslateUIModule } from '@shared/imports';
// --- components --- //
import { ReusebleButtonComponent } from './components/reuseble-button.component';

@NgModule({
  imports: [CommonModule, MaterialModule, TranslateUIModule],
  declarations: [ReusebleButtonComponent],
  exports: [ReusebleButtonComponent],
})
export class ReusebleButtonModule {}
