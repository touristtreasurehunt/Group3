import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-triana',
  templateUrl: './triana.page.html',
  styleUrls: ['./triana.page.scss'],
})
export class TrianaPage implements OnInit {

  slides: {titulo: string, cssId: string, cssClass: string, link: string}[] = [
    {
      titulo: 'Triana',
      cssId: 'slide-card',
      cssClass: 'slide-1',
      link: '/triana'
    }, {
      titulo: 'Playa de Patalavaca',
      cssId: 'slide-card',
      cssClass: 'slide-2',
      link: '/triana'
    }, {
      titulo: 'Alberta',
      cssId: 'slide-card',
      cssClass: 'slide-3',
      link: '/triana'
    },
  ];

  sliderConfig = {
    autoplay: true,
    speed: 500
  };

  constructor() { }

  ngOnInit() {
  }

  TransitionPagePanUp(ev) {
    const e = $('#ionBody2');
    e.addClass('bounceOutUp');
    console.log('ev.center');
  }

  openPopUp() {
    const ionBody = $('#ionBody');
    const overlay = $('#overlay');
    const popup = $('#popup');
    overlay.addClass('active');
    popup.addClass('active');
    // console.log('asdasdsadsadsadsadsadasdsa');
    ionBody.addClass('prueba');
  }
}
