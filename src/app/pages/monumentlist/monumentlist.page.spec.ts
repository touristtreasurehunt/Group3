import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonumentlistPage } from './monumentlist.page';

describe('MonumentlistPage', () => {
  let component: MonumentlistPage;
  let fixture: ComponentFixture<MonumentlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonumentlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonumentlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
