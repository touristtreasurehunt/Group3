import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ConnectionService } from 'src/app/services/connection.service';
import { Places } from 'src/app/models/places.interface';

@Component({
  selector: 'app-monumentlist',
  templateUrl: './monumentlist.page.html',
  styleUrls: ['./monumentlist.page.scss'],
})
export class MonumentlistPage implements OnInit {

  private place: string; 

  arrayBuildings: any = [{
    id: "",
    name: "",
    img: ""
  }];

  constructor(private api: ApiService, private connectionService: ConnectionService) { }

  ngOnInit() {
    this.getBuildings();
  }

  getBuildings() {
    console.log(this.api.place);
    
    this.connectionService.getCollection(this.api.place).subscribe((query) => {
      this.arrayBuildings = [];
      query.forEach((datasPlaces: any) => {
        this.arrayBuildings.push({
          id: datasPlaces.payload.doc.id,
          name: datasPlaces.payload.doc.data().name,
          img: datasPlaces.payload.doc.data().images[0]
        });
        console.log(datasPlaces.payload.doc.data().name);
      })
    });
  }

}
