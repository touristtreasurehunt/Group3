import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private angularFirestore: AngularFirestore) { 
  }

  public getCollection(collection) {
    return this.angularFirestore.collection(collection).snapshotChanges();
  }

}
