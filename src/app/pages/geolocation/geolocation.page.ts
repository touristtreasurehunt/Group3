import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";
import { Map, tileLayer, marker, LatLng } from "leaflet";
import "leaflet-routing-machine";

@Component({
  selector: "app-geolocation",
  templateUrl: "./geolocation.page.html",
  styleUrls: ["./geolocation.page.scss"]
})
export class GeolocationPage implements OnInit {
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

  constructor() {}

  ngOnInit() {}

  // Tells you the dinstance from your point to the marker
  // This is bullshit and we don't need it anymore

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

  ionMarker() {
    let Lat = Number(this.markerLocation[0].Lat);
    let Lon = Number(this.markerLocation[0].Lon);

    L.marker([Lat, Lon], { draggable: false })
      .addTo(this.map)
      .bindPopup("This is a location you need to find");
  }

  // This controls the starting View for the geolocation
  ionViewDidEnter() {
    let Lat = Number(this.markerLocation[0].Lat);
    let Lon = Number(this.markerLocation[0].Lon);
    this.map = L.map("mapLeaflet", {
      center: [Lat, Lon],
      zoom: 15,
      zoomControl: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      this.map
    );
  }

  ionMakeRoute() {
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
