import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanaryHPage } from './canary-h.page';

const routes: Routes = [
  {
    path: '',
    component: CanaryHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanaryHPageRoutingModule {}
