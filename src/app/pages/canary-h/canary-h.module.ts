import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanaryHPageRoutingModule } from './canary-h-routing.module';

import { CanaryHPage } from './canary-h.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanaryHPageRoutingModule
  ],
  declarations: [CanaryHPage]
})
export class CanaryHPageModule {}
