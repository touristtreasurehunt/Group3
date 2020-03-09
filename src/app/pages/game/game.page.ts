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
    setTimeout(function() {
      const curtain = $('#curtain');
      curtain.addClass('active');
    }, 50);
    setTimeout(function() {
      const bg = $('#bg');
      bg.addClass('bounceIn');
    }, 1500);
    setTimeout(function() {
      const redondo = $('.redondo');
      redondo.addClass('bounceInDown');
    }, 1600);
    setTimeout(function() {
      const redondo2 = $('.redondo2');
      const svg2 = $('#svg2');
      const svg = $('#svg');
      redondo2.addClass('bounceInDown');
      svg2.addClass('bounceInLeft');
      svg.addClass('bounceInRight');
    }, 1750);
    setTimeout(function() {
      const button = $('.buttonOption');
      button.addClass('fadeIn');
    }, 3000);
    setTimeout(function() {
      const button = $('.container');
      button.addClass('fadeIn');
    }, 3500);
  }
}
