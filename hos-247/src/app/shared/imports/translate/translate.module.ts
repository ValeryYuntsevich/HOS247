// --- node_modules --- //
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		TranslateModule.forRoot({
			defaultLanguage: 'en',
			useDefaultLang: true,
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
	],
	exports: [TranslateModule],
})
export class TranslateUIModule {}

// Example:
// https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular-app-with-ngx-translate

// {{'id' | translate}}
// {{'id' | translate: { parameter: value } }}
// ----------------------------------------------
// {
//   "demo": {
//       "greeting": "Hello {{parameter}}!"
//       "title": "Translation demo",
//       "text": "This is a simple demonstration app for ngx-translate"
//   }
// }
// ----------------------------------------------
// translate.get('demo.greeting', {name: 'John'}).subscribe((res: string) => {
//   console.log(res);
// });
// console.log(translate.instant('demo.greeting', {name: 'John'}));
// ----------------------------------------------
// {
//   "demo": {
//     "paragraph": "Try <strong>BabelEdit</strong>! This translation editor is made for <strong>ngx-translate</strong>!"
//   }
// }
// <div [innerHTML]="'demo.paragraph' | translate"></div>
// ----------------------------------------------
// Getting the browser default language
// The TranslateService contains 2 methods to receive the language set in the user's browser:

// translate.getBrowserLang() gives you the language set in the user's browser (en)
// translate.getBrowserCultureLang() which gives you the complete language code such as en-US or en-GB.
// ----------------------------------------------
// <p>{{ caseSpecificKey | uppercase | translate: { case: "UPPERCASE" } }}</p>
// <p>{{ caseSpecificKey | lowercase | translate: { case: "lowercase" } }}</p>
// <p>{{ caseSpecificKey | titlecase | translate: { case: "Titlecase" } }}</p>

// "CASESPECIFICKEY": "DER ÜBERSETZUNGSSCHLÜSSEL IST ALS {case} DEFINIERT.",
// "casespecifickey": "der Übersetzungsschlüssel ist als {case} definiert.",
// "Casespecifickey": "Der Übersetzungsschlüssel ist als {case} definiert."
