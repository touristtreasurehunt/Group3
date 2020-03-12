import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndGamePage } from './end-game.page';

describe('EndGamePage', () => {
  let component: EndGamePage;
  let fixture: ComponentFixture<EndGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
