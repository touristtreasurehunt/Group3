import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndGamePageRoutingModule } from './end-game-routing.module';

import { EndGamePage } from './end-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndGamePageRoutingModule
  ],
  declarations: [EndGamePage]
})
export class EndGamePageModule {}
