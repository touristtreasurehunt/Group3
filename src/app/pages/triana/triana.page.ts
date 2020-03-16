import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import * as L from "leaflet";
import { Map, tileLayer, marker, LatLng } from "leaflet";
import "leaflet-routing-machine";
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: "app-triana",
  templateUrl: "./triana.page.html",
  styleUrls: ["./triana.page.scss"]
})
export class TrianaPage implements OnInit {
  map: any;
  start: any;
  newMarker: any;

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

  slides: {
    titulo: string;
    cssId: string;
    cssClass: string;
    link: string;
  }[] = [
    {
      titulo: "Triana",
      cssId: "slide-1",
      cssClass: "slide-card",
      link: "/triana"
    },
    {
      titulo: "Playa de Patalavaca",
      cssId: "slide-2",
      cssClass: "slide-card",
      link: "/triana"
    },
    {
      titulo: "Alberta",
      cssId: "slide-3",
      cssClass: "slide-card",
      link: "/triana"
    }
  ];

  sliderConfig = {
    autoplay: true,
    speed: 500
  };

  constructor(private api: ApiService) {}

  ngOnInit() {
    console.log(this.api.building);
  }

  TransitionPagePanUp(ev) {
    const e = $("#ionBody2");
    e.addClass("bounceOutUp");
    console.log("ev.center");
  }

  openPopUp() {
    const ionBody = $("#ionBody");
    const overlay = $("#overlay");
    const popup = $("#popup");
    overlay.addClass("active");
    popup.addClass("active");
    // console.log('asdasdsadsadsadsadsadasdsa');
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
    this.map
      .locate({ setView: false, watch: true, maximumAge: 5 })
      .on("locationfound", (e: any) => {
        if (this.newMarker != undefined) {
          this.newMarker.setLatLng(e.latlng);
        } else {
          this.newMarker = marker([e.latitude, e.longitude], {
            draggable: false
          }).addTo(this.map);
        }

        this.myLocation[0].Lat = e.latitude;
        this.myLocation[0].Lon = e.longitude;
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
}
