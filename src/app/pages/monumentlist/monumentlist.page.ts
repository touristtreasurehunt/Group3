import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ConnectionService } from 'src/app/services/connection.service';
import { Router } from '@angular/router';

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

  constructor(private api: ApiService, private connectionService: ConnectionService, private router: Router) { }

  ngOnInit() {
    this.arrayBuildings = this.connectionService.getListBuildings(this.api.idPlace);
  }

  goBuilding(idBuilding) {
    this.api.idBuilding = idBuilding;
    this.router.navigate(['/triana']);
  }

}
