import { Component, OnInit } from '@angular/core';
import { Places } from "../../models/places.interface";
import { ConnectionService } from "../../services/connection.service";
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-canary-h',
  templateUrl: './canary-h.page.html',
  styleUrls: ['./canary-h.page.scss'],
})
export class CanaryHPage implements OnInit {


  arrayPlaces: any = [{
    id: "",
    data: {} as Places
  }];

  sliderConfig ={
    spaceBetween: 0,
    // centeredSlides: true,
    slidesPerView: 1.6,
    autoplay: false,
  }

  constructor(private connectionService: ConnectionService, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.getListPlaces();
  }

  getListPlaces() {
    this.connectionService.getCollection("places").subscribe((query) => {
      this.arrayPlaces = [];
      query.forEach((datasPlaces: any) => {
        this.arrayPlaces.push({
          id: datasPlaces.payload.doc.id,
          data: datasPlaces.payload.doc.data()
        });
      })      
    });
  }

  goReceiber(idPlace) {
    this.api.place = idPlace;
    this.router.navigate(['/monumentlist']);
  }

}
