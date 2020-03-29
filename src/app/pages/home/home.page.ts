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

  ionViewWillEnter() {
    setTimeout(function() {
      const curtain = $('#homeh3');
      curtain.addClass('bounceInDown');
    }, 50);
    setTimeout(function() {
      const curtain = $('#homeh1');
      curtain.addClass('bounceInDown');
    }, 200);
    setTimeout(function() {
      const curtain = $('#homeitem');
      curtain.addClass('bounceInLeft');
    }, 300);
    setTimeout(function() {
      const curtain = $('#homebutton');
      curtain.addClass('bounceInRight');
    }, 500);
  }

}
