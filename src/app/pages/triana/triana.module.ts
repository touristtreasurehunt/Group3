import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrianaPageRoutingModule } from './triana-routing.module';

import { TrianaPage } from './triana.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrianaPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [TrianaPage]
})
export class TrianaPageModule {}
