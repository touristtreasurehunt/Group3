import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-monumentlist',
  templateUrl: './monumentlist.page.html',
  styleUrls: ['./monumentlist.page.scss'],
})
export class MonumentlistPage implements OnInit {

  private place: string; 

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.$getObjectSource.subscribe(data => console.log(data));
  }

}
