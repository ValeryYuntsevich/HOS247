import { Routes } from '@angular/router';

import { Features, InternalUrls } from '@core/models';

import { DashboardComponent } from '@features/secure/dashboard/pages/dashboard.component';

export const SECURE_ROUTES: Routes = [
  {
    path: InternalUrls.Base,
    redirectTo: Features.Dashboard.toLocaleLowerCase(),
    pathMatch: 'full',
  },
  {
    path: Features.Dashboard.toLocaleLowerCase(),
    component: DashboardComponent,
  },
  // { path: '', redirectTo: 'overview', pathMatch: 'full' },
  //   { path: 'items', component: ItemsComponent },
  //   { path: 'overview', component: OverviewComponent },
  //   { path: 'profile', component: ProfileComponent },
  //   { path: 'reports', component: ReportsComponent },
  //   { path: 'recommendations', component: RecommendationsComponent },
  //   { path: 'score-simulator', component: ScoreSimulatorComponent },
  //   { path: 'payment-method', component: PaymentMethodComponent },
  //   { path: 'lock-account', component: LockAccountComponent }
];
