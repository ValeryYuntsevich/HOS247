import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'safeHtml',
  pure: false,
})
export class SafeHtmlPipe implements PipeTransform {
  public constructor(
    private readonly translate: TranslateService,
    private readonly sanitized: DomSanitizer,
  ) {}

  public transform(value: string): string {
    const safeHtml = this.sanitized.bypassSecurityTrustHtml(value) as any;
    return this.translate.instant(
      safeHtml.changingThisBreaksApplicationSecurity,
    );
  }
}
