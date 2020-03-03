import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrianaPage } from './triana.page';

const routes: Routes = [
  {
    path: '',
    component: TrianaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrianaPageRoutingModule {}
