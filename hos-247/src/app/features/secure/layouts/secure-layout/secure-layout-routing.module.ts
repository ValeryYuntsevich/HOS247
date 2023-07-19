import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternalUrls } from '@core/models';

import { SECURE_ROUTES } from './configs';

import { SecureLayoutComponent } from './components/secure-layout.component';
import { AuthGuard } from '@core/helpers';

const routes: Routes = [
  {
    path: InternalUrls.Base,
    canActivateChild: [AuthGuard],
    component: SecureLayoutComponent,
    children: SECURE_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecureLayoutRoutingModule {}
