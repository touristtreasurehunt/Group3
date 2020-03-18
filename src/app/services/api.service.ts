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

  constructor() { }
}
