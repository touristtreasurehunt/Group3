import { Component, OnInit } from '@angular/core';
import { PlacesI } from "../../models/places.interface";
import { ConnectionService } from "../../services/connection.service";

@Component({
  selector: 'app-canary-h',
  templateUrl: './canary-h.page.html',
  styleUrls: ['./canary-h.page.scss'],
})
export class CanaryHPage implements OnInit {


  places: PlacesI[];

  slides: {titulo: string, link: string}[] =[
    {
      titulo: 'Triana',
      link: '/monumentlist'
    }, {
      titulo: 'Vegueta',
      link: '/triana'
    }, {
      titulo: 'Alberta',
      link: '/triana'
    }, {
      titulo: 'Roque Nublo',

      link: '/triana'
    }
  ];

  sliderConfig ={
    spaceBetween: 0,
    // centeredSlides: true,
    slidesPerView: 1.6,
    autoplay: false,
  }

  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
    // this.connectionService.getPlaces().subscribe(res => {
    //   console.log('Lugares', res);
    // });
    // this.connectionService.getPlaces().subscribe(res => this.places = res);
  }

}
