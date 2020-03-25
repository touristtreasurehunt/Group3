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
    location: {Lat: 0, Lon: 0},
    idsCss: new Array,
    questions: [{
      question: '',
      incorrect: [''],
      correct: ''
    }]
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
          img: datasPlaces.payload.doc.data().image
        });
      })
    });
    return arrayBuildings;
  }

  public fillObjects(place) {
    let listBuildings : any = [];
    this.getCollection(place).subscribe((query) => {
      query.forEach((datasPlaces: any) => {
        let building : Places = {
          name: '',
          info: '',
          location: {Lat: 0, Lon: 0},
          idsCss: new Array,
          questions: [{
            question: '',
            incorrect: [''],
            correct: ''
          }]
        };
        building.info = datasPlaces.payload.doc.data().information;
        building.name = datasPlaces.payload.doc.data().name;
        let idsSlide = [];
        datasPlaces.payload.doc.data().slidesId.forEach(idCss => {
          idsSlide.push(idCss);
        });
        building.idsCss = idsSlide;
        building.location = {
          Lat: datasPlaces.payload.doc.data().location['lat'],
          Lon: datasPlaces.payload.doc.data().location['lon']
        };
        let questions : [{
          question: string, 
          incorrect: Array<string>,
          correct: string
        }] = [{
          question: datasPlaces.payload.doc.data().question1.question,
          incorrect: datasPlaces.payload.doc.data().question1.incorrect,
          correct: datasPlaces.payload.doc.data().question1.correct
        }]
        questions.push({
          question: datasPlaces.payload.doc.data().question2.question,
          incorrect: datasPlaces.payload.doc.data().question2.incorrect,
          correct: datasPlaces.payload.doc.data().question2.correct
        });
        questions.push({
          question: datasPlaces.payload.doc.data().question3.question,
          incorrect: datasPlaces.payload.doc.data().question3.incorrect,
          correct: datasPlaces.payload.doc.data().question3.correct
        });
        building.questions = questions;
        listBuildings.push({
          id: datasPlaces.payload.doc.id,
          building: building
        });
      })
    });
    this.api.listBuilding = listBuildings;
  }

  public fillObject(place, idBuilding) {
    this.getCollection(place).subscribe((query) => {
      query.forEach((datasPlaces: any) => {
        if(datasPlaces.payload.doc.id == idBuilding) {
          this.building.info = datasPlaces.payload.doc.data().information;
          this.building.name = datasPlaces.payload.doc.data().name;
          let idsSlide = [];
          datasPlaces.payload.doc.data().slidesId.forEach(idCss => {
            idsSlide.push(idCss);
          });
          this.building.idsCss = idsSlide;
          this.building.location = {
            Lat: datasPlaces.payload.doc.data().location['lat'],
            Lon: datasPlaces.payload.doc.data().location['lon']
          };
        }
      })
    });
    this.api.building = this.building;
  }

}
