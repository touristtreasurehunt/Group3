import { Component, OnInit } from '@angular/core';
import { CssSelector } from '@angular/compiler';
import { faDeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-canary-h',
  templateUrl: './canary-h.page.html',
  styleUrls: ['./canary-h.page.scss'],
})
export class CanaryHPage implements OnInit {

  slides: {titulo: string, cssId: string, cssClass: string, link: string}[] =[
    {
      titulo: 'Triana',
      cssId: 'slideCard',
      cssClass: 'slide-1',
      link: '/triana'
    }, {
      titulo: 'Vegueta',
      cssId: 'slideCard',
      cssClass: 'slide-2',
      link: '/triana'
    }, {
      titulo: 'Alberta',
      cssId: 'slideCard',
      cssClass: 'slide-3',
      link: '/triana'
    }, {
      titulo: 'Roque Nublo',
      cssId: 'slideCard',
      cssClass: 'slide-4',
      link: '/triana'
    }
  ];

  sliderConfig ={
    spaceBetween: 0,
    // centeredSlides: true,
    slidesPerView: 1.6,
    autoplay: false,
  }

  constructor() { }

  ngOnInit() {
  }

}
