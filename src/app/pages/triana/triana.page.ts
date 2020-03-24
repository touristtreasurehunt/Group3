import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import * as L from "leaflet";
import { Map, tileLayer, marker, LatLng } from "leaflet";
import "leaflet-routing-machine";
import { ApiService } from 'src/app/services/api.service';
import { Places } from 'src/app/models/places.interface';
import { Router } from '@angular/router';
@Component({
  selector: "app-triana",
  templateUrl: "./triana.page.html",
  styleUrls: ["./triana.page.scss"]
})
export class TrianaPage implements OnInit {
  map: any;
  start: any;
  newMarker: any;
  building: Places;
  slides: any;

  myLocation: { Lat: Number; Lon: Number }[] = [
    {
      Lat: 0,
      Lon: 0
    }
  ];
  markerLocation: { Lat: Number; Lon: Number }[] = [
    {
      Lat: 28.1300459,
      Lon: -15.4477534
    }
  ];

  sliderConfig = {
    autoplay: true,
    speed: 500
  };

  constructor(private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.building = this.getBuilding();
    this.slides = this.building.idsCss
    this.markerLocation = [];
    this.markerLocation.push({
      Lat: this.building.location.Lat,
      Lon: this.building.location.Lon
    });
  }

  getBuilding() {
    let foobar: any;
    this.api.listBuilding.forEach((element) => {
      if (this.api.idBuilding == element.id) {
        this.api.building = element.building;
        foobar = element.building;
      }
    });
    return foobar;
  }

  TransitionPagePanUp(ev) {
    const e = $("#ionBody2");
    e.addClass("bounceOutUp");
  }

  openPopUp() {
    const ionBody = $("#ionBody");
    const overlay = $("#overlay");
    const popup = $("#popup");
    overlay.addClass("active");
    popup.addClass("active");
    ionBody.addClass("prueba");
  }

  closePopUp() {
    const ionBody = $("#ionBody");
    const overlay = $("#overlay");
    const popup = $("#popup");
    overlay.removeClass("active");
    popup.removeClass("active");
    ionBody.removeClass("prueba");
    console.log("dasdasda");
  }

// Tracks your location
locatePosition() {
  var me = L.icon({
    iconUrl: '../../../assets/img/capture.png',
    iconSize:     [115, 105], 
    shadowSize:   [50, 64],
    // // iconAnchor:   [0, 94], 
    popupAnchor:  [0, -20] 
});

  this.map.locate({ setView: true, watch: true, maxZoom: 16 }).on("locationfound", (e: any) => {
    console.log(this.newMarker);
    if(this.newMarker != undefined){
      this.newMarker.setLatLng(e.latlng);
    } else {
      this.newMarker = marker([e.latitude, e.longitude], {
         icon:
         me,
         draggable:
           false
      }).addTo(this.map);
    }
    this.newMarker.bindPopup("You are located here!").openPopup();
  });
}


  ionViewDidEnter() {
    let Lat2 = Number(this.markerLocation[0].Lat);
    let Lon2 = Number(this.markerLocation[0].Lon);

    this.map = L.map("mapLeaflet", {
      center: [Lat2, Lon2],
      zoom: 15,
      zoomControl: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      this.map
    );

    L.marker([Lat2, Lon2], { draggable: false })
      .addTo(this.map)
      .bindPopup("This is a location you need to find");
  }

  async ionMakeRoute() {
    let Lat1 = Number(this.myLocation[0].Lat);
    let Lon1 = Number(this.myLocation[0].Lon);
    let Lat2 = Number(this.markerLocation[0].Lat);
    let Lon2 = Number(this.markerLocation[0].Lon);

    L.Routing.control({
      waypoints: [L.latLng(Lat1, Lon1), L.latLng(Lat2, Lon2)],
      routeWhileDragging: true
    }).addTo(this.map);
  }

  goGame() {
    this.api.lastQuestion = 0;
    this.api.incorrects = 0;
    this.api.corrects = 0;
    this.router.navigate(['/game']);
  }
}
