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
      cssId: 'slide-1',
      cssClass: 'slide-card',
      link: '/triana'
    }, {
      titulo: 'Playa de Patalavaca',
      cssId: 'slide-2',
      cssClass: 'slide-card',
      link: '/triana'
    }, {
      titulo: 'Alberta',
      cssId: 'slide-3',
      cssClass: 'slide-card',
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

  closePopUp() {
    const ionBody = $('#ionBody');
    const overlay = $('#overlay');
    const popup = $('#popup');
    overlay.removeClass('active');
    popup.removeClass('active');
    ionBody.removeClass('prueba');
    console.log('dasdasda');
  }
}
