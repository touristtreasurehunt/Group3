import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

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

  public getBuildings(place) {
    let buildings = [];
    this.getCollection(place).subscribe((query) => {
      query.forEach((datasPlaces: any) => {
        buildings.push(datasPlaces.payload.doc.id);
      })
    });

    return buildings;
  }

}
