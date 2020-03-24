import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Places } from '../models/places.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  idPlace: string;
  idBuilding: string;
  building: Places;
  listBuilding: [{
    id: string,
    building: Places
  }]
  lastQuestion: number;
  incorrects: number;
  corrects: number;

  constructor() { }
}
