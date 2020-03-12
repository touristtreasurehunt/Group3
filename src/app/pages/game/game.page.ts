import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // tslint:disable-next-line: only-arrow-functions
    setTimeout(function() {
      const curtain = $('#curtain');
      curtain.addClass('active');
    }, 50);
    // tslint:disable-next-line: only-arrow-functions
    setTimeout(function() {
      const redondo2 = $('.redondo2');
      const redondo = $('.redondo');
      const bg = $('#bg');
      redondo2.addClass('bounceIn');
      redondo.addClass('bounceIn');
      bg.addClass('bounceIn')
    }, 1500);
  }

}
