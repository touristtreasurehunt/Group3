import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ApiService } from 'src/app/services/api.service';
import { Places } from 'src/app/models/places.interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  private question: {
    question: string,
    incorrect: Array<string>,
    correct: string
  };

  private datas: {
    corrects: number,
    incorrects: number
  };

  private answers = [];

  private isLastQuestion : boolean;

  constructor(private api: ApiService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.question = this.api.building.questions[this.api.lastQuestion];
    this.datas = {
      corrects : this.api.corrects,
      incorrects: this.api.incorrects 
    };
    if (this.api.lastQuestion == 2) {
      this.isLastQuestion = true;
    } else {
      this.isLastQuestion = false;
    }
    this.answers = this.getAnswers(this.question.correct, this.question.incorrect);
  }

  goEndGame(isCorrect) {
    if (isCorrect) {
      this.api.corrects = this.api.corrects + 1;
    } else {
      this.api.incorrects = this.api.incorrects + 1;
    }
    console.log("Adios");
    
    this.router.navigate(['/end-game']);
  }

  nextQuestion(isCorrect) {
    if (isCorrect) {
      this.api.corrects = this.api.corrects + 1;
    } else {
      this.api.incorrects = this.api.incorrects + 1;
    }
    this.api.lastQuestion = this.api.lastQuestion + 1;
    console.log("Hola");
    this.router.navigateByUrl('/game', { skipLocationChange:true }).then(() => {
      this.router.navigate([decodeURI(this.location.path())]);
    });
  }

  getAnswers(correctAnswer, incorrectsAnswers) {
    let random = Math.floor(Math.random() * 4),
        answersMixed = [],
        count = 0;
    for (let i = 0; i < 4; i++) {
      if (answersMixed.length == random) {
        answersMixed.push({
          answer: correctAnswer,
          correct: true
        });
      } else {
        answersMixed.push({
          answer: incorrectsAnswers[count],
          correct: false
        });
        count++;
      }
    }
    return answersMixed;
  }

  ionViewWillEnter() {
    setTimeout(function() {
      const curtain = $('#curtain');
      curtain.addClass('active');
    }, 50);
    setTimeout(function() {
      const bg = $('#bg');
      bg.addClass('bounceIn');
    }, 1500);
    setTimeout(function() {
      const redondo = $('.redondo');
      redondo.addClass('bounceInDown');
    }, 1600);
    setTimeout(function() {
      const redondo2 = $('.redondo2');
      const svg2 = $('#svg2');
      const svg = $('#svg');
      redondo2.addClass('bounceInDown');
      svg2.addClass('bounceInLeft');
      svg.addClass('bounceInRight');
    }, 1750);
    setTimeout(function() {
      const button = $('.buttonOption');
      button.addClass('fadeIn');
    }, 3000);
    setTimeout(function() {
      const button = $('.container');
      button.addClass('fadeIn');
    }, 3500);
  }
}
