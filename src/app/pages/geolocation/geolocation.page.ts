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
  start: any;

  myLocation: { Lat: Number; Lon: Number }[] = [
    {
      Lat: 0,
      Lon: 0
    }
  ];
  markerLocation: { Lat: Number; Lon: Number }[] = [
    {
      Lat: 0,
      Lon: 0
    }
  ];

  constructor() {}

  ngOnInit() {}

  amIClose() {
    let displayContent = document.querySelector("#display_content");
    let lat1 = this.myLocation[0].Lat;
    let lon1 = this.myLocation[0].Lon;
    let lat2 = this.markerLocation[0].Lat;
    let lon2 = this.markerLocation[0].Lon;

    var p = 0.017453292519943295; // Math.PI / 180
    var c = Math.cos;
    var a =
      0.5 -
      c((+lat2 - +lat1) * p) / 2 +
      (c(+lat1 * p) * c(+lat2 * p) * (1 - c((+lon2 - +lon1) * p))) / 2;
    let dinstance = 12742 * Math.asin(Math.sqrt(a));
    let dinstanceToString = dinstance.toString();
    let dinstanceFinal = Number(dinstanceToString.slice(0, 5));

    console.log(dinstanceFinal);

    if (dinstanceFinal < 0.05) {
      displayContent.innerHTML = dinstanceFinal + "Km you are close";
    } else {
      displayContent.innerHTML =
        dinstanceFinal + "Km you are not close at all!";
    }
  }

  locatePosition() {
    this.map
      .locate({ setView: false, watch: true })
      .on("locationfound", (e: any) => {
        let newMarker = marker([e.latitude, e.longitude], {
          draggable: false
        }).addTo(this.map);
        newMarker.bindPopup("You are located here!").openPopup();
        this.myLocation[0].Lat = e.latitude;
        this.myLocation[0].Lon = e.longitude;
      });
  }

  ionViewDidEnter() {
    let Lat = 28.1235459;
    let Lon = -15.4357534;
    this.markerLocation[0].Lat = Lat;
    this.markerLocation[0].Lon = Lon;
    this.map = L.map("mapLeaflet", {
      center: [Lat, Lon],
      zoom: 15,
      zoomControl: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      this.map
    );
    L.marker([Lat, Lon], { draggable: false })
      .addTo(this.map)
      .bindPopup("This is a location you need to find");
  }
}
