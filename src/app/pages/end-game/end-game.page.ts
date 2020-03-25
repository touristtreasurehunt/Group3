import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.page.html',
  styleUrls: ['./end-game.page.scss'],
})
export class EndGamePage implements OnInit {

  private result: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.result = "" + this.api.corrects + "/" + this.api.lastQuestion;
  }

}
