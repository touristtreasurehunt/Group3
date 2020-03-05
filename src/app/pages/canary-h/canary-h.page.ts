import { Component, OnInit } from '@angular/core';
import { CssSelector } from '@angular/compiler';
import { faDeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-canary-h',
  templateUrl: './canary-h.page.html',
  styleUrls: ['./canary-h.page.scss'],
})
export class CanaryHPage implements OnInit {

  slides: {titulo: string, cssId: string, link: string}[] =[
    {
      titulo: 'Triana',
      cssId: 'slideCard',
      link: '/triana'
    }, {
      titulo: 'Vegueta',
      cssId: 'slideCard',
      link: '/triana'
    }, {
      titulo: 'Alberta',
      cssId: 'slideCard',
      link: '/triana'
    }, {
      titulo: 'Roque Nublo',
      cssId: 'slideCard',
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
