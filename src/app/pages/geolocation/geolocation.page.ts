import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";
import { Map, tileLayer, marker, LatLng } from "leaflet";

@Component({
  selector: "app-geolocation",
  templateUrl: "./geolocation.page.html",
  styleUrls: ["./geolocation.page.scss"]
})
export class GeolocationPage implements OnInit {
  map: any;

  constructor() {}

  ngOnInit() {}

  locatePosition() {
    this.map.locate({ setView: true }).on("locationfound", (e: any) => {
      let newMarker = marker([e.latitude, e.longitude], {
        draggable: false
      }).addTo(this.map);
      newMarker.bindPopup("You are located here!").openPopup();
    });
  }

  ionViewDidEnter() {
    this.map = L.map("mapLeaflet", {
      center: [28.1281521, -15.4489039],
      zoom: 15,
      zoomControl: true
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      this.map
    );
    console.log(L.LatLng);
    L.marker([28.127567, -15.4469402], { draggable: false }).addTo(this.map);
  }
}
