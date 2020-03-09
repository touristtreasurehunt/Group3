import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';
import { PlacesI } from '../models/places.interface';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private placesCollection: AngularFirestoreCollection<PlacesI>;
  private places: Observable<PlacesI[]>;
  constructor(db: AngularFirestore) { 
    this.placesCollection = db.collection<PlacesI>('places');
    this.places = this.placesCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      }
    ));
  }

  getPlaces() {
    return this.places;
  }

  getPlace(id: string) {
    return this.placesCollection.doc<PlacesI>(id).valueChanges();
  }
}
