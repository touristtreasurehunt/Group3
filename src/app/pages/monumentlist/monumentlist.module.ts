import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonumentlistPageRoutingModule } from './monumentlist-routing.module';

import { MonumentlistPage } from './monumentlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonumentlistPageRoutingModule
  ],
  declarations: [MonumentlistPage]
})
export class MonumentlistPageModule {}
