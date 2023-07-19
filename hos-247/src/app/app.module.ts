// --- node_modules --- //
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
// --- modules--- //
import { CoreModule } from '@core/core.module';
import { IconModule, TranslateUIModule } from '@shared/imports';
// --- components--- //
import { AppComponent } from './app.component';
// --- route--- //
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		TranslateUIModule,
		CoreModule,
		IconModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
