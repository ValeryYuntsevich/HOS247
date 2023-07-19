// --- node_modules --- //
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// --- pipes --- //
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SafeHtmlPipe],
  exports: [SafeHtmlPipe],
})
export class SafeHtmlPipeModule {}
