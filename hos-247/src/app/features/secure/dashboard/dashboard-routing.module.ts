import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Features, InternalUrls } from '@core/models';

import { DashboardComponent } from './pages/dashboard.component';

const routes: Routes = [
  {
    path: InternalUrls.Base,
    component: DashboardComponent,
    data: {
      title: Features.Dashboard,
      description: 'Description Meta Tag Content',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
