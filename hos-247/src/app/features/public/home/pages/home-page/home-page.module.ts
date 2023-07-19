import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './components/home-page.component';

import { HomePageRoutingModule } from './home-page-routing.module';
import { InputCheckboxControlModule } from '@shared/ui-kit';

@NgModule({
	declarations: [HomePageComponent],
	imports: [CommonModule, HomePageRoutingModule, InputCheckboxControlModule],
})
export class HomePageModule {}
