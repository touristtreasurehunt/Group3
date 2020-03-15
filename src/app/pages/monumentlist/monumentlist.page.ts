import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-monumentlist',
  templateUrl: './monumentlist.page.html',
  styleUrls: ['./monumentlist.page.scss'],
})
export class MonumentlistPage implements OnInit {

  private place: string; 

  arrayBuildings: any = [];

  constructor(private api: ApiService, private connectionService: ConnectionService) { }

  ngOnInit() {
    this.getBuildings();
  }

  getBuildings() {
    this.connectionService.getCollection("places").subscribe((query) => {
      this.arrayBuildings = [];
      query.forEach((datasPlaces: any) => {
        if(datasPlaces.payload.doc.id == this.api.place) {
          this.arrayBuildings = datasPlaces.payload.doc.data().buildings;
        }
      })      
    });
  }

}
