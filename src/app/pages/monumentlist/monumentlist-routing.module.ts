import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonumentlistPage } from './monumentlist.page';

const routes: Routes = [
  {
    path: '',
    component: MonumentlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonumentlistPageRoutingModule {}
