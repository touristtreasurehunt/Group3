import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  Testing(){
    var name = $("#txtName").val();
    alert(name);
  }

}
