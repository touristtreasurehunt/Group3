import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ApiService } from './api.service';
import { Places } from '../models/places.interface';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private building : Places = {
    name: '',
    info: '',
    location: new Map,
    images: new Array
  };

  constructor(private angularFirestore: AngularFirestore, private api: ApiService) { 
  }

  public getCollection(collection) {
    return this.angularFirestore.collection(collection).snapshotChanges();
  }

  public getListPlaces() {
    let places = []; 
    this.getCollection("places").subscribe((query) => {
      query.forEach((datasPlaces: any) => {
        places.push(datasPlaces.payload.doc.id);
      })      
    });
    return places;
  }

  public getListBuildings(place) {
    var arrayBuildings = [];
    this.getCollection(place).subscribe((query) => {
      query.forEach((datasPlaces: any) => {
        arrayBuildings.push({
          id: datasPlaces.payload.doc.id,
          name: datasPlaces.payload.doc.data().name,
          img: datasPlaces.payload.doc.data().images[0]
        });
      })
    });
    return arrayBuildings;
  }

  public fillObject(place, idBuilding) {
    this.getCollection(place).subscribe((query) => {
      query.forEach((datasPlaces: any) => {
        if(datasPlaces.payload.doc.id == idBuilding) {
          this.building.info = datasPlaces.payload.doc.data().information;
          this.building.name = datasPlaces.payload.doc.data().name;
          let arrayImg = [];
          datasPlaces.payload.doc.data().images.forEach(image => {
            arrayImg.push(image);
          });
          this.building.images = arrayImg;
          let location = new Map();
          location.set('lon', datasPlaces.payload.doc.data().location['lon']);
          location.set('lan', datasPlaces.payload.doc.data().location['lat']);
          this.building.location = location;
        }
      })
    });
    this.api.building = this.building;
  }

}
